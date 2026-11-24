# Changed — Bundle Modifications Report (Part 101 / 141)

- **Updated at**: `2026-11-25T05:21 JST`
- **Part**: `101 / 141` (**419** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 100](part-100.md) · [Part 102 →](part-102.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9 · continued)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (3953 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 1459. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11075` → after: `L11239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11239) · [Before (L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11075)

```diff
-       return mT.toString() === UT.VV.toString() ? QL(function(TT, UT) {
+       return zB.toString() === jB.zV.toString() ? Xr(function(BB, jB) {
```

#### 1460. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11077-L11081` → after: `L11241-L11245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11241-L11245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11241-L11245) · [Before (L11077-L11081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11077-L11081)

```diff
-         const nT = TT.pY.wUT(UT),
-           HT = TT.pY.AUT(UT),
-           kT = TT.pY.LmT(UT),
-           jT = TT.pY.getState(UT, "movement"),
-           lT = (0, Nl.o)(TT.bloxd.getResolvedPhysicsSettings(UT, jT.physicsState), jT.steeringHeading, rk.d.getPlayerFacingHeading(TT));
+         const NB = BB.vG.JjB(jB),
+           uB = BB.vG.XjB(jB),
+           UB = BB.vG.RjB(jB),
+           aB = BB.vG.getState(jB, "movement"),
+           pB = (0, Cp.t)(BB.bloxd.getResolvedPhysicsSettings(jB, aB.physicsState), aB.steeringHeading, lU.b.getPlayerFacingHeading(BB));
```

#### 1461. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11084-L11085` → after: `L11248-L11249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11248-L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11248-L11249) · [Before (L11084-L11085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11084-L11085)

```diff
-           name: null !== (mT = TT.bloxd.getRawEntityName(UT)) && void 0 !== mT ? mT : "",
-           position: tL(TT.pY.Aq(UT)),
+           name: null !== (zB = BB.bloxd.getRawEntityName(jB)) && void 0 !== zB ? zB : "",
+           position: Dr(BB.vG.iG(jB)),
```

#### 1462. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11088` → after: `L11252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11252) · [Before (L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11088)

```diff
-           followingEId: null !== (WT = null !== (zT = null === kT || void 0 === kT ? void 0 : kT.UB) && void 0 !== zT ? zT : null === nT || void 0 === nT ? void 0 : nT.followingEId) && void 0 !== WT ? WT : null,
+           followingEId: null !== (QB = null !== (nB = null === UB || void 0 === UB ? void 0 : UB.SJ) && void 0 !== nB ? nB : null === NB || void 0 === NB ? void 0 : NB.followingEId) && void 0 !== QB ? QB : null,
```

#### 1463. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11090` → after: `L11254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11254) · [Before (L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11090)

```diff
-           shouldMatchFollowingEntityRotation: null === (MT = null === kT || void 0 === kT ? void 0 : kT.pmT) || void 0 === MT || MT,
+           shouldMatchFollowingEntityRotation: null === (dB = null === UB || void 0 === UB ? void 0 : UB.OjB) || void 0 === dB || dB,
```

#### 1464. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11092` → after: `L11256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11256) · [Before (L11092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11092)

```diff
-           sV: IL(null === (gT = TT.sV[TT.VV]) || void 0 === gT ? void 0 : gT[UT]),
+           RY: hr(null === (IB = BB.RY[BB.zV]) || void 0 === IB ? void 0 : IB[jB]),
```

#### 1465. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11098-L11099` → after: `L11262-L11263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11262-L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11262-L11263) · [Before (L11098-L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11098-L11099)

```diff
-         const mT = TT.pY.LmT(UT);
-         return (null === mT || void 0 === mT ? void 0 : mT.UB) === TT.VV
+         const zB = BB.vG.RjB(jB);
+         return (null === zB || void 0 === zB ? void 0 : zB.SJ) === BB.zV
```

#### 1466. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11103-L11105` → after: `L11267-L11269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11267-L11269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11267-L11269) · [Before (L11103-L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11103-L11105)

```diff
-           lT = UT.pY.wUT(mT),
-           LT = UT.pY.AUT(mT),
-           pT = UT.pY.LmT(mT),
+           pB = jB.vG.JjB(zB),
+           rB = jB.vG.XjB(zB),
+           sB = jB.vG.RjB(zB),
```

#### 1467. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11108` → after: `L11272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11272) · [Before (L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11108)

```diff
-         if (null !== pT && void 0 !== pT && pT.pmT) {
+         if (null !== sB && void 0 !== sB && sB.OjB) {
```

#### 1468. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11110-L11112` → after: `L11274-L11276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11274-L11276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11274-L11276) · [Before (L11110-L11112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11110-L11112)

```diff
-           const TT = UT.pY.gUT(UT.VV),
-             mT = (0, Nl.o)(UT.bloxd.getResolvedPhysicsSettings(UT.VV, TT.physicsState), TT.steeringHeading, rk.d.getPlayerFacingHeading(UT));
-           ZT = [null !== (cT = null !== (vT = null === BT || void 0 === BT || null === (fT = BT.serverSetRotation) || void 0 === fT ? void 0 : fT[0]) && void 0 !== vT ? vT : jT.xRotation) && void 0 !== cT ? cT : 0, mT, null !== (qT = null !== (iT = null === BT || void 0 === BT || … [truncated]
+           const BB = jB.vG.CBB(jB.zV),
+             zB = (0, Cp.t)(jB.bloxd.getResolvedPhysicsSettings(jB.zV, BB.physicsState), BB.steeringHeading, lU.b.getPlayerFacingHeading(jB));
+           mB = [null !== (yB = null !== (kB = null === JB || void 0 === JB || null === (GB = JB.serverSetRotation) || void 0 === GB ? void 0 : GB[0]) && void 0 !== kB ? kB : aB.xRotation) && void 0 !== yB ? yB : 0, zB, null !== (LB = null !== (gB = null === JB || void 0 === JB || … [truncated]
```

#### 1469. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11116` → after: `L11280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11280) · [Before (L11116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11116)

```diff
-           ZT = [0, null !== (OT = null !== (eT = lT.heading) && void 0 !== eT ? eT : jT.yRotation) && void 0 !== OT ? OT : 0, 0]
+           mB = [0, null !== (SB = null !== (MB = pB.heading) && void 0 !== MB ? MB : aB.yRotation) && void 0 !== SB ? SB : 0, 0]
```

#### 1470. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11119-L11121` → after: `L11283-L11285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11283-L11285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11283-L11285) · [Before (L11119-L11121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11119-L11121)

```diff
-           type: null !== (WT = null !== (zT = jT.type) && void 0 !== zT ? zT : TT.getEntityType(mT)) && void 0 !== WT ? WT : "Player",
-           name: null !== (MT = null !== (gT = jT.name) && void 0 !== gT ? gT : UT.bloxd.getRawEntityName(mT)) && void 0 !== MT ? MT : "",
-           position: tL(UT.pY.Aq(mT)),
+           type: null !== (QB = null !== (nB = aB.type) && void 0 !== nB ? nB : BB.getEntityType(zB)) && void 0 !== QB ? QB : "Player",
+           name: null !== (dB = null !== (IB = aB.name) && void 0 !== IB ? IB : jB.bloxd.getRawEntityName(zB)) && void 0 !== dB ? dB : "",
+           position: Dr(jB.vG.iG(zB)),
```

#### 1471. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11124` → after: `L11288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11288) · [Before (L11124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11124)

```diff
-           followingEId: null !== (nT = null === pT || void 0 === pT ? void 0 : pT.UB) && void 0 !== nT ? nT : null,
+           followingEId: null !== (NB = null === sB || void 0 === sB ? void 0 : sB.SJ) && void 0 !== NB ? NB : null,
```

#### 1472. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11126` → after: `L11290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11290) · [Before (L11126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11126)

```diff
-           shouldMatchFollowingEntityRotation: null === (HT = null === pT || void 0 === pT ? void 0 : pT.pmT) || void 0 === HT || HT,
+           shouldMatchFollowingEntityRotation: null === (uB = null === sB || void 0 === sB ? void 0 : sB.OjB) || void 0 === uB || uB,
```

#### 1473. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11128` → after: `L11292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11292) · [Before (L11128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11128)

```diff
-           sV: IL(null === (kT = UT.sV[UT.VV]) || void 0 === kT ? void 0 : kT[mT]),
+           RY: hr(null === (UB = jB.RY[jB.zV]) || void 0 === UB ? void 0 : UB[zB]),
```

#### 1474. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11139-L11140` → after: `L11303-L11304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11303-L11304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11303-L11304) · [Before (L11139-L11140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11139-L11140)

```diff
-             type: null !== (WT = null !== (zT = jT.type) && void 0 !== zT ? zT : TT.getEntityType(mT)) && void 0 !== WT ? WT : "Player",
-             name: null !== (MT = jT.name) && void 0 !== MT ? MT : "",
+             type: null !== (QB = null !== (nB = aB.type) && void 0 !== nB ? nB : BB.getEntityType(zB)) && void 0 !== QB ? QB : "Player",
+             name: null !== (dB = aB.name) && void 0 !== dB ? dB : "",
```

#### 1475. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11143-L11144` → after: `L11307-L11308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11307-L11308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11307-L11308) · [Before (L11143-L11144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11143-L11144)

```diff
-             scale: null !== (gT = jT.scale) && void 0 !== gT ? gT : 1,
-             followingEId: null !== (nT = jT.followingEId) && void 0 !== nT ? nT : null,
+             scale: null !== (IB = aB.scale) && void 0 !== IB ? IB : 1,
+             followingEId: null !== (NB = aB.followingEId) && void 0 !== NB ? NB : null,
```

#### 1476. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11148` → after: `L11312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11312) · [Before (L11148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11148)

```diff
-             sV: IL(null === (kT = UT.sV[UT.VV]) || void 0 === kT ? void 0 : kT[mT]),
+             RY: hr(null === (UB = jB.RY[jB.zV]) || void 0 === UB ? void 0 : UB[zB]),
```

#### 1477. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11157` → after: `L11321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11321) · [Before (L11157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11157)

```diff
-       return JSON.parse(JSON.stringify(null !== TT && void 0 !== TT ? TT : {}))
+       return JSON.parse(JSON.stringify(null !== BB && void 0 !== BB ? BB : {}))
```

#### 1478. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11166` → after: `L11330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11330) · [Before (L11166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11166)

```diff
-         return TT.pY.aUT(TT.VV)
+         return BB.vG.yjB(BB.zV)
```

#### 1479. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11177` → after: `L11341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11341) · [Before (L11177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11177)

```diff
-         name: null !== (WT = Jl.n[zT.name]) && void 0 !== WT && WT.keepMetaInChest ? zT.name : TT.bloxd.getMetaInfo(zT.name).rootName,
+         name: null !== (QB = qp.k[nB.name]) && void 0 !== QB && QB.keepMetaInChest ? nB.name : BB.bloxd.getMetaInfo(nB.name).rootName,
```

#### 1480. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11189` → after: `L11353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11353) · [Before (L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11189)

```diff
-       return (0, nT.Qc)(WT) || (mT.slots = WT), mT
+       return (0, NB.Ac)(QB) || (zB.slots = QB), zB
```

#### 1481. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11193` → after: `L11357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11357) · [Before (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11193)

```diff
-       return !!TT && (void 0 !== TT.selectedSlotIndex || void 0 !== TT.slots && !(0, nT.Qc)(TT.slots))
+       return !!BB && (void 0 !== BB.selectedSlotIndex || void 0 !== BB.slots && !(0, NB.Ac)(BB.slots))
```

#### 1482. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11221` → after: `L11385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11385) · [Before (L11221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11221)

```diff
-         selectedSlotIndex: null !== (mT = UT.selectedSlotIndex) && void 0 !== mT ? mT : TT.selectedSlotIndex,
+         selectedSlotIndex: null !== (zB = jB.selectedSlotIndex) && void 0 !== zB ? zB : BB.selectedSlotIndex,
```

#### 1483. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11232` → after: `L11396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11396) · [Before (L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11232)

```diff
-           if (zT) mT.setItemSlot(TT, zT.name, null !== (WT = zT.amount) && void 0 !== WT ? WT : 0, CL(zT.attributes));
+           if (nB) zB.setItemSlot(BB, nB.name, null !== (QB = nB.amount) && void 0 !== QB ? QB : 0, er(nB.attributes));
```

#### 1484. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11235` → after: `L11399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11399) · [Before (L11235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11235)

```diff
-         mT.getSelectedSlotIndex() !== UT.selectedSlotIndex && (mT.setSelectedSlotIndex(UT.selectedSlotIndex), cT.j.EZ("setSelectedInventorySlotI", UT.selectedSlotIndex))
+         zB.getSelectedSlotIndex() !== jB.selectedSlotIndex && (zB.setSelectedSlotIndex(jB.selectedSlotIndex), yB.n.Ly("setSelectedInventorySlotI", jB.selectedSlotIndex))
```

#### 1485. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11241` → after: `L11405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11405) · [Before (L11241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11241)

```diff
-       for (const mT of TT) UT[mT] = gH.d.get(mT);
+       for (const zB of BB) jB[zB] = Nu.c.get(zB);
```

#### 1486. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11248` → after: `L11412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11412) · [Before (L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11248)

```diff
-       Object.keys(mT).length > 0 && gH.d.apply(mT)
+       Object.keys(zB).length > 0 && Nu.c.apply(zB)
```

#### 1487. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11252` → after: `L11416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11416) · [Before (L11252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11252)

```diff
-       oL(bL.p, TT)
+       Rr(Sr.t, BB)
```

#### 1488. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11254` → after: `L11418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11418) · [Before (L11254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11254)

```diff
-     var RL = mT(37070);
+     var Bs = zB(37046);
```

#### 1489. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11279` → after: `L11443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11443) · [Before (L11279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11279)

```diff
-         WT[MT] = mp(TT[MT], null !== (zT = UT[MT]) && void 0 !== zT ? zT : null, mT, {
+         QB[dB] = ns(BB[dB], null !== (nB = jB[dB]) && void 0 !== nB ? nB : null, zB, {
```

#### 1490. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11290` → after: `L11454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11454) · [Before (L11290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11290)

```diff
-       let WT = Hp(TT.ticks[mT]);
+       let QB = as(BB.ticks[zB]);
```

#### 1491. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11318` → after: `L11482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11482) · [Before (L11318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11318)

```diff
-         mT[zT] = gp(null !== (WT = TT[zT]) && void 0 !== WT ? WT : null, UT[zT])
+         zB[nB] = us(null !== (QB = BB[nB]) && void 0 !== QB ? QB : null, jB[nB])
```

#### 1492. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11323` → after: `L11487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11487) · [Before (L11323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11323)

```diff
-     function Hp(TT) {
+     function as(BB) {
```

#### 1493. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11332` → after: `L11496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11496) · [Before (L11332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11332)

```diff
-         effects: null !== (UT = TT.effects) && void 0 !== UT ? UT : {}
+         effects: null !== (jB = BB.effects) && void 0 !== jB ? jB : {}
```

#### 1494. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11345` → after: `L11509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11509) · [Before (L11345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11345)

```diff
-         effects: null !== (mT = UT.effects) && void 0 !== mT ? mT : TT.effects
+         effects: null !== (zB = jB.effects) && void 0 !== zB ? zB : BB.effects
```

#### 1495. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11365-L11367` → after: `L11529-L11531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11529-L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11529-L11531) · [Before (L11365-L11367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11365-L11367)

```diff
-       if (rk.d.isCameraDetachedFromPlayer(TT)) return !1;
-       const UT = TT.pY.getState(TT.VV, "cameraShake").frontFacing;
-       return 0 === TT.camera.hN && !UT
+       if (lU.b.isCameraDetachedFromPlayer(BB)) return !1;
+       const jB = BB.vG.getState(BB.zV, "cameraShake").frontFacing;
+       return 0 === BB.camera.Xw && !jB
```

#### 1496. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11372` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11536) · [Before (L11372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11372)

```diff
-       const WT = TT.pY.RUT(TT.VV);
+       const QB = BB.vG.ZjB(BB.zV);
```

#### 1497. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11380` → after: `L11544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11544) · [Before (L11380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11380)

```diff
-       const UT = TT.pY.RUT(TT.VV);
+       const jB = BB.vG.ZjB(BB.zV);
```

#### 1498. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11385-L11386` → after: `L11549-L11550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11549-L11550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11549-L11550) · [Before (L11385-L11386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11385-L11386)

```diff
-       const UT = TT.camera.Aq(),
-         mT = TT.camera.bD();
+       const jB = BB.camera.iG(),
+         zB = BB.camera.uC();
```

#### 1499. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11395-L11399` → after: `L11559-L11563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11559-L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11559-L11563) · [Before (L11395-L11399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11395-L11399)

```diff
-     var cp = mT(37857),
-       vp = mT(37058),
-       fp = mT(37854),
-       qp = mT(37166);
-     const ip = sT.z * sT.z * sT.z;
+     var Ls = zB(37821),
+       gs = zB(37031),
+       ts = zB(37816),
+       Ss = zB(37151);
+     const Ms = XB.y * XB.y * XB.y;
```

#### 1500. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11420` → after: `L11584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11584) · [Before (L11420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11420)

```diff
-         const [TT, zT, MT] = (0, fp.i)(mT);
+         const [BB, nB, dB] = (0, ts.e)(zB);
```

#### 1501. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11423` → after: `L11587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11587) · [Before (L11423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11423)

```diff
-           rle: [...cp.encode(WT.iL)],
+           rle: [...Ls.encode(QB.Vr)],
```

#### 1502. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11433-L11434` → after: `L11597-L11598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11597-L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11597-L11598) · [Before (L11433-L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11433-L11434)

```diff
-           TT.set((0, fp.d)(mT.chunkX, mT.chunkY, mT.chunkZ), {
-             iL: ep(mT.rle),
+           BB.set((0, ts.c)(zB.chunkX, zB.chunkY, zB.chunkZ), {
+             Vr: qs(zB.rle),
```

#### 1503. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11439` → after: `L11603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11603) · [Before (L11439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11439)

```diff
-           TT.delete((0, fp.d)(mT.chunkX, mT.chunkY, mT.chunkZ));
+           BB.delete((0, ts.c)(zB.chunkX, zB.chunkY, zB.chunkZ));
```

#### 1504. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11441` → after: `L11605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11605) · [Before (L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11441)

```diff
-         case "EQ":
+         case "eD":
```

#### 1505. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11450` → after: `L11614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11614) · [Before (L11450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11450)

```diff
-       const [WT, zT, MT] = UT, gT = Math.floor(WT / sT.z), HT = Math.floor(zT / sT.z), kT = Math.floor(MT / sT.z), jT = (0, fp.d)(gT, HT, kT), lT = TT.get(jT);
+       const [QB, nB, dB] = jB, IB = Math.floor(QB / XB.y), uB = Math.floor(nB / XB.y), UB = Math.floor(dB / XB.y), aB = (0, ts.c)(IB, uB, UB), pB = BB.get(aB);
```

#### 1506. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11452-L11455` → after: `L11616-L11619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11616-L11619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11616-L11619) · [Before (L11452-L11455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11452-L11455)

```diff
-       const LT = nT.e.mod(WT, sT.z),
-         pT = nT.e.mod(zT, sT.z),
-         BT = nT.e.mod(MT, sT.z);
-       (0, fp.h)(lT.iL).set(LT, pT, BT, mT)
+       const rB = NB.b.mod(QB, XB.y),
+         sB = NB.b.mod(nB, XB.y),
+         JB = NB.b.mod(dB, XB.y);
+       (0, ts.d)(pB.Vr).set(rB, sB, JB, zB)
```

#### 1507. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11459` → after: `L11623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11623) · [Before (L11459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11459)

```diff
-       const [WT, zT, MT] = UT, gT = Math.floor(WT / sT.z), HT = Math.floor(zT / sT.z), kT = Math.floor(MT / sT.z), jT = TT.get((0, fp.d)(gT, HT, kT));
+       const [QB, nB, dB] = jB, IB = Math.floor(QB / XB.y), uB = Math.floor(nB / XB.y), UB = Math.floor(dB / XB.y), aB = BB.get((0, ts.c)(IB, uB, UB));
```

#### 1508. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11461` → after: `L11625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11625) · [Before (L11461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11461)

```diff
-       const lT = [nT.e.mod(WT, sT.z), nT.e.mod(zT, sT.z), nT.e.mod(MT, sT.z)],
+       const pB = [NB.b.mod(QB, XB.y), NB.b.mod(nB, XB.y), NB.b.mod(dB, XB.y)],
```

#### 1509. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11473-L11478` → after: `L11637-L11642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11637-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11637-L11642) · [Before (L11473-L11478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11473-L11478)

```diff
-       for (const zT of UT.pY.qV(UT.pY.names.position)) mT.add(zT.bV);
-       for (const zT of UT.pY.qV("itemState")) mT.add(zT.bV);
-       for (const zT of mT) JL(UT, zT) || (UT.pY.deleteEntity(zT), (0, qp.b)(String(zT)));
-       UT.sV[UT.VV] && (UT.sV[UT.VV] = {});
-       const WT = UT.pY.TmT(UT.VV);
-       WT && (WT.planeEId = null), cT.j.EZ(`otherEntitySettingsClientifiedEId|${UT.VV}|canSee`, !1), UT.pY.oUT(UT.VV).isAlive = !1
+       for (const nB of jB.vG.FY(jB.vG.names.position)) zB.add(nB.VY);
+       for (const nB of jB.vG.FY("itemState")) zB.add(nB.VY);
+       for (const nB of zB) qr(jB, nB) || (jB.vG.deleteEntity(nB), (0, Ss.b)(String(nB)));
+       jB.RY[jB.zV] && (jB.RY[jB.zV] = {});
+       const QB = jB.vG.AjB(jB.zV);
+       QB && (QB.planeEId = null), yB.n.Ly(`otherEntitySettingsClientifiedEId|${jB.zV}|canSee`, !1), jB.vG.hjB(jB.zV).isAlive = !1
```

#### 1510. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11482` → after: `L11646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11646) · [Before (L11482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11482)

```diff
-       TT.Nl.BmT(), TT.Nl.CUT.empty(), TT.Nl.ZmT = !0;
+       BB.zr.BzB(), BB.zr.ijB.empty(), BB.zr.jzB = !0;
```

#### 1511. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11490-L11492` → after: `L11654-L11656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11654-L11656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11654-L11656) · [Before (L11490-L11492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11490-L11492)

```diff
-       TT.Nl.vmT(UT * sT.z, mT * sT.z, WT * sT.z);
-       const gT = `${UT}|${mT}|${WT}|${TT.cTT}`,
-         nT = new Uint16Array(sT.z * sT.z * sT.z);
+       BB.zr.QzB(jB * XB.y, zB * XB.y, QB * XB.y);
+       const IB = `${jB}|${zB}|${QB}|${BB.IBB}`,
+         NB = new Uint16Array(XB.y * XB.y * XB.y);
```

#### 1512. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11494-L11495` → after: `L11658-L11659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11658-L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11658-L11659) · [Before (L11494-L11495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11494-L11495)

```diff
-       const HT = (0, fp.h)(nT);
-       TT.Nl.mJ(gT, HT, null), TT.bloxd.chunkAdded(UT, mT, WT, HT, Op(MT))
+       const uB = (0, ts.d)(NB);
+       BB.zr.bS(IB, uB, null), BB.bloxd.chunkAdded(jB, zB, QB, uB, is(dB))
```

#### 1513. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11500-L11503` → after: `L11664-L11667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11664-L11667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11664-L11667) · [Before (L11500-L11503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11500-L11503)

```diff
-       for (const mT of Object.keys(TT.Nl.lZ.hash)) {
-         const WT = TT.Nl.lZ.hash[Number(mT)];
-         UT.set((0, fp.d)(WT.i, WT.j, WT.k), {
-           iL: new Uint16Array(WT.iL.data),
+       for (const zB of Object.keys(BB.zr.Fm.hash)) {
+         const QB = BB.zr.Fm.hash[Number(zB)];
+         jB.set((0, ts.c)(QB.i, QB.j, QB.k), {
+           Vr: new Uint16Array(QB.Vr.data),
```

#### 1514. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11509-L11510` → after: `L11673-L11674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11673-L11674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11673-L11674) · [Before (L11509-L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11509-L11510)

```diff
-     var Xp = mT(36579),
-       Ip = mT(37042);
+     var Xs = zB(36574),
+       Zs = zB(37012);
```

#### 1515. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11513` → after: `L11677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11677) · [Before (L11513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11513)

```diff
-         this.client = TT, this.Rl = UT, this.isRecording = !1, this.isClipping = !1, this.clippingWanted = !1, this.sessionAllowsClipping = !1, this.maxClipTicks = OL.i * BT.f.clientTicksPerSecond, this.windowStartChunks = new Map, this.state = {
+         this.client = BB, this.ur = jB, this.isRecording = !1, this.isClipping = !1, this.clippingWanted = !1, this.sessionAllowsClipping = !1, this.maxClipTicks = Mr.i * JB.e.clientTicksPerSecond, this.windowStartChunks = new Map, this.state = {
```

#### 1516. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11515` → after: `L11679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11679) · [Before (L11515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11515)

```diff
-             formatVersion: bL.c,
+             formatVersion: Sr.h,
```

#### 1517. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11517-L11518` → after: `L11681-L11682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11681-L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11681-L11682) · [Before (L11517-L11518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11517-L11518)

```diff
-             sF: BT.f.clientTicksPerSecond,
-             keyframeIntervalTicks: bL.b,
+             KF: JB.e.clientTicksPerSecond,
+             keyframeIntervalTicks: Sr.d,
```

#### 1518. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11541` → after: `L11705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11705) · [Before (L11541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11541)

```diff
-         }, this.pendingStructuralEvents = [], this.pendingEphemeralEvents = [], this.effectTracker = new RL.d;
+         }, this.pendingStructuralEvents = [], this.pendingEphemeralEvents = [], this.effectTracker = new Bs.c;
```

#### 1519. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11545-L11546` → after: `L11709-L11710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11709-L11710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11709-L11710) · [Before (L11545-L11546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11545-L11546)

```diff
-         this.Rl.on("Cl", mT);
-         const WT = cT.j.subscribe("EffectUpdate", (TT => {
+         this.ur.on("vp", zB);
+         const QB = yB.n.subscribe("EffectUpdate", (BB => {
```

#### 1520. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11549` → after: `L11713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11713) · [Before (L11549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11549)

```diff
-               XT: eL(TT.XT)
+               VB: Er(BB.VB)
```

#### 1521. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11552-L11553` → after: `L11716-L11717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11716-L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11716-L11717) · [Before (L11552-L11553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11552-L11553)

```diff
-           zT = cT.j.subscribe("RemoveEffect", (TT => {
-             this.isCapturing() && this.effectTracker.handleRemove(eL(TT.XT), TT.name)
+           nB = yB.n.subscribe("RemoveEffect", (BB => {
+             this.isCapturing() && this.effectTracker.handleRemove(Er(BB.VB), BB.name)
```

#### 1522. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11556` → after: `L11720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11720) · [Before (L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11556)

```diff
-           this.Rl.off("Cl", mT), cT.j.unsubscribe(WT), cT.j.unsubscribe(zT)
+           this.ur.off("vp", zB), yB.n.unsubscribe(QB), yB.n.unsubscribe(nB)
```

#### 1523. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11558-L11559` → after: `L11722-L11723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11722-L11723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11722-L11723) · [Before (L11558-L11559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11558-L11559)

```diff
-         const MT = Ig.b.get("clientEscMenuOptions");
-         this.clippingWanted = MT.enableClipping, this.maxClipTicks = MT.clipDurationSeconds * BT.f.clientTicksPerSecond
+         const dB = AI.c.get("clientEscMenuOptions");
+         this.clippingWanted = dB.enableClipping, this.maxClipTicks = dB.clipDurationSeconds * JB.e.clientTicksPerSecond
```

#### 1524. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11563` → after: `L11727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11727) · [Before (L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11563)

```diff
-         const TT = gH.d.subscribe("canRecordReplays", (TT => {
+         const BB = Nu.c.subscribe("canRecordReplays", (BB => {
```

#### 1525. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11581` → after: `L11745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11745) · [Before (L11581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11581)

```diff
-         return this.state.ticks.length / this.state.meta.sF
+         return this.state.ticks.length / this.state.meta.KF
```

#### 1526. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11587` → after: `L11751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11751) · [Before (L11587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11587)

```diff
-         this.maxClipTicks = nT.e.clamp(TT, OL.l, OL.j) * BT.f.clientTicksPerSecond, this.isClipping && this.maybeEvictClipWindow(), cT.j.EZ("gameRecorder|clipSettingsChanged")
+         this.maxClipTicks = NB.b.clamp(BB, Mr.m, Mr.j) * JB.e.clientTicksPerSecond, this.isClipping && this.maybeEvictClipWindow(), yB.n.Ly("gameRecorder|clipSettingsChanged")
```

#### 1527. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11590` → after: `L11754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11754) · [Before (L11590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11590)

```diff
-         this.gameAllowsReplays() ? this.isClipping ? 0 !== this.state.ticks.length ? (this.saveCapture(), this.beginCaptureSession(), (0, Ip.d)(Ip.c.clipSaved)) : (0, Ip.d)(Ip.c.clipEmpty) : (0, Ip.d)(Ip.c.clippingNotOn) : this.showReplaysDisabledMessage()
+         this.gameAllowsReplays() ? this.isClipping ? 0 !== this.state.ticks.length ? (this.saveCapture(), this.beginCaptureSession(), (0, Zs.g)(Zs.d.clipSaved)) : (0, Zs.g)(Zs.d.clipEmpty) : (0, Zs.g)(Zs.d.clippingNotOn) : this.showReplaysDisabledMessage()
```

#### 1528. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11593` → after: `L11757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11757) · [Before (L11593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11593)

```diff
-         this.isClipping && (this.isClipping = !1, this.clearCaptureBuffers(), cT.j.EZ("gameRecorder|setClipping", !1))
+         this.isClipping && (this.isClipping = !1, this.clearCaptureBuffers(), yB.n.Ly("gameRecorder|setClipping", !1))
```

#### 1529. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11615` → after: `L11779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11779) · [Before (L11615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11615)

```diff
-             yM: UT,
+             xd: jB,
```

#### 1530. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11617` → after: `L11781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11781) · [Before (L11617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11617)

```diff
-             XM: WT
+             Kd: QB
```

#### 1531. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11625` → after: `L11789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11789) · [Before (L11625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11625)

```diff
-             TT: TT,
+             BB: BB,
```

#### 1532. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11628` → after: `L11792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11792) · [Before (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11628)

```diff
-             WT: sL(WT)
+             QB: Zr(QB)
```

#### 1533. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11636-L11637` → after: `L11800-L11801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11800-L11801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11800-L11801) · [Before (L11636-L11637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11636-L11637)

```diff
-             FW: eL(TT),
-             PW: UT,
+             PQ: Er(BB),
+             WQ: jB,
```

#### 1534. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11639-L11640` → after: `L11803-L11804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11803-L11804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11803-L11804) · [Before (L11639-L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11639-L11640)

```diff
-             VW: WT,
-             uW: zT
+             eQ: QB,
+             lQ: nB
```

#### 1535. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11648` → after: `L11812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11812) · [Before (L11648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11648)

```diff
-             Bm: eL(TT),
+             Gz: Er(BB),
```

#### 1536. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11655` → after: `L11819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11819) · [Before (L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11655)

```diff
-           const zT = Op(this.Rl.bloxd.blockDataOwner.getSharedBlockArr(TT, UT, mT));
+           const nB = is(this.ur.bloxd.blockDataOwner.getSharedBlockArr(BB, jB, zB));
```

#### 1537. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11669` → after: `L11833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11833) · [Before (L11669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11669)

```diff
-           const MT = null === (WT = this.Rl.Nl.lZ.LZ(TT, UT, mT)) || void 0 === WT || null === (zT = WT.iL) || void 0 === zT ? void 0 : zT.data,
+           const dB = null === (QB = this.ur.zr.Fm.Ym(BB, jB, zB)) || void 0 === QB || null === (nB = QB.Vr) || void 0 === nB ? void 0 : nB.data,
```

#### 1538. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11671` → after: `L11835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11835) · [Before (L11671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11671)

```diff
-             nT = Op(this.Rl.bloxd.blockDataOwner.getSharedBlockArr(TT, UT, mT));
+             NB = is(this.ur.bloxd.blockDataOwner.getSharedBlockArr(BB, jB, zB));
```

#### 1539. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11685-L11686` → after: `L11849-L11850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11849-L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11849-L11850) · [Before (L11685-L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11685-L11686)

```diff
-           const gT = bp(null !== (MT = this.Rl.bloxd.blockDataOwner.getSharedDataForBlock(TT, UT, mT)) && void 0 !== MT ? MT : null),
-             nT = this.Rl.bloxd.getMetaInfo(WT).rootId !== this.Rl.bloxd.getMetaInfo(zT).rootId ? null : bp(gT);
+           const IB = Es(null !== (dB = this.ur.bloxd.blockDataOwner.getSharedDataForBlock(BB, jB, zB)) && void 0 !== dB ? dB : null),
+             NB = this.ur.bloxd.getMetaInfo(QB).rootId !== this.ur.bloxd.getMetaInfo(nB).rootId ? null : Es(IB);
```

#### 1540. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11688` → after: `L11852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11852) · [Before (L11688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11688)

```diff
-             type: "EQ",
+             type: "eD",
```

#### 1541. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11711` → after: `L11875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11875) · [Before (L11711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11711)

```diff
-         return null === WT || void 0 === WT ? null : bp(null !== (zT = this.Rl.bloxd.blockDataOwner.getSharedDataForBlock(TT, UT, mT, WT)) && void 0 !== zT ? zT : null)
+         return null === QB || void 0 === QB ? null : Es(null !== (nB = this.ur.bloxd.blockDataOwner.getSharedDataForBlock(BB, jB, zB, QB)) && void 0 !== nB ? nB : null)
```

#### 1542. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11717-L11719` → after: `L11881-L11883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11881-L11883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11881-L11883) · [Before (L11717-L11719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11717-L11719)

```diff
-             XT: eL(TT),
-             eU: UT,
-             YU: mT
+             VB: Er(BB),
+             qj: jB,
+             fj: zB
```

#### 1543. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11758` → after: `L11922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11922) · [Before (L11758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11758)

```diff
-             camera: Zp(this.Rl),
+             camera: Gs(this.ur),
```

#### 1544. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11775` → after: `L11939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11939) · [Before (L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11775)

```diff
-         return !0 === this.Rl.kY.canRecordReplays
+         return !0 === this.ur.wG.canRecordReplays
```

#### 1545. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11778` → after: `L11942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11942) · [Before (L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11778)

```diff
-         (0, Ip.d)(Ip.c.disallowed)
+         (0, Zs.g)(Zs.d.disallowed)
```

#### 1546. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11784` → after: `L11948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11948) · [Before (L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11784)

```diff
-         this.isRecording = !1, this.clearCaptureBuffers(), cT.j.EZ("gameRecorder|setRecording", !1), (0, Ip.d)(Ip.c.recordingTurnedOff)
+         this.isRecording = !1, this.clearCaptureBuffers(), yB.n.Ly("gameRecorder|setRecording", !1), (0, Zs.g)(Zs.d.recordingTurnedOff)
```

#### 1547. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11790` → after: `L11954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11954) · [Before (L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11790)

```diff
-         return this.clippingWanted && this.sessionAllowsClipping && this.gameAllowsReplays() && !this.isRecording && !this.isClipping && !this.client.isReplayMode() && !(0, Xp.c)() && !!this.client.getConnectionInfo()
+         return this.clippingWanted && this.sessionAllowsClipping && this.gameAllowsReplays() && !this.isRecording && !this.isClipping && !this.client.isReplayMode() && !(0, Xs.b)() && !!this.client.getConnectionInfo()
```

#### 1548. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11810` → after: `L11974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11974) · [Before (L11810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11810)

```diff
-         (0, vp.f)({
+         (0, gs.g)({
```

#### 1549. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11818-L11819` → after: `L11982-L11983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11982-L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11982-L11983) · [Before (L11818-L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11818-L11819)

```diff
-           WT = null !== (TT = null === mT || void 0 === mT ? void 0 : mT.gameNameWithVariation) && void 0 !== TT ? TT : "",
-           zT = null !== (UT = null === mT || void 0 === mT ? void 0 : mT.lobbyName) && void 0 !== UT ? UT : "";
+           QB = null !== (BB = null === zB || void 0 === zB ? void 0 : zB.gameNameWithVariation) && void 0 !== BB ? BB : "",
+           nB = null !== (jB = null === zB || void 0 === zB ? void 0 : zB.lobbyName) && void 0 !== jB ? jB : "";
```

#### 1550. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11821` → after: `L11985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11985) · [Before (L11821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11821)

```diff
-           formatVersion: bL.c,
+           formatVersion: Sr.h,
```

#### 1551. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11823-L11824` → after: `L11987-L11988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11987-L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11987-L11988) · [Before (L11823-L11824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11823-L11824)

```diff
-           sF: BT.f.clientTicksPerSecond,
-           keyframeIntervalTicks: bL.b,
+           KF: JB.e.clientTicksPerSecond,
+           keyframeIntervalTicks: Sr.d,
```

#### 1552. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11827-L11832` → after: `L11991-L11996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11991-L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11991-L11996) · [Before (L11827-L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11827-L11832)

```diff
-           gameName: WT ? (0, nT.dc)(WT) : "",
-           variation: WT ? (0, nT._b)(WT) : void 0,
-           lobbyType: (0, OU.w)(zT),
-           localPlayerEntityId: eL(this.Rl.VV),
-           serverPlayerEntityId: eL(this.Rl.rTT)
-         }, this.windowStartChunks = yp(this.Rl)
+           gameName: QB ? (0, NB.Sb)(QB) : "",
+           variation: QB ? (0, NB.Mb)(QB) : void 0,
+           lobbyType: (0, Sj.q)(nB),
+           localPlayerEntityId: Er(this.ur.zV),
+           serverPlayerEntityId: Er(this.ur.FBB)
+         }, this.windowStartChunks = hs(this.ur)
```

#### 1553. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11835` → after: `L11999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R11999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L11999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L11999) · [Before (L11835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11835)

```diff
-         this.isClipping || this.isRecording || (this.isClipping = !0, this.beginCaptureSession(), cT.j.EZ("gameRecorder|setClipping", !0))
+         this.isClipping || this.isRecording || (this.isClipping = !0, this.beginCaptureSession(), yB.n.Ly("gameRecorder|setClipping", !0))
```

#### 1554. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11851` → after: `L12015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12015) · [Before (L11851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11851)

```diff
-         this.isRecording || ((0, Xp.c)() || this.client.isReplayMode() ? (0, Ip.d)(Ip.c.closeViewerFirst) : this.gameAllowsReplays() ? (this.stopClippingBuffer(), this.isRecording = !0, this.beginCaptureSession(), (0, Ip.d)(Ip.c.recordingStarted), cT.j.EZ("gameRecorder|setRecordi … [truncated]
+         this.isRecording || ((0, Xs.b)() || this.client.isReplayMode() ? (0, Zs.g)(Zs.d.closeViewerFirst) : this.gameAllowsReplays() ? (this.stopClippingBuffer(), this.isRecording = !0, this.beginCaptureSession(), (0, Zs.g)(Zs.d.recordingStarted), yB.n.Ly("gameRecorder|setRecordi … [truncated]
```

#### 1555. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11854` → after: `L12018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12018) · [Before (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11854)

```diff
-         this.isRecording && (this.gameAllowsReplays() ? (this.recordTick(), this.isRecording = !1, this.effectTracker.clear(), this.saveCapture(), this.clearCaptureBuffers(), (0, Ip.d)(Ip.c.recordingStopped), cT.j.EZ("gameRecorder|setRecording", !1), !1 !== (null === TT || void 0 … [truncated]
+         this.isRecording && (this.gameAllowsReplays() ? (this.recordTick(), this.isRecording = !1, this.effectTracker.clear(), this.saveCapture(), this.clearCaptureBuffers(), (0, Zs.g)(Zs.d.recordingStopped), yB.n.Ly("gameRecorder|setRecording", !1), !1 !== (null === BB || void 0 … [truncated]
```

#### 1556. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11857` → after: `L12021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12021) · [Before (L11857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11857)

```diff
-         return DL(bL.w)
+         return vr(Sr.y)
```

#### 1557. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11862` → after: `L12026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12026) · [Before (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11862)

```diff
-         const mT = mp(UT, this.lastFullData.uiElements, bL.w);
+         const zB = ns(jB, this.lastFullData.uiElements, Sr.y);
```

#### 1558. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11866` → after: `L12030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12030) · [Before (L11866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11866)

```diff
-         const UT = DL(bL.s);
+         const jB = vr(Sr.v);
```

#### 1559. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11868-L11869` → after: `L12032-L12033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12032-L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12032-L12033) · [Before (L11868-L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11868-L11869)

```diff
-         const mT = mp(UT, this.lastFullData.environment, bL.s);
-         return (0, nT.Qc)(mT) || (this.lastFullData.environment = Mp(this.lastFullData.environment, mT)), mT
+         const zB = ns(jB, this.lastFullData.environment, Sr.v);
+         return (0, NB.Ac)(zB) || (this.lastFullData.environment = Ns(this.lastFullData.environment, zB)), zB
```

#### 1560. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11881` → after: `L12045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12045) · [Before (L11881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11881)

```diff
-         }(this.Rl);
+         }(this.ur);
```

#### 1561. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11885` → after: `L12049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12049) · [Before (L11885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11885)

```diff
-         return this.lastFullData.hotbar = EL(this.lastFullData.hotbar, mT), NL(mT) ? mT : void 0
+         return this.lastFullData.hotbar = cr(this.lastFullData.hotbar, zB), Cr(zB) ? zB : void 0
```

#### 1562. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11888` → after: `L12052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12052) · [Before (L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11888)

```diff
-         const UT = DL(bL.p);
+         const jB = vr(Sr.t);
```

#### 1563. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11890-L11891` → after: `L12054-L12055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12054-L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12054-L12055) · [Before (L11890-L11891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11890-L11891)

```diff
-         const mT = mp(UT, this.lastFullData.playerHud, bL.p);
-         return this.lastFullData.playerHud = gp(this.lastFullData.playerHud, mT), (0, nT.Qc)(mT) ? void 0 : mT
+         const zB = ns(jB, this.lastFullData.playerHud, Sr.t);
+         return this.lastFullData.playerHud = us(this.lastFullData.playerHud, zB), (0, NB.Ac)(zB) ? void 0 : zB
```

#### 1564. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11894-L11895` → after: `L12058-L12059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12058-L12059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12058-L12059) · [Before (L11894-L11895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11894-L11895)

```diff
-         const UT = this.effectTracker.sample(this.state.ticks.length, this.state.meta.sF);
-         return TT ? (this.lastFullData.effects = UT, UT) : (0, RL.k)(UT, this.lastFullData.effects) ? void 0 : (this.lastFullData.effects = UT, UT)
+         const jB = this.effectTracker.sample(this.state.ticks.length, this.state.meta.KF);
+         return BB ? (this.lastFullData.effects = jB, jB) : (0, Bs.i)(jB, this.lastFullData.effects) ? void 0 : (this.lastFullData.effects = jB, jB)
```

#### 1565. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11898` → after: `L12062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12062) · [Before (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11898)

```diff
-         return this.sampleRecordedStates((() => this.client.iterateEntityIds()), (TT => uL(this.client, this.Rl, TT)), this.lastFullData.entities, bL.h, TT, {
+         return this.sampleRecordedStates((() => this.client.iterateEntityIds()), (BB => Wr(this.client, this.ur, BB)), this.lastFullData.entities, Sr.k, BB, {
```

#### 1566. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11903` → after: `L12067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12067) · [Before (L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11903)

```diff
-         return this.sampleRecordedStates((() => this.client.iterateItemIds()), (TT => this.sampleItemSnapshot(TT)), this.lastFullData.items, bL.o, TT)
+         return this.sampleRecordedStates((() => this.client.iterateItemIds()), (BB => this.sampleItemSnapshot(BB)), this.lastFullData.items, Sr.p, BB)
```

#### 1567. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11914` → after: `L12078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12078) · [Before (L11914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11914)

```diff
-             const UT = null !== (HT = mT[TT]) && void 0 !== HT ? HT : null,
+             const jB = null !== (uB = zB[BB]) && void 0 !== uB ? uB : null,
```

#### 1568. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11926` → after: `L12090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12090) · [Before (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11926)

```diff
-         if (!WT) throw new Error(`Colyseus item not found for entity ${TT}`);
+         if (!QB) throw new Error(`Colyseus item not found for entity ${BB}`);
```

#### 1569. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11928` → after: `L12092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12092) · [Before (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11928)

```diff
-           itemName: null !== (UT = null === (mT = Jl.n[WT.id]) || void 0 === mT ? void 0 : mT.name) && void 0 !== UT ? UT : null,
+           itemName: null !== (jB = null === (zB = qp.k[QB.id]) || void 0 === zB ? void 0 : zB.name) && void 0 !== jB ? jB : null,
```

#### 1570. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11936-L11937` → after: `L12100-L12101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12100-L12101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12100-L12101) · [Before (L11936-L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11936-L11937)

```diff
-     var sp = mT(37086),
-       Fp = mT(38584);
+     var Ts = zB(37071),
+       Ps = zB(38539);
```

#### 1571. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11940` → after: `L12104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12104) · [Before (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11940)

```diff
-       oL(bL.s, TT)
+       Rr(Sr.v, BB)
```

#### 1572. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11944` → after: `L12108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12108) · [Before (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11944)

```diff
-       oL(bL.w, TT)
+       Rr(Sr.y, BB)
```

#### 1573. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11946-L11948` → after: `L12110-L12112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12110-L12112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12110-L12112) · [Before (L11946-L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11946-L11948)

```diff
-     var Cp = mT(643),
-       rp = mT(39101),
-       Kp = mT(38770);
+     var ls = zB(644),
+       ws = zB(39071),
+       xs = zB(38748);
```

#### 1574. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11956` → after: `L12120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12120) · [Before (L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11956)

```diff
-         gT && (0, nT.Qc)(MT) || (gT ? hp(TT, UT, zT, gT, MT) : Ep(TT, UT, zT, MT))
+         IB && (0, NB.Ac)(dB) || (IB ? vs(BB, jB, nB, IB, dB) : bs(BB, jB, nB, dB))
```

#### 1575. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11967-L11970` → after: `L12131-L12134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12131-L12134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12131-L12134) · [Before (L11967-L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11967-L11970)

```diff
-         gT = (0, rp.e)()[MT];
-       if (!gT) return void console.warn(`Replay: unknown entity type ${WT.type}`);
-       TT.XN(mT, zT, new gT((0, ET.d)(), mT, WT.type));
-       const nT = UT.pY.getState(mT, "meshRotation");
+         IB = (0, ws.f)()[dB];
+       if (!IB) return void console.warn(`Replay: unknown entity type ${QB.type}`);
+       BB.mw(zB, nB, new IB((0, CB.c)(), zB, QB.type));
+       const NB = jB.vG.getState(zB, "meshRotation");
```

#### 1576. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11981` → after: `L12145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12145) · [Before (L11981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11981)

```diff
-         gT = UT.pY.getState(mT, "meshRotation");
+         IB = jB.vG.getState(zB, "meshRotation");
```

#### 1577. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11985` → after: `L12149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12149) · [Before (L11985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11985)

```diff
-         null === (WT = (0, Kp.c)(TT)) || void 0 === WT || WT(mT, {
+         null === (QB = (0, xs.d)(BB)) || void 0 === QB || QB(zB, {
```

#### 1578. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11991` → after: `L12155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12155) · [Before (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11991)

```diff
-       const HT = UT.pY.wUT(mT);
+       const uB = jB.vG.JjB(zB);
```

#### 1579. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11993-L11994` → after: `L12157-L12158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12157-L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12157-L12158) · [Before (L11993-L11994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11993-L11994)

```diff
-         TT.pY.uTT(UT, "smoothToServerPos") || TT.pY.YV(UT, "smoothToServerPos");
-         const WT = TT.pY.getState(UT, "smoothToServerPos");
+         BB.vG.HBB(jB, "smoothToServerPos") || BB.vG.hY(jB, "smoothToServerPos");
+         const QB = BB.vG.getState(jB, "smoothToServerPos");
```

#### 1580. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11999-L12001` → after: `L12163-L12165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12163-L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12163-L12165) · [Before (L11999-L12001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L11999-L12001)

```diff
-         const WT = (0, PT.e)(UT);
-         cT.j.EZ(`entityScale|${WT}`, mT);
-         const zT = (0, ET.d)().getLifeformType(WT);
+         const QB = (0, AB.b)(jB);
+         yB.n.Ly(`entityScale|${QB}`, zB);
+         const nB = (0, CB.c)().getLifeformType(QB);
```

#### 1581. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12006-L12007` → after: `L12170-L12171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12170-L12171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12170-L12171) · [Before (L12006-L12007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12006-L12007)

```diff
-         } = (0, sl.f)(mT, zT);
-         TT.pY.jmT(WT, MT, gT, MT)
+         } = (0, Zp.d)(zB, nB);
+         BB.vG.bjB(QB, dB, IB, dB)
```

#### 1582. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12009` → after: `L12173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12173) · [Before (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12009)

```diff
-         const WT = TT.pY.getState(UT, "meshRotation");
+         const QB = BB.vG.getState(jB, "meshRotation");
```

#### 1583. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12011-L12014` → after: `L12175-L12178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12175-L12178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12175-L12178) · [Before (L12011-L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12011-L12014)

```diff
-         for (const zT of (0, ET.d)().getFollowingEntities(UT)) {
-           const UT = TT.pY.getState(zT, "meshRotation"),
-             WT = TT.pY.LmT(zT);
-           UT && WT.pmT && (UT.baseRenderRotation[1] = mT)
+         for (const nB of (0, CB.c)().getFollowingEntities(jB)) {
+           const jB = BB.vG.getState(nB, "meshRotation"),
+             QB = BB.vG.RjB(nB);
+           jB && QB.OjB && (jB.baseRenderRotation[1] = zB)
```

#### 1584. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12017` → after: `L12181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12181) · [Before (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12017)

```diff
-         for (const mT of Cp.b) {
+         for (const zB of ls.c) {
```

#### 1585. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12019` → after: `L12183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12183) · [Before (L12019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12019)

```diff
-           WT ? (0, aT.z)(TT, mT, WT.itemName, WT.enchantmentTier) : (0, aT.z)(TT, mT, null, null)
+           QB ? (0, DB.B)(BB, zB, QB.itemName, QB.enchantmentTier) : (0, DB.B)(BB, zB, null, null)
```

#### 1586. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12021-L12024` → after: `L12185-L12188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12185-L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12185-L12188) · [Before (L12021-L12024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12021-L12024)

```diff
-       }(mT, WT.armour), "sV" in zT && function(TT, UT, mT) {
-         (0, qH.h)(UT);
-         const WT = TT.sV[TT.VV][UT];
-         for (const zT of bL.u)
+       }(zB, QB.armour), "RY" in nB && function(BB, jB, zB) {
+         (0, gu.d)(jB);
+         const QB = BB.RY[BB.zV][jB];
+         for (const nB of Sr.x)
```

#### 1587. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12028-L12030` → after: `L12192-L12194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12192-L12194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12192-L12194) · [Before (L12028-L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12028-L12030)

```diff
-             (0, qH.d)(UT, zT, TT)
-           } else zT in WT && (0, qH.d)(UT, zT, void 0)
-       }(UT, mT, WT.sV), ("ridingVehicleEId" in zT || "followingEId" in zT || "followingOffset" in zT || "shouldMatchFollowingEntityRotation" in zT) && (MT.followingEId ? Rp(UT, mT, MT) : Rp(UT, mT, {
+             (0, gu.b)(jB, nB, BB)
+           } else nB in QB && (0, gu.b)(jB, nB, void 0)
+       }(jB, zB, QB.RY), ("ridingVehicleEId" in nB || "followingEId" in nB || "followingOffset" in nB || "shouldMatchFollowingEntityRotation" in nB) && (dB.followingEId ? jJ(jB, zB, dB) : jJ(jB, zB, {
```

#### 1588. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12039` → after: `L12203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12203) · [Before (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12039)

```diff
-         for (const [TT, UT] of Object.entries(null !== (kT = zT.playerCustomisations) && void 0 !== kT ? kT : {})) {
+         for (const [BB, jB] of Object.entries(null !== (UB = nB.playerCustomisations) && void 0 !== UB ? UB : {})) {
```

#### 1589. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12041-L12044` → after: `L12205-L12208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12205-L12208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12205-L12208) · [Before (L12041-L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12041-L12044)

```diff
-           (0, aT.A)({
-             dM: mT,
-             wM: TT,
-             tM: UT
+           (0, DB.E)({
+             Pd: zB,
+             Wd: BB,
+             ld: jB
```

#### 1590. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12047` → after: `L12211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12211) · [Before (L12047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12047)

```diff
-         cT.j.EZ("replayPlayerCosmeticsApplied")
+         yB.n.Ly("replayPlayerCosmeticsApplied")
```

#### 1591. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12071` → after: `L12235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12235) · [Before (L12071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12071)

```diff
-         ridingVehicleEId: null !== (UT = TT.ridingVehicleEId) && void 0 !== UT ? UT : null,
+         ridingVehicleEId: null !== (jB = BB.ridingVehicleEId) && void 0 !== jB ? jB : null,
```

#### 1592. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12078` → after: `L12242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12242) · [Before (L12078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12078)

```diff
-       for (const WT of ["variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "leaderboardTop", "meshKind", "meshOpts"])(0, sT.E)(TT[WT]) || (mT[WT] = TT[WT]);
+       for (const QB of ["variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "leaderboardTop", "meshKind", "meshOpts"])(0, XB.I)(BB[QB]) || (zB[QB] = BB[QB]);
```

#### 1593. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12084` → after: `L12248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12248) · [Before (L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12084)

```diff
-         MT = TT.pY.getState(UT, "meshRotation");
+         dB = BB.vG.getState(jB, "meshRotation");
```

#### 1594. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12086-L12089` → after: `L12250-L12253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12250-L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12250-L12253) · [Before (L12086-L12089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12086-L12089)

```diff
-       for (const gT of (0, ET.d)().getFollowingEntities(UT)) {
-         const UT = TT.pY.getState(gT, "meshRotation"),
-           mT = TT.pY.LmT(gT);
-         UT && mT.pmT && (UT.serverSetRotation[zT] = WT)
+       for (const IB of (0, CB.c)().getFollowingEntities(jB)) {
+         const jB = BB.vG.getState(IB, "meshRotation"),
+           zB = BB.vG.RjB(IB);
+         jB && zB.OjB && (jB.serverSetRotation[nB] = QB)
```

#### 1595. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12096-L12099` → after: `L12260-L12263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12260-L12263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12260-L12263) · [Before (L12096-L12099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12096-L12099)

```diff
-         if (TT.pY.uTT(UT, "smoothToServerPos") || TT.pY.YV(UT, "smoothToServerPos"), TT.pY.uTT(UT, TT.pY.names.RY)) {
-           const mT = TT.pY.FN(UT).position,
-             WT = TT.pY.getState(UT, "smoothToServerPos");
-           (0, En.setServerPosition)(WT, mT[0], mT[1], mT[2]), TT.pY.JV(UT, TT.pY.names.RY)
+         if (BB.vG.HBB(jB, "smoothToServerPos") || BB.vG.hY(jB, "smoothToServerPos"), BB.vG.HBB(jB, BB.vG.names.qS)) {
+           const zB = BB.vG.Gw(jB).position,
+             QB = BB.vG.getState(jB, "smoothToServerPos");
+           (0, bN.setServerPosition)(QB, zB[0], zB[1], zB[2]), BB.vG.ZY(jB, BB.vG.names.qS)
```

#### 1596. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12105-L12106` → after: `L12269-L12270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12269-L12270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12269-L12270) · [Before (L12105-L12106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12105-L12106)

```diff
-       TT.pY.JV(UT, "smoothToServerPos"), TT.pY.JV(UT, TT.pY.names.RY), TT.pY.YV(UT, TT.pY.names.RY, {
-         UB: (0, PT.e)(mT.followingEId),
+       BB.vG.ZY(jB, "smoothToServerPos"), BB.vG.ZY(jB, BB.vG.names.qS), BB.vG.hY(jB, BB.vG.names.qS, {
+         SJ: (0, AB.b)(zB.followingEId),
```

#### 1597. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12108-L12111` → after: `L12272-L12275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12272-L12275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12272-L12275) · [Before (L12108-L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12108-L12111)

```diff
-         pmT: MT,
-         fmT: !0,
-         qmT: (TT, UT) => {
-           fT().copy(TT, zT), mT.ridingVehicleEId === mT.followingEId && fT().cj(TT, TT, fT().ZERO, (0, ET.d)().getEntityHeading(mT.followingEId, UT))
+         OjB: dB,
+         nzB: !0,
+         dzB: (BB, jB) => {
+           GB().copy(BB, nB), zB.ridingVehicleEId === zB.followingEId && GB().ta(BB, BB, GB().ZERO, (0, CB.c)().getEntityHeading(zB.followingEId, jB))
```

#### 1598. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12115-L12116` → after: `L12279-L12280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12279-L12280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12279-L12280) · [Before (L12115-L12116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12115-L12116)

```diff
-     var TB = mT(37253),
-       UB = mT(39122);
+     var zJ = zB(37239),
+       QJ = zB(39102);
```

#### 1599. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12128` → after: `L12292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12292) · [Before (L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12128)

```diff
-         case "EQ": {
+         case "eD": {
```

#### 1600. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12130` → after: `L12294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12294) · [Before (L12130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12130)

```diff
-           (0, ET.d)().setBlockNoMulti(TT, mT, WT, UT.toBlockId, !0), gB(UT.pos, UT.toBlockData);
+           (0, CB.c)().setBlockNoMulti(BB, zB, QB, jB.toBlockId, !0), uJ(jB.pos, jB.toBlockData);
```

#### 1601. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12140` → after: `L12304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12304) · [Before (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12140)

```diff
-           TT.Nl.imT(UT.chunkX * sT.z, UT.chunkY * sT.z, UT.chunkZ * sT.z), TT.bloxd.removingChunk(UT.chunkX, UT.chunkY, UT.chunkZ, !1)
+           BB.zr.IzB(jB.chunkX * XB.y, jB.chunkY * XB.y, jB.chunkZ * XB.y), BB.bloxd.removingChunk(jB.chunkX, jB.chunkY, jB.chunkZ, !1)
```

#### 1602. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12146` → after: `L12310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12310) · [Before (L12146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12146)

```diff
-         case "EQ": {
+         case "eD": {
```

#### 1603. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12148` → after: `L12312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12312) · [Before (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12148)

```diff
-           (0, ET.d)().setBlockNoMulti(TT, mT, WT, UT.fromBlockId, !0), gB(UT.pos, UT.fromBlockData);
+           (0, CB.c)().setBlockNoMulti(BB, zB, QB, jB.fromBlockId, !0), uJ(jB.pos, jB.fromBlockData);
```

#### 1604. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12155` → after: `L12319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12319) · [Before (L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12155)

```diff
-           TT.Nl.imT(UT.chunkX * sT.z, UT.chunkY * sT.z, UT.chunkZ * sT.z), TT.bloxd.removingChunk(UT.chunkX, UT.chunkY, UT.chunkZ, !1);
+           BB.zr.IzB(jB.chunkX * XB.y, jB.chunkY * XB.y, jB.chunkZ * XB.y), BB.bloxd.removingChunk(jB.chunkX, jB.chunkY, jB.chunkZ, !1);
```

#### 1605. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12163-L12164` → after: `L12327-L12328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12327-L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12327-L12328) · [Before (L12163-L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12163-L12164)

```diff
-       const [mT, WT, zT] = TT, MT = (0, ET.d)();
-       MT.blockDataOwner.setBlockData(mT, WT, zT, null === UT ? void 0 : bp(UT)), MT.blockAdded(mT, WT, zT, MT.uq(mT, WT, zT))
+       const [zB, QB, nB] = BB, dB = (0, CB.c)();
+       dB.blockDataOwner.setBlockData(zB, QB, nB, null === jB ? void 0 : Es(jB)), dB.blockAdded(zB, QB, nB, dB.JG(zB, QB, nB))
```

#### 1606. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12172-L12176` → after: `L12336-L12340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12336-L12340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12336-L12340) · [Before (L12172-L12176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12172-L12176)

```diff
-             MT: TT,
-             gT: WT,
-             zT: zT
-           } = null !== (mT = UT.WT) && void 0 !== mT ? mT : {};
-           fH.c.play((0, kL.d)(UT.TT), UT.volume, zT, TT, WT).rate(UT.rate);
+             dB: BB,
+             IB: QB,
+             nB: nB
+           } = null !== (zB = jB.QB) && void 0 !== zB ? zB : {};
+           Lu.e.play((0, ar.f)(jB.BB), jB.volume, nB, BB, QB).rate(jB.rate);
```

#### 1607. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12180-L12184` → after: `L12344-L12348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12344-L12348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12344-L12348) · [Before (L12180-L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12180-L12184)

```diff
-           const mT = (0, PT.e)(UT.FW),
-             WT = TT.pY.getState(mT, "animator");
-           if (UT.PW === TB.g.Custom) return void(0, UB.e)((0, VT.d)(TT).animations, mT, UT.animationScript, UT.VW, UT.uW);
-           if (null === UT.animationScript) return null === WT || void 0 === WT || WT.stopAnimation(UT.PW), void(mT === TT.VV && UT.PW === TB.g.Emote && (0, ET.d)().client.cameraController.endTemporaryThirdPerson());
-           null === WT || void 0 === WT || WT.startAnimation(UT.animationScript, UT.PW, UT.VW, UT.uW);
+           const zB = (0, AB.b)(jB.PQ),
+             QB = BB.vG.getState(zB, "animator");
+           if (jB.WQ === zJ.f.Custom) return void(0, QJ.d)((0, TB.b)(BB).animations, zB, jB.animationScript, jB.eQ, jB.lQ);
+           if (null === jB.animationScript) return null === QB || void 0 === QB || QB.stopAnimation(jB.WQ), void(zB === BB.zV && jB.WQ === zJ.f.Emote && (0, CB.c)().client.cameraController.endTemporaryThirdPerson());
+           null === QB || void 0 === QB || QB.startAnimation(jB.animationScript, jB.WQ, jB.eQ, jB.lQ);
```

#### 1608. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12188` → after: `L12352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12352) · [Before (L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12188)

```diff
-           cT.j.EZ(`bulletShot|${UT.Bm}`, {
+           yB.n.Ly(`bulletShot|${jB.Gz}`, {
```

#### 1609. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12193-L12196` → after: `L12357-L12360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12357-L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12357-L12360) · [Before (L12193-L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12193-L12196)

```diff
-           cT.j.EZ("lifeformHealthChanged", {
-             eId: UT.XT,
-             eU: UT.eU,
-             YU: UT.YU
+           yB.n.Ly("lifeformHealthChanged", {
+             eId: jB.VB,
+             qj: jB.qj,
+             fj: jB.fj
```

#### 1610. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12200` → after: `L12364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12364) · [Before (L12200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12200)

```diff
-           (0, yT.m)(TT, UT.opts);
+           (0, FB.l)(BB, jB.opts);
```

#### 1611. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12203` → after: `L12367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12367) · [Before (L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12203)

```diff
-           cT.j.EZ("forceFlyingMiddleMessage", {
+           yB.n.Ly("forceFlyingMiddleMessage", {
```

#### 1612. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12205` → after: `L12369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12369) · [Before (L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12205)

```diff
-             yM: UT.yM,
+             xd: jB.xd,
```

#### 1613. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12207` → after: `L12371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12371) · [Before (L12207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12207)

```diff
-             XM: UT.XM
+             Kd: jB.Kd
```

#### 1614. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12211-L12213` → after: `L12375-L12377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12375-L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12375-L12377) · [Before (L12211-L12213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12211-L12213)

```diff
-           cT.j.EZ("playerKilled", {
-             deadEId: (0, PT.e)(UT.deadEId),
-             killerEId: (0, PT.e)(UT.killerEId),
+           yB.n.Ly("playerKilled", {
+             deadEId: (0, AB.b)(jB.deadEId),
+             killerEId: (0, AB.b)(jB.killerEId),
```

#### 1615. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12219-L12221` → after: `L12383-L12385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12383-L12385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12383-L12385) · [Before (L12219-L12221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12219-L12221)

```diff
-           cT.j.EZ("customKillfeed", {
-             killer: lp(UT.killer, PT.e),
-             victim: lp(UT.victim, PT.e),
+           yB.n.Ly("customKillfeed", {
+             killer: ss(jB.killer, AB.b),
+             victim: ss(jB.victim, AB.b),
```

#### 1616. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12236-L12237` → after: `L12400-L12401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12400-L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12400-L12401) · [Before (L12236-L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12236-L12237)

```diff
-       const WT = (0, rz.c)(TT),
-         zT = (0, rz.c)(UT);
+       const QB = (0, wn.d)(BB),
+         nB = (0, wn.d)(jB);
```

#### 1617. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12241` → after: `L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12405) · [Before (L12241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12241)

```diff
-       }((0, Dk.o)(WT.pp, zT.pp, mT), (0, Dk.o)(WT.kmT, zT.kmT, mT))
+       }((0, vU.q)(QB.gp, nB.gp, zB), (0, vU.q)(QB.CjB, nB.CjB, zB))
```

#### 1618. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12246-L12247` → after: `L12410-L12411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12410-L12411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12410-L12411) · [Before (L12246-L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12246-L12247)

```diff
-       const mT = [...TT].sort(((TT, UT) => TT.Cl - UT.Cl));
-       if (UT <= mT[0].Cl) return {
+       const zB = [...BB].sort(((BB, jB) => BB.vp - jB.vp));
+       if (jB <= zB[0].vp) return {
```

#### 1619. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12252` → after: `L12416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12416) · [Before (L12252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12252)

```diff
-       if (UT >= WT.Cl) return {
+       if (jB >= QB.vp) return {
```

#### 1620. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12259-L12262` → after: `L12423-L12426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12423-L12426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12423-L12426) · [Before (L12259-L12262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12259-L12262)

```diff
-         if (UT >= TT.Cl && UT <= WT.Cl) {
-           const mT = WT.Cl - TT.Cl,
-             zT = 0 === mT ? 0 : (UT - TT.Cl) / mT,
-             MT = (0, sp.m)(zT, TT.easing);
+         if (jB >= BB.vp && jB <= QB.vp) {
+           const zB = QB.vp - BB.vp,
+             nB = 0 === zB ? 0 : (jB - BB.vp) / zB,
+             dB = (0, Ts.o)(nB, BB.easing);
```

#### 1621. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12283-L12284` → after: `L12447-L12448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12447-L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12447-L12448) · [Before (L12283-L12284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12283-L12284)

```diff
-       const mT = TT.filter((TT => TT.Cl !== UT.Cl));
-       return mT.push(UT), mT.sort(((TT, UT) => TT.Cl - UT.Cl)), mT
+       const zB = BB.filter((BB => BB.vp !== jB.vp));
+       return zB.push(jB), zB.sort(((BB, jB) => BB.vp - jB.vp)), zB
```

#### 1622. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12292` → after: `L12456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12456) · [Before (L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12292)

```diff
-         MT && (0, nT.Qc)(zT) || (MT ? qB(TT, WT, MT, zT) : fB(TT, WT, zT))
+         dB && (0, NB.Ac)(nB) || (dB ? tJ(BB, QB, dB, nB) : gJ(BB, QB, nB))
```

#### 1623. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12307-L12308` → after: `L12471-L12472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12471-L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12471-L12472) · [Before (L12307-L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12307-L12308)

```diff
-       const mT = null === TT || void 0 === TT || null === (UT = Jl.n[TT]) || void 0 === UT ? void 0 : UT.id;
-       return void 0 !== mT ? mT : (cB.has(TT) || (cB.add(TT), console.warn(`Replay: no item named ${TT}, so it is left out`)), null)
+       const zB = null === BB || void 0 === BB || null === (jB = qp.k[BB]) || void 0 === jB ? void 0 : jB.id;
+       return void 0 !== zB ? zB : (GJ.has(BB) || (GJ.add(BB), console.warn(`Replay: no item named ${BB}, so it is left out`)), null)
```

#### 1624. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12322` → after: `L12486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12486) · [Before (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12322)

```diff
-       TT.pY.uTT(UT, "itemState") ? iB(TT, UT, zT, WT) : fB(TT, UT, zT)
+       BB.vG.HBB(jB, "itemState") ? SJ(BB, jB, nB, QB) : gJ(BB, jB, nB)
```

#### 1625. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12326-L12328` → after: `L12490-L12492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12490-L12492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12490-L12492) · [Before (L12326-L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12326-L12328)

```diff
-       if (!TT.pY.uTT(UT, "itemState")) return;
-       if (jp(WT, "position") && TT.pY.uTT(UT, "smoothToServerPos")) {
-         const WT = TT.pY.getState(UT, "smoothToServerPos");
+       if (!BB.vG.HBB(jB, "itemState")) return;
+       if (rs(QB, "position") && BB.vG.HBB(jB, "smoothToServerPos")) {
+         const QB = BB.vG.getState(jB, "smoothToServerPos");
```

#### 1626. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12331` → after: `L12495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12495) · [Before (L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12331)

```diff
-       const zT = TT.pY.getState(UT, "itemState"),
+       const nB = BB.vG.getState(jB, "itemState"),
```

#### 1627. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12337` → after: `L12501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12501) · [Before (L12337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12337)

```diff
-       TT.pY.uTT(UT, "itemState") && TT.pY.deleteEntity(UT)
+       BB.vG.HBB(jB, "itemState") && BB.vG.deleteEntity(jB)
```

#### 1628. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12341-L12342` → after: `L12505-L12506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12505-L12506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12505-L12506) · [Before (L12341-L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12341-L12342)

```diff
-       return TT.filter((TT => TT.Cl >= UT && TT.Cl <= mT)).map((TT => ({
-         Cl: TT.Cl - UT,
+       return BB.filter((BB => BB.vp >= jB && BB.vp <= zB)).map((BB => ({
+         vp: BB.vp - jB,
```

#### 1629. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12348-L12351` → after: `L12512-L12515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12512-L12515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12512-L12515) · [Before (L12348-L12351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12348-L12351)

```diff
-     var eB = mT(37045),
-       YB = mT(37095),
-       JB = mT(39368),
-       xB = mT(39370);
+     var iJ = zB(37020),
+       qJ = zB(37082),
+       fJ = zB(39337),
+       oJ = zB(39343);
```

#### 1630. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12355` → after: `L12519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12519) · [Before (L12355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12355)

```diff
-       const WT = null === (TT = (0, ET.d)().client) || void 0 === TT ? void 0 : TT.gameReplayer,
+       const QB = null === (BB = (0, CB.c)().client) || void 0 === BB ? void 0 : BB.gameReplayer,
```

#### 1631. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12358-L12359` → after: `L12522-L12523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12522-L12523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12522-L12523) · [Before (L12358-L12359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12358-L12359)

```diff
-         sF: zT.meta.sF,
-         playbackMarkInTick: null !== (UT = null === (mT = WT.getPlaybackMark()) || void 0 === mT ? void 0 : mT.inTick) && void 0 !== UT ? UT : null,
+         KF: nB.meta.KF,
+         playbackMarkInTick: null !== (jB = null === (zB = QB.getPlaybackMark()) || void 0 === zB ? void 0 : zB.inTick) && void 0 !== jB ? jB : null,
```

#### 1632. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12376` → after: `L12540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12540) · [Before (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12376)

```diff
-           const UT = cT.j.subscribe("replayViewer|uiRefresh", TT);
+           const jB = yB.n.subscribe("replayViewer|uiRefresh", BB);
```

#### 1633. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12378` → after: `L12542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12542) · [Before (L12378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12378)

```diff
-             cT.j.unsubscribe(UT)
+             yB.n.unsubscribe(jB)
```

#### 1634. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12381` → after: `L12545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12545) · [Before (L12381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12381)

```diff
-         canvas: () => (0, ET.h)().container.canvas,
+         canvas: () => (0, CB.g)().container.canvas,
```

#### 1635. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12383` → after: `L12547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12547) · [Before (L12383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12383)

```diff
-           cT.j.EZ("replayViewer|requested", "close")
+           yB.n.Ly("replayViewer|requested", "close")
```

#### 1636. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12386` → after: `L12550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12550) · [Before (L12386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12386)

```diff
-           cT.j.EZ("replayViewer|requested", "open"), cT.j.EZ("replayViewer|uiRefresh")
+           yB.n.Ly("replayViewer|requested", "open"), yB.n.Ly("replayViewer|uiRefresh")
```

#### 1637. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12390` → after: `L12554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12554) · [Before (L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12390)

```diff
-           null === (TT = (0, ET.d)().client) || void 0 === TT || null === (UT = TT.freeCameraController) || void 0 === UT || UT.clearMovementInputs()
+           null === (BB = (0, CB.c)().client) || void 0 === BB || null === (jB = BB.freeCameraController) || void 0 === jB || jB.clearMovementInputs()
```

#### 1638. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12396` → after: `L12560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12560) · [Before (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12396)

```diff
-         this.client = TT, this.Rl = UT, this.recording = null, this.fileHandle = null, this.fileName = null, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, this.cameraMode = "recording", this.lastFullData = {
+         this.client = BB, this.ur = jB, this.recording = null, this.fileHandle = null, this.fileName = null, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, this.cameraMode = "recording", this.lastFullData = {
```

#### 1639. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12406` → after: `L12570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12570) · [Before (L12406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12406)

```diff
-             this.hq()
+             this.mG()
```

#### 1640. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12411-L12412` → after: `L12575-L12576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12575-L12576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12575-L12576) · [Before (L12411-L12412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12411-L12412)

```diff
-         this.Rl.on("Cl", mT), this.Rl.on("afterInputs", WT), (0, FT.onGameResetOnce)((() => {
-           this.Rl.off("Cl", mT), this.Rl.off("afterInputs", WT)
+         this.ur.on("vp", zB), this.ur.on("afterInputs", QB), (0, ZB.onGameResetOnce)((() => {
+           this.ur.off("vp", zB), this.ur.off("afterInputs", QB)
```

#### 1641. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12423` → after: `L12587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12587) · [Before (L12423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12423)

```diff
-         return null !== (TT = null === (UT = this.recording) || void 0 === UT ? void 0 : UT.ticks.length) && void 0 !== TT ? TT : 0
+         return null !== (BB = null === (jB = this.recording) || void 0 === jB ? void 0 : jB.ticks.length) && void 0 !== BB ? BB : 0
```

#### 1642. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12432` → after: `L12596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12596) · [Before (L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12432)

```diff
-         this.playbackSpeed = TT, cT.j.EZ("replayViewer|uiRefresh")
+         this.playbackSpeed = BB, yB.n.Ly("replayViewer|uiRefresh")
```

#### 1643. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12453` → after: `L12617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12617) · [Before (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12453)

```diff
-         this.fileHandle = mT, this.fileName = null !== (TT = null !== (UT = null === mT || void 0 === mT ? void 0 : mT.name) && void 0 !== UT ? UT : WT) && void 0 !== TT ? TT : this.fileName, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, cT.j.EZ("replayViewer|uiRefresh")
+         this.fileHandle = zB, this.fileName = null !== (BB = null !== (jB = null === zB || void 0 === zB ? void 0 : zB.name) && void 0 !== jB ? jB : QB) && void 0 !== BB ? BB : this.fileName, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, yB.n.Ly("replayViewer|uiRefresh")
```

#### 1644. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12457` → after: `L12621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12621) · [Before (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12457)

```diff
-         return null !== (TT = null === (UT = this.recording) || void 0 === UT ? void 0 : UT.editState.playbackMark) && void 0 !== TT ? TT : null
+         return null !== (BB = null === (jB = this.recording) || void 0 === jB ? void 0 : jB.editState.playbackMark) && void 0 !== BB ? BB : null
```

#### 1645. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12482` → after: `L12646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12646) · [Before (L12482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12482)

```diff
-           cT.j.EZ("replayViewer|uiRefresh")
+           yB.n.Ly("replayViewer|uiRefresh")
```

#### 1646. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12489` → after: `L12653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12653) · [Before (L12489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12489)

```diff
-         this.recording && TT !== this.cameraMode && ("freecam" === TT ? this.client.freeCameraController.Qy(!0) : this.client.freeCameraController.isEnabled() && this.client.freeCameraController.Qy(!1), this.cameraMode = TT, this.resolveAndApplyCamera(this.getLastAppliedTickIndex … [truncated]
+         this.recording && BB !== this.cameraMode && ("freecam" === BB ? this.client.freeCameraController.mH(!0) : this.client.freeCameraController.isEnabled() && this.client.freeCameraController.mH(!1), this.cameraMode = BB, this.resolveAndApplyCamera(this.getLastAppliedTickIndex … [truncated]
```

#### 1647. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12497` → after: `L12661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12661) · [Before (L12497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12497)

```diff
-           } = Zp(this.Rl);
+           } = Gs(this.ur);
```

#### 1648. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12499` → after: `L12663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12663) · [Before (L12499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12499)

```diff
-           Cl: TT,
+           vp: BB,
```

#### 1649. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12502` → after: `L12666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12666) · [Before (L12502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12502)

```diff
-           easing: sp.j
+           easing: Ts.k
```

#### 1650. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12511-L12512` → after: `L12675-L12676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12675-L12676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12675-L12676) · [Before (L12511-L12512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12511-L12512)

```diff
-           const WT = TT.find((TT => TT.Cl === UT));
-           return WT ? pB(TT.filter((TT => TT.Cl !== UT)), {
+           const QB = BB.find((BB => BB.vp === jB));
+           return QB ? mJ(BB.filter((BB => BB.vp !== jB)), {
```

#### 1651. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12514` → after: `L12678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12678) · [Before (L12514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12514)

```diff
-             Cl: mT
+             vp: zB
```

#### 1652. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12521` → after: `L12685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12685) · [Before (L12521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12521)

```diff
-           mT = Math.max(0, Math.min(TT.Cl, UT));
+           zB = Math.max(0, Math.min(BB.vp, jB));
```

#### 1653. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12524` → after: `L12688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12688) · [Before (L12524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12524)

```diff
-           Cl: mT
+           vp: zB
```

#### 1654. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12529` → after: `L12693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12693) · [Before (L12529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12529)

```diff
-           return TT.filter((TT => TT.Cl < UT || TT.Cl > mT))
+           return BB.filter((BB => BB.vp < jB || BB.vp > zB))
```

#### 1655. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12535-L12536` → after: `L12699-L12700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12699-L12700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12699-L12700) · [Before (L12535-L12536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12535-L12536)

```diff
-         if (TT && "recording" === this.cameraMode) return this.cameraMode = "freecam", void cT.j.EZ("replayViewer|uiRefresh");
-         TT || "freecam" !== this.cameraMode || (this.cameraMode = "recording", this.resolveAndApplyCamera(this.getLastAppliedTickIndex()), cT.j.EZ("replayViewer|uiRefresh"))
+         if (BB && "recording" === this.cameraMode) return this.cameraMode = "freecam", void yB.n.Ly("replayViewer|uiRefresh");
+         BB || "freecam" !== this.cameraMode || (this.cameraMode = "recording", this.resolveAndApplyCamera(this.getLastAppliedTickIndex()), yB.n.Ly("replayViewer|uiRefresh"))
```

#### 1656. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12550` → after: `L12714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12714) · [Before (L12550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12550)

```diff
-         }, this.seekToTick(TT - 1), WT = Yp(yp(this.Rl)));
+         }, this.seekToTick(BB - 1), QB = fs(hs(this.ur)));
```

#### 1657. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12567` → after: `L12731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12731) · [Before (L12567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12567)

```diff
-             kT > 0 && (HT = Tp(mT, zT) ? Hp(WT) : kp(HT, WT));
+             UB > 0 && (uB = zs(zB, nB) ? as(QB) : ps(uB, QB));
```

#### 1658. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12570-L12571` → after: `L12734-L12735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12734-L12735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12734-L12735) · [Before (L12570-L12571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12570-L12571)

```diff
-                 entities: jT ? HT.entities : Wp(HT.entities, gT.entities, bL.h),
-                 items: jT ? HT.items : Wp(HT.items, gT.items, bL.o),
+                 entities: aB ? uB.entities : ds(uB.entities, IB.entities, Sr.k),
+                 items: aB ? uB.items : ds(uB.items, IB.items, Sr.p),
```

#### 1659. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12573-L12574` → after: `L12737-L12738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12737-L12738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12737-L12738) · [Before (L12573-L12574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12573-L12574)

```diff
-                 uiElements: jT ? HT.uiElements : mp(HT.uiElements, gT.uiElements, bL.w),
-                 environment: jT ? HT.environment : mp(HT.environment, gT.environment, bL.s),
+                 uiElements: aB ? uB.uiElements : ns(uB.uiElements, IB.uiElements, Sr.y),
+                 environment: aB ? uB.environment : ns(uB.environment, IB.environment, Sr.v),
```

#### 1660. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12585-L12586` → after: `L12749-L12750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12749-L12750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12749-L12750) · [Before (L12585-L12586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12585-L12586)

```diff
-                 const TT = mp(HT.playerHud, gT.playerHud, bL.p);
-                 (0, nT.Qc)(TT) || (lT.playerHud = TT)
+                 const BB = ns(uB.playerHud, IB.playerHud, Sr.t);
+                 (0, NB.Ac)(BB) || (pB.playerHud = BB)
```

#### 1661. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12590` → after: `L12754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12754) · [Before (L12590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12590)

```diff
-               (0, RL.k)(TT, mT) || (lT.effects = TT)
+               (0, Bs.i)(BB, zB) || (pB.effects = BB)
```

#### 1662. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12616` → after: `L12780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12780) · [Before (L12616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12616)

```diff
-         this.client.gameRecorder.stopCapture(), this.recording && this.cleanupScene(), this.stopPlayback(), this.fileHandle = null !== (mT = null === UT || void 0 === UT ? void 0 : UT.fileHandle) && void 0 !== mT ? mT : null, this.fileName = null !== (WT = null !== (zT = null === … [truncated]
+         this.client.gameRecorder.stopCapture(), this.recording && this.cleanupScene(), this.stopPlayback(), this.fileHandle = null !== (zB = null === jB || void 0 === jB ? void 0 : jB.fileHandle) && void 0 !== zB ? zB : null, this.fileName = null !== (QB = null !== (nB = null === … [truncated]
```

#### 1663. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12619` → after: `L12783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12783) · [Before (L12619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12619)

```diff
-         HT && (HT.style.display = "block"), this.recording = TT, (0, jk.m)({
+         uB && (uB.style.display = "block"), this.recording = BB, (0, pU.q)({
```

#### 1664. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12631-L12632` → after: `L12795-L12796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12795-L12796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12795-L12796) · [Before (L12631-L12632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12631-L12632)

```diff
-         }, wp(this.client, this.Rl), tp(this.Rl, this.recording), cT.j.EZ("replayViewer|replayLoaded"), this.recording.ticks.length > 0 && (this.applyTickAtIndex(0, "seek"), this.currentTickIndex = 1), this.isPlaying = !1, kT = this.Rl, jT = TT.meta.gameNameWithVariation, lT = () … [truncated]
-           lT() || "Km" === TT.status || ("failed" !== TT.status ? kT.MI(!1) : cT.j.EZ(Kj.d, TT.messageKey))
+         }, Fs(this.client, this.ur), Ys(this.ur, this.recording), yB.n.Ly("replayViewer|replayLoaded"), this.recording.ticks.length > 0 && (this.applyTickAtIndex(0, "seek"), this.currentTickIndex = 1), this.isPlaying = !1, UB = this.ur, aB = BB.meta.gameNameWithVariation, pB = () … [truncated]
+           pB() || "xz" === BB.status || ("failed" !== BB.status ? UB.nD(!1) : yB.n.Ly(la.f, BB.messageKey))
```

#### 1665. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12634-L12635` → after: `L12798-L12799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12798-L12799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12798-L12799) · [Before (L12634-L12635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12634-L12635)

```diff
-           console.error("Shader pack check failed for a replay", TT), lT() || cT.j.EZ(Kj.d, "shaderPack:failedToCompile")
-         }))), cT.j.EZ("replayViewer|uiRefresh")
+           console.error("Shader pack check failed for a replay", BB), pB() || yB.n.Ly(la.f, "shaderPack:failedToCompile")
+         }))), yB.n.Ly("replayViewer|uiRefresh")
```

#### 1666. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12644` → after: `L12808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12808) · [Before (L12644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12644)

```diff
-         this.isPlaying = !0, cT.j.EZ("replayViewer|uiRefresh")
+         this.isPlaying = !0, yB.n.Ly("replayViewer|uiRefresh")
```

#### 1667. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12647` → after: `L12811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12811) · [Before (L12647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12647)

```diff
-         this.isPlaying = !1, this.tickAccumulator = 0, cT.j.EZ("replayViewer|uiRefresh")
+         this.isPlaying = !1, this.tickAccumulator = 0, yB.n.Ly("replayViewer|uiRefresh")
```

#### 1668. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12650` → after: `L12814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12814) · [Before (L12650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12650)

```diff
-         this.playbackSpeed = (0, eB.i)(this.playbackSpeed, TT), cT.j.EZ("replayViewer|uiRefresh")
+         this.playbackSpeed = (0, iJ.i)(this.playbackSpeed, BB), yB.n.Ly("replayViewer|uiRefresh")
```

#### 1669. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12654` → after: `L12818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12818) · [Before (L12654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12654)

```diff
-         const UT = Math.round(TT * this.recording.meta.sF);
+         const jB = Math.round(BB * this.recording.meta.KF);
```

#### 1670. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12665` → after: `L12829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12829) · [Before (L12665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12665)

```diff
-         if (this.tickAccumulator = 0, gT === nT) return this.currentTickIndex = gT + 1, void cT.j.EZ("replayViewer|uiRefresh");
+         if (this.tickAccumulator = 0, IB === NB) return this.currentTickIndex = IB + 1, void yB.n.Ly("replayViewer|uiRefresh");
```

#### 1671. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12672` → after: `L12836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12836) · [Before (L12672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12672)

```diff
-         cT.j.EZ("replayViewer|uiRefresh")
+         yB.n.Ly("replayViewer|uiRefresh")
```

#### 1672. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12676` → after: `L12840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12840) · [Before (L12676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12676)

```diff
-         (0, Gk.d)() || (0, JB.c)(this.hasUnsavedChanges, TT)
+         (0, KU.d)() || (0, fJ.b)(this.hasUnsavedChanges, BB)
```

#### 1673. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12680-L12681` → after: `L12844-L12845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12844-L12845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12844-L12845) · [Before (L12680-L12681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12680-L12681)

```diff
-           TT.MI(!0), Aj.failForPage(UT)
-         }(this.Rl, TT)
+           BB.nD(!0), Ra.failForPage(jB)
+         }(this.ur, BB)
```

#### 1674. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12690` → after: `L12854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12854) · [Before (L12690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12690)

```diff
-             cT.j.EZ("replayViewer|uiActionRequested", TT);
+             yB.n.Ly("replayViewer|uiActionRequested", BB);
```

#### 1675. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12719` → after: `L12883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12883) · [Before (L12719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12719)

```diff
-               await (0, xB.c)(dB)
+               await (0, oJ.e)(HJ)
```

#### 1676. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12724` → after: `L12888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12888) · [Before (L12724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12724)

```diff
-         gH.d.apply({
+         Nu.c.apply({
```

#### 1677. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12726` → after: `L12890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12890) · [Before (L12726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12726)

```diff
-         }), this.Rl.Nl.bmT.clear(), this.Rl.Nl.OmT.clear(), this.Rl.Nl.emT.length = 0, this.Rl.Nl.YmT.clear(), this.Rl.Nl.JmT.clear(), this.Rl.Nl.xmT.length = 0
+         }), this.ur.zr.NzB.clear(), this.ur.zr.uzB.clear(), this.ur.zr.UzB.length = 0, this.ur.zr.azB.clear(), this.ur.zr.rzB.clear(), this.ur.zr.szB.length = 0
```

#### 1678. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12741` → after: `L12905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12905) · [Before (L12741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12741)

```diff
-         (0, Fp.e)(this.Rl, null !== (TT = null === (UT = this.recording) || void 0 === UT ? void 0 : UT.meta.localPlayerEntityId) && void 0 !== TT ? TT : null),
+         (0, Ps.h)(this.ur, null !== (BB = null === (jB = this.recording) || void 0 === jB ? void 0 : jB.meta.localPlayerEntityId) && void 0 !== BB ? BB : null),
```

#### 1679. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12747` → after: `L12911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12911) · [Before (L12747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12747)

```diff
-         }(this.Rl, Object.keys(this.lastFullData.items)), this.recording = null, this.fileHandle = null, this.fileName = null, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, this.cameraMode = "recording", this.lastFullData = {
+         }(this.ur, Object.keys(this.lastFullData.items)), this.recording = null, this.fileHandle = null, this.fileName = null, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, this.cameraMode = "recording", this.lastFullData = {
```

#### 1680. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12762-L12763` → after: `L12926-L12927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12926-L12927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12926-L12927) · [Before (L12762-L12763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12762-L12763)

```diff
-         for (this.tickAccumulator += this.playbackSpeed; this.tickAccumulator >= 1 && this.currentTickIndex < UT;) this.tickAccumulator -= 1, this.applyTickAtIndex(this.currentTickIndex, "playback"), this.currentTickIndex++, cT.j.EZ("replayViewer|uiRefresh");
-         this.currentTickIndex >= UT && (this.isPlaying = !1, cT.j.EZ("replayViewer|uiRefresh"))
+         for (this.tickAccumulator += this.playbackSpeed; this.tickAccumulator >= 1 && this.currentTickIndex < jB;) this.tickAccumulator -= 1, this.applyTickAtIndex(this.currentTickIndex, "playback"), this.currentTickIndex++, yB.n.Ly("replayViewer|uiRefresh");
+         this.currentTickIndex >= jB && (this.isPlaying = !1, yB.n.Ly("replayViewer|uiRefresh"))
```

#### 1681. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12767-L12768` → after: `L12931-L12932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12931-L12932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12931-L12932) · [Before (L12767-L12768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12767-L12768)

```diff
-         wp(this.client, this.Rl), tp(this.Rl, this.recording);
-         for (let mT = 0; mT <= TT; mT++) mB(this.Rl, this.recording.ticks[mT].structuralEvents);
+         Fs(this.client, this.ur), Ys(this.ur, this.recording);
+         for (let zB = 0; zB <= BB; zB++) nJ(this.ur, this.recording.ticks[zB].structuralEvents);
```

#### 1682. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12774-L12775` → after: `L12938-L12939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12938-L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12938-L12939) · [Before (L12774-L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12774-L12775)

```diff
-         for (let WT = UT; WT > TT; WT--) WB(this.Rl, this.recording.ticks[WT].structuralEvents);
-         wp(this.client, this.Rl),
+         for (let QB = jB; QB > BB; QB--) dJ(this.ur, this.recording.ticks[QB].structuralEvents);
+         Fs(this.client, this.ur),
```

#### 1683. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12777-L12778` → after: `L12941-L12942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12941-L12942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12941-L12942) · [Before (L12777-L12778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12777-L12778)

```diff
-             for (const UT of Object.keys(TT.Nl.lZ.hash)) {
-               const mT = TT.Nl.lZ.hash[Number(UT)];
+             for (const jB of Object.keys(BB.zr.Fm.hash)) {
+               const zB = BB.zr.Fm.hash[Number(jB)];
```

#### 1684. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12783-L12786` → after: `L12947-L12950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12947-L12950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12947-L12950) · [Before (L12783-L12786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12783-L12786)

```diff
-                 const WT = mT.i * sT.z + UT[0],
-                   zT = mT.j * sT.z + UT[1],
-                   MT = mT.k * sT.z + UT[2];
-                 TT.bloxd.blockAdded(WT, zT, MT, TT.bloxd.uq(WT, zT, MT))
+                 const QB = zB.i * XB.y + jB[0],
+                   nB = zB.j * XB.y + jB[1],
+                   dB = zB.k * XB.y + jB[2];
+                 BB.bloxd.blockAdded(QB, nB, dB, BB.bloxd.JG(QB, nB, dB))
```

#### 1685. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12789` → after: `L12953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12953) · [Before (L12789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12789)

```diff
-           }(this.Rl);
+           }(this.ur);
```

#### 1686. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12795` → after: `L12959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12959) · [Before (L12795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12795)

```diff
-         Vp(TT.uiElements), Pp(TT.environment), Gp(this.client, this.Rl, {}, TT.entities), BB(this.Rl, {}, TT.items), TT.hotbar && hL(this.Rl, TT.hotbar), TT.playerHud && AL(TT.playerHud), (0, RL.f)(this.client, TT.effects, this.lastFullData.effects, null !== (mT = null === (WT =  … [truncated]
+         es(BB.uiElements), Ws(BB.environment), Cs(this.client, this.ur, {}, BB.entities), yJ(this.ur, {}, BB.items), BB.hotbar && br(this.ur, BB.hotbar), BB.playerHud && Or(BB.playerHud), (0, Bs.d)(this.client, BB.effects, this.lastFullData.effects, null !== (zB = null === (QB =  … [truncated]
```

#### 1687. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12799` → after: `L12963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12963) · [Before (L12799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12799)

```diff
-         const WT = null !== (UT = null === (mT = this.recording) || void 0 === mT ? void 0 : mT.meta.localPlayerEntityId) && void 0 !== UT ? UT : null;
+         const QB = null !== (jB = null === (zB = this.recording) || void 0 === zB ? void 0 : zB.meta.localPlayerEntityId) && void 0 !== jB ? jB : null;
```

#### 1688. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12802` → after: `L12966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12966) · [Before (L12802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12802)

```diff
-         zT && this.Rl.pY.setPosition(this.Rl.VV, zT.position)
+         nB && this.ur.vG.setPosition(this.ur.zV, nB.position)
```

#### 1689. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12832` → after: `L12996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12996) · [Before (L12832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12832)

```diff
-               Cl: 0,
+               vp: 0,
```

#### 1690. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12835` → after: `L12999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R12999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L12999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L12999) · [Before (L12835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12835)

```diff
-               easing: sp.j
+               easing: Ts.k
```

#### 1691. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12837` → after: `L13001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13001) · [Before (L12837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12837)

```diff
-               Cl: 1,
+               vp: 1,
```

#### 1692. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12840` → after: `L13004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13004) · [Before (L12840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12840)

```diff
-               easing: sp.j
+               easing: Ts.k
```

#### 1693. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12851` → after: `L13015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13015) · [Before (L12851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12851)

```diff
-         const WT = null !== (UT = null === (mT = this.recording) || void 0 === mT ? void 0 : mT.meta.localPlayerEntityId) && void 0 !== UT ? UT : null;
+         const QB = null !== (jB = null === (zB = this.recording) || void 0 === zB ? void 0 : zB.meta.localPlayerEntityId) && void 0 !== jB ? jB : null;
```

#### 1694. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12854-L12855` → after: `L13018-L13019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13018-L13019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13018-L13019) · [Before (L12854-L12855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12854-L12855)

```diff
-           const zT = null !== (WT = null === mT || void 0 === mT ? void 0 : mT.recordedLocalPlayerEId) && void 0 !== WT ? WT : null;
-           null !== mT && void 0 !== mT && mT.applyRecordedViewState && zT ? (0, Fp.d)(TT, zT, UT) : (0, Fp.e)(TT, zT);
+           const nB = null !== (QB = null === zB || void 0 === zB ? void 0 : zB.recordedLocalPlayerEId) && void 0 !== QB ? QB : null;
+           null !== zB && void 0 !== zB && zB.applyRecordedViewState && nB ? (0, Ps.e)(BB, nB, jB) : (0, Ps.h)(BB, nB);
```

#### 1695. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12860-L12864` → after: `L13024-L13028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13024-L13028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13024-L13028) · [Before (L12860-L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12860-L12864)

```diff
-             pp: nT,
-             kmT: HT
-           } = (0, rz.c)([gT[0], gT[1], gT[2]]);
-           rk.d.applyReplayView(TT, [MT[0], MT[1], MT[2]], nT, HT)
-         }(this.Rl, TT, {
+             gp: NB,
+             CjB: uB
+           } = (0, wn.d)([IB[0], IB[1], IB[2]]);
+           lU.b.applyReplayView(BB, [dB[0], dB[1], dB[2]], NB, uB)
+         }(this.ur, BB, {
```

#### 1696. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12867` → after: `L13031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13031) · [Before (L12867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12867)

```diff
-         }) : "freecam" !== this.cameraMode && "keyframe" !== this.cameraMode || (0, Fp.e)(this.Rl, WT)
+         }) : "freecam" !== this.cameraMode && "keyframe" !== this.cameraMode || (0, Ps.h)(this.ur, QB)
```

#### 1697. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12873` → after: `L13037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13037) · [Before (L12873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12873)

```diff
-         }, this.hasUnsavedChanges = !0, "keyframe" === this.cameraMode && this.resolveAndApplyCamera(this.getLastAppliedTickIndex()), cT.j.EZ("replayViewer|uiRefresh"))
+         }, this.hasUnsavedChanges = !0, "keyframe" === this.cameraMode && this.resolveAndApplyCamera(this.getLastAppliedTickIndex()), yB.n.Ly("replayViewer|uiRefresh"))
```

#### 1698. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12882` → after: `L13046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13046) · [Before (L12882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12882)

```diff
-         return Math.min(TT, UT + this.tickAccumulator + this.Rl.BTT * this.playbackSpeed)
+         return Math.min(BB, jB + this.tickAccumulator + this.ur.nBB * this.playbackSpeed)
```

#### 1699. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12905` → after: `L13069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13069) · [Before (L12905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12905)

```diff
-             const WT = Hp(UT);
+             const QB = as(jB);
```

#### 1700. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12907-L12910` → after: `L13071-L13074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13071-L13074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13071-L13074) · [Before (L12907-L12910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12907-L12910)

```diff
-               uiElements: mp(WT.uiElements, TT.uiElements, bL.w),
-               environment: mp(WT.environment, TT.environment, bL.s),
-               entities: Wp(WT.entities, TT.entities, bL.h),
-               items: Wp(WT.items, TT.items, bL.o),
+               uiElements: ns(QB.uiElements, BB.uiElements, Sr.y),
+               environment: ns(QB.environment, BB.environment, Sr.v),
+               entities: ds(QB.entities, BB.entities, Sr.k),
+               items: ds(QB.items, BB.items, Sr.p),
```

#### 1701. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12913` → after: `L13077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13077) · [Before (L12913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12913)

```diff
-               playerHud: WT.playerHud ? mp(WT.playerHud, TT.playerHud, bL.p) : void 0,
+               playerHud: QB.playerHud ? ns(QB.playerHud, BB.playerHud, Sr.t) : void 0,
```

#### 1702. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12922` → after: `L13086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13086) · [Before (L12922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12922)

```diff
-         this.lastFullData = zT ? Hp(WT) : kp(this.lastFullData, WT), (0, nT.Qc)(MT.uiElements) || Vp(MT.uiElements), (0, nT.Qc)(MT.environment) || Pp(MT.environment), Gp(this.client, this.Rl, gT, MT.entities), BB(this.Rl, HT, MT.items), NL(MT.hotbar) && this.lastFullData.hotbar & … [truncated]
+         this.lastFullData = nB ? as(QB) : ps(this.lastFullData, QB), (0, NB.Ac)(dB.uiElements) || es(dB.uiElements), (0, NB.Ac)(dB.environment) || Ws(dB.environment), Cs(this.client, this.ur, IB, dB.entities), yJ(this.ur, uB, dB.items), Cr(dB.hotbar) && this.lastFullData.hotbar & … [truncated]
```

#### 1703. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12924` → after: `L13088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13088) · [Before (L12924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12924)

```diff
-         }(this.Rl, MT.ephemeralEvents), "seek" === UT && this.resolveAndApplyCamera(TT), this.moveLocalPlayer(this.lastFullData)
+         }(this.ur, dB.ephemeralEvents), "seek" === jB && this.resolveAndApplyCamera(BB), this.moveLocalPlayer(this.lastFullData)
```

#### 1704. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12929` → after: `L13093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13093) · [Before (L12929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12929)

```diff
-         this.yUT = TT, this.onAcknowledged = UT, this.requestSnapshot = mT, this.onForgotten = WT, this.lastSeq = 0, this.pending = [], this.lastSnapshotRequestAt = Number.NEGATIVE_INFINITY, this.snapshotDue = !1
+         this.kjB = BB, this.onAcknowledged = jB, this.requestSnapshot = zB, this.onForgotten = QB, this.lastSeq = 0, this.pending = [], this.lastSnapshotRequestAt = Number.NEGATIVE_INFINITY, this.snapshotDue = !1
```

#### 1705. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12938` → after: `L13102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13102) · [Before (L12938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12938)

```diff
-         return TT && !TT(this.yUT()) && console.warn("A predicted inventory action did not apply to the inventory it was predicted on"), this.record(TT)
+         return BB && !BB(this.kjB()) && console.warn("A predicted inventory action did not apply to the inventory it was predicted on"), this.record(BB)
```

#### 1706. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12967-L12968` → after: `L13131-L13132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13131-L13132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13131-L13132) · [Before (L12967-L12968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12967-L12968)

```diff
-         const mT = this.yUT(),
-           WT = null !== mT.OM;
+         const zB = this.kjB(),
+           QB = null !== zB.hd;
```

#### 1707. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12975-L12976` → after: `L13139-L13140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13139-L13140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13139-L13140) · [Before (L12975-L12976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12975-L12976)

```diff
-             of this.pending) UT(mT) || console.warn(`Predicted inventory action ${TT} no longer applies after a server snapshot`)
-         })), WT && null === mT.OM
+             of this.pending) jB(zB) || console.warn(`Predicted inventory action ${BB} no longer applies after a server snapshot`)
+         })), QB && null === zB.hd
```

#### 1708. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12979` → after: `L13143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13143) · [Before (L12979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12979)

```diff
-     var aB = mT(38139);
+     var YJ = zB(38093);
```

#### 1709. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12982` → after: `L13146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13146) · [Before (L12982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12982)

```diff
-         this.Nl = TT, this.pickups = []
+         this.zr = BB, this.pickups = []
```

#### 1710. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12988` → after: `L13152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13152) · [Before (L12988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12988)

```diff
-           drop: null === UT ? mT : null,
+           drop: null === jB ? zB : null,
```

#### 1711. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12996-L12997` → after: `L13160-L13161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13160-L13161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13160-L13161) · [Before (L12996-L12997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12996-L12997)

```diff
-           if ((null === (MT = gT.drop) || void 0 === MT ? void 0 : MT.rn) !== TT) continue;
-           const nT = (0, Rn.B)(mT, gT.drop.Kn, gT.drop.Sn),
+           if ((null === (dB = IB.drop) || void 0 === dB ? void 0 : dB.cN) !== BB) continue;
+           const NB = (0, Bu.t)(zB, IB.drop.bN, IB.drop.vN),
```

#### 1712. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L12999` → after: `L13163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13163) · [Before (L12999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L12999)

```diff
-           gT.serverEId = HT, gT.drop = null, null !== HT && this.Nl.hasItem(HT) && (this.hidden(HT) ? gT.hidden = !0 : WT && !zT(HT) && (this.Nl.hide(HT), gT.hidden = !0))
+           IB.serverEId = uB, IB.drop = null, null !== uB && this.zr.hasItem(uB) && (this.hidden(uB) ? IB.hidden = !0 : QB && !nB(uB) && (this.zr.hide(uB), IB.hidden = !0))
```

#### 1713. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13031` → after: `L13195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13195) · [Before (L13031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13031)

```diff
-         this.Nl.hasItem(TT) && this.Nl.show(TT)
+         this.zr.hasItem(BB) && this.zr.show(BB)
```

#### 1714. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13046` → after: `L13210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13210) · [Before (L13046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13046)

```diff
-         this.Nl = TT, this.unmatched = new Map, this.byServerEId = new Map, this.checks = null, this.suspended = !1, this.inResumeListing = !1, this.offlinePickups = void 0, this.offlinePickups = new yB(TT)
+         this.zr = BB, this.unmatched = new Map, this.byServerEId = new Map, this.checks = null, this.suspended = !1, this.inResumeListing = !1, this.offlinePickups = void 0, this.offlinePickups = new VJ(BB)
```

#### 1715. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13061` → after: `L13225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13225) · [Before (L13061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13061)

```diff
-           const TT = this.Nl.Aq(WT.serverEId);
+           const BB = this.zr.iG(QB.serverEId);
```

#### 1716. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13063-L13064` → after: `L13227-L13228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13227-L13228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13227-L13228) · [Before (L13063-L13064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13063-L13064)

```diff
-             Fn: WT.serverEId,
-             Cn: null
+             wN: QB.serverEId,
+             CN: null
```

#### 1717. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13068-L13072` → after: `L13232-L13236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13232-L13236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13232-L13236) · [Before (L13068-L13072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13068-L13072)

```diff
-           Fn: TT,
-           Cn: {
-             rn: WT.seq,
-             Kn: WT.itemId,
-             Sn: WT.index
+           wN: BB,
+           CN: {
+             cN: QB.seq,
+             bN: QB.itemId,
+             vN: QB.index
```

#### 1718. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13080` → after: `L13244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13244) · [Before (L13080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13080)

```diff
-         zT && this.remove(zT), this.offlinePickups.note(UT, null !== (WT = null === zT || void 0 === zT ? void 0 : zT.serverEId) && void 0 !== WT ? WT : null, mT)
+         nB && this.remove(nB), this.offlinePickups.note(jB, null !== (QB = null === nB || void 0 === nB ? void 0 : nB.serverEId) && void 0 !== QB ? QB : null, zB)
```

#### 1719. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13083` → after: `L13247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13247) · [Before (L13083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13083)

```diff
-         this.predict(TT, UT, mT, WT, (0, aB.p)(zT, MT), (0, aB.n)(MT))
+         this.predict(BB, jB, zB, QB, (0, YJ.t)(nB, dB), (0, YJ.q)(dB))
```

#### 1720. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13086-L13087` → after: `L13250-L13251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13250-L13251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13250-L13251) · [Before (L13086-L13087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13086-L13087)

```diff
-         const zT = (0, aB.q)(TT);
-         this.predict(TT, mT, WT, {}, (0, aB.j)(UT, zT), (0, aB.f)(zT))
+         const nB = (0, YJ.w)(BB);
+         this.predict(BB, zB, QB, {}, (0, YJ.i)(jB, nB), (0, YJ.e)(nB))
```

#### 1721. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13091` → after: `L13255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13255) · [Before (L13091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13091)

```diff
-         const nT = null !== (gT = this.unmatched.get(TT)) && void 0 !== gT ? gT : [],
+         const NB = null !== (IB = this.unmatched.get(BB)) && void 0 !== IB ? IB : [],
```

#### 1722. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13093` → after: `L13257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13257) · [Before (L13093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13093)

```diff
-             eId: this.Nl.spawn(UT, mT, WT, zT, MT),
+             eId: this.zr.spawn(jB, zB, QB, nB, dB),
```

#### 1723. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13096` → after: `L13260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13260) · [Before (L13096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13096)

```diff
-             index: (0, Rn.v)(nT.map((TT => TT.itemId)), UT),
+             index: (0, Bu.q)(NB.map((BB => BB.itemId)), jB),
```

#### 1724. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13116` → after: `L13280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13280) · [Before (L13116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13116)

```diff
-         return null !== (UT = this.all().find((UT => UT.eId === TT))) && void 0 !== UT ? UT : null
+         return null !== (jB = this.all().find((jB => jB.eId === BB))) && void 0 !== jB ? jB : null
```

#### 1725. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13119` → after: `L13283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13283) · [Before (L13119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13119)

```diff
-         if (TT === Rn.E) return void(this.inResumeListing = !1);
+         if (BB === Bu.w) return void(this.inResumeListing = !1);
```

#### 1726. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13152` → after: `L13316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13316) · [Before (L13152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13152)

```diff
-         else if (this.Nl.hasItem(UT)) return void this.discard(TT);
+         else if (this.zr.hasItem(jB)) return void this.discard(BB);
```

#### 1727. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13157` → after: `L13321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13321) · [Before (L13157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13157)

```diff
-         return UT ? null === this.Nl.Aq(UT.eId) ? (this.byServerEId.delete(TT), this.discard(UT), null) : (UT.serverItemArrived = !0, UT.serverMovedAt = Date.now(), this.checks ??= setInterval((() => {
+         return jB ? null === this.zr.iG(jB.eId) ? (this.byServerEId.delete(BB), this.discard(jB), null) : (jB.serverItemArrived = !0, jB.serverMovedAt = Date.now(), this.checks ??= setInterval((() => {
```

#### 1728. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13187-L13188` → after: `L13351-L13352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13351-L13352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13351-L13352) · [Before (L13187-L13188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13187-L13188)

```diff
-           const WT = this.Nl.Aq(mT.eId),
-             zT = this.Nl.Aq(mT.serverEId),
+           const QB = this.zr.iG(zB.eId),
+             nB = this.zr.iG(zB.serverEId),
```

#### 1729. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13195` → after: `L13359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13359) · [Before (L13195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13195)

```diff
-         this.byServerEId.delete(TT.serverEId), clearTimeout(TT.timeout), null !== this.Nl.Aq(TT.serverEId) && this.Nl.reveal(TT.serverEId, TT.eId), this.Nl.remove(TT.eId)
+         this.byServerEId.delete(BB.serverEId), clearTimeout(BB.timeout), null !== this.zr.iG(BB.serverEId) && this.zr.reveal(BB.serverEId, BB.eId), this.zr.remove(BB.eId)
```

#### 1730. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13212` → after: `L13376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13376) · [Before (L13212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13212)

```diff
-         clearTimeout(TT.timeout), this.Nl.remove(TT.eId)
+         clearTimeout(BB.timeout), this.zr.remove(BB.eId)
```

#### 1731. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13217` → after: `L13381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13381) · [Before (L13217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13217)

```diff
-         this.Rl = TT
+         this.ur = BB
```

#### 1732. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13220` → after: `L13384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13384) · [Before (L13220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13220)

```diff
-         return (0, WH.j)(this.Rl, null, WT, TT, {
+         return (0, nu.j)(this.ur, null, QB, BB, {
```

#### 1733. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13223` → after: `L13387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13387) · [Before (L13223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13223)

```diff
-           wz: !0,
+           Vn: !0,
```

#### 1734. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13228` → after: `L13392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13392) · [Before (L13228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13228)

```diff
-         this.Rl.pY.deleteEntity(TT)
+         this.ur.vG.deleteEntity(BB)
```

#### 1735. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13231` → after: `L13395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13395) · [Before (L13231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13231)

```diff
-         return this.Rl.pY.uTT(TT, "position") ? this.Rl.pY.Aq(TT) : null
+         return this.ur.vG.HBB(BB, "position") ? this.ur.vG.iG(BB) : null
```

#### 1736. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13234` → after: `L13398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13398) · [Before (L13234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13234)

```diff
-         return this.Rl.pY.uTT(TT, "itemState")
+         return this.ur.vG.HBB(BB, "itemState")
```

#### 1737. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13237` → after: `L13401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13401) · [Before (L13237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13237)

```diff
-         const mT = this.Aq(UT);
+         const zB = this.iG(jB);
```

#### 1738. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13239-L13240` → after: `L13403-L13404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13403-L13404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13403-L13404) · [Before (L13239-L13240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13239-L13240)

```diff
-           this.Rl.pY.setPosition(TT, mT);
-           const UT = this.Rl.pY.getState(TT, "smoothToServerPos"),
+           this.ur.vG.setPosition(BB, zB);
+           const jB = this.ur.vG.getState(BB, "smoothToServerPos"),
```

#### 1739. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13243` → after: `L13407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13407) · [Before (L13243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13243)

```diff
-         }(0, WH.I)(this.Rl, TT, (0, WH.o)(this.Rl, UT), !0)
+         }(0, nu.C)(this.ur, BB, (0, nu.l)(this.ur, jB), !0)
```

#### 1740. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13246` → after: `L13410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13410) · [Before (L13246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13246)

```diff
-         this.Rl.pY.uTT(TT, "hidingMeshManager") || (0, WH.I)(this.Rl, TT, null, !0)
+         this.ur.vG.HBB(BB, "hidingMeshManager") || (0, nu.C)(this.ur, BB, null, !0)
```

#### 1741. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13249` → after: `L13413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13413) · [Before (L13249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13249)

```diff
-         this.Rl.pY.JV(TT, "hidingMeshManager")
+         this.ur.vG.ZY(BB, "hidingMeshManager")
```

#### 1742. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13252-L13258` → after: `L13416-L13422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13416-L13422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13416-L13422) · [Before (L13252-L13258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13252-L13258)

```diff
-     var sB = mT(39379),
-       FB = mT(6698),
-       PB = mT(34198),
-       VB = mT(4548),
-       uB = mT(1928);
-     (0, Jg.w)(dg);
-     const CB = new jH.c((() => mT.e(211).then((() => mT(41671))).then((TT => () => new TT.default))));
+     var AJ = zB(39352),
+       TJ = zB(6585),
+       PJ = zB(34171),
+       WJ = zB(4557),
+       eJ = zB(1851);
+     (0, HI.s)(FI);
+     const lJ = new pu.b((() => zB.e(211).then((() => zB(41634))).then((BB => () => new BB.default))));
```

#### 1743. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13260` → after: `L13424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13424) · [Before (L13260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13260)

```diff
-     const rB = new Jk.h((TT => mT(39381)(`./${TT}/${TT}Client`)));
+     const wJ = new qU.e((BB => zB(39356)(`./${BB}/${BB}Client`)));
```

#### 1744. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13262` → after: `L13426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13426) · [Before (L13262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13262)

```diff
-       (0, xg.d)(`${EB}'s client code failed to evaluate`, TT)
+       (0, DI.b)(`${bJ}'s client code failed to evaluate`, BB)
```

#### 1745. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13266` → after: `L13430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13430) · [Before (L13266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13266)

```diff
-         this.Rl = TT, this.meshCreator = UT, this.entities = {}, this.ironChestPasskeyCache = new Ok, this.cameraController = void 0, this.freeCameraController = void 0, this.scriptedCameraController = void 0, this.environmentController = void 0, this.groundArrowPathController =  … [truncated]
+         this.ur = BB, this.meshCreator = jB, this.entities = {}, this.ironChestPasskeyCache = new MU, this.cameraController = void 0, this.freeCameraController = void 0, this.scriptedCameraController = void 0, this.environmentController = void 0, this.groundArrowPathController =  … [truncated]
```

#### 1746. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13268-L13270` → after: `L13432-L13434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13432-L13434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13432-L13434) · [Before (L13268-L13270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13268-L13270)

```diff
-             if (Ig.b.get("clientEscMenuOptions").showChunkBorders) {
-               const TT = this.Rl.camera.Aq();
-               return (0, sT.J)(TT)
+             if (AI.c.get("clientEscMenuOptions").showChunkBorders) {
+               const BB = this.ur.camera.iG();
+               return (0, XB.T)(BB)
```

#### 1747. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13276` → after: `L13440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13440) · [Before (L13276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13276)

```diff
-         }), this.gameRecorder = new Qp(this, this.Rl), this.gameReplayer = new wB(this, this.Rl), this.itemDropPrediction = new IB(new QB(TT)), (0, FT.onGameResetOnce)((() => {
+         }), this.gameRecorder = new As(this, this.ur), this.gameReplayer = new DJ(this, this.ur), this.itemDropPrediction = new XJ(new ZJ(BB)), (0, ZB.onGameResetOnce)((() => {
```

#### 1748. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13278` → after: `L13442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13442) · [Before (L13278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13278)

```diff
-         })), this.inventoryPrediction = new tB((() => TT.pY.yUT(TT.VV)), (TT => {
+         })), this.inventoryPrediction = new FJ((() => BB.vG.kjB(BB.zV)), (BB => {
```

#### 1749. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13281` → after: `L13445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13445) · [Before (L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13281)

```diff
-           (0, FT.sendColyMessage)(Rn.Ei, null)
+           (0, ZB.sendColyMessage)(Bu.Dj, null)
```

#### 1750. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13291-L13292` → after: `L13455-L13456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13455-L13456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13455-L13456) · [Before (L13291-L13292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13291-L13292)

```diff
-         (0, UU.i)(), (0, kH.k)();
-         const UT = Promise.all([CB.load(), lH.h.load()]);
+         (0, jj.l)(), (0, au.h)();
+         const jB = Promise.all([lJ.load(), ru.i.load()]);
```

#### 1751. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13300` → after: `L13464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13464) · [Before (L13300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13300)

```diff
-         (0, dk.k)(null);
+         (0, oU.l)(null);
```

#### 1752. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13302-L13303` → after: `L13466-L13467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13466-L13467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13466-L13467) · [Before (L13302-L13303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13302-L13303)

```diff
-           nT = Ig.b.get("clientEscMenuOptions");
-         Ig.b.reprobeOldIntelDriver(), await (0, kH.r)("shader pack");
+           NB = AI.c.get("clientEscMenuOptions");
+         AI.c.reprobeOldIntelDriver(), await (0, au.s)("shader pack");
```

#### 1753. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13305-L13306` → after: `L13469-L13470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13469-L13470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13469-L13470) · [Before (L13305-L13306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13305-L13306)

```diff
-           kT = Ig.b.isWebGpuDefaultOff(),
-           jT = nT.useWebGpu || (0, PB.c)(null !== HT, kT);
+           UB = AI.c.isWebGpuDefaultOff(),
+           aB = NB.useWebGpu || (0, PJ.d)(null !== uB, UB);
```

#### 1754. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13308` → after: `L13472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13472) · [Before (L13308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13308)

```diff
-         (0, Yg.h)(jT);
+         (0, oI.g)(aB);
```

#### 1755. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13312` → after: `L13476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13476) · [Before (L13312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13312)

```diff
-           await (0, kH.r)("renderer");
+           await (0, au.s)("renderer");
```

#### 1756. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13318` → after: `L13482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13482) · [Before (L13318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13318)

```diff
-           } = await (0, Yg.b)(WT, {
+           } = await (0, oI.d)(QB, {
```

#### 1757. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13320` → after: `L13484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13484) · [Before (L13320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13320)

```diff
-             webGpuDefaultOffReason: Ig.b.webGpuDefaultOffReason(),
+             webGpuDefaultOffReason: AI.c.webGpuDefaultOffReason(),
```

#### 1758. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13324` → after: `L13488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13488) · [Before (L13324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13324)

```diff
-           if ((0, mn.r)("webgpuloss")) {
+           if ((0, IN.q)("webgpuloss")) {
```

#### 1759. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13331` → after: `L13495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13495) · [Before (L13331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13331)

```diff
-             (0, Wn.c)((UT => {
+             (0, NN.d)((jB => {
```

#### 1760. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13336-L13340` → after: `L13500-L13504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13500-L13504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13500-L13504) · [Before (L13336-L13340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13336-L13340)

```diff
-           const MT = await mT() ? Hg.x() : null;
-           if (null === MT || !pH.e.provideWasmModule(MT)) {
-             (0, Jg.i)();
-             const TT = (0, ig.f)();
-             return fU.c.errorWithCode("timeout" === TT || "fetch_failed" === TT ? "Bloxd couldn't finish loading. Check your connection and refresh the page." : "Bloxd couldn't start in this browser. Try another browser, or turn off blockers for this site.", qU.j.INITIALISE_NOA,  … [truncated]
+           const dB = await zB() ? rI.w() : null;
+           if (null === dB || !Ju.i.provideWasmModule(dB)) {
+             (0, HI.g)();
+             const BB = (0, EI.g)();
+             return Gj.d.errorWithCode("timeout" === BB || "fetch_failed" === BB ? "Bloxd couldn't finish loading. Check your connection and refresh the page." : "Bloxd couldn't start in this browser. Try another browser, or turn off blockers for this site.", Lj.j.INITIALISE_NOA,  … [truncated]
```

#### 1761. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13344-L13351` → after: `L13508-L13515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13508-L13515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13508-L13515) · [Before (L13344-L13351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13344-L13351)

```diff
-           const ZT = null !== (pT = null === zT || void 0 === zT ? void 0 : zT.Yq) && void 0 !== pT ? pT : await (0, Yg.f)();
-           await (0, kH.r)("engine");
-           const qT = Ig.b.get("clientEscMenuOptions").antiAliasing;
-           if (Kg.c.setRendererMsaa(qT), lT = new Tg({
-               eC: TT,
-               Yq: ZT,
-               NB: null !== (vT = null === zT || void 0 === zT ? void 0 : zT.NB) && void 0 !== vT ? vT : null,
-               sF: BT.f.clientTicksPerSecond,
+           const mB = null !== (sB = null === nB || void 0 === nB ? void 0 : nB.QG) && void 0 !== sB ? sB : await (0, oI.e)();
+           await (0, au.s)("engine");
+           const LB = AI.c.get("clientEscMenuOptions").antiAliasing;
+           if (CI.d.setRendererMsaa(LB), pB = new nI({
+               RV: BB,
+               QG: mB,
+               rm: null !== (kB = null === nB || void 0 === nB ? void 0 : nB.rm) && void 0 !== kB ? kB : null,
+               KF: JB.e.clientTicksPerSecond,
```

#### 1762. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13354-L13361` → after: `L13518-L13525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13518-L13525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13518-L13525) · [Before (L13354-L13361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13354-L13361)

```diff
-               lN: !1,
-               kN: !1,
-               cB: BT.f.cB,
-               Vc: BT.f.Vc,
-               nTT: [0, 5, 0],
-               Fc: BT.f.Fc,
-               sc: BT.f.sc,
-               Pc: BT.f.Pc,
+               Vl: !1,
+               Gl: !1,
+               ZJ: JB.e.ZJ,
+               zk: JB.e.zk,
+               Z8: [0, 5, 0],
+               Bk: JB.e.Bk,
+               Oy: JB.e.Oy,
+               jk: JB.e.jk,
```

#### 1763. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13363-L13369` → after: `L13527-L13533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13527-L13533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13527-L13533) · [Before (L13363-L13369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13363-L13369)

```diff
-               EB: !nT.disableAmbientOcclusion,
-               wmT: [.92, .8, .5],
-               tmT: 1,
-               mY: [gT.horizontal, gT.vertical],
-               ZI: (0, dk.e)(gT),
-               qI: [iU.e.xz, iU.e.y],
-               wG: !1,
+               sm: !NB.disableAmbientOcclusion,
+               mzB: [.92, .8, .5],
+               yzB: 1,
+               lG: [IB.horizontal, IB.vertical],
+               uD: (0, oU.h)(IB),
+               rD: [gj.b.xz, gj.b.y],
+               oW: !1,
```

#### 1764. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13371-L13373` → after: `L13535-L13537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13535-L13537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13535-L13537) · [Before (L13371-L13373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13371-L13373)

```diff
-               pL: BT.f.pL,
-               dmT: qT,
-               nL: (0, bU.d)((() => lT), (() => ET.j.bloxd)),
+               Er: JB.e.Er,
+               JzB: LB,
+               kr: (0, tj.e)((() => pB), (() => CB.i.bloxd)),
```

#### 1765. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13386` → after: `L13550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13550) · [Before (L13386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13386)

```diff
-               meshingWorkerCount: (0, ak.b)(navigator.hardwareConcurrency, (0, IT.isMobile)()),
+               meshingWorkerCount: (0, FU.c)(navigator.hardwareConcurrency, (0, VB.isMobile)()),
```

#### 1766. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13393` → after: `L13557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13557) · [Before (L13393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13393)

```diff
-               amT: TT => {
+               kzB: BB => {
```

#### 1767. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13397` → after: `L13561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13561) · [Before (L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13397)

```diff
-               BB: {
+               hJ: {
```

#### 1768. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13402` → after: `L13566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13566) · [Before (L13402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13402)

```diff
-               fTT: {
+               uBB: {
```

#### 1769. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13405` → after: `L13569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13569) · [Before (L13405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13405)

```diff
-               Np: HT && null !== zT ? {
+               mJ: uB && null !== nB ? {
```

#### 1770. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13411-L13412` → after: `L13575-L13576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13575-L13576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13575-L13576) · [Before (L13411-L13412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13411-L13412)

```diff
-               cT.j.subscribe("appManagerUpdated|gameState", (UT => {
-                 "landingPage" === UT ? TT.JY.stopWorkers() : (0, Ig.c)(UT) && TT.JY.restartWorkers()
+               yB.n.subscribe("appManagerUpdated|gameState", (jB => {
+                 "landingPage" === jB ? BB.fL.stopWorkers() : (0, AI.e)(jB) && BB.fL.restartWorkers()
```

#### 1771. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13414` → after: `L13578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13578) · [Before (L13414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13414)

```diff
-             }(lT), (0, vH.e)(lT, kg.c()), (0, kH.h)() && (lT.MI(!0), LT = !0), function(TT) {
+             }(pB), (0, Gu.h)(pB, sI.c()), (0, au.f)() && (pB.nD(!0), rB = !0), function(BB) {
```

#### 1772. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13416` → after: `L13580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13580) · [Before (L13416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13416)

```diff
-               UT && ((0, Fg.p)(), (0, mn.r)("webgpuloss") && (0, mn.b)("loseWebGpuDevice", (() => {
+               jB && ((0, WI.j)(), (0, IN.q)("webgpuloss") && (0, IN.d)("loseWebGpuDevice", (() => {
```

#### 1773. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13423-L13424` → after: `L13587-L13588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13587-L13588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13587-L13588) · [Before (L13423-L13424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13423-L13424)

```diff
-               (0, Fg.p)();
-               const UT = new Tn(TT._gl.getExtension("WEBGL_lose_context"), TT.TZ, new Ag),
+               (0, WI.j)();
+               const jB = new nN(BB._gl.getExtension("WEBGL_lose_context"), BB.gm, new zN),
```

#### 1774. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13435` → after: `L13599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13599) · [Before (L13435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13435)

```diff
-             }(lT.GB.engine), null !== zT && void 0 !== zT && zT.gpuDevice && lT.Np) {
+             }(pB.pm.engine), null !== nB && void 0 !== nB && nB.gpuDevice && pB.mJ) {
```

#### 1775. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13437` → after: `L13601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13601) · [Before (L13437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13437)

```diff
-             const TT = lT.Np;
+             const BB = pB.mJ;
```

#### 1776. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13443` → after: `L13607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13607) · [Before (L13443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13443)

```diff
-           lT.Nl.on("bZ", (() => {
+           pB.zr.on("lm", (() => {
```

#### 1777. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13445` → after: `L13609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13609) · [Before (L13445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13445)

```diff
-               lT.Nl.bZ && (0, Bk.i)()
+               pB.zr.lm && (0, mU.i)()
```

#### 1778. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13447` → after: `L13611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13611) · [Before (L13447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13447)

```diff
-           })), pk.c.markGameEngineConstructed()
+           })), JU.b.markGameEngineConstructed()
```

#### 1779. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13449` → after: `L13613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13613) · [Before (L13449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13449)

```diff
-           return (0, Jg.i)(), bT instanceof Error && bT.message.startsWith("WebGL not supported") ? fU.c.errorWithCode("An issue with your browser is preventing the game from loading. It will work after you have fully closed and re-opened your browser.", qU.j.INITIALISE_WEBGL, {
+           return (0, HI.g)(), tB instanceof Error && tB.message.startsWith("WebGL not supported") ? Gj.d.errorWithCode("An issue with your browser is preventing the game from loading. It will work after you have fully closed and re-opened your browser.", Lj.j.INITIALISE_WEBGL, {
```

#### 1780. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13452` → after: `L13616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13616) · [Before (L13452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13452)

```diff
-           }) : fU.c.errorWithCode(bT.toString(), qU.j.INITIALISE_NOA, {
+           }) : Gj.d.errorWithCode(tB.toString(), Lj.j.INITIALISE_NOA, {
```

#### 1781. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13457` → after: `L13621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13621) · [Before (L13457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13457)

```diff
-         cT.j.EZ("matchmakeAndPlayStepCompleted", {
+         yB.n.Ly("matchmakeAndPlayStepCompleted", {
```

#### 1782. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13460-L13463` → after: `L13624-L13627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13624-L13627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13624-L13627) · [Before (L13460-L13463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13460-L13463)

```diff
-         }), await (0, kH.r)("world gen"), (0, pH.b)(lT), (0, BH.e)(lT), await (0, kH.r)("particles"), (0, yT.u)(lT), await (0, kH.r)("gameplay"), KB.setupBloxdForGameplay(lT, TT);
-         ET.j.bloxd, ET.j.Rl = lT, lk.d.initNoa(lT), (0, VB.e)(lT), await (0, kH.r)("registration");
-         const qT = (0, uT.g)(lT).catch((TT => {
-             console.error(TT.stack), (0, fL.cZ)(TT);
+         }), await (0, au.s)("world gen"), (0, Ju.e)(pB), (0, mu.c)(pB), await (0, au.s)("particles"), (0, FB.v)(pB), await (0, au.s)("gameplay"), xJ.setupBloxdForGameplay(pB, BB);
+         CB.i.bloxd, CB.i.ur = pB, rU.d.initNoa(pB), (0, WJ.c)(pB), await (0, au.s)("registration");
+         const LB = (0, PB.k)(pB).catch((BB => {
+             console.error(BB.stack), (0, Lr.Zm)(BB);
```

#### 1783. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13465` → after: `L13629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13629) · [Before (L13465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13465)

```diff
-             return ZT.e.getId() !== hT.c && (UT += ' - try switching to the "Default 2" texture pack in settings.'), {
+             return mB.e.getId() !== cB.e && (jB += ' - try switching to the "Default 2" texture pack in settings.'), {
```

#### 1784. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13474` → after: `L13638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13638) · [Before (L13474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13474)

```diff
-           iT = (0, aT.r)(lT).catch((TT => (console.error(TT.stack), {
+           gB = (0, DB.q)(pB).catch((BB => (console.error(BB.stack), {
```

#### 1785. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13482-L13484` → after: `L13646-L13648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13646-L13648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13646-L13648) · [Before (L13482-L13484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13482-L13484)

```diff
-         return KB.initialAssetLoadedProm = Promise.all([qT, iT]), LT && (0, kH.u)((() => {
-           lT.MI(!1)
-         })), fU.c.value({
+         return xJ.initialAssetLoadedProm = Promise.all([LB, gB]), rB && (0, au.v)((() => {
+           pB.nD(!1)
+         })), Gj.d.value({
```

#### 1786. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13493` → after: `L13657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13657) · [Before (L13493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13493)

```diff
-         return ET.j.bloxd = zT, TT.bloxd = ET.j.bloxd, mT.init(zT), cU.d.init(), cT.j.EZ("newBloxdSetup", zT), {
+         return CB.i.bloxd = nB, BB.bloxd = CB.i.bloxd, zB.init(nB), yj.c.init(), yB.n.Ly("newBloxdSetup", nB), {
```

#### 1787. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13499` → after: `L13663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13663) · [Before (L13499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13499)

```diff
-         if (WT.aborted) return fU.c.errorWithCode("Left the game while it loaded", qU.j.CONNECT_TO_GAME_SERVER, {
+         if (QB.aborted) return Gj.d.errorWithCode("Left the game while it loaded", Lj.j.CONNECT_TO_GAME_SERVER, {
```

#### 1788. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13501` → after: `L13665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13665) · [Before (L13501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13501)

```diff
-           Km: !0
+           xz: !0
```

#### 1789. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13505` → after: `L13669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13669) · [Before (L13505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13505)

```diff
-             (0, vL.k)(zT, (0, vL.i)(WT))
+             (0, Gr.i)(nB, (0, Gr.f)(QB))
```

#### 1790. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13511` → after: `L13675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13675) · [Before (L13511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13511)

```diff
-           nT = rB.load(UT.gameNameWithVariation).then((() => null), (TT => null !== TT && void 0 !== TT ? TT : new Error("the game's code did not load")));
+           NB = wJ.load(jB.gameNameWithVariation).then((() => null), (BB => null !== BB && void 0 !== BB ? BB : new Error("the game's code did not load")));
```

#### 1791. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13516` → after: `L13680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13680) · [Before (L13516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13516)

```diff
-         const kT = cT.j.subscribe("leaveGame", (() => {
+         const UB = yB.n.subscribe("leaveGame", (() => {
```

#### 1792. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13522` → after: `L13686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13686) · [Before (L13522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13522)

```diff
-           cT.j.unsubscribe(kT), WT.removeEventListener("abort", MT)
+           yB.n.unsubscribe(UB), QB.removeEventListener("abort", dB)
```

#### 1793. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13527` → after: `L13691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13691) · [Before (L13527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13527)

```diff
-         cT.j.EZ("onStartAssetLoading");
+         yB.n.Ly("onStartAssetLoading");
```

#### 1794. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13529` → after: `L13693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13693) · [Before (L13529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13529)

```diff
-         if (!1 === HT.success) return fU.c.errorWithCode(HT.failDetails.reason, qU.j.CONNECT_TO_GAME_SERVER, {
+         if (!1 === uB.success) return Gj.d.errorWithCode(uB.failDetails.reason, Lj.j.CONNECT_TO_GAME_SERVER, {
```

#### 1795. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13531` → after: `L13695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13695) · [Before (L13531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13531)

```diff
-           Km: !0 === HT.failDetails.goesToUpdateWaiting || gT(),
+           xz: !0 === uB.failDetails.goesToUpdateWaiting || IB(),
```

#### 1796. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13537` → after: `L13701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13701) · [Before (L13537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13537)

```diff
-         cT.j.EZ("matchmakeAndPlayStepCompleted", {
+         yB.n.Ly("matchmakeAndPlayStepCompleted", {
```

#### 1797. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13546-L13547` → after: `L13710-L13711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13710-L13711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13710-L13711) · [Before (L13546-L13547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13546-L13547)

```diff
-           LT = UT => (lT.dispose(), jT.lq(), jT.leave(), TT.msgHandler === jT && (TT.msgHandler = null), UT),
-           pT = TT => LT(fU.c.errorWithCode("Left the game while it loaded", TT, {
+           rB = jB => (pB.dispose(), aB.Wk(), aB.leave(), BB.msgHandler === aB && (BB.msgHandler = null), jB),
+           sB = BB => rB(Gj.d.errorWithCode("Left the game while it loaded", BB, {
```

#### 1798. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13549` → after: `L13713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13713) · [Before (L13549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13549)

```diff
-             Km: !0
+             xz: !0
```

#### 1799. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13553` → after: `L13717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13717) · [Before (L13553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13553)

```diff
-         if (null !== fT) return gT() ? pT(qU.j.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES) : LT(fU.c.errorWithCode(fT.message, qU.j.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES, {
+         if (null !== GB) return IB() ? sB(Lj.j.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES) : rB(Gj.d.errorWithCode(GB.message, Lj.j.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES, {
```

#### 1800. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13557` → after: `L13721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13721) · [Before (L13557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13557)

```diff
-         if (!1 === BT.success) return fU.c.errorWithCode(BT.failDetails.reason, qU.j.REGISTRATION, {
+         if (!1 === JB.success) return Gj.d.errorWithCode(JB.failDetails.reason, Lj.j.REGISTRATION, {
```

#### 1801. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13560` → after: `L13724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13724) · [Before (L13560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13560)

```diff
-         if (!1 === vT.success) return fU.c.errorWithCode(vT.failDetails.reason, qU.j.SETUP_LIFEFORMS, {
+         if (!1 === kB.success) return Gj.d.errorWithCode(kB.failDetails.reason, Lj.j.SETUP_LIFEFORMS, {
```

#### 1802. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13565` → after: `L13729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13729) · [Before (L13565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13565)

```diff
-         if (null !== qT) return LT(fU.c.errorWithCode(String(qT), qU.j.REGISTRATION, {
+         if (null !== LB) return rB(Gj.d.errorWithCode(String(LB), Lj.j.REGISTRATION, {
```

#### 1803. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13569-L13571` → after: `L13733-L13735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13733-L13735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13733-L13735) · [Before (L13569-L13571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13569-L13571)

```diff
-         const iT = TT.Rl,
-           bT = await Aj.applyForGame(iT.Np, UT.gameNameWithVariation, (() => gT() || MT()));
-         return MH.c.beforeServerListeners && await MH.c.beforeServerListeners(), gT() || "Km" === bT.status && !MT() ? pT(qU.j.SHADER_PACK) : "failed" === bT.status ? LT(fU.c.errorWithCode(bT.messageKey, qU.j.SHADER_PACK, {
+         const gB = BB.ur,
+           tB = await Ra.applyForGame(gB.mJ, jB.gameNameWithVariation, (() => IB() || dB()));
+         return Iu.b.beforeServerListeners && await Iu.b.beforeServerListeners(), IB() || "xz" === tB.status && !dB() ? sB(Lj.j.SHADER_PACK) : "failed" === tB.status ? rB(Gj.d.errorWithCode(tB.messageKey, Lj.j.SHADER_PACK, {
```

#### 1804. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13573` → after: `L13737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13737) · [Before (L13573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13573)

```diff
-         })) : MT() ? LT(fU.c.ok()) : jT.bJ() ? LT(fU.c.errorWithCode("You have disconnected from the server.", qU.j.CONNECT_TO_GAME_SERVER, {
+         })) : dB() ? rB(Gj.d.ok()) : aB.aE() ? rB(Gj.d.errorWithCode("You have disconnected from the server.", Lj.j.CONNECT_TO_GAME_SERVER, {
```

#### 1805. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13575` → after: `L13739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13739) · [Before (L13575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13575)

```diff
-         })) : (null !== (nT = iT.Np) && void 0 !== nT && nT.isRunning() && (0, sB.h)(UT.userContext, UT.gameNameWithVariation).catch((TT => {
+         })) : (null !== (NB = gB.mJ) && void 0 !== NB && NB.isRunning() && (0, AJ.d)(jB.userContext, jB.gameNameWithVariation).catch((BB => {
```

#### 1806. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13577` → after: `L13741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13741) · [Before (L13577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13577)

```diff
-         })), "ok" === bT.status && void 0 !== bT.couldntRun && (0, sB.d)(bT.couldntRun), TT.handleServerConnectionInitialised(mT, UT.userContext, jT, lT), fU.c.ok())
+         })), "ok" === tB.status && void 0 !== tB.couldntRun && (0, AJ.c)(tB.couldntRun), BB.handleServerConnectionInitialised(zB, jB.userContext, aB, pB), Gj.d.ok())
```

#### 1807. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13581` → after: `L13745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13745) · [Before (L13581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13581)

```diff
-         (0, kH.e)();
+         (0, au.d)();
```

#### 1808. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13586` → after: `L13750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13750) · [Before (L13586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13586)

```diff
-           WT = (0, ET.d)(), zT = WT.client
+           QB = (0, CB.c)(), nB = QB.client
```

#### 1809. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13590-L13591` → after: `L13754-L13755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13754-L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13754-L13755) · [Before (L13590-L13591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13590-L13591)

```diff
-         } = KB.setupBloxdForGameplay((0, ET.h)(), TT)));
-         const MT = (0, ET.h)(),
+         } = xJ.setupBloxdForGameplay((0, CB.g)(), BB)));
+         const dB = (0, CB.g)(),
```

#### 1810. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13593` → after: `L13757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13757) · [Before (L13593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13593)

```diff
-         return gT.isError() ? gT.asError().forward() : (MT.MI(!1), zT.gameRecorder.onGameSessionStarted(), (0, ZH.j)(MT), (0, tk.e)(), KB.hasPlayedFirstGame = !0, fU.c.ok())
+         return IB.isError() ? IB.asError().forward() : (dB.nD(!1), nB.gameRecorder.onGameSessionStarted(), (0, yu.g)(dB), (0, DU.e)(), xJ.hasPlayedFirstGame = !0, Gj.d.ok())
```

#### 1811. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13596-L13597` → after: `L13760-L13761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13760-L13761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13760-L13761) · [Before (L13596-L13597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13596-L13597)

```diff
-         ET.j.bloxd.client.closeClientGameSession(), (0, FT.resetUtil)();
-         const mT = (0, ET.h)(),
+         CB.i.bloxd.client.closeClientGameSession(), (0, ZB.resetUtil)();
+         const zB = (0, CB.g)(),
```

#### 1812. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13603` → after: `L13767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13767) · [Before (L13603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13603)

```diff
-         return MT.isError() ? MT.asError().forward() : (mT.MI(!1), zT.gameRecorder.onGameSessionStarted(), fU.c.ok())
+         return dB.isError() ? dB.asError().forward() : (zB.nD(!1), nB.gameRecorder.onGameSessionStarted(), Gj.d.ok())
```

#### 1813. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13606-L13607` → after: `L13770-L13771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13770-L13771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13770-L13771) · [Before (L13606-L13607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13606-L13607)

```diff
-         const zT = new JH(this.Rl, TT, UT, new kk(this.Rl), fH.c);
-         this.clientApi = zT, this.clientConnection = WT, WT.setupServerListeners(this.Rl, mT, zT)
+         const nB = new qu(this.ur, BB, jB, new aU(this.ur), Lu.e);
+         this.clientApi = nB, this.clientConnection = QB, QB.setupServerListeners(this.ur, zB, nB)
```

#### 1814. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13614-L13617` → after: `L13778-L13781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13778-L13781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13778-L13781) · [Before (L13614-L13617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13614-L13617)

```diff
-           MT = (0, nT.dc)(WT),
-           gT = (0, nT._b)(WT),
-           HT = (0, OU.w)(zT),
-           kT = (0, OU.S)(zT),
+           dB = (0, NB.Sb)(QB),
+           IB = (0, NB.Mb)(QB),
+           uB = (0, Sj.q)(nB),
+           UB = (0, Sj.E)(nB),
```

#### 1815. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13619` → after: `L13783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13783) · [Before (L13619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13619)

```diff
-             localPlayerId: this.Rl.VV
+             localPlayerId: this.ur.zV
```

#### 1816. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13625` → after: `L13789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13789) · [Before (L13625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13625)

```diff
-           (0, xg.d)("No client code for the joined game", ZT)
+           (0, DI.b)("No client code for the joined game", mB)
```

#### 1817. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13627` → after: `L13791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13791) · [Before (L13627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13627)

```diff
-         const LT = null !== (TT = null === (UT = lT) || void 0 === UT ? void 0 : UT(kT, HT, gT, jT)) && void 0 !== TT ? TT : {};
+         const rB = null !== (BB = null === (jB = pB) || void 0 === jB ? void 0 : jB(UB, uB, IB, aB)) && void 0 !== BB ? BB : {};
```

#### 1818. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13649` → after: `L13813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13813) · [Before (L13649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13649)

```diff
-               reason: (0, uB.f)(MT),
+               reason: (0, eJ.i)(dB),
```

#### 1819. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13655` → after: `L13819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13819) · [Before (L13655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13655)

```diff
-         return await mT.connectToServer(this.Rl, zT, UT).then((TT => {
+         return await zB.connectToServer(this.ur, nB, jB).then((BB => {
```

#### 1820. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13675` → after: `L13839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13839) · [Before (L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13675)

```diff
-         return !!(0, jk.c)().websocketUrl || !!this.msgHandler
+         return !!(0, pU.d)().websocketUrl || !!this.msgHandler
```

#### 1821. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13691` → after: `L13855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13855) · [Before (L13691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13691)

```diff
-         cT.j.EZ("unwantedLeftGame", {
+         yB.n.Ly("unwantedLeftGame", {
```

#### 1822. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13700` → after: `L13864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13864) · [Before (L13700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13700)

```diff
-         }), this.leaveGame(gT ? (0, eU.d)(nT, HT) : "/")
+         }), this.leaveGame(IB ? (0, Mj.e)(NB, uB) : "/")
```

#### 1823. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13705` → after: `L13869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13869) · [Before (L13705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13705)

```diff
-         (0, qL.f)(), this.gameRecorder.suspendCaptureForLeave(), console.log("Leaving game"), (0, eg.e)(), this.closeClientGameSession(), Aj.endGame(), cT.j.EZ("leaveGame", {
+         (0, gr.f)(), this.gameRecorder.suspendCaptureForLeave(), console.log("Leaving game"), (0, fI.f)(), this.closeClientGameSession(), Ra.endGame(), yB.n.Ly("leaveGame", {
```

#### 1824. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13707` → after: `L13871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13871) · [Before (L13707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13707)

```diff
-         }), null === (TT = this.msgHandler) || void 0 === TT || TT.lq(), null === (UT = this.msgHandler) || void 0 === UT || UT.leave(), this.msgHandler = null, delete this.Rl.rTT, (0, FT.resetUtil)(), (0, pH.g)(this.Rl), (0, jk.m)({
+         }), null === (BB = this.msgHandler) || void 0 === BB || BB.Wk(), null === (jB = this.msgHandler) || void 0 === jB || jB.leave(), this.msgHandler = null, delete this.ur.FBB, (0, ZB.resetUtil)(), (0, Ju.m)(this.ur), (0, pU.q)({
```

#### 1825. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13709` → after: `L13873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13873) · [Before (L13709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13709)

```diff
-         }), this.Rl.MI(!0), fH.c.freeSheetsAfterGame(), (0, wk.L)(), this.clientConnection = null, this.clientApi = null, this.leaveGameReloadsPage() && (0, cL.reloadBloxd)(mT)
+         }), this.ur.nD(!0), Lu.e.freeSheetsAfterGame(), (0, HU.G)(), this.clientConnection = null, this.clientApi = null, this.leaveGameReloadsPage() && (0, kr.reloadBloxd)(zB)
```

#### 1826. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13721` → after: `L13885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13885) · [Before (L13721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13721)

```diff
-         this.clientGame = null, this.clientPlugins = null, (0, ek.closeClientGame)(UT, mT), (0, fl.m)(), null === (TT = this.clientApi) || void 0 === TT || TT.disposeGameOutput()
+         this.clientGame = null, this.clientPlugins = null, (0, EU.closeClientGame)(jB, zB), (0, Lp.n)(), null === (BB = this.clientApi) || void 0 === BB || BB.disposeGameOutput()
```

#### 1827. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13728` → after: `L13892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13892) · [Before (L13728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13728)

```diff
-         null === (TT = this.clientConnection) || void 0 === TT || TT.dispose(), this.clientConnection = null, null === (UT = this.msgHandler) || void 0 === UT || UT.lq(), null === (mT = this.msgHandler) || void 0 === mT || mT.leave(), this.msgHandler = null, this.currentConnectio … [truncated]
+         null === (BB = this.clientConnection) || void 0 === BB || BB.dispose(), this.clientConnection = null, null === (jB = this.msgHandler) || void 0 === jB || jB.Wk(), null === (zB = this.msgHandler) || void 0 === zB || zB.leave(), this.msgHandler = null, this.currentConnectio … [truncated]
```

#### 1828. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13730` → after: `L13894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13894) · [Before (L13730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13730)

```diff
-         }), (0, Lk.k)()
+         }), (0, sU.o)()
```

#### 1829. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13744` → after: `L13908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13908) · [Before (L13744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13744)

```diff
-             console.error(`Error in client game callback ${TT} with args list ${JSON.stringify(mT)}`, nT)
+             console.error(`Error in client game callback ${BB} with args list ${JSON.stringify(zB)}`, NB)
```

#### 1830. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13752` → after: `L13916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13916) · [Before (L13752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13752)

```diff
-               console.error(`Error in client plugin callback ${TT} with args list ${JSON.stringify(mT)}`, nT)
+               console.error(`Error in client plugin callback ${BB} with args list ${JSON.stringify(zB)}`, NB)
```

#### 1831. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13757` → after: `L13921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13921) · [Before (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13757)

```diff
-         this.Rl.ZZ = xg.d, this.Rl.cZ = fL.cZ, console.log("Defined noa.logErrorMessage"), ET.j.Rl && console.log("client csv detection");
+         this.ur.Xm = DI.b, this.ur.Zm = Lr.Zm, console.log("Defined noa.logErrorMessage"), CB.i.ur && console.log("client csv detection");
```

#### 1832. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13777` → after: `L13941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13941) · [Before (L13777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13777)

```diff
-             this.Rl.ZZ(`Uncaught error in window event listener ${UT}, ${mT}, ${WT}, ${zT}, ${MT}`, MT)
+             this.ur.Xm(`Uncaught error in window event listener ${jB}, ${zB}, ${QB}, ${nB}, ${dB}`, dB)
```

#### 1833. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13780` → after: `L13944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13944) · [Before (L13780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13780)

```diff
-             Kg.c.reset(), window.removeEventListener("error", TT)
+             CI.d.reset(), window.removeEventListener("error", BB)
```

#### 1834. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13787` → after: `L13951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13951) · [Before (L13787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13787)

```diff
-         if (this.entities[TT]) throw new Error(`Entity with id ${TT} already exists`);
+         if (this.entities[BB]) throw new Error(`Entity with id ${BB} already exists`);
```

#### 1835. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13790-L13791` → after: `L13954-L13955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13954-L13955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13954-L13955) · [Before (L13790-L13791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13790-L13791)

```diff
-           UB: mT
-         }, (0, Lk.l)(TT), null === mT || void 0 === mT || mT.initClient(UT)
+           SJ: zB
+         }, (0, sU.q)(BB), null === zB || void 0 === zB || zB.initClient(jB)
```

#### 1836. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13795` → after: `L13959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13959) · [Before (L13795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13795)

```diff
-         null === (WT = this.entities[TT]) || void 0 === WT || null === (zT = WT.UB) || void 0 === zT || null === (MT = zT.onChangeClient) || void 0 === MT || MT.call(zT, UT, mT)
+         null === (QB = this.entities[BB]) || void 0 === QB || null === (nB = QB.SJ) || void 0 === nB || null === (dB = nB.onChangeClient) || void 0 === dB || dB.call(nB, jB, zB)
```

#### 1837. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13804-L13805` → after: `L13968-L13969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13968-L13969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13968-L13969) · [Before (L13804-L13805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13804-L13805)

```diff
-         ((0, VT.d)(this.Rl).disposeEntity(WT), WT !== this.Rl.VV) && (null === (zT = this.Rl.sV[this.Rl.VV]) || void 0 === zT || delete zT[TT], null === (MT = this.Rl.sV[this.Rl.rTT]) || void 0 === MT || delete MT[TT], (0, ET.d)().removeEntityName(TT));
-         null === (UT = this.entities[TT]) || void 0 === UT || null === (mT = UT.UB) || void 0 === mT || mT.disposeClient(), delete this.entities[TT]
+         ((0, TB.b)(this.ur).disposeEntity(QB), QB !== this.ur.zV) && (null === (nB = this.ur.RY[this.ur.zV]) || void 0 === nB || delete nB[BB], null === (dB = this.ur.RY[this.ur.FBB]) || void 0 === dB || delete dB[BB], (0, CB.c)().removeEntityName(BB));
+         null === (jB = this.entities[BB]) || void 0 === jB || null === (zB = jB.SJ) || void 0 === zB || zB.disposeClient(), delete this.entities[BB]
```

#### 1838. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13808-L13809` → after: `L13972-L13973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13972-L13973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13972-L13973) · [Before (L13808-L13809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13808-L13809)

```diff
-         const UT = (0, PT.e)(TT);
-         return String(UT) === String(this.Rl.VV) ? this.Rl.VV : UT
+         const jB = (0, AB.b)(BB);
+         return String(jB) === String(this.ur.zV) ? this.ur.zV : jB
```

#### 1839. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13815` → after: `L13979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13979) · [Before (L13815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13815)

```diff
-         return null !== (UT = null === (mT = this.entities[TT]) || void 0 === mT || null === (WT = mT.colyseusEntity) || void 0 === WT ? void 0 : WT.type) && void 0 !== UT ? UT : null
+         return null !== (jB = null === (zB = this.entities[BB]) || void 0 === zB || null === (QB = zB.colyseusEntity) || void 0 === QB ? void 0 : QB.type) && void 0 !== jB ? jB : null
```

#### 1840. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13819-L13820` → after: `L13983-L13984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13983-L13984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13983-L13984) · [Before (L13819-L13820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13819-L13820)

```diff
-         const gT = TT === this.Rl.VV ? this.Rl.rTT : TT;
-         return null !== (UT = null === (mT = this.msgHandler) || void 0 === mT || null === (WT = mT.XmT) || void 0 === WT || null === (zT = WT.state) || void 0 === zT || null === (MT = zT.entities) || void 0 === MT ? void 0 : MT.get(gT)) && void 0 !== UT ? UT : null
+         const IB = BB === this.ur.zV ? this.ur.FBB : BB;
+         return null !== (jB = null === (zB = this.msgHandler) || void 0 === zB || null === (QB = zB.LzB) || void 0 === QB || null === (nB = QB.state) || void 0 === nB || null === (dB = nB.entities) || void 0 === dB ? void 0 : dB.get(IB)) && void 0 !== jB ? jB : null
```

#### 1841. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13823` → after: `L13987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13987) · [Before (L13823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13823)

```diff
-         const WT = null === (TT = this.msgHandler) || void 0 === TT || null === (UT = TT.XmT) || void 0 === UT || null === (mT = UT.state) || void 0 === mT ? void 0 : mT.items;
+         const QB = null === (BB = this.msgHandler) || void 0 === BB || null === (jB = BB.LzB) || void 0 === jB || null === (zB = jB.state) || void 0 === zB ? void 0 : zB.items;
```

#### 1842. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13829` → after: `L13993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13993) · [Before (L13829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13829)

```diff
-         return null !== (UT = null === (mT = this.msgHandler) || void 0 === mT || null === (WT = mT.XmT) || void 0 === WT || null === (zT = WT.state) || void 0 === zT || null === (MT = zT.items) || void 0 === MT ? void 0 : MT.get(TT)) && void 0 !== UT ? UT : null
+         return null !== (jB = null === (zB = this.msgHandler) || void 0 === zB || null === (QB = zB.LzB) || void 0 === QB || null === (nB = QB.state) || void 0 === nB || null === (dB = nB.items) || void 0 === dB ? void 0 : dB.get(BB)) && void 0 !== jB ? jB : null
```

#### 1843. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13833` → after: `L13997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R13997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L13997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L13997) · [Before (L13833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13833)

```diff
-         return null !== (UT = null === (mT = this.getColyseusEntity(TT)) || void 0 === mT ? void 0 : mT.scale) && void 0 !== UT ? UT : 1
+         return null !== (jB = null === (zB = this.getColyseusEntity(BB)) || void 0 === zB ? void 0 : zB.scale) && void 0 !== jB ? jB : 1
```

#### 1844. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13837` → after: `L14001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14001) · [Before (L13837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13837)

```diff
-         return null !== (TT = this.currentConnectionInfo) && void 0 !== TT ? TT : null
+         return null !== (BB = this.currentConnectionInfo) && void 0 !== BB ? BB : null
```

#### 1845. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13840-L13841` → after: `L14004-L14005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14004-L14005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14004-L14005) · [Before (L13840-L13841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13840-L13841)

```diff
-         (0, VT.d)(this.Rl).setEffect(this.toReplicatedStateEId(TT), UT, mT), cT.j.EZ("EffectUpdate", {
-           XT: TT,
+         (0, TB.b)(this.ur).setEffect(this.toReplicatedStateEId(BB), jB, zB), yB.n.Ly("EffectUpdate", {
+           VB: BB,
```

#### 1846. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13850` → after: `L14014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14014) · [Before (L13850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13850)

```diff
-         return (0, VT.d)(this.Rl).getEffects(this.toReplicatedStateEId(TT))
+         return (0, TB.b)(this.ur).getEffects(this.toReplicatedStateEId(BB))
```

#### 1847. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13854` → after: `L14018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14018) · [Before (L13854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13854)

```diff
-         return null !== (mT = null === (WT = this.getEffects(TT)[UT]) || void 0 === WT ? void 0 : WT.level) && void 0 !== mT ? mT : 0
+         return null !== (zB = null === (QB = this.getEffects(BB)[jB]) || void 0 === QB ? void 0 : QB.level) && void 0 !== zB ? zB : 0
```

#### 1848. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13857-L13859` → after: `L14021-L14023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14021-L14023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14021-L14023) · [Before (L13857-L13859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13857-L13859)

```diff
-         const mT = (0, VT.d)(this.Rl).removeEffect(this.toReplicatedStateEId(TT), UT);
-         cT.j.EZ("RemoveEffect", {
-           XT: TT,
+         const zB = (0, TB.b)(this.ur).removeEffect(this.toReplicatedStateEId(BB), jB);
+         yB.n.Ly("RemoveEffect", {
+           VB: BB,
```

#### 1849. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13868` → after: `L14032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14032) · [Before (L13868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13868)

```diff
-       const mT = null !== (UT = null === TT || void 0 === TT ? void 0 : TT.variants) && void 0 !== UT ? UT : [],
+       const zB = null !== (jB = null === BB || void 0 === BB ? void 0 : BB.variants) && void 0 !== jB ? jB : [],
```

#### 1850. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13880` → after: `L14044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14044) · [Before (L13880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13880)

```diff
-           (0, qg.d)(TT, UT)
+           (0, MI.f)(BB, jB)
```

#### 1851. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13890` → after: `L14054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14054) · [Before (L13890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13890)

```diff
-   39278: (TT, UT, mT) => {
+   39237: (BB, jB, zB) => {
```

#### 1852. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13895` → after: `L14059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14059) · [Before (L13895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13895)

```diff
-     var WT = mT(366);
+     var QB = zB(376);
```

#### 1853. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13914` → after: `L14078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14078) · [Before (L13914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13914)

```diff
-               color: WT.R.redUiText
+               color: QB.E.redUiText
```

#### 1854. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13920-L13921` → after: `L14084-L14085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14084-L14085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14084-L14085) · [Before (L13920-L13921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13920-L13921)

```diff
-     var MT = mT(4328),
-       gT = mT(1336);
+     var dB = zB(4334),
+       IB = zB(1270);
```

#### 1855. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13931` → after: `L14095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14095) · [Before (L13931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13931)

```diff
-         fl: 1,
+         Ep: 1,
```

#### 1856. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13946` → after: `L14110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14110) · [Before (L13946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13946)

```diff
-         blendMode: MT.e.Standard
+         blendMode: dB.d.Standard
```

#### 1857. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13951` → after: `L14115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14115) · [Before (L13951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13951)

```diff
-         fl: 96,
+         Ep: 96,
```

#### 1858. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13972` → after: `L14136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14136) · [Before (L13972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L13972)

```diff
-         blendMode: MT.e.Standard
+         blendMode: dB.d.Standard
```

#### 1859. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14033` → after: `L14197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14197) · [Before (L14033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14033)

```diff
-           if (TT !== gT.w) return;
+           if (BB !== IB.A) return;
```

#### 1860. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14055-L14056` → after: `L14219-L14220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14219-L14220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14219-L14220) · [Before (L14055-L14056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14055-L14056)

```diff
-     var fT = mT(4956),
-       qT = mT(4939);
+     var GB = zB(4947),
+       LB = zB(4932);
```

#### 1861. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14077` → after: `L14241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14241) · [Before (L14077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14077)

```diff
-           } = (0, qT.e)(MT);
+           } = (0, LB.g)(dB);
```

#### 1862. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14083` → after: `L14247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14247) · [Before (L14083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14083)

```diff
-     var bT = mT(39281);
+     var tB = zB(39245);
```

#### 1863. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14097` → after: `L14261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14261) · [Before (L14097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14097)

```diff
-       const nT = ((null !== (WT = TT.getMetaInfo(mT).rot) && void 0 !== WT ? WT : 1) - 1) * Math.PI / 2,
+       const NB = ((null !== (QB = BB.getMetaInfo(zB).rot) && void 0 !== QB ? QB : 1) - 1) * Math.PI / 2,
```

#### 1864. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14137` → after: `L14301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14301) · [Before (L14137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14137)

```diff
-           blendMode: MT.e.Standard,
+           blendMode: dB.d.Standard,
```

#### 1865. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14154` → after: `L14318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14318) · [Before (L14154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14154)

```diff
-           blendMode: MT.e.Add,
+           blendMode: dB.d.Add,
```

#### 1866. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14167` → after: `L14331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14331) · [Before (L14167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14167)

```diff
-         let zT = this.smokes.find((TT => TT.pos[0] === UT[0] && TT.pos[1] === UT[1] && TT.pos[2] === UT[2] && TT.Gg === mT));
+         let nB = this.smokes.find((BB => BB.pos[0] === jB[0] && BB.pos[1] === jB[1] && BB.pos[2] === jB[2] && BB.dN === zB));
```

#### 1867. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14170` → after: `L14334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14334) · [Before (L14170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14170)

```diff
-             Gg: mT,
+             dN: zB,
```

#### 1868. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14176` → after: `L14340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14340) · [Before (L14176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14176)

```diff
-           const UT = this.smokes.reduce(((TT, UT) => UT.endMs < TT.endMs ? UT : TT));
+           const jB = this.smokes.reduce(((BB, jB) => jB.endMs < BB.endMs ? jB : BB));
```

#### 1869. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14188` → after: `L14352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14352) · [Before (L14188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14188)

```diff
-           const [WT, zT, MT] = UT.pos, gT = mT < UT.endMs && TT.getBlockId(WT, zT, MT) === UT.Gg;
+           const [QB, nB, dB] = jB.pos, IB = zB < jB.endMs && BB.getBlockId(QB, nB, dB) === jB.dN;
```

#### 1870. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14219` → after: `L14383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14383) · [Before (L14219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14219)

```diff
-         for (const mT of null !== (UT = this.puffers) && void 0 !== UT ? UT : []) {
+         for (const zB of null !== (jB = this.puffers) && void 0 !== jB ? jB : []) {
```

#### 1871. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14232` → after: `L14396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14396) · [Before (L14232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14232)

```diff
-           return new bT.e(UT, Math.ceil(4 * WT), wT)
+           return new tB.g(jB, Math.ceil(4 * QB), oB)
```

#### 1872. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14249` → after: `L14413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14413) · [Before (L14249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14249)

```diff
-           mT === gT.A && UT.start(TT, WT)
+           zB === IB.C && jB.start(BB, QB)
```

#### 1873. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14270` → after: `L14434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14434) · [Before (L14270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14270)

```diff
-       for (const zT of [TT, ...null !== UT && void 0 !== UT ? UT : []]) try {
+       for (const nB of [BB, ...null !== jB && void 0 !== jB ? jB : []]) try {
```

#### 1874. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14278` → after: `L14442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14442) · [Before (L14278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14278)

```diff
-   39390: (TT, UT, mT) => {
+   39360: (BB, jB, zB) => {
```

#### 1875. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14282` → after: `L14446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14446) · [Before (L14282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14282)

```diff
-     var WT = mT(38164);
+     var QB = zB(38120);
```

#### 1876. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14302` → after: `L14466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14466) · [Before (L14302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14302)

```diff
-   39398: (TT, UT, mT) => {
+   39362: (BB, jB, zB) => {
```

#### 1877. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L14318` → after: `L14482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R14482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L14482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/94.js#L14482) · [Before (L14318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/94.js#L14318)

```diff
-   39403: (TT, UT, mT) => {
+   39365: (BB, jB, zB) => {
```
