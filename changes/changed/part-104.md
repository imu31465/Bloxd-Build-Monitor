# Changed — Bundle Modifications Report (Part 104 / 141)

- **Updated at**: `2026-11-25T08:36 JST`
- **Part**: `104 / 141` (**428** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 103](part-103.md) · [Part 105 →](part-105.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (3948 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 2475. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22323` → after: `L22207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22207) · [Before (L22323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22323)

```diff
-             const ZB = (0, oB.g)(BB._planeTexture);
+             const Vt = (0, Dt.h)(tt._planeTexture);
```

#### 2476. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22326-L22327` → after: `L22210-L22211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22210-L22211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22210-L22211) · [Before (L22326-L22327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22326-L22327)

```diff
-               const JB = null !== (ZB = null === (TB = IB.healthbar) || void 0 === TB ? void 0 : TB.display) && void 0 !== ZB ? ZB : "onDamage";
-               return "never" === JB ? null : "always" === JB ? null !== (oB = BB.jB) && void 0 !== oB ? oB : 1 : BB.healthTimeout ? BB.jB : null;
+               const qt = null !== (Vt = null === (Ot = et.healthbar) || void 0 === Ot ? void 0 : Ot.display) && void 0 !== Vt ? Vt : "onDamage";
+               return "never" === qt ? null : "always" === qt ? null !== (Dt = tt.Lt) && void 0 !== Dt ? Dt : 1 : tt.healthTimeout ? tt.Lt : null;
```

#### 2477. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22331-L22333` → after: `L22215-L22217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22215-L22217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22215-L22217) · [Before (L22331-L22333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22331-L22333)

```diff
-       }(0, CB.b)((() => {
-         for (const BB of bB) AB(BB.bR) !== tB.has(BB.bR) && JI(BB)
-       })), (0, wB.d)(BB.Ig.JR(), (() => {
+       }(0, Ct.d)((() => {
+         for (const tt of pt) Yt(tt.uZ) !== Bt.has(tt.uZ) && De(tt)
+       })), (0, ht.c)(tt.Bf.vI(), (() => {
```

#### 2478. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22347` → after: `L22231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22231) · [Before (L22347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22347)

```diff
-         const TB = (0, NB.d)().getLifeformType(IB);
+         const Ot = (0, ft.c)().getLifeformType(et);
```

#### 2479. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22349` → after: `L22233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22233) · [Before (L22349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22349)

```diff
-         return !!(null === (ZB = BB.zW.YZB(IB)) || void 0 === ZB ? void 0 : ZB.zN)
+         return !!(null === (Vt = tt.mJ.ZVt(et)) || void 0 === Vt ? void 0 : Vt.nE)
```

#### 2480. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22357` → after: `L22241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22241) · [Before (L22357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22357)

```diff
-             BB.wg("Error updating a nametag", IB)
+             tt.yw("Error updating a nametag", et)
```

#### 2481. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22369` → after: `L22253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22253) · [Before (L22369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22369)

```diff
-         return null !== (ZB = BB.Jm !== IB && (null === (TB = BB.Tm[BB.Jm][IB]) || void 0 === TB ? void 0 : TB.hasPriorityNametag)) && void 0 !== ZB && ZB
+         return null !== (Vt = tt.lL !== et && (null === (Ot = tt.dL[tt.lL][et]) || void 0 === Ot ? void 0 : Ot.hasPriorityNametag)) && void 0 !== Vt && Vt
```

#### 2482. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22380` → after: `L22264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22264) · [Before (L22380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22380)

```diff
-         if (JB === oB && !OB.e.getTexture(oB, YB.m.ICON).notFound) {
+         if (qt === Dt && !vt.e.getTexture(Dt, Wt.k.ICON).notFound) {
```

#### 2483. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22385` → after: `L22269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22269) · [Before (L22385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22385)

```diff
-             !GB || null !== (vB = (0, NB.d)().client) && void 0 !== vB && vB.isReplayMode() || (IB = setTimeout((() => {
+             !mt || null !== (dt = (0, ft.c)().client) && void 0 !== dt && dt.isReplayMode() || (et = setTimeout((() => {
```

#### 2484. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22398` → after: `L22282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22282) · [Before (L22398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22398)

```diff
-         nI(IB) && ZB > kB.g && (TB = kB.g);
+         Qe(et) && Vt > jt.d && (Ot = jt.d);
```

#### 2485. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22405` → after: `L22289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22289) · [Before (L22405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22405)

```diff
-         const oB = BB.Ig.engine.getRenderWidth();
+         const Dt = tt.Bf.engine.getRenderWidth();
```

#### 2486. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22412-L22420` → after: `L22296-L22304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22296-L22304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22296-L22304) · [Before (L22412-L22420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22412-L22420)

```diff
-         const TB = BB.zW.uIB(IB.bR),
-           oB = nI(IB.bR),
-           nB = (0, dB.B)(IB._planeMesh, BB.vW.canSeeNametagsThroughWalls, null === TB || void 0 === TB ? void 0 : TB.crouching, oB),
-           hB = BB.zW.zK(IB.planeEId).qV,
-           zB = BB.camera.yV(),
-           FB = JB().uG(hB, zB),
-           NB = BB.zW.RIB(IB.planeEId).offset,
-           gB = ZB ? (0, kB.z)(BB, IB.bR, IB.planeEId, nB) : 1;
-         if (oB && nB && FB > kB.g) {
+         const Ot = tt.mJ.xet(et.uZ),
+           Dt = Qe(et.uZ),
+           Xt = (0, Jt.C)(et._planeMesh, tt.OJ.canSeeNametagsThroughWalls, null === Ot || void 0 === Ot ? void 0 : Ot.crouching, Dt),
+           Qt = tt.mJ.RY(et.planeEId).zB,
+           lt = tt.camera.oB(),
+           Et = qt().pm(Qt, lt),
+           ft = tt.mJ.oet(et.planeEId).offset,
+           wt = Vt ? (0, jt.v)(tt, et.uZ, et.planeEId, Xt) : 1;
+         if (Dt && Xt && Et > jt.d) {
```

#### 2487. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22423` → after: `L22307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22307) · [Before (L22423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22423)

```diff
-           const IB = JB().scale(BB, BB, kB.g),
+           const et = qt().scale(tt, tt, jt.d),
```

#### 2488. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22427-L22428` → after: `L22311-L22312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22311-L22312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22311-L22312) · [Before (L22427-L22428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22427-L22428)

```diff
-         ZB && (0, kB.m)(BB, IB.planeEId);
-         const qB = (0, kB.t)(FB, oB, nB) * gB,
+         Vt && (0, jt.k)(tt, et.planeEId);
+         const yt = (0, jt.r)(Et, Dt, Xt) * wt,
```

#### 2489. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22430` → after: `L22314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22314) · [Before (L22430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22430)

```diff
-         if (IB._layoutHeight = yB, BB.Ig.Xg && IB._planeMesh.isEnabled() && IB._planeMesh.isVisible) {
+         if (et._layoutHeight = Nt, tt.Bf.Rw && et._planeMesh.isEnabled() && et._planeMesh.isVisible) {
```

#### 2490. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22432` → after: `L22316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22316) · [Before (L22432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22432)

```diff
-           const ZB = (0, GB.e)(BB, IB.bR),
+           const Vt = (0, mt.e)(tt, et.uZ),
```

#### 2491. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22437` → after: `L22321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22321) · [Before (L22437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22437)

```diff
-             nB = iB.e.lerp(null !== (WB = oB) && void 0 !== WB ? WB : GI, vI, kB);
+             Xt = St.e.lerp(null !== (bt = Dt) && void 0 !== bt ? bt : de, je, jt);
```

#### 2492. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22439-L22440` → after: `L22323-L22324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22323-L22324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22323-L22324) · [Before (L22439-L22440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22439-L22440)

```diff
-           const hB = (0, cB.applyHeldLightTint)(BB, IB.bR, ZB, mB);
-           mB[0] = Math.max(hB[0], oB), mB[1] = Math.max(hB[1], oB), mB[2] = Math.max(hB[2], oB), mB[3] = Math.max(hB[3], oB), (0, vB.h)(IB._lightState, mB)
+           const Qt = (0, Ht.applyHeldLightTint)(tt, et.uZ, Vt, Gt);
+           Gt[0] = Math.max(Qt[0], Dt), Gt[1] = Math.max(Qt[1], Dt), Gt[2] = Math.max(Qt[2], Dt), Gt[3] = Math.max(Qt[3], Dt), (0, dt.m)(et._lightState, Gt)
```

#### 2493. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22454` → after: `L22338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22338) · [Before (L22454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22454)

```diff
-           jB: null,
+           Lt: null,
```

#### 2494. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22486-L22487` → after: `L22370-L22371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22370-L22371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22370-L22371) · [Before (L22486-L22487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22486-L22487)

```diff
-         cW: function(IB, ZB) {
-           ZB.effects = {}, bB.add(ZB), ZB._lightId = `nt_${IB}`, ZB._visibilityCombinator = new UB.d((IB => {
+         qJ: function(et, Vt) {
+           Vt.effects = {}, pt.add(Vt), Vt._lightId = `nt_${et}`, Vt._visibilityCombinator = new Mt.b((et => {
```

#### 2495. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22489` → after: `L22373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22373) · [Before (L22489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22489)

```diff
-             const TB = BB.zW.hZB(ZB.bR);
+             const Ot = tt.mJ.aVt(Vt.uZ);
```

#### 2496. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22491` → after: `L22375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22375) · [Before (L22491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22491)

```diff
-           })), ZB.entityMeshScalingSub = nB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|meshScaling`, (BB => {
+           })), Vt.entityMeshScalingSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|meshScaling`, (tt => {
```

#### 2497. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22493` → after: `L22377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22377) · [Before (L22493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22493)

```diff
-           })), ZB.nameTagInfoSub = nB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|nameTagInfo`, (BB => {
+           })), Vt.nameTagInfoSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|nameTagInfo`, (tt => {
```

#### 2498. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22495` → after: `L22379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22379) · [Before (L22495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22495)

```diff
-           })), ZB.priorityNametagSub = nB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|hasPriorityNametag`, (BB => {
+           })), Vt.priorityNametagSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|hasPriorityNametag`, (tt => {
```

#### 2499. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22497` → after: `L22381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22381) · [Before (L22497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22497)

```diff
-           })), ZB.rankUpdateSub = nB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|ranks`, (BB => {
+           })), Vt.rankUpdateSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|ranks`, (tt => {
```

#### 2500. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22499` → after: `L22383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22383) · [Before (L22499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22499)

```diff
-           })), ZB.hideNameSub = nB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|hideNameSeed`, (BB => {
+           })), Vt.hideNameSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|hideNameSeed`, (tt => {
```

#### 2501. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22501` → after: `L22385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22385) · [Before (L22501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22501)

```diff
-           })), ZB.nameChangedSub = nB.l.subscribe(`entityNameChanged|${IB}`, (() => {
+           })), Vt.nameChangedSub = Xt.j.subscribe(`entityNameChanged|${et}`, (() => {
```

#### 2502. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22503` → after: `L22387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22387) · [Before (L22503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22503)

