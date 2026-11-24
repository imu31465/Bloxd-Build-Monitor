# Changed — Bundle Modifications Report (Part 115 / 141)

- **Updated at**: `2026-11-25T05:21 JST`
- **Part**: `115 / 141` (**430** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 114](part-114.md) · [Part 116 →](part-116.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/controller.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9 · continued)

- **File**: `bundles/bloxd.io/chunks/js/controller.js` (995 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2)

#### 798. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8775-L8786` → after: `L8871-L8882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8871-L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8871-L8882) · [Before (L8775-L8786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8775-L8786)

```diff
-       gT = mT(1567),
-       nT = mT(1388),
-       HT = mT(8305),
-       kT = mT(8344),
-       jT = mT(8289),
-       lT = mT(8277),
-       LT = mT(8348),
-       pT = mT(1513),
-       BT = mT(8282),
-       ZT = mT(8787),
-       cT = mT(4484),
-       vT = mT(115);
+       IB = zB(1471),
+       NB = zB(1316),
+       uB = zB(8155),
+       UB = zB(8184),
+       aB = zB(8139),
+       pB = zB(8122),
+       rB = zB(8187),
+       sB = zB(1418),
+       JB = zB(8131),
+       mB = zB(8646),
+       yB = zB(4494),
+       kB = zB(125);
```

#### 799. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8797` → after: `L8893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8893) · [Before (L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8797)

```diff
-     const qT = TT => TT.values.flatMap(((TT, UT) => TT >= BT.Q ? [String(UT)] : [])).join(",") || "none",
+     const LB = BB => BB.values.flatMap(((BB, jB) => BB >= JB.V ? [String(jB)] : [])).join(",") || "none",
```

#### 800. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8799` → after: `L8895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8895) · [Before (L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8799)

```diff
-         const gT = (0, pT.g)(),
+         const IB = (0, sB.d)(),
```

#### 801. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8802` → after: `L8898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8898) · [Before (L8802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8802)

```diff
-         Promise.all([Promise.resolve().then((() => mT(3047))), Promise.resolve().then((() => mT(1153))), Promise.resolve().then((() => mT(133)))]).then((mT => {
+         Promise.all([Promise.resolve().then((() => zB(3015))), Promise.resolve().then((() => zB(1121))), Promise.resolve().then((() => zB(145)))]).then((zB => {
```

#### 802. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8810` → after: `L8906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8906) · [Before (L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8810)

```diff
-           kT(TT, UT.family, null === MT ? void 0 : Math.round(MT / 1e3)), jT(`touch HUD pad ${TT}`, bT(UT, WT, zT, MT, gT, nT, HT, lT))
+           UB(BB, jB.family, null === dB ? void 0 : Math.round(dB / 1e3)), aB(`touch HUD pad ${BB}`, tB(jB, QB, nB, dB, IB, NB, uB, pB))
```

#### 803. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8818` → after: `L8914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8914) · [Before (L8818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8818)

```diff
-           pad_mapping: null !== (HT = null === mT || void 0 === mT ? void 0 : mT.mapping) && void 0 !== HT ? HT : "unread",
+           pad_mapping: null !== (uB = null === zB || void 0 === zB ? void 0 : zB.mapping) && void 0 !== uB ? uB : "unread",
```

#### 804. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8829` → after: `L8925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8925) · [Before (L8829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8829)

```diff
-     const OT = TT => !TT.repeat && !(0, ZT.e)(TT.key),
+     const SB = BB => !BB.repeat && !(0, mB.b)(BB.key),
```

#### 805. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8843` → after: `L8939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8939) · [Before (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8843)

```diff
-             const zT = TT >= (this.buttonsDown[WT] ? BT.S : BT.Q);
+             const nB = BB >= (this.buttonsDown[QB] ? JB.W : JB.V);
```

#### 806. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8848` → after: `L8944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8944) · [Before (L8848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8848)

```diff
-             Math.hypot(TT.x, TT.y) < (zT ? BT.S : .3) ? this.stickAnchors[WT] = null : (!zT || Math.hypot(TT.x - zT.x, TT.y - zT.y) >= .3) && (this.stickAnchors[WT] = {
+             Math.hypot(BB.x, BB.y) < (nB ? JB.W : .3) ? this.stickAnchors[QB] = null : (!nB || Math.hypot(BB.x - nB.x, BB.y - nB.y) >= .3) && (this.stickAnchors[QB] = {
```

#### 807. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8867-L8869` → after: `L8963-L8965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8963-L8965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8963-L8965) · [Before (L8867-L8869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8867-L8869)

```diff
-       dT = (wT = () => lT.e.getActiveGamepad(), new fT({
-         touchOnly: "touchOnly" === (0, vT.b)(),
-         setMayHide: pT.v,
+       fB = (oB = () => pB.f.getActiveGamepad(), new GB({
+         touchOnly: "touchOnly" === (0, kB.c)(),
+         setMayHide: sB.t,
```

#### 808. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8871` → after: `L8967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8967) · [Before (L8871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8871)

```diff
-           iT("fn", TT, UT, wT(), null)
+           gB("DN", BB, jB, oB(), null)
```

#### 809. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8888` → after: `L8984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8984) · [Before (L8888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8888)

```diff
-         if (dT.observe(TT, UT, xT.isStickOffRest()), FT && xT.wasOnlyMoveOn() && !(0, pT.k)()) return !1;
+         if (fB.observe(BB, jB, qB.isStickOffRest()), ZB && qB.wasOnlyMoveOn() && !(0, sB.l)()) return !1;
```

#### 810. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8890` → after: `L8986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8986) · [Before (L8890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8890)

```diff
-         const mT = !(0, pT.k)();
+         const zB = !(0, sB.l)();
```

#### 811. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8893` → after: `L8989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8989) · [Before (L8893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8893)

```diff
-         } : null), IT = !1, (0, pT.t)("gamepad"), JT(!0), (0, LT.o)((0, HT.l)()), mT
+         } : null), VB = !1, (0, sB.q)("gamepad"), iB(!0), (0, rB.m)((0, uB.m)()), zB
```

#### 812. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8895` → after: `L8991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8991) · [Before (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8895)

```diff
-       VT = TT => !(0, pT.k)() || TT === tT,
+       TB = BB => !(0, sB.l)() || BB === HB,
```

#### 813. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8900-L8901` → after: `L8996-L8997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8996-L8997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L8996-L8997) · [Before (L8900-L8901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8900-L8901)

```diff
-         const TT = zT.b.get("activeInputDevice"),
-           UT = "gamepad" === TT ? lT.e.getActivePad() : null;
+         const BB = nB.c.get("activeInputDevice"),
+           jB = "gamepad" === BB ? pB.f.getActivePad() : null;
```

#### 814. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8904-L8905` → after: `L9000-L9001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9000-L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9000-L9001) · [Before (L8904-L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8904-L8905)

```diff
-           inGame: (0, nT.u)(),
-           padMovesMouse: null !== UT && (0, jT.h)(UT.id)
+           inGame: (0, NB.y)(),
+           padMovesMouse: null !== jB && (0, aB.g)(jB.id)
```

#### 815. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8917` → after: `L9013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9013) · [Before (L8917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8917)

```diff
-             TT.reset(), FT = !1, (0, pT.t)(UT)
+             BB.reset(), ZB = !1, (0, sB.q)(jB)
```

#### 816. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8922` → after: `L9018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9018) · [Before (L8922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8922)

```diff
-                 if ((0, pT.p)(TT), !OT(TT)) return;
+                 if ((0, sB.o)(BB), !SB(BB)) return;
```

#### 817. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8948` → after: `L9044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9044) · [Before (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8948)

```diff
-             if (IT = !0, JT(!1), "keyboardMouse" === zT.b.get("activeInputDevice")) return;
+             if (VB = !0, iB(!1), "keyboardMouse" === nB.c.get("activeInputDevice")) return;
```

#### 818. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8974-L8976` → after: `L9070-L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9070-L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9070-L9072) · [Before (L8974-L8976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8974-L8976)

```diff
-         const lT = MT.j.subscribe("appManagerUpdated|activeInputDevice", HT);
-         return HT(zT.b.get("activeInputDevice")), () => {
-           window.removeEventListener("keydown", mT, jT), window.removeEventListener("pointerdown", mT, jT), window.removeEventListener("wheel", mT, jT), window.removeEventListener("touchstart", WT, jT), window.removeEventListener("pointermove", nT, jT), window.removeEventListener … [truncated]
+         const pB = dB.n.subscribe("appManagerUpdated|activeInputDevice", uB);
+         return uB(nB.c.get("activeInputDevice")), () => {
+           window.removeEventListener("keydown", zB, aB), window.removeEventListener("pointerdown", zB, aB), window.removeEventListener("wheel", zB, aB), window.removeEventListener("touchstart", QB, aB), window.removeEventListener("pointermove", NB, aB), window.removeEventListener … [truncated]
```

#### 819. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8980-L8984` → after: `L9076-L9080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9076-L9080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9076-L9080) · [Before (L8980-L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8980-L8984)

```diff
-         const [TT, UT] = (0, WT.useState)(HT.l);
-         return (0, gT.g)(HT.c, (() => {
-           UT((0, HT.l)())
-         })), (0, gT.g)(lT.d, (() => {
-           UT((0, HT.l)())
+         const [BB, jB] = (0, QB.useState)(uB.m);
+         return (0, IB.f)(uB.e, (() => {
+           jB((0, uB.m)())
+         })), (0, IB.f)(pB.d, (() => {
+           jB((0, uB.m)())
```

#### 820. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8988` → after: `L9084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9084) · [Before (L8988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8988)

```diff
-   8313: (TT, UT, mT) => {
+   8160: (BB, jB, zB) => {
```

#### 821. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8991` → after: `L9087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9087) · [Before (L8991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8991)

```diff
-       g: () => zT
+       h: () => nB
```

#### 822. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8996` → after: `L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9092) · [Before (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8996)

```diff
-   8823: (TT, UT, mT) => {
+   8691: (BB, jB, zB) => {
```

#### 823. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8998-L8999` → after: `L9094-L9095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9094-L9095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9094-L9095) · [Before (L8998-L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L8998-L8999)

```diff
-       d: () => gT,
-       e: () => MT,
+       b: () => IB,
+       f: () => dB,
```

#### 824. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9001` → after: `L9097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9097) · [Before (L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9001)

```diff
-       k: () => nT
+       l: () => NB
```

#### 825. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9003-L9004` → after: `L9099-L9100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9099-L9100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9099-L9100) · [Before (L9003-L9004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9003-L9004)

```diff
-     var WT = mT(1567),
-       zT = mT(1526);
+     var QB = zB(1471),
+       nB = zB(1442);
```

#### 826. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9022` → after: `L9118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9118) · [Before (L9022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9022)

```diff
-         return (0, WT.j)(MT, null !== (TT = null === (UT = (0, zT.f)()) || void 0 === UT ? void 0 : UT.getInventoryCursorState()) && void 0 !== TT ? TT : gT)
+         return (0, QB.h)(dB, null !== (BB = null === (jB = (0, nB.d)()) || void 0 === jB ? void 0 : jB.getInventoryCursorState()) && void 0 !== BB ? BB : IB)
```

#### 827. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9026` → after: `L9122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9122) · [Before (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9026)

```diff
-         return null !== (TT = null === (UT = (0, zT.f)()) || void 0 === UT ? void 0 : UT.isPadSteppingSlots()) && void 0 !== TT && TT
+         return null !== (BB = null === (jB = (0, nB.d)()) || void 0 === jB ? void 0 : jB.isPadSteppingSlots()) && void 0 !== BB && BB
```

#### 828. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9029` → after: `L9125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9125) · [Before (L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9029)

```diff
-   8817: (TT, UT, mT) => {
+   8685: (BB, jB, zB) => {
```

#### 829. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9031` → after: `L9127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9127) · [Before (L9031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9031)

```diff
-       d: () => LT,
+       c: () => rB,
```

#### 830. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9033-L9034` → after: `L9129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9129) · [Before (L9033-L9034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9033-L9034)

```diff
-       i: () => HT,
-       j: () => gT,
+       h: () => uB,
```

#### 831. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9036` → after: `L9131-L9132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9131-L9132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9131-L9132) · [Before (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9036)

```diff
-       n: () => jT,
+       m: () => dB,
+       o: () => aB,
```

#### 832. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9062` → after: `L9158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9158) · [Before (L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9062)

```diff
-         return null !== (mT = null !== (WT = TT.find((TT => TT.element === UT))) && void 0 !== WT ? WT : TT.find((TT => TT.element.contains(UT)))) && void 0 !== mT ? mT : null
+         return null !== (zB = null !== (QB = BB.find((BB => BB.element === jB))) && void 0 !== QB ? QB : BB.find((BB => BB.element.contains(jB)))) && void 0 !== zB ? zB : null
```

#### 833. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9065` → after: `L9161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9161) · [Before (L9065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9065)

```diff
-   8832: (TT, UT, mT) => {
+   8698: (BB, jB, zB) => {
```

#### 834. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9068` → after: `L9164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9164) · [Before (L9068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9068)

```diff
-       c: () => gT
+       f: () => IB
```

#### 835. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9070` → after: `L9166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9166) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9070)

```diff
-     var WT = mT(63);
+     var QB = zB(62);
```

#### 836. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9074` → after: `L9170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9170) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9074)

```diff
-         return null !== (UT = null === (mT = zT.get(TT)) || void 0 === mT ? void 0 : mT.current) && void 0 !== UT ? UT : null
+         return null !== (jB = null === (zB = nB.get(BB)) || void 0 === zB ? void 0 : zB.current) && void 0 !== jB ? jB : null
```

#### 837. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9090` → after: `L9186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9186) · [Before (L9090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9090)

```diff
-   8941: (TT, UT, mT) => {
+   8814: (BB, jB, zB) => {
```

#### 838. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9092-L9095` → after: `L9188-L9190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9188-L9190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9188-L9190) · [Before (L9092-L9095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9092-L9095)

```diff
-       b: () => nT,
-       f: () => kT,
-       h: () => lT,
-       k: () => jT,
+       d: () => NB,
+       e: () => UB,
+       i: () => pB,
```

#### 839. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9097` → after: `L9192-L9193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9192-L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9192-L9193) · [Before (L9097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9097)

```diff
-       o: () => pT
+       n: () => uB,
+       r: () => sB
```

#### 840. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9100-L9102` → after: `L9196-L9198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9196-L9198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9196-L9198) · [Before (L9100-L9102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9100-L9102)

```diff
-       zT = mT(2125),
-       MT = mT(1526),
-       gT = mT(1513);
+       nB = zB(2065),
+       dB = zB(1442),
+       IB = zB(1418);
```

#### 841. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9105` → after: `L9201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9201) · [Before (L9105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9105)

```diff
-         return (0, gT.k)() && null !== (UT = null === (mT = (0, MT.f)()) || void 0 === mT ? void 0 : mT.getGlyphForNoaAction(TT)) && void 0 !== UT ? UT : null
+         return (0, IB.l)() && null !== (jB = null === (zB = (0, dB.d)()) || void 0 === zB ? void 0 : zB.getGlyphForNoaAction(BB)) && void 0 !== jB ? jB : null
```

#### 842. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9110` → after: `L9206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9206) · [Before (L9110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9110)

```diff
-         return null !== (UT = null === (mT = (0, MT.f)()) || void 0 === mT ? void 0 : mT.getPadGlyphIconName(TT)) && void 0 !== UT ? UT : `${HT}xbox/${TT}`
+         return null !== (jB = null === (zB = (0, dB.d)()) || void 0 === zB ? void 0 : zB.getPadGlyphIconName(BB)) && void 0 !== jB ? jB : `${uB}xbox/${BB}`
```

#### 843. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9115` → after: `L9211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9211) · [Before (L9115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9115)

```diff
-         return jT(TT) && null !== (UT = null === (mT = (0, MT.f)()) || void 0 === mT ? void 0 : mT.getPadGlyphIconUrl(TT)) && void 0 !== UT ? UT : null
+         return aB(BB) && null !== (jB = null === (zB = (0, dB.d)()) || void 0 === zB ? void 0 : zB.getPadGlyphIconUrl(BB)) && void 0 !== jB ? jB : null
```

