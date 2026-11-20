# Changed — Bundle Modifications Report (Part 029 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `29 / 115` (**420** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 028](part-028.md) · [Part 030 →](part-030.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/243.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/chunks/js/243.js` (868 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9)

#### 839. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7440` → after: `L7440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7440) · [Before (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7440)

```diff
-               const kT = AT.h.Fv[0];
+               const Eq = Bq.o.Na[0];
```

#### 840. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7443-L7445` → after: `L7443-L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7443-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7443-L7445) · [Before (L7443-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7443-L7445)

```diff
-               this._worldMatrix.invertToRef(AT.h.Matrix[1]);
-               const MT = AT.h.Fv[1];
-               AT.m.TransformCoordinatesToRef(lT, AT.h.Matrix[1], MT), MT.normalize();
+               this._worldMatrix.invertToRef(Bq.o.Matrix[1]);
+               const lq = Bq.o.Na[1];
+               Bq.q.TransformCoordinatesToRef(Yq, Bq.o.Matrix[1], lq), lq.normalize();
```

#### 841. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7449-L7453` → after: `L7449-L7453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7449-L7453) · [Before (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7449-L7453)

```diff
-               if (AT.f.RotationYawPitchRollToRef(KT, yT, 0, AT.h.Quaternion[0]), (this.billboardMode & TT.BILLBOARDMODE_ALL) !== TT.BILLBOARDMODE_ALL) {
-                 const kT = AT.h.Fv[1];
-                 AT.h.Quaternion[0].toEulerAnglesToRef(kT), (this.billboardMode & TT.BILLBOARDMODE_X) !== TT.BILLBOARDMODE_X && (kT.x = 0), (this.billboardMode & TT.BILLBOARDMODE_Y) !== TT.BILLBOARDMODE_Y && (kT.y = 0), (this.billboardMode & TT.BILLBOARDMODE_Z) !== TT.BILLBOARDMOD … [truncated]
-               } else AT.d.FromQuaternionToRef(AT.h.Quaternion[0], AT.h.Matrix[0]);
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(AT.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(AT.h.Fv[0])
+               if (Bq.h.RotationYawPitchRollToRef(Oq, xq, 0, Bq.o.Quaternion[0]), (this.billboardMode & qq.BILLBOARDMODE_ALL) !== qq.BILLBOARDMODE_ALL) {
+                 const Eq = Bq.o.Na[1];
+                 Bq.o.Quaternion[0].toEulerAnglesToRef(Eq), (this.billboardMode & qq.BILLBOARDMODE_X) !== qq.BILLBOARDMODE_X && (Eq.x = 0), (this.billboardMode & qq.BILLBOARDMODE_Y) !== qq.BILLBOARDMODE_Y && (Eq.y = 0), (this.billboardMode & qq.BILLBOARDMODE_Z) !== qq.BILLBOARDMOD … [truncated]
+               } else Bq.e.FromQuaternionToRef(Bq.o.Quaternion[0], Bq.o.Matrix[0]);
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Bq.o.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Bq.o.Na[0])
```

#### 842. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7455-L7461` → after: `L7455-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7455-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7455-L7461) · [Before (L7455-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7455-L7461)

```diff
-               const kT = AT.h.Fv[0];
-               this._worldMatrix.getTranslationToRef(kT), AT.h.Matrix[1].UkT(cT.getViewMatrix());
-               const lT = this.NJ().useRightHandedSystem;
-               if (lT && AT.h.Matrix[1].multiplyToRef(TT._TmpRHRestore, AT.h.Matrix[1]), AT.h.Matrix[1].setTranslationFromFloats(0, 0, 0), AT.h.Matrix[1].invertToRef(AT.h.Matrix[0]), (this.billboardMode & TT.BILLBOARDMODE_ALL) !== TT.BILLBOARDMODE_ALL) {
-                 AT.h.Matrix[0].decompose(void 0, AT.h.Quaternion[0], void 0);
-                 const kT = AT.h.Fv[1];
-                 AT.h.Quaternion[0].toEulerAnglesToRef(kT), (this.billboardMode & TT.BILLBOARDMODE_X) !== TT.BILLBOARDMODE_X && (kT.x = 0), (this.billboardMode & TT.BILLBOARDMODE_Y) !== TT.BILLBOARDMODE_Y && (kT.y = 0), (this.billboardMode & TT.BILLBOARDMODE_Z) !== TT.BILLBOARDMOD … [truncated]
+               const Eq = Bq.o.Na[0];
+               this._worldMatrix.getTranslationToRef(Eq), Bq.o.Matrix[1].WG(gq.getViewMatrix());
+               const Yq = this.ZJ().useRightHandedSystem;
+               if (Yq && Bq.o.Matrix[1].multiplyToRef(qq._TmpRHRestore, Bq.o.Matrix[1]), Bq.o.Matrix[1].setTranslationFromFloats(0, 0, 0), Bq.o.Matrix[1].invertToRef(Bq.o.Matrix[0]), (this.billboardMode & qq.BILLBOARDMODE_ALL) !== qq.BILLBOARDMODE_ALL) {
+                 Bq.o.Matrix[0].decompose(void 0, Bq.o.Quaternion[0], void 0);
+                 const Eq = Bq.o.Na[1];
+                 Bq.o.Quaternion[0].toEulerAnglesToRef(Eq), (this.billboardMode & qq.BILLBOARDMODE_X) !== qq.BILLBOARDMODE_X && (Eq.x = 0), (this.billboardMode & qq.BILLBOARDMODE_Y) !== qq.BILLBOARDMODE_Y && (Eq.y = 0), (this.billboardMode & qq.BILLBOARDMODE_Z) !== qq.BILLBOARDMOD … [truncated]
```

#### 843. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7463-L7464` → after: `L7463-L7464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7463-L7464) · [Before (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7463-L7464)

```diff
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(AT.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(AT.h.Fv[0])
-             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : KT && KT._nonUniformScaling ? this._updateNonUniformScalingState(KT._nonUniformScaling) : this._up … [truncated]
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Bq.o.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Bq.o.Na[0])
+             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Oq && Oq._nonUniformScaling ? this._updateNonUniformScalingState(Oq._nonUniformScaling) : this._up … [truncated]
```

#### 844. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7474` → after: `L7474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7474) · [Before (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7474)

```diff
-                 const TT = AT.h.Matrix[0];
+                 const qq = Bq.o.Matrix[0];
```

#### 845. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7476-L7477` → after: `L7476-L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7476-L7477) · [Before (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7476-L7477)

```diff
-                 const kT = AT.h.Quaternion[0];
-                 TT.decompose(cT.GA, kT, cT.position), cT.rotationQuaternion ? cT.rotationQuaternion.UkT(kT) : kT.toEulerAnglesToRef(cT.rotation)
+                 const Eq = Bq.o.Quaternion[0];
+                 qq.decompose(gq.rc, Eq, gq.position), gq.rotationQuaternion ? gq.rotationQuaternion.WG(Eq) : Eq.toEulerAnglesToRef(gq.rotation)
```

#### 846. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7481` → after: `L7481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7481) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7481)

```diff
-           this.GA.I5(1, 1, 1), this.position.I5(0, 0, 0), this.rotation.I5(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = AT.f.Identity()), this._worldMatrix = AT.d.Identity()
+           this.rc.Vqq(1, 1, 1), this.position.Vqq(0, 0, 0), this.rotation.Vqq(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Bq.h.Identity()), this._worldMatrix = Bq.e.Identity()
```

#### 847. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7492` → after: `L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7492) · [Before (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7492)

```diff
-           return TT || (TT = this.NJ().activeCamera), AT.m.TransformCoordinates(this.getAbsolutePosition(), TT.getViewMatrix())
+           return qq || (qq = this.ZJ().activeCamera), Bq.q.TransformCoordinates(this.getAbsolutePosition(), qq.getViewMatrix())
```

#### 848. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7496` → after: `L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7496) · [Before (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7496)

```diff
-           return TT || (TT = this.NJ().activeCamera), this.getAbsolutePosition().subtract(TT.globalPosition).length()
+           return qq || (qq = this.ZJ().activeCamera), this.getAbsolutePosition().subtract(qq.globalPosition).length()
```

#### 849. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7499` → after: `L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7499) · [Before (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7499)

```diff
-           const MT = xT.d.Clone((() => new TT(kT, this.NJ())), this);
+           const lq = cq.d.Clone((() => new qq(Eq, this.ZJ())), this);
```

#### 850. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7511` → after: `L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7511) · [Before (L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7511)

```diff
-           return kT.type = this.getClassName(), kT.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(kT), kT.localMatrix = this.getPivotMatrix().acT(), kT.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (kT.bJ = !0), xT.d.AppendSerializedAnimation … [truncated]
+           return Eq.type = this.getClassName(), Eq.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Eq), Eq.localMatrix = this.getPivotMatrix().bYq(), Eq.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Eq.eJ = !0), cq.d.AppendSerializedAnimation … [truncated]
```

#### 851. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7519` → after: `L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7519) · [Before (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7519)

```diff
-           if (this.NJ().stopAnimation(this), this.NJ().removeTransformNode(this), this._parentContainer) {
+           if (this.ZJ().stopAnimation(this), this.ZJ().removeTransformNode(this), this._parentContainer) {
```

#### 852. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7535` → after: `L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7535) · [Before (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7535)

```diff
-           kT && (this.rotationQuaternion ? (MT = this.rotationQuaternion.clone(), this.rotationQuaternion.I5(0, 0, 0, 1)) : this.rotation && (lT = this.rotation.clone(), this.rotation.I5(0, 0, 0)));
+           Eq && (this.rotationQuaternion ? (lq = this.rotationQuaternion.clone(), this.rotationQuaternion.Vqq(0, 0, 0, 1)) : this.rotation && (Yq = this.rotation.clone(), this.rotation.Vqq(0, 0, 0)));
```

#### 853. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7541` → after: `L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7541) · [Before (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7541)

```diff
-           return this.GA.scaleInPlace(fT), kT && (this.rotationQuaternion && MT ? this.rotationQuaternion.UkT(MT) : this.rotation && lT && this.rotation.UkT(lT)), this
+           return this.rc.scaleInPlace(Aq), Eq && (this.rotationQuaternion && lq ? this.rotationQuaternion.WG(lq) : this.rotation && Yq && this.rotation.WG(Yq)), this
```

#### 854. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7548` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7548) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7548)

```diff
-         kT = [(0, fT.F)("position")], cT = [(0, fT.F)("rotation")], lT = [(0, fT.x)("rotationQuaternion")], MT = [(0, fT.F)("GA")], KT = [(0, fT.J)("billboardMode")], OT = [(0, fT.J)()], jT = [(0, fT.J)("infiniteDistance")], vT = [(0, fT.J)()], tT = [(0, fT.J)()], (0, yT.e)(null, … [truncated]
+         Eq = [(0, Aq.I)("position")], gq = [(0, Aq.I)("rotation")], Yq = [(0, Aq.C)("rotationQuaternion")], lq = [(0, Aq.I)("rc")], Oq = [(0, Aq.M)("billboardMode")], mq = [(0, Aq.M)()], Nq = [(0, Aq.M)("infiniteDistance")], aq = [(0, Aq.M)()], Vq = [(0, Aq.M)()], (0, xq.f)(null, … [truncated]
```

#### 855. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7561` → after: `L7561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7561) · [Before (L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7561)

```diff
-         }, NT, QT), (0, yT.e)(null, null, cT, {
+         }, jq, Hq), (0, xq.f)(null, null, gq, {
```

#### 856. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7574` → after: `L7574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7574) · [Before (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7574)

```diff
-         }, ST, DT), (0, yT.e)(null, null, lT, {
+         }, oq, Pq), (0, xq.f)(null, null, Yq, {
```

#### 857. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7587` → after: `L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7587) · [Before (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7587)

```diff
-         }, aT, FT), (0, yT.e)(null, null, MT, {
+         }, Qq, yq), (0, xq.f)(null, null, lq, {
```

#### 858. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7600` → after: `L7600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7600) · [Before (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7600)

```diff
-         }, rT, PT), (0, yT.e)(null, null, KT, {
+         }, tq, rq), (0, xq.f)(null, null, Oq, {
```

#### 859. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7613` → after: `L7613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7613) · [Before (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7613)

```diff
-         }, wT, mT), (0, yT.e)(null, null, OT, {
+         }, vq, hq), (0, xq.f)(null, null, mq, {
```

#### 860. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7626` → after: `L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7626) · [Before (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7626)

```diff
-         }, bT, zT), (0, yT.e)(null, null, jT, {
+         }, nq, bq), (0, xq.f)(null, null, Nq, {
```

#### 861. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7639` → after: `L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7639) · [Before (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7639)

```diff
-         }, JT, oT), (0, yT.e)(null, null, vT, {
+         }, iq, Zq), (0, xq.f)(null, null, aq, {
```

#### 862. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7652` → after: `L7652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7652) · [Before (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7652)

```diff
-         }, HT, eT), (0, yT.e)(null, null, tT, {
+         }, fq, Mq), (0, xq.f)(null, null, Vq, {
```

#### 863. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7671` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7671) · [Before (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7671)

```diff
-       })(), TT.BILLBOARDMODE_NONE = 0, TT.BILLBOARDMODE_X = 1, TT.BILLBOARDMODE_Y = 2, TT.BILLBOARDMODE_Z = 4, TT.BILLBOARDMODE_ALL = 7, TT.BILLBOARDMODE_USE_POSITION = 128, TT.BillboardUseParentOrientation = !1, TT._TmpRotation = AT.f.Zero(), TT._TmpScaling = AT.m.Zero(), TT._Tm … [truncated]
+       })(), qq.BILLBOARDMODE_NONE = 0, qq.BILLBOARDMODE_X = 1, qq.BILLBOARDMODE_Y = 2, qq.BILLBOARDMODE_Z = 4, qq.BILLBOARDMODE_ALL = 7, qq.BILLBOARDMODE_USE_POSITION = 128, qq.BillboardUseParentOrientation = !1, qq._TmpRotation = Bq.h.Zero(), qq._TmpScaling = Bq.q.Zero(), qq._Tm … [truncated]
```

#### 864. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7676` → after: `L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7676) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7676)

```diff
-       if (TT.localMatrix ? lT.setPreTransformMatrix(AT.d.FromArray(TT.localMatrix)) : TT.pivotMatrix && lT.setPivotMatrix(AT.d.FromArray(TT.pivotMatrix)), lT.PD(TT.isEnabled), lT._waitingParsedUniqueId = TT.uniqueId, void 0 !== TT.parentId && (lT._waitingParentId = TT.parentId),  … [truncated]
+       if (qq.localMatrix ? Yq.setPreTransformMatrix(Bq.e.FromArray(qq.localMatrix)) : qq.pivotMatrix && Yq.setPivotMatrix(Bq.e.FromArray(qq.pivotMatrix)), Yq.hG(qq.isEnabled), Yq._waitingParsedUniqueId = qq.uniqueId, void 0 !== qq.parentId && (Yq._waitingParentId = qq.parentId),  … [truncated]
```

#### 865. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7682` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7682) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7682)

```diff
-         CT.b.ParseAnimationRanges(lT, TT, kT)
+         Wq.c.ParseAnimationRanges(Yq, qq, Eq)
```

#### 866. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7690` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7690) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7690)

```diff
-     }(lT = tT.prototype).JV ?? (lT.JV = (0, vT.f)("TransformNode", "JV")), (MT = tT.prototype).applyImpulse ?? (MT.applyImpulse = (0, vT.f)("TransformNode", "applyImpulse")), (KT = tT.prototype).applyAngularImpulse ?? (KT.applyAngularImpulse = (0, vT.f)("TransformNode", "applyAng … [truncated]
+     }(Yq = Vq.prototype).FX ?? (Yq.FX = (0, aq.i)("TransformNode", "FX")), (lq = Vq.prototype).applyImpulse ?? (lq.applyImpulse = (0, aq.i)("TransformNode", "applyImpulse")), (Oq = Vq.prototype).applyAngularImpulse ?? (Oq.applyAngularImpulse = (0, aq.i)("TransformNode", "applyAng … [truncated]
```

#### 867. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7692` → after: `L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7692) · [Before (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7692)

```diff
-   40030: (TT, kT, cT) => {
+   40172: (qq, Eq, gq) => {
```

#### 868. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7745-L7748` → after: `L7745-L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R7745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L7745-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L7745-L7748) · [Before (L7745-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L7745-L7748)

```diff
-       e: () => MT,
-       g: () => fT,
-       i: () => yT,
-       l: () => OT
+       d: () => lq,
+       h: () => Aq,
+       k: () => xq,
+       o: () => mq
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/244.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/244.js` (528 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38)

#### 1. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4)

```diff
-   39782: (TT, kT, cT) => {
+   39879: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L8-L9) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7-L9)

```diff
-       h: () => tT,
-       k: () => xT,
-       l: () => fT
+       e: () => cq,
+       g: () => Aq
```

#### 3. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L11-L14` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L11-L14) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L11-L14)

```diff
-     var lT = cT(39547),
-       MT = cT(38512),
-       KT = cT(39689),
-       OT = cT(39592);
+     var Yq = gq(39689),
+       lq = gq(38653),
+       Oq = gq(39817),
+       mq = gq(39725);
```

