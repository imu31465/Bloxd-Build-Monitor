# Changed — Bundle Modifications Report (Part 046 / 141)

- **Updated at**: `2026-11-25T08:36 JST`
- **Part**: `46 / 141` (**388** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 045](part-045.md) · [Part 047 →](part-047.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/248.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/248.js` (692 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6)

#### 372. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1967` → after: `L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1967) · [Before (L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L1967)

```diff
-           const BB = this.Nz.zW.uIB(this.eId);
+           const tt = this.ql.mJ.xet(this.eId);
```

#### 373. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1969` → after: `L1969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1969) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L1969)

```diff
-         } else "meshKind" === BB || "meshOpts" === BB ? (this[BB] = IB, this.queueMeshRebuild()) : "name" === BB && "" !== IB ? this.updateHidingMeshMgr() : "leaderboardTop" === BB && (this.leaderboardTop = IB, VI.l.Gq(`leaderboardTop|${this.eId}`, IB))
+         } else "meshKind" === tt || "meshOpts" === tt ? (this[tt] = et, this.queueMeshRebuild()) : "name" === tt && "" !== et ? this.updateHidingMeshMgr() : "leaderboardTop" === tt && (this.leaderboardTop = et, ne.j.sw(`leaderboardTop|${this.eId}`, et))
```

#### 374. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1972) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L1972)

```diff
-         this.WN = !0, this.Nz.zW.deleteEntity(this.eId), VI.l.unsubscribe(this.canSeeSub), VI.l.unsubscribe(this.canAttackSub), VI.l.unsubscribe(this.interactableSub), VI.l.unsubscribe(this.overlayColourSub), VI.l.unsubscribe(this.opacitySub), VI.l.unsubscribe(this.zIndexSub), VI … [truncated]
+         this.df = !0, this.ql.mJ.deleteEntity(this.eId), ne.j.unsubscribe(this.canSeeSub), ne.j.unsubscribe(this.canAttackSub), ne.j.unsubscribe(this.interactableSub), ne.j.unsubscribe(this.overlayColourSub), ne.j.unsubscribe(this.opacitySub), ne.j.unsubscribe(this.zIndexSub), ne … [truncated]
```

#### 375. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L1977)

```diff
-           canSee: null !== (BB = null === (IB = this.Nz.Tm[this.Nz.Jm][this.eId]) || void 0 === IB ? void 0 : IB.canSee) && void 0 !== BB && BB,
+           canSee: null !== (tt = null === (et = this.ql.dL[this.ql.lL][this.eId]) || void 0 === et ? void 0 : et.canSee) && void 0 !== tt && tt,
```

#### 376. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1986` → after: `L1986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1986) · [Before (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L1986)

```diff
-           Nz: TB
+           ql: Ot
```

#### 377. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1988` → after: `L1988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1988) · [Before (L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L1988)

```diff
-           zW: JB
+           mJ: qt
```

#### 378. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1990-L1991` → after: `L1990-L1991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1990-L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1990-L1991) · [Before (L1990-L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L1990-L1991)

```diff
-         if ((0, WZ.he)(this.previousHidingMeshManagerState, oB)) return;
-         if (this.previousHidingMeshManagerState = oB, JB.Qr(this.eId, "hidingMeshManager"), null === (BB = TB.Tm[TB.Jm][this.eId]) || void 0 === BB || !BB.canSee) return;
+         if ((0, bV.te)(this.previousHidingMeshManagerState, Dt)) return;
+         if (this.previousHidingMeshManagerState = Dt, qt.ZZ(this.eId, "hidingMeshManager"), null === (tt = Ot.dL[Ot.lL][this.eId]) || void 0 === tt || !tt.canSee) return;
```

#### 379. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1998` → after: `L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1998) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L1998)

```diff
-         "Person" === vB && (kB.textures = (0, QZ.m)(kB.textures)), kB.eId = this.eId, JB.xR(this.eId, "hidingMeshManager", {
+         "Person" === dt && (jt.textures = (0, uV.v)(jt.textures)), jt.eId = this.eId, qt.RZ(this.eId, "hidingMeshManager", {
```

#### 380. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2006` → after: `L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2006) · [Before (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2006)

```diff
-                 const IB = TB.Ig.kR;
+                 const et = Ot.Bf.xI;
```

#### 381. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2008-L2009` → after: `L2008-L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2008-L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2008-L2009) · [Before (L2008-L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2008-L2009)

```diff
-                 const ZB = "Person" === vB && (null === (JB = (0, QZ.h)("head", null === (GB = kB.textures) || void 0 === GB ? void 0 : GB.head)) || void 0 === JB || null === (oB = JB.personModel) || void 0 === oB ? void 0 : oB.fullBody);
-                 return void IB.setPickable(BB, (0, OZ.f)(this.eId) && !ZB)
+                 const Vt = "Person" === dt && (null === (qt = (0, uV.n)("head", null === (mt = jt.textures) || void 0 === mt ? void 0 : mt.head)) || void 0 === qt || null === (Dt = qt.personModel) || void 0 === Dt ? void 0 : Dt.fullBody);
+                 return void et.setPickable(tt, (0, vV.k)(this.eId) && !Vt)
```

#### 382. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2012-L2013` → after: `L2012-L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2012-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2012-L2013) · [Before (L2012-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2012-L2013)

```diff
-               for (const vB of [cB, ...cB.getChildMeshes(!1)]) void 0 === vB.tg || vB.name.startsWith("Cape|") || (vB.tg = (0, OZ.f)(this.eId), vB.metadata ??= new TB.Ig.bg, vB.metadata.eId = this.eId);
-               this.updateOpacity(null !== (IB = null === (ZB = TB.Tm[TB.Jm][this.eId]) || void 0 === ZB ? void 0 : ZB.opacity) && void 0 !== IB ? IB : 1)
+               for (const dt of [Ht, ...Ht.getChildMeshes(!1)]) void 0 === dt.Gw || dt.name.startsWith("Cape|") || (dt.Gw = (0, vV.k)(this.eId), dt.metadata ??= new Ot.Bf.zw, dt.metadata.eId = this.eId);
+               this.updateOpacity(null !== (et = null === (Vt = Ot.dL[Ot.lL][this.eId]) || void 0 === Vt ? void 0 : Vt.opacity) && void 0 !== et ? et : 1)
```

#### 383. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2017` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2017) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2017)

```diff
-               gR: GB,
+               RP: mt,
```

#### 384. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2025` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2025) · [Before (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2025)

```diff
-               (null === (BB = JB.RIB(this.eId)) || void 0 === BB ? void 0 : BB.mesh) === cB && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
+               (null === (tt = qt.oet(this.eId)) || void 0 === tt ? void 0 : tt.mesh) === Ht && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
```

#### 385. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2027-L2030` → after: `L2027-L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2027-L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2027-L2030) · [Before (L2027-L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2027-L2030)

```diff
-             const FB = null === GB ? null : TB.Ig.kR.pTB(GB, 0);
-             if (JB.xR(this.eId, JB.names.mesh, {
-                 gR: GB,
-                 SZB: FB,
+             const Et = null === mt ? null : Ot.Bf.xI.FOt(mt, 0);
+             if (qt.RZ(this.eId, qt.names.mesh, {
+                 RP: mt,
+                 DOt: Et,
```

#### 386. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2032-L2033` → after: `L2032-L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2032-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2032-L2033) · [Before (L2032-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2032-L2033)

```diff
-                 svB: !1,
-                 ITB: "Leaderboard" !== vB,
+                 kdt: !1,
+                 dOt: "Leaderboard" !== dt,
```

#### 387. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2035)

```diff
-                 QvB: "ParticleEmitter" === vB && kB.followTargetMeshOffset ? BB => {
+                 Fdt: "ParticleEmitter" === dt && jt.followTargetMeshOffset ? tt => {
```

#### 388. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2038-L2039` → after: `L2038-L2039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2038-L2039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2038-L2039) · [Before (L2038-L2039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2038-L2039)

```diff
-                   const ZB = null === (IB = JB.YZB(this.eId)) || void 0 === IB ? void 0 : IB.zN,
-                     TB = void 0 === ZB ? null : JB.uIB(ZB);
+                   const Vt = null === (et = qt.ZVt(this.eId)) || void 0 === et ? void 0 : et.nE,
+                     Ot = void 0 === Vt ? null : qt.xet(Vt);
```

#### 389. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2042` → after: `L2042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2042) · [Before (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2042)

```diff
-                     const IB = this.bloxd.getEntityHeading(null !== (oB = TB.ridingVehicleEId) && void 0 !== oB ? oB : ZB, !0),
+                     const et = this.bloxd.getEntityHeading(null !== (Dt = Ot.ridingVehicleEId) && void 0 !== Dt ? Dt : Vt, !0),
```

#### 390. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2046-L2047` → after: `L2046-L2047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2046-L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2046-L2047) · [Before (L2046-L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2046-L2047)

```diff
-                     const kB = null !== (GB = TB.ridingVehicleEId) && void 0 !== GB ? GB : null;
-                     null !== kB && (0, MZ.b)(this.Nz, kB, BB)
+                     const jt = null !== (mt = Ot.ridingVehicleEId) && void 0 !== mt ? mt : null;
+                     null !== jt && (0, PV.e)(this.ql, jt, tt)
```

#### 391. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2052-L2053` → after: `L2052-L2053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2052-L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2052-L2053) · [Before (L2052-L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2052-L2053)

```diff
-               JB.xR(this.eId, JB.names.meshAttachments, {
-                 personFullBody: null !== (NB = null === (gB = (0, QZ.h)("head", null === (yB = kB.textures) || void 0 === yB ? void 0 : yB.head)) || void 0 === gB || null === (qB = gB.personModel) || void 0 === qB ? void 0 : qB.fullBody) && void 0 !== NB && NB
+               qt.RZ(this.eId, qt.names.meshAttachments, {
+                 personFullBody: null !== (ft = null === (wt = (0, uV.n)("head", null === (Nt = jt.textures) || void 0 === Nt ? void 0 : Nt.head)) || void 0 === wt || null === (yt = wt.personModel) || void 0 === yt ? void 0 : yt.fullBody) && void 0 !== ft && ft
```

#### 392. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2055` → after: `L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2055) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2055)

```diff
-               for (const BB of gZ.y) {
+               for (const tt of yV.A) {
```

#### 393. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2058` → after: `L2058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2058) · [Before (L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2058)

```diff
-                 IB && null !== (WB = (0, QZ.h)(BB, IB)) && void 0 !== WB && null !== (dB = WB.attachments) && void 0 !== dB && dB.length && CZ.d.Player.meshApi.updatePlayerCosmetic(this.eId, GB, BB, IB)
+                 et && null !== (bt = (0, uV.n)(tt, et)) && void 0 !== bt && null !== (Jt = bt.attachments) && void 0 !== Jt && Jt.length && CV.b.Player.meshApi.updatePlayerCosmetic(this.eId, mt, tt, et)
```

#### 394. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2060-L2066` → after: `L2060-L2066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2060-L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2060-L2066) · [Before (L2060-L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2060-L2066)

```diff
-               JB.xR(this.eId, JB.names.moveState), JB.xR(this.eId, "updateWalkingState", {
-                 gR: GB,
-                 SZB: FB,
-                 walkingLegSwingDuration: wZ.p
-               }), JB.xR(this.eId, "humanoidMesh", {
-                 gR: GB,
-                 SZB: FB,
+               qt.RZ(this.eId, qt.names.moveState), qt.RZ(this.eId, "updateWalkingState", {
+                 RP: mt,
+                 DOt: Et,
+                 walkingLegSwingDuration: hV.v
+               }), qt.RZ(this.eId, "humanoidMesh", {
+                 RP: mt,
+                 DOt: Et,
```

#### 395. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2069-L2071` → after: `L2069-L2071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2069-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2069-L2071) · [Before (L2069-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2069-L2071)

```diff
-               }), JB.xR(this.eId, "animator", {
-                 gR: GB,
-                 SZB: FB,
+               }), qt.RZ(this.eId, "animator", {
+                 RP: mt,
+                 DOt: Et,
```

#### 396. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2073` → after: `L2073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2073) · [Before (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2073)

```diff
-               }), HZ.f.hasAnimation("Person") && JB.xR(this.eId, "rigAnimation", {
+               }), IV.g.hasAnimation("Person") && qt.RZ(this.eId, "rigAnimation", {
```

#### 397. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2075-L2076` → after: `L2075-L2076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2075-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2075-L2076) · [Before (L2075-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2075-L2076)

```diff
-                 gR: GB
-               }), JB.uIB(this.eId).pose = this.colyseusEntity.pose || "standing"
+                 RP: mt
+               }), qt.xet(this.eId).pose = this.colyseusEntity.pose || "standing"
```

#### 398. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2078-L2080` → after: `L2078-L2080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2078-L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2078-L2080) · [Before (L2078-L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2078-L2080)

```diff
-               JB.xR(this.eId, "animator", {
-                 gR: GB,
-                 SZB: FB,
+               qt.RZ(this.eId, "animator", {
+                 RP: mt,
+                 DOt: Et,
```

#### 399. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2083-L2084` → after: `L2083-L2084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2083-L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2083-L2084) · [Before (L2083-L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2083-L2084)

```diff
-               const BB = (0, yZ.s)(kB.blockName);
-               null !== BB && JB.xR(this.eId, "rigAnimation", {
+               const tt = (0, aV.m)(jt.blockName);
+               null !== tt && qt.RZ(this.eId, "rigAnimation", {
```

#### 400. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2086)

```diff
-                 gR: GB
+                 RP: mt
```

#### 401. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2089` → after: `L2089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2089) · [Before (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2089)

```diff
-             JB.tvB(this.eId, "entityName", {
+             qt.djt(this.eId, "entityName", {
```

#### 402. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2092` → after: `L2092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2092) · [Before (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2092)

```diff
-             }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === kB.autoRotate && (JB.Qr(this.eId, "meshRotation"), JB.xR(this.eId, "autoRotate"));
+             }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === jt.autoRotate && (qt.ZZ(this.eId, "meshRotation"), qt.RZ(this.eId, "autoRotate"));
```

#### 403. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2096` → after: `L2096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2096) · [Before (L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2096)

```diff
-             (0, qZ.L)(CB) || JB.xR(this.eId, "lineToEntity", {
+             (0, NV.B)(Ct) || qt.RZ(this.eId, "lineToEntity", {
```

#### 404. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2099-L2100` → after: `L2099-L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2099-L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2099-L2100) · [Before (L2099-L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2099-L2100)

```diff
-             const QB = TB.Tm[TB.Jm][this.eId];
-             this.updateOverlayColour(null !== (BB = null === QB || void 0 === QB ? void 0 : QB.overlayColour) && void 0 !== BB ? BB : null), this.updateOpacity(null !== (IB = null === QB || void 0 === QB ? void 0 : QB.opacity) && void 0 !== IB ? IB : 1), this.updateZIndex(null != … [truncated]
+             const ut = Ot.dL[Ot.lL][this.eId];
+             this.updateOverlayColour(null !== (tt = null === ut || void 0 === ut ? void 0 : ut.overlayColour) && void 0 !== tt ? tt : null), this.updateOpacity(null !== (et = null === ut || void 0 === ut ? void 0 : ut.opacity) && void 0 !== et ? et : 1), this.updateZIndex(null != … [truncated]
```

#### 405. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2103` → after: `L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2103) · [Before (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2103)

```diff
-             "Person" !== vB && "BloxdBlock" !== vB || JB.Qr(this.eId, "rigAnimation"), JB.Qr(this.eId, JB.names.mesh), JB.TIB(this.eId, JB.names.meshAttachments) && JB.Qr(this.eId, JB.names.meshAttachments), JB.Qr(this.eId, "entityName"), JB.Qr(this.eId, "autoRotate"), JB.Qr(this … [truncated]
+             "Person" !== dt && "BloxdBlock" !== dt || qt.ZZ(this.eId, "rigAnimation"), qt.ZZ(this.eId, qt.names.mesh), qt.ptt(this.eId, qt.names.meshAttachments) && qt.ZZ(this.eId, qt.names.meshAttachments), qt.ZZ(this.eId, "entityName"), qt.ZZ(this.eId, "autoRotate"), qt.ZZ(this … [truncated]
```

#### 406. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2105-L2106` → after: `L2105-L2106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2105-L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2105-L2106) · [Before (L2105-L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2105-L2106)

```diff
-           hideDist: null !== (IB = kB.hideDist) && void 0 !== IB ? IB : 80,
-           movingHideDist: null !== (ZB = kB.hideDist) && void 0 !== ZB ? ZB : 120,
+           hideDist: null !== (et = jt.hideDist) && void 0 !== et ? et : 80,
+           movingHideDist: null !== (Vt = jt.hideDist) && void 0 !== Vt ? Vt : 120,
```

#### 407. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2109` → after: `L2109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2109) · [Before (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2109)

```diff
-           Ev: "BloxdBlock" === vB ? kB.blockName : vB
+           mj: "BloxdBlock" === dt ? jt.blockName : dt
```

#### 408. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2114` → after: `L2114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2114) · [Before (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2114)

```diff
-           this.meshRebuildQueued = !1, this.WN || this.updateHidingMeshMgr()
+           this.meshRebuildQueued = !1, this.df || this.updateHidingMeshMgr()
```

#### 409. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2131-L2132` → after: `L2131-L2132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2131-L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2131-L2132) · [Before (L2131-L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2131-L2132)

```diff
-         const JB = null !== (IB = null === (ZB = this.Nz.zW.RIB(this.eId)) || void 0 === ZB ? void 0 : ZB.gR) && void 0 !== IB ? IB : null;
-         null !== JB && CZ.d.Player.meshApi.updateMeshOverlayColour(JB, TB)
+         const qt = null !== (et = null === (Vt = this.ql.mJ.oet(this.eId)) || void 0 === Vt ? void 0 : Vt.RP) && void 0 !== et ? et : null;
+         null !== qt && CV.b.Player.meshApi.updateMeshOverlayColour(qt, Ot)
```

#### 410. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2137-L2138` → after: `L2137-L2138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2137-L2138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2137-L2138) · [Before (L2137-L2138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2137-L2138)

```diff
-         const ZB = null === (IB = this.Nz.zW.RIB(this.eId)) || void 0 === IB ? void 0 : IB.gR;
-         "number" === typeof ZB && this.Nz.Ig.kR.setRenderingGroupId(ZB, BB)
+         const Vt = null === (et = this.ql.mJ.oet(this.eId)) || void 0 === et ? void 0 : et.RP;
+         "number" === typeof Vt && this.ql.Bf.xI.setRenderingGroupId(Vt, tt)
```

#### 411. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2141-L2142` → after: `L2141-L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2141-L2142) · [Before (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2141-L2142)

```diff
-         const IB = this.Nz.zW.RIB(this.eId);
-         IB && ("number" !== typeof IB.gR ? IB.mesh && "ParticleEmitter" !== this.meshKind && (0, pZ.g)(IB.mesh, BB) : CZ.d.Player.meshApi.updateMeshOpacity(IB.gR, BB))
+         const et = this.ql.mJ.oet(this.eId);
+         et && ("number" !== typeof et.RP ? et.mesh && "ParticleEmitter" !== this.meshKind && (0, cV.g)(et.mesh, tt) : CV.b.Player.meshApi.updateMeshOpacity(et.RP, tt))
```

#### 412. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2145` → after: `L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2145) · [Before (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2145)

```diff
-     var PZ = ZB(39030);
+     var LV = Vt(39167);
```

#### 413. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2148` → after: `L2148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2148) · [Before (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2148)

```diff
-         this.eId = IB, this.Nz = void 0, this.schema = void 0, this.Nz = BB.Nz
+         this.eId = et, this.ql = void 0, this.schema = void 0, this.ql = tt.ql
```

#### 414. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2151` → after: `L2151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2151) · [Before (L2151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2151)

```diff
-         this.schema = BB, this.Nz.zW.add([BB.x, BB.y, BB.z], .1, .1, null, null, !1, !1, this.eId), this.Nz.zW.xR(this.eId, "smoothToServerPos"), PZ.d.add(this.eId, this.copyOpts())
+         this.schema = tt, this.ql.mJ.add([tt.x, tt.y, tt.z], .1, .1, null, null, !1, !1, this.eId), this.ql.mJ.RZ(this.eId, "smoothToServerPos"), LV.c.add(this.eId, this.copyOpts())
```

#### 415. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2154` → after: `L2154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2154) · [Before (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2154)

```diff
-         JZ.h.includes(BB) && PZ.d.update(this.eId, this.copyOpts())
+         DV.d.includes(tt) && LV.c.update(this.eId, this.copyOpts())
```

#### 416. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2157` → after: `L2157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2157) · [Before (L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2157)

```diff
-         PZ.d.remove(this.eId), this.Nz.zW.deleteEntity(this.eId)
+         LV.c.remove(this.eId), this.ql.mJ.deleteEntity(this.eId)
```

#### 417. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2176-L2185` → after: `L2176-L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2176-L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2176-L2185) · [Before (L2176-L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2176-L2185)

```diff
-     var rZ = ZB(3854),
-       mZ = ZB(36794),
-       XZ = ZB(6635),
-       LZ = ZB(37840),
-       eZ = ZB(2912),
-       uZ = ZB(38220),
-       fZ = ZB(9155),
-       lZ = ZB(38513),
-       AZ = ZB(37814),
-       tZ = ZB(3101);
+     var kV = Vt(3751),
+       GV = Vt(37002),
+       zV = Vt(6667),
+       oV = Vt(38040),
+       rV = Vt(2848),
+       UV = Vt(38404),
+       AV = Vt(9308),
+       iV = Vt(38697),
+       YV = Vt(38005),
+       BV = Vt(3012);
```

#### 418. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2190` → after: `L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2190) · [Before (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2190)

```diff
-         this.xZB = BB, this.Nz = IB, this.setupBudgetMs = ZB, this.now = TB, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new S … [truncated]
+         this.tOt = tt, this.ql = et, this.setupBudgetMs = Vt, this.now = Ot, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new S … [truncated]
```

#### 419. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2192` → after: `L2192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2192) · [Before (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2192)

```diff
-         }, this.dU = () => {
+         }, this.bM = () => {
```

#### 420. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2203` → after: `L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2203) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2203)

```diff
-         this.setupEntityHandlers(), this.setupItemHandlers(), this.xZB.onStateChange(this.setUpPromoted), this.Nz.on("beforeInputs", this.onFrame), this.Nz.on("Iz", this.dU)
+         this.setupEntityHandlers(), this.setupItemHandlers(), this.tOt.onStateChange(this.setUpPromoted), this.ql.on("beforeInputs", this.onFrame), this.ql.on("BQ", this.bM)
```

#### 421. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2207` → after: `L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2207) · [Before (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2207)

```diff
-         if ((null === (IB = (0, eZ.d)().client.getMsgHandler()) || void 0 === IB ? void 0 : IB.xZB) !== this.xZB) return this.Nz.off("beforeInputs", this.onFrame), this.Nz.off("Iz", this.dU), this.queuedSetups.clear(), void this.promotedSetups.clear();
+         if ((null === (et = (0, rV.c)().client.getMsgHandler()) || void 0 === et ? void 0 : et.tOt) !== this.tOt) return this.ql.off("beforeInputs", this.onFrame), this.ql.off("BQ", this.bM), this.queuedSetups.clear(), void this.promotedSetups.clear();
```

#### 422. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2209` → after: `L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2209) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2209)

```diff
-           for (iZ().copy(xZ, this.Nz.zW.aU(this.Nz.Jm)); this.setupBudgetLeftMs > 0;) {
+           for (SV().copy(xV, this.ql.mJ.YM(this.ql.lL)); this.setupBudgetLeftMs > 0;) {
```

#### 423. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2229` → after: `L2229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2229) · [Before (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2229)

```diff
-         const ZB = this.Nz.oIB;
+         const Vt = this.ql.Ttt;
```

#### 424. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2232` → after: `L2232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2232) · [Before (L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2232)

```diff
-         return !(!TB || TB.ridingVehicleEId !== IB && TB.followingEId !== IB) || (EZ(BB.type) === NZ.b || (0, eZ.d)().getFollowingEntities(IB).length > 0)
+         return !(!Ot || Ot.ridingVehicleEId !== et && Ot.followingEId !== et) || (TV(tt.type) === wV.d || (0, rV.c)().getFollowingEntities(et).length > 0)
```

#### 425. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2246-L2248` → after: `L2246-L2248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2246-L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2246-L2248) · [Before (L2246-L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2246-L2248)

```diff
-         this.roomStateCallbacks.entities.cW(((BB, IB) => {
-           this.Nz.oIB ? this.setUpOrQueue(BB, IB) : this.deferEntitySetupUntilInitInfo(BB, IB)
-         })), this.roomStateCallbacks.entities.nH(((BB, IB) => {
+         this.roomStateCallbacks.entities.qJ(((tt, et) => {
+           this.ql.Ttt ? this.setUpOrQueue(tt, et) : this.deferEntitySetupUntilInitInfo(tt, et)
+         })), this.roomStateCallbacks.entities.nS(((tt, et) => {
```

#### 426. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2250` → after: `L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2250) · [Before (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2250)

```diff
-           ZB && (VI.l.unsubscribe(ZB), this.deferredSetups.delete(IB)), this.queuedSetups.delete(IB), this.detach(IB), (0, eZ.d)().client.disposeEntity(IB)
+           Vt && (ne.j.unsubscribe(Vt), this.deferredSetups.delete(et)), this.queuedSetups.delete(et), this.detach(et), (0, rV.c)().client.disposeEntity(et)
```

#### 427. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2254` → after: `L2254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2254) · [Before (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2254)

```diff
-         const ZB = VI.l.Uy("initInfoReceived", (() => {
+         const Vt = ne.j.yN("initInfoReceived", (() => {
```

#### 428. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2258-L2259` → after: `L2258-L2259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2258-L2259) · [Before (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2258-L2259)

```diff
-           this.deferredSetups.get(IB) === ZB && (VI.l.unsubscribe(ZB), this.deferredSetups.delete(IB)), (0, eZ.d)().updatePositionAndPhysics(this.Nz.Jm, {
-             type: XZ.o.DEFAULT,
+           this.deferredSetups.get(et) === Vt && (ne.j.unsubscribe(Vt), this.deferredSetups.delete(et)), (0, rV.c)().updatePositionAndPhysics(this.ql.lL, {
+             type: zV.n.DEFAULT,
```

#### 429. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2261-L2263` → after: `L2261-L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2261-L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2261-L2263) · [Before (L2261-L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2261-L2263)

```diff
-           }, !0), (0, eZ.d)().takeHeldPlayerBodySize(this.Nz.Jm);
-           const BB = this.Nz.zW.dIB(this.Nz.Jm);
-           BB && (BB.movementType = XZ.l.NORMAL)
+           }, !0), (0, rV.c)().takeHeldPlayerBodySize(this.ql.lL);
+           const tt = this.ql.mJ.fet(this.ql.lL);
+           tt && (tt.movementType = zV.m.NORMAL)
```

#### 430. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2267-L2268` → after: `L2267-L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2267-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2267-L2268) · [Before (L2267-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2267-L2268)

```diff
-         const ZB = IB === this.Nz.oIB;
-         if (ZB)(0, eZ.d)().client.hK(this.Nz.Jm, null, null);
+         const Vt = et === this.ql.Ttt;
+         if (Vt)(0, rV.c)().client.vY(this.ql.lL, null, null);
```

#### 431. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2278-L2279` → after: `L2278-L2279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2278-L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2278-L2279) · [Before (L2278-L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2278-L2279)

```diff
-             const TB = ZB.length > 80 ? `${ZB.slice(0,80)}...` : ZB,
-               JB = `No client handler for entity type ${JSON.stringify(TB)}, so entity ${IB} is not set up`;
+             const Ot = Vt.length > 80 ? `${Vt.slice(0,80)}...` : Vt,
+               qt = `No client handler for entity type ${JSON.stringify(Ot)}, so entity ${et} is not set up`;
```

#### 432. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2282` → after: `L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2282) · [Before (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2282)

```diff
-           (0, eZ.d)().client.hK(IB, BB, new TB((0, eZ.d)(), IB, ZB))
+           (0, rV.c)().client.vY(et, tt, new Ot((0, rV.c)(), et, Vt))
```

#### 433. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2291` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2291) · [Before (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2291)

```diff
-         JB.cW(((ZB, JB) => {
+         qt.qJ(((Vt, qt) => {
```

#### 434. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2307)

```diff
-         })), JB.nH(((ZB, JB) => {
+         })), qt.nS(((Vt, qt) => {
```

#### 435. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2330` → after: `L2330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2330) · [Before (L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2330)

```diff
-         for (const ZB of null !== (IB = this.detachers.get(BB)) && void 0 !== IB ? IB : []) {
+         for (const Vt of null !== (et = this.detachers.get(tt)) && void 0 !== et ? et : []) {
```

#### 436. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2343` → after: `L2343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2343) · [Before (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2343)

```diff
-             const IB = this.Nz.zW.uIB((0, mZ.e)(BB));
+             const et = this.ql.mJ.xet((0, GV.c)(tt));
```

#### 437. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2374` → after: `L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2374) · [Before (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2374)

```diff
-         }(0, eZ.d)().client.updateEntityField(BB, ZB, TB)
+         }(0, rV.c)().client.updateEntityField(tt, Vt, Ot)
```

#### 438. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2382` → after: `L2382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2382) · [Before (L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2382)

```diff
-         (0, CZ.t)(BB, JB, null !== (ZB = null === oB || void 0 === oB ? void 0 : oB.itemName) && void 0 !== ZB ? ZB : null, null !== (TB = null === oB || void 0 === oB ? void 0 : oB.enchantmentTier) && void 0 !== TB ? TB : null)
+         (0, CV.w)(tt, qt, null !== (Vt = null === Dt || void 0 === Dt ? void 0 : Dt.itemName) && void 0 !== Vt ? Vt : null, null !== (Ot = null === Dt || void 0 === Dt ? void 0 : Dt.enchantmentTier) && void 0 !== Ot ? Ot : null)
```

#### 439. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2385-L2388` → after: `L2385-L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2385-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2385-L2388) · [Before (L2385-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2385-L2388)

```diff
-         const TB = (0, mZ.e)(BB),
-           JB = TB === this.Nz.Jm;
-         if (this.Nz.zW.Qr(TB, this.Nz.zW.names.nC), ZB) this.Nz.zW.Qr(TB, "smoothToServerPos"), this.Nz.zW.xR(TB, this.Nz.zW.names.nC, {
-           zN: (0, mZ.e)(ZB),
+         const Ot = (0, GV.c)(tt),
+           qt = Ot === this.ql.lL;
+         if (this.ql.mJ.ZZ(Ot, this.ql.mJ.names.GJ), Vt) this.ql.mJ.ZZ(Ot, "smoothToServerPos"), this.ql.mJ.RZ(Ot, this.ql.mJ.names.GJ, {
+           nE: (0, GV.c)(Vt),
```

#### 440. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2390-L2392` → after: `L2390-L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2390-L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2390-L2392) · [Before (L2390-L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2390-L2392)

```diff
-           iZB: IB.shouldMatchFollowingEntityRotation,
-           MZB: !0,
-           PZB: (BB, TB) => {
+           LVt: et.shouldMatchFollowingEntityRotation,
+           zVt: !0,
+           oVt: (tt, Ot) => {
```

#### 441. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2394-L2396` → after: `L2394-L2396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2394-L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2394-L2396) · [Before (L2394-L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2394-L2396)

```diff
-               const IB = (0, mZ.e)(ZB),
-                 JB = (0, eZ.d)().getEntityHeading(IB, TB);
-               iZ().ck(BB, BB, iZ().ZERO, JB)
+               const et = (0, GV.c)(Vt),
+                 qt = (0, rV.c)().getEntityHeading(et, Ot);
+               SV().tm(tt, tt, SV().ZERO, qt)
```

#### 442. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2401-L2403` → after: `L2401-L2403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2401-L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2401-L2403) · [Before (L2401-L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2401-L2403)

```diff
-           this.Nz.zW.TIB(TB, "smoothToServerPos") || this.Nz.zW.xR(TB, "smoothToServerPos");
-           const BB = this.Nz.zW.getState(TB, "smoothToServerPos"),
-             IB = this.Nz.zW.zK(TB).position;
+           this.ql.mJ.ptt(Ot, "smoothToServerPos") || this.ql.mJ.RZ(Ot, "smoothToServerPos");
+           const tt = this.ql.mJ.getState(Ot, "smoothToServerPos"),
+             et = this.ql.mJ.RY(Ot).position;
```

#### 443. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2409-L2412` → after: `L2409-L2412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2409-L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2409-L2412) · [Before (L2409-L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2409-L2412)

```diff
-         for (const JB of (0, eZ.d)().getFollowingEntities(BB)) {
-           const BB = this.Nz.zW.getState(JB, "meshRotation"),
-             IB = this.Nz.zW.YZB(JB);
-           BB && IB.iZB && (BB.serverSetRotation[TB] = ZB)
+         for (const qt of (0, rV.c)().getFollowingEntities(tt)) {
+           const tt = this.ql.mJ.getState(qt, "meshRotation"),
+             et = this.ql.mJ.ZVt(qt);
+           tt && et.LVt && (tt.serverSetRotation[Ot] = Vt)
```

#### 444. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2416-L2417` → after: `L2416-L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2416-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2416-L2417) · [Before (L2416-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2416-L2417)

```diff
-         const ZB = (0, mZ.e)(BB);
-         if (VI.l.Gq(`entityScale|${ZB}`, IB), ZB === this.Nz.Jm) {
+         const Vt = (0, GV.c)(tt);
+         if (ne.j.sw(`entityScale|${Vt}`, et), Vt === this.ql.lL) {
```

#### 445. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2419-L2422` → after: `L2419-L2422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2419-L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2419-L2422) · [Before (L2419-L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2419-L2422)

```diff
-           (0, eZ.d)().removeFromEyeHeightCache(ZB);
-           const BB = this.Nz.zW.dIB(this.Nz.Jm),
-             IB = null !== (TB = null === BB || void 0 === BB ? void 0 : BB.physicsState) && void 0 !== TB ? TB : {
-               type: XZ.o.DEFAULT,
+           (0, rV.c)().removeFromEyeHeightCache(Vt);
+           const tt = this.ql.mJ.fet(this.ql.lL),
+             et = null !== (Ot = null === tt || void 0 === tt ? void 0 : tt.physicsState) && void 0 !== Ot ? Ot : {
+               type: zV.n.DEFAULT,
```

#### 446. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2425` → after: `L2425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2425) · [Before (L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2425)

```diff
-           return void(0, eZ.d)().updatePositionAndPhysics(this.Nz.Jm, IB, !1)
+           return void(0, rV.c)().updatePositionAndPhysics(this.ql.lL, et, !1)
```

#### 447. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2427` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2427) · [Before (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2427)

```diff
-         const JB = (0, eZ.d)().getLifeformType(ZB);
+         const qt = (0, rV.c)().getLifeformType(Vt);
```

#### 448. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2432-L2433` → after: `L2432-L2433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2432-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2432-L2433) · [Before (L2432-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2432-L2433)

```diff
-         } = (0, lZ.h)(IB, JB);
-         this.Nz.zW.wZB(ZB, oB, GB, oB)
+         } = (0, iV.d)(et, qt);
+         this.ql.mJ.IVt(Vt, Dt, mt, Dt)
```

#### 449. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2436` → after: `L2436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2436) · [Before (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2436)

```diff
-         const ZB = this.Nz.zW.getState(BB, "meshRotation");
+         const Vt = this.ql.mJ.getState(tt, "meshRotation");
```

#### 450. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2438-L2441` → after: `L2438-L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2438-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2438-L2441) · [Before (L2438-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2438-L2441)

```diff
-         for (const TB of (0, eZ.d)().getFollowingEntities(BB)) {
-           const BB = this.Nz.zW.getState(TB, "meshRotation"),
-             ZB = this.Nz.zW.YZB(TB);
-           BB && ZB.iZB && (BB.baseRenderRotation[1] = IB)
+         for (const Ot of (0, rV.c)().getFollowingEntities(tt)) {
+           const tt = this.ql.mJ.getState(Ot, "meshRotation"),
+             Vt = this.ql.mJ.ZVt(Ot);
+           tt && Vt.LVt && (tt.baseRenderRotation[1] = et)
```

#### 451. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2445` → after: `L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2445) · [Before (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2445)

```diff
-         const ZB = this.Nz.zW.YZB((0, mZ.e)(BB));
+         const Vt = this.ql.mJ.ZVt((0, GV.c)(tt));
```

#### 452. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2452-L2453` → after: `L2452-L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2452-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2452-L2453) · [Before (L2452-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2452-L2453)

```diff
-         const ZB = this.Nz.zW.YZB((0, mZ.e)(BB));
-         ZB && (ZB.iZB = null === IB || void 0 === IB || IB)
+         const Vt = this.ql.mJ.ZVt((0, GV.c)(tt));
+         Vt && (Vt.LVt = null === et || void 0 === et || et)
```

#### 453. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2456-L2457` → after: `L2456-L2457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2456-L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2456-L2457) · [Before (L2456-L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2456-L2457)

```diff
-         if (this.Nz.zW.TIB(BB, "smoothToServerPos")) {
-           const TB = this.Nz.zW.getState(BB, "smoothToServerPos");
+         if (this.ql.mJ.ptt(tt, "smoothToServerPos")) {
+           const Ot = this.ql.mJ.getState(tt, "smoothToServerPos");
```

#### 454. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2462-L2463` → after: `L2462-L2463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2462-L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2462-L2463) · [Before (L2462-L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2462-L2463)

```diff
-         this.roomStateCallbacks.items.cW(((BB, IB) => {
-           this.allItems[IB] = BB, (0, LZ.l)(this.Nz, IB, [BB.x, BB.y, BB.z], BB.id, {
+         this.roomStateCallbacks.items.qJ(((tt, et) => {
+           this.allItems[et] = tt, (0, oV.k)(this.ql, et, [tt.x, tt.y, tt.z], tt.id, {
```

#### 455. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2466` → after: `L2466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2466) · [Before (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2466)

```diff
-             wJ: (0, SI.c)(this.Nz).cantPickUpItem(IB),
+             Fq: (0, tV.e)(this.ql).cantPickUpItem(et),
```

#### 456. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2468` → after: `L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2468) · [Before (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2468)

```diff
-             predictedAt: (0, eZ.d)().client.itemDropPrediction.onServerItemAdded(IB)
+             predictedAt: (0, rV.c)().client.itemDropPrediction.onServerItemAdded(et)
```

#### 457. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2474-L2475` → after: `L2474-L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2474-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2474-L2475) · [Before (L2474-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2474-L2475)

```diff
-         })), this.roomStateCallbacks.items.nH(((BB, IB) => {
-           delete this.allItems[IB], this.detach(IB), (0, eZ.d)().client.itemDropPrediction.onServerItemRemoved(IB), this.Nz.zW.TIB(IB, this.Nz.zW.names.itemState) && this.Nz.zW.deleteEntity(IB), (0, SI.c)(this.Nz).disposeEntity(IB)
+         })), this.roomStateCallbacks.items.nS(((tt, et) => {
+           delete this.allItems[et], this.detach(et), (0, rV.c)().client.itemDropPrediction.onServerItemRemoved(et), this.ql.mJ.ptt(et, this.ql.mJ.names.itemState) && this.ql.mJ.deleteEntity(et), (0, tV.e)(this.ql).disposeEntity(et)
```

#### 458. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2480-L2482` → after: `L2480-L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2480-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2480-L2482) · [Before (L2480-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2480-L2482)

```diff
-           if (this.Nz.zW.TIB(BB, "itemState")) {
-             const TB = this.Nz.zW.getState(BB, "smoothToServerPos");
-             (0, AZ.setServerPositionAxis)(TB, KZ[IB], ZB), (0, eZ.d)().client.itemDropPrediction.onServerItemMoved(BB)
+           if (this.ql.mJ.ptt(tt, "itemState")) {
+             const Ot = this.ql.mJ.getState(tt, "smoothToServerPos");
+             (0, YV.setServerPositionAxis)(Ot, sV[et], Vt), (0, rV.c)().client.itemDropPrediction.onServerItemMoved(tt)
```

#### 459. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2486-L2487` → after: `L2486-L2487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2486-L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2486-L2487) · [Before (L2486-L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2486-L2487)

```diff
-         if (!this.Nz.zW.TIB(BB, "itemState")) return;
-         const TB = this.Nz.zW.getState(BB, "itemState");
+         if (!this.ql.mJ.ptt(tt, "itemState")) return;
+         const Ot = this.ql.mJ.getState(tt, "itemState");
```

#### 460. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2491-L2495` → after: `L2491-L2495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2491-L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2491-L2495) · [Before (L2491-L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2491-L2495)

```diff
-         if (!this.WN) {
-           this.WN = !0, this.Nz.off("beforeInputs", this.onFrame), this.Nz.off("Iz", this.dU), this.queuedSetups.clear(), this.promotedSetups.clear();
-           for (const BB of this.deferredSetups.values()) VI.l.unsubscribe(BB);
-           this.deferredSetups.clear(), this.Nz.zW.Qr(this.Nz.Jm, this.Nz.zW.names.nC);
-           for (const BB in this.allItems) this.Nz.zW.deleteEntity(BB), delete this.allItems[BB];
+         if (!this.df) {
+           this.df = !0, this.ql.off("beforeInputs", this.onFrame), this.ql.off("BQ", this.bM), this.queuedSetups.clear(), this.promotedSetups.clear();
+           for (const tt of this.deferredSetups.values()) ne.j.unsubscribe(tt);
+           this.deferredSetups.clear(), this.ql.mJ.ZZ(this.ql.lL, this.ql.mJ.names.GJ);
+           for (const tt in this.allItems) this.ql.mJ.deleteEntity(tt), delete this.allItems[tt];
```

#### 461. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2497-L2498` → after: `L2497-L2498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2497-L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2497-L2498) · [Before (L2497-L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2497-L2498)

```diff
-           (0, SI.c)(this.Nz).clear();
-           for (const BB of (0, eZ.d)().client.iterateEntityIds())(0, eZ.d)().client.disposeEntity(BB)
+           (0, tV.e)(this.ql).clear();
+           for (const tt of (0, rV.c)().client.iterateEntityIds())(0, rV.c)().client.disposeEntity(tt)
```

#### 462. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2507` → after: `L2507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2507) · [Before (L2507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2507)

```diff
-         ZB = -1 === IB ? BB : BB.slice(0, IB),
+         Vt = -1 === et ? tt : tt.slice(0, et),
```

#### 463. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2521` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2521) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2521)

```diff
-         ...Object.fromEntries(JZ.i.map((BB => {
+         ...Object.fromEntries(DV.f.map((tt => {
```

#### 464. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2523-L2524` → after: `L2523-L2524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2523-L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2523-L2524) · [Before (L2523-L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2523-L2524)

```diff
-             Ev: IB
-           } = (0, uZ.b)(BB);
+             mj: et
+           } = (0, UV.c)(tt);
```

#### 465. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2527-L2690` → after: `L2527-L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2527-L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2527-L2690) · [Before (L2527-L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2527-L2690)

```diff
-         Pebble: NZ.b,
-         Snowball: NZ.b,
-         "Snowball Launcher": NZ.b,
-         "Reinforced Pebble": NZ.b,
-         Bullet: NZ.b,
-         "Reinforced Ball": NZ.b,
-         Ball: NZ.b,
-         Mango: NZ.b,
-         "Moonstone Orb": NZ.b,
-         ...Object.fromEntries(TZ.u.map((BB => [(0, WZ.Zb)(BB), NZ.b]))),
-         Arrow: NZ.b,
-         "Arrow of Speed": NZ.b,
-         "Arrow of Poison": NZ.b,
-         "Arrow of Slowness": NZ.b,
-         "Arrow of Weakness": NZ.b,
-         "Arrow of Knockback": NZ.b,
- ... (148 more removed lines; see GitHub link above)
+         Pebble: wV.d,
+         Snowball: wV.d,
+         "Snowball Launcher": wV.d,
+         "Reinforced Pebble": wV.d,
+         Bullet: wV.d,
+         "Reinforced Ball": wV.d,
+         Ball: wV.d,
+         Mango: wV.d,
+         "Moonstone Orb": wV.d,
+         ...Object.fromEntries(qV.w.map((tt => [(0, bV.ec)(tt), wV.d]))),
+         Arrow: wV.d,
+         "Arrow of Speed": wV.d,
+         "Arrow of Poison": wV.d,
+         "Arrow of Slowness": wV.d,
+         "Arrow of Weakness": wV.d,
+         "Arrow of Knockback": wV.d,
+ ... (148 more added lines; see GitHub link above)
```

#### 466. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2696` → after: `L2696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2696) · [Before (L2696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2696)

```diff
-   39078: (BB, IB, ZB) => {
+   39216: (tt, et, Vt) => {
```

#### 467. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2698-L2699` → after: `L2698-L2699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2698-L2699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2698-L2699) · [Before (L2698-L2699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2698-L2699)

```diff
-       b: () => oB,
-       c: () => GB
+       e: () => Dt,
+       h: () => mt
```

#### 468. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2701-L2702` → after: `L2701-L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2701-L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2701-L2702) · [Before (L2701-L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2701-L2702)

```diff
-     var TB = ZB(665),
-       JB = ZB(37787);
+     var Ot = Vt(710),
+       qt = Vt(37972);
```

#### 469. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2710-L2712` → after: `L2710-L2712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2710-L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2710-L2712) · [Before (L2710-L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2710-L2712)

```diff
-         const oB = (0, TB.T)(BB),
-           GB = (0, TB.T)(IB),
-           vB = (0, TB.T)(ZB),
+         const Dt = (0, Ot.H)(tt),
+           mt = (0, Ot.H)(et),
+           dt = (0, Ot.H)(Vt),
```

#### 470. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2715` → after: `L2715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2715) · [Before (L2715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2715)

```diff
-           this.lastChunkX = oB, this.lastChunkY = GB, this.lastChunkZ = vB, this.lastChunkId = (0, JB.c)(oB, GB, vB), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, kB);
+           this.lastChunkX = Dt, this.lastChunkY = mt, this.lastChunkZ = dt, this.lastChunkId = (0, qt.e)(Dt, mt, dt), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, jt);
```

#### 471. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2729` → after: `L2729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2729) · [Before (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2729)

```diff
-   39135: (BB, IB, ZB) => {
+   39278: (tt, et, Vt) => {
```

#### 472. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2731-L2734` → after: `L2731-L2734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2731-L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2731-L2734) · [Before (L2731-L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2731-L2734)

```diff
-       e: () => FI,
-       f: () => fI,
-       i: () => jI,
-       m: () => lI
+       d: () => fe,
+       g: () => re,
+       j: () => Ie,
+       k: () => Ue
```

#### 473. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2736-L2754` → after: `L2736-L2754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2736-L2754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2736-L2754) · [Before (L2736-L2754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2736-L2754)

```diff
-     var TB = ZB(3854),
-       JB = ZB(8885),
-       oB = ZB(36697),
-       GB = ZB(1500),
-       vB = ZB(36780),
-       kB = ZB(39030),
-       cB = ZB(39021),
-       nB = ZB(3911),
-       hB = ZB(37928),
-       zB = ZB(39143),
-       FB = ZB(1300),
-       NB = ZB(342),
-       gB = ZB(24),
-       qB = ZB(2029),
-       yB = ZB(105),
-       UB = ZB(36),
- ... (3 more removed lines; see GitHub link above)
+     var Ot = Vt(3751),
+       qt = Vt(9005),
+       Dt = Vt(36925),
+       mt = Vt(1543),
+       dt = Vt(36992),
+       jt = Vt(39167),
+       Ht = Vt(39152),
+       Xt = Vt(3820),
+       Qt = Vt(38126),
+       lt = Vt(39282),
+       Et = Vt(1325),
+       ft = Vt(377),
+       wt = Vt(31),
+       yt = Vt(2043),
+       Nt = Vt(106),
+       Mt = Vt(39),
+ ... (3 more added lines; see GitHub link above)
```

#### 474. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2757` → after: `L2757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2757) · [Before (L2757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2757)

```diff
-         this.storeForMs = BB, this.clicks = new CB.e
+         this.storeForMs = tt, this.clicks = new Ct.b
```

#### 475. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2783` → after: `L2783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2783) · [Before (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2783)

```diff
-         this.storeForMs = BB, this.clickDownDurations = new CB.e
+         this.storeForMs = tt, this.clickDownDurations = new Ct.b
```

#### 476. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2799` → after: `L2799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2799) · [Before (L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2799)

```diff
-         })), `${IB}:${ZB}`
+         })), `${et}:${Vt}`
```

#### 477. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2802-L2831` → after: `L2802-L2831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2802-L2831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2802-L2831) · [Before (L2802-L2831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2802-L2831)

```diff
-     var wB = ZB(36529),
-       OB = ZB(39152),
-       YB = ZB(20),
-       iB = ZB(2912),
-       pB = ZB(1382),
-       aB = ZB(2510),
-       HB = ZB(4624),
-       MB = ZB(140),
-       jB = ZB(38227),
-       PB = ZB(38431),
-       RB = ZB(665),
-       rB = ZB(36524),
-       mB = ZB(11),
-       XB = ZB(9296),
-       LB = ZB(1281),
-       eB = ZB(201),
- ... (14 more removed lines; see GitHub link above)
+     var ht = Vt(36745),
+       vt = Vt(39288),
+       Wt = Vt(26),
+       St = Vt(2848),
+       ct = Vt(1423),
+       Rt = Vt(2486),
+       It = Vt(4576),
+       Pt = Vt(153),
+       Zt = Vt(38406),
+       Lt = Vt(38610),
+       Ft = Vt(710),
+       kt = Vt(36742),
+       Gt = Vt(17),
+       zt = Vt(9425),
+       ot = Vt(1308),
+       rt = Vt(229),
+ ... (14 more added lines; see GitHub link above)
```

#### 478. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2843` → after: `L2843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2843) · [Before (L2843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2843)

```diff
-       return !(null === (BB = (0, iB.d)().client) || void 0 === BB || null === (IB = BB.freeCameraController) || void 0 === IB || !IB.movesFly())
+       return !(null === (tt = (0, St.c)().client) || void 0 === tt || null === (et = tt.freeCameraController) || void 0 === et || !et.movesFly())
```

#### 479. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2851` → after: `L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2851) · [Before (L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2851)

```diff
-           return null !== (TB = (0, iB.d)().client) && void 0 !== TB && TB.isReplayMode() ? function(BB) {
+           return null !== (Ot = (0, St.c)().client) && void 0 !== Ot && Ot.isReplayMode() ? function(tt) {
```

#### 480. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2863` → after: `L2863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2863) · [Before (L2863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2863)

```diff
-     qB.c.subscribe("_ignoreBasicBoards", (BB => {
+     yt.b.subscribe("_ignoreBasicBoards", (tt => {
```

#### 481. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2872-L2891` → after: `L2872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2872) · [Before (L2872-L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2872-L2891)

```diff
-     const YI = [1, 243, 0, 18, 85, 72, 215, 5, 10, 231, 8, 255, "length", "undefined", void 0, 122, 4, "c", 2, 188, 63, 6, "fromCodePoint", 7, 12, "push", 50, 3, 54, 49, "g", 91, "e", 8191, 88, 13, 14, 46, 19, 71, "d", "h", 197, 51, 26, 9, "f", "b", "i", 171, !1, 169, 218, "a", 1 … [truncated]
- 
-     function iI(...BB) {
-       return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = function(...BB) {
-         for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = '8Lmak/R^t=l1h)SBT#,`{?+C9vGbpsx_J:IO.(g2|%wFQ47V"[NA;DKYHE&zPoUZu*]>}yWX5j6q@$rincMd!<03~fe', BB[YI[1]] = "" + (BB[YI[2]] || ""), BB[-YI[4]] = BB[YI[1]].length, BB[YI[9]] = [], BB[-YI[7]] = YI[2], BB[YI[8]] = YI[2], BB[YI[6]] = -YI … [truncated]
-           if (BB[-YI[5]] = BB[YI[0]].indexOf(BB[YI[1]][BB[-YI[3]]]), BB[-YI[5]] !== -YI[0])
-             if (BB[YI[6]] < YI[2]) BB[YI[6]] = BB[-YI[5]];
-             else {
-               MI(BB[YI[6]] += BB[-YI[5]] * YI[31], BB[-YI[7]] |= BB[YI[6]] << BB[YI[8]], BB[YI[8]] += (BB[YI[6]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
-               do {
-                 MI(BB[YI[9]].push(BB[-YI[7]] & YI[11]), BB[-YI[7]] >>= YI[10], BB[YI[8]] -= YI[10])
-               } while (BB[YI[8]] > YI[23]);
-               BB[YI[6]] = -YI[0]
-             } return BB[YI[6]] > -YI[0] && BB[YI[9]].push((BB[-YI[7]] | BB[YI[6]] << BB[YI[8]]) & YI[11]), pI(BB[YI[9]])
-       }(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
-     }
- ... (4 more removed lines; see GitHub link above)
+     const We = [1, 2, 0, "h", 3, 85, "g", 5, 99, "d", 8, 255, "length", 81, 17, 73, 4, "undefined", void 0, 199, 103, 63, 6, "fromCodePoint", 7, 12, "push", 220, 87, 91, 8191, 88, 13, 14, 111, 227, 211, "f", 131, !1, 56, 203, 9, 39, 123, "b", "c", "a", 144, "e", 221, 225, 162, 68 … [truncated]
```

#### 482. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2894-L2907` → after: `L2875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2875) · [Before (L2894-L2907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2894-L2907)

```diff
-       if (BB[YI[12]] = YI[27], BB[YI[2]] === function(BB) {
-           return typeof yI[BB] === YI[13] ? yI[BB] = function(...BB) {
-             for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = ':rgYfESFiKImcA9D?;0k!R+@H(4B/s}.OC~ql_M5XoPtU^=VwvW7y]x>3G1Ju)[Zn#8L2|eh6<"{Njpb`TQz$%&*ad,', BB[-YI[28]] = "" + (BB[YI[2]] || ""), BB[YI[17]] = BB[-YI[28]].length, BB[YI[37]] = [], BB[YI[32]] = YI[2], BB[YI[21]] = YI[2], BB[YI … [truncated]
-               if (BB[YI[29]] = BB[YI[0]].indexOf(BB[-YI[28]][BB[YI[10]]]), BB[YI[29]] !== -YI[0])
-                 if (BB[YI[30]] < YI[2]) BB[YI[30]] = BB[YI[29]];
-                 else {
-                   MI(BB[YI[30]] += BB[YI[29]] * YI[31], BB[YI[32]] |= BB[YI[30]] << BB[YI[21]], BB[YI[21]] += (BB[YI[30]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
-                   do {
-                     MI(BB[YI[37]].push(BB[YI[32]] & YI[11]), BB[YI[32]] >>= YI[10], BB[YI[21]] -= YI[10])
-                   } while (BB[YI[21]] > YI[23]);
-                   BB[YI[30]] = -YI[0]
-                 } return BB[YI[30]] > -YI[0] && BB[YI[37]].push((BB[YI[32]] | BB[YI[30]] << BB[YI[21]]) & YI[11]), pI(BB[YI[37]])
-           }(UI[BB]) : yI[BB]
-         }(109)) return BB[YI[0]] + BB[YI[18]]
+       return tt[We[12]] = We[0], typeof Je !== We[17] && Je ? (new Je).decode(new Ce(tt[We[2]])) : typeof ue !== We[17] && ue ? ue.from(tt[We[2]]).toString("utf-8") : ve(tt[We[2]])
```

#### 483. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2918` → after: `L2886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2886) · [Before (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2918)

```diff
-         return BB.zW.FZB(BB.Jm)
+         return tt.mJ.bVt(tt.lL)
```

#### 484. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2928-L2929` → after: `L2896-L2897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2896-L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2896-L2897) · [Before (L2928-L2929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2928-L2929)

```diff
-             if (JB) null === (vB = (0, iB.d)().client) || void 0 === vB || null === (kB = vB.freeCameraController) || void 0 === kB || kB.handlefreeCamKeyPress(JB, IB, ZB);
-             return void(ZB || null !== (GB = (0, iB.d)().client) && void 0 !== GB && GB.isReplayMode() || (BB.zW.UZB()[TB] = !1))
+             if (qt) null === (dt = (0, St.c)().client) || void 0 === dt || null === (jt = dt.freeCameraController) || void 0 === jt || jt.handlefreeCamKeyPress(qt, et, Vt);
+             return void(Vt || null !== (mt = (0, St.c)().client) && void 0 !== mt && mt.isReplayMode() || (tt.mJ.hVt()[Ot] = !1))
```

#### 485. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2931-L2932` → after: `L2899-L2900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2899-L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2899-L2900) · [Before (L2931-L2932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2931-L2932)

```diff
-           if (null !== (JB = (0, iB.d)().client) && void 0 !== JB && null !== (oB = JB.freeCameraController) && void 0 !== oB && oB.isKeyPressOverriden(IB)) return;
-           BB.zW.UZB()[TB] = ZB
+           if (null !== (qt = (0, St.c)().client) && void 0 !== qt && null !== (Dt = qt.freeCameraController) && void 0 !== Dt && Dt.isKeyPressOverriden(et)) return;
+           tt.mJ.hVt()[Ot] = Vt
```

#### 486. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2938-L2940` → after: `L2906-L2908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2906-L2908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2906-L2908) · [Before (L2938-L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2938-L2940)

```diff
-         if (!BB.vW.canCrouch) return;
-         const IB = BB.zW.UZB();
-         YB.d.get("clientEscMenuOptions").crouchIsToggle && (IB.crouchToggled = !IB.crouchToggled && !IB.padSneakToggled), IB.padSneakToggled = !1
+         if (!tt.OJ.canCrouch) return;
+         const et = tt.mJ.hVt();
+         Wt.b.get("clientEscMenuOptions").crouchIsToggle && (et.crouchToggled = !et.crouchToggled && !et.padSneakToggled), et.padSneakToggled = !1
```

#### 487. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2949` → after: `L2917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2917) · [Before (L2949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2949)

```diff
-       for (const TB of WB.m) BB.inputs.down.on(TB, (BB => {
+       for (const Ot of bt.h) tt.inputs.down.on(Ot, (tt => {
```

#### 488. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2951` → after: `L2919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2919) · [Before (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2951)

```diff
-         null !== (IB = (0, iB.d)().client) && void 0 !== IB && null !== (ZB = IB.freeCameraController) && void 0 !== ZB && ZB.handlefreeCamKeyPress(TB, BB, !0) && (BB.preventDefault(), BB.stopPropagation())
+         null !== (et = (0, St.c)().client) && void 0 !== et && null !== (Vt = et.freeCameraController) && void 0 !== Vt && Vt.handlefreeCamKeyPress(Ot, tt, !0) && (tt.preventDefault(), tt.stopPropagation())
```

#### 489. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2954` → after: `L2922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2922) · [Before (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2954)

```diff
-         null !== (IB = (0, iB.d)().client) && void 0 !== IB && null !== (ZB = IB.freeCameraController) && void 0 !== ZB && ZB.handlefreeCamKeyPress(TB, BB, !1) && (BB.preventDefault(), BB.stopPropagation())
+         null !== (et = (0, St.c)().client) && void 0 !== et && null !== (Vt = et.freeCameraController) && void 0 !== Vt && Vt.handlefreeCamKeyPress(Ot, tt, !1) && (tt.preventDefault(), tt.stopPropagation())
```

#### 490. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2958` → after: `L2926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2926) · [Before (L2958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2958)

```diff
-         null === (BB = (0, iB.d)().client) || void 0 === BB || null === (IB = BB.gameRecorder) || void 0 === IB || IB.toggleRecording()
+         null === (tt = (0, St.c)().client) || void 0 === tt || null === (et = tt.gameRecorder) || void 0 === et || et.toggleRecording()
```

#### 491. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2961` → after: `L2929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2929) · [Before (L2961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2961)

```diff
-         (0, wB.d)() || null === (BB = (0, iB.d)().client) || void 0 === BB || null === (IB = BB.gameRecorder) || void 0 === IB || IB.saveClip()
+         (0, ht.e)() || null === (tt = (0, St.c)().client) || void 0 === tt || null === (et = tt.gameRecorder) || void 0 === et || et.saveClip()
```

#### 492. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2965-L2968` → after: `L2933-L2936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2933-L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2933-L2936) · [Before (L2965-L2968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2965-L2968)

```diff
-         if ((0, OB.d)()) return;
-         if ("replayViewerOpen" === TB) return void gB.l.Gq("replayViewer|requested", "toggle");
-         const IB = null === (BB = (0, iB.d)().client) || void 0 === BB ? void 0 : BB.gameReplayer;
-         ((0, wB.d)() || null !== IB && void 0 !== IB && IB.isReplayMode()) && (null === IB || void 0 === IB || IB.handleAction(TB))
+         if ((0, vt.c)()) return;
+         if ("replayViewerOpen" === Ot) return void wt.j.sw("replayViewer|requested", "toggle");
+         const et = null === (tt = (0, St.c)().client) || void 0 === tt ? void 0 : tt.gameReplayer;
+         ((0, ht.e)() || null !== et && void 0 !== et && et.isReplayMode()) && (null === et || void 0 === et || et.handleAction(Ot))
```

#### 493. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2984` → after: `L2952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2952) · [Before (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2984)

```diff
-           ZB && lI(FB.d.TouchDownFirePrimary), BB ? XB() : ((0, PB.g)(), IB().cTB()), ZB || lI(FB.d.DownFirePrimary), fI(!0), GB.click();
+           Vt && Ue(Et.c.TouchDownFirePrimary), tt ? zt() : ((0, Lt.f)(), et().wOt()), Vt || Ue(Et.c.DownFirePrimary), re(!0), mt.click();
```

#### 494. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2995` → after: `L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2963) · [Before (L2995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2995)

```diff
-             }(0, TB.sendColyMessage)(nB.ak, BB)
+             }(0, Ot.sendColyMessage)(Xt.dk, tt)
```

#### 495. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2998` → after: `L2966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2966) · [Before (L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L2998)

```diff
-         HB = new fB.e,
+         It = new At.d,
```

#### 496. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3000` → after: `L2968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2968) · [Before (L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3000)

```diff
-           fB.e.stopRunning();
+           At.d.stopRunning();
```

#### 497. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3002` → after: `L2970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2970) · [Before (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3002)

```diff
-           hB.registerClickDownDuration(BB), IB().GTB(), lI(FB.d.UpFirePrimary), fI(!1);
+           Qt.registerClickDownDuration(tt), et().lOt(), Ue(Et.c.UpFirePrimary), re(!1);
```

#### 498. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3004` → after: `L2972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2972) · [Before (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3004)

```diff
-           (0, TB.sendColyMessage)(nB.zg, ZB)
+           (0, Ot.sendColyMessage)(Xt.wg, Vt)
```

#### 499. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3013` → after: `L2981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2981) · [Before (L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3013)

```diff
-           IB().ecB(), lI(FB.d.DownFireSecondary), fI(!0), BB.lBB && !BB.lBB.position && (0, cB.h)()
+           et().VXt(), Ue(Et.c.DownFireSecondary), re(!0), tt.Itt && !tt.Itt.position && (0, Ht.g)()
```

#### 500. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3016` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2984) · [Before (L3016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3016)

```diff
-           IB().oTB(), lI(FB.d.UpFireSecondary), fI(!1)
+           et().QOt(), Ue(Et.c.UpFireSecondary), re(!1)
```

#### 501. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3024` → after: `L2992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2992) · [Before (L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3024)

```diff
-       const XB = () => IB().lcB();
+       const zt = () => et().DXt();
```

#### 502. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3029` → after: `L2997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L2997) · [Before (L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3029)

```diff
-           (0, TB.sendColyMessage)(nB.Mh, BB, !0)
+           (0, Ot.sendColyMessage)(Xt.Fh, tt, !0)
```

#### 503. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3032-L3034` → after: `L3000-L3002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3000-L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3000-L3002) · [Before (L3032-L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3032-L3034)

```diff
-           (0, TB.sendColyMessage)(nB.Nh, {
-             Qv: BB,
-             sv: nI()
+           (0, Ot.sendColyMessage)(Xt.Gh, {
+             Id: tt,
+             Pd: Qe()
```

#### 504. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3049` → after: `L3017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3017) · [Before (L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3049)

```diff
-         return BB.physics.testSolid.toString().includes("Pz") || (IB = "b"), IB
+         return tt.physics.testSolid.toString().includes("Cl") || (et = "b"), et
```

#### 505. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3052` → after: `L3020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3020) · [Before (L3052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3052)

```diff
-         BB.preventDefault(), (0, EB.A)(BB, "inventory", (0, lB.b)((0, iB.h)()))
+         tt.preventDefault(), (0, Tt.C)(tt, "inventory", (0, it.d)((0, St.e)()))
```

#### 506. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3055` → after: `L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3023) · [Before (L3055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3055)

```diff
-         gB.l.Gq("DropItemKeyPressed", BB)
+         wt.j.sw("DropItemKeyPressed", tt)
```

#### 507. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3058` → after: `L3026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3026) · [Before (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3058)

```diff
-         hI(BB.zW.UZB().crouch)
+         le(tt.mJ.hVt().crouch)
```

#### 508. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3060` → after: `L3028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3028) · [Before (L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3060)

```diff
-         (0, wB.d)() || "inGame" === YB.d.get("gameState") && (0, EB.x)(IB, NB.q.SHOP, !(0, JB.d)(BB.vW.shopInfo))
+         (0, ht.e)() || "inGame" === Wt.b.get("gameState") && (0, Tt.y)(et, ft.o.SHOP, !(0, qt.c)(tt.OJ.shopInfo))
```

#### 509. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3062` → after: `L3030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3030) · [Before (L3062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3062)

```diff
-         (0, wB.d)() || "inGame" === YB.d.get("gameState") && (0, EB.x)(IB, NB.q.LOBBY_LEADERBOARD, (0, BI.d)(BB.vW))
+         (0, ht.e)() || "inGame" === Wt.b.get("gameState") && (0, Tt.y)(et, ft.o.LOBBY_LEADERBOARD, (0, ee.d)(tt.OJ))
```

#### 510. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3064` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3032) · [Before (L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3064)

```diff
-         gB.l.Gq("showUi", !1)
+         wt.j.sw("showUi", !1)
```

#### 511. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3066` → after: `L3034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3034) · [Before (L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3066)

```diff
-         gB.l.Gq("showUi", !0)
+         wt.j.sw("showUi", !0)
```

#### 512. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3069` → after: `L3037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3037) · [Before (L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3069)

```diff
-         0 === BB && (BB = 10), gB.l.Gq("setSelectedInventorySlotI", BB - 1), gB.l.Gq("numkeyPressed", BB)
+         0 === tt && (tt = 10), wt.j.sw("setSelectedInventorySlotI", tt - 1), wt.j.sw("numkeyPressed", tt)
```

#### 513. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3075-L3076` → after: `L3043-L3044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3043-L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3043-L3044) · [Before (L3075-L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3075-L3076)

```diff
-         const ZB = (0, DB.m)();
-         ZB ? (0, EB.C)(IB, !0, ZB) : (0, EB.A)(IB, "retentionFeatures", !(!BB.vW._tasks && !BB.vW._availableLeaderboards))
+         const Vt = (0, gt.i)();
+         Vt ? (0, Tt.G)(et, !0, Vt) : (0, Tt.C)(et, "retentionFeatures", !(!tt.OJ._tasks && !tt.OJ._availableLeaderboards))
```

#### 514. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3078-L3079` → after: `L3046-L3047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3046-L3047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3046-L3047) · [Before (L3078-L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3078-L3079)

```diff
-         (0, EB.C)(IB, (0, aB.e)((0, pB.c)()), (() => {
-           (0, aB.l)(BB.zW.aU(BB.Jm))
+         (0, Tt.G)(et, (0, Rt.b)((0, ct.c)()), (() => {
+           (0, Rt.f)(tt.mJ.YM(tt.lL))
```

#### 515. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3082` → after: `L3050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3050) · [Before (L3082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3082)

```diff
-         gB.l.Gq("toggleFullCoordinateOverlay")
+         wt.j.sw("toggleFullCoordinateOverlay")
```

#### 516. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3085` → after: `L3053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3053) · [Before (L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3085)

```diff
-         (0, iB.d)().client.cameraController.swapCameraZoom()
+         (0, St.c)().client.cameraController.swapCameraZoom()
```

#### 517. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3088` → after: `L3056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3056) · [Before (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3088)

```diff
-         (0, EB.A)(BB, "inviteLink", yB.featureFlags.canUseInviteLinks)
+         (0, Tt.C)(tt, "inviteLink", Nt.featureFlags.canUseInviteLinks)
```

#### 518. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3090` → after: `L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3058) · [Before (L3090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3090)

```diff
-         (0, wB.d)() || gB.l.Gq("YKeyPressed")
+         (0, ht.e)() || wt.j.sw("YKeyPressed")
```

#### 519. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3092` → after: `L3060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3060) · [Before (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3092)

```diff
-         (0, wB.d)() || gB.l.Gq("XKeyPressed")
+         (0, ht.e)() || wt.j.sw("XKeyPressed")
```

#### 520. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3094` → after: `L3062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3062) · [Before (L3094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3094)

```diff
-         gB.l.Gq("requestEmoteWheelHoldOpen")
+         wt.j.sw("requestEmoteWheelHoldOpen")
```

#### 521. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3096` → after: `L3064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3064) · [Before (L3096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3096)

```diff
-         gB.l.Gq("requestEmoteWheelHoldRelease")
+         wt.j.sw("requestEmoteWheelHoldRelease")
```

#### 522. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3098-L3099` → after: `L3066-L3067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3066-L3067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3066-L3067) · [Before (L3098-L3099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3098-L3099)

```diff
-         if ("inGame" === YB.d.get("gameState")) {
-           BB.zW.getState(BB.Jm, "playerCameraAdjustment").zoomKeyPressed = !0, (0, iB.d)().client.cameraController.handleZoomKeyPressed()
+         if ("inGame" === Wt.b.get("gameState")) {
+           tt.mJ.getState(tt.lL, "playerCameraAdjustment").zoomKeyPressed = !0, (0, St.c)().client.cameraController.handleZoomKeyPressed()
```

#### 523. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3102` → after: `L3070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3070) · [Before (L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3102)

```diff
-         BB.zW.getState(BB.Jm, "playerCameraAdjustment").zoomKeyPressed = !1
+         tt.mJ.getState(tt.lL, "playerCameraAdjustment").zoomKeyPressed = !1
```

#### 524. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3109` → after: `L3077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3077) · [Before (L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3109)

```diff
-         "inGame" !== YB.d.get("gameState") || (0, EB.p)() || (gB.l.Gq("ctrlCrouchWithoutFullscreen"), BB.preventDefault())
+         "inGame" !== Wt.b.get("gameState") || (0, Tt.u)() || (wt.j.sw("ctrlCrouchWithoutFullscreen"), tt.preventDefault())
```

#### 525. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3135` → after: `L3103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3103) · [Before (L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3135)

```diff
-         "inGame" === YB.d.get("gameState") && BB.ctrlKey && !(0, EB.p)() && BB.preventDefault()
+         "inGame" === Wt.b.get("gameState") && tt.ctrlKey && !(0, Tt.u)() && tt.preventDefault()
```

#### 526. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3140-L3141` → after: `L3108-L3109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3108-L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3108-L3109) · [Before (L3140-L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3140-L3141)

```diff
-       const dI = IB => (0, bB.h)(BB, IB),
-         CI = IB => (0, bB.l)(BB, IB),
+       const Je = et => (0, pt.i)(tt, et),
+         Ce = et => (0, pt.k)(tt, et),
```

#### 527. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3145` → after: `L3113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3113) · [Before (L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3145)

```diff
-         SB.o.frame(IB, BB.camera.heading, BB.camera.pitch, SB.j.drawn), (0, oB.e)(BB.camera.heading), (0, bB.o)(BB, QI, sI), (0, iB.d)().client.triggerGameCallback("onAfterRender", IB, {
+         te.o.frame(et, tt.camera.heading, tt.camera.pitch, te.j.drawn), (0, Dt.g)(tt.camera.heading), (0, pt.m)(tt, ue, Ke), (0, St.c)().client.triggerGameCallback("onAfterRender", et, {
```

#### 528. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3151` → after: `L3119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3119) · [Before (L3151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3151)

```diff
-           tanHalfFovY: Math.tan(BB.Ig.qS().fov / 2),
+           tanHalfFovY: Math.tan(tt.Bf.XT().fov / 2),
```

#### 529. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3153-L3154` → after: `L3121-L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3121-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3121-L3122) · [Before (L3153-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3153-L3154)

```diff
-             x: xB.b,
-             y: (0, xB.g)()
+             x: xt.d,
+             y: (0, xt.m)()
```

#### 530. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3159-L3162` → after: `L3127-L3130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3127-L3130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3127-L3130) · [Before (L3159-L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3159-L3162)

```diff
-       })), BB.camera.lH = (0, VB.startLookDebug)("js"), BB.inputs.pM = VB.noteLookDroppedCopy, (0, KB.t)("remesh") && (0, II.j)(BB), BB.on("beforeInputs", (() => {
-         if ((0, OB.d)()) return BB.inputs.zD.dx = 0, void(BB.inputs.zD.dy = 0);
-         if (BB.camera.zD.dx += BB.inputs.zD.dx, BB.camera.zD.dy += BB.inputs.zD.dy, 0 !== BB.inputs.zD.dx || 0 !== BB.inputs.zD.dy) {
-           BB.zW.getState(BB.Jm, "playerCameraAdjustment").lastPointerMove = Date.now()
+       })), tt.camera.pR = (0, nt.startLookDebug)("js"), tt.inputs.HI = nt.noteLookDroppedCopy, (0, st.v)("remesh") && (0, Ve.j)(tt), tt.on("beforeInputs", (() => {
+         if ((0, vt.c)()) return tt.inputs.rU.dx = 0, void(tt.inputs.rU.dy = 0);
+         if (tt.camera.rU.dx += tt.inputs.rU.dx, tt.camera.rU.dy += tt.inputs.rU.dy, 0 !== tt.inputs.rU.dx || 0 !== tt.inputs.rU.dy) {
+           tt.mJ.getState(tt.lL, "playerCameraAdjustment").lastPointerMove = Date.now()
```

#### 531. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3164` → after: `L3132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3132) · [Before (L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3164)

```diff
-         BB.inputs.zD.dx = 0, BB.inputs.zD.dy = 0
+         tt.inputs.rU.dx = 0, tt.inputs.rU.dy = 0
```

#### 532. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3174` → after: `L3142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3142) · [Before (L3174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3174)

```diff
-           const IB = eB.f.droppedBlockSize / 2;
+           const et = rt.e.droppedBlockSize / 2;
```

#### 533. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3177-L3181` → after: `L3145-L3149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3145-L3149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3145-L3149) · [Before (L3177-L3181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3177-L3181)

```diff
-       BB.on("Iz", (function(IB) {
-         gB.l.Gq("noaTick", IB);
-         const ZB = (0, iB.d)().client;
-         if (ZB.triggerGameCallback("Iz", IB), ZB.isClientGameSessionActive()) try {
-           kB.d.Iz(IB)
+       tt.on("BQ", (function(et) {
+         wt.j.sw("noaTick", et);
+         const Vt = (0, St.c)().client;
+         if (Vt.triggerGameCallback("BQ", et), Vt.isClientGameSessionActive()) try {
+           jt.c.BQ(et)
```

#### 534. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3185` → after: `L3153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3153) · [Before (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3185)

```diff
-         if (!BB.zW.hZB(BB.Jm).isAlive) return;
+         if (!tt.mJ.aVt(tt.lL).isAlive) return;
```

#### 535. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3187-L3198` → after: `L3155-L3166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3155-L3166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3155-L3166) · [Before (L3187-L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3187-L3198)

```diff
-           const BB = (0, iB.h)();
-           "number" === typeof BB.vW.speedMultiplier && "number" === typeof BB.vW.jumpAmount && (0, TB.sendColyMessage)(nB.hi, {
-             nv: (0, LB.d)(BB.vW.speedMultiplier),
-             hv: (0, LB.b)(BB.vW.jumpAmount),
-             zv: (0, LB.d)(BB.vW.crouchingSpeed),
-             Fv: (0, LB.d)(BB.vW.walkingSpeed),
-             Nv: (0, LB.d)(BB.vW.runningSpeed),
-             gv: (0, LB.b)(BB.PBB),
-             qv: BB.zW.dIB(BB.Jm).jumpForce,
-             yv: BB.zW.zK(1).width,
-             Uv: BB.zW.zK(1).height,
-             Wv: BB.zW.vx(1).Wv
+           const tt = (0, St.e)();
+           "number" === typeof tt.OJ.speedMultiplier && "number" === typeof tt.OJ.jumpAmount && (0, Ot.sendColyMessage)(Xt.bi, {
+             Md: (0, ot.f)(tt.OJ.speedMultiplier),
+             bd: (0, ot.d)(tt.OJ.jumpAmount),
+             Jd: (0, ot.f)(tt.OJ.crouchingSpeed),
+             Cd: (0, ot.f)(tt.OJ.walkingSpeed),
+             ud: (0, ot.f)(tt.OJ.runningSpeed),
+             Kd: (0, ot.d)(tt.utt),
+             hd: tt.mJ.fet(tt.lL).jumpForce,
+             vd: tt.mJ.RY(1).width,
+             Wd: tt.mJ.RY(1).height,
+             Sd: tt.mJ.YG(1).Sd
```

#### 536. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3201-L3207` → after: `L3169-L3175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3169-L3175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3169-L3175) · [Before (L3201-L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3201-L3207)

```diff
-         const JB = BB.zW.UZB();
-         if ((JB.jump || JB.forward || JB.backward || JB.left || JB.right || JB.sprint) && gB.l.Gq("usedKeyboard"), BB.zW.bIB(BB.Jm) && !0 === BB.vW.canPickUpItems) {
-           const IB = BB.zW.aU(BB.Jm),
-             ZB = (0, dB.t)(kI),
-             JB = (0, dB.v)(kI);
-           OI[0] = IB[0] - ZB, OI[1] = IB[1] - .6 * JB, OI[2] = IB[2] - ZB, YI[0] = IB[0] + ZB, YI[1] = IB[1] + eB.f.fq + .6 * JB, YI[2] = IB[2] + ZB;
-           const oB = BB.zW.bvB(iI, BB.zW.names.autoRotate),
+         const qt = tt.mJ.hVt();
+         if ((qt.jump || qt.forward || qt.backward || qt.left || qt.right || qt.sprint) && wt.j.sw("usedKeyboard"), tt.mJ.VVt(tt.lL) && !0 === tt.OJ.canPickUpItems) {
+           const et = tt.mJ.YM(tt.lL),
+             Vt = (0, Jt.q)(He),
+             qt = (0, Jt.t)(He);
+           ve[0] = et[0] - Vt, ve[1] = et[1] - .6 * qt, ve[2] = et[2] - Vt, We[0] = et[0] + Vt, We[1] = et[1] + rt.e.Yy + .6 * qt, We[2] = et[2] + Vt;
+           const Dt = tt.mJ.jjt(Se, tt.mJ.names.autoRotate),
```

#### 537. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3210` → after: `L3178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3178) · [Before (L3210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3210)

```diff
-             } = (0, iB.d)().client,
+             } = (0, St.c)().client,
```

#### 538. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3214` → after: `L3182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3182) · [Before (L3214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3214)

```diff
-               const IB = BB.zW.getState(hB, "itemState");
+               const et = tt.mJ.getState(Qt, "itemState");
```

#### 539. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3218` → after: `L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3186) · [Before (L3218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3218)

```diff
-               if (IB.wJ) {
+               if (et.Fq) {
```

#### 540. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3222-L3223` → after: `L3190-L3191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3190-L3191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3190-L3191) · [Before (L3222-L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3222-L3223)

```diff
-                   mv: ZB,
-                   ev: JB
+                   pd: Vt,
+                   sd: qt
```

#### 541. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3226-L3227` → after: `L3194-L3195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3194-L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3194-L3195) · [Before (L3226-L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3226-L3227)

```diff
-               const oB = BB.zW.getState(ZB, "itemState");
-               if (oB.wJ && null === JB) continue;
+               const Dt = tt.mJ.getState(Vt, "itemState");
+               if (Dt.Fq && null === qt) continue;
```

#### 542. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3235` → after: `L3203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3203) · [Before (L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3235)

```diff
-                 } = BB.zW.lIB(BB.Jm).pickUpItem({
+                 } = tt.mJ.tVt(tt.lL).pickUpItem({
```

#### 543. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3242` → after: `L3210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3210) · [Before (L3242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3242)

```diff
-                 FB = AB.b.pickUp(oB, zB), oB.amount -= zB, oB.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === oB.amount ? NB = !0 : oB.creationTime = Date.now() + oI
+                 Et = Yt.d.pickUp(Dt, lt), Dt.amount -= lt, Dt.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Dt.amount ? ft = !0 : Dt.creationTime = Date.now() + me
```

#### 544. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3244-L3252` → after: `L3212-L3220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3212-L3220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3212-L3220) · [Before (L3244-L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3244-L3252)

```diff
-               const gB = (0, iB.d)().client.inventoryPrediction.record(FB);
-               (0, TB.sendColyMessage)(nB.Gh, {
-                 mv: null === JB ? ZB : "",
-                 Xv: zB,
-                 Lv: cB.e,
-                 lG: gB,
-                 ev: JB
-               }, !0), NB && (kB && GB.onPickedUpOffline(ZB, gB, JB), null === JB && BB.zW.deleteEntity(ZB));
-               vB.d.play("pickUp", eB.f.pickupSoundVol).rate(1 + Math.random() * eB.f.pickupSoundRateVariation)
+               const wt = (0, St.c)().client.inventoryPrediction.record(Et);
+               (0, Ot.sendColyMessage)(Xt.yh, {
+                 pd: null === qt ? Vt : "",
+                 xd: lt,
+                 Td: Ht.f,
+                 Tm: wt,
+                 sd: qt
+               }, !0), ft && (jt && mt.onPickedUpOffline(Vt, wt, qt), null === qt && tt.mJ.deleteEntity(Vt));
+               dt.e.play("pickUp", rt.e.pickupSoundVol).rate(1 + Math.random() * rt.e.pickupSoundRateVariation)
```

#### 545. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3255-L3256` → after: `L3223-L3224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3223-L3224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3223-L3224) · [Before (L3255-L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3255-L3256)

```diff
-         if (!BB.zW.RIB(BB.Jm)) return;
-         const oB = BB.inputs.zD.OIB;
+         if (!tt.mJ.oet(tt.lL)) return;
+         const Dt = tt.inputs.rU.het;
```

#### 546. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3259` → after: `L3227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3227) · [Before (L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3259)

```diff
-           BB.inputs.state["mid-fire"] || BB.inputs.state.Alt || !BB.vW.useInventory ? (BB.inputs.state["mid-fire"] && gB.l.Gq("requestEmoteWheelClose"), (0, iB.d)().client.cameraController.handleScrollZoom(IB)) : gB.l.Gq("ScrollInventorySlot", IB)
+           tt.inputs.state["mid-fire"] || tt.inputs.state.Alt || !tt.OJ.useInventory ? (tt.inputs.state["mid-fire"] && wt.j.sw("requestEmoteWheelClose"), (0, St.c)().client.cameraController.handleScrollZoom(et)) : wt.j.sw("ScrollInventorySlot", et)
```

#### 547. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3261-L3262` → after: `L3229-L3230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3229-L3230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3229-L3230) · [Before (L3261-L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3261-L3262)

```diff
-       })), qB.c.subscribe("droppedItemScale", (BB => {
-         kI = "number" === typeof BB && isFinite(BB) ? BB : GI
+       })), yt.b.subscribe("droppedItemScale", (tt => {
+         He = "number" === typeof tt && isFinite(tt) ? tt : de
```

#### 548. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3267` → after: `L3235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3235) · [Before (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3267)

```diff
-       const BB = (0, iB.h)();
+       const tt = (0, St.e)();
```

#### 549. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3269` → after: `L3237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3237) · [Before (L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3269)

```diff
-         for (const IB in WB.u) {
+         for (const et in bt.r) {
```

#### 550. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3271` → after: `L3239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3239) · [Before (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3271)

```diff
-           for (const ZB of WB.u[IB]) BB.inputs.bind(IB, ZB)
+           for (const Vt of bt.r[et]) tt.inputs.bind(et, Vt)
```

#### 551. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3274-L3275` → after: `L3242-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3242-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3242-L3243) · [Before (L3274-L3275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3274-L3275)

```diff
-     MI(yI = {}, UI = ["EXh^,UECPUE", '"I3=ngFqc=H1XSjv', "p=!$Jrb`IEHkL", "WR=xOzM7`KrZ}b%g?ZzJE7dsOu)oQbbCeSMAz7GuLBi,oPk,;GX=", "hFPDJ}=%#h0DE93|X8", 'X(C;^Ddi8]0.y"J.mh9x/i%yR', ":aHR,U}x8?", "IK!XedVEs?;H!B](h7L59|BL", 'UUS=uPH0D)+*bNoOS|!/ti/)e1{"`m', "8hRY:|!h0`_i.aL,tOY;10 … [truncated]
-       var BB, IB, ZB, TB = [function() {
+     Re(ae = {}, Me = ['=37!VRzU2@wR$"@$R}!VTc#q804', "#hQ}8x9ng/1i{", "^HF#)6y.4rQ.O6iq{h)si6vq|1.GCu", 'N(|*#"{q)hQ<{', '`34&xQ34TMQl"m$F]rJ:C!*R9X}YP"LR&$:V>>]PiX<jrN*', ".3o&SO=0HLUakwT,J<<24YxUO=8LkwV#Y1V!$Uvi|>C0.>fS(f;EUQ102@=s5", ">uG;{W#v2OyG0HP^dOHPDwTPeh!jh/O7m(f|MeKPVS … [truncated]
+       Re(tt[We[12]] = We[2], tt[We[5]] = [function() {
```

#### 552. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3283-L3284` → after: `L3251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3251) · [Before (L3283-L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3283-L3284)

```diff
-       }];
-       MI(BB = void 0, IB = []);
+       }], tt[-We[13]] = We[18], tt[-We[14]] = []);
```

#### 553. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3286` → after: `L3253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3253) · [Before (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3286)

```diff
-         MI(BB = Object, IB[YI[25]]("".__proto__.constructor.name))
+         Re(tt[-We[13]] = Object, tt[-We[14]][We[26]]("".__proto__.constructor.name))
```

#### 554. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3288-L3292` → after: `L3255-L3258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3255-L3258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3255-L3258) · [Before (L3288-L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3288-L3292)

```diff
-       BB: for (ZB = YI[2]; ZB < TB[YI[12]]; ZB++) try {
-         var JB;
-         for (BB = TB[ZB](), JB = YI[2]; JB < IB[YI[12]]; JB++)
-           if (typeof BB[IB[JB]] === YI[13]) continue BB;
-         return BB
+       tt: for (tt[We[15]] = We[2]; tt[We[15]] < tt[We[5]][We[12]]; tt[We[15]]++) try {
+         for (tt[-We[13]] = tt[We[5]][tt[We[15]]](), tt[We[16]] = We[2]; tt[We[16]] < tt[-We[14]][We[12]]; tt[We[16]]++)
+           if (typeof tt[-We[13]][tt[-We[14]][tt[We[16]]]] === We[17]) continue tt;
+         return tt[-We[13]]
```

#### 555. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3294-L3296` → after: `L3260-L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3260-L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3260-L3262) · [Before (L3294-L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3294-L3296)

```diff
-       return BB || this
-     }() || {}, dI = WI.TextDecoder, CI = WI.Uint8Array, QI = WI.UN, sI = WI.String || String, wI = WI.Array || Array, OI = function(...BB) {
-       return MI(BB[YI[12]] = YI[2], BB[YI[26]] = new wI(YI[57]), BB[YI[0]] = sI[YI[22]] || sI.fromCharCode, BB[-YI[15]] = []),
+       return tt[-We[13]] || this
+     }() || {}, Je = be.TextDecoder, Ce = be.Uint8Array, ue = be.mf, Ke = be.String || String, he = be.Array || Array, ve = function(...tt) {
+       return Re(tt[We[12]] = We[2], tt[We[27]] = new he(We[89]), tt[-We[28]] = Ke[We[23]] || Ke.fromCharCode, tt[We[1]] = []),
```

#### 556. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3298-L3299` → after: `L3264-L3265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3264-L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3264-L3265) · [Before (L3298-L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3298-L3299)

```diff
-           for (MI(IB[YI[12]] = YI[0], IB[-YI[19]] = YI[14], IB[YI[18]] = YI[14], IB[YI[17]] = IB[YI[2]][YI[12]], BB[-YI[15]][YI[12]] = YI[2]), IB[YI[16]] = YI[2]; IB[YI[16]] < IB[YI[17]];) MI(IB[YI[18]] = IB[YI[2]][IB[YI[16]]++], IB[YI[18]] <= YI[56] ? IB[-YI[19]] = IB[YI[18]] :  … [truncated]
-           return BB[-YI[15]].join("")
+           for (Re(et[We[12]] = We[0], et[We[0]] = We[18], et[We[20]] = We[18], et[We[4]] = et[We[2]][We[12]], tt[We[1]][We[12]] = We[2]), et[-We[19]] = We[2]; et[-We[19]] < et[We[4]];) Re(et[We[20]] = et[We[2]][et[-We[19]]++], et[We[20]] <= We[83] ? et[We[0]] = et[We[20]] : et[We … [truncated]
+           return tt[We[1]].join("")
```

#### 557. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3302-L3311` → after: `L3268-L3282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3268-L3282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3268-L3282) · [Before (L3302-L3311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3302-L3311)

```diff
-       BB[YI[12]] = YI[0], iI(110) + "D" in HI && function(...BB) {
-         MI(BB[YI[12]] = YI[2], BB[YI[43]] = function(...BB) {
-           for (MI(BB[YI[12]] = YI[0], BB[-YI[29]] = YI[2], BB[YI[38]] = {}, BB[-YI[39]] = YI[2], BB[YI[40]] = YI[2], BB[-YI[42]] = YI[2], BB[YI[21]] = BB[YI[2]].length), BB[YI[23]] = YI[2]; BB[YI[23]] < BB[YI[21]]; BB[YI[23]]++) {
-             for (MI(BB[YI[38]] = {}, BB[-YI[39]] = YI[2], BB[YI[40]] = YI[0]), BB[YI[41]] = BB[YI[23]] + YI[0]; BB[YI[41]] < BB[YI[21]]; BB[YI[41]]++) BB[YI[2]][BB[YI[23]]].x !== BB[YI[2]][BB[YI[41]]].x || BB[YI[2]][BB[YI[23]]].y !== BB[YI[2]][BB[YI[41]]].y ? (BB[YI[2]][BB[YI[23] … [truncated]
-             MI(BB[-YI[39]] += BB[YI[40]], BB[-YI[29]] = Math.max(BB[-YI[29]], BB[-YI[39]]))
-           }
-           return BB[-YI[29]]
-         }, console.log(BB[YI[43]]))
-       }(), BB[YI[53]] = YI[2];
-       for (const IB in BB[YI[2]]) {
+       function et(...tt) {
+         return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = function(...tt) {
+           for (Re(tt[We[12]] = We[0], tt[We[47]] = 'WAsbatYpgjH#h$ZU.X>B*3)uRe9~]/qO!D`8irIV:oE{nF_&d?fNG%LKc;"m0PJlz<v,SkTw[M+Q2x}(5@4|71^6=yC', tt[We[45]] = "" + (tt[We[2]] || ""), tt[We[46]] = tt[We[45]].length, tt[We[9]] = [], tt[We[49]] = We[2], tt[We[37]] = We[2], tt[We[48] … [truncated]
+             if (tt[We[42]] = tt[We[47]].indexOf(tt[We[45]][tt[We[10]]]), tt[We[42]] !== -We[0])
+               if (tt[We[48]] < We[2]) tt[We[48]] = tt[We[42]];
+               else {
+                 Re(tt[We[48]] += tt[We[42]] * We[29], tt[We[49]] |= tt[We[48]] << tt[We[37]], tt[We[37]] += (tt[We[48]] & We[30]) > We[31] ? We[32] : We[33]);
+                 do {
+                   Re(tt[We[9]].push(tt[We[49]] & We[11]), tt[We[49]] >>= We[10], tt[We[37]] -= We[10])
+                 } while (tt[We[37]] > We[24]);
+                 tt[We[48]] = -We[0]
+               } return tt[We[48]] > -We[0] && tt[We[9]].push((tt[We[49]] | tt[We[48]] << tt[We[37]]) & We[11]), Se(tt[We[9]])
+         }(Me[tt[We[2]]]) : ae[tt[We[2]]]
+       }
+       tt[We[12]] = We[0], et(101) + "V" in ce && function(...tt) {
```

#### 558. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3313-L3315` → after: `L3284-L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3284-L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3284-L3286) · [Before (L3313-L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3313-L3315)

```diff
-           for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = '2AVMBstK3=C`^5NO@y~6nx*Q>i1$(TIlL8U#+[a;zgS<b.9pqc)%YW/:mw_DvkE&h,R0X?ZF}7d4f!jJ|]GrPe"uoH{', BB[YI[20]] = "" + (BB[YI[2]] || ""), BB[YI[27]] = BB[YI[20]].length, BB[YI[16]] = [], BB[YI[32]] = YI[2], BB[YI[46]] = YI[2], BB[YI[30] … [truncated]
-             if (BB[YI[45]] = BB[YI[0]].indexOf(BB[YI[20]][BB[-YI[44]]]), BB[YI[45]] !== -YI[0])
-               if (BB[YI[30]] < YI[2]) BB[YI[30]] = BB[YI[45]];
+           for (Re(tt[We[12]] = We[0], tt[We[51]] = 'AIV06tO54m#XFgBJf?MwQ_zTslpU[xq8SeL3Ka;](,H*9i^.!G1CrZWDRN&>EPkv<chdj2no%b}="7$`y/{u@)+~:|Y', tt[-We[50]] = "" + (tt[We[2]] || ""), tt[We[46]] = tt[-We[50]].length, tt[-We[55]] = [], tt[We[53]] = We[2], tt[We[54]] = We[2], tt[-W … [truncated]
+             if (tt[We[52]] = tt[We[51]].indexOf(tt[-We[50]][tt[We[3]]]), tt[We[52]] !== -We[0])
+               if (tt[-We[19]] < We[2]) tt[-We[19]] = tt[We[52]];
```

#### 559. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3317` → after: `L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3288) · [Before (L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3317)

```diff
-                 MI(BB[YI[30]] += BB[YI[45]] * YI[31], BB[YI[32]] |= BB[YI[30]] << BB[YI[46]], BB[YI[46]] += (BB[YI[30]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
+                 Re(tt[-We[19]] += tt[We[52]] * We[29], tt[We[53]] |= tt[-We[19]] << tt[We[54]], tt[We[54]] += (tt[-We[19]] & We[30]) > We[31] ? We[32] : We[33]);
```

#### 560. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3319-L3322` → after: `L3290-L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3290-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3290-L3293) · [Before (L3319-L3322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3319-L3322)

```diff
-                   MI(BB[YI[16]].push(BB[YI[32]] & YI[11]), BB[YI[32]] >>= YI[10], BB[YI[46]] -= YI[10])
-                 } while (BB[YI[46]] > YI[23]);
-                 BB[YI[30]] = -YI[0]
-               } return BB[YI[30]] > -YI[0] && BB[YI[16]].push((BB[YI[32]] | BB[YI[30]] << BB[YI[46]]) & YI[11]), pI(BB[YI[16]])
+                   Re(tt[-We[55]].push(tt[We[53]] & We[11]), tt[We[53]] >>= We[10], tt[We[54]] -= We[10])
+                 } while (tt[We[54]] > We[24]);
+                 tt[-We[19]] = -We[0]
+               } return tt[-We[19]] > -We[0] && tt[-We[55]].push((tt[We[53]] | tt[-We[19]] << tt[We[54]]) & We[11]), Se(tt[-We[55]])
```

#### 561. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3326` → after: `L3297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3297) · [Before (L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3326)

```diff
-           return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = ZB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
+           return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = Vt(Me[tt[We[2]]]) : ae[tt[We[2]]]
```

#### 562. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3328-L3372` → after: `L3299-L3302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3299-L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3299-L3302) · [Before (L3328-L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3328-L3372)

```diff
- 
-         function JB() {
-           module.exports = async (BB = (...BB) => {
-             throw BB[YI[12]] = YI[2], new Error(function(...BB) {
-               return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = function(...BB) {
-                 for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = 'Q|w%~*Pk<Vr6.;[p+Hl)sB?15MCaZJ9E3AdX]b(qmD0LTnt^g:K@I{oyO}2j`U8#=x"4YhR!N$7WvSGe>uzfc_F,&i/', BB[YI[47]] = "" + (BB[YI[2]] || ""), BB[YI[27]] = BB[YI[47]].length, BB[-YI[20]] = [], BB[-YI[49]] = YI[2], BB[YI[46]] = YI[2], B … [truncated]
-                   if (BB[YI[45]] = BB[YI[0]].indexOf(BB[YI[47]][BB[YI[48]]]), BB[YI[45]] !== -YI[0])
-                     if (BB[YI[41]] < YI[2]) BB[YI[41]] = BB[YI[45]];
-                     else {
-                       MI(BB[YI[41]] += BB[YI[45]] * YI[31], BB[-YI[49]] |= BB[YI[41]] << BB[YI[46]], BB[YI[46]] += (BB[YI[41]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
-                       do {
-                         MI(BB[-YI[20]].push(BB[-YI[49]] & YI[11]), BB[-YI[49]] >>= YI[10], BB[YI[46]] -= YI[10])
-                       } while (BB[YI[46]] > YI[23]);
-                       BB[YI[41]] = -YI[0]
-                     } return BB[YI[41]] > -YI[0] && BB[-YI[20]].push((BB[-YI[49]] | BB[YI[41]] << BB[YI[46]]) & YI[11]), pI(BB[-YI[20]])
-               }(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
- ... (29 more removed lines; see GitHub link above)
+         tt[We[12]] = We[2], Re(tt[-We[57]] = et(102) + Ot(We[20]) + Ot(We[86]) + Ot(105), tt[We[45]] = Ot(We[56]) + Ot(107) + Ot(108) + "?", tt[We[56]] = Ot(109) + Ot(110) + Ot(We[34]) + Ot(112) + Ot(113), tt[-We[57]].match(tt[We[45]] + tt[We[56]]))
+       }(), tt[-We[58]] = We[2];
+       for (const Vt in tt[We[2]]) tt[-We[58]]++;
+       return tt[-We[58]]
```

#### 563. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3375-L3376` → after: `L3305-L3319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3305-L3319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3305-L3319) · [Before (L3375-L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3375-L3376)

```diff
-           return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = function(BB) {
-             var IB, ZB, TB, JB, oB, GB, vB;
+           return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = function(...tt) {
+             for (Re(tt[We[12]] = We[0], tt[We[47]] = 'rCpPHoQ.htJGez4A|T1_[#fZ$u+sBM:3vSE^)?<VI!7lUgXD"aqib6{(Wj;w`%d}9=5208c]KFnk>&m/LN@OxRy*~Y,', tt[-We[59]] = "" + (tt[We[2]] || ""), tt[We[4]] = tt[-We[59]].length, tt[We[60]] = [], tt[-We[60]] = We[2], tt[We[22]] = We[2], tt[W … [truncated]
+               if (tt[We[61]] = tt[We[47]].indexOf(tt[-We[59]][tt[We[10]]]), tt[We[61]] !== -We[0])
+                 if (tt[We[43]] < We[2]) tt[We[43]] = tt[We[61]];
+                 else {
+                   Re(tt[We[43]] += tt[We[61]] * We[29], tt[-We[60]] |= tt[We[43]] << tt[We[22]], tt[We[22]] += (tt[We[43]] & We[30]) > We[31] ? We[32] : We[33]);
+                   do {
+                     Re(tt[We[60]].push(tt[-We[60]] & We[11]), tt[-We[60]] >>= We[10], tt[We[22]] -= We[10])
+                   } while (tt[We[22]] > We[24]);
+                   tt[We[43]] = -We[0]
+                 } return tt[We[43]] > -We[0] && tt[We[60]].push((tt[-We[60]] | tt[We[43]] << tt[We[22]]) & We[11]), Se(tt[We[60]])
+           }(Me[tt[We[2]]]) : ae[tt[We[2]]]
+         }(114) in ce && function(...tt) {
+           function et(tt) {
+             var et, Vt, Ot, qt, Dt, mt, dt, jt = 'Dx~}6P)anI5p!*9=?TU^jdX7OEb&FkcRHN:QwZSAyqBrs<oCiWM@+[>K$",(|23lGmVgvJfehtuLz_41{8.%`];0#/Y';
```

#### 564. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3378` → after: `L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3321) · [Before (L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3378)

```diff
-               var kB = 'Kvz~A|usqB0C!lJ8X9nHa;L#h,?D2$wr<IUO}%.+*"R]6(&_ZW={4:^t@/[`>PgS)75TYdcE3iNFx1GyfQbVoMejmkp'.indexOf(IB[vB]);
+               var Ht = jt.indexOf(et[dt]);
```

#### 565. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3382` → after: `L3325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3325) · [Before (L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3382)

```diff
-                   MI(GB += kB * YI[31], JB |= GB << oB, oB += (GB & YI[33]) > YI[34] ? YI[35] : YI[36]);
+                   Re(mt += Ht * We[29], qt |= mt << Dt, Dt += (mt & We[30]) > We[31] ? We[32] : We[33]);
```

#### 566. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3385` → after: `L3328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3328) · [Before (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3385)

```diff
-                   } while (oB > YI[23]);
+                   } while (Dt > We[24]);
```

#### 567. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3390-L3391` → after: `L3333-L3334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3333-L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3333-L3334) · [Before (L3390-L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3390-L3391)

```diff
-           }(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
-         }(117) + "C" in HI && function(...BB) {
+           }
+ 
```

#### 568. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3393-L3402` → after: `L3336-L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3336-L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3336-L3343) · [Before (L3393-L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3393-L3402)

```diff
-             for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = 'OVsH)&fldLb7iy@_pxA(~G%["N{=BW3YI>C#Dc2Pru5gRFMJQtEn}Kj,o1|q6?<vUXwz8e*^.;]a$m4TS:90kh!+/Z`', BB[YI[18]] = "" + (BB[YI[2]] || ""), BB[YI[17]] = BB[YI[18]].length, BB[YI[40]] = [], BB[YI[32]] = YI[2], BB[YI[55]] = YI[2], BB[-YI[ … [truncated]
-               if (BB[YI[48]] = BB[YI[0]].indexOf(BB[YI[18]][BB[YI[10]]]), BB[YI[48]] !== -YI[0])
-                 if (BB[-YI[54]] < YI[2]) BB[-YI[54]] = BB[YI[48]];
-                 else {
-                   MI(BB[-YI[54]] += BB[YI[48]] * YI[31], BB[YI[32]] |= BB[-YI[54]] << BB[YI[55]], BB[YI[55]] += (BB[-YI[54]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
-                   do {
-                     MI(BB[YI[40]].push(BB[YI[32]] & YI[11]), BB[YI[32]] >>= YI[10], BB[YI[55]] -= YI[10])
-                   } while (BB[YI[55]] > YI[23]);
-                   BB[-YI[54]] = -YI[0]
-                 } return BB[-YI[54]] > -YI[0] && BB[YI[40]].push((BB[YI[32]] | BB[-YI[54]] << BB[YI[55]]) & YI[11]), pI(BB[YI[40]])
+             return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = et(Me[tt[We[2]]]) : ae[tt[We[2]]]
+           }
+ 
+           function Ot(...tt) {
+             tt[We[12]] = We[0];
+             const et = {};
+             for (let Vt of tt[We[2]].replace(/[^w]/g, "").toLowerCase()) et[Vt] = et[Vt] + We[0] || We[0];
+             return et
```

#### 569. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3406` → after: `L3347-L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3347-L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3347-L3372) · [Before (L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3406)

```diff
-             return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = IB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
+             tt[We[12]] = We[1];
+             const et = buildCharMap(tt[We[2]]),
+               Vt = buildCharMap(tt[We[0]]);
+             for (let Ot in et)
+               if (et[Ot] !== Vt[Ot]) return We[39];
+             return Object.keys(et).length !== Object.keys(Vt).length ? We[39] : We[62]
+           }
+ 
+           function Dt(...tt) {
+             tt[We[12]] = We[0];
+             return mt(tt[We[2]]) !== 1 / 0
+           }
+ 
+           function mt(...tt) {
+             if (tt[We[12]] = We[0], !tt[We[2]]) return -We[0];
+             const et = mt(tt[We[2]].left),
+ ... (10 more added lines; see GitHub link above)
```

#### 570. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3411-L3413` → after: `L3376-L3378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3376-L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3376-L3378) · [Before (L3411-L3413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3411-L3413)

```diff
-           for (MI(BB[YI[12]] = YI[0], BB[YI[53]] = 'tJ!/B>10r~5xf"?6Y+n)iX*o@}[2$k(Uw9s43E8gQqy#D|;C,S&Al%]huZRj7v<NT.HVdWP:zM^b=cG`_FeLaOmKpI{', BB[YI[35]] = "" + (BB[YI[2]] || ""), BB[YI[17]] = BB[YI[35]].length, BB[YI[16]] = [], BB[YI[57]] = YI[2], BB[YI[46]] = YI[2], BB[YI[23 … [truncated]
-             if (BB[YI[45]] = BB[YI[53]].indexOf(BB[YI[35]][BB[YI[60]]]), BB[YI[45]] !== -YI[0])
-               if (BB[YI[23]] < YI[2]) BB[YI[23]] = BB[YI[45]];
+           for (Re(tt[We[12]] = We[0], tt[We[47]] = '3lNXhGDJpdoQ4Wq}cs(zASIE7!tU>r.~P8]|Bv;_)#CiKgMY=,*@`u:/^1%wf{[+y9bjO?ZRLe2T6nk0&FH"axm5$<V', tt[-We[63]] = "" + (tt[We[2]] || ""), tt[We[46]] = tt[-We[63]].length, tt[We[16]] = [], tt[We[64]] = We[2], tt[We[37]] = We[2], tt[We[ … [truncated]
+             if (tt[We[42]] = tt[We[47]].indexOf(tt[-We[63]][tt[We[10]]]), tt[We[42]] !== -We[0])
+               if (tt[We[6]] < We[2]) tt[We[6]] = tt[We[42]];
```

#### 571. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3415` → after: `L3380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3380) · [Before (L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3415)

```diff
-                 MI(BB[YI[23]] += BB[YI[45]] * YI[31], BB[YI[57]] |= BB[YI[23]] << BB[YI[46]], BB[YI[46]] += (BB[YI[23]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
+                 Re(tt[We[6]] += tt[We[42]] * We[29], tt[We[64]] |= tt[We[6]] << tt[We[37]], tt[We[37]] += (tt[We[6]] & We[30]) > We[31] ? We[32] : We[33]);
```

#### 572. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3417-L3420` → after: `L3382-L3385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3382-L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3382-L3385) · [Before (L3417-L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3417-L3420)

```diff
-                   MI(BB[YI[16]].push(BB[YI[57]] & YI[11]), BB[YI[57]] >>= YI[10], BB[YI[46]] -= YI[10])
-                 } while (BB[YI[46]] > YI[23]);
-                 BB[YI[23]] = -YI[0]
-               } return BB[YI[23]] > -YI[0] && BB[YI[16]].push((BB[YI[57]] | BB[YI[23]] << BB[YI[46]]) & YI[11]), pI(BB[YI[16]])
+                   Re(tt[We[16]].push(tt[We[64]] & We[11]), tt[We[64]] >>= We[10], tt[We[37]] -= We[10])
+                 } while (tt[We[37]] > We[24]);
+                 tt[We[6]] = -We[0]
+               } return tt[We[6]] > -We[0] && tt[We[16]].push((tt[We[64]] | tt[We[6]] << tt[We[37]]) & We[11]), Se(tt[We[16]])
```

#### 573. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3424` → after: `L3389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3389) · [Before (L3424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3424)

```diff
-           return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = IB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
+           return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = et(Me[tt[We[2]]]) : ae[tt[We[2]]]
```

#### 574. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3428-L3477` → after: `L3393-L3405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3393-L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3393-L3405) · [Before (L3428-L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3428-L3477)

```diff
-           MI(BB[YI[12]] = YI[2], BB[YI[17]] = function(...BB) {
-             for (MI(BB[YI[12]] = YI[0], BB[-YI[61]] = BB[YI[2]].length, BB[YI[47]] = [], BB[YI[17]] = YI[2], BB[YI[40]] = YI[2], BB[YI[2]].sort(((BB, IB) => BB - IB))), BB[YI[7]] = YI[2]; BB[YI[7]] < BB[-YI[61]]; BB[YI[7]]++)
-               if (!(BB[YI[7]] > YI[2] && BB[YI[2]][BB[YI[7]]] === BB[YI[2]][BB[YI[7]] - YI[0]]))
-                 for (MI(BB[YI[17]] = BB[YI[7]] + YI[0], BB[YI[40]] = BB[-YI[61]] - YI[0]); BB[YI[17]] < BB[YI[40]];)
-                   if (BB[YI[2]][BB[YI[7]]] + BB[YI[2]][BB[YI[17]]] + BB[YI[2]][BB[YI[40]]] < YI[2]) BB[YI[17]]++;
-                   else if (BB[YI[2]][BB[YI[7]]] + BB[YI[2]][BB[YI[17]]] + BB[YI[2]][BB[YI[40]]] > YI[2]) BB[YI[40]]--;
-             else {
-               for (BB[YI[47]].push([BB[YI[2]][BB[YI[7]]], BB[YI[2]][BB[YI[17]]], BB[YI[2]][BB[YI[40]]]]); BB[YI[17]] < BB[YI[40]] && BB[YI[2]][BB[YI[17]]] === BB[YI[2]][BB[YI[17]] + YI[0]];) BB[YI[17]]++;
-               for (; BB[YI[17]] < BB[YI[40]] && BB[YI[2]][BB[YI[40]]] === BB[YI[2]][BB[YI[40]] - YI[0]];) BB[YI[40]]--;
-               MI(BB[YI[17]]++, BB[YI[40]]--)
-             }
-             return BB[YI[47]]
-           }, console.log(BB[YI[17]]))
-         }
-         if (ZB(129) in HI && TB(), (0, UB.o)()) {
-           function JB(...BB) {
- ... (34 more removed lines; see GitHub link above)
+           var et;
+           Re(tt[We[12]] = We[2], et = function(tt) {
+             Re(this.uQ = tt, this.length = We[2], this.map = {}, this.head = We[65], this.tail = We[65])
+           }, et.prototype.get = function(...tt) {
+             var et;
+             return Re(tt[We[12]] = We[0], et = this.map[tt[We[2]]]), et ? (this.remove(et), this.insert(et.key, et.val), et.val) : -We[0]
+           }, et.prototype.put = function(...tt) {
+             Re(tt[We[12]] = We[1], this.map[tt[We[2]]] ? (this.remove(this.map[tt[We[2]]]), this.insert(tt[We[2]], tt[We[0]])) : this.length === this.uQ ? (this.remove(this.head), this.insert(tt[We[2]], tt[We[0]])) : (this.insert(tt[We[2]], tt[We[0]]), this.length++))
+           }, et.prototype.remove = function(...tt) {
+             Re(tt[We[12]] = We[0], tt[We[44]] = tt[We[2]].prev, tt[We[45]] = tt[We[2]].next), tt[We[45]] && (tt[We[45]].prev = tt[We[44]]), tt[We[44]] && (tt[We[44]].next = tt[We[45]]), this.head === tt[We[2]] && (this.head = tt[We[45]]), this.tail === tt[We[2]] && (this.tail = t … [truncated]
+           }, et.prototype.insert = function(...tt) {
+             Re(tt[We[12]] = We[1], tt[We[1]] = new List(tt[We[2]], tt[We[0]]), this.tail ? (this.tail.next = tt[We[1]], tt[We[1]].prev = this.tail, this.tail = tt[We[1]]) : (this.tail = tt[We[1]], this.head = tt[We[1]]), this.map[tt[We[2]]] = tt[We[1]])
+           }, console.log(et))
```

#### 575. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3479` → after: `L3407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3407) · [Before (L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3479)

```diff
-         cI = YI[2]
+         Vt(118) + "T" in ce && Ot(), (0, Mt[We[61]])() && (0, Qt[We[46]])("4 "), Xe = We[2]
```

#### 576. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3483-L3486` → after: `L3411-L3414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3411-L3414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3411-L3414) · [Before (L3483-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3483-L3486)

```diff
-         return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = function(...BB) {
-           for (MI(BB[YI[12]] = YI[0], BB[-YI[67]] = 'oAgm(D9x0j>YnIcOHa[3b`r2<}/JZPS6ht@w%?~sGU!viQu^p;zR=C4{N8#L|qB]Fl:WefVEK).dTMy1X$*7"_&,5k+', BB[YI[47]] = "" + (BB[YI[2]] || ""), BB[YI[17]] = BB[YI[47]].length, BB[YI[40]] = [], BB[YI[68]] = YI[2], BB[YI[46]] = YI[2], BB[YI[3 … [truncated]
-             if (BB[YI[45]] = BB[-YI[67]].indexOf(BB[YI[47]][BB[YI[41]]]), BB[YI[45]] !== -YI[0])
-               if (BB[YI[30]] < YI[2]) BB[YI[30]] = BB[YI[45]];
+         return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = function(...tt) {
+           for (Re(tt[We[12]] = We[0], tt[We[66]] = 'eDrNoSAfsm3vQ)LnP:d5B<%*Ub^+lWXkqz.VT_{4K,EM(8iYjwhCHIFG]~ZJ|!`cp&=g}xRO/62t"?17;$@#[9u>a0y', tt[We[1]] = "" + (tt[We[2]] || ""), tt[We[4]] = tt[We[1]].length, tt[We[9]] = [], tt[We[49]] = We[2], tt[We[68]] = We[2], tt[We[6]] =  … [truncated]
+             if (tt[-We[67]] = tt[We[66]].indexOf(tt[We[1]][tt[We[10]]]), tt[-We[67]] !== -We[0])
+               if (tt[We[6]] < We[2]) tt[We[6]] = tt[-We[67]];
```

#### 577. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3488` → after: `L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3416) · [Before (L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3488)

```diff
-                 MI(BB[YI[30]] += BB[YI[45]] * YI[31], BB[YI[68]] |= BB[YI[30]] << BB[YI[46]], BB[YI[46]] += (BB[YI[30]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
+                 Re(tt[We[6]] += tt[-We[67]] * We[29], tt[We[49]] |= tt[We[6]] << tt[We[68]], tt[We[68]] += (tt[We[6]] & We[30]) > We[31] ? We[32] : We[33]);
```

#### 578. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3490-L3493` → after: `L3418-L3421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3418-L3421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3418-L3421) · [Before (L3490-L3493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3490-L3493)

```diff
-                   MI(BB[YI[40]].push(BB[YI[68]] & YI[11]), BB[YI[68]] >>= YI[10], BB[YI[46]] -= YI[10])
-                 } while (BB[YI[46]] > YI[23]);
-                 BB[YI[30]] = -YI[0]
-               } return BB[YI[30]] > -YI[0] && BB[YI[40]].push((BB[YI[68]] | BB[YI[30]] << BB[YI[46]]) & YI[11]), pI(BB[YI[40]])
+                   Re(tt[We[9]].push(tt[We[49]] & We[11]), tt[We[49]] >>= We[10], tt[We[68]] -= We[10])
+                 } while (tt[We[68]] > We[24]);
+                 tt[We[6]] = -We[0]
+               } return tt[We[6]] > -We[0] && tt[We[9]].push((tt[We[49]] | tt[We[6]] << tt[We[68]]) & We[11]), Se(tt[We[9]])
```

#### 579. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3496-L3498` → after: `L3424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3424) · [Before (L3496-L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3496-L3498)

```diff
-       if ((arguments[iI(YI[68])] > YI[0] && arguments[YI[0]] !== YI[14] ? arguments[YI[0]] : YI[50]) && (0, tB[YI[46]])(BB)) return;
-       const ZB = window[IB(149)];
-       if (typeof ZB !== IB(150) + "on" || BB instanceof ZB || (0, mB.B)(BB)) {
+       if ((arguments[et(119)] > We[0] && arguments[We[0]] !== We[18] ? arguments[We[0]] : We[39]) && (0, Bt[We[6]])(tt)) {
```

#### 580. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3501-L3512` → after: `L3444-L3448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3444-L3448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3444-L3448) · [Before (L3501-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3501-L3512)

```diff
-           MI(BB[YI[12]] = YI[2], IB = function(...BB) {
-             MI(BB[YI[12]] = YI[0], this.ah = BB[YI[2]], this.length = YI[2], this.map = {}, this.head = YI[90], this.tail = YI[90])
-           }, IB.prototype.get = function(...BB) {
-             var IB;
-             return MI(BB[YI[12]] = YI[0], IB = this.map[BB[YI[2]]]), IB ? (this.remove(IB), this.insert(IB.key, IB.val), IB.val) : -YI[0]
-           }, IB.prototype.put = function(BB, IB) {
-             this.map[BB] ? (this.remove(this.map[BB]), this.insert(BB, IB)) : this.length === this.ah ? (this.remove(this.head), this.insert(BB, IB)) : (this.insert(BB, IB), this.length++)
-           }, IB.prototype.remove = function(...BB) {
-             MI(BB[YI[12]] = YI[0], BB[YI[21]] = BB[YI[2]].prev, BB[YI[78]] = BB[YI[2]].next), BB[YI[78]] && (BB[YI[78]].prev = BB[YI[21]]), BB[YI[21]] && (BB[YI[21]].next = BB[YI[78]]), this.head === BB[YI[2]] && (this.head = BB[YI[78]]), this.tail === BB[YI[2]] && (this.tail = B … [truncated]
-           }, IB.prototype.insert = function(BB, IB) {
-             var ZB = new List(BB, IB);
-             MI(this.tail ? (this.tail.next = ZB, ZB.prev = this.tail, this.tail = ZB) : (this.tail = ZB, this.head = ZB), this.map[BB] = ZB)
+ 
+           function et() {}
+           Re(tt = function(...tt) {
+             for (Re(tt[We[12]] = We[1], tt[We[1]] = We[2], tt[We[45]] = We[2], tt[We[71]] = new et(We[2]), tt[We[72]] = tt[We[71]], tt[We[49]] = tt[We[2]], tt[We[37]] = tt[We[0]]); tt[We[49]] !== We[65] || tt[We[37]] !== We[65];) Re(tt[We[45]] = (tt[We[49]] ? tt[We[49]].val : We[ … [truncated]
+             return tt[We[1]] && (tt[We[72]].next = new et(tt[We[1]])), tt[We[71]].next
```

#### 581. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3515-L3527` → after: `L3451-L3470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3451-L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3451-L3470) · [Before (L3515-L3527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3515-L3527)

```diff
-         if (IB(173) in HI && TB(), BB[IB(YI[91]) + IB(175)] === YI[50]) {
-           function JB(...BB) {
-             for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = 'f@8x*]y>LSt1:iEZbDr4oRUV.hI+QC_a^"37vw&MzPdN<WjXlm5eY}Bc[#q)F~Ag%p09H{n(?K6,J`TkO$G2|u;!=/s', BB[-YI[91]] = "" + (BB[YI[2]] || ""), BB[YI[27]] = BB[-YI[91]].length, BB[-YI[64]] = [], BB[YI[32]] = YI[2], BB[YI[21]] = YI[2], BB[Y … [truncated]
-               if (BB[-YI[92]] = BB[YI[0]].indexOf(BB[-YI[91]][BB[YI[10]]]), BB[-YI[92]] !== -YI[0])
-                 if (BB[YI[23]] < YI[2]) BB[YI[23]] = BB[-YI[92]];
-                 else {
-                   MI(BB[YI[23]] += BB[-YI[92]] * YI[31], BB[YI[32]] |= BB[YI[23]] << BB[YI[21]], BB[YI[21]] += (BB[YI[23]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
-                   do {
-                     MI(BB[-YI[64]].push(BB[YI[32]] & YI[11]), BB[YI[32]] >>= YI[10], BB[YI[21]] -= YI[10])
-                   } while (BB[YI[21]] > YI[23]);
-                   BB[YI[23]] = -YI[0]
-                 } return BB[YI[23]] > -YI[0] && BB[-YI[64]].push((BB[YI[32]] | BB[YI[23]] << BB[YI[21]]) & YI[11]), pI(BB[-YI[64]])
-           }
+         return void(qt(120) in ce && Dt())
+       }
+       const Vt = window[et(121)];
+       if (typeof Vt !== et(122) + "on" || tt instanceof Vt || (0, Gt.I)(tt)) {
+         function mt(...tt) {
+           for (Re(tt[We[12]] = We[0], tt[-We[80]] = 'uGHlOMcTXCoJ)6_+7ZSep3/Kgf9FDx1A`,Q8r2(^Lz@<WR?:&I};.>50jmv*Y"|Ph#[wEn%bUy!k4=B]qNt{as~V$id', tt[We[78]] = "" + (tt[We[2]] || ""), tt[We[4]] = tt[We[78]].length, tt[-We[82]] = [], tt[We[7]] = We[2], tt[We[22]] = We[2], tt[We[81 … [truncated]
+             if (tt[We[42]] = tt[-We[80]].indexOf(tt[We[78]][tt[We[79]]]), tt[We[42]] !== -We[0])
+               if (tt[We[81]] < We[2]) tt[We[81]] = tt[We[42]];
+               else {
+                 Re(tt[We[81]] += tt[We[42]] * We[29], tt[We[7]] |= tt[We[81]] << tt[We[22]], tt[We[22]] += (tt[We[81]] & We[30]) > We[31] ? We[32] : We[33]);
+                 do {
+                   Re(tt[-We[82]].push(tt[We[7]] & We[11]), tt[We[7]] >>= We[10], tt[We[22]] -= We[10])
+                 } while (tt[We[22]] > We[24]);
+                 tt[We[81]] = -We[0]
+               } return tt[We[81]] > -We[0] && tt[-We[82]].push((tt[We[7]] | tt[We[81]] << tt[We[22]]) & We[11]), Se(tt[-We[82]])
+         }
+ ... (4 more added lines; see GitHub link above)
```

#### 582. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3530` → after: `L3474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3474) · [Before (L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3530)

```diff
-             return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = JB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
+             return tt[We[12]] = We[0], tt[We[2]][We[0]] * We[85] + (tt[We[2]][We[2]] < We[2] ? We[84] | tt[We[2]][We[2]] : tt[We[2]][We[2]])
```

#### 583. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3547-L3549` → after: `L3478-L3498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3478-L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3478-L3498) · [Before (L3547-L3549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3547-L3549)

```diff
-             for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = 'udJOQAcFPBmlMpVTiXbDoRnUELKjhv+(!CS"$Zz<ser[`9y]8gIt@*7%3#1N,q=)&:{w?^./x20Y_f;4W5}HG|a>~k6', BB[-YI[94]] = "" + (BB[YI[2]] || ""), BB[YI[96]] = BB[-YI[94]].length, BB[YI[16]] = [], BB[YI[32]] = YI[2], BB[YI[21]] = YI[2], BB[YI … [truncated]
-               if (BB[YI[97]] = BB[YI[0]].indexOf(BB[-YI[94]][BB[YI[95]]]), BB[YI[97]] !== -YI[0])
-                 if (BB[YI[30]] < YI[2]) BB[YI[30]] = BB[YI[97]];
+             switch (tt[We[12]] = We[0], ((tt[We[2]] & We[84]) !== We[2]) * We[0] + (tt[We[2]] < We[2]) * We[1]) {
+               case We[2]:
+                 return [tt[We[2]] % We[84], Math.trunc(tt[We[2]] / We[85])];
+               case We[0]:
+                 return [tt[We[2]] % We[84] - We[84], Math.trunc(tt[We[2]] / We[85]) + We[0]];
+               case We[1]:
+                 return [((tt[We[2]] + We[84]) % We[84] + We[84]) % We[84], Math.round(tt[We[2]] / We[85])];
+               case We[4]:
+                 return [tt[We[2]] % We[84], Math.trunc(tt[We[2]] / We[85])]
+             }
+           }
+           tt[We[12]] = We[2], Re(tt[-We[86]] = et([We[1], We[16]]), tt[We[0]] = et([We[0], We[1]]), tt[We[87]] = tt[-We[86]] + tt[We[0]], tt[We[4]] = tt[We[87]] - tt[We[0]], tt[We[49]] = tt[We[4]] * We[1], tt[We[88]] = tt[We[49]] / We[1], console.log(Vt(tt[We[87]])), console.log( … [truncated]
+         }
+         if (dt(We[83]) in ce && jt(), tt[dt(We[89]) + dt(129)] === We[39])(0, Qt[We[46]])("2 " + (0, lt[We[46]])(tt));
+         else if (Ne(tt) < We[73]) {
+           function Ht(tt) {
+ ... (5 more added lines; see GitHub link above)
```

#### 584. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3551` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3500) · [Before (L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3551)

```diff
-                   MI(BB[YI[30]] += BB[YI[97]] * YI[31], BB[YI[32]] |= BB[YI[30]] << BB[YI[21]], BB[YI[21]] += (BB[YI[30]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
+                   Re(mt += jt * We[29], qt |= mt << Dt, Dt += (mt & We[30]) > We[31] ? We[32] : We[33]);
```

#### 585. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3553-L3556` → after: `L3502-L3507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3502-L3507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3502-L3507) · [Before (L3553-L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3553-L3556)

```diff
-                     MI(BB[YI[16]].push(BB[YI[32]] & YI[11]), BB[YI[32]] >>= YI[10], BB[YI[21]] -= YI[10])
-                   } while (BB[YI[21]] > YI[23]);
-                   BB[YI[30]] = -YI[0]
-                 } return BB[YI[30]] > -YI[0] && BB[YI[16]].push((BB[YI[32]] | BB[YI[30]] << BB[YI[21]]) & YI[11]), pI(BB[YI[16]])
+                     Re(Ot.push(qt & We[11]), qt >>= We[10], Dt -= We[10])
+                   } while (Dt > We[24]);
+                   mt = -We[0]
+                 }
+             }
+             return mt > -We[0] && Ot.push((qt | mt << Dt) & We[11]), Se(Ot)
```

#### 586. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3560` → after: `L3511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3511) · [Before (L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3560)

```diff
-             return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = vB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
+             return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = Ht(Me[tt[We[2]]]) : ae[tt[We[2]]]
```

#### 587. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3566-L3578` → after: `L3517-L3531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3517-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3517-L3531) · [Before (L3566-L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3566-L3578)

```diff
-           if (kB(177) + "9" in HI && cB(), qI(BB) < YI[8]) {
-             function nB(...BB) {
-               for (MI(BB[YI[12]] = YI[0], BB[YI[0]] = '%ync_>}u85(z#3p/[2]xA$BqeZ;Povab^JwXSlir7WHLT*UG=0sO6.|f~&t":,{hKN<Y)C@?E4j9gQRD!m+d1kMIF`V', BB[YI[47]] = "" + (BB[YI[2]] || ""), BB[YI[17]] = BB[YI[47]].length, BB[YI[16]] = [], BB[YI[32]] = YI[2], BB[YI[46]] = YI[2], BB[YI … [truncated]
-                 if (BB[-YI[65]] = BB[YI[0]].indexOf(BB[YI[47]][BB[YI[41]]]), BB[-YI[65]] !== -YI[0])
-                   if (BB[YI[30]] < YI[2]) BB[YI[30]] = BB[-YI[65]];
-                   else {
-                     MI(BB[YI[30]] += BB[-YI[65]] * YI[31], BB[YI[32]] |= BB[YI[30]] << BB[YI[46]], BB[YI[46]] += (BB[YI[30]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
-                     do {
-                       MI(BB[YI[16]].push(BB[YI[32]] & YI[11]), BB[YI[32]] >>= YI[10], BB[YI[46]] -= YI[10])
-                     } while (BB[YI[46]] > YI[23]);
-                     BB[YI[30]] = -YI[0]
-                   } return BB[YI[30]] > -YI[0] && BB[YI[16]].push((BB[YI[32]] | BB[YI[30]] << BB[YI[46]]) & YI[11]), pI(BB[YI[16]])
-             }
+           Xt(130) + "w" in ce && Et(), (0, Qt[We[46]])("3 ")
+         } else ye()
+       } else {
+         function ft(...tt) {
+           for (Re(tt[We[12]] = We[0], tt[-We[75]] = 'gkI?2)yR`%udHY7vV|aJ~5FA8m:+#iG(@6^>;"e=lf/<Uzoj&,!1r0Q$*9S[wNpD}P_B]4WK3tqMC{xLXh.bZsncETO', tt[-We[67]] = "" + (tt[We[2]] || ""), tt[We[46]] = tt[-We[67]].length, tt[We[16]] = [], tt[We[49]] = We[2], tt[We[37]] = We[2], tt[We … [truncated]
+             if (tt[We[61]] = tt[-We[75]].indexOf(tt[-We[67]][tt[We[74]]]), tt[We[61]] !== -We[0])
+               if (tt[We[24]] < We[2]) tt[We[24]] = tt[We[61]];
+               else {
+                 Re(tt[We[24]] += tt[We[61]] * We[29], tt[We[49]] |= tt[We[24]] << tt[We[37]], tt[We[37]] += (tt[We[24]] & We[30]) > We[31] ? We[32] : We[33]);
+                 do {
+                   Re(tt[We[16]].push(tt[We[49]] & We[11]), tt[We[49]] >>= We[10], tt[We[37]] -= We[10])
+                 } while (tt[We[37]] > We[24]);
+                 tt[We[24]] = -We[0]
+               } return tt[We[24]] > -We[0] && tt[We[16]].push((tt[We[49]] | tt[We[24]] << tt[We[37]]) & We[11]), Se(tt[We[16]])
+         }
```

#### 588. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3580-L3582` → after: `L3533-L3535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3533-L3535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3533-L3535) · [Before (L3580-L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3580-L3582)

```diff
-             function FB(...BB) {
-               return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = nB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
-             }
+         function wt(...tt) {
+           return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = ft(Me[tt[We[2]]]) : ae[tt[We[2]]]
+         }
```

#### 589. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3584-L3596` → after: `L3537-L3542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3537-L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3537-L3542) · [Before (L3584-L3596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3584-L3596)

```diff
-             function NB(...BB) {
-               MI(BB[YI[12]] = YI[2], BB[YI[101]] = function(...BB) {
-                 for (MI(BB[YI[12]] = YI[0], BB[YI[53]] = BB[YI[2]].length, BB[YI[18]] = [], BB[YI[27]] = YI[2]), BB[YI[40]] = YI[2]; BB[YI[40]] < BB[YI[53]]; BB[YI[40]]++) BB[YI[18]].push(BB[YI[40]] !== YI[2] && BB[YI[2]][BB[YI[40]]] > BB[YI[2]][BB[YI[40]] - YI[0]] ? BB[YI[18]][B … [truncated]
-                 for (BB[YI[7]] = BB[YI[53]] - YI[0]; BB[YI[7]] >= YI[2]; BB[YI[7]]--) BB[YI[7]] !== BB[YI[53]] - YI[0] && BB[YI[2]][BB[YI[7]]] > BB[YI[2]][BB[YI[7]] + YI[0]] && (BB[YI[18]][BB[YI[7]]] = Math.max(BB[YI[18]][BB[YI[7]]], BB[YI[18]][BB[YI[7]] + YI[0]] + YI[0])), BB[YI … [truncated]
-                 return BB[YI[27]]
-               }, console.log(BB[YI[101]]))
-             }
-             FB(180) + "X" in HI && NB(), (0, hB[YI[32]])("3 ")
-           } else {
-             function gB(...BB) {
-               for (MI(BB[YI[12]] = YI[0], BB[-YI[103]] = '`MAHBrJYihX+,{enZC8s?[P0D~:^cN<(S6#}t./Id>uW92|LVEoRxbf;yUgq"F%)3K!kv7GlOajz&m$]1w5=*p_4@TQ', BB[-YI[65]] = "" + (BB[YI[2]] || ""), BB[-YI[102]] = BB[-YI[65]].length, BB[YI[40]] = [], BB[YI[7]] = YI[2], BB[YI[105]] = YI[2] … [truncated]
-                 if (BB[YI[104]] = BB[-YI[103]].indexOf(BB[-YI[65]][BB[YI[10]]]), BB[YI[104]] !== -YI[0])
-                   if (BB[-YI[0]] < YI[2]) BB[-YI[0]] = BB[YI[104]];
+         function yt(...tt) {
+           function et(...tt) {
+             return tt[We[12]] = We[0], typeof ae[tt[We[2]]] === We[17] ? ae[tt[We[2]]] = function(...tt) {
+               for (Re(tt[We[12]] = We[0], tt[We[47]] = '6=x8.04oGP5cU3k_)Sw!yVD^g~B&?nI;+XsZd#2[bLJ(`vAz*,Y%R>CFtiW9@p{Kua:ErQ$]q<mNh1/l}M|"TOf7Hej', tt[We[1]] = "" + (tt[We[2]] || ""), tt[We[46]] = tt[We[1]].length, tt[We[16]] = [], tt[-We[76]] = We[2], tt[We[22]] = We[2], tt[We … [truncated]
+                 if (tt[We[42]] = tt[We[47]].indexOf(tt[We[1]][tt[We[10]]]), tt[We[42]] !== -We[0])
+                   if (tt[We[24]] < We[2]) tt[We[24]] = tt[We[42]];
```

#### 590. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3598` → after: `L3544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3544) · [Before (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3598)

```diff
-                     MI(BB[-YI[0]] += BB[YI[104]] * YI[31], BB[YI[7]] |= BB[-YI[0]] << BB[YI[105]], BB[YI[105]] += (BB[-YI[0]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
+                     Re(tt[We[24]] += tt[We[42]] * We[29], tt[-We[76]] |= tt[We[24]] << tt[We[22]], tt[We[22]] += (tt[We[24]] & We[30]) > We[31] ? We[32] : We[33]);
```

#### 591. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3600-L3660` → after: `L3546-L3550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3546-L3550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3546-L3550) · [Before (L3600-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3600-L3660)

```diff
-                       MI(BB[YI[40]].push(BB[YI[7]] & YI[11]), BB[YI[7]] >>= YI[10], BB[YI[105]] -= YI[10])
-                     } while (BB[YI[105]] > YI[23]);
-                     BB[-YI[0]] = -YI[0]
-                   } return BB[-YI[0]] > -YI[0] && BB[YI[40]].push((BB[YI[7]] | BB[-YI[0]] << BB[YI[105]]) & YI[11]), pI(BB[YI[40]])
-             }
- 
-             function qB(...BB) {
-               return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = gB(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
-             }
- 
-             function yB(...BB) {
-               BB[YI[12]] = YI[2];
-               const IB = require("big-integer");
-               MI(BB[YI[53]] = class {
-                 static randomPrime(...BB) {
-                   BB[YI[12]] = YI[0];
- ... (45 more removed lines; see GitHub link above)
+                       Re(tt[We[16]].push(tt[-We[76]] & We[11]), tt[-We[76]] >>= We[10], tt[We[22]] -= We[10])
+                     } while (tt[We[22]] > We[24]);
+                     tt[We[24]] = -We[0]
+                   } return tt[We[24]] > -We[0] && tt[We[16]].push((tt[-We[76]] | tt[We[24]] << tt[We[22]]) & We[11]), Se(tt[We[16]])
+             }(Me[tt[We[2]]]) : ae[tt[We[2]]]
```

#### 592. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3692-L3731` → after: `L3553-L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3553-L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3553-L3562) · [Before (L3692-L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3692-L3731)

```diff
-             function oB(...ZB) {
-               function JB(...BB) {
-                 return BB[YI[12]] = YI[0], typeof yI[BB[YI[2]]] === YI[13] ? yI[BB[YI[2]]] = function(...BB) {
-                   for (MI(BB[YI[12]] = YI[0], BB[YI[53]] = 'XdJ,3l.v(Tr?SH$t~Lpx#{>`!Y5mj|eKw0z<@cAWVhk2B^C9=Q/]UN[Ob16+yG&}g_D4Maui8R:o*qPZ);f%"sFn7EI', BB[-YI[74]] = "" + (BB[YI[2]] || ""), BB[-YI[4]] = BB[-YI[74]].length, BB[YI[16]] = [], BB[YI[7]] = YI[2], BB[YI[21]] = YI[2], … [truncated]
-                     if (BB[YI[76]] = BB[YI[53]].indexOf(BB[-YI[74]][BB[-YI[75]]]), BB[YI[76]] !== -YI[0])
-                       if (BB[YI[23]] < YI[2]) BB[YI[23]] = BB[YI[76]];
-                       else {
-                         MI(BB[YI[23]] += BB[YI[76]] * YI[31], BB[YI[7]] |= BB[YI[23]] << BB[YI[21]], BB[YI[21]] += (BB[YI[23]] & YI[33]) > YI[34] ? YI[35] : YI[36]);
-                         do {
-                           MI(BB[YI[16]].push(BB[YI[7]] & YI[11]), BB[YI[7]] >>= YI[10], BB[YI[21]] -= YI[10])
-                         } while (BB[YI[21]] > YI[23]);
-                         BB[YI[23]] = -YI[0]
-                       } return BB[YI[23]] > -YI[0] && BB[YI[16]].push((BB[YI[7]] | BB[YI[23]] << BB[YI[21]]) & YI[11]), pI(BB[YI[16]])
-                 }(UI[BB[YI[2]]]) : yI[BB[YI[2]]]
-               }
-               ZB[YI[12]] = YI[0];
- ... (24 more removed lines; see GitHub link above)
+           function Vt(...tt) {
+             if (tt[We[12]] = We[0], !tt[We[2]]) return -We[0];
+             const et = Vt(tt[We[2]].left),
+               Ot = Vt(tt[We[2]].right),
+               qt = Math.abs(et - Ot);
+             if (et === 1 / 0 || Ot === 1 / 0 || qt > We[0]) return 1 / 0;
+             return Math.max(et, Ot) + We[0]
+           }
+           tt[We[12]] = We[2], window[et(124) + et(We[60]) + et(126) + We[77]] = {
+             buildCharacterMap: function(...tt) {
```

#### 593. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3733-L3818` → after: `L3564-L3580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3564-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3564-L3580) · [Before (L3733-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3733-L3818)

```diff
-               try {
-                 BB[YI[0]]
-               } catch (TB) {
-                 BB[YI[0]] = ""
-               }
-               for (MI(IB[YI[0]] = ZB(166) + ZB(167) + ZB(168) + ZB(YI[51]) + ZB(170) + ZB(YI[49]) + ZB(172) + YI[100], IB[YI[47]] = "", IB[YI[27]] = IB[YI[2]].length), IB[YI[16]] = YI[2]; IB[YI[16]] < IB[YI[27]]; IB[YI[16]] += YI[27])
-                 for (IB[-YI[82]] = IB[YI[2]].charCodeAt(IB[YI[16]]) << YI[72] | (IB[YI[16]] + YI[0] < IB[YI[27]] ? IB[YI[2]].charCodeAt(IB[YI[16]] + YI[0]) << YI[10] : YI[2]) | (IB[YI[16]] + YI[18] < IB[YI[27]] ? IB[YI[2]].charCodeAt(IB[YI[16]] + YI[18]) : YI[2]), IB[YI[46]] = YI … [truncated]
-               return IB[YI[47]]
-             }
- 
-             function vB(...BB) {
-               var IB, ZB;
-               for (MI(BB[YI[12]] = YI[0], BB[YI[67]] = "", BB[YI[47]] = -YI[0]); ++BB[YI[47]] < BB[YI[2]].length;) MI(IB = BB[YI[2]].charCodeAt(BB[YI[47]]), ZB = BB[YI[47]] + YI[0] < BB[YI[2]].length ? BB[YI[2]].charCodeAt(BB[YI[47]] + YI[0]) : YI[2]), 55296 <= IB && IB <= 56319  … [truncated]
-               return BB[YI[67]]
-             }
- 
- ... (70 more removed lines; see GitHub link above)
+               const et = {};
+               for (let Vt of tt[We[2]].replace(/[^w]/g, "").toLowerCase()) et[Vt] = et[Vt] + We[0] || We[0];
+               return et
+             },
+             isAnagrams: function(...tt) {
+               tt[We[12]] = We[1];
+               const et = buildCharMap(tt[We[2]]),
+                 Vt = buildCharMap(tt[We[0]]);
+               for (let Ot in et)
+                 if (et[Ot] !== Vt[Ot]) return We[39];
+               return Object.keys(et).length !== Object.keys(Vt).length ? We[39] : We[62]
+             },
+             isBalanced: function(...tt) {
+               return tt[We[12]] = We[0], Vt(tt[We[2]]) !== 1 / 0
+             },
+             getHeightBalanced: Vt
+ ... (1 more added lines; see GitHub link above)
```

#### 594. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3820` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3582) · [Before (L3820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3820)

```diff
-         IB(151) + YI[30] in HI && UB(), (0, hB[YI[32]])("5 ")
+         wt(We[44]) in ce && yt(), (0, Qt[We[46]])("5 ")
```

#### 595. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3822` → after: `L3584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3584) · [Before (L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3822)

```diff
-     }, gB.l.subscribe("customBindingsChanged", (() => {
+     }, wt.j.subscribe("customBindingsChanged", (() => {
```

#### 596. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3827` → after: `L3589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3589) · [Before (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3827)

```diff
-     const mI = () => RI || rI && HB.b.isInGame(),
+     const Fe = () => Ze || Le && It.c.isInGame(),
```

#### 597. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3831` → after: `L3593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3593) · [Before (L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3831)

```diff
-     gB.l.subscribe("displaymodeFullscreenChange", (BB => {
+     wt.j.subscribe("displaymodeFullscreenChange", (tt => {
```

#### 598. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3833` → after: `L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3595) · [Before (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3833)

```diff
-     })), gB.l.subscribe("pointerLockUpdate", (BB => {
+     })), wt.j.subscribe("pointerLockUpdate", (tt => {
```

#### 599. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3835` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3597) · [Before (L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3835)

```diff
-     })), gB.l.subscribe("freeCursorUpdate", (BB => {
+     })), wt.j.subscribe("freeCursorUpdate", (tt => {
```

#### 600. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3839` → after: `L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3601) · [Before (L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3839)

```diff
-         window.removeEventListener("wheel", XI), MB.isIframed && !(0, GB.l)() && (RI || rI) && window.addEventListener("wheel", XI, {
+         window.removeEventListener("wheel", ke), Pt.isIframed && !(0, mt.o)() && (Ze || Le) && window.addEventListener("wheel", ke, {
```

#### 601. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3853` → after: `L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3615) · [Before (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3853)

```diff
-       gB.l.Gq("QTEMouseState", {
+       wt.j.sw("QTEMouseState", {
```

#### 602. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3860-L3861` → after: `L3622-L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3622-L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3622-L3623) · [Before (L3860-L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3860-L3861)

```diff
-       const hB = (0, iB.h)();
-       hB.lBB = null !== (IB = function(BB, IB) {
+       const Qt = (0, St.e)();
+       Qt.Itt = null !== (et = function(tt, et) {
```

#### 603. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3866` → after: `L3628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3628) · [Before (L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3866)

```diff
-         const oB = null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.n_) && void 0 !== ZB ? ZB : null;
+         const Dt = null !== (Vt = null === et || void 0 === et ? void 0 : et.o3) && void 0 !== Vt ? Vt : null;
```

#### 604. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3868-L3869` → after: `L3630-L3631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3630-L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3630-L3631) · [Before (L3868-L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3868-L3869)

```diff
-         const GB = null !== (TB = null === IB || void 0 === IB ? void 0 : IB.position) && void 0 !== TB ? TB : null;
-         if (JB.playerCanChangePos(BB.Jm, GB[0], GB[1], GB[2])) return null;
+         const mt = null !== (Ot = null === et || void 0 === et ? void 0 : et.position) && void 0 !== Ot ? Ot : null;
+         if (qt.playerCanChangePos(tt.lL, mt[0], mt[1], mt[2])) return null;
```

#### 605. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3877-L3885` → after: `L3639-L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3639-L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3639-L3647) · [Before (L3877-L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3877-L3885)

```diff
-         BB.vIB && (kB = [...BB.vIB], BB.HV(kB, kB));
-         const cB = (kB ? BB.camera.NK : 0) + JB.getBlockReach(BB.Jm);
-         return BB.pickBlock(kB, BB.kIB, cB, ((IB, ZB, TB, oB) => 0 !== IB && ("Board" !== JB.getMetaInfo(IB).rootName || JB.playerCanChangePos(BB.Jm, ZB, TB, oB) || vB(ZB, TB, oB))))
-       }(hB, hB.lBB)) && void 0 !== IB ? IB : hB.lBB;
-       const zB = null !== (ZB = null === (JB = hB.lBB) || void 0 === JB ? void 0 : JB.position) && void 0 !== ZB ? ZB : null,
-         NB = null !== (oB = hB.kIB) && void 0 !== oB ? oB : hB.camera.XV(),
-         qB = iB.l.localPlayerPickActionHelper.getPickEntityResult(NB),
-         yB = null !== (GB = hB.lBB) && void 0 !== GB && GB.n_ ? (0, XB.e)(hB.lBB.n_) : "Air",
-         UB = BB === FB.d.UpFirePrimary || BB === FB.d.UpFireSecondary,
+         tt.gtt && (jt = [...tt.gtt], tt.Xp(jt, jt));
+         const Ht = (jt ? tt.camera.ZY : 0) + qt.getBlockReach(tt.lL);
+         return tt.pickBlock(jt, tt.stt, Ht, ((et, Vt, Ot, Dt) => 0 !== et && ("Board" !== qt.getMetaInfo(et).rootName || qt.playerCanChangePos(tt.lL, Vt, Ot, Dt) || dt(Vt, Ot, Dt))))
+       }(Qt, Qt.Itt)) && void 0 !== et ? et : Qt.Itt;
+       const lt = null !== (Vt = null === (qt = Qt.Itt) || void 0 === qt ? void 0 : qt.position) && void 0 !== Vt ? Vt : null,
+         ft = null !== (Dt = Qt.stt) && void 0 !== Dt ? Dt : Qt.camera.zp(),
+         yt = St.g.localPlayerPickActionHelper.getPickEntityResult(ft),
+         Nt = null !== (mt = Qt.Itt) && void 0 !== mt && mt.o3 ? (0, zt.d)(Qt.Itt.o3) : "Air",
+         Mt = tt === Et.c.UpFirePrimary || tt === Et.c.UpFireSecondary,
```

#### 606. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3887` → after: `L3649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3649) · [Before (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3887)

```diff
-         dB = UB ? BB === FB.d.UpFireSecondary : BB === FB.d.DownFireSecondary,
+         Jt = Mt ? tt === Et.c.UpFireSecondary : tt === Et.c.DownFireSecondary,
```

#### 607. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3889-L3890` → after: `L3651-L3652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3651-L3652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3651-L3652) · [Before (L3889-L3890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3889-L3890)

```diff
-       gB.l.Gq("mouseState", {
-         En: BB,
+       wt.j.sw("mouseState", {
+         iX: tt,
```

#### 608. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3892-L3897` → after: `L3654-L3659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3654-L3659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3654-L3659) · [Before (L3892-L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3892-L3897)

```diff
-       }), (0, TB.sendColyMessage)(nB.zh, {
-         En: BB,
-         Dn: CB,
-         JG: zB,
-         oG: qB
-       }, !0), (0, iB.d)().client.triggerGameCallback(WB, hB.Jm, dB, null !== (vB = null === zB || void 0 === zB ? void 0 : zB[0]) && void 0 !== vB ? vB : null, null !== (kB = null === zB || void 0 === zB ? void 0 : zB[1]) && void 0 !== kB ? kB : null, null !== (cB = null === zB | … [truncated]
+       }), (0, Ot.sendColyMessage)(Xt.uh, {
+         iX: tt,
+         YX: Ct,
+         Hm: lt,
+         Xm: yt
+       }, !0), (0, St.c)().client.triggerGameCallback(bt, Qt.lL, Jt, null !== (dt = null === lt || void 0 === lt ? void 0 : lt[0]) && void 0 !== dt ? dt : null, null !== (jt = null === lt || void 0 === lt ? void 0 : lt[1]) && void 0 !== jt ? jt : null, null !== (Ht = null === lt | … [truncated]
```

#### 609. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3902-L3904` → after: `L3664-L3666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3664-L3666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3664-L3666) · [Before (L3902-L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3902-L3904)

```diff
-       (0, rB.d)(BB, (() => {
-         const BB = (0, iB.h)();
-         return (0, RB.L)(BB) || !1 !== BB.vW.canCustomiseChar
+       (0, kt.b)(tt, (() => {
+         const tt = (0, St.e)();
+         return (0, Ft.B)(tt) || !1 !== tt.OJ.canCustomiseChar
```

#### 610. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3908` → after: `L3670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3670) · [Before (L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3908)

```diff
-   39155: (BB, IB, ZB) => {
+   39297: (tt, et, Vt) => {
```

#### 611. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3911` → after: `L3673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3673) · [Before (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3911)

```diff
-       i: () => GB
+       f: () => mt
```

#### 612. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3913` → after: `L3675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3675) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3913)

```diff
-     var TB = ZB(38474);
+     var Ot = Vt(38649);
```

#### 613. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3921` → after: `L3683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3683) · [Before (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3921)

```diff
-       JB = BB, BB ? TB.d.setMultiplierType("emoteWheel", 0) : TB.d.removeMultiplier("emoteWheel")
+       qt = tt, tt ? Ot.f.setMultiplierType("emoteWheel", 0) : Ot.f.removeMultiplier("emoteWheel")
```

#### 614. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3924` → after: `L3686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3686) · [Before (L3924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3924)

```diff
-   39170: (BB, IB, ZB) => {
+   39313: (tt, et, Vt) => {
```

#### 615. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3926` → after: `L3688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3688) · [Before (L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3926)

```diff
-       return Boolean(BB.vW.useInventory && BB.vW.useFullInventory && BB.zW.bIB(BB.Jm))
+       return Boolean(tt.OJ.useInventory && tt.OJ.useFullInventory && tt.mJ.VVt(tt.lL))
```

#### 616. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3929` → after: `L3691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3691) · [Before (L3929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3929)

```diff
-       b: () => TB
+       d: () => Ot
```

#### 617. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3932` → after: `L3694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3694) · [Before (L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3932)

```diff
-   39043: (BB, IB, ZB) => {
+   39179: (tt, et, Vt) => {
```

#### 618. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3934-L3935` → after: `L3696-L3697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3696-L3697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3696-L3697) · [Before (L3934-L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3934-L3935)

```diff
-       d: () => oB,
-       e: () => JB
+       c: () => Dt,
+       d: () => qt
```

#### 619. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3937` → after: `L3699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3699) · [Before (L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3937)

```diff
-     var TB = ZB(37188);
+     var Ot = Vt(37398);
```

#### 620. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3954-L3955` → after: `L3716-L3717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3716-L3717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3716-L3717) · [Before (L3954-L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3954-L3955)

```diff
-             eT: IB,
-             uT: ZB
+             sO: et,
+             nO: Vt
```

#### 621. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3958` → after: `L3720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3720) · [Before (L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3958)

```diff
-         vB = null === GB ? ZB : null,
+         dt = null === mt ? Vt : null,
```

#### 622. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3960-L3963` → after: `L3722-L3725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3722-L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3722-L3725) · [Before (L3960-L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3960-L3963)

```diff
-           eT: kB = null,
-           uT: cB = 0
-         } = null !== GB && void 0 !== GB ? GB : {};
-       BB.animateEntity(IB, TB.h.Custom, vB, JB, oB, kB, cB)
+           sO: jt = null,
+           nO: Ht = 0
+         } = null !== mt && void 0 !== mt ? mt : {};
+       tt.animateEntity(et, Ot.g.Custom, dt, qt, Dt, jt, Ht)
```

#### 623. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3966` → after: `L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3728) · [Before (L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3966)

```diff
-   39163: (BB, IB, ZB) => {
+   39305: (tt, et, Vt) => {
```

#### 624. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3968` → after: `L3730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3730) · [Before (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3968)

```diff
-       e: () => nB
+       d: () => Xt
```

#### 625. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3970-L3972` → after: `L3732-L3734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3732-L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3732-L3734) · [Before (L3970-L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3970-L3972)

```diff
-     var TB = ZB(38431),
-       JB = ZB(360),
-       oB = ZB(2912);
+     var Ot = Vt(38610),
+       qt = Vt(391),
+       Dt = Vt(2848);
```

#### 626. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3976-L3979` → after: `L3738-L3741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3738-L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3738-L3741) · [Before (L3976-L3979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L3976-L3979)

```diff
-       const GB = (0, oB.h)(),
-         vB = null !== (BB = null === (IB = GB.zW.fIB(GB.Jm)) || void 0 === IB ? void 0 : IB.selectedItem) && void 0 !== BB ? BB : null,
-         kB = vB ? (0, oB.d)().getItemStat(GB.Jm, vB.name, "attackCooldownMs") : null,
-         cB = (0, JB.hd)(kB, null === vB || void 0 === vB || null === (ZB = vB.attributes.customAttributes) || void 0 === ZB || null === (TB = ZB.enchantments) || void 0 === TB ? void 0 : TB["Attack Speed"]);
+       const mt = (0, Dt.e)(),
+         dt = null !== (tt = null === (et = mt.mJ.Tet(mt.lL)) || void 0 === et ? void 0 : et.selectedItem) && void 0 !== tt ? tt : null,
+         jt = dt ? (0, Dt.c)().getItemStat(mt.lL, dt.name, "attackCooldownMs") : null,
+         Ht = (0, qt.kd)(jt, null === dt || void 0 === dt || null === (Vt = dt.attributes.customAttributes) || void 0 === Vt || null === (Ot = Vt.enchantments) || void 0 === Ot ? void 0 : Ot["Attack Speed"]);
```

#### 627. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4000-L4001` → after: `L3762-L3763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3762-L3763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3762-L3763) · [Before (L4000-L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4000-L4001)

```diff
-     var kB = ZB(39155),
-       cB = ZB(1353);
+     var jt = Vt(39297),
+       Ht = Vt(1387);
```

#### 628. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4010` → after: `L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3772) · [Before (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4010)

```diff
-             if (IB.noteTry(BB, ZB), this.tries = IB, (0, cB.w)() && !(0, kB.e)()) {
+             if (et.noteTry(tt, Vt), this.tries = et, (0, Ht.r)() && !(0, jt.e)()) {
```

#### 629. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4012-L4014` → after: `L3774-L3776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3774-L3776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3774-L3776) · [Before (L4012-L4014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4012-L4014)

```diff
-               (0, TB.g)();
-               const BB = (0, oB.h)();
-               null === (JB = BB.zW.zZB(BB.Jm)) || void 0 === JB || null === (vB = JB.JC) || void 0 === vB || vB.repeatAttack()
+               (0, Ot.f)();
+               const tt = (0, Dt.e)();
+               null === (qt = tt.mJ.MVt(tt.lL)) || void 0 === qt || null === (dt = qt.LJ) || void 0 === dt || dt.repeatAttack()
```

#### 630. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4039` → after: `L3801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3801) · [Before (L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4039)

```diff
-   39052: (BB, IB, ZB) => {
+   39187: (tt, et, Vt) => {
```

#### 631. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4041-L4042` → after: `L3803-L3804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3803-L3804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3803-L3804) · [Before (L4041-L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4041-L4042)

```diff
-       b: () => NB,
-       e: () => nB,
+       d: () => ft,
+       g: () => Xt,
```

#### 632. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4044-L4045` → after: `L3806-L3807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3806-L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3806-L3807) · [Before (L4044-L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4044-L4045)

```diff
-       m: () => zB,
-       q: () => gB,
+       j: () => lt,
+       n: () => wt,
```

#### 633. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4048-L4054` → after: `L3810-L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3810-L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3810-L3816) · [Before (L4048-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4048-L4054)

```diff
-     var TB = ZB(39061),
-       JB = ZB(37270),
-       oB = ZB(3854),
-       GB = ZB(2003),
-       vB = ZB(24),
-       kB = ZB(2912);
-     const cB = new TB.c;
+     var Ot = Vt(39196),
+       qt = Vt(37480),
+       Dt = Vt(3751),
+       mt = Vt(2026),
+       dt = Vt(31),
+       jt = Vt(2848);
+     const Ht = new Ot.b;
```

#### 634. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4067` → after: `L3829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3829) · [Before (L4067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4067)

```diff
-         void 0 !== IB && GB.b.delete(IB)
+         void 0 !== et && mt.d.delete(et)
```

#### 635. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4069` → after: `L3831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3831) · [Before (L4069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4069)

```diff
-       hB(), vB.l.Gq("playerRosterChanged", cB.ids())
+       Qt(), dt.j.sw("playerRosterChanged", Ht.ids())
```

#### 636. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4075-L4076` → after: `L3837-L3838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3837-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3837-L3838) · [Before (L4075-L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4075-L4076)

```diff
-       const JB = (0, kB.h)();
-       return null === (ZB = JB.Tm[JB.Jm]) || void 0 === ZB || null === (TB = ZB[BB]) || void 0 === TB ? void 0 : TB[IB]
+       const qt = (0, jt.e)();
+       return null === (Vt = qt.dL[qt.lL]) || void 0 === Vt || null === (Ot = Vt[tt]) || void 0 === Ot ? void 0 : Ot[et]
```

#### 637. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4089` → after: `L3851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3851) · [Before (L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4089)

```diff
-         of ZB) void 0 === oB || qB(JB) || GB.b.delete(oB);
+         of Vt) void 0 === Dt || yt(qt) || mt.d.delete(Dt);
```

#### 638. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4097-L4098` → after: `L3859-L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3859-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3859-L3860) · [Before (L4097-L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4097-L4098)

```diff
-           for (const BB in GB)(0, JB.g)(oB, BB, GB[BB]);
-       (IB.length > 0 || ZB.length > 0) && vB.l.Gq("playerRosterChanged", cB.ids())
+           for (const tt in mt)(0, qt.i)(Dt, tt, mt[tt]);
+       (et.length > 0 || Vt.length > 0) && dt.j.sw("playerRosterChanged", Ht.ids())
```

#### 639. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4104-L4105` → after: `L3866-L3867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3866-L3867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3866-L3867) · [Before (L4104-L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4104-L4105)

```diff
-         (0, JB.c)(BB);
-         for (const ZB in IB)(0, JB.b)(BB, ZB, IB[ZB])
+         (0, qt.e)(tt);
+         for (const Vt in et)(0, qt.c)(tt, Vt, et[Vt])
```

#### 640. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4110` → after: `L3872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3872) · [Before (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4110)

```diff
-       return BB === (0, kB.h)().oIB || (0, kB.d)().client.hasEntity(BB)
+       return tt === (0, jt.e)().Ttt || (0, jt.c)().client.hasEntity(tt)
```

#### 641. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4113` → after: `L3875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3875) · [Before (L4113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4113)

```diff
-   38146: (BB, IB, ZB) => {
+   38335: (tt, et, Vt) => {
```

#### 642. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4118-L4119` → after: `L3879-L3881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3879-L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3879-L3881) · [Before (L4118-L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4118-L4119)

```diff
-       l: () => OB,
-       o: () => iB
+       i: () => ht,
+       k: () => vt,
+       m: () => St
```

#### 643. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4121-L4123` → after: `L3883-L3885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3883-L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3883-L3885) · [Before (L4121-L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4121-L4123)

```diff
-     var TB = ZB(37113),
-       JB = ZB(38151),
-       oB = ZB(364),
+     var Ot = Vt(37331),
+       qt = Vt(38340),
+       Dt = Vt(404),
```

#### 644. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4125-L4130` → after: `L3887-L3892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3887-L3892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3887-L3892) · [Before (L4125-L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4125-L4130)

```diff
-       vB = ZB(3586);
-     const kB = new TB.rN,
-       cB = new TB.rN,
-       nB = new TB.rN,
-       hB = new TB.rN,
-       zB = new TB.rN,
+       dt = Vt(3470);
+     const jt = new Ot.uf,
+       Ht = new Ot.uf,
+       Xt = new Ot.uf,
+       Qt = new Ot.uf,
+       lt = new Ot.uf,
```

#### 645. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4136-L4137` → after: `L3898-L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3898-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3898-L3899) · [Before (L4136-L4137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4136-L4137)

```diff
-       gB = new TB.rN(1, 0, 0),
-       qB = new TB.rN(0, 1, 0),
+       wt = new Ot.uf(1, 0, 0),
+       yt = new Ot.uf(0, 1, 0),
```

#### 646. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4141` → after: `L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3903) · [Before (L4141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4141)

```diff
-       dB = new TB.rN,
+       Jt = new Ot.uf,
```

#### 647. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4152` → after: `L3914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3914) · [Before (L4152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4152)

```diff
-         return Math.abs(ZB) <= vB.b && Math.abs(TB) <= (0, vB.g)() ? {
+         return Math.abs(Vt) <= dt.d && Math.abs(Ot) <= (0, dt.m)() ? {
```

#### 648. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4157` → after: `L3919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3919) · [Before (L4157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4157)

```diff
-       nB.cBB(IB[0], IB[1], IB[2]),
+       Xt.W9(et[0], et[1], et[2]),
```

#### 649. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4159-L4161` → after: `L3921-L3923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3921-L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3921-L3923) · [Before (L4159-L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4159-L4161)

```diff
-           const IB = BB.Ig.TTB(),
-             ZB = IB ? TB.Matrix.FromArrayToRef(IB.worldMatrix, 0, WB) : BB.Ig.JR().activeCamera.getWorldMatrix();
-           TB.rN.TransformNormalToRef(gB, ZB, hB), hB.normalize(), TB.rN.TransformNormalToRef(qB, ZB, zB), zB.normalize()
+           const et = tt.Bf.HOt(),
+             Vt = et ? Ot.Matrix.FromArrayToRef(et.worldMatrix, 0, bt) : tt.Bf.vI().activeCamera.getWorldMatrix();
+           Ot.uf.TransformNormalToRef(wt, Vt, Qt), Qt.normalize(), Ot.uf.TransformNormalToRef(yt, Vt, lt), lt.normalize()
```

#### 650. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4163-L4164` → after: `L3925-L3926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3925-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3925-L3926) · [Before (L4163-L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4163-L4164)

```diff
-       const GB = TB.rN.Dot(nB, hB);
-       let kB = -TB.rN.Dot(nB, zB);
+       const mt = Ot.uf.Dot(Xt, Qt);
+       let jt = -Ot.uf.Dot(Xt, lt);
```

#### 651. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4166` → after: `L3928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3928) · [Before (L4166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4166)

```diff
-       const cB = null !== (ZB = null === (JB = BB.Ig.TTB()) || void 0 === JB ? void 0 : JB.projectionMatrix) && void 0 !== ZB ? ZB : BB.Ig.JR().activeCamera.getProjectionMatrix().m;
+       const Ht = null !== (Vt = null === (qt = tt.Bf.HOt()) || void 0 === qt ? void 0 : qt.projectionMatrix) && void 0 !== Vt ? Vt : tt.Bf.vI().activeCamera.getProjectionMatrix().m;
```

#### 652. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4171-L4172` → after: `L3933-L3934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3933-L3934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3933-L3934) · [Before (L4171-L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4171-L4172)

```diff
-       const ZB = BB.Ig.JR(),
-         JB = ZB.PN(),
+       const Vt = tt.Bf.vI(),
+         qt = Vt.Jf(),
```

#### 653. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4176-L4178` → after: `L3938-L3940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3938-L3940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3938-L3940) · [Before (L4176-L4178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4176-L4178)

```diff
-       const vB = BB.Ig.TTB(),
-         nB = vB ? dB.cBB(vB.eye[0], vB.eye[1], vB.eye[2]) : BB.Ig.camera.globalPosition;
-       kB.cBB(nB.x + 10 * IB[0], nB.y + 10 * IB[1], nB.z + 10 * IB[2]);
+       const dt = tt.Bf.HOt(),
+         Xt = dt ? Jt.W9(dt.eye[0], dt.eye[1], dt.eye[2]) : tt.Bf.camera.globalPosition;
+       jt.W9(Xt.x + 10 * et[0], Xt.y + 10 * et[1], Xt.z + 10 * et[2]);
```

#### 654. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4180` → after: `L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3942) · [Before (L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4180)

```diff
-       return TB.rN.ProjectToRef(kB, yB, hB, CB, cB), cB.z < 0 || cB.z > 1 ? null : (NB.x = cB.x / oB * 100, NB.y = cB.y / GB * 100, NB)
+       return Ot.uf.ProjectToRef(jt, Nt, Qt, Ct, Ht), Ht.z < 0 || Ht.z > 1 ? null : (ft.x = Ht.x / Dt * 100, ft.y = Ht.y / mt * 100, ft)
```

#### 655. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4197` → after: `L3959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3959) · [Before (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4197)

```diff
-       return 1 / (null !== (IB = null === (ZB = BB.Ig.TTB()) || void 0 === ZB ? void 0 : ZB.projectionMatrix[0]) && void 0 !== IB ? IB : BB.Ig.JR().activeCamera.getProjectionMatrix().m[0])
+       return 1 / (null !== (et = null === (Vt = tt.Bf.HOt()) || void 0 === Vt ? void 0 : Vt.projectionMatrix[0]) && void 0 !== et ? et : tt.Bf.vI().activeCamera.getProjectionMatrix().m[0])
```

#### 656. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4201-L4203` → after: `L3963-L3965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3963-L3965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3963-L3965) · [Before (L4201-L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4201-L4203)

```diff
-       const TB = BB.Ig.TTB(),
-         JB = TB ? TB.worldMatrix : BB.Ig.JR().activeCamera.getWorldMatrix().m,
-         oB = BB.Mz;
+       const Ot = tt.Bf.HOt(),
+         qt = Ot ? Ot.worldMatrix : tt.Bf.vI().activeCamera.getWorldMatrix().m,
+         Dt = tt.bl;
```

#### 657. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4209-L4211` → after: `L3971-L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3971-L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3971-L3973) · [Before (L4209-L4211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4209-L4211)

```diff
-       const ZB = BB.Mz,
-         TB = BB.Ig.TTB(),
-         JB = TB ? dB.cBB(TB.eye[0], TB.eye[1], TB.eye[2]) : BB.Ig.camera.globalPosition;
+       const Vt = tt.bl,
+         Ot = tt.Bf.HOt(),
+         qt = Ot ? Jt.W9(Ot.eye[0], Ot.eye[1], Ot.eye[2]) : tt.Bf.camera.globalPosition;
```

#### 658. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4216` → after: `L3978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3978) · [Before (L4216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4216)

```diff
-       return (0, vB.d)(BB, IB, vB.b, (0, vB.g)())
+       return (0, dt.f)(tt, et, dt.d, (0, dt.m)())
```

#### 659. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4219` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3981) · [Before (L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4219)

```diff
-   39030: (BB, IB, ZB) => {
+   39167: (tt, et, Vt) => {
```

#### 660. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4221` → after: `L3983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3983) · [Before (L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4221)

```diff
-       d: () => zB
+       c: () => lt
```

#### 661. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4223-L4224` → after: `L3985-L3986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3985-L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3985-L3986) · [Before (L4223-L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4223-L4224)

```diff
-     var TB = ZB(201),
-       JB = ZB(364),
+     var Ot = Vt(229),
+       qt = Vt(404),
```

#### 662. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4226-L4229` → after: `L3988-L3991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3988-L3991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L3988-L3991) · [Before (L4226-L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4226-L4229)

```diff
-       GB = ZB(36780),
-       vB = ZB(36783),
-       kB = ZB(2912);
-     const cB = TB.f.fq * TB.f.playerEyeToHeightRatio,
+       mt = Vt(36992),
+       dt = Vt(36996),
+       jt = Vt(2848);
+     const Ht = Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
```

#### 663. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4258-L4260` → after: `L4020-L4022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4020-L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4020-L4022) · [Before (L4258-L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4258-L4260)

```diff
-           const TB = (0, vB.f)(IB.soundName);
-           if (!TB) return console.error(`AudioEntityManager: no sound found for "${IB.soundName}", dropping audio entity ${BB}`), void this.remove(BB);
-           const JB = GB.d.play(TB, IB.volume, ZB, IB.maxHearDist, IB.refDistance, !0);
+           const Ot = (0, dt.g)(et.soundName);
+           if (!Ot) return console.error(`AudioEntityManager: no sound found for "${et.soundName}", dropping audio entity ${tt}`), void this.remove(tt);
+           const qt = mt.e.play(Ot, et.volume, Vt, et.maxHearDist, et.refDistance, !0);
```

#### 664. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4267` → after: `L4029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4029) · [Before (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4267)

```diff
-           const BB = (0, kB.h)();
+           const tt = (0, jt.e)();
```

#### 665. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4269` → after: `L4031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4031) · [Before (L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4269)

```diff
-           const IB = BB.zW.aU(BB.Jm);
+           const et = tt.mJ.YM(tt.lL);
```

#### 666. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4272-L4273` → after: `L4034-L4035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4034-L4035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4034-L4035) · [Before (L4272-L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4272-L4273)

```diff
-               if (!BB.zW.TIB(ZB, "position")) continue;
-               const JB = BB.zW.aU(ZB),
+               if (!tt.mJ.ptt(Vt, "position")) continue;
+               const qt = tt.mJ.YM(Vt),
```

#### 667. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4284` → after: `L4046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4046) · [Before (L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4284)

```diff
-   39090: (BB, IB, ZB) => {
+   39224: (tt, et, Vt) => {
```

#### 668. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4286` → after: `L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4048) · [Before (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4286)

```diff
-       c: () => oB,
+       b: () => Dt,
```

#### 669. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4289` → after: `L4051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4051) · [Before (L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4289)

```diff
-     var TB = ZB(24);
+     var Ot = Vt(31);
```

#### 670. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4296` → after: `L4058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4058) · [Before (L4296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4296)

```diff
-       "refetchCode" !== BB ? "Plugin|MobAiPlugin|ShowPetUi" !== BB ? Promise.all([ZB.e(109), ZB.e(110), ZB.e(105), ZB.e(107), ZB.e(218)]).then((() => ZB(41761))).then((ZB => {
+       "refetchCode" !== tt ? "Plugin|MobAiPlugin|ShowPetUi" !== tt ? Promise.all([Vt.e(109), Vt.e(110), Vt.e(105), Vt.e(107), Vt.e(218)]).then((() => Vt(41997))).then((Vt => {
```

#### 671. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4302-L4303` → after: `L4064-L4065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4064-L4065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4064-L4065) · [Before (L4302-L4303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4302-L4303)

```diff
-         console.error(`Game message ${BB} failed`, IB)
-       })) : TB.l.Gq("showPetUi", IB) : TB.l.Gq("refetchCode")
+         console.error(`Game message ${tt} failed`, et)
+       })) : Ot.j.sw("showPetUi", et) : Ot.j.sw("refetchCode")
```

#### 672. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4306` → after: `L4068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4068) · [Before (L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4306)

```diff
-   39076: (BB, IB, ZB) => {
+   39208: (tt, et, Vt) => {
```

#### 673. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4310-L4316` → after: `L4072-L4078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4072-L4078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4072-L4078) · [Before (L4310-L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4310-L4316)

```diff
-     var TB = ZB(1281),
-       JB = ZB(1385),
-       oB = ZB(20),
-       GB = ZB(1370),
-       vB = ZB(1382),
-       kB = ZB(1579),
-       cB = ZB(36492);
+     var Ot = Vt(1308),
+       qt = Vt(1429),
+       Dt = Vt(26),
+       mt = Vt(1410),
+       dt = Vt(1423),
+       jt = Vt(1613),
+       Ht = Vt(36709);
```

#### 674. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4320-L4321` → after: `L4082-L4083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4082-L4083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4082-L4083) · [Before (L4320-L4321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4320-L4321)

```diff
-         jJ: IB,
-         PJ: ZB
+         iq: et,
+         Yq: Vt
```

#### 675. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4323-L4325` → after: `L4085-L4087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4085-L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4085-L4087) · [Before (L4323-L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4323-L4325)

```diff
-       const nB = null !== IB && void 0 !== IB ? IB : (0, vB.c)().gameNameWithVariation;
-       (0, TB.D)(nB) && ((0, cB.l)(), (0, GB.$)((() => {
-         console.log("Received matchmaking order from game server to game", IB), (0, oB.m)("inGameReplay"), (0, kB.navigatePreserveSearch)((0, JB.b)(nB, null !== ZB && void 0 !== ZB ? ZB : void 0))
+       const Xt = null !== et && void 0 !== et ? et : (0, dt.c)().gameNameWithVariation;
+       (0, Ot.M)(Xt) && ((0, Ht.j)(), (0, mt.ab)((() => {
+         console.log("Received matchmaking order from game server to game", et), (0, Dt.i)("inGameReplay"), (0, jt.navigatePreserveSearch)((0, qt.c)(Xt, null !== Vt && void 0 !== Vt ? Vt : void 0))
```

#### 676. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4329` → after: `L4091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4091) · [Before (L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4329)

```diff
-   39067: (BB, IB, ZB) => {
+   39202: (tt, et, Vt) => {
```

#### 677. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4331-L4334` → after: `L4093-L4096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4093-L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4093-L4096) · [Before (L4331-L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4331-L4334)

```diff
-       b: () => kB,
-       f: () => GB,
-       j: () => vB,
-       k: () => cB
+       e: () => jt,
+       i: () => mt,
+       l: () => dt,
+       n: () => Ht
```

#### 678. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4336-L4337` → after: `L4098-L4099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4098-L4099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4098-L4099) · [Before (L4336-L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4336-L4337)

```diff
-     var TB = ZB(24),
-       JB = ZB(1403);
+     var Ot = Vt(31),
+       qt = Vt(1450);
```

#### 679. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4341` → after: `L4103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4103) · [Before (L4341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4341)

```diff
-       TB.l.Gq("newUiRequest", {
+       Ot.j.sw("newUiRequest", {
```

#### 680. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4348` → after: `L4110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4110) · [Before (L4348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4348)

```diff
-       TB.l.Gq("removeUiRequest", BB, !0);
+       Ot.j.sw("removeUiRequest", tt, !0);
```

#### 681. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4354` → after: `L4116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4116) · [Before (L4354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4354)

```diff
-       TB.l.Gq("clearUiRequests");
+       Ot.j.sw("clearUiRequests");
```

#### 682. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4372` → after: `L4134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4134) · [Before (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4372)

```diff
-   39061: (BB, IB, ZB) => {
+   39196: (tt, et, Vt) => {
```

#### 683. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4374` → after: `L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4136) · [Before (L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4374)

```diff
-       c: () => TB
+       b: () => Ot
```

#### 684. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4386-L4387` → after: `L4148-L4149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4148-L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4148-L4149) · [Before (L4386-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4386-L4387)

```diff
-         for (const TB of BB.mB) {
-           let BB = this.members.get(TB.XB);
+         for (const Ot of tt.zt) {
+           let tt = this.members.get(Ot.ot);
```

#### 685. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4391-L4392` → after: `L4153-L4154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4153-L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4153-L4154) · [Before (L4391-L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4391-L4392)

```diff
-             }, this.members.set(TB.XB, BB), IB.added.push(TB.XB)), null !== TB.LB && (BB.name = TB.LB), null !== TB.eB || TB.uB.length > 0) {
-             const ZB = null === TB.eB ? {} : JSON.parse(TB.eB);
+             }, this.members.set(Ot.ot, tt), et.added.push(Ot.ot)), null !== Ot.rt && (tt.name = Ot.rt), null !== Ot.Ut || Ot.Yt.length > 0) {
+             const Vt = null === Ot.Ut ? {} : JSON.parse(Ot.Ut);
```

#### 686. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4394` → after: `L4156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4156) · [Before (L4394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4394)

```diff
-             for (const IB of TB.uB) delete BB.settings[IB], ZB[IB] = void 0;
+             for (const et of Ot.Yt) delete tt.settings[et], Vt[et] = void 0;
```

#### 687. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4396` → after: `L4158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4158) · [Before (L4396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4396)

```diff
-               playerId: TB.XB,
+               playerId: Ot.ot,
```

#### 688. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4401` → after: `L4163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4163) · [Before (L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4401)

```diff
-         for (const TB of BB.fB) {
+         for (const Ot of tt.Bt) {
```

#### 689. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4406` → after: `L4168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4168) · [Before (L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4406)

```diff
-             name: null !== (ZB = BB.name) && void 0 !== ZB ? ZB : void 0
+             name: null !== (Vt = tt.name) && void 0 !== Vt ? Vt : void 0
```

#### 690. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4419` → after: `L4181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4181) · [Before (L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4419)

```diff
-         return null !== (IB = null === (ZB = this.members.get(BB)) || void 0 === ZB ? void 0 : ZB.name) && void 0 !== IB ? IB : void 0
+         return null !== (et = null === (Vt = this.members.get(tt)) || void 0 === Vt ? void 0 : Vt.name) && void 0 !== et ? et : void 0
```

#### 691. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4434` → after: `L4196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4196) · [Before (L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4434)

```diff
-   39094: (BB, IB, ZB) => {
+   39226: (tt, et, Vt) => {
```

#### 692. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4437` → after: `L4199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4199) · [Before (L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/248.js#L4437)

```diff
-       i: () => JB
+       f: () => qt
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/249.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/249.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479)

#### 1. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L4)

```diff
-   41115: (BB, IB, ZB) => {
+   41293: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L6)

```diff
-       d: () => GB,
+       b: () => mt,
```

#### 3. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L8)

```diff
-       h: () => cB
+       i: () => Ht
```

#### 4. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L10-L11)

```diff
-     var TB, JB = ZB(37158),
-       oB = ZB(37120);
+     var Ot, qt = Vt(37372),
+       Dt = Vt(37336);
```

#### 5. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L67)

```diff
-         this.centerPoint = new oB.p((JB * (IB.y - ZB.y) - GB * (BB.y - IB.y)) / kB, ((BB.x - IB.x) * GB - (IB.x - ZB.x) * JB) / kB), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = vB.BetweenTwoPoints(this.centerPoint, this.startPoint);
+         this.centerPoint = new Dt.m((qt * (et.y - Vt.y) - mt * (tt.y - et.y)) / jt, ((tt.x - et.x) * mt - (et.x - Vt.x) * qt) / jt), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = dt.BetweenTwoPoints(this.centerPoint, this.startPoint);
```

#### 6. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L71)

```diff
-         nB - cB > 180 && (nB -= 360), nB - cB < -180 && (nB += 360), hB - nB > 180 && (hB -= 360), hB - nB < -180 && (hB += 360), this.orientation = nB - cB < 0 ? 0 : 1, this.angle = vB.FromDegrees(0 === this.orientation ? cB - hB : hB - cB)
+         Xt - Ht > 180 && (Xt -= 360), Xt - Ht < -180 && (Xt += 360), Qt - Xt > 180 && (Qt -= 360), Qt - Xt < -180 && (Qt += 360), this.orientation = Xt - Ht < 0 ? 0 : 1, this.angle = dt.FromDegrees(0 === this.orientation ? Ht - Qt : Qt - Ht)
```

#### 7. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L76)

```diff
-         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new oB.p(BB, IB))
+         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Dt.m(tt, et))
```

#### 8. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L80)

```diff
-         const ZB = new oB.p(BB, IB),
+         const Vt = new Dt.m(tt, et),
```

#### 9. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L88-L89` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L88-L89) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L88-L89)

```diff
-           vB = new oB.p(BB, IB),
-           cB = new oB.p(ZB, TB),
+           dt = new Dt.m(tt, et),
+           Ht = new Dt.m(Vt, Ot),
```

#### 10. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L172)

```diff
-         if (BB < 0 || BB > 1) return oB.p.Zero();
+         if (tt < 0 || tt > 1) return Dt.m.Zero();
```

#### 11. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L183)

```diff
-             return new oB.p(JB.x + BB.x * TB, JB.y + BB.y * TB)
+             return new Dt.m(qt.x + tt.x * Ot, qt.y + tt.y * Ot)
```

#### 12. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L187)

```diff
-         return oB.p.Zero()
+         return Dt.m.Zero()
```

#### 13. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L195)

```diff
-         TB = TB > 2 ? TB : 3;
+         Ot = Ot > 2 ? Ot : 3;
```

#### 14. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L198)

```diff
-         for (let vB = 0; vB <= TB; vB++) JB.push(new oB.s(GB(vB / TB, BB.x, IB.x, ZB.x), GB(vB / TB, BB.y, IB.y, ZB.y), GB(vB / TB, BB.z, IB.z, ZB.z)));
+         for (let dt = 0; dt <= Ot; dt++) qt.push(new Dt.n(mt(dt / Ot, tt.x, et.x, Vt.x), mt(dt / Ot, tt.y, et.y, Vt.y), mt(dt / Ot, tt.z, et.z, Vt.z)));
```

#### 15. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L202)

```diff
-         JB = JB > 3 ? JB : 4;
+         qt = qt > 3 ? qt : 4;
```

#### 16. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L205)

```diff
-         for (let kB = 0; kB <= JB; kB++) GB.push(new oB.s(vB(kB / JB, BB.x, IB.x, ZB.x, TB.x), vB(kB / JB, BB.y, IB.y, ZB.y, TB.y), vB(kB / JB, BB.z, IB.z, ZB.z, TB.z)));
+         for (let jt = 0; jt <= qt; jt++) mt.push(new Dt.n(dt(jt / qt, tt.x, et.x, Vt.x, Ot.x), dt(jt / qt, tt.y, et.y, Vt.y, Ot.y), dt(jt / qt, tt.z, et.z, Vt.z, Ot.z)));
```

#### 17. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L211)

```diff
-         for (let kB = 0; kB <= JB; kB++) GB.push(oB.s.Hermite(BB, IB, ZB, TB, kB * vB));
+         for (let jt = 0; jt <= qt; jt++) mt.push(Dt.n.Hermite(tt, et, Vt, Ot, jt * dt));
```

#### 18. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L222)

```diff
-             for (let kB = 0; kB < IB; kB++) TB.push(oB.s.CatmullRom(BB[vB % ZB], BB[(vB + 1) % ZB], BB[(vB + 2) % ZB], BB[(vB + 3) % ZB], GB)), GB += JB
+             for (let jt = 0; jt < et; jt++) Ot.push(Dt.n.CatmullRom(tt[dt % Vt], tt[(dt + 1) % Vt], tt[(dt + 2) % Vt], tt[(dt + 3) % Vt], mt)), mt += qt
```

#### 19. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L231-L233` → after: `L231-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L231-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L231-L233) · [Before (L231-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L231-L233)

```diff
-             for (let BB = 0; BB < IB; BB++) TB.push(oB.s.CatmullRom(ZB[vB], ZB[vB + 1], ZB[vB + 2], ZB[vB + 3], GB)), GB += JB
-           }
-           vB--, TB.push(oB.s.CatmullRom(ZB[vB], ZB[vB + 1], ZB[vB + 2], ZB[vB + 3], GB))
+             for (let tt = 0; tt < et; tt++) Ot.push(Dt.n.CatmullRom(Vt[dt], Vt[dt + 1], Vt[dt + 2], Vt[dt + 3], mt)), mt += qt
+           }
+           dt--, Ot.push(Dt.n.CatmullRom(Vt[dt], Vt[dt + 1], Vt[dt + 2], Vt[dt + 3], mt))
```

#### 20. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L245)

```diff
-           zB = oB.s.Cross(kB, cB),
+           lt = Dt.n.Cross(jt, Ht),
```

#### 21. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L253-L255` → after: `L253-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L253-L255) · [Before (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L253-L255)

```diff
-           WB = -.5 * gB * oB.s.Dot(kB, hB) / yB,
-           dB = -.5 * qB * oB.s.Dot(kB, cB) / yB,
-           CB = -.5 * NB * oB.s.Dot(cB, hB) / yB,
+           bt = -.5 * wt * Dt.n.Dot(jt, Qt) / Nt,
+           Jt = -.5 * yt * Dt.n.Dot(jt, Ht) / Nt,
+           Ct = -.5 * ft * Dt.n.Dot(Ht, Qt) / Nt,
```

#### 22. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L258)

```diff
-           wB = oB.s.Cross(zB, sB).normalize();
+           ht = Dt.n.Cross(lt, Kt).normalize();
```

#### 23. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L296)

```diff
-   38714: (BB, IB, ZB) => {
+   38897: (tt, et, Vt) => {
```

#### 24. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L298)

```diff
-       b: () => oB
+       d: () => Dt
```

#### 25. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L300` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L300) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L300)

```diff
-     var TB = ZB(38718);
+     var Ot = Vt(38899);
```

#### 26. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L339)

```diff
-   38718: (BB, IB, ZB) => {
+   38899: (tt, et, Vt) => {
```

#### 27. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L362)

```diff
-         const IB = BB => BB < 10 ? "0" + BB : "" + BB,
+         const et = tt => tt < 10 ? "0" + tt : "" + tt,
```

#### 28. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/249.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/249.js#L377)

```diff
-         const kB = `<div style='color:${GB.color}'>${oB}</div><br>`;
+         const jt = `<div style='color:${mt.color}'>${Dt}</div><br>`;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/250.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/250.js` (121 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977)

#### 1. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L4)

```diff
-   41208: (BB, IB, ZB) => {
+   41396: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L8-L26` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L8-L26) · [Before (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L8-L26)

```diff
-     var TB = ZB(38159),
-       JB = ZB(2912),
-       oB = ZB(650),
-       GB = ZB(37194),
-       vB = ZB(2333),
-       kB = ZB(37188),
-       cB = ZB(39872),
-       nB = ZB(40143),
-       hB = ZB(41111),
-       zB = ZB(37113),
-       FB = ZB(40297),
-       NB = ZB(37304),
-       gB = ZB(40318),
-       qB = ZB(41170),
-       yB = ZB(37108),
-       UB = ZB(1281),
- ... (3 more removed lines; see GitHub link above)
+     var Ot = Vt(38347),
+       qt = Vt(2848),
+       Dt = Vt(697),
+       mt = Vt(37403),
+       dt = Vt(2295),
+       jt = Vt(37398),
+       Ht = Vt(40023),
+       Xt = Vt(40289),
+       Qt = Vt(41289),
+       lt = Vt(37331),
+       Et = Vt(40433),
+       ft = Vt(37510),
+       wt = Vt(40452),
+       yt = Vt(41348),
+       Nt = Vt(37323),
+       Mt = Vt(1308),
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L54)

```diff
-         this.lg = BB, this.thinInstMgr = IB, this.gR = ZB, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
+         this.Fw = tt, this.thinInstMgr = et, this.RP = Vt, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
```

#### 4. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L57)

```diff
-         const TB = (0, dB.e)(BB, IB);
+         const Ot = (0, Jt.g)(tt, et);
```

#### 5. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L60)

```diff
-             const TB = await (0, dB.f)(BB, this.lg),
+             const Ot = await (0, Jt.k)(tt, this.Fw),
```

#### 6. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L63-L64` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L63-L64) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L63-L64)

```diff
-             const oB = (0, dB.b)(null !== IB && void 0 !== IB ? IB : BB, this.lg);
-             (0, dB.i)(TB, oB, {
+             const Dt = (0, Jt.c)(null !== et && void 0 !== et ? et : tt, this.Fw);
+             (0, Jt.m)(Ot, Dt, {
```

#### 7. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L67)

```diff
-                 (0, dB.j)(BB), this.lg.jTB(BB, !1), BB.isVisible = !1
+                 (0, Jt.p)(tt), this.Fw.oOt(tt, !1), tt.isVisible = !1
```

#### 8. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L71)

```diff
-             const GB = void 0 === ZB ? null : (0, CB.i)(ZB, (BB => {
+             const mt = void 0 === Vt ? null : (0, Ct.d)(Vt, (tt => {
```

#### 9. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L73)

```diff
-               return null !== (IB = null === (ZB = JB.get(BB)) || void 0 === ZB ? void 0 : ZB.rotationQuaternion) && void 0 !== IB ? IB : null
+               return null !== (et = null === (Vt = qt.get(tt)) || void 0 === Vt ? void 0 : Vt.rotationQuaternion) && void 0 !== et ? et : null
```

#### 10. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L80)

```diff
-             throw delete this.modelCache[TB], console.error(`Failed to load preview attachment ${TB}:`, JB), JB
+             throw delete this.modelCache[Ot], console.error(`Failed to load preview attachment ${Ot}:`, qt), qt
```

#### 11. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L88)

```diff
-           gR: JB
+           RP: qt
```

#### 12. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L99` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L99) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L99)

```diff
-             null !== cB && (0, UB.db)(this.shownBones, cB), wB(vB, !1);
+             null !== Ht && (0, Mt.pb)(this.shownBones, Ht), ht(dt, !1);
```

#### 13. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L104` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L104) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L104)

```diff
-         const GB = (0, WB.h)(BB, IB);
+         const mt = (0, bt.n)(tt, et);
```

#### 14. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L116)

```diff
-               console.error(`Preview attachment node ${vB.modelNode} not found in ${vB.modelGlb}`);
+               console.error(`Preview attachment node ${dt.modelNode} not found in ${dt.modelGlb}`);
```

#### 15. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L119)

```diff
-             wB(oB, !0), (0, dB.p)(oB, vB.overlayColour);
+             ht(Dt, !0), (0, Jt.t)(Dt, dt.overlayColour);
```

#### 16. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L132-L133` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L132-L133) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L132-L133)

```diff
-     var YB = ZB(37209),
-       iB = (ZB(41144), ZB(40528), ZB(41147), ZB(34235));
+     var Wt = Vt(37420),
+       St = (Vt(41316), Vt(40669), Vt(41323), Vt(34414));
```

#### 17. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L160)

```diff
-                 const IB = new gB.StandardMaterial(`${BB.name}_depthOnly`, BB.JR());
+                 const et = new wt.StandardMaterial(`${tt.name}_depthOnly`, tt.vI());
```

#### 18. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L179-L180` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L179-L180) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L179-L180)

```diff
-           const GB = (0, JB.h)();
-           GB.VY(!1), TB.d.Player.meshApi.updatePlayerCosmetic(GB.Jm, RB, BB, IB, !0), "cape" === BB && (IB === oB.h ? jB.qY(!1) : (jB.qY(!0), jB.material.diffuseTexture = new qB.e(ZB(38857)(`./cape_${IB}.png`), jB.JR(), {
+           const mt = (0, qt.e)();
+           mt.oW(!1), Ot.b.Player.meshApi.updatePlayerCosmetic(mt.lL, Ft, tt, et, !0), "cape" === tt && (et === Dt.e ? Zt.Av(!1) : (Zt.Av(!0), Zt.material.diffuseTexture = new yt.b(Vt(39024)(`./cape_${et}.png`), Zt.vI(), {
```

#### 19. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L182)

```diff
-             samplingMode: qB.e.NEAREST_NEAREST_MIPLINEAR
+             samplingMode: yt.b.NEAREST_NEAREST_MIPLINEAR
```

#### 20. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L189-L191` → after: `L189-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L189-L191) · [Before (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L189-L191)

```diff
-         if (!BB) return void rB.stopAnimation(kB.h.Emote);
-         const IB = (0, GB.d)((0, vB.j)(BB).animation);
-         rB.startAnimation(IB, kB.h.Emote, 0, vB.d)
+         if (!tt) return void kt.stopAnimation(jt.g.Emote);
+         const et = (0, mt.e)((0, dt.j)(tt).animation);
+         kt.startAnimation(et, jt.g.Emote, 0, dt.d)
```

#### 21. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L238-L240` → after: `L238-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L238-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L238-L240) · [Before (L238-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L238-L240)

```diff
-         const BB = (0, JB.h)();
-         pB.iTB = BB.Ig.engine.iTB, HB = new nB.b(pB), HB.clearColor = new NB.e(0, 0, 0, 0), HB.ambientColor = new NB.Color3(1, 1, 1), aB = new hB.c("rq", 0, 0, 1, zB.rN.Zero(), HB), aB.attachControl(LB, !0), aB.panningSensibility = 0, XB = (0, TB.s)("Player", HB, !0).then((IB =>  … [truncated]
-           MB = IB.meshApi, jB = IB.capeMesh, PB = BB.Ig.kR;
+         const tt = (0, qt.e)();
+         ct.LOt = tt.Bf.engine.LOt, It = new Xt.c(ct), It.clearColor = new ft.e(0, 0, 0, 0), It.ambientColor = new ft.Color3(1, 1, 1), Rt = new Qt.c("Gy", 0, 0, 1, lt.uf.Zero(), It), Rt.attachControl(ot, !0), Rt.panningSensibility = 0, zt = (0, Ot.t)("Player", It, !0).then((et =>  … [truncated]
+           Pt = et.meshApi, Zt = et.capeMesh, Lt = tt.Bf.xI;
```

#### 22. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L242)

```diff
-           RB = (0, TB.j)("Player", ZB, !0, !0), PB.setPosition(RB, 0, -8.33, 0);
+           Ft = (0, Ot.k)("Player", Vt, !0, !0), Lt.setPosition(Ft, 0, -8.33, 0);
```

#### 23. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L244-L245` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L244-L245) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L244-L245)

```diff
-           PB.attachTransformNode(jB, RB, JB), PB.set(RB, "aOpacity", 1), PB.Wm(RB, "aOpacity", 1), mB = new OB(HB, PB, RB), rB = new yB.AnimatorState, rB.Nz = BB, rB.thinInstMgr = PB, rB.gR = RB, rB.SZB = PB.pTB(RB, 0), rB.modelLifeformType = "Player", rB.nodeNameAliases = (0, YB … [truncated]
-           const oB = jB.qm().boundingBox;
+           Lt.attachTransformNode(Zt, Ft, qt), Lt.set(Ft, "aOpacity", 1), Lt.wL(Ft, "aOpacity", 1), Gt = new vt(It, Lt, Ft), kt = new Nt.AnimatorState, kt.ql = tt, kt.thinInstMgr = Lt, kt.RP = Ft, kt.DOt = Lt.FOt(Ft, 0), kt.modelLifeformType = "Player", kt.nodeNameAliases = (0, Wt … [truncated]
+           const Dt = Zt.fL().boundingBox;
```

#### 24. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L253` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L253) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L253)

```diff
-           const nB = new gB.StandardMaterial("capeMaterial", jB.JR());
+           const Xt = new wt.StandardMaterial("capeMaterial", Zt.vI());
```

#### 25. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L257)

```diff
-           const qB = new FB.d("light", new zB.rN(-.1, 1, -.3), HB);
+           const yt = new Et.c("light", new lt.uf(-.1, 1, -.3), It);
```

#### 26. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L263` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L263) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L263)

```diff
-   38851: (BB, IB, ZB) => {
+   39019: (tt, et, Vt) => {
```

#### 27. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L267-L271` → after: `L267-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L267-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L267-L271) · [Before (L267-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L267-L271)

```diff
-     var TB = ZB(37218),
-       JB = ZB(37231),
-       oB = ZB(37490),
-       GB = ZB(37239),
-       vB = ZB(37223);
+     var Ot = Vt(37433),
+       qt = Vt(37440),
+       Dt = Vt(37692),
+       mt = Vt(37448),
+       dt = Vt(37435);
```

#### 28. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L274)

```diff
-       return `\n\t\t\t\t${(0,vB.y)(BB,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       return `\n\t\t\t\t${(0,dt.u)(tt,"mat2","rotate",[{name:"ang",type:"float"}],`\
```

#### 29. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L276)

```diff
-         (0, vB.C)(BB, "float", "s", "sin(ang)")
+         (0, dt.y)(tt, "float", "s", "sin(ang)")
```

#### 30. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L279)

```diff
-         (0, vB.C)(BB, "float", "c", "cos(ang)")
+         (0, dt.y)(tt, "float", "c", "cos(ang)")
```

#### 31. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L282)

```diff
-         (0, vB.p)(BB, "mat2", "c", "s", "-s", "c")
+         (0, dt.l)(tt, "mat2", "c", "s", "-s", "c")
```

#### 32. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L288-L289` → after: `L288-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L288-L289) · [Before (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L288-L289)

```diff
-       let ZB = (0, vB.Hb)(BB, "skele" + (IB - 1));
-       for (let JB = IB - 2; JB >= 0; JB--) ZB = (0, vB.ub)(BB, `boneIdx == ${JB}`, (0, vB.Hb)(BB, `skele${JB}`), ZB);
+       let Vt = (0, dt.vb)(tt, "skele" + (et - 1));
+       for (let qt = et - 2; qt >= 0; qt--) Vt = (0, dt.kb)(tt, `boneIdx == ${qt}`, (0, dt.vb)(tt, `skele${qt}`), Vt);
```

#### 33. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L291)

```diff
-       return `\n\t\t\t\t${(0,vB.C)(BB,"int","boneIdx",(0,vB.Cb)(BB,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,vB.C)(BB,"vec3","bone",ZB)}\n\t\t\t\t${(0,vB.C)(BB,"vec2","pivot",(0,vB.p)(BB,"vec2","0.0",`${(0,vB.Pb)(BB,"position")}.z`))}\n\t\t\t\t${(0,vB.ab)(BB)?`posit … [truncated]
+       return `\n\t\t\t\t${(0,dt.y)(tt,"int","boneIdx",(0,dt.nb)(tt,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,dt.y)(tt,"vec3","bone",Vt)}\n\t\t\t\t${(0,dt.y)(tt,"vec2","pivot",(0,dt.l)(tt,"vec2","0.0",`${(0,dt.Ab)(tt,"position")}.z`))}\n\t\t\t\t${(0,dt.Y)(tt)?`positi … [truncated]
```

#### 34. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L295` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L295) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L295)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,vB.p)(BB,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,dt.l)(tt,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 35. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L301)

```diff
-         WZB(BB, IB) {
+         vVt(tt, et) {
```

#### 36. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L310-L312` → after: `L310-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L310-L312) · [Before (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L310-L312)

```diff
-           ...(0, TB.c)("CAPE"),
-           BLOXD_CAPE_BONES: `${BB}`,
-           BLOXD_CAPE_MAX_Y: (0, JB.nb)(IB)
+           ...(0, Ot.e)("CAPE"),
+           BLOXD_CAPE_BONES: `${tt}`,
+           BLOXD_CAPE_MAX_Y: (0, qt.gb)(et)
```

#### 37. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L318)

```diff
-               name: `skele${ZB}`,
+               name: `skele${Vt}`,
```

#### 38. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L325)

```diff
-           for (let IB = 0; IB < this.skeleLen; IB++) BB.updateVector3(`skele${IB}`, hB.WZB(this.skele, 3 * IB))
+           for (let et = 0; et < this.skeleLen; et++) tt.updateVector3(`skele${et}`, Qt.vVt(this.skele, 3 * et))
```

#### 39. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/250.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/250.js#L338)

```diff
-     (0, GB.p)(zB)
+     (0, mt.k)(lt)
```
