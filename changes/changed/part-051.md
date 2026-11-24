# Changed — Bundle Modifications Report (Part 051 / 140)

- **Updated at**: `2026-11-24T12:43 JST`
- **Part**: `51 / 140` (**416** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 050](part-050.md) · [Part 052 →](part-052.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/251.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/251.js` (857 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b)

#### 792. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7168` → after: `L7168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7168) · [Before (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7168)

```diff
-           return this._poseMatrix ? (this._poseMatrix.dJ(SS), this) : (this._poseMatrix = SS.clone(), this)
+           return this._poseMatrix ? (this._poseMatrix.kS(kk), this) : (this._poseMatrix = kk.clone(), this)
```

#### 793. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7171` → after: `L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7171) · [Before (L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7171)

```diff
-           return this._poseMatrix || (this._poseMatrix = fS.e.Identity()), this._poseMatrix
+           return this._poseMatrix || (this._poseMatrix = tk.c.Identity()), this._poseMatrix
```

#### 794. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7196` → after: `L7196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7196) · [Before (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7196)

```diff
-           return this._pivotMatrix.dJ(SS), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = HS, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
+           return this._pivotMatrix.kS(kk), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Fk, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
```

#### 795. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7212` → after: `L7212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7212) · [Before (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7212)

```diff
-           return SS ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.o_(0), this._rotationQuaternion = this._rotationQuaternion || fS.i.Identity(), SS.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0 … [truncated]
+           return kk ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.I6(0), this._rotationQuaternion = this._rotationQuaternion || tk.f.Identity(), kk.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0 … [truncated]
```

#### 796. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7217` → after: `L7217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7217) · [Before (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7217)

```diff
-         get dxS() {
+         get Nyk() {
```

#### 797. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7232` → after: `L7232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7232) · [Before (L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7232)

```diff
-             this.parent.getWorldMatrix().invertToRef(SS), fS.n.TransformCoordinatesFromFloatsToRef(HS, gS, tS, SS, this.position)
+             this.parent.getWorldMatrix().invertToRef(kk), tk.t.TransformCoordinatesFromFloatsToRef(Fk, Ik, Xk, kk, this.position)
```

#### 798. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7234` → after: `L7234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7234) · [Before (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7234)

```diff
-           return this._absolutePosition.dJ(SS), this
+           return this._absolutePosition.kS(kk), this
```

#### 799. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7237` → after: `L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7237) · [Before (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7237)

```diff
-           return this.computeWorldMatrix(), this.position = fS.n.TransformNormal(SS, this._localMatrix), this
+           return this.computeWorldMatrix(), this.position = tk.t.TransformNormal(kk, this._localMatrix), this
```

#### 800. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7242` → after: `L7242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7242) · [Before (L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7242)

```diff
-           return this._localMatrix.invertToRef(SS), fS.n.TransformNormal(this.position, SS)
+           return this._localMatrix.invertToRef(kk), tk.t.TransformNormal(this.position, kk)
```

#### 801. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7245` → after: `L7245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7245) · [Before (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7245)

```diff
-           return this.computeWorldMatrix(!0), this.position = fS.n.TransformCoordinates(SS, this._localMatrix), this
+           return this.computeWorldMatrix(!0), this.position = tk.t.TransformCoordinates(kk, this._localMatrix), this
```

#### 802. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7262` → after: `L7262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7262) · [Before (L7262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7262)

```diff
-               fS.i.FromEulerVectorToRef(this.rotation, SS);
+               tk.f.FromEulerVectorToRef(this.rotation, kk);
```

#### 803. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7270` → after: `L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7270) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7270)

```diff
-           const HS = fS.n.Zero();
+           const Fk = tk.t.Zero();
```

#### 804. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7274` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7274) · [Before (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7274)

```diff
-           return fS.n.TransformNormalToRef(SS, this.getWorldMatrix(), HS), this
+           return tk.t.TransformNormalToRef(kk, this.getWorldMatrix(), Fk), this
```

#### 805. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7283` → after: `L7283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7283) · [Before (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7283)

```diff
-           return this.rotationQuaternion ? fS.i.RotationYawPitchRollToRef(bS + HS, xS + gS, tS, this.rotationQuaternion) : (this.rotation.x = xS + gS, this.rotation.y = bS + HS, this.rotation.z = tS), this
+           return this.rotationQuaternion ? tk.f.RotationYawPitchRollToRef(Tk + Fk, yk + Ik, Xk, this.rotationQuaternion) : (this.rotation.x = yk + Ik, this.rotation.y = Tk + Fk, this.rotation.z = Xk), this
```

#### 806. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7287` → after: `L7287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7287) · [Before (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7287)

```diff
-           0 == this.lL().getRenderId() && this.computeWorldMatrix(!0);
+           0 == this.mG().getRenderId() && this.computeWorldMatrix(!0);
```

#### 807. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7291` → after: `L7291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7291) · [Before (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7291)

```diff
-             gS.invertToRef(HS), SS = fS.n.TransformCoordinates(SS, HS)
+             Ik.invertToRef(Fk), kk = tk.t.TransformCoordinates(kk, Fk)
```

#### 808. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7293` → after: `L7293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7293) · [Before (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7293)

```diff
-           return this.setPivotMatrix(fS.e.Translation(-SS.x, -SS.y, -SS.z), !0)
+           return this.setPivotMatrix(tk.c.Translation(-kk.x, -kk.y, -kk.z), !0)
```

#### 809. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7296` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7296) · [Before (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7296)

```diff
-           const SS = fS.n.Zero();
+           const kk = tk.t.Zero();
```

#### 810. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7303` → after: `L7303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7303) · [Before (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7303)

```diff
-           const SS = fS.n.Zero();
+           const kk = tk.t.Zero();
```

#### 811. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7307` → after: `L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7307) · [Before (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7307)

```diff
-           return this.getPivotPointToRef(SS), fS.n.TransformCoordinatesToRef(SS, this.getWorldMatrix(), SS), this
+           return this.getPivotPointToRef(kk), tk.t.TransformCoordinatesToRef(kk, this.getWorldMatrix(), kk), this
```

#### 812. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7309` → after: `L7309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7309) · [Before (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7309)

```diff
-         OHS(SS) {
+         UFk(kk) {
```

#### 813. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7312-L7313` → after: `L7312-L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7312-L7313) · [Before (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7312-L7313)

```diff
-             for (const HS of this._children) HS.OHS(SS);
-           return super.OHS(SS)
+             for (const Fk of this._children) Fk.UFk(kk);
+           return super.UFk(kk)
```

#### 814. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7320-L7321` → after: `L7320-L7321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7320-L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7320-L7321) · [Before (L7320-L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7320-L7321)

```diff
-             XS = fS.l.VK[0],
-             xS = fS.l.VK[1],
+             ik = tk.l.Ge[0],
+             yk = tk.l.Ge[1],
```

#### 815. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7323` → after: `L7323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7323) · [Before (L7323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7323)

```diff
-           fS.e.IdentityToRef(NS);
+           tk.c.IdentityToRef(lk);
```

#### 816. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7327` → after: `L7327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7327) · [Before (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7327)

```diff
-           return uS || (uS = SS._TmpRotation, fS.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, uS)), fS.e.ComposeToRef(this.nf, uS, this.position, qS), this.parent && qS.multiplyToRef(this.parent.computeWorldMatrix(!0), qS), HS && (HS.computeWo … [truncated]
+           return qk || (qk = kk._TmpRotation, tk.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, qk)), tk.c.ComposeToRef(this.ci, qk, this.position, ak), this.parent && ak.multiplyToRef(this.parent.computeWorldMatrix(!0), ak), Fk && (Fk.computeWo … [truncated]
```

#### 817. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7352` → after: `L7352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7352) · [Before (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7352)

```diff
-           if (HS.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.o_(0)), tS && 0 !== tS) {
+           if (Fk.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.I6(0)), Xk && 0 !== Xk) {
```

#### 818. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7356` → after: `L7356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7356) · [Before (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7356)

```diff
-               SS.invertToRef(tS), HS = fS.n.TransformNormal(HS, tS), SS.determinant() < 0 && (gS *= -1)
+               kk.invertToRef(Xk), Fk = tk.t.TransformNormal(Fk, Xk), kk.determinant() < 0 && (Ik *= -1)
```

#### 819. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7358-L7359` → after: `L7358-L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7358-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7358-L7359) · [Before (L7358-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7358-L7359)

```diff
-             bS = fS.i.RotationAxisToRef(HS, gS, SS._RotationAxisCache), bS.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
-           } else bS = fS.i.RotationAxisToRef(HS, gS, SS._RotationAxisCache), this.rotationQuaternion.multiplyToRef(bS, this.rotationQuaternion);
+             Tk = tk.f.RotationAxisToRef(Fk, Ik, kk._RotationAxisCache), Tk.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
+           } else Tk = tk.f.RotationAxisToRef(Fk, Ik, kk._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Tk, this.rotationQuaternion);
```

#### 820. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7363-L7366` → after: `L7363-L7366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7363-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7363-L7366) · [Before (L7363-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7363-L7366)

```diff
-           HS.normalize(), this.rotationQuaternion || (this.rotationQuaternion = fS.i.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.o_(0));
-           const tS = fS.l.VK[0],
-             bS = fS.l.VK[1],
-             XS = fS.l.VK[2],
+           Fk.normalize(), this.rotationQuaternion || (this.rotationQuaternion = tk.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.I6(0));
+           const Xk = tk.l.Ge[0],
+             Tk = tk.l.Ge[1],
+             ik = tk.l.Ge[2],
```

#### 821. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7372` → after: `L7372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7372) · [Before (L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7372)

```diff
-           return SS.subtractToRef(this.position, tS), fS.e.TranslationToRef(tS.x, tS.y, tS.z, NS), fS.e.TranslationToRef(-tS.x, -tS.y, -tS.z, qS), fS.e.RotationAxisToRef(HS, gS, uS), qS.multiplyToRef(uS, IS), IS.multiplyToRef(NS, IS), IS.decompose(bS, xS, XS), this.position.addIn … [truncated]
+           return kk.subtractToRef(this.position, Xk), tk.c.TranslationToRef(Xk.x, Xk.y, Xk.z, lk), tk.c.TranslationToRef(-Xk.x, -Xk.y, -Xk.z, ak), tk.c.RotationAxisToRef(Fk, Ik, qk), ak.multiplyToRef(qk, Lk), Lk.multiplyToRef(lk, Lk), Lk.decompose(Tk, yk, ik), this.position.addIn … [truncated]
```

#### 822. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7385` → after: `L7385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7385) · [Before (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7385)

```diff
-           this.rotationQuaternion ? tS = this.rotationQuaternion : (tS = fS.l.Quaternion[1], fS.i.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, tS));
+           this.rotationQuaternion ? Xk = this.rotationQuaternion : (Xk = tk.l.Quaternion[1], tk.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Xk));
```

#### 823. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7387` → after: `L7387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7387) · [Before (L7387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7387)

```diff
-           return fS.i.RotationYawPitchRollToRef(HS, SS, gS, bS), tS.multiplyInPlace(bS), this.rotationQuaternion || tS.toEulerAnglesToRef(this.rotation), this
+           return tk.f.RotationYawPitchRollToRef(Fk, kk, Ik, Tk), Xk.multiplyInPlace(Tk), this.rotationQuaternion || Xk.toEulerAnglesToRef(this.rotation), this
```

#### 824. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7399` → after: `L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7399) · [Before (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7399)

```diff
-           const tS = this.lL().getRenderId();
+           const Xk = this.mG().getRenderId();
```

#### 825. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7401` → after: `L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7401) · [Before (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7401)

```diff
-           gS = gS || this.lL().activeCamera, this._updateCache();
+           Ik = Ik || this.mG().activeCamera, this._updateCache();
```

#### 826. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7409` → after: `L7409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7409) · [Before (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7409)

```diff
-             qS = SS._TmpTranslation, qS.I5(this._position.x + HS[12], this._position.y + HS[13], this._position.z + HS[14])
+             ak = kk._TmpTranslation, ak.t5(this._position.x + Fk[12], this._position.y + Fk[13], this._position.z + Fk[14])
```

#### 827. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7411` → after: `L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7411) · [Before (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7411)

```diff
-           if (xS.I5(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
+           if (yk.t5(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
```

#### 828. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7413` → after: `L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7413) · [Before (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7413)

```diff
-               this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(fS.i.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.I5(0, 0, 0))
+               this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(tk.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.t5(0, 0, 0))
```

#### 829. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7415` → after: `L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7415) · [Before (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7415)

```diff
-           } else NS = SS._TmpRotation, fS.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, NS);
+           } else lk = kk._TmpRotation, tk.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, lk);
```

#### 830. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7418` → after: `L7418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7418) · [Before (L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7418)

```diff
-             fS.e.ScalingToRef(xS.x, xS.y, xS.z, SS);
+             tk.c.ScalingToRef(yk.x, yk.y, yk.z, kk);
```

#### 831. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7421` → after: `L7421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7421) · [Before (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7421)

```diff
-           } else fS.e.ComposeToRef(xS, NS, qS, this._localMatrix);
+           } else tk.c.ComposeToRef(yk, lk, ak, this._localMatrix);
```

#### 832. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7427-L7429` → after: `L7427-L7429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7427-L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7427-L7429) · [Before (L7427-L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7427-L7429)

```diff
-               } else fS.l.Matrix[7].dJ(XS.getWorldMatrix());
-               const HS = fS.l.VK[5],
-                 gS = fS.l.VK[6],
+               } else tk.l.Matrix[7].kS(ik.getWorldMatrix());
+               const Fk = tk.l.Ge[5],
+                 Ik = tk.l.Ge[6],
```

#### 833. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7431` → after: `L7431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7431) · [Before (L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7431)

```diff
-               fS.l.Matrix[7].decompose(gS, tS, HS), fS.e.ScalingToRef(gS.x, gS.y, gS.z, fS.l.Matrix[7]), fS.l.Matrix[7].setTranslation(HS), SS.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(tS, HS), this._localMatrix.setTranslation(HS)), this._local … [truncated]
+               tk.l.Matrix[7].decompose(Ik, Xk, Fk), tk.c.ScalingToRef(Ik.x, Ik.y, Ik.z, tk.l.Matrix[7]), tk.l.Matrix[7].setTranslation(Fk), kk.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Xk, Fk), this._localMatrix.setTranslation(Fk)), this._local … [truncated]
```

#### 834. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7437` → after: `L7437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7437) · [Before (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7437)

```diff
-           } else this._worldMatrix.dJ(this._localMatrix);
+           } else this._worldMatrix.kS(this._localMatrix);
```

#### 835. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7440` → after: `L7440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7440) · [Before (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7440)

```diff
-               const HS = fS.l.VK[0];
+               const Fk = tk.l.Ge[0];
```

#### 836. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7444-L7445` → after: `L7444-L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7444-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7444-L7445) · [Before (L7444-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7444-L7445)

```diff
-               const bS = fS.l.VK[1];
-               fS.n.TransformCoordinatesToRef(tS, fS.l.Matrix[1], bS), bS.normalize();
+               const Tk = tk.l.Ge[1];
+               tk.t.TransformCoordinatesToRef(Xk, tk.l.Matrix[1], Tk), Tk.normalize();
```

#### 837. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7449-L7453` → after: `L7449-L7453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7449-L7453) · [Before (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7449-L7453)

```diff
-               if (fS.i.RotationYawPitchRollToRef(XS, NS, 0, fS.l.Quaternion[0]), (this.billboardMode & SS.BILLBOARDMODE_ALL) !== SS.BILLBOARDMODE_ALL) {
-                 const HS = fS.l.VK[1];
-                 fS.l.Quaternion[0].toEulerAnglesToRef(HS), (this.billboardMode & SS.BILLBOARDMODE_X) !== SS.BILLBOARDMODE_X && (HS.x = 0), (this.billboardMode & SS.BILLBOARDMODE_Y) !== SS.BILLBOARDMODE_Y && (HS.y = 0), (this.billboardMode & SS.BILLBOARDMODE_Z) !== SS.BILLBOARDMOD … [truncated]
-               } else fS.e.FromQuaternionToRef(fS.l.Quaternion[0], fS.l.Matrix[0]);
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(fS.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(fS.l.VK[0])
+               if (tk.f.RotationYawPitchRollToRef(ik, lk, 0, tk.l.Quaternion[0]), (this.billboardMode & kk.BILLBOARDMODE_ALL) !== kk.BILLBOARDMODE_ALL) {
+                 const Fk = tk.l.Ge[1];
+                 tk.l.Quaternion[0].toEulerAnglesToRef(Fk), (this.billboardMode & kk.BILLBOARDMODE_X) !== kk.BILLBOARDMODE_X && (Fk.x = 0), (this.billboardMode & kk.BILLBOARDMODE_Y) !== kk.BILLBOARDMODE_Y && (Fk.y = 0), (this.billboardMode & kk.BILLBOARDMODE_Z) !== kk.BILLBOARDMOD … [truncated]
+               } else tk.c.FromQuaternionToRef(tk.l.Quaternion[0], tk.l.Matrix[0]);
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(tk.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(tk.l.Ge[0])
```

#### 838. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7455-L7457` → after: `L7455-L7457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7455-L7457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7455-L7457) · [Before (L7455-L7457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7455-L7457)

```diff
-               const HS = fS.l.VK[0];
-               this._worldMatrix.getTranslationToRef(HS), fS.l.Matrix[1].dJ(gS.getViewMatrix());
-               const tS = this.lL().useRightHandedSystem;
+               const Fk = tk.l.Ge[0];
+               this._worldMatrix.getTranslationToRef(Fk), tk.l.Matrix[1].kS(Ik.getViewMatrix());
+               const Xk = this.mG().useRightHandedSystem;
```

#### 839. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7460-L7461` → after: `L7460-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7460-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7460-L7461) · [Before (L7460-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7460-L7461)

```diff
-                 const HS = fS.l.VK[1];
-                 fS.l.Quaternion[0].toEulerAnglesToRef(HS), (this.billboardMode & SS.BILLBOARDMODE_X) !== SS.BILLBOARDMODE_X && (HS.x = 0), (this.billboardMode & SS.BILLBOARDMODE_Y) !== SS.BILLBOARDMODE_Y && (HS.y = 0), (this.billboardMode & SS.BILLBOARDMODE_Z) !== SS.BILLBOARDMOD … [truncated]
+                 const Fk = tk.l.Ge[1];
+                 tk.l.Quaternion[0].toEulerAnglesToRef(Fk), (this.billboardMode & kk.BILLBOARDMODE_X) !== kk.BILLBOARDMODE_X && (Fk.x = 0), (this.billboardMode & kk.BILLBOARDMODE_Y) !== kk.BILLBOARDMODE_Y && (Fk.y = 0), (this.billboardMode & kk.BILLBOARDMODE_Z) !== kk.BILLBOARDMOD … [truncated]
```

#### 840. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7463-L7464` → after: `L7463-L7464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7463-L7464) · [Before (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7463-L7464)

```diff
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(fS.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(fS.l.VK[0])
-             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : XS && XS._nonUniformScaling ? this._updateNonUniformScalingState(XS._nonUniformScaling) : this._up … [truncated]
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(tk.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(tk.l.Ge[0])
+             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : ik && ik._nonUniformScaling ? this._updateNonUniformScalingState(ik._nonUniformScaling) : this._up … [truncated]
```

#### 841. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7477` → after: `L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7477) · [Before (L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7477)

```diff
-                 SS.decompose(gS.nf, HS, gS.position), gS.rotationQuaternion ? gS.rotationQuaternion.dJ(HS) : HS.toEulerAnglesToRef(gS.rotation)
+                 kk.decompose(Ik.ci, Fk, Ik.position), Ik.rotationQuaternion ? Ik.rotationQuaternion.kS(Fk) : Fk.toEulerAnglesToRef(Ik.rotation)
```

#### 842. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7481` → after: `L7481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7481) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7481)

```diff
-           this.nf.I5(1, 1, 1), this.position.I5(0, 0, 0), this.rotation.I5(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = fS.i.Identity()), this._worldMatrix = fS.e.Identity()
+           this.ci.t5(1, 1, 1), this.position.t5(0, 0, 0), this.rotation.t5(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = tk.f.Identity()), this._worldMatrix = tk.c.Identity()
```

#### 843. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7492` → after: `L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7492) · [Before (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7492)

```diff
-           return SS || (SS = this.lL().activeCamera), fS.n.TransformCoordinates(this.getAbsolutePosition(), SS.getViewMatrix())
+           return kk || (kk = this.mG().activeCamera), tk.t.TransformCoordinates(this.getAbsolutePosition(), kk.getViewMatrix())
```

#### 844. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7496` → after: `L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7496) · [Before (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7496)

```diff
-           return SS || (SS = this.lL().activeCamera), this.getAbsolutePosition().subtract(SS.globalPosition).length()
+           return kk || (kk = this.mG().activeCamera), this.getAbsolutePosition().subtract(kk.globalPosition).length()
```

#### 845. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7499` → after: `L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7499) · [Before (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7499)

```diff
-           const bS = uS.b.Clone((() => new SS(HS, this.lL())), this);
+           const Tk = qk.b.Clone((() => new kk(Fk, this.mG())), this);
```

#### 846. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7511` → after: `L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7511) · [Before (L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7511)

```diff
-           return HS.type = this.getClassName(), HS.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(HS), HS.localMatrix = this.getPivotMatrix().lgS(), HS.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (HS.aY = !0), uS.b.AppendSerializedAnimation … [truncated]
+           return Fk.type = this.getClassName(), Fk.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Fk), Fk.localMatrix = this.getPivotMatrix().iXk(), Fk.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Fk.Xp = !0), qk.b.AppendSerializedAnimation … [truncated]
```

#### 847. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7519` → after: `L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7519) · [Before (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7519)

```diff
-           if (this.lL().stopAnimation(this), this.lL().removeTransformNode(this), this._parentContainer) {
+           if (this.mG().stopAnimation(this), this.mG().removeTransformNode(this), this._parentContainer) {
```

#### 848. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7535` → after: `L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7535) · [Before (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7535)

```diff
-           HS && (this.rotationQuaternion ? (bS = this.rotationQuaternion.clone(), this.rotationQuaternion.I5(0, 0, 0, 1)) : this.rotation && (tS = this.rotation.clone(), this.rotation.I5(0, 0, 0)));
+           Fk && (this.rotationQuaternion ? (Tk = this.rotationQuaternion.clone(), this.rotationQuaternion.t5(0, 0, 0, 1)) : this.rotation && (Xk = this.rotation.clone(), this.rotation.t5(0, 0, 0)));
```

#### 849. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7541` → after: `L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7541) · [Before (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7541)

```diff
-           return this.nf.scaleInPlace(qS), HS && (this.rotationQuaternion && bS ? this.rotationQuaternion.dJ(bS) : this.rotation && tS && this.rotation.dJ(tS)), this
+           return this.ci.scaleInPlace(ak), Fk && (this.rotationQuaternion && Tk ? this.rotationQuaternion.kS(Tk) : this.rotation && Xk && this.rotation.kS(Xk)), this
```

#### 850. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7548` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7548) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7548)

```diff
-         HS = [(0, qS.I)("position")], gS = [(0, qS.I)("rotation")], tS = [(0, qS.x)("rotationQuaternion")], bS = [(0, qS.I)("nf")], XS = [(0, qS.M)("billboardMode")], xS = [(0, qS.M)()], aS = [(0, qS.M)("infiniteDistance")], KS = [(0, qS.M)()], jS = [(0, qS.M)()], (0, NS.j)(null, … [truncated]
+         Fk = [(0, ak.H)("position")], Ik = [(0, ak.H)("rotation")], Xk = [(0, ak.z)("rotationQuaternion")], Tk = [(0, ak.H)("ci")], ik = [(0, ak.J)("billboardMode")], yk = [(0, ak.J)()], jk = [(0, ak.J)("infiniteDistance")], ek = [(0, ak.J)()], wk = [(0, ak.J)()], (0, lk.j)(null, … [truncated]
```

#### 851. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7671` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7671) · [Before (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7671)

```diff
-       })(), SS.BILLBOARDMODE_NONE = 0, SS.BILLBOARDMODE_X = 1, SS.BILLBOARDMODE_Y = 2, SS.BILLBOARDMODE_Z = 4, SS.BILLBOARDMODE_ALL = 7, SS.BILLBOARDMODE_USE_POSITION = 128, SS.BillboardUseParentOrientation = !1, SS._TmpRotation = fS.i.Zero(), SS._TmpScaling = fS.n.Zero(), SS._Tm … [truncated]
+       })(), kk.BILLBOARDMODE_NONE = 0, kk.BILLBOARDMODE_X = 1, kk.BILLBOARDMODE_Y = 2, kk.BILLBOARDMODE_Z = 4, kk.BILLBOARDMODE_ALL = 7, kk.BILLBOARDMODE_USE_POSITION = 128, kk.BillboardUseParentOrientation = !1, kk._TmpRotation = tk.f.Zero(), kk._TmpScaling = tk.t.Zero(), kk._Tm … [truncated]
```

#### 852. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7676` → after: `L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7676) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7676)

```diff
-       if (SS.localMatrix ? tS.setPreTransformMatrix(fS.e.FromArray(SS.localMatrix)) : SS.pivotMatrix && tS.setPivotMatrix(fS.e.FromArray(SS.pivotMatrix)), tS.MJ(SS.isEnabled), tS._waitingParsedUniqueId = SS.uniqueId, void 0 !== SS.parentId && (tS._waitingParentId = SS.parentId),  … [truncated]
+       if (kk.localMatrix ? Xk.setPreTransformMatrix(tk.c.FromArray(kk.localMatrix)) : kk.pivotMatrix && Xk.setPivotMatrix(tk.c.FromArray(kk.pivotMatrix)), Xk.Av(kk.isEnabled), Xk._waitingParsedUniqueId = kk.uniqueId, void 0 !== kk.parentId && (Xk._waitingParentId = kk.parentId),  … [truncated]
```

#### 853. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7679` → after: `L7679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7679) · [Before (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7679)

```diff
-             bS = (0, aS.d)("BABYLON.Animation");
+             Tk = (0, jk.b)("BABYLON.Animation");
```

#### 854. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7682` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7682) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7682)

```diff
-         kS.e.ParseAnimationRanges(tS, SS, HS)
+         Zk.b.ParseAnimationRanges(Xk, kk, Fk)
```

#### 855. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7690` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7690) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7690)

```diff
-     }(tS = jS.prototype).vW ?? (tS.vW = (0, KS.i)("TransformNode", "vW")), (bS = jS.prototype).applyImpulse ?? (bS.applyImpulse = (0, KS.i)("TransformNode", "applyImpulse")), (XS = jS.prototype).applyAngularImpulse ?? (XS.applyAngularImpulse = (0, KS.i)("TransformNode", "applyAng … [truncated]
+     }(Xk = wk.prototype).aN ?? (Xk.aN = (0, ek.h)("TransformNode", "aN")), (Tk = wk.prototype).applyImpulse ?? (Tk.applyImpulse = (0, ek.h)("TransformNode", "applyImpulse")), (ik = wk.prototype).applyAngularImpulse ?? (ik.applyAngularImpulse = (0, ek.h)("TransformNode", "applyAng … [truncated]
```

#### 856. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7692` → after: `L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7692) · [Before (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7692)

```diff
-   40443: (SS, HS, gS) => {
+   40424: (kk, Fk, Ik) => {
```

#### 857. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7745-L7746` → after: `L7745-L7746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7745-L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/251.js#L7745-L7746) · [Before (L7745-L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/251.js#L7745-L7746)

```diff
-       c: () => bS,
-       g: () => qS,
+       e: () => Tk,
+       f: () => ak,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/252.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/252.js` (482 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f)

#### 1. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4)

```diff
-   40183: (SS, HS, gS) => {
+   40141: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8-L9` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L8-L9)

```diff
-       g: () => uS,
-       h: () => qS
+       f: () => wk,
+       i: () => qk,
+       l: () => ak
```

#### 3. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L11-L14` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L11-L14) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L11-L14)

```diff
-     var tS = gS(39959),
-       bS = gS(38687),
-       XS = gS(40113),
-       xS = gS(40010);
+     var Xk = Ik(39914),
+       Tk = Ik(38674),
+       ik = Ik(40056),
+       yk = Ik(39972);
```

#### 4. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L26)

```diff
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, xS.e)(), SS && SS.lL ? this._engine = SS.lL().AK() : this._engine = SS, this._updatable = gS, this._instanced = NS, this._divisor = uS || 1, this._label = IS, HS instanceof tS.b ? (this._data = null, this._buffer = HS) … [truncated]
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, yk.e)(), kk && kk.mG ? this._engine = kk.mG().Oe() : this._engine = kk, this._updatable = Ik, this._instanced = lk, this._divisor = qk || 1, this._label = Lk, Fk instanceof Xk.d ? (this._data = null, this._buffer = Fk) … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L31-L32` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L31-L32) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L31-L32)