#### 4. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L16)

```diff
-       get VkT() {
+       get bM() {
```

#### 5. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L26)

```diff
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, OT.b)(), TT && TT.NJ ? this._engine = TT.NJ().Dv() : this._engine = TT, this._updatable = cT, this._instanced = yT, this._divisor = xT || 1, this._label = IT, kT instanceof lT.c ? (this._data = null, this._buffer = kT) … [truncated]
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, mq.e)(), qq && qq.ZJ ? this._engine = qq.ZJ().Ba() : this._engine = qq, this._updatable = gq, this._instanced = xq, this._divisor = cq || 1, this._label = uq, Eq instanceof Yq.b ? (this._data = null, this._buffer = Eq) … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L31-L32` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L31-L32) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L31-L32)

```diff
-         const yT = KT ? kT : kT * Float32Array.BYTES_PER_ELEMENT,
-           xT = lT ? KT ? lT : lT * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         const xq = Oq ? Eq : Eq * Float32Array.BYTES_PER_ELEMENT,
+           cq = Yq ? Oq ? Yq : Yq * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
```

#### 7. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L55-L56` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L55-L56) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L55-L56)

```diff
-           if (this._buffer.DA > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.DA, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.DA, void 0, this._label));
-           MT.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+           if (this._buffer.WB > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.WB, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.WB, void 0, this._label));
+           lq.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
```

#### 8. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L64)

```diff
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, TT, lT ? kT : kT * Float32Array.BYTES_PER_ELEMENT, cT ? cT * this.byteStride : void 0), this._data = 0 === kT && void 0 === cT ? TT : null)
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, qq, Yq ? Eq : Eq * Float32Array.BYTES_PER_ELEMENT, gq ? gq * this.byteStride : void 0), this._data = 0 === Eq && void 0 === gq ? qq : null)
```

#### 9. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L74)

```diff
-       get VkT() {
+       get bM() {
```

#### 10. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L97-L98` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L97-L98) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L97-L98)

```diff
-         const DT = (0, KT.j)(this.type);
-         NT ? (this._size = jT || (OT ? OT / DT : xT(cT)), this.byteStride = OT || this._buffer.byteStride || this._size * DT, this.byteOffset = CT || 0) : (this._size = jT || OT || xT(cT), this.byteStride = OT ? OT * DT : this._buffer.byteStride || this._size * DT, this.byteOffse … [truncated]
+         const Pq = (0, Oq.q)(this.type);
+         jq ? (this._size = Nq || (mq ? mq / Pq : cq(gq)), this.byteStride = mq || this._buffer.byteStride || this._size * Pq, this.byteOffset = Wq || 0) : (this._size = Nq || mq || cq(gq), this.byteStride = mq ? mq * Pq : this._buffer.byteStride || this._size * Pq, this.byteOffse … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L119)

```diff
-             throw new Error(`Invalid vertex buffer type '${TT}'`)
+             throw new Error(`Invalid vertex buffer type '${qq}'`)
```

#### 12. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L139)

```diff
-         return cT ? (0, KT.i)(cT, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, TT, kT) : null
+         return gq ? (0, Oq.o)(gq, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, qq, Eq) : null
```

#### 13. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L148)

```diff
-         return this.byteStride / (0, KT.j)(this.type)
+         return this.byteStride / (0, Oq.q)(this.type)
```

#### 14. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L150-L151` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L150-L151) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L150-L151)

```diff
-       FkT() {
-         return this.byteOffset / (0, KT.j)(this.type)
+       Tgq() {
+         return this.byteOffset / (0, Oq.q)(this.type)
```

#### 15. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L154)

```diff
-         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, KT.j)(this.type) : this._size
+         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Oq.q)(this.type) : this._size
```

#### 16. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L176)

```diff
-         (0, KT.g)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, TT, this.normalized, ((TT, cT) => {
+         (0, Oq.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, qq, this.normalized, ((qq, gq) => {
```

#### 17. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L213)

```diff
-       return (0, KT.j)(TT)
+       return (0, Oq.q)(qq)
```

#### 18. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L217)

```diff
-       (0, KT.g)(TT, kT, cT, lT, MT, OT, yT, ((TT, kT) => {
+       (0, Oq.h)(qq, Eq, gq, Yq, lq, mq, xq, ((qq, Eq) => {
```

#### 19. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L223)

```diff
-       return (0, KT.i)(TT, kT, cT, lT, MT, OT, yT, fT)
+       return (0, Oq.o)(qq, Eq, gq, Yq, lq, mq, xq, Aq)
```

#### 20. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L232)

```diff
-   39547: (TT, kT, cT) => {
+   39689: (qq, Eq, gq) => {
```

#### 21. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L234` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L234) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L234)

```diff
-       c: () => lT
+       b: () => Yq
```

#### 22. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L241)

```diff
-         this.references = 0, this.DA = 0, this.is32Bits = !1, this.uniqueId = lT._Counter++
+         this.references = 0, this.WB = 0, this.is32Bits = !1, this.uniqueId = Yq._Counter++
```

#### 23. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L246)

```diff
-   39775: (TT, kT, cT) => {
+   39876: (qq, Eq, gq) => {
```

#### 24. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L250-L251` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L250-L251) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L250-L251)

```diff
-     var lT = cT(36892),
-       MT = cT(39782);
+     var Yq = gq(37139),
+       lq = gq(39879);
```

#### 25. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L259-L260)

```diff
-         if (!this.pickedMesh || kT && !this.pickedMesh.isVerticesDataPresent(MT.l.NormalKind)) return null;
-         let cT, KT = this.pickedMesh.FcT();
+         if (!this.pickedMesh || Eq && !this.pickedMesh.isVerticesDataPresent(lq.g.NormalKind)) return null;
+         let gq, Oq = this.pickedMesh.iYq();
```

#### 26. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L262-L264` → after: `L262-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L262-L264) · [Before (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L262-L264)

```diff
-         const OT = lT.h.Fv[0],
-           yT = lT.h.Fv[1],
-           fT = lT.h.Fv[2];
+         const mq = Yq.o.Na[0],
+           xq = Yq.o.Na[1],
+           Aq = Yq.o.Na[2];
```

#### 27. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L266-L270` → after: `L266-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L266-L270) · [Before (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L266-L270)

```diff
-           const TT = this.pickedMesh.getVerticesData(MT.l.NormalKind);
-           let kT = KT ? lT.m.FromArrayToRef(TT, 3 * KT[3 * this.faceId], OT) : OT.I5(TT[3 * this.faceId * 3], TT[3 * this.faceId * 3 + 1], TT[3 * this.faceId * 3 + 2]),
-             xT = KT ? lT.m.FromArrayToRef(TT, 3 * KT[3 * this.faceId + 1], yT) : yT.I5(TT[3 * (3 * this.faceId + 1)], TT[3 * (3 * this.faceId + 1) + 1], TT[3 * (3 * this.faceId + 1) + 2]),
-             IT = KT ? lT.m.FromArrayToRef(TT, 3 * KT[3 * this.faceId + 2], fT) : fT.I5(TT[3 * (3 * this.faceId + 2)], TT[3 * (3 * this.faceId + 2) + 1], TT[3 * (3 * this.faceId + 2) + 2]);
-           kT = kT.scale(this.bu), xT = xT.scale(this.bv), IT = IT.scale(1 - this.bu - this.bv), cT = new lT.m(kT.x + xT.x + IT.x, kT.y + xT.y + IT.y, kT.z + xT.z + IT.z)
+           const qq = this.pickedMesh.getVerticesData(lq.g.NormalKind);
+           let Eq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId], mq) : mq.Vqq(qq[3 * this.faceId * 3], qq[3 * this.faceId * 3 + 1], qq[3 * this.faceId * 3 + 2]),
+             cq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId + 1], xq) : xq.Vqq(qq[3 * (3 * this.faceId + 1)], qq[3 * (3 * this.faceId + 1) + 1], qq[3 * (3 * this.faceId + 1) + 2]),
+             uq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId + 2], Aq) : Aq.Vqq(qq[3 * (3 * this.faceId + 2)], qq[3 * (3 * this.faceId + 2) + 1], qq[3 * (3 * this.faceId + 2) + 2]);
+           Eq = Eq.scale(this.bu), cq = cq.scale(this.bv), uq = uq.scale(1 - this.bu - this.bv), gq = new Yq.q(Eq.x + cq.x + uq.x, Eq.y + cq.y + uq.y, Eq.z + cq.z + uq.z)
```

#### 28. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L272-L275` → after: `L272-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L272-L275) · [Before (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L272-L275)

```diff
-           const TT = this.pickedMesh.getVerticesData(MT.l.PositionKind),
-             kT = KT ? lT.m.FromArrayToRef(TT, 3 * KT[3 * this.faceId], OT) : OT.I5(TT[3 * this.faceId * 3], TT[3 * this.faceId * 3 + 1], TT[3 * this.faceId * 3 + 2]),
-             xT = KT ? lT.m.FromArrayToRef(TT, 3 * KT[3 * this.faceId + 1], yT) : yT.I5(TT[3 * (3 * this.faceId + 1)], TT[3 * (3 * this.faceId + 1) + 1], TT[3 * (3 * this.faceId + 1) + 2]),
-             IT = KT ? lT.m.FromArrayToRef(TT, 3 * KT[3 * this.faceId + 2], fT) : fT.I5(TT[3 * (3 * this.faceId + 2)], TT[3 * (3 * this.faceId + 2) + 1], TT[3 * (3 * this.faceId + 2) + 2]),
+           const qq = this.pickedMesh.getVerticesData(lq.g.PositionKind),
+             Eq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId], mq) : mq.Vqq(qq[3 * this.faceId * 3], qq[3 * this.faceId * 3 + 1], qq[3 * this.faceId * 3 + 2]),
+             cq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId + 1], xq) : xq.Vqq(qq[3 * (3 * this.faceId + 1)], qq[3 * (3 * this.faceId + 1) + 1], qq[3 * (3 * this.faceId + 1) + 2]),
+             uq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId + 2], Aq) : Aq.Vqq(qq[3 * (3 * this.faceId + 2)], qq[3 * (3 * this.faceId + 2) + 1], qq[3 * (3 * this.faceId + 2) + 2]),
```

#### 29. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L278)

```diff
-           cT = lT.m.Cross(AT, CT)
+           gq = Yq.q.Cross(Bq, Wq)
```

#### 30. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L285-L286` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L285-L286) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L285-L286)

```diff
-               const TT = lT.h.Matrix[0];
-               lT.d.FromArrayToRef(cT, MT, TT), lT.m.TransformNormalToRef(kT, TT, kT)
+               const qq = Yq.o.Matrix[0];
+               Yq.e.FromArrayToRef(gq, lq, qq), Yq.q.TransformNormalToRef(Eq, qq, Eq)
```

#### 31. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L290)

```diff
-           TT.nonUniformScaling && (lT.h.Matrix[0].UkT(cT), cT = lT.h.Matrix[0], cT.setTranslationFromFloats(0, 0, 0), cT.invert(), cT.transposeToRef(lT.h.Matrix[1]), cT = lT.h.Matrix[1]), lT.m.TransformNormalToRef(kT, cT, kT)
+           qq.nonUniformScaling && (Yq.o.Matrix[0].WG(gq), gq = Yq.o.Matrix[0], gq.setTranslationFromFloats(0, 0, 0), gq.invert(), gq.transposeToRef(Yq.o.Matrix[1]), gq = Yq.o.Matrix[1]), Yq.q.TransformNormalToRef(Eq, gq, Eq)
```

#### 32. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L293-L294` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L293-L294) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L293-L294)

```diff
-           const kT = lT.h.Fv[0].UkT(cT);
-           TT || xT(this.pickedMesh, kT), lT.m.Dot(kT, this.ray.direction) > 0 && cT.negateInPlace()
+           const Eq = Yq.o.Na[0].WG(gq);
+           qq || cq(this.pickedMesh, Eq), Yq.q.Dot(Eq, this.ray.direction) > 0 && gq.negateInPlace()
```

#### 33. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L299)

```diff
-         let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MT.l.UVKind;
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lq.g.UVKind;
```

#### 34. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L301)

```diff
-         const kT = this.pickedMesh.FcT();
+         const Eq = this.pickedMesh.iYq();
```

#### 35. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L305-L308` → after: `L305-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L305-L308) · [Before (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L305-L308)

```diff
-         let KT = lT.i.FromArray(cT, 2 * kT[3 * this.faceId]),
-           OT = lT.i.FromArray(cT, 2 * kT[3 * this.faceId + 1]),
-           yT = lT.i.FromArray(cT, 2 * kT[3 * this.faceId + 2]);
-         return KT = KT.scale(this.bu), OT = OT.scale(this.bv), yT = yT.scale(1 - this.bu - this.bv), new lT.i(KT.x + OT.x + yT.x, KT.y + OT.y + yT.y)
+         let Oq = Yq.p.FromArray(gq, 2 * Eq[3 * this.faceId]),
+           mq = Yq.p.FromArray(gq, 2 * Eq[3 * this.faceId + 1]),
+           xq = Yq.p.FromArray(gq, 2 * Eq[3 * this.faceId + 2]);
+         return Oq = Oq.scale(this.bu), mq = mq.scale(this.bv), xq = xq.scale(1 - this.bu - this.bv), new Yq.p(Oq.x + mq.x + xq.x, Oq.y + mq.y + xq.y)
```

#### 36. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L312)

```diff
-   39592: (TT, kT, cT) => {
+   39725: (qq, Eq, gq) => {
```

#### 37. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L314` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L314) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L314)

```diff
-       b: () => KT
+       e: () => Oq
```

#### 38. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L316)

```diff
-     var lT = cT(39463);
+     var Yq = gq(39608);
```

#### 39. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L322)

```diff
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(TT), cT = TT.is32Bits ? kT instanceof Uint32Array ? kT : new Uint32Array(kT) : kT instanceof Uint16Array ? kT : new Uint16Array(kT), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, cT, … [truncated]
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(qq), gq = qq.is32Bits ? Eq instanceof Uint32Array ? Eq : new Uint32Array(Eq) : Eq instanceof Uint16Array ? Eq : new Uint16Array(Eq), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, gq, … [truncated]
```

#### 40. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L330)

```diff
-   39557: (TT, kT, cT) => {
+   39698: (qq, Eq, gq) => {
```

#### 41. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L369)

```diff
-   39516: (TT, kT, cT) => {
+   39653: (qq, Eq, gq) => {
```

#### 42. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L371)

```diff
-       d: () => QT
+       b: () => Hq
```

#### 43. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L373-L378` → after: `L373-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L373-L378) · [Before (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L373-L378)

```diff
-     var lT = cT(36932),
-       MT = cT(39467),
-       KT = cT(36925),
-       OT = cT(38512),
-       yT = cT(36918),
-       fT = cT(39521);
+     var Yq = gq(37156),
+       lq = gq(39612),
+       Oq = gq(37153),
+       mq = gq(38653),
+       xq = gq(37151),
+       Aq = gq(39662);
```

#### 44. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L612-L616` → after: `L612-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L612-L616) · [Before (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L612-L616)

```diff
-     var CT = cT(39524),
-       jT = cT(39500),
-       vT = cT(39454),
-       tT = cT(39482),
-       hT = cT(39496);
+     var Wq = gq(39667),
+       Nq = gq(39636),
+       aq = gq(39593),
+       Vq = gq(39626),
+       dq = gq(39630);
```

#### 45. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L625)

```diff
-       if ((0, tT.i)()) {
+       if ((0, Vq.n)()) {
```

#### 46. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L652)

```diff
-       get QcT() {
+       get vYq() {
```

#### 47. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L655)

```diff
-       set QcT(TT) {
+       set vYq(qq) {
```

#### 48. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L677)

```diff
-         if (TT) return this.isNDCHalfZRange ? TT.IS_NDC_HALF_ZRANGE = "" : delete TT.IS_NDC_HALF_ZRANGE, this.QcT ? TT.USE_REVERSE_DEPTHBUFFER = "" : delete TT.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? TT.USE_EXACT_SRGB_CONVERSIONS = "" : delete TT.USE_EXACT_SR … [truncated]
+         if (qq) return this.isNDCHalfZRange ? qq.IS_NDC_HALF_ZRANGE = "" : delete qq.IS_NDC_HALF_ZRANGE, this.vYq ? qq.USE_REVERSE_DEPTHBUFFER = "" : delete qq.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? qq.USE_EXACT_SRGB_CONVERSIONS = "" : delete qq.USE_EXACT_SR … [truncated]
```

#### 49. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L680` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L680) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L680)

```diff
-           return this.isNDCHalfZRange && (TT += "#define IS_NDC_HALF_ZRANGE"), this.QcT && (TT && (TT += "\n"), TT += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (TT && (TT += "\n"), TT += "#define USE_EXACT_SRGB_CONVERSIONS"), TT
+           return this.isNDCHalfZRange && (qq += "#define IS_NDC_HALF_ZRANGE"), this.vYq && (qq && (qq += "\n"), qq += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (qq && (qq += "\n"), qq += "#define USE_EXACT_SRGB_CONVERSIONS"), qq
```

#### 50. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L696)

```diff
-         MT.e.ResetCache()
+         lq.d.ResetCache()
```

