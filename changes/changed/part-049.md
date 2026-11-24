# Changed — Bundle Modifications Report (Part 049 / 141)

- **Updated at**: `2026-11-25T05:21 JST`
- **Part**: `49 / 141` (**424** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 048](part-048.md) · [Part 050 →](part-050.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/255.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9 · continued)

- **File**: `bundles/bloxd.io/chunks/js/255.js` (790 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c)

#### 769. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7496` → after: `L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7496) · [Before (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7496)

```diff
-           return TT || (TT = this.KF().activeCamera), this.getAbsolutePosition().subtract(TT.globalPosition).length()
+           return BB || (BB = this.aY().activeCamera), this.getAbsolutePosition().subtract(BB.globalPosition).length()
```

#### 770. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7499` → after: `L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7499) · [Before (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7499)

```diff
-           const zT = kT.e.Clone((() => new TT(UT, this.KF())), this);
+           const nB = UB.b.Clone((() => new BB(jB, this.aY())), this);
```

#### 771. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7510-L7511` → after: `L7510-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7510-L7511) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7510-L7511)

```diff
-           const UT = kT.e.Serialize(this, TT);
-           return UT.type = this.getClassName(), UT.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(UT), UT.localMatrix = this.getPivotMatrix().cWT(), UT.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (UT.HV = !0), kT.e.AppendSerializedAnimation … [truncated]
+           const jB = UB.b.Serialize(this, BB);
+           return jB.type = this.getClassName(), jB.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(jB), jB.localMatrix = this.getPivotMatrix().nQB(), jB.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (jB.kY = !0), UB.b.AppendSerializedAnimation … [truncated]
```

#### 772. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7519` → after: `L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7519) · [Before (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7519)

```diff
-           if (this.KF().stopAnimation(this), this.KF().removeTransformNode(this), this._parentContainer) {
+           if (this.aY().stopAnimation(this), this.aY().removeTransformNode(this), this._parentContainer) {
```

#### 773. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7535` → after: `L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7535) · [Before (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7535)

```diff
-           UT && (this.rotationQuaternion ? (zT = this.rotationQuaternion.clone(), this.rotationQuaternion.J9(0, 0, 0, 1)) : this.rotation && (WT = this.rotation.clone(), this.rotation.J9(0, 0, 0)));
+           jB && (this.rotationQuaternion ? (nB = this.rotationQuaternion.clone(), this.rotationQuaternion.U3(0, 0, 0, 1)) : this.rotation && (QB = this.rotation.clone(), this.rotation.U3(0, 0, 0)));
```

#### 774. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7541` → after: `L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7541) · [Before (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7541)

```diff
-           return this.gp.scaleInPlace(HT), UT && (this.rotationQuaternion && zT ? this.rotationQuaternion.Gw(zT) : this.rotation && WT && this.rotation.Gw(WT)), this
+           return this.pp.scaleInPlace(uB), jB && (this.rotationQuaternion && nB ? this.rotationQuaternion.jH(nB) : this.rotation && QB && this.rotation.jH(QB)), this
```

#### 775. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7548` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7548) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7548)

```diff
-         UT = [(0, HT.J)("position")], mT = [(0, HT.J)("rotation")], WT = [(0, HT.B)("rotationQuaternion")], zT = [(0, HT.J)("gp")], MT = [(0, HT.L)("billboardMode")], gT = [(0, HT.L)()], pT = [(0, HT.L)("infiniteDistance")], BT = [(0, HT.L)()], ZT = [(0, HT.L)()], (0, nT.h)(null, … [truncated]
+         jB = [(0, uB.x)("position")], zB = [(0, uB.x)("rotation")], QB = [(0, uB.t)("rotationQuaternion")], nB = [(0, uB.x)("pp")], dB = [(0, uB.A)("billboardMode")], IB = [(0, uB.A)()], sB = [(0, uB.A)("infiniteDistance")], JB = [(0, uB.A)()], mB = [(0, uB.A)()], (0, NB.e)(null, … [truncated]
```

#### 776. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7561` → after: `L7561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7561) · [Before (L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7561)

```diff
-         }, vT, fT), (0, nT.h)(null, null, mT, {
+         }, kB, GB), (0, NB.e)(null, null, zB, {
```

#### 777. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7574` → after: `L7574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7574) · [Before (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7574)

```diff
-         }, qT, iT), (0, nT.h)(null, null, WT, {
+         }, LB, gB), (0, NB.e)(null, null, QB, {
```

#### 778. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7587` → after: `L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7587) · [Before (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7587)

```diff
-         }, bT, OT), (0, nT.h)(null, null, zT, {
+         }, tB, SB), (0, NB.e)(null, null, nB, {
```

#### 779. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7600` → after: `L7600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7600) · [Before (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7600)

```diff
-         }, eT, YT), (0, nT.h)(null, null, MT, {
+         }, MB, EB), (0, NB.e)(null, null, dB, {
```

#### 780. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7613` → after: `L7613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7613) · [Before (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7613)

```diff
-         }, JT, xT), (0, nT.h)(null, null, gT, {
+         }, iB, qB), (0, NB.e)(null, null, IB, {
```

#### 781. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7626` → after: `L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7626) · [Before (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7626)

```diff
-         }, dT, wT), (0, nT.h)(null, null, pT, {
+         }, fB, oB), (0, NB.e)(null, null, sB, {
```

#### 782. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7639` → after: `L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7639) · [Before (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7639)

```diff
-         }, tT, aT), (0, nT.h)(null, null, BT, {
+         }, HB, DB), (0, NB.e)(null, null, JB, {
```

#### 783. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7652` → after: `L7652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7652) · [Before (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7652)

```diff
-         }, yT, XT), (0, nT.h)(null, null, ZT, {
+         }, FB, YB), (0, NB.e)(null, null, mB, {
```

#### 784. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7671` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7671) · [Before (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7671)

```diff
-       })(), TT.BILLBOARDMODE_NONE = 0, TT.BILLBOARDMODE_X = 1, TT.BILLBOARDMODE_Y = 2, TT.BILLBOARDMODE_Z = 4, TT.BILLBOARDMODE_ALL = 7, TT.BILLBOARDMODE_USE_POSITION = 128, TT.BillboardUseParentOrientation = !1, TT._TmpRotation = lT.f.Zero(), TT._TmpScaling = lT.p.Zero(), TT._Tm … [truncated]
+       })(), BB.BILLBOARDMODE_NONE = 0, BB.BILLBOARDMODE_X = 1, BB.BILLBOARDMODE_Y = 2, BB.BILLBOARDMODE_Z = 4, BB.BILLBOARDMODE_ALL = 7, BB.BILLBOARDMODE_USE_POSITION = 128, BB.BillboardUseParentOrientation = !1, BB._TmpRotation = pB.d.Zero(), BB._TmpScaling = pB.m.Zero(), BB._Tm … [truncated]
```

#### 785. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7675-L7676` → after: `L7675-L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7675-L7676) · [Before (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7675-L7676)

```diff
-       const WT = kT.e.Parse((() => new ZT(TT.name, UT)), TT, UT, mT);
-       if (TT.localMatrix ? WT.setPreTransformMatrix(lT.e.FromArray(TT.localMatrix)) : TT.pivotMatrix && WT.setPivotMatrix(lT.e.FromArray(TT.pivotMatrix)), WT.Qy(TT.isEnabled), WT._waitingParsedUniqueId = TT.uniqueId, void 0 !== TT.parentId && (WT._waitingParentId = TT.parentId),  … [truncated]
+       const QB = UB.b.Parse((() => new mB(BB.name, jB)), BB, jB, zB);
+       if (BB.localMatrix ? QB.setPreTransformMatrix(pB.c.FromArray(BB.localMatrix)) : BB.pivotMatrix && QB.setPivotMatrix(pB.c.FromArray(BB.pivotMatrix)), QB.mH(BB.isEnabled), QB._waitingParsedUniqueId = BB.uniqueId, void 0 !== BB.parentId && (QB._waitingParentId = BB.parentId),  … [truncated]
```

#### 786. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7679` → after: `L7679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7679) · [Before (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7679)

```diff
-             zT = (0, pT.d)("BABYLON.Animation");
+             nB = (0, sB.b)("BABYLON.Animation");
```

#### 787. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7682` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7682) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7682)

```diff
-         LT.d.ParseAnimationRanges(WT, TT, UT)
+         rB.c.ParseAnimationRanges(QB, BB, jB)
```

#### 788. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7690` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7690) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7690)

```diff
-     }(WT = ZT.prototype).rK ?? (WT.rK = (0, BT.j)("TransformNode", "rK")), (zT = ZT.prototype).applyImpulse ?? (zT.applyImpulse = (0, BT.j)("TransformNode", "applyImpulse")), (MT = ZT.prototype).applyAngularImpulse ?? (MT.applyAngularImpulse = (0, BT.j)("TransformNode", "applyAng … [truncated]
+     }(QB = mB.prototype).pT ?? (QB.pT = (0, JB.i)("TransformNode", "pT")), (nB = mB.prototype).applyImpulse ?? (nB.applyImpulse = (0, JB.i)("TransformNode", "applyImpulse")), (dB = mB.prototype).applyAngularImpulse ?? (dB.applyAngularImpulse = (0, JB.i)("TransformNode", "applyAng … [truncated]
```

#### 789. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7692` → after: `L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7692) · [Before (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7692)

```diff
-   40541: (TT, UT, mT) => {
+   40512: (BB, jB, zB) => {
```

#### 790. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7745-L7748` → after: `L7745-L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7745-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/255.js#L7745-L7748) · [Before (L7745-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/255.js#L7745-L7748)

```diff
-       b: () => zT,
-       c: () => HT,
-       f: () => nT,
-       i: () => gT
+       d: () => nB,
+       h: () => uB,
+       l: () => NB,
+       m: () => IB
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (519 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 1. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4)

```diff
-   40257: (TT, UT, mT) => {
+   40211: (BB, jB, zB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7-L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L9)

```diff
-       i: () => HT
+       g: () => mB,
+       i: () => UB,
+       l: () => uB
```

#### 3. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L11-L14` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L11-L14) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L11-L14)

```diff
-     var WT = mT(40016),
-       zT = mT(38800),
-       MT = mT(40171),
-       gT = mT(40062);
+     var QB = zB(40008),
+       nB = zB(38783),
+       dB = zB(40125),
+       IB = zB(40049);
```

#### 4. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L26)

```diff
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, gT.d)(), TT && TT.KF ? this._engine = TT.KF().eB() : this._engine = TT, this._updatable = mT, this._instanced = nT, this._divisor = kT || 1, this._label = jT, UT instanceof WT.e ? (this._data = null, this._buffer = UT) … [truncated]
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, IB.e)(), BB && BB.aY ? this._engine = BB.aY().wJ() : this._engine = BB, this._updatable = zB, this._instanced = NB, this._divisor = UB || 1, this._label = aB, jB instanceof QB.e ? (this._data = null, this._buffer = jB) … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L31-L32` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L31-L32) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L31-L32)

```diff
-         const nT = MT ? UT : UT * Float32Array.BYTES_PER_ELEMENT,
-           kT = WT ? MT ? WT : WT * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         const NB = dB ? jB : jB * Float32Array.BYTES_PER_ELEMENT,
+           UB = QB ? dB ? QB : QB * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
```

#### 6. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L55-L56` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L55-L56) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L55-L56)

```diff
-           if (this._buffer.fl > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.fl, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.fl, void 0, this._label));
-           zT.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+           if (this._buffer.Ep > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.Ep, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.Ep, void 0, this._label));
+           nB.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
```

#### 7. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L64)

```diff
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, TT, WT ? UT : UT * Float32Array.BYTES_PER_ELEMENT, mT ? mT * this.byteStride : void 0), this._data = 0 === UT && void 0 === mT ? TT : null)
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, BB, QB ? jB : jB * Float32Array.BYTES_PER_ELEMENT, zB ? zB * this.byteStride : void 0), this._data = 0 === jB && void 0 === zB ? BB : null)
```

#### 8. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L97-L98` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L97-L98) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L97-L98)

```diff
-         const iT = (0, MT.s)(this.type);
-         vT ? (this._size = pT || (gT ? gT / iT : kT(mT)), this.byteStride = gT || this._buffer.byteStride || this._size * iT, this.byteOffset = LT || 0) : (this._size = pT || gT || kT(mT), this.byteStride = gT ? gT * iT : this._buffer.byteStride || this._size * iT, this.byteOffse … [truncated]
+         const gB = (0, dB.p)(this.type);
+         kB ? (this._size = sB || (IB ? IB / gB : UB(zB)), this.byteStride = IB || this._buffer.byteStride || this._size * gB, this.byteOffset = rB || 0) : (this._size = sB || IB || UB(zB), this.byteStride = IB ? IB * gB : this._buffer.byteStride || this._size * gB, this.byteOffse … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L119)

```diff
-             throw new Error(`Invalid vertex buffer type '${TT}'`)
+             throw new Error(`Invalid vertex buffer type '${BB}'`)
```

#### 10. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L139)

```diff
-         return mT ? (0, MT.p)(mT, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, TT, UT) : null
+         return zB ? (0, dB.m)(zB, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, BB, jB) : null
```

#### 11. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L148)

```diff
-         return this.byteStride / (0, MT.s)(this.type)
+         return this.byteStride / (0, dB.p)(this.type)
```

#### 12. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L150-L151` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L150-L151) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L150-L151)

```diff
-       qmT() {
-         return this.byteOffset / (0, MT.s)(this.type)
+       dzB() {
+         return this.byteOffset / (0, dB.p)(this.type)
```

#### 13. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L154)

```diff
-         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, MT.s)(this.type) : this._size
+         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, dB.p)(this.type) : this._size
```

#### 14. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L176)

```diff
-         (0, MT.l)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, TT, this.normalized, ((TT, mT) => {
+         (0, dB.e)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, BB, this.normalized, ((BB, zB) => {
```

#### 15. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L213)

```diff
-       return (0, MT.s)(TT)
+       return (0, dB.p)(BB)
```

#### 16. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L217)

```diff
-       (0, MT.l)(TT, UT, mT, WT, zT, gT, nT, ((TT, UT) => {
+       (0, dB.e)(BB, jB, zB, QB, nB, IB, NB, ((BB, jB) => {
```

#### 17. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L223)

```diff
-       return (0, MT.p)(TT, UT, mT, WT, zT, gT, nT, HT)
+       return (0, dB.m)(BB, jB, zB, QB, nB, IB, NB, uB)
```

#### 18. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L232)

```diff
-   40016: (TT, UT, mT) => {
+   40008: (BB, jB, zB) => {
```

#### 19. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L241)

```diff
-         this.references = 0, this.fl = 0, this.is32Bits = !1, this.uniqueId = WT._Counter++
+         this.references = 0, this.Ep = 0, this.is32Bits = !1, this.uniqueId = QB._Counter++
```

#### 20. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L246)

```diff
-   40251: (TT, UT, mT) => {
+   40202: (BB, jB, zB) => {
```

#### 21. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L248)

```diff
-       c: () => MT
+       d: () => dB
```

#### 22. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L250-L251` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L250-L251) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L250-L251)

```diff
-     var WT = mT(37188),
-       zT = mT(40257);
+     var QB = zB(37171),
+       nB = zB(40211);
```

#### 23. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L259-L260)

```diff
-         if (!this.pickedMesh || UT && !this.pickedMesh.isVerticesDataPresent(zT.i.NormalKind)) return null;
-         let mT, MT = this.pickedMesh.vWT();
+         if (!this.pickedMesh || jB && !this.pickedMesh.isVerticesDataPresent(nB.l.NormalKind)) return null;
+         let zB, dB = this.pickedMesh.dQB();
```

#### 24. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L262-L264` → after: `L262-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L262-L264) · [Before (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L262-L264)

```diff
-         const gT = WT.l.JB[0],
-           nT = WT.l.JB[1],
-           HT = WT.l.JB[2];
+         const IB = QB.h.KJ[0],
+           NB = QB.h.KJ[1],
+           uB = QB.h.KJ[2];
```

#### 25. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L266-L270` → after: `L266-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L266-L270) · [Before (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L266-L270)