```diff
-         const NS = XS ? HS : HS * Float32Array.BYTES_PER_ELEMENT,
-           uS = tS ? XS ? tS : tS * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         const lk = ik ? Fk : Fk * Float32Array.BYTES_PER_ELEMENT,
+           qk = Xk ? ik ? Xk : Xk * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
```

#### 6. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L55-L56` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L55-L56) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L55-L56)

```diff
-           if (this._buffer.hf > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.hf, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.hf, void 0, this._label));
-           bS.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+           if (this._buffer.St > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.St, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.St, void 0, this._label));
+           Tk.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
```

#### 7. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L64)

```diff
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, SS, tS ? HS : HS * Float32Array.BYTES_PER_ELEMENT, gS ? gS * this.byteStride : void 0), this._data = 0 === HS && void 0 === gS ? SS : null)
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, kk, Xk ? Fk : Fk * Float32Array.BYTES_PER_ELEMENT, Ik ? Ik * this.byteStride : void 0), this._data = 0 === Fk && void 0 === Ik ? kk : null)
```

#### 8. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L97-L98` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L97-L98) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L97-L98)

```diff
-         const QS = (0, XS.m)(this.type);
-         CS ? (this._size = aS || (xS ? xS / QS : uS(gS)), this.byteStride = xS || this._buffer.byteStride || this._size * QS, this.byteOffset = kS || 0) : (this._size = aS || xS || uS(gS), this.byteStride = xS ? xS * QS : this._buffer.byteStride || this._size * QS, this.byteOffse … [truncated]
+         const Kk = (0, ik.k)(this.type);
+         Jk ? (this._size = jk || (yk ? yk / Kk : qk(Ik)), this.byteStride = yk || this._buffer.byteStride || this._size * Kk, this.byteOffset = Zk || 0) : (this._size = jk || yk || qk(Ik), this.byteStride = yk ? yk * Kk : this._buffer.byteStride || this._size * Kk, this.byteOffse … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L119)

```diff
-             throw new Error(`Invalid vertex buffer type '${SS}'`)
+             throw new Error(`Invalid vertex buffer type '${kk}'`)
```

#### 10. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L139)

```diff
-         return gS ? (0, XS.l)(gS, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, SS, HS) : null
+         return Ik ? (0, ik.i)(Ik, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, kk, Fk) : null
```

#### 11. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L148)

```diff
-         return this.byteStride / (0, XS.m)(this.type)
+         return this.byteStride / (0, ik.k)(this.type)
```

#### 12. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L150-L151` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L150-L151) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L150-L151)

```diff
-       SgS() {
-         return this.byteOffset / (0, XS.m)(this.type)
+       qIk() {
+         return this.byteOffset / (0, ik.k)(this.type)
```

#### 13. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L154)

```diff
-         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, XS.m)(this.type) : this._size
+         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, ik.k)(this.type) : this._size
```

#### 14. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L176)

```diff
-         (0, XS.g)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, SS, this.normalized, ((SS, gS) => {
+         (0, ik.d)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, kk, this.normalized, ((kk, Ik) => {
```

#### 15. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L213)

```diff
-       return (0, XS.m)(SS)
+       return (0, ik.k)(kk)
```

#### 16. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L217)

```diff
-       (0, XS.g)(SS, HS, gS, tS, bS, xS, NS, ((SS, HS) => {
+       (0, ik.d)(kk, Fk, Ik, Xk, Tk, yk, lk, ((kk, Fk) => {
```

#### 17. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L223)

```diff
-       return (0, XS.l)(SS, HS, gS, tS, bS, xS, NS, qS)
+       return (0, ik.i)(kk, Fk, Ik, Xk, Tk, yk, lk, ak)
```

#### 18. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L232)

```diff
-   39959: (SS, HS, gS) => {
+   39914: (kk, Fk, Ik) => {
```

#### 19. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L234` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L234) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L234)

```diff
-       b: () => tS
+       d: () => Xk
```

#### 20. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L241)

```diff
-         this.references = 0, this.hf = 0, this.is32Bits = !1, this.uniqueId = tS._Counter++
+         this.references = 0, this.St = 0, this.is32Bits = !1, this.uniqueId = Xk._Counter++
```

#### 21. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L246)

```diff
-   40176: (SS, HS, gS) => {
+   40139: (kk, Fk, Ik) => {
```

#### 22. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L248)

```diff
-       c: () => XS
+       b: () => ik
```

#### 23. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L250-L251` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L250-L251) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L250-L251)

```diff
-     var tS = gS(37117),
-       bS = gS(40183);
+     var Xk = Ik(37153),
+       Tk = Ik(40141);
```

#### 24. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L259-L260)

```diff
-         if (!this.pickedMesh || HS && !this.pickedMesh.isVerticesDataPresent(bS.h.NormalKind)) return null;
-         let gS, XS = this.pickedMesh.mgS();
+         if (!this.pickedMesh || Fk && !this.pickedMesh.isVerticesDataPresent(Tk.l.NormalKind)) return null;
+         let Ik, ik = this.pickedMesh.yXk();
```

#### 25. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L262-L264` → after: `L262-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L262-L264) · [Before (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L262-L264)

```diff
-         const xS = tS.l.VK[0],
-           NS = tS.l.VK[1],
-           qS = tS.l.VK[2];
+         const yk = Xk.l.Ge[0],
+           lk = Xk.l.Ge[1],
+           ak = Xk.l.Ge[2];
```

#### 26. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L266-L270` → after: `L266-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L266-L270) · [Before (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L266-L270)