```diff
-           })), ZB.nameColourSub = nB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|nameColour`, (BB => {
+           })), Vt.nameColourSub = Xt.j.subscribe(`otherEntitySettingsClientifiedEId|${et}|nameColour`, (tt => {
```

#### 2503. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22505` → after: `L22389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22389) · [Before (L22505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22505)

```diff
-           })), ZB.effectInfoSub = nB.l.subscribe("EffectUpdate", (BB => {
+           })), Vt.effectInfoSub = Xt.j.subscribe("EffectUpdate", (tt => {
```

#### 2504. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22507-L22508` → after: `L22391-L22392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22391-L22392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22391-L22392) · [Before (L22507-L22508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22507-L22508)

```diff
-             (null === (TB = BB.showInNametag) || void 0 === TB || TB) && (0, qB.e)(BB.PB) === IB && hI(ZB, BB)
-           })), ZB.removeEffectSub = nB.l.subscribe("RemoveEffect", (BB => {
+             (null === (Ot = tt.showInNametag) || void 0 === Ot || Ot) && (0, yt.c)(tt.Ft) === et && le(Vt, tt)
+           })), Vt.removeEffectSub = Xt.j.subscribe("RemoveEffect", (tt => {
```

#### 2505. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22510-L22511` → after: `L22394-L22395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22394-L22395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22394-L22395) · [Before (L22510-L22511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22510-L22511)

```diff
-             (0, qB.e)(BB.PB) === IB && (clearTimeout(null === (TB = ZB.effects[BB.name]) || void 0 === TB ? void 0 : TB.timeout), delete ZB.effects[BB.name], JI(ZB))
-           })), ZB.leaveGameSub = nB.l.subscribe("leaveGame", (() => {
+             (0, yt.c)(tt.Ft) === et && (clearTimeout(null === (Ot = Vt.effects[tt.name]) || void 0 === Ot ? void 0 : Ot.timeout), delete Vt.effects[tt.name], De(Vt))
+           })), Vt.leaveGameSub = Xt.j.subscribe("leaveGame", (() => {
```

#### 2506. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22514` → after: `L22398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22398) · [Before (L22514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22514)

```diff
-           })), ZB.lifeformHurtSub = nB.l.subscribe("lifeformHurt", (BB => {
+           })), Vt.lifeformHurtSub = Xt.j.subscribe("lifeformHurt", (tt => {
```

#### 2507. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22517` → after: `L22401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22401) · [Before (L22517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22517)

```diff
-               jB: JB
+               Lt: qt
```

#### 2508. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22519` → after: `L22403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22403) · [Before (L22519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22519)

```diff
-             (0, qB.e)(TB) === IB && (clearTimeout(ZB.healthTimeout), ZB.healthTimeout = setTimeout((() => {
+             (0, yt.c)(Ot) === et && (clearTimeout(Vt.healthTimeout), Vt.healthTimeout = setTimeout((() => {
```

#### 2509. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22521-L22522` → after: `L22405-L22406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22405-L22406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22405-L22406) · [Before (L22521-L22522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22521-L22522)

```diff
-             }), 2e3), ZB.jB = JB, JI(ZB))
-           })), ZB.lifeformHealthChangedSub = nB.l.subscribe("lifeformHealthChanged", (TB => {
+             }), 2e3), Vt.Lt = qt, De(Vt))
+           })), Vt.lifeformHealthChangedSub = Xt.j.subscribe("lifeformHealthChanged", (Ot => {
```

#### 2510. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22525-L22526` → after: `L22409-L22410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22409-L22410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22409-L22410) · [Before (L22525-L22526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22525-L22526)

```diff
-               OI: oB,
-               YI: GB
+               Fe: Dt,
+               ke: mt
```

#### 2511. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22528` → after: `L22412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22412) · [Before (L22528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22528)

```diff
-             if ((0, qB.e)(JB) !== IB || null === GB) return;
+             if ((0, yt.c)(qt) !== et || null === mt) return;
```

#### 2512. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22531-L22532` → after: `L22415-L22416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22415-L22416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22415-L22416) · [Before (L22531-L22532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22531-L22532)

```diff
-             }), 2e3)), ZB.jB = GB, BB.bloxd.client.gameRecorder.recordLifeformHealth(JB, oB, GB), JI(ZB)
-           })), ZB.hideNametagSub = nB.l.subscribe("appManagerUpdated|areNametagsHidden", (BB => {
+             }), 2e3)), Vt.Lt = mt, tt.bloxd.client.gameRecorder.recordLifeformHealth(qt, Dt, mt), De(Vt)
+           })), Vt.hideNametagSub = Xt.j.subscribe("appManagerUpdated|areNametagsHidden", (tt => {
```

#### 2513. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22535` → after: `L22419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22419) · [Before (L22535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22535)

```diff
-           ZB.unsubscribeKeyPromptChanges = (0, hB.r)((() => {
+           Vt.unsubscribeKeyPromptChanges = (0, Qt.n)((() => {
```

#### 2514. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22537-L22540` → after: `L22421-L22424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22421-L22424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22421-L22424) · [Before (L22537-L22540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22537-L22540)

```diff
-             (null !== (BB = ZB.nameTagInfo) && void 0 !== BB && null !== (IB = BB.content) && void 0 !== IB && IB.some(zB.Bb) || null !== (TB = ZB.nameTagInfo) && void 0 !== TB && null !== (JB = TB.subtitle) && void 0 !== JB && JB.some(zB.Bb)) && JI(ZB)
-           })), ZB._visibilityCombinator.setBooleanType("nametagEnabled", !pB.d.get("areNametagsHidden"));
-           const TB = (0, HB.c)(BB);
-           ZB.jB = TB.getHealthFrac(IB);
+             (null !== (tt = Vt.nameTagInfo) && void 0 !== tt && null !== (et = tt.content) && void 0 !== et && et.some(lt.ib) || null !== (Ot = Vt.nameTagInfo) && void 0 !== Ot && null !== (qt = Ot.subtitle) && void 0 !== qt && qt.some(lt.ib)) && De(Vt)
+           })), Vt._visibilityCombinator.setBooleanType("nametagEnabled", !ct.b.get("areNametagsHidden"));
+           const Ot = (0, It.e)(tt);
+           Vt.Lt = Ot.getHealthFrac(et);
```

#### 2515. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22550` → after: `L22434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22434) · [Before (L22550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22550)

```diff
-           BB.Jm in BB.Tm && IB in BB.Tm[BB.Jm] && ("nameTagInfo" in BB.Tm[BB.Jm][IB] && (ZB.nameTagInfo = BB.Tm[BB.Jm][IB].nameTagInfo), "nameColour" in BB.Tm[BB.Jm][IB] && (ZB.nameColour = BB.Tm[BB.Jm][IB].nameColour)), JI(ZB)
+           tt.lL in tt.dL && et in tt.dL[tt.lL] && ("nameTagInfo" in tt.dL[tt.lL][et] && (Vt.nameTagInfo = tt.dL[tt.lL][et].nameTagInfo), "nameColour" in tt.dL[tt.lL][et] && (Vt.nameColour = tt.dL[tt.lL][et].nameColour)), De(Vt)
```

#### 2516. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22555` → after: `L22439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22439) · [Before (L22555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22555)

```diff
-             const BB = oI(ZB.bR);
+             const tt = me(Vt.uZ);
```

#### 2517. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22561` → after: `L22445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22445) · [Before (L22561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22561)

```diff
-             nI(ZB.bR) && lB(ZB) && JI(ZB)
+             Qe(Vt.uZ) && it(Vt) && De(Vt)
```

#### 2518. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22564` → after: `L22448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22448) · [Before (L22564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22564)

```diff
-         FW: function(BB, IB) {
+         dJ: function(tt, et) {
```

#### 2519. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22567` → after: `L22451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22451) · [Before (L22567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22567)

```diff
-         nH: function(BB, IB) {
+         nS: function(tt, et) {
```

#### 2520. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22569` → after: `L22453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22453) · [Before (L22569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22569)

```diff
-           DB(IB), bB.delete(IB), tB.delete(IB.bR), nB.l.unsubscribe(IB.entityMeshScalingSub), nB.l.unsubscribe(IB.nameTagInfoSub), nB.l.unsubscribe(IB.priorityNametagSub), nB.l.unsubscribe(IB.rankUpdateSub), nB.l.unsubscribe(IB.hideNameSub), nB.l.unsubscribe(IB.nameChangedSub), n … [truncated]
+           gt(et), pt.delete(et), Bt.delete(et.uZ), Xt.j.unsubscribe(et.entityMeshScalingSub), Xt.j.unsubscribe(et.nameTagInfoSub), Xt.j.unsubscribe(et.priorityNametagSub), Xt.j.unsubscribe(et.rankUpdateSub), Xt.j.unsubscribe(et.hideNameSub), Xt.j.unsubscribe(et.nameChangedSub), X … [truncated]
```

#### 2521. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22580` → after: `L22464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22464) · [Before (L22580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22580)

```diff
-   38943: (BB, IB, ZB) => {
+   39085: (tt, et, Vt) => {
```

#### 2522. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22584-L22587` → after: `L22468-L22471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22468-L22471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22468-L22471) · [Before (L22584-L22587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22584-L22587)

```diff
-     var TB = ZB(37956),
-       JB = ZB(37671),
-       oB = ZB(37504),
-       GB = ZB(364),
+     var Ot = Vt(38157),
+       qt = Vt(37875),
+       Dt = Vt(37699),
+       mt = Vt(404),
```

#### 2523. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22589-L22591` → after: `L22473-L22475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22473-L22475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22473-L22475) · [Before (L22589-L22591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22589-L22591)

```diff
-       kB = ZB(37685),
-       cB = ZB(37328);
-     const nB = ZB(38948).d,
+       jt = Vt(37891),
+       Ht = Vt(37531);
+     const Xt = Vt(39091).d,
```

#### 2524. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22596-L22597` → after: `L22480-L22481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22480-L22481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22480-L22481) · [Before (L22596-L22597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22596-L22597)

```diff
-       const IB = BB.Ig.JR(),
-         ZB = (0, TB.n)(BB.Ig, "phBox", (0, JB.b)({
+       const et = tt.Bf.vI(),
+         Vt = (0, Ot.q)(tt.Bf, "phBox", (0, qt.c)({
```

#### 2525. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22604` → after: `L22488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22488) · [Before (L22604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22604)

```diff
-         lg: IB,
+         Fw: et,
```

#### 2526. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22612` → after: `L22496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22496) · [Before (L22612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22612)

```diff
-       }).mirror, ZB.visibility = .5, ZB.qY(!1);
+       }).mirror, Vt.visibility = .5, Vt.Av(!1);
```

#### 2527. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22622` → after: `L22506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22506) · [Before (L22622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22622)

```diff
-         cW: function(IB, TB) {
+         qJ: function(et, Ot) {
```

#### 2528. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22624` → after: `L22508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22508) · [Before (L22624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22624)

```diff
-           TB.instance = ZB.createInstance(`mesh overlay ${IB}`), BB.Ig.xg(TB.instance, !1, null), TB.lastFlash = Date.now(), null === (JB = BB.zW.hZB(IB)) || void 0 === JB || JB.meshEnabledCombinator.forceUpdate()
+           Ot.instance = Vt.createInstance(`mesh overlay ${et}`), tt.Bf.ow(Ot.instance, !1, null), Ot.lastFlash = Date.now(), null === (qt = tt.mJ.aVt(et)) || void 0 === qt || qt.meshEnabledCombinator.forceUpdate()
```

#### 2529. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22626` → after: `L22510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22510) · [Before (L22626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22626)

```diff
-         nH: function(BB, IB) {
+         nS: function(tt, et) {
```

#### 2530. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22629` → after: `L22513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22513) · [Before (L22629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22629)

```diff
-         FW: function(IB, ZB) {
+         dJ: function(et, Vt) {
```

#### 2531. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22632-L22633` → after: `L22516-L22517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22516-L22517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22516-L22517) · [Before (L22632-L22633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22632-L22633)

```diff
-             const IB = (0, kB.getCaughtUpMeshRotation)(BB, GB.bR).renderRotation,
-               ZB = BB.zW.zK(GB.bR).qV;
+             const et = (0, jt.getCaughtUpMeshRotation)(tt, mt.uZ).renderRotation,
+               Vt = tt.mJ.RY(mt.uZ).zB;
```

#### 2532. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22635` → after: `L22519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22519) · [Before (L22635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22635)

```diff
-             if (vB().set(NB, ZB[0], ZB[1] + nB.playerHitboxHeights.head / 2, ZB[2] + .1), vB().pk(NB, NB, ZB, IB[2]), vB().uv(NB, NB, ZB, IB[0]), vB().ck(NB, NB, ZB, IB[1]), (0, oB.q)(GB.instance, NB[0], NB[1], NB[2]), GB.instance.rotation.set(IB[0], IB[1], IB[2]), TB > GB.lastFl … [truncated]
+             if (dt().set(ft, Vt[0], Vt[1] + Xt.playerHitboxHeights.head / 2, Vt[2] + .1), dt().gd(ft, ft, Vt, et[2]), dt().sq(ft, ft, Vt, et[0]), dt().tm(ft, ft, Vt, et[1]), (0, Dt.s)(mt.instance, ft[0], ft[1], ft[2]), mt.instance.rotation.set(et[0], et[1], et[2]), Ot > mt.lastFl … [truncated]
```

#### 2533. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22642` → after: `L22526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22526) · [Before (L22642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22642)

```diff
-   38955: (BB, IB, ZB) => {
+   39098: (tt, et, Vt) => {
```

#### 2534. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22646-L22647` → after: `L22530-L22531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22530-L22531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22530-L22531) · [Before (L22646-L22647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22646-L22647)

```diff
-     var TB = ZB(694),
-       JB = ZB(37504);
+     var Ot = Vt(736),
+       qt = Vt(37699);
```

#### 2535. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22658` → after: `L22542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22542) · [Before (L22658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22658)

```diff
-           jZ: null,
+           AV: null,
```

#### 2536. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22662` → after: `L22546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22546) · [Before (L22662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22662)

```diff
-         cW: function(BB, IB) {
+         qJ: function(tt, et) {
```

#### 2537. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22665` → after: `L22549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22549) · [Before (L22665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22665)

```diff
-         nH: function(BB, IB) {
+         nS: function(tt, et) {
```

#### 2538. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22668` → after: `L22552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22552) · [Before (L22668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22668)

```diff
-         FW: function(IB, ZB) {
+         dJ: function(et, Vt) {
```

#### 2539. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22674` → after: `L22558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22558) · [Before (L22674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22674)

```diff
-             const IB = null === TB.jZ ? 0 : nB(BB, BB.zW.zK(TB.bR).KZB, TB.jZ);
+             const et = null === Ot.AV ? 0 : Xt(tt, tt.mJ.RY(Ot.uZ).OOt, Ot.AV);
```

#### 2540. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22676` → after: `L22560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22560) · [Before (L22676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22676)

```diff
-               for (let ZB = 0; ZB < oB; ZB++) TB.meshes.push(zB(BB, TB.bR));
+               for (let Vt = 0; Vt < Dt; Vt++) Ot.meshes.push(lt(tt, Ot.uZ));
```

#### 2541. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22679` → after: `L22563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22563) · [Before (L22679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22679)

```diff
-               JB && FB(BB, TB, ZB, GB[ZB], TB.jZ, vB[ZB]), TB._shown[ZB] !== JB && (TB._shown[ZB] = JB, TB.meshes[ZB].qY(JB))
+               qt && Et(tt, Ot, Vt, mt[Vt], Ot.AV, dt[Vt]), Ot._shown[Vt] !== qt && (Ot._shown[Vt] = qt, Ot.meshes[Vt].Av(qt))
```

#### 2542. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22692` → after: `L22576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22576) · [Before (L22692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22692)

```diff
-       const TB = BB.Mz;
+       const Ot = tt.bl;
```

#### 2543. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22697` → after: `L22581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22581) · [Before (L22697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22697)

```diff
-         hB(oB, IB, TB, kB, cB) || BB.vz.qD(kB, ZB, cB) || (GB[JB] = kB, vB[JB] = cB, JB++)
+         Qt(Dt, et, Ot, jt, Ht) || tt.sQ.HA(jt, Vt, Ht) || (mt[qt] = jt, dt[qt] = Ht, qt++)
```

#### 2544. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22709-L22710` → after: `L22593-L22594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22593-L22594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22593-L22594) · [Before (L22709-L22710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22709-L22710)

```diff
-       const ZB = BB.Ig.VZB.createInstance(`floatingMesh_${IB}_${(0,TB.d)()}`);
-       return BB.Ig.xg(ZB), ZB.qY(!1), ZB
+       const Vt = tt.Bf.qOt.createInstance(`floatingMesh_${et}_${(0,Ot.b)()}`);
+       return tt.Bf.ow(Vt), Vt.Av(!1), Vt
```

#### 2545. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22714` → after: `L22598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22598) · [Before (L22714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22714)

```diff
-       const vB = BB.Mz,
+       const dt = tt.bl,
```

#### 2546. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22719` → after: `L22603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22603) · [Before (L22719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22719)

```diff
-       hB[3 * ZB] === kB && hB[3 * ZB + 1] === cB && hB[3 * ZB + 2] === nB || (hB[3 * ZB] = kB, hB[3 * ZB + 1] = cB, hB[3 * ZB + 2] = nB, (0, JB.q)(IB.meshes[ZB], kB, cB, nB))
+       Qt[3 * Vt] === jt && Qt[3 * Vt + 1] === Ht && Qt[3 * Vt + 2] === Xt || (Qt[3 * Vt] = jt, Qt[3 * Vt + 1] = Ht, Qt[3 * Vt + 2] = Xt, (0, qt.s)(et.meshes[Vt], jt, Ht, Xt))
```

#### 2547. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22722` → after: `L22606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22606) · [Before (L22722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22722)

```diff
-   38961: (BB, IB, ZB) => {
+   39102: (tt, et, Vt) => {
```

#### 2548. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22726-L22728` → after: `L22610-L22612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22610-L22612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22610-L22612) · [Before (L22726-L22728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22726-L22728)

```diff
-     var TB = ZB(2029),
-       JB = ZB(3854),
-       oB = ZB(37454);
+     var Ot = Vt(2043),
+       qt = Vt(3751),
+       Dt = Vt(37654);
```

#### 2549. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22747-L22748` → after: `L22631-L22632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22631-L22632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22631-L22632) · [Before (L22747-L22748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22747-L22748)

```diff
-         cW: function(IB, ZB) {
-           const kB = [TB.c.subscribe("forcedCameraDirection", (IB => {
+         qJ: function(et, Vt) {
+           const jt = [Ot.b.subscribe("forcedCameraDirection", (et => {
```

#### 2550. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22750-L22751` → after: `L22634-L22635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22634-L22635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22634-L22635) · [Before (L22750-L22751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22750-L22751)

```diff
-               if (BB.vW.forcedCameraDirectionTransitionMs <= 0 || null === IB) {
-                 if (null === IB) BB.camera.VK = null, BB.camera.JV = null;
+               if (tt.OJ.forcedCameraDirectionTransitionMs <= 0 || null === et) {
+                 if (null === et) tt.camera.jB = null, tt.camera.XB = null;
```

#### 2551. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22754-L22757` → after: `L22638-L22641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22638-L22641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22638-L22641) · [Before (L22754-L22757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22754-L22757)

```diff
-                     rc: ZB,
-                     sZB: TB
-                   } = (0, oB.c)(IB);
-                   BB.camera.VK = TB, BB.camera.JV = ZB
+                     nX: Vt,
+                     RVt: Ot
+                   } = (0, Dt.d)(et);
+                   tt.camera.jB = Ot, tt.camera.XB = Vt
```

#### 2552. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22767-L22769` → after: `L22651-L22653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22651-L22653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22651-L22653) · [Before (L22767-L22769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22767-L22769)

```diff
-                 rc: JB,
-                 sZB: GB
-               } = (0, oB.c)(IB);
+                 nX: qt,
+                 RVt: mt
+               } = (0, Dt.d)(et);
```

#### 2553. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22775` → after: `L22659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22659) · [Before (L22775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22775)

```diff
-               ZB.directionTransitionStart = vB, ZB.directionTransitionEnd = vB + BB.vW.forcedCameraDirectionTransitionMs, BB.camera.VK = TB.pitch, BB.camera.JV = TB.heading
+               Vt.directionTransitionStart = dt, Vt.directionTransitionEnd = dt + tt.OJ.forcedCameraDirectionTransitionMs, tt.camera.jB = Ot.pitch, tt.camera.XB = Ot.heading
```

#### 2554. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22777` → after: `L22661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22661) · [Before (L22777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22777)

```diff
-           })), TB.c.subscribe("cameraRoll", (IB => {
+           })), Ot.b.subscribe("cameraRoll", (et => {
```

#### 2555. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22779-L22780` → after: `L22663-L22664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22663-L22664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22663-L22664) · [Before (L22779-L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22779-L22780)

```diff
-               if (BB.vW.cameraRollTransitionMs <= 0) return BB.camera.Iq = IB, ZB.rollTransitionFrom = null, ZB.rollTransitionTo = null, ZB.rollTransitionStart = null, void(ZB.rollTransitionEnd = null);
-               ZB.rollTransitionFrom = BB.camera.Iq, ZB.rollTransitionTo = IB;
+               if (tt.OJ.cameraRollTransitionMs <= 0) return tt.camera.nf = et, Vt.rollTransitionFrom = null, Vt.rollTransitionTo = null, Vt.rollTransitionStart = null, void(Vt.rollTransitionEnd = null);
+               Vt.rollTransitionFrom = tt.camera.nf, Vt.rollTransitionTo = et;
```

#### 2556. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22782` → after: `L22666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22666) · [Before (L22782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22782)

```diff
-               ZB.rollTransitionStart = TB, ZB.rollTransitionEnd = TB + BB.vW.cameraRollTransitionMs
+               Vt.rollTransitionStart = Ot, Vt.rollTransitionEnd = Ot + tt.OJ.cameraRollTransitionMs
```

#### 2557. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22784` → after: `L22668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22668) · [Before (L22784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22784)

```diff
-           })), TB.c.subscribe("forcedCameraDirectionTransitionMs", (BB => {
+           })), Ot.b.subscribe("forcedCameraDirectionTransitionMs", (tt => {
```

#### 2558. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22791` → after: `L22675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22675) · [Before (L22791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22791)

```diff
-           })), TB.c.subscribe("cameraRollTransitionMs", (BB => {
+           })), Ot.b.subscribe("cameraRollTransitionMs", (tt => {
```

#### 2559. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22798` → after: `L22682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22682) · [Before (L22798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22798)

```diff
-           })), TB.c.subscribe("cameraRotationOffset", (BB => {
+           })), Ot.b.subscribe("cameraRotationOffset", (tt => {
```

#### 2560. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22800` → after: `L22684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22684) · [Before (L22800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22800)

```diff
-           })), TB.c.subscribe("cameraPositionOffset", (BB => {
+           })), Ot.b.subscribe("cameraPositionOffset", (tt => {
```

#### 2561. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22813-L22814` → after: `L22697-L22698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22697-L22698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22697-L22698) · [Before (L22813-L22814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22813-L22814)

```diff
-           }, cB(BB.vW.cameraRotationOffset), nB(BB.vW.cameraPositionOffset), (0, JB.onGameReset)((() => {
-             BB.camera.VK = null, BB.camera.JV = null, BB.camera.Iq = 0, cB(GB), nB(vB), ZB.directionTransitionFrom = null, ZB.directionTransitionTo = null, ZB.directionTransitionStart = null, ZB.directionTransitionEnd = null, ZB.rollTransitionFrom = null, ZB.rollTransitionTo = nu … [truncated]
+           }, Ht(tt.OJ.cameraRotationOffset), Xt(tt.OJ.cameraPositionOffset), (0, qt.onGameReset)((() => {
+             tt.camera.jB = null, tt.camera.XB = null, tt.camera.nf = 0, Ht(mt), Xt(dt), Vt.directionTransitionFrom = null, Vt.directionTransitionTo = null, Vt.directionTransitionStart = null, Vt.directionTransitionEnd = null, Vt.rollTransitionFrom = null, Vt.rollTransitionTo = nu … [truncated]
```

#### 2562. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22817` → after: `L22701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22701) · [Before (L22817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22817)

```diff
-         nH: function(BB, IB) {
+         nS: function(tt, et) {
```

#### 2563. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22820` → after: `L22704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22704) · [Before (L22820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22820)

```diff
-         FW: function(IB, ZB) {
+         dJ: function(et, Vt) {
```

#### 2564. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22829` → after: `L22713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22713) · [Before (L22829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22829)

```diff
-             oB >= 1 ? (BB.camera.VK = ZB.pitch, BB.camera.JV = nB(ZB.heading), TB.directionTransitionFrom = null, TB.directionTransitionTo = null, TB.directionTransitionStart = null, TB.directionTransitionEnd = null) : (BB.camera.VK = IB.pitch + (ZB.pitch - IB.pitch) * GB, BB.cam … [truncated]
+             Dt >= 1 ? (tt.camera.jB = Vt.pitch, tt.camera.XB = Xt(Vt.heading), Ot.directionTransitionFrom = null, Ot.directionTransitionTo = null, Ot.directionTransitionStart = null, Ot.directionTransitionEnd = null) : (tt.camera.jB = et.pitch + (Vt.pitch - et.pitch) * mt, tt.cam … [truncated]
```

#### 2565. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22834` → after: `L22718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22718) · [Before (L22834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22834)

```diff
-             IB >= 1 ? (BB.camera.Iq = TB.rollTransitionTo, TB.rollTransitionFrom = null, TB.rollTransitionTo = null, TB.rollTransitionStart = null, TB.rollTransitionEnd = null) : BB.camera.Iq = TB.rollTransitionFrom + (TB.rollTransitionTo - TB.rollTransitionFrom) * ZB
+             et >= 1 ? (tt.camera.nf = Ot.rollTransitionTo, Ot.rollTransitionFrom = null, Ot.rollTransitionTo = null, Ot.rollTransitionStart = null, Ot.rollTransitionEnd = null) : tt.camera.nf = Ot.rollTransitionFrom + (Ot.rollTransitionTo - Ot.rollTransitionFrom) * Vt
```

#### 2566. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22841` → after: `L22725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22725) · [Before (L22841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22841)

```diff
-       return BB < .5 ? 4 * BB * BB * BB : 1 - Math.pow(-2 * BB + 2, 3) / 2
+       return tt < .5 ? 4 * tt * tt * tt : 1 - Math.pow(-2 * tt + 2, 3) / 2
```

#### 2567. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22853` → after: `L22737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22737) · [Before (L22853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22853)

```diff
-       return JB > Math.PI ? JB -= ZB : JB < -Math.PI && (JB += ZB), BB + JB
+       return qt > Math.PI ? qt -= Vt : qt < -Math.PI && (qt += Vt), tt + qt
```

#### 2568. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22860` → after: `L22744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22744) · [Before (L22860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22860)

```diff
-       }(BB) ? BB : ZB;
+       }(tt) ? tt : Vt;
```

#### 2569. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22864` → after: `L22748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22748) · [Before (L22864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22864)

```diff
-   38827: (BB, IB, ZB) => {
+   38992: (tt, et, Vt) => {
```

#### 2570. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22870-L22871` → after: `L22754-L22755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22754-L22755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22754-L22755) · [Before (L22870-L22871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22870-L22871)

```diff
-     var TB = ZB(37108),
-       JB = ZB(38136);
+     var Ot = Vt(37323),
+       qt = Vt(38316);
```

#### 2571. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22874` → after: `L22758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22758) · [Before (L22874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22874)

```diff
-         this.gR = null, this.SZB = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.bR = void 0
+         this.RP = null, this.DOt = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.uZ = void 0
```

#### 2572. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22883-L22884` → after: `L22767-L22768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22767-L22768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22767-L22768) · [Before (L22883-L22884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22883-L22884)

```diff
-         FW: function(IB, ZB) {
-           for (const JB of ZB) JB.SZB.BTB && ((0, TB.pausesOutOfView)(BB, JB.bR, JB.gR) ? JB._posePaused = !0 : kB(BB, JB))
+         dJ: function(et, Vt) {
+           for (const qt of Vt) qt.DOt.mOt && ((0, Ot.pausesOutOfView)(tt, qt.uZ, qt.RP) ? qt._posePaused = !0 : jt(tt, qt))
```

#### 2573. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22890` → after: `L22774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22774) · [Before (L22890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22890)

```diff
-       const ZB = BB.zW.qZB(IB);
+       const Vt = tt.mJ.uVt(et);
```

#### 2574. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22896` → after: `L22780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22780) · [Before (L22896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22896)

```diff
-       const ZB = IB.bR;
+       const Vt = et.uZ;
```

#### 2575. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22900` → after: `L22784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22784) · [Before (L22900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22900)

```diff
-       } = BB.zW.getState(ZB, "updateWalkingState");
+       } = tt.mJ.getState(Vt, "updateWalkingState");
```

#### 2576. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22903` → after: `L22787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22787) · [Before (L22903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22903)

```diff
-       const oB = BB.zW.getState(ZB, "animator");
+       const Dt = tt.mJ.getState(Vt, "animator");
```

#### 2577. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22907` → after: `L22791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22791) · [Before (L22907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22907)

```diff
-   38969: (BB, IB, ZB) => {
+   39107: (tt, et, Vt) => {
```

#### 2578. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22911-L22915` → after: `L22795-L22799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22795-L22799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22795-L22799) · [Before (L22911-L22915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22911-L22915)

```diff
-     var TB = ZB(36829),
-       JB = ZB(24),
-       oB = ZB(38227),
-       GB = ZB(37270),
-       vB = ZB(38166);
+     var Ot = Vt(37032),
+       qt = Vt(31),
+       Dt = Vt(38406),
+       mt = Vt(37480),
+       dt = Vt(38356);
```

#### 2579. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22931` → after: `L22815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22815) · [Before (L22931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22931)

```diff
-         cW: function(IB, ZB) {
+         qJ: function(et, Vt) {
```

#### 2580. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22933-L22935` → after: `L22817-L22819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22817-L22819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22817-L22819) · [Before (L22933-L22935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22933-L22935)

```diff
-           ZB.isAlive = (0, vB.c)("_isAlive", null === (cB = BB.Tm[BB.Jm]) || void 0 === cB || null === (nB = cB[ZB.bR]) || void 0 === nB ? void 0 : nB._isAlive), ZB._isAliveSub = JB.l.subscribe(`otherEntitySettingsClientifiedEId|${ZB.bR}|_isAlive`, (BB => {
-             ZB.isAlive = (0, vB.c)("_isAlive", BB), (0, oB.updateLocalPlayerHeldItem)()
-           })), ZB.addedTime = Date.now(), ZB._hasPriorityNametagSub = JB.l.subscribe(`otherEntitySettingsClientifiedEId|${ZB.bR}|hasPriorityNametag`, (BB => {
+           Vt.isAlive = (0, dt.b)("_isAlive", null === (Ht = tt.dL[tt.lL]) || void 0 === Ht || null === (Xt = Ht[Vt.uZ]) || void 0 === Xt ? void 0 : Xt._isAlive), Vt._isAliveSub = qt.j.subscribe(`otherEntitySettingsClientifiedEId|${Vt.uZ}|_isAlive`, (tt => {
+             Vt.isAlive = (0, dt.b)("_isAlive", tt), (0, Dt.updateLocalPlayerHeldItem)()
+           })), Vt.addedTime = Date.now(), Vt._hasPriorityNametagSub = qt.j.subscribe(`otherEntitySettingsClientifiedEId|${Vt.uZ}|hasPriorityNametag`, (tt => {
```

#### 2581. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22939` → after: `L22823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22823) · [Before (L22939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22939)

```diff
-             zW: hB
+             mJ: Qt
```

#### 2582. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22941` → after: `L22825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22825) · [Before (L22941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22941)

```diff
-           ZB.meshEnabledCombinator = new TB.d(((TB, oB) => {
+           Vt.meshEnabledCombinator = new Ot.b(((Ot, Dt) => {
```

#### 2583. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22945` → after: `L22829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22829) · [Before (L22945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22945)

```diff
-               nB = hB.NZB(IB),
+               Xt = Qt.JVt(et),
```

#### 2584. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22951` → after: `L22835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22835) · [Before (L22951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22951)

```diff
-               if (null !== (NB = null === (gB = BB.Tm[BB.Jm][ZB.bR]) || void 0 === gB ? void 0 : gB.hasPriorityNametag) && void 0 !== NB && NB)
+               if (null !== (ft = null === (wt = tt.dL[tt.lL][Vt.uZ]) || void 0 === wt ? void 0 : wt.hasPriorityNametag) && void 0 !== ft && ft)
```

#### 2585. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22958-L22960` → after: `L22842-L22844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22842-L22844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22842-L22844) · [Before (L22958-L22960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22958-L22960)

```diff
-             qB && (qB.forceSetEnabled = !!cB && null, qB.instance.qY(null !== (yB = qB.forceSetEnabled) && void 0 !== yB ? yB : qB.isEnabled));
-             ZB.bR !== BB.Jm && (TB ? hB.TIB(IB, "collideTerrain") || hB.xR(IB, "collideTerrain") : hB.TIB(IB, "collideTerrain") && hB.Qr(IB, "collideTerrain")), IB === BB.Jm && JB.l.Gq("clientPlayerModelVisible", cB)
-           })), hB.getState(IB, hB.names.GN).enabledCombinator = new TB.d
+             yt && (yt.forceSetEnabled = !!Ht && null, yt.instance.Av(null !== (Nt = yt.forceSetEnabled) && void 0 !== Nt ? Nt : yt.isEnabled));
+             Vt.uZ !== tt.lL && (Ot ? Qt.ptt(et, "collideTerrain") || Qt.RZ(et, "collideTerrain") : Qt.ptt(et, "collideTerrain") && Qt.ZZ(et, "collideTerrain")), et === tt.lL && qt.j.sw("clientPlayerModelVisible", Ht)
+           })), Qt.getState(et, Qt.names.BE).enabledCombinator = new Ot.b
```

#### 2586. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22962-L22963` → after: `L22846-L22847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22846-L22847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22846-L22847) · [Before (L22962-L22963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22962-L22963)

```diff
-         nH: function(BB, IB) {
-           JB.l.unsubscribe(IB._isAliveSub), JB.l.unsubscribe(IB._hasPriorityNametagSub)
+         nS: function(tt, et) {
+           qt.j.unsubscribe(et._isAliveSub), qt.j.unsubscribe(et._hasPriorityNametagSub)
```

#### 2587. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22968` → after: `L22852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22852) · [Before (L22968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22968)

```diff
-   38972: (BB, IB, ZB) => {
+   39112: (tt, et, Vt) => {
```

#### 2588. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22972-L22973` → after: `L22856-L22857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22856-L22857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22856-L22857) · [Before (L22972-L22973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22972-L22973)

```diff
-     var TB = ZB(37853),
-       JB = ZB(38099);
+     var Ot = Vt(38054),
+       qt = Vt(38285);
```

#### 2589. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22986` → after: `L22870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22870) · [Before (L22986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22986)

```diff
-           JB.c.dropExpired(Date.now())
+           qt.e.dropExpired(Date.now())
```

#### 2590. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22988` → after: `L22872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22872) · [Before (L22988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22988)

```diff
-         FW: function(IB, ZB) {
+         dJ: function(et, Vt) {
```

#### 2591. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22991` → after: `L22875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22875) · [Before (L22991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22991)

```diff
-             const IB = BB.zW.RIB(oB.bR);
+             const et = tt.mJ.oet(Dt.uZ);
```

#### 2592. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22993-L22994` → after: `L22877-L22878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22877-L22878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22877-L22878) · [Before (L22993-L22994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L22993-L22994)

```diff
-             const ZB = (0, TB.g)(oB.startedAtMs, oB.endsAtMs, JB);
-             IB.mesh.ek.set(ZB, ZB, ZB), IB.offset[1] = oB.centreOffsetY + oB.halfHeight * (ZB - TB.k)
+             const Vt = (0, Ot.h)(Dt.startedAtMs, Dt.endsAtMs, qt);
+             et.mesh.cj.set(Vt, Vt, Vt), et.offset[1] = Dt.centreOffsetY + Dt.halfHeight * (Vt - Ot.l)
```

#### 2593. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23000` → after: `L22884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22884) · [Before (L23000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23000)

```diff
-   38980: (BB, IB, ZB) => {
+   39117: (tt, et, Vt) => {
```

#### 2594. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23005-L23006` → after: `L22889-L22890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22889-L22890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22889-L22890) · [Before (L23005-L23006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23005-L23006)

```diff
-     var TB = ZB(201),
-       JB = ZB(364),
+     var Ot = Vt(229),
+       qt = Vt(404),
```

#### 2595. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23008-L23010` → after: `L22892-L22894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22892-L22894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22892-L22894) · [Before (L23008-L23010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23008-L23010)

```diff
-       GB = ZB(36829),
-       vB = ZB(2912),
-       kB = ZB(37101);
+       mt = Vt(37032),
+       dt = Vt(2848),
+       jt = Vt(37314);
```

#### 2596. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23014` → after: `L22898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22898) · [Before (L23014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23014)

```diff
-       zB = TB.f.YN,
+       lt = Ot.e.ff,
```

#### 2597. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23030` → after: `L22914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22914) · [Before (L23030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23030)

```diff
-       let CB = new Float64Array(2 * TB.f.maxNumVisibleEntitiesOfSingleType);
+       let Ct = new Float64Array(2 * Ot.e.maxNumVisibleEntitiesOfSingleType);
```

#### 2598. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23037` → after: `L22921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22921) · [Before (L23037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23037)

```diff
-         const TB = `${BB}|${IB}|${ZB}`,
+         const Ot = `${tt}|${et}|${Vt}`,
```

#### 2599. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23055` → after: `L22939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22939) · [Before (L23055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23055)

```diff
-           Ev: null,
+           mj: null,
```

#### 2600. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23065-L23068` → after: `L22949-L22952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22949-L22952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22949-L22952) · [Before (L23065-L23068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23065-L23068)

```diff
-         cW: function(ZB, TB) {
-           if (!TB.addMeshComponent || !TB.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${TB.addMeshComponent} ${TB.removeMeshComponent}`);
-           if (TB._lastPos = oB().create(), oB().copy(TB._lastPos, BB.zW.aU(ZB)), null !== TB.movingHideDist && JB.add(TB), 0 === IB.size && (oB().set(sB, 1 / 0, 1 / 0, 1 / 0), oB().copy(QB, sB)), MB(TB), HB(TB, TB._competesForCap), TB.immediatelyUpdate) {
-             pB(TB, BB.zW.aU(BB.Jm))
+         qJ: function(Vt, Ot) {
+           if (!Ot.addMeshComponent || !Ot.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${Ot.addMeshComponent} ${Ot.removeMeshComponent}`);
+           if (Ot._lastPos = Dt().create(), Dt().copy(Ot._lastPos, tt.mJ.YM(Vt)), null !== Ot.movingHideDist && qt.add(Ot), 0 === et.size && (Dt().set(Kt, 1 / 0, 1 / 0, 1 / 0), Dt().copy(ut, Kt)), Pt(Ot), It(Ot, Ot._competesForCap), Ot.immediatelyUpdate) {
+             ct(Ot, tt.mJ.YM(tt.lL))
```

#### 2601. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23071` → after: `L22955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22955) · [Before (L23071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23071)

```diff
-         nH: function(BB, IB) {
+         nS: function(tt, et) {
```

#### 2602. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23075` → after: `L22959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22959) · [Before (L23075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23075)

```diff
-           const kB = BB.camera.aU(),
+           const jt = tt.camera.YM(),
```

#### 2603. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23088` → after: `L22972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22972) · [Before (L23088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23088)

```diff
-                 if (JB.size < TB.f.maxNumVisibleEntitiesOfSingleType) {
+                 if (qt.size < Ot.e.maxNumVisibleEntitiesOfSingleType) {
```

#### 2604. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23094-L23095` → after: `L22978-L22979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22978-L22979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22978-L22979) · [Before (L23094-L23095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23094-L23095)

```diff
-                 for (const ZB of JB) CB[GB++] = oB().sqrDist(IB, BB.zW.aU(ZB.bR));
-                 dB.set(ZB, qB(CB, GB, TB.f.maxNumVisibleEntitiesOfSingleType - 1))
+                 for (const Vt of qt) Ct[mt++] = Dt().sqrDist(et, tt.mJ.YM(Vt.uZ));
+                 Jt.set(Vt, yt(Ct, mt, Ot.e.maxNumVisibleEntitiesOfSingleType - 1))
```

#### 2605. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23099` → after: `L22983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22983) · [Before (L23099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23099)

```diff
-             const ZB = BB.zW.aU(IB.bR);
+             const Vt = tt.mJ.YM(et.uZ);
```

#### 2606. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23104` → after: `L22988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L22988) · [Before (L23104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23104)

```diff
-           if (!YB) BB: for (const BB of ZB)
+           if (!Wt) tt: for (const tt of Vt)
```

#### 2607. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23118-L23119` → after: `L23002-L23003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23002-L23003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23002-L23003) · [Before (L23118-L23119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23118-L23119)

```diff
-           zW: JB
-         } = BB, nB = IB.bR, hB = JB.aU(nB);
+           mJ: qt
+         } = tt, Xt = et.uZ, Qt = qt.YM(Xt);
```

#### 2608. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23127` → after: `L23011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23011) · [Before (L23127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23127)

```diff
-           NB = Math.max(zB, null !== (TB = IB.movingHideDist) && void 0 !== TB ? TB : 0),
+           ft = Math.max(lt, null !== (Ot = et.movingHideDist) && void 0 !== Ot ? Ot : 0),
```

#### 2609. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23129` → after: `L23013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23013) · [Before (L23129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23129)

```diff
-           qB = gB && (IB.displayOutsideLoadedChunk || (0, vB.d)().pD(Math.floor(hB[0]), Math.floor(hB[1]), Math.floor(hB[2])));
+           yt = wt && (et.displayOutsideLoadedChunk || (0, dt.c)().hA(Math.floor(Qt[0]), Math.floor(Qt[1]), Math.floor(Qt[2])));
```

#### 2610. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23131` → after: `L23015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23015) · [Before (L23131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23131)

```diff
-         const yB = dB.get(IB.Ev),
+         const Nt = Jt.get(et.mj),
```

#### 2611. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23133` → after: `L23017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23017) · [Before (L23133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23133)

```diff
-         IB.isMeshShown !== UB && (UB ? (JB.RIB(nB) || (IB.addMeshComponent(), (0, kB.k)(BB, nB)), IB.addShadow && !JB.getState(nB, JB.names.GN) && (JB.xR(nB, JB.names.GN, {
+         et.isMeshShown !== Mt && (Mt ? (qt.oet(Xt) || (et.addMeshComponent(), (0, jt.i)(tt, Xt)), et.addShadow && !qt.getState(Xt, qt.names.BE) && (qt.RZ(Xt, qt.names.BE, {
```

#### 2612. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23135` → after: `L23019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23019) · [Before (L23135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23135)

```diff
-         }), JB.getState(nB, JB.names.GN).enabledCombinator = new GB.d)) : (IB.removeMeshComponent(), IB.addShadow && JB.getState(nB, JB.names.GN) && JB.Qr(nB, JB.names.GN)), IB.isMeshShown = UB)
+         }), qt.getState(Xt, qt.names.BE).enabledCombinator = new mt.b)) : (et.removeMeshComponent(), et.addShadow && qt.getState(Xt, qt.names.BE) && qt.ZZ(Xt, qt.names.BE)), et.isMeshShown = Mt)
```

#### 2613. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23153-L23155` → after: `L23037-L23039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23037-L23039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23037-L23039) · [Before (L23153-L23155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23153-L23155)

```diff
-         if (BB._competesForCap = IB, !BB.Ev) return;
-         let ZB = WB.get(BB.Ev);
-         IB ? (ZB || (ZB = new Set, WB.set(BB.Ev, ZB)), ZB.add(BB)) : ZB && (ZB.delete(BB), 0 === ZB.size && (WB.delete(BB.Ev), dB.delete(BB.Ev)))
+         if (tt._competesForCap = et, !tt.mj) return;
+         let Vt = bt.get(tt.mj);
+         et ? (Vt || (Vt = new Set, bt.set(tt.mj, Vt)), Vt.add(tt)) : Vt && (Vt.delete(tt), 0 === Vt.size && (bt.delete(tt.mj), Jt.delete(tt.mj)))
```

#### 2614. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23159` → after: `L23043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23043) · [Before (L23159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23159)

```diff
-         let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.zW.aU(ZB.bR);
+         let Ot = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt.mJ.YM(Vt.uZ);
```

#### 2615. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23166` → after: `L23050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23050) · [Before (L23166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23166)

```diff
-         const kB = `${JB}|${oB}|${GB}`,
+         const jt = `${qt}|${Dt}|${mt}`,
```

#### 2616. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23231` → after: `L23115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23115) · [Before (L23231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23231)

```diff
-       return Math.max(BB.hideDist, null !== (IB = BB.movingHideDist) && void 0 !== IB ? IB : 0)
+       return Math.max(tt.hideDist, null !== (et = tt.movingHideDist) && void 0 !== et ? et : 0)
```

#### 2617. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23237` → after: `L23121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23121) · [Before (L23237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23237)

```diff
-       return IB < ZB ? ZB - IB : IB > TB ? IB - TB : 0
+       return et < Vt ? Vt - et : et > Ot ? et - Ot : 0
```

#### 2618. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23240` → after: `L23124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23124) · [Before (L23240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23240)

```diff
-   38820: (BB, IB, ZB) => {
+   38989: (tt, et, Vt) => {
```

#### 2619. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23245-L23251` → after: `L23129-L23135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23129-L23135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23129-L23135) · [Before (L23245-L23251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23245-L23251)

```diff
-     var TB = ZB(37385),
-       JB = ZB(37108),
-       oB = ZB(37194),
-       GB = ZB(37188),
-       vB = ZB(37448),
-       kB = ZB(38136),
-       cB = ZB(38143);
+     var Ot = Vt(37584),
+       qt = Vt(37323),
+       Dt = Vt(37403),
+       mt = Vt(37398),
+       dt = Vt(37647),
+       jt = Vt(38316),
+       Ht = Vt(38327);
```

#### 2620. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23258-L23259` → after: `L23142-L23143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23142-L23143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23142-L23143) · [Before (L23258-L23259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23258-L23259)

```diff
-           gR: null,
-           SZB: null,
+           RP: null,
+           DOt: null,
```

#### 2621. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23275-L23276` → after: `L23159-L23160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23159-L23160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23159-L23160) · [Before (L23275-L23276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23275-L23276)

```diff
-         FW: function(IB, ZB) {
-           for (const TB of ZB) TB.SZB.BTB && ((0, JB.pausesOutOfView)(BB, TB.bR, TB.gR) ? (TB._posePaused = !0, zB(BB, TB, IB)) : NB(BB, TB, IB))
+         dJ: function(et, Vt) {
+           for (const Ot of Vt) Ot.DOt.mOt && ((0, qt.pausesOutOfView)(tt, Ot.uZ, Ot.RP) ? (Ot._posePaused = !0, lt(tt, Ot, et)) : ft(tt, Ot, et))
```

#### 2622. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23282` → after: `L23166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23166) · [Before (L23282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23282)

```diff
-       const ZB = BB.zW.gZB(IB);
+       const Vt = tt.mJ.CVt(et);
```

#### 2623. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23287` → after: `L23171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23171) · [Before (L23287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23287)

```diff
-       const TB = BB.zW.uIB(IB.bR);
+       const Ot = tt.mJ.xet(et.uZ);
```

#### 2624. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23290` → after: `L23174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23174) · [Before (L23290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23290)

```diff
-       (0, cB.c)(BB, IB.bR) || "gliding" === JB || "driving" === JB || (UB(BB, IB) ? WB(BB, IB, TB) : "zombie" !== JB && dB(BB, IB, TB, FB(BB, IB), ZB))
+       (0, Ht.e)(tt, et.uZ) || "gliding" === qt || "driving" === qt || (Mt(tt, et) ? bt(tt, et, Ot) : "zombie" !== qt && Jt(tt, et, Ot, Et(tt, et), Vt))
```

#### 2625. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23294` → after: `L23178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23178) · [Before (L23294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23294)

```diff
-       return BB.zW.getState(IB.bR, "animator")
+       return tt.mJ.getState(et.uZ, "animator")
```

#### 2626. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23300` → after: `L23184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23184) · [Before (L23300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23300)

```diff
-       const JB = BB.zW.uIB(IB.bR),
+       const qt = tt.mJ.xet(et.uZ),
```

#### 2627. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23304-L23305` → after: `L23188-L23189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23188-L23189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23188-L23189) · [Before (L23304-L23305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23304-L23305)

```diff
-         hB = IB.bR === BB.Jm ? vB.c.getPlayerFacingPitch(BB) : JB.cameraPitch,
-         zB = null === (TB = BB.zW.zZB(IB.bR)) || void 0 === TB ? void 0 : TB.JC,
+         Qt = et.uZ === tt.lL ? dt.c.getPlayerFacingPitch(tt) : qt.cameraPitch,
+         lt = null === (Ot = tt.mJ.MVt(et.uZ)) || void 0 === Ot ? void 0 : Ot.LJ,
```

#### 2628. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23307` → after: `L23191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23191) · [Before (L23307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23307)

```diff
-         qB = (0, cB.c)(BB, IB.bR),
+         yt = (0, Ht.e)(tt, et.uZ),
```

#### 2629. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23309` → after: `L23193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23193) · [Before (L23309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23309)

```diff
-         pB = (0, kB.getRigController)(BB, IB.bR),
+         ct = (0, jt.getRigController)(tt, et.uZ),
```

#### 2630. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23337` → after: `L23221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23221) · [Before (L23337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23337)

```diff
-         cB = vB ? BB.zW.getState(IB.bR, "updateWalkingState").walkingAngle : 0;
+         Ht = dt ? tt.mJ.getState(et.uZ, "updateWalkingState").walkingAngle : 0;
```

#### 2631. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23350` → after: `L23234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23234) · [Before (L23350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23350)

```diff
-       return (0, kB.rigHasAction)(BB, IB.bR, TB.s)
+       return (0, jt.rigHasAction)(tt, et.uZ, Ot.m)
```

#### 2632. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23354` → after: `L23238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23238) · [Before (L23354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23354)

```diff
-       (!IB.consumedNetworkArmSwing || ZB.armSwinging && !(0, kB.rigActionPlaying)(BB, IB.bR, TB.s)) && (0, kB.playRigAction)(BB, IB.bR, TB.s), IB.consumedNetworkArmSwing = !0, IB._queuedSwing = !1
+       (!et.consumedNetworkArmSwing || Vt.armSwinging && !(0, jt.rigActionPlaying)(tt, et.uZ, Ot.m)) && (0, jt.playRigAction)(tt, et.uZ, Ot.m), et.consumedNetworkArmSwing = !0, et._queuedSwing = !1
```

#### 2633. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23359` → after: `L23243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23243) · [Before (L23359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23359)

```diff
-       const vB = BB.MBB,
+       const dt = tt.Jtt,
```

#### 2634. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23362` → after: `L23246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23246) · [Before (L23362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23362)

```diff
-           lT: cB
+           eq: Ht
```

#### 2635. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23364` → after: `L23248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23248) · [Before (L23364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23364)

```diff
-       ZB.armSwinging || !IB.consumedNetworkArmSwing ? (IB.consumedNetworkArmSwing = !0, kB >= cB ? (oB = JB / cB, IB._queuedSwing = !1) : kB >= .65 * cB && !IB._queuedSwing && (IB._queuedSwing = !0)) : IB._queuedSwing && kB >= cB && (oB = Math.min(JB, kB - cB) / cB, IB._queuedSwi … [truncated]
+       Vt.armSwinging || !et.consumedNetworkArmSwing ? (et.consumedNetworkArmSwing = !0, jt >= Ht ? (Dt = qt / Ht, et._queuedSwing = !1) : jt >= .65 * Ht && !et._queuedSwing && (et._queuedSwing = !0)) : et._queuedSwing && jt >= Ht && (Dt = Math.min(qt, jt - Ht) / Ht, et._queuedSwi … [truncated]
```

#### 2636. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23378-L23379` → after: `L23262-L23263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23262-L23263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23262-L23263) · [Before (L23378-L23379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23378-L23379)

```diff
-       const ZB = BB.zW.uIB(IB.bR),
-         TB = IB.bR === BB.Jm ? vB.c.getPlayerFacingPitch(BB) : ZB.cameraPitch,
+       const Vt = tt.mJ.xet(et.uZ),
+         Ot = et.uZ === tt.lL ? dt.c.getPlayerFacingPitch(tt) : Vt.cameraPitch,
```

#### 2637. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23387` → after: `L23271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23271) · [Before (L23387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23387)

```diff
-       } = BB.zW.getState(IB.bR, "updateWalkingState"), JB = FB(BB, IB);
+       } = tt.mJ.getState(et.uZ, "updateWalkingState"), qt = Et(tt, et);
```

#### 2638. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23398-L23400` → after: `L23282-L23284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23282-L23284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23282-L23284) · [Before (L23398-L23400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23398-L23400)

```diff
-     const iB = (0, oB.d)({
-       lT: 250,
-       tT: {
+     const St = (0, Dt.e)({
+       eq: 250,
+       Oq: {
```

#### 2639. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23405` → after: `L23289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23289) · [Before (L23405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23405)

```diff
-               ET: "catmull-rom-spline",
+               mq: "catmull-rom-spline",
```

#### 2640. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23411` → after: `L23295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23295) · [Before (L23411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23411)

```diff
-               ET: "catmull-rom-spline",
+               mq: "catmull-rom-spline",
```

#### 2641. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23417` → after: `L23301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23301) · [Before (L23417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23417)

```diff
-               ET: "catmull-rom-spline",
+               mq: "catmull-rom-spline",
```

#### 2642. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23423` → after: `L23307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23307) · [Before (L23423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23423)

```diff
-               ET: "catmull-rom-spline",
+               mq: "catmull-rom-spline",
```

#### 2643. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23429` → after: `L23313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23313) · [Before (L23429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23429)

```diff
-               ET: "catmull-rom-spline",
+               mq: "catmull-rom-spline",
```

#### 2644. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23437` → after: `L23321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23321) · [Before (L23437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23437)

```diff
-   38984: (BB, IB, ZB) => {
+   39119: (tt, et, Vt) => {
```

#### 2645. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23441` → after: `L23325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23325) · [Before (L23441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23441)

```diff
-     var TB = ZB(2912);
+     var Ot = Vt(2848);
```

#### 2646. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23453` → after: `L23337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23337) · [Before (L23453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23453)

```diff
-         cW: function(BB, ZB) {
+         qJ: function(tt, Vt) {
```

#### 2647. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23462-L23463` → after: `L23346-L23347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23346-L23347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23346-L23347) · [Before (L23462-L23463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23462-L23463)

```diff
-         const ZB = BB.zW.aU(IB.bR),
-           JB = (0, TB.d)().pD(ZB[0], ZB[1], ZB[2]);
+         const Vt = tt.mJ.YM(et.uZ),
+           qt = (0, Ot.c)().hA(Vt[0], Vt[1], Vt[2]);
```

#### 2648. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23468` → after: `L23352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23352) · [Before (L23468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23468)

```diff
-   38861: (BB, IB, ZB) => {
+   39030: (tt, et, Vt) => {
```

#### 2649. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23473-L23480` → after: `L23357-L23364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23357-L23364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23357-L23364) · [Before (L23473-L23480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23473-L23480)

```diff
-     var TB = ZB(37304),
-       JB = ZB(36794),
-       oB = ZB(37113),
-       GB = ZB(37956),
-       vB = ZB(37504);
-     const kB = oB.rN.Up(),
-       cB = new oB.rN(0, -.5, .5),
-       nB = new oB.rN(.16, .01, .1).scaleInPlace(1.4),
+     var Ot = Vt(37510),
+       qt = Vt(37002),
+       Dt = Vt(37331),
+       mt = Vt(38157),
+       dt = Vt(37699);
+     const jt = Dt.uf.Up(),
+       Ht = new Dt.uf(0, -.5, .5),
+       Xt = new Dt.uf(.16, .01, .1).scaleInPlace(1.4),
```

#### 2650. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23507-L23509` → after: `L23391-L23393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23391-L23393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23391-L23393) · [Before (L23507-L23509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23507-L23509)

```diff
-         cW: function(IB, ZB) {
-           if (ZB._targetEId = (0, JB.e)(ZB.lineToEId), !BB.zW.zK(ZB.bR)) return console.warn(`Skipping line from entity ${ZB.bR}, which has no position`), void BB.zW.Qr(ZB.bR, "lineToEntity");
-           ZB._thisPos = oB.rN.Zero(), ZB._targetPos = oB.rN.Zero(), ZB._forward = oB.rN.Zero(), ZB._right = oB.rN.Zero(), ZB._up = oB.rN.Zero(), ZB._quat = oB.Quaternion.Zero(), ZB._displacement = oB.rN.Zero(), ZB._cameraOffset = oB.rN.Zero(), ZB._initialCameraOffset = oB.rN.Zero … [truncated]
+         qJ: function(et, Vt) {
+           if (Vt._targetEId = (0, qt.c)(Vt.lineToEId), !tt.mJ.RY(Vt.uZ)) return console.warn(`Skipping line from entity ${Vt.uZ}, which has no position`), void tt.mJ.ZZ(Vt.uZ, "lineToEntity");
+           Vt._thisPos = Dt.uf.Zero(), Vt._targetPos = Dt.uf.Zero(), Vt._forward = Dt.uf.Zero(), Vt._right = Dt.uf.Zero(), Vt._up = Dt.uf.Zero(), Vt._quat = Dt.Quaternion.Zero(), Vt._displacement = Dt.uf.Zero(), Vt._cameraOffset = Dt.uf.Zero(), Vt._initialCameraOffset = Dt.uf.Zero … [truncated]
```

#### 2651. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23520` → after: `L23404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23404) · [Before (L23520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23520)

```diff
-           }()), ZB._line.color = zB, ZB._line.tg = !1, BB.Ig.xg(ZB._line)
+           }()), Vt._line.color = lt, Vt._line.Gw = !1, tt.Bf.ow(Vt._line)
```

#### 2652. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23522` → after: `L23406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23406) · [Before (L23522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23522)

```diff
-         nH: function(BB, IB) {
+         nS: function(tt, et) {
```

#### 2653. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23525` → after: `L23409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23409) · [Before (L23525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23525)

```diff
-         FW: function(IB, ZB) {
+         dJ: function(et, Vt) {
```

#### 2654. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23532-L23535` → after: `L23416-L23419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23416-L23419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23416-L23419) · [Before (L23532-L23535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23532-L23535)

```diff
-       const ZB = BB.zW.zK(IB._targetEId);
-       if (!ZB) return IB._line.qY(!1), void(IB._enabled = null);
-       const TB = IB._thisPos.WZB(BB.zW.zK(IB.bR).qV);
-       (0, vB.q)(IB._line, TB.x, TB.y, TB.z);
+       const Vt = tt.mJ.RY(et._targetEId);
+       if (!Vt) return et._line.Av(!1), void(et._enabled = null);
+       const Ot = et._thisPos.vVt(tt.mJ.RY(et.uZ).zB);
+       (0, dt.s)(et._line, Ot.x, Ot.y, Ot.z);
```

#### 2655. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23539-L23541` → after: `L23423-L23425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23423-L23425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23423-L23425) · [Before (L23539-L23541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23539-L23541)

```diff
-               GB = BB.zW.gZB(IB._targetEId);
-             if (!GB) return JB.WZB(TB.qV), WB.NON_HUMANOID;
-             const vB = BB.Ig.kR,
+               mt = tt.mJ.CVt(et._targetEId);
+             if (!mt) return qt.vVt(Ot.zB), bt.NON_HUMANOID;
+             const dt = tt.Bf.xI,
```

#### 2656. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23543` → after: `L23427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23427) · [Before (L23543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23543)

```diff
-                 gR: kB
+                 RP: jt
```

#### 2657. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23548` → after: `L23432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23432) · [Before (L23548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23548)

```diff
-               return oB.rN.TransformCoordinatesToRef(cB, BB, JB), WB.THIRD_PERSON_HUMANOID
+               return Dt.uf.TransformCoordinatesToRef(Ht, tt, qt), bt.THIRD_PERSON_HUMANOID
```

#### 2658. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23550-L23553` → after: `L23434-L23437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23434-L23437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23434-L23437) · [Before (L23550-L23553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23550-L23553)

```diff
-             if (IB._targetEId !== BB.Jm) return JB.WZB(TB.qV), JB.y += .8, WB.THIRD_PERSON_HUMANOID;
-             const zB = BB.camera.pitch + BB.camera.Jq[0],
-               FB = BB.camera.heading + BB.camera.Jq[1],
-               NB = BB.camera.Iq + BB.camera.Jq[2];
+             if (et._targetEId !== tt.lL) return qt.vVt(Ot.zB), qt.y += .8, bt.THIRD_PERSON_HUMANOID;
+             const lt = tt.camera.pitch + tt.camera.Tw[0],
+               Et = tt.camera.heading + tt.camera.Tw[1],
+               ft = tt.camera.nf + tt.camera.Tw[2];
```

#### 2659. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23555` → after: `L23439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23439) · [Before (L23555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23555)

```diff
-             const gB = BB.zW.zK(BB.camera.IK).qV;
+             const wt = tt.mJ.RY(tt.camera.hY).zB;
```

#### 2660. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23559` → after: `L23443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23443) · [Before (L23559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23559)

```diff
-           IB._targetPos.subtractToRef(ZB, IB._displacement), null === IB._enabled ? JB === WB.FIRST_PERSON_HUMANOID ? (IB._initialCameraOffset.TY(IB._cameraOffset), IB._enabled = !1, IB._line.qY(!1)) : (IB._enabled = !0, IB._line.qY(!0)) : !1 !== IB._enabled || JB === WB.FIRST_PE … [truncated]
+           et._targetPos.subtractToRef(Vt, et._displacement), null === et._enabled ? qt === bt.FIRST_PERSON_HUMANOID ? (et._initialCameraOffset.rK(et._cameraOffset), et._enabled = !1, et._line.Av(!1)) : (et._enabled = !0, et._line.Av(!0)) : !1 !== et._enabled || qt === bt.FIRST_PE … [truncated]
```

#### 2661. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23564-L23565` → after: `L23448-L23449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23448-L23449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23448-L23449) · [Before (L23564-L23565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23564-L23565)

```diff
-         qB = oB.rN.CrossToRef(kB, zB, IB._right).normalizeToRef(IB._right),
-         yB = oB.rN.CrossToRef(zB, qB, IB._up),
+         yt = Dt.uf.CrossToRef(jt, lt, et._right).normalizeToRef(et._right),
+         Nt = Dt.uf.CrossToRef(lt, yt, et._up),
```

#### 2662. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23567` → after: `L23451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23451) · [Before (L23567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23567)

```diff
-       (0, vB.t)(IB._line, UB.x, UB.y, UB.z, UB.w);
+       (0, dt.v)(et._line, Mt.x, Mt.y, Mt.z, Mt.w);
```

#### 2663. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23569` → after: `L23453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23453) · [Before (L23569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23569)

```diff
-       IB._line.ek.set(1, dB, GB)
+       et._line.cj.set(1, Jt, mt)
```

#### 2664. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23575` → after: `L23459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23459) · [Before (L23575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23575)

```diff
-   38993: (BB, IB, ZB) => {
+   39121: (tt, et, Vt) => {
```

#### 2665. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23580-L23582` → after: `L23464-L23466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23464-L23466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23464-L23466) · [Before (L23580-L23582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23580-L23582)

```diff
-     var TB = ZB(3854),
-       JB = ZB(36829),
-       oB = ZB(364),
+     var Ot = Vt(3751),
+       qt = Vt(37032),
+       Dt = Vt(404),
```

#### 2666. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23584-L23592` → after: `L23468-L23476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23468-L23476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23468-L23476) · [Before (L23584-L23592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23584-L23592)

```diff
-       vB = ZB(24),
-       kB = ZB(2029),
-       cB = ZB(1956),
-       nB = ZB(6635),
-       hB = ZB(20),
-       zB = ZB(760),
-       FB = ZB(2912),
-       NB = ZB(1281),
-       gB = ZB(360);
+       dt = Vt(31),
+       jt = Vt(2043),
+       Ht = Vt(1993),
+       Xt = Vt(6667),
+       Qt = Vt(26),
+       lt = Vt(809),
+       Et = Vt(2848),
+       ft = Vt(1308),
+       wt = Vt(391);
```

#### 2667. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23597` → after: `L23481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23481) · [Before (L23597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23597)

```diff
-       return (0, zB.h)(hB.d.get("clientEscMenuOptions").cameraFOV)
+       return (0, lt.o)(Qt.b.get("clientEscMenuOptions").cameraFOV)
```

#### 2668. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23602-L23603` → after: `L23486-L23487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23486-L23487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23486-L23487) · [Before (L23602-L23603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23602-L23603)

```diff
-       return kB.c.subscribe("movementBasedFovScale", (BB => {
-         IB = "number" === typeof BB && isFinite(BB) ? BB : 1
+       return jt.b.subscribe("movementBasedFovScale", (tt => {
+         et = "number" === typeof tt && isFinite(tt) ? tt : 1
```

#### 2669. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23606-L23608` → after: `L23490-L23492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23490-L23492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23490-L23492) · [Before (L23606-L23608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23606-L23608)

```diff
-       })), vB.l.subscribe(`entityScale|${BB.Jm}`, (function() {
-         const IB = BB.zW.YZB(BB.camera.IK);
-         IB && ((0, FB.d)().removeFromEyeHeightCache(BB.Jm), IB.offset[1] = (0, FB.d)().getLifeformEyeHeight(BB.Jm))
+       })), dt.j.subscribe(`entityScale|${tt.lL}`, (function() {
+         const et = tt.mJ.ZVt(tt.camera.hY);
+         et && ((0, Et.c)().removeFromEyeHeightCache(tt.lL), et.offset[1] = (0, Et.c)().getLifeformEyeHeight(tt.lL))
```

#### 2670. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23614` → after: `L23498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23498) · [Before (L23614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23614)

```diff
-           fovMultiplier: new JB.k,
+           fovMultiplier: new qt.g,
```

#### 2671. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23621` → after: `L23505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23505) · [Before (L23621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23621)

```diff
-         FW: function(ZB, TB) {
+         dJ: function(Vt, Ot) {
```

#### 2672. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23623-L23627` → after: `L23507-L23511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23507-L23511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23507-L23511) · [Before (L23623-L23627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23623-L23627)

```diff
-             const TB = BB.zW.YZB(BB.camera.IK),
-               oB = BB.zW.getState(JB.bR, "movement"),
-               vB = BB.zW.dIB(JB.bR).physicsState,
-               kB = BB.zW.vx(JB.bR);
-             GB().set(qB, kB.zq[0], vB.type === nB.o.GLIDER ? kB.zq[1] : 0, kB.zq[2]);
+             const Ot = tt.mJ.ZVt(tt.camera.hY),
+               Dt = tt.mJ.getState(qt.uZ, "movement"),
+               dt = tt.mJ.fet(qt.uZ).physicsState,
+               jt = tt.mJ.YG(qt.uZ);
+             mt().set(yt, jt.Dy[0], dt.type === Xt.n.GLIDER ? jt.Dy[1] : 0, jt.Dy[2]);
```

#### 2673. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23629-L23635` → after: `L23513-L23519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23513-L23519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23513-L23519) · [Before (L23629-L23635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23629-L23635)

```diff
-               WB = 4 * (oB._flying ? BB.vW.flySpeedMultiplier : 1);
-             let dB = zB.f;
-             UB > WB && (dB += Math.min(.033 * (UB - 4), .5) * IB), dB *= JB.fovMultiplier.getTotalMultipliedVal(), JB.zoomKeyPressed && BB.vW.canUseZoomKey && (dB *= .2), dB *= hB.d.get("clientEscMenuOptions").cameraFOV / 100, dB = Math.min(dB, zB.e), JB.movementBasedFov = JB.mov … [truncated]
-             const CB = (0, FB.d)().getLifeformEyeHeight(JB.bR);
-             if (yB[1] += CB, !1 === hB.d.get("clientEscMenuOptions").disableBobbing) {
-               const IB = (0, FB.d)().getIsStoodOnBlock(JB.bR);
-               0 === UB || !1 === IB || 0 !== BB.camera.NK ? this.state.bobbleProgress = 0 : this.state.bobbleProgress += ZB / (140 - 2 * (0, cB.f)(UB, 1, 100));
+               bt = 4 * (Dt._flying ? tt.OJ.flySpeedMultiplier : 1);
+             let Jt = lt.k;
+             Mt > bt && (Jt += Math.min(.033 * (Mt - 4), .5) * et), Jt *= qt.fovMultiplier.getTotalMultipliedVal(), qt.zoomKeyPressed && tt.OJ.canUseZoomKey && (Jt *= .2), Jt *= Qt.b.get("clientEscMenuOptions").cameraFOV / 100, Jt = Math.min(Jt, lt.g), qt.movementBasedFov = qt.mov … [truncated]
+             const Ct = (0, Et.c)().getLifeformEyeHeight(qt.uZ);
+             if (Nt[1] += Ct, !1 === Qt.b.get("clientEscMenuOptions").disableBobbing) {
+               const et = (0, Et.c)().getIsStoodOnBlock(qt.uZ);
+               0 === Mt || !1 === et || 0 !== tt.camera.ZY ? this.state.bobbleProgress = 0 : this.state.bobbleProgress += Vt / (140 - 2 * (0, Ht.e)(Mt, 1, 100));
```

#### 2674. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23637` → after: `L23521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23521) · [Before (L23637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23637)

```diff
-               this.state.bobbleValue = (0, NB.mb)(this.state.bobbleValue, TB, .1);
+               this.state.bobbleValue = (0, ft.xb)(this.state.bobbleValue, Ot, .1);
```

#### 2675. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23641` → after: `L23525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23525) · [Before (L23641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23641)

```diff
-             const QB = (0, FB.d)().sV(JB.bR),
+             const ut = (0, Et.c)().YB(qt.uZ),
```

#### 2676. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23644` → after: `L23528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23528) · [Before (L23644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23644)

```diff
-               for (let BB = 0; BB < 3; BB++) TB.offset[BB] = (0, NB.mb)(TB.offset[BB], yB[BB], sB);
+               for (let tt = 0; tt < 3; tt++) Ot.offset[tt] = (0, ft.xb)(Ot.offset[tt], Nt[tt], Kt);
```

#### 2677. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23651` → after: `L23535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23535) · [Before (L23651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23651)

```diff
-   39001: (BB, IB, ZB) => {
+   39127: (tt, et, Vt) => {
```

#### 2678. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23655-L23656` → after: `L23539-L23540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23539-L23540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23539-L23540) · [Before (L23655-L23656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23655-L23656)

```diff
-     var TB = ZB(5028),
-       JB = ZB(201);
+     var Ot = Vt(5030),
+       qt = Vt(229);
```

#### 2679. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23682-L23685` → after: `L23566-L23569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23566-L23569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23566-L23569) · [Before (L23682-L23685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23682-L23685)

```diff
-           const cB = BB.zW.aU(BB.Jm),
-             nB = BB.camera.XV(),
-             hB = BB.camera.RV();
-           IB[0] = cB[2], IB[1] = cB[1] + JB.f.fq * JB.f.playerEyeToHeightRatio, IB[2] = cB[0], IB[3] = nB[2], IB[4] = nB[1], IB[5] = nB[0], IB[6] = hB[2], IB[7] = hB[1], IB[8] = hB[0];
+           const Ht = tt.mJ.YM(tt.lL),
+             Xt = tt.camera.zp(),
+             Qt = tt.camera.Qp();
+           et[0] = Ht[2], et[1] = Ht[1] + qt.e.Yy * qt.e.playerEyeToHeightRatio, et[2] = Ht[0], et[3] = Xt[2], et[4] = Xt[1], et[5] = Xt[0], et[6] = Qt[2], et[7] = Qt[1], et[8] = Qt[0];
```

#### 2680. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23691` → after: `L23575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23575) · [Before (L23691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23691)

```diff
-         FW: null
+         dJ: null
```

#### 2681. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23695` → after: `L23579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23579) · [Before (L23695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23695)

```diff
-   39008: (BB, IB, ZB) => {
+   39134: (tt, et, Vt) => {
```

#### 2682. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23699` → after: `L23583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23583) · [Before (L23699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23699)

```diff
-     var TB = ZB(364),
+     var Ot = Vt(404),
```

#### 2683. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23701` → after: `L23585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23585) · [Before (L23701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23701)

```diff
-       oB = ZB(24);
+       Dt = Vt(31);
```

#### 2684. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23718-L23719` → after: `L23602-L23603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23602-L23603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23602-L23603) · [Before (L23718-L23719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23718-L23719)

```diff
-         cW: function(IB, ZB) {
-           ZB.thisPlayerTeleportSub = oB.l.subscribe(`otherPlayerTeleported|${IB}`, (IB => {
+         qJ: function(et, Vt) {
+           Vt.thisPlayerTeleportSub = Dt.j.subscribe(`otherPlayerTeleported|${et}`, (et => {
```

#### 2685. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23723` → after: `L23607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23607) · [Before (L23723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23723)

```diff
-             const JB = BB.zW.aU(BB.Jm);
+             const qt = tt.mJ.YM(tt.lL);
```

#### 2686. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23725` → after: `L23609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23609) · [Before (L23725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23725)

```diff
-           })), ZB.localPlayerTeleportSub = oB.l.subscribe("localPlayerTeleported", (TB => {
+           })), Vt.localPlayerTeleportSub = Dt.j.subscribe("localPlayerTeleported", (Ot => {
```

#### 2687. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23731` → after: `L23615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23615) · [Before (L23731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23731)

```diff
-             const GB = BB.zW.getState(IB, "smoothToServerPos");
+             const mt = tt.mJ.getState(et, "smoothToServerPos");
```

#### 2688. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23735-L23736` → after: `L23619-L23620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23619-L23620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23619-L23620) · [Before (L23735-L23736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23735-L23736)

```diff
-         nH: function(IB, ZB) {
-           oB.l.unsubscribe(ZB.thisPlayerTeleportSub), oB.l.unsubscribe(ZB.localPlayerTeleportSub);
+         nS: function(et, Vt) {
+           Dt.j.unsubscribe(Vt.thisPlayerTeleportSub), Dt.j.unsubscribe(Vt.localPlayerTeleportSub);
```

#### 2689. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23738-L23739` → after: `L23622-L23623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23622-L23623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23622-L23623) · [Before (L23738-L23739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23738-L23739)

```diff
-             zW: TB
-           } = BB, JB = TB.hZB(IB);
+             mJ: Ot
+           } = tt, qt = Ot.aVt(et);
```

#### 2690. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23741` → after: `L23625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23625) · [Before (L23741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23741)

```diff
-           const GB = TB.getState(IB, TB.names.GN);
+           const mt = Ot.getState(et, Ot.names.BE);
```

#### 2691. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23745` → after: `L23629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23629) · [Before (L23745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23745)

```diff
-           const TB = BB.zW.aU(BB.Jm);
+           const Ot = tt.mJ.YM(tt.lL);
```

#### 2692. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23752` → after: `L23636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23636) · [Before (L23752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23752)

```diff
-             const IB = BB.zW.getState(JB.bR, "smoothToServerPos");
+             const et = tt.mJ.getState(qt.uZ, "smoothToServerPos");
```

#### 2693. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23763-L23764` → after: `L23647-L23648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23647-L23648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23647-L23648) · [Before (L23763-L23764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23763-L23764)

```diff
-         zW: TB
-       } = BB, JB = TB.hZB(IB.bR);
+         mJ: Ot
+       } = tt, qt = Ot.aVt(et.uZ);
```

#### 2694. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23766` → after: `L23650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23650) · [Before (L23766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23766)

```diff
-       const oB = TB.getState(IB.bR, TB.names.GN);
+       const Dt = Ot.getState(et.uZ, Ot.names.BE);
```

#### 2695. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23781-L23782` → after: `L23665-L23666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23665-L23666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23665-L23666) · [Before (L23781-L23782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23781-L23782)

```diff
-       const JB = null === (ZB = BB.zW.uIB(BB.Jm)) || void 0 === ZB ? void 0 : ZB.ridingVehicleEId;
-       return !!JB && JB === (null === (TB = BB.zW.uIB(IB.bR)) || void 0 === TB ? void 0 : TB.ridingVehicleEId)
+       const qt = null === (Vt = tt.mJ.xet(tt.lL)) || void 0 === Vt ? void 0 : Vt.ridingVehicleEId;
+       return !!qt && qt === (null === (Ot = tt.mJ.xet(et.uZ)) || void 0 === Ot ? void 0 : Ot.ridingVehicleEId)
```

#### 2696. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23793` → after: `L23677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23677) · [Before (L23793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23793)

```diff
-   39014: (BB, IB, ZB) => {
+   39138: (tt, et, Vt) => {
```

#### 2697. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23799` → after: `L23683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23683) · [Before (L23799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23799)

```diff
-     var TB = ZB(364),
+     var Ot = Vt(404),
```

#### 2698. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23801-L23806` → after: `L23685-L23690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23685-L23690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23685-L23690) · [Before (L23801-L23806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23801-L23806)

```diff
-       oB = ZB(36783),
-       GB = ZB(36780),
-       vB = ZB(9296),
-       kB = ZB(2912),
-       cB = ZB(38048),
-       nB = ZB(38136);
+       Dt = Vt(36996),
+       mt = Vt(36992),
+       dt = Vt(9425),
+       jt = Vt(2848),
+       Ht = Vt(38244),
+       Xt = Vt(38316);
```

#### 2699. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23819` → after: `L23703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23703) · [Before (L23819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23819)

```diff
-         cW: (BB, IB) => {
+         qJ: (tt, et) => {
```

#### 2700. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23822` → after: `L23706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23706) · [Before (L23822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23822)

```diff
-         nH: null,
+         nS: null,
```

#### 2701. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23824` → after: `L23708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23708) · [Before (L23824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23824)

```diff
-           const TB = (0, kB.d)();
+           const Ot = (0, jt.c)();
```

#### 2702. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23826-L23827` → after: `L23710-L23711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23710-L23711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23710-L23711) · [Before (L23826-L23827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23826-L23827)

```diff
-             if (!BB.zW.hZB(kB.bR).isAlive) continue;
-             const IB = BB.zW.dIB(kB.bR);
+             if (!tt.mJ.aVt(jt.uZ).isAlive) continue;
+             const et = tt.mJ.fet(jt.uZ);
```

#### 2703. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23830-L23832` → after: `L23714-L23716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23714-L23716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23714-L23716) · [Before (L23830-L23832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23830-L23832)

```diff
-             if (BB.bloxd.getResolvedPhysicsSettings(kB.bR, ZB).disableFootstepSounds) continue;
-             const zB = BB.zW.aU(kB.bR);
-             let NB = TB.WU(Math.floor(zB[0]), Math.ceil(zB[1]) - 1, Math.floor(zB[2]));
+             if (tt.bloxd.getResolvedPhysicsSettings(jt.uZ, Vt).disableFootstepSounds) continue;
+             const lt = tt.mJ.YM(jt.uZ);
+             let ft = Ot.XM(Math.floor(lt[0]), Math.ceil(lt[1]) - 1, Math.floor(lt[2]));
```

#### 2704. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23837` → after: `L23721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23721) · [Before (L23837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23837)

```diff
-             const gB = JB().uG(kB.lastPos, zB);
+             const wt = qt().pm(jt.lastPos, lt);
```

#### 2705. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23839` → after: `L23723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23723) · [Before (L23839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23839)

```diff
-             const qB = (0, nB.getRigFootfallPhase)(BB, kB.bR);
+             const yt = (0, Xt.getRigFootfallPhase)(tt, jt.uZ);
```

#### 2706. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23841-L23844` → after: `L23725-L23728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23725-L23728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23725-L23728) · [Before (L23841-L23844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23841-L23844)

```diff
-             const yB = Number.isNaN(qB) ? kB.distSinceLastSound > hB : kB.stepPending;
-             if (IB.isOnGround() && 0 !== NB && (yB && !vB.f[NB].gF)) {
-               const BB = (0, oB.f)(`step_${(0,cB.b)(NB,!1)}`);
-               GB.d.play(BB, .15), kB.distSinceLastSound = 0, kB.stepPending = !1
+             const Nt = Number.isNaN(yt) ? jt.distSinceLastSound > Qt : jt.stepPending;
+             if (et.isOnGround() && 0 !== ft && (Nt && !dt.h[ft].OE)) {
+               const tt = (0, Dt.g)(`step_${(0,Ht.e)(ft,!1)}`);
+               mt.e.play(tt, .15), jt.distSinceLastSound = 0, jt.stepPending = !1
```

#### 2707. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23857` → after: `L23741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23741) · [Before (L23857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23857)

```diff
-   39019: (BB, IB, ZB) => {
+   39147: (tt, et, Vt) => {
```

#### 2708. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23863-L23864` → after: `L23747-L23748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23747-L23748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23747-L23748) · [Before (L23863-L23864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23863-L23864)

```diff
-         cW: function(BB, IB) {},
-         nH: function(BB, IB) {},
+         qJ: function(tt, et) {},
+         nS: function(tt, et) {},
```

#### 2709. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23872` → after: `L23756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23756) · [Before (L23872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23872)

```diff
-   38892: (BB, IB, ZB) => {
+   39052: (tt, et, Vt) => {
```

#### 2710. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23877-L23878` → after: `L23761-L23762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23761-L23762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23761-L23762) · [Before (L23877-L23878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23877-L23878)

```diff
-     var TB = ZB(3854),
-       JB = ZB(364),
+     var Ot = Vt(3751),
+       qt = Vt(404),
```

#### 2711. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23880-L23884` → after: `L23764-L23768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23764-L23768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23764-L23768) · [Before (L23880-L23884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23880-L23884)

```diff
-       GB = ZB(3911),
-       vB = ZB(38873),
-       kB = ZB(1317),
-       cB = ZB(37696),
-       nB = ZB(37448);
+       mt = Vt(3820),
+       dt = Vt(39039),
+       jt = Vt(1345),
+       Ht = Vt(37909),
+       Xt = Vt(37647);
```

#### 2712. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23893` → after: `L23777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23777) · [Before (L23893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23893)

```diff
-           if (console.assert(1 === ZB.length, "There should only be one entity with updateServerOfMovement."), BB.zW.hZB(BB.Jm).isAlive)
+           if (console.assert(1 === Vt.length, "There should only be one entity with updateServerOfMovement."), tt.mJ.aVt(tt.lL).isAlive)
```

#### 2713. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23896` → after: `L23780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23780) · [Before (L23896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23896)

```diff
-               const IB = BB.zW.zK(BB.Jm).UIB;
+               const et = tt.mJ.RY(tt.lL).Qet;
```

#### 2714. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23898-L23899` → after: `L23782-L23783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23782-L23783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23782-L23783) · [Before (L23898-L23899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23898-L23899)

```diff
-               const ZB = BB.zW.uIB(vB.bR),
-                 zB = BB.zW.dIB(vB.bR),
+               const Vt = tt.mJ.xet(dt.uZ),
+                 lt = tt.mJ.fet(dt.uZ),
```

#### 2715. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23901-L23918` → after: `L23785-L23802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23785-L23802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23785-L23802) · [Before (L23901-L23918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23901-L23918)

```diff
-                   cG: IB[0],
-                   nG: IB[1],
-                   hG: IB[2],
-                   FG: (0, cB.u)(BB.bloxd.getResolvedPhysicsSettings(vB.bR, zB.physicsState), zB.steeringHeading, nB.c.getPlayerFacingHeading(BB)),
-                   zG: ZB.heading,
-                   NG: ZB.speed,
-                   gG: ZB.jumping,
-                   qG: ZB.crouching,
-                   yG: ZB.cameraPitch,
-                   UG: ZB.armSwinging,
-                   WG: null !== (JB = BB.kIB) && void 0 !== JB ? JB : oB().copy(hB, BB.camera.XV()),
-                   dG: ZB.cameraDirection,
-                   CG: (0, TB.getLastReceivedPacketId)(),
-                   QG: BB.Mz,
-                   sG: ZB.bunnyHopDisabled,
-                   wG: ZB.toggleFly,
- ... (2 more removed lines; see GitHub link above)
+                   fm: et[0],
+                   wm: et[1],
+                   ym: et[2],
+                   am: (0, Ht.p)(tt.bloxd.getResolvedPhysicsSettings(dt.uZ, lt.physicsState), lt.steeringHeading, Xt.c.getPlayerFacingHeading(tt)),
+                   Nm: Vt.heading,
+                   Mm: Vt.speed,
+                   bm: Vt.jumping,
+                   Jm: Vt.crouching,
+                   Cm: Vt.cameraPitch,
+                   um: Vt.armSwinging,
+                   Km: null !== (qt = tt.stt) && void 0 !== qt ? qt : Dt().copy(Qt, tt.camera.zp()),
+                   hm: Vt.cameraDirection,
+                   Wm: (0, Ot.getLastReceivedPacketId)(),
+                   Sm: tt.bl,
+                   Rm: Vt.bunnyHopDisabled,
+                   Im: Vt.toggleFly,
+ ... (2 more added lines; see GitHub link above)
```

#### 2716. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23920` → after: `L23804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23804) · [Before (L23920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23920)

```diff
-               isNaN(FB.NG) && (console.error("speed was NaN! Setting to 0"), FB.NG = 0);
+               isNaN(Et.Mm) && (console.error("speed was NaN! Setting to 0"), Et.Mm = 0);
```

#### 2717. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23934` → after: `L23818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23818) · [Before (L23934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23934)

```diff
-               NB.pitch = BB.camera.pitch, gB.speed = ZB.speed, 0 === NB.pitch && (gB.speed *= 1.3), (0, TB.sendColyMessage)(GB.Zh, FB)
+               ft.pitch = tt.camera.pitch, wt.speed = Vt.speed, 0 === ft.pitch && (wt.speed *= 1.3), (0, Ot.sendColyMessage)(mt.Xh, Et)
```

#### 2718. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23944` → after: `L23828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23828) · [Before (L23944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23944)

```diff
-   38779: (BB, IB, ZB) => {
+   38949: (tt, et, Vt) => {
```

#### 2719. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23946-L23950` → after: `L23830-L23834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23830-L23834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23830-L23834) · [Before (L23946-L23950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23946-L23950)

```diff
-       b: () => WB,
-       c: () => dB,
-       f: () => QB,
-       i: () => sB,
-       j: () => UB
+       d: () => bt,
+       e: () => Jt,
+       h: () => ut,
+       l: () => Kt,
+       p: () => Mt
```

#### 2720. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23952-L23965` → after: `L23836-L23849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23836-L23849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23836-L23849) · [Before (L23952-L23965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23952-L23965)

```diff
-     var TB = ZB(342),
-       JB = ZB(38804),
-       oB = ZB(2929),
-       GB = ZB(2935),
-       vB = ZB(38786),
-       kB = ZB(38795),
-       cB = ZB(20),
-       nB = ZB(118),
-       hB = ZB(3071),
-       zB = ZB(105),
-       FB = ZB(138),
-       NB = ZB(36),
-       gB = ZB(3733),
-       qB = ZB(129);
+     var Ot = Vt(377),
+       qt = Vt(38967),
+       Dt = Vt(2857),
+       mt = Vt(2865),
+       dt = Vt(38951),
+       jt = Vt(38958),
+       Ht = Vt(26),
+       Xt = Vt(121),
+       Qt = Vt(2984),
+       lt = Vt(106),
+       Et = Vt(146),
+       ft = Vt(39),
+       wt = Vt(3643),
+       yt = Vt(133);
```

#### 2721. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23973` → after: `L23857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23857) · [Before (L23973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23973)

```diff
-       const ZB = null !== (IB = nB.currentUrl.getSearchParam(BB)) && void 0 !== IB ? IB : NB.m.getItem(BB);
+       const Vt = null !== (et = Xt.currentUrl.getSearchParam(tt)) && void 0 !== et ? et : ft.e.getItem(tt);
```

#### 2722. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23977-L23978` → after: `L23861-L23862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23861-L23862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23861-L23862) · [Before (L23977-L23978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23977-L23978)

```diff
-       (0, oB.F)(null);
-       const ZB = (0, GB.l)((0, GB.j)(IB.useWebGpu, !0));
+       (0, Dt.B)(null);
+       const Vt = (0, mt.p)((0, mt.n)(et.useWebGpu, !0));
```

#### 2723. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23980-L23981` → after: `L23864-L23865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23864-L23865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23864-L23865) · [Before (L23980-L23981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23980-L23981)

```diff
-       const vB = (0, GB.d)(ZB.source);
-       null !== vB && console.info(`Renderer: ${ZB.requested} from ${vB}`), null !== ZB.fallbackReason && console.warn(`Renderer: ${ZB.fallbackReason}`);
+       const dt = (0, mt.i)(Vt.source);
+       null !== dt && console.info(`Renderer: ${Vt.requested} from ${dt}`), null !== Vt.fallbackReason && console.warn(`Renderer: ${Vt.fallbackReason}`);
```

#### 2724. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23987` → after: `L23871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23871) · [Before (L23987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23987)

```diff
-           if (ZB && !0 === NB.m.getItem(qB.H) && !0 !== NB.m.getItem(TB.wc)) return (0, zB.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), qB.b;
+           if (Vt && !0 === ft.e.getItem(yt.F) && !0 !== ft.e.getItem(Ot.Rb)) return (0, lt.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), yt.b;
```

#### 2725. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23992` → after: `L23876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23876) · [Before (L23992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23992)

```diff
-             } = await (0, oB.u)(GB).load();
+             } = await (0, Dt.p)(mt).load();
```

#### 2726. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23994-L23996` → after: `L23878-L23880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23878-L23880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23878-L23880) · [Before (L23994-L23996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L23994-L23996)

```diff
-             const TB = cB.d.antiAliasingOnWebGpuAdapter((0, FB.l)()),
-               JB = (0, kB.i)(BB),
-               vB = (0, kB.e)(JB, {
+             const Ot = Ht.b.antiAliasingOnWebGpuAdapter((0, Et.p)()),
+               qt = (0, jt.e)(tt),
+               dt = (0, jt.d)(qt, {
```

#### 2727. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24000` → after: `L23884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23884) · [Before (L24000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24000)

```diff
-               fZB: TB,
+               xVt: Ot,
```

#### 2728. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24006` → after: `L23890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23890) · [Before (L24006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24006)

```diff
-             const BB = (0, JB.d)(gB);
+             const tt = (0, qt.e)(wt);
```

#### 2729. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24009` → after: `L23893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23893) · [Before (L24009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24009)

```diff
-             return "string" === typeof IB ? (console.warn(`Lite could not start, falling back to WebGL: ${String(gB)}`), IB) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", gB), "it failed to start (see the console)")
+             return "string" === typeof et ? (console.warn(`Lite could not start, falling back to WebGL: ${String(wt)}`), et) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", wt), "it failed to start (see the console)")
```

#### 2730. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24012` → after: `L23896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23896) · [Before (L24012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24012)

```diff
-         if ("lite" === ZB.choice && NB.m.setItem(qB.u, "string" === typeof vB), "string" !== typeof vB) return cB.d.followGameGpu((0, FB.l)()), (0, zB.setWebGpuFallbackReason)("none"), (0, GB.o)(ZB), (0, oB.F)(vB), {
+         if ("lite" === Vt.choice && ft.e.setItem(yt.p, "string" === typeof dt), "string" !== typeof dt) return Ht.b.followGameGpu((0, Et.p)()), (0, lt.setWebGpuFallbackReason)("none"), (0, mt.s)(Vt), (0, Dt.B)(dt), {
```

#### 2731. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24015` → after: `L23899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23899) · [Before (L24015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24015)

```diff
-         nB = (0, GB.c)(ZB.choice, [vB]), BB.replaceWith(BB.cloneNode(!1))
+         Xt = (0, mt.e)(Vt.choice, [dt]), tt.replaceWith(tt.cloneNode(!1))
```

#### 2732. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24017` → after: `L23901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23901) · [Before (L24017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24017)

```diff
-       return (0, GB.o)({
+       return (0, mt.s)({
```

#### 2733. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24021` → after: `L23905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23905) · [Before (L24021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24021)

```diff
-       }), cB.d.followGameGpu(null), {
+       }), Ht.b.followGameGpu(null), {
```

#### 2734. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24026` → after: `L23910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23910) · [Before (L24026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24026)

```diff
-       Promise.all([ZB.e(258), ZB.e(307)]).then((() => ZB(41568))).then((BB => {
+       Promise.all([Vt.e(258), Vt.e(307)]).then((() => Vt(41793))).then((tt => {
```

#### 2735. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24029-L24030` → after: `L23913-L23914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23913-L23914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23913-L23914) · [Before (L24029-L24030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24029-L24030)

```diff
-       const [BB, IB] = await Promise.all([Promise.all([ZB.e(258), ZB.e(259), ZB.e(256), ZB.e(266), ZB.e(260), ZB.e(265), ZB.e(263), ZB.e(255), ZB.e(268), ZB.e(279), ZB.e(267), ZB.e(261), ZB.e(262), ZB.e(308), ZB.e(0)]).then((() => ZB(41580))), Promise.all([ZB.e(258), ZB.e(259), Z … [truncated]
-       return (0, vB.e)(IB.SkyMaterial), BB.default
+       const [tt, et] = await Promise.all([Promise.all([Vt.e(258), Vt.e(259), Vt.e(256), Vt.e(266), Vt.e(260), Vt.e(265), Vt.e(263), Vt.e(255), Vt.e(268), Vt.e(279), Vt.e(267), Vt.e(261), Vt.e(262), Vt.e(308), Vt.e(0)]).then((() => Vt(41802))), Promise.all([Vt.e(258), Vt.e(259), V … [truncated]
+       return (0, dt.f)(et.SkyMaterial), tt.default
```

#### 2736. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24034` → after: `L23918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23918) · [Before (L24034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24034)

```diff
-       return "lite" === (0, GB.l)((0, GB.j)(BB, !1)).choice && (0, zB.getWebGpuSupported)() && !NB.m.getItem(qB.u)
+       return "lite" === (0, mt.p)((0, mt.n)(tt, !1)).choice && (0, lt.getWebGpuSupported)() && !ft.e.getItem(yt.p)
```

#### 2737. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24044-L24045` → after: `L23928-L23929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23928-L23929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23928-L23929) · [Before (L24044-L24045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24044-L24045)

```diff
-       (0, gB.c)((() => {
-         CB(BB) ? (0, oB.r)().load().catch((BB => {
+       (0, wt.e)((() => {
+         Ct(tt) ? (0, Dt.n)().load().catch((tt => {
```

#### 2738. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24051` → after: `L23935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23935) · [Before (L24051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24051)

```diff
-   38795: (BB, IB, ZB) => {
+   38958: (tt, et, Vt) => {
```

#### 2739. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24053-L24054` → after: `L23937-L23938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23937-L23938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23937-L23938) · [Before (L24053-L24054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24053-L24054)

```diff
-       e: () => vB,
-       i: () => GB
+       d: () => dt,
+       e: () => mt
```

#### 2740. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24056-L24058` → after: `L23940-L23942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23940-L23942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23940-L23942) · [Before (L24056-L24058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24056-L24058)

```diff
-     var TB = ZB(20),
-       JB = ZB(34126),
-       oB = ZB(3071);
+     var Ot = Vt(26),
+       qt = Vt(34326),
+       Dt = Vt(2984);
```

#### 2741. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24062` → after: `L23946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23946) · [Before (L24062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24062)

```diff
-       return null !== (IB = BB.parentElement) && void 0 !== IB ? IB : BB
+       return null !== (et = tt.parentElement) && void 0 !== et ? et : tt
```

#### 2742. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24066-L24067` → after: `L23950-L23951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23950-L23951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23950-L23951) · [Before (L24066-L24067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24066-L24067)

```diff
-       if (BB.clientWidth <= 0 || BB.clientHeight <= 0 || JB.c.isHeld()) return null;
-       const ZB = (0, oB.o)(),
+       if (tt.clientWidth <= 0 || tt.clientHeight <= 0 || qt.e.isHeld()) return null;
+       const Vt = (0, Dt.m)(),
```

#### 2743. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24069` → after: `L23953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23953) · [Before (L24069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24069)

```diff
-       return (0, oB.w)(GB, vB, ZB, TB.d.get("clientEscMenuOptions").pixelScale)
+       return (0, Dt.p)(mt, dt, Vt, Ot.b.get("clientEscMenuOptions").pixelScale)
```

#### 2744. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24072` → after: `L23956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23956) · [Before (L24072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24072)

```diff
-   39184: (BB, IB, ZB) => {
+   39325: (tt, et, Vt) => {
```

#### 2745. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24074-L24075` → after: `L23958-L23959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23958-L23959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23958-L23959) · [Before (L24074-L24075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24074-L24075)

```diff
-       b: () => dB,
-       d: () => WB
+       e: () => Jt,
+       g: () => bt
```

#### 2746. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24077-L24088` → after: `L23961-L23972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23961-L23972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23961-L23972) · [Before (L24077-L24088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24077-L24088)

```diff
-     var TB = ZB(201),
-       JB = ZB(3036),
-       oB = ZB(1125),
-       GB = ZB(3110),
-       vB = ZB(36283),
-       kB = ZB(4682),
-       cB = ZB(3875),
-       nB = ZB(3733),
-       hB = ZB(36294),
-       zB = ZB(36506),
-       FB = ZB(36509),
-       NB = ZB(24);
+     var Ot = Vt(229),
+       qt = Vt(2961),
+       Dt = Vt(1167),
+       mt = Vt(3015),
+       dt = Vt(36487),
+       jt = Vt(4637),
+       Ht = Vt(3772),
+       Xt = Vt(3643),
+       Qt = Vt(36498),
+       lt = Vt(36720),
+       Et = Vt(36729),
+       ft = Vt(31);
```

#### 2747. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24111` → after: `L23995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23995) · [Before (L24111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24111)

```diff
-           (0, cB.f)("memory", BB)
+           (0, Ht.g)("memory", tt)
```

#### 2748. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24115` → after: `L23999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L23999) · [Before (L24115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24115)

```diff
-           const [IB, ZB] = BB.vz.Ip, JB = Math.max(TB.f.defaultChunkHorizAddDistance, IB - gB);
+           const [et, Vt] = tt.sQ.rW, qt = Math.max(Ot.e.defaultChunkHorizAddDistance, et - wt);
```

#### 2749. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24121` → after: `L24005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24005) · [Before (L24121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24121)

```diff
-           return (0, kB.p)(JB), (0, kB.c)(BB.vz, oB), (0, zB.u)(...(0, kB.g)(oB))
+           return (0, jt.o)(qt), (0, jt.e)(tt.sQ, Dt), (0, lt.o)(...(0, jt.i)(Dt))
```

#### 2750. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24123` → after: `L24007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24007) · [Before (L24123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24123)

```diff
-         return null === ZB ? vB = IB : oB = -1 / 0, ZB
+         return null === Vt ? dt = et : Dt = -1 / 0, Vt
```

#### 2751. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24125-L24126` → after: `L24009-L24010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24009-L24010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24009-L24010) · [Before (L24125-L24126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24125-L24126)

```diff
-         1 === ZB ? CB("shed", BB, TB, IB.memoryBytes()) : console.warn(`wasm memory: shed again (${BB}): shed ${ZB}`, TB.wasmMemoryShed)
-       }), (() => BB.vz.Ip[0])), (0, JB.S)((() => {
+         1 === Vt ? Ct("shed", tt, Ot, et.memoryBytes()) : console.warn(`wasm memory: shed again (${tt}): shed ${Vt}`, Ot.wasmMemoryShed)
+       }), (() => tt.sQ.rW[0])), (0, qt.$)((() => {
```

#### 2752. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24133-L24135` → after: `L24017-L24019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24017-L24019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24017-L24019) · [Before (L24133-L24135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24133-L24135)

```diff
-       const dB = NB.l.subscribe("appManagerUpdated|gameState", (BB => {
-         "inGame" === BB && (NB.l.unsubscribe(dB), (0, nB.c)((() => {
-           WB.reserveAtJoin((0, FB.i)(IB.memoryBytes())), hB()
+       const Jt = ft.j.subscribe("appManagerUpdated|gameState", (tt => {
+         "inGame" === tt && (ft.j.unsubscribe(Jt), (0, Xt.e)((() => {
+           bt.reserveAtJoin((0, Et.j)(et.memoryBytes())), Qt()
```

#### 2753. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24157-L24159` → after: `L24041-L24043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24041-L24043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24041-L24043) · [Before (L24157-L24159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24157-L24159)

```diff
-       const JB = `wasm memory was refused (${IB}): ${"shed"===BB?"the JS client lowered its view distance":"the JS client's view distance is at its floor"}`,
-         kB = `wasm_memory_${BB}_${IB}_m${(0,hB.e)(TB)}`;
-       (0, oB.Og)(new Error(JB), {
+       const qt = `wasm memory was refused (${et}): ${"shed"===tt?"the JS client lowered its view distance":"the JS client's view distance is at its floor"}`,
+         jt = `wasm_memory_${tt}_${et}_m${(0,Qt.j)(Ot)}`;
+       (0, Dt.Nw)(new Error(qt), {
```

#### 2754. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24167` → after: `L24051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24051) · [Before (L24167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24167)

```diff
-   38934: (BB, IB, ZB) => {
+   39081: (tt, et, Vt) => {
```

#### 2755. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24169` → after: `L24053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24053) · [Before (L24169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24169)

```diff
-       c: () => TB
+       b: () => Ot
```

#### 2756. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24173` → after: `L24057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24057) · [Before (L24173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24173)

```diff
-   38919: (BB, IB, ZB) => {
+   39068: (tt, et, Vt) => {
```

#### 2757. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24176` → after: `L24061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24061) · [Before (L24176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24176)

```diff
-       g: () => vB,
+       h: () => Dt,
```

#### 2758. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24178-L24182` → after: `L24063-L24066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24063-L24066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24063-L24066) · [Before (L24178-L24182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24178-L24182)

```diff
-       m: () => FB,
-       p: () => kB,
-       t: () => nB,
-       x: () => cB,
-       z: () => zB
+       o: () => jt,
+       r: () => Xt,
+       s: () => Ht,
+       v: () => lt
```

#### 2759. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24184-L24185` → after: `L24068-L24069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24068-L24069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24068-L24069) · [Before (L24184-L24185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24184-L24185)

```diff
-     var TB = ZB(37113),
-       JB = ZB(37504);
+     var Ot = Vt(37331),
+       qt = Vt(37699);
```

#### 2760. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24195` → after: `L24079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24079) · [Before (L24195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24195)

```diff
-       return null !== BB && void 0 !== BB ? BB : IB
+       return null !== tt && void 0 !== tt ? tt : et
```

#### 2761. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24204` → after: `L24088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24088) · [Before (L24204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24204)

```diff
-       const oB = BB.zW.RIB(ZB),
+       const Dt = tt.mJ.oet(Vt),
```

#### 2762. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24207` → after: `L24091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24091) · [Before (L24207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24207)

```diff
-       const vB = BB.zW.RIB(IB);
+       const dt = tt.mJ.oet(et);
```

#### 2763. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24209-L24211` → after: `L24093-L24095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24093-L24095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24093-L24095) · [Before (L24209-L24211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24209-L24211)

```diff
-       const kB = BB.zW.zK(ZB).qV,
-         cB = BB.camera.yV(),
-         nB = BB.camera.fV(),
+       const jt = tt.mJ.RY(Vt).zB,
+         Ht = tt.camera.oB(),
+         Xt = tt.camera.Hx(),
```

#### 2764. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24216` → after: `L24100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24100) · [Before (L24216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24216)

```diff
-       const gB = BB.Ig.JR().getFrameId();
+       const wt = tt.Bf.vI().getFrameId();
```

#### 2765. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24220-L24221` → after: `L24104-L24105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24104-L24105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24104-L24105) · [Before (L24220-L24221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24220-L24221)

```diff
-           minimum: new TB.rN,
-           maximum: new TB.rN,
+           minimum: new Ot.uf,
+           maximum: new Ot.uf,
```

#### 2766. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24224` → after: `L24108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24108) · [Before (L24224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24224)

```diff
-         if (qB.frame = gB, vB.SZB) qB.valid = BB.Ig.kR.getObjectBounds(vB.gR, qB.minimum, qB.maximum);
+         if (yt.frame = wt, dt.DOt) yt.valid = tt.Bf.xI.getObjectBounds(dt.RP, yt.minimum, yt.maximum);
```

#### 2767. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24226` → after: `L24110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24110) · [Before (L24226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24226)

```diff
-           qB.minimum.K9(1 / 0), qB.maximum.K9(-1 / 0), qB.valid = !1;
+           yt.minimum.S_(1 / 0), yt.maximum.S_(-1 / 0), yt.valid = !1;
```

#### 2768. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24231` → after: `L24115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24115) · [Before (L24231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24231)

```diff
-             const BB = IB.qm().boundingBox;
+             const tt = et.fL().boundingBox;
```

#### 2769. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24245` → after: `L24129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24129) · [Before (L24245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24245)

```diff
-       }(kB, cB, qB.minimum, qB.maximum, BB.camera.fV());
+       }(jt, Ht, yt.minimum, yt.maximum, tt.camera.Hx());
```

#### 2770. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24254-L24255` → after: `L24138-L24139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24138-L24139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24138-L24139) · [Before (L24254-L24255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24254-L24255)

```diff
-       } = BB.zW.RIB(IB), oB = BB.zW.zK(IB).qV, GB = oB[0] + TB[0], vB = oB[1] + TB[1], kB = oB[2] + TB[2];
-       (0, JB.q)(ZB, GB, vB, kB)
+       } = tt.mJ.oet(et), Dt = tt.mJ.RY(et).zB, mt = Dt[0] + Ot[0], dt = Dt[1] + Ot[1], jt = Dt[2] + Ot[2];
+       (0, qt.s)(Vt, mt, dt, jt)
```

#### 2771. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24258` → after: `L24142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24142) · [Before (L24258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24258)

```diff
-   38734: (BB, IB, ZB) => {
+   38915: (tt, et, Vt) => {
```

#### 2772. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24260-L24261` → after: `L24144-L24145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24144-L24145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24144-L24145) · [Before (L24260-L24261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24260-L24261)

```diff
-       c: () => oB,
-       d: () => GB
+       b: () => Dt,
+       c: () => mt
```

#### 2773. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24263-L24264` → after: `L24147-L24148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24147-L24148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24147-L24148) · [Before (L24263-L24264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24263-L24264)

```diff
-     var TB = ZB(37338),
-       JB = ZB(2929);
+     var Ot = Vt(37549),
+       qt = Vt(2857);
```

#### 2774. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24269-L24270` → after: `L24153-L24154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24153-L24154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24153-L24154) · [Before (L24269-L24270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24269-L24270)

```diff
-       } = BB.Ig;
-       return "jN" in IB && IB._gl.isContextLost()
+       } = tt.Bf;
+       return "bf" in et && et._gl.isContextLost()
```

#### 2775. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24277` → after: `L24161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24161) · [Before (L24277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24277)

```diff
-       if (!("oR" in BB)) {
+       if (!("ZI" in tt)) {
```

#### 2776. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24280` → after: `L24164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24164) · [Before (L24280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24280)

```diff
-         const BB = (0, JB.n)();
+         const tt = (0, qt.j)();
```

#### 2777. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24288-L24289` → after: `L24172-L24173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24172-L24173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24172-L24173) · [Before (L24288-L24289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24288-L24289)

```diff
-       const GB = BB.PN(),
-         vB = GB.jN.add((() => {
+       const mt = tt.Jf(),
+         dt = mt.bf.add((() => {
```

#### 2778. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24296-L24297` → after: `L24180-L24181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24180-L24181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24180-L24181) · [Before (L24296-L24297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24296-L24297)

```diff
-         kB = BB.oR.addOnce((() => {
-           GB.jN.remove(vB)
+         jt = tt.ZI.addOnce((() => {
+           mt.bf.remove(dt)
```

#### 2779. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24300` → after: `L24184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24184) · [Before (L24300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24300)

```diff
-         GB.jN.remove(vB), BB.oR.remove(kB)
+         mt.bf.remove(dt), tt.ZI.remove(jt)
```

#### 2780. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24304` → after: `L24188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24188) · [Before (L24304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24304)

```diff
-   38851: (BB, IB, ZB) => {
+   39019: (tt, et, Vt) => {
```

#### 2781. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24308-L24312` → after: `L24192-L24196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24192-L24196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24192-L24196) · [Before (L24308-L24312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24308-L24312)

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

#### 2782. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24315` → after: `L24199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24199) · [Before (L24315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24315)

```diff
-       return `\n\t\t\t\t${(0,vB.y)(BB,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       return `\n\t\t\t\t${(0,dt.u)(tt,"mat2","rotate",[{name:"ang",type:"float"}],`\
```

#### 2783. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24317` → after: `L24201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24201) · [Before (L24317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24317)

```diff
-         (0, vB.C)(BB, "float", "s", "sin(ang)")
+         (0, dt.y)(tt, "float", "s", "sin(ang)")
```

#### 2784. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24320` → after: `L24204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24204) · [Before (L24320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24320)

```diff
-         (0, vB.C)(BB, "float", "c", "cos(ang)")
+         (0, dt.y)(tt, "float", "c", "cos(ang)")
```

#### 2785. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24323` → after: `L24207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24207) · [Before (L24323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24323)

```diff
-         (0, vB.p)(BB, "mat2", "c", "s", "-s", "c")
+         (0, dt.l)(tt, "mat2", "c", "s", "-s", "c")
```

#### 2786. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24329-L24330` → after: `L24213-L24214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24213-L24214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24213-L24214) · [Before (L24329-L24330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24329-L24330)

```diff
-       let ZB = (0, vB.Hb)(BB, "skele" + (IB - 1));
-       for (let JB = IB - 2; JB >= 0; JB--) ZB = (0, vB.ub)(BB, `boneIdx == ${JB}`, (0, vB.Hb)(BB, `skele${JB}`), ZB);
+       let Vt = (0, dt.vb)(tt, "skele" + (et - 1));
+       for (let qt = et - 2; qt >= 0; qt--) Vt = (0, dt.kb)(tt, `boneIdx == ${qt}`, (0, dt.vb)(tt, `skele${qt}`), Vt);
```

#### 2787. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24332` → after: `L24216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24216) · [Before (L24332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24332)

```diff
-       return `\n\t\t\t\t${(0,vB.C)(BB,"int","boneIdx",(0,vB.Cb)(BB,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,vB.C)(BB,"vec3","bone",ZB)}\n\t\t\t\t${(0,vB.C)(BB,"vec2","pivot",(0,vB.p)(BB,"vec2","0.0",`${(0,vB.Pb)(BB,"position")}.z`))}\n\t\t\t\t${(0,vB.ab)(BB)?`posit … [truncated]
+       return `\n\t\t\t\t${(0,dt.y)(tt,"int","boneIdx",(0,dt.nb)(tt,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,dt.y)(tt,"vec3","bone",Vt)}\n\t\t\t\t${(0,dt.y)(tt,"vec2","pivot",(0,dt.l)(tt,"vec2","0.0",`${(0,dt.Ab)(tt,"position")}.z`))}\n\t\t\t\t${(0,dt.Y)(tt)?`positi … [truncated]
```

#### 2788. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24336` → after: `L24220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24220) · [Before (L24336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24336)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,vB.p)(BB,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,dt.l)(tt,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 2789. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24342` → after: `L24226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24226) · [Before (L24342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24342)

```diff
-         WZB(BB, IB) {
+         vVt(tt, et) {
```

#### 2790. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24351-L24353` → after: `L24235-L24237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24235-L24237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24235-L24237) · [Before (L24351-L24353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24351-L24353)

```diff
-           ...(0, TB.c)("CAPE"),
-           BLOXD_CAPE_BONES: `${BB}`,
-           BLOXD_CAPE_MAX_Y: (0, JB.nb)(IB)
+           ...(0, Ot.e)("CAPE"),
+           BLOXD_CAPE_BONES: `${tt}`,
+           BLOXD_CAPE_MAX_Y: (0, qt.gb)(et)
```

#### 2791. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24359` → after: `L24243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24243) · [Before (L24359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24359)

```diff
-               name: `skele${ZB}`,
+               name: `skele${Vt}`,
```

#### 2792. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24366` → after: `L24250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24250) · [Before (L24366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24366)

```diff
-           for (let IB = 0; IB < this.skeleLen; IB++) BB.updateVector3(`skele${IB}`, hB.WZB(this.skele, 3 * IB))
+           for (let et = 0; et < this.skeleLen; et++) tt.updateVector3(`skele${et}`, Qt.vVt(this.skele, 3 * et))
```

#### 2793. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24379` → after: `L24263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24263) · [Before (L24379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24379)

```diff
-     (0, GB.p)(zB)
+     (0, mt.k)(lt)
```

#### 2794. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24381` → after: `L24265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24265) · [Before (L24381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24381)

```diff
-   38726: (BB, IB, ZB) => {
+   38913: (tt, et, Vt) => {
```

#### 2795. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24383-L24384` → after: `L24267-L24268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24267-L24268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24267-L24268) · [Before (L24383-L24384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24383-L24384)

```diff
-       e: () => nB,
-       h: () => hB
+       d: () => Xt,
+       f: () => Qt
```

#### 2796. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24386-L24389` → after: `L24270-L24273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24270-L24273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24270-L24273) · [Before (L24386-L24389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24386-L24389)

```diff
-     var TB = ZB(37218),
-       JB = ZB(37490),
-       oB = ZB(37223),
-       GB = ZB(37239);
+     var Ot = Vt(37433),
+       qt = Vt(37692),
+       Dt = Vt(37435),
+       mt = Vt(37448);
```

#### 2797. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24404` → after: `L24288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24288) · [Before (L24404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24404)

```diff
-         defines: () => (0, TB.c)("TEXT_SAMPLER"),
+         defines: () => (0, Ot.e)("TEXT_SAMPLER"),
```

#### 2798. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24412` → after: `L24296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24296) · [Before (L24412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24412)

```diff
-           const ZB = (0, oB.J)(IB, `vec4 ${cB}(sampler2D s, vec2 uv, float bias)`, `fn ${cB}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
+           const Vt = (0, Dt.J)(et, `vec4 ${Ht}(sampler2D s, vec2 uv, float bias)`, `fn ${Ht}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
```

#### 2799. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24414-L24415` → after: `L24298-L24299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24298-L24299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24298-L24299) · [Before (L24414-L24415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24414-L24415)

```diff
-             JB = `${(0,oB.W)(IB,"vDiffuseUV")} + uvOffset`,
-             GB = (0, oB.J)(IB, `${cB}(diffuseSampler, ${JB}, ${(0,oB.Hb)(IB,vB)})`, `${cB}(diffuseSampler, diffuseSamplerSampler, ${JB}, ${(0,oB.Hb)(IB,vB)})`);
+             qt = `${(0,Dt.T)(et,"vDiffuseUV")} + uvOffset`,
+             mt = (0, Dt.J)(et, `${Ht}(diffuseSampler, ${qt}, ${(0,Dt.vb)(et,dt)})`, `${Ht}(diffuseSampler, diffuseSamplerSampler, ${qt}, ${(0,Dt.vb)(et,dt)})`);
```

#### 2800. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24417-L24418` → after: `L24301-L24302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24301-L24302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24301-L24302) · [Before (L24417-L24418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24417-L24418)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${ZB} {\n\t\t\t\t\t${(0,oB.C)(IB,"vec4","texel",TB)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,oB … [truncated]
-             [(0, oB.E)(IB)]: `baseColor = ${GB};`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${Vt} {\n\t\t\t\t\t${(0,Dt.y)(et,"vec4","texel",Ot)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Dt … [truncated]
+             [(0, Dt.C)(et)]: `baseColor = ${mt};`
```

#### 2801. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24422` → after: `L24306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24306) · [Before (L24422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24422)

```diff
-     (0, GB.p)(hB)
+     (0, mt.k)(Qt)
```

#### 2802. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24424` → after: `L24308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24308) · [Before (L24424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24424)

```diff
-   38786: (BB, IB, ZB) => {
+   38951: (tt, et, Vt) => {
```

#### 2803. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24426-L24428` → after: `L24310-L24312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24310-L24312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24310-L24312) · [Before (L24426-L24428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24426-L24428)

```diff
-       d: () => cB,
-       e: () => vB,
-       i: () => kB
+       b: () => Ht,
+       f: () => dt,
+       g: () => jt
```

#### 2804. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24430-L24431` → after: `L24314-L24315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24314-L24315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24314-L24315) · [Before (L24430-L24431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24430-L24431)

```diff
-     var TB = ZB(37495),
-       JB = ZB(37243);
+     var Ot = Vt(37694),
+       qt = Vt(37454);
```

#### 2805. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24445` → after: `L24329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24329) · [Before (L24445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24445)

```diff
-       if (!(0, TB.d)(BB)) return void BB.material.forceCompilation(BB, IB);
+       if (!(0, Ot.f)(tt)) return void tt.material.forceCompilation(tt, et);
```

#### 2806. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24447-L24448` → after: `L24331-L24332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24331-L24332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24331-L24332) · [Before (L24447-L24448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24447-L24448)

```diff
-         if (BB.mC()) return void oB.delete(BB);
-         const TB = (0, JB._)(BB.material);
+         if (tt.bC()) return void Dt.delete(tt);
+         const Ot = (0, qt.X)(tt.material);
```

#### 2807. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24455` → after: `L24339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24339) · [Before (L24455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24455)

```diff
-   38914: (BB, IB, ZB) => {
+   39065: (tt, et, Vt) => {
```

#### 2808. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24459-L24460` → after: `L24343-L24345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24343-L24345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24343-L24345) · [Before (L24459-L24460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24459-L24460)

```diff
-       c: () => LB,
-       g: () => rB,
+       C: () => Qe,
+       d: () => ot,
+       h: () => kt,
```

#### 2809. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24462` → after: `L24347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24347) · [Before (L24462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24462)

```diff
-       m: () => uB,
+       l: () => Ut,
```

#### 2810. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24466` → after: `L24350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24350) · [Before (L24466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24466)

```diff
-       u: () => eB,
+       t: () => qe,
```

#### 2811. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24470-L24499` → after: `L24354-L24383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24354-L24383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24354-L24383) · [Before (L24470-L24499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24470-L24499)

```diff
-     var TB = ZB(1248),
-       JB = ZB(1310),
-       oB = ZB(342),
-       GB = ZB(1116),
-       vB = ZB(4657),
-       kB = ZB(4680),
-       cB = ZB(2912),
-       nB = ZB(37336),
-       hB = ZB(37253),
-       zB = ZB(37956),
-       FB = ZB(37671),
-       NB = ZB(37535),
-       gB = ZB(37296),
-       qB = ZB(38919),
-       yB = ZB(37990),
-       UB = ZB(38721),
- ... (14 more removed lines; see GitHub link above)
+     var Ot = Vt(1286),
+       qt = Vt(1338),
+       Dt = Vt(377),
+       mt = Vt(1163),
+       dt = Vt(4610),
+       jt = Vt(4630),
+       Ht = Vt(2848),
+       Xt = Vt(37545),
+       Qt = Vt(37467),
+       lt = Vt(38157),
+       Et = Vt(37875),
+       ft = Vt(37738),
+       wt = Vt(37502),
+       yt = Vt(39068),
+       Nt = Vt(38184),
+       Mt = Vt(38906),
+ ... (14 more added lines; see GitHub link above)
```

#### 2812. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24515` → after: `L24399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24399) · [Before (L24515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24515)

```diff
-         text: BB => `bolder ${BB}px 'Jetbrains Mono'`
+         text: tt => `bolder ${tt}px 'Jetbrains Mono'`
```

#### 2813. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24519` → after: `L24403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24403) · [Before (L24519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24519)

```diff
-         icon: wB.d,
+         icon: ht.b,
```

#### 2814. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24534` → after: `L24418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24418) · [Before (L24534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24534)

```diff
-         if ((0, oB.Db)(BB)) return [{
+         if ((0, Dt.lb)(tt)) return [{
```

#### 2815. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24537-L24538` → after: `L24421-L24422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24421-L24422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24421-L24422) · [Before (L24537-L24538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24537-L24538)

```diff
-         if ((0, oB.Bb)(BB)) {
-           const ZB = (0, aB.e)(BB.action);
+         if ((0, Dt.ib)(tt)) {
+           const Vt = (0, Rt.c)(tt.action);
```

#### 2816. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24543` → after: `L24427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24427) · [Before (L24543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24543)

```diff
-               icon: (0, aB.h)(ZB),
+               icon: (0, Rt.e)(Vt),
```

#### 2817. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24545` → after: `L24429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24429) · [Before (L24545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24545)

```diff
-                 fontSize: null !== (GB = null === TB || void 0 === TB ? void 0 : TB.fontSize) && void 0 !== GB ? GB : `${IB}px`,
+                 fontSize: null !== (mt = null === Ot || void 0 === Ot ? void 0 : Ot.fontSize) && void 0 !== mt ? mt : `${et}px`,
```

#### 2818. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24550-L24553` → after: `L24434-L24437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24434-L24437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24434-L24437) · [Before (L24550-L24553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24550-L24553)

```diff
-           const TB = (0, iB.s)(BB.action, pB.d.get("isTouchScreen")),
-             JB = (0, iB.p)(BB.action);
-           null === TB && null === JB && console.warn(`No key binding found for action: ${BB.action}`), BB = {
-             str: null !== TB && void 0 !== TB ? TB : (0, iB.n)(JB),
+           const Ot = (0, St.p)(tt.action, ct.b.get("isTouchScreen")),
+             qt = (0, St.o)(tt.action);
+           null === Ot && null === qt && console.warn(`No key binding found for action: ${tt.action}`), tt = {
+             str: null !== Ot && void 0 !== Ot ? Ot : (0, St.k)(qt),
```

#### 2819. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24558` → after: `L24442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24442) · [Before (L24558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24558)

```diff
-         return vB = "string" !== typeof BB && "str" in BB ? BB : {
+         return dt = "string" !== typeof tt && "str" in tt ? tt : {
```

#### 2820. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24560-L24561` → after: `L24444-L24445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24444-L24445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24444-L24445) · [Before (L24560-L24561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24560-L24561)

```diff
-           }, null !== (ZB = vB.style) && void 0 !== ZB && ZB.fontSize ? vB.style.fontSize.endsWith("px") || console.warn(new Error("Canvas text font size should be in px").stack) : vB.style ? vB.style.fontSize = `${IB}px` : vB.style = {
-             fontSize: `${IB}px`
+           }, null !== (Vt = dt.style) && void 0 !== Vt && Vt.fontSize ? dt.style.fontSize.endsWith("px") || console.warn(new Error("Canvas text font size should be in px").stack) : dt.style ? dt.style.fontSize = `${et}px` : dt.style = {
+             fontSize: `${et}px`
```

#### 2821. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24565-L24567` → after: `L24449-L24451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24449-L24451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24449-L24451) · [Before (L24565-L24567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24565-L24567)

```diff
-             const IB = JB.h.get().getCurrentLanguageCode(),
-               ZB = (0, TB.s)(BB.str.params, sB.b.shown),
-               oB = (0, TB.y)(IB, BB.str.translationKey, ZB);
+             const et = qt.e.get().getCurrentLanguageCode(),
+               Vt = (0, Ot.p)(tt.str.params, Kt.d.shown),
+               Dt = (0, Ot.w)(et, tt.str.translationKey, Vt);
```

#### 2822. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24605` → after: `L24489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24489) · [Before (L24605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24605)

```diff
-       const TB = null !== (IB = fB(BB) ? null === (ZB = BB.style) || void 0 === ZB ? void 0 : ZB.fontSize : void 0) && void 0 !== IB ? IB : `${rB.DEFAULT_FONT_SIZE}px`;
+       const Ot = null !== (et = At(tt) ? null === (Vt = tt.style) || void 0 === Vt ? void 0 : Vt.fontSize : void 0) && void 0 !== et ? et : `${kt.DEFAULT_FONT_SIZE}px`;
```

#### 2823. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24610-L24611` → after: `L24494-L24495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24494-L24495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24494-L24495) · [Before (L24610-L24611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24610-L24611)

```diff
-       const IB = (0, GB.b)(BB, (0, GB.j)(BB));
-       return IB || console.warn(`Unknown rank icon "${BB}" \u2014 not in the bundled Font Awesome subset.`), IB
+       const et = (0, mt.d)(tt, (0, mt.l)(tt));
+       return et || console.warn(`Unknown rank icon "${tt}" \u2014 not in the bundled Font Awesome subset.`), et
```

#### 2824. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24622-L24624` → after: `L24506-L24508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24506-L24508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24506-L24508) · [Before (L24622-L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24622-L24624)

```diff
-         const IB = JB.h.get().getCurrentLanguageCode(),
-           ZB = (0, TB.s)(BB.str.params, sB.b.shown);
-         return (0, TB.C)(IB, BB.str.translationKey, ZB)
+         const et = qt.e.get().getCurrentLanguageCode(),
+           Vt = (0, Ot.p)(tt.str.params, Kt.d.shown);
+         return (0, Ot.A)(et, tt.str.translationKey, Vt)
```

#### 2825. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24626` → after: `L24510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24510) · [Before (L24626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24626)

```diff
-       return "entityName" in BB.str ? (0, QB.e)(BB.str.entityName, sB.b.shown) : ""
+       return "entityName" in tt.str ? (0, ut.f)(tt.str.entityName, Kt.d.shown) : ""
```

#### 2826. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24630` → after: `L24514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24514) · [Before (L24630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24630)

```diff
-       if ((0, CB.L)(BB) || 0 === BB.length) return {
+       if ((0, Ct.B)(tt) || 0 === tt.length) return {
```

#### 2827. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24707` → after: `L24591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24591) · [Before (L24707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24707)

```diff
-           const hB = (0, nB.g)(JB);
+           const Qt = (0, Xt.h)(qt);
```

#### 2828. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24710` → after: `L24594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24594) · [Before (L24710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24710)

```diff
-             FB = (0, aB.m)(BB.icon),
+             Et = (0, Rt.j)(tt.icon),
```

#### 2829. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24723` → after: `L24607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24607) · [Before (L24723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24723)

```diff
-           const gB = (0, HB.k)(BB.icon, TB);
+           const wt = (0, It.g)(tt.icon, Ot);
```

#### 2830. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24726` → after: `L24610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24610) · [Before (L24726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24726)

```diff
-               const IB = (0, aB.k)(BB);
+               const et = (0, Rt.f)(tt);
```

#### 2831. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24731-L24732` → after: `L24615-L24616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24615-L24616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24615-L24616) · [Before (L24731-L24732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24731-L24732)

```diff
-               if (vB.d.includes(BB)) return {
-                 url: YB.e.getTexture(BB, OB.m.ICON).url,
+               if (dt.e.includes(tt)) return {
+                 url: Wt.e.getTexture(tt, vt.k.ICON).url,
```

#### 2832. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24737-L24738` → after: `L24621-L24622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24621-L24622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24621-L24622) · [Before (L24737-L24738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24737-L24738)

```diff
-                 const IB = null === (ZB = cB.l.itemsClient[BB]) || void 0 === ZB ? void 0 : ZB.type;
-                 return vI.includes(IB) ? (console.error(new Error(`Invalid icon type ${IB} is not supported in nametags`).stack), {
+                 const et = null === (Vt = Ht.g.itemsClient[tt]) || void 0 === Vt ? void 0 : Vt.type;
+                 return je.includes(et) ? (console.error(new Error(`Invalid icon type ${et} is not supported in nametags`).stack), {
```

#### 2833. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24741` → after: `L24625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24625) · [Before (L24741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24741)

```diff
-                 }) : (0, MB.d)(IB) ? {
+                 }) : (0, Pt.b)(et) ? {
```

#### 2834. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24744-L24745` → after: `L24628-L24629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24628-L24629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24628-L24629) · [Before (L24744-L24745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24744-L24745)

```diff
-                 } : "GrayscaleArmour" === IB || kB.e[BB] ? {
-                   url: (0, jB.g)(BB),
+                 } : "GrayscaleArmour" === et || jt.b[tt] ? {
+                   url: (0, Zt.f)(tt),
```

#### 2835. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24747` → after: `L24631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24631) · [Before (L24747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24747)

```diff
-                   tint: (0, kB.g)(BB)
+                   tint: (0, jt.c)(tt)
```

#### 2836. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24749` → after: `L24633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24633) · [Before (L24749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24749)

```diff
-                   url: (0, jB.g)(BB),
+                   url: (0, Zt.f)(tt),
```

#### 2837. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24756` → after: `L24640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24640) · [Before (L24756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24756)

```diff
-           if ((0, MB.d)(null === (oB = cB.l.itemsClient[BB.icon]) || void 0 === oB ? void 0 : oB.type)) {
+           if ((0, Pt.b)(null === (Dt = Ht.g.itemsClient[tt.icon]) || void 0 === Dt ? void 0 : Dt.type)) {
```

#### 2838. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24758-L24759` → after: `L24642-L24643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24642-L24643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24642-L24643) · [Before (L24758-L24759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24758-L24759)

```diff
-             if (!cB.l.itemsClient[IB].itemTexture) return void(0, HB.h)(IB, TB).then((BB => {
-               NB(BB), (0, UB.g)(JB)
+             if (!Ht.g.itemsClient[et].itemTexture) return void(0, It.f)(et, Ot).then((tt => {
+               ft(tt), (0, Mt.k)(qt)
```

#### 2839. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24761` → after: `L24645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24645) · [Before (L24761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24761)

```diff
-             WB = (0, jB.g)(IB)
+             bt = (0, Zt.f)(et)
```

#### 2840. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24772` → after: `L24656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24656) · [Before (L24772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24772)

```diff
-               return GB.drawImage(BB, 0, 0), GB.globalCompositeOperation = "multiply", GB.fillStyle = `rgb(${ZB}, ${TB}, ${JB})`, GB.fillRect(0, 0, oB.width, oB.height), GB.globalCompositeOperation = "destination-in", GB.drawImage(BB, 0, 0), oB
+               return mt.drawImage(tt, 0, 0), mt.globalCompositeOperation = "multiply", mt.fillStyle = `rgb(${Vt}, ${Ot}, ${qt})`, mt.fillRect(0, 0, Dt.width, Dt.height), mt.globalCompositeOperation = "destination-in", mt.drawImage(tt, 0, 0), Dt
```

#### 2841. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24774` → after: `L24658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24658) · [Before (L24774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24774)

```diff
-             RB[BB.icon] = IB, NB(IB), (0, UB.g)(JB)
+             Ft[tt.icon] = et, ft(et), (0, Mt.k)(qt)
```

#### 2842. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24777` → after: `L24661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24661) · [Before (L24777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24777)

```diff
-             NB(dB), (0, UB.g)(JB)
+             ft(Jt), (0, Mt.k)(qt)
```

#### 2843. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24781` → after: `L24665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24665) · [Before (L24781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24781)

```diff
-       const FB = (0, nB.g)(JB);
+       const Et = (0, Xt.h)(qt);
```

#### 2844. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24783` → after: `L24667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24667) · [Before (L24783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24783)

```diff
-         const JB = null !== GB && void 0 !== GB ? GB : KB(BB, FB);
+         const qt = null !== mt && void 0 !== mt ? mt : st(tt, Et);
```

#### 2845. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24792` → after: `L24676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24676) · [Before (L24792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24792)

```diff
-             NB = "string" === typeof FB ? FB : FB.join(" "),
+             ft = "string" === typeof Et ? Et : Et.join(" "),
```

#### 2846. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24807-L24808` → after: `L24691-L24692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24691-L24692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24691-L24692) · [Before (L24807-L24808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24807-L24808)

```diff
-       const qB = null !== GB && void 0 !== GB ? GB : KB(BB, FB),
-         yB = fB(BB) && null !== (hB = (0, oB.gc)(BB.style)) && void 0 !== hB ? hB : "white";
+       const yt = null !== mt && void 0 !== mt ? mt : st(tt, Et),
+         Nt = At(tt) && null !== (Qt = (0, Dt.Ib)(tt.style)) && void 0 !== Qt ? Qt : "white";
```

#### 2847. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24831` → after: `L24715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24715) · [Before (L24831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24831)

```diff
-         const TB = null !== (IB = null === (ZB = BB.style) || void 0 === ZB ? void 0 : ZB.fontSize) && void 0 !== IB ? IB : `${rB.DEFAULT_FONT_SIZE}px`;
+         const Ot = null !== (et = null === (Vt = tt.style) || void 0 === Vt ? void 0 : Vt.fontSize) && void 0 !== et ? et : `${kt.DEFAULT_FONT_SIZE}px`;
```

#### 2848. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24841-L24844` → after: `L24725-L24728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24725-L24728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24725-L24728) · [Before (L24841-L24844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24841-L24844)

```diff
-       const GB = BB.Ig.JR(),
-         vB = (0, UB.d)(BB, `${ZB}Tex`, TB, JB, {
-           mipped: hB.j.nearestLinearMipLinear,
-           unmipped: hB.j.nearestLinearMipNearest
+       const mt = tt.Bf.vI(),
+         dt = (0, Mt.f)(tt, `${Vt}Tex`, Ot, qt, {
+           mipped: Qt.k.nearestLinearMipLinear,
+           unmipped: Qt.k.nearestLinearMipNearest
```

#### 2849. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24846` → after: `L24730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24730) · [Before (L24846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24846)

```diff
-         kB = (0, zB.n)(BB.Ig, ZB, (0, FB.f)({
+         jt = (0, lt.q)(tt.Bf, Vt, (0, Et.j)({
```

#### 2850. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24850-L24851` → after: `L24734-L24735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24734-L24735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24734-L24735) · [Before (L24850-L24851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24850-L24851)

```diff
-       kB.metadata = new BB.Ig.bg, kB.metadata[NB.x] = !0, kB.billboardMode = gB.d.BILLBOARDMODE_ALL, kB.renderingGroupId = qB.d;
-       const cB = BB.zW.add([0, 0, 0], 1, 1, kB, [0, 0, 0]);
+       jt.metadata = new tt.Bf.zw, jt.metadata[ft.z] = !0, jt.billboardMode = wt.e.BILLBOARDMODE_ALL, jt.renderingGroupId = yt.c;
+       const Ht = tt.mJ.add([0, 0, 0], 1, 1, jt, [0, 0, 0]);
```

#### 2851. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24853-L24854` → after: `L24737-L24738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24737-L24738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24737-L24738) · [Before (L24853-L24854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24853-L24854)

```diff
-       BB.zW.xR(cB, BB.zW.names.nC, {
-         zN: IB
+       tt.mJ.RZ(Ht, tt.mJ.names.GJ, {
+         nE: et
```

#### 2852. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24859-L24860` → after: `L24743-L24744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24743-L24744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24743-L24744) · [Before (L24859-L24860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24859-L24860)

```diff
-         name: `${ZB}Mat`,
-         lg: GB,
+         name: `${Vt}Mat`,
+         Fw: mt,
```

#### 2853. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24865` → after: `L24749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24749) · [Before (L24865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24865)

```diff
-           ...(0, UB.f)(vB)
+           ...(0, Mt.h)(dt)
```

#### 2854. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24868` → after: `L24752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24752) · [Before (L24868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24868)

```diff
-           (0, UB.b)(IB, "planes"), nB = (0, dB.c)(IB, BB.Ig, oB ? {
+           (0, Mt.b)(et, "planes"), Xt = (0, Jt.d)(et, tt.Bf, Dt ? {
```

#### 2855. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24878` → after: `L24762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24762) · [Before (L24878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24878)

```diff
-       return kB.material = CB, oB ? BB.zW.RIB(cB).ITB = !1 : (0, yB.g)(kB), kB.oR.add((() => {
+       return jt.material = Ct, Dt ? tt.mJ.oet(Ht).dOt = !1 : (0, Nt.f)(jt), jt.ZI.add((() => {
```

#### 2856. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24891-L24892` → after: `L24775-L24776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24775-L24776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24775-L24776) · [Before (L24891-L24892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24891-L24892)

```diff
-       const JB = (0, qB.p)(IB, ZB, TB);
-       return BB.renderingGroupId = JB ? qB.d : qB.k, JB
+       const qt = (0, yt.o)(et, Vt, Ot);
+       return tt.renderingGroupId = qt ? yt.c : yt.h, qt
```

#### 2857. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24895` → after: `L24779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24779) · [Before (L24895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24895)

```diff
-   38721: (BB, IB, ZB) => {
+   38906: (tt, et, Vt) => {
```

#### 2858. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24900` → after: `L24783-L24784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24783-L24784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24783-L24784) · [Before (L24900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24900)

```diff
-       g: () => vB
+       h: () => jt,
+       k: () => dt
```

#### 2859. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24902-L24904` → after: `L24786-L24788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24786-L24788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24786-L24788) · [Before (L24902-L24904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24902-L24904)

```diff
-     var TB = ZB(37336),
-       JB = ZB(37243),
-       oB = ZB(38726);
+     var Ot = Vt(37545),
+       qt = Vt(37454),
+       Dt = Vt(38913);
```

#### 2860. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24908` → after: `L24792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24792) · [Before (L24908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24908)

```diff
-           return !BB.Ig.engine.needPOTTextures
+           return !tt.Bf.engine.needPOTTextures
```

#### 2861. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24911` → after: `L24795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24795) · [Before (L24911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24911)

```diff
-       return (0, TB.k)(BB.Ig.JR(), IB, {
+       return (0, Ot.i)(tt.Bf.vI(), et, {
```

#### 2862. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24921` → after: `L24805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24805) · [Before (L24921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24921)

```diff
-       (0, TB.T)(BB, !0, !BB.sampler.noMipmap)
+       (0, Ot.S)(tt, !0, !tt.sampler.noMipmap)
```

#### 2863. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24928` → after: `L24812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24812) · [Before (L24928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24928)

```diff
-         transparencyMode: JB.o.alphaTestAndBlend,
+         transparencyMode: qt.n.alphaTestAndBlend,
```

#### 2864. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24930` → after: `L24814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24814) · [Before (L24930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24930)

```diff
-         alphaMode: JB.e.premultiplied,
+         alphaMode: qt.c.premultiplied,
```

#### 2865. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24936-L24937` → after: `L24820-L24821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24820-L24821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24820-L24821) · [Before (L24936-L24937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24936-L24937)

```diff
-       BB.diffuseTexture.sampler.noMipmap || (0, JB.r)(BB, oB.h, {
-         lodBias: oB.e[IB]
+       tt.diffuseTexture.sampler.noMipmap || (0, qt.p)(tt, Dt.f, {
+         lodBias: Dt.d[et]
```

#### 2866. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24941` → after: `L24825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24825) · [Before (L24941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24941)

```diff
-   39281: (BB, IB, ZB) => {
+   39419: (tt, et, Vt) => {
```

#### 2867. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24948-L24952` → after: `L24832-L24836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24832-L24836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24832-L24836) · [Before (L24948-L24952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24948-L24952)

```diff
-     var TB = ZB(105),
-       JB = ZB(36),
-       oB = (ZB(3649), ZB(5204), ZB(3640)),
-       GB = ZB(6808);
-     ZB(6778);
+     var Ot = Vt(106),
+       qt = Vt(39),
+       Dt = (Vt(3533), Vt(5216), Vt(3524)),
+       mt = Vt(6873);
+     Vt(6830);
```

#### 2868. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24963` → after: `L24847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24847) · [Before (L24963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24963)

```diff
-             BB && JB.m.removeItem(oB.e)
+             tt && qt.e.removeItem(Dt.e)
```

#### 2869. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24991` → after: `L24875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24875) · [Before (L24991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L24991)

```diff
-         return this.compiling ??= Promise.all([ZB.e(78), ZB.e(136), ZB.e(142)]).then((() => ZB(41763))).then((BB => (BB.prefetchCompiler(), BB))), this.compiling
+         return this.compiling ??= Promise.all([Vt.e(78), Vt.e(136), Vt.e(142)]).then((() => Vt(42006))).then((tt => (tt.prefetchCompiler(), tt))), this.compiling
```

#### 2870. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25005` → after: `L24889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24889) · [Before (L25005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25005)

```diff
-       if (!(0, oB.j)(TB.featureFlags.settings.canUseShaderPacks)) return null;
+       if (!(0, Dt.m)(Ot.featureFlags.settings.canUseShaderPacks)) return null;
```

#### 2871. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25007-L25008` → after: `L24891-L24892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24891-L24892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24891-L24892) · [Before (L25007-L25008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25007-L25008)

```diff
-         const BB = await (0, GB.i)(!0);
-         return BB || JB.m.setItem(oB.e, !1), BB
+         const tt = await (0, mt.g)(!0);
+         return tt || qt.e.setItem(Dt.e, !1), tt
```

#### 2872. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25010` → after: `L24894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24894) · [Before (L25010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25010)

```diff
-         return console.error("Failed to read the stored shader pack", BB), JB.m.removeItem(oB.e), null
+         return console.error("Failed to read the stored shader pack", tt), qt.e.removeItem(Dt.e), null
```

#### 2873. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25021` → after: `L24905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24905) · [Before (L25021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25021)

```diff
-   39328: (BB, IB, ZB) => {
+   39456: (tt, et, Vt) => {
```

#### 2874. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25023-L25024` → after: `L24907-L24908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24907-L24908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24907-L24908) · [Before (L25023-L25024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25023-L25024)

```diff
-       e: () => hB,
-       g: () => zB
+       c: () => Qt,
+       e: () => lt
```

#### 2875. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25026-L25033` → after: `L24910-L24917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24910-L24917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24910-L24917) · [Before (L25026-L25033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25026-L25033)

```diff
-     var TB = ZB(168),
-       JB = ZB(192),
-       oB = ZB(1556),
-       GB = ZB(3101),
-       vB = ZB(1561),
-       kB = ZB(36492),
-       cB = ZB(696),
-       nB = ZB(39281);
+     var Ot = Vt(184),
+       qt = Vt(217),
+       Dt = Vt(1592),
+       mt = Vt(3012),
+       dt = Vt(1600),
+       jt = Vt(36709),
+       Ht = Vt(738),
+       Xt = Vt(39419);
```

#### 2876. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25036` → after: `L24920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24920) · [Before (L25036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25036)

```diff
-       (0, GB.reportClientError)("matchmake_failed", BB, TB.l[TB.l.SHADER_PACK])
+       (0, mt.reportClientError)("matchmake_failed", tt, Ot.n[Ot.n.SHADER_PACK])
```

#### 2877. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25041-L25042` → after: `L24925-L24926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24925-L24926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24925-L24926) · [Before (L25041-L25042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25041-L25042)

```diff
-         GB = (0, kB.c)();
-       TB && null !== GB && await vB.c.reportShaderPackSession(BB, {
+         mt = (0, jt.b)();
+       Ot && null !== mt && await dt.e.reportShaderPackSession(tt, {
```

#### 2878. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25045` → after: `L24929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24929) · [Before (L25045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25045)

```diff
-         game: (0, oB.g)(IB, JB.r, "other"),
+         game: (0, Dt.e)(et, qt.y, "other"),
```

#### 2879. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25047` → after: `L24931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24931) · [Before (L25047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25047)

```diff
-         visitSessionId: (0, cB.i)()
+         visitSessionId: (0, Ht.e)()
```

#### 2880. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25051` → after: `L24935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24935) · [Before (L25051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25051)

```diff
-   6778: (BB, IB, ZB) => {
+   6830: (tt, et, Vt) => {
```

#### 2881. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25056` → after: `L24940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24940) · [Before (L25056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25056)

```diff
-     var TB = ZB(5210);
+     var Ot = Vt(5223);
```

#### 2882. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25061` → after: `L24945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24945) · [Before (L25061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25061)

```diff
-       return oB ??= Promise.all([ZB.e(73), ZB.e(190)]).then((() => ZB(40534))).then((BB => {
+       return Dt ??= Promise.all([Vt.e(73), Vt.e(190)]).then((() => Vt(40674))).then((tt => {
```

#### 2883. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25067` → after: `L24951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24951) · [Before (L25067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25067)

```diff
-         return JB ??= (0, TB.l)(ZB, oB, IB), JB
+         return qt ??= (0, Ot.m)(Vt, Dt, et), qt
```

#### 2884. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25076` → after: `L24960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24960) · [Before (L25076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25076)

```diff
-   34095: (BB, IB, ZB) => {
+   34305: (tt, et, Vt) => {
```

#### 2885. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25084` → after: `L24968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24968) · [Before (L25084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25084)

```diff
-   39310: (BB, IB, ZB) => {
+   39446: (tt, et, Vt) => {
```

#### 2886. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25086` → after: `L24970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24970) · [Before (L25086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25086)

```diff
-       b: () => JB
+       e: () => qt
```

#### 2887. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25097` → after: `L24981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24981) · [Before (L25097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25097)

```diff
-           }] = await Promise.all([Promise.resolve().then((() => ZB(1805))), Promise.resolve().then((() => ZB(1403)))]);
+           }] = await Promise.all([Promise.resolve().then((() => Vt(1826))), Promise.resolve().then((() => Vt(1450)))]);
```

#### 2888. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25113` → after: `L24997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24997) · [Before (L25113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25113)

```diff
-   39683: (BB, IB, ZB) => {
+   39832: (tt, et, Vt) => {
```

#### 2889. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25115-L25116` → after: `L24999-L25000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24999-L25000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L24999-L25000) · [Before (L25115-L25116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25115-L25116)

```diff
-       e: () => TB,
-       g: () => oB,
+       d: () => Ot,
+       h: () => Dt,
```

#### 2890. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25151` → after: `L25035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L25035) · [Before (L25151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25151)

```diff
-   39668: (BB, IB, ZB) => {
+   39814: (tt, et, Vt) => {
```

#### 2891. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25155` → after: `L25039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L25039) · [Before (L25155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25155)

```diff
-     var TB = ZB(1956);
+     var Ot = Vt(1993);
```

#### 2892. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25158` → after: `L25042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L25042) · [Before (L25158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25158)

```diff
-       return (0, TB.p)(BB, IB) < ZB
+       return (0, Ot.o)(tt, et) < Vt
```

#### 2893. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25161` → after: `L25045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L25045) · [Before (L25161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25161)

```diff
-   37048: (BB, IB, ZB) => {
+   37263: (tt, et, Vt) => {
```

#### 2894. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25163` → after: `L25047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L25047) · [Before (L25163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25163)

```diff
-       c: () => TB.f
+       c: () => Ot.h
```

#### 2895. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25165` → after: `L25049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L25049) · [Before (L25165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25165)

```diff
-     var TB = ZB(9296)
+     var Ot = Vt(9425)
```

#### 2896. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25167` → after: `L25051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L25051) · [Before (L25167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25167)

```diff
-   37052: (BB, IB, ZB) => {
+   37268: (tt, et, Vt) => {
```

#### 2897. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25169` → after: `L25053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L25053) · [Before (L25169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25169)

```diff
-       b: () => TB.k
+       b: () => Ot.o
```

#### 2898. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25171` → after: `L25055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L25055) · [Before (L25171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25171)

```diff
-     var TB = ZB(37060)
+     var Ot = Vt(37273)
```

#### 2899. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25173` → after: `L25057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L25057) · [Before (L25173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25173)

```diff
-   37042: (BB, IB, ZB) => {
+   37254: (tt, et, Vt) => {
```

#### 2900. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25177` → after: `L25061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L25061) · [Before (L25177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25177)

```diff
-     const TB = [() => ZB(37048).c, () => ZB(37052).b, () => ZB(36542).b, () => ZB(37101).h, () => ZB(37685).getCaughtUpMeshRotation, () => ZB(37713).tickMovementPrePhysics, () => ZB(37749).b, () => [ZB(37809).tickMovementInputsPrePhysics, ZB(37840).A, ZB(38075).b, ZB(38094).d], ( … [truncated]
+     const Ot = [() => Vt(37263).c, () => Vt(37268).b, () => Vt(36765).c, () => Vt(37314).g, () => Vt(37891).getCaughtUpMeshRotation, () => Vt(37928).tickMovementPrePhysics, () => Vt(37951).d, () => [Vt(37992).tickMovementInputsPrePhysics, Vt(38040).A, Vt(38268).d, Vt(38281).c], ( … [truncated]
```

#### 2901. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25180` → after: `L25064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L25064) · [Before (L25180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25180)

```diff
-       return await BB(), ZB(39664)
+       return await tt(), Vt(39811)
```

#### 2902. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25183` → after: `L25067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/94.js#L25067) · [Before (L25183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/94.js#L25183)

```diff
-   38816: (BB, IB, ZB) => {
+   38985: (tt, et, Vt) => {
```