```diff
-           const TT = this.pickedMesh.getVerticesData(zT.i.NormalKind);
-           let UT = MT ? WT.p.FromArrayToRef(TT, 3 * MT[3 * this.faceId], gT) : gT.J9(TT[3 * this.faceId * 3], TT[3 * this.faceId * 3 + 1], TT[3 * this.faceId * 3 + 2]),
-             kT = MT ? WT.p.FromArrayToRef(TT, 3 * MT[3 * this.faceId + 1], nT) : nT.J9(TT[3 * (3 * this.faceId + 1)], TT[3 * (3 * this.faceId + 1) + 1], TT[3 * (3 * this.faceId + 1) + 2]),
-             jT = MT ? WT.p.FromArrayToRef(TT, 3 * MT[3 * this.faceId + 2], HT) : HT.J9(TT[3 * (3 * this.faceId + 2)], TT[3 * (3 * this.faceId + 2) + 1], TT[3 * (3 * this.faceId + 2) + 2]);
-           UT = UT.scale(this.bu), kT = kT.scale(this.bv), jT = jT.scale(1 - this.bu - this.bv), mT = new WT.p(UT.x + kT.x + jT.x, UT.y + kT.y + jT.y, UT.z + kT.z + jT.z)
+           const BB = this.pickedMesh.getVerticesData(nB.l.NormalKind);
+           let jB = dB ? QB.m.FromArrayToRef(BB, 3 * dB[3 * this.faceId], IB) : IB.U3(BB[3 * this.faceId * 3], BB[3 * this.faceId * 3 + 1], BB[3 * this.faceId * 3 + 2]),
+             UB = dB ? QB.m.FromArrayToRef(BB, 3 * dB[3 * this.faceId + 1], NB) : NB.U3(BB[3 * (3 * this.faceId + 1)], BB[3 * (3 * this.faceId + 1) + 1], BB[3 * (3 * this.faceId + 1) + 2]),
+             aB = dB ? QB.m.FromArrayToRef(BB, 3 * dB[3 * this.faceId + 2], uB) : uB.U3(BB[3 * (3 * this.faceId + 2)], BB[3 * (3 * this.faceId + 2) + 1], BB[3 * (3 * this.faceId + 2) + 2]);
+           jB = jB.scale(this.bu), UB = UB.scale(this.bv), aB = aB.scale(1 - this.bu - this.bv), zB = new QB.m(jB.x + UB.x + aB.x, jB.y + UB.y + aB.y, jB.z + UB.z + aB.z)
```

#### 26. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L272-L275` → after: `L272-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L272-L275) · [Before (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L272-L275)

```diff
-           const TT = this.pickedMesh.getVerticesData(zT.i.PositionKind),
-             UT = MT ? WT.p.FromArrayToRef(TT, 3 * MT[3 * this.faceId], gT) : gT.J9(TT[3 * this.faceId * 3], TT[3 * this.faceId * 3 + 1], TT[3 * this.faceId * 3 + 2]),
-             kT = MT ? WT.p.FromArrayToRef(TT, 3 * MT[3 * this.faceId + 1], nT) : nT.J9(TT[3 * (3 * this.faceId + 1)], TT[3 * (3 * this.faceId + 1) + 1], TT[3 * (3 * this.faceId + 1) + 2]),
-             jT = MT ? WT.p.FromArrayToRef(TT, 3 * MT[3 * this.faceId + 2], HT) : HT.J9(TT[3 * (3 * this.faceId + 2)], TT[3 * (3 * this.faceId + 2) + 1], TT[3 * (3 * this.faceId + 2) + 2]),
+           const BB = this.pickedMesh.getVerticesData(nB.l.PositionKind),
+             jB = dB ? QB.m.FromArrayToRef(BB, 3 * dB[3 * this.faceId], IB) : IB.U3(BB[3 * this.faceId * 3], BB[3 * this.faceId * 3 + 1], BB[3 * this.faceId * 3 + 2]),
+             UB = dB ? QB.m.FromArrayToRef(BB, 3 * dB[3 * this.faceId + 1], NB) : NB.U3(BB[3 * (3 * this.faceId + 1)], BB[3 * (3 * this.faceId + 1) + 1], BB[3 * (3 * this.faceId + 1) + 2]),
+             aB = dB ? QB.m.FromArrayToRef(BB, 3 * dB[3 * this.faceId + 2], uB) : uB.U3(BB[3 * (3 * this.faceId + 2)], BB[3 * (3 * this.faceId + 2) + 1], BB[3 * (3 * this.faceId + 2) + 2]),
```

#### 27. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L278)

```diff
-           mT = WT.p.Cross(lT, LT)
+           zB = QB.m.Cross(pB, rB)
```

#### 28. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L285-L286` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L285-L286) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L285-L286)

```diff
-               const TT = WT.l.Matrix[0];
-               WT.e.FromArrayToRef(mT, zT, TT), WT.p.TransformNormalToRef(UT, TT, UT)
+               const BB = QB.h.Matrix[0];
+               QB.c.FromArrayToRef(zB, nB, BB), QB.m.TransformNormalToRef(jB, BB, jB)
```

#### 29. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L290)

```diff
-           TT.nonUniformScaling && (WT.l.Matrix[0].Gw(mT), mT = WT.l.Matrix[0], mT.setTranslationFromFloats(0, 0, 0), mT.invert(), mT.transposeToRef(WT.l.Matrix[1]), mT = WT.l.Matrix[1]), WT.p.TransformNormalToRef(UT, mT, UT)
+           BB.nonUniformScaling && (QB.h.Matrix[0].jH(zB), zB = QB.h.Matrix[0], zB.setTranslationFromFloats(0, 0, 0), zB.invert(), zB.transposeToRef(QB.h.Matrix[1]), zB = QB.h.Matrix[1]), QB.m.TransformNormalToRef(jB, zB, jB)
```

#### 30. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L293-L294` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L293-L294) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L293-L294)

```diff
-           const UT = WT.l.JB[0].Gw(mT);
-           TT || kT(this.pickedMesh, UT), WT.p.Dot(UT, this.ray.direction) > 0 && mT.negateInPlace()
+           const jB = QB.h.KJ[0].jH(zB);
+           BB || UB(this.pickedMesh, jB), QB.m.Dot(jB, this.ray.direction) > 0 && zB.negateInPlace()
```

#### 31. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L299)

```diff
-         let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zT.i.UVKind;
+         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nB.l.UVKind;
```

#### 32. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L301)

```diff
-         const UT = this.pickedMesh.vWT();
+         const jB = this.pickedMesh.dQB();
```

#### 33. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L305-L308` → after: `L305-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L305-L308) · [Before (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L305-L308)

```diff
-         let MT = WT.o.FromArray(mT, 2 * UT[3 * this.faceId]),
-           gT = WT.o.FromArray(mT, 2 * UT[3 * this.faceId + 1]),
-           nT = WT.o.FromArray(mT, 2 * UT[3 * this.faceId + 2]);
-         return MT = MT.scale(this.bu), gT = gT.scale(this.bv), nT = nT.scale(1 - this.bu - this.bv), new WT.o(MT.x + gT.x + nT.x, MT.y + gT.y + nT.y)
+         let dB = QB.i.FromArray(zB, 2 * jB[3 * this.faceId]),
+           IB = QB.i.FromArray(zB, 2 * jB[3 * this.faceId + 1]),
+           NB = QB.i.FromArray(zB, 2 * jB[3 * this.faceId + 2]);
+         return dB = dB.scale(this.bu), IB = IB.scale(this.bv), NB = NB.scale(1 - this.bu - this.bv), new QB.i(dB.x + IB.x + NB.x, dB.y + IB.y + NB.y)
```

#### 34. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L312)

```diff
-   40062: (TT, UT, mT) => {
+   40049: (BB, jB, zB) => {
```

#### 35. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L314` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L314) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L314)

```diff
-       d: () => MT
+       e: () => dB
```

#### 36. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L322)

```diff
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(TT), mT = TT.is32Bits ? UT instanceof Uint32Array ? UT : new Uint32Array(UT) : UT instanceof Uint16Array ? UT : new Uint16Array(UT), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, mT, … [truncated]
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(BB), zB = BB.is32Bits ? jB instanceof Uint32Array ? jB : new Uint32Array(jB) : jB instanceof Uint16Array ? jB : new Uint16Array(jB), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, zB, … [truncated]
```

#### 37. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L330)

```diff
-   40029: (TT, UT, mT) => {
+   40017: (BB, jB, zB) => {
```

#### 38. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L332)

```diff
-       e: () => WT
+       d: () => QB
```

#### 39. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L369)

```diff
-   39982: (TT, UT, mT) => {
+   39980: (BB, jB, zB) => {
```

#### 40. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L373-L377` → after: `L373-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L373-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L373-L377) · [Before (L373-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L373-L377)

```diff
-     var WT = mT(37219),
-       zT = mT(39926),
-       MT = mT(37216),
-       gT = mT(38800),
-       nT = mT(37211),
+     var QB = zB(37202),
+       nB = zB(39927),
+       dB = zB(37197),
+       IB = zB(38783),
+       NB = zB(37194),
```

#### 41. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L612)

```diff
-     var LT = mT(39994),
+     var rB = zB(39988),
```

#### 42. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L615-L616` → after: `L615-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L615-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L615-L616) · [Before (L615-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L615-L616)

```diff
-       ZT = mT(39946),
-       cT = mT(39957);
+       mB = zB(39943),
+       yB = zB(39958);
```

#### 43. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L625)

```diff
-       if ((0, ZT.j)()) {
+       if ((0, mB.o)()) {
```

#### 44. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L652)

```diff
-       get pWT() {
+       get jQB() {
```

#### 45. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L655)

```diff
-       set pWT(TT) {
+       set jQB(BB) {
```

#### 46. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L677)

```diff
-         if (TT) return this.isNDCHalfZRange ? TT.IS_NDC_HALF_ZRANGE = "" : delete TT.IS_NDC_HALF_ZRANGE, this.pWT ? TT.USE_REVERSE_DEPTHBUFFER = "" : delete TT.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? TT.USE_EXACT_SRGB_CONVERSIONS = "" : delete TT.USE_EXACT_SR … [truncated]
+         if (BB) return this.isNDCHalfZRange ? BB.IS_NDC_HALF_ZRANGE = "" : delete BB.IS_NDC_HALF_ZRANGE, this.jQB ? BB.USE_REVERSE_DEPTHBUFFER = "" : delete BB.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? BB.USE_EXACT_SRGB_CONVERSIONS = "" : delete BB.USE_EXACT_SR … [truncated]
```

#### 47. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L680` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L680) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L680)

```diff
-           return this.isNDCHalfZRange && (TT += "#define IS_NDC_HALF_ZRANGE"), this.pWT && (TT && (TT += "\n"), TT += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (TT && (TT += "\n"), TT += "#define USE_EXACT_SRGB_CONVERSIONS"), TT
+           return this.isNDCHalfZRange && (BB += "#define IS_NDC_HALF_ZRANGE"), this.jQB && (BB && (BB += "\n"), BB += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (BB && (BB += "\n"), BB += "#define USE_EXACT_SRGB_CONVERSIONS"), BB
```

#### 48. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L696)

```diff
-         zT.b.ResetCache()
+         nB.e.ResetCache()
```

#### 49. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L702` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L702) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L702)

```diff
-         gT.b.Warn(this.name + " context successfully restored."), this.OB.notifyObservers(this), this._contextWasLost = !1
+         IB.c.Warn(this.name + " context successfully restored."), this.lJ.notifyObservers(this), this._contextWasLost = !1
```

#### 50. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L763)

```diff
-             TT && TT(this.customAnimationFrameRequester.xB), delete this.customAnimationFrameRequester.xB
+             BB && BB(this.customAnimationFrameRequester.CJ), delete this.customAnimationFrameRequester.CJ
```

#### 51. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L767)

```diff
-           if (this._frameHandler = 0, (0, ZT.j)()) {
+           if (this._frameHandler = 0, (0, mB.o)()) {
```

#### 52. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L796)

```diff
-           (this.bJ || !this.renderEvenInBackground && this._windowIsBackground) && (TT = !1), TT && (this.fY(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.qY())
+           (this.aE || !this.renderEvenInBackground && this._windowIsBackground) && (BB = !1), BB && (this.gL(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.tL())
```

#### 53. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L814)

```diff
-         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.xB = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.x … [truncated]
+         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.CJ = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.C … [truncated]
```

#### 54. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L826)

```diff
-         this._depthCullingState.zOffset = this.pWT ? -TT : TT
+         this._depthCullingState.zOffset = this.jQB ? -BB : BB
```

#### 55. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L830` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L830) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L830)

```diff
-         return this.pWT ? -TT : TT
+         return this.jQB ? -BB : BB
```

#### 56. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L833)

```diff
-         this._depthCullingState.zOffsetUnits = this.pWT ? -TT : TT
+         this._depthCullingState.zOffsetUnits = this.jQB ? -BB : BB
```

#### 57. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L837)

```diff
-         return this.pWT ? -TT : TT
+         return this.jQB ? -BB : BB
```

#### 58. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L840)

```diff
-         return (0, ZT.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
+         return (0, mB.o)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
```

#### 59. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L891` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L891) · [Before (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L891)

```diff
-           eT = LT || new BT.b(this, 1);
+           MB = rB || new JB.d(this, 1);
```

#### 60. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L906)

```diff
-           }), HT && HT(mT, LT)) : (gT.b.Warn(`Failed to load ${TT}, falling back to ${YT}`), this._createTextureBase(YT, UT, eT.invertY, WT, zT, nT, HT, kT, jT, lT, eT, pT, ZT, cT, vT, qT))
+           }), uB && uB(zB, rB)) : (IB.c.Warn(`Failed to load ${BB}, falling back to ${EB}`), this._createTextureBase(EB, jB, MB.invertY, QB, nB, NB, uB, UB, aB, pB, MB, sB, mB, yB, kB, LB))
```

#### 61. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L954)

```diff
-         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, ZT.d)() ? document : null
+         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, mB.h)() ? document : null
```

#### 62. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1009)

```diff
-         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new kT, this._stencilStateComposer = new jT, this._stencilState = new lT, this._alphaState = new LT.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
+         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new UB, this._stencilStateComposer = new aB, this._stencilState = new pB, this._alphaState = new rB.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
```

#### 63. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1014)

```diff
-         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new WT.d, this.onCanvasFocusObservable = new WT.d, this.onNewSceneAddedObservable = new WT.d, this.onResizeObservable = new WT.d, this.onCanvasPointerOutObservable = new WT.d, this.onE … [truncated]
+         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new QB.c, this.onCanvasFocusObservable = new QB.c, this.onNewSceneAddedObservable = new QB.c, this.onResizeObservable = new QB.c, this.onCanvasPointerOutObservable = new QB.c, this.onE … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1016-L1017` → after: `L1016-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1016-L1017) · [Before (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1016-L1017)

```diff
-         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
-         const zT = (0, ZT.j)() && window.devicePixelRatio || 1,
+         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
+         const nB = (0, mB.o)() && window.devicePixelRatio || 1,
```

#### 65. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1024)

```diff
-           const TT = (0, ZT.j)() && window.devicePixelRatio || 1,
+           const BB = (0, mB.o)() && window.devicePixelRatio || 1,
```

#### 66. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1028)

```diff
-         if ((0, ZT.j)() && (0, ZT.d)())
+         if ((0, mB.o)() && (0, mB.h)())
```

#### 67. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1069-L1070` → after: `L1069-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1069-L1070) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1069-L1070)

```diff
-           this.hostInformation.isMobile = -1 !== TT.indexOf("Mobile") || -1 !== TT.indexOf("Mac") && (0, ZT.d)() && "ontouchend" in document
-         }, this._checkForMobile(), (0, ZT.j)() && window.addEventListener("resize", this._checkForMobile))
+           this.hostInformation.isMobile = -1 !== BB.indexOf("Mobile") || -1 !== BB.indexOf("Mac") && (0, mB.h)() && "ontouchend" in document
+         }, this._checkForMobile(), (0, mB.o)() && window.addEventListener("resize", this._checkForMobile))
```

#### 68. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1115-L1116` → after: `L1115-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1115-L1116) · [Before (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1115-L1116)

```diff
-         if (!cT.d.loadImage) throw (0, pT.k)("FileTools");
-         return cT.d.loadImage(TT, UT, mT, WT, zT, MT, gT)
+         if (!yB.e.loadImage) throw (0, sB.k)("FileTools");
+         return yB.e.loadImage(BB, jB, zB, QB, nB, dB, IB)
```

#### 69. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1125` → after: `L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1125) · [Before (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1125)

```diff
-         if (cT.d.loadFile) return cT.d.loadFile(TT, UT, mT, WT, zT, MT);
+         if (yB.e.loadFile) return yB.e.loadFile(BB, jB, zB, QB, nB, dB);
```

#### 70. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1132` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1132) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1132)

```diff
-         this.releaseComputeEffects?.(), zT.b.ResetCache();
+         this.releaseComputeEffects?.(), nB.e.ResetCache();
```

#### 71. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1134` → after: `L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1134) · [Before (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1134)

```diff
-         this._boundRenderFunction = null, this.SF.notifyObservers(this), this.SF.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
+         this._boundRenderFunction = null, this.pY.notifyObservers(this), this.pY.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
```

#### 72. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1153` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1153) · [Before (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1153)

```diff
-   39934: (TT, UT, mT) => {
+   39932: (BB, jB, zB) => {
```

#### 73. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1155` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1155) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1155)

```diff
-       d: () => WT
+       e: () => QB
```

#### 74. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1170)