```diff
-           const SS = this.pickedMesh.getVerticesData(bS.h.NormalKind);
-           let HS = XS ? tS.n.FromArrayToRef(SS, 3 * XS[3 * this.faceId], xS) : xS.I5(SS[3 * this.faceId * 3], SS[3 * this.faceId * 3 + 1], SS[3 * this.faceId * 3 + 2]),
-             uS = XS ? tS.n.FromArrayToRef(SS, 3 * XS[3 * this.faceId + 1], NS) : NS.I5(SS[3 * (3 * this.faceId + 1)], SS[3 * (3 * this.faceId + 1) + 1], SS[3 * (3 * this.faceId + 1) + 2]),
-             IS = XS ? tS.n.FromArrayToRef(SS, 3 * XS[3 * this.faceId + 2], qS) : qS.I5(SS[3 * (3 * this.faceId + 2)], SS[3 * (3 * this.faceId + 2) + 1], SS[3 * (3 * this.faceId + 2) + 2]);
-           HS = HS.scale(this.bu), uS = uS.scale(this.bv), IS = IS.scale(1 - this.bu - this.bv), gS = new tS.n(HS.x + uS.x + IS.x, HS.y + uS.y + IS.y, HS.z + uS.z + IS.z)
+           const kk = this.pickedMesh.getVerticesData(Tk.l.NormalKind);
+           let Fk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId], yk) : yk.t5(kk[3 * this.faceId * 3], kk[3 * this.faceId * 3 + 1], kk[3 * this.faceId * 3 + 2]),
+             qk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId + 1], lk) : lk.t5(kk[3 * (3 * this.faceId + 1)], kk[3 * (3 * this.faceId + 1) + 1], kk[3 * (3 * this.faceId + 1) + 2]),
+             Lk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId + 2], ak) : ak.t5(kk[3 * (3 * this.faceId + 2)], kk[3 * (3 * this.faceId + 2) + 1], kk[3 * (3 * this.faceId + 2) + 2]);
+           Fk = Fk.scale(this.bu), qk = qk.scale(this.bv), Lk = Lk.scale(1 - this.bu - this.bv), Ik = new Xk.t(Fk.x + qk.x + Lk.x, Fk.y + qk.y + Lk.y, Fk.z + qk.z + Lk.z)
```

#### 27. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L272-L275` → after: `L272-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L272-L275) · [Before (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L272-L275)

```diff
-           const SS = this.pickedMesh.getVerticesData(bS.h.PositionKind),
-             HS = XS ? tS.n.FromArrayToRef(SS, 3 * XS[3 * this.faceId], xS) : xS.I5(SS[3 * this.faceId * 3], SS[3 * this.faceId * 3 + 1], SS[3 * this.faceId * 3 + 2]),
-             uS = XS ? tS.n.FromArrayToRef(SS, 3 * XS[3 * this.faceId + 1], NS) : NS.I5(SS[3 * (3 * this.faceId + 1)], SS[3 * (3 * this.faceId + 1) + 1], SS[3 * (3 * this.faceId + 1) + 2]),
-             IS = XS ? tS.n.FromArrayToRef(SS, 3 * XS[3 * this.faceId + 2], qS) : qS.I5(SS[3 * (3 * this.faceId + 2)], SS[3 * (3 * this.faceId + 2) + 1], SS[3 * (3 * this.faceId + 2) + 2]),
+           const kk = this.pickedMesh.getVerticesData(Tk.l.PositionKind),
+             Fk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId], yk) : yk.t5(kk[3 * this.faceId * 3], kk[3 * this.faceId * 3 + 1], kk[3 * this.faceId * 3 + 2]),
+             qk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId + 1], lk) : lk.t5(kk[3 * (3 * this.faceId + 1)], kk[3 * (3 * this.faceId + 1) + 1], kk[3 * (3 * this.faceId + 1) + 2]),
+             Lk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId + 2], ak) : ak.t5(kk[3 * (3 * this.faceId + 2)], kk[3 * (3 * this.faceId + 2) + 1], kk[3 * (3 * this.faceId + 2) + 2]),
```

#### 28. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L278)

```diff
-           gS = tS.n.Cross(fS, kS)
+           Ik = Xk.t.Cross(tk, Zk)
```

#### 29. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L286)

```diff
-               tS.e.FromArrayToRef(gS, bS, SS), tS.n.TransformNormalToRef(HS, SS, HS)
+               Xk.c.FromArrayToRef(Ik, Tk, kk), Xk.t.TransformNormalToRef(Fk, kk, Fk)
```

#### 30. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L290)

```diff
-           SS.nonUniformScaling && (tS.l.Matrix[0].dJ(gS), gS = tS.l.Matrix[0], gS.setTranslationFromFloats(0, 0, 0), gS.invert(), gS.transposeToRef(tS.l.Matrix[1]), gS = tS.l.Matrix[1]), tS.n.TransformNormalToRef(HS, gS, HS)
+           kk.nonUniformScaling && (Xk.l.Matrix[0].kS(Ik), Ik = Xk.l.Matrix[0], Ik.setTranslationFromFloats(0, 0, 0), Ik.invert(), Ik.transposeToRef(Xk.l.Matrix[1]), Ik = Xk.l.Matrix[1]), Xk.t.TransformNormalToRef(Fk, Ik, Fk)
```

#### 31. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L293-L294` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L293-L294) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L293-L294)

```diff
-           const HS = tS.l.VK[0].dJ(gS);
-           SS || uS(this.pickedMesh, HS), tS.n.Dot(HS, this.ray.direction) > 0 && gS.negateInPlace()
+           const Fk = Xk.l.Ge[0].kS(Ik);
+           kk || qk(this.pickedMesh, Fk), Xk.t.Dot(Fk, this.ray.direction) > 0 && Ik.negateInPlace()
```

#### 32. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L299)

```diff
-         let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bS.h.UVKind;
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tk.l.UVKind;
```

#### 33. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L301)

```diff
-         const HS = this.pickedMesh.mgS();
+         const Fk = this.pickedMesh.yXk();
```

#### 34. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L305-L308` → after: `L305-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L305-L308) · [Before (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L305-L308)

```diff
-         let XS = tS.m.FromArray(gS, 2 * HS[3 * this.faceId]),
-           xS = tS.m.FromArray(gS, 2 * HS[3 * this.faceId + 1]),
-           NS = tS.m.FromArray(gS, 2 * HS[3 * this.faceId + 2]);
-         return XS = XS.scale(this.bu), xS = xS.scale(this.bv), NS = NS.scale(1 - this.bu - this.bv), new tS.m(XS.x + xS.x + NS.x, XS.y + xS.y + NS.y)
+         let ik = Xk.p.FromArray(Ik, 2 * Fk[3 * this.faceId]),
+           yk = Xk.p.FromArray(Ik, 2 * Fk[3 * this.faceId + 1]),
+           lk = Xk.p.FromArray(Ik, 2 * Fk[3 * this.faceId + 2]);
+         return ik = ik.scale(this.bu), yk = yk.scale(this.bv), lk = lk.scale(1 - this.bu - this.bv), new Xk.p(ik.x + yk.x + lk.x, ik.y + yk.y + lk.y)
```

#### 35. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L312)

```diff
-   40010: (SS, HS, gS) => {
+   39972: (kk, Fk, Ik) => {
```

#### 36. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L316)

```diff
-     var tS = gS(39888);
+     var Xk = Ik(39825);
```

#### 37. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L322)

```diff
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(SS), gS = SS.is32Bits ? HS instanceof Uint32Array ? HS : new Uint32Array(HS) : HS instanceof Uint16Array ? HS : new Uint16Array(HS), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, gS, … [truncated]
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(kk), Ik = kk.is32Bits ? Fk instanceof Uint32Array ? Fk : new Uint32Array(Fk) : Fk instanceof Uint16Array ? Fk : new Uint16Array(Fk), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Ik, … [truncated]
```

#### 38. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L330)

```diff
-   39975: (SS, HS, gS) => {
+   39931: (kk, Fk, Ik) => {
```

#### 39. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L332)

```diff
-       c: () => tS
+       b: () => Xk
```

#### 40. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L369)

```diff
-   39939: (SS, HS, gS) => {
+   39885: (kk, Fk, Ik) => {
```

#### 41. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L371)

```diff
-       b: () => nS
+       c: () => xk
```

#### 42. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L373-L378` → after: `L373-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L373-L378) · [Before (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L373-L378)

```diff
-     var tS = gS(37144),
-       bS = gS(39890),
-       XS = gS(37138),
-       xS = gS(38687),
-       NS = gS(37134),
-       qS = gS(39946);
+     var Xk = Ik(37187),
+       Tk = Ik(39830),
+       ik = Ik(37178),
+       yk = Ik(38674),
+       lk = Ik(37173),
+       ak = Ik(39891);
```

#### 43. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L612-L616` → after: `L612-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L612-L616) · [Before (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L612-L616)

```diff
-     var kS = gS(39948),
-       aS = gS(39926),
-       KS = gS(39877),
-       jS = gS(39913),
-       GS = gS(39922);
+     var Zk = Ik(39894),
+       jk = Ik(39863),
+       ek = Ik(39818),
+       wk = Ik(39850),
+       Hk = Ik(39860);
```

#### 44. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L652)

```diff
-       get RgS() {
+       get IXk() {
```

#### 45. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L655)

```diff
-       set RgS(SS) {
+       set IXk(kk) {
```

#### 46. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L677)

```diff
-         if (SS) return this.isNDCHalfZRange ? SS.IS_NDC_HALF_ZRANGE = "" : delete SS.IS_NDC_HALF_ZRANGE, this.RgS ? SS.USE_REVERSE_DEPTHBUFFER = "" : delete SS.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? SS.USE_EXACT_SRGB_CONVERSIONS = "" : delete SS.USE_EXACT_SR … [truncated]
+         if (kk) return this.isNDCHalfZRange ? kk.IS_NDC_HALF_ZRANGE = "" : delete kk.IS_NDC_HALF_ZRANGE, this.IXk ? kk.USE_REVERSE_DEPTHBUFFER = "" : delete kk.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? kk.USE_EXACT_SRGB_CONVERSIONS = "" : delete kk.USE_EXACT_SR … [truncated]
```

#### 47. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L680` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L680) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L680)

```diff
-           return this.isNDCHalfZRange && (SS += "#define IS_NDC_HALF_ZRANGE"), this.RgS && (SS && (SS += "\n"), SS += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (SS && (SS += "\n"), SS += "#define USE_EXACT_SRGB_CONVERSIONS"), SS
+           return this.isNDCHalfZRange && (kk += "#define IS_NDC_HALF_ZRANGE"), this.IXk && (kk && (kk += "\n"), kk += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (kk && (kk += "\n"), kk += "#define USE_EXACT_SRGB_CONVERSIONS"), kk
```

#### 48. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L696)

```diff
-         bS.c.ResetCache()
+         Tk.d.ResetCache()
```

#### 49. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L702` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L702) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L702)

```diff
-         xS.b.Warn(this.name + " context successfully restored."), this.YK.notifyObservers(this), this._contextWasLost = !1
+         yk.e.Warn(this.name + " context successfully restored."), this.Ee.notifyObservers(this), this._contextWasLost = !1
```

#### 50. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L763)

```diff
-             SS && SS(this.customAnimationFrameRequester.iK), delete this.customAnimationFrameRequester.iK
+             kk && kk(this.customAnimationFrameRequester.pe), delete this.customAnimationFrameRequester.pe
```

#### 51. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L796)

```diff
-           (this.Ow || !this.renderEvenInBackground && this._windowIsBackground) && (SS = !1), SS && (this.qD(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.uD())
+           (this.Hs || !this.renderEvenInBackground && this._windowIsBackground) && (kk = !1), kk && (this.Zx(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.Hx())
```

#### 52. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L814)

```diff
-         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.iK = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.i … [truncated]
+         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.pe = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.p … [truncated]
```

#### 53. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L826)

```diff
-         this._depthCullingState.zOffset = this.RgS ? -SS : SS
+         this._depthCullingState.zOffset = this.IXk ? -kk : kk
```

#### 54. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L830` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L830) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L830)

```diff
-         return this.RgS ? -SS : SS
+         return this.IXk ? -kk : kk
```

#### 55. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L833)

```diff
-         this._depthCullingState.zOffsetUnits = this.RgS ? -SS : SS
+         this._depthCullingState.zOffsetUnits = this.IXk ? -kk : kk
```

#### 56. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L837)

```diff
-         return this.RgS ? -SS : SS
+         return this.IXk ? -kk : kk
```

#### 57. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L891` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L891) · [Before (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L891)

```diff
-           hS = kS || new KS.e(this, 1);
+           Vk = Zk || new ek.b(this, 1);
```

#### 58. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L903)

```diff
-           tS && tS.removePendingData(hS), SS === ZS ? (cS && hS.onLoadedObservable.remove(cS), XS.d.UseFallbackTexture && SS !== XS.d.FallbackTexture && this._createTextureBase(XS.d.FallbackTexture, HS, hS.invertY, tS, bS, null, qS, uS, IS, fS, hS), gS = (gS || "Unknown error") + … [truncated]
+           Xk && Xk.removePendingData(Vk), kk === zk ? (Ok && Vk.onLoadedObservable.remove(Ok), ik.e.UseFallbackTexture && kk !== ik.e.FallbackTexture && this._createTextureBase(ik.e.FallbackTexture, Fk, Vk.invertY, Xk, Tk, null, ak, qk, Lk, tk, Vk), Ik = (Ik || "Unknown error") + … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L906)

```diff
-           }), qS && qS(gS, kS)) : (xS.b.Warn(`Failed to load ${SS}, falling back to ${ZS}`), this._createTextureBase(ZS, HS, hS.invertY, tS, bS, NS, qS, uS, IS, fS, hS, aS, jS, GS, CS, PS))
+           }), ak && ak(Ik, Zk)) : (yk.e.Warn(`Failed to load ${kk}, falling back to ${zk}`), this._createTextureBase(zk, Fk, Vk.invertY, Xk, Tk, lk, ak, qk, Lk, tk, Vk, jk, wk, Hk, Jk, Pk))
```

#### 60. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L954)

```diff
-         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, jS.f)() ? document : null
+         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, wk.d)() ? document : null
```

#### 61. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1009)

```diff
-         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new uS, this._stencilStateComposer = new IS, this._stencilState = new fS, this._alphaState = new kS.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
+         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new qk, this._stencilStateComposer = new Lk, this._stencilState = new tk, this._alphaState = new Zk.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
```

#### 62. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1016)

```diff
-         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
+         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
```

#### 63. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1028)

```diff
-         if ((0, jS.j)() && (0, jS.f)())
+         if ((0, wk.j)() && (0, wk.d)())
```

#### 64. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1052` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1052) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1052)

```diff
-         throw (0, aS.l)("engine.rawTexture")
+         throw (0, jk.j)("engine.rawTexture")
```

#### 65. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1055` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1055) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1055)

```diff
-         throw (0, aS.l)("engine.rawTexture")
+         throw (0, jk.j)("engine.rawTexture")
```

#### 66. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1058)

```diff
-         throw (0, aS.l)("engine.rawTexture")
+         throw (0, jk.j)("engine.rawTexture")
```

#### 67. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1061)

```diff
-         throw (0, aS.l)("engine.rawTexture")
+         throw (0, jk.j)("engine.rawTexture")
```

#### 68. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1069` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1069) · [Before (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1069)

```diff
-           this.hostInformation.isMobile = -1 !== SS.indexOf("Mobile") || -1 !== SS.indexOf("Mac") && (0, jS.f)() && "ontouchend" in document
+           this.hostInformation.isMobile = -1 !== kk.indexOf("Mobile") || -1 !== kk.indexOf("Mac") && (0, wk.d)() && "ontouchend" in document
```

#### 69. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1115-L1116` → after: `L1115-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1115-L1116) · [Before (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1115-L1116)

```diff
-         if (!GS.c.loadImage) throw (0, aS.l)("FileTools");
-         return GS.c.loadImage(SS, HS, gS, tS, bS, XS, xS)
+         if (!Hk.e.loadImage) throw (0, jk.j)("FileTools");
+         return Hk.e.loadImage(kk, Fk, Ik, Xk, Tk, ik, yk)
```

#### 70. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1119` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1119) · [Before (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1119)

```diff
-         const xS = (0, GS.j)(SS, HS, gS, tS, bS, XS);
+         const yk = (0, Hk.k)(kk, Fk, Ik, Xk, Tk, ik);
```

#### 71. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1125-L1126` → after: `L1125-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1125-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1125-L1126) · [Before (L1125-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1125-L1126)

```diff
-         if (GS.c.loadFile) return GS.c.loadFile(SS, HS, gS, tS, bS, XS);
-         throw (0, aS.l)("FileTools")
+         if (Hk.e.loadFile) return Hk.e.loadFile(kk, Fk, Ik, Xk, Tk, ik);
+         throw (0, jk.j)("FileTools")
```

#### 72. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1132` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1132) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1132)

```diff
-         this.releaseComputeEffects?.(), bS.c.ResetCache();
+         this.releaseComputeEffects?.(), Tk.d.ResetCache();
```

#### 73. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1134-L1136` → after: `L1134-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1134-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1134-L1136) · [Before (L1134-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1134-L1136)

```diff
-         this._boundRenderFunction = null, this.bY.notifyObservers(this), this.bY.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
-         const SS = XS.d.Instances.indexOf(this);
-         SS >= 0 && XS.d.Instances.splice(SS, 1), XS.d.Instances.length || (XS.d.OnEnginesDisposedObservable.notifyObservers(this), XS.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservabl … [truncated]
+         this._boundRenderFunction = null, this.hG.notifyObservers(this), this.hG.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
+         const kk = ik.e.Instances.indexOf(this);
+         kk >= 0 && ik.e.Instances.splice(kk, 1), ik.e.Instances.length || (ik.e.OnEnginesDisposedObservable.notifyObservers(this), ik.e.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservabl … [truncated]
```

#### 74. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1139)

```diff
-         throw (0, aS.l)("LoadingScreen")
+         throw (0, jk.j)("LoadingScreen")
```

#### 75. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1142-L1143` → after: `L1142-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1142-L1143) · [Before (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1142-L1143)