#### 51. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L702` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L702) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L702)

```diff
-         OT.e.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
+         mq.b.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
```

#### 52. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L714` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L714) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L714)

```diff
-       get VkT() {
+       get bM() {
```

#### 53. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L763)

```diff
-             TT && TT(this.customAnimationFrameRequester.rv), delete this.customAnimationFrameRequester.rv
+             qq && qq(this.customAnimationFrameRequester.aa), delete this.customAnimationFrameRequester.aa
```

#### 54. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L767)

```diff
-           if (this._frameHandler = 0, (0, tT.i)()) {
+           if (this._frameHandler = 0, (0, Vq.n)()) {
```

#### 55. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L796)

```diff
-           (this.VkT || !this.renderEvenInBackground && this._windowIsBackground) && (TT = !1), TT && (this.iN(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.qN())
+           (this.bM || !this.renderEvenInBackground && this._windowIsBackground) && (qq = !1), qq && (this.Qr(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.Kr())
```

#### 56. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L814)

```diff
-         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.rv = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.r … [truncated]
+         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.aa = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.a … [truncated]
```

#### 57. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L826)

```diff
-         this._depthCullingState.zOffset = this.QcT ? -TT : TT
+         this._depthCullingState.zOffset = this.vYq ? -qq : qq
```

#### 58. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L830` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L830) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L830)

```diff
-         return this.QcT ? -TT : TT
+         return this.vYq ? -qq : qq
```

#### 59. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L833)

```diff
-         this._depthCullingState.zOffsetUnits = this.QcT ? -TT : TT
+         this._depthCullingState.zOffsetUnits = this.vYq ? -qq : qq
```

#### 60. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L837)

```diff
-         return this.QcT ? -TT : TT
+         return this.vYq ? -qq : qq
```

#### 61. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L840)

```diff
-         return (0, tT.i)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
+         return (0, Vq.n)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
```

#### 62. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L891` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L891) · [Before (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L891)

```diff
-           rT = CT || new vT.b(this, 1);
+           tq = Wq || new aq.c(this, 1);
```

#### 63. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L903)

```diff
-           lT && lT.removePendingData(rT), TT === PT ? (zT && rT.onLoadedObservable.remove(zT), KT.d.UseFallbackTexture && TT !== KT.d.FallbackTexture && this._createTextureBase(KT.d.FallbackTexture, kT, rT.invertY, lT, MT, null, fT, xT, IT, AT, rT), cT = (cT || "Unknown error") + … [truncated]
+           Yq && Yq.removePendingData(tq), qq === rq ? (bq && tq.onLoadedObservable.remove(bq), Oq.b.UseFallbackTexture && qq !== Oq.b.FallbackTexture && this._createTextureBase(Oq.b.FallbackTexture, Eq, tq.invertY, Yq, lq, null, Aq, cq, uq, Bq, tq), gq = (gq || "Unknown error") + … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L906)

```diff
-           }), fT && fT(cT, CT)) : (OT.e.Warn(`Failed to load ${TT}, falling back to ${PT}`), this._createTextureBase(PT, kT, rT.invertY, lT, MT, yT, fT, xT, IT, AT, rT, jT, tT, hT, NT, ST))
+           }), Aq && Aq(gq, Wq)) : (mq.b.Warn(`Failed to load ${qq}, falling back to ${rq}`), this._createTextureBase(rq, Eq, tq.invertY, Yq, lq, xq, Aq, cq, uq, Bq, tq, Nq, Vq, dq, jq, oq))
```

#### 65. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L954)

```diff
-         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, tT.d)() ? document : null
+         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Vq.f)() ? document : null
```

#### 66. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1014)

```diff
-         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new lT.b, this.onCanvasFocusObservable = new lT.b, this.onNewSceneAddedObservable = new lT.b, this.onResizeObservable = new lT.b, this.onCanvasPointerOutObservable = new lT.b, this.onE … [truncated]
+         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Yq.d, this.onCanvasFocusObservable = new Yq.d, this.onNewSceneAddedObservable = new Yq.d, this.onResizeObservable = new Yq.d, this.onCanvasPointerOutObservable = new Yq.d, this.onE … [truncated]
```

#### 67. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1016-L1017` → after: `L1016-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1016-L1017) · [Before (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1016-L1017)

```diff
-         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
-         const MT = (0, tT.i)() && window.devicePixelRatio || 1,
+         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
+         const lq = (0, Vq.n)() && window.devicePixelRatio || 1,
```

#### 68. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1024)

```diff
-           const TT = (0, tT.i)() && window.devicePixelRatio || 1,
+           const qq = (0, Vq.n)() && window.devicePixelRatio || 1,
```

#### 69. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1028)

```diff
-         if ((0, tT.i)() && (0, tT.d)())
+         if ((0, Vq.n)() && (0, Vq.f)())
```

#### 70. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1052` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1052) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1052)

```diff
-         throw (0, jT.i)("engine.rawTexture")
+         throw (0, Nq.m)("engine.rawTexture")
```

#### 71. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1055` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1055) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1055)

```diff
-         throw (0, jT.i)("engine.rawTexture")
+         throw (0, Nq.m)("engine.rawTexture")
```

#### 72. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1058)

```diff
-         throw (0, jT.i)("engine.rawTexture")
+         throw (0, Nq.m)("engine.rawTexture")
```

#### 73. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1061)

```diff
-         throw (0, jT.i)("engine.rawTexture")
+         throw (0, Nq.m)("engine.rawTexture")
```

#### 74. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1069-L1070` → after: `L1069-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1069-L1070) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1069-L1070)

```diff
-           this.hostInformation.isMobile = -1 !== TT.indexOf("Mobile") || -1 !== TT.indexOf("Mac") && (0, tT.d)() && "ontouchend" in document
-         }, this._checkForMobile(), (0, tT.i)() && window.addEventListener("resize", this._checkForMobile))
+           this.hostInformation.isMobile = -1 !== qq.indexOf("Mobile") || -1 !== qq.indexOf("Mac") && (0, Vq.f)() && "ontouchend" in document
+         }, this._checkForMobile(), (0, Vq.n)() && window.addEventListener("resize", this._checkForMobile))
```

#### 75. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1115` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1115) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1115)

```diff
-         if (!hT.e.loadImage) throw (0, jT.i)("FileTools");
+         if (!dq.e.loadImage) throw (0, Nq.m)("FileTools");
```

#### 76. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1126` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1126) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1126)

```diff
-         throw (0, jT.i)("FileTools")
+         throw (0, Nq.m)("FileTools")
```

#### 77. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1132` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1132) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1132)

```diff
-         this.releaseComputeEffects?.(), MT.e.ResetCache();
+         this.releaseComputeEffects?.(), lq.d.ResetCache();
```

#### 78. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1134-L1136` → after: `L1134-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1134-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1134-L1136) · [Before (L1134-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1134-L1136)

```diff
-         this._boundRenderFunction = null, this.QJ.notifyObservers(this), this.QJ.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
-         const TT = KT.d.Instances.indexOf(this);
-         TT >= 0 && KT.d.Instances.splice(TT, 1), KT.d.Instances.length || (KT.d.OnEnginesDisposedObservable.notifyObservers(this), KT.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservabl … [truncated]
+         this._boundRenderFunction = null, this.MJ.notifyObservers(this), this.MJ.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
+         const qq = Oq.b.Instances.indexOf(this);
+         qq >= 0 && Oq.b.Instances.splice(qq, 1), Oq.b.Instances.length || (Oq.b.OnEnginesDisposedObservable.notifyObservers(this), Oq.b.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservabl … [truncated]
```

#### 79. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1139)

```diff
-         throw (0, jT.i)("LoadingScreen")
+         throw (0, Nq.m)("LoadingScreen")
```

#### 80. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1142-L1143` → after: `L1142-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1142-L1143) · [Before (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1142-L1143)

```diff
-         for (let cT = 0; cT < KT.d.Instances.length; cT++) {
-           const lT = KT.d.Instances[cT];
+         for (let gq = 0; gq < Oq.b.Instances.length; gq++) {
+           const Yq = Oq.b.Instances[gq];
```

#### 81. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1153` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1153) · [Before (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1153)

```diff
-   39474: (TT, kT, cT) => {
+   39617: (qq, Eq, gq) => {
```

#### 82. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1170)

```diff
-   39489: (TT, kT, cT) => {
+   39628: (qq, Eq, gq) => {
```

#### 83. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1172-L1173` → after: `L1172-L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1172-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1172-L1174) · [Before (L1172-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1172-L1173)

```diff
-       d: () => CT,
-       f: () => ST,
+       c: () => Wq,
+       g: () => oq,
+       i: () => aq,
```

#### 84. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1175-L1177` → after: `L1176-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1176-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1176-L1178) · [Before (L1175-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1175-L1177)

```diff
-       m: () => jT,
-       p: () => tT,
-       r: () => QT,
+       l: () => Vq,
+       n: () => Hq,
+       q: () => Bq,
```

#### 85. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1181-L1182` → after: `L1181-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1181-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1181-L1182) · [Before (L1181-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1181-L1182)

```diff
-       y: () => fT,
-       B: () => yT
+       x: () => Aq,
+       y: () => xq
```

#### 86. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1222)

```diff
-         const MT = kT.acT();
+         const lq = Eq.bYq();
```

#### 87. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1318` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1318) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1318)

```diff
-         this._cacheMatrix(TT, kT) && (this.engine.setMatrices(this._uniforms[TT], kT.acT()) || (this._valueCache[TT] = null))
+         this._cacheMatrix(qq, Eq) && (this.engine.setMatrices(this._uniforms[qq], Eq.bYq()) || (this._valueCache[qq] = null))
```

#### 88. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1367)

```diff
-     var MT = cT(39496);
+     var lq = gq(39630);
```

#### 89. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1465)

```diff
-       return NT((0, MT.i)(TT, cT, lT), kT, KT, OT)
+       return jq((0, lq.h)(qq, gq, Yq), Eq, Oq, mq)
```

#### 90. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1474)

```diff
-         throw new Error(`Something went wrong while creating a gl ${kT} shader object. gl error=${MT}, gl isContextLost=${cT.isContextLost()}, _contextWasLost=${lT}`)
+         throw new Error(`Something went wrong while creating a gl ${Eq} shader object. gl error=${lq}, gl isContextLost=${gq.isContextLost()}, _contextWasLost=${Yq}`)
```

#### 91. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1492)

```diff
-   39463: (TT, kT, cT) => {
+   39608: (qq, Eq, gq) => {
```

#### 92. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1496-L1501` → after: `L1496-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1496-L1501) · [Before (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1496-L1501)

```diff
-     var lT = cT(39467),
-       MT = cT(39489),
-       KT = cT(39516),
-       OT = cT(39533),
-       yT = cT(38512),
-       fT = cT(39482);
+     var Yq = gq(39612),
+       lq = gq(39628),
+       Oq = gq(39653),
+       mq = gq(39676),
+       xq = gq(38653),
+       Aq = gq(39626);
```

#### 93. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1542-L1549` → after: `L1542-L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1542-L1549) · [Before (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1542-L1549)

```diff
-     var CT = cT(39539),
-       jT = cT(39549),
-       vT = cT(39557),
-       tT = cT(39454),
-       hT = cT(39496),
-       NT = cT(39477),
-       QT = cT(39562),
-       ST = cT(39524);
+     var Wq = gq(39683),
+       Nq = gq(39696),
+       aq = gq(39698),
+       Vq = gq(39593),
+       dq = gq(39630),
+       jq = gq(39623),
+       Hq = gq(39703),
+       oq = gq(39667);
```

#### 94. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1551` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1551) · [Before (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1551)

```diff
-     class aT extends KT.d {
+     class Qq extends Oq.b {
```

#### 95. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1562` → after: `L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1562) · [Before (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1562)

```diff
-         return lT.e.ShadersRepository
+         return Yq.d.ShadersRepository
```

#### 96. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1565` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1565) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1565)

```diff
-         lT.e.ShadersRepository = TT
+         Yq.d.ShadersRepository = qq
```

#### 97. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1568` → after: `L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1568) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1568)

```diff
-         return this.qv > 1 && !this.disableUniformBuffers
+         return this.Ra > 1 && !this.disableUniformBuffers
```

#### 98. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1615)

```diff
-               (0, MT.y)(this._gl)
+               (0, lq.x)(this._gl)
```

#### 99. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1617)

```diff
-               TT.preventDefault(), this._contextWasLost = !0, (0, MT.y)(this._gl), yT.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
+               qq.preventDefault(), this._contextWasLost = !0, (0, lq.x)(this._gl), xq.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
```

#### 100. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1641-L1644` → after: `L1641-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1641-L1644) · [Before (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1641-L1644)

```diff
-         this._shaderProcessor = this.qv > 1 ? new AT : new xT;
-         const OT = `Babylon.js v${aT.Version}`;
-         yT.e.Log(OT + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", OT);
-         const fT = (0, MT.B)(this._gl);
+         this._shaderProcessor = this.Ra > 1 ? new Bq : new cq;
+         const mq = `Babylon.js v${Qq.Version}`;
+         xq.b.Log(mq + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", mq);
+         const Aq = (0, lq.y)(this._gl);
```

#### 101. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1861)

```diff
-             if (void 0 !== cT && (0, QT.h)(cT)) {
+             if (void 0 !== gq && (0, Hq.m)(gq)) {
```

#### 102. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1863` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1863) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1863)