```diff
-   39949: (TT, UT, mT) => {
+   39950: (BB, jB, zB) => {
```

#### 75. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1172-L1174` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1172) · [Before (L1172-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1172-L1174)

```diff
-       e: () => LT,
-       f: () => qT,
-       g: () => BT,
+       d: () => rB,
```

#### 76. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1176-L1177` → after: `L1174-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1174-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1174-L1175) · [Before (L1176-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1176-L1177)

```diff
-       l: () => ZT,
-       o: () => fT,
+       k: () => JB,
+       n: () => sB,
```

#### 77. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1182` → after: `L1180-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1180-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1180-L1182) · [Before (L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1182)

```diff
-       A: () => nT
+       A: () => aB,
+       D: () => uB,
+       G: () => NB
```

#### 78. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1222)

```diff
-         const zT = UT.cWT();
+         const nB = jB.nQB();
```

#### 79. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1318` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1318) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1318)

```diff
-         this._cacheMatrix(TT, UT) && (this.engine.setMatrices(this._uniforms[TT], UT.cWT()) || (this._valueCache[TT] = null))
+         this._cacheMatrix(BB, jB) && (this.engine.setMatrices(this._uniforms[BB], jB.nQB()) || (this._valueCache[BB] = null))
```

#### 80. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1367)

```diff
-     var zT = mT(39957);
+     var nB = zB(39958);
```

#### 81. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1465)

```diff
-       return vT((0, zT.g)(TT, mT, WT), UT, MT, gT)
+       return kB((0, nB.i)(BB, zB, QB), jB, dB, IB)
```

#### 82. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1474)

```diff
-         throw new Error(`Something went wrong while creating a gl ${UT} shader object. gl error=${zT}, gl isContextLost=${mT.isContextLost()}, _contextWasLost=${WT}`)
+         throw new Error(`Something went wrong while creating a gl ${jB} shader object. gl error=${nB}, gl isContextLost=${zB.isContextLost()}, _contextWasLost=${QB}`)
```

#### 83. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1496-L1501` → after: `L1496-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1496-L1501) · [Before (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1496-L1501)

```diff
-     var WT = mT(39926),
-       zT = mT(39949),
-       MT = mT(39982),
-       gT = mT(40001),
-       nT = mT(38800),
-       HT = mT(39946);
+     var QB = zB(39927),
+       nB = zB(39950),
+       dB = zB(39980),
+       IB = zB(39997),
+       NB = zB(38783),
+       uB = zB(39943);
```

#### 84. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1542-L1544` → after: `L1542-L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1542-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1542-L1544) · [Before (L1542-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1542-L1544)

```diff
-     var LT = mT(40007),
-       pT = mT(40022),
-       BT = mT(40029),
+     var rB = zB(40001),
+       sB = zB(40015),
+       JB = zB(40017),
```

#### 85. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1546-L1549` → after: `L1546-L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1546-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1546-L1549) · [Before (L1546-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1546-L1549)

```diff
-       cT = mT(39957),
-       vT = mT(39938),
-       fT = mT(40036),
-       qT = mT(39994);
+       yB = zB(39958),
+       kB = zB(39936),
+       GB = zB(40025),
+       LB = zB(39988);
```

#### 86. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1562` → after: `L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1562) · [Before (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1562)

```diff
-         return WT.b.ShadersRepository
+         return QB.e.ShadersRepository
```

#### 87. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1565` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1565) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1565)

```diff
-         WT.b.ShadersRepository = TT
+         QB.e.ShadersRepository = BB
```

#### 88. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1568` → after: `L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1568) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1568)

```diff
-         return this.TZ > 1 && !this.disableUniformBuffers
+         return this.gm > 1 && !this.disableUniformBuffers
```

#### 89. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1615)

```diff
-               (0, zT.y)(this._gl)
+               (0, nB.D)(this._gl)
```

#### 90. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1617)

```diff
-               TT.preventDefault(), this._contextWasLost = !0, (0, zT.y)(this._gl), nT.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
+               BB.preventDefault(), this._contextWasLost = !0, (0, nB.D)(this._gl), NB.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
```

#### 91. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1641-L1644` → after: `L1641-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1641-L1644) · [Before (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1641-L1644)

```diff
-         this._shaderProcessor = this.TZ > 1 ? new lT : new kT;
-         const gT = `Babylon.js v${bT.Version}`;
-         nT.b.Log(gT + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", gT);
-         const HT = (0, zT.A)(this._gl);
+         this._shaderProcessor = this.gm > 1 ? new pB : new UB;
+         const IB = `Babylon.js v${tB.Version}`;
+         NB.c.Log(IB + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", IB);
+         const uB = (0, nB.G)(this._gl);
```

#### 92. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1727` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1727) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1727)

```diff
-         if (this._caps.blendParametersPerTarget = !!UT, this._alphaState = new qT.b(this._caps.blendParametersPerTarget), UT && (this._gl.blendEquationSeparateIndexed = UT.blendEquationSeparateiOES.bind(UT), this._gl.blendEquationIndexed = UT.blendEquationiOES.bind(UT), this._gl. … [truncated]
+         if (this._caps.blendParametersPerTarget = !!jB, this._alphaState = new LB.c(this._caps.blendParametersPerTarget), jB && (this._gl.blendEquationSeparateIndexed = jB.blendEquationSeparateiOES.bind(jB), this._gl.blendEquationIndexed = jB.blendEquationiOES.bind(jB), this._gl. … [truncated]
```

#### 93. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1861)

```diff
-             if (void 0 !== mT && (0, fT.k)(mT)) {
+             if (void 0 !== zB && (0, GB.i)(zB)) {
```

#### 94. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1863` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1863) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1863)

```diff
-               void 0 !== mT && (0, fT.m)(mT) ? (bT._TempClearColorUint32[0] = 255 * TT.r, bT._TempClearColorUint32[1] = 255 * TT.g, bT._TempClearColorUint32[2] = 255 * TT.b, bT._TempClearColorUint32[3] = 255 * TT.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, bT._TempClearColorUin … [truncated]
+               void 0 !== zB && (0, GB.j)(zB) ? (tB._TempClearColorUint32[0] = 255 * BB.r, tB._TempClearColorUint32[1] = 255 * BB.g, tB._TempClearColorUint32[2] = 255 * BB.b, tB._TempClearColorUint32[3] = 255 * BB.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, tB._TempClearColorUin … [truncated]
```

#### 95. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1868` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1868) · [Before (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1868)

```diff
-         mT && (this.pWT ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), gT |= this._gl.DEPTH_BUFFER_BIT), WT && (this._gl.clearStencil(zT), gT |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(gT)
+         zB && (this.jQB ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), IB |= this._gl.DEPTH_BUFFER_BIT), QB && (this._gl.clearStencil(nB), IB |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(IB)
```

#### 96. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1871-L1872` → after: `L1871-L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1871-L1872) · [Before (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1871-L1872)

```diff
-         if ((0, fT.k)(mT)) {
-           const mT = (0, fT.m)(WT),
+         if ((0, GB.i)(zB)) {
+           const zB = (0, GB.j)(QB),
```

#### 97. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1882)

```diff
-         super.qY(), this._badOS && this.flushFramebuffer()
+         super.tL(), this._badOS && this.flushFramebuffer()
```

#### 98. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1895` → after: `L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1895) · [Before (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1895)

```diff
-         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = TT, this._integerMRTAttachmentsMask = !TT.isMulti && TT.texture && (0, fT.k)(TT.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(HT._frameb … [truncated]
+         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = BB, this._integerMRTAttachmentsMask = !BB.isMulti && BB.texture && (0, GB.i)(BB.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(uB._frameb … [truncated]
```

#### 99. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1900)

```diff
-           TT.is3D && (TT.texture.width === jT.width && TT.texture.height === jT.height && TT.texture.depth === jT.depth || nT.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
+           BB.is3D && (BB.texture.width === aB.width && BB.texture.height === aB.height && BB.texture.depth === aB.depth || NB.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
```

#### 100. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1964-L1965` → after: `L1964-L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1964-L1965) · [Before (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1964-L1965)

```diff
-         const WT = new LT.c(mT);
-         return this.bindArrayBuffer(WT), "number" !== typeof TT ? TT instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(TT), UT), WT.fl = 4 * TT.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, TT, UT), WT.fl = TT.byteLength) : (this._gl.bufferDa … [truncated]
+         const QB = new rB.d(zB);
+         return this.bindArrayBuffer(QB), "number" !== typeof BB ? BB instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(BB), jB), QB.Ep = 4 * BB.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, jB), QB.Ep = BB.byteLength) : (this._gl.bufferDa … [truncated]
```

#### 101. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L1975)

```diff
-           zT = new LT.c(WT);
+           nB = new rB.d(QB);
```

#### 102. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2162)

```diff
-         UT && UT.program && (UT.program.__SPECTOR_rebuildProgram = null, (0, vT.h)(UT), this._gl && (this._currentProgram === UT.program && this._setProgram(null), this._gl.deleteProgram(UT.program)))
+         jB && jB.program && (jB.program.__SPECTOR_rebuildProgram = null, (0, kB.j)(jB), this._gl && (this._currentProgram === jB.program && this._setProgram(null), this._gl.deleteProgram(jB.program)))
```

#### 103. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2165)

```diff
-         return (0, cT.j)(TT, this.isNDCHalfZRange, this.pWT, this.useExactSrgbConversions)
+         return (0, yB.k)(BB, this.isNDCHalfZRange, this.jQB, this.useExactSrgbConversions)
```

#### 104. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2170-L2171` → after: `L2170-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2170-L2171) · [Before (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2170-L2171)

```diff
-         const pT = "string" === typeof TT ? TT : TT.vertexToken || TT.vertexSource || TT.vertexElement || TT.vertex,
-           BT = "string" === typeof TT ? TT : TT.fragmentToken || TT.fragmentSource || TT.fragmentElement || TT.fragment,
+         const sB = "string" === typeof BB ? BB : BB.vertexToken || BB.vertexSource || BB.vertexElement || BB.vertex,
+           JB = "string" === typeof BB ? BB : BB.fragmentToken || BB.fragmentSource || BB.fragmentElement || BB.fragment,
```

#### 105. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2181-L2182` → after: `L2181-L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2181-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2181-L2182) · [Before (L2181-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2181-L2182)

```diff
-         this._gl && (0, zT.A)(this._gl);
-         const qT = new WT.b(TT, UT, cT ? this : mT, MT, this, gT, nT, HT, kT, jT, fT, UT.shaderLanguage ?? lT, UT.extraInitializationsAsync ?? LT);
+         this._gl && (0, nB.G)(this._gl);
+         const LB = new QB.e(BB, jB, yB ? this : zB, dB, this, IB, NB, uB, UB, aB, GB, jB.shaderLanguage ?? pB, jB.extraInitializationsAsync ?? rB);
```

#### 106. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2190-L2191` → after: `L2190-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2190-L2191) · [Before (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2190-L2191)

```diff
-         const gT = (0, zT.A)(this._gl);
-         return gT._contextWasLost = this._contextWasLost, gT.validateShaderPrograms = this.validateShaderPrograms, (0, zT.u)(TT, UT, mT, WT || this._gl, MT)
+         const IB = (0, nB.G)(this._gl);
+         return IB._contextWasLost = this._contextWasLost, IB.validateShaderPrograms = this.validateShaderPrograms, (0, nB.y)(BB, jB, zB, QB || this._gl, dB)
```

#### 107. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2195-L2196` → after: `L2195-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2195-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2195-L2196) · [Before (L2195-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2195-L2196)

```diff
-         const nT = (0, zT.A)(this._gl);
-         return nT._contextWasLost = this._contextWasLost, nT.validateShaderPrograms = this.validateShaderPrograms, (0, zT.w)(TT, UT, mT, WT, MT || this._gl, gT)
+         const NB = (0, nB.G)(this._gl);
+         return NB._contextWasLost = this._contextWasLost, NB.validateShaderPrograms = this.validateShaderPrograms, (0, nB.A)(BB, jB, zB, QB, dB || this._gl, IB)
```

#### 108. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2203` → after: `L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2203) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2203)

```diff
-           (0, zT.A)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
+           (0, nB.G)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
```

#### 109. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2205` → after: `L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2205) · [Before (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2205)

```diff
-         const UT = (0, zT.q)(this._gl, TT);
+         const jB = (0, nB.u)(this._gl, BB);
```

#### 110. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2211)

```diff
-         return (0, zT.g)(TT, this._gl, this.validateShaderPrograms)
+         return (0, nB.k)(BB, this._gl, this.validateShaderPrograms)
```

#### 111. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2214-L2215` → after: `L2214-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2214-L2215) · [Before (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2214-L2215)

```diff
-         const LT = (0, zT.A)(this._gl);
-         return LT._contextWasLost = this._contextWasLost, LT.validateShaderPrograms = this.validateShaderPrograms, LT._createShaderProgramInjection = this._createShaderProgram.bind(this), LT.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), LT.createShader … [truncated]
+         const rB = (0, nB.G)(this._gl);
+         return rB._contextWasLost = this._contextWasLost, rB.validateShaderPrograms = this.validateShaderPrograms, rB._createShaderProgramInjection = this._createShaderProgram.bind(this), rB.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), rB.createShader … [truncated]
```

#### 112. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2219` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2219) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2219)

```diff
-         return (0, zT.e)(TT, UT, mT, WT, MT)
+         return (0, nB.d)(BB, jB, zB, QB, dB)
```

#### 113. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2222` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2222) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2222)

```diff
-         return !this._isDisposed && (0, zT.h)(TT, this._gl, this.validateShaderPrograms)
+         return !this._isDisposed && (0, nB.n)(BB, this._gl, this.validateShaderPrograms)
```

#### 114. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2225` → after: `L2225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2225) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2225)

```diff
-         (0, zT.f)(TT, UT)
+         (0, nB.h)(BB, jB)
```

#### 115. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2244` → after: `L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2244) · [Before (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2244)

```diff
-         (TT = null !== TT && (0, gT.b)(TT) ? TT.effect : TT) && TT !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(TT), this._currentEffect = TT, TT.onBind && TT.onBind(TT), TT._onBindObservable && TT._onBindObservable.notifyObse … [truncated]
+         (BB = null !== BB && (0, IB.e)(BB) ? BB.effect : BB) && BB !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(BB), this._currentEffect = BB, BB.onBind && BB.onBind(BB), BB._onBindObservable && BB._onBindObservable.notifyObse … [truncated]
```

#### 116. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2394` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2394) · [Before (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2394)

```diff
-         return new BT.e(this._createTexture(), this._gl)
+         return new JB.d(this._createTexture(), this._gl)
```

#### 117. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2407` → after: `L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2407) · [Before (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2407)

```diff
-         void 0 !== UT && "object" === typeof UT ? (mT = !!UT.generateMipMaps, MT = !!UT.createMipMaps, gT = void 0 === UT.type ? 0 : UT.type, HT = void 0 === UT.samplingMode ? 3 : UT.samplingMode, kT = void 0 === UT.format ? 5 : UT.format, jT = void 0 !== UT.useSRGBBuffer && UT.u … [truncated]
+         void 0 !== jB && "object" === typeof jB ? (zB = !!jB.generateMipMaps, dB = !!jB.createMipMaps, IB = void 0 === jB.type ? 0 : jB.type, uB = void 0 === jB.samplingMode ? 3 : jB.samplingMode, UB = void 0 === jB.format ? 5 : jB.format, aB = void 0 !== jB.useSRGBBuffer && jB.u … [truncated]
```

#### 118. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2409` → after: `L2409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2409) · [Before (L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2409)

```diff
-           vT = (0, fT.c)(kT),
+           kB = (0, GB.d)(UB),
```

#### 119. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2411` → after: `L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2411) · [Before (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2411)

```diff
-           iT = new ZT.b(this, zT),
+           gB = new mB.d(this, nB),
```

#### 120. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2427` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2427) · [Before (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2427)

```diff
-         if (qT.texParameteri(xT, qT.TEXTURE_MAG_FILTER, JT.mag), qT.texParameteri(xT, qT.TEXTURE_MIN_FILTER, JT.min), qT.texParameteri(xT, qT.TEXTURE_WRAP_S, qT.CLAMP_TO_EDGE), qT.texParameteri(xT, qT.TEXTURE_WRAP_T, qT.CLAMP_TO_EDGE), cT && this.TZ > 1 && (0 === pT ? (qT.texPara … [truncated]
+         if (LB.texParameteri(qB, LB.TEXTURE_MAG_FILTER, iB.mag), LB.texParameteri(qB, LB.TEXTURE_MIN_FILTER, iB.min), LB.texParameteri(qB, LB.TEXTURE_WRAP_S, LB.CLAMP_TO_EDGE), LB.texParameteri(qB, LB.TEXTURE_WRAP_T, LB.CLAMP_TO_EDGE), yB && this.gm > 1 && (0 === sB ? (LB.texPara … [truncated]
```