```diff
-         for (let gS = 0; gS < XS.d.Instances.length; gS++) {
-           const tS = XS.d.Instances[gS];
+         for (let Ik = 0; Ik < ik.e.Instances.length; Ik++) {
+           const Xk = ik.e.Instances[Ik];
```

#### 76. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1153` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1153) · [Before (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1153)

```diff
-   39899: (SS, HS, gS) => {
+   39837: (kk, Fk, Ik) => {
```

#### 77. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1155` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1155) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1155)

```diff
-       c: () => tS
+       b: () => Xk
```

#### 78. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1170)

```diff
-   39916: (SS, HS, gS) => {
+   39852: (kk, Fk, Ik) => {
```

#### 79. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1173` → after: `L1175-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1175-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1175-L1176) · [Before (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1173)

```diff
-       e: () => PS,
+       g: () => jk,
+       h: () => wk,
```

#### 80. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1176-L1182` → after: `L1180-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1180-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1180-L1182) · [Before (L1176-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1176-L1182)

```diff
-       l: () => jS,
-       p: () => nS,
-       s: () => fS,
-       w: () => uS,
-       A: () => IS,
-       C: () => qS,
-       G: () => NS
+       n: () => Lk,
+       q: () => ak,
+       u: () => lk
```

#### 81. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1222)

```diff
-         const bS = HS.lgS();
+         const Tk = Fk.iXk();
```

#### 82. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1318` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1318) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1318)

```diff
-         this._cacheMatrix(SS, HS) && (this.engine.setMatrices(this._uniforms[SS], HS.lgS()) || (this._valueCache[SS] = null))
+         this._cacheMatrix(kk, Fk) && (this.engine.setMatrices(this._uniforms[kk], Fk.iXk()) || (this._valueCache[kk] = null))
```

#### 83. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1367)

```diff
-     var bS = gS(39922);
+     var Tk = Ik(39860);
```

#### 84. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1465)

```diff
-       return CS((0, bS.e)(SS, gS, tS), HS, XS, xS)
+       return Jk((0, Tk.f)(kk, Ik, Xk), Fk, ik, yk)
```

#### 85. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1474)

```diff
-         throw new Error(`Something went wrong while creating a gl ${HS} shader object. gl error=${bS}, gl isContextLost=${gS.isContextLost()}, _contextWasLost=${tS}`)
+         throw new Error(`Something went wrong while creating a gl ${Fk} shader object. gl error=${Tk}, gl isContextLost=${Ik.isContextLost()}, _contextWasLost=${Xk}`)
```

#### 86. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1492)

```diff
-   39888: (SS, HS, gS) => {
+   39825: (kk, Fk, Ik) => {
```

#### 87. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1496-L1501` → after: `L1496-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1496-L1501) · [Before (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1496-L1501)

```diff
-     var tS = gS(39890),
-       bS = gS(39916),
-       XS = gS(39939),
-       xS = gS(39950),
-       NS = gS(38687),
-       qS = gS(39913);
+     var Xk = Ik(39830),
+       Tk = Ik(39852),
+       ik = Ik(39885),
+       yk = Ik(39902),
+       lk = Ik(38674),
+       ak = Ik(39850);
```

#### 88. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1542-L1549` → after: `L1542-L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1542-L1549) · [Before (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1542-L1549)

```diff
-     var kS = gS(39956),
-       aS = gS(39968),
-       KS = gS(39975),
-       jS = gS(39877),
-       GS = gS(39922),
-       CS = gS(39906),
-       nS = gS(39978),
-       PS = gS(39948);
+     var Zk = Ik(39906),
+       jk = Ik(39923),
+       ek = Ik(39931),
+       wk = Ik(39818),
+       Hk = Ik(39860),
+       Jk = Ik(39841),
+       xk = Ik(39939),
+       Pk = Ik(39894);
```

#### 89. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1551` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1551) · [Before (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1551)

```diff
-     class DS extends XS.b {
+     class Qk extends ik.c {
```

#### 90. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1562` → after: `L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1562) · [Before (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1562)

```diff
-         return tS.c.ShadersRepository
+         return Xk.d.ShadersRepository
```

#### 91. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1565` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1565) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1565)

```diff
-         tS.c.ShadersRepository = SS
+         Xk.d.ShadersRepository = kk
```

#### 92. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1568` → after: `L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1568) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1568)

```diff
-         return this.uj > 1 && !this.disableUniformBuffers
+         return this.tw > 1 && !this.disableUniformBuffers
```

#### 93. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1615)

```diff
-               (0, bS.C)(this._gl)
+               (0, Tk.q)(this._gl)
```

#### 94. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1617)

```diff
-               SS.preventDefault(), this._contextWasLost = !0, (0, bS.C)(this._gl), NS.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
+               kk.preventDefault(), this._contextWasLost = !0, (0, Tk.q)(this._gl), lk.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
```

#### 95. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1641-L1644` → after: `L1641-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1641-L1644) · [Before (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1641-L1644)

```diff
-         this._shaderProcessor = this.uj > 1 ? new fS : new uS;
-         const xS = `Babylon.js v${DS.Version}`;
-         NS.b.Log(xS + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", xS);
-         const qS = (0, bS.G)(this._gl);
+         this._shaderProcessor = this.tw > 1 ? new tk : new qk;
+         const yk = `Babylon.js v${Qk.Version}`;
+         lk.e.Log(yk + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", yk);
+         const ak = (0, Tk.u)(this._gl);
```

#### 96. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1727` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1727) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1727)

```diff
-         if (this._caps.blendParametersPerTarget = !!HS, this._alphaState = new PS.c(this._caps.blendParametersPerTarget), HS && (this._gl.blendEquationSeparateIndexed = HS.blendEquationSeparateiOES.bind(HS), this._gl.blendEquationIndexed = HS.blendEquationiOES.bind(HS), this._gl. … [truncated]
+         if (this._caps.blendParametersPerTarget = !!Fk, this._alphaState = new Pk.b(this._caps.blendParametersPerTarget), Fk && (this._gl.blendEquationSeparateIndexed = Fk.blendEquationSeparateiOES.bind(Fk), this._gl.blendEquationIndexed = Fk.blendEquationiOES.bind(Fk), this._gl. … [truncated]
```

#### 97. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1861)

```diff
-             if (void 0 !== gS && (0, nS.g)(gS)) {
+             if (void 0 !== Ik && (0, xk.k)(Ik)) {
```

#### 98. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1863` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1863) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1863)

```diff
-               void 0 !== gS && (0, nS.j)(gS) ? (DS._TempClearColorUint32[0] = 255 * SS.r, DS._TempClearColorUint32[1] = 255 * SS.g, DS._TempClearColorUint32[2] = 255 * SS.b, DS._TempClearColorUint32[3] = 255 * SS.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, DS._TempClearColorUin … [truncated]
+               void 0 !== Ik && (0, xk.l)(Ik) ? (Qk._TempClearColorUint32[0] = 255 * kk.r, Qk._TempClearColorUint32[1] = 255 * kk.g, Qk._TempClearColorUint32[2] = 255 * kk.b, Qk._TempClearColorUint32[3] = 255 * kk.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Qk._TempClearColorUin … [truncated]
```

#### 99. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1868` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1868) · [Before (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1868)

```diff
-         gS && (this.RgS ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), xS |= this._gl.DEPTH_BUFFER_BIT), tS && (this._gl.clearStencil(bS), xS |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(xS)
+         Ik && (this.IXk ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), yk |= this._gl.DEPTH_BUFFER_BIT), Xk && (this._gl.clearStencil(Tk), yk |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(yk)
```

#### 100. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1871-L1872` → after: `L1871-L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1871-L1872) · [Before (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1871-L1872)

```diff
-         if ((0, nS.g)(gS)) {
-           const gS = (0, nS.j)(tS),
+         if ((0, xk.k)(Ik)) {
+           const Ik = (0, xk.l)(Xk),
```

#### 101. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1882)

```diff
-         super.uD(), this._badOS && this.flushFramebuffer()
+         super.Hx(), this._badOS && this.flushFramebuffer()
```

#### 102. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1895` → after: `L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1895) · [Before (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1895)

```diff
-         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = SS, this._integerMRTAttachmentsMask = !SS.isMulti && SS.texture && (0, nS.g)(SS.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(qS._frameb … [truncated]
+         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = kk, this._integerMRTAttachmentsMask = !kk.isMulti && kk.texture && (0, xk.k)(kk.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(ak._frameb … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1900)

```diff
-           SS.is3D && (SS.texture.width === IS.width && SS.texture.height === IS.height && SS.texture.depth === IS.depth || NS.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
+           kk.is3D && (kk.texture.width === Lk.width && kk.texture.height === Lk.height && kk.texture.depth === Lk.depth || lk.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
```

#### 104. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1964-L1965` → after: `L1964-L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1964-L1965) · [Before (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1964-L1965)

```diff
-         const tS = new kS.c(gS);
-         return this.bindArrayBuffer(tS), "number" !== typeof SS ? SS instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(SS), HS), tS.hf = 4 * SS.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, SS, HS), tS.hf = SS.byteLength) : (this._gl.bufferDa … [truncated]
+         const Xk = new Zk.e(Ik);
+         return this.bindArrayBuffer(Xk), "number" !== typeof kk ? kk instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(kk), Fk), Xk.St = 4 * kk.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, kk, Fk), Xk.St = kk.byteLength) : (this._gl.bufferDa … [truncated]
```

#### 105. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L1975)

```diff
-           bS = new kS.c(tS);
+           Tk = new Zk.e(Xk);
```

#### 106. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2162)

```diff
-         HS && HS.program && (HS.program.__SPECTOR_rebuildProgram = null, (0, CS.k)(HS), this._gl && (this._currentProgram === HS.program && this._setProgram(null), this._gl.deleteProgram(HS.program)))
+         Fk && Fk.program && (Fk.program.__SPECTOR_rebuildProgram = null, (0, Jk.g)(Fk), this._gl && (this._currentProgram === Fk.program && this._setProgram(null), this._gl.deleteProgram(Fk.program)))
```

#### 107. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2165)

```diff
-         return (0, GS.g)(SS, this.isNDCHalfZRange, this.RgS, this.useExactSrgbConversions)
+         return (0, Hk.i)(kk, this.isNDCHalfZRange, this.IXk, this.useExactSrgbConversions)
```

#### 108. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2170-L2171` → after: `L2170-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2170-L2171) · [Before (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2170-L2171)

```diff
-         const aS = "string" === typeof SS ? SS : SS.vertexToken || SS.vertexSource || SS.vertexElement || SS.vertex,
-           KS = "string" === typeof SS ? SS : SS.fragmentToken || SS.fragmentSource || SS.fragmentElement || SS.fragment,
+         const jk = "string" === typeof kk ? kk : kk.vertexToken || kk.vertexSource || kk.vertexElement || kk.vertex,
+           ek = "string" === typeof kk ? kk : kk.fragmentToken || kk.fragmentSource || kk.fragmentElement || kk.fragment,
```

#### 109. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2181-L2182` → after: `L2181-L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2181-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2181-L2182) · [Before (L2181-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2181-L2182)

```diff
-         this._gl && (0, bS.G)(this._gl);
-         const PS = new tS.c(SS, HS, GS ? this : gS, XS, this, xS, NS, qS, uS, IS, nS, HS.shaderLanguage ?? fS, HS.extraInitializationsAsync ?? kS);
+         this._gl && (0, Tk.u)(this._gl);
+         const Pk = new Xk.d(kk, Fk, Hk ? this : Ik, ik, this, yk, lk, ak, qk, Lk, xk, Fk.shaderLanguage ?? tk, Fk.extraInitializationsAsync ?? Zk);
```

#### 110. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2190-L2191` → after: `L2190-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2190-L2191) · [Before (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2190-L2191)

```diff
-         const xS = (0, bS.G)(this._gl);
-         return xS._contextWasLost = this._contextWasLost, xS.validateShaderPrograms = this.validateShaderPrograms, (0, bS.w)(SS, HS, gS, tS || this._gl, XS)
+         const yk = (0, Tk.u)(this._gl);
+         return yk._contextWasLost = this._contextWasLost, yk.validateShaderPrograms = this.validateShaderPrograms, (0, Tk.k)(kk, Fk, Ik, Xk || this._gl, ik)
```

#### 111. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2195-L2196` → after: `L2195-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2195-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2195-L2196) · [Before (L2195-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2195-L2196)

```diff
-         const NS = (0, bS.G)(this._gl);
-         return NS._contextWasLost = this._contextWasLost, NS.validateShaderPrograms = this.validateShaderPrograms, (0, bS.A)(SS, HS, gS, tS, XS || this._gl, xS)
+         const lk = (0, Tk.u)(this._gl);
+         return lk._contextWasLost = this._contextWasLost, lk.validateShaderPrograms = this.validateShaderPrograms, (0, Tk.n)(kk, Fk, Ik, Xk, ik || this._gl, yk)
```

#### 112. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2203` → after: `L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2203) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2203)

```diff
-           (0, bS.G)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
+           (0, Tk.u)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
```

#### 113. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2205` → after: `L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2205) · [Before (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2205)

```diff
-         const HS = (0, bS.s)(this._gl, SS);
+         const Fk = (0, Tk.j)(this._gl, kk);
```

#### 114. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2211)

```diff
-         return (0, bS.i)(SS, this._gl, this.validateShaderPrograms)
+         return (0, Tk.d)(kk, this._gl, this.validateShaderPrograms)
```

#### 115. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2214-L2215` → after: `L2214-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2214-L2215) · [Before (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2214-L2215)

```diff
-         const kS = (0, bS.G)(this._gl);
-         return kS._contextWasLost = this._contextWasLost, kS.validateShaderPrograms = this.validateShaderPrograms, kS._createShaderProgramInjection = this._createShaderProgram.bind(this), kS.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), kS.createShader … [truncated]
+         const Zk = (0, Tk.u)(this._gl);
+         return Zk._contextWasLost = this._contextWasLost, Zk.validateShaderPrograms = this.validateShaderPrograms, Zk._createShaderProgramInjection = this._createShaderProgram.bind(this), Zk.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Zk.createShader … [truncated]
```

#### 116. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2219` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2219) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2219)

```diff
-         return (0, bS.d)(SS, HS, gS, tS, XS)
+         return (0, Tk.b)(kk, Fk, Ik, Xk, ik)
```

#### 117. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2222` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2222) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2222)

```diff
-         return !this._isDisposed && (0, bS.k)(SS, this._gl, this.validateShaderPrograms)
+         return !this._isDisposed && (0, Tk.g)(kk, this._gl, this.validateShaderPrograms)
```

#### 118. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2225` → after: `L2225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2225) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2225)

```diff
-         (0, bS.e)(SS, HS)
+         (0, Tk.c)(kk, Fk)
```

#### 119. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2244` → after: `L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2244) · [Before (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2244)

```diff
-         (SS = null !== SS && (0, xS.b)(SS) ? SS.effect : SS) && SS !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(SS), this._currentEffect = SS, SS.onBind && SS.onBind(SS), SS._onBindObservable && SS._onBindObservable.notifyObse … [truncated]
+         (kk = null !== kk && (0, yk.e)(kk) ? kk.effect : kk) && kk !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(kk), this._currentEffect = kk, kk.onBind && kk.onBind(kk), kk._onBindObservable && kk._onBindObservable.notifyObse … [truncated]
```

#### 120. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2394` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2394) · [Before (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2394)

```diff
-         return new KS.c(this._createTexture(), this._gl)
+         return new ek.b(this._createTexture(), this._gl)
```

#### 121. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2407-L2409` → after: `L2407-L2409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2407-L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2407-L2409) · [Before (L2407-L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2407-L2409)

```diff
-         void 0 !== HS && "object" === typeof HS ? (gS = !!HS.generateMipMaps, XS = !!HS.createMipMaps, xS = void 0 === HS.type ? 0 : HS.type, qS = void 0 === HS.samplingMode ? 3 : HS.samplingMode, uS = void 0 === HS.format ? 5 : HS.format, IS = void 0 !== HS.useSRGBBuffer && HS.u … [truncated]
-         const GS = (0, nS.e)(uS),
-           CS = (0, nS.b)(uS),
+         void 0 !== Fk && "object" === typeof Fk ? (Ik = !!Fk.generateMipMaps, ik = !!Fk.createMipMaps, yk = void 0 === Fk.type ? 0 : Fk.type, ak = void 0 === Fk.samplingMode ? 3 : Fk.samplingMode, qk = void 0 === Fk.format ? 5 : Fk.format, Lk = void 0 !== Fk.useSRGBBuffer && Fk.u … [truncated]
+         const Hk = (0, xk.i)(qk),
+           Jk = (0, xk.e)(qk),
```

#### 122. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2411` → after: `L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2411) · [Before (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2411)

```diff
-           QS = new jS.e(this, bS),
+           Kk = new wk.b(this, Tk),
```

#### 123. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2427` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2427) · [Before (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2427)

```diff
-         if (PS.texParameteri(OS, PS.TEXTURE_MAG_FILTER, JS.mag), PS.texParameteri(OS, PS.TEXTURE_MIN_FILTER, JS.min), PS.texParameteri(OS, PS.TEXTURE_WRAP_S, PS.CLAMP_TO_EDGE), PS.texParameteri(OS, PS.TEXTURE_WRAP_T, PS.CLAMP_TO_EDGE), GS && this.uj > 1 && (0 === aS ? (PS.texPara … [truncated]
+         if (Pk.texParameteri(vk, Pk.TEXTURE_MAG_FILTER, Sk.mag), Pk.texParameteri(vk, Pk.TEXTURE_MIN_FILTER, Sk.min), Pk.texParameteri(vk, Pk.TEXTURE_WRAP_S, Pk.CLAMP_TO_EDGE), Pk.texParameteri(vk, Pk.TEXTURE_WRAP_T, Pk.CLAMP_TO_EDGE), Hk && this.tw > 1 && (0 === jk ? (Pk.texPara … [truncated]
```