```diff
-               void 0 !== cT && (0, QT.j)(cT) ? (aT._TempClearColorUint32[0] = 255 * TT.r, aT._TempClearColorUint32[1] = 255 * TT.g, aT._TempClearColorUint32[2] = 255 * TT.b, aT._TempClearColorUint32[3] = 255 * TT.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, aT._TempClearColorUin … [truncated]
+               void 0 !== gq && (0, Hq.o)(gq) ? (Qq._TempClearColorUint32[0] = 255 * qq.r, Qq._TempClearColorUint32[1] = 255 * qq.g, Qq._TempClearColorUint32[2] = 255 * qq.b, Qq._TempClearColorUint32[3] = 255 * qq.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Qq._TempClearColorUin … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1868` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1868) · [Before (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1868)

```diff
-         cT && (this.QcT ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), OT |= this._gl.DEPTH_BUFFER_BIT), lT && (this._gl.clearStencil(MT), OT |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(OT)
+         gq && (this.vYq ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), mq |= this._gl.DEPTH_BUFFER_BIT), Yq && (this._gl.clearStencil(lq), mq |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(mq)
```

#### 104. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1871-L1872` → after: `L1871-L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1871-L1872) · [Before (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1871-L1872)

```diff
-         if ((0, QT.h)(cT)) {
-           const cT = (0, QT.j)(lT),
+         if ((0, Hq.m)(gq)) {
+           const gq = (0, Hq.o)(Yq),
```

#### 105. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1882)

```diff
-         super.qN(), this._badOS && this.flushFramebuffer()
+         super.Kr(), this._badOS && this.flushFramebuffer()
```

#### 106. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1895` → after: `L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1895) · [Before (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1895)

```diff
-         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = TT, this._integerMRTAttachmentsMask = !TT.isMulti && TT.texture && (0, QT.h)(TT.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(fT._frameb … [truncated]
+         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = qq, this._integerMRTAttachmentsMask = !qq.isMulti && qq.texture && (0, Hq.m)(qq.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(Aq._frameb … [truncated]
```

#### 107. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1900)

```diff
-           TT.is3D && (TT.texture.width === IT.width && TT.texture.height === IT.height && TT.texture.depth === IT.depth || yT.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
+           qq.is3D && (qq.texture.width === uq.width && qq.texture.height === uq.height && qq.texture.depth === uq.depth || xq.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
```

#### 108. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1964-L1965` → after: `L1964-L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1964-L1965) · [Before (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1964-L1965)

```diff
-         const lT = new CT.c(cT);
-         return this.bindArrayBuffer(lT), "number" !== typeof TT ? TT instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(TT), kT), lT.DA = 4 * TT.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, TT, kT), lT.DA = TT.byteLength) : (this._gl.bufferDa … [truncated]
+         const Yq = new Wq.e(gq);
+         return this.bindArrayBuffer(Yq), "number" !== typeof qq ? qq instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(qq), Eq), Yq.WB = 4 * qq.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, qq, Eq), Yq.WB = qq.byteLength) : (this._gl.bufferDa … [truncated]
```

#### 109. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L1975)

```diff
-           MT = new CT.c(lT);
+           lq = new Wq.e(Yq);
```

#### 110. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2162)

```diff
-         kT && kT.program && (kT.program.__SPECTOR_rebuildProgram = null, (0, NT.o)(kT), this._gl && (this._currentProgram === kT.program && this._setProgram(null), this._gl.deleteProgram(kT.program)))
+         Eq && Eq.program && (Eq.program.__SPECTOR_rebuildProgram = null, (0, jq.j)(Eq), this._gl && (this._currentProgram === Eq.program && this._setProgram(null), this._gl.deleteProgram(Eq.program)))
```

#### 111. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2165)

```diff
-         return (0, hT.l)(TT, this.isNDCHalfZRange, this.QcT, this.useExactSrgbConversions)
+         return (0, dq.i)(qq, this.isNDCHalfZRange, this.vYq, this.useExactSrgbConversions)
```

#### 112. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2170-L2171` → after: `L2170-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2170-L2171) · [Before (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2170-L2171)

```diff
-         const jT = "string" === typeof TT ? TT : TT.vertexToken || TT.vertexSource || TT.vertexElement || TT.vertex,
-           vT = "string" === typeof TT ? TT : TT.fragmentToken || TT.fragmentSource || TT.fragmentElement || TT.fragment,
+         const Nq = "string" === typeof qq ? qq : qq.vertexToken || qq.vertexSource || qq.vertexElement || qq.vertex,
+           aq = "string" === typeof qq ? qq : qq.fragmentToken || qq.fragmentSource || qq.fragmentElement || qq.fragment,
```

#### 113. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2181-L2182` → after: `L2181-L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2181-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2181-L2182) · [Before (L2181-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2181-L2182)

```diff
-         this._gl && (0, MT.B)(this._gl);
-         const ST = new lT.e(TT, kT, hT ? this : cT, KT, this, OT, yT, fT, xT, IT, QT, kT.shaderLanguage ?? AT, kT.extraInitializationsAsync ?? CT);
+         this._gl && (0, lq.y)(this._gl);
+         const oq = new Yq.d(qq, Eq, dq ? this : gq, Oq, this, mq, xq, Aq, cq, uq, Hq, Eq.shaderLanguage ?? Bq, Eq.extraInitializationsAsync ?? Wq);
```

#### 114. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2190-L2191` → after: `L2190-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2190-L2191) · [Before (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2190-L2191)

```diff
-         const OT = (0, MT.B)(this._gl);
-         return OT._contextWasLost = this._contextWasLost, OT.validateShaderPrograms = this.validateShaderPrograms, (0, MT.v)(TT, kT, cT, lT || this._gl, KT)
+         const mq = (0, lq.y)(this._gl);
+         return mq._contextWasLost = this._contextWasLost, mq.validateShaderPrograms = this.validateShaderPrograms, (0, lq.t)(qq, Eq, gq, Yq || this._gl, Oq)
```

#### 115. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2195` → after: `L2195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2195) · [Before (L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2195)

```diff
-         const yT = (0, MT.B)(this._gl);
+         const xq = (0, lq.y)(this._gl);
```

#### 116. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2203` → after: `L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2203) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2203)

```diff
-           (0, MT.B)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
+           (0, lq.y)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
```

#### 117. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2205` → after: `L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2205) · [Before (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2205)

```diff
-         const kT = (0, MT.t)(this._gl, TT);
+         const Eq = (0, lq.q)(this._gl, qq);
```

#### 118. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2211)

```diff
-         return (0, MT.j)(TT, this._gl, this.validateShaderPrograms)
+         return (0, lq.i)(qq, this._gl, this.validateShaderPrograms)
```

#### 119. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2214-L2215` → after: `L2214-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2214-L2215) · [Before (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2214-L2215)

```diff
-         const CT = (0, MT.B)(this._gl);
-         return CT._contextWasLost = this._contextWasLost, CT.validateShaderPrograms = this.validateShaderPrograms, CT._createShaderProgramInjection = this._createShaderProgram.bind(this), CT.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), CT.createShader … [truncated]
+         const Wq = (0, lq.y)(this._gl);
+         return Wq._contextWasLost = this._contextWasLost, Wq.validateShaderPrograms = this.validateShaderPrograms, Wq._createShaderProgramInjection = this._createShaderProgram.bind(this), Wq.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Wq.createShader … [truncated]
```

#### 120. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2219` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2219) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2219)

```diff
-         return (0, MT.d)(TT, kT, cT, lT, KT)
+         return (0, lq.c)(qq, Eq, gq, Yq, Oq)
```

#### 121. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2222` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2222) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2222)

```diff
-         return !this._isDisposed && (0, MT.m)(TT, this._gl, this.validateShaderPrograms)
+         return !this._isDisposed && (0, lq.j)(qq, this._gl, this.validateShaderPrograms)
```

#### 122. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2225` → after: `L2225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2225) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2225)

```diff
-         (0, MT.f)(TT, kT)
+         (0, lq.g)(qq, Eq)
```

#### 123. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2244` → after: `L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2244) · [Before (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2244)

```diff
-         (TT = null !== TT && (0, OT.d)(TT) ? TT.effect : TT) && TT !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(TT), this._currentEffect = TT, TT.onBind && TT.onBind(TT), TT._onBindObservable && TT._onBindObservable.notifyObse … [truncated]
+         (qq = null !== qq && (0, mq.c)(qq) ? qq.effect : qq) && qq !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(qq), this._currentEffect = qq, qq.onBind && qq.onBind(qq), qq._onBindObservable && qq._onBindObservable.notifyObse … [truncated]
```

#### 124. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2407-L2409` → after: `L2407-L2409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2407-L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2407-L2409) · [Before (L2407-L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2407-L2409)

```diff
-         void 0 !== kT && "object" === typeof kT ? (cT = !!kT.generateMipMaps, KT = !!kT.createMipMaps, OT = void 0 === kT.type ? 0 : kT.type, fT = void 0 === kT.samplingMode ? 3 : kT.samplingMode, xT = void 0 === kT.format ? 5 : kT.format, IT = void 0 !== kT.useSRGBBuffer && kT.u … [truncated]
-         const hT = (0, QT.d)(xT),
-           NT = (0, QT.c)(xT),
+         void 0 !== Eq && "object" === typeof Eq ? (gq = !!Eq.generateMipMaps, Oq = !!Eq.createMipMaps, mq = void 0 === Eq.type ? 0 : Eq.type, Aq = void 0 === Eq.samplingMode ? 3 : Eq.samplingMode, cq = void 0 === Eq.format ? 5 : Eq.format, uq = void 0 !== Eq.useSRGBBuffer && Eq.u … [truncated]
+         const dq = (0, Hq.i)(cq),
+           jq = (0, Hq.e)(cq),
```

#### 125. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2411` → after: `L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2411) · [Before (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2411)

```diff
-           DT = new tT.b(this, MT),
+           Pq = new Vq.c(this, lq),
```

#### 126. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2427` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2427) · [Before (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2427)

```diff
-         if (ST.texParameteri(mT, ST.TEXTURE_MAG_FILTER, wT.mag), ST.texParameteri(mT, ST.TEXTURE_MIN_FILTER, wT.min), ST.texParameteri(mT, ST.TEXTURE_WRAP_S, ST.CLAMP_TO_EDGE), ST.texParameteri(mT, ST.TEXTURE_WRAP_T, ST.CLAMP_TO_EDGE), hT && this.qv > 1 && (0 === jT ? (ST.texPara … [truncated]
+         if (oq.texParameteri(hq, oq.TEXTURE_MAG_FILTER, vq.mag), oq.texParameteri(hq, oq.TEXTURE_MIN_FILTER, vq.min), oq.texParameteri(hq, oq.TEXTURE_WRAP_S, oq.CLAMP_TO_EDGE), oq.texParameteri(hq, oq.TEXTURE_WRAP_T, oq.CLAMP_TO_EDGE), dq && this.Ra > 1 && (0 === Nq ? (oq.texPara … [truncated]
```

#### 127. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2429` → after: `L2429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2429) · [Before (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2429)

```diff
-           if (TT = (0, QT.d)(DT.format) ? this._setupFramebufferDepthAttachments((0, QT.c)(DT.format), 19 !== DT.format, DT.width, DT.height, AT, DT.format, !0) : this._createRenderBuffer(DT.width, DT.height, AT, -1, this._getRGBABufferInternalSizedFormat(DT.type, DT.format, DT._ … [truncated]
+           if (qq = (0, Hq.i)(Pq.format) ? this._setupFramebufferDepthAttachments((0, Hq.e)(Pq.format), 19 !== Pq.format, Pq.width, Pq.height, Bq, Pq.format, !0) : this._createRenderBuffer(Pq.width, Pq.height, Bq, -1, this._getRGBABufferInternalSizedFormat(Pq.type, Pq.format, Pq._ … [truncated]
```

#### 128. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2437` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2437) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2437)

```diff
-         return TT && this._caps.supportSRGBBuffers && (this.qv > 1 || kT)
+         return qq && this._caps.supportSRGBBuffers && (this.Ra > 1 || Eq)
```

#### 129. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2464` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2464) · [Before (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2464)

```diff
-             const TT = new tT.b(this, 2);
+             const qq = new Vq.c(this, 2);
```

#### 130. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2474` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2474) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2474)

```diff
-         return 1 === this.qv ? (cT = this._getInternalFormat(TT, kT), lT = cT) : (cT = this._getInternalFormat(TT, !1), lT = this._getRGBABufferInternalSizedFormat(0, TT, kT)), {
+         return 1 === this.Ra ? (gq = this._getInternalFormat(qq, Eq), Yq = gq) : (gq = this._getInternalFormat(qq, !1), Yq = this._getRGBABufferInternalSizedFormat(0, qq, Eq)), {
```

#### 131. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2623-L2624` → after: `L2623-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2623-L2624) · [Before (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2623-L2624)

```diff
-           AT = Math.min(IT, this.needPOTTextures ? (0, jT.c)(lT.width, IT) : lT.width),
-           CT = Math.min(IT, this.needPOTTextures ? (0, jT.c)(lT.height, IT) : lT.height),
+           Bq = Math.min(uq, this.needPOTTextures ? (0, Nq.g)(Yq.width, uq) : Yq.width),
+           Wq = Math.min(uq, this.needPOTTextures ? (0, Nq.g)(Yq.height, uq) : Yq.height),
```

#### 132. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2634` → after: `L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2634) · [Before (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2634)

```diff
-         return this.qv > 1 ? 15 === TT ? MT = lT.DEPTH_COMPONENT16 : 16 === TT ? MT = lT.DEPTH_COMPONENT24 : 17 === TT || 13 === TT ? MT = cT ? lT.DEPTH24_STENCIL8 : lT.DEPTH_COMPONENT24 : 14 === TT ? MT = lT.DEPTH_COMPONENT32F : 18 === TT && (MT = cT ? lT.DEPTH32F_STENCIL8 : lT. … [truncated]
+         return this.Ra > 1 ? 15 === qq ? lq = Yq.DEPTH_COMPONENT16 : 16 === qq ? lq = Yq.DEPTH_COMPONENT24 : 17 === qq || 13 === qq ? lq = gq ? Yq.DEPTH24_STENCIL8 : Yq.DEPTH_COMPONENT24 : 14 === qq ? lq = Yq.DEPTH_COMPONENT32F : 18 === qq && (lq = gq ? Yq.DEPTH32F_STENCIL8 : Yq. … [truncated]
```

#### 133. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2668` → after: `L2668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2668) · [Before (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2668)

```diff
-         this._currentProgram !== TT && ((0, MT.r)(TT, this._gl), this._currentProgram = TT)
+         this._currentProgram !== qq && ((0, lq.n)(qq, this._gl), this._currentProgram = qq)
```

#### 134. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2690)

```diff
-           if (this._activateCurrentTexture(), kT && kT.isMultiview) throw yT.e.Error(["_bindTextureDirectly called with a multiview texture!", TT, kT]), "_bindTextureDirectly called with a multiview texture!";
+           if (this._activateCurrentTexture(), Eq && Eq.isMultiview) throw xq.b.Error(["_bindTextureDirectly called with a multiview texture!", qq, Eq]), "_bindTextureDirectly called with a multiview texture!";
```

#### 135. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2702` → after: `L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2702) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2702)

```diff
-         for (let TT = 0; TT < this._maxSimultaneousTextures; TT++) this._activeChannel = TT, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.qv > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
+         for (let qq = 0; qq < this._maxSimultaneousTextures; qq++) this._activeChannel = qq, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Ra > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
```

#### 136. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2725` → after: `L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2725) · [Before (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2725)

```diff
-         if (!kT) return null != this._boundTexturesCache[TT] && (this._activeChannel = TT, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.qv > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
+         if (!Eq) return null != this._boundTexturesCache[qq] && (this._activeChannel = qq, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Ra > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
```

#### 137. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2777` → after: `L2777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L2777) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L2777)

```diff
-         (0, fT.i)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
+         (0, Aq.n)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
```

#### 138. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3088` → after: `L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3088) · [Before (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3088)

```diff
-           if (OT.length < IT) return yT.e.Error(`Data buffer is too small to store the read pixels (${OT.length} should be more than ${IT})`), Promise.resolve(OT)
+           if (mq.length < uq) return xq.b.Error(`Data buffer is too small to store the read pixels (${mq.length} should be more than ${uq})`), Promise.resolve(mq)
```

#### 139. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3101` → after: `L3101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3101) · [Before (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3101)

```diff
-           const TT = KT.d._CreateCanvas(1, 1),
+           const qq = Oq.b._CreateCanvas(1, 1),
```

#### 140. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3111` → after: `L3111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3111) · [Before (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3111)

```diff
-           const TT = KT.d._CreateCanvas(1, 1),
+           const qq = Oq.b._CreateCanvas(1, 1),
```

#### 141. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3184` → after: `L3184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3184) · [Before (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3184)

```diff
-     }], aT._ConcatenateShader = hT.i, aT._IsSupported = null, aT._HasMajorPerformanceCaveat = null
+     }], Qq._ConcatenateShader = dq.h, Qq._IsSupported = null, Qq._HasMajorPerformanceCaveat = null
```

#### 142. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3186` → after: `L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3186) · [Before (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3186)

```diff
-   39819: (TT, kT, cT) => {
+   39926: (qq, Eq, gq) => {
```

#### 143. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3189` → after: `L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3189) · [Before (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3189)

```diff
-         d: () => MT
+         b: () => lq
```

#### 144. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3197` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3197) · [Before (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3197)

```diff
-   39814: (TT, kT, cT) => {
+   39921: (qq, Eq, gq) => {
```

#### 145. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3199-L3201` → after: `L3199-L3201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3199-L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3199-L3201) · [Before (L3199-L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3199-L3201)

```diff
-       b: () => lT,
-       d: () => KT,
-       f: () => MT
+       c: () => Yq,
+       e: () => Oq,
+       i: () => lq
```

#### 146. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3222` → after: `L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3222) · [Before (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3222)

```diff
-   39812: (TT, kT, cT) => {
+   39919: (qq, Eq, gq) => {
```

#### 147. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3224-L3225` → after: `L3224-L3225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3224-L3225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3224-L3225) · [Before (L3224-L3225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3224-L3225)

```diff
-       c: () => MT,
-       g: () => OT,
+       b: () => lq,
+       f: () => mq,
```

#### 148. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3228` → after: `L3228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3228) · [Before (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3228)

```diff
-     var lT = cT(36892);
+     var Yq = gq(37139);
```

#### 149. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3238` → after: `L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3238) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3238)

```diff
-         super(TT, kT), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new lT.i(cT, MT)
+         super(qq, Eq), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Yq.p(gq, lq)
```

#### 150. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3254` → after: `L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3254) · [Before (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3254)

```diff
-   39829: (TT, kT, cT) => {
+   39938: (qq, Eq, gq) => {
```

#### 151. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3256` → after: `L3256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3256) · [Before (L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3256)

```diff
-       b: () => lT
+       c: () => Yq
```

#### 152. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3265` → after: `L3265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3265) · [Before (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3265)

```diff
-   39454: (TT, kT, cT) => {
+   39593: (qq, Eq, gq) => {
```

#### 153. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3267` → after: `L3267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3267) · [Before (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3267)

```diff
-       b: () => OT
+       c: () => mq
```

#### 154. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3269-L3270` → after: `L3269-L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3269-L3270) · [Before (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3269-L3270)

```diff
-     var lT, MT = cT(36932),
-       KT = cT(39458);
+     var Yq, lq = gq(37156),
+       Oq = gq(39602);
```

#### 155. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3274` → after: `L3274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3274) · [Before (L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3274)

```diff
-     class OT extends KT.b {
+     class mq extends Oq.e {
```

#### 156. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3295` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3295) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3295)

```diff
-         super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable … [truncated]
+         super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable … [truncated]
```

#### 157. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3372` → after: `L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3372) · [Before (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3372)

```diff
-   39562: (TT, kT, cT) => {
+   39703: (qq, Eq, gq) => {
```

#### 158. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3389-L3392` → after: `L3389-L3392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3389-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3389-L3392) · [Before (L3389-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3389-L3392)

```diff
-       c: () => OT,
-       d: () => lT,
-       h: () => MT,
-       j: () => KT
+       e: () => mq,
+       i: () => Yq,
+       m: () => lq,
+       o: () => Oq
```

#### 159. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3395` → after: `L3395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3395) · [Before (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3395)

```diff
-   39458: (TT, kT, cT) => {
+   39602: (qq, Eq, gq) => {
```

#### 160. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3397` → after: `L3397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3397) · [Before (L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3397)

```diff
-       b: () => lT
+       e: () => Yq
```

#### 161. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3453` → after: `L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3453) · [Before (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3453)

```diff
-   39755: (TT, kT, cT) => {
+   39862: (qq, Eq, gq) => {
```

#### 162. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3458` → after: `L3458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3458) · [Before (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3458)

```diff
-       d: () => lT
+       e: () => Yq
```

#### 163. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3461` → after: `L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3461) · [Before (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3461)

```diff
-   39533: (TT, kT, cT) => {
+   39676: (qq, Eq, gq) => {
```

#### 164. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3466` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3466) · [Before (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3466)

```diff
-       d: () => lT
+       c: () => Yq
```

#### 165. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3469` → after: `L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3469) · [Before (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3469)

```diff
-   39936: (TT, kT, cT) => {
+   40074: (qq, Eq, gq) => {
```

#### 166. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3473)

```diff
-     var lT = cT(39514);
+     var Yq = gq(39644);
```

#### 167. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3490-L3491` → after: `L3490-L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3490-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3490-L3491) · [Before (L3490-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3490-L3491)

```diff
-           TT ? kT.dispose() : lT.e.SetImmediate((() => {
-             kT.Dv().onEndFrameObservable.addOnce((() => {
+           qq ? Eq.dispose() : Yq.c.SetImmediate((() => {
+             Eq.Ba().onEndFrameObservable.addOnce((() => {
```

#### 168. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3500` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3500) · [Before (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3500)

```diff
-   39477: (TT, kT, cT) => {
+   39623: (qq, Eq, gq) => {
```

#### 169. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3502-L3505` → after: `L3502-L3505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3502-L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3502-L3505) · [Before (L3502-L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3502-L3505)

```diff
-       d: () => AT,
-       h: () => jT,
-       l: () => xT,
-       o: () => IT
+       c: () => Bq,
+       f: () => Nq,
+       i: () => cq,
+       j: () => uq
```

#### 170. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3507-L3512` → after: `L3507-L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3507-L3512) · [Before (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3507-L3512)

```diff
-     var lT = cT(39482),
-       MT = cT(39489),
-       KT = cT(39474),
-       OT = cT(38512),
-       yT = cT(39509),
-       fT = cT(39496);
+     var Yq = gq(39626),
+       lq = gq(39628),
+       Oq = gq(39617),
+       mq = gq(38653),
+       xq = gq(39640),
+       Aq = gq(39630);
```

#### 171. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3515` → after: `L3515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3515) · [Before (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3515)

```diff
-       return (0, MT.B)(kT).cachedPipelines[TT]
+       return (0, lq.y)(Eq).cachedPipelines[qq]
```

#### 172. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3522` → after: `L3522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3522) · [Before (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3522)

```diff
-         const TT = (0, MT.B)(cT),
+         const qq = (0, lq.y)(gq),
```

#### 173. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3530-L3531` → after: `L3530-L3531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3530-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3530-L3531) · [Before (L3530-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3530-L3531)

```diff
-       const AT = (0, lT.i)() ? OT?.getHostDocument() : null;
-       xT = "string" === typeof kT ? kT : "string" === typeof kT.vertexSource ? "source:" + kT.vertexSource : "string" === typeof kT.vertexElement ? AT?.getElementById(kT.vertexElement) || kT.vertexElement : kT.vertex || kT, IT = "string" === typeof kT ? kT : "string" === typeof k … [truncated]
+       const Bq = (0, Yq.n)() ? mq?.getHostDocument() : null;
+       cq = "string" === typeof Eq ? Eq : "string" === typeof Eq.vertexSource ? "source:" + Eq.vertexSource : "string" === typeof Eq.vertexElement ? Bq?.getElementById(Eq.vertexElement) || Eq.vertexElement : Eq.vertex || Eq, uq = "string" === typeof Eq ? Eq : "string" === typeof E … [truncated]
```

#### 174. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3536` → after: `L3536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3536) · [Before (L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3536)

```diff
-             (0, yT.e)(TT), (0, yT.k)(lT, TT, ((lT, IT) => {
+             (0, xq.f)(qq), (0, xq.k)(Yq, qq, ((Yq, uq) => {
```

#### 175. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3539` → after: `L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3539) · [Before (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3539)

```diff
-                 const IT = (0, yT.c)(lT, OT, TT);
+                 const uq = (0, xq.d)(Yq, mq, qq);
```

#### 176. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3577` → after: `L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3577) · [Before (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3577)

```diff
-       if (IT = "." === TT[0] || "/" === TT[0] || TT.indexOf("http") > -1 ? TT : KT.d.GetShadersRepository(OT) + TT, !(yT = yT || fT.m)) throw new Error("loadFileInjection is not defined");
+       if (uq = "." === qq[0] || "/" === qq[0] || qq.indexOf("http") > -1 ? qq : Oq.d.GetShadersRepository(mq) + qq, !(xq = xq || Aq.m)) throw new Error("loadFileInjection is not defined");
```

#### 177. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3582` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3582) · [Before (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3582)

```diff
-         const KT = TT.context ? (0, MT.B)(TT.context) : null;
+         const Oq = qq.context ? (0, lq.y)(qq.context) : null;
```

#### 178. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3591` → after: `L3591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3591) · [Before (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3591)

```diff
-         throw OT.e.Error("Error compiling effect"), KT
+         throw mq.b.Error("Error compiling effect"), Oq
```

#### 179. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3595` → after: `L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3595) · [Before (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3595)

```diff
-   39467: (TT, kT, cT) => {
+   39612: (qq, Eq, gq) => {
```

#### 180. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3597` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3597) · [Before (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3597)

```diff
-       e: () => fT
+       d: () => Aq
```

#### 181. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3599-L3603` → after: `L3599-L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3599-L3603) · [Before (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3599-L3603)

```diff
-     var lT = cT(36932),
-       MT = cT(38512),
-       KT = cT(39474),
-       OT = cT(39477),
-       yT = cT(39514);
+     var Yq = gq(37156),
+       lq = gq(38653),
+       Oq = gq(39617),
+       mq = gq(39623),
+       xq = gq(39644);
```

#### 182. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3611` → after: `L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3611) · [Before (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3611)

```diff
-       get VkT() {
+       get bM() {
```

#### 183. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3615` → after: `L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3615) · [Before (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3615)

```diff
-         return this._onBindObservable || (this._onBindObservable = new lT.b), this._onBindObservable
+         return this._onBindObservable || (this._onBindObservable = new Yq.d), this._onBindObservable
```

#### 184. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3631` → after: `L3631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3631) · [Before (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3631)

```diff
-         this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new lT.b, this.onErrorObservable = new lT.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationF … [truncated]
+         this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Yq.d, this.onErrorObservable = new Yq.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationF … [truncated]
```

#### 185. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3642` → after: `L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3642) · [Before (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3642)

```diff
-         "WEBGL2" === this._engine.shaderPlatformName && (NT = (0, OT.l)(hT, this._engine._gl) ?? NT), this._attributeLocationByName = {}, this.uniqueId = fT._UniqueIdSeed++, NT ? (this._pipelineContext = NT, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCom … [truncated]
+         "WEBGL2" === this._engine.shaderPlatformName && (jq = (0, mq.i)(dq, this._engine._gl) ?? jq), this._attributeLocationByName = {}, this.uniqueId = Aq._UniqueIdSeed++, jq ? (this._pipelineContext = jq, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCom … [truncated]
```

#### 186. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3644-L3645` → after: `L3644-L3645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3644-L3645) · [Before (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3644-L3645)

```diff
-             cT = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${kT}`);
-           TT && "string" === typeof TT.stack && (cT.stack = `${cT.message}\nCaused by: ${TT.stack}`), this._processCompilationErrors(cT)
+             gq = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Eq}`);
+           qq && "string" === typeof qq.stack && (gq.stack = `${gq.message}\nCaused by: ${qq.stack}`), this._processCompilationErrors(gq)
```