#### 121. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2429` → after: `L2429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2429) · [Before (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2429)

```diff
-           if (TT = (0, fT.g)(iT.format) ? this._setupFramebufferDepthAttachments((0, fT.c)(iT.format), 19 !== iT.format, iT.width, iT.height, lT, iT.format, !0) : this._createRenderBuffer(iT.width, iT.height, lT, -1, this._getRGBABufferInternalSizedFormat(iT.type, iT.format, iT._ … [truncated]
+           if (BB = (0, GB.g)(gB.format) ? this._setupFramebufferDepthAttachments((0, GB.d)(gB.format), 19 !== gB.format, gB.width, gB.height, pB, gB.format, !0) : this._createRenderBuffer(gB.width, gB.height, pB, -1, this._getRGBABufferInternalSizedFormat(gB.type, gB.format, gB._ … [truncated]
```

#### 122. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2437` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2437) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2437)

```diff
-         return TT && this._caps.supportSRGBBuffers && (this.TZ > 1 || UT)
+         return BB && this._caps.supportSRGBBuffers && (this.gm > 1 || jB)
```

#### 123. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2464` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2464) · [Before (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2464)

```diff
-             const TT = new ZT.b(this, 2);
+             const BB = new mB.d(this, 2);
```

#### 124. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2474` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2474) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2474)

```diff
-         return 1 === this.TZ ? (mT = this._getInternalFormat(TT, UT), WT = mT) : (mT = this._getInternalFormat(TT, !1), WT = this._getRGBABufferInternalSizedFormat(0, TT, UT)), {
+         return 1 === this.gm ? (zB = this._getInternalFormat(BB, jB), QB = zB) : (zB = this._getInternalFormat(BB, !1), QB = this._getRGBABufferInternalSizedFormat(0, BB, jB)), {
```

#### 125. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2623-L2624` → after: `L2623-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2623-L2624) · [Before (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2623-L2624)

```diff
-           lT = Math.min(jT, this.needPOTTextures ? (0, pT.f)(WT.width, jT) : WT.width),
-           LT = Math.min(jT, this.needPOTTextures ? (0, pT.f)(WT.height, jT) : WT.height),
+           pB = Math.min(aB, this.needPOTTextures ? (0, sB.c)(QB.width, aB) : QB.width),
+           rB = Math.min(aB, this.needPOTTextures ? (0, sB.c)(QB.height, aB) : QB.height),
```

#### 126. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2634` → after: `L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2634) · [Before (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2634)

```diff
-         return this.TZ > 1 ? 15 === TT ? zT = WT.DEPTH_COMPONENT16 : 16 === TT ? zT = WT.DEPTH_COMPONENT24 : 17 === TT || 13 === TT ? zT = mT ? WT.DEPTH24_STENCIL8 : WT.DEPTH_COMPONENT24 : 14 === TT ? zT = WT.DEPTH_COMPONENT32F : 18 === TT && (zT = mT ? WT.DEPTH32F_STENCIL8 : WT. … [truncated]
+         return this.gm > 1 ? 15 === BB ? nB = QB.DEPTH_COMPONENT16 : 16 === BB ? nB = QB.DEPTH_COMPONENT24 : 17 === BB || 13 === BB ? nB = zB ? QB.DEPTH24_STENCIL8 : QB.DEPTH_COMPONENT24 : 14 === BB ? nB = QB.DEPTH_COMPONENT32F : 18 === BB && (nB = zB ? QB.DEPTH32F_STENCIL8 : QB. … [truncated]
```

#### 127. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2668` → after: `L2668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2668) · [Before (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2668)

```diff
-         this._currentProgram !== TT && ((0, zT.o)(TT, this._gl), this._currentProgram = TT)
+         this._currentProgram !== BB && ((0, nB.s)(BB, this._gl), this._currentProgram = BB)
```

#### 128. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2690)

```diff
-           if (this._activateCurrentTexture(), UT && UT.isMultiview) throw nT.b.Error(["_bindTextureDirectly called with a multiview texture!", TT, UT]), "_bindTextureDirectly called with a multiview texture!";
+           if (this._activateCurrentTexture(), jB && jB.isMultiview) throw NB.c.Error(["_bindTextureDirectly called with a multiview texture!", BB, jB]), "_bindTextureDirectly called with a multiview texture!";
```

#### 129. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2702` → after: `L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2702) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2702)

```diff
-         for (let TT = 0; TT < this._maxSimultaneousTextures; TT++) this._activeChannel = TT, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.TZ > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
+         for (let BB = 0; BB < this._maxSimultaneousTextures; BB++) this._activeChannel = BB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.gm > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
```

#### 130. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2725` → after: `L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2725) · [Before (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2725)

```diff
-         if (!UT) return null != this._boundTexturesCache[TT] && (this._activeChannel = TT, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.TZ > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
+         if (!jB) return null != this._boundTexturesCache[BB] && (this._activeChannel = BB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.gm > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
```

#### 131. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2777` → after: `L2777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L2777) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L2777)

```diff
-         (0, HT.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
+         (0, uB.o)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
```

#### 132. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3088` → after: `L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3088) · [Before (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3088)

```diff
-           if (gT.length < jT) return nT.b.Error(`Data buffer is too small to store the read pixels (${gT.length} should be more than ${jT})`), Promise.resolve(gT)
+           if (IB.length < aB) return NB.c.Error(`Data buffer is too small to store the read pixels (${IB.length} should be more than ${aB})`), Promise.resolve(IB)
```

#### 133. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3184` → after: `L3184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3184) · [Before (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3184)

```diff
-     }], bT._ConcatenateShader = cT.g, bT._IsSupported = null, bT._HasMajorPerformanceCaveat = null
+     }], tB._ConcatenateShader = yB.i, tB._IsSupported = null, tB._HasMajorPerformanceCaveat = null
```

#### 134. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3186` → after: `L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3186) · [Before (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3186)

```diff
-   40297: (TT, UT, mT) => {
+   40268: (BB, jB, zB) => {
```

#### 135. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3197` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3197) · [Before (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3197)

```diff
-   40290: (TT, UT, mT) => {
+   40264: (BB, jB, zB) => {
```

#### 136. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3200-L3201` → after: `L3200-L3201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3200-L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3200-L3201) · [Before (L3200-L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3200-L3201)

```diff
-       i: () => MT,
-       k: () => zT
+       f: () => dB,
+       g: () => nB
```

#### 137. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3222` → after: `L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3222) · [Before (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3222)

```diff
-   40288: (TT, UT, mT) => {
+   40255: (BB, jB, zB) => {
```

#### 138. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3225-L3226` → after: `L3226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3226) · [Before (L3225-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3225-L3226)

```diff
-       f: () => gT,
-       h: () => nT
+       e: () => NB
```

#### 139. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3228` → after: `L3228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3228) · [Before (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3228)

```diff
-     var WT = mT(37188);
+     var QB = zB(37171);
```

#### 140. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3238` → after: `L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3238) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3238)

```diff
-         super(TT, UT), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new WT.o(mT, zT)
+         super(BB, jB), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new QB.i(zB, nB)
```

#### 141. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3254` → after: `L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3254) · [Before (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3254)

```diff
-   40310: (TT, UT, mT) => {
+   40284: (BB, jB, zB) => {
```

#### 142. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3256` → after: `L3256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3256) · [Before (L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3256)

```diff
-       b: () => WT
+       d: () => QB
```

#### 143. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3267` → after: `L3267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3267) · [Before (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3267)

```diff
-       b: () => gT
+       d: () => IB
```

#### 144. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3269-L3270` → after: `L3269-L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3269-L3270) · [Before (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3269-L3270)

```diff
-     var WT, zT = mT(37219),
-       MT = mT(39916);
+     var QB, nB = zB(37202),
+       dB = zB(39919);
```

#### 145. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3274` → after: `L3274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3274) · [Before (L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3274)

```diff
-     class gT extends MT.b {
+     class IB extends dB.c {
```

#### 146. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3295` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3295) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3295)

```diff
-         super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable … [truncated]
+         super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable … [truncated]
```

#### 147. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3372` → after: `L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3372) · [Before (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3372)

```diff
-   40036: (TT, UT, mT) => {
+   40025: (BB, jB, zB) => {
```

#### 148. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3389` → after: `L3389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3389) · [Before (L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3389)

```diff
-       c: () => gT,
+       d: () => IB,
```

#### 149. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3391-L3392` → after: `L3391-L3392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3391-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3391-L3392) · [Before (L3391-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3391-L3392)

```diff
-       k: () => zT,
-       m: () => MT
+       i: () => nB,
+       j: () => dB
```

#### 150. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3395` → after: `L3395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3395) · [Before (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3395)

```diff
-   39916: (TT, UT, mT) => {
+   39919: (BB, jB, zB) => {
```

#### 151. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3397` → after: `L3397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3397) · [Before (L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3397)

```diff
-       b: () => WT
+       c: () => QB
```

#### 152. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3453` → after: `L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3453) · [Before (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3453)

```diff
-   40228: (TT, UT, mT) => {
+   40183: (BB, jB, zB) => {
```

#### 153. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3461` → after: `L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3461) · [Before (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3461)

```diff
-   40001: (TT, UT, mT) => {
+   39997: (BB, jB, zB) => {
```

#### 154. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3466` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3466) · [Before (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3466)

```diff
-       b: () => WT
+       e: () => QB
```

#### 155. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3469` → after: `L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3469) · [Before (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3469)

```diff
-   40449: (TT, UT, mT) => {
+   40423: (BB, jB, zB) => {
```

#### 156. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3471` → after: `L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3471) · [Before (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3471)

```diff
-       b: () => zT
+       e: () => nB
```

#### 157. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3473)

```diff
-     var WT = mT(39975);
+     var QB = zB(39976);
```

#### 158. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3490-L3491` → after: `L3490-L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3490-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3490-L3491) · [Before (L3490-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3490-L3491)

```diff
-           TT ? UT.dispose() : WT.e.SetImmediate((() => {
-             UT.eB().onEndFrameObservable.addOnce((() => {
+           BB ? jB.dispose() : QB.b.SetImmediate((() => {
+             jB.wJ().onEndFrameObservable.addOnce((() => {
```

#### 159. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3500` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3500) · [Before (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3500)

```diff
-   39938: (TT, UT, mT) => {
+   39936: (BB, jB, zB) => {
```

#### 160. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3504-L3505` → after: `L3505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3505) · [Before (L3504-L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3504-L3505)

```diff
-       g: () => kT,
-       h: () => jT
+       j: () => aB
```

#### 161. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3507-L3512` → after: `L3507-L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3507-L3512) · [Before (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3507-L3512)

```diff
-     var WT = mT(39946),
-       zT = mT(39949),
-       MT = mT(39934),
-       gT = mT(38800),
-       nT = mT(39972),
-       HT = mT(39957);
+     var QB = zB(39943),
+       nB = zB(39950),
+       dB = zB(39932),
+       IB = zB(38783),
+       NB = zB(39974),
+       uB = zB(39958);
```

#### 162. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3515` → after: `L3515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3515) · [Before (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3515)

```diff
-       return (0, zT.A)(UT).cachedPipelines[TT]
+       return (0, nB.G)(jB).cachedPipelines[BB]
```

#### 163. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3522` → after: `L3522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3522) · [Before (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3522)

```diff
-         const TT = (0, zT.A)(mT),
+         const BB = (0, nB.G)(zB),
```

#### 164. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3530-L3531` → after: `L3530-L3531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3530-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3530-L3531) · [Before (L3530-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3530-L3531)

```diff
-       const lT = (0, WT.j)() ? gT?.getHostDocument() : null;
-       kT = "string" === typeof UT ? UT : "string" === typeof UT.vertexSource ? "source:" + UT.vertexSource : "string" === typeof UT.vertexElement ? lT?.getElementById(UT.vertexElement) || UT.vertexElement : UT.vertex || UT, jT = "string" === typeof UT ? UT : "string" === typeof U … [truncated]
+       const pB = (0, QB.o)() ? IB?.getHostDocument() : null;
+       UB = "string" === typeof jB ? jB : "string" === typeof jB.vertexSource ? "source:" + jB.vertexSource : "string" === typeof jB.vertexElement ? pB?.getElementById(jB.vertexElement) || jB.vertexElement : jB.vertex || jB, aB = "string" === typeof jB ? jB : "string" === typeof j … [truncated]
```

#### 165. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3536-L3537` → after: `L3536-L3537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3536-L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3536-L3537) · [Before (L3536-L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3536-L3537)

```diff
-             (0, nT.d)(TT), (0, nT.h)(WT, TT, ((WT, jT) => {
-               HT && (HT._vertexSourceCodeBeforeMigration = jT), mT && (WT = mT("vertex", WT)), TT.isFragment = !0, (0, nT.h)(kT, TT, ((gT, kT) => {
+             (0, NB.f)(BB), (0, NB.i)(QB, BB, ((QB, aB) => {
+               uB && (uB._vertexSourceCodeBeforeMigration = aB), zB && (QB = zB("vertex", QB)), BB.isFragment = !0, (0, NB.i)(UB, BB, ((IB, UB) => {
```

#### 166. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3539` → after: `L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3539) · [Before (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3539)

```diff
-                 const jT = (0, nT.b)(WT, gT, TT);
+                 const aB = (0, NB.d)(QB, IB, BB);
```

#### 167. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3567` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3567) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3567)

```diff
-         return void zT((0, WT.c)(TT))
+         return void nB((0, QB.d)(BB))
```

#### 168. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3573` → after: `L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3573) · [Before (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3573)

```diff
-       const kT = MT.d.GetShadersStore(gT);
+       const UB = dB.e.GetShadersStore(IB);
```

#### 169. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3577` → after: `L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3577) · [Before (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3577)

```diff
-       if (jT = "." === TT[0] || "/" === TT[0] || TT.indexOf("http") > -1 ? TT : MT.d.GetShadersRepository(gT) + TT, !(nT = nT || HT.m)) throw new Error("loadFileInjection is not defined");
+       if (aB = "." === BB[0] || "/" === BB[0] || BB.indexOf("http") > -1 ? BB : dB.e.GetShadersRepository(IB) + BB, !(NB = NB || uB.m)) throw new Error("loadFileInjection is not defined");
```

#### 170. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3582` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3582) · [Before (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3582)

```diff
-         const MT = TT.context ? (0, zT.A)(TT.context) : null;
+         const dB = BB.context ? (0, nB.G)(BB.context) : null;
```

#### 171. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3591` → after: `L3591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3591) · [Before (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3591)

```diff
-         throw gT.b.Error("Error compiling effect"), MT
+         throw IB.c.Error("Error compiling effect"), dB
```

#### 172. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3595` → after: `L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3595) · [Before (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3595)

```diff
-   39926: (TT, UT, mT) => {
+   39927: (BB, jB, zB) => {
```

#### 173. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3597` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3597) · [Before (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3597)

```diff
-       b: () => HT
+       e: () => uB
```

#### 174. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3599-L3603` → after: `L3599-L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3599-L3603) · [Before (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3599-L3603)

```diff
-     var WT = mT(37219),
-       zT = mT(38800),
-       MT = mT(39934),
-       gT = mT(39938),
-       nT = mT(39975);
+     var QB = zB(37202),
+       nB = zB(38783),
+       dB = zB(39932),
+       IB = zB(39936),
+       NB = zB(39976);
```

#### 175. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3606` → after: `L3606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3606) · [Before (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3606)

```diff
-         return MT.d.ShadersRepository
+         return dB.e.ShadersRepository
```

#### 176. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3609` → after: `L3609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3609) · [Before (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3609)

```diff
-         MT.d.ShadersRepository = TT
+         dB.e.ShadersRepository = BB
```

#### 177. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3615` → after: `L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3615) · [Before (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3615)

```diff
-         return this._onBindObservable || (this._onBindObservable = new WT.d), this._onBindObservable
+         return this._onBindObservable || (this._onBindObservable = new QB.c), this._onBindObservable
```

#### 178. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3631` → after: `L3631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3631) · [Before (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3631)

```diff
-         this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new WT.d, this.onErrorObservable = new WT.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationF … [truncated]
+         this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new QB.c, this.onErrorObservable = new QB.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationF … [truncated]
```

#### 179. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3642` → after: `L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3642) · [Before (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3642)

```diff
-         "WEBGL2" === this._engine.shaderPlatformName && (vT = (0, gT.g)(cT, this._engine._gl) ?? vT), this._attributeLocationByName = {}, this.uniqueId = HT._UniqueIdSeed++, vT ? (this._pipelineContext = vT, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCom … [truncated]
+         "WEBGL2" === this._engine.shaderPlatformName && (kB = (0, IB.f)(yB, this._engine._gl) ?? kB), this._attributeLocationByName = {}, this.uniqueId = uB._UniqueIdSeed++, kB ? (this._pipelineContext = kB, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCom … [truncated]
```