#### 124. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2429` → after: `L2429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2429) · [Before (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2429)

```diff
-           if (SS = (0, nS.e)(QS.format) ? this._setupFramebufferDepthAttachments((0, nS.b)(QS.format), 19 !== QS.format, QS.width, QS.height, fS, QS.format, !0) : this._createRenderBuffer(QS.width, QS.height, fS, -1, this._getRGBABufferInternalSizedFormat(QS.type, QS.format, QS._ … [truncated]
+           if (kk = (0, xk.i)(Kk.format) ? this._setupFramebufferDepthAttachments((0, xk.e)(Kk.format), 19 !== Kk.format, Kk.width, Kk.height, tk, Kk.format, !0) : this._createRenderBuffer(Kk.width, Kk.height, tk, -1, this._getRGBABufferInternalSizedFormat(Kk.type, Kk.format, Kk._ … [truncated]
```

#### 125. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2437` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2437) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2437)

```diff
-         return SS && this._caps.supportSRGBBuffers && (this.uj > 1 || HS)
+         return kk && this._caps.supportSRGBBuffers && (this.tw > 1 || Fk)
```

#### 126. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2464` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2464) · [Before (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2464)

```diff
-             const SS = new jS.e(this, 2);
+             const kk = new wk.b(this, 2);
```

#### 127. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2474` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2474) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2474)

```diff
-         return 1 === this.uj ? (gS = this._getInternalFormat(SS, HS), tS = gS) : (gS = this._getInternalFormat(SS, !1), tS = this._getRGBABufferInternalSizedFormat(0, SS, HS)), {
+         return 1 === this.tw ? (Ik = this._getInternalFormat(kk, Fk), Xk = Ik) : (Ik = this._getInternalFormat(kk, !1), Xk = this._getRGBABufferInternalSizedFormat(0, kk, Fk)), {
```

#### 128. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2634` → after: `L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2634) · [Before (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2634)

```diff
-         return this.uj > 1 ? 15 === SS ? bS = tS.DEPTH_COMPONENT16 : 16 === SS ? bS = tS.DEPTH_COMPONENT24 : 17 === SS || 13 === SS ? bS = gS ? tS.DEPTH24_STENCIL8 : tS.DEPTH_COMPONENT24 : 14 === SS ? bS = tS.DEPTH_COMPONENT32F : 18 === SS && (bS = gS ? tS.DEPTH32F_STENCIL8 : tS. … [truncated]
+         return this.tw > 1 ? 15 === kk ? Tk = Xk.DEPTH_COMPONENT16 : 16 === kk ? Tk = Xk.DEPTH_COMPONENT24 : 17 === kk || 13 === kk ? Tk = Ik ? Xk.DEPTH24_STENCIL8 : Xk.DEPTH_COMPONENT24 : 14 === kk ? Tk = Xk.DEPTH_COMPONENT32F : 18 === kk && (Tk = Ik ? Xk.DEPTH32F_STENCIL8 : Xk. … [truncated]
```

#### 129. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2668` → after: `L2668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2668) · [Before (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2668)

```diff
-         this._currentProgram !== SS && ((0, bS.p)(SS, this._gl), this._currentProgram = SS)
+         this._currentProgram !== kk && ((0, Tk.i)(kk, this._gl), this._currentProgram = kk)
```

#### 130. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2690)

```diff
-           if (this._activateCurrentTexture(), HS && HS.isMultiview) throw NS.b.Error(["_bindTextureDirectly called with a multiview texture!", SS, HS]), "_bindTextureDirectly called with a multiview texture!";
+           if (this._activateCurrentTexture(), Fk && Fk.isMultiview) throw lk.e.Error(["_bindTextureDirectly called with a multiview texture!", kk, Fk]), "_bindTextureDirectly called with a multiview texture!";
```

#### 131. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2702` → after: `L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2702) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2702)

```diff
-         for (let SS = 0; SS < this._maxSimultaneousTextures; SS++) this._activeChannel = SS, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.uj > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
+         for (let kk = 0; kk < this._maxSimultaneousTextures; kk++) this._activeChannel = kk, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.tw > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
```

#### 132. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2725` → after: `L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2725) · [Before (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2725)

```diff
-         if (!HS) return null != this._boundTexturesCache[SS] && (this._activeChannel = SS, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.uj > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
+         if (!Fk) return null != this._boundTexturesCache[kk] && (this._activeChannel = kk, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.tw > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
```

#### 133. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2777` → after: `L2777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L2777) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L2777)

```diff
-         (0, qS.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
+         (0, ak.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
```

#### 134. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3088` → after: `L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3088) · [Before (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3088)

```diff
-           if (xS.length < IS) return NS.b.Error(`Data buffer is too small to store the read pixels (${xS.length} should be more than ${IS})`), Promise.resolve(xS)
+           if (yk.length < Lk) return lk.e.Error(`Data buffer is too small to store the read pixels (${yk.length} should be more than ${Lk})`), Promise.resolve(yk)
```

#### 135. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3101` → after: `L3101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3101) · [Before (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3101)

```diff
-           const SS = XS.b._CreateCanvas(1, 1),
+           const kk = ik.c._CreateCanvas(1, 1),
```

#### 136. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3111` → after: `L3111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3111) · [Before (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3111)

```diff
-           const SS = XS.b._CreateCanvas(1, 1),
+           const kk = ik.c._CreateCanvas(1, 1),
```

#### 137. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3184` → after: `L3184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3184) · [Before (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3184)

```diff
-     }], DS._ConcatenateShader = GS.e, DS._IsSupported = null, DS._HasMajorPerformanceCaveat = null
+     }], Qk._ConcatenateShader = Hk.f, Qk._IsSupported = null, Qk._HasMajorPerformanceCaveat = null
```

#### 138. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3186` → after: `L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3186) · [Before (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3186)

```diff
-   40223: (SS, HS, gS) => {
+   40182: (kk, Fk, Ik) => {
```

#### 139. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3189` → after: `L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3189) · [Before (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3189)

```diff
-         e: () => bS
+         c: () => Tk
```

#### 140. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3197` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3197) · [Before (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3197)

```diff
-   40221: (SS, HS, gS) => {
+   40176: (kk, Fk, Ik) => {
```

#### 141. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3199` → after: `L3199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3199) · [Before (L3199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3199)

```diff
-       b: () => tS,
+       d: () => Xk,
```

#### 142. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3201` → after: `L3201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3201) · [Before (L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3201)

```diff
-       g: () => bS
+       i: () => Tk
```

#### 143. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3222` → after: `L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3222) · [Before (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3222)

```diff
-   40218: (SS, HS, gS) => {
+   40169: (kk, Fk, Ik) => {
```

#### 144. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3226` → after: `L3226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3226) · [Before (L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3226)

```diff
-       l: () => NS
+       j: () => lk
```

#### 145. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3228` → after: `L3228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3228) · [Before (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3228)

```diff
-     var tS = gS(37117);
+     var Xk = Ik(37153);
```

#### 146. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3238` → after: `L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3238) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3238)

```diff
-         super(SS, HS), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new tS.m(gS, bS)
+         super(kk, Fk), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Xk.p(Ik, Tk)
```

#### 147. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3254` → after: `L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3254) · [Before (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3254)

```diff
-   40229: (SS, HS, gS) => {
+   40195: (kk, Fk, Ik) => {
```

#### 148. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3256` → after: `L3256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3256) · [Before (L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3256)

```diff
-       e: () => tS
+       b: () => Xk
```

#### 149. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3265` → after: `L3265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3265) · [Before (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3265)

```diff
-   39877: (SS, HS, gS) => {
+   39818: (kk, Fk, Ik) => {
```

#### 150. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3267` → after: `L3267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3267) · [Before (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3267)

```diff
-       e: () => xS
+       b: () => yk
```

#### 151. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3269-L3270` → after: `L3269-L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3269-L3270) · [Before (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3269-L3270)

```diff
-     var tS, bS = gS(37144),
-       XS = gS(39881);
+     var Xk, Tk = Ik(37187),
+       ik = Ik(39821);
```

#### 152. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3274` → after: `L3274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3274) · [Before (L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3274)

```diff
-     class xS extends XS.d {
+     class yk extends ik.b {
```

#### 153. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3372` → after: `L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3372) · [Before (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3372)

```diff
-   39978: (SS, HS, gS) => {
+   39939: (kk, Fk, Ik) => {
```

#### 154. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3391-L3392` → after: `L3390-L3392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3390-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3390-L3392) · [Before (L3391-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3391-L3392)

```diff
-       g: () => bS,
-       j: () => XS
+       i: () => Xk,
+       k: () => Tk,
+       l: () => ik
```

#### 155. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3395` → after: `L3395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3395) · [Before (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3395)

```diff
-   39881: (SS, HS, gS) => {
+   39821: (kk, Fk, Ik) => {
```

#### 156. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3397` → after: `L3397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3397) · [Before (L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3397)

```diff
-       d: () => tS
+       b: () => Xk
```

#### 157. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3453` → after: `L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3453) · [Before (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3453)

```diff
-   40159: (SS, HS, gS) => {
+   40121: (kk, Fk, Ik) => {
```

#### 158. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3458` → after: `L3458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3458) · [Before (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3458)

```diff
-       d: () => tS
+       c: () => Xk
```

#### 159. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3461` → after: `L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3461) · [Before (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3461)

```diff
-   39950: (SS, HS, gS) => {
+   39902: (kk, Fk, Ik) => {
```

#### 160. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3466` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3466) · [Before (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3466)

```diff
-       b: () => tS
+       e: () => Xk
```

#### 161. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3469` → after: `L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3469) · [Before (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3469)

```diff
-   40364: (SS, HS, gS) => {
+   40324: (kk, Fk, Ik) => {
```

#### 162. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3471` → after: `L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3471) · [Before (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3471)

```diff
-       d: () => bS
+       e: () => Tk
```

#### 163. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3473)

```diff
-     var tS = gS(39937);
+     var Xk = Ik(39878);
```

#### 164. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3490-L3491` → after: `L3490-L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3490-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3490-L3491) · [Before (L3490-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3490-L3491)

```diff
-           SS ? HS.dispose() : tS.e.SetImmediate((() => {
-             HS.AK().onEndFrameObservable.addOnce((() => {
+           kk ? Fk.dispose() : Xk.d.SetImmediate((() => {
+             Fk.Oe().onEndFrameObservable.addOnce((() => {
```

#### 165. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3500` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3500) · [Before (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3500)

```diff
-   39906: (SS, HS, gS) => {
+   39841: (kk, Fk, Ik) => {
```

#### 166. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3502-L3505` → after: `L3502-L3505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3502-L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3502-L3505) · [Before (L3502-L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3502-L3505)

```diff
-       c: () => fS,
-       g: () => aS,
-       i: () => uS,
-       k: () => IS
+       b: () => tk,
+       d: () => jk,
+       e: () => qk,
+       g: () => Lk
```

#### 167. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3507-L3512` → after: `L3507-L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3507-L3512) · [Before (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3507-L3512)

```diff
-     var tS = gS(39913),
-       bS = gS(39916),
-       XS = gS(39899),
-       xS = gS(38687),
-       NS = gS(39930),
-       qS = gS(39922);
+     var Xk = Ik(39850),
+       Tk = Ik(39852),
+       ik = Ik(39837),
+       yk = Ik(38674),
+       lk = Ik(39872),
+       ak = Ik(39860);
```

#### 168. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3515` → after: `L3515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3515) · [Before (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3515)

```diff
-       return (0, bS.G)(HS).cachedPipelines[SS]
+       return (0, Tk.u)(Fk).cachedPipelines[kk]
```

#### 169. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3522` → after: `L3522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3522) · [Before (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3522)

```diff
-         const SS = (0, bS.G)(gS),
+         const kk = (0, Tk.u)(Ik),
```

#### 170. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3531` → after: `L3531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3531) · [Before (L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3531)

```diff
-       uS = "string" === typeof HS ? HS : "string" === typeof HS.vertexSource ? "source:" + HS.vertexSource : "string" === typeof HS.vertexElement ? fS?.getElementById(HS.vertexElement) || HS.vertexElement : HS.vertex || HS, IS = "string" === typeof HS ? HS : "string" === typeof H … [truncated]
+       qk = "string" === typeof Fk ? Fk : "string" === typeof Fk.vertexSource ? "source:" + Fk.vertexSource : "string" === typeof Fk.vertexElement ? tk?.getElementById(Fk.vertexElement) || Fk.vertexElement : Fk.vertex || Fk, Lk = "string" === typeof Fk ? Fk : "string" === typeof F … [truncated]
```

#### 171. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3536-L3537` → after: `L3536-L3537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3536-L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3536-L3537) · [Before (L3536-L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3536-L3537)

```diff
-             (0, NS.f)(SS), (0, NS.l)(tS, SS, ((tS, IS) => {
-               qS && (qS._vertexSourceCodeBeforeMigration = IS), gS && (tS = gS("vertex", tS)), SS.isFragment = !0, (0, NS.l)(uS, SS, ((xS, uS) => {
+             (0, lk.e)(kk), (0, lk.k)(Xk, kk, ((Xk, Lk) => {
+               ak && (ak._vertexSourceCodeBeforeMigration = Lk), Ik && (Xk = Ik("vertex", Xk)), kk.isFragment = !0, (0, lk.k)(qk, kk, ((yk, qk) => {
```

#### 172. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3539` → after: `L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3539) · [Before (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3539)

```diff
-                 const IS = (0, NS.c)(tS, xS, SS);
+                 const Lk = (0, lk.d)(Xk, yk, kk);
```

#### 173. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3567` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3567) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3567)

```diff
-         return void bS((0, tS.b)(SS))
+         return void Tk((0, Xk.c)(kk))
```

#### 174. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3573` → after: `L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3573) · [Before (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3573)

```diff
-       const uS = XS.c.GetShadersStore(xS);
+       const qk = ik.b.GetShadersStore(yk);
```

#### 175. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3577` → after: `L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3577) · [Before (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3577)

```diff
-       if (IS = "." === SS[0] || "/" === SS[0] || SS.indexOf("http") > -1 ? SS : XS.c.GetShadersRepository(xS) + SS, !(NS = NS || qS.j)) throw new Error("loadFileInjection is not defined");
+       if (Lk = "." === kk[0] || "/" === kk[0] || kk.indexOf("http") > -1 ? kk : ik.b.GetShadersRepository(yk) + kk, !(lk = lk || ak.k)) throw new Error("loadFileInjection is not defined");
```

#### 176. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3582` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3582) · [Before (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3582)

```diff
-         const XS = SS.context ? (0, bS.G)(SS.context) : null;
+         const ik = kk.context ? (0, Tk.u)(kk.context) : null;
```

#### 177. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3591` → after: `L3591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3591) · [Before (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3591)

```diff
-         throw xS.b.Error("Error compiling effect"), XS
+         throw yk.e.Error("Error compiling effect"), ik
```

#### 178. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3595` → after: `L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3595) · [Before (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3595)

```diff
-   39890: (SS, HS, gS) => {
+   39830: (kk, Fk, Ik) => {
```

#### 179. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3597` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3597) · [Before (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3597)

```diff
-       c: () => qS
+       d: () => ak
```

#### 180. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3599-L3603` → after: `L3599-L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3599-L3603) · [Before (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3599-L3603)

```diff
-     var tS = gS(37144),
-       bS = gS(38687),
-       XS = gS(39899),
-       xS = gS(39906),
-       NS = gS(39937);
+     var Xk = Ik(37187),
+       Tk = Ik(38674),
+       ik = Ik(39837),
+       yk = Ik(39841),
+       lk = Ik(39878);
```

#### 181. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3606` → after: `L3606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3606) · [Before (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3606)

```diff
-         return XS.c.ShadersRepository
+         return ik.b.ShadersRepository
```

#### 182. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3609` → after: `L3609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3609) · [Before (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3609)

```diff
-         XS.c.ShadersRepository = SS
+         ik.b.ShadersRepository = kk
```

#### 183. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3642` → after: `L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3642) · [Before (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3642)

```diff
-         "WEBGL2" === this._engine.shaderPlatformName && (CS = (0, xS.i)(GS, this._engine._gl) ?? CS), this._attributeLocationByName = {}, this.uniqueId = qS._UniqueIdSeed++, CS ? (this._pipelineContext = CS, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCom … [truncated]
+         "WEBGL2" === this._engine.shaderPlatformName && (Jk = (0, yk.e)(Hk, this._engine._gl) ?? Jk), this._attributeLocationByName = {}, this.uniqueId = ak._UniqueIdSeed++, Jk ? (this._pipelineContext = Jk, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCom … [truncated]
```

#### 184. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3644-L3645` → after: `L3644-L3645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3644-L3645) · [Before (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3644-L3645)

```diff
-             gS = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${HS}`);
-           SS && "string" === typeof SS.stack && (gS.stack = `${gS.message}\nCaused by: ${SS.stack}`), this._processCompilationErrors(gS)
+             Ik = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Fk}`);
+           kk && "string" === typeof kk.stack && (Ik.stack = `${Ik.message}\nCaused by: ${kk.stack}`), this._processCompilationErrors(Ik)
```

#### 185. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3647` → after: `L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3647) · [Before (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3647)