#### 187. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3647` → after: `L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3647) · [Before (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3647)

```diff
-           this._onReleaseEffectsObserver = null, this.VkT || this.dispose(!0)
+           this._onReleaseEffectsObserver = null, this.bM || this.dispose(!0)
```

#### 188. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3669` → after: `L3669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3669) · [Before (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3669)

```diff
-           QcT: this._engine.QcT,
+           vYq: this._engine.vYq,
```

#### 189. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3672` → after: `L3672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3672) · [Before (L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3672)

```diff
-         (0, OT.d)(MT, this.name, this._processFinalCode, ((TT, cT) => {
+         (0, mq.c)(lq, this.name, this._processFinalCode, ((qq, gq) => {
```

#### 190. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3687` → after: `L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3687) · [Before (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3687)

```diff
-         return !!this._engine.VkT || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
+         return !!this._engine.bM || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
```

#### 191. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3742` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3742) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3742)

```diff
-         (0, yT.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (kT => {
+         (0, xq.e)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (Eq => {
```

#### 192. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3775` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3775) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3775)

```diff
-             QcT: this._engine.QcT,
+             vYq: this._engine.vYq,
```

#### 193. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3788` → after: `L3788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3788) · [Before (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3788)

```diff
-           const TT = this.Dv().scenes;
+           const qq = this.Ba().scenes;
```

#### 194. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3812-L3813` → after: `L3812-L3813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3812-L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3812-L3813) · [Before (L3812-L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3812-L3813)

```diff
-           this._pipelineContext = (0, OT.h)({
-             existingPipelineContext: TT ? kT : null,
+           this._pipelineContext = (0, mq.f)({
+             existingPipelineContext: qq ? Eq : null,
```

#### 195. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3840` → after: `L3840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3840) · [Before (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3840)

```diff
-             lT.length >= kT && (MT = `Offending line [${kT}] in ${cT?"fragment":"vertex"} code: ${lT[kT-1]}`)
+             Yq.length >= Eq && (lq = `Offending line [${Eq}] in ${gq?"fragment":"vertex"} code: ${Yq[Eq-1]}`)
```

#### 196. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3850` → after: `L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3850) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3850)

```diff
-         if (MT.e.Error("Unable to compile effect:"), MT.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), MT.e.Error(`Attributes: ${cT.join(" ")}`), MT.e.Error("Defines:\n" + this.defines), fT.LogShaderCodeOnCompilationError) {
+         if (lq.b.Error("Unable to compile effect:"), lq.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), lq.b.Error(`Attributes: ${gq.join(" ")}`), lq.b.Error("Defines:\n" + this.defines), Aq.LogShaderCodeOnCompilationError) {
```

#### 197. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3853` → after: `L3853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3853) · [Before (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3853)

```diff
-           this._pipelineContext?._getVertexShaderCode() && ([TT, kT] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), TT && (MT.e.Error("Vertex code:"), MT.e.Error(TT))), this._pipelineContext?._getFragmentShaderCode() & … [truncated]
+           this._pipelineContext?._getVertexShaderCode() && ([qq, Eq] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), qq && (lq.b.Error("Vertex code:"), lq.b.Error(qq))), this._pipelineContext?._getFragmentShaderCode() & … [truncated]
```

#### 198. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3855)

```diff
-         MT.e.Error("Error: " + this._compilationError);
+         lq.b.Error("Error: " + this._compilationError);
```

#### 199. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L3862` → after: `L3862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R3862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L3862) · [Before (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L3862)

```diff
-         kT && (this._pipelineContext = kT, this._isReady = !0, KT()), lT ? (this._pipelineContext = null, lT.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, MT.e.Error("Trying next fallback."), this.defines = lT.reduce(this.defines, this), this._prepareEffect()) : (this._al … [truncated]
+         Eq && (this._pipelineContext = Eq, this._isReady = !0, Oq()), Yq ? (this._pipelineContext = null, Yq.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, lq.b.Error("Trying next fallback."), this.defines = Yq.reduce(this.defines, this), this._prepareEffect()) : (this._al … [truncated]
```

#### 200. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4022` → after: `L4022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4022) · [Before (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4022)

```diff
-         this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, OT.o)(this._pipelineContext), this._engine._r … [truncated]
+         this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, mq.j)(this._pipelineContext), this._engine._r … [truncated]
```

#### 201. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4026` → after: `L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4026) · [Before (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4026)

```diff
-         kT && (KT.d.GetShadersStore(lT)[`${TT}PixelShader`] = kT), cT && (KT.d.GetShadersStore(lT)[`${TT}VertexShader`] = cT)
+         Eq && (Oq.d.GetShadersStore(Yq)[`${qq}PixelShader`] = Eq), gq && (Oq.d.GetShadersStore(Yq)[`${qq}VertexShader`] = gq)
```

#### 202. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4034` → after: `L4034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4034) · [Before (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4034)

```diff
-   39796: (TT, kT, cT) => {
+   39891: (qq, Eq, gq) => {
```

#### 203. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4036-L4038` → after: `L4036-L4038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4036-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4036-L4038) · [Before (L4036-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4036-L4038)

```diff
-       d: () => IT,
-       g: () => rT,
-       j: () => FT
+       e: () => uq,
+       h: () => tq,
+       l: () => yq
```

#### 204. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4040-L4046` → after: `L4040-L4046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4040-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4040-L4046) · [Before (L4040-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4040-L4046)

```diff
-     var lT = cT(39467),
-       MT = cT(36892),
-       KT = cT(36942),
-       OT = cT(39770);
-     const yT = new MT.d,
-       fT = new MT.d,
-       xT = new MT.d,
+     var Yq = gq(39612),
+       lq = gq(37139),
+       Oq = gq(37165),
+       mq = gq(39870);
+     const xq = new lq.e,
+       Aq = new lq.e,
+       cq = new lq.e,
```

#### 205. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4048` → after: `L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4048) · [Before (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4048)

```diff
-         NJ: () => {},
+         ZJ: () => {},
```

#### 206. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4053-L4054` → after: `L4053-L4054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4053-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4053-L4054) · [Before (L4053-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4053-L4054)

```diff
-       const lT = cT.acT(),
-         MT = kT.acT();
+       const Yq = gq.bYq(),
+         lq = Eq.bYq();
```

#### 207. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4060` → after: `L4060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4060) · [Before (L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4060)

```diff
-       return (0, KT.k)(kT, fT), AT(TT, fT, xT), (0, KT.k)(xT, cT), cT
+       return (0, Oq.h)(Eq, Aq), Bq(qq, Aq, cq), (0, Oq.h)(cq, gq), gq
```

#### 208. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4065-L4066` → after: `L4065-L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4065-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4065-L4066) · [Before (L4065-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4065-L4066)

```diff
-       const lT = cT.acT(),
-         MT = kT.acT();
+       const Yq = gq.bYq(),
+         lq = Eq.bYq();
```

#### 209. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4072` → after: `L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4072) · [Before (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4072)

```diff
-       return (0, KT.r)(jT(TT, kT, lT), cT, lT), lT
+       return (0, Oq.o)(Nq(qq, Eq, Yq), gq, Yq), Yq
```

#### 210. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4076` → after: `L4076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4076) · [Before (L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4076)

```diff
-       return (0, KT.k)(cT, fT), (0, KT.r)(kT, fT, xT), AT(TT, xT, fT), jT(TT, cT, xT), (0, KT.r)(fT, xT, lT), lT
+       return (0, Oq.h)(gq, Aq), (0, Oq.o)(Eq, Aq, cq), Bq(qq, cq, Aq), Nq(qq, gq, cq), (0, Oq.o)(Aq, cq, Yq), Yq
```

#### 211. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4080` → after: `L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4080) · [Before (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4080)

```diff
-       return (0, KT.k)(cT, fT), (0, KT.r)(kT, fT, xT), AT(TT, xT, fT), vT(TT, lT, MT, xT), (0, KT.r)(fT, xT, OT), OT
+       return (0, Oq.h)(gq, Aq), (0, Oq.o)(Eq, Aq, cq), Bq(qq, cq, Aq), aq(qq, Yq, lq, cq), (0, Oq.o)(Aq, cq, mq), mq
```

#### 212. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4084` → after: `L4084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4084) · [Before (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4084)

```diff
-       const cT = IT.NJ();
+       const gq = uq.ZJ();
```

#### 213. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4112` → after: `L4112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4112) · [Before (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4112)

```diff
-       ST = lT.e,
+       oq = Yq.d,
```

#### 214. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4114` → after: `L4114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4114) · [Before (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4114)

```diff
-       aT = lT.e.prototype.setMatrix;
+       Qq = Yq.d.prototype.setMatrix;
```

#### 215. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4117` → after: `L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4117) · [Before (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4117)

```diff
-       lT.e.prototype.setMatrix = aT, ST._setMatrixOverride = void 0, QT.prototype._updateMatrixForUniform = DT, QT.prototype._updateMatrixForUniformOverride = void 0
+       Yq.d.prototype.setMatrix = Qq, oq._setMatrixOverride = void 0, Hq.prototype._updateMatrixForUniform = Pq, Hq.prototype._updateMatrixForUniformOverride = void 0
```

#### 216. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4128` → after: `L4128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4128) · [Before (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4128)

```diff
-   39764: (TT, kT, cT) => {
+   39865: (qq, Eq, gq) => {
```

#### 217. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4130` → after: `L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4130) · [Before (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4130)

```diff
-       d: () => KT,
+       b: () => Oq,
```

#### 218. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4133` → after: `L4133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4133) · [Before (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4133)

```diff
-     var lT = cT(39755);
+     var Yq = gq(39862);
```

#### 219. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4136` → after: `L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4136) · [Before (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4136)