#### 180. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3644-L3645` → after: `L3644-L3645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3644-L3645) · [Before (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3644-L3645)

```diff
-             mT = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${UT}`);
-           TT && "string" === typeof TT.stack && (mT.stack = `${mT.message}\nCaused by: ${TT.stack}`), this._processCompilationErrors(mT)
+             zB = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${jB}`);
+           BB && "string" === typeof BB.stack && (zB.stack = `${zB.message}\nCaused by: ${BB.stack}`), this._processCompilationErrors(zB)
```

#### 181. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3647` → after: `L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3647) · [Before (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3647)

```diff
-           this._onReleaseEffectsObserver = null, this.bJ || this.dispose(!0)
+           this._onReleaseEffectsObserver = null, this.aE || this.dispose(!0)
```

#### 182. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3663-L3664` → after: `L3663-L3664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3663-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3663-L3664) · [Before (L3663-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3663-L3664)

```diff
-           shadersRepository: MT.d.GetShadersRepository(this._shaderLanguage),
-           includesShadersStore: MT.d.GetIncludesShadersStore(this._shaderLanguage),
+           shadersRepository: dB.e.GetShadersRepository(this._shaderLanguage),
+           includesShadersStore: dB.e.GetIncludesShadersStore(this._shaderLanguage),
```

#### 183. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3669` → after: `L3669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3669) · [Before (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3669)

```diff
-           pWT: this._engine.pWT,
+           jQB: this._engine.jQB,
```

#### 184. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3687` → after: `L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3687) · [Before (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3687)

```diff
-         return !!this._engine.bJ || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
+         return !!this._engine.aE || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
```

#### 185. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3742` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3742) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3742)

```diff
-         (0, nT.i)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (UT => {
+         (0, NB.e)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (jB => {
```

#### 186. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3775` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3775) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3775)

```diff
-             pWT: this._engine.pWT,
+             jQB: this._engine.jQB,
```

#### 187. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3788` → after: `L3788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3788) · [Before (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3788)

```diff
-           const TT = this.eB().scenes;
+           const BB = this.wJ().scenes;
```

#### 188. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3812-L3813` → after: `L3812-L3813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3812-L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3812-L3813) · [Before (L3812-L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3812-L3813)

```diff
-           this._pipelineContext = (0, gT.f)({
-             existingPipelineContext: TT ? UT : null,
+           this._pipelineContext = (0, IB.d)({
+             existingPipelineContext: BB ? jB : null,
```

#### 189. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3840` → after: `L3840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3840) · [Before (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3840)

```diff
-             WT.length >= UT && (zT = `Offending line [${UT}] in ${mT?"fragment":"vertex"} code: ${WT[UT-1]}`)
+             QB.length >= jB && (nB = `Offending line [${jB}] in ${zB?"fragment":"vertex"} code: ${QB[jB-1]}`)
```

#### 190. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3850` → after: `L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3850) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3850)

```diff
-         if (zT.b.Error("Unable to compile effect:"), zT.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), zT.b.Error(`Attributes: ${mT.join(" ")}`), zT.b.Error("Defines:\n" + this.defines), HT.LogShaderCodeOnCompilationError) {
+         if (nB.c.Error("Unable to compile effect:"), nB.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), nB.c.Error(`Attributes: ${zB.join(" ")}`), nB.c.Error("Defines:\n" + this.defines), uB.LogShaderCodeOnCompilationError) {
```

#### 191. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3853` → after: `L3853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3853) · [Before (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3853)

```diff
-           this._pipelineContext?._getVertexShaderCode() && ([TT, UT] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), TT && (zT.b.Error("Vertex code:"), zT.b.Error(TT))), this._pipelineContext?._getFragmentShaderCode() & … [truncated]
+           this._pipelineContext?._getVertexShaderCode() && ([BB, jB] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), BB && (nB.c.Error("Vertex code:"), nB.c.Error(BB))), this._pipelineContext?._getFragmentShaderCode() & … [truncated]
```

#### 192. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3855)

```diff
-         zT.b.Error("Error: " + this._compilationError);
+         nB.c.Error("Error: " + this._compilationError);
```

#### 193. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3862` → after: `L3862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR3862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L3862) · [Before (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L3862)

```diff
-         UT && (this._pipelineContext = UT, this._isReady = !0, MT()), WT ? (this._pipelineContext = null, WT.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, zT.b.Error("Trying next fallback."), this.defines = WT.reduce(this.defines, this), this._prepareEffect()) : (this._al … [truncated]
+         jB && (this._pipelineContext = jB, this._isReady = !0, dB()), QB ? (this._pipelineContext = null, QB.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, nB.c.Error("Trying next fallback."), this.defines = QB.reduce(this.defines, this), this._prepareEffect()) : (this._al … [truncated]
```

#### 194. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4022` → after: `L4022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4022) · [Before (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4022)

```diff
-         this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, gT.h)(this._pipelineContext), this._engine._r … [truncated]
+         this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, IB.j)(this._pipelineContext), this._engine._r … [truncated]
```

#### 195. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4026` → after: `L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4026) · [Before (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4026)

```diff
-         UT && (MT.d.GetShadersStore(WT)[`${TT}PixelShader`] = UT), mT && (MT.d.GetShadersStore(WT)[`${TT}VertexShader`] = mT)
+         jB && (dB.e.GetShadersStore(QB)[`${BB}PixelShader`] = jB), zB && (dB.e.GetShadersStore(QB)[`${BB}VertexShader`] = zB)
```

#### 196. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4032` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4032) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4032)

```diff
-     HT.LogShaderCodeOnCompilationError = !0, HT.PersistentMode = !1, HT.AutomaticallyClearCodeCache = !1, HT._UniqueIdSeed = 0, HT._BaseCache = {}, HT.ShadersStore = MT.d.ShadersStore, HT.IncludesShadersStore = MT.d.IncludesShadersStore
+     uB.LogShaderCodeOnCompilationError = !0, uB.PersistentMode = !1, uB.AutomaticallyClearCodeCache = !1, uB._UniqueIdSeed = 0, uB._BaseCache = {}, uB.ShadersStore = dB.e.ShadersStore, uB.IncludesShadersStore = dB.e.IncludesShadersStore
```

#### 197. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4034` → after: `L4034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4034) · [Before (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4034)

```diff
-   40263: (TT, UT, mT) => {
+   40225: (BB, jB, zB) => {
```

#### 198. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4036-L4038` → after: `L4036-L4038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4036-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4036-L4038) · [Before (L4036-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4036-L4038)

```diff
-       b: () => jT,
-       c: () => eT,
-       d: () => OT
+       d: () => aB,
+       e: () => MB,
+       i: () => SB
```

#### 199. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4040-L4046` → after: `L4040-L4046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4040-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4040-L4046) · [Before (L4040-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4040-L4046)

```diff
-     var WT = mT(39926),
-       zT = mT(37188),
-       MT = mT(37232),
-       gT = mT(40242);
-     const nT = new zT.e,
-       HT = new zT.e,
-       kT = new zT.e,
+     var QB = zB(39927),
+       nB = zB(37171),
+       dB = zB(37216),
+       IB = zB(40195);
+     const NB = new nB.c,
+       uB = new nB.c,
+       UB = new nB.c,
```

#### 200. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4048` → after: `L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4048) · [Before (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4048)

```diff
-         KF: () => {},
+         aY: () => {},
```

#### 201. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4053-L4054` → after: `L4053-L4054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4053-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4053-L4054) · [Before (L4053-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4053-L4054)

```diff
-       const WT = mT.cWT(),
-         zT = UT.cWT();
+       const QB = zB.nQB(),
+         nB = jB.nQB();
```

#### 202. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4060` → after: `L4060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4060) · [Before (L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4060)

```diff
-       return (0, MT.l)(UT, HT), lT(TT, HT, kT), (0, MT.l)(kT, mT), mT
+       return (0, dB.k)(jB, uB), pB(BB, uB, UB), (0, dB.k)(UB, zB), zB
```

#### 203. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4065-L4066` → after: `L4065-L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4065-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4065-L4066) · [Before (L4065-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4065-L4066)

```diff
-       const WT = mT.cWT(),
-         zT = UT.cWT();
+       const QB = zB.nQB(),
+         nB = jB.nQB();
```

#### 204. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4072` → after: `L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4072) · [Before (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4072)

```diff
-       return (0, MT.t)(pT(TT, UT, WT), mT, WT), WT
+       return (0, dB.s)(sB(BB, jB, QB), zB, QB), QB
```

#### 205. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4076` → after: `L4076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4076) · [Before (L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4076)

```diff
-       return (0, MT.l)(mT, HT), (0, MT.t)(UT, HT, kT), lT(TT, kT, HT), pT(TT, mT, kT), (0, MT.t)(HT, kT, WT), WT
+       return (0, dB.k)(zB, uB), (0, dB.s)(jB, uB, UB), pB(BB, UB, uB), sB(BB, zB, UB), (0, dB.s)(uB, UB, QB), QB
```

#### 206. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4080` → after: `L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4080) · [Before (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4080)

```diff
-       return (0, MT.l)(mT, HT), (0, MT.t)(UT, HT, kT), lT(TT, kT, HT), BT(TT, WT, zT, kT), (0, MT.t)(HT, kT, gT), gT
+       return (0, dB.k)(zB, uB), (0, dB.s)(jB, uB, UB), pB(BB, UB, uB), JB(BB, QB, nB, UB), (0, dB.s)(uB, UB, IB), IB
```

#### 207. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4084` → after: `L4084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4084) · [Before (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4084)

```diff
-       const mT = jT.KF();
+       const zB = aB.aY();
```

#### 208. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4111-L4112` → after: `L4111-L4112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4111-L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4111-L4112) · [Before (L4111-L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4111-L4112)

```diff
-     const fT = gT.c,
-       qT = WT.b,
+     const GB = IB.d,
+       LB = QB.e,
```

#### 209. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4114` → after: `L4114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4114) · [Before (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4114)

```diff
-       bT = WT.b.prototype.setMatrix;
+       tB = QB.e.prototype.setMatrix;
```

#### 210. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4117` → after: `L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4117) · [Before (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4117)

```diff
-       WT.b.prototype.setMatrix = bT, qT._setMatrixOverride = void 0, fT.prototype._updateMatrixForUniform = iT, fT.prototype._updateMatrixForUniformOverride = void 0
+       QB.e.prototype.setMatrix = tB, LB._setMatrixOverride = void 0, GB.prototype._updateMatrixForUniform = gB, GB.prototype._updateMatrixForUniformOverride = void 0
```

#### 211. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4128` → after: `L4128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4128) · [Before (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4128)

```diff
-   40235: (TT, UT, mT) => {
+   40188: (BB, jB, zB) => {
```

#### 212. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4131` → after: `L4131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4131) · [Before (L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4131)

```diff
-       e: () => zT
+       c: () => nB
```

#### 213. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4133` → after: `L4133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4133) · [Before (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4133)

```diff
-     var WT = mT(40228);
+     var QB = zB(40183);
```

#### 214. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4143` → after: `L4143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4143) · [Before (L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4143)

```diff
-   40223: (TT, UT, mT) => {
+   40180: (BB, jB, zB) => {
```

#### 215. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4145-L4146` → after: `L4145-L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4145-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4145-L4146) · [Before (L4145-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4145-L4146)

```diff
-       b: () => wT,
-       d: () => yT
+       c: () => oB,
+       e: () => FB
```

#### 216. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4148-L4153` → after: `L4148-L4153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4148-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4148-L4153) · [Before (L4148-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4148-L4153)

```diff
-     var WT = mT(40095),
-       zT = mT(40102),
-       MT = mT(37219),
-       gT = mT(37367),
-       nT = mT(37226),
-       HT = mT(37188);
+     var QB = zB(40066),
+       nB = zB(40068),
+       dB = zB(37202),
+       IB = zB(37379),
+       NB = zB(37208),
+       uB = zB(37171);
```

#### 217. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4191` → after: `L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4191) · [Before (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4191)

```diff
-       const mT = Number.isNaN(TT) ? jT : Math.max(TT, jT),
+       const zB = Number.isNaN(BB) ? aB : Math.max(BB, aB),
```

#### 218. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4197` → after: `L4197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4197) · [Before (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4197)

```diff
-         kT[TT][0] <= WT ? zT = TT : MT = TT
+         UB[BB][0] <= QB ? nB = BB : dB = BB
```

#### 219. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4203-L4206` → after: `L4203-L4206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4203-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4203-L4206) · [Before (L4203-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4203-L4206)

```diff
-         bT = HT.o.Lerp(new HT.o(pT, BT), new HT.o(vT, fT), iT),
-         OT = HT.o.Normalize(new HT.o(1, ZT)),
-         eT = HT.o.Normalize(new HT.o(1, qT)),
-         YT = HT.o.Normalize(HT.o.Lerp(OT, eT, iT)),
+         tB = uB.i.Lerp(new uB.i(sB, JB), new uB.i(kB, GB), gB),
+         SB = uB.i.Normalize(new uB.i(1, mB)),
+         MB = uB.i.Normalize(new uB.i(1, LB)),
+         EB = uB.i.Normalize(uB.i.Lerp(SB, MB, gB)),
```

#### 220. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4208` → after: `L4208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4208) · [Before (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4208)

```diff
-       bT.FWT(YT.scale(JT / 3e3));
+       tB.MQB(EB.scale(iB / 3e3));
```

#### 221. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4212` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4212) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4212)

```diff
-       return new HT.p(dT / wT, 1, (1 - dT - wT) / wT)
+       return new uB.m(fB / oB, 1, (1 - fB - oB) / oB)
```

#### 222. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4214-L4215` → after: `L4214-L4215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4214-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4214-L4215) · [Before (L4214-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4214-L4215)

```diff
-     const pT = HT.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
-       BT = HT.e.Invert(pT);
+     const sB = uB.c.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
+       JB = uB.c.Invert(sB);
```

#### 223. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4218` → after: `L4218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4218) · [Before (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4218)

```diff
-       const mT = UT > 0 ? TT / UT : 10;
+       const zB = jB > 0 ? BB / jB : 10;
```

#### 224. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4223-L4225` → after: `L4223-L4225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4223-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4223-L4225) · [Before (L4223-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4223-L4225)

```diff
-       const mT = HT.p.TransformNormal(TT, pT),
-         WT = HT.p.TransformNormal(UT, pT),
-         zT = HT.e.FromArray([ZT(WT.x, mT.x), 0, 0, 0, 0, ZT(WT.y, mT.y), 0, 0, 0, 0, ZT(WT.z, mT.z), 0, 0, 0, 0, 1]);
+       const zB = uB.m.TransformNormal(BB, sB),
+         QB = uB.m.TransformNormal(jB, sB),
+         nB = uB.c.FromArray([mB(QB.x, zB.x), 0, 0, 0, 0, mB(QB.y, zB.y), 0, 0, 0, 0, mB(QB.z, zB.z), 0, 0, 0, 0, 1]);
```

#### 225. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4228-L4233` → after: `L4228-L4233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4228-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4228-L4233) · [Before (L4228-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4228-L4233)

```diff
-     const vT = new HT.p(.95047, 1, 1.08883),
-       fT = HT.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(cT(vT, LT(6500, 0))),
-       qT = HT.e.Invert(fT),
-       iT = HT.p.TransformNormal(new HT.p(1, 1, 1), fT);
-     var bT = mT(40122),
-       OT = mT(40228);
+     const kB = new uB.m(.95047, 1, 1.08883),
+       GB = uB.c.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(yB(kB, rB(6500, 0))),
+       LB = uB.c.Invert(GB),
+       gB = uB.m.TransformNormal(new uB.m(1, 1, 1), GB);
+     var tB = zB(40086),
+       SB = zB(40183);
```

#### 226. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4262` → after: `L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4262) · [Before (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4262)

```diff
-           this._dirty = !0, this._tempColor = new gT.g(0, 0, 0, 0), this._globalCurve = new gT.g(0, 0, 0, 0), this._highlightsCurve = new gT.g(0, 0, 0, 0), this._midtonesCurve = new gT.g(0, 0, 0, 0), this._shadowsCurve = new gT.g(0, 0, 0, 0), this._positiveCurve = new gT.g(0, 0,  … [truncated]
+           this._dirty = !0, this._tempColor = new IB.g(0, 0, 0, 0), this._globalCurve = new IB.g(0, 0, 0, 0), this._highlightsCurve = new IB.g(0, 0, 0, 0), this._midtonesCurve = new IB.g(0, 0, 0, 0), this._shadowsCurve = new IB.g(0, 0, 0, 0), this._positiveCurve = new IB.g(0, 0,  … [truncated]
```

#### 227. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4409` → after: `L4409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4409) · [Before (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4409)

```diff
-           return bT.e.Clone((() => new TT), this)
+           return tB.b.Clone((() => new BB), this)
```