```diff
-           this._onReleaseEffectsObserver = null, this.Ow || this.dispose(!0)
+           this._onReleaseEffectsObserver = null, this.Hs || this.dispose(!0)
```

#### 186. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3663-L3664` → after: `L3663-L3664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3663-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3663-L3664) · [Before (L3663-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3663-L3664)

```diff
-           shadersRepository: XS.c.GetShadersRepository(this._shaderLanguage),
-           includesShadersStore: XS.c.GetIncludesShadersStore(this._shaderLanguage),
+           shadersRepository: ik.b.GetShadersRepository(this._shaderLanguage),
+           includesShadersStore: ik.b.GetIncludesShadersStore(this._shaderLanguage),
```

#### 187. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3669` → after: `L3669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3669) · [Before (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3669)

```diff
-           RgS: this._engine.RgS,
+           IXk: this._engine.IXk,
```

#### 188. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3672` → after: `L3672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3672) · [Before (L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3672)

```diff
-         (0, xS.c)(bS, this.name, this._processFinalCode, ((SS, gS) => {
+         (0, yk.b)(Tk, this.name, this._processFinalCode, ((kk, Ik) => {
```

#### 189. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3687` → after: `L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3687) · [Before (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3687)

```diff
-         return !!this._engine.Ow || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
+         return !!this._engine.Hs || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
```

#### 190. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3742` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3742) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3742)

```diff
-         (0, NS.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (HS => {
+         (0, lk.h)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (Fk => {
```

#### 191. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3775` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3775) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3775)

```diff
-             RgS: this._engine.RgS,
+             IXk: this._engine.IXk,
```

#### 192. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3788` → after: `L3788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3788) · [Before (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3788)

```diff
-           const SS = this.AK().scenes;
+           const kk = this.Oe().scenes;
```

#### 193. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3812-L3813` → after: `L3812-L3813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3812-L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3812-L3813) · [Before (L3812-L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3812-L3813)

```diff
-           this._pipelineContext = (0, xS.g)({
-             existingPipelineContext: SS ? HS : null,
+           this._pipelineContext = (0, yk.d)({
+             existingPipelineContext: kk ? Fk : null,
```

#### 194. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3840` → after: `L3840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3840) · [Before (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3840)

```diff
-             tS.length >= HS && (bS = `Offending line [${HS}] in ${gS?"fragment":"vertex"} code: ${tS[HS-1]}`)
+             Xk.length >= Fk && (Tk = `Offending line [${Fk}] in ${Ik?"fragment":"vertex"} code: ${Xk[Fk-1]}`)
```

#### 195. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3850` → after: `L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3850) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3850)

```diff
-         if (bS.b.Error("Unable to compile effect:"), bS.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), bS.b.Error(`Attributes: ${gS.join(" ")}`), bS.b.Error("Defines:\n" + this.defines), qS.LogShaderCodeOnCompilationError) {
+         if (Tk.e.Error("Unable to compile effect:"), Tk.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Tk.e.Error(`Attributes: ${Ik.join(" ")}`), Tk.e.Error("Defines:\n" + this.defines), ak.LogShaderCodeOnCompilationError) {
```

#### 196. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3853` → after: `L3853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3853) · [Before (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3853)

```diff
-           this._pipelineContext?._getVertexShaderCode() && ([SS, HS] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), SS && (bS.b.Error("Vertex code:"), bS.b.Error(SS))), this._pipelineContext?._getFragmentShaderCode() & … [truncated]
+           this._pipelineContext?._getVertexShaderCode() && ([kk, Fk] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), kk && (Tk.e.Error("Vertex code:"), Tk.e.Error(kk))), this._pipelineContext?._getFragmentShaderCode() & … [truncated]
```

#### 197. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3855)

```diff
-         bS.b.Error("Error: " + this._compilationError);
+         Tk.e.Error("Error: " + this._compilationError);
```

#### 198. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L3862` → after: `L3862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L3862) · [Before (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L3862)

```diff
-         HS && (this._pipelineContext = HS, this._isReady = !0, XS()), tS ? (this._pipelineContext = null, tS.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, bS.b.Error("Trying next fallback."), this.defines = tS.reduce(this.defines, this), this._prepareEffect()) : (this._al … [truncated]
+         Fk && (this._pipelineContext = Fk, this._isReady = !0, ik()), Xk ? (this._pipelineContext = null, Xk.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Tk.e.Error("Trying next fallback."), this.defines = Xk.reduce(this.defines, this), this._prepareEffect()) : (this._al … [truncated]
```

#### 199. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4022` → after: `L4022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4022) · [Before (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4022)

```diff
-         this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, xS.k)(this._pipelineContext), this._engine._r … [truncated]
+         this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, yk.g)(this._pipelineContext), this._engine._r … [truncated]
```

#### 200. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4026` → after: `L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4026) · [Before (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4026)

```diff
-         HS && (XS.c.GetShadersStore(tS)[`${SS}PixelShader`] = HS), gS && (XS.c.GetShadersStore(tS)[`${SS}VertexShader`] = gS)
+         Fk && (ik.b.GetShadersStore(Xk)[`${kk}PixelShader`] = Fk), Ik && (ik.b.GetShadersStore(Xk)[`${kk}VertexShader`] = Ik)
```

#### 201. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4032` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4032) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4032)

```diff
-     qS.LogShaderCodeOnCompilationError = !0, qS.PersistentMode = !1, qS.AutomaticallyClearCodeCache = !1, qS._UniqueIdSeed = 0, qS._BaseCache = {}, qS.ShadersStore = XS.c.ShadersStore, qS.IncludesShadersStore = XS.c.IncludesShadersStore
+     ak.LogShaderCodeOnCompilationError = !0, ak.PersistentMode = !1, ak.AutomaticallyClearCodeCache = !1, ak._UniqueIdSeed = 0, ak._BaseCache = {}, ak.ShadersStore = ik.b.ShadersStore, ak.IncludesShadersStore = ik.b.IncludesShadersStore
```

#### 202. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4034` → after: `L4034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4034) · [Before (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4034)

```diff
-   40192: (SS, HS, gS) => {
+   40152: (kk, Fk, Ik) => {
```

#### 203. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4036-L4038` → after: `L4036-L4038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4036-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4036-L4038) · [Before (L4036-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4036-L4038)

```diff
-       e: () => IS,
-       i: () => hS,
-       m: () => wS
+       d: () => Lk,
+       f: () => Vk,
+       h: () => sk
```

#### 204. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4040-L4046` → after: `L4040-L4046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4040-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4040-L4046) · [Before (L4040-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4040-L4046)

```diff
-     var tS = gS(39890),
-       bS = gS(37117),
-       XS = gS(37157),
-       xS = gS(40169);
-     const NS = new bS.e,
-       qS = new bS.e,
-       uS = new bS.e,
+     var Xk = Ik(39830),
+       Tk = Ik(37153),
+       ik = Ik(37192),
+       yk = Ik(40134);
+     const lk = new Tk.c,
+       ak = new Tk.c,
+       qk = new Tk.c,
```

#### 205. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4048` → after: `L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4048) · [Before (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4048)

```diff
-         lL: () => {},
+         mG: () => {},
```

#### 206. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4053-L4054` → after: `L4053-L4054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4053-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4053-L4054) · [Before (L4053-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4053-L4054)

```diff
-       const tS = gS.lgS(),
-         bS = HS.lgS();
+       const Xk = Ik.iXk(),
+         Tk = Fk.iXk();
```

#### 207. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4065-L4066` → after: `L4065-L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4065-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4065-L4066) · [Before (L4065-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4065-L4066)

```diff
-       const tS = gS.lgS(),
-         bS = HS.lgS();
+       const Xk = Ik.iXk(),
+         Tk = Fk.iXk();
```

#### 208. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4072` → after: `L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4072) · [Before (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4072)

```diff
-       return (0, XS.n)(aS(SS, HS, tS), gS, tS), tS
+       return (0, ik.k)(jk(kk, Fk, Xk), Ik, Xk), Xk
```

#### 209. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4076` → after: `L4076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4076) · [Before (L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4076)

```diff
-       return (0, XS.h)(gS, qS), (0, XS.n)(HS, qS, uS), fS(SS, uS, qS), aS(SS, gS, uS), (0, XS.n)(qS, uS, tS), tS
+       return (0, ik.h)(Ik, ak), (0, ik.k)(Fk, ak, qk), tk(kk, qk, ak), jk(kk, Ik, qk), (0, ik.k)(ak, qk, Xk), Xk
```

#### 210. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4080` → after: `L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4080) · [Before (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4080)

```diff
-       return (0, XS.h)(gS, qS), (0, XS.n)(HS, qS, uS), fS(SS, uS, qS), KS(SS, tS, bS, uS), (0, XS.n)(qS, uS, xS), xS
+       return (0, ik.h)(Ik, ak), (0, ik.k)(Fk, ak, qk), tk(kk, qk, ak), ek(kk, Xk, Tk, qk), (0, ik.k)(ak, qk, yk), yk
```

#### 211. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4084` → after: `L4084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4084) · [Before (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4084)

```diff
-       const gS = IS.lL();
+       const Ik = Lk.mG();
```

#### 212. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4112` → after: `L4112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4112) · [Before (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4112)

```diff
-       PS = tS.c,
+       Pk = Xk.d,
```

#### 213. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4114` → after: `L4114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4114) · [Before (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4114)

```diff
-       DS = tS.c.prototype.setMatrix;
+       Qk = Xk.d.prototype.setMatrix;
```

#### 214. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4117` → after: `L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4117) · [Before (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4117)

```diff
-       tS.c.prototype.setMatrix = DS, PS._setMatrixOverride = void 0, nS.prototype._updateMatrixForUniform = QS, nS.prototype._updateMatrixForUniformOverride = void 0
+       Xk.d.prototype.setMatrix = Qk, Pk._setMatrixOverride = void 0, xk.prototype._updateMatrixForUniform = Kk, xk.prototype._updateMatrixForUniformOverride = void 0
```

#### 215. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4128` → after: `L4128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4128) · [Before (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4128)

```diff
-   40163: (SS, HS, gS) => {
+   40126: (kk, Fk, Ik) => {
```

#### 216. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4130-L4131` → after: `L4130-L4131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4130-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4130-L4131) · [Before (L4130-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4130-L4131)

```diff
-       d: () => XS,
-       e: () => bS
+       c: () => ik,
+       f: () => Tk
```

#### 217. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4133` → after: `L4133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4133) · [Before (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4133)

```diff
-     var tS = gS(40159);
+     var Xk = Ik(40121);
```

#### 218. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4136` → after: `L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4136) · [Before (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4136)

```diff
-       HS.WHITEBALANCE && SS.push("whiteBalanceMatrix"), HS.EXPOSURE && SS.push("exposureLinear"), HS.CONTRAST && SS.push("contrast"), HS.COLORGRADING && SS.push("colorTransformSettings"), (HS.VIGNETTE || HS.DITHER) && SS.push("vInverseScreenSize"), HS.VIGNETTE && (SS.push("vignet … [truncated]
+       Fk.WHITEBALANCE && kk.push("whiteBalanceMatrix"), Fk.EXPOSURE && kk.push("exposureLinear"), Fk.CONTRAST && kk.push("contrast"), Fk.COLORGRADING && kk.push("colorTransformSettings"), (Fk.VIGNETTE || Fk.DITHER) && kk.push("vInverseScreenSize"), Fk.VIGNETTE && (kk.push("vignet … [truncated]
```

#### 219. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4143` → after: `L4143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4143) · [Before (L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4143)

```diff
-   40152: (SS, HS, gS) => {
+   40113: (kk, Fk, Ik) => {
```

#### 220. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4146` → after: `L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4146) · [Before (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4146)

```diff
-       h: () => LS
+       e: () => pk
```

#### 221. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4148-L4153` → after: `L4148-L4153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4148-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4148-L4153) · [Before (L4148-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4148-L4153)

```diff
-     var tS = gS(40041),
-       bS = gS(40048),
-       XS = gS(37144),
-       xS = gS(37300),
-       NS = gS(37149),
-       qS = gS(37117);
+     var Xk = Ik(40003),
+       Tk = Ik(40011),
+       ik = Ik(37187),
+       yk = Ik(37331),
+       lk = Ik(37189),
+       ak = Ik(37153);
```

#### 222. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4191` → after: `L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4191) · [Before (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4191)

```diff
-       const gS = Number.isNaN(SS) ? IS : Math.max(SS, IS),
+       const Ik = Number.isNaN(kk) ? Lk : Math.max(kk, Lk),
```

#### 223. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4197` → after: `L4197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4197) · [Before (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4197)

```diff
-         uS[SS][0] <= tS ? bS = SS : XS = SS
+         qk[kk][0] <= Xk ? Tk = kk : ik = kk
```

#### 224. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4203-L4206` → after: `L4203-L4206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4203-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4203-L4206) · [Before (L4203-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4203-L4206)

```diff
-         DS = qS.m.Lerp(new qS.m(aS, KS), new qS.m(CS, nS), QS),
-         wS = qS.m.Normalize(new qS.m(1, jS)),
-         hS = qS.m.Normalize(new qS.m(1, PS)),
-         ZS = qS.m.Normalize(qS.m.Lerp(wS, hS, QS)),
+         Qk = ak.p.Lerp(new ak.p(jk, ek), new ak.p(Jk, xk), Kk),
+         sk = ak.p.Normalize(new ak.p(1, wk)),
+         Vk = ak.p.Normalize(new ak.p(1, Pk)),
+         zk = ak.p.Normalize(ak.p.Lerp(sk, Vk, Kk)),
```

#### 225. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4208` → after: `L4208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4208) · [Before (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4208)

```diff
-       DS.GtS(ZS.scale(JS / 3e3));
+       Qk.zXk(zk.scale(Sk / 3e3));
```

#### 226. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4212` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4212) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4212)

```diff
-       return new qS.n(dS / cS, 1, (1 - dS - cS) / cS)
+       return new ak.t(Ek / Ok, 1, (1 - Ek - Ok) / Ok)
```

#### 227. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4214-L4215` → after: `L4214-L4215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4214-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4214-L4215) · [Before (L4214-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4214-L4215)

```diff
-     const aS = qS.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
-       KS = qS.e.Invert(aS);
+     const jk = ak.c.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
+       ek = ak.c.Invert(jk);
```

#### 228. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4218` → after: `L4218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4218) · [Before (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4218)

```diff
-       const gS = HS > 0 ? SS / HS : 10;
+       const Ik = Fk > 0 ? kk / Fk : 10;
```

#### 229. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4223-L4225` → after: `L4223-L4225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4223-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4223-L4225) · [Before (L4223-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4223-L4225)

```diff
-       const gS = qS.n.TransformNormal(SS, aS),
-         tS = qS.n.TransformNormal(HS, aS),
-         bS = qS.e.FromArray([jS(tS.x, gS.x), 0, 0, 0, 0, jS(tS.y, gS.y), 0, 0, 0, 0, jS(tS.z, gS.z), 0, 0, 0, 0, 1]);
+       const Ik = ak.t.TransformNormal(kk, jk),
+         Xk = ak.t.TransformNormal(Fk, jk),
+         Tk = ak.c.FromArray([wk(Xk.x, Ik.x), 0, 0, 0, 0, wk(Xk.y, Ik.y), 0, 0, 0, 0, wk(Xk.z, Ik.z), 0, 0, 0, 0, 1]);
```

#### 230. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4228-L4233` → after: `L4228-L4233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4228-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4228-L4233) · [Before (L4228-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4228-L4233)

```diff
-     const CS = new qS.n(.95047, 1, 1.08883),
-       nS = qS.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(GS(CS, kS(6500, 0))),
-       PS = qS.e.Invert(nS),
-       QS = qS.n.TransformNormal(new qS.n(1, 1, 1), nS);
-     var DS = gS(40068),
-       wS = gS(40159);
+     const Jk = new ak.t(.95047, 1, 1.08883),
+       xk = ak.c.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(Hk(Jk, Zk(6500, 0))),
+       Pk = ak.c.Invert(xk),
+       Kk = ak.t.TransformNormal(new ak.t(1, 1, 1), xk);
+     var Qk = Ik(40021),
+       sk = Ik(40121);
```

#### 231. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4262` → after: `L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4262) · [Before (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4262)

```diff
-           this._dirty = !0, this._tempColor = new xS.c(0, 0, 0, 0), this._globalCurve = new xS.c(0, 0, 0, 0), this._highlightsCurve = new xS.c(0, 0, 0, 0), this._midtonesCurve = new xS.c(0, 0, 0, 0), this._shadowsCurve = new xS.c(0, 0, 0, 0), this._positiveCurve = new xS.c(0, 0,  … [truncated]
+           this._dirty = !0, this._tempColor = new yk.h(0, 0, 0, 0), this._globalCurve = new yk.h(0, 0, 0, 0), this._highlightsCurve = new yk.h(0, 0, 0, 0), this._midtonesCurve = new yk.h(0, 0, 0, 0), this._shadowsCurve = new yk.h(0, 0, 0, 0), this._positiveCurve = new yk.h(0, 0,  … [truncated]
```

#### 232. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4422)

```diff
-         HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], NS = [(0, bS.M)()], qS = [(0, bS.M)()], uS = [(0, bS.M)()], IS = [(0, bS.M)()], fS = [(0, bS.M)()], kS = [(0, bS.M)()], aS = [(0, bS.M)()], KS = [(0, bS.M)()], jS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
+         Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], lk = [(0, Tk.J)()], ak = [(0, Tk.J)()], qk = [(0, Tk.J)()], Lk = [(0, Tk.J)()], tk = [(0, Tk.J)()], Zk = [(0, Tk.J)()], jk = [(0, Tk.J)()], ek = [(0, Tk.J)()], wk = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
```