```diff
-       kT.WHITEBALANCE && TT.push("whiteBalanceMatrix"), kT.EXPOSURE && TT.push("exposureLinear"), kT.CONTRAST && TT.push("contrast"), kT.COLORGRADING && TT.push("colorTransformSettings"), (kT.VIGNETTE || kT.DITHER) && TT.push("vInverseScreenSize"), kT.VIGNETTE && (TT.push("vignet … [truncated]
+       Eq.WHITEBALANCE && qq.push("whiteBalanceMatrix"), Eq.EXPOSURE && qq.push("exposureLinear"), Eq.CONTRAST && qq.push("contrast"), Eq.COLORGRADING && qq.push("colorTransformSettings"), (Eq.VIGNETTE || Eq.DITHER) && qq.push("vInverseScreenSize"), Eq.VIGNETTE && (qq.push("vignet … [truncated]
```

#### 220. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4143` → after: `L4143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4143) · [Before (L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4143)

```diff
-   39746: (TT, kT, cT) => {
+   39860: (qq, Eq, gq) => {
```

#### 221. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4145-L4146` → after: `L4145-L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4145-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4145-L4146) · [Before (L4145-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4145-L4146)

```diff
-       c: () => zT,
-       g: () => HT
+       e: () => bq,
+       f: () => fq
```

#### 222. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4148-L4153` → after: `L4148-L4153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4148-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4148-L4153) · [Before (L4148-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4148-L4153)

```diff
-     var lT = cT(39620),
-       MT = cT(39624),
-       KT = cT(36932),
-       OT = cT(37093),
-       yT = cT(36937),
-       fT = cT(36892);
+     var Yq = gq(39757),
+       lq = gq(39759),
+       Oq = gq(37156),
+       mq = gq(37289),
+       xq = gq(37158),
+       Aq = gq(37139);
```

#### 223. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4191` → after: `L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4191) · [Before (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4191)

```diff
-       const cT = Number.isNaN(TT) ? IT : Math.max(TT, IT),
+       const gq = Number.isNaN(qq) ? uq : Math.max(qq, uq),
```

#### 224. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4197` → after: `L4197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4197) · [Before (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4197)

```diff
-         xT[TT][0] <= lT ? MT = TT : KT = TT
+         cq[qq][0] <= Yq ? lq = qq : Oq = qq
```

#### 225. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4203-L4206` → after: `L4203-L4206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4203-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4203-L4206) · [Before (L4203-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4203-L4206)

```diff
-         aT = fT.i.Lerp(new fT.i(jT, vT), new fT.i(NT, QT), DT),
-         FT = fT.i.Normalize(new fT.i(1, tT)),
-         rT = fT.i.Normalize(new fT.i(1, ST)),
-         PT = fT.i.Normalize(fT.i.Lerp(FT, rT, DT)),
+         Qq = Aq.p.Lerp(new Aq.p(Nq, aq), new Aq.p(jq, Hq), Pq),
+         yq = Aq.p.Normalize(new Aq.p(1, Vq)),
+         tq = Aq.p.Normalize(new Aq.p(1, oq)),
+         rq = Aq.p.Normalize(Aq.p.Lerp(yq, tq, Pq)),
```

#### 226. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4208` → after: `L4208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4208) · [Before (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4208)

```diff
-       aT.gcT(PT.scale(wT / 3e3));
+       Qq.KYq(rq.scale(vq / 3e3));
```

#### 227. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4212` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4212) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4212)

```diff
-       return new fT.m(bT / zT, 1, (1 - bT - zT) / zT)
+       return new Aq.q(nq / bq, 1, (1 - nq - bq) / bq)
```

#### 228. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4214-L4215` → after: `L4214-L4215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4214-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4214-L4215) · [Before (L4214-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4214-L4215)

```diff
-     const jT = fT.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
-       vT = fT.d.Invert(jT);
+     const Nq = Aq.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
+       aq = Aq.e.Invert(Nq);
```

#### 229. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4218` → after: `L4218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4218) · [Before (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4218)

```diff
-       const cT = kT > 0 ? TT / kT : 10;
+       const gq = Eq > 0 ? qq / Eq : 10;
```

#### 230. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4223-L4225` → after: `L4223-L4225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4223-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4223-L4225) · [Before (L4223-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4223-L4225)

```diff
-       const cT = fT.m.TransformNormal(TT, jT),
-         lT = fT.m.TransformNormal(kT, jT),
-         MT = fT.d.FromArray([tT(lT.x, cT.x), 0, 0, 0, 0, tT(lT.y, cT.y), 0, 0, 0, 0, tT(lT.z, cT.z), 0, 0, 0, 0, 1]);
+       const gq = Aq.q.TransformNormal(qq, Nq),
+         Yq = Aq.q.TransformNormal(Eq, Nq),
+         lq = Aq.e.FromArray([Vq(Yq.x, gq.x), 0, 0, 0, 0, Vq(Yq.y, gq.y), 0, 0, 0, 0, Vq(Yq.z, gq.z), 0, 0, 0, 0, 1]);
```

#### 231. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4228-L4233` → after: `L4228-L4233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4228-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4228-L4233) · [Before (L4228-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4228-L4233)

```diff
-     const NT = new fT.m(.95047, 1, 1.08883),
-       QT = fT.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(hT(NT, CT(6500, 0))),
-       ST = fT.d.Invert(QT),
-       DT = fT.m.TransformNormal(new fT.m(1, 1, 1), QT);
-     var aT = cT(39645),
-       FT = cT(39755);
+     const jq = new Aq.q(.95047, 1, 1.08883),
+       Hq = Aq.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(dq(jq, Wq(6500, 0))),
+       oq = Aq.e.Invert(Hq),
+       Pq = Aq.q.TransformNormal(new Aq.q(1, 1, 1), Hq);
+     var Qq = gq(39779),
+       yq = gq(39862);
```

#### 232. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4262` → after: `L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4262) · [Before (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4262)

```diff
-           this._dirty = !0, this._tempColor = new OT.g(0, 0, 0, 0), this._globalCurve = new OT.g(0, 0, 0, 0), this._highlightsCurve = new OT.g(0, 0, 0, 0), this._midtonesCurve = new OT.g(0, 0, 0, 0), this._shadowsCurve = new OT.g(0, 0, 0, 0), this._positiveCurve = new OT.g(0, 0,  … [truncated]
+           this._dirty = !0, this._tempColor = new mq.g(0, 0, 0, 0), this._globalCurve = new mq.g(0, 0, 0, 0), this._highlightsCurve = new mq.g(0, 0, 0, 0), this._midtonesCurve = new mq.g(0, 0, 0, 0), this._shadowsCurve = new mq.g(0, 0, 0, 0), this._positiveCurve = new mq.g(0, 0,  … [truncated]
```

#### 233. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4422)

```diff
-         kT = [(0, MT.J)()], cT = [(0, MT.J)()], KT = [(0, MT.J)()], yT = [(0, MT.J)()], fT = [(0, MT.J)()], xT = [(0, MT.J)()], IT = [(0, MT.J)()], AT = [(0, MT.J)()], CT = [(0, MT.J)()], jT = [(0, MT.J)()], vT = [(0, MT.J)()], tT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
+         Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], xq = [(0, lq.M)()], Aq = [(0, lq.M)()], cq = [(0, lq.M)()], uq = [(0, lq.M)()], Bq = [(0, lq.M)()], Wq = [(0, lq.M)()], Nq = [(0, lq.M)()], aq = [(0, lq.M)()], Vq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
```

#### 234. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4435` → after: `L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4435) · [Before (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4435)

```diff
-         }, hT, NT), (0, lT.e)(null, null, cT, {
+         }, dq, jq), (0, Yq.f)(null, null, gq, {
```

#### 235. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4448` → after: `L4448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4448) · [Before (L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4448)

```diff
-         }, QT, ST), (0, lT.e)(null, null, KT, {
+         }, Hq, oq), (0, Yq.f)(null, null, Oq, {
```

#### 236. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4461` → after: `L4461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4461) · [Before (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4461)

```diff
-         }, DT, rT), (0, lT.e)(null, null, yT, {
+         }, Pq, tq), (0, Yq.f)(null, null, xq, {
```

#### 237. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4474` → after: `L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4474) · [Before (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4474)

```diff
-         }, PT, wT), (0, lT.e)(null, null, fT, {
+         }, rq, vq), (0, Yq.f)(null, null, Aq, {
```

#### 238. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4487` → after: `L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4487) · [Before (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4487)

```diff
-         }, mT, bT), (0, lT.e)(null, null, xT, {
+         }, hq, nq), (0, Yq.f)(null, null, cq, {
```

#### 239. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4500` → after: `L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4500) · [Before (L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4500)

```diff
-         }, zT, JT), (0, lT.e)(null, null, IT, {
+         }, bq, iq), (0, Yq.f)(null, null, uq, {
```

#### 240. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4513` → after: `L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4513) · [Before (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4513)

```diff
-         }, oT, HT), (0, lT.e)(null, null, AT, {
+         }, Zq, fq), (0, Yq.f)(null, null, Bq, {
```

#### 241. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4526` → after: `L4526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4526) · [Before (L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4526)

```diff
-         }, eT, GT), (0, lT.e)(null, null, CT, {
+         }, Mq, Tq), (0, Yq.f)(null, null, Wq, {
```

#### 242. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4539` → after: `L4539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4539) · [Before (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4539)

```diff
-         }, VT, ET), (0, lT.e)(null, null, jT, {
+         }, zq, Sq), (0, Yq.f)(null, null, Nq, {
```

#### 243. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4552` → after: `L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4552) · [Before (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4552)

```diff
-         }, ZT, uT), (0, lT.e)(null, null, vT, {
+         }, pq, Gq), (0, Yq.f)(null, null, aq, {
```

#### 244. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4565` → after: `L4565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4565) · [Before (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4565)

```diff
-         }, XT, dT), (0, lT.e)(null, null, tT, {
+         }, Lq, Jq), (0, Yq.f)(null, null, Vq, {
```

#### 245. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4584` → after: `L4584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4584) · [Before (L4584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4584)

```diff
-       })(), TT.PrepareUniforms = FT.d, TT
+       })(), qq.PrepareUniforms = yq.e, qq
```

#### 246. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4593-L4595` → after: `L4593-L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4593-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4593-L4595) · [Before (L4593-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4593-L4595)

```diff
-     var wT = cT(39549),
-       mT = cT(39764),
-       bT = cT(36949);
+     var vq = gq(39696),
+       hq = gq(39865),
+       nq = gq(37171);
```

#### 247. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4656` → after: `L4656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4656) · [Before (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4656)

```diff
-             this.colorCurves = (0, lT.h)(this, nT, new rT), this._colorCurvesEnabled = ((0, lT.h)(this, pT), (0, lT.h)(this, iT, !1)), this._colorGradingTexture = ((0, lT.h)(this, qT), (0, lT.h)(this, sT, void 0)), this._colorGradingEnabled = ((0, lT.h)(this, Tk), (0, lT.h)(this, … [truncated]
+             this.colorCurves = (0, Yq.i)(this, Kq, new tq), this._colorCurvesEnabled = ((0, Yq.i)(this, Cq), (0, Yq.i)(this, Iq, !1)), this._colorGradingTexture = ((0, Yq.i)(this, eq), (0, Yq.i)(this, Dq, void 0)), this._colorGradingEnabled = ((0, Yq.i)(this, qE), (0, Yq.i)(this, … [truncated]
```

#### 248. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4722` → after: `L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4722) · [Before (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4722)

```diff
-             TT = Number.isNaN(TT) ? IT : Math.max(TT, IT), this._temperature !== TT && (this._temperature = TT, this._updateParameters())
+             qq = Number.isNaN(qq) ? uq : Math.max(qq, uq), this._temperature !== qq && (this._temperature = qq, this._updateParameters())
```

#### 249. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4734` → after: `L4734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4734) · [Before (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4734)

```diff
-               return fT.d.GetAsMatrix3x3(lT)
+               return Aq.e.GetAsMatrix3x3(Yq)
```

#### 250. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4816-L4817` → after: `L4816-L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4816-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4816-L4817) · [Before (L4816-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4816-L4817)

```diff
-               const cT = 1 / (this.outputTextureWidth || TT.Dv().getRenderWidth()),
-                 lT = 1 / (this.outputTextureHeight || TT.Dv().getRenderHeight());
+               const gq = 1 / (this.outputTextureWidth || qq.Ba().getRenderWidth()),
+                 Yq = 1 / (this.outputTextureHeight || qq.Ba().getRenderHeight());
```

#### 251. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4819` → after: `L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4819) · [Before (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4819)

```diff
-                 const MT = null != kT ? kT : lT / cT;
+                 const lq = null != Eq ? Eq : Yq / gq;
```

#### 252. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4823` → after: `L4823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4823) · [Before (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4823)

```diff
-                 OT = (0, wT.i)(OT, yT, this.vignetteStretch), KT = (0, wT.i)(KT, yT, this.vignetteStretch), TT.setFloat4("vignetteSettings1", OT, KT, -OT * this.vignetteCenterX, -KT * this.vignetteCenterY);
+                 mq = (0, vq.o)(mq, xq, this.vignetteStretch), Oq = (0, vq.o)(Oq, xq, this.vignetteStretch), qq.setFloat4("vignetteSettings1", mq, Oq, -mq * this.vignetteCenterX, -Oq * this.vignetteCenterY);
```

#### 253. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4848` → after: `L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4848) · [Before (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4848)

```diff
-           kT = [(0, MT.i)()], cT = [(0, MT.J)()], xT = [(0, MT.A)("colorGradingTexture")], jT = [(0, MT.J)()], vT = [(0, MT.J)()], tT = [(0, MT.J)()], NT = [(0, MT.J)()], FT = [(0, MT.J)()], bT = [(0, MT.J)()], zT = [(0, MT.J)()], JT = [(0, MT.J)()], oT = [(0, MT.J)()], HT = [(0, … [truncated]
+           Eq = [(0, lq.m)()], gq = [(0, lq.M)()], cq = [(0, lq.E)("colorGradingTexture")], Nq = [(0, lq.M)()], aq = [(0, lq.M)()], Vq = [(0, lq.M)()], jq = [(0, lq.M)()], yq = [(0, lq.M)()], nq = [(0, lq.M)()], bq = [(0, lq.M)()], iq = [(0, lq.M)()], Zq = [(0, lq.M)()], fq = [(0, … [truncated]
```

#### 254. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4861` → after: `L4861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4861) · [Before (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4861)

```diff
-           }, nT, pT), (0, lT.e)(null, null, cT, {
+           }, Kq, Cq), (0, Yq.f)(null, null, gq, {
```

#### 255. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4874` → after: `L4874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4874) · [Before (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4874)

```diff
-           }, iT, qT), (0, lT.e)(null, null, xT, {
+           }, Iq, eq), (0, Yq.f)(null, null, cq, {
```

#### 256. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4887` → after: `L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4887) · [Before (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4887)

```diff
-           }, sT, Tk), (0, lT.e)(null, null, jT, {
+           }, Dq, qE), (0, Yq.f)(null, null, Nq, {
```

#### 257. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4900` → after: `L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4900) · [Before (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4900)

```diff
-           }, kk, ck), (0, lT.e)(null, null, vT, {
+           }, EE, gE), (0, Yq.f)(null, null, aq, {
```

#### 258. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4913` → after: `L4913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4913) · [Before (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4913)

```diff
-           }, lk, Mk), (0, lT.e)(null, null, tT, {
+           }, YE, lE), (0, Yq.f)(null, null, Vq, {
```

#### 259. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4926` → after: `L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4926) · [Before (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4926)

```diff
-           }, Kk, Ok), (0, lT.e)(null, null, NT, {
+           }, OE, mE), (0, Yq.f)(null, null, jq, {
```

#### 260. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4939` → after: `L4939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4939) · [Before (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4939)

```diff
-           }, yk, fk), (0, lT.e)(null, null, FT, {
+           }, xE, AE), (0, Yq.f)(null, null, yq, {
```

#### 261. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4952` → after: `L4952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4952) · [Before (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4952)

```diff
-           }, xk, Ik), (0, lT.e)(null, null, bT, {
+           }, cE, uE), (0, Yq.f)(null, null, nq, {
```

#### 262. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4965` → after: `L4965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4965) · [Before (L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4965)

```diff
-           }, Ak, Ck), (0, lT.e)(null, null, zT, {
+           }, BE, WE), (0, Yq.f)(null, null, bq, {
```

#### 263. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4978` → after: `L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4978) · [Before (L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4978)

```diff
-           }, jk, vk), (0, lT.e)(null, null, JT, {
+           }, NE, aE), (0, Yq.f)(null, null, iq, {
```

#### 264. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4991` → after: `L4991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L4991) · [Before (L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L4991)

```diff
-           }, tk, hk), (0, lT.e)(null, null, oT, {
+           }, VE, dE), (0, Yq.f)(null, null, Zq, {
```

#### 265. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5004` → after: `L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5004) · [Before (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5004)

```diff
-           }, Nk, Qk), (0, lT.e)(null, null, HT, {
+           }, jE, HE), (0, Yq.f)(null, null, fq, {
```

#### 266. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5017` → after: `L5017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5017) · [Before (L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5017)

```diff
-           }, Sk, Dk), (0, lT.e)(null, null, eT, {
+           }, oE, PE), (0, Yq.f)(null, null, Mq, {
```

#### 267. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5030` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5030) · [Before (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5030)

```diff
-           }, ak, Fk), (0, lT.e)(null, null, GT, {
+           }, QE, yE), (0, Yq.f)(null, null, Tq, {
```