#### 844. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9117` → after: `L9213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9213) · [Before (L9117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9117)

```diff
-       LT = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", gT.d, zT.d, zT.c],
+       rB = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", IB.b, nB.e, nB.d],
```

#### 845. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9119` → after: `L9215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9215) · [Before (L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9119)

```diff
-         const UT = LT.map((UT => WT.j.subscribe(UT, TT)));
+         const jB = rB.map((jB => QB.n.subscribe(jB, BB)));
```

#### 846. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9121` → after: `L9217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9217) · [Before (L9121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9121)

```diff
-           for (const TT of UT) WT.j.unsubscribe(TT)
+           for (const BB of jB) QB.n.unsubscribe(BB)
```

#### 847. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9125` → after: `L9221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9221) · [Before (L9125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9125)

```diff
-   8804: (TT, UT, mT) => {
+   8665: (BB, jB, zB) => {
```

#### 848. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9127-L9128` → after: `L9223-L9224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9223-L9224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9223-L9224) · [Before (L9127-L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9127-L9128)

```diff
-       c: () => zT,
-       g: () => WT
+       b: () => nB,
+       f: () => QB
```

#### 849. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9133` → after: `L9229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9229) · [Before (L9133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9133)

```diff
-   8344: (TT, UT, mT) => {
+   8184: (BB, jB, zB) => {
```

#### 850. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9135` → after: `L9231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9231) · [Before (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9135)

```diff
-       e: () => kT,
+       d: () => UB,
```

#### 851. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9138` → after: `L9234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9234) · [Before (L9138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9138)

```diff
-       k: () => nT
+       n: () => NB
```

#### 852. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9140-L9142` → after: `L9236-L9238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9236-L9238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9236-L9238) · [Before (L9140-L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9140-L9142)

```diff
-     var WT = mT(25),
-       zT = mT(1752),
-       MT = mT(1870);
+     var QB = zB(28),
+       nB = zB(1664),
+       dB = zB(1786);
```

#### 853. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9144` → after: `L9240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9240) · [Before (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9144)

```diff
-       nT = (TT, UT) => (gT.has(TT) && console.warn(`Gameplay blocker "${TT}" registered twice; the newer one replaces it.`), gT.set(TT, UT), () => {
+       NB = (BB, jB) => (IB.has(BB) && console.warn(`Gameplay blocker "${BB}" registered twice; the newer one replaces it.`), IB.set(BB, jB), () => {
```

#### 854. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9156` → after: `L9252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9252) · [Before (L9156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9156)

```diff
-         return "inGame" === WT.b.get("gameState") && (!(0, zT.l)() && (!HT() && null === kT(TT)))
+         return "inGame" === QB.c.get("gameState") && (!(0, nB.m)() && (!uB() && null === UB(BB)))
```

#### 855. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9159` → after: `L9255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9255) · [Before (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9159)

```diff
-   8282: (TT, UT, mT) => {
+   8131: (BB, jB, zB) => {
```

#### 856. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9162-L9165` → after: `L9259-L9263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9259-L9263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9259-L9263) · [Before (L9162-L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9162-L9165)

```diff
-       D: () => iT,
-       H: () => vT,
-       L: () => cT,
-       M: () => kT,
+       F: () => pB,
+       J: () => LB,
+       N: () => HB,
+       O: () => gB,
+       P: () => kB,
```

#### 857. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9167` → after: `L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9265) · [Before (L9167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9167)

```diff
-       S: () => pT,
+       R: () => UB,
```

#### 858. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9169-L9171` → after: `L9267-L9269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9267-L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9267-L9269) · [Before (L9169-L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9169-L9171)

```diff
-       X: () => WT,
-       Z: () => OT,
-       bb: () => dT,
+       W: () => sB,
+       _: () => nB,
+       c: () => FB,
```

#### 859. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9173-L9177` → after: `L9271-L9275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9271-L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9271-L9275) · [Before (L9173-L9177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9173-L9177)

```diff
-       d: () => yT,
-       f: () => wT,
-       fb: () => bT,
-       g: () => jT,
-       j: () => HT,
+       db: () => fB,
+       e: () => oB,
+       gb: () => DB,
+       i: () => aB,
+       ib: () => tB,
```

#### 860. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9179-L9181` → after: `L9277-L9278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9277-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9277-L9278) · [Before (L9179-L9181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9179-L9181)

```diff
-       n: () => YT,
-       p: () => fT,
-       t: () => eT,
+       o: () => NB,
+       s: () => EB,
```

#### 861. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9227` → after: `L9323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9323) · [Before (L9227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9227)

```diff
-           return "linear" === UT ? mT : mT * mT
+           return "linear" === jB ? zB : zB * zB
```

#### 862. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9268` → after: `L9364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9364) · [Before (L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9268)

```diff
-         this.readTiming = TT, this.fn = !1, this.timing = null, this.nextFireMs = 0
+         this.readTiming = BB, this.DN = !1, this.timing = null, this.nextFireMs = 0
```

#### 863. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9271` → after: `L9367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9367) · [Before (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9271)

```diff
-         return TT ? this.fn ? !!(this.timing && UT >= this.nextFireMs) && (this.nextFireMs = UT + this.timing.intervalMs, !0) : (this.fn = !0, this.timing = this.readTiming(), this.nextFireMs = UT + (null !== (mT = null === (WT = this.timing) || void 0 === WT ? void 0 : WT.initia … [truncated]
+         return BB ? this.DN ? !!(this.timing && jB >= this.nextFireMs) && (this.nextFireMs = jB + this.timing.intervalMs, !0) : (this.DN = !0, this.timing = this.readTiming(), this.nextFireMs = jB + (null !== (zB = null === (QB = this.timing) || void 0 === QB ? void 0 : QB.initia … [truncated]
```

#### 864. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9275` → after: `L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9371) · [Before (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9275)

```diff
-         this.fn = !1
+         this.DN = !1
```

#### 865. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9291` → after: `L9387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9387) · [Before (L9291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9291)

```diff
-         return TT !== this.direction && (this.timer.reset(), this.direction = TT), this.timer.update(null !== TT, UT) ? TT : null
+         return BB !== this.direction && (this.timer.reset(), this.direction = BB), this.timer.update(null !== BB, jB) ? BB : null
```

#### 866. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9298` → after: `L9394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9394) · [Before (L9298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9298)

```diff
-   8837: (TT, UT, mT) => {
+   8704: (BB, jB, zB) => {
```

#### 867. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9300-L9301` → after: `L9396-L9397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9396-L9397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9396-L9397) · [Before (L9300-L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9300-L9301)

```diff
-       d: () => zT,
-       f: () => MT
+       e: () => nB,
+       i: () => dB
```

#### 868. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9309` → after: `L9405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9405) · [Before (L9309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9309)

```diff
-   8790: (TT, UT, mT) => {
+   8652: (BB, jB, zB) => {
```

#### 869. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9311-L9312` → after: `L9407-L9408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9407-L9408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9407-L9408) · [Before (L9311-L9312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9311-L9312)

```diff
-       e: () => gT,
-       f: () => MT
+       b: () => IB,
+       c: () => dB
```

#### 870. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9314-L9317` → after: `L9410-L9413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9410-L9413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9410-L9413) · [Before (L9314-L9317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9314-L9317)

```diff
-     var WT = mT(8305),
-       zT = mT(8282);
-     const MT = TT => (0, zT.bb)(TT, (0, WT.k)().buttonRepeat),
-       gT = TT => new zT.f((() => MT(TT)))
+     var QB = zB(8155),
+       nB = zB(8131);
+     const dB = BB => (0, nB.db)(BB, (0, QB.j)().buttonRepeat),
+       IB = BB => new nB.e((() => dB(BB)))
```

#### 871. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9319` → after: `L9415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9415) · [Before (L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9319)

```diff
-   8325: (TT, UT, mT) => {
+   8165: (BB, jB, zB) => {
```

#### 872. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9321-L9323` → after: `L9417-L9419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9417-L9419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9417-L9419) · [Before (L9321-L9323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9321-L9323)

```diff
-       d: () => HT,
-       e: () => MT,
-       i: () => nT
+       c: () => uB,
+       g: () => dB,
+       k: () => NB
```

#### 873. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9326-L9327` → after: `L9422-L9423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9422-L9423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9422-L9423) · [Before (L9326-L9327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9326-L9327)

```diff
-       zT = mT(8305);
-     const MT = (TT, UT) => "OpenShop" === TT ? "shop" === UT : "OpenLobbyLeaderboard" !== TT || "leaderboard" === UT;
+       nB = zB(8155);
+     const dB = (BB, jB) => "OpenShop" === BB ? "shop" === jB : "OpenLobbyLeaderboard" !== BB || "leaderboard" === jB;
```

#### 874. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9330` → after: `L9426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9426) · [Before (L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9330)

```diff
-         TT !== gT && (gT = TT, WT.j.EZ(zT.c, (0, zT.k)()))
+         BB !== IB && (IB = BB, QB.n.Ly(nB.e, (0, nB.j)()))
```

#### 875. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9332` → after: `L9428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9428) · [Before (L9332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9332)

```diff
-       HT = () => ((TT, UT) => "shop" === TT && UT ? "shop" : "leaderboard")((0, zT.k)().leaderboardButton, gT)
+       uB = () => ((BB, jB) => "shop" === BB && jB ? "shop" : "leaderboard")((0, nB.j)().leaderboardButton, IB)
```

#### 876. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9334` → after: `L9430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9430) · [Before (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9334)

```diff
-   8322: (TT, UT, mT) => {
+   8162: (BB, jB, zB) => {
```

#### 877. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9337-L9339` → after: `L9434-L9435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9434-L9435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9434-L9435) · [Before (L9337-L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9337-L9339)

```diff
-       D: () => bT,
-       G: () => LT,
-       H: () => pT,
+       C: () => rB,
+       F: () => sB,
```

#### 878. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9341` → after: `L9437-L9438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9437-L9438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9437-L9438) · [Before (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9341)

```diff
-       L: () => iT,
+       J: () => gB,
+       N: () => UB,
```

#### 879. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9347-L9351` → after: `L9446-L9449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9446-L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9446-L9449) · [Before (L9347-L9351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9347-L9351)

```diff
-       ab: () => cT,
-       c: () => IT,
-       cb: () => BT,
-       f: () => sT,
-       gb: () => fT,
+       b: () => VB,
+       bb: () => DB,
+       d: () => XB,
+       fb: () => dB,
```

#### 880. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9353-L9358` → after: `L9451-L9456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9451-L9456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9451-L9456) · [Before (L9353-L9358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9353-L9358)

```diff
-       hb: () => aT,
-       ib: () => MT,
-       l: () => gT,
-       mb: () => OT,
-       n: () => JT,
-       pb: () => QT,
+       i: () => IB,
+       jb: () => SB,
+       lb: () => hB,
+       m: () => iB,
+       o: () => MB,
+       ob: () => EB,
```

#### 881. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9363-L9364` → after: `L9459-L9460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9459-L9460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9459-L9460) · [Before (L9363-L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9363-L9364)

```diff
-       w: () => jT,
-       y: () => HT
+       x: () => aB,
+       z: () => uB
```

#### 882. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9366-L9367` → after: `L9462-L9463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9462-L9463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9462-L9463) · [Before (L9366-L9367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9366-L9367)

```diff
-     var WT = mT(8300),
-       zT = mT(8282);
+     var QB = zB(8150),
+       nB = zB(8131);
```

#### 883. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9399` → after: `L9495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9495) · [Before (L9399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9399)

```diff
-       lT = TT => `${Math.round(TT)}%`,
+       pB = BB => `${Math.round(BB)}%`,
```

#### 884. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9401` → after: `L9497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9497) · [Before (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9401)

```diff
-       pT = TT => `${TT.toFixed(1)}\xd7`,
+       sB = BB => `${BB.toFixed(1)}\xd7`,
```

#### 885. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9580` → after: `L9676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9676) · [Before (L9580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9580)

```diff
-       aT = WT.d.map((TT => {
+       DB = QB.e.map((BB => {
```

#### 886. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9594` → after: `L9690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9690) · [Before (L9594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9594)

```diff
-       yT = zT.X.filter((TT => "Home" !== TT)),
+       FB = nB.$.filter((BB => "Home" !== BB)),
```

#### 887. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9605` → after: `L9701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9701) · [Before (L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9605)

```diff
-         const WT = UT - (null !== (mT = this.startMs) && void 0 !== mT ? mT : UT) >= 250;
+         const QB = jB - (null !== (zB = this.startMs) && void 0 !== zB ? zB : jB) >= 250;
```

#### 888. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9648` → after: `L9744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9744) · [Before (L9648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9648)

```diff
-           fn: WT
+           DN: QB
```

#### 889. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9658` → after: `L9754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9754) · [Before (L9658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9658)

```diff
-   8852: (TT, UT, mT) => {
+   8722: (BB, jB, zB) => {
```

#### 890. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9678` → after: `L9774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9774) · [Before (L9678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9678)

```diff
-   5123: (TT, UT, mT) => {
+   5101: (BB, jB, zB) => {
```

#### 891. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9680-L9681` → after: `L9776-L9777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9776-L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9776-L9777) · [Before (L9680-L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9680-L9681)

```diff
-       e: () => MT,
-       g: () => gT
+       d: () => dB,
+       e: () => IB
```

#### 892. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9683` → after: `L9779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9779) · [Before (L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9683)

```diff
-     var WT = mT(63);
+     var QB = zB(62);
```

#### 893. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9688` → after: `L9784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9784) · [Before (L9688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9688)

```diff
-         return mT && null !== (UT = zT.get(mT)) && void 0 !== UT ? UT : null
+         return zB && null !== (jB = nB.get(zB)) && void 0 !== jB ? jB : null
```

#### 894. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9709` → after: `L9805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9805) · [Before (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9709)

```diff
-   8925: (TT, UT, mT) => {
+   8798: (BB, jB, zB) => {
```

#### 895. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9714-L9717` → after: `L9813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9813) · [Before (L9714-L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9714-L9717)

```diff
-       k: () => WT,
-       n: () => nT,
-       o: () => kT,
-       s: () => jT
+       k: () => aB
```

#### 896. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9730` → after: `L9826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9826) · [Before (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9730)

```diff
-   8923: (TT, UT, mT) => {
+   8795: (BB, jB, zB) => {
```

#### 897. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9732-L9733` → after: `L9828-L9829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9828-L9829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9828-L9829) · [Before (L9732-L9733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9732-L9733)

```diff
-       d: () => MT,
-       h: () => zT
+       c: () => dB,
+       f: () => nB
```

#### 898. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9741` → after: `L9837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9837) · [Before (L9741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9741)

```diff
-   8847: (TT, UT, mT) => {
+   8718: (BB, jB, zB) => {
```

#### 899. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9743-L9748` → after: `L9839-L9844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9839-L9844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9839-L9844) · [Before (L9743-L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9743-L9748)

```diff
-       c: () => HT,
-       g: () => zT,
-       j: () => gT,
-       k: () => MT,
-       m: () => WT,
-       q: () => kT
+       d: () => uB,
+       e: () => nB,
+       f: () => IB,
+       h: () => dB,
+       i: () => QB,
+       k: () => UB
```

#### 900. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9760` → after: `L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9856) · [Before (L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9760)

```diff
-   8859: (TT, UT, mT) => {
+   8727: (BB, jB, zB) => {
```

#### 901. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9771` → after: `L9867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9867) · [Before (L9771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9771)

```diff
-           "Air" === nT && WT.j.EZ(zT)
+           "Air" === NB && QB.n.Ly(nB)
```

#### 902. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9776` → after: `L9872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9872) · [Before (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9776)

```diff
-   8986: (TT, UT, mT) => {
+   8888: (BB, jB, zB) => {
```

#### 903. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9779` → after: `L9875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9875) · [Before (L9779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9779)

```diff
-       g: () => HT
+       h: () => uB
```

#### 904. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9781-L9783` → after: `L9877-L9879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9877-L9879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9877-L9879) · [Before (L9781-L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9781-L9783)

```diff
-     var WT = mT(25),
-       zT = mT(1429),
-       MT = mT(102);
+     var QB = zB(28),
+       nB = zB(1357),
+       dB = zB(106);
```