#### 233. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4584` → after: `L4584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4584) · [Before (L4584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4584)

```diff
-       })(), SS.PrepareUniforms = wS.d, SS
+       })(), kk.PrepareUniforms = sk.c, kk
```

#### 234. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4593-L4595` → after: `L4593-L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4593-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4593-L4595) · [Before (L4593-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4593-L4595)

```diff
-     var JS = gS(39968),
-       OS = gS(40163),
-       dS = gS(37164);
+     var Sk = Ik(39923),
+       vk = Ik(40126),
+       Ek = Ik(37201);
```

#### 235. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4656` → after: `L4656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4656) · [Before (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4656)

```diff
-             this.colorCurves = (0, tS.k)(this, oS, new hS), this._colorCurvesEnabled = ((0, tS.k)(this, lS), (0, tS.k)(this, mS, !1)), this._colorGradingTexture = ((0, tS.k)(this, eS), (0, tS.k)(this, rS, void 0)), this._colorGradingEnabled = ((0, tS.k)(this, SH), (0, tS.k)(this, … [truncated]
+             this.colorCurves = (0, Xk.n)(this, hk, new Vk), this._colorCurvesEnabled = ((0, Xk.n)(this, rk), (0, Xk.n)(this, Dk, !1)), this._colorGradingTexture = ((0, Xk.n)(this, Mk), (0, Xk.n)(this, kF, void 0)), this._colorGradingEnabled = ((0, Xk.n)(this, FF), (0, Xk.n)(this, … [truncated]
```

#### 236. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4722` → after: `L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4722) · [Before (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4722)

```diff
-             SS = Number.isNaN(SS) ? IS : Math.max(SS, IS), this._temperature !== SS && (this._temperature = SS, this._updateParameters())
+             kk = Number.isNaN(kk) ? Lk : Math.max(kk, Lk), this._temperature !== kk && (this._temperature = kk, this._updateParameters())
```

#### 237. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4734` → after: `L4734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4734) · [Before (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4734)

```diff
-               return qS.e.GetAsMatrix3x3(tS)
+               return ak.c.GetAsMatrix3x3(Xk)
```

#### 238. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4816-L4817` → after: `L4816-L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4816-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4816-L4817) · [Before (L4816-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4816-L4817)

```diff
-               const gS = 1 / (this.outputTextureWidth || SS.AK().getRenderWidth()),
-                 tS = 1 / (this.outputTextureHeight || SS.AK().getRenderHeight());
+               const Ik = 1 / (this.outputTextureWidth || kk.Oe().getRenderWidth()),
+                 Xk = 1 / (this.outputTextureHeight || kk.Oe().getRenderHeight());
```

#### 239. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4819` → after: `L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4819) · [Before (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4819)

```diff
-                 const bS = null != HS ? HS : tS / gS;
+                 const Tk = null != Fk ? Fk : Xk / Ik;
```

#### 240. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4823` → after: `L4823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4823) · [Before (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4823)

```diff
-                 xS = (0, JS.m)(xS, NS, this.vignetteStretch), XS = (0, JS.m)(XS, NS, this.vignetteStretch), SS.setFloat4("vignetteSettings1", xS, XS, -xS * this.vignetteCenterX, -XS * this.vignetteCenterY);
+                 yk = (0, Sk.l)(yk, lk, this.vignetteStretch), ik = (0, Sk.l)(ik, lk, this.vignetteStretch), kk.setFloat4("vignetteSettings1", yk, ik, -yk * this.vignetteCenterX, -ik * this.vignetteCenterY);
```

#### 241. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4848` → after: `L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L4848) · [Before (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L4848)

```diff
-           HS = [(0, bS.j)()], gS = [(0, bS.M)()], uS = [(0, bS.B)("colorGradingTexture")], aS = [(0, bS.M)()], KS = [(0, bS.M)()], jS = [(0, bS.M)()], CS = [(0, bS.M)()], wS = [(0, bS.M)()], dS = [(0, bS.M)()], cS = [(0, bS.M)()], vS = [(0, bS.M)()], ES = [(0, bS.M)()], LS = [(0, … [truncated]
+           Fk = [(0, Tk.k)()], Ik = [(0, Tk.J)()], qk = [(0, Tk.B)("colorGradingTexture")], jk = [(0, Tk.J)()], ek = [(0, Tk.J)()], wk = [(0, Tk.J)()], Jk = [(0, Tk.J)()], sk = [(0, Tk.J)()], Ek = [(0, Tk.J)()], Ok = [(0, Tk.J)()], nk = [(0, Tk.J)()], Gk = [(0, Tk.J)()], pk = [(0, … [truncated]
```

#### 242. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5218` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5218) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5218)

```diff
-         })(), SS.TONEMAPPING_STANDARD = 0, SS.TONEMAPPING_ACES = 1, SS.TONEMAPPING_KHR_PBR_NEUTRAL = 2, SS.PrepareUniforms = OS.e, SS.PrepareSamplers = OS.d, SS._VIGNETTEMODE_MULTIPLY = 0, SS._VIGNETTEMODE_OPAQUE = 1, SS
+         })(), kk.TONEMAPPING_STANDARD = 0, kk.TONEMAPPING_ACES = 1, kk.TONEMAPPING_KHR_PBR_NEUTRAL = 2, kk.PrepareUniforms = vk.f, kk.PrepareSamplers = vk.c, kk._VIGNETTEMODE_MULTIPLY = 0, kk._VIGNETTEMODE_OPAQUE = 1, kk
```

#### 243. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5231` → after: `L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5231) · [Before (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5231)

```diff
-   40169: (SS, HS, gS) => {
+   40134: (kk, Fk, Ik) => {
```

#### 244. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5235-L5236` → after: `L5235-L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5235-L5236) · [Before (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5235-L5236)

```diff
-     var tS = gS(38687),
-       bS = gS(40133);
+     var Xk = Ik(38674),
+       Tk = Ik(40097);
```

#### 245. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5243` → after: `L5243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5243) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5243)

```diff
-         this._uniformNames = [], this._valueCache = {}, this._engine = SS, this._noUBO = !SS.supportsUniformBuffers || bS, this._dynamic = gS, this._name = tS ?? "no-name", this._data = HS || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
+         this._uniformNames = [], this._valueCache = {}, this._engine = kk, this._noUBO = !kk.supportsUniformBuffers || Tk, this._dynamic = Ik, this._name = Xk ?? "no-name", this._data = Fk || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
```

#### 246. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5265` → after: `L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5265) · [Before (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5265)

```diff
-         if (HS = SS <= 2 ? SS : 4, this._uniformLocationPointer % HS !== 0) {
+         if (Fk = kk <= 2 ? kk : 4, this._uniformLocationPointer % Fk !== 0) {
```

#### 247. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5300` → after: `L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5300) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5300)

```diff
-         this.addUniform(SS, Array.prototype.slice.call(HS.lgS()))
+         this.addUniform(kk, Array.prototype.slice.call(Fk.iXk()))
```

#### 248. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5423` → after: `L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5423) · [Before (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5423)

```diff
-           if (this._buffer) return void tS.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + SS);
+           if (this._buffer) return void Xk.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + kk);
```

#### 249. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5438` → after: `L5438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5438) · [Before (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5438)

```diff
-         if (void 0 === XS) return void tS.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
+         if (void 0 === ik) return void Xk.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
```

#### 250. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5449` → after: `L5449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5449) · [Before (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5449)

```diff
-             if (this._bufferData[XS + 4 * NS + tS] !== bS.k.FloatRound(HS[qS]) && (SS = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[XS + 4 * NS + tS] = HS[qS]), tS++, tS === xS.strideSize) {
+             if (this._bufferData[ik + 4 * lk + Xk] !== Tk.h.FloatRound(Fk[ak]) && (kk = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[ik + 4 * lk + Xk] = Fk[ak]), Xk++, Xk === yk.strideSize) {
```

#### 251. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5544` → after: `L5544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5544) · [Before (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5544)

```diff
-         this._cacheMatrix(SS, HS) && this.updateUniform(SS, HS.lgS(), 16)
+         this._cacheMatrix(kk, Fk) && this.updateUniform(kk, Fk.iXk(), 16)
```

#### 252. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5688` → after: `L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5688) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5688)

```diff
-   39956: (SS, HS, gS) => {
+   39906: (kk, Fk, Ik) => {
```

#### 253. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5690` → after: `L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5690) · [Before (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5690)

```diff
-       c: () => bS
+       e: () => Tk
```

#### 254. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5692-L5693` → after: `L5692-L5693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5692-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5692-L5693) · [Before (L5692-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5692-L5693)

```diff
-     var tS = gS(39959);
-     class bS extends tS.b {
+     var Xk = Ik(39914);
+     class Tk extends Xk.d {
```

#### 255. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5702` → after: `L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5702) · [Before (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5702)

```diff
-   40056: (SS, HS, gS) => {
+   40013: (kk, Fk, Ik) => {
```

#### 256. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5704` → after: `L5704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5704) · [Before (L5704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5704)

```diff
-       b: () => qS,
+       c: () => ak,
```

#### 257. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5723` → after: `L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5723) · [Before (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5723)

```diff
-       return "function" === typeof SS ? SS : SS?.constructor
+       return "function" === typeof kk ? kk : kk?.constructor
```

#### 258. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5727` → after: `L5727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5727) · [Before (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5727)

```diff
-       if (!SS) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(xS)}) polyfill must run before decorated classes are evaluated.`);
+       if (!kk) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(yk)}) polyfill must run before decorated classes are evaluated.`);
```

#### 259. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5748` → after: `L5748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5748) · [Before (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5748)

```diff
-   40048: (SS, HS, gS) => {
+   40011: (kk, Fk, Ik) => {
```

#### 260. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5751-L5754` → after: `L5751-L5753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5751-L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5751-L5753) · [Before (L5751-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5751-L5754)

```diff
-       E: () => IS,
-       I: () => fS,
-       M: () => xS,
-       b: () => PS,
+       F: () => Lk,
+       H: () => tk,
+       J: () => yk,
```

#### 261. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5759-L5760` → after: `L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5758) · [Before (L5759-L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5759-L5760)

```diff
-       m: () => KS,
-       p: () => uS,
+       n: () => ak,
```

#### 262. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5762-L5763` → after: `L5760-L5763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5760-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5760-L5763) · [Before (L5762-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5762-L5763)

```diff
-       t: () => kS,
-       x: () => jS
+       v: () => qk,
+       w: () => Hk,
+       x: () => Zk,
+       z: () => wk
```

#### 263. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5765` → after: `L5765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5765) · [Before (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5765)

```diff
-     var tS = gS(40056);
+     var Xk = Ik(40013);
```

#### 264. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5771` → after: `L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5771) · [Before (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5771)

```diff
-           xS = (0, tS.b)(bS.metadata);
+           yk = (0, Xk.c)(Tk.metadata);
```

#### 265. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5883` → after: `L5883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5883) · [Before (L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5883)

```diff
-   40068: (SS, HS, gS) => {
+   40021: (kk, Fk, Ik) => {
```

#### 266. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5887-L5891` → after: `L5887-L5891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5887-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5887-L5891) · [Before (L5887-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5887-L5891)

```diff
-     var tS = gS(39926),
-       bS = gS(40077),
-       XS = gS(37300),
-       xS = gS(37117),
-       NS = gS(40056);
+     var Xk = Ik(39863),
+       Tk = Ik(40025),
+       ik = Ik(37331),
+       yk = Ik(37153),
+       lk = Ik(40013);
```

#### 267. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5910` → after: `L5910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5910) · [Before (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5910)

```diff
-             tS.cloneTexturesOnlyOnce && qS[NS.uniqueId] ? XS[bS] = qS[NS.uniqueId] : (XS[bS] = gS || NS.isRenderTarget ? NS : NS.clone(), qS[NS.uniqueId] = XS[bS]);
+             Xk.cloneTexturesOnlyOnce && ak[lk.uniqueId] ? ik[Tk] = ak[lk.uniqueId] : (ik[Tk] = Ik || lk.isRenderTarget ? lk : lk.clone(), ak[lk.uniqueId] = ik[Tk]);
```

#### 268. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5921` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5921) · [Before (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5921)

```diff
-             XS[bS] = gS ? NS : NS.clone()
+             ik[Tk] = Ik ? lk : lk.clone()
```

#### 269. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5961` → after: `L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5961) · [Before (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5961)

```diff
-               HS[XS] = NS.lgS();
+               Fk[ik] = lk.iXk();
```

#### 270. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5987` → after: `L5987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5987) · [Before (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5987)

```diff
-                 SS[NS] = XS.b.FromArray(IS);
+                 kk[lk] = ik.e.FromArray(Lk);
```

#### 271. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5993` → after: `L5993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5993) · [Before (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5993)

```diff
-                 SS[NS] = xS.m.FromArray(IS);
+                 kk[lk] = yk.p.FromArray(Lk);
```

#### 272. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L5996` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L5996) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L5996)

```diff
-                 SS[NS] = xS.n.FromArray(IS);
+                 kk[lk] = yk.t.FromArray(Lk);
```

#### 273. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6005` → after: `L6005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6005) · [Before (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6005)

```diff
-                 SS[NS] = XS.c.FromArray(IS);
+                 kk[lk] = ik.h.FromArray(Lk);
```

#### 274. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6011` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6011) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6011)

```diff
-                 SS[NS] = xS.i.FromArray(IS);
+                 kk[lk] = yk.f.FromArray(Lk);
```

#### 275. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6017` → after: `L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6017) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6017)

```diff
-                 SS[NS] = xS.e.FromArray(IS);
+                 kk[lk] = yk.c.FromArray(Lk);
```

#### 276. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6020` → after: `L6020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6020) · [Before (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6020)

```diff
-                 SS[NS] = xS.r.FromArray(IS)
+                 kk[lk] = yk.u.FromArray(Lk)
```

#### 277. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6038` → after: `L6038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6038) · [Before (L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6038)

```diff
-       throw (0, tS.l)("ImageProcessingConfiguration")
+       throw (0, Xk.j)("ImageProcessingConfiguration")
```

#### 278. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6040` → after: `L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6040) · [Before (L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6040)

```diff
-       throw (0, tS.l)("FresnelParameters")
+       throw (0, Xk.j)("FresnelParameters")
```

#### 279. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6042` → after: `L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6042) · [Before (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6042)

```diff
-       throw (0, tS.l)("ColorCurves")
+       throw (0, Xk.j)("ColorCurves")
```

#### 280. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6044` → after: `L6044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6044) · [Before (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6044)

```diff
-       throw (0, tS.l)("Texture")
+       throw (0, Xk.j)("Texture")
```

#### 281. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6047` → after: `L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6047) · [Before (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6047)

```diff
-   39987: (SS, HS, gS) => {
+   39947: (kk, Fk, Ik) => {
```

#### 282. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6049` → after: `L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6049) · [Before (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6049)

```diff
-       c: () => bS
+       e: () => Tk
```

#### 283. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6051` → after: `L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6051) · [Before (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6051)

```diff
-     var tS = gS(39946);
+     var Xk = Ik(39891);
```

#### 284. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6084` → after: `L6084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6084) · [Before (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6084)

```diff
-         bS.Enabled && (this._startMonitoringTime = tS.e.Now)
+         Tk.Enabled && (this._startMonitoringTime = Xk.d.Now)
```

#### 285. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6090` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6090) · [Before (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6090)

```diff
-         const HS = tS.e.Now;
+         const Fk = Xk.d.Now;
```

#### 286. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6099` → after: `L6099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6099) · [Before (L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6099)

```diff
-         const SS = tS.e.Now;
+         const kk = Xk.d.Now;
```

#### 287. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6105` → after: `L6105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6105) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6105)

```diff
-   40144: (SS, HS, gS) => {
+   40107: (kk, Fk, Ik) => {
```

#### 288. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6107` → after: `L6107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6107) · [Before (L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6107)

```diff
-       b: () => bS,
+       d: () => Tk,
```

#### 289. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6168` → after: `L6168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6168) · [Before (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6168)

```diff
-   40077: (SS, HS, gS) => {
+   40025: (kk, Fk, Ik) => {
```

#### 290. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6249` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6249) · [Before (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6249)

```diff
-   40189: (SS, HS, gS) => {
+   40149: (kk, Fk, Ik) => {
```

#### 291. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6251` → after: `L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6251) · [Before (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6251)

```diff
-       d: () => XS
+       e: () => ik
```

#### 292. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6253-L6254` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6253-L6254) · [Before (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6253-L6254)

```diff
-     var tS = gS(40183),
-       bS = gS(37144);
+     var Xk = Ik(40141),
+       Tk = Ik(37187);
```

#### 293. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6260` → after: `L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6260) · [Before (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6260)

```diff
-         if (this._vertexBuffers[tS.h.PositionKind]) return;
+         if (this._vertexBuffers[Xk.l.PositionKind]) return;
```

#### 294. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6262` → after: `L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6262) · [Before (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6262)

```diff
-         SS.push(1, 1), SS.push(-1, 1), SS.push(-1, -1), SS.push(1, -1), this._vertexBuffers[tS.h.PositionKind] = new tS.h(this._scene.AK(), SS, tS.h.PositionKind, !1, !1, 2), this._buildIndexBuffer()
+         kk.push(1, 1), kk.push(-1, 1), kk.push(-1, -1), kk.push(1, -1), this._vertexBuffers[Xk.l.PositionKind] = new Xk.l(this._scene.Oe(), kk, Xk.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
```