#### 268. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5043` → after: `L5043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5043) · [Before (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5043)

```diff
-           }, rk, Pk), (0, lT.e)(null, null, VT, {
+           }, tE, rE), (0, Yq.f)(null, null, zq, {
```

#### 269. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5056` → after: `L5056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5056) · [Before (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5056)

```diff
-           }, wk, mk), (0, lT.e)(null, null, ET, {
+           }, vE, hE), (0, Yq.f)(null, null, Sq, {
```

#### 270. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5069` → after: `L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5069) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5069)

```diff
-           }, bk, zk), (0, lT.e)(null, null, ZT, {
+           }, nE, bE), (0, Yq.f)(null, null, pq, {
```

#### 271. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5082` → after: `L5082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5082) · [Before (L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5082)

```diff
-           }, Jk, Hk), (0, lT.e)(null, null, uT, {
+           }, iE, ZE), (0, Yq.f)(null, null, Gq, {
```

#### 272. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5095` → after: `L5095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5095) · [Before (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5095)

```diff
-           }, ek, Gk), (0, lT.e)(null, null, XT, {
+           }, fE, ME), (0, Yq.f)(null, null, Lq, {
```

#### 273. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5108` → after: `L5108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5108) · [Before (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5108)

```diff
-           }, Vk, Ek), (0, lT.e)(null, null, dT, {
+           }, TE, zE), (0, Yq.f)(null, null, Jq, {
```

#### 274. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5121` → after: `L5121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5121) · [Before (L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5121)

```diff
-           }, Zk, uk), (0, lT.e)(null, null, LT, {
+           }, SE, pE), (0, Yq.f)(null, null, kq, {
```

#### 275. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5134` → after: `L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5134) · [Before (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5134)

```diff
-           }, Xk, dk), (0, lT.e)(null, null, RT, {
+           }, GE, LE), (0, Yq.f)(null, null, Rq, {
```

#### 276. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5147` → after: `L5147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5147) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5147)

```diff
-           }, Lk, Rk), (0, lT.e)(null, null, gT, {
+           }, JE, kE), (0, Yq.f)(null, null, Uq, {
```

#### 277. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5160` → after: `L5160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5160) · [Before (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5160)

```diff
-           }, gk, Uk), (0, lT.e)(null, null, UT, {
+           }, RE, UE), (0, Yq.f)(null, null, Fq, {
```

#### 278. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5173` → after: `L5173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5173) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5173)

```diff
-           }, Yk, Bk), (0, lT.e)(null, null, YT, {
+           }, FE, sE), (0, Yq.f)(null, null, sq, {
```

#### 279. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5186` → after: `L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5186) · [Before (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5186)

```diff
-           }, Wk, nk), (0, lT.e)(null, null, BT, {
+           }, XE, wE), (0, Yq.f)(null, null, Xq, {
```

#### 280. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5199` → after: `L5199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5199) · [Before (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5199)

```diff
-           }, pk, ik), (0, lT.e)(null, null, WT, {
+           }, KE, CE), (0, Yq.f)(null, null, wq, {
```

#### 281. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5218` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5218) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5218)

```diff
-         })(), TT.TONEMAPPING_STANDARD = 0, TT.TONEMAPPING_ACES = 1, TT.TONEMAPPING_KHR_PBR_NEUTRAL = 2, TT.PrepareUniforms = mT.e, TT.PrepareSamplers = mT.d, TT._VIGNETTEMODE_MULTIPLY = 0, TT._VIGNETTEMODE_OPAQUE = 1, TT
+         })(), qq.TONEMAPPING_STANDARD = 0, qq.TONEMAPPING_ACES = 1, qq.TONEMAPPING_KHR_PBR_NEUTRAL = 2, qq.PrepareUniforms = hq.e, qq.PrepareSamplers = hq.b, qq._VIGNETTEMODE_MULTIPLY = 0, qq._VIGNETTEMODE_OPAQUE = 1, qq
```

#### 282. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5231` → after: `L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5231) · [Before (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5231)

```diff
-   39770: (TT, kT, cT) => {
+   39870: (qq, Eq, gq) => {
```

#### 283. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5235-L5236` → after: `L5235-L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5235-L5236) · [Before (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5235-L5236)

```diff
-     var lT = cT(38512),
-       MT = cT(39727);
+     var Yq = gq(38653),
+       lq = gq(39845);
```

#### 284. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5243` → after: `L5243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5243) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5243)

```diff
-         this._uniformNames = [], this._valueCache = {}, this._engine = TT, this._noUBO = !TT.supportsUniformBuffers || MT, this._dynamic = cT, this._name = lT ?? "no-name", this._data = kT || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
+         this._uniformNames = [], this._valueCache = {}, this._engine = qq, this._noUBO = !qq.supportsUniformBuffers || lq, this._dynamic = gq, this._name = Yq ?? "no-name", this._data = Eq || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
```

#### 285. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5265` → after: `L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5265) · [Before (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5265)

```diff
-         if (kT = TT <= 2 ? TT : 4, this._uniformLocationPointer % kT !== 0) {
+         if (Eq = qq <= 2 ? qq : 4, this._uniformLocationPointer % Eq !== 0) {
```

#### 286. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5300` → after: `L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5300) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5300)

```diff
-         this.addUniform(TT, Array.prototype.slice.call(kT.acT()))
+         this.addUniform(qq, Array.prototype.slice.call(Eq.bYq()))
```

#### 287. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5423` → after: `L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5423) · [Before (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5423)

```diff
-           if (this._buffer) return void lT.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + TT);
+           if (this._buffer) return void Yq.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + qq);
```

#### 288. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5438` → after: `L5438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5438) · [Before (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5438)

```diff
-         if (void 0 === KT) return void lT.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
+         if (void 0 === Oq) return void Yq.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
```

#### 289. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5449` → after: `L5449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5449) · [Before (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5449)

```diff
-             if (this._bufferData[KT + 4 * yT + lT] !== MT.h.FloatRound(kT[fT]) && (TT = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[KT + 4 * yT + lT] = kT[fT]), lT++, lT === OT.strideSize) {
+             if (this._bufferData[Oq + 4 * xq + Yq] !== lq.f.FloatRound(Eq[Aq]) && (qq = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Oq + 4 * xq + Yq] = Eq[Aq]), Yq++, Yq === mq.strideSize) {
```

#### 290. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5544` → after: `L5544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5544) · [Before (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5544)

```diff
-         this._cacheMatrix(TT, kT) && this.updateUniform(TT, kT.acT(), 16)
+         this._cacheMatrix(qq, Eq) && this.updateUniform(qq, Eq.bYq(), 16)
```

#### 291. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5688` → after: `L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5688) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5688)

```diff
-   39539: (TT, kT, cT) => {
+   39683: (qq, Eq, gq) => {
```

#### 292. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5690` → after: `L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5690) · [Before (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5690)

```diff
-       c: () => MT
+       e: () => lq
```

#### 293. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5692-L5693` → after: `L5692-L5693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5692-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5692-L5693) · [Before (L5692-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5692-L5693)

```diff
-     var lT = cT(39547);
-     class MT extends lT.c {
+     var Yq = gq(39689);
+     class lq extends Yq.b {
```

#### 294. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5702` → after: `L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5702) · [Before (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5702)

```diff
-   39631: (TT, kT, cT) => {
+   39768: (qq, Eq, gq) => {
```

#### 295. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5704` → after: `L5704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5704) · [Before (L5704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5704)

```diff
-       d: () => fT,
+       e: () => Aq,
```

#### 296. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5723` → after: `L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5723) · [Before (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5723)

```diff
-       return "function" === typeof TT ? TT : TT?.constructor
+       return "function" === typeof qq ? qq : qq?.constructor
```

#### 297. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5727` → after: `L5727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5727) · [Before (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5727)

```diff
-       if (!TT) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(OT)}) polyfill must run before decorated classes are evaluated.`);
+       if (!qq) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(mq)}) polyfill must run before decorated classes are evaluated.`);
```

#### 298. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5748` → after: `L5748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5748) · [Before (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5748)

```diff
-   39624: (TT, kT, cT) => {
+   39759: (qq, Eq, gq) => {
```

#### 299. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5750` → after: `L5750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5750) · [Before (L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5750)

```diff
-       A: () => yT,
+       B: () => Wq,
```

#### 300. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5753-L5757` → after: `L5754-L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5754-L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5754-L5758) · [Before (L5753-L5757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5753-L5757)

```diff
-       J: () => OT,
-       b: () => ST,
-       c: () => KT,
-       e: () => QT,
-       i: () => jT,
+       I: () => Bq,
+       M: () => mq,
+       d: () => oq,
+       f: () => Oq,
+       j: () => Hq,
```

#### 301. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5759-L5763` → after: `L5760-L5763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5760-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5760-L5763) · [Before (L5759-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5759-L5763)

```diff
-       n: () => vT,
-       p: () => xT,
-       r: () => hT,
-       t: () => CT,
-       x: () => tT
+       o: () => Aq,
+       q: () => aq,
+       u: () => cq,
+       y: () => dq
```

#### 302. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5765` → after: `L5765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5765) · [Before (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5765)

```diff
-     var lT = cT(39631);
+     var Yq = gq(39768);
```

#### 303. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5771` → after: `L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5771) · [Before (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5771)

```diff
-           OT = (0, lT.d)(MT.metadata);
+           mq = (0, Yq.e)(lq.metadata);
```

#### 304. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5883` → after: `L5883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5883) · [Before (L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5883)

```diff
-   39645: (TT, kT, cT) => {
+   39779: (qq, Eq, gq) => {
```

#### 305. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5887-L5891` → after: `L5887-L5891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5887-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5887-L5891) · [Before (L5887-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5887-L5891)

```diff
-     var lT = cT(39500),
-       MT = cT(39649),
-       KT = cT(37093),
-       OT = cT(36892),
-       yT = cT(39631);
+     var Yq = gq(39636),
+       lq = gq(39786),
+       Oq = gq(37289),
+       mq = gq(37139),
+       xq = gq(39768);
```

#### 306. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5910` → after: `L5910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5910) · [Before (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5910)

```diff
-             lT.cloneTexturesOnlyOnce && fT[yT.uniqueId] ? KT[MT] = fT[yT.uniqueId] : (KT[MT] = cT || yT.isRenderTarget ? yT : yT.clone(), fT[yT.uniqueId] = KT[MT]);
+             Yq.cloneTexturesOnlyOnce && Aq[xq.uniqueId] ? Oq[lq] = Aq[xq.uniqueId] : (Oq[lq] = gq || xq.isRenderTarget ? xq : xq.clone(), Aq[xq.uniqueId] = Oq[lq]);
```

#### 307. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5921` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5921) · [Before (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5921)

```diff
-             KT[MT] = cT ? yT : yT.clone()
+             Oq[lq] = gq ? xq : xq.clone()
```

#### 308. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5961` → after: `L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5961) · [Before (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5961)

```diff
-               kT[KT] = yT.acT();
+               Eq[Oq] = xq.bYq();
```

#### 309. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5987` → after: `L5987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5987) · [Before (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5987)

```diff
-                 TT[yT] = KT.c.FromArray(IT);
+                 qq[xq] = Oq.d.FromArray(uq);
```

#### 310. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5993` → after: `L5993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5993) · [Before (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5993)

```diff
-                 TT[yT] = OT.i.FromArray(IT);
+                 qq[xq] = mq.p.FromArray(uq);
```

#### 311. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L5996` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L5996) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L5996)

```diff
-                 TT[yT] = OT.m.FromArray(IT);
+                 qq[xq] = mq.q.FromArray(uq);
```

#### 312. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6011` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6011) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6011)

```diff
-                 TT[yT] = OT.f.FromArray(IT);
+                 qq[xq] = mq.h.FromArray(uq);
```

#### 313. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6017` → after: `L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6017) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6017)

```diff
-                 TT[yT] = OT.d.FromArray(IT);
+                 qq[xq] = mq.e.FromArray(uq);
```

#### 314. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6020` → after: `L6020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6020) · [Before (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6020)

```diff
-                 TT[yT] = OT.o.FromArray(IT)
+                 qq[xq] = mq.r.FromArray(uq)
```

#### 315. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6038` → after: `L6038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6038) · [Before (L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6038)

```diff
-       throw (0, lT.i)("ImageProcessingConfiguration")
+       throw (0, Yq.m)("ImageProcessingConfiguration")
```

#### 316. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6040` → after: `L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6040) · [Before (L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6040)

```diff
-       throw (0, lT.i)("FresnelParameters")
+       throw (0, Yq.m)("FresnelParameters")
```

#### 317. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6042` → after: `L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6042) · [Before (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6042)

```diff
-       throw (0, lT.i)("ColorCurves")
+       throw (0, Yq.m)("ColorCurves")
```

#### 318. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6044` → after: `L6044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6044) · [Before (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6044)

```diff
-       throw (0, lT.i)("Texture")
+       throw (0, Yq.m)("Texture")
```

#### 319. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6047` → after: `L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6047) · [Before (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6047)

```diff
-   39571: (TT, kT, cT) => {
+   39712: (qq, Eq, gq) => {
```

#### 320. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6051` → after: `L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6051) · [Before (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6051)

```diff
-     var lT = cT(39521);
+     var Yq = gq(39662);
```

#### 321. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6084` → after: `L6084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6084) · [Before (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6084)

```diff
-         MT.Enabled && (this._startMonitoringTime = lT.d.Now)
+         lq.Enabled && (this._startMonitoringTime = Yq.c.Now)
```

#### 322. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6090` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6090) · [Before (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6090)

```diff
-         const kT = lT.d.Now;
+         const Eq = Yq.c.Now;
```

#### 323. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6099` → after: `L6099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6099) · [Before (L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6099)

```diff
-         const TT = lT.d.Now;
+         const qq = Yq.c.Now;
```

#### 324. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6105` → after: `L6105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6105) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6105)

```diff
-   39741: (TT, kT, cT) => {
+   39858: (qq, Eq, gq) => {
```

#### 325. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6107-L6108` → after: `L6107-L6108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6107-L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6107-L6108) · [Before (L6107-L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6107-L6108)

```diff
-       d: () => MT,
-       g: () => lT
+       b: () => lq,
+       c: () => Yq
```

#### 326. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6168` → after: `L6168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6168) · [Before (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6168)

```diff
-   39649: (TT, kT, cT) => {
+   39786: (qq, Eq, gq) => {
```

#### 327. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6249` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6249) · [Before (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6249)

```diff
-   39791: (TT, kT, cT) => {
+   39886: (qq, Eq, gq) => {
```

#### 328. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6253-L6254` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6253-L6254) · [Before (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6253-L6254)

```diff
-     var lT = cT(39782),
-       MT = cT(36932);
+     var Yq = gq(39879),
+       lq = gq(37156);
```

#### 329. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6257` → after: `L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6257) · [Before (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6257)

```diff
-         this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new MT.b, this._scene = TT
+         this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new lq.d, this._scene = qq
```

#### 330. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6260` → after: `L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6260) · [Before (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6260)

```diff
-         if (this._vertexBuffers[lT.l.PositionKind]) return;
+         if (this._vertexBuffers[Yq.g.PositionKind]) return;
```

#### 331. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6262` → after: `L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6262) · [Before (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6262)

```diff
-         TT.push(1, 1), TT.push(-1, 1), TT.push(-1, -1), TT.push(1, -1), this._vertexBuffers[lT.l.PositionKind] = new lT.l(this._scene.Dv(), TT, lT.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
+         qq.push(1, 1), qq.push(-1, 1), qq.push(-1, -1), qq.push(1, -1), this._vertexBuffers[Yq.g.PositionKind] = new Yq.g(this._scene.Ba(), qq, Yq.g.PositionKind, !1, !1, 2), this._buildIndexBuffer()
```

#### 332. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6266` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6266) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6266)

```diff
-         TT.push(0), TT.push(1), TT.push(2), TT.push(0), TT.push(2), TT.push(3), this._indexBuffer = this._scene.Dv().createIndexBuffer(TT)
+         qq.push(0), qq.push(1), qq.push(2), qq.push(0), qq.push(2), qq.push(3), this._indexBuffer = this._scene.Ba().createIndexBuffer(qq)
```

#### 333. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6278` → after: `L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6278) · [Before (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6278)

```diff
-         const TT = this._vertexBuffers[lT.l.PositionKind];
+         const qq = this._vertexBuffers[Yq.g.PositionKind];
```

#### 334. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6294` → after: `L6294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6294) · [Before (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6294)

```diff
-         const yT = this._scene.Dv();
+         const xq = this._scene.Ba();
```

#### 335. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6296` → after: `L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6296) · [Before (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6296)

```diff
-           fT < TT.length - 1 ? TT[fT + 1].activate(this._scene.activeCamera || this._scene, kT?.texture) : (kT ? yT.bindFramebuffer(kT, lT, void 0, void 0, cT, MT) : KT || yT.restoreDefaultFramebuffer(), yT._debugInsertMarker?.(`post process ${TT[fT].name} output`));
+           Aq < qq.length - 1 ? qq[Aq + 1].activate(this._scene.activeCamera || this._scene, Eq?.texture) : (Eq ? xq.bindFramebuffer(Eq, Yq, void 0, void 0, gq, lq) : Oq || xq.restoreDefaultFramebuffer(), xq._debugInsertMarker?.(`post process ${qq[Aq].name} output`));
```