#### 905. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9838` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9934) · [Before (L9838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9838)

```diff
-           zT = null !== UT && void 0 !== UT ? UT : WT.pattern;
+           nB = null !== jB && void 0 !== jB ? jB : QB.pattern;
```

#### 906. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9841` → after: `L9937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9937) · [Before (L9841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9841)

```diff
-         MT - this.lastAnyAt < 40 && WT.priority < this.playingPriority || MT - (null !== (mT = this.lastAt.get(TT)) && void 0 !== mT ? mT : -1 / 0) < WT.minGapMs || MT < this.playingUntil && WT.priority < this.playingPriority || (this.lastAt.set(TT, MT), this.lastAnyAt = MT, this … [truncated]
+         dB - this.lastAnyAt < 40 && QB.priority < this.playingPriority || dB - (null !== (zB = this.lastAt.get(BB)) && void 0 !== zB ? zB : -1 / 0) < QB.minGapMs || dB < this.playingUntil && QB.priority < this.playingPriority || (this.lastAt.set(BB, dB), this.lastAnyAt = dB, this … [truncated]
```

#### 907. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9848` → after: `L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9944) · [Before (L9848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9848)

```diff
-       enabled: () => nT() && WT.b.get("isTouchScreen") && WT.b.get("clientEscMenuOptions").vibration && !(0, zT.e)()
+       enabled: () => NB() && QB.c.get("isTouchScreen") && QB.c.get("clientEscMenuOptions").vibration && !(0, nB.e)()
```

#### 908. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9851` → after: `L9947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9947) · [Before (L9851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9851)

```diff
-   8856: (TT, UT, mT) => {
+   8724: (BB, jB, zB) => {
```

#### 909. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9855` → after: `L9951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9951) · [Before (L9855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9855)

```diff
-     var WT = mT(1354);
+     var QB = zB(1289);
```

#### 910. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9860` → after: `L9956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9956) · [Before (L9860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9860)

```diff
-         const mT = (0, WT.c)();
+         const zB = (0, QB.e)();
```

#### 911. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9870` → after: `L9966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9966) · [Before (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9870)

```diff
-   8894: (TT, UT, mT) => {
+   8769: (BB, jB, zB) => {
```

#### 912. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9872` → after: `L9968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9968) · [Before (L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9872)

```diff
-       d: () => gT
+       b: () => IB
```

#### 913. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9874-L9876` → after: `L9970-L9972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9970-L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9970-L9972) · [Before (L9874-L9876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9874-L9876)

```diff
-     var WT = mT(8901),
-       zT = mT(653),
-       MT = mT(133);
+     var QB = zB(8773),
+       nB = zB(658),
+       dB = zB(145);
```

#### 914. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9880` → after: `L9976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9976) · [Before (L9880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9880)

```diff
-       if ((0, zT.E)(TT)) return !0;
+       if ((0, nB.I)(BB)) return !0;
```

#### 915. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9886` → after: `L9982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9982) · [Before (L9886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9886)

```diff
-             if ((0, WT.j)(UT.items[TT], gT)) return !1
+             if ((0, QB.h)(jB.items[BB], IB)) return !1
```

#### 916. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9891` → after: `L9987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L9987) · [Before (L9891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9891)

```diff
-   8901: (TT, UT, mT) => {
+   8773: (BB, jB, zB) => {
```

#### 917. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9912` → after: `L10008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10008) · [Before (L9912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9912)

```diff
-       const zT = null !== (WT = mT.excludedPlayers) && void 0 !== WT ? WT : [UT];
+       const nB = null !== (QB = zB.excludedPlayers) && void 0 !== QB ? QB : [jB];
```

#### 918. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9916` → after: `L10012-L10013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10012-L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10012-L10013) · [Before (L9916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9916)

```diff
-       e: () => MT,
+       b: () => dB,
+       d: () => nB,
```

#### 919. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9918-L9919` → after: `L10015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10015) · [Before (L9918-L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9918-L9919)

```diff
-       i: () => gT,
-       j: () => WT
+       h: () => QB
```

#### 920. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9922-L10019` → after: `L10018-L10019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10018-L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10018-L10019) · [Before (L9922-L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L9922-L10019)

```diff
-   8933: () => {},
-   8356: (TT, UT, mT) => {
-     var WT = {
-       "./nintendo/A.svg": 8360,
-       "./nintendo/B.svg": 8365,
-       "./nintendo/Down.svg": 8372,
-       "./nintendo/Home.svg": 8379,
-       "./nintendo/LB.svg": 8386,
-       "./nintendo/LS.svg": 8395,
-       "./nintendo/LT.svg": 8404,
-       "./nintendo/Left.svg": 8412,
-       "./nintendo/LeftStick.svg": 8416,
-       "./nintendo/Menu.svg": 8421,
-       "./nintendo/RB.svg": 8429,
-       "./nintendo/RS.svg": 8432,
-       "./nintendo/RT.svg": 8441,
- ... (82 more removed lines; see GitHub link above)
+   8805: () => {},
+   8200: (BB, jB, zB) => {
```

#### 921. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10022` → after: `L10022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10022) · [Before (L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10022)

```diff
-   8365: (TT, UT, mT) => {
+   8209: (BB, jB, zB) => {
```

#### 922. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10025` → after: `L10025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10025) · [Before (L10025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10025)

```diff
-   8372: (TT, UT, mT) => {
+   8216: (BB, jB, zB) => {
```

#### 923. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10028` → after: `L10028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10028) · [Before (L10028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10028)

```diff
-   8379: (TT, UT, mT) => {
+   8225: (BB, jB, zB) => {
```

#### 924. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10031` → after: `L10031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10031) · [Before (L10031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10031)

```diff
-   8386: (TT, UT, mT) => {
+   8231: (BB, jB, zB) => {
```

#### 925. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10034` → after: `L10034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10034) · [Before (L10034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10034)

```diff
-   8395: (TT, UT, mT) => {
+   8238: (BB, jB, zB) => {
```

#### 926. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10037` → after: `L10037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10037) · [Before (L10037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10037)

```diff
-   8404: (TT, UT, mT) => {
+   8247: (BB, jB, zB) => {
```

#### 927. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10040` → after: `L10040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10040) · [Before (L10040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10040)

```diff
-   8412: (TT, UT, mT) => {
+   8250: (BB, jB, zB) => {
```

#### 928. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10043` → after: `L10043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10043) · [Before (L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10043)

```diff
-   8416: (TT, UT, mT) => {
+   8252: (BB, jB, zB) => {
```

#### 929. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10046` → after: `L10046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10046) · [Before (L10046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10046)

```diff
-   8421: (TT, UT, mT) => {
+   8260: (BB, jB, zB) => {
```

#### 930. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10049` → after: `L10049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10049) · [Before (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10049)

```diff
-   8429: (TT, UT, mT) => {
+   8263: (BB, jB, zB) => {
```

#### 931. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10052` → after: `L10052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10052) · [Before (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10052)

```diff
-   8432: (TT, UT, mT) => {
+   8266: (BB, jB, zB) => {
```

#### 932. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10055` → after: `L10055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10055) · [Before (L10055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10055)

```diff
-   8441: (TT, UT, mT) => {
+   8272: (BB, jB, zB) => {
```

#### 933. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10058` → after: `L10058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10058) · [Before (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10058)

```diff
-   8447: (TT, UT, mT) => {
+   8277: (BB, jB, zB) => {
```

#### 934. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10061` → after: `L10061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10061) · [Before (L10061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10061)

```diff
-   8453: (TT, UT, mT) => {
+   8284: (BB, jB, zB) => {
```

#### 935. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10064` → after: `L10064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10064) · [Before (L10064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10064)

```diff
-   8459: (TT, UT, mT) => {
+   8287: (BB, jB, zB) => {
```

#### 936. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10067` → after: `L10067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10067) · [Before (L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10067)

```diff
-   8464: (TT, UT, mT) => {
+   8290: (BB, jB, zB) => {
```

#### 937. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10070` → after: `L10070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10070) · [Before (L10070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10070)

```diff
-   8467: (TT, UT, mT) => {
+   8298: (BB, jB, zB) => {
```

#### 938. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10073` → after: `L10073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10073) · [Before (L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10073)

```diff
-   8474: (TT, UT, mT) => {
+   8305: (BB, jB, zB) => {
```

#### 939. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10076` → after: `L10076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10076) · [Before (L10076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10076)

```diff
-   8479: (TT, UT, mT) => {
+   8314: (BB, jB, zB) => {
```

#### 940. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10079` → after: `L10079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10079) · [Before (L10079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10079)

```diff
-   8485: (TT, UT, mT) => {
+   8323: (BB, jB, zB) => {
```

#### 941. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10082` → after: `L10082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10082) · [Before (L10082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10082)

```diff
-   8488: (TT, UT, mT) => {
+   8325: (BB, jB, zB) => {
```

#### 942. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10085` → after: `L10085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10085) · [Before (L10085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10085)

```diff
-   8497: (TT, UT, mT) => {
+   8327: (BB, jB, zB) => {
```

#### 943. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10088` → after: `L10088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10088) · [Before (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10088)

```diff
-   8500: (TT, UT, mT) => {
+   8330: (BB, jB, zB) => {
```

#### 944. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10091` → after: `L10091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10091) · [Before (L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10091)

```diff
-   8508: (TT, UT, mT) => {
+   8336: (BB, jB, zB) => {
```

#### 945. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10094` → after: `L10094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10094) · [Before (L10094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10094)

```diff
-   8517: (TT, UT, mT) => {
+   8340: (BB, jB, zB) => {
```

#### 946. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10097` → after: `L10097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10097) · [Before (L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10097)

```diff
-   8524: (TT, UT, mT) => {
+   8342: (BB, jB, zB) => {
```

#### 947. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10100` → after: `L10100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10100) · [Before (L10100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10100)

```diff
-   8532: (TT, UT, mT) => {
+   8349: (BB, jB, zB) => {
```

#### 948. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10103` → after: `L10103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10103) · [Before (L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10103)

```diff
-   8534: (TT, UT, mT) => {
+   8357: (BB, jB, zB) => {
```

#### 949. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10106` → after: `L10106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10106) · [Before (L10106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10106)

```diff
-   8540: (TT, UT, mT) => {
+   8361: (BB, jB, zB) => {
```

#### 950. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10109` → after: `L10109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10109) · [Before (L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10109)

```diff
-   8543: (TT, UT, mT) => {
+   8365: (BB, jB, zB) => {
```

#### 951. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10112` → after: `L10112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10112) · [Before (L10112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10112)

```diff
-   8547: (TT, UT, mT) => {
+   8370: (BB, jB, zB) => {
```

#### 952. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10115` → after: `L10115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10115) · [Before (L10115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10115)

```diff
-   8554: (TT, UT, mT) => {
+   8378: (BB, jB, zB) => {
```

#### 953. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10118` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10118) · [Before (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10118)

```diff
-   8563: (TT, UT, mT) => {
+   8385: (BB, jB, zB) => {
```

#### 954. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10121` → after: `L10121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10121) · [Before (L10121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10121)

```diff
-   8567: (TT, UT, mT) => {
+   8387: (BB, jB, zB) => {
```

#### 955. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10124` → after: `L10124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10124) · [Before (L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10124)

```diff
-   8572: (TT, UT, mT) => {
+   8396: (BB, jB, zB) => {
```

#### 956. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10127` → after: `L10127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10127) · [Before (L10127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10127)

```diff
-   8581: (TT, UT, mT) => {
+   8404: (BB, jB, zB) => {
```

#### 957. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10130` → after: `L10130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10130) · [Before (L10130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10130)

```diff
-   8587: (TT, UT, mT) => {
+   8410: (BB, jB, zB) => {
```

#### 958. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10133` → after: `L10133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10133) · [Before (L10133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10133)

```diff
-   8596: (TT, UT, mT) => {
+   8417: (BB, jB, zB) => {
```

#### 959. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10136` → after: `L10136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10136) · [Before (L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10136)

```diff
-   8604: (TT, UT, mT) => {
+   8424: (BB, jB, zB) => {
```

#### 960. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10139` → after: `L10139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10139) · [Before (L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10139)

```diff
-   8612: (TT, UT, mT) => {
+   8432: (BB, jB, zB) => {
```

#### 961. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10142` → after: `L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10142) · [Before (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10142)

```diff
-   8614: (TT, UT, mT) => {
+   8441: (BB, jB, zB) => {
```

#### 962. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10145` → after: `L10145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10145) · [Before (L10145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10145)

```diff
-   8617: (TT, UT, mT) => {
+   8448: (BB, jB, zB) => {
```

#### 963. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10148` → after: `L10148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10148) · [Before (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10148)

```diff
-   8624: (TT, UT, mT) => {
+   8456: (BB, jB, zB) => {
```

#### 964. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10151` → after: `L10151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10151) · [Before (L10151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10151)

```diff
-   8633: (TT, UT, mT) => {
+   8464: (BB, jB, zB) => {
```

#### 965. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10154` → after: `L10154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10154) · [Before (L10154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10154)

```diff
-   8637: (TT, UT, mT) => {
+   8468: (BB, jB, zB) => {
```

#### 966. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10157` → after: `L10157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10157) · [Before (L10157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10157)

```diff
-   8640: (TT, UT, mT) => {
+   8472: (BB, jB, zB) => {
```

#### 967. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10160` → after: `L10160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10160) · [Before (L10160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10160)

```diff
-   8645: (TT, UT, mT) => {
+   8477: (BB, jB, zB) => {
```

#### 968. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10163` → after: `L10163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10163) · [Before (L10163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10163)

```diff
-   8650: (TT, UT, mT) => {
+   8482: (BB, jB, zB) => {
```

#### 969. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10166` → after: `L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10166) · [Before (L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10166)

```diff
-   8652: (TT, UT, mT) => {
+   8484: (BB, jB, zB) => {
```

#### 970. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10169` → after: `L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10169) · [Before (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10169)

```diff
-   8656: (TT, UT, mT) => {
+   8492: (BB, jB, zB) => {
```

#### 971. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10172` → after: `L10172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10172) · [Before (L10172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10172)

```diff
-   8660: (TT, UT, mT) => {
+   8497: (BB, jB, zB) => {
```

#### 972. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10175` → after: `L10175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10175) · [Before (L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10175)

```diff
-   8662: (TT, UT, mT) => {
+   8502: (BB, jB, zB) => {
```

#### 973. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10178` → after: `L10178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10178) · [Before (L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10178)

```diff
-   8667: (TT, UT, mT) => {
+   8505: (BB, jB, zB) => {
```

#### 974. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10181` → after: `L10181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10181) · [Before (L10181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10181)

```diff
-   8676: (TT, UT, mT) => {
+   8507: (BB, jB, zB) => {
```

#### 975. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10184` → after: `L10184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10184) · [Before (L10184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10184)

```diff
-   8678: (TT, UT, mT) => {
+   8512: (BB, jB, zB) => {
```

#### 976. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10187` → after: `L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10187) · [Before (L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10187)

```diff
-   8681: (TT, UT, mT) => {
+   8520: (BB, jB, zB) => {
```

#### 977. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10190` → after: `L10190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10190) · [Before (L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10190)

```diff
-   8690: (TT, UT, mT) => {
+   8525: (BB, jB, zB) => {
```

#### 978. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10193` → after: `L10193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10193) · [Before (L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10193)

```diff
-   8699: (TT, UT, mT) => {
+   8533: (BB, jB, zB) => {
```

#### 979. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10196` → after: `L10196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10196) · [Before (L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10196)

```diff
-   8705: (TT, UT, mT) => {
+   8540: (BB, jB, zB) => {
```

#### 980. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10199` → after: `L10199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10199) · [Before (L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10199)

```diff
-   8714: (TT, UT, mT) => {
+   8549: (BB, jB, zB) => {
```

#### 981. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10202` → after: `L10202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10202) · [Before (L10202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10202)

```diff
-   8719: (TT, UT, mT) => {
+   8558: (BB, jB, zB) => {
```

#### 982. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10205` → after: `L10205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10205) · [Before (L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10205)

```diff
-   8726: (TT, UT, mT) => {
+   8564: (BB, jB, zB) => {
```

#### 983. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10208` → after: `L10208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10208) · [Before (L10208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10208)