#### 228. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4412` → after: `L4412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4412) · [Before (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4412)

```diff
-           return bT.e.Serialize(this)
+           return tB.b.Serialize(this)
```

#### 229. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4422)

```diff
-         UT = [(0, zT.L)()], mT = [(0, zT.L)()], MT = [(0, zT.L)()], nT = [(0, zT.L)()], HT = [(0, zT.L)()], kT = [(0, zT.L)()], jT = [(0, zT.L)()], lT = [(0, zT.L)()], LT = [(0, zT.L)()], pT = [(0, zT.L)()], BT = [(0, zT.L)()], ZT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
+         jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], NB = [(0, nB.A)()], uB = [(0, nB.A)()], UB = [(0, nB.A)()], aB = [(0, nB.A)()], pB = [(0, nB.A)()], rB = [(0, nB.A)()], sB = [(0, nB.A)()], JB = [(0, nB.A)()], mB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
```

#### 230. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4435` → after: `L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4435) · [Before (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4435)

```diff
-         }, cT, vT), (0, WT.h)(null, null, mT, {
+         }, yB, kB), (0, QB.e)(null, null, zB, {
```

#### 231. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4448` → after: `L4448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4448) · [Before (L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4448)

```diff
-         }, fT, qT), (0, WT.h)(null, null, MT, {
+         }, GB, LB), (0, QB.e)(null, null, dB, {
```

#### 232. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4461` → after: `L4461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4461) · [Before (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4461)

```diff
-         }, iT, eT), (0, WT.h)(null, null, nT, {
+         }, gB, MB), (0, QB.e)(null, null, NB, {
```

#### 233. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4474` → after: `L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4474) · [Before (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4474)

```diff
-         }, YT, JT), (0, WT.h)(null, null, HT, {
+         }, EB, iB), (0, QB.e)(null, null, uB, {
```

#### 234. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4487` → after: `L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4487) · [Before (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4487)

```diff
-         }, xT, dT), (0, WT.h)(null, null, kT, {
+         }, qB, fB), (0, QB.e)(null, null, UB, {
```

#### 235. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4500` → after: `L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4500) · [Before (L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4500)

```diff
-         }, wT, tT), (0, WT.h)(null, null, jT, {
+         }, oB, HB), (0, QB.e)(null, null, aB, {
```

#### 236. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4513` → after: `L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4513) · [Before (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4513)

```diff
-         }, aT, yT), (0, WT.h)(null, null, lT, {
+         }, DB, FB), (0, QB.e)(null, null, pB, {
```

#### 237. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4526` → after: `L4526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4526) · [Before (L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4526)

```diff
-         }, XT, IT), (0, WT.h)(null, null, LT, {
+         }, YB, VB), (0, QB.e)(null, null, rB, {
```

#### 238. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4539` → after: `L4539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4539) · [Before (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4539)

```diff
-         }, QT, sT), (0, WT.h)(null, null, pT, {
+         }, hB, XB), (0, QB.e)(null, null, sB, {
```

#### 239. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4552` → after: `L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4552) · [Before (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4552)

```diff
-         }, FT, PT), (0, WT.h)(null, null, BT, {
+         }, ZB, AB), (0, QB.e)(null, null, JB, {
```

#### 240. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4565` → after: `L4565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4565) · [Before (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4565)

```diff
-         }, VT, uT), (0, WT.h)(null, null, ZT, {
+         }, TB, PB), (0, QB.e)(null, null, mB, {
```

#### 241. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4593-L4595` → after: `L4593-L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4593-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4593-L4595) · [Before (L4593-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4593-L4595)

```diff
-     var JT = mT(40022),
-       xT = mT(40235),
-       dT = mT(37239);
+     var iB = zB(40015),
+       qB = zB(40188),
+       fB = zB(37222);
```

#### 242. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4656` → after: `L4656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4656) · [Before (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4656)

```diff
-             this.colorCurves = (0, WT.k)(this, hT, new eT), this._colorCurvesEnabled = ((0, WT.k)(this, DT), (0, WT.k)(this, oT, !1)), this._colorGradingTexture = ((0, WT.k)(this, AT), (0, WT.k)(this, RT, void 0)), this._colorGradingEnabled = ((0, WT.k)(this, TU), (0, WT.k)(this, … [truncated]
+             this.colorCurves = (0, QB.g)(this, cB, new MB), this._colorCurvesEnabled = ((0, QB.g)(this, bB), (0, QB.g)(this, vB, !1)), this._colorGradingTexture = ((0, QB.g)(this, RB), (0, QB.g)(this, OB, void 0)), this._colorGradingEnabled = ((0, QB.g)(this, Bj), (0, QB.g)(this, … [truncated]
```

#### 243. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4722` → after: `L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4722) · [Before (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4722)

```diff
-             TT = Number.isNaN(TT) ? jT : Math.max(TT, jT), this._temperature !== TT && (this._temperature = TT, this._updateParameters())
+             BB = Number.isNaN(BB) ? aB : Math.max(BB, aB), this._temperature !== BB && (this._temperature = BB, this._updateParameters())
```

#### 244. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4734` → after: `L4734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4734) · [Before (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4734)

```diff
-               return HT.e.GetAsMatrix3x3(WT)
+               return uB.c.GetAsMatrix3x3(QB)
```

#### 245. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4816-L4817` → after: `L4816-L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4816-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4816-L4817) · [Before (L4816-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4816-L4817)

```diff
-               const mT = 1 / (this.outputTextureWidth || TT.eB().getRenderWidth()),
-                 WT = 1 / (this.outputTextureHeight || TT.eB().getRenderHeight());
+               const zB = 1 / (this.outputTextureWidth || BB.wJ().getRenderWidth()),
+                 QB = 1 / (this.outputTextureHeight || BB.wJ().getRenderHeight());
```

#### 246. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4819` → after: `L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4819) · [Before (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4819)

```diff
-                 const zT = null != UT ? UT : WT / mT;
+                 const nB = null != jB ? jB : QB / zB;
```

#### 247. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4823` → after: `L4823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4823) · [Before (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4823)

```diff
-                 gT = (0, JT.m)(gT, nT, this.vignetteStretch), MT = (0, JT.m)(MT, nT, this.vignetteStretch), TT.setFloat4("vignetteSettings1", gT, MT, -gT * this.vignetteCenterX, -MT * this.vignetteCenterY);
+                 IB = (0, iB.e)(IB, NB, this.vignetteStretch), dB = (0, iB.e)(dB, NB, this.vignetteStretch), BB.setFloat4("vignetteSettings1", IB, dB, -IB * this.vignetteCenterX, -dB * this.vignetteCenterY);
```

#### 248. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4835` → after: `L4835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4835) · [Before (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4835)

```diff
-             return bT.e.Clone((() => new TT), this)
+             return tB.b.Clone((() => new BB), this)
```

#### 249. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4838` → after: `L4838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4838) · [Before (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4838)

```diff
-             return bT.e.Serialize(this)
+             return tB.b.Serialize(this)
```

#### 250. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4848` → after: `L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4848) · [Before (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4848)

```diff
-           UT = [(0, zT.k)()], mT = [(0, zT.L)()], kT = [(0, zT.C)("colorGradingTexture")], pT = [(0, zT.L)()], BT = [(0, zT.L)()], ZT = [(0, zT.L)()], vT = [(0, zT.L)()], OT = [(0, zT.L)()], dT = [(0, zT.L)()], wT = [(0, zT.L)()], tT = [(0, zT.L)()], aT = [(0, zT.L)()], yT = [(0, … [truncated]
+           jB = [(0, nB.g)()], zB = [(0, nB.A)()], UB = [(0, nB.v)("colorGradingTexture")], sB = [(0, nB.A)()], JB = [(0, nB.A)()], mB = [(0, nB.A)()], kB = [(0, nB.A)()], SB = [(0, nB.A)()], fB = [(0, nB.A)()], oB = [(0, nB.A)()], HB = [(0, nB.A)()], DB = [(0, nB.A)()], FB = [(0, … [truncated]
```

#### 251. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4861` → after: `L4861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4861) · [Before (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4861)

```diff
-           }, hT, DT), (0, WT.h)(null, null, mT, {
+           }, cB, bB), (0, QB.e)(null, null, zB, {
```

#### 252. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4874` → after: `L4874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4874) · [Before (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4874)

```diff
-           }, oT, AT), (0, WT.h)(null, null, kT, {
+           }, vB, RB), (0, QB.e)(null, null, UB, {
```

#### 253. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4887` → after: `L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4887) · [Before (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4887)

```diff
-           }, RT, TU), (0, WT.h)(null, null, pT, {
+           }, OB, Bj), (0, QB.e)(null, null, sB, {
```

#### 254. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4900` → after: `L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4900) · [Before (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4900)

```diff
-           }, UU, mU), (0, WT.h)(null, null, BT, {
+           }, jj, zj), (0, QB.e)(null, null, JB, {
```

#### 255. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4913` → after: `L4913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4913) · [Before (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4913)

```diff
-           }, WU, zU), (0, WT.h)(null, null, ZT, {
+           }, Qj, nj), (0, QB.e)(null, null, mB, {
```

#### 256. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4926` → after: `L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4926) · [Before (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4926)

```diff
-           }, MU, gU), (0, WT.h)(null, null, vT, {
+           }, dj, Ij), (0, QB.e)(null, null, kB, {
```

#### 257. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4939` → after: `L4939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4939) · [Before (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4939)

```diff
-           }, nU, HU), (0, WT.h)(null, null, OT, {
+           }, Nj, uj), (0, QB.e)(null, null, SB, {
```

#### 258. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4952` → after: `L4952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4952) · [Before (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4952)

```diff
-           }, kU, jU), (0, WT.h)(null, null, dT, {
+           }, Uj, aj), (0, QB.e)(null, null, fB, {
```

#### 259. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4965` → after: `L4965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4965) · [Before (L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4965)

```diff
-           }, lU, LU), (0, WT.h)(null, null, wT, {
+           }, pj, rj), (0, QB.e)(null, null, oB, {
```

#### 260. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4978` → after: `L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4978) · [Before (L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4978)

```diff
-           }, pU, BU), (0, WT.h)(null, null, tT, {
+           }, sj, Jj), (0, QB.e)(null, null, HB, {
```

#### 261. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4991` → after: `L4991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L4991) · [Before (L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L4991)

```diff
-           }, ZU, cU), (0, WT.h)(null, null, aT, {
+           }, mj, yj), (0, QB.e)(null, null, DB, {
```

#### 262. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5004` → after: `L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5004) · [Before (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5004)

```diff
-           }, vU, fU), (0, WT.h)(null, null, yT, {
+           }, kj, Gj), (0, QB.e)(null, null, FB, {
```

#### 263. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5017` → after: `L5017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5017) · [Before (L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5017)

```diff
-           }, qU, iU), (0, WT.h)(null, null, XT, {
+           }, Lj, gj), (0, QB.e)(null, null, YB, {
```

#### 264. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5030` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5030) · [Before (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5030)

```diff
-           }, bU, OU), (0, WT.h)(null, null, IT, {
+           }, tj, Sj), (0, QB.e)(null, null, VB, {
```

#### 265. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5043` → after: `L5043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5043) · [Before (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5043)

```diff
-           }, eU, YU), (0, WT.h)(null, null, QT, {
+           }, Mj, Ej), (0, QB.e)(null, null, hB, {
```

#### 266. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5056` → after: `L5056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5056) · [Before (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5056)

```diff
-           }, JU, xU), (0, WT.h)(null, null, sT, {
+           }, ij, qj), (0, QB.e)(null, null, XB, {
```

#### 267. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5069` → after: `L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5069) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5069)

```diff
-           }, dU, wU), (0, WT.h)(null, null, FT, {
+           }, fj, oj), (0, QB.e)(null, null, ZB, {
```

#### 268. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5082` → after: `L5082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5082) · [Before (L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5082)

```diff
-           }, tU, aU), (0, WT.h)(null, null, PT, {
+           }, Hj, Dj), (0, QB.e)(null, null, AB, {
```

#### 269. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5095` → after: `L5095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5095) · [Before (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5095)

```diff
-           }, yU, XU), (0, WT.h)(null, null, VT, {
+           }, Fj, Yj), (0, QB.e)(null, null, TB, {
```

#### 270. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5108` → after: `L5108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5108) · [Before (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5108)

```diff
-           }, IU, QU), (0, WT.h)(null, null, uT, {
+           }, Vj, hj), (0, QB.e)(null, null, PB, {
```

#### 271. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5121` → after: `L5121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5121) · [Before (L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5121)

```diff
-           }, sU, FU), (0, WT.h)(null, null, CT, {
+           }, Xj, Zj), (0, QB.e)(null, null, WB, {
```

#### 272. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5134` → after: `L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5134) · [Before (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5134)

```diff
-           }, PU, VU), (0, WT.h)(null, null, rT, {
+           }, Aj, Tj), (0, QB.e)(null, null, eB, {
```

#### 273. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5147` → after: `L5147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5147) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5147)

```diff
-           }, uU, CU), (0, WT.h)(null, null, KT, {
+           }, Pj, Wj), (0, QB.e)(null, null, lB, {
```

#### 274. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5160` → after: `L5160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5160) · [Before (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5160)

```diff
-           }, rU, KU), (0, WT.h)(null, null, ST, {
+           }, ej, lj), (0, QB.e)(null, null, wB, {
```

#### 275. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5173` → after: `L5173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5173) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5173)

```diff
-           }, SU, GU), (0, WT.h)(null, null, GT, {
+           }, wj, xj), (0, QB.e)(null, null, xB, {
```

#### 276. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5186` → after: `L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5186) · [Before (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5186)

```diff
-           }, NU, EU), (0, WT.h)(null, null, NT, {
+           }, Kj, Cj), (0, QB.e)(null, null, KB, {
```

#### 277. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5199` → after: `L5199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5199) · [Before (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5199)

```diff
-           }, hU, DU), (0, WT.h)(null, null, ET, {
+           }, cj, bj), (0, QB.e)(null, null, CB, {
```

#### 278. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5218` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5218) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5218)

```diff
-         })(), TT.TONEMAPPING_STANDARD = 0, TT.TONEMAPPING_ACES = 1, TT.TONEMAPPING_KHR_PBR_NEUTRAL = 2, TT.PrepareUniforms = xT.e, TT.PrepareSamplers = xT.b, TT._VIGNETTEMODE_MULTIPLY = 0, TT._VIGNETTEMODE_OPAQUE = 1, TT
+         })(), BB.TONEMAPPING_STANDARD = 0, BB.TONEMAPPING_ACES = 1, BB.TONEMAPPING_KHR_PBR_NEUTRAL = 2, BB.PrepareUniforms = qB.c, BB.PrepareSamplers = qB.b, BB._VIGNETTEMODE_MULTIPLY = 0, BB._VIGNETTEMODE_OPAQUE = 1, BB
```

#### 279. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5223` → after: `L5223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5223) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5223)

```diff
-       const UT = bT.e.Parse((() => new wT), TT, null, null);
+       const jB = tB.b.Parse((() => new oB), BB, null, null);
```

#### 280. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5228` → after: `L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5228) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5228)

```diff
-       tT || (tT = !0, wT.Parse = aT, bT.e._ImageProcessingConfigurationParser = aT, (0, dT.h)("BABYLON.ImageProcessingConfiguration", wT))
+       HB || (HB = !0, oB.Parse = DB, tB.b._ImageProcessingConfigurationParser = DB, (0, fB.d)("BABYLON.ImageProcessingConfiguration", oB))
```

#### 281. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5231` → after: `L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5231) · [Before (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5231)

```diff
-   40242: (TT, UT, mT) => {
+   40195: (BB, jB, zB) => {
```

#### 282. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5233` → after: `L5233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5233) · [Before (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5233)

```diff
-       c: () => MT
+       d: () => dB
```

#### 283. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5235-L5236` → after: `L5235-L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5235-L5236) · [Before (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5235-L5236)

```diff
-     var WT = mT(38800),
-       zT = mT(40201);
+     var QB = zB(38783),
+       nB = zB(40164);
```

#### 284. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5243` → after: `L5243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5243) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5243)

```diff
-         this._uniformNames = [], this._valueCache = {}, this._engine = TT, this._noUBO = !TT.supportsUniformBuffers || zT, this._dynamic = mT, this._name = WT ?? "no-name", this._data = UT || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
+         this._uniformNames = [], this._valueCache = {}, this._engine = BB, this._noUBO = !BB.supportsUniformBuffers || nB, this._dynamic = zB, this._name = QB ?? "no-name", this._data = jB || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
```

#### 285. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5265` → after: `L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5265) · [Before (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5265)

```diff
-         if (UT = TT <= 2 ? TT : 4, this._uniformLocationPointer % UT !== 0) {
+         if (jB = BB <= 2 ? BB : 4, this._uniformLocationPointer % jB !== 0) {
```

#### 286. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5300` → after: `L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5300) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5300)