#### 336. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6308)

```diff
-         const OT = this._scene.Dv();
+         const mq = this._scene.Ba();
```

#### 337. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6311` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6311) · [Before (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6311)

```diff
-           if (yT < fT - 1 ? xT._outputTexture = lT[yT + 1].activate(KT, kT?.texture) : (kT ? (OT.bindFramebuffer(kT, cT, void 0, void 0, MT), xT._outputTexture = kT) : (OT.restoreDefaultFramebuffer(), xT._outputTexture = null), OT._debugInsertMarker?.(`post process ${lT[yT].name} … [truncated]
+           if (xq < Aq - 1 ? cq._outputTexture = Yq[xq + 1].activate(Oq, Eq?.texture) : (Eq ? (mq.bindFramebuffer(Eq, gq, void 0, void 0, lq), cq._outputTexture = Eq) : (mq.restoreDefaultFramebuffer(), cq._outputTexture = null), mq._debugInsertMarker?.(`post process ${Yq[xq].name} … [truncated]
```

#### 338. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6318-L6319` → after: `L6318-L6319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6318-L6319) · [Before (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6318-L6319)

```diff
-         const TT = this._vertexBuffers[lT.l.PositionKind];
-         TT && (TT.dispose(), this._vertexBuffers[lT.l.PositionKind] = null), this._indexBuffer && (this._scene.Dv()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
+         const qq = this._vertexBuffers[Yq.g.PositionKind];
+         qq && (qq.dispose(), this._vertexBuffers[Yq.g.PositionKind] = null), this._indexBuffer && (this._scene.Ba()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
```

#### 339. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6323` → after: `L6323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6323) · [Before (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6323)

```diff
-   39803: (TT, kT, cT) => {
+   39903: (qq, Eq, gq) => {
```

#### 340. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6325` → after: `L6325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6325) · [Before (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6325)

```diff
-       b: () => KT
+       c: () => Oq
```

#### 341. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6327-L6328` → after: `L6327-L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6327-L6328) · [Before (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6327-L6328)

```diff
-     var lT = cT(39741),
-       MT = cT(36892);
+     var Yq = gq(39858),
+       lq = gq(37139);
```

#### 342. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6343` → after: `L6343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6343) · [Before (L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6343)

```diff
-         this.index = TT, this._opaqueSubMeshes = new lT.g(256), this._transparentSubMeshes = new lT.g(256), this._alphaTestSubMeshes = new lT.g(256), this._depthOnlySubMeshes = new lT.g(256), this._particleSystems = new lT.g(256), this._spriteManagers = new lT.g(256), this._empty … [truncated]
+         this.index = qq, this._opaqueSubMeshes = new Yq.c(256), this._transparentSubMeshes = new Yq.c(256), this._alphaTestSubMeshes = new Yq.c(256), this._depthOnlySubMeshes = new Yq.c(256), this._particleSystems = new Yq.c(256), this._spriteManagers = new Yq.c(256), this._empty … [truncated]
```

#### 343. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6352` → after: `L6352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6352) · [Before (L6352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6352)

```diff
-         const xT = this._scene.Dv();
+         const cq = this._scene.Ba();
```

#### 344. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6382` → after: `L6382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6382) · [Before (L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6382)

```diff
-           for (; fT < TT.length; fT++) yT = TT.data[fT], yT._alphaIndex = yT.getMesh().alphaIndex, yT._distanceToCamera = MT.m.Distance(yT.DH().WcT.centerWorld, xT);
+           for (; Aq < qq.length; Aq++) xq = qq.data[Aq], xq._alphaIndex = xq.getMesh().alphaIndex, xq._distanceToCamera = lq.q.Distance(xq.yR().DYq.centerWorld, cq);
```

#### 345. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6385` → after: `L6385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6385) · [Before (L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6385)

```diff
-         const AT = IT[0].getMesh().NJ();
+         const Bq = uq[0].getMesh().ZJ();
```

#### 346. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6390` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6390) · [Before (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6390)

```diff
-             const kT = yT.wv();
+             const Eq = xq.da();
```

#### 347. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6393` → after: `L6393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6393) · [Before (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6393)

```diff
-               const cT = kT.NJ().Dv();
+               const gq = Eq.ZJ().Ba();
```

#### 348. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6425` → after: `L6425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6425) · [Before (L6425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6425)

```diff
-         void 0 === kT && (kT = TT.getMesh()), void 0 === cT && (cT = TT.wv()), null !== cT && void 0 !== cT && (cT.needAlphaBlendingForMesh(kT) ? this._transparentSubMeshes.push(TT) : cT.needAlphaTestingForMesh(kT) ? (cT.needDepthPrePass && !this.disableDepthPrePass && this._dept … [truncated]
+         void 0 === Eq && (Eq = qq.getMesh()), void 0 === gq && (gq = qq.da()), null !== gq && void 0 !== gq && (gq.needAlphaBlendingForMesh(Eq) ? this._transparentSubMeshes.push(qq) : gq.needAlphaTestingForMesh(Eq) ? (gq.needDepthPrePass && !this.disableDepthPrePass && this._dept … [truncated]
```

#### 349. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6456` → after: `L6456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6456) · [Before (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6456)

```diff
-     KT._ZeroVector = MT.m.Zero()
+     Oq._ZeroVector = lq.q.Zero()
```

#### 350. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6458` → after: `L6458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6458) · [Before (L6458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6458)

```diff
-   39799: (TT, kT, cT) => {
+   39900: (qq, Eq, gq) => {
```

#### 351. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6460` → after: `L6460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6460) · [Before (L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6460)

```diff
-       c: () => KT
+       d: () => Oq
```

#### 352. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6462` → after: `L6462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6462) · [Before (L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6462)

```diff
-     var lT = cT(39803);
+     var Yq = gq(39903);
```

#### 353. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6480-L6481` → after: `L6480-L6481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6480-L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6480-L6481) · [Before (L6480-L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6480-L6481)

```diff
-           if (TT.kF)
-             for (const kT of TT.kF) kT._wasDispatched = !1;
+           if (qq.fn)
+             for (const Eq of qq.fn) Eq._wasDispatched = !1;
```

#### 354. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6484` → after: `L6484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6484) · [Before (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6484)

```diff
-         for (const TT of this._scene.lF) TT._wasDispatched = !1
+         for (const qq of this._scene.xZ) qq._wasDispatched = !1
```

#### 355. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6504` → after: `L6504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6504) · [Before (L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6504)

```diff
-         this._depthStencilBufferAlreadyCleaned || (this._scene.Dv().clear(null, !1, TT, kT), this._depthStencilBufferAlreadyCleaned = !0)
+         this._depthStencilBufferAlreadyCleaned || (this._scene.Ba().clear(null, !1, qq, Eq), this._depthStencilBufferAlreadyCleaned = !0)
```

#### 356. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6514` → after: `L6514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6514) · [Before (L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6514)

```diff
-         AT.et = this._scene, AT.camera = this._scene.activeCamera, AT.renderingManager = this;
+         Bq.PV = this._scene, Bq.camera = this._scene.activeCamera, Bq.renderingManager = this;
```

#### 357. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6564` → after: `L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6564) · [Before (L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6564)

```diff
-         void 0 === this._renderingGroups[TT] && (this._renderingGroups[TT] = new lT.b(TT, this._scene, this._customOpaqueSortCompareFn[TT], this._customAlphaTestSortCompareFn[TT], this._customTransparentSortCompareFn[TT]), this._renderingGroups[TT].disableDepthPrePass = this._dis … [truncated]
+         void 0 === this._renderingGroups[qq] && (this._renderingGroups[qq] = new Yq.c(qq, this._scene, this._customOpaqueSortCompareFn[qq], this._customAlphaTestSortCompareFn[qq], this._customTransparentSortCompareFn[qq]), this._renderingGroups[qq].disableDepthPrePass = this._dis … [truncated]
```

#### 358. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6599` → after: `L6599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6599) · [Before (L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6599)

```diff
-   39524: (TT, kT, cT) => {
+   39667: (qq, Eq, gq) => {
```

#### 359. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6648` → after: `L6648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6648) · [Before (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6648)

```diff
-             const kT = MT < this._numTargetEnabled ? MT : 0;
+             const Eq = lq < this._numTargetEnabled ? lq : 0;
```

#### 360. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6655` → after: `L6655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6655) · [Before (L6655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6655)

```diff
-             const kT = TT < this._numTargetEnabled ? 4 * TT : 0;
+             const Eq = qq < this._numTargetEnabled ? 4 * qq : 0;
```

#### 361. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6662` → after: `L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6662) · [Before (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6662)

```diff
-             const kT = TT < this._numTargetEnabled ? 2 * TT : 0;
+             const Eq = qq < this._numTargetEnabled ? 2 * qq : 0;
```

#### 362. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6738` → after: `L6738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6738) · [Before (L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6738)

```diff
-   39827: (TT, kT, cT) => {
+   39932: (qq, Eq, gq) => {
```

#### 363. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6745` → after: `L6745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6745) · [Before (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6745)

```diff
-   39720: (TT, kT, cT) => {
+   39838: (qq, Eq, gq) => {
```

#### 364. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6747-L6748` → after: `L6747-L6748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6747-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6747-L6748) · [Before (L6747-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6747-L6748)

```diff
-       c: () => fc,
-       f: () => Oc
+       e: () => xg,
+       i: () => Og
```

#### 365. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6750-L6754` → after: `L6750-L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6750-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6750-L6754) · [Before (L6750-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6750-L6754)

```diff
-     var lT = cT(39727),
-       MT = cT(39514),
-       KT = cT(39521),
-       OT = cT(36932),
-       yT = cT(39741);
+     var Yq = gq(39845),
+       lq = gq(39644),
+       Oq = gq(39662),
+       mq = gq(37156),
+       xq = gq(39858);
```

#### 366. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6759` → after: `L6759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6759) · [Before (L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6759)

```diff
-       UkT(TT) {
+       WG(qq) {
```

#### 367. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6772` → after: `L6772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6772) · [Before (L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6772)

```diff
-         return void 0 !== cT ? cT : (this.add(TT, kT), kT)
+         return void 0 !== gq ? gq : (this.add(qq, Eq), Eq)
```

#### 368. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6809-L6813` → after: `L6809-L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6809-L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6809-L6813) · [Before (L6809-L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6809-L6813)

```diff
-     var xT = cT(39649),
-       IT = cT(36892),
-       AT = cT(39746),
-       CT = cT(39770),
-       jT = cT(39775);
+     var cq = gq(39786),
+       uq = gq(37139),
+       Bq = gq(39860),
+       Wq = gq(39870),
+       Nq = gq(39876);
```

#### 369. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6819` → after: `L6819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6819) · [Before (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6819)

```diff
-         const lT = TT.NJ();
+         const Yq = qq.ZJ();
```

#### 370. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6832-L6839` → after: `L6832-L6839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6832-L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6832-L6839) · [Before (L6832-L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6832-L6839)

```diff
-     var tT = cT(39791),
-       hT = cT(39796),
-       NT = cT(39799),
-       QT = cT(39809),
-       ST = cT(39482),
-       DT = cT(36925),
-       aT = cT(39500),
-       FT = cT(39812);
+     var Vq = gq(39886),
+       dq = gq(39891),
+       jq = gq(39900),
+       Hq = gq(39911),
+       oq = gq(39626),
+       Pq = gq(37153),
+       Qq = gq(39636),
+       yq = gq(39919);
```

#### 371. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6864` → after: `L6864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6864) · [Before (L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6864)

```diff
-     var PT, wT, mT, bT, zT, JT, oT, HT = cT(39814);
+     var rq, vq, hq, nq, bq, iq, Zq, fq = gq(39921);
```

#### 372. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6886` → after: `L6886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6886) · [Before (L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6886)

```diff
-     var eT = cT(39819);
+     var Mq = gq(39926);
```

#### 373. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6897` → after: `L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6897) · [Before (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6897)

```diff
-             throw `Unable to generate event for device ${PT[TT]}`
+             throw `Unable to generate event for device ${rq[qq]}`
```

#### 374. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6908` → after: `L6908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6908) · [Before (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6908)

```diff
-         switch (OT.pointerId = 1, OT.type = "wheel", OT.deltaMode = eT.d.DOM_DELTA_PIXEL, OT.deltaX = 0, OT.deltaY = 0, OT.deltaZ = 0, cT) {
+         switch (mq.pointerId = 1, mq.type = "wheel", mq.deltaMode = Mq.b.DOM_DELTA_PIXEL, mq.deltaX = 0, mq.deltaY = 0, mq.deltaZ = 0, gq) {
```

#### 375. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6972` → after: `L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6972) · [Before (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6972)

```diff
-         this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = lT.h.IsSafari(), this._usingMacOs = (0, ST.g)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = TT => {}, this._keyboardUpEvent = TT => {}, this._k … [truncated]
+         this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Yq.f.IsSafari(), this._usingMacOs = (0, oq.j)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = qq => {}, this._keyboardUpEvent = qq => {}, this._k … [truncated]
```

#### 376. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6978` → after: `L6978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6978) · [Before (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6978)

```diff
-         if (!MT) throw `Unable to find device ${PT[TT]}`;
+         if (!lq) throw `Unable to find device ${rq[qq]}`;
```

#### 377. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6981-L6982` → after: `L6981-L6982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6981-L6982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L6981-L6982) · [Before (L6981-L6982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L6981-L6982)

```diff
-         if (void 0 === KT) throw `Unable to find input ${cT} for device ${PT[TT]} in slot ${kT}`;
-         return cT === wT.Move && lT.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), KT
+         if (void 0 === Oq) throw `Unable to find input ${gq} for device ${rq[qq]} in slot ${Eq}`;
+         return gq === vq.Move && Yq.f.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Oq
```

#### 378. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7025` → after: `L7025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R7025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L7025) · [Before (L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7025)

```diff
-         if (void 0 === kT) throw `Unable to register device ${PT[TT]} to undefined slot.`;
+         if (void 0 === Eq) throw `Unable to register device ${rq[qq]} to undefined slot.`;
```

#### 379. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7071` → after: `L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L7071) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7071)

```diff
-         this._maxTouchPoints = (0, ST.g)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
+         this._maxTouchPoints = (0, oq.j)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
```

#### 380. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7079` → after: `L7079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R7079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L7079) · [Before (L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7079)

```diff
-             if (!(MT >= 0)) return void lT.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
+             if (!(lq >= 0)) return void Yq.f.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
```

#### 381. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7093` → after: `L7093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R7093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L7093) · [Before (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7093)

```diff
-             if (-1 === kT && (kT = this._activeTouchIds.indexOf(-1)), !(kT >= 0)) return void lT.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
+             if (-1 === Eq && (Eq = this._activeTouchIds.indexOf(-1)), !(Eq >= 0)) return void Yq.f.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
```

#### 382. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7230` → after: `L7230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R7230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L7230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L7230) · [Before (L7230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7230)

```diff
-         this.deviceType = kT, this.deviceSlot = cT, this.onInputChangedObservable = new OT.b, this._deviceInputSystem = TT
+         this.deviceType = Eq, this.deviceSlot = gq, this.onInputChangedObservable = new mq.d, this._deviceInputSystem = qq
```

#### 383. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7287` → after: `L7287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L7287) · [Before (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7287)

```diff
-         this._devices = new Array(kT), this._firstDevice = new Array(kT), this._engine = TT, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new XT(TT)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new OT.b((TT => {
+         this._devices = new Array(Eq), this._firstDevice = new Array(Eq), this._engine = qq, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new Lq(qq)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new mq.d((qq => {
```

#### 384. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7291` → after: `L7291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R7291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L7291) · [Before (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7291)

```diff
-         })), this.onDeviceDisconnectedObservable = new OT.b, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = TT.QJ.add((() => {
+         })), this.onDeviceDisconnectedObservable = new mq.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = qq.MJ.add((() => {
```

#### 385. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7296` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L7296) · [Before (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7296)

```diff
-         this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager. … [truncated]
+         this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager. … [truncated]
```

#### 386. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7332` → after: `L7332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R7332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L7332) · [Before (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7332)

```diff
-     var LT = cT(39827);
+     var kq = gq(39932);
```

#### 387. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7364` → after: `L7364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R7364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L7364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L7364) · [Before (L7364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7364)

```diff
-         this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1 … [truncated]
+         this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1 … [truncated]
```

#### 388. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7373` → after: `L7373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R7373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L7373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L7373) · [Before (L7373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7373)

```diff
-         return new IT.i(this._unTranslatedPointerX, this._unTranslatedPointerY)
+         return new uq.p(this._unTranslatedPointerX, this._unTranslatedPointerY)
```

#### 389. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7388` → after: `L7388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R7388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L7388) · [Before (L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7388)

```diff
-         const kT = this._scene.Dv().getInputElementClientRect();
+         const Eq = this._scene.Ba().getInputElementClientRect();
```

#### 390. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L7393` → after: `L7393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R7393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/244.js#L7393) · [Before (L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/244.js#L7393)

```diff
-           lT = cT.Dv(),
+           Yq = gq.Ba(),
```