```diff
-   8728: (TT, UT, mT) => {
+   8570: (BB, jB, zB) => {
```

#### 984. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10211` → after: `L10211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10211) · [Before (L10211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10211)

```diff
-   8733: (TT, UT, mT) => {
+   8578: (BB, jB, zB) => {
```

#### 985. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10214` → after: `L10214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10214) · [Before (L10214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10214)

```diff
-   8735: (TT, UT, mT) => {
+   8580: (BB, jB, zB) => {
```

#### 986. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10217` → after: `L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10217) · [Before (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10217)

```diff
-   8741: (TT, UT, mT) => {
+   8582: (BB, jB, zB) => {
```

#### 987. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10220` → after: `L10220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10220) · [Before (L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10220)

```diff
-   8745: (TT, UT, mT) => {
+   8591: (BB, jB, zB) => {
```

#### 988. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10223` → after: `L10223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10223) · [Before (L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10223)

```diff
-   8751: (TT, UT, mT) => {
+   8599: (BB, jB, zB) => {
```

#### 989. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10226` → after: `L10226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10226) · [Before (L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10226)

```diff
-   8753: (TT, UT, mT) => {
+   8601: (BB, jB, zB) => {
```

#### 990. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10229` → after: `L10229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10229) · [Before (L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10229)

```diff
-   8758: (TT, UT, mT) => {
+   8604: (BB, jB, zB) => {
```

#### 991. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10232` → after: `L10232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10232) · [Before (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10232)

```diff
-   8761: (TT, UT, mT) => {
+   8612: (BB, jB, zB) => {
```

#### 992. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10235` → after: `L10235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10235) · [Before (L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10235)

```diff
-   8763: (TT, UT, mT) => {
+   8616: (BB, jB, zB) => {
```

#### 993. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10238` → after: `L10238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10238) · [Before (L10238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10238)

```diff
-   8767: (TT, UT, mT) => {
+   8625: (BB, jB, zB) => {
```

#### 994. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10241` → after: `L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10241) · [Before (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10241)

```diff
-   8774: (TT, UT, mT) => {
+   8632: (BB, jB, zB) => {
```

#### 995. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10244` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/controller.js#L10244) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/controller.js#L10244)

```diff
-   8779: (TT, UT, mT) => {
+   8639: (BB, jB, zB) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00)

#### 1. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L4)

```diff
-   34135: (TT, UT, mT) => {
+   34114: (BB, jB, zB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L9-L13)

```diff
-     var WT = mT(681),
-       zT = mT(102),
-       MT = mT(133),
-       gT = mT(130),
-       nT = mT(3386);
+     var QB = zB(690),
+       nB = zB(106),
+       dB = zB(145),
+       IB = zB(140),
+       NB = zB(3376);
```

#### 3. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L18)

```diff
-         if (null !== TT.appIosVersion) return `${TT.appIosVersion} (the iOS app's)`;
+         if (null !== BB.appIosVersion) return `${BB.appIosVersion} (the iOS app's)`;
```

#### 4. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L20)

```diff
-         if (UT) return `${UT[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
+         if (jB) return `${jB[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
```

#### 5. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L25)

```diff
-         if ("Safari" === mT.name && mT.version) return `${mT.version} (Safari's version, which follows iOS)`;
+         if ("Safari" === zB.name && zB.version) return `${zB.version} (Safari's version, which follows iOS)`;
```

#### 6. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L29)

```diff
-         return MT < 18 || 18 === MT && gT < 6 ? `${zT} (user agent)` : `? (the user agent says ${zT}, frozen from iOS 26)`
+         return dB < 18 || 18 === dB && IB < 6 ? `${nB} (user agent)` : `? (the user agent says ${nB}, frozen from iOS 26)`
```

#### 7. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L32)

```diff
-       if (UT) return "windows" === TT.os ? `${UT} (${function(TT){const UT=parseInt(TT,10);if(UT>=13)return"Windows 11";return UT>=1?"Windows 10":"Windows 8.1 or older"}(UT)}, client hints)` : `${UT} (client hints)`;
+       if (jB) return "windows" === BB.os ? `${jB} (${function(BB){const jB=parseInt(BB,10);if(jB>=13)return"Windows 11";return jB>=1?"Windows 10":"Windows 8.1 or older"}(jB)}, client hints)` : `${jB} (client hints)`;
```

#### 8. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L34)

```diff
-       return mT ? HT.has(mT) ? `${mT} (user agent, which may be frozen)` : `${mT} (user agent)` : "?"
+       return zB ? uB.has(zB) ? `${zB} (user agent, which may be frozen)` : `${zB} (user agent)` : "?"
```

#### 9. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L39)

```diff
-       const mT = (null !== (UT = TT.fullVersionList) && void 0 !== UT ? UT : []).filter((TT => {
+       const zB = (null !== (jB = BB.fullVersionList) && void 0 !== jB ? jB : []).filter((BB => {
```

#### 10. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L49)

```diff
-         return `${UT} ${mT}`
+         return `${jB} ${zB}`
```

#### 11. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L51)

```diff
-       return `${TT.platform} ${TT.platformVersion||"?"}, ${mT.join(", ")||"?"}, ${TT.architecture||"?"} ${TT.bitness||"?"}-bit, model ${TT.model||"?"}, mobile ${TT.mobile}`
+       return `${BB.platform} ${BB.platformVersion||"?"}, ${zB.join(", ")||"?"}, ${BB.architecture||"?"} ${BB.bitness||"?"}-bit, model ${BB.model||"?"}, mobile ${BB.mobile}`
```

#### 12. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L59)

```diff
-       lT = `failed (${String(TT)})`
+       pB = `failed (${String(BB)})`
```

#### 13. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L63-L64` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L63-L64) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L63-L64)

```diff
-       const TT = (0, gT.s)(),
-         UT = null !== TT && void 0 !== TT ? TT : (0, gT.l)(),
+       const BB = (0, IB.q)(),
+         jB = null !== BB && void 0 !== BB ? BB : (0, IB.j)(),
```

#### 14. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L66` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L66) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L66)

```diff
-       return [UT ? `webgl ${UT.vendor} / ${UT.renderer} (${TT?"the renderer's context":"a probe"})` : "webgl ?", mT ? `webgpu adapter ${mT.vendor||"?"}/${mT.architecture||"?"}` : "webgpu adapter ?"].join("; ")
+       return [jB ? `webgl ${jB.vendor} / ${jB.renderer} (${BB?"the renderer's context":"a probe"})` : "webgl ?", zB ? `webgpu adapter ${zB.vendor||"?"}/${zB.architecture||"?"}` : "webgpu adapter ?"].join("; ")
```

#### 15. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L77)

```diff
-           appIosVersion: nT.e,
+           appIosVersion: NB.h,
```

#### 16. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L80-L81` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L80-L81) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L80-L81)

```diff
-         vT = (0, WT.k)(navigator.platform, navigator.maxTouchPoints, MT.siteUsed, (0, zT.getWebGpuSupported)());
-       return [`os ${ZT} ${cT}; user agent's ${null!==(TT=pT.os.name)&&void 0!==TT?TT:"?"} ${null!==(UT=pT.os.version)&&void 0!==UT?UT:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,zT.getPlatformType)()}`, `browser ${null!==(mT=pT.browser.nam … [truncated]
+         kB = (0, QB.f)(navigator.platform, navigator.maxTouchPoints, dB.siteUsed, (0, nB.getWebGpuSupported)());
+       return [`os ${mB} ${yB}; user agent's ${null!==(BB=sB.os.name)&&void 0!==BB?BB:"?"} ${null!==(jB=sB.os.version)&&void 0!==jB?jB:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,nB.getPlatformType)()}`, `browser ${null!==(zB=sB.browser.nam … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/diagSink.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/diagSink.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8)

#### 1. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/diagSink.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/diagSink.js#L4)

```diff
-   36499: (TT, UT, mT) => {
+   36501: (BB, jB, zB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/diagSink.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/diagSink.js#L35)

```diff
-           this.Cl()
+           this.vp()
```

#### 3. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/diagSink.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/diagSink.js#L46)

```diff
-           return WT >= 55296 && WT <= 56319 && mT--, `${UT.slice(0,mT)}...`
+           return QB >= 55296 && QB <= 56319 && zB--, `${jB.slice(0,zB)}...`
```

#### 4. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/diagSink.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/diagSink.js#L80)

```diff
-             for (const UT of mT) this.add(`[dump:${TT}] ${UT}`)
+             for (const jB of zB) this.add(`[dump:${BB}] ${jB}`)
```

#### 5. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/diagSink.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/diagSink.js#L101)

```diff
-         return null !== (TT = this.deps.storage.getItem(WT)) && void 0 !== TT ? TT : {}
+         return null !== (BB = this.deps.storage.getItem(QB)) && void 0 !== BB ? BB : {}
```

#### 6. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/diagSink.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/diagSink.js#L106)

```diff
-         return (null === UT || void 0 === UT ? void 0 : UT.day) === TT ? UT : {
+         return (null === jB || void 0 === jB ? void 0 : jB.day) === BB ? jB : {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/errorLogging.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/errorLogging.js` (106 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50)

#### 1. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4)

```diff
-   6761: (TT, UT, mT) => {
+   6639: (BB, jB, zB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L71)

```diff
-       TB: () => NT,
+       tJ: () => KB,
```

#### 3. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L178` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L178) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L178)

```diff
-             if (TT.internalLogger.debug(`Registering public faro reference in the global scope using "${TT.config.globalObjectKey}" key`), TT.config.globalObjectKey in jT) return void TT.internalLogger.warn(`Skipping global registration due to key "${TT.config.globalObjectKey}" b … [truncated]
+             if (BB.internalLogger.debug(`Registering public faro reference in the global scope using "${BB.config.globalObjectKey}" key`), BB.config.globalObjectKey in aB) return void BB.internalLogger.warn(`Skipping global registration due to key "${BB.config.globalObjectKey}" b … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L193)

```diff
-       return Object.prototype.toString.call(TT) === `[object ${UT}]`
+       return Object.prototype.toString.call(BB) === `[object ${jB}]`
```

#### 5. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L243)

```diff
-       return OT(TT) ? TT : TT instanceof URL ? TT.href : !NT(TT) && wT(null === TT || void 0 === TT ? void 0 : TT.toString) ? TT.toString() : void 0
+       return SB(BB) ? BB : BB instanceof URL ? BB.href : !KB(BB) && oB(null === BB || void 0 === BB ? void 0 : BB.toString) ? BB.toString() : void 0
```

#### 6. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L256)

```diff
-         return null === (UT = ZT.internalLogger) || void 0 === UT || UT.info(`Web storage of type ${TT} is not available. Reason: ${mT}`), !1
+         return null === (jB = mB.internalLogger) || void 0 === jB || jB.info(`Web storage of type ${BB} is not available. Reason: ${zB}`), !1
```

#### 7. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L277)

```diff
-       return TT === AT ? WU : TT === oT && zU
+       return BB === RB ? Qj : BB === vB && nj
```

#### 8. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L299)

```diff
-       return "symbol" == gU(UT) ? UT : UT + ""
+       return "symbol" == Ij(jB) ? jB : jB + ""
```

#### 9. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L340)

```diff
-         })) && void 0 !== mT ? mT : null === zT || void 0 === zT ? void 0 : zT.samplingRate) && void 0 !== UT ? UT : 1,
+         })) && void 0 !== zB ? zB : null === nB || void 0 === nB ? void 0 : nB.samplingRate) && void 0 !== jB ? jB : 1,
```

#### 10. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L434-L435` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L434-L435) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L434-L435)

```diff
-         lastActivity: null !== mT && void 0 !== mT ? mT : gT,
-         started: null !== UT && void 0 !== UT ? UT : gT,
+         lastActivity: null !== zB && void 0 !== zB ? zB : IB,
+         started: null !== jB && void 0 !== jB ? jB : IB,
```

#### 11. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L466)

```diff
-         if (HT = Math.min(LT + zT, (null !== (jT = null === ZT || void 0 === ZT ? void 0 : ZT.started) && void 0 !== jT ? jT : LT) + MT, (null !== (lT = null === ZT || void 0 === ZT ? void 0 : ZT.lastActivity) && void 0 !== lT ? lT : LT) + gT), !1 === TT && wU(ZT)) {
+         if (uB = Math.min(rB + nB, (null !== (aB = null === mB || void 0 === mB ? void 0 : mB.started) && void 0 !== aB ? aB : rB) + dB, (null !== (pB = null === mB || void 0 === mB ? void 0 : mB.lastActivity) && void 0 !== pB ? pB : rB) + IB), !1 === BB && oj(mB)) {
```

#### 12. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L478)

