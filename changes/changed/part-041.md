# Changed — Bundle Modifications Report (Part 041 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `41 / 50` (**392** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 040](part-040.md) · [Part 042 →](part-042.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (947 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226)

#### 662. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6026` → after: `L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5983) · [Before (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6026)

```diff
-           lq = (0, el.d)(this, eO)[eO]((() => Yq.xOq()));
+           wC = (0, Cb.e)(this, Cn)[Cn]((() => QC.rwC()));
```

#### 663. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6028-L6030` → after: `L5985-L5987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5985-L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5985-L5987) · [Before (L6028-L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6028-L6030)

```diff
-         const Oq = this.deps.core.AOq();
-         if (lq !== Oq) return await (0, el.d)(this, CO)[CO](new Error(`recorder port version ${lq}, the core's ${Oq}`)), !1;
-         (0, el.d)(this, WO)[WO] = qq
+         const bC = this.deps.core.swC();
+         if (wC !== bC) return await (0, Cb.e)(this, kb)[kb](new Error(`recorder port version ${wC}, the core's ${bC}`)), !1;
+         (0, Cb.e)(this, gb)[gb] = CC
```

#### 664. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6034-L6037` → after: `L5991-L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5991-L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5991-L5994) · [Before (L6034-L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6034-L6037)

```diff
-         if (!(0, el.d)(this, eO)[eO]((() => ((0, el.d)(this, NO)[NO] = new Eq.cOq, (0, el.d)(this, aO)[aO] = Eq.qOq(), !0)))) return !1;
-         (0, el.d)(this, kO)[kO]();
-         const qq = (0, el.d)(this, tO)[tO];
-         return (0, el.d)(this, tO)[tO] = null, qq && (0, el.d)(this, UO)[UO](Wq.Uc.Control, qq), (0, el.d)(this, JO)[JO]()
+         if (!(0, Cb.e)(this, Cn)[Cn]((() => ((0, Cb.e)(this, Sb)[Sb] = new zC.TwC, (0, Cb.e)(this, pb)[pb] = zC.mwC(), !0)))) return !1;
+         (0, Cb.e)(this, tb)[tb]();
+         const CC = (0, Cb.e)(this, vb)[vb];
+         return (0, Cb.e)(this, vb)[vb] = null, CC && (0, Cb.e)(this, jb)[jb](NC.Oc.Control, CC), (0, Cb.e)(this, ab)[ab]()
```

#### 665. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6039` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5996) · [Before (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6039)

```diff
-         return (0, el.d)(this, FO)[FO](), await (0, el.d)(this, CO)[CO](gq), !1
+         return (0, Cb.e)(this, yb)[yb](), await (0, Cb.e)(this, kb)[kb](ZC), !1
```

#### 666. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6044` → after: `L6001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6001) · [Before (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6044)

```diff
-       return this.deps.core.uOq(0), 1 === this.deps.core.uOq(1) || ((0, el.d)(this, FO)[FO](), this.deps.failed(uO), !1)
+       return this.deps.core.awC(0), 1 === this.deps.core.awC(1) || ((0, Cb.e)(this, yb)[yb](), this.deps.failed(Nb), !1)
```

#### 667. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6048` → after: `L6005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6005) · [Before (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6048)

```diff
-       (0, el.d)(this, QO)[QO] && (0, el.d)(this, UO)[UO](Wq.Uc.Prefs, mO((0, el.d)(this, QO)[QO].on, (0, el.d)(this, QO)[QO].seconds)), (0, el.d)(this, yO)[yO] && (0, el.d)(this, iO)[iO]((0, el.d)(this, yO)[yO])
+       (0, Cb.e)(this, Ib)[Ib] && (0, Cb.e)(this, jb)[jb](NC.Oc.Prefs, ob((0, Cb.e)(this, Ib)[Ib].on, (0, Cb.e)(this, Ib)[Ib].seconds)), (0, Cb.e)(this, ib)[ib] && (0, Cb.e)(this, mb)[mb]((0, Cb.e)(this, ib)[ib])
```

#### 668. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6056` → after: `L6013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6013) · [Before (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6056)

```diff
-           return null !== (qq = null === (Eq = (0, el.d)(this, QO)[QO]) || void 0 === Eq ? void 0 : Eq.seconds) && void 0 !== qq ? qq : 0
+           return null !== (CC = null === (zC = (0, Cb.e)(this, Ib)[Ib]) || void 0 === zC ? void 0 : zC.seconds) && void 0 !== CC ? CC : 0
```

#### 669. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6058-L6061` → after: `L6015-L6018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6015-L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6015-L6018) · [Before (L6058-L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6058-L6061)

```diff
-         trapped: () => (0, el.d)(this, VO)[VO],
-         busy: () => (0, el.d)(this, MO)[MO](),
-         loadInFlight: () => (0, el.d)(this, HO)[HO],
-         eN: () => (0, el.d)(this, dO)[dO],
+         trapped: () => (0, Cb.e)(this, Pb)[Pb],
+         busy: () => (0, Cb.e)(this, lb)[lb](),
+         loadInFlight: () => (0, Cb.e)(this, Ab)[Ab],
+         Sg: () => (0, Cb.e)(this, Gb)[Gb],
```

#### 670. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6063` → after: `L6020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6020) · [Before (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6063)

```diff
-           (0, el.d)(this, FO)[FO]()
+           (0, Cb.e)(this, yb)[yb]()
```

#### 671. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6065` → after: `L6022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6022) · [Before (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6065)

```diff
-         load: () => (0, el.d)(this, zO)[zO]()
+         load: () => (0, Cb.e)(this, cb)[cb]()
```

#### 672. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6070-L6071` → after: `L6027-L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6027-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6027-L6028) · [Before (L6070-L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6070-L6071)

```diff
-       (0, el.d)(this, rO)[rO] ? (0, el.d)(this, rO)[rO].push([qq, Eq]): (0, el.d)(this, IO)[IO](((gq, Yq) => {
-         const lq = gq.EOq(Eq.length);
+       (0, Cb.e)(this, eb)[eb] ? (0, Cb.e)(this, eb)[eb].push([CC, zC]): (0, Cb.e)(this, Vb)[Vb](((ZC, QC) => {
+         const wC = ZC.HwC(zC.length);
```

#### 673. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6077` → after: `L6034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6034) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6077)

```diff
-       (0, el.d)(this, oO)[oO]++, (0, el.d)(this, GO)[GO]("jN"), (0, el.d)(this, bO)[bO].stop(), this.deps.core.uOq(0), (0, el.d)(this, sO)[sO](), (0, el.d)(this, VO)[VO] || ((0, el.d)(this, WO)[WO] = null, this.deps.unload())
+       (0, Cb.e)(this, xb)[xb]++, (0, Cb.e)(this, sb)[sb]("lM"), (0, Cb.e)(this, db)[db].stop(), this.deps.core.awC(0), (0, Cb.e)(this, Lb)[Lb](), (0, Cb.e)(this, Pb)[Pb] || ((0, Cb.e)(this, gb)[gb] = null, this.deps.unload())
```

#### 674. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6081` → after: `L6038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6038) · [Before (L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6081)

```diff
-       (0, el.d)(this, IO)[IO]((qq => {
+       (0, Cb.e)(this, Vb)[Vb]((CC => {
```

#### 675. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6083` → after: `L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6040) · [Before (L6083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6083)

```diff
-       })), (0, el.d)(this, NO)[NO] = null, (0, el.d)(this, aO)[aO] = null, (0, el.d)(this, nO)[nO] = null
+       })), (0, Cb.e)(this, Sb)[Sb] = null, (0, Cb.e)(this, pb)[pb] = null, (0, Cb.e)(this, Yb)[Yb] = null
```

#### 676. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6089` → after: `L6046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6046) · [Before (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6089)

```diff
-       return (null === (qq = (0, el.d)(this, vO)[vO]) || void 0 === qq ? void 0 : qq.buffer) !== Eq && ((0, el.d)(this, vO)[vO] = new Uint8Array(Eq)), (0, el.d)(this, vO)[vO]
+       return (null === (CC = (0, Cb.e)(this, hb)[hb]) || void 0 === CC ? void 0 : CC.buffer) !== zC && ((0, Cb.e)(this, hb)[hb] = new Uint8Array(zC)), (0, Cb.e)(this, hb)[hb]
```

#### 677. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6095` → after: `L6052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6052) · [Before (L6095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6095)

```diff
-       return (null === (qq = (0, el.d)(this, hO)[hO]) || void 0 === qq ? void 0 : qq.buffer) !== Eq && ((0, el.d)(this, hO)[hO] = new Uint32Array(Eq, 0, Eq.byteLength >>> 2)), (0, el.d)(this, hO)[hO]
+       return (null === (CC = (0, Cb.e)(this, Kb)[Kb]) || void 0 === CC ? void 0 : CC.buffer) !== zC && ((0, Cb.e)(this, Kb)[Kb] = new Uint32Array(zC, 0, zC.byteLength >>> 2)), (0, Cb.e)(this, Kb)[Kb]
```

#### 678. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6101` → after: `L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6058) · [Before (L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6101)

```diff
-       return (null === (Eq = (0, el.d)(this, nO)[nO]) || void 0 === Eq ? void 0 : Eq.buffer) !== gq && ((0, el.d)(this, nO)[nO] = new Uint8Array(gq)), (0, el.d)(this, nO)[nO]
+       return (null === (zC = (0, Cb.e)(this, Yb)[Yb]) || void 0 === zC ? void 0 : zC.buffer) !== ZC && ((0, Cb.e)(this, Yb)[Yb] = new Uint8Array(ZC)), (0, Cb.e)(this, Yb)[Yb]
```

#### 679. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6110-L6112` → after: `L6067-L6069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6067-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6067-L6069) · [Before (L6110-L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6110-L6112)

```diff
-       const Eq = (0, el.d)(this, NO)[NO],
-         gq = (0, el.d)(this, aO)[aO];
-       if (Eq && gq) return (0, el.d)(this, eO)[eO]((() => qq(Eq, gq)))
+       const zC = (0, Cb.e)(this, Sb)[Sb],
+         ZC = (0, Cb.e)(this, pb)[pb];
+       if (zC && ZC) return (0, Cb.e)(this, Cn)[Cn]((() => CC(zC, ZC)))
```

#### 680. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6116` → after: `L6073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6073) · [Before (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6116)

```diff
-       if (!(0, el.d)(this, VO)[VO]) try {
+       if (!(0, Cb.e)(this, Pb)[Pb]) try {
```

#### 681. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6119` → after: `L6076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6076) · [Before (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6119)

```diff
-         if (!(0, el.d)(this, DO)[DO](Eq)) throw Eq;
+         if (!(0, Cb.e)(this, zn)[zn](zC)) throw zC;
```

#### 682. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6125` → after: `L6082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6082) · [Before (L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6125)

```diff
-       return qq instanceof WebAssembly.RuntimeError && ((0, el.d)(this, VO)[VO] = !0, (0, el.d)(this, NO)[NO] = null, (0, el.d)(this, aO)[aO] = null, (0, el.d)(this, nO)[nO] = null, (0, el.d)(this, WO)[WO] = null, (0, el.d)(this, tO)[tO] = null, (0, el.d)(this, GO)[GO]("trapped") … [truncated]
+       return CC instanceof WebAssembly.RuntimeError && ((0, Cb.e)(this, Pb)[Pb] = !0, (0, Cb.e)(this, Sb)[Sb] = null, (0, Cb.e)(this, pb)[pb] = null, (0, Cb.e)(this, Yb)[Yb] = null, (0, Cb.e)(this, gb)[gb] = null, (0, Cb.e)(this, vb)[vb] = null, (0, Cb.e)(this, sb)[sb]("trapped") … [truncated]
```

#### 683. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6127` → after: `L6084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6084) · [Before (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6127)

```diff
-     var rm = gq(38625);
+     var Kn = ZC(38471);
```

#### 684. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6129` → after: `L6086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6086) · [Before (L6129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6129)

```diff
-       ["skyblock", () => gq.e(50).then((() => gq(38619)))]
+       ["skyblock", () => ZC.e(51).then((() => ZC(38463)))]
```

#### 685. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6136` → after: `L6093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6093) · [Before (L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6136)

```diff
-         if (!Eq) throw new Error(`${qq}'s replay hook module registered no hook`);
+         if (!zC) throw new Error(`${CC}'s replay hook module registered no hook`);
```

#### 686. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6216-L6234` → after: `L6173-L6191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6173-L6191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6173-L6191) · [Before (L6216-L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6216-L6234)

```diff
-     var im = (0, Dl.d)("bindings"),
-       Zm = (0, Dl.d)("module"),
-       fm = (0, Dl.d)("memory"),
-       Mm = (0, Dl.d)("trapped"),
-       Tm = (0, Dl.d)("generation"),
-       zm = (0, Dl.d)("loading"),
-       Sm = (0, Dl.d)("lend"),
-       pm = (0, Dl.d)("givenUp"),
-       Gm = (0, Dl.d)("afterSave"),
-       Lm = (0, Dl.d)("opens"),
-       Jm = (0, Dl.d)("saveAskedAt"),
-       km = (0, Dl.d)("unload"),
-       Rm = (0, Dl.d)("dropModule"),
-       Um = (0, Dl.d)("loadFailed"),
-       Fm = (0, Dl.d)("saveReadsBody"),
-       sm = (0, Dl.d)("command"),
- ... (3 more removed lines; see GitHub link above)
+     var Hn = (0, zb.c)("bindings"),
+       En = (0, zb.c)("module"),
+       Xn = (0, zb.c)("memory"),
+       cn = (0, zb.c)("trapped"),
+       un = (0, zb.c)("generation"),
+       rn = (0, zb.c)("loading"),
+       sn = (0, zb.c)("lend"),
+       Tn = (0, zb.c)("givenUp"),
+       an = (0, zb.c)("afterSave"),
+       tn = (0, zb.c)("opens"),
+       Dn = (0, zb.c)("saveAskedAt"),
+       jn = (0, zb.c)("unload"),
+       yn = (0, zb.c)("dropModule"),
+       Ln = (0, zb.c)("loadFailed"),
+       Un = (0, zb.c)("saveReadsBody"),
+       Bn = (0, zb.c)("command"),
+ ... (3 more added lines; see GitHub link above)
```

#### 687. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6238` → after: `L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6195) · [Before (L6238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6238)

```diff
-           value: lx
+           value: of
```

#### 688. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6290` → after: `L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6247) · [Before (L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6290)

```diff
-         return null !== (0, el.d)(this, Zm)[Zm] && null === (0, el.d)(this, Gm)[Gm]
+         return null !== (0, Cb.e)(this, En)[En] && null === (0, Cb.e)(this, an)[an]
```

#### 689. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6292-L6294` → after: `L6249-L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6249-L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6249-L6251) · [Before (L6292-L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6292-L6294)

```diff
-       async open(qq) {
-         if ((0, el.d)(this, Mm)[Mm]) return Wq.gd.ModuleTrap;
-         let Eq = (0, el.d)(this, im)[im];
+       async open(CC, zC) {
+         if ((0, Cb.e)(this, cn)[cn]) return NC._c.ModuleTrap;
+         let ZC = (0, Cb.e)(this, Hn)[Hn];
```

#### 690. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6296-L6297` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6253-L6254) · [Before (L6296-L6297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6296-L6297)

```diff
-           const qq = (0, el.d)(this, Tm)[Tm];
-           (0, el.d)(this, zm)[zm]++;
+           const CC = (0, Cb.e)(this, un)[un];
+           (0, Cb.e)(this, rn)[rn]++;
```

#### 691. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6301` → after: `L6258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6258) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6301)

```diff
-             return (0, el.d)(this, zm)[zm]--, qq !== (0, el.d)(this, Tm)[Tm] ? "stopped" : (0, el.d)(this, Um)[Um](Yq)
+             return (0, Cb.e)(this, rn)[rn]--, CC !== (0, Cb.e)(this, un)[un] ? "stopped" : (0, Cb.e)(this, Ln)[Ln](wC, zC)
```

#### 692. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6303-L6308` → after: `L6260-L6265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6260-L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6260-L6265) · [Before (L6303-L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6303-L6308)

```diff
-           if ((0, el.d)(this, zm)[zm]--, qq !== (0, el.d)(this, Tm)[Tm]) return (0, el.d)(this, im)[im] || 0 !== (0, el.d)(this, zm)[zm] || (0, el.d)(this, Mm)[Mm] || this.deps.unload(), "stopped";
-           if ((0, el.d)(this, Mm)[Mm]) return Wq.gd.ModuleTrap;
-           const gq = Eq.xOq(),
-             lq = this.deps.core.AOq();
-           if (gq !== lq) return (0, el.d)(this, Um)[Um](new Error(`replay port version ${gq}, the core's ${lq}`));
-           (0, el.d)(this, im)[im] = Eq
+           if ((0, Cb.e)(this, rn)[rn]--, CC !== (0, Cb.e)(this, un)[un]) return (0, Cb.e)(this, Hn)[Hn] || 0 !== (0, Cb.e)(this, rn)[rn] || (0, Cb.e)(this, cn)[cn] || this.deps.unload(), "stopped";
+           if ((0, Cb.e)(this, cn)[cn]) return NC._c.ModuleTrap;
+           const QC = ZC.rwC(),
+             bC = this.deps.core.swC();
+           if (QC !== bC) return (0, Cb.e)(this, Ln)[Ln](new Error(`replay port version ${QC}, the core's ${bC}`), zC);
+           (0, Cb.e)(this, Hn)[Hn] = ZC
```

#### 693. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6310` → after: `L6267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6267) · [Before (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6310)

```diff
-         if (!(0, el.d)(this, Zm)[Zm]) {
+         if (!(0, Cb.e)(this, En)[En]) {
```

#### 694. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6312-L6314` → after: `L6269-L6271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6269-L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6269-L6271) · [Before (L6312-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6312-L6314)

```diff
-           if (!(0, el.d)(this, wm)[wm]((() => {
-               (0, el.d)(this, Zm)[Zm] = new qq.BOq, (0, el.d)(this, fm)[fm] = qq.WOq()
-             }))) return Wq.gd.ModuleTrap
+           if (!(0, Cb.e)(this, kn)[kn]((() => {
+               (0, Cb.e)(this, En)[En] = new CC.twC, (0, Cb.e)(this, Xn)[Xn] = CC.jwC()
+             }))) return NC._c.ModuleTrap
```

#### 695. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6317-L6318` → after: `L6274-L6275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6274-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6274-L6275) · [Before (L6317-L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6317-L6318)

```diff
-         return (0, el.d)(this, Xm)[Xm](((Eq, Yq) => {
-           null !== (0, el.d)(this, Gm)[Gm] && Eq.step(0, 0);
+         return (0, Cb.e)(this, On)[On](((zC, ZC) => {
+           null !== (0, Cb.e)(this, an)[an] && zC.step(0, 0);
```

#### 696. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6320-L6321` → after: `L6277-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6277-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6277-L6278) · [Before (L6320-L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6320-L6321)

```diff
-           0 !== lq && (new Uint8Array(Yq.buffer, lq, qq.length).set(qq), Eq.open(), (0, el.d)(this, pm)[pm] = (0, el.d)(this, Sm)[Sm], (0, el.d)(this, Gm)[Gm] = null, (0, el.d)(this, Lm)[Lm]++, gq = !0)
-         })) ? gq ? "opening" : Wq.gd.TooLarge : Wq.gd.ModuleTrap
+           0 !== wC && (new Uint8Array(ZC.buffer, wC, CC.length).set(CC), zC.open(), (0, Cb.e)(this, Tn)[Tn] = (0, Cb.e)(this, sn)[sn], (0, Cb.e)(this, an)[an] = null, (0, Cb.e)(this, tn)[tn]++, QC = !0)
+         })) ? QC ? "opening" : NC._c.TooLarge : NC._c.ModuleTrap
```

#### 697. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6324-L6326` → after: `L6281-L6283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6281-L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6281-L6283) · [Before (L6324-L6326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6324-L6326)

```diff
-         const Eq = (0, el.d)(this, Zm)[Zm],
-           gq = (0, el.d)(this, fm)[fm];
-         if (!Eq || !gq || null !== (0, el.d)(this, Gm)[Gm]) return;
+         const zC = (0, Cb.e)(this, En)[En],
+           ZC = (0, Cb.e)(this, Xn)[Xn];
+         if (!zC || !ZC || null !== (0, Cb.e)(this, an)[an]) return;
```

#### 698. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6329` → after: `L6286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6286) · [Before (L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6329)

```diff
-         } = this.deps, lq = Yq.NOq(qq);
+         } = this.deps, wC = QC.ywC(CC);
```

#### 699. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6334` → after: `L6291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6291) · [Before (L6334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6334)

```diff
-           mq = Eq.step(Oq, lq - Oq), xq = Eq.YOq()
+           nC = zC.step(bC, wC - bC), fC = zC.lwC()
```

#### 700. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6336` → after: `L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6293) · [Before (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6336)

```diff
-           return void(0, el.d)(this, Km)[Km](cq)
+           return void(0, Cb.e)(this, Vn)[Vn](qC)
```

#### 701. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6338` → after: `L6295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6295) · [Before (L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6338)

```diff
-         const Aq = Yq.mOq(1, mq);
+         const oC = QC.uwC(1, nC);
```

#### 702. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6340` → after: `L6297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6297) · [Before (L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6340)

```diff
-           const qq = (0, el.d)(this, Xm)[Xm]((qq => {
+           const CC = (0, Cb.e)(this, On)[On]((CC => {
```

#### 703. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6344` → after: `L6301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6301) · [Before (L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6344)

```diff
-           return (0, el.d)(this, Fm)[Fm] ? (0, el.d)(this, Gm)[Gm] = "drop" : (0, el.d)(this, Rm)[Rm](), void Yq.aOq(Wq.gd.Port)
+           return (0, Cb.e)(this, Un)[Un] ? (0, Cb.e)(this, an)[an] = "drop" : (0, Cb.e)(this, yn)[yn](), void QC.LwC(NC._c.Port)
```

#### 704. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6349` → after: `L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6306) · [Before (L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6349)

```diff
-         (0, el.d)(this, sm)[sm]((qq => {
+         (0, Cb.e)(this, Bn)[Bn]((CC => {
```

#### 705. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6354` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6311) · [Before (L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6354)

```diff
-         (0, el.d)(this, sm)[sm]((qq => {
+         (0, Cb.e)(this, Bn)[Bn]((CC => {
```

#### 706. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6360` → after: `L6317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6317) · [Before (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6360)

```diff
-         (0, el.d)(this, sm)[sm]((gq => {
+         (0, Cb.e)(this, Bn)[Bn]((ZC => {
```

#### 707. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6365-L6366` → after: `L6322-L6323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6322-L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6322-L6323) · [Before (L6365-L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6365-L6366)

```diff
-         return (0, el.d)(this, sm)[sm]((gq => {
-           gq.VOq(qq, Eq)
+         return (0, Cb.e)(this, Bn)[Bn]((ZC => {
+           ZC.UwC(CC, zC)
```

#### 708. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6370-L6371` → after: `L6327-L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6327-L6328) · [Before (L6370-L6371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6370-L6371)

```diff
-         return (0, el.d)(this, sm)[sm]((gq => {
-           gq.dOq(qq[0], qq[1], qq[2], Eq[0], Eq[1], Eq[2])
+         return (0, Cb.e)(this, Bn)[Bn]((ZC => {
+           ZC.BwC(CC[0], CC[1], CC[2], zC[0], zC[1], zC[2])
```

#### 709. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6375-L6376` → after: `L6332-L6333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6332-L6333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6332-L6333) · [Before (L6375-L6376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6375-L6376)

```diff
-         return (0, el.d)(this, sm)[sm]((gq => {
-           gq.jOq(qq, Eq)
+         return (0, Cb.e)(this, Bn)[Bn]((ZC => {
+           ZC.OwC(CC, zC)
```

#### 710. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6380-L6381` → after: `L6337-L6338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6337-L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6337-L6338) · [Before (L6380-L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6380-L6381)

```diff
-         return (0, el.d)(this, sm)[sm]((gq => {
-           gq.HOq(qq, Eq)
+         return (0, Cb.e)(this, Bn)[Bn]((ZC => {
+           ZC.kwC(CC, zC)
```

#### 711. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6385-L6386` → after: `L6342-L6343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6342-L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6342-L6343) · [Before (L6385-L6386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6385-L6386)

```diff
-         return (0, el.d)(this, sm)[sm]((gq => {
-           gq.oOq(qq, Eq)
+         return (0, Cb.e)(this, Bn)[Bn]((ZC => {
+           ZC.VwC(CC, zC)
```

#### 712. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6390` → after: `L6347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6347) · [Before (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6390)

```diff
-         return null === (0, el.d)(this, Sm)[Sm] && (0, el.d)(this, sm)[sm]((gq => {
+         return null === (0, Cb.e)(this, sn)[sn] && (0, Cb.e)(this, Bn)[Bn]((ZC => {
```

#### 713. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6395-L6396` → after: `L6352-L6353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6352-L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6352-L6353) · [Before (L6395-L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6395-L6396)

```diff
-         const qq = (0, el.d)(this, Jm)[Jm];
-         if ((0, el.d)(this, Jm)[Jm] = null, null !== qq && qq !== (0, el.d)(this, Lm)[Lm]) return null;
+         const CC = (0, Cb.e)(this, Dn)[Dn];
+         if ((0, Cb.e)(this, Dn)[Dn] = null, null !== CC && CC !== (0, Cb.e)(this, tn)[tn]) return null;
```

#### 714. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6399-L6400` → after: `L6356-L6357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6356-L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6356-L6357) · [Before (L6399-L6400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6399-L6400)

```diff
-         if ((0, el.d)(this, Xm)[Xm](((qq, Yq) => {
-             Eq = qq.save(), 0 !== Eq && (gq = new Uint8Array(Yq.buffer, qq.POq(), qq.QOq()).slice())
+         if ((0, Cb.e)(this, On)[On](((CC, QC) => {
+             zC = CC.save(), 0 !== zC && (ZC = new Uint8Array(QC.buffer, CC.CbC(), CC.zbC()).slice())
```

#### 715. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6405` → after: `L6362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6362) · [Before (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6405)

```diff
-           givenUp: () => (0, el.d)(this, pm)[pm] === Yq,
+           givenUp: () => (0, Cb.e)(this, Tn)[Tn] === QC,
```

#### 716. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6407` → after: `L6364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6364) · [Before (L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6407)

```diff
-             if ((0, el.d)(this, Sm)[Sm] !== Yq || !(0, el.d)(this, Fm)[Fm]) return null;
+             if ((0, Cb.e)(this, sn)[sn] !== QC || !(0, Cb.e)(this, Un)[Un]) return null;
```

#### 717. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6409-L6411` → after: `L6366-L6368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6366-L6368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6366-L6368) · [Before (L6409-L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6409-L6411)

```diff
-             return (0, el.d)(this, Xm)[Xm](((Yq, lq) => {
-               const Oq = Yq.yOq();
-               0 !== Oq && qq >= 0 && Eq >= 0 && qq + Eq <= Oq && (gq = new Uint8Array(lq.buffer, Yq.tOq() + qq, Eq))
+             return (0, Cb.e)(this, On)[On](((QC, wC) => {
+               const bC = QC.ZbC();
+               0 !== bC && CC >= 0 && zC >= 0 && CC + zC <= bC && (ZC = new Uint8Array(wC.buffer, QC.QbC() + CC, zC))
```

#### 718. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6415-L6417` → after: `L6372-L6374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6372-L6374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6372-L6374) · [Before (L6415-L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6415-L6417)

```diff
-             if ((0, el.d)(this, Sm)[Sm] !== Yq) return;
-             (0, el.d)(this, Sm)[Sm] = null, (0, el.d)(this, pm)[pm] = null, (0, el.d)(this, Xm)[Xm]((qq => {
-               qq.rOq()
+             if ((0, Cb.e)(this, sn)[sn] !== QC) return;
+             (0, Cb.e)(this, sn)[sn] = null, (0, Cb.e)(this, Tn)[Tn] = null, (0, Cb.e)(this, On)[On]((CC => {
+               CC.wbC()
```

#### 719. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6419-L6420` → after: `L6376-L6377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6376-L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6376-L6377) · [Before (L6419-L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6419-L6420)

```diff
-             const qq = (0, el.d)(this, Gm)[Gm];
-             (0, el.d)(this, Gm)[Gm] = null, "unload" === qq ? (0, el.d)(this, km)[km]() : "drop" === qq && (0, el.d)(this, Rm)[Rm]()
+             const CC = (0, Cb.e)(this, an)[an];
+             (0, Cb.e)(this, an)[an] = null, "unload" === CC ? (0, Cb.e)(this, jn)[jn]() : "drop" === CC && (0, Cb.e)(this, yn)[yn]()
```

#### 720. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6423` → after: `L6380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6380) · [Before (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6423)

```diff
-         return (0, el.d)(this, Sm)[Sm] = Yq, Yq
+         return (0, Cb.e)(this, sn)[sn] = QC, QC
```

#### 721. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6426` → after: `L6383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6383) · [Before (L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6426)

```diff
-         (0, el.d)(this, Jm)[Jm] = (0, el.d)(this, Lm)[Lm]
+         (0, Cb.e)(this, Dn)[Dn] = (0, Cb.e)(this, tn)[tn]
```

#### 722. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6429-L6430` → after: `L6386-L6387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6386-L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6386-L6387) · [Before (L6429-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6429-L6430)

```diff
-         (0, el.d)(this, sm)[sm]((Eq => {
-           Eq.vOq(qq)
+         (0, Cb.e)(this, Bn)[Bn]((zC => {
+           zC.bbC(CC)
```

#### 723. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6434-L6435` → after: `L6391-L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6391-L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6391-L6392) · [Before (L6434-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6434-L6435)

```diff
-         (0, el.d)(this, sm)[sm]((Eq => {
-           Eq.hOq(qq)
+         (0, Cb.e)(this, Bn)[Bn]((zC => {
+           zC.nbC(CC)
```

#### 724. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6439` → after: `L6396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6396) · [Before (L6439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6439)

```diff
-         (0, el.d)(this, sm)[sm]((qq => {
+         (0, Cb.e)(this, Bn)[Bn]((CC => {
```

#### 725. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6444` → after: `L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6401) · [Before (L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6444)

```diff
-         (0, el.d)(this, Tm)[Tm]++, (0, el.d)(this, Fm)[Fm] && ((0, el.d)(this, Xm)[Xm]((qq => {
+         (0, Cb.e)(this, un)[un]++, (0, Cb.e)(this, Un)[Un] && ((0, Cb.e)(this, On)[On]((CC => {
```

#### 726. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6446` → after: `L6403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6403) · [Before (L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6446)

```diff
-         })), (0, el.d)(this, Zm)[Zm]) ? (0, el.d)(this, Gm)[Gm] = "unload" : (0, el.d)(this, km)[km]()
+         })), (0, Cb.e)(this, En)[En]) ? (0, Cb.e)(this, an)[an] = "unload" : (0, Cb.e)(this, jn)[jn]()
```

#### 727. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6451` → after: `L6408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6408) · [Before (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6451)

```diff
-       (0, el.d)(this, Rm)[Rm](), (0, el.d)(this, Mm)[Mm] || ((0, el.d)(this, im)[im] = null, this.deps.unload())
+       (0, Cb.e)(this, yn)[yn](), (0, Cb.e)(this, cn)[cn] || ((0, Cb.e)(this, Hn)[Hn] = null, this.deps.unload())
```

#### 728. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6455` → after: `L6412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6412) · [Before (L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6455)

```diff
-       (0, el.d)(this, Xm)[Xm]((qq => {
+       (0, Cb.e)(this, On)[On]((CC => {
```

#### 729. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6457` → after: `L6414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6414) · [Before (L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6457)

```diff
-       })), (0, el.d)(this, Zm)[Zm] = null, (0, el.d)(this, fm)[fm] = null
+       })), (0, Cb.e)(this, En)[En] = null, (0, Cb.e)(this, Xn)[Xn] = null
```

#### 730. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6459-L6460` → after: `L6416-L6419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6416-L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6416-L6419) · [Before (L6459-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6459-L6460)

```diff
-     async function Dm(qq) {
-       return await this.deps.staleOr(qq, (() => {})) ? "reloading" : Wq.gd.ModuleLoad
+     async function Qf(CC, zC) {
+       return await this.deps.staleOr(CC, (() => {}), {
+         beforeReload: zC
+       }) ? "reloading" : NC._c.ModuleLoad
```

#### 731. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6464` → after: `L6423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6423) · [Before (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6464)

```diff
-       return null !== (0, el.d)(this, Sm)[Sm] && (0, el.d)(this, pm)[pm] !== (0, el.d)(this, Sm)[Sm]
+       return null !== (0, Cb.e)(this, sn)[sn] && (0, Cb.e)(this, Tn)[Tn] !== (0, Cb.e)(this, sn)[sn]
```

#### 732. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6468` → after: `L6427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6427) · [Before (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6468)

```diff
-       return null === (0, el.d)(this, Gm)[Gm] && (0, el.d)(this, Xm)[Xm](qq)
+       return null === (0, Cb.e)(this, an)[an] && (0, Cb.e)(this, On)[On](CC)
```

#### 733. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6472-L6474` → after: `L6431-L6433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6431-L6433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6431-L6433) · [Before (L6472-L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6472-L6474)

```diff
-       const Eq = (0, el.d)(this, Zm)[Zm],
-         gq = (0, el.d)(this, fm)[fm];
-       return !(!Eq || !gq) && (0, el.d)(this, wm)[wm]((() => {
+       const zC = (0, Cb.e)(this, En)[En],
+         ZC = (0, Cb.e)(this, Xn)[Xn];
+       return !(!zC || !ZC) && (0, Cb.e)(this, kn)[kn]((() => {
```

#### 734. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6480` → after: `L6439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6439) · [Before (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6480)

```diff
-       if ((0, el.d)(this, Mm)[Mm]) return !1;
+       if ((0, Cb.e)(this, cn)[cn]) return !1;
```

#### 735. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6484` → after: `L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6443) · [Before (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6484)

```diff
-         return (0, el.d)(this, Km)[Km](Eq), !1
+         return (0, Cb.e)(this, Vn)[Vn](zC), !1
```

#### 736. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6488` → after: `L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6447) · [Before (L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6488)

```diff
-     function lx(qq) {
+     function of(CC) {
```

#### 737. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6490` → after: `L6449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6449) · [Before (L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6490)

```diff
-       (0, el.d)(this, Mm)[Mm] = !0, (0, el.d)(this, Zm)[Zm] = null, (0, el.d)(this, fm)[fm] = null, (0, el.d)(this, im)[im] = null, this.deps.crash(this.deps.markTrapped(qq)), this.deps.core.aOq(Wq.gd.ModuleTrap)
+       (0, Cb.e)(this, cn)[cn] = !0, (0, Cb.e)(this, En)[En] = null, (0, Cb.e)(this, Xn)[Xn] = null, (0, Cb.e)(this, Hn)[Hn] = null, this.deps.crash(this.deps.markTrapped(CC)), this.deps.core.LwC(NC._c.ModuleTrap)
```

#### 738. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6492-L6493` → after: `L6451-L6452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6451-L6452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6451-L6452) · [Before (L6492-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6492-L6493)

```diff
-     var Ox = gq(6354),
-       mx = gq(40448);
+     var qf = ZC(6490),
+       Ff = ZC(40854);
```

#### 739. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6504` → after: `L6463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6463) · [Before (L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6504)

```diff
-         case Wq.pd.FlyingText: {
+         case NC.fd.FlyingText: {
```

#### 740. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6509` → after: `L6468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6468) · [Before (L6509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6509)

```diff
-             return void console.warn(`${xx} a replay's flying text isn't JSON`, cq)
+             return void console.warn(`${Wf} a replay's flying text isn't JSON`, qC)
```

#### 741. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6511` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6470) · [Before (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6511)

```diff
-           mq.i.TV("forceFlyingMiddleMessage", {
+           nC.o.bp("forceFlyingMiddleMessage", {
```

#### 742. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6513` → after: `L6472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6472) · [Before (L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6513)

```diff
-             hg: qq.hg,
+             Jb: CC.Jb,
```

#### 743. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6515` → after: `L6474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6474) · [Before (L6515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6515)

```diff
-             ng: qq.ng
+             Ib: CC.Ib
```

#### 744. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6519` → after: `L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6478) · [Before (L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6519)

```diff
-         case Wq.pd.PlayerKilled:
+         case NC.fd.PlayerKilled:
```

#### 745. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6523` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6482) · [Before (L6523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6523)

```diff
-               deadEId: null !== (Eq = cx(qq.dead)) && void 0 !== Eq ? Eq : "",
+               deadEId: null !== (zC = Mf(CC.dead)) && void 0 !== zC ? zC : "",
```

#### 746. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6525` → after: `L6484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6484) · [Before (L6525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6525)

```diff
-               withItem: null !== (gq = qq.withItem) && void 0 !== gq ? gq : "",
+               withItem: null !== (ZC = CC.withItem) && void 0 !== ZC ? ZC : "",
```

#### 747. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6530` → after: `L6489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6489) · [Before (L6530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6530)

```diff
-         case Wq.pd.Killfeed:
+         case NC.fd.Killfeed:
```

#### 748. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6536-L6537` → after: `L6495-L6496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6495-L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6495-L6496) · [Before (L6536-L6537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6536-L6537)

```diff
-                 name: null !== (Yq = qq.killerName) && void 0 !== Yq ? Yq : void 0,
-                 colour: null !== (lq = qq.killerColour) && void 0 !== lq ? lq : void 0
+                 name: null !== (QC = CC.killerName) && void 0 !== QC ? QC : void 0,
+                 colour: null !== (wC = CC.killerColour) && void 0 !== wC ? wC : void 0
```

#### 749. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6541-L6542` → after: `L6500-L6501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6500-L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6500-L6501) · [Before (L6541-L6542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6541-L6542)

```diff
-                 name: null !== (Oq = qq.victimName) && void 0 !== Oq ? Oq : void 0,
-                 colour: null !== (xq = qq.victimColour) && void 0 !== xq ? xq : void 0
+                 name: null !== (bC = CC.victimName) && void 0 !== bC ? bC : void 0,
+                 colour: null !== (fC = CC.victimColour) && void 0 !== fC ? fC : void 0
```

#### 750. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6544` → after: `L6503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6503) · [Before (L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6544)

```diff
-               withItem: null !== (Aq = qq.withItem) && void 0 !== Aq ? Aq : ""
+               withItem: null !== (oC = CC.withItem) && void 0 !== oC ? oC : ""
```

#### 751. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6554` → after: `L6513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6513) · [Before (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6554)

```diff
-       return Number.isInteger(Eq) && Eq > il && Eq <= 2147483647 ? Eq : null
+       return Number.isInteger(zC) && zC > Yw && zC <= 2147483647 ? zC : null
```

#### 752. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6566` → after: `L6525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6525) · [Before (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6566)

```diff
-       const Eq = (0, Jl.l)(Xg.ec.PlayerKilled, (Eq => {
+       const zC = (0, Tw.l)(yZ.Bc.PlayerKilled, (zC => {
```

#### 753. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6568-L6569` → after: `L6527-L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6527-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6527-L6528) · [Before (L6568-L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6568-L6569)

```diff
-           const lq = (0, Ll.e)(Eq);
-           if (!(0, Ll.b)(lq)) return;
+           const wC = (0, sw.j)(zC);
+           if (!(0, sw.e)(wC)) return;
```

#### 754. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6576` → after: `L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6535) · [Before (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6576)

```diff
-           qq.recordPlayerKilled(null !== (gq = Wx(Oq)) && void 0 !== gq ? gq : il, null !== (Yq = Wx(mq)) && void 0 !== Yq ? Yq : il, "number" === typeof Aq ? Aq : 0, "string" === typeof xq ? xq : "")
+           CC.recordPlayerKilled(null !== (ZC = pf(bC)) && void 0 !== ZC ? ZC : Yw, null !== (QC = pf(nC)) && void 0 !== QC ? QC : Yw, "number" === typeof oC ? oC : 0, "string" === typeof fC ? fC : "")
```

#### 755. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6578-L6580` → after: `L6537-L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6537-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6537-L6539) · [Before (L6578-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6578-L6580)

```diff
-         gq = (0, Jl.l)(Xg.ec.CustomKillfeed, (Eq => {
-           const gq = (0, Ll.e)(Eq);
-           if (!(0, Ll.b)(gq) || !(0, Ll.b)(gq.killer) || !(0, Ll.b)(gq.victim)) return;
+         ZC = (0, Tw.l)(yZ.Bc.CustomKillfeed, (zC => {
+           const ZC = (0, sw.j)(zC);
+           if (!(0, sw.e)(ZC) || !(0, sw.e)(ZC.killer) || !(0, sw.e)(ZC.victim)) return;
```

#### 756. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6586` → after: `L6545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6545) · [Before (L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6586)

```diff
-           qq.recordKillfeed(Nx(Yq), Nx(lq), "string" === typeof Oq ? Oq : null)
+           CC.recordKillfeed(Pf(QC), Pf(wC), "string" === typeof bC ? bC : null)
```

#### 757. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6595` → after: `L6554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6554) · [Before (L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6595)

```diff
-       return void 0 === qq || null === qq ? null : null !== (Eq = JSON.stringify(qq)) && void 0 !== Eq ? Eq : null
+       return void 0 === CC || null === CC ? null : null !== (zC = JSON.stringify(CC)) && void 0 !== zC ? zC : null
```

#### 758. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6604` → after: `L6563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6563) · [Before (L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6604)

```diff
-         } = Yq.b.get("clientEscMenuOptions"), Oq = `${gq}:${lq}`;
+         } = QC.b.get("clientEscMenuOptions"), bC = `${ZC}:${wC}`;
```

#### 759. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6607` → after: `L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6566) · [Before (L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6607)

```diff
-       return gq(), (0, mq.k)("appManagerUpdated|clientEscMenuOptions", gq)
+       return ZC(), (0, nC.q)("appManagerUpdated|clientEscMenuOptions", ZC)
```

#### 760. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6614` → after: `L6573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6573) · [Before (L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6614)

```diff
-         return qq.isStopped ? gq : Eq(...arguments)
+         return CC.isStopped ? ZC : zC(...arguments)
```

#### 761. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6618` → after: `L6577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6577) · [Before (L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6618)

```diff
-       open: () => Promise.reject(new Error(Pl.d.coreStopped.text)),
+       open: () => Promise.reject(new Error(Aw.c.coreStopped.text)),
```

#### 762. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6626` → after: `L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6585) · [Before (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6626)

```diff
-       return gq.e(62).then((() => gq(61439)))
+       return ZC.e(64).then((() => ZC(61120)))
```

#### 763. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6642` → after: `L6601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6601) · [Before (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6642)

```diff
-         } = qq, Oq = () => qq.memory().buffer, mq = () => Eq.isStopped ? null : Eq.rings.cmd, xq = ox(Eq, ((qq, Eq) => lq.mOq(qq, Eq)), 0), Aq = () => lq.AOq();
+         } = CC, bC = () => CC.memory().buffer, nC = () => zC.isStopped ? null : zC.rings.cmd, fC = If(zC, ((CC, zC) => wC.uwC(CC, zC)), 0), oC = () => wC.swC();
```

#### 764. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6646-L6650` → after: `L6605-L6609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6605-L6609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6605-L6609) · [Before (L6646-L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6646-L6650)

```diff
-             NOq: ox(Eq, (qq => lq.NOq(qq)), -1),
-             mOq: xq,
-             AOq: Aq,
-             aOq: ox(Eq, (qq => {
-               lq.aOq(qq)
+             ywC: If(zC, (CC => wC.ywC(CC)), -1),
+             uwC: fC,
+             swC: oC,
+             LwC: If(zC, (CC => {
+               wC.LwC(CC)
```

#### 765. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6654` → after: `L6613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6613) · [Before (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6654)

```diff
-           load: async () => (cq = await gq.e(63).then((() => gq(61454))), cq.loadReplayModule()),
+           load: async () => (qC = await ZC.e(65).then((() => ZC(61126))), qC.loadReplayModule()),
```

#### 766. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6660` → after: `L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6619) · [Before (L6660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6660)

```diff
-           staleOr: (Eq, gq) => qq.staleOr(jx, Eq, gq),
+           staleOr: (zC, ZC, QC) => CC.staleOr(xf, zC, ZC, QC),
```

#### 767. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6668-L6671` → after: `L6627-L6630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6627-L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6627-L6630) · [Before (L6668-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6668-L6671)

```diff
-             uOq: ox(Eq, (qq => lq.uOq(qq)), 0),
-             gOq: ox(Eq, (qq => lq.gOq(qq)), 0),
-             mOq: xq,
-             AOq: Aq
+             awC: If(zC, (CC => wC.awC(CC)), 0),
+             EwC: If(zC, (CC => wC.EwC(CC)), 0),
+             uwC: fC,
+             swC: oC
```

#### 768. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6681` → after: `L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6640) · [Before (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6681)

```diff
-               console.warn(`${Bx} the recorder module didn't prefetch, so a save loads it:`, qq)
+               console.warn(`${Sf} the recorder module didn't prefetch, so a save loads it:`, CC)
```

#### 769. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6691` → after: `L6650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6650) · [Before (L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6691)

```diff
-             return null !== (qq = null === (Eq = uq) || void 0 === Eq ? void 0 : Eq.recorderMemoryBytes()) && void 0 !== qq ? qq : 0
+             return null !== (CC = null === (zC = FC) || void 0 === zC ? void 0 : zC.recorderMemoryBytes()) && void 0 !== CC ? CC : 0
```

#### 770. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6708-L6710` → after: `L6667-L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6667-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6667-L6669) · [Before (L6708-L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6708-L6710)

```diff
-             Xlq: ox(Eq, (qq => lq.Xlq(qq)), 0),
-             Klq: ox(Eq, (() => {
-               lq.Klq()
+             iwC: If(zC, (CC => wC.iwC(CC)), 0),
+             ewC: If(zC, (() => {
+               wC.ewC()
```

#### 771. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6712-L6713` → after: `L6671-L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6671-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6671-L6672) · [Before (L6712-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6712-L6713)

```diff
-             yd: ox(Eq, (() => lq.yd()), 0),
-             wlq: ox(Eq, (() => lq.wlq()), 0)
+             Xp: If(zC, (() => wC.Xp()), 0),
+             vwC: If(zC, (() => wC.vwC()), 0)
```

#### 772. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6726` → after: `L6685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6685) · [Before (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6726)

```diff
-             console.warn(`${Bx} the recorded game's replay hooks:`, qq)
+             console.warn(`${Sf} the recorded game's replay hooks:`, CC)
```

#### 773. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6738` → after: `L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6697) · [Before (L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6738)

```diff
-             null === (qq = (0, yl.f)()) || void 0 === qq || qq.recorderChanged()
+             null === (CC = (0, Jw.g)()) || void 0 === CC || CC.recorderChanged()
```

#### 774. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6742` → after: `L6701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6701) · [Before (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6742)

```diff
-             null === (qq = (0, yl.f)()) || void 0 === qq || qq.viewerChanged()
+             null === (CC = (0, Jw.g)()) || void 0 === CC || CC.viewerChanged()
```

#### 775. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6747` → after: `L6706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6706) · [Before (L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6747)

```diff
-               const lq = Xg.kb[Eq.key];
+               const wC = yZ.Lb[zC.key];
```

#### 776. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6749-L6750` → after: `L6708-L6709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6708-L6709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6708-L6709) · [Before (L6749-L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6749-L6750)

```diff
-               let Oq = null !== (gq = Eq.value) && void 0 !== gq ? gq : JSON.parse(JSON.stringify(null !== (Yq = Ox.e[lq]) && void 0 !== Yq ? Yq : null));
-               if (null !== Eq.value && Eq.key < Xg.Lb.Environment && "string" === typeof Oq) try {
+               let bC = null !== (ZC = zC.value) && void 0 !== ZC ? ZC : JSON.parse(JSON.stringify(null !== (QC = qf.b[wC]) && void 0 !== QC ? QC : null));
+               if (null !== zC.value && zC.key < yZ.gc.Environment && "string" === typeof bC) try {
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6753` → after: `L6712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6712) · [Before (L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6753)

```diff
-                 return void console.warn(`${xx} a replay's ${lq} isn't JSON`, mq)
+                 return void console.warn(`${Wf} a replay's ${wC} isn't JSON`, nC)
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6762` → after: `L6721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6721) · [Before (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6762)

```diff
-             this.entityHooks.opened((0, hq.Yb)(Eq)), qq.replayShaderPack(Eq)
+             this.entityHooks.opened((0, eC.Cb)(zC)), CC.replayShaderPack(zC)
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6766` → after: `L6725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6725) · [Before (L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6766)

```diff
-             return null !== (qq = null === (gq = Eq.lastHeader) || void 0 === gq ? void 0 : gq.renderPending) && void 0 !== qq ? qq : 0
+             return null !== (CC = null === (ZC = zC.lastHeader) || void 0 === ZC ? void 0 : ZC.renderPending) && void 0 !== CC ? CC : 0
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6768` → after: `L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6727) · [Before (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6768)

```diff
-           viewerOpen: Ql.e,
+           viewerOpen: xw.c,
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6770` → after: `L6729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6729) · [Before (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6770)

```diff
-             (0, Hl.h)(qq)
+             (0, Gw.j)(CC)
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6782-L6783` → after: `L6741-L6742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6741-L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6741-L6742) · [Before (L6782-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6782-L6783)

```diff
-         this.freecam = Nq, (0, yl.o)(Nq), this.recordedOptions = function(qq, Eq) {
-           const gq = Xg.kb,
+         this.freecam = MC, (0, Jw.q)(MC), this.recordedOptions = function(CC, zC) {
+           const ZC = yZ.Lb,
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6797` → after: `L6756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6756) · [Before (L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6797)

```diff
-         }(Wq.recorder, qq.options), this.stops = [(0, YY.m)((qq => {
+         }(NC.recorder, CC.options), this.stops = [(0, QQ.k)((CC => {
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6804` → after: `L6763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6763) · [Before (L6804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6804)

```diff
-         })), (0, YY.y)(((qq, Eq) => {
+         })), (0, QQ.u)(((CC, zC) => {
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6817` → after: `L6776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6776) · [Before (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6817)

```diff
-         }, ax(Wq.recorder), (0, kl.h)((qq => {
+         }, Gf(NC.recorder), (0, aw.k)((CC => {
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6823` → after: `L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6782) · [Before (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6823)

```diff
-           gq && (null === (Yq = (0, yl.f)()) || void 0 === Yq || Yq.keyDown(Eq))
+           ZC && (null === (QC = (0, Jw.g)()) || void 0 === QC || QC.keyDown(zC))
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6827` → after: `L6786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6786) · [Before (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6827)

```diff
-           return !0 === (null === qq || void 0 === qq ? void 0 : qq.isOpen) ? qq : null
+           return !0 === (null === CC || void 0 === CC ? void 0 : CC.isOpen) ? CC : null
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6829` → after: `L6788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6788) · [Before (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6829)

```diff
-         (0, ol.f)({
+         (0, Rw.g)({
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6833` → after: `L6792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6792) · [Before (L6833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6833)

```diff
-             return null !== (qq = null === (Eq = aq()) || void 0 === Eq ? void 0 : Eq.id) && void 0 !== qq ? qq : null
+             return null !== (CC = null === (zC = gC()) || void 0 === zC ? void 0 : zC.id) && void 0 !== CC ? CC : null
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6837` → after: `L6796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6796) · [Before (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6837)

```diff
-             return null !== (qq = null === (Eq = aq()) || void 0 === Eq ? void 0 : Eq.saveRefusal) && void 0 !== qq ? qq : null
+             return null !== (CC = null === (zC = gC()) || void 0 === zC ? void 0 : zC.saveRefusal) && void 0 !== CC ? CC : null
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6841` → after: `L6800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6800) · [Before (L6841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6841)

```diff
-             return null !== (qq = null === (Eq = aq()) || void 0 === Eq ? void 0 : Eq.save()) && void 0 !== qq ? qq : Promise.resolve(null)
+             return null !== (CC = null === (zC = gC()) || void 0 === zC ? void 0 : zC.save()) && void 0 !== CC ? CC : Promise.resolve(null)
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6845` → after: `L6804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6804) · [Before (L6845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6845)

```diff
-             return null !== (qq = null === (Eq = Wq.currentViewer) || void 0 === Eq ? void 0 : Eq.fileHandle) && void 0 !== qq ? qq : null
+             return null !== (CC = null === (zC = NC.currentViewer) || void 0 === zC ? void 0 : zC.fileHandle) && void 0 !== CC ? CC : null
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6855` → after: `L6814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6814) · [Before (L6855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6855)

```diff
-           if (qq.phase === Wq.u.Activated) {
+           if (CC.phase === NC.J.Activated) {
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6859` → after: `L6818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6818) · [Before (L6859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6859)

```diff
-               lobbyType: (0, nq.t)(Eq.lobbyName),
+               lobbyType: (0, hC.B)(zC.lobbyName),
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6863` → after: `L6822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6822) · [Before (L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6863)

```diff
-           } else qq.phase !== Wq.u.Left && qq.phase !== Wq.u.Closed || qq.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
+           } else CC.phase !== NC.J.Left && CC.phase !== NC.J.Closed || CC.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6869` → after: `L6828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6828) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6869)

```diff
-           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, yl.l)() === this.runtime && (0, yl.s)(null), (0, yl.i)() === this.freecam && (0, yl.o)(null), (0, ol.f)(Px), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
+           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Jw.k)() === this.runtime && (0, Jw.s)(null), (0, Jw.j)() === this.freecam && (0, Jw.q)(null), (0, Rw.g)(vf), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6876-L6877` → after: `L6835-L6836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6835-L6836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6835-L6836) · [Before (L6876-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6876-L6877)

```diff
-         if (gq.isStopped) throw new Error(Pl.d.coreStopped.text);
-         if (qq.byteLength > 67108864) throw new Error(Pl.d.cantOpen.text);
+         if (ZC.isStopped) throw new Error(Aw.c.coreStopped.text);
+         if (CC.byteLength > 67108864) throw new Error(Aw.c.cantOpen.text);
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6882` → after: `L6841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6841) · [Before (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6882)

```diff
-             return Eq.inPlayback || (0, YY.M)().leaveGame(null), Eq
+             return zC.inPlayback || (0, QQ.E)().leaveGame(null), zC
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6885` → after: `L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6844) · [Before (L6885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6885)

```diff
-           throw console.warn(`${Bx} the replay viewer didn't load`, lq), new Error(Pl.d.viewerLoadFailed.text)
+           throw console.warn(`${Sf} the replay viewer didn't load`, wC), new Error(Aw.c.viewerLoadFailed.text)
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6887` → after: `L6846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6846) · [Before (L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6887)

```diff
-         if (gq.isStopped) throw new Error(Pl.d.coreStopped.text);
+         if (ZC.isStopped) throw new Error(Aw.c.coreStopped.text);
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6891` → after: `L6850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6850) · [Before (L6891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6891)

```diff
-     var rx = gq(1926);
+     var Yf = ZC(1865);
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6899` → after: `L6858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6858) · [Before (L6899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6899)

```diff
-           aux: qq.reset ? Wq._b.ResetFirst : 0,
+           aux: CC.reset ? NC.dc.ResetFirst : 0,
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6903` → after: `L6862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6862) · [Before (L6903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6903)

```diff
-       qq.queueOptions(gq, Yq) && (Eq.reset && rx.c.reset(), rx.c.apply(Eq.changes))
+       CC.queueOptions(ZC, QC) && (zC.reset && Yf.e.reset(), Yf.e.apply(zC.changes))
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6976-L6980` → after: `L6935-L6939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6935-L6939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6935-L6939) · [Before (L6976-L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6976-L6980)

```diff
-     var Mx = gq(42352),
-       Tx = gq(42356),
-       zx = gq(40760),
-       Sx = gq(40786),
-       px = gq(2805);
+     var rf = ZC(42390),
+       sf = ZC(42393),
+       Tf = ZC(40772),
+       af = ZC(40820),
+       tf = ZC(2856);
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6984` → after: `L6943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6943) · [Before (L6984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6984)

```diff
-         this.host = qq, this.sets = new Map, this.table = [], this.generation = 0, this.eN = !1
+         this.host = CC, this.sets = new Map, this.table = [], this.generation = 0, this.Sg = !1
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6988` → after: `L6947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6947) · [Before (L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6988)

```diff
-           if (qq.byteLength !== Wq.yd) return null;
+           if (CC.byteLength !== NC.od) return null;
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6995` → after: `L6954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6954) · [Before (L6995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6995)

```diff
-         Eq && !this.eN && (Eq.release !== Wq.zd && this.release(Eq.release), Eq.want !== Wq.zd && this.want(Eq.want))
+         zC && !this.Sg && (zC.release !== NC.qd && this.release(zC.release), zC.want !== NC.qd && this.want(zC.want))
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6998` → after: `L6957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6957) · [Before (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6998)

```diff
-         if (!this.eN) {
+         if (!this.Sg) {
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7004-L7005` → after: `L6963-L6964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6963-L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6963-L6964) · [Before (L7004-L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7004-L7005)

```diff
-         if (this.eN) return;
-         this.eN = !0, this.generation++, this.table = [];
+         if (this.Sg) return;
+         this.Sg = !0, this.generation++, this.table = [];
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7011` → after: `L6970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6970) · [Before (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7011)

```diff
-             this.host.jYq(qq)
+             this.host.aZC(CC)
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7028` → after: `L6987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6987) · [Before (L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7028)

```diff
-         if (!gq || 1 !== gq.urls.length && gq.urls.length !== Xg._b.CubeFaces) return this.host.sendReady(Rx(qq)), void this.host.onLoadFailed(qq, "", new Error(`no image set ${qq}`));
+         if (!ZC || 1 !== ZC.urls.length && ZC.urls.length !== yZ.xc.CubeFaces) return this.host.sendReady(Uf(CC)), void this.host.onLoadFailed(CC, "", new Error(`no image set ${CC}`));
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7046` → after: `L7005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7005) · [Before (L7046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7046)

```diff
-           if (!Aq || !gq.wanted) return this.eN ? void this.releaseAfterDispose(xq.map(Jx)) : (this.releaseAll(xq.map(Jx)), void(Aq && this.sets.delete(qq)));
+           if (!oC || !ZC.wanted) return this.Sg ? void this.releaseAfterDispose(fC.map(yf)) : (this.releaseAll(fC.map(yf)), void(oC && this.sets.delete(CC)));
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7053` → after: `L7012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7012) · [Before (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7053)

```diff
-         const [lq] = Yq, Oq = [lq.width, lq.height], mq = Yq.every((qq => qq.width === Oq[0] && qq.height === Oq[1])), xq = Eq.urls.length === Xg._b.CubeFaces;
+         const [wC] = QC, bC = [wC.width, wC.height], nC = QC.every((CC => CC.width === bC[0] && CC.height === bC[1])), fC = zC.urls.length === yZ.xc.CubeFaces;
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7056-L7057` → after: `L7015-L7016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7015-L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7015-L7016) · [Before (L7056-L7057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7056-L7057)

```diff
-           const gq = Yq.map((qq => `${qq.width}x${qq.height}`));
-           return void this.host.onLoadFailed(qq, Eq.urls[0], new Error(`set ${qq}'s images can't make its texture: ${gq.join(", ")}`))
+           const ZC = QC.map((CC => `${CC.width}x${CC.height}`));
+           return void this.host.onLoadFailed(CC, zC.urls[0], new Error(`set ${CC}'s images can't make its texture: ${ZC.join(", ")}`))
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7073` → after: `L7032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7032) · [Before (L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7073)

```diff
-         for (const Eq of qq) this.host.jYq(Eq)
+         for (const zC of CC) this.host.aZC(zC)
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7077` → after: `L7036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7036) · [Before (L7077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7077)

```diff
-           this.host.jYq(Eq)
+           this.host.aZC(zC)
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7087` → after: `L7046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7046) · [Before (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7087)

```diff
-       const Yq = new Uint8Array(Xg._b.SkyImagesReadyBytes),
+       const QC = new Uint8Array(yZ.xc.SkyImagesReadyBytes),
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7089` → after: `L7048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7048) · [Before (L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7089)

```diff
-       return lq.setUint16(0, qq, !0), lq.setUint16(2, Eq.length, !0), lq.setUint16(4, gq[0], !0), lq.setUint16(6, gq[1], !0), Eq.slice(0, Xg._b.CubeFaces).forEach(((qq, Eq) => {
+       return wC.setUint16(0, CC, !0), wC.setUint16(2, zC.length, !0), wC.setUint16(4, ZC[0], !0), wC.setUint16(6, ZC[1], !0), zC.slice(0, yZ.xc.CubeFaces).forEach(((CC, zC) => {
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7095` → after: `L7054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7054) · [Before (L7095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7095)

```diff
-       const Eq = new Uint8Array(Xg._b.SkyImagesReadyBytes),
+       const zC = new Uint8Array(yZ.xc.SkyImagesReadyBytes),
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7097` → after: `L7056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7056) · [Before (L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7097)

```diff
-       return gq.setUint16(0, qq, !0), gq.setUint16(2, Xg._b.Failed, !0), Eq
+       return ZC.setUint16(0, CC, !0), ZC.setUint16(2, yZ.xc.Failed, !0), zC
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7103` → after: `L7062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7062) · [Before (L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7103)

```diff
-         gq = await (0, px.P)(qq)
+         ZC = await (0, tf.M)(CC)
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7105` → after: `L7064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7064) · [Before (L7105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7105)

```diff
-         throw new zx.b("fetch", qq, {
+         throw new Tf.e("fetch", CC, {
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7138` → after: `L7097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7097) · [Before (L7138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7138)

```diff
-         throw new zx.b("decode", qq, {
+         throw new Tf.e("decode", CC, {
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7143` → after: `L7102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7102) · [Before (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7143)

```diff
-         id: (0, zx.n)(lq),
+         id: (0, Tf.o)(wC),
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7148-L7150` → after: `L7107-L7111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7107-L7111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7107-L7111) · [Before (L7148-L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7148-L7150)

```diff
-     var sx = gq(3067),
-       Xx = gq(34293);
-     const wx = sx.d.length;
+     var kf = ZC(2063),
+       Vf = ZC(33998),
+       Co = ZC(39060);
+     const zo = kf.g.length,
+       Zo = new Set([...kf.g, "earth"]);
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7154-L7155` → after: `L7115-L7136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7115-L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7115-L7136) · [Before (L7154-L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7154-L7155)

```diff
-         gq = [];
-       sx.d.forEach(((Yq, lq) => {
+         ZC = [],
+         QC = (CC, QC) => {
+           if ("custom" === QC.type) {
+             ZC.push({
+               id: CC,
+               kind: yZ.xc.KindCustom,
+               set: zC.length,
+               earth: null
+             });
+             const wC = [QC.px, QC.py, QC.pz, QC.nx, QC.ny, QC.nz];
+             zC.push({
+               urls: (0, Co.i)(wC),
+               orientation: "none"
+             })
+           } else ZC.push({
+             id: CC,
+ ... (6 more added lines; see GitHub link above)
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7157-L7171` → after: `L7138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7138) · [Before (L7157-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7157-L7171)

```diff
-         const mq = null !== (Oq = Cx(qq[Yq])) && void 0 !== Oq ? Oq : Xx.k[Yq];
-         "custom" === mq.type ? (gq.push({
-           id: lq,
-           kind: Xg._b.KindCustom,
-           set: Eq.length,
-           earth: null
-         }), Eq.push({
-           urls: [mq.px, mq.py, mq.pz, mq.nx, mq.ny, mq.nz],
-           orientation: "none"
-         })) : gq.push({
-           id: lq,
-           kind: Xg._b.KindEarth,
-           set: 0,
-           earth: mq
-         })
+         QC(ZC, null !== (wC = wo(CC[zC])) && void 0 !== wC ? wC : Vf.m[zC])
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7174-L7179` → after: `L7141-L7150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7141-L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7141-L7150) · [Before (L7174-L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7174-L7179)

```diff
-       "earth" === (null === Yq || void 0 === Yq ? void 0 : Yq.type) && gq.push({
-         id: wx,
-         kind: Xg._b.KindEarth,
-         set: 0,
-         earth: Yq
-       });
+       "earth" === (null === wC || void 0 === wC ? void 0 : wC.type) && QC(zo, wC);
+       const bC = new TextEncoder,
+         nC = [],
+         fC = [];
+       for (const [MC, gC] of Object.entries(CC)) {
+         const CC = Zo.has(MC) ? null : wo(gC);
+         if (null === CC) continue;
+         const zC = bC.encode(MC);
+         zC.length > 255 ? fC.push(`Ignoring texture pack skybox ${MC}, whose name is over 255 bytes`) : nC.length === yZ.xc.MaxAdded ? fC.push(`Ignoring texture pack skybox ${MC}, past the ${yZ.xc.MaxAdded} skies a pack can add`) : (nC.push(zC), QC(yZ.xc.AddedId, CC))
+       }
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7182` → after: `L7153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7153) · [Before (L7182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7182)

```diff
-         urls: Xx.f.map((qq => Xx.g + qq)),
+         urls: Vf.e.map((CC => Vf.h + CC)),
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7185` → after: `L7156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7156) · [Before (L7185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7185)

```diff
-         urls: [Xx.j],
+         urls: [Vf.l],
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7188` → after: `L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7159) · [Before (L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7188)

```diff
-         urls: [Xx.b],
+         urls: [Vf.d],
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7191` → after: `L7162-L7163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7162-L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7162-L7163) · [Before (L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7191)

```diff
-       const Oq = new Uint8Array(Xg._b.SkyTableHeaderBytes + gq.length * Xg._b.SkyTableEntryBytes),
+       const qC = yZ.xc.SkyTableHeaderBytes + ZC.length * yZ.xc.SkyTableEntryBytes,
+         FC = new Uint8Array(qC + nC.reduce(((CC, zC) => CC + 1 + zC.length), 0)),
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7193-L7194` → after: `L7165-L7166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7165-L7166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7165-L7166) · [Before (L7193-L7194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7193-L7194)

```diff
-       return mq.setUint16(0, lq, !0), mq.setUint16(2, lq + 1, !0), mq.setUint16(4, lq + 2, !0), mq.setUint16(6, gq.length, !0), gq.forEach(((qq, Eq) => {
-         const gq = Xg._b.SkyTableHeaderBytes + Eq * Xg._b.SkyTableEntryBytes;
+       WC.setUint16(0, oC, !0), WC.setUint16(2, oC + 1, !0), WC.setUint16(4, oC + 2, !0), WC.setUint16(6, ZC.length, !0), ZC.forEach(((CC, zC) => {
+         const ZC = yZ.xc.SkyTableHeaderBytes + zC * yZ.xc.SkyTableEntryBytes;
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7214` → after: `L7186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7186) · [Before (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7214)

```diff
-             "number" === typeof Aq && Number.isFinite(Aq) && (Eq.setFloat32(gq + Xg.q.CameraOffsetAt + 4 * Oq, Aq, !0), lq |= xq)
+             "number" === typeof oC && Number.isFinite(oC) && (zC.setFloat32(ZC + yZ.A.CameraOffsetAt + 4 * bC, oC, !0), wC |= fC)
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7220` → after: `L7192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7192) · [Before (L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7220)

```diff
-           Eq.setUint32(gq + Xg.q.PresentAt, lq, !0), Eq.setUint8(gq + Xg.q.FlagsAt, Oq)
+           zC.setUint32(ZC + yZ.A.PresentAt, wC, !0), zC.setUint8(ZC + yZ.A.FlagsAt, bC)
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7222` → after: `L7194-L7197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7194-L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7194-L7197) · [Before (L7222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7222)

```diff
-       })), {
+       }));
+       let NC = qC;
+       for (const MC of nC) FC[NC] = MC.length, FC.set(MC, NC + 1), NC += 1 + MC.length;
+       return {
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7224` → after: `L7199-L7200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7199-L7200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7199-L7200) · [Before (L7224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7224)

```diff
-         sets: Eq
+         sets: zC,
+         leftOut: fC
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7235` → after: `L7211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7211) · [Before (L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7235)

```diff
-       })) ? qq : null
+       })) ? CC : null
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7238-L7245` → after: `L7214-L7221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7214-L7221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7214-L7221) · [Before (L7238-L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7238-L7245)

```diff
-         ["inclination", Xg.q.Inclination],
-         ["turbidity", Xg.q.Turbidity],
-         ["luminance", Xg.q.Luminance],
-         ["rayleigh", Xg.q.Rayleigh],
-         ["mieCoefficient", Xg.q.MieCoefficient],
-         ["mieDirectionalG", Xg.q.MieDirectionalG],
-         ["distance", Xg.q.Distance],
-         ["azimuth", Xg.q.Azimuth]
+         ["inclination", yZ.A.Inclination],
+         ["turbidity", yZ.A.Turbidity],
+         ["luminance", yZ.A.Luminance],
+         ["rayleigh", yZ.A.Rayleigh],
+         ["mieCoefficient", yZ.A.MieCoefficient],
+         ["mieDirectionalG", yZ.A.MieDirectionalG],
+         ["distance", yZ.A.Distance],
+         ["azimuth", yZ.A.Azimuth]
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7248-L7250` → after: `L7224-L7226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7224-L7226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7224-L7226) · [Before (L7248-L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7248-L7250)

```diff
-         ["sunPosition", Xg.q.SunPosition, Xg.q.SunPositionAt],
-         ["up", Xg.q.Up, Xg.q.UpAt],
-         ["vertexTint", Xg.q.VertexTint, Xg.q.VertexTintAt]
+         ["sunPosition", yZ.A.SunPosition, yZ.A.SunPositionAt],
+         ["up", yZ.A.Up, yZ.A.UpAt],
+         ["vertexTint", yZ.A.VertexTint, yZ.A.VertexTintAt]
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7253-L7255` → after: `L7229-L7231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7229-L7231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7229-L7231) · [Before (L7253-L7255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7253-L7255)

```diff
-         ["xCameraOffset", Xg.q.CameraOffsetX],
-         ["yCameraOffset", Xg.q.CameraOffsetY],
-         ["zCameraOffset", Xg.q.CameraOffsetZ]
+         ["xCameraOffset", yZ.A.CameraOffsetX],
+         ["yCameraOffset", yZ.A.CameraOffsetY],
+         ["zCameraOffset", yZ.A.CameraOffsetZ]
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7258-L7260` → after: `L7234-L7236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7234-L7236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7234-L7236) · [Before (L7258-L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7258-L7260)

```diff
-         ["useSunPosition", Xg.q.UseSunPosition],
-         ["dithering", Xg.q.Dithering],
-         ["infiniteDistance", Xg.q.InfiniteDistance]
+         ["useSunPosition", yZ.A.UseSunPosition],
+         ["dithering", yZ.A.Dithering],
+         ["infiniteDistance", yZ.A.InfiniteDistance]
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7290` → after: `L7266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7266) · [Before (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7290)

```diff
-                       return "string" !== typeof qq ? null : null !== (Eq = null === (gq = lA.exec(qq)) || void 0 === gq || null === (Yq = gq.groups) || void 0 === Yq ? void 0 : Yq.base64) && void 0 !== Eq ? Eq : null
+                       return "string" !== typeof CC ? null : null !== (zC = null === (ZC = No.exec(CC)) || void 0 === ZC || null === (QC = ZC.groups) || void 0 === QC ? void 0 : QC.base64) && void 0 !== zC ? zC : null
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7294` → after: `L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7270) · [Before (L7294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7294)

```diff
-                 }(Yq) || (gq(`Ignoring texture pack skybox ${Eq}, whose faces are not all data URLs`, null), !1)
+                 }(QC) || (ZC(`Ignoring texture pack skybox ${zC}, whose faces are not all data URLs`, null), !1)
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7307` → after: `L7283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7283) · [Before (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7307)

```diff
-         this.host = qq, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.eN = !1, this.wait = null !== (Eq = qq.wait) && void 0 !== Eq ? Eq : (qq, Eq) => {
+         this.host = CC, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Sg = !1, this.wait = null !== (zC = CC.wait) && void 0 !== zC ? zC : (CC, zC) => {
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7310-L7311` → after: `L7286-L7287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7286-L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7286-L7287) · [Before (L7310-L7311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7310-L7311)

```diff
-           loadImage: null !== (gq = qq.loadImage) && void 0 !== gq ? gq : Fx,
-           jYq: null !== (Yq = qq.jYq) && void 0 !== Yq ? Yq : zx.r,
+           loadImage: null !== (ZC = CC.loadImage) && void 0 !== ZC ? ZC : Of,
+           aZC: null !== (QC = CC.aZC) && void 0 !== QC ? QC : Tf.r,
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7314` → after: `L7290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7290) · [Before (L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7314)

```diff
-               kind: Xg._b.SkyImagesReady,
+               kind: yZ.xc.SkyImagesReady,
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7319` → after: `L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7295) · [Before (L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7319)

```diff
-             qq.warn(`sky image set ${Eq} (${gq}) didn't load: the last sky stays`, Yq)
+             CC.warn(`sky image set ${zC} (${ZC}) didn't load: the last sky stays`, QC)
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7325` → after: `L7301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7301) · [Before (L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7325)

```diff
-         this.wait(Sx.d, (() => {
+         this.wait(af.b, (() => {
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7328` → after: `L7304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7304) · [Before (L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7328)

```diff
-           this.write(null !== qq && void 0 !== qq ? qq : {})
+           this.write(null !== CC && void 0 !== CC ? CC : {})
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7341` → after: `L7317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7317) · [Before (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7341)

```diff
-         this.eN = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
+         this.Sg = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
```

#### 852. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7344` → after: `L7320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7320) · [Before (L7344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7344)

```diff
-         if (this.eN) return;
+         if (this.Sg) return;
```

#### 853. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7346-L7353` → after: `L7322-L7332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7322-L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7322-L7332) · [Before (L7346-L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7346-L7353)

```diff
-         var gq, Yq;
-         this.written && (gq = this.written, Yq = Eq, gq.payload.length === Yq.payload.length && gq.payload.every(((qq, Eq) => qq === Yq.payload[Eq])) && gq.sets.length === Yq.sets.length && gq.sets.every(((qq, Eq) => {
-           const gq = Yq.sets[Eq];
-           return qq.orientation === gq.orientation && qq.urls.length === gq.urls.length && qq.urls.every(((qq, Eq) => qq === gq.urls[Eq]))
-         }))) || (this.written = Eq, this.loader.reset(Eq.sets), this.queue = this.queue.filter((qq => qq.kind !== Xg._b.SkyImagesReady)), this.queue.push({
-           kind: Xg._b.SkyTable,
-           payload: Eq.payload
-         }))
+         if (!(this.written && (ZC = this.written, QC = zC, ZC.payload.length === QC.payload.length && ZC.payload.every(((CC, zC) => CC === QC.payload[zC])) && ZC.sets.length === QC.sets.length && ZC.sets.every(((CC, zC) => {
+             const ZC = QC.sets[zC];
+             return CC.orientation === ZC.orientation && CC.urls.length === ZC.urls.length && CC.urls.every(((CC, zC) => CC === ZC.urls[zC]))
+           }))))) {
+           var ZC, QC;
+           for (const CC of zC.leftOut) this.host.warn(CC, null);
+           this.written = zC, this.loader.reset(zC.sets), this.queue = this.queue.filter((CC => CC.kind !== yZ.xc.SkyImagesReady)), this.queue.push({
+             kind: yZ.xc.SkyTable,
+             payload: zC.payload
+           })
+         }
```

#### 854. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7357-L7370` → after: `L7336-L7349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7336-L7349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7336-L7349) · [Before (L7357-L7370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7357-L7370)

```diff
-     var OA = gq(2717),
-       mA = gq(2900),
-       xA = gq(284),
-       AA = gq(181),
-       cA = gq(2719),
-       uA = gq(2725),
-       BA = gq(260),
-       WA = gq(263),
-       NA = gq(2821),
-       aA = gq(2839),
-       VA = gq(2845),
-       dA = gq(114),
-       jA = gq(275),
-       HA = gq(40548);
+     var Mo = ZC(2778),
+       go = ZC(2982),
+       So = ZC(267),
+       po = ZC(162),
+       Po = ZC(2782),
+       Go = ZC(2791),
+       Ro = ZC(249),
+       Ao = ZC(253),
+       xo = ZC(2888),
+       Jo = ZC(2911),
+       Io = ZC(2918),
+       io = ZC(91),
+       vo = ZC(296),
+       eo = ZC(40662);
```

#### 855. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7373-L7374` → after: `L7352-L7353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7352-L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7352-L7353) · [Before (L7373-L7374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7373-L7374)

```diff
-         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Jl.l)(HY.B, (qq => {
-           this.onReply((0, Ll.d)(HY.B, qq), performance.now())
+         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Tw.l)(GQ.P, (CC => {
+           this.onReply((0, sw.h)(GQ.P, CC), performance.now())
```

#### 856. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7378` → after: `L7357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7357) · [Before (L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7378)

```diff
-         null === this.id ? this.id = qq : qq !== this.id && (this.id = qq, this.sentMs = document.hidden ? null : Eq)
+         null === this.id ? this.id = CC : CC !== this.id && (this.id = CC, this.sentMs = document.hidden ? null : zC)
```

#### 857. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7418-L7419` → after: `L7395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7395) · [Before (L7418-L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7418-L7419)

```diff
-       lagP90Ms: null,
-       joinLagP90Ms: null
+       lagP90Ms: null
```

#### 858. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7432` → after: `L7408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7408) · [Before (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7432)

```diff
-       take(qq) {
+       take() {
```

#### 859. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7434-L7436` → after: `L7410-L7416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7410-L7416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7410-L7416) · [Before (L7434-L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7434-L7436)

```diff
-         if (this.count = 0, Eq < 30) return null;
-         const gq = this.samples.subarray(0, Eq).sort();
-         return qq.map((qq => gq[Math.min(Eq - 1, Math.floor(qq * Eq))]))
+         if (this.count = 0, CC < 30) return Yo;
+         const zC = this.samples.subarray(0, CC).sort(),
+           ZC = ZC => zC[Math.min(CC - 1, Math.floor(ZC * CC))];
+         return {
+           lagP50Ms: ZC(.5),
+           lagP90Ms: ZC(.9)
+         }
```

#### 860. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7441` → after: `L7421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7421) · [Before (L7441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7441)

```diff
-         this.word = 0, this.lagUs = 0, this.primed = !1, this.lastDrawnMs = -1, this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, this.lags = new yA, this.inJoin = !1, this.rose = !1, this.joinLags = new yA, this.joinLagP90Ms = null
+         this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new mo
```

#### 861. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7443-L7447` → after: `L7423-L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7423-L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7423-L7426) · [Before (L7443-L7447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7443-L7447)

```diff
-       onFrame(qq, Eq, gq, Yq, lq) {
-         const Oq = qq.headerWord(Xg.C.Pacing),
-           mq = qq.headerWord(Xg.C.PacingLagUs),
-           xq = (Oq >>> Xg.T.LagsShift) - (this.word >>> Xg.T.LagsShift) & Xg.T.CountMask,
-           Aq = (Oq >>> Xg.T.SwitchesShift) - (this.word >>> Xg.T.SwitchesShift) & Xg.T.CountMask,
+       onFrame(CC, zC) {
+         const ZC = CC.headerWord(yZ.O.Pacing),
+           QC = CC.headerWord(yZ.O.PacingLagUs),
+           wC = (ZC >>> yZ.kb.LagsShift) - (this.word >>> yZ.kb.LagsShift) & yZ.kb.CountMask,
```

#### 862. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7449-L7465` → after: `L7428-L7429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7428-L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7428-L7429) · [Before (L7449-L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7449-L7465)

```diff
-           uq = this.primed && xq <= 64 && Aq <= 2 && cq <= 6e4;
-         if (this.rose = 0 !== (Oq & ~this.word & Xg.T.Joining), this.word = Oq, this.lagUs = mq, this.primed = !0, 0 !== (Oq & Xg.T.Tiered)) {
-           if (0 !== (Oq & Xg.T.Joining)) this.rose && (this.inJoin = !0, this.joinLags.clear()), this.inJoin && uq && Yq && xq > 0 && this.joinLags.add(cq, xq);
-           else if (this.inJoin) {
-             var Bq, Wq;
-             this.inJoin = !1, this.joinLagP90Ms = null !== (Bq = null === (Wq = this.joinLags.take([.9])) || void 0 === Wq ? void 0 : Wq[0]) && void 0 !== Bq ? Bq : null
-           }
-           if (lq) {
-             if (uq && (this.switches += Aq, xq > 0 && this.lags.add(cq, xq)), gq) {
-               if (this.lastDrawnMs >= 0 && Eq - this.lastDrawnMs <= 250) {
-                 const qq = Eq - this.lastDrawnMs;
-                 this.tieredMs += qq, (Oq & Xg.T.AheadMask) > 0 && (this.pacedMs += qq)
-               }
-               this.lastDrawnMs = Eq
-             }
-           } else this.lastDrawnMs = -1
- ... (1 more removed lines; see GitHub link above)
+           nC = this.primed && wC <= 64 && bC <= 6e4;
+         this.word = ZC, this.lagUs = QC, this.primed = !0, nC && zC && wC > 0 && 0 !== (ZC & yZ.kb.Defaulted) && this.lags.add(bC, wC)
```

#### 863. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7468` → after: `L7432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7432) · [Before (L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7468)

```diff
-         this.takeWindow(), this.rose || (this.inJoin = !1, this.joinLags.clear()), this.lastDrawnMs = -1
+         this.lags.clear()
```

#### 864. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7471-L7479` → after: `L7435-L7472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7435-L7472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7435-L7472) · [Before (L7471-L7479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7471-L7479)

```diff
-         const Eq = this.takeWindow(),
-           gq = this.joinLagP90Ms;
-         return this.joinLagP90Ms = null, qq ? {
-           ...Eq,
-           joinLagP90Ms: gq
-         } : {
-           ...QA,
-           joinLagP90Ms: gq
-         }
+         return CC ? this.lags.take() : (this.lags.clear(), Yo)
+       }
+     }
+     var Eo = ZC(281);
+ 
+     function Xo() {
+       return Date.now() - performance.now()
+     }
+     class co {
+       constructor() {
+         this.rafs = 0, this.vq = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = Xo(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, Eo.e)(), this.onBlur = () => {
+           this.focused = !1, this.blurred = !0
+         }, this.onFocus = () => {
+           this.focused = !0
+         }, this.onLifecycle = () => {
+           this.resumed = !0
+ ... (22 more added lines; see GitHub link above)
```

#### 865. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7481-L7482` → after: `L7474-L7475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7474-L7475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7474-L7475) · [Before (L7481-L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7481-L7482)

```diff
-       unsent(qq) {
-         this.joinLagP90Ms ??= qq.joinLagP90Ms
+       restart(CC) {
+         this.rafs = 0, this.vq = 0, this.heldAtRaf = -1, this.startMs = CC, this.startClockOffsetMs = Xo(), this.blurred = !this.focused, this.resumed = !1
```

#### 866. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7484-L7494` → after: `L7477-L7478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7477-L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7477-L7478) · [Before (L7484-L7494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7484-L7494)

```diff
-       takeWindow() {
-         var qq, Eq;
-         const gq = this.tieredMs >= 2e3,
-           Yq = this.lags.take([.5, .9]),
-           lq = {
-             pacedShare: gq ? this.pacedMs / this.tieredMs : null,
-             switchesPerHour: gq ? 36e5 * this.switches / this.tieredMs : null,
-             lagP50Ms: null !== (qq = null === Yq || void 0 === Yq ? void 0 : Yq[0]) && void 0 !== qq ? qq : null,
-             lagP90Ms: null !== (Eq = null === Yq || void 0 === Yq ? void 0 : Yq[1]) && void 0 !== Eq ? Eq : null
-           };
-         return this.tieredMs = 0, this.pacedMs = 0, this.switches = 0, lq
+       stop() {
+         window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
```

#### 867. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7497-L7502` → after: `L7481-L7486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7481-L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7481-L7486) · [Before (L7497-L7502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7497-L7502)

```diff
-     var rA = gq(9197),
-       vA = gq(2700),
-       hA = gq(40645),
-       nA = gq(9191),
-       bA = gq(2728),
-       iA = gq(2714);
+     var uo = ZC(34100),
+       ro = ZC(2894),
+       so = ZC(40723),
+       To = ZC(34091),
+       ao = ZC(2795),
+       to = ZC(2903);
```

#### 868. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7528` → after: `L7513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7513) · [Before (L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7528)

```diff
-         this.shell = qq, this.tracker = new uA.e, this.gpu = new PA, this.pacing = new tA, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
+         this.shell = CC, this.tracker = new Go.c, this.gpu = new Ko, this.pacing = new Ho, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
```

#### 869. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7531-L7532` → after: `L7516-L7517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7516-L7517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7516-L7517) · [Before (L7531-L7532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7531-L7532)

```diff
-           this.checkMainStall(performance.now()), this.lastDrawnMs = -1
-         }, (0, rA.c)(qq.backend, qq.canvas, qq.adapterVendor), this.tracker.start((() => !qq.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, bA.b)("wasm", (() => {
+           this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
+         }, (0, uo.d)(CC.backend, CC.canvas, CC.adapterVendor), this.tracker.start((() => !CC.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, ao.e)("wasm", (() => {
```

#### 870. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7537` → after: `L7522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7522) · [Before (L7537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7537)

```diff
-           return `${qq.backend}, quality steps aim at up to ${iA.d.target.maxFps} fps, pixel n ${Eq}, msaa ${gq}`
+           return `${CC.backend}, quality steps aim at up to ${to.d.target.maxFps} fps, pixel n ${zC}, msaa ${ZC}`
```

#### 871. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7548` → after: `L7533-L7536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7533-L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7533-L7536) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7548)

```diff
-         this.tracker.onAnimationFrame(qq), null === (Eq = this.frameDebug) || void 0 === Eq || Eq.animationFrame()
+         this.stallGap.animationFrame(), this.tracker.onAnimationFrame(CC), null === (zC = this.frameDebug) || void 0 === zC || zC.animationFrame()
+       }
+       sendsWent(CC, zC, ZC) {
+         this.ping.onFrame(CC.headerWord(yZ.O.PingSent), zC), this.sendsStartMs = zC, this.sendsEndMs = ZC
```

#### 872. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7552` → after: `L7540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7540) · [Before (L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7552)

```diff
-         this.ping.onFrame(qq.headerWord(Xg.C.PingSent), gq);
+         this.ping.onFrame(CC.headerWord(yZ.O.PingSent), ZC);
```

#### 873. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7554-L7555` → after: `L7542-L7543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7542-L7543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7542-L7543) · [Before (L7554-L7555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7554-L7555)

```diff
-         this.pacing.onFrame(qq, Eq, "drawn" === Yq, !document.hidden, Oq.isSampling());
-         const mq = qq.headerWord(Xg.C.TickUs) / 1e3 + (0, YY.N)();
+         this.pacing.onFrame(CC, bC.isSampling());
+         const nC = CC.headerWord(yZ.O.TickUs) / 1e3 + (0, QQ.G)();
```

#### 874. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7557-L7561` → after: `L7545-L7550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7545-L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7545-L7550) · [Before (L7557-L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7557-L7561)

```diff
-         (Oq.Wy(mq), null === (lq = this.frameDebug) || void 0 === lq || lq.wasmFrame(qq, Eq, gq, Yq, Oq.isSampling(), mq), null !== this.game) && (null === (xq = this.frameDebug) || void 0 === xq || xq.inGame());
-         const Aq = Math.max(0, gq - Eq - mq);
-         if ("drawn" !== Yq) return void("paced" === Yq ? this.pacedCpuMs += Aq : "skipped" === Yq && (this.lastDrawnMs = -1));
-         this.followGame(), this.checkMainStall(Eq), Oq.onFrameStart(Eq);
-         this.gpu.onFrame(qq.headerWord(Xg.C.GpuSampled), qq.headerWord(Xg.C.GpuTimed), qq.headerWord(Xg.C.GpuFrameUs), Oq.isSampling()) && Oq.onGpuSampleStarted(), Oq.onFrameCpu(Aq + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(Eq)
+         (bC.sG(nC), null === (wC = this.frameDebug) || void 0 === wC || wC.wasmFrame(CC, zC, ZC, QC, bC.isSampling(), nC), null !== this.game) && (null === (fC = this.frameDebug) || void 0 === fC || fC.inGame());
+         const oC = this.sendsStartMs >= zC ? this.sendsEndMs - this.sendsStartMs : 0,
+           qC = Math.max(0, ZC - zC - nC - oC);
+         if ("drawn" !== QC) return void("paced" === QC ? (this.pacedCpuMs += qC, this.stallGap.paced()) : "skipped" === QC && (this.lastDrawnMs = -1));
+         this.followGame(), this.checkMainStall(zC, !0), bC.onFrameStart(zC);
+         this.gpu.onFrame(CC.headerWord(yZ.O.GpuSampled), CC.headerWord(yZ.O.GpuTimed), CC.headerWord(yZ.O.GpuFrameUs), bC.isSampling()) && bC.onGpuSampleStarted(), bC.onFrameCpu(qC + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(zC)
```

#### 875. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7565` → after: `L7554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7554) · [Before (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7565)

```diff
-         null === (qq = this.frameDebug) || void 0 === qq || qq.wasmPeekPaced(this.tracker.isSampling())
+         this.stallGap.paced(), null === (CC = this.frameDebug) || void 0 === CC || CC.wasmPeekPaced(this.tracker.isSampling())
```

#### 876. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7569` → after: `L7558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7558) · [Before (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7569)

```diff
-         this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.ping.stop()
+         this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.stallGap.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
```

#### 877. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7580` → after: `L7569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7569) · [Before (L7580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7580)

```diff
-       checkMainStall(qq) {
+       checkMainStall(CC, zC) {
```

#### 878. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7584-L7586` → after: `L7573-L7578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7573-L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7573-L7578) · [Before (L7584-L7586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7584-L7586)

```diff
-         this.lastDrawnMs = qq, this.stallPending || (gq <= 5e3 ? Eq.markFrame(qq) : (this.stallPending = !0, setTimeout((() => {
-           this.stallPending = !1, this.shell.mainStalled(gq, Eq.blockingSinceMark())
-         }), 0)))
+         this.lastDrawnMs = CC;
+         const wC = !this.stallPending && QC > 5e3,
+           bC = wC ? this.stallGap.words(zC) : "";
+         this.stallGap.restart(CC), this.stallPending || (wC ? (this.stallPending = !0, setTimeout((() => {
+           this.stallPending = !1, this.shell.mainStalled(QC, ZC.blockingSinceMark(), bC)
+         }), 0)) : ZC.markFrame(CC))
```

#### 879. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7595` → after: `L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7587) · [Before (L7595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7595)

```diff
-         if (!(Eq < VA.b)) {
+         if (!(zC < Io.c)) {
```

#### 880. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7614` → after: `L7606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7606) · [Before (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7614)

```diff
-           cq = Aq ? mq : cA.e,
+           qC = oC ? nC : (0, Po.f)(nC),
```

#### 881. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7616` → after: `L7608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7608) · [Before (L7616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7616)

```diff
-         if (this.inGameAtLastFlush = xq, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !qq) return void this.pacing.unsent(uq);
+         if (this.inGameAtLastFlush = fC, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !CC) return;
```

#### 882. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7618` → after: `L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7610) · [Before (L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7618)

```diff
-           Nq = (0, aA.r)((0, aA.p)(Bq), this.unsentPage),
+           MC = (0, Jo.u)((0, Jo.r)(WC), this.unsentPage),
```

#### 883. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7620` → after: `L7612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7612) · [Before (L7620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7620)

```diff
-             var cq, uq, Bq, Wq;
+             var qC, FC, WC, NC, MC;
```

#### 884. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7625` → after: `L7617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7617) · [Before (L7625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7625)

```diff
-               Vq = (0, NA.d)({
+               pC = (0, xo.k)({
```

#### 885. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7628` → after: `L7620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7620) · [Before (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7628)

```diff
-                 autoMsaaOff: (0, nA.e)()
+                 autoMsaaOff: (0, To.c)()
```

#### 886. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7633` → after: `L7625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7625) · [Before (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7633)

```diff
-               if ((0, xA.p)(jq)) Hq = (0, aA.b)(jq);
+               if ((0, So.t)(GC)) RC = (0, Jo.b)(GC);
```

#### 887. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7635` → after: `L7627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7627) · [Before (L7635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7635)

```diff
-               else if ((0, NA.e)(jq)) Hq = Vq[jq];
+               else if ((0, xo.l)(GC)) RC = pC[GC];
```

#### 888. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7640` → after: `L7632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7632) · [Before (L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7640)

```diff
-                 case "Zm":
+                 case "bf":
```

#### 889. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7643-L7644` → after: `L7635-L7636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7635-L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7635-L7636) · [Before (L7643-L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7643-L7644)

```diff
-                 case "Sm":
-                   Hq = (0, vA.w)((0, hA.h)().n);
+                 case "Nf":
+                   RC = (0, ro.D)((0, so.h)().n);
```

#### 890. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7646` → after: `L7638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7638) · [Before (L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7646)

```diff
-                 case "pm":
+                 case "Mf":
```

#### 891. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7649` → after: `L7641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7641) · [Before (L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7649)

```diff
-                 case "Gm":
+                 case "gf":
```

#### 892. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7652` → after: `L7644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7644) · [Before (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7652)

```diff
-                 case "Lm":
+                 case "Sf":
```

#### 893. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7655` → after: `L7647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7647) · [Before (L7655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7655)

```diff
-                 case "Jm":
+                 case "pf":
```

#### 894. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7658` → after: `L7650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7650) · [Before (L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7658)

```diff
-                 case "km":
+                 case "Pf":
```

#### 895. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7661` → after: `L7653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7653) · [Before (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7661)

```diff
-                 case "Rm":
+                 case "Gf":
```

#### 896. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7664` → after: `L7656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7656) · [Before (L7664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7664)

```diff
-                 case "Um":
+                 case "Rf":
```

#### 897. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7667` → after: `L7659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7659) · [Before (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7667)

```diff
-                 case "Fm":
+                 case "Af":
```

#### 898. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7670` → after: `L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7662) · [Before (L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7670)

```diff
-                 case "sm":
+                 case "xf":
```

#### 899. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7673` → after: `L7665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7665) · [Before (L7673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7673)

```diff
-                 case "Xm":
+                 case "Jf":
```

#### 900. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7676` → after: `L7668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7668) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7676)

```diff
-                 case "wm":
+                 case "vf":
```

#### 901. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7679` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7671) · [Before (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7679)

```diff
-                 case "Dm":
+                 case "Yf":
```

#### 902. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7682` → after: `L7674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7674) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7682)

```diff
-                 case "qx":
+                 case "df":
```

#### 903. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7685` → after: `L7677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7677) · [Before (L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7685)

```diff
-                 case "Km":
+                 case "ef":
```

#### 904. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7688` → after: `L7680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7680) · [Before (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7688)

```diff
-                 case "Cm":
+                 case "hf":
```

#### 905. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7691` → after: `L7683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7683) · [Before (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7691)

```diff
-                 case "Im":
+                 case "Kf":
```

#### 906. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7694` → after: `L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7686) · [Before (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7694)

```diff
-                 case "Ex":
+                 case "mf":
```

#### 907. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7697` → after: `L7689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7689) · [Before (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7697)

```diff
-                 case "gx":
+                 case "Hf":
```

#### 908. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7700-L7706` → after: `L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7692) · [Before (L7700-L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7700-L7706)

```diff
-                 case "Yx":
-                   Hq = gq.pacedShare;
-                   break;
-                 case "lx":
-                   Hq = gq.switchesPerHour;
-                   break;
-                 case "Ox":
+                 case "Ef":
```

#### 909. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7709` → after: `L7695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7695) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7709)

```diff
-                 case "mx":
+                 case "lf":
```

#### 910. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7712-L7716` → after: `L7698-L7699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7698-L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7698-L7699) · [Before (L7712-L7716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7712-L7716)

```diff
-                 case "Ax":
-                   Hq = gq.joinLagP90Ms;
-                   break;
-                 case "hx":
-                   Hq = (0, OA.g)(mq);
+                 case "Uf":
+                   RC = (0, Mo.h)(nC);
```

#### 911. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7718` → after: `L7701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7701) · [Before (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7718)

```diff
-                 case "zm":
+                 case "Wf":
```

#### 912. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7721-L7735` → after: `L7704-L7718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7704-L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7704-L7718) · [Before (L7721-L7735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7721-L7735)

```diff
-                 case "Bx":
-                 case "Wx":
-                 case "Nx":
-                 case "Vx":
-                 case "jx":
-                 case "Hx":
-                 case "Px":
-                 case "Qx":
-                 case "yx":
-                 case "tx":
-                 case "vx":
-                 case "nx":
-                 case "bx":
-                 case "ix":
-                 case "Zx":
+                 case "Xf":
+                 case "uf":
+                 case "rf":
+                 case "sf":
+                 case "Tf":
+                 case "af":
+                 case "tf":
+                 case "Df":
+                 case "jf":
+                 case "yf":
+                 case "Lf":
+                 case "Bf":
+                 case "kf":
+                 case "Vf":
+                 case "Co":
```

#### 913. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7738` → after: `L7721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7721) · [Before (L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7738)

```diff
-                 case "Xx":
+                 case "Go":
```

#### 914. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7741` → after: `L7724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7724) · [Before (L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7741)

```diff
-                 case "wx":
+                 case "Ro":
```

#### 915. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7744` → after: `L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7727) · [Before (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7744)

```diff
-                 case "Kx":
+                 case "Ao":
```

#### 916. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7747-L7748` → after: `L7730-L7731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7730-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7730-L7731) · [Before (L7747-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7747-L7748)

```diff
-                 case "Cx":
-                   Hq = (0, dA.d)();
+                 case "xo":
+                   RC = (0, io.c)();
```

#### 917. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7750` → after: `L7733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7733) · [Before (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7750)

```diff
-                 case "Ix":
+                 case "Jo":
```

#### 918. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7753` → after: `L7736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7736) · [Before (L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7753)

```diff
-                 case "Dx":
+                 case "Io":
```

#### 919. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7756-L7757` → after: `L7739-L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7739-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7739-L7740) · [Before (L7756-L7757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7756-L7757)

```diff
-                 case "qA":
-                   Hq = null !== (cq = Yq.b.get("gameEntrySource")) && void 0 !== cq ? cq : AA.d;
+                 case "vo":
+                   RC = null !== (qC = QC.b.get("gameEntrySource")) && void 0 !== qC ? qC : po.e;
```

#### 920. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7759-L7760` → after: `L7742-L7743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7742-L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7742-L7743) · [Before (L7759-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7759-L7760)

```diff
-                 case "EA":
-                   Hq = Eq.frameLimiter;
+                 case "eo":
+                   RC = null !== (FC = zC.frameLimiter) && void 0 !== FC ? FC : po.e;
```

#### 921. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7762-L7763` → after: `L7745-L7746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7745-L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7745-L7746) · [Before (L7762-L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7762-L7763)

```diff
-                 case "gA":
-                   Hq = (0, BA.l)();
+                 case "ho":
+                   RC = (0, Ro.k)();
```

#### 922. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7765-L7766` → after: `L7748-L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7748-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7748-L7749) · [Before (L7765-L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7765-L7766)

```diff
-                 case "YA":
-                   Hq = null !== (uq = (0, WA.b)()) && void 0 !== uq ? uq : AA.d;
+                 case "Ko":
+                   RC = null !== (WC = (0, Ao.b)()) && void 0 !== WC ? WC : po.e;
```

#### 923. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7768-L7769` → after: `L7751-L7752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7751-L7752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7751-L7752) · [Before (L7768-L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7768-L7769)

```diff
-                 case "lA":
-                   Hq = (0, BA.d)(aq.width, aq.height);
+                 case "Yo":
+                   RC = (0, Ro.e)(SC.width, SC.height);
```

#### 924. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7771-L7772` → after: `L7754-L7755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7754-L7755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7754-L7755) · [Before (L7771-L7772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7771-L7772)

```diff
-                 case "OA":
-                   Hq = (0, mA.f)(-(new Date).getTimezoneOffset());
+                 case "Ho":
+                   RC = (0, go.g)(-(new Date).getTimezoneOffset());
```

#### 925. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7774-L7775` → after: `L7757-L7758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7757-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7757-L7758) · [Before (L7774-L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7774-L7775)

```diff
-                 case "AA":
-                   Hq = null !== (Bq = qq.fallbackReason) && void 0 !== Bq ? Bq : AA.d;
+                 case "uo":
+                   RC = null !== (NC = CC.fallbackReason) && void 0 !== NC ? NC : po.e;
```

#### 926. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7777` → after: `L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7760) · [Before (L7777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7777)

```diff
-                 case "BA":
+                 case "Do":
```

#### 927. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7780` → after: `L7763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7763) · [Before (L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7780)

```diff
-                 case "WA":
+                 case "jo":
```

#### 928. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7783` → after: `L7766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7766) · [Before (L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7783)

```diff
-                 case "xA":
+                 case "Xo":
```

#### 929. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7786` → after: `L7769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7769) · [Before (L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7786)

```diff
-                 case "NA":
+                 case "yo":
```

#### 930. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7789` → after: `L7772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7772) · [Before (L7789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7789)

```diff
-                 case "aA": {
+                 case "Lo": {
```

#### 931. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7794-L7795` → after: `L7777-L7778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7777-L7778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7777-L7778) · [Before (L7794-L7795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7794-L7795)

```diff
-                 case "VA":
-                   Hq = jA.z;
+                 case "Uo":
+                   RC = vo.D;
```

#### 932. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7797-L7800` → after: `L7780-L7787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7780-L7787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7780-L7787) · [Before (L7797-L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7797-L7800)

```diff
-                 case "mA":
-                 case "cA":
-                 case "uA":
-                   Hq = AA.d;
+                 case "Eo": {
+                   const zC = CC.lS();
+                   RC = null === zC ? po.e : String(zC);
+                   break
+                 }
+                 case "ro":
+                 case "ao":
+                   RC = po.e;
```

#### 933. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7803` → after: `L7790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7790) · [Before (L7803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7803)

```diff
-                   throw new Error(`Unhandled field name: ${jq}`)
+                   throw new Error(`Unhandled field name: ${GC}`)
```

#### 934. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7805` → after: `L7792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7792) · [Before (L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7805)

```diff
-               if (void 0 === Hq) throw new Error(`Metric ${jq} has no value`);
+               if (void 0 === RC) throw new Error(`Metric ${GC} has no value`);
```

#### 935. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7817-L7823` → after: `L7804-L7810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7804-L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7804-L7810) · [Before (L7817-L7823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7817-L7823)

```diff
-             return (0, FE.b)(), qq(aq.k.Send, Eq, gq)
-           }(this.shell.writeCmd, Wq.vd, function(qq) {
-             const Eq = (0, Sq.h)((0, wE.f)(qq)),
-               gq = new Uint8Array(aq.ee.BYTES + Eq.length);
-             return new DataView(gq.buffer).setUint16(0, wE.b.AnalyticsUpdate, !0), gq.set(Eq, aq.ee.BYTES), gq
-           }(Vq))) return this.unsentPage = Nq, this.pacing.unsent(uq), void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
-         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, OA.e), (0, aA.o)(Vq, "wasm", Bq)
+             return (0, Dz.b)(), CC(gC.l.Send, zC, ZC)
+           }(this.shell.writeCmd, NC.ld, function(CC) {
+             const zC = (0, XC.f)((0, Lz.f)(CC)),
+               ZC = new Uint8Array(gC.ne.BYTES + zC.length);
+             return new DataView(ZC.buffer).setUint16(0, Lz.b.AnalyticsUpdate, !0), ZC.set(zC, gC.ne.BYTES), ZC
+           }(SC))) return this.unsentPage = MC, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
+         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Mo.d), (0, Jo.o)(SC, "wasm", WC)
```

#### 936. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7826` → after: `L7813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7813) · [Before (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7826)

```diff
-     var TA = gq(39516);
+     var Lo = ZC(39426);
```

#### 937. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7830-L7832` → after: `L7817-L7819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7817-L7819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7817-L7819) · [Before (L7830-L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7830-L7832)

```diff
-       return (0, TA.b)(((qq, gq, Yq) => Eq.lc(qq, gq, Yq)), ((Eq, gq, lq) => {
-         const Oq = `${Eq},${gq},${lq}`;
-         return Yq.has(Oq) || Yq.set(Oq, (0, GE.d)(qq, Eq, gq, lq)), Yq.get(Oq)
+       return (0, Lo.e)(((CC, ZC, QC) => zC.SF(CC, ZC, QC)), ((zC, ZC, wC) => {
+         const bC = `${zC},${ZC},${wC}`;
+         return QC.has(bC) || QC.set(bC, (0, uz.e)(CC, zC, ZC, wC)), QC.get(bC)
```

#### 938. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7835-L7836` → after: `L7822-L7823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7822-L7823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7822-L7823) · [Before (L7835-L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7835-L7836)

```diff
-     var SA = gq(39523),
-       pA = gq(40434);
+     var Bo = ZC(39432),
+       Oo = ZC(40717);
```

#### 939. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7839-L7840` → after: `L7826-L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7826-L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7826-L7827) · [Before (L7839-L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7839-L7840)

```diff
-       const Eq = null !== qq && 0 !== (aq.t.playerFlags(qq.api.apiView, 0) & aq.Pd.CursorAim);
-       Eq !== (0, pA.k)() && (0, pA.F)(Eq, null !== qq)
+       const zC = null !== CC && 0 !== (gC.w.playerFlags(CC.api.apiView, 0) & gC.ce.CursorAim);
+       zC !== (0, Oo.o)() && (0, Oo.J)(zC, null !== CC)
```

#### 940. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7844` → after: `L7831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7831) · [Before (L7844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7844)

```diff
-       return (0, jY.e)(HY.x, qq)
+       return (0, PQ.e)(GQ.H, CC)
```

#### 941. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7846-L7847` → after: `L7833-L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7833-L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7833-L7834) · [Before (L7846-L7847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7846-L7847)

```diff
-     var JA = gq(40462);
-     const kA = new Oq.f((qq => gq(42363)(`./${qq}/${qq}Client`)));
+     var Cq = ZC(40858);
+     const zq = new bC.e((CC => ZC(42396)(`./${CC}/${CC}Client`)));
```

#### 942. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7851` → after: `L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7838) · [Before (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7851)

```diff
-       RA ??= gq.e(27).then((() => gq(39093))).then((qq => {
+       Zq ??= ZC.e(27).then((() => ZC(38976))).then((CC => {
```

#### 943. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7884-L7885` → after: `L7871-L7872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7871-L7872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7871-L7872) · [Before (L7884-L7885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7884-L7885)

```diff
-         return qq.crash(jl.B, Wq), null
-       }(0, Aq.c)(dl(gq, Oq));
+         return CC.crash(Pw.x, NC), null
+       }(0, oC.e)(pw(ZC, bC));
```

#### 944. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7897` → after: `L7884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7884) · [Before (L7897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7897)

```diff
-       (0, YY.B)();
+       (0, QQ.w)();
```

#### 945. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7929` → after: `L7916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7916) · [Before (L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7929)

```diff
-           KA(lq.s), KA(El), KA((() => {
+           oq(wC.o), oq(zw), oq((() => {
```

#### 946. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7942` → after: `L7929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7929) · [Before (L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7942)

```diff
-         screenBandY: xq.l,
+         screenBandY: fC.n,
```

#### 947. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7952-L7954` → after: `L7939-L7941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7939-L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7939-L7941) · [Before (L7952-L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7952-L7954)

```diff
-           (0, mq.k)("userContextUpdated", Eq)
-         }(Bq), XA || (XA = !0, (0, mq.k)("appManagerUpdated|openInGameMenuName", (qq => {
-           !qq && (0, cq.i)().includes(cq.d) && (0, cq.j)(cq.d)
+           (0, nC.q)("userContextUpdated", zC)
+         }(WC), nq || (nq = !0, (0, nC.q)("appManagerUpdated|openInGameMenuName", (CC => {
+           !CC && (0, qC.p)().includes(qC.e) && (0, qC.s)(qC.e)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413)

#### 1. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L1-L2)

```diff
- export const id = 55;
- export const ids = [55];
+ export const id = 57;
+ export const ids = [57];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L4)

```diff
-   40353: (qq, Eq, gq) => {
+   40457: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L6-L7)

```diff
-       e: () => lq,
-       h: () => uq
+       c: () => wC,
+       f: () => FC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L14)

```diff
-       if (Eq.at !== qq.length) throw new Error(`msgpack: ${qq.length-Eq.at} bytes after the value`);
+       if (zC.at !== CC.length) throw new Error(`msgpack: ${CC.length-zC.at} bytes after the value`);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L92)

```diff
-             throw new Error(`msgpack: unknown byte 0x${qq.toString(16)} at ${this.at-1}`)
+             throw new Error(`msgpack: unknown byte 0x${CC.toString(16)} at ${this.at-1}`)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L97)

```diff
-         if (Eq + qq > this.bytes.length) throw new Error(`msgpack: ${qq} bytes past the end at ${Eq}`);
+         if (zC + CC > this.bytes.length) throw new Error(`msgpack: ${CC} bytes past the end at ${zC}`);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L169)

```diff
-           throw new Error(`msgpack: ext type ${Eq} of ${qq} bytes`)
+           throw new Error(`msgpack: ext type ${zC} of ${CC} bytes`)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L210)

```diff
-               if (Object.getPrototypeOf(qq) !== Object.prototype && null !== Object.getPrototypeOf(qq)) throw new Error(`msgpack: can't encode a ${null!==(gq=null===(Yq=qq.constructor)||void 0===Yq?void 0:Yq.name)&&void 0!==gq?gq:"object"}`);
+               if (Object.getPrototypeOf(CC) !== Object.prototype && null !== Object.getPrototypeOf(CC)) throw new Error(`msgpack: can't encode a ${null!==(ZC=null===(QC=CC.constructor)||void 0===QC?void 0:QC.name)&&void 0!==ZC?ZC:"object"}`);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L255)

```diff
-   43053: (qq, Eq, gq) => {
+   50717: (CC, zC, ZC) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L261-L269` → after: `L261-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L261-L268) · [Before (L261-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L261-L269)

```diff
-     var Yq = gq(163),
-       lq = gq(1792),
-       Oq = gq(39012),
-       mq = gq(1758),
-       xq = gq(40353),
-       Aq = gq(4622),
-       cq = gq(40599),
-       uq = gq(40685);
-     const Bq = Uint8Array.of(13, ...(0, xq.h)(Yq.d));
+     var QC = ZC(134),
+       wC = ZC(1152),
+       bC = ZC(36369),
+       nC = ZC(40457),
+       fC = ZC(4727),
+       oC = ZC(40521),
+       qC = ZC(40745);
+     const FC = Uint8Array.of(13, ...(0, nC.f)(QC.g));
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L291` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L290) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L291)

```diff
-       } = gq, mq = () => (0, uq.h)(Eq.endpoint, Eq.roomName, Eq.joinOptions, gq), {
+       } = ZC, nC = () => (0, qC.l)(zC.endpoint, zC.roomName, zC.joinOptions, ZC), {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L293-L294` → after: `L292-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L292-L293) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L293-L294)

```diff
-       } = gq, Aq = xq ? null !== (Yq = await xq.take(Oq)) && void 0 !== Yq ? Yq : await xq.reserveInstead(mq, Oq) : await mq();
-       return (0, lq.o)(Oq), jq(qq, Eq.endpoint, Aq, gq, !1)
+       } = ZC, oC = fC ? null !== (QC = await fC.take(bC)) && void 0 !== QC ? QC : await fC.reserveInstead(nC, bC) : await nC();
+       return (0, wC.n)(bC), pC(CC, zC.endpoint, oC, ZC, !1)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L298-L299` → after: `L297-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L297-L298) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L298-L299)

```diff
-       const mq = await (0, uq.f)(Eq, gq, Yq, Oq);
-       return (0, lq.o)(Oq.signal), jq(qq, Eq, mq, Oq, !0)
+       const nC = await (0, qC.i)(zC, ZC, QC, bC);
+       return (0, wC.n)(bC.signal), pC(CC, zC, nC, bC, !0)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L303` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L302) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L303)

```diff
-       const Yq = (0, uq.i)(qq, Eq);
+       const QC = (0, qC.p)(CC, zC);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L310` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L309) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L310)

```diff
-       return (null !== (Yq = qq.setTimer) && void 0 !== Yq ? Yq : (qq, Eq) => {
+       return (null !== (QC = CC.setTimer) && void 0 !== QC ? QC : (CC, zC) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L322` → after: `L321-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L321-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L321-L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L322)

```diff
-       let Nq = null,
+       let NC = !1,
+         MC = null,
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L329)

```diff
-         oq = !0, null === (Eq = aq) || void 0 === Eq || Eq.reject(new cq.e("the room socket closed before the resume", "closed", qq.code))
+         RC = !0, null === (zC = pC) || void 0 === zC || zC.reject(new oC.d("the room socket closed before the resume", "closed", CC.code))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L334-L336` → after: `L334-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L334-L336) · [Before (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L334-L336)

```diff
-           if (qq === (xq ? Aq.u.Resumed : Aq.u.Activated)) Hq = !0, null === (gq = aq) || void 0 === gq || gq.resolve();
-           else if (!xq || qq !== Aq.u.ResumeRefused && qq !== Aq.u.Activated)
-             if (qq === Aq.u.Error) {
+           if (CC === (nC ? fC.J.Resumed : fC.J.Activated)) GC = !0, null === (ZC = pC) || void 0 === ZC || ZC.resolve();
+           else if (!nC || CC !== fC.J.ResumeRefused && CC !== fC.J.Activated)
+             if (CC === fC.J.Error) {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L338)

```diff
-               null === (Yq = aq) || void 0 === Yq || Yq.reject(new cq.e(`the room refused the join (code ${Eq})`, "roomError", Eq))
+               null === (QC = pC) || void 0 === QC || QC.reject(new oC.d(`the room refused the join (code ${zC})`, "roomError", zC))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L341)

```diff
-               null === (lq = aq) || void 0 === lq || lq.reject(new cq.e("the room socket closed before the join", "closed", Eq))
+               null === (wC = pC) || void 0 === wC || wC.reject(new oC.d("the room socket closed before the join", "closed", zC, null, NC))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L345)

```diff
-             null === (Oq = aq) || void 0 === Oq || Oq.reject(new cq.o("the core refused the resume: it held no game"))
+             null === (bC = pC) || void 0 === bC || bC.reject(new oC.r("the core refused the resume: it held no game"))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L352)

```diff
-       if (null === tq) throw yq(), new cq.e("the core could not take the room socket", "attach");
+       if (null === IC) throw JC(), new oC.d("the core could not take the room socket", "attach");
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L355)

```diff
-       const vq = xq ? null : new mq.c(Oq.e, (() => {
+       const vC = nC ? null : new bC.b((() => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L357)

```diff
-         null === (Eq = qq.flushNet) || void 0 === Eq || Eq.call(qq), null === (gq = aq) || void 0 === gq || gq.reject(new Oq.f)
+         null === (zC = CC.flushNet) || void 0 === zC || zC.call(CC), null === (ZC = pC) || void 0 === ZC || ZC.reject(new bC.f(NC ? "socket" : "socket_unopened"))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L362-L363` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L367-L368) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L362-L363)

```diff
-         if (hq = !0, yq(), xq && (Wq.removeEventListener("close", Pq), !Hq && !(null !== uq && void 0 !== uq && uq.aborted && (0, lq.e)(uq) instanceof cq.p))) return void(oq || qq.closeSocket(tq));
-         Hq && qq.leaveRoom(tq) || qq.sendRaw(tq, cq.k) ? dq(Yq, (() => {
+         if (eC = !0, JC(), nC && (WC.removeEventListener("close", AC), !GC && !(null !== qC && void 0 !== qC && qC.aborted && (0, wC.g)(qC) instanceof oC.t))) return void(RC || CC.closeSocket(IC));
+         GC && CC.leaveRoom(IC) || CC.sendRaw(IC, oC.m) ? SC(QC, (() => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L365` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L370) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L365)

```diff
-         }), cq.h) : qq.closeSocket(tq)
+         }), oC.g) : CC.closeSocket(IC)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L372` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L377) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L372)

```diff
-             gq((0, lq.e)(uq))
+             ZC((0, wC.g)(qC))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L385` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L390) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L385)

```diff
-         }))
+         })), null === vC || void 0 === vC || vC.answered()
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L405` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L410) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L405)

```diff
-         const lq = Vq(qq, await (0, uq.f)(qq, Eq, gq, Yq), Yq);
+         const wC = gC(CC, await (0, qC.i)(CC, zC, ZC, QC), QC);
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L409` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L414) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L409)

```diff
-           }), cq.h);
+           }), oC.g);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L411` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L416) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L411)

```diff
-             lq.send(cq.k)
+             wC.send(oC.m)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L1-L2)

```diff
- export const id = 56;
- export const ids = [56];
+ export const id = 58;
+ export const ids = [58];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L4)

```diff
-   36828: (qq, Eq, gq) => {
+   36664: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L9)

```diff
-       if (!Eq.ok) throw new Error(`Fetching ${qq} failed: HTTP ${Eq.status}`);
+       if (!zC.ok) throw new Error(`Fetching ${CC} failed: HTTP ${zC.status}`);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L17)

```diff
-   40483: (qq, Eq, gq) => {
+   40885: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L23-L32` → after: `L23-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L23-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L23-L33) · [Before (L23-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L23-L32)

```diff
-     var Yq = gq(2797),
-       lq = gq(36380),
-       Oq = gq(40490),
-       mq = gq(1046),
-       xq = gq(611),
-       Aq = gq(40498),
-       cq = (gq(40515), gq(36828)),
-       uq = gq(40526),
-       Bq = gq(40534),
-       Wq = gq(40559);
+     var QC = ZC(2848),
+       wC = ZC(36201),
+       bC = ZC(40697),
+       nC = ZC(1029),
+       fC = ZC(615),
+       oC = ZC(40542),
+       qC = (ZC(40598), ZC(36664)),
+       FC = ZC(40561),
+       WC = ZC(40540),
+       NC = ZC(40810),
+       MC = ZC(40677);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L45-L47` → after: `L46-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L46-L48) · [Before (L45-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L45-L47)

```diff
-         if ((0, Aq.p)(qq)) return (0, Bq.Q)("none"), void Pq("none");
-         if ("wasm" !== (0, xq.g)(window.location.search) && null !== (0, uq.c)(qq, (0, uq.g)(qq, !0))) return (0, Bq.Q)("none"), void Pq("none");
-         (0, Bq.Q)(qq.backend);
+         if ((0, oC.q)(CC)) return (0, WC.S)("none"), void xC("none");
+         if ("wasm" !== (0, fC.h)(window.location.search) && null !== (0, FC.e)(CC, (0, FC.g)(CC))) return (0, WC.S)("none"), void xC("none");
+         (0, WC.S)(CC.backend);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L50-L51` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L51-L52) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L50-L51)

```diff
-         const gq = "unloaded" === (0, Yq.B)();
-         if (gq && (0, Bq.l)(), !await (0, lq.n)(Eq, Oq.c)) return void console.warn(`${Nq} the join's early wasm load failed: the boot loads the client itself`);
+         const ZC = "unloaded" === (0, QC.y)();
+         if (ZC && (0, WC.m)(), !await (0, NC.b)(zC)) return void console.warn(`${gC} the join's early wasm load failed: the boot loads the client itself`);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L53` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L54) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L53)

```diff
-         const cq = (0, lq.j)(Eq.name);
+         const bC = (0, wC.g)(zC.name);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L59` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L60) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L59)

```diff
-         }) : console.warn(`${Nq} the join's wasm load left no record of how it compiled ${Eq.name}`)
+         }) : console.warn(`${gC} the join's wasm load left no record of how it compiled ${zC.name}`)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L61` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L62) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L61)

```diff
-         console.warn(`${Nq} the join's early wasm load did not start: the boot loads the client itself`, qq)
+         console.warn(`${gC} the join's early wasm load did not start: the boot loads the client itself`, CC)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L78` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L79) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L78)

```diff
-         const gq = null !== (Eq = qq.joinStarted) && void 0 !== Eq ? Eq : () => !1;
+         const ZC = null !== (zC = CC.joinStarted) && void 0 !== zC ? zC : () => !1;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L87-L88` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L88-L89) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L87-L88)

```diff
-         const Eq = await (0, Bq.g)();
-         null === Eq || qq() || "unloaded" !== (0, Yq.B)() || (Hq = Eq.name, await (0, lq.b)([Eq, Oq.c], "low"))
+         const zC = await (0, WC.h)();
+         null === zC || CC() || "unloaded" !== (0, QC.y)() || (RC = zC.name, await (0, wC.b)([zC, bC.e], "low"))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L90` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L91) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L90)

```diff
-         console.warn(`${Nq} the compile ahead of the join did not start: the join loads the client itself`, qq)
+         console.warn(`${gC} the compile ahead of the join did not start: the join loads the client itself`, CC)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L105` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L106) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L105)

```diff
-               const qq = await fetch(`${gq.p}static/js/bbb6l5.wasmJoinFiles.json`, {
+               const CC = await fetch(`${ZC.p}static/js/w4ddu.wasmJoinFiles.json`, {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L109-L110` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L110-L111) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L109-L110)

```diff
-               if (!qq.ok) throw new Error(`HTTP ${qq.status}`);
-               if (/\bno-store\b/.test(null !== (Yq = qq.headers.get("Cache-Control")) && void 0 !== Yq ? Yq : "")) return !1;
+               if (!CC.ok) throw new Error(`HTTP ${CC.status}`);
+               if (/\bno-store\b/.test(null !== (QC = CC.headers.get("Cache-Control")) && void 0 !== QC ? QC : "")) return !1;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L115` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L116) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L115)

```diff
-               return console.warn(`${Nq} the join's chunk list did not load: the join downloads its chunks itself`, Oq), !qq()
+               return console.warn(`${gC} the join's chunk list did not load: the join downloads its chunks itself`, bC), !CC()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L120` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L121) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L120)

```diff
-               const qq = `${gq.p}${mq}`;
+               const CC = `${ZC.p}${nC}`;
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L122` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L123) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L122)

```diff
-                 console.warn(`${Nq} prefetching ${qq} failed`, Eq)
+                 console.warn(`${gC} prefetching ${CC} failed`, zC)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L127-L128` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L128-L129) · [Before (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L127-L128)

```diff
-         const Yq = [(0, cq.c)((0, Wq.e)())];
-         (0, Wq.c)(Eq) && Yq.push((0, cq.c)((0, Wq.g)()));
+         const QC = [(0, qC.c)((0, MC.f)())];
+         (0, MC.e)(zC) && QC.push((0, qC.c)((0, MC.j)()));
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L131` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L132) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L131)

```diff
-         console.warn(`${Nq} the prefetch failed: the join downloads the client itself`, qq)
+         console.warn(`${gC} the prefetch failed: the join downloads the client itself`, CC)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (134 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47)

#### 1. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1-L2)

```diff
- export const id = 57;
- export const ids = [57];
+ export const id = 59;
+ export const ids = [59];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L4)

```diff
-   38611: (qq, Eq, gq) => {
+   38454: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L7)

```diff
-       f: () => Oq
+       c: () => bC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L17)

```diff
-       return null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : null
+       return null !== (zC = QC.get(CC)) && void 0 !== zC ? zC : null
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L20)

```diff
-   38638: (qq, Eq, gq) => {
+   38487: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L22)

```diff
-       e: () => xq
+       d: () => fC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L24)

```diff
-     var Yq = gq(1214);
+     var QC = ZC(1169);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L56-L57` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L56-L57) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L56-L57)

```diff
-         } = this, Vq = [uq, Bq, Wq, `${Nq}px`, aq].filter(Boolean).join(" "), dq = [
-           [Wq, `${Nq}px`, Oq(aq)].filter(Boolean).join(" "), `${Nq}px sans-serif`
+         } = this, SC = [FC, WC, NC, `${MC}px`, gC].filter(Boolean).join(" "), pC = [
+           [NC, `${MC}px`, bC(gC)].filter(Boolean).join(" "), `${MC}px sans-serif`
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L68)

```diff
-           mq || (mq = !0, Promise.resolve().then((() => gq(1046))).then((gq => {
+           nC || (nC = !0, Promise.resolve().then((() => ZC(1029))).then((ZC => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L70)

```diff
-               lV: lq
+               IS: wC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L74-L75` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L74-L75) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L74-L75)

```diff
-               jN: Eq,
-               drawnWith: null !== Yq && void 0 !== Yq ? Yq : "the kept font, scaled"
+               lM: zC,
+               drawnWith: null !== QC && void 0 !== QC ? QC : "the kept font, scaled"
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L101)

```diff
-         Eq = (0, Yq.W)(Eq);
+         zC = (0, QC.bb)(zC);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L130)

```diff
-         "top" === this.vAlign ? Bq = lq + xq : "bottom" === this.vAlign ? (Bq = cq - dq, Hq = cq) : (Hq = lq + mq / 2, Bq -= jq), Wq.forEach((Eq => {
+         "top" === this.vAlign ? WC = wC + fC : "bottom" === this.vAlign ? (WC = qC - pC, GC = qC) : (GC = wC + nC / 2, WC -= PC), NC.forEach((zC => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L157)

```diff
-           const Eq = uq > 0 ? Bq + Yq : Bq;
+           const zC = FC > 0 ? WC + QC : WC;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L163)

```diff
-   38642: (qq, Eq, gq) => {
+   38493: (CC, zC, ZC) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L166-L169` → after: `L166-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L166-L169) · [Before (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L166-L169)

```diff
-       g: () => aq,
-       k: () => Wq,
-       l: () => uq,
-       n: () => Bq
+       f: () => gC,
+       j: () => NC,
+       n: () => FC,
+       q: () => WC
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L171-L172` → after: `L171-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L171-L172) · [Before (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L171-L172)

```diff
-     var Yq = gq(4096),
-       lq = gq(307);
+     var QC = ZC(4179),
+       wC = ZC(326);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L185)

```diff
-         return gq && "object" === typeof gq ? gq : Eq
+         return ZC && "object" === typeof ZC ? ZC : zC
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L187)

```diff
-         return void 0 !== gq && console.error(`Couldn't parse ${gq}`, Yq), Eq
+         return void 0 !== ZC && console.error(`Couldn't parse ${ZC}`, QC), zC
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L197-L199` → after: `L197-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L197-L199) · [Before (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L197-L199)

```diff
-       return null !== Eq && void 0 !== Eq ? Eq : {
-         status: null !== (gq = qq.status) && void 0 !== gq ? gq : "loading",
-         entries: null !== (Yq = qq.entries) && void 0 !== Yq ? Yq : []
+       return null !== zC && void 0 !== zC ? zC : {
+         status: null !== (ZC = CC.status) && void 0 !== ZC ? ZC : "loading",
+         entries: null !== (QC = CC.entries) && void 0 !== QC ? QC : []
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L204)

```diff
-       return "number" === typeof qq && Number.isFinite(qq) && qq > 0 ? qq : Eq
+       return "number" === typeof CC && Number.isFinite(CC) && CC > 0 ? CC : zC
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L225)

```diff
-       qq.setTransform(1, 0, 0, 1, 0, 0), qq.fillStyle = lq.M.defaultNameTagBackground, qq.fillRect(0, 0, Eq, gq), qq.scale(Eq / mq.layoutWidth, gq / mq.layoutHeight), qq.translate((mq.layoutWidth - Oq) / 2, 0),
+       CC.setTransform(1, 0, 0, 1, 0, 0), CC.fillStyle = wC.H.defaultNameTagBackground, CC.fillRect(0, 0, zC, ZC), CC.scale(zC / nC.layoutWidth, ZC / nC.layoutHeight), CC.translate((nC.layoutWidth - bC) / 2, 0),
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L237)

```diff
-           } = lq.M;
+           } = wC.H;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L241)

```diff
-               qq.font = `bold ${lq}px 'Jetbrains Mono', monospace`, qq.fillStyle = Oq, qq.textAlign = xq;
+               CC.font = `bold ${wC}px 'Jetbrains Mono', monospace`, CC.fillStyle = bC, CC.textAlign = fC;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L244)

```diff
-                 for (; Aq.length > 0 && qq.measureText(`${Aq}\u2026`).width > mq;) Aq = Aq.slice(0, -1);
+                 for (; oC.length > 0 && CC.measureText(`${oC}\u2026`).width > nC;) oC = oC.slice(0, -1);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L252)

```diff
-             rq = null === Hq ? null : (0, lq.wc)(Hq),
+             iC = null === GC ? null : (0, wC.ac)(GC),
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L254` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L254) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L254)

```diff
-             hq = dq(Nq.entries, Yq.k),
+             eC = pC(MC.entries, QC.l),
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L269)

```diff
-             zq = jq(hq, void 0 === Mq || Mq.value === (null === Tq || void 0 === Tq ? void 0 : Tq.value) ? Tq : null),
+             lC = PC(eC, void 0 === HC || HC.value === (null === EC || void 0 === EC ? void 0 : EC.value) ? EC : null),
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L275)

```diff
-             Gq = null !== (mq = null !== (uq = null === Zq || void 0 === Zq ? void 0 : Zq.rank) && void 0 !== uq ? uq : pq(bq, Sq)) && void 0 !== mq ? mq : pq(hq, zq);
+             uC = null !== (nC = null !== (FC = null === dC || void 0 === dC ? void 0 : dC.rank) && void 0 !== FC ? FC : cC(KC, XC)) && void 0 !== nC ? nC : cC(eC, lC);
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L277)

```diff
-           const Lq = [...nq ? zq : [], ...iq ? [] : Sq],
+           const rC = [...hC ? lC : [], ...YC ? [] : XC],
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L283-L285` → after: `L283-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L283-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L283-L285) · [Before (L283-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L283-L285)

```diff
-           yq(`TOP ${Yq.k}  /  ALL TIME`, 24, 52, 28, Pq, 976), yq(Vq ? String(null !== (Bq = Eq.title) && void 0 !== Bq ? Bq : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, oq, 976), yq("RANK", 32, 174, 28, Pq, Uq - 40), yq("PLAYER", Uq, 174, 28, Pq, Fq), yq(Vq ? Stri … [truncated]
-           const sq = (Oq - 232) / (Yq.k + cq + xq),
-             Xq = 208 + Yq.k * sq,
+           JC(`TOP ${QC.l}  /  ALL TIME`, 24, 52, 28, AC, 976), JC(SC ? String(null !== (WC = zC.title) && void 0 !== WC ? WC : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, RC, 976), JC("RANK", 32, 174, 28, AC, tC - 40), JC("PLAYER", tC, 174, 28, AC, DC), JC(SC ? Stri … [truncated]
+           const jC = (bC - 232) / (QC.l + qC + fC),
+             yC = 208 + QC.l * jC,
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L289-L290` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L289-L290) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L289-L290)

```diff
-               qq.fillStyle = Oq ? Qq : oq, qq.globalAlpha = Oq ? .15 : lq ? .035 : 0, qq.fillRect(24, Yq - sq / 2 + 1, 976, sq - 2), qq.globalAlpha = 1;
-               const mq = Oq ? Qq : oq;
+               CC.fillStyle = bC ? xC : RC, CC.globalAlpha = bC ? .15 : wC ? .035 : 0, CC.fillRect(24, QC - jC / 2 + 1, 976, jC - 2), CC.globalAlpha = 1;
+               const nC = bC ? xC : RC;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L302)

```diff
-             yq(Eq, 512, Yq - 28, 40, qq ? lq.M.redUiText : oq, 960, "center"), yq(gq, 512, Yq + 27, 30, Pq, 960, "center")
+             JC(zC, 512, QC - 28, 40, CC ? wC.H.redUiText : RC, 960, "center"), JC(ZC, 512, QC + 27, 30, AC, 960, "center")
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L308` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L308) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L308)

```diff
-               gq = `YOUR RANK #${Aq.format(Gq)}${null===Zq?"":` of ${Aq.format(Zq.total)}`}`;
+               ZC = `YOUR RANK #${oC.format(uC)}${null===dC?"":` of ${oC.format(dC.total)}`}`;
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L311)

```diff
-             yq(gq, 512, Cq - (Eq > 0 ? 15 : 0), Yq, Qq, 960, "center"), Eq > 0 && yq(`Tied with ${Aq.format(Eq)} other${1===Eq?"":"s"}`, 512, Cq + 24, 24, Pq, 960, "center")
+             JC(ZC, 512, BC - (zC > 0 ? 15 : 0), QC, xC, 960, "center"), zC > 0 && JC(`Tied with ${oC.format(zC)} other${1===zC?"":"s"}`, 512, BC + 24, 24, AC, 960, "center")
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L315)

```diff
-           if (iq) yq(`You're in the top ${Yq.k}!`, 512, Iq, 40, Qq, 960, "center");
+           if (YC) JC(`You're in the top ${QC.l}!`, 512, OC, 40, xC, 960, "center");
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L336)

```diff
-   38817: (qq, Eq, gq) => {
+   38692: (CC, zC, ZC) => {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L339)

```diff
-       e: () => Oq
+       h: () => bC
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L365)

```diff
-   43043: (qq, Eq, gq) => {
+   50695: (CC, zC, ZC) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L372-L373` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L372-L373) · [Before (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L372-L373)

```diff
-     var Yq = gq(2805),
-       lq = gq(600);
+     var QC = ZC(2856),
+       wC = ZC(603);
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L383` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L383) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L383)