#### 295. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6266` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6266) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6266)

```diff
-         SS.push(0), SS.push(1), SS.push(2), SS.push(0), SS.push(2), SS.push(3), this._indexBuffer = this._scene.AK().createIndexBuffer(SS)
+         kk.push(0), kk.push(1), kk.push(2), kk.push(0), kk.push(2), kk.push(3), this._indexBuffer = this._scene.Oe().createIndexBuffer(kk)
```

#### 296. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6278` → after: `L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6278) · [Before (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6278)

```diff
-         const SS = this._vertexBuffers[tS.h.PositionKind];
+         const kk = this._vertexBuffers[Xk.l.PositionKind];
```

#### 297. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6294` → after: `L6294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6294) · [Before (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6294)

```diff
-         const NS = this._scene.AK();
+         const lk = this._scene.Oe();
```

#### 298. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6296` → after: `L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6296) · [Before (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6296)

```diff
-           qS < SS.length - 1 ? SS[qS + 1].activate(this._scene.activeCamera || this._scene, HS?.texture) : (HS ? NS.bindFramebuffer(HS, tS, void 0, void 0, gS, bS) : XS || NS.restoreDefaultFramebuffer(), NS._debugInsertMarker?.(`post process ${SS[qS].name} output`));
+           ak < kk.length - 1 ? kk[ak + 1].activate(this._scene.activeCamera || this._scene, Fk?.texture) : (Fk ? lk.bindFramebuffer(Fk, Xk, void 0, void 0, Ik, Tk) : ik || lk.restoreDefaultFramebuffer(), lk._debugInsertMarker?.(`post process ${kk[ak].name} output`));
```

#### 299. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6308)

```diff
-         const xS = this._scene.AK();
+         const yk = this._scene.Oe();
```

#### 300. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6311` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6311) · [Before (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6311)

```diff
-           if (NS < qS - 1 ? uS._outputTexture = tS[NS + 1].activate(XS, HS?.texture) : (HS ? (xS.bindFramebuffer(HS, gS, void 0, void 0, bS), uS._outputTexture = HS) : (xS.restoreDefaultFramebuffer(), uS._outputTexture = null), xS._debugInsertMarker?.(`post process ${tS[NS].name} … [truncated]
+           if (lk < ak - 1 ? qk._outputTexture = Xk[lk + 1].activate(ik, Fk?.texture) : (Fk ? (yk.bindFramebuffer(Fk, Ik, void 0, void 0, Tk), qk._outputTexture = Fk) : (yk.restoreDefaultFramebuffer(), qk._outputTexture = null), yk._debugInsertMarker?.(`post process ${Xk[lk].name} … [truncated]
```

#### 301. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6318-L6319` → after: `L6318-L6319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6318-L6319) · [Before (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6318-L6319)

```diff
-         const SS = this._vertexBuffers[tS.h.PositionKind];
-         SS && (SS.dispose(), this._vertexBuffers[tS.h.PositionKind] = null), this._indexBuffer && (this._scene.AK()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
+         const kk = this._vertexBuffers[Xk.l.PositionKind];
+         kk && (kk.dispose(), this._vertexBuffers[Xk.l.PositionKind] = null), this._indexBuffer && (this._scene.Oe()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
```

#### 302. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6323` → after: `L6323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6323) · [Before (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6323)

```diff
-   40204: (SS, HS, gS) => {
+   40161: (kk, Fk, Ik) => {
```

#### 303. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6325` → after: `L6325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6325) · [Before (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6325)

```diff
-       e: () => uS
+       d: () => qk
```

#### 304. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6327-L6328` → after: `L6327-L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6327-L6328) · [Before (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6327-L6328)

```diff
-     var tS = gS(40144),
-       bS = gS(37117);
+     var Xk = Ik(40107),
+       Tk = Ik(37153);
```

#### 305. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6350` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6350) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6350)

```diff
-         this.index = SS, this._opaqueSubMeshes = new tS.f(256), this._transparentSubMeshes = new tS.f(256), this._alphaTestSubMeshes = new tS.f(256), this._depthOnlySubMeshes = new tS.f(256), this._particleSystems = new tS.f(256), this._spriteManagers = new tS.f(256), this._empty … [truncated]
+         this.index = kk, this._opaqueSubMeshes = new Xk.f(256), this._transparentSubMeshes = new Xk.f(256), this._alphaTestSubMeshes = new Xk.f(256), this._depthOnlySubMeshes = new Xk.f(256), this._particleSystems = new Xk.f(256), this._spriteManagers = new Xk.f(256), this._empty … [truncated]
```

#### 306. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6359` → after: `L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6359) · [Before (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6359)

```diff
-         const uS = this._scene.AK();
+         const qk = this._scene.Oe();
```

#### 307. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6389` → after: `L6389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6389) · [Before (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6389)

```diff
-           for (; fS < SS.length; fS++) IS = SS.data[fS], IS._alphaIndex = IS.getMesh().alphaIndex, IS._distanceToCamera = bS.n.Distance(IS.hA().QtS.centerWorld, kS);
+           for (; tk < kk.length; tk++) Lk = kk.data[tk], Lk._alphaIndex = Lk.getMesh().alphaIndex, Lk._distanceToCamera = Tk.t.Distance(Lk.vR().EXk.centerWorld, Zk);
```

#### 308. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6405` → after: `L6405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6405) · [Before (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6405)

```diff
-         const XS = SS[0].getMesh().lL();
+         const ik = kk[0].getMesh().mG();
```

#### 309. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6410` → after: `L6410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6410) · [Before (L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6410)

```diff
-             const SS = bS.zK();
+             const kk = Tk.Ue();
```

#### 310. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6413` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6413) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6413)

```diff
-               const gS = SS.lL().AK();
+               const Ik = kk.mG().Oe();
```

#### 311. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6430` → after: `L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6430) · [Before (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6430)

```diff
-               gS(bS, SS[HS]) < 0 ? xS = HS : XS = HS + 1
+               Ik(Tk, kk[Fk]) < 0 ? yk = Fk : ik = Fk + 1
```

#### 312. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6487` → after: `L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6487) · [Before (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6487)

```diff
-         void 0 === HS && (HS = SS.getMesh()), void 0 === gS && (gS = SS.zK()), null !== gS && void 0 !== gS && (gS.needAlphaBlendingForMesh(HS) ? this._transparentSubMeshes.push(SS) : gS.needAlphaTestingForMesh(HS) ? (gS.needDepthPrePass && !this.disableDepthPrePass && this._dept … [truncated]
+         void 0 === Fk && (Fk = kk.getMesh()), void 0 === Ik && (Ik = kk.Ue()), null !== Ik && void 0 !== Ik && (Ik.needAlphaBlendingForMesh(Fk) ? this._transparentSubMeshes.push(kk) : Ik.needAlphaTestingForMesh(Fk) ? (Ik.needDepthPrePass && !this.disableDepthPrePass && this._dept … [truncated]
```

#### 313. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6518` → after: `L6518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6518) · [Before (L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6518)

```diff
-     uS._ZeroVector = bS.n.Zero()
+     qk._ZeroVector = Tk.t.Zero()
```

#### 314. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6520` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6520) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6520)

```diff
-   40196: (SS, HS, gS) => {
+   40157: (kk, Fk, Ik) => {
```

#### 315. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6522` → after: `L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6522) · [Before (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6522)

```diff
-       c: () => XS
+       e: () => ik
```

#### 316. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6524` → after: `L6524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6524) · [Before (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6524)

```diff
-     var tS = gS(40204);
+     var Xk = Ik(40161);
```

#### 317. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6542-L6543` → after: `L6542-L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6542-L6543) · [Before (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6542-L6543)

```diff
-           if (SS.dD)
-             for (const HS of SS.dD) HS._wasDispatched = !1;
+           if (kk.lK)
+             for (const Fk of kk.lK) Fk._wasDispatched = !1;
```

#### 318. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6546` → after: `L6546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6546) · [Before (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6546)

```diff
-         for (const SS of this._scene.zD) SS._wasDispatched = !1
+         for (const kk of this._scene.jK) kk._wasDispatched = !1
```

#### 319. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6566` → after: `L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6566) · [Before (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6566)

```diff
-         this._depthStencilBufferAlreadyCleaned || (this._scene.AK().clear(null, !1, SS, HS), this._depthStencilBufferAlreadyCleaned = !0)
+         this._depthStencilBufferAlreadyCleaned || (this._scene.Oe().clear(null, !1, kk, Fk), this._depthStencilBufferAlreadyCleaned = !0)
```

#### 320. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6576` → after: `L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6576) · [Before (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6576)

```diff
-         fS.Bj = this._scene, fS.camera = this._scene.activeCamera, fS.renderingManager = this;
+         tk.Yw = this._scene, tk.camera = this._scene.activeCamera, tk.renderingManager = this;
```

#### 321. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6626` → after: `L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6626) · [Before (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6626)

```diff
-         void 0 === this._renderingGroups[SS] && (this._renderingGroups[SS] = new tS.e(SS, this._scene, this._customOpaqueSortCompareFn[SS], this._customAlphaTestSortCompareFn[SS], this._customTransparentSortCompareFn[SS]), this._renderingGroups[SS].disableDepthPrePass = this._dis … [truncated]
+         void 0 === this._renderingGroups[kk] && (this._renderingGroups[kk] = new Xk.d(kk, this._scene, this._customOpaqueSortCompareFn[kk], this._customAlphaTestSortCompareFn[kk], this._customTransparentSortCompareFn[kk]), this._renderingGroups[kk].disableDepthPrePass = this._dis … [truncated]
```

#### 322. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6661` → after: `L6661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6661) · [Before (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6661)

```diff
-   39948: (SS, HS, gS) => {
+   39894: (kk, Fk, Ik) => {
```

#### 323. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6663` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6663) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6663)

```diff
-       c: () => tS
+       b: () => Xk
```

#### 324. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6710` → after: `L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6710) · [Before (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6710)

```diff
-             const HS = bS < this._numTargetEnabled ? bS : 0;
+             const Fk = Tk < this._numTargetEnabled ? Tk : 0;
```

#### 325. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6717` → after: `L6717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6717) · [Before (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6717)

```diff
-             const HS = SS < this._numTargetEnabled ? 4 * SS : 0;
+             const Fk = kk < this._numTargetEnabled ? 4 * kk : 0;
```

#### 326. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6724` → after: `L6724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6724) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6724)

```diff
-             const HS = SS < this._numTargetEnabled ? 2 * SS : 0;
+             const Fk = kk < this._numTargetEnabled ? 2 * kk : 0;
```

#### 327. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6800` → after: `L6800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6800) · [Before (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6800)

```diff
-   40227: (SS, HS, gS) => {
+   40189: (kk, Fk, Ik) => {
```

#### 328. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6807` → after: `L6807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6807) · [Before (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6807)

```diff
-   40131: (SS, HS, gS) => {
+   40090: (kk, Fk, Ik) => {
```

#### 329. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6809-L6810` → after: `L6809-L6810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6809-L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6809-L6810) · [Before (L6809-L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6809-L6810)

```diff
-       e: () => Ng,
-       i: () => Xg
+       c: () => aI,
+       f: () => yI
```

#### 330. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6812-L6816` → after: `L6812-L6816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6812-L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6812-L6816) · [Before (L6812-L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6812-L6816)

```diff
-     var tS = gS(40133),
-       bS = gS(39937),
-       XS = gS(39946),
-       xS = gS(37144),
-       NS = gS(40144);
+     var Xk = Ik(40097),
+       Tk = Ik(39878),
+       ik = Ik(39891),
+       yk = Ik(37187),
+       lk = Ik(40107);
```

#### 331. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6834` → after: `L6834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6834) · [Before (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6834)

```diff
-         return void 0 !== gS ? gS : (this.add(SS, HS), HS)
+         return void 0 !== Ik ? Ik : (this.add(kk, Fk), Fk)
```

#### 332. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6871-L6875` → after: `L6871-L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6871-L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6871-L6875) · [Before (L6871-L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6871-L6875)

```diff
-     var uS = gS(40077),
-       IS = gS(37117),
-       fS = gS(40152),
-       kS = gS(40169),
-       aS = gS(40176);
+     var qk = Ik(40025),
+       Lk = Ik(37153),
+       tk = Ik(40113),
+       Zk = Ik(40134),
+       jk = Ik(40139);
```

#### 333. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6881` → after: `L6881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6881) · [Before (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6881)

```diff
-         const tS = SS.lL();
+         const Xk = kk.mG();
```

#### 334. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6894-L6901` → after: `L6894-L6901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6894-L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6894-L6901) · [Before (L6894-L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6894-L6901)

```diff
-     var jS = gS(40189),
-       GS = gS(40192),
-       CS = gS(40196),
-       nS = gS(40213),
-       PS = gS(39913),
-       QS = gS(37138),
-       DS = gS(39926),
-       wS = gS(40218);
+     var wk = Ik(40149),
+       Hk = Ik(40152),
+       Jk = Ik(40157),
+       xk = Ik(40166),
+       Pk = Ik(39850),
+       Kk = Ik(37178),
+       Qk = Ik(39863),
+       sk = Ik(40169);
```

#### 335. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6926` → after: `L6926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6926) · [Before (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6926)

```diff
-     var ZS, JS, OS, dS, cS, vS, ES, LS = gS(40221);
+     var zk, Sk, vk, Ek, Ok, nk, Gk, pk = Ik(40176);
```

#### 336. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6948` → after: `L6948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6948) · [Before (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6948)

```diff
-     var YS = gS(40223);
+     var uk = Ik(40182);
```

#### 337. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6959` → after: `L6959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6959) · [Before (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6959)

```diff
-             throw `Unable to generate event for device ${ZS[SS]}`
+             throw `Unable to generate event for device ${zk[kk]}`
```

#### 338. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6970` → after: `L6970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L6970) · [Before (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L6970)

```diff
-         switch (xS.pointerId = 1, xS.type = "wheel", xS.deltaMode = YS.e.DOM_DELTA_PIXEL, xS.deltaX = 0, xS.deltaY = 0, xS.deltaZ = 0, gS) {
+         switch (yk.pointerId = 1, yk.type = "wheel", yk.deltaMode = uk.c.DOM_DELTA_PIXEL, yk.deltaX = 0, yk.deltaY = 0, yk.deltaZ = 0, Ik) {
```

#### 339. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7034` → after: `L7034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7034) · [Before (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L7034)

```diff
-         this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = tS.k.IsSafari(), this._usingMacOs = (0, PS.i)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = SS => {}, this._keyboardUpEvent = SS => {}, this._k … [truncated]
+         this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Xk.h.IsSafari(), this._usingMacOs = (0, Pk.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = kk => {}, this._keyboardUpEvent = kk => {}, this._k … [truncated]
```

#### 340. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7040` → after: `L7040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7040) · [Before (L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L7040)

```diff
-         if (!bS) throw `Unable to find device ${ZS[SS]}`;
+         if (!Tk) throw `Unable to find device ${zk[kk]}`;
```

#### 341. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7043-L7044` → after: `L7043-L7044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7043-L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7043-L7044) · [Before (L7043-L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L7043-L7044)

```diff
-         if (void 0 === XS) throw `Unable to find input ${gS} for device ${ZS[SS]} in slot ${HS}`;
-         return gS === JS.Move && tS.k.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), XS
+         if (void 0 === ik) throw `Unable to find input ${Ik} for device ${zk[kk]} in slot ${Fk}`;
+         return Ik === Sk.Move && Xk.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), ik
```

#### 342. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7087` → after: `L7087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7087) · [Before (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L7087)

```diff
-         if (void 0 === HS) throw `Unable to register device ${ZS[SS]} to undefined slot.`;
+         if (void 0 === Fk) throw `Unable to register device ${zk[kk]} to undefined slot.`;
```

#### 343. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7133` → after: `L7133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7133) · [Before (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L7133)

```diff
-         this._maxTouchPoints = (0, PS.i)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
+         this._maxTouchPoints = (0, Pk.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
```

#### 344. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7141` → after: `L7141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7141) · [Before (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L7141)

```diff
-             if (!(bS >= 0)) return void tS.k.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
+             if (!(Tk >= 0)) return void Xk.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
```

#### 345. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7155` → after: `L7155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7155) · [Before (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L7155)

```diff
-             if (-1 === HS && (HS = this._activeTouchIds.indexOf(-1)), !(HS >= 0)) return void tS.k.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
+             if (-1 === Fk && (Fk = this._activeTouchIds.indexOf(-1)), !(Fk >= 0)) return void Xk.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
```

#### 346. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7353` → after: `L7353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7353) · [Before (L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L7353)

```diff
-         })), this.onDeviceDisconnectedObservable = new xS.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = SS.bY.add((() => {
+         })), this.onDeviceDisconnectedObservable = new yk.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = kk.hG.add((() => {
```

#### 347. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7358` → after: `L7358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7358) · [Before (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L7358)

```diff
-         this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager. … [truncated]
+         this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager. … [truncated]
```

#### 348. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7394` → after: `L7394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7394) · [Before (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L7394)

```diff
-     var pS = gS(40227);
+     var fk = Ik(40189);
```

#### 349. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7426` → after: `L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7426) · [Before (L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L7426)

```diff
-         this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1 … [truncated]
+         this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1 … [truncated]
```

#### 350. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L7435` → after: `L7435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR7435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/252.js#L7435) · [Before (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/252.js#L7435)

```diff
-         return new IS.m(this._unTranslatedPointerX, this._unTranslatedPointerY)
+         return new Lk.p(this._unTranslatedPointerX, this._unTranslatedPointerY)
```