```diff
-           HT = LT + zT, mT(TT), null === (vT = nT.api) || void 0 === vT || vT.setSession(TT.sessionMeta), null === pT || void 0 === pT || null === (fT = pT.onSessionChange) || void 0 === fT || fT.call(pT, null !== (qT = null === ZT || void 0 === ZT ? void 0 : ZT.sessionMeta) && v … [truncated]
+           uB = rB + nB, zB(BB), null === (kB = NB.api) || void 0 === kB || kB.setSession(BB.sessionMeta), null === sB || void 0 === sB || null === (GB = sB.onSessionChange) || void 0 === GB || GB.call(sB, null !== (LB = null === mB || void 0 === mB ? void 0 : mB.sessionMeta) && v … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L507)

```diff
-             attributes: IU(jU(jU(jU({}, null === (WT = mT.config.sessionTracking) || void 0 === WT || null === (WT = WT.session) || void 0 === WT ? void 0 : WT.attributes), null !== (zT = null === (MT = mT.metas.value.session) || void 0 === MT ? void 0 : MT.attributes) && void 0  … [truncated]
+             attributes: Vj(aj(aj(aj({}, null === (QB = zB.config.sessionTracking) || void 0 === QB || null === (QB = QB.session) || void 0 === QB ? void 0 : QB.attributes), null !== (nB = null === (dB = zB.metas.value.session) || void 0 === dB ? void 0 : dB.attributes) && void 0  … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L512)

```diff
-         jT = null !== (gT = null === (nT = mT.metas.value.session) || void 0 === nT ? void 0 : nT.overrides) && void 0 !== gT ? gT : null === UT || void 0 === UT || null === (HT = UT.sessionMeta) || void 0 === HT ? void 0 : HT.overrides;
+         aB = null !== (IB = null === (NB = zB.metas.value.session) || void 0 === NB ? void 0 : NB.overrides) && void 0 !== IB ? IB : null === jB || void 0 === jB || null === (uB = jB.sessionMeta) || void 0 === uB ? void 0 : uB.overrides;
```

#### 15. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L537)

```diff
-             UT = yU(TT ? gT : dU({
+             jB = Fj(BB ? IB : fj({
```

#### 16. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L549` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L549) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L549)

```diff
-                 HT = null !== (zT = null !== (MT = WT.serviceName) && void 0 !== MT ? MT : null === (gT = TT.metas.value.app) || void 0 === gT ? void 0 : gT.name) && void 0 !== zT ? zT : "";
+                 uB = null !== (nB = null !== (dB = QB.serviceName) && void 0 !== dB ? dB : null === (IB = BB.metas.value.app) || void 0 === IB ? void 0 : IB.name) && void 0 !== nB ? nB : "";
```

#### 17. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L575` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L575) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L575)

```diff
-       return JSON.stringify(null !== TT && void 0 !== TT ? TT : {}, function() {
+       return JSON.stringify(null !== BB && void 0 !== BB ? BB : {}, function() {
```

#### 18. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L741` → after: `L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L741) · [Before (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L741)

```diff
-             kT = null !== (UT = null === nT || void 0 === nT ? void 0 : nT.overrides) && void 0 !== UT ? UT : null === zT || void 0 === zT ? void 0 : zT.session.overrides;
+             UB = null !== (jB = null === NB || void 0 === NB ? void 0 : NB.overrides) && void 0 !== jB ? jB : null === nB || void 0 === nB ? void 0 : nB.session.overrides;
```

#### 19. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L766` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L766) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L766)

```diff
-       return (null === TT || void 0 === TT ? void 0 : TT.persistent) ? FU : PU
+       return (null === BB || void 0 === BB ? void 0 : BB.persistent) ? Zj : Aj
```

#### 20. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L801` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L801) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L801)

```diff
-       return "symbol" == EU(UT) ? UT : UT + ""
+       return "symbol" == Cj(jB) ? jB : jB + ""
```

#### 21. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L892)

```diff
-             sessionId: (null === mT || void 0 === mT ? void 0 : mT.reset) ? void 0 : null !== (HT = null === WT || void 0 === WT ? void 0 : WT.id) && void 0 !== HT ? HT : null === (kT = UT.session) || void 0 === kT ? void 0 : kT.id,
+             sessionId: (null === zB || void 0 === zB ? void 0 : zB.reset) ? void 0 : null !== (uB = null === QB || void 0 === QB ? void 0 : QB.id) && void 0 !== uB ? uB : null === (UB = jB.session) || void 0 === UB ? void 0 : UB.id,
```

#### 22. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L931)

```diff
-           Object.keys(TT).length > 0 ? MT.sessionMeta.overrides = TT : delete MT.sessionMeta.overrides
+           Object.keys(BB).length > 0 ? dB.sessionMeta.overrides = BB : delete dB.sessionMeta.overrides
```

#### 23. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L950)

```diff
-             if (null === mT || void 0 === mT || delete mT.isSampled, 0 === Object.keys(null !== mT && void 0 !== mT ? mT : {}).length) null === (nT = TT.meta.session) || void 0 === nT || delete nT.attributes;
+             if (null === zB || void 0 === zB || delete zB.isSampled, 0 === Object.keys(null !== zB && void 0 !== zB ? zB : {}).length) null === (NB = BB.meta.session) || void 0 === NB || delete NB.attributes;
```

#### 24. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1016)

```diff
-       return mT || WT ? [(null === TT || void 0 === TT ? void 0 : TT.includes("@")) ? TT.split("@")[0] : TT, mT ? `${km}:${UT}` : `${jm}:${UT}`] : [TT, UT]
+       return zB || QB ? [(null === BB || void 0 === BB ? void 0 : BB.includes("@")) ? BB.split("@")[0] : BB, zB ? `${Uz}:${jB}` : `${az}:${jB}`] : [BB, jB]
```

#### 25. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1135-L1136` → after: `L1135-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1135-L1136) · [Before (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1135-L1136)

```diff
-         mT = null !== zT && void 0 !== zT ? zT : WT ? "DOMError" : "DOMException", UT = MT ? `${mT}: ${MT}` : mT
-       } else FT(TT) ? (mT = TT.name, UT = TT.message, MT = Bm(TT)) : (dT(TT) || (zT = QT(TT))) && (mT = zT ? TT.constructor.name : void 0, UT = `Non-Error exception captured with keys: ${Object.keys(TT)}`);
+         zB = null !== nB && void 0 !== nB ? nB : QB ? "DOMError" : "DOMException", jB = dB ? `${zB}: ${dB}` : zB
+       } else ZB(BB) ? (zB = BB.name, jB = BB.message, dB = Jz(BB)) : (fB(BB) || (nB = hB(BB))) && (zB = nB ? BB.constructor.name : void 0, jB = `Non-Error exception captured with keys: ${Object.keys(BB)}`);
```

#### 26. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1145` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1145) · [Before (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1145)

```diff
-       return MT || !kT ? ([gT, nT, HT] = wm(null !== MT && void 0 !== MT ? MT : UT), 0 === HT.length && (HT = [jT])) : kT && ([gT, nT] = function(TT) {
+       return dB || !UB ? ([IB, NB, uB] = fz(null !== dB && void 0 !== dB ? dB : jB), 0 === uB.length && (uB = [aB])) : UB && ([IB, NB] = function(BB) {
```

#### 27. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1148-L1149` → after: `L1148-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1148-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1148-L1149) · [Before (L1148-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1148-L1149)

```diff
-           zT = null !== (UT = null === WT || void 0 === WT ? void 0 : WT[1]) && void 0 !== UT ? UT : xm;
-         return [null !== (mT = null === WT || void 0 === WT ? void 0 : WT[2]) && void 0 !== mT ? mT : TT, zT]
+           nB = null !== (jB = null === QB || void 0 === QB ? void 0 : QB[1]) && void 0 !== jB ? jB : iz;
+         return [null !== (zB = null === QB || void 0 === QB ? void 0 : QB[2]) && void 0 !== zB ? zB : BB, nB]
```

#### 28. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1177-L1178` → after: `L1177-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1177-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1177-L1178) · [Before (L1177-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1177-L1178)

```diff
-         this.errorSerializer = zT ? null !== (UT = null === WT || void 0 === WT ? void 0 : WT.errorSerializer) && void 0 !== UT ? UT : dm : ym;
-         const MT = null !== (mT = null === WT || void 0 === WT ? void 0 : WT.disabledLevels) && void 0 !== mT ? mT : TT.defaultDisabledLevels,
+         this.errorSerializer = nB ? null !== (jB = null === QB || void 0 === QB ? void 0 : QB.errorSerializer) && void 0 !== jB ? jB : qz : Dz;
+         const dB = null !== (zB = null === QB || void 0 === QB ? void 0 : QB.disabledLevels) && void 0 !== zB ? zB : BB.defaultDisabledLevels,
```

#### 29. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1181)

```diff
-               const UT = null !== TT && void 0 !== TT ? TT : RU;
+               const jB = null !== BB && void 0 !== BB ? BB : Oj;
```

#### 30. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1211-L1212` → after: `L1211-L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1211-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1211-L1212) · [Before (L1211-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1211-L1212)

```diff
-                     value: null !== UT && void 0 !== UT ? UT : "",
-                     type: null !== WT && void 0 !== WT ? WT : "",
+                     value: null !== jB && void 0 !== jB ? jB : "",
+                     type: null !== QB && void 0 !== QB ? QB : "",
```

#### 31. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1281)

```diff
-               XT(MT) ? (WT = `Non-Error promise rejection captured with value: ${String(MT)}`, zT = "UnhandledRejection") : [WT, zT, nT] = wm(MT), WT && TT.pushError(new Error(WT), {
+               YB(dB) ? (QB = `Non-Error promise rejection captured with value: ${String(dB)}`, nB = "UnhandledRejection") : [QB, nB, NB] = fz(dB), QB && BB.pushError(new Error(QB), {
```

#### 32. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1299` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1299) · [Before (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1299)

```diff
-             const TT = null !== (WT = null === (zT = this.notifiedView) || void 0 === zT ? void 0 : zT.name) && void 0 !== WT ? WT : sm;
+             const BB = null !== (QB = null === (nB = this.notifiedView) || void 0 === nB ? void 0 : nB.name) && void 0 !== QB ? QB : hz;
```

#### 33. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1302` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1302) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1302)

```diff
-               toView: null !== (MT = mT.name) && void 0 !== MT ? MT : sm
+               toView: null !== (dB = zB.name) && void 0 !== dB ? dB : hz
```

#### 34. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1358` → after: `L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1358) · [Before (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1358)

```diff
-             if (UT = UT ? WT + ">" + UT : WT, mT.id) break;
+             if (jB = jB ? QB + ">" + jB : QB, zB.id) break;
```

#### 35. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1426` → after: `L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1426) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1426)

```diff
-         return mT ? kT = mT : Nm() >= 0 ? kT = "back-forward-cache" : nT && (document.prerendering || om() > 0 ? kT = "prerender" : document.wasDiscarded ? kT = "restore" : nT.type && (kT = nT.type.replace(/_/g, "-"))), {
+         return zB ? UB = zB : xz() >= 0 ? UB = "back-forward-cache" : NB && (document.prerendering || bz() > 0 ? UB = "prerender" : document.wasDiscarded ? UB = "restore" : NB.type && (UB = NB.type.replace(/_/g, "-"))), {
```

#### 36. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1512)

```diff
-     const qW = () => fW ? BW : performance.interactionCount ?? 0;
+     const GQ = () => kQ ? sQ : performance.interactionCount ?? 0;
```

#### 37. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1828` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1828) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1828)

```diff
-                     const mT = TT.entries.reduce(((TT, UT) => TT.value > UT.value ? TT : UT));
+                     const zB = BB.entries.reduce(((BB, jB) => BB.value > jB.value ? BB : jB));
```

#### 38. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1954` → after: `L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L1954) · [Before (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L1954)

```diff
-                 } else TT.id && WT.set(TT, `#${TT.id}`)
+                 } else BB.id && QB.set(BB, `#${BB.id}`)
```

#### 39. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2043-L2044` → after: `L2043-L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2043-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2043-L2044) · [Before (L2043-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2043-L2044)

```diff
-                         WT = Math.max(mT, gT ? (gT.requestStart || gT.startTime) - HT : 0),
-                         zT = Math.min(TT.value, Math.max(WT, gT ? gT.responseEnd - HT : 0));
+                         QB = Math.max(zB, IB ? (IB.requestStart || IB.startTime) - uB : 0),
+                         nB = Math.min(BB.value, Math.max(QB, IB ? IB.responseEnd - uB : 0));
```

#### 40. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2153)

```diff
-           const mT = null !== (UT = TU("com.grafana.faro.lastNavigationId", oT)) && void 0 !== UT ? UT : sm;
+           const zB = null !== (jB = Bj("com.grafana.faro.lastNavigationId", vB)) && void 0 !== jB ? jB : hz;
```

#### 41. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2257` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2257) · [Before (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2257)

```diff
-         serviceWorkerTime: rW(bT > 0 ? HT - bT : 0),
+         serviceWorkerTime: WQ(tB > 0 ? uB - tB : 0),
```

#### 42. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2292` → after: `L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2292) · [Before (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2292)

```diff
-         documentParsingTime: rW(lT ? MT - lT : null),
+         documentParsingTime: WQ(pB ? dB - pB : null),
```

#### 43. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2296` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2296) · [Before (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2296)

```diff
-         ttfb: rW(Math.max(kT - (null !== UT && void 0 !== UT ? UT : 0), 0)),
+         ttfb: WQ(Math.max(UB - (null !== jB && void 0 !== jB ? jB : 0), 0)),
```

#### 44. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2310` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2310) · [Before (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2310)

```diff
-       return null == TT ? sm : "number" === typeof TT ? Math.round(TT > 0 ? TT : 0).toString() : TT.toString()
+       return null == BB ? hz : "number" === typeof BB ? Math.round(BB > 0 ? BB : 0).toString() : BB.toString()
```

#### 45. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2378` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2378) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2378)

```diff
-                   const nT = null !== (WT = TU("com.grafana.faro.lastNavigationId", oT)) && void 0 !== WT ? WT : sm,
+                   const NB = null !== (QB = Bj("com.grafana.faro.lastNavigationId", vB)) && void 0 !== QB ? QB : hz,
```

#### 46. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2438` → after: `L2438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2438) · [Before (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2438)

```diff
-       return `data-${(TT.startsWith("data-")?TT.slice(5):TT).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
+       return `data-${(BB.startsWith("data-")?BB.slice(5):BB).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
```

#### 47. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2449` → after: `L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2449) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2449)

```diff
-       return !Number.isFinite(WT) || WT <= 0 ? (mT(`initialActivityTimeout must be a finite number greater than zero; using ${UT} ms`), UT) : WT > 1e3 ? (mT(`initialActivityTimeout cannot exceed ${oW} ms; clamping to the maximum`), oW) : WT
+       return !Number.isFinite(QB) || QB <= 0 ? (zB(`initialActivityTimeout must be a finite number greater than zero; using ${jB} ms`), jB) : QB > 1e3 ? (zB(`initialActivityTimeout cannot exceed ${bQ} ms; clamping to the maximum`), bQ) : QB
```

#### 48. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2503` → after: `L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2503) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2503)

```diff
-           const zT = null !== (TT = DT(arguments[0])) && void 0 !== TT ? TT : "",
+           const nB = null !== (BB = bB(arguments[0])) && void 0 !== BB ? BB : "",
```

#### 49. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2505` → after: `L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2505) · [Before (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2505)

```diff
-             gT = (null !== (WT = arguments[1]) && void 0 !== WT ? WT : {}).method,
+             IB = (null !== (QB = arguments[1]) && void 0 !== QB ? QB : {}).method,
```

#### 50. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2636` → after: `L2636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2636) · [Before (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2636)

```diff
-           const MT = null !== (UT = null === (mT = zT.userActionsInstrumentation) || void 0 === mT ? void 0 : mT.dataAttributeName) && void 0 !== UT ? UT : hW,
+           const dB = null !== (jB = null === (zB = nB.userActionsInstrumentation) || void 0 === zB ? void 0 : zB.dataAttributeName) && void 0 !== jB ? jB : CQ,
```

#### 51. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2660` → after: `L2660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2660) · [Before (L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2660)

```diff
-               return UT.endsWith("-name") ? `${UT.slice(0,-5)}-timeout` : `${UT}-timeout`
+               return jB.endsWith("-name") ? `${jB.slice(0,-5)}-timeout` : `${jB}-timeout`
```

#### 52. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2709` → after: `L2709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2709) · [Before (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2709)

```diff
-           super(), this.name = UT, this.attributes = MT, this.id = vU(), this.trigger = WT, this.parentId = null !== mT && void 0 !== mT ? mT : this.id, this.trackUserActionsExcludeItem = gT, this.importance = nT, this._pushEvent = HT, this._itemBuffer = new iz, this._transports  … [truncated]
+           super(), this.name = jB, this.attributes = dB, this.id = kj(), this.trigger = QB, this.parentId = null !== zB && void 0 !== zB ? zB : this.id, this.trackUserActionsExcludeItem = IB, this.importance = NB, this._pushEvent = uB, this._itemBuffer = new Ln, this._transports  … [truncated]
```

#### 53. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2823-L2826` → after: `L2823-L2826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2823-L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2823-L2826) · [Before (L2823-L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2823-L2826)

```diff
-           inactivityMs: null !== (mT = null === UT || void 0 === UT ? void 0 : UT.inactivityMs) && void 0 !== mT ? mT : 100,
-           drainTimeoutMs: null !== (WT = null === UT || void 0 === UT ? void 0 : UT.drainTimeoutMs) && void 0 !== WT ? WT : 1e4,
-           isOperationStart: null !== (zT = null === UT || void 0 === UT ? void 0 : UT.isOperationStart) && void 0 !== zT ? zT : () => {},
-           isOperationEnd: null !== (MT = null === UT || void 0 === UT ? void 0 : UT.isOperationEnd) && void 0 !== MT ? MT : () => {}
+           inactivityMs: null !== (zB = null === jB || void 0 === jB ? void 0 : jB.inactivityMs) && void 0 !== zB ? zB : 100,
+           drainTimeoutMs: null !== (QB = null === jB || void 0 === jB ? void 0 : jB.drainTimeoutMs) && void 0 !== QB ? QB : 1e4,
+           isOperationStart: null !== (nB = null === jB || void 0 === jB ? void 0 : jB.isOperationStart) && void 0 !== nB ? nB : () => {},
+           isOperationEnd: null !== (dB = null === jB || void 0 === jB ? void 0 : jB.isOperationEnd) && void 0 !== dB ? dB : () => {}
```

#### 54. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2891` → after: `L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2891) · [Before (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2891)

```diff
-               const mT = null !== UT && void 0 !== UT ? UT : location.href;
+               const zB = null !== jB && void 0 !== jB ? jB : location.href;
```

#### 55. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2972` → after: `L2972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2972) · [Before (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2972)

```diff
-     var Kz = mT(6770);
+     var xn = zB(6641);
```

#### 56. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2996-L3000` → after: `L2996-L3000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2996-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L2996-L3000) · [Before (L2996-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L2996-L3000)

```diff
-             name: null !== WT && void 0 !== WT ? WT : sm,
-             version: null !== zT && void 0 !== zT ? zT : sm,
-             os: `${null!==MT&&void 0!==MT?MT:sm} ${null!==gT&&void 0!==gT?gT:sm}`,
-             userAgent: null !== mT && void 0 !== mT ? mT : sm,
-             language: null !== nT && void 0 !== nT ? nT : sm,
+             name: null !== QB && void 0 !== QB ? QB : hz,
+             version: null !== nB && void 0 !== nB ? nB : hz,
+             os: `${null!==dB&&void 0!==dB?dB:hz} ${null!==IB&&void 0!==IB?IB:hz}`,
+             userAgent: null !== zB && void 0 !== zB ? zB : hz,
+             language: null !== NB && void 0 !== NB ? NB : hz,
```

#### 57. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3002` → after: `L3002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3002) · [Before (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3002)

```diff
-             brands: null !== kT && void 0 !== kT ? kT : sm,
+             brands: null !== UB && void 0 !== UB ? UB : hz,
```

#### 58. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3023` → after: `L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3023) · [Before (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3023)

```diff
-         id: null !== (UT = null === (mT = ZT.config) || void 0 === mT || null === (mT = mT.sessionTracking) || void 0 === mT || null === (WT = mT.generateSessionId) || void 0 === WT ? void 0 : WT.call(mT)) && void 0 !== UT ? UT : vU(),
+         id: null !== (jB = null === (zB = mB.config) || void 0 === zB || null === (zB = zB.sessionTracking) || void 0 === zB || null === (QB = zB.generateSessionId) || void 0 === QB ? void 0 : QB.call(zB)) && void 0 !== jB ? jB : kj(),
```

#### 59. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3100` → after: `L3100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3100) · [Before (L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3100)

```diff
-         return this.unpatchedConsole[null !== (UT = this.options.level) && void 0 !== UT ? UT : im.DEBUG]("New event", mM([TT]))
+         return this.unpatchedConsole[null !== (jB = this.options.level) && void 0 !== jB ? jB : Lz.DEBUG]("New event", nd([BB]))
```

#### 60. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3169` → after: `L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3169) · [Before (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3169)

```diff
-                 const lT = Math.min(null !== (gT = jT.retryAfterMs) && void 0 !== gT ? gT : TT.options.retry.initialBackoffMs * Math.pow(TT.options.retry.backoffMultiplier, MT - 1), TT.options.retry.maxBackoffMs);
+                 const pB = Math.min(null !== (IB = aB.retryAfterMs) && void 0 !== IB ? IB : BB.options.retry.initialBackoffMs * Math.pow(BB.options.retry.backoffMultiplier, dB - 1), BB.options.retry.maxBackoffMs);
```

#### 61. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3319-L3321` → after: `L3319-L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3319-L3321) · [Before (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3319-L3321)

```diff
-         super(), this.options = TT, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = mm, this.pendingCustomSends = 0, this.getNow = null !== (UT = TT.getNow) && void 0 !== UT ? UT : Date.now, this.requestTimeoutMs = null !== (mT = TT.requestTimeoutMs) && void 0 … [truncated]
-           bufferSize: null !== (zT = TT.bufferSize) && void 0 !== zT ? zT : 30,
-           concurrency: null !== (MT = TT.concurrency) && void 0 !== MT ? MT : 5,
+         super(), this.options = BB, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = zz, this.pendingCustomSends = 0, this.getNow = null !== (jB = BB.getNow) && void 0 !== jB ? jB : Date.now, this.requestTimeoutMs = null !== (zB = BB.requestTimeoutMs) && void 0 … [truncated]
+           bufferSize: null !== (nB = BB.bufferSize) && void 0 !== nB ? nB : 30,
+           concurrency: null !== (dB = BB.concurrency) && void 0 !== dB ? dB : 5,
```

#### 62. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3323-L3326` → after: `L3323-L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3323-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3323-L3326) · [Before (L3323-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3323-L3326)

```diff
-             maxAttempts: null !== (gT = null === (nT = TT.retry) || void 0 === nT ? void 0 : nT.maxAttempts) && void 0 !== gT ? gT : 3,
-             initialBackoffMs: null !== (HT = null !== (kT = null === (jT = TT.retry) || void 0 === jT ? void 0 : jT.initialBackoffMs) && void 0 !== kT ? kT : TT.defaultRateLimitBackoffMs) && void 0 !== HT ? HT : 1e3,
-             maxBackoffMs: null !== (lT = null === (LT = TT.retry) || void 0 === LT ? void 0 : LT.maxBackoffMs) && void 0 !== lT ? lT : 3e4,
-             backoffMultiplier: null !== (pT = null === (BT = TT.retry) || void 0 === BT ? void 0 : BT.backoffMultiplier) && void 0 !== pT ? pT : 2
+             maxAttempts: null !== (IB = null === (NB = BB.retry) || void 0 === NB ? void 0 : NB.maxAttempts) && void 0 !== IB ? IB : 3,
+             initialBackoffMs: null !== (uB = null !== (UB = null === (aB = BB.retry) || void 0 === aB ? void 0 : aB.initialBackoffMs) && void 0 !== UB ? UB : BB.defaultRateLimitBackoffMs) && void 0 !== uB ? uB : 1e3,
+             maxBackoffMs: null !== (pB = null === (rB = BB.retry) || void 0 === rB ? void 0 : rB.maxBackoffMs) && void 0 !== pB ? pB : 3e4,
+             backoffMultiplier: null !== (sB = null === (JB = BB.retry) || void 0 === JB ? void 0 : JB.backoffMultiplier) && void 0 !== sB ? sB : 2
```

#### 63. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3329` → after: `L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3329) · [Before (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3329)

```diff
-           getRandom: null !== (ZT = TT.getRandom) && void 0 !== ZT ? ZT : Math.random,
+           getRandom: null !== (mB = BB.getRandom) && void 0 !== mB ? mB : Math.random,
```

#### 64. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3331` → after: `L3331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3331) · [Before (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3331)

```diff
-             this.logDebug(`Retrying failed request after ${TT}ms. Attempt ${UT}.`)
+             this.logDebug(`Retrying failed request after ${BB}ms. Attempt ${jB}.`)
```

#### 65. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3334-L3335` → after: `L3334-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3334-L3335) · [Before (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3334-L3335)

```diff
-           size: null !== (cT = TT.bufferSize) && void 0 !== cT ? cT : 30,
-           concurrency: null !== (vT = TT.concurrency) && void 0 !== vT ? vT : 5
+           size: null !== (yB = BB.bufferSize) && void 0 !== yB ? yB : 30,
+           concurrency: null !== (kB = BB.concurrency) && void 0 !== kB ? kB : 5
```

#### 66. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3410` → after: `L3410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3410) · [Before (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3410)

```diff
-         return [this.options.url].concat(null !== (TT = this.config.ignoreUrls) && void 0 !== TT ? TT : [])
+         return [this.options.url].concat(null !== (BB = this.config.ignoreUrls) && void 0 !== BB ? BB : [])
```

#### 67. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3422` → after: `L3422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3422) · [Before (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3422)

```diff
-             nT = null !== (WT = UT.options.requestOptions) && void 0 !== WT ? WT : {},
+             NB = null !== (QB = jB.options.requestOptions) && void 0 !== QB ? QB : {},
```

#### 68. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3566` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3566) · [Before (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3566)

```diff
-           return Number.isFinite(TT) ? TT : Number.POSITIVE_INFINITY
+           return Number.isFinite(BB) ? BB : Number.POSITIVE_INFINITY
```

#### 69. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3623` → after: `L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3623) · [Before (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3623)

```diff
-               day: Number(null !== kT && void 0 !== kT ? kT : jT),
+               day: Number(null !== UB && void 0 !== UB ? UB : aB),
```

#### 70. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3722` → after: `L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3722) · [Before (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3722)

```diff
-         TT.error(`${mT.prefix}\n`, ...WT)
+         BB.error(`${zB.prefix}\n`, ...QB)
```

#### 71. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3725` → after: `L3725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3725) · [Before (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3725)

```diff
-         TT.warn(`${mT.prefix}\n`, ...WT)
+         BB.warn(`${zB.prefix}\n`, ...QB)
```

#### 72. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3728` → after: `L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3728) · [Before (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3728)

```diff
-         TT.info(`${mT.prefix}\n`, ...WT)
+         BB.info(`${zB.prefix}\n`, ...QB)
```

#### 73. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3731` → after: `L3731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3731) · [Before (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3731)

```diff
-         TT.debug(`${mT.prefix}\n`, ...WT)
+         BB.debug(`${zB.prefix}\n`, ...QB)
```

#### 74. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3766` → after: `L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3766) · [Before (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3766)

```diff
-         dataAttributeName: AW(null !== (mT = null === (zT = TT.userActionsInstrumentation) || void 0 === zT ? void 0 : zT.dataAttributeName) && void 0 !== mT ? mT : hW),
+         dataAttributeName: vQ(null !== (zB = null === (nB = BB.userActionsInstrumentation) || void 0 === nB ? void 0 : nB.dataAttributeName) && void 0 !== zB ? zB : CQ),
```

#### 75. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3785` → after: `L3785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3785) · [Before (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3785)

```diff
-         ignoreUrls: [...null !== (nT = TT.ignoreUrls) && void 0 !== nT ? nT : [], ...OT ? [OT] : [], /\/collect(?:\/[\w]*)?$/],
+         ignoreUrls: [...null !== (NB = BB.ignoreUrls) && void 0 !== NB ? NB : [], ...SB ? [SB] : [], /\/collect(?:\/[\w]*)?$/],
```

#### 76. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3811` → after: `L3811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3811) · [Before (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3811)

```diff
-       } = null !== (UT = null === TT || void 0 === TT ? void 0 : TT.pageTracking) && void 0 !== UT ? UT : {}, gT = [Ez, hz, JM({
+       } = null !== (jB = null === BB || void 0 === BB ? void 0 : BB.pageTracking) && void 0 !== jB ? jB : {}, IB = [bn, vn, Hd({
```

#### 77. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3814` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3814) · [Before (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3814)

```diff
-       }), ...null !== (mT = TT.metas) && void 0 !== mT ? mT : [], oz];
+       }), ...null !== (zB = BB.metas) && void 0 !== zB ? zB : [], On];
```

#### 78. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3826` → after: `L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3826) · [Before (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3826)

```diff
-         session: jU(jU({}, null !== (WT = null === mT || void 0 === mT ? void 0 : mT.session) && void 0 !== WT ? WT : {}), {}, {
+         session: aj(aj({}, null !== (QB = null === zB || void 0 === zB ? void 0 : zB.session) && void 0 !== QB ? QB : {}), {}, {
```

#### 79. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3844` → after: `L3844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3844) · [Before (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3844)

```diff
-       const UT = `__faroBundleId_${TT}`,
+       const jB = `__faroBundleId_${BB}`,
```

#### 80. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3848` → after: `L3848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3848) · [Before (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3848)

```diff
-       return "string" === typeof WT && "" !== WT ? WT : void 0
+       return "string" === typeof QB && "" !== QB ? QB : void 0
```

#### 81. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3855)

```diff
-           return null === jT || void 0 === jT ? void 0 : jT[`__faroGitHash_${TT}`]
+           return null === aB || void 0 === aB ? void 0 : aB[`__faroGitHash_${BB}`]
```

#### 82. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3869` → after: `L3869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3869) · [Before (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3869)

```diff
-       gT && TT.api.setSession(gT), TT.config.app && (MT.app = AU(AU({}, TT.config.app), MT.app)), TT.config.user && (MT.user = TT.config.user), TT.config.view && (MT.view = TT.config.view), TT.metas.add(MT, ...null !== (mT = TT.config.metas) && void 0 !== mT ? mT : [])
+       IB && BB.api.setSession(IB), BB.config.app && (dB.app = Rj(Rj({}, BB.config.app), dB.app)), BB.config.user && (dB.user = BB.config.user), BB.config.view && (dB.view = BB.config.view), BB.metas.add(dB, ...null !== (zB = BB.config.metas) && void 0 !== zB ? zB : [])
```

#### 83. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3874` → after: `L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3874) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3874)

```diff
-         this.signalBuffer = [], this.itemLimit = null !== (mT = null === UT || void 0 === UT ? void 0 : UT.itemLimit) && void 0 !== mT ? mT : 50, this.sendTimeout = null !== (WT = null === UT || void 0 === UT ? void 0 : UT.sendTimeout) && void 0 !== WT ? WT : 250, this.paused = ( … [truncated]
+         this.signalBuffer = [], this.itemLimit = null !== (zB = null === jB || void 0 === jB ? void 0 : jB.itemLimit) && void 0 !== zB ? zB : 50, this.sendTimeout = null !== (QB = null === jB || void 0 === jB ? void 0 : jB.sendTimeout) && void 0 !== QB ? QB : 250, this.paused = ( … [truncated]
```

#### 84. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3928` → after: `L3928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3928) · [Before (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3928)

```diff
-           for (const WT of MT) UT.debug(`Transporting item using ${WT.name}\n`, mT), WT.isBatched() && WT.send(mT)
+           for (const QB of dB) jB.debug(`Transporting item using ${QB.name}\n`, zB), QB.isBatched() && QB.send(zB)
```

#### 85. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3939` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3939) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3939)

```diff
-             UT.debug(`Adding "${zT.name}" transport`), MT.some((TT => TT === zT)) ? UT.warn(`Transport ${zT.name} is already added`) : (zT.unpatchedConsole = TT, zT.internalLogger = UT, zT.config = mT, zT.metas = WT, MT.push(zT))
+             jB.debug(`Adding "${nB.name}" transport`), dB.some((BB => BB === nB)) ? jB.warn(`Transport ${nB.name} is already added`) : (nB.unpatchedConsole = BB, nB.internalLogger = jB, nB.config = zB, nB.metas = QB, dB.push(nB))
```

#### 86. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3971` → after: `L3971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3971) · [Before (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3971)

```diff
-                   UT.debug(`Transporting item using ${nT.name}\n`, zT), nT.isBatched() ? (null === (gT = mT.batching) || void 0 === gT ? void 0 : gT.enabled) || nT.send([zT]) : nT.send(zT)
+                   jB.debug(`Transporting item using ${NB.name}\n`, nB), NB.isBatched() ? (null === (IB = zB.batching) || void 0 === IB ? void 0 : IB.enabled) || NB.send([nB]) : NB.send(nB)
```

#### 87. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3984-L3985` → after: `L3984-L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L3984-L3985) · [Before (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L3984-L3985)

```diff
-             UT.debug(`Removing "${TT.name}" transport`);
-             const mT = MT.indexOf(TT); - 1 !== mT ? MT.splice(mT, 1) : UT.warn(`Transport "${TT.name}" is not added`)
+             jB.debug(`Removing "${BB.name}" transport`);
+             const zB = dB.indexOf(BB); - 1 !== zB ? dB.splice(zB, 1) : jB.warn(`Transport "${BB.name}" is not added`)
```

#### 88. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4010` → after: `L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4010) · [Before (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4010)

```diff
-       return KM = null !== (UT = TT.unpatchedConsole) && void 0 !== UT ? UT : KM, KM
+       return Cd = null !== (jB = BB.unpatchedConsole) && void 0 !== jB ? jB : Cd, Cd
```

#### 89. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4030` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4030) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4030)

```diff
-       GM = null !== (nT = mT.parseStacktrace) && void 0 !== nT ? nT : GM;
+       bd = null !== (NB = zB.parseStacktrace) && void 0 !== NB ? NB : bd;
```

#### 90. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4032` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4032) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4032)

```diff
-           UT.debug("Changing stacktrace parser"), GM = null !== TT && void 0 !== TT ? TT : GM
+           jB.debug("Changing stacktrace parser"), bd = null !== BB && void 0 !== BB ? BB : bd
```

#### 91. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4061` → after: `L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4061) · [Before (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4061)

```diff
-             }(jT, null !== cT && void 0 !== cT ? cT : TT)) try {
+             }(aB, null !== yB && void 0 !== yB ? yB : BB)) try {
```

#### 92. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4070` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4070) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4070)

```diff
-               }(null !== cT && void 0 !== cT ? cT : TT)), null !== pT && void 0 !== pT ? pT : {})),
+               }(null !== yB && void 0 !== yB ? yB : BB)), null !== sB && void 0 !== sB ? sB : {})),
```

#### 93. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4088` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4088) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4088)

```diff
-             kT = null !== (qT = kT) && void 0 !== qT ? qT : TT.stack ? null === GM || void 0 === GM ? void 0 : GM(TT).frames : void 0, (null === kT || void 0 === kT ? void 0 : kT.length) && (OT.stacktrace = {
+             UB = null !== (LB = UB) && void 0 !== LB ? LB : BB.stack ? null === bd || void 0 === bd ? void 0 : bd(BB).frames : void 0, (null === UB || void 0 === UB ? void 0 : UB.length) && (SB.stacktrace = {
```

#### 94. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4232` → after: `L4232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4232) · [Before (L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4232)

```diff
-                     domain: null !== kT && void 0 !== kT ? kT : mT.eventDomain,
+                     domain: null !== UB && void 0 !== UB ? UB : zB.eventDomain,
```

#### 95. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4314` → after: `L4314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4314) · [Before (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4314)

```diff
-             const mT = OT(TT) ? AU(AU({}, null !== (UT = null === zT || void 0 === zT ? void 0 : zT.page) && void 0 !== UT ? UT : lT()), {}, {
+             const zB = SB(BB) ? Rj(Rj({}, null !== (jB = null === nB || void 0 === nB ? void 0 : nB.page) && void 0 !== jB ? jB : pB()), {}, {
```

#### 96. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4335` → after: `L4335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4335) · [Before (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4335)

```diff
-         const kT = null !== (nT = mT.logArgsSerializer) && void 0 !== nT ? nT : ym;
+         const UB = null !== (NB = zB.logArgsSerializer) && void 0 !== NB ? NB : Dz;
```

#### 97. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4350` → after: `L4350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4350) · [Before (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4350)

```diff
-                   level: null !== jT && void 0 !== jT ? jT : "log",
+                   level: null !== aB && void 0 !== aB ? aB : "log",
```

#### 98. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4469` → after: `L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4469) · [Before (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4469)

```diff
-                 zT = null !== (UT = mT) && void 0 !== UT ? UT : MT;
+                 nB = null !== (jB = zB) && void 0 !== jB ? jB : dB;
```

#### 99. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4503` → after: `L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4503) · [Before (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4503)

```diff
-                 UT.debug(`Adding "${nT.name}" instrumentation`), gT.some((TT => TT.name === nT.name)) ? UT.warn(`Instrumentation ${nT.name} is already added`) : (nT.unpatchedConsole = TT, nT.internalLogger = UT, nT.config = mT, nT.metas = WT, nT.transports = zT, nT.api = MT, gT.p … [truncated]
+                 jB.debug(`Adding "${NB.name}" instrumentation`), IB.some((BB => BB.name === NB.name)) ? jB.warn(`Instrumentation ${NB.name} is already added`) : (NB.unpatchedConsole = BB, NB.internalLogger = jB, NB.config = zB, NB.metas = QB, NB.transports = nB, NB.api = dB, IB.p … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4514-L4516` → after: `L4514-L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4514-L4516) · [Before (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4514-L4516)

```diff
-                 UT.debug(`Removing "${TT.name}" instrumentation`);
-                 const zT = gT.reduce(((UT, mT, WT) => null === UT && mT.name === TT.name ? WT : null), null);
-                 null !== zT ? (null === (mT = (WT = gT[zT]).destroy) || void 0 === mT || mT.call(WT), gT.splice(zT, 1)) : UT.warn(`Instrumentation "${TT.name}" is not added`)
+                 jB.debug(`Removing "${BB.name}" instrumentation`);
+                 const nB = IB.reduce(((jB, zB, QB) => null === jB && zB.name === BB.name ? QB : null), null);
+                 null !== nB ? (null === (zB = (QB = IB[nB]).destroy) || void 0 === zB || zB.call(QB), IB.splice(nB, 1)) : jB.warn(`Instrumentation "${BB.name}" is not added`)
```

#### 101. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4536` → after: `L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4536) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4536)

```diff
-   6770: function(TT, UT, mT) {
+   6641: function(BB, jB, zB) {
```

#### 102. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4593` → after: `L4593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4593) · [Before (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4593)

```diff
-           if (typeof TT === kT) return TT = TT.replace(/^\s\s*/, ""), typeof UT === nT ? TT : TT.substring(0, 500)
+           if (typeof BB === UB) return BB = BB.replace(/^\s\s*/, ""), typeof jB === NB ? BB : BB.substring(0, 500)
```

#### 103. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4601` → after: `L4601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4601) · [Before (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4601)

```diff
-                 for (zT = 0; zT < pT.length; zT++) jT = kT[++WT], typeof(nT = pT[zT]) === HT && nT.length > 0 ? 2 === nT.length ? typeof nT[1] == gT ? this[nT[0]] = nT[1].call(this, jT) : this[nT[0]] = nT[1] : 3 === nT.length ? typeof nT[1] !== gT || nT[1].exec && nT[1].test ? th … [truncated]
+                 for (nB = 0; nB < sB.length; nB++) aB = UB[++QB], typeof(NB = sB[nB]) === uB && NB.length > 0 ? 2 === NB.length ? typeof NB[1] == IB ? this[NB[0]] = NB[1].call(this, aB) : this[NB[0]] = NB[1] : 3 === NB.length ? typeof NB[1] !== IB || NB[1].exec && NB[1].test ? th … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4609-L4610` → after: `L4609-L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L4609-L4610) · [Before (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L4609-L4610)

```diff
-                 if (AT(UT[mT][WT], TT)) return "?" === mT ? MT : mT
-             } else if (AT(UT[mT], TT)) return "?" === mT ? MT : mT;
+                 if (RB(jB[zB][QB], BB)) return "?" === zB ? dB : zB
+             } else if (RB(jB[zB], BB)) return "?" === zB ? dB : zB;
```

#### 105. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L5339` → after: `L5339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R5339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L5339) · [Before (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L5339)

```diff
-           }, this.eB = function() {
+           }, this.wJ = function() {
```

#### 106. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L5349` → after: `L5349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/errorLogging.js#L5349) · [Before (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/errorLogging.js#L5349)

```diff
-               engine: this.eB(),
+               engine: this.wJ(),
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/fa-renderer.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/fa-renderer.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741)

#### 1. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L1)

```diff
- /*! For license information please see yma3ej.fa-renderer.bf95237e.chunk.js.LICENSE.txt */
+ /*! For license information please see 7zvlu.fa-renderer.8ca83bb9.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L5)

```diff
-   6745: (TT, UT, mT) => {
+   6630: (BB, jB, zB) => {
```

#### 3. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L9-L10)

```diff
-     var WT = mT(6737),
-       zT = mT(5066),
+     var QB = zB(6625),
+       nB = zB(5045),
```

#### 4. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L12)

```diff
-       gT = mT(63);
+       IB = zB(62);
```

#### 5. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L32)

```diff
-         return "symbol" == typeof UT ? UT : UT + ""
+         return "symbol" == typeof jB ? jB : jB + ""
```

#### 6. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L122)

```diff
-       var cT = mT(6753);
+       var yB = zB(6637);
```

#### 7. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L193)

```diff
-         return xT[TT] ? TT : null
+         return qB[BB] ? BB : null
```

#### 8. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L200)

```diff
-       return UT = TT, (UT -= 0) === UT ? TT : (TT = TT.replace(/[\-_\s]+(.)?/g, (function(TT, UT) {
+       return jB = BB, (jB -= 0) === jB ? BB : (BB = BB.replace(/[\-_\s]+(.)?/g, (function(BB, jB) {
```

#### 9. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L212)

```diff
-       return TT && "object" === pT(TT) && TT.prefix && TT.iconName && TT.icon ? TT : WT.parse.icon ? WT.parse.icon(TT) : null === TT ? null : TT && "object" === pT(TT) && TT.prefix && TT.iconName ? TT : Array.isArray(TT) && 2 === TT.length ? {
+       return BB && "object" === sB(BB) && BB.prefix && BB.iconName && BB.icon ? BB : QB.parse.icon ? QB.parse.icon(BB) : null === BB ? null : BB && "object" === sB(BB) && BB.prefix && BB.iconName ? BB : Array.isArray(BB) && 2 === BB.length ? {
```

#### 10. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L337)

```diff
-                 return zT.startsWith("webkit") ? TT[(mT = zT, mT.charAt(0).toUpperCase() + mT.slice(1))] = MT : TT[zT] = MT, TT
+                 return nB.startsWith("webkit") ? BB[(zB = nB, zB.charAt(0).toUpperCase() + zB.slice(1))] = dB : BB[nB] = dB, BB
```

#### 11. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L341)

```diff
-               0 === UT.indexOf("aria-") || 0 === UT.indexOf("data-") ? TT.attrs[UT.toLowerCase()] = WT : TT.attrs[fT(UT)] = WT
+               0 === jB.indexOf("aria-") || 0 === jB.indexOf("data-") ? BB.attrs[jB.toLowerCase()] = QB : BB.attrs[GB(jB)] = QB
```

#### 12. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L369-L370)

```diff
-   5068: (TT, UT, mT) => {
-     var WT = mT(5072);
+   5053: (BB, jB, zB) => {
+     var QB = zB(5058);
```

#### 13. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L413-L414` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L413-L414) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L413-L414)

```diff
-   5066: (TT, UT, mT) => {
-     TT.exports = mT(5068)()
+   5045: (BB, jB, zB) => {
+     BB.exports = zB(5053)()
```

#### 14. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L416)

```diff
-   5072: TT => {
+   5058: BB => {
```

#### 15. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L419)

```diff
-   6737: (TT, UT, mT) => {
+   6625: (BB, jB, zB) => {
```

#### 16. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L565)

```diff
-       return "symbol" == typeof UT ? UT : UT + ""
+       return "symbol" == typeof jB ? jB : jB + ""
```

#### 17. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L1586)

```diff
-         mT = void 0 === UT ? yT : UT,
+         zB = void 0 === jB ? FB : jB,
```

#### 18. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L1590)

```diff
-         MT = TT in zm.styles ? TT : null;
+         dB = BB in nz.styles ? BB : null;
```

#### 19. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L1631)

```diff
-             WT ? mT = WT : TT && UT.push(TT)
+             QB ? zB = QB : BB && jB.push(BB)
```

#### 20. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L1834)

```diff
-           UT = void 0 === TT ? YT : TT;
+           jB = void 0 === BB ? EB : BB;
```

#### 21. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1871` → after: `L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L1871) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L1871)

```diff
-         pT = WT.found ? WT : mT,
+         sB = QB.found ? QB : zB,
```

#### 22. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2056)

```diff
-       nW = rU.measurePerformance && xT && xT.mark && xT.measure ? xT : {
+       IQ = ej.measurePerformance && qB && qB.mark && qB.measure ? qB : {
```

#### 23. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2086)

```diff
-         mT = void 0 === UT ? "svg" === TT.tag ? pW : BW : UT;
+         zB = void 0 === jB ? "svg" === BB.tag ? rQ : sQ : jB;
```

#### 24. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2137)

```diff
-       var mT = "function" === typeof UT ? UT : lW;
+       var zB = "function" === typeof jB ? jB : aQ;
```

#### 25. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2162)

```diff
-           mT = void 0 === UT ? lW : UT,
+           zB = void 0 === jB ? aQ : jB,
```

#### 26. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2164)

```diff
-           zT = void 0 === WT ? lW : WT,
+           nB = void 0 === QB ? aQ : QB,
```

#### 27. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2166` → after: `L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2166) · [Before (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2166)

```diff
-           gT = void 0 === MT ? lW : MT,
+           IB = void 0 === dB ? aQ : dB,
```

#### 28. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2168` → after: `L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2168) · [Before (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2168)

```diff
-           HT = void 0 === nT ? YT : nT;
+           uB = void 0 === NB ? EB : NB;
```

#### 29. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2307)

```diff
-           WT = void 0 === mT ? GU : mT,
+           QB = void 0 === zB ? xj : zB,
```

#### 30. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2359` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2359) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2359)

```diff
-                 WT = (UT || {}).icon ? UT : Em(UT || {}),
+                 QB = (jB || {}).icon ? jB : Kz(jB || {}),
```

#### 31. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2361` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2361) · [Before (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2361)

```diff
-               return zT && (zT = (zT || {}).icon ? zT : Em(zT || {})), TT(WT, HT(HT({}, mT), {}, {
+               return nB && (nB = (nB || {}).icon ? nB : Kz(nB || {})), BB(QB, uB(uB({}, zB), {}, {
```

#### 32. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2378` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2378) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2378)

```diff
-               mT = void 0 === UT ? YT : UT,
+               zB = void 0 === jB ? EB : jB,
```

#### 33. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2518` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2518) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2518)

```diff
-                 WT = void 0 === mT ? GU : mT,
+                 QB = void 0 === zB ? xj : zB,
```

#### 34. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2821` → after: `L2821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2821) · [Before (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2821)

```diff
-           return TT.includes("(") ? TT : TT.split(",").map((function(TT) {
+           return BB.includes("(") ? BB : BB.split(",").map((function(BB) {
```

#### 35. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2914` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L2914) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L2914)

```diff
-               mT = void 0 === UT ? YT : UT;
+               zB = void 0 === jB ? EB : jB;
```

#### 36. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L3280` → after: `L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R3280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/fa-renderer.js#L3280) · [Before (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/fa-renderer.js#L3280)

```diff
-   6753: TT => {
+   6637: BB => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/frameDebug.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/frameDebug.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084)

#### 1. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L4)

```diff
-   34123: (TT, UT, mT) => {
+   34101: (BB, jB, zB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L13-L14)

```diff
-       d: () => zT,
-       h: () => WT
+       e: () => nB,
+       f: () => QB
```

#### 3. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L17)

```diff
-   34114: (TT, UT, mT) => {
+   34098: (BB, jB, zB) => {
```

#### 4. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L28-L33` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L28-L33) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L28-L33)

```diff
-     var WT = mT(4904),
-       zT = mT(4890),
-       MT = mT(34123),
-       gT = mT(2929),
-       nT = mT(1176),
-       HT = mT(3106);
+     var QB = zB(4893),
+       nB = zB(4879),
+       dB = zB(34101),
+       IB = zB(2912),
+       NB = zB(1135),
+       uB = zB(3069);
```

#### 5. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L41)

```diff
-         }, null !== (0, HT.c)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, HT.c)("longtask", this.onLongTask) ? "longtask" : null
+         }, null !== (0, uB.d)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, uB.d)("longtask", this.onLongTask) ? "longtask" : null
```

#### 6. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L57-L61` → after: `L57-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L57-L61) · [Before (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L57-L61)

```diff
-         const gT = "loaf" === this.kind && mT > 0 ? ` (blocking ${zT.toFixed(0)}, script ${MT.toFixed(0)})` : "";
-         return `${mT} ${this.kind} ${WT.toFixed(0)} ms${gT}`
-       }
-     }
-     var jT = mT(34126);
+         const IB = "loaf" === this.kind && zB > 0 ? ` (blocking ${nB.toFixed(0)}, script ${dB.toFixed(0)})` : "";
+         return `${zB} ${this.kind} ${QB.toFixed(0)} ms${IB}`
+       }
+     }
+     var aB = zB(34105);
```

#### 7. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L64)

```diff
-       return UT < 0 || TT < UT ? TT : TT - UT
+       return jB < 0 || BB < jB ? BB : BB - jB
```

#### 8. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L86)

```diff
-         }, this.lastMs = 0, this.hidden = new jT.b, this.hiddenBefore = {
+         }, this.lastMs = 0, this.hidden = new aB.e, this.hiddenBefore = {
```

#### 9. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L111-L114` → after: `L111-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L111-L114) · [Before (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L111-L114)

```diff
-             const mT = [`chunks +${lT(TT.chunksReceived,UT.chunksReceived)} got`, `+${lT(TT.chunksCancelled,UT.chunksCancelled)} cancelled`];
-             TT.chunksStored >= 0 && mT.push(`${TT.chunksStored} stored`);
-             const WT = `jobs +${lT(TT.jobsSent,UT.jobsSent)} sent, +${lT(TT.jobsDone,UT.jobsDone)} done, ${TT.jobsInFlight} in flight`;
-             return `${mT.join(", ")}; ${WT}; workers ${TT.workersLive} live, ${TT.workersRetired} retired`
+             const zB = [`chunks +${pB(BB.chunksReceived,jB.chunksReceived)} got`, `+${pB(BB.chunksCancelled,jB.chunksCancelled)} cancelled`];
+             BB.chunksStored >= 0 && zB.push(`${BB.chunksStored} stored`);
+             const QB = `jobs +${pB(BB.jobsSent,jB.jobsSent)} sent, +${pB(BB.jobsDone,jB.jobsDone)} done, ${BB.jobsInFlight} in flight`;
+             return `${zB.join(", ")}; ${QB}; workers ${BB.workersLive} live, ${BB.workersRetired} retired`
```

#### 10. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L123)

```diff
-         if ((gT > 0 || nT > 0) && (mT.push((0, jT.e)({
+         if ((IB > 0 || NB > 0) && (zB.push((0, aB.h)({
```

#### 11. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L127)

```diff
-         const HT = `load ${Math.round((TT-this.lastMs)/1e3)}s: ${mT.join("; ")}`;
+         const uB = `load ${Math.round((BB-this.lastMs)/1e3)}s: ${zB.join("; ")}`;
```

#### 12. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L144)

```diff
-         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${TT} other, longest ${this.longest} in ${(0,MT.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
+         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${BB} other, longest ${this.longest} in ${(0,dB.e)(this.longestMs)} ms at ${this.longestAhead} ahead`
```

#### 13. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L182)

```diff
-           this.ahead = TT.headerWord(WT.F.Pacing) & WT.Y.AheadMask, this.frame(UT, mT, zT, MT, TT.headerWord(WT.F.RenderUs) / 1e3, TT.headerWord(WT.F.TicksRun), gT, TT.headerWord(WT.F.RenderPending))
+           this.ahead = BB.headerWord(QB.C.Pacing) & QB.S.AheadMask, this.frame(jB, zB, nB, dB, BB.headerWord(QB.C.RenderUs) / 1e3, BB.headerWord(QB.C.TicksRun), IB, BB.headerWord(QB.C.RenderPending))
```

#### 14. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L199-L200` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L199-L200) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L199-L200)

```diff
-             const WT = [`long frame ${(0,MT.d)(mT.intervalMs)} ms ending at ${(0,MT.d)(mT.endMs)} ms: main ${(0,MT.d)(mT.mainMs)} (render ${(0,MT.d)(mT.renderMs)}, ${mT.ticks} ticks ${(0,MT.d)(mT.tickMs)}), outside ${(0,MT.d)(mT.intervalMs-mT.mainMs)}`, `${mT.rafs} rafs`];
-             mT.pendingBefore >= 0 && WT.push(`pending ${mT.pendingBefore} -> ${mT.pendingAfter} (max ${mT.pendingMax})`), WT.push(this.longTasks.describe(mT.endMs - mT.intervalMs, mT.endMs)), (0, gT.m)("frame", WT.join("; "))
+             const QB = [`long frame ${(0,dB.e)(zB.intervalMs)} ms ending at ${(0,dB.e)(zB.endMs)} ms: main ${(0,dB.e)(zB.mainMs)} (render ${(0,dB.e)(zB.renderMs)}, ${zB.ticks} ticks ${(0,dB.e)(zB.tickMs)}), outside ${(0,dB.e)(zB.intervalMs-zB.mainMs)}`, `${zB.rafs} rafs`];
+             zB.pendingBefore >= 0 && QB.push(`pending ${zB.pendingBefore} -> ${zB.pendingAfter} (max ${zB.pendingMax})`), QB.push(this.longTasks.describe(zB.endMs - zB.intervalMs, zB.endMs)), (0, IB.n)("frame", QB.join("; "))
```

#### 15. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L210)

```diff
-             null !== UT && (0, gT.m)("frame", UT)
+             null !== jB && (0, IB.n)("frame", jB)
```

#### 16. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L217)

```diff
-         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, gT.m)("frame", `start: ${TT} client, ${UT}, dpr ${window.devicePixelRatio}, long tasks ${null!==(mT=this.longTasks.kind)&& … [truncated]
+         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, IB.n)("frame", `start: ${BB} client, ${jB}, dpr ${window.devicePixelRatio}, long tasks ${null!==(zB=this.longTasks.kind)&& … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L231)

```diff
-         this.flushTimer = setTimeout(this.flush, TT ? ZT : BT)
+         this.flushTimer = setTimeout(this.flush, BB ? mB : JB)
```

#### 18. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L236` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L236) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L236)

```diff
-         (0, zT.c)(mT) ? (this.lastDrawnStartMs >= 0 && (kT.pendingAfter = this.lastPending, this.closeInterval(TT - this.lastDrawnStartMs, TT)), this.lastDrawnStartMs = TT, bT(kT).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this … [truncated]
+         (0, nB.e)(zB) ? (this.lastDrawnStartMs >= 0 && (UB.pendingAfter = this.lastPending, this.closeInterval(BB - this.lastDrawnStartMs, BB)), this.lastDrawnStartMs = BB, tB(UB).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L257)

```diff
-         if (0 === UT.frames) return UT.undrawn.count > 0 && (0, gT.m)("frame", `${TT}s: no frames drawn, ${UT.undrawn.describe()}; pending max ${mT.pendingMax}`), UT.undrawn.count > 0;
+         if (0 === jB.frames) return jB.undrawn.count > 0 && (0, IB.n)("frame", `${BB}s: no frames drawn, ${jB.undrawn.describe()}; pending max ${zB.pendingMax}`), jB.undrawn.count > 0;
```

#### 20. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L259-L260)

```diff
-           zT = [`${UT.frames} frames, median ${(0,MT.d)((0,MT.h)(WT,.5))} p95 ${(0,MT.d)((0,MT.h)(WT,.95))} max ${(0,MT.d)(UT.maxMs)} ms, ${UT.slow} over 50, ${UT.shown+UT.dropped} over ${vT}`, `${mT.rafs} rafs, ${UT.undrawn.describe()}`, `main ${(0,MT.d)(mT.mainMs)} ms (render $ … [truncated]
-         return mT.pendingMax >= 0 && zT.push(`pending max ${mT.pendingMax}`), this.ahead >= 0 && zT.push(`${this.ahead} frames ahead`), zT.push(`outliers ${UT.shown} logged, ${UT.dropped} dropped`), (0, gT.m)("frame", `${TT}s: ${zT.join("; ")}`), !0
+           nB = [`${jB.frames} frames, median ${(0,dB.e)((0,dB.f)(QB,.5))} p95 ${(0,dB.e)((0,dB.f)(QB,.95))} max ${(0,dB.e)(jB.maxMs)} ms, ${jB.slow} over 50, ${jB.shown+jB.dropped} over ${kB}`, `${zB.rafs} rafs, ${jB.undrawn.describe()}`, `main ${(0,dB.e)(zB.mainMs)} ms (render $ … [truncated]
+         return zB.pendingMax >= 0 && nB.push(`pending max ${zB.pendingMax}`), this.ahead >= 0 && nB.push(`${this.ahead} frames ahead`), nB.push(`outliers ${jB.shown} logged, ${jB.dropped} dropped`), (0, IB.n)("frame", `${BB}s: ${nB.join("; ")}`), !0
```

#### 21. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L269)

```diff
-   34126: (TT, UT, mT) => {
+   34105: (BB, jB, zB) => {
```

#### 22. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L271)

```diff
-       return `hidden ${TT.changes} changes, ${Math.round(TT.hiddenMs)} ms`
+       return `hidden ${BB.changes} changes, ${Math.round(BB.hiddenMs)} ms`
```

#### 23. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L274-L275` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L274-L275) · [Before (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L274-L275)

```diff
-       b: () => zT,
-       e: () => WT
+       e: () => nB,
+       h: () => QB
```

#### 24. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/frameDebug.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/frameDebug.js#L282)

```diff
-         this.changes++, document.hidden ? this.hiddenSinceMs = TT : this.hiddenSinceMs >= 0 && (this.hiddenMs += TT - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+         this.changes++, document.hidden ? this.hiddenSinceMs = BB : this.hiddenSinceMs >= 0 && (this.hiddenMs += BB - this.hiddenSinceMs, this.hiddenSinceMs = -1)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-brands.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/icons-brands.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621)

#### 1. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L4)

```diff
-   8128: (TT, UT) => {
+   7980: (BB, jB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L9)

```diff
-     UT.e = {
+     jB.d = {
```

#### 3. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L13)

```diff
-     }, UT.g = UT.e
+     }, jB.f = jB.d
```

#### 4. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L15)

```diff
-   8136: (TT, UT) => {
+   7983: (BB, jB) => {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L20)

```diff
-     UT.c = {
+     jB.d = {
```

#### 6. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L24)

```diff
-     }, UT.f = UT.c
+     }, jB.f = jB.d
```

#### 7. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L26)

```diff
-   8143: (TT, UT) => {
+   7988: (BB, jB) => {
```

#### 8. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L37)

```diff
-   8149: (TT, UT) => {
+   7996: (BB, jB) => {
```

#### 9. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L46)

```diff
-     }, UT.g = UT.c
+     }, jB.d = jB.c
```

#### 10. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L48)

```diff
-   8154: (TT, UT) => {
+   8004: (BB, jB) => {
```

#### 11. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L81` → after: `L59-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L59-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L59-L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L81)

```diff
-   8177: (TT, UT) => {
+   8007: (BB, jB) => {
+     var zB = "reddit-alien",
+       QB = [],
+       nB = "f281",
+       dB = "M373 138.6c-25.2 0-46.3-17.5-51.9-41-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3 12.6-9.7 28.4-15.5 45.5-15.5 41.3 0 74.7 33.4 74.7 74.7 0 29.8-17.4 55.5-42.7 67.5-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4c-25.4-11.9-43-37.7-43-67.7 0-41.3  … [truncated]
+     jB.e = {
+       prefix: "fab",
+       iconName: zB,
+       icon: [512, 512, QB, nB, dB]
+     }, jB.g = jB.e
+   },
+   8011: (BB, jB) => {
+     var zB = "tiktok",
+       QB = [],
+       nB = "e07b",
+       dB = "M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9  … [truncated]
+ ... (7 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L90)

```diff
-     }, UT.c = UT.b
+     }, jB.e = jB.b
```

#### 13. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L92)

```diff
-   8181: (TT, UT) => {
+   8022: (BB, jB) => {
```

#### 14. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L101)

```diff
-     }, UT.c = UT.b
+     }, jB.d = jB.b
```

#### 15. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L103)

```diff
-   8183: (TT, UT) => {
+   8027: (BB, jB) => {
```

#### 16. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L108)

```diff
-     UT.d = {
+     jB.e = {
```

#### 17. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L112)

```diff
-     }, UT.g = UT.d
+     }, jB.h = jB.e
```

#### 18. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L114)

```diff
-   8188: (TT, UT) => {
+   8036: (BB, jB) => {
```

#### 19. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L119)

```diff
-     UT.e = {
+     jB.b = {
```

#### 20. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L123)

```diff
-     }, UT.i = UT.e
+     }, jB.c = jB.b
```

#### 21. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L125)

```diff
-   8121: (TT, UT, mT) => {
+   7972: (BB, jB, zB) => {
```

#### 22. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L129-L139` → after: `L129-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L129-L139) · [Before (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L129-L139)

```diff
-     var WT = mT(8128),
-       zT = mT(8136),
-       MT = mT(8143),
-       gT = mT(8149),
-       nT = mT(8154),
-       HT = mT(8160),
-       kT = mT(8169),
-       jT = mT(8177),
-       lT = mT(8181),
-       LT = mT(8183),
-       pT = mT(8188);
+     var QB = zB(7980),
+       nB = zB(7983),
+       dB = zB(7988),
+       IB = zB(7996),
+       NB = zB(8004),
+       uB = zB(8007),
+       UB = zB(8011),
+       aB = zB(8018),
+       pB = zB(8022),
+       rB = zB(8027),
+       sB = zB(8036);
```

#### 23. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L141)

```diff
-       apple: WT.g,
+       apple: QB.f,
```

#### 24. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L144)

```diff
-       "google-play": gT.g,
+       "google-play": IB.d,
```

#### 25. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L147-L151` → after: `L147-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L147-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-brands.js#L147-L151) · [Before (L147-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-brands.js#L147-L151)

```diff
-       tiktok: kT.f,
-       twitch: jT.c,
-       windows: lT.c,
-       "x-twitter": LT.g,
-       youtube: pT.i
+       tiktok: UB.g,
+       twitch: aB.e,
+       windows: pB.d,
+       "x-twitter": rB.h,
+       youtube: sB.c
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-duotone.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/icons-duotone.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd)

#### 1. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-duotone.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-duotone.js#L4)

```diff
-   8111: (TT, UT) => {
+   7964: (BB, jB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-duotone.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-duotone.js#L9)

```diff
-     UT.c = {
+     jB.b = {
```

#### 3. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-duotone.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-duotone.js#L13)

```diff
-     }, UT.g = UT.c
+     }, jB.e = jB.b
```

#### 4. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-duotone.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-duotone.js#L15)

```diff
-   8114: (TT, UT) => {
+   7967: (BB, jB) => {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-duotone.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-duotone.js#L20)

```diff
-     UT.e = {
+     jB.b = {
```

#### 6. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-duotone.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-duotone.js#L24)

```diff
-     }, UT.f = UT.e
+     }, jB.f = jB.b
```

#### 7. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-duotone.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-duotone.js#L26)

```diff
-   8102: (TT, UT, mT) => {
+   7960: (BB, jB, zB) => {
```

#### 8. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-duotone.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-duotone.js#L30-L31)

```diff
-     var WT = mT(8111),
-       zT = mT(8114);
+     var QB = zB(7964),
+       nB = zB(7967);
```

#### 9. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-duotone.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-duotone.js#L33)

```diff
-       "hat-santa": WT.g,
+       "hat-santa": QB.e,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-regular.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/icons-regular.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8)

#### 1. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-regular.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-regular.js#L4)

```diff
-   8068: (TT, UT) => {
+   7930: (BB, jB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L15-L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-regular.js#L26) · [Before (L15-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-regular.js#L15-L26)

```diff
-   8077: (TT, UT) => {
-     var mT = "flag",
-       WT = [127988, 61725],
-       zT = "f024",
-       MT = "M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24L0 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-100 80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4 44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-279.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0-35.1-17 … [truncated]
-     UT.c = {
-       prefix: "far",
-       iconName: mT,
-       icon: [448, 512, WT, zT, MT]
-     }, UT.f = UT.c
-   },
-   8085: (TT, UT) => {
+   7938: (BB, jB) => {
```

#### 3. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L37-L38` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-regular.js#L37-L38) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-regular.js#L37-L38)

```diff
-   8091: (TT, UT, mT) => {
-     var WT = mT(8098);
+   7947: (BB, jB, zB) => {
+     var QB = zB(7952);
```

#### 4. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-regular.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-regular.js#L43)

```diff
-     }, UT.g = UT.d, WT.prefix, WT.iconName, WT.width, WT.height, WT.aliases, WT.unicode, WT.svgPathData, WT.aliases
+     }, jB.e = jB.d, QB.prefix, QB.iconName, QB.width, QB.height, QB.aliases, QB.unicode, QB.svgPathData, QB.aliases
```

#### 5. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-regular.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-regular.js#L45)

```diff
-   8098: (TT, UT) => {
+   7952: (BB, jB) => {
```

#### 6. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-regular.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-regular.js#L59)

```diff
-   8061: (TT, UT, mT) => {
+   7921: (BB, jB, zB) => {
```

#### 7. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L63-L67` → after: `L63-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-regular.js#L63-L67) · [Before (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-regular.js#L63-L67)

```diff
-     var WT = mT(8068),
-       zT = mT(8077),
-       MT = mT(8085),
-       gT = mT(8091),
-       nT = mT(8098);
+     var QB = zB(7930),
+       nB = zB(7935),
+       dB = zB(7938),
+       IB = zB(7947),
+       NB = zB(7952);
```

#### 8. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L69-L70` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-regular.js#L69-L70) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-regular.js#L69-L70)

```diff
-       copy: WT.d,
-       flag: zT.f,
+       copy: QB.h,
+       flag: nB.d,
```

#### 9. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-regular.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-regular.js#L72)

```diff
-       "user-friends": gT.g,
+       "user-friends": IB.e,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-solid.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/icons-solid.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6)

#### 1. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/icons-solid.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/icons-solid.js#L4)

```diff
-   6777: (TT, UT, mT) => {
+   6646: (BB, jB, zB) => {
```