```diff
-         this.addUniform(TT, Array.prototype.slice.call(UT.cWT()))
+         this.addUniform(BB, Array.prototype.slice.call(jB.nQB()))
```

#### 287. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5423` → after: `L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5423) · [Before (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5423)

```diff
-           if (this._buffer) return void WT.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + TT);
+           if (this._buffer) return void QB.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + BB);
```

#### 288. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5438` → after: `L5438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5438) · [Before (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5438)

```diff
-         if (void 0 === MT) return void WT.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
+         if (void 0 === dB) return void QB.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
```

#### 289. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5449` → after: `L5449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5449) · [Before (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5449)

```diff
-             if (this._bufferData[MT + 4 * nT + WT] !== zT.j.FloatRound(UT[HT]) && (TT = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[MT + 4 * nT + WT] = UT[HT]), WT++, WT === gT.strideSize) {
+             if (this._bufferData[dB + 4 * NB + QB] !== nB.i.FloatRound(jB[uB]) && (BB = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[dB + 4 * NB + QB] = jB[uB]), QB++, QB === IB.strideSize) {
```

#### 290. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5544` → after: `L5544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5544) · [Before (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5544)

```diff
-         this._cacheMatrix(TT, UT) && this.updateUniform(TT, UT.cWT(), 16)
+         this._cacheMatrix(BB, jB) && this.updateUniform(BB, jB.nQB(), 16)
```

#### 291. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5688` → after: `L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5688) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5688)

```diff
-   40007: (TT, UT, mT) => {
+   40001: (BB, jB, zB) => {
```

#### 292. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5690` → after: `L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5690) · [Before (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5690)

```diff
-       c: () => zT
+       d: () => nB
```

#### 293. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5692` → after: `L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5692) · [Before (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5692)

```diff
-     var WT = mT(40016);
+     var QB = zB(40008);
```

#### 294. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5702` → after: `L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5702) · [Before (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5702)

```diff
-   40106: (TT, UT, mT) => {
+   40076: (BB, jB, zB) => {
```

#### 295. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5705` → after: `L5705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5705) · [Before (L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5705)

```diff
-       g: () => kT
+       f: () => UB
```

#### 296. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5723` → after: `L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5723) · [Before (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5723)

```diff
-       return "function" === typeof TT ? TT : TT?.constructor
+       return "function" === typeof BB ? BB : BB?.constructor
```

#### 297. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5727` → after: `L5727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5727) · [Before (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5727)

```diff
-       if (!TT) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(gT)}) polyfill must run before decorated classes are evaluated.`);
+       if (!BB) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(IB)}) polyfill must run before decorated classes are evaluated.`);
```

#### 298. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5748` → after: `L5748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5748) · [Before (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5748)

```diff
-   40102: (TT, UT, mT) => {
+   40068: (BB, jB, zB) => {
```

#### 299. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5750-L5755` → after: `L5750-L5753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5750-L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5750-L5753) · [Before (L5750-L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5750-L5755)

```diff
-       B: () => ZT,
-       C: () => nT,
-       F: () => jT,
-       J: () => lT,
-       L: () => gT,
-       d: () => qT,
+       A: () => IB,
+       b: () => LB,
+       e: () => dB,
+       f: () => GB,
```

#### 300. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5760` → after: `L5757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5757) · [Before (L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5760)

```diff
-       n: () => BT,
+       p: () => UB,
```

#### 301. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5765` → after: `L5765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5765) · [Before (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5765)

```diff
-     var WT = mT(40106);
+     var QB = zB(40076);
```

#### 302. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5883` → after: `L5883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5883) · [Before (L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5883)

```diff
-   40122: (TT, UT, mT) => {
+   40086: (BB, jB, zB) => {
```

#### 303. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5885` → after: `L5885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5885) · [Before (L5885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5885)

```diff
-       e: () => kT
+       b: () => UB
```

#### 304. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5888-L5891` → after: `L5888-L5891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5888-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5888-L5891) · [Before (L5888-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5888-L5891)

```diff
-       zT = mT(40129),
-       MT = mT(37367),
-       gT = mT(37188),
-       nT = mT(40106);
+       nB = zB(40089),
+       dB = zB(37379),
+       IB = zB(37171),
+       NB = zB(40076);
```

#### 305. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5895-L5896` → after: `L5895-L5896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5895-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5895-L5896) · [Before (L5895-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5895-L5896)

```diff
-       zT.b && zT.b.HasTags(UT) && zT.b.AddTagsTo(MT, zT.b.GetTags(UT, !0));
-       const gT = (0, nT.g)(MT),
+       nB.d && nB.d.HasTags(jB) && nB.d.AddTagsTo(dB, nB.d.GetTags(jB, !0));
+       const IB = (0, NB.f)(dB),
```

#### 306. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5910` → after: `L5910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5910) · [Before (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5910)

```diff
-             WT.cloneTexturesOnlyOnce && HT[nT.uniqueId] ? MT[zT] = HT[nT.uniqueId] : (MT[zT] = mT || nT.isRenderTarget ? nT : nT.clone(), HT[nT.uniqueId] = MT[zT]);
+             QB.cloneTexturesOnlyOnce && uB[NB.uniqueId] ? dB[nB] = uB[NB.uniqueId] : (dB[nB] = zB || NB.isRenderTarget ? NB : NB.clone(), uB[NB.uniqueId] = dB[nB]);
```

#### 307. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5921` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5921) · [Before (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5921)

```diff
-             MT[zT] = mT ? nT : nT.clone()
+             dB[nB] = zB ? NB : NB.clone()
```

#### 308. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5937-L5938` → after: `L5937-L5938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5937-L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5937-L5938) · [Before (L5937-L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5937-L5938)

```diff
-         UT || (UT = {}), zT.b && (UT.tags = zT.b.GetTags(TT));
-         const mT = (0, nT.g)(TT);
+         jB || (jB = {}), nB.d && (jB.tags = nB.d.GetTags(BB));
+         const zB = (0, NB.f)(BB);
```

#### 309. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5961` → after: `L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5961) · [Before (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5961)

```diff
-               UT[MT] = nT.cWT();
+               jB[dB] = NB.nQB();
```

#### 310. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5972` → after: `L5972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5972) · [Before (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5972)

```diff
-         const zT = (0, nT.g)(UT);
+         const nB = (0, NB.f)(jB);
```

#### 311. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5993` → after: `L5993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5993) · [Before (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5993)

```diff
-                 TT[nT] = gT.o.FromArray(jT);
+                 BB[NB] = IB.i.FromArray(aB);
```

#### 312. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L5996` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L5996) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L5996)

```diff
-                 TT[nT] = gT.p.FromArray(jT);
+                 BB[NB] = IB.m.FromArray(aB);
```

#### 313. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6011` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6011) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6011)

```diff
-                 TT[nT] = gT.f.FromArray(jT);
+                 BB[NB] = IB.d.FromArray(aB);
```

#### 314. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6017` → after: `L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6017) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6017)

```diff
-                 TT[nT] = gT.e.FromArray(jT);
+                 BB[NB] = IB.c.FromArray(aB);
```

#### 315. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6020` → after: `L6020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6020) · [Before (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6020)

```diff
-                 TT[nT] = gT.t.FromArray(jT)
+                 BB[NB] = IB.n.FromArray(aB)
```

#### 316. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6028` → after: `L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6028) · [Before (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6028)

```diff
-         return zT.b && zT.b.AddTagsTo(MT, UT.tags), kT.ParseProperties(UT, MT, mT, WT), MT
+         return nB.d && nB.d.AddTagsTo(dB, jB.tags), UB.ParseProperties(jB, dB, zB, QB), dB
```

#### 317. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6047` → after: `L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6047) · [Before (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6047)

```diff
-   40039: (TT, UT, mT) => {
+   40034: (BB, jB, zB) => {
```

#### 318. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6049` → after: `L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6049) · [Before (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6049)

```diff
-       b: () => zT
+       d: () => nB
```

#### 319. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6084` → after: `L6084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6084) · [Before (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6084)

```diff
-         zT.Enabled && (this._startMonitoringTime = WT.c.Now)
+         nB.Enabled && (this._startMonitoringTime = QB.e.Now)
```

#### 320. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6090` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6090) · [Before (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6090)

```diff
-         const UT = WT.c.Now;
+         const jB = QB.e.Now;
```

#### 321. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6099` → after: `L6099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6099) · [Before (L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6099)

```diff
-         const TT = WT.c.Now;
+         const BB = QB.e.Now;
```

#### 322. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6105` → after: `L6105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6105) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6105)

```diff
-   40215: (TT, UT, mT) => {
+   40171: (BB, jB, zB) => {
```

#### 323. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6107-L6108` → after: `L6107-L6108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6107-L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6107-L6108) · [Before (L6107-L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6107-L6108)

```diff
-       c: () => zT,
-       f: () => WT
+       e: () => nB,
+       i: () => QB
```

#### 324. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6168` → after: `L6168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6168) · [Before (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6168)

```diff
-   40129: (TT, UT, mT) => {
+   40089: (BB, jB, zB) => {
```

#### 325. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6170` → after: `L6170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6170) · [Before (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6170)

```diff
-       b: () => zT
+       d: () => nB
```

#### 326. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6249` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6249) · [Before (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6249)

```diff
-   40260: (TT, UT, mT) => {
+   40220: (BB, jB, zB) => {
```

#### 327. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6251` → after: `L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6251) · [Before (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6251)

```diff
-       b: () => MT
+       e: () => dB
```

#### 328. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6253-L6254` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6253-L6254) · [Before (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6253-L6254)

```diff
-     var WT = mT(40257),
-       zT = mT(37219);
+     var QB = zB(40211),
+       nB = zB(37202);
```

#### 329. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6257` → after: `L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6257) · [Before (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6257)

```diff
-         this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new zT.d, this._scene = TT
+         this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new nB.c, this._scene = BB
```

#### 330. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6260` → after: `L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6260) · [Before (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6260)

```diff
-         if (this._vertexBuffers[WT.i.PositionKind]) return;
+         if (this._vertexBuffers[QB.l.PositionKind]) return;
```

#### 331. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6262` → after: `L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6262) · [Before (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6262)

```diff
-         TT.push(1, 1), TT.push(-1, 1), TT.push(-1, -1), TT.push(1, -1), this._vertexBuffers[WT.i.PositionKind] = new WT.i(this._scene.eB(), TT, WT.i.PositionKind, !1, !1, 2), this._buildIndexBuffer()
+         BB.push(1, 1), BB.push(-1, 1), BB.push(-1, -1), BB.push(1, -1), this._vertexBuffers[QB.l.PositionKind] = new QB.l(this._scene.wJ(), BB, QB.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
```

#### 332. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6266` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6266) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6266)

```diff
-         TT.push(0), TT.push(1), TT.push(2), TT.push(0), TT.push(2), TT.push(3), this._indexBuffer = this._scene.eB().createIndexBuffer(TT)
+         BB.push(0), BB.push(1), BB.push(2), BB.push(0), BB.push(2), BB.push(3), this._indexBuffer = this._scene.wJ().createIndexBuffer(BB)
```

#### 333. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6278` → after: `L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6278) · [Before (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6278)

```diff
-         const TT = this._vertexBuffers[WT.i.PositionKind];
+         const BB = this._vertexBuffers[QB.l.PositionKind];
```

#### 334. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6294` → after: `L6294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6294) · [Before (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6294)

```diff
-         const nT = this._scene.eB();
+         const NB = this._scene.wJ();
```

#### 335. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6296` → after: `L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6296) · [Before (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6296)

```diff
-           HT < TT.length - 1 ? TT[HT + 1].activate(this._scene.activeCamera || this._scene, UT?.texture) : (UT ? nT.bindFramebuffer(UT, WT, void 0, void 0, mT, zT) : MT || nT.restoreDefaultFramebuffer(), nT._debugInsertMarker?.(`post process ${TT[HT].name} output`));
+           uB < BB.length - 1 ? BB[uB + 1].activate(this._scene.activeCamera || this._scene, jB?.texture) : (jB ? NB.bindFramebuffer(jB, QB, void 0, void 0, zB, nB) : dB || NB.restoreDefaultFramebuffer(), NB._debugInsertMarker?.(`post process ${BB[uB].name} output`));
```

#### 336. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6308)

```diff
-         const gT = this._scene.eB();
+         const IB = this._scene.wJ();
```

#### 337. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6311` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6311) · [Before (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6311)