```diff
-         Eq.wasm = null !== (gq = null === qq || void 0 === qq ? void 0 : qq.cB()) && void 0 !== gq ? gq : Eq.wasm
+         zC.wasm = null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.YW()) && void 0 !== ZC ? ZC : zC.wasm
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L392` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L392) · [Before (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L392)

```diff
-         } = await Promise.resolve().then((() => gq(2744)));
+         } = await Promise.resolve().then((() => ZC(2814)));
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L400)

```diff
-       Promise.resolve().then((() => gq(40687))).then((gq => {
+       Promise.resolve().then((() => ZC(40574))).then((ZC => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L406)

```diff
-         console.warn(`${Oq} ${qq} didn't load, and the report couldn't be sent`, Yq.error, Eq)
+         console.warn(`${bC} ${CC} didn't load, and the report couldn't be sent`, QC.error, zC)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L446)

```diff
-             const gq = qq.ZOq(Eq);
+             const ZC = CC.WbC(zC);
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L465)

```diff
-         fetch: async () => xq(await (0, Yq.P)(Nq(), {
+         fetch: async () => fC(await (0, QC.M)(MC(), {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L478)

```diff
-       return gq(43046)
+       return ZC(50703)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L480-L500` → after: `L480-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L480-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L480-L502) · [Before (L480-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L480-L500)

```diff
-     var aq = gq(2797),
-       Vq = gq(36380),
-       dq = gq(40490),
-       jq = gq(1195),
-       Hq = gq(289),
-       oq = gq(611),
-       Pq = gq(40498),
-       Qq = gq(40747),
-       yq = (gq(40515), gq(40700)),
-       tq = gq(40707),
-       rq = gq(40714),
-       vq = gq(40508),
-       hq = gq(40762),
-       nq = gq(40765),
-       bq = gq(40534),
-       iq = gq(40636),
- ... (5 more removed lines; see GitHub link above)
+     var gC = ZC(2848),
+       SC = ZC(1149),
+       pC = ZC(304),
+       PC = ZC(296),
+       GC = ZC(615),
+       RC = ZC(4727),
+       AC = ZC(40542),
+       xC = ZC(40764),
+       JC = (ZC(40598), ZC(40617)),
+       IC = ZC(40624),
+       iC = ZC(40633),
+       vC = ZC(40552),
+       eC = ZC(40787),
+       hC = ZC(40795),
+       KC = ZC(40540),
+       YC = ZC(40810),
+ ... (7 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L515-L517` → after: `L517-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L517-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L517-L519) · [Before (L515-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L515-L517)

```diff
-         gq = (0, Pq.B)(qq),
-         Yq = (0, Pq.l)(qq);
-       return null !== gq && null !== Yq && "function" === typeof Eq.nOq && "function" === typeof Eq.bOq && "function" === typeof Eq.iOq ? Eq : null
+         ZC = (0, AC.O)(CC),
+         QC = (0, AC.o)(CC);
+       return null !== ZC && null !== QC && "function" === typeof zC.fbC && "function" === typeof zC.obC && "function" === typeof zC.FbC ? zC : null
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L521` → after: `L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L523) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L521)

```diff
-       let [Yq, lq] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [qq, Eq], Oq = Math.min(Number.isFinite(gq) && gq > 0 ? gq : 1, 2);
+       let [QC, wC] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [CC, zC], bC = Math.min(Number.isFinite(ZC) && ZC > 0 ? ZC : 1, 2);
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L527` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L529) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L527)