```diff
-           if (nT < HT - 1 ? kT._outputTexture = WT[nT + 1].activate(MT, UT?.texture) : (UT ? (gT.bindFramebuffer(UT, mT, void 0, void 0, zT), kT._outputTexture = UT) : (gT.restoreDefaultFramebuffer(), kT._outputTexture = null), gT._debugInsertMarker?.(`post process ${WT[nT].name} … [truncated]
+           if (NB < uB - 1 ? UB._outputTexture = QB[NB + 1].activate(dB, jB?.texture) : (jB ? (IB.bindFramebuffer(jB, zB, void 0, void 0, nB), UB._outputTexture = jB) : (IB.restoreDefaultFramebuffer(), UB._outputTexture = null), IB._debugInsertMarker?.(`post process ${QB[NB].name} … [truncated]
```

#### 338. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6318-L6319` → after: `L6318-L6319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6318-L6319) · [Before (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6318-L6319)

```diff
-         const TT = this._vertexBuffers[WT.i.PositionKind];
-         TT && (TT.dispose(), this._vertexBuffers[WT.i.PositionKind] = null), this._indexBuffer && (this._scene.eB()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
+         const BB = this._vertexBuffers[QB.l.PositionKind];
+         BB && (BB.dispose(), this._vertexBuffers[QB.l.PositionKind] = null), this._indexBuffer && (this._scene.wJ()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
```

#### 339. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6323` → after: `L6323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6323) · [Before (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6323)

```diff
-   40274: (TT, UT, mT) => {
+   40238: (BB, jB, zB) => {
```

#### 340. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6325` → after: `L6325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6325) · [Before (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6325)

```diff
-       b: () => kT
+       e: () => UB
```

#### 341. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6327-L6328` → after: `L6327-L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6327-L6328) · [Before (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6327-L6328)

```diff
-     var WT = mT(40215),
-       zT = mT(37188);
+     var QB = zB(40171),
+       nB = zB(37171);
```

#### 342. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6350` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6350) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6350)

```diff
-         this.index = TT, this._opaqueSubMeshes = new WT.f(256), this._transparentSubMeshes = new WT.f(256), this._alphaTestSubMeshes = new WT.f(256), this._depthOnlySubMeshes = new WT.f(256), this._particleSystems = new WT.f(256), this._spriteManagers = new WT.f(256), this._empty … [truncated]
+         this.index = BB, this._opaqueSubMeshes = new QB.i(256), this._transparentSubMeshes = new QB.i(256), this._alphaTestSubMeshes = new QB.i(256), this._depthOnlySubMeshes = new QB.i(256), this._particleSystems = new QB.i(256), this._spriteManagers = new QB.i(256), this._empty … [truncated]
```

#### 343. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6359` → after: `L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6359) · [Before (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6359)

```diff
-         const kT = this._scene.eB();
+         const UB = this._scene.wJ();
```

#### 344. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6389` → after: `L6389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6389) · [Before (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6389)

```diff
-           for (; lT < TT.length; lT++) jT = TT.data[lT], jT._alphaIndex = jT.getMesh().alphaIndex, jT._distanceToCamera = zT.p.Distance(jT.rV().rWT.centerWorld, LT);
+           for (; pB < BB.length; pB++) aB = BB.data[pB], aB._alphaIndex = aB.getMesh().alphaIndex, aB._distanceToCamera = nB.m.Distance(aB.rV().fQB.centerWorld, rB);
```

#### 345. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6405` → after: `L6405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6405) · [Before (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6405)

```diff
-         const MT = TT[0].getMesh().KF();
+         const dB = BB[0].getMesh().aY();
```

#### 346. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6410` → after: `L6410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6410) · [Before (L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6410)

```diff
-             const TT = zT.wB();
+             const BB = nB.bJ();
```

#### 347. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6413` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6413) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6413)

```diff
-               const mT = TT.KF().eB();
+               const zB = BB.aY().wJ();
```

#### 348. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6430` → after: `L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6430) · [Before (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6430)

```diff
-               mT(zT, TT[UT]) < 0 ? gT = UT : MT = UT + 1
+               zB(nB, BB[jB]) < 0 ? IB = jB : dB = jB + 1
```

#### 349. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6487` → after: `L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6487) · [Before (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6487)

```diff
-         void 0 === UT && (UT = TT.getMesh()), void 0 === mT && (mT = TT.wB()), null !== mT && void 0 !== mT && (mT.needAlphaBlendingForMesh(UT) ? this._transparentSubMeshes.push(TT) : mT.needAlphaTestingForMesh(UT) ? (mT.needDepthPrePass && !this.disableDepthPrePass && this._dept … [truncated]
+         void 0 === jB && (jB = BB.getMesh()), void 0 === zB && (zB = BB.bJ()), null !== zB && void 0 !== zB && (zB.needAlphaBlendingForMesh(jB) ? this._transparentSubMeshes.push(BB) : zB.needAlphaTestingForMesh(jB) ? (zB.needDepthPrePass && !this.disableDepthPrePass && this._dept … [truncated]
```

#### 350. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6518` → after: `L6518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6518) · [Before (L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6518)

```diff
-     kT._ZeroVector = zT.p.Zero()
+     UB._ZeroVector = nB.m.Zero()
```

#### 351. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6520` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6520) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6520)

```diff
-   40270: (TT, UT, mT) => {
+   40232: (BB, jB, zB) => {
```

#### 352. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6524` → after: `L6524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6524) · [Before (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6524)

```diff
-     var WT = mT(40274);
+     var QB = zB(40238);
```

#### 353. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6542-L6543` → after: `L6542-L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6542-L6543) · [Before (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6542-L6543)

```diff
-           if (TT.rY)
-             for (const UT of TT.rY) UT._wasDispatched = !1;
+           if (BB.cL)
+             for (const jB of BB.cL) jB._wasDispatched = !1;
```

#### 354. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6546` → after: `L6546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6546) · [Before (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6546)

```diff
-         for (const TT of this._scene.EY) TT._wasDispatched = !1
+         for (const BB of this._scene.RL) BB._wasDispatched = !1
```

#### 355. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6566` → after: `L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6566) · [Before (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6566)

```diff
-         this._depthStencilBufferAlreadyCleaned || (this._scene.eB().clear(null, !1, TT, UT), this._depthStencilBufferAlreadyCleaned = !0)
+         this._depthStencilBufferAlreadyCleaned || (this._scene.wJ().clear(null, !1, BB, jB), this._depthStencilBufferAlreadyCleaned = !0)
```

#### 356. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6576` → after: `L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6576) · [Before (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6576)

```diff
-         lT.XZ = this._scene, lT.camera = this._scene.activeCamera, lT.renderingManager = this;
+         pB.ny = this._scene, pB.camera = this._scene.activeCamera, pB.renderingManager = this;
```

#### 357. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6626` → after: `L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6626) · [Before (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6626)

```diff
-         void 0 === this._renderingGroups[TT] && (this._renderingGroups[TT] = new WT.b(TT, this._scene, this._customOpaqueSortCompareFn[TT], this._customAlphaTestSortCompareFn[TT], this._customTransparentSortCompareFn[TT]), this._renderingGroups[TT].disableDepthPrePass = this._dis … [truncated]
+         void 0 === this._renderingGroups[BB] && (this._renderingGroups[BB] = new QB.e(BB, this._scene, this._customOpaqueSortCompareFn[BB], this._customAlphaTestSortCompareFn[BB], this._customTransparentSortCompareFn[BB]), this._renderingGroups[BB].disableDepthPrePass = this._dis … [truncated]
```

#### 358. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6661` → after: `L6661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6661) · [Before (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6661)

```diff
-   39994: (TT, UT, mT) => {
+   39988: (BB, jB, zB) => {
```

#### 359. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6663` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6663) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6663)

```diff
-       b: () => WT
+       c: () => QB
```

#### 360. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6710` → after: `L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6710) · [Before (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6710)

```diff
-             const UT = zT < this._numTargetEnabled ? zT : 0;
+             const jB = nB < this._numTargetEnabled ? nB : 0;
```

#### 361. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6717` → after: `L6717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6717) · [Before (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6717)

```diff
-             const UT = TT < this._numTargetEnabled ? 4 * TT : 0;
+             const jB = BB < this._numTargetEnabled ? 4 * BB : 0;
```

#### 362. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6724` → after: `L6724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6724) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6724)

```diff
-             const UT = TT < this._numTargetEnabled ? 2 * TT : 0;
+             const jB = BB < this._numTargetEnabled ? 2 * BB : 0;
```

#### 363. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6800` → after: `L6800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6800) · [Before (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6800)

```diff
-   40305: (TT, UT, mT) => {
+   40276: (BB, jB, zB) => {
```

#### 364. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6802` → after: `L6802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6802) · [Before (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6802)

```diff
-       c: () => WT
+       d: () => QB
```

#### 365. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6807` → after: `L6807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6807) · [Before (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6807)

```diff
-   40198: (TT, UT, mT) => {
+   40156: (BB, jB, zB) => {
```

#### 366. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6810` → after: `L6810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6810) · [Before (L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6810)

```diff
-       i: () => Mm
+       g: () => dz
```

#### 367. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6812-L6813` → after: `L6812-L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6812-L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6812-L6813) · [Before (L6812-L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6812-L6813)

```diff
-     var WT = mT(40201),
-       zT = mT(39975),
+     var QB = zB(40164),
+       nB = zB(39976),
```

#### 368. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6815-L6816` → after: `L6815-L6816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6815-L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6815-L6816) · [Before (L6815-L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6815-L6816)

```diff
-       gT = mT(37219),
-       nT = mT(40215);
+       IB = zB(37202),
+       NB = zB(40171);
```

#### 369. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6834` → after: `L6834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6834) · [Before (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6834)

```diff
-         return void 0 !== mT ? mT : (this.add(TT, UT), UT)
+         return void 0 !== zB ? zB : (this.add(BB, jB), jB)
```

#### 370. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6871-L6875` → after: `L6871-L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6871-L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6871-L6875) · [Before (L6871-L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6871-L6875)

```diff
-     var kT = mT(40129),
-       jT = mT(37188),
-       lT = mT(40223),
-       LT = mT(40242),
-       pT = mT(40251);
+     var UB = zB(40089),
+       aB = zB(37171),
+       pB = zB(40180),
+       rB = zB(40195),
+       sB = zB(40202);
```

#### 371. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6881` → after: `L6881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6881) · [Before (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6881)

```diff
-         const WT = TT.KF();
+         const QB = BB.aY();
```

#### 372. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6894-L6899` → after: `L6894-L6899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6894-L6899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6894-L6899) · [Before (L6894-L6899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6894-L6899)

```diff
-     var ZT = mT(40260),
-       cT = mT(40263),
-       vT = mT(40270),
-       fT = mT(40283),
-       qT = mT(39946),
-       iT = mT(37216),
+     var mB = zB(40220),
+       yB = zB(40225),
+       kB = zB(40232),
+       GB = zB(40247),
+       LB = zB(39943),
+       gB = zB(37197),
```

#### 373. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6901` → after: `L6901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6901) · [Before (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6901)

```diff
-       OT = mT(40288);
+       SB = zB(40255);
```

#### 374. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6926` → after: `L6926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6926) · [Before (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6926)

```diff
-     var YT, JT, xT, dT, wT, tT, aT, yT = mT(40290);
+     var EB, iB, qB, fB, oB, HB, DB, FB = zB(40264);
```

#### 375. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6948` → after: `L6948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6948) · [Before (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6948)

```diff
-     var XT = mT(40297);
+     var YB = zB(40268);
```

#### 376. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6959` → after: `L6959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L6959) · [Before (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L6959)

```diff
-             throw `Unable to generate event for device ${YT[TT]}`
+             throw `Unable to generate event for device ${EB[BB]}`
```

#### 377. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7034` → after: `L7034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7034) · [Before (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7034)

```diff
-         this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = WT.j.IsSafari(), this._usingMacOs = (0, qT.f)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = TT => {}, this._keyboardUpEvent = TT => {}, this._k … [truncated]
+         this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = QB.i.IsSafari(), this._usingMacOs = (0, LB.k)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = BB => {}, this._keyboardUpEvent = BB => {}, this._k … [truncated]
```

#### 378. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7040` → after: `L7040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7040) · [Before (L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7040)

```diff
-         if (!zT) throw `Unable to find device ${YT[TT]}`;
+         if (!nB) throw `Unable to find device ${EB[BB]}`;
```

#### 379. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7043-L7044` → after: `L7043-L7044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7043-L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7043-L7044) · [Before (L7043-L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7043-L7044)

```diff
-         if (void 0 === MT) throw `Unable to find input ${mT} for device ${YT[TT]} in slot ${UT}`;
-         return mT === JT.Move && WT.j.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), MT
+         if (void 0 === dB) throw `Unable to find input ${zB} for device ${EB[BB]} in slot ${jB}`;
+         return zB === iB.Move && QB.i.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), dB
```

#### 380. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7087` → after: `L7087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7087) · [Before (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7087)

```diff
-         if (void 0 === UT) throw `Unable to register device ${YT[TT]} to undefined slot.`;
+         if (void 0 === jB) throw `Unable to register device ${EB[BB]} to undefined slot.`;
```

#### 381. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7133` → after: `L7133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7133) · [Before (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7133)

```diff
-         this._maxTouchPoints = (0, qT.f)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
+         this._maxTouchPoints = (0, LB.k)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
```

#### 382. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7141` → after: `L7141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7141) · [Before (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7141)

```diff
-             if (!(zT >= 0)) return void WT.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
+             if (!(nB >= 0)) return void QB.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
```

#### 383. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7155` → after: `L7155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7155) · [Before (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7155)

```diff
-             if (-1 === UT && (UT = this._activeTouchIds.indexOf(-1)), !(UT >= 0)) return void WT.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
+             if (-1 === jB && (jB = this._activeTouchIds.indexOf(-1)), !(jB >= 0)) return void QB.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
```

#### 384. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7292` → after: `L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7292) · [Before (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7292)

```diff
-         this.deviceType = UT, this.deviceSlot = mT, this.onInputChangedObservable = new gT.d, this._deviceInputSystem = TT
+         this.deviceType = jB, this.deviceSlot = zB, this.onInputChangedObservable = new IB.c, this._deviceInputSystem = BB
```

#### 385. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7349` → after: `L7349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7349) · [Before (L7349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7349)

```diff
-         this._devices = new Array(UT), this._firstDevice = new Array(UT), this._engine = TT, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new VT(TT)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new gT.d((TT => {
+         this._devices = new Array(jB), this._firstDevice = new Array(jB), this._engine = BB, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new TB(BB)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new IB.c((BB => {
```

#### 386. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7353` → after: `L7353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7353) · [Before (L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7353)

```diff
-         })), this.onDeviceDisconnectedObservable = new gT.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = TT.SF.add((() => {
+         })), this.onDeviceDisconnectedObservable = new IB.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = BB.pY.add((() => {
```

#### 387. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7358` → after: `L7358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7358) · [Before (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7358)

```diff
-         this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager. … [truncated]
+         this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager. … [truncated]
```

#### 388. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7394` → after: `L7394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7394) · [Before (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7394)

```diff
-     var CT = mT(40305);
+     var WB = zB(40276);
```

#### 389. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7426` → after: `L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7426) · [Before (L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7426)

```diff
-         this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1 … [truncated]
+         this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1 … [truncated]
```

#### 390. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7435` → after: `L7435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7435) · [Before (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7435)

```diff
-         return new jT.o(this._unTranslatedPointerX, this._unTranslatedPointerY)
+         return new aB.i(this._unTranslatedPointerX, this._unTranslatedPointerY)
```

#### 391. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7450` → after: `L7450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7450) · [Before (L7450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7450)

```diff
-         const UT = this._scene.eB().getInputElementClientRect();
+         const jB = this._scene.wJ().getInputElementClientRect();
```

#### 392. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7455` → after: `L7455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7455) · [Before (L7455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7455)

```diff
-           WT = mT.eB(),
+           QB = zB.wJ(),
```

#### 393. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7463` → after: `L7463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7463) · [Before (L7463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7463)

```diff
-         const MT = UT.inputIndex >= JT.MouseWheelX && UT.inputIndex <= JT.MouseWheelZ ? OT.d.POINTERWHEEL : OT.d.POINTERMOVE;
+         const dB = jB.inputIndex >= iB.MouseWheelX && jB.inputIndex <= iB.MouseWheelZ ? SB.b.POINTERWHEEL : SB.b.POINTERMOVE;
```

#### 394. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7465` → after: `L7465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7465) · [Before (L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7465)

```diff
-         mT.onPointerMove && (TT = TT || this._pickMove(UT), mT.onPointerMove(UT, TT, MT)), TT ? (gT = new OT.h(MT, UT, TT), this._setRayOnPointerInfo(TT, UT)) : (gT = new OT.h(MT, UT, null, this), this._movePointerInfo = gT), mT.onPointerObservable.hasObservers() && mT.onPointerO … [truncated]
+         zB.onPointerMove && (BB = BB || this._pickMove(jB), zB.onPointerMove(jB, BB, dB)), BB ? (IB = new SB.e(dB, jB, BB), this._setRayOnPointerInfo(BB, jB)) : (IB = new SB.e(dB, jB, null, this), this._movePointerInfo = IB), zB.onPointerObservable.hasObservers() && zB.onPointerO … [truncated]
```

#### 395. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7469` → after: `L7469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7469) · [Before (L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7469)

```diff
-         TT && CT.c._IsPickingAvailable && (TT.ray || (TT.ray = mT.createPickingRay(UT.offsetX, UT.offsetY, jT.e.Identity(), mT.activeCamera)))
+         BB && WB.d._IsPickingAvailable && (BB.ray || (BB.ray = zB.createPickingRay(jB.offsetX, jB.offsetY, aB.c.Identity(), zB.activeCamera)))
```

#### 396. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7482` → after: `L7482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7482) · [Before (L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7482)

```diff
-           zT = new OT.f(mT, UT, this._unTranslatedPointerX, this._unTranslatedPointerY);
+           nB = new SB.d(zB, jB, this._unTranslatedPointerX, this._unTranslatedPointerY);
```

#### 397. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7487` → after: `L7487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7487) · [Before (L7487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7487)

```diff
-           mT = UT.VL(this._unTranslatedPointerX, this._unTranslatedPointerY, UT.pointerMovePredicate, UT.pointerMoveFastCheck, UT.cameraToUseForPointers, UT.pointerMoveTrianglePredicate);
+           zB = jB.zs(this._unTranslatedPointerX, this._unTranslatedPointerY, jB.pointerMovePredicate, jB.pointerMoveFastCheck, jB.cameraToUseForPointers, jB.pointerMoveTrianglePredicate);
```

#### 398. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7503` → after: `L7503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7503) · [Before (L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7503)

```diff
-         TT.pointerMovePredicate || (TT.pointerMovePredicate = UT => (UT._isPointerMovePickable ?? UT.QZ) && UT.isVisible && UT.isReady() && UT.isEnabled() && (UT.enablePointerMoveEvents || TT.constantlyUpdateMeshUnderPointer || null !== UT._getActionManagerForTrigger()) && (!TT.c … [truncated]
+         BB.pointerMovePredicate || (BB.pointerMovePredicate = jB => (jB._isPointerMovePickable ?? jB.Ny) && jB.isVisible && jB.isReady() && jB.isEnabled() && (jB.enablePointerMoveEvents || BB.constantlyUpdateMeshUnderPointer || null !== jB._getActionManagerForTrigger()) && (!BB.c … [truncated]
```

#### 399. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7506` → after: `L7506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7506) · [Before (L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7506)

```diff
-         const WT = mT.eB().getInputElement();
+         const QB = zB.wJ().getInputElement();
```

#### 400. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7516` → after: `L7516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7516) · [Before (L7516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7516)

```diff
-         mT.inputIndex = JT.Move, this._checkPrePointerObservable(TT, mT, OT.d.POINTERMOVE) || this._processPointerMove(TT, mT)
+         zB.inputIndex = iB.Move, this._checkPrePointerObservable(BB, zB, SB.b.POINTERMOVE) || this._processPointerMove(BB, zB)
```

#### 401. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7520` → after: `L7520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7520) · [Before (L7520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7520)

```diff
-         mT.inputIndex = mT.button + 2, this._checkPrePointerObservable(TT, mT, OT.d.POINTERDOWN) || this._processPointerDown(TT, mT)
+         zB.inputIndex = zB.button + 2, this._checkPrePointerObservable(BB, zB, SB.b.POINTERDOWN) || this._processPointerDown(BB, zB)
```

#### 402. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7539` → after: `L7539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/256.js#L7539) · [Before (L7539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/256.js#L7539)

```diff
-               const TT = mT.VL(this._unTranslatedPointerX, this._unTranslatedPointerY, (TT => TT.QZ && TT.isVisible && TT.isReady() && TT.actionManager && TT.actionManager.hasSpecificTrigger(8) && TT === this._pickedDownMesh), !1, mT.cameraToUseForPointers);
+               const BB = zB.zs(this._unTranslatedPointerX, this._unTranslatedPointerY, (BB => BB.Ny && BB.isVisible && BB.isReady() && BB.actionManager && BB.actionManager.hasSpecificTrigger(8) && BB === this._pickedDownMesh), !1, zB.cameraToUseForPointers);
```