```diff
-       return gq(43048)
+       return ZC(50712)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L529-L530` → after: `L531-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L531-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L531-L533) · [Before (L529-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L529-L530)

```diff
-     async function Iq(qq, Eq) {
-       "lost" === qq && (0, bq.w)();
+     async function VC(CC, zC, QC) {
+       let wC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       "lost" === CC && (0, KC.z)();
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L532` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L535) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L532)

```diff
-       if (null === Yq || (0, Pq.p)(Yq) || (0, bq.c)()) return;
+       if (null === bC || (0, AC.q)(bC) || (0, KC.b)()) return;
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L535-L538` → after: `L538-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L538-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L538-L595) · [Before (L535-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L535-L538)

```diff
-       const Oq = lq ? (0, Pq.K)(qq) : null;
-       if (null !== Oq) {
-         const gq = `WebGPU failed at home (${qq}${void 0===Eq?"":`: ${Eq instanceof Error?Eq.message:(0,Tq.j)(Eq)}`}) and ${Oq}`;
-         return console.warn(`${Sq} ${gq}: the previews stop`, null !== Eq && void 0 !== Eq ? Eq : ""), void(0, bq.o)(gq)
+       const oC = fC && (0, PC.o)(bC.adapter, null !== QC && void 0 !== QC ? QC : null, "lost" === CC, wC),
+         qC = fC ? (0, AC.W)(CC) : null;
+       if (null === qC) {
+         fC || (0, GC.v)(), (0, KC.o)();
+         try {
+           await async function(CC, zC, QC, wC, bC) {
+             let {
+               restoreLost: fC,
+               adapterRemembered: oC
+             } = bC;
+             const qC = (0, gC.P)(),
+               {
+                 flushCrashReports: FC,
+                 reportRenderReload: WC
+               } = await Promise.resolve().then((() => ZC(40574)));
+             WC(CC.backend, wC, nC(qC ? (0, gC.z)() : null), {
+ ... (42 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L570-L571` → after: `L601-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L601-L602) · [Before (L570-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L570-L571)

```diff
-         if (null === qq || (0, Pq.p)(qq)) return null;
-         if (await (0, Vq.n)(await qq.load(), dq.c), !(0, aq.P)()) return null
+         if (null === CC || (0, AC.q)(CC)) return null;
+         if (await (0, YC.b)(await CC.load()), !(0, gC.P)()) return null
```
