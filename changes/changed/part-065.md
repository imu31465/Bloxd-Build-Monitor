# Changed — Bundle Modifications Report (Part 065 / 154)

- **Updated at**: `2026-11-28T07:18 JST`
- **Part**: `65 / 154` (**421** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 064](part-064.md) · [Part 066 →](part-066.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/286.js` (1yqdn.8419f1e1 → 4udp6d.2845de07 · continued)

- **File**: `bundles/bloxd.io/chunks/js/286.js` (875 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469)

#### 803. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7168` → after: `L7168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7168) · [Before (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7168)

```diff
-           return this._poseMatrix ? (this._poseMatrix.HJ(WW), this) : (this._poseMatrix = WW.clone(), this)
+           return this._poseMatrix ? (this._poseMatrix.vN(RR), this) : (this._poseMatrix = RR.clone(), this)
```

#### 804. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7171` → after: `L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7171) · [Before (L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7171)

```diff
-           return this._poseMatrix || (this._poseMatrix = ZW.d.Identity()), this._poseMatrix
+           return this._poseMatrix || (this._poseMatrix = KR.e.Identity()), this._poseMatrix
```

#### 805. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7196` → after: `L7196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7196) · [Before (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7196)

```diff
-           return this._pivotMatrix.HJ(WW), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = iW, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
+           return this._pivotMatrix.vN(RR), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = JR, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
```

#### 806. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7212` → after: `L7212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7212) · [Before (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7212)

```diff
-           return WW ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Z5(0), this._rotationQuaternion = this._rotationQuaternion || ZW.g.Identity(), WW.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0 … [truncated]
+           return RR ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.NRR(0), this._rotationQuaternion = this._rotationQuaternion || KR.i.Identity(), RR.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(! … [truncated]
```

#### 807. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7217` → after: `L7217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7217) · [Before (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7217)

```diff
-         get sLW() {
+         get tiR() {
```

#### 808. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7232` → after: `L7232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7232) · [Before (L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7232)

```diff
-             this.parent.getWorldMatrix().invertToRef(WW), ZW.q.TransformCoordinatesFromFloatsToRef(iW, OW, mW, WW, this.position)
+             this.parent.getWorldMatrix().invertToRef(RR), KR.r.TransformCoordinatesFromFloatsToRef(JR, GR, yR, RR, this.position)
```

#### 809. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7234` → after: `L7234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7234) · [Before (L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7234)

```diff
-           return this._absolutePosition.HJ(WW), this
+           return this._absolutePosition.vN(RR), this
```

#### 810. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7237` → after: `L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7237) · [Before (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7237)

```diff
-           return this.computeWorldMatrix(), this.position = ZW.q.TransformNormal(WW, this._localMatrix), this
+           return this.computeWorldMatrix(), this.position = KR.r.TransformNormal(RR, this._localMatrix), this
```

#### 811. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7242` → after: `L7242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7242) · [Before (L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7242)

```diff
-           return this._localMatrix.invertToRef(WW), ZW.q.TransformNormal(this.position, WW)
+           return this._localMatrix.invertToRef(RR), KR.r.TransformNormal(this.position, RR)
```

#### 812. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7245` → after: `L7245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7245) · [Before (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7245)

```diff
-           return this.computeWorldMatrix(!0), this.position = ZW.q.TransformCoordinates(WW, this._localMatrix), this
+           return this.computeWorldMatrix(!0), this.position = KR.r.TransformCoordinates(RR, this._localMatrix), this
```

#### 813. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7262` → after: `L7262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7262) · [Before (L7262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7262)

```diff
-               ZW.g.FromEulerVectorToRef(this.rotation, WW);
+               KR.i.FromEulerVectorToRef(this.rotation, RR);
```

#### 814. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7270` → after: `L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7270) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7270)

```diff
-           const iW = ZW.q.Zero();
+           const JR = KR.r.Zero();
```

#### 815. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7274` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7274) · [Before (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7274)

```diff
-           return ZW.q.TransformNormalToRef(WW, this.getWorldMatrix(), iW), this
+           return KR.r.TransformNormalToRef(RR, this.getWorldMatrix(), JR), this
```

#### 816. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7283` → after: `L7283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7283) · [Before (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7283)

```diff
-           return this.rotationQuaternion ? ZW.g.RotationYawPitchRollToRef(EW + iW, PW + OW, mW, this.rotationQuaternion) : (this.rotation.x = PW + OW, this.rotation.y = EW + iW, this.rotation.z = mW), this
+           return this.rotationQuaternion ? KR.i.RotationYawPitchRollToRef(tR + JR, ZR + GR, yR, this.rotationQuaternion) : (this.rotation.x = ZR + GR, this.rotation.y = tR + JR, this.rotation.z = yR), this
```

#### 817. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7287` → after: `L7287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7287) · [Before (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7287)

```diff
-           0 == this.bD().getRenderId() && this.computeWorldMatrix(!0);
+           0 == this.jH().getRenderId() && this.computeWorldMatrix(!0);
```

#### 818. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7291` → after: `L7291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7291) · [Before (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7291)

```diff
-             OW.invertToRef(iW), WW = ZW.q.TransformCoordinates(WW, iW)
+             GR.invertToRef(JR), RR = KR.r.TransformCoordinates(RR, JR)
```

#### 819. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7293` → after: `L7293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7293) · [Before (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7293)

```diff
-           return this.setPivotMatrix(ZW.d.Translation(-WW.x, -WW.y, -WW.z), !0)
+           return this.setPivotMatrix(KR.e.Translation(-RR.x, -RR.y, -RR.z), !0)
```

#### 820. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7296` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7296) · [Before (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7296)

```diff
-           const WW = ZW.q.Zero();
+           const RR = KR.r.Zero();
```

#### 821. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7303` → after: `L7303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7303) · [Before (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7303)

```diff
-           const WW = ZW.q.Zero();
+           const RR = KR.r.Zero();
```

#### 822. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7307` → after: `L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7307) · [Before (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7307)

```diff
-           return this.getPivotPointToRef(WW), ZW.q.TransformCoordinatesToRef(WW, this.getWorldMatrix(), WW), this
+           return this.getPivotPointToRef(RR), KR.r.TransformCoordinatesToRef(RR, this.getWorldMatrix(), RR), this
```

#### 823. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7309` → after: `L7309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7309) · [Before (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7309)

```diff
-         xOW(WW) {
+         hGR(RR) {
```

#### 824. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7312-L7313` → after: `L7312-L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7312-L7313) · [Before (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7312-L7313)

```diff
-             for (const iW of this._children) iW.xOW(WW);
-           return super.xOW(WW)
+             for (const JR of this._children) JR.hGR(RR);
+           return super.hGR(RR)
```

#### 825. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7320-L7321` → after: `L7320-L7321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7320-L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7320-L7321) · [Before (L7320-L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7320-L7321)

```diff
-             NW = ZW.l.fA[0],
-             PW = ZW.l.fA[1],
+             uR = KR.l.Fe[0],
+             ZR = KR.l.Fe[1],
```

#### 826. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7323` → after: `L7323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7323) · [Before (L7323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7323)

```diff
-           ZW.d.IdentityToRef(LW);
+           KR.e.IdentityToRef(qR);
```

#### 827. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7327` → after: `L7327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7327) · [Before (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7327)

```diff
-           return wW || (wW = WW._TmpRotation, ZW.g.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, wW)), ZW.d.ComposeToRef(this.YZ, wW, this.position, cW), this.parent && cW.multiplyToRef(this.parent.computeWorldMatrix(!0), cW), iW && (iW.computeWo … [truncated]
+           return fR || (fR = RR._TmpRotation, KR.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, fR)), KR.e.ComposeToRef(this.MK, fR, this.position, iR), this.parent && iR.multiplyToRef(this.parent.computeWorldMatrix(!0), iR), JR && (JR.computeWo … [truncated]
```

#### 828. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7352` → after: `L7352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7352) · [Before (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7352)

```diff
-           if (iW.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Z5(0)), mW && 0 !== mW) {
+           if (JR.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.NRR(0)), yR && 0 !== yR) {
```

#### 829. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7356` → after: `L7356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7356) · [Before (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7356)

```diff
-               WW.invertToRef(mW), iW = ZW.q.TransformNormal(iW, mW), WW.determinant() < 0 && (OW *= -1)
+               RR.invertToRef(yR), JR = KR.r.TransformNormal(JR, yR), RR.determinant() < 0 && (GR *= -1)
```

#### 830. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7358-L7359` → after: `L7358-L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7358-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7358-L7359) · [Before (L7358-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7358-L7359)

```diff
-             EW = ZW.g.RotationAxisToRef(iW, OW, WW._RotationAxisCache), EW.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
-           } else EW = ZW.g.RotationAxisToRef(iW, OW, WW._RotationAxisCache), this.rotationQuaternion.multiplyToRef(EW, this.rotationQuaternion);
+             tR = KR.i.RotationAxisToRef(JR, GR, RR._RotationAxisCache), tR.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
+           } else tR = KR.i.RotationAxisToRef(JR, GR, RR._RotationAxisCache), this.rotationQuaternion.multiplyToRef(tR, this.rotationQuaternion);
```

#### 831. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7363-L7366` → after: `L7363-L7366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7363-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7363-L7366) · [Before (L7363-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7363-L7366)

```diff
-           iW.normalize(), this.rotationQuaternion || (this.rotationQuaternion = ZW.g.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Z5(0));
-           const mW = ZW.l.fA[0],
-             EW = ZW.l.fA[1],
-             NW = ZW.l.fA[2],
+           JR.normalize(), this.rotationQuaternion || (this.rotationQuaternion = KR.i.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.NRR(0));
+           const yR = KR.l.Fe[0],
+             tR = KR.l.Fe[1],
+             uR = KR.l.Fe[2],
```

#### 832. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7372` → after: `L7372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7372) · [Before (L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7372)

```diff
-           return WW.subtractToRef(this.position, mW), ZW.d.TranslationToRef(mW.x, mW.y, mW.z, LW), ZW.d.TranslationToRef(-mW.x, -mW.y, -mW.z, cW), ZW.d.RotationAxisToRef(iW, OW, wW), cW.multiplyToRef(wW, tW), tW.multiplyToRef(LW, tW), tW.decompose(EW, PW, NW), this.position.addIn … [truncated]
+           return RR.subtractToRef(this.position, yR), KR.e.TranslationToRef(yR.x, yR.y, yR.z, qR), KR.e.TranslationToRef(-yR.x, -yR.y, -yR.z, iR), KR.e.RotationAxisToRef(JR, GR, fR), iR.multiplyToRef(fR, VR), VR.multiplyToRef(qR, VR), VR.decompose(tR, ZR, uR), this.position.addIn … [truncated]
```

#### 833. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7385` → after: `L7385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7385) · [Before (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7385)

```diff
-           this.rotationQuaternion ? mW = this.rotationQuaternion : (mW = ZW.l.Quaternion[1], ZW.g.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, mW));
+           this.rotationQuaternion ? yR = this.rotationQuaternion : (yR = KR.l.Quaternion[1], KR.i.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, yR));
```

#### 834. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7387` → after: `L7387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7387) · [Before (L7387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7387)

```diff
-           return ZW.g.RotationYawPitchRollToRef(iW, WW, OW, EW), mW.multiplyInPlace(EW), this.rotationQuaternion || mW.toEulerAnglesToRef(this.rotation), this
+           return KR.i.RotationYawPitchRollToRef(JR, RR, GR, tR), yR.multiplyInPlace(tR), this.rotationQuaternion || yR.toEulerAnglesToRef(this.rotation), this
```

#### 835. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7399` → after: `L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7399) · [Before (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7399)

```diff
-           const mW = this.bD().getRenderId();
+           const yR = this.jH().getRenderId();
```

#### 836. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7401` → after: `L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7401) · [Before (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7401)

```diff
-           OW = OW || this.bD().activeCamera, this._updateCache();
+           GR = GR || this.jH().activeCamera, this._updateCache();
```

#### 837. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7409` → after: `L7409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7409) · [Before (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7409)

```diff
-             cW = WW._TmpTranslation, cW.yWW(this._position.x + iW[12], this._position.y + iW[13], this._position.z + iW[14])
+             iR = RR._TmpTranslation, iR.VJR(this._position.x + JR[12], this._position.y + JR[13], this._position.z + JR[14])
```

#### 838. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7411` → after: `L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7411) · [Before (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7411)

```diff
-           if (PW.yWW(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
+           if (ZR.VJR(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
```

#### 839. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7413` → after: `L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7413) · [Before (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7413)

```diff
-               this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(ZW.g.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.yWW(0, 0, 0))
+               this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(KR.i.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.VJR(0, 0, 0))
```

#### 840. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7415` → after: `L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7415) · [Before (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7415)

```diff
-           } else LW = WW._TmpRotation, ZW.g.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, LW);
+           } else qR = RR._TmpRotation, KR.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, qR);
```

#### 841. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7418` → after: `L7418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7418) · [Before (L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7418)

```diff
-             ZW.d.ScalingToRef(PW.x, PW.y, PW.z, WW);
+             KR.e.ScalingToRef(ZR.x, ZR.y, ZR.z, RR);
```

#### 842. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7421` → after: `L7421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7421) · [Before (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7421)

```diff
-           } else ZW.d.ComposeToRef(PW, LW, cW, this._localMatrix);
+           } else KR.e.ComposeToRef(ZR, qR, iR, this._localMatrix);
```

#### 843. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7427-L7429` → after: `L7427-L7429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7427-L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7427-L7429) · [Before (L7427-L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7427-L7429)

```diff
-               } else ZW.l.Matrix[7].HJ(NW.getWorldMatrix());
-               const iW = ZW.l.fA[5],
-                 OW = ZW.l.fA[6],
+               } else KR.l.Matrix[7].vN(uR.getWorldMatrix());
+               const JR = KR.l.Fe[5],
+                 GR = KR.l.Fe[6],
```

#### 844. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7431` → after: `L7431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7431) · [Before (L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7431)

```diff
-               ZW.l.Matrix[7].decompose(OW, mW, iW), ZW.d.ScalingToRef(OW.x, OW.y, OW.z, ZW.l.Matrix[7]), ZW.l.Matrix[7].setTranslation(iW), WW.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(mW, iW), this._localMatrix.setTranslation(iW)), this._local … [truncated]
+               KR.l.Matrix[7].decompose(GR, yR, JR), KR.e.ScalingToRef(GR.x, GR.y, GR.z, KR.l.Matrix[7]), KR.l.Matrix[7].setTranslation(JR), RR.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(yR, JR), this._localMatrix.setTranslation(JR)), this._local … [truncated]
```

#### 845. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7437` → after: `L7437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7437) · [Before (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7437)

```diff
-           } else this._worldMatrix.HJ(this._localMatrix);
+           } else this._worldMatrix.vN(this._localMatrix);
```

#### 846. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7440` → after: `L7440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7440) · [Before (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7440)

```diff
-               const iW = ZW.l.fA[0];
+               const JR = KR.l.Fe[0];
```

#### 847. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7444-L7445` → after: `L7444-L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7444-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7444-L7445) · [Before (L7444-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7444-L7445)

```diff
-               const EW = ZW.l.fA[1];
-               ZW.q.TransformCoordinatesToRef(mW, ZW.l.Matrix[1], EW), EW.normalize();
+               const tR = KR.l.Fe[1];
+               KR.r.TransformCoordinatesToRef(yR, KR.l.Matrix[1], tR), tR.normalize();
```

#### 848. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7449-L7453` → after: `L7449-L7453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7449-L7453) · [Before (L7449-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7449-L7453)

```diff
-               if (ZW.g.RotationYawPitchRollToRef(NW, LW, 0, ZW.l.Quaternion[0]), (this.billboardMode & WW.BILLBOARDMODE_ALL) !== WW.BILLBOARDMODE_ALL) {
-                 const iW = ZW.l.fA[1];
-                 ZW.l.Quaternion[0].toEulerAnglesToRef(iW), (this.billboardMode & WW.BILLBOARDMODE_X) !== WW.BILLBOARDMODE_X && (iW.x = 0), (this.billboardMode & WW.BILLBOARDMODE_Y) !== WW.BILLBOARDMODE_Y && (iW.y = 0), (this.billboardMode & WW.BILLBOARDMODE_Z) !== WW.BILLBOARDMOD … [truncated]
-               } else ZW.d.FromQuaternionToRef(ZW.l.Quaternion[0], ZW.l.Matrix[0]);
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(ZW.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(ZW.l.fA[0])
+               if (KR.i.RotationYawPitchRollToRef(uR, qR, 0, KR.l.Quaternion[0]), (this.billboardMode & RR.BILLBOARDMODE_ALL) !== RR.BILLBOARDMODE_ALL) {
+                 const JR = KR.l.Fe[1];
+                 KR.l.Quaternion[0].toEulerAnglesToRef(JR), (this.billboardMode & RR.BILLBOARDMODE_X) !== RR.BILLBOARDMODE_X && (JR.x = 0), (this.billboardMode & RR.BILLBOARDMODE_Y) !== RR.BILLBOARDMODE_Y && (JR.y = 0), (this.billboardMode & RR.BILLBOARDMODE_Z) !== RR.BILLBOARDMOD … [truncated]
+               } else KR.e.FromQuaternionToRef(KR.l.Quaternion[0], KR.l.Matrix[0]);
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(KR.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(KR.l.Fe[0])
```

#### 849. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7455-L7457` → after: `L7455-L7457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7455-L7457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7455-L7457) · [Before (L7455-L7457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7455-L7457)

```diff
-               const iW = ZW.l.fA[0];
-               this._worldMatrix.getTranslationToRef(iW), ZW.l.Matrix[1].HJ(OW.getViewMatrix());
-               const mW = this.bD().useRightHandedSystem;
+               const JR = KR.l.Fe[0];
+               this._worldMatrix.getTranslationToRef(JR), KR.l.Matrix[1].vN(GR.getViewMatrix());
+               const yR = this.jH().useRightHandedSystem;
```

#### 850. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7460-L7461` → after: `L7460-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7460-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7460-L7461) · [Before (L7460-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7460-L7461)

```diff
-                 const iW = ZW.l.fA[1];
-                 ZW.l.Quaternion[0].toEulerAnglesToRef(iW), (this.billboardMode & WW.BILLBOARDMODE_X) !== WW.BILLBOARDMODE_X && (iW.x = 0), (this.billboardMode & WW.BILLBOARDMODE_Y) !== WW.BILLBOARDMODE_Y && (iW.y = 0), (this.billboardMode & WW.BILLBOARDMODE_Z) !== WW.BILLBOARDMOD … [truncated]
+                 const JR = KR.l.Fe[1];
+                 KR.l.Quaternion[0].toEulerAnglesToRef(JR), (this.billboardMode & RR.BILLBOARDMODE_X) !== RR.BILLBOARDMODE_X && (JR.x = 0), (this.billboardMode & RR.BILLBOARDMODE_Y) !== RR.BILLBOARDMODE_Y && (JR.y = 0), (this.billboardMode & RR.BILLBOARDMODE_Z) !== RR.BILLBOARDMOD … [truncated]
```

#### 851. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7463-L7464` → after: `L7463-L7464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7463-L7464) · [Before (L7463-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7463-L7464)

```diff
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(ZW.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(ZW.l.fA[0])
-             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : NW && NW._nonUniformScaling ? this._updateNonUniformScalingState(NW._nonUniformScaling) : this._up … [truncated]
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(KR.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(KR.l.Fe[0])
+             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : uR && uR._nonUniformScaling ? this._updateNonUniformScalingState(uR._nonUniformScaling) : this._up … [truncated]
```

#### 852. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7477` → after: `L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7477) · [Before (L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7477)

```diff
-                 WW.decompose(OW.YZ, iW, OW.position), OW.rotationQuaternion ? OW.rotationQuaternion.HJ(iW) : iW.toEulerAnglesToRef(OW.rotation)
+                 RR.decompose(GR.MK, JR, GR.position), GR.rotationQuaternion ? GR.rotationQuaternion.vN(JR) : JR.toEulerAnglesToRef(GR.rotation)
```

#### 853. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7481` → after: `L7481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7481) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7481)

```diff
-           this.YZ.yWW(1, 1, 1), this.position.yWW(0, 0, 0), this.rotation.yWW(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = ZW.g.Identity()), this._worldMatrix = ZW.d.Identity()
+           this.MK.VJR(1, 1, 1), this.position.VJR(0, 0, 0), this.rotation.VJR(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = KR.i.Identity()), this._worldMatrix = KR.e.Identity()
```

#### 854. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7492` → after: `L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7492) · [Before (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7492)

```diff
-           return WW || (WW = this.bD().activeCamera), ZW.q.TransformCoordinates(this.getAbsolutePosition(), WW.getViewMatrix())
+           return RR || (RR = this.jH().activeCamera), KR.r.TransformCoordinates(this.getAbsolutePosition(), RR.getViewMatrix())
```

#### 855. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7496` → after: `L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7496) · [Before (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7496)

```diff
-           return WW || (WW = this.bD().activeCamera), this.getAbsolutePosition().subtract(WW.globalPosition).length()
+           return RR || (RR = this.jH().activeCamera), this.getAbsolutePosition().subtract(RR.globalPosition).length()
```

#### 856. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7499` → after: `L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7499) · [Before (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7499)

```diff
-           const EW = wW.d.Clone((() => new WW(iW, this.bD())), this);
+           const tR = fR.c.Clone((() => new RR(JR, this.jH())), this);
```

#### 857. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7510-L7511` → after: `L7510-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7510-L7511) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7510-L7511)

```diff
-           const iW = wW.d.Serialize(this, WW);
-           return iW.type = this.getClassName(), iW.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(iW), iW.localMatrix = this.getPivotMatrix().wEW(), iW.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (iW.dD = !0), wW.d.AppendSerializedAnimation … [truncated]
+           const JR = fR.c.Serialize(this, RR);
+           return JR.type = this.getClassName(), JR.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(JR), JR.localMatrix = this.getPivotMatrix().QtR(), JR.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (JR.yI = !0), fR.c.AppendSerializedAnimation … [truncated]
```

#### 858. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7519` → after: `L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7519) · [Before (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7519)

```diff
-           if (this.bD().stopAnimation(this), this.bD().removeTransformNode(this), this._parentContainer) {
+           if (this.jH().stopAnimation(this), this.jH().removeTransformNode(this), this._parentContainer) {
```

#### 859. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7535` → after: `L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7535) · [Before (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7535)

```diff
-           iW && (this.rotationQuaternion ? (EW = this.rotationQuaternion.clone(), this.rotationQuaternion.yWW(0, 0, 0, 1)) : this.rotation && (mW = this.rotation.clone(), this.rotation.yWW(0, 0, 0)));
+           JR && (this.rotationQuaternion ? (tR = this.rotationQuaternion.clone(), this.rotationQuaternion.VJR(0, 0, 0, 1)) : this.rotation && (yR = this.rotation.clone(), this.rotation.VJR(0, 0, 0)));
```

#### 860. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7541` → after: `L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7541) · [Before (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7541)

```diff
-           return this.YZ.scaleInPlace(cW), iW && (this.rotationQuaternion && EW ? this.rotationQuaternion.HJ(EW) : this.rotation && mW && this.rotation.HJ(mW)), this
+           return this.MK.scaleInPlace(iR), JR && (this.rotationQuaternion && tR ? this.rotationQuaternion.vN(tR) : this.rotation && yR && this.rotation.vN(yR)), this
```

#### 861. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7548` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7548) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7548)

```diff
-         iW = [(0, cW.K)("position")], OW = [(0, cW.K)("rotation")], mW = [(0, cW.C)("rotationQuaternion")], EW = [(0, cW.K)("YZ")], NW = [(0, cW.M)("billboardMode")], PW = [(0, cW.M)()], lW = [(0, cW.M)("infiniteDistance")], AW = [(0, cW.M)()], bW = [(0, cW.M)()], (0, LW.e)(null, … [truncated]
+         JR = [(0, iR.G)("position")], GR = [(0, iR.G)("rotation")], yR = [(0, iR.y)("rotationQuaternion")], tR = [(0, iR.G)("MK")], uR = [(0, iR.H)("billboardMode")], ZR = [(0, iR.H)()], rR = [(0, iR.H)("infiniteDistance")], eR = [(0, iR.H)()], aR = [(0, iR.H)()], (0, qR.l)(null, … [truncated]
```

#### 862. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7561` → after: `L7561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7561) · [Before (L7561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7561)

```diff
-         }, UW, kW), (0, LW.e)(null, null, OW, {
+         }, nR, UR), (0, qR.l)(null, null, GR, {
```

#### 863. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7574` → after: `L7574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7574) · [Before (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7574)

```diff
-         }, sW, MW), (0, LW.e)(null, null, mW, {
+         }, WR, AR), (0, qR.l)(null, null, yR, {
```

#### 864. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7587` → after: `L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7587) · [Before (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7587)

```diff
-         }, KW, SW), (0, LW.e)(null, null, EW, {
+         }, CR, XR), (0, qR.l)(null, null, tR, {
```

#### 865. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7600` → after: `L7600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7600) · [Before (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7600)

```diff
-         }, YW, yW), (0, LW.e)(null, null, NW, {
+         }, MR, BR), (0, qR.l)(null, null, uR, {
```

#### 866. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7613` → after: `L7613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7613) · [Before (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7613)

```diff
-         }, TW, JW), (0, LW.e)(null, null, PW, {
+         }, lR, pR), (0, qR.l)(null, null, ZR, {
```

#### 867. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7626` → after: `L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7626) · [Before (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7626)

```diff
-         }, hW, HW), (0, LW.e)(null, null, lW, {
+         }, gR, bR), (0, qR.l)(null, null, rR, {
```

#### 868. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7639` → after: `L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7639) · [Before (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7639)

```diff
-         }, nW, uW), (0, LW.e)(null, null, AW, {
+         }, vR, OR), (0, qR.l)(null, null, eR, {
```

#### 869. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7652` → after: `L7652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7652) · [Before (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7652)

```diff
-         }, oW, dW), (0, LW.e)(null, null, bW, {
+         }, xR, NR), (0, qR.l)(null, null, aR, {
```

#### 870. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7671` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7671) · [Before (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7671)

```diff
-       })(), WW.BILLBOARDMODE_NONE = 0, WW.BILLBOARDMODE_X = 1, WW.BILLBOARDMODE_Y = 2, WW.BILLBOARDMODE_Z = 4, WW.BILLBOARDMODE_ALL = 7, WW.BILLBOARDMODE_USE_POSITION = 128, WW.BillboardUseParentOrientation = !1, WW._TmpRotation = ZW.g.Zero(), WW._TmpScaling = ZW.q.Zero(), WW._Tm … [truncated]
+       })(), RR.BILLBOARDMODE_NONE = 0, RR.BILLBOARDMODE_X = 1, RR.BILLBOARDMODE_Y = 2, RR.BILLBOARDMODE_Z = 4, RR.BILLBOARDMODE_ALL = 7, RR.BILLBOARDMODE_USE_POSITION = 128, RR.BillboardUseParentOrientation = !1, RR._TmpRotation = KR.i.Zero(), RR._TmpScaling = KR.r.Zero(), RR._Tm … [truncated]
```

#### 871. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7675-L7676` → after: `L7675-L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7675-L7676) · [Before (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7675-L7676)

```diff
-       const mW = wW.d.Parse((() => new bW(WW.name, iW)), WW, iW, OW);
-       if (WW.localMatrix ? mW.setPreTransformMatrix(ZW.d.FromArray(WW.localMatrix)) : WW.pivotMatrix && mW.setPivotMatrix(ZW.d.FromArray(WW.pivotMatrix)), mW.WK(WW.isEnabled), mW._waitingParsedUniqueId = WW.uniqueId, void 0 !== WW.parentId && (mW._waitingParentId = WW.parentId),  … [truncated]
+       const yR = fR.c.Parse((() => new aR(RR.name, JR)), RR, JR, GR);
+       if (RR.localMatrix ? yR.setPreTransformMatrix(KR.e.FromArray(RR.localMatrix)) : RR.pivotMatrix && yR.setPivotMatrix(KR.e.FromArray(RR.pivotMatrix)), yR.JA(RR.isEnabled), yR._waitingParsedUniqueId = RR.uniqueId, void 0 !== RR.parentId && (yR._waitingParentId = RR.parentId),  … [truncated]
```

#### 872. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7679` → after: `L7679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7679) · [Before (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7679)

```diff
-             EW = (0, lW.d)("BABYLON.Animation");
+             tR = (0, rR.e)("BABYLON.Animation");
```

#### 873. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7690` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7690) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7690)

```diff
-     }(mW = bW.prototype).jB ?? (mW.jB = (0, AW.k)("TransformNode", "jB")), (EW = bW.prototype).applyImpulse ?? (EW.applyImpulse = (0, AW.k)("TransformNode", "applyImpulse")), (NW = bW.prototype).applyAngularImpulse ?? (NW.applyAngularImpulse = (0, AW.k)("TransformNode", "applyAng … [truncated]
+     }(yR = aR.prototype).Lk ?? (yR.Lk = (0, eR.f)("TransformNode", "Lk")), (tR = aR.prototype).applyImpulse ?? (tR.applyImpulse = (0, eR.f)("TransformNode", "applyImpulse")), (uR = aR.prototype).applyAngularImpulse ?? (uR.applyAngularImpulse = (0, eR.f)("TransformNode", "applyAng … [truncated]
```

#### 874. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7692` → after: `L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7692) · [Before (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7692)

```diff
-   41922: (WW, iW, OW) => {
+   41949: (RR, JR, GR) => {
```

#### 875. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L7748` → after: `L7747-L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R7747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L7747-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/286.js#L7747-L7748) · [Before (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/286.js#L7748)

```diff
-       g: () => PW
+       j: () => qR,
+       m: () => ZR
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/287.js` (1yqdn.8419f1e1 → 4udp6d.2845de07)

- **File**: `bundles/bloxd.io/chunks/js/287.js` (531 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1)

#### 1. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4)

```diff
-   41660: (WW, iW, OW) => {
+   41663: (RR, JR, GR) => {
```

#### 2. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6-L7)

```diff
-       b: () => LW,
-       c: () => bW,
+       d: () => qR,
```

#### 3. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L8-L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L9)

```diff
-       k: () => cW
+       i: () => fR,
+       l: () => iR
```

#### 4. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L11-L14` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L11-L14) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L11-L14)

```diff
-     var mW = OW(41453),
-       EW = OW(39911),
-       NW = OW(41582),
-       PW = OW(41484);
+     var yR = GR(41444),
+       tR = GR(39914),
+       uR = GR(41586),
+       ZR = GR(41491);
```

#### 5. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L26)

```diff
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, PW.b)(), WW && WW.bD ? this._engine = WW.bD().VA() : this._engine = WW, this._updatable = OW, this._instanced = LW, this._divisor = wW || 1, this._label = tW, iW instanceof mW.e ? (this._data = null, this._buffer = iW) … [truncated]
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, ZR.e)(), RR && RR.jH ? this._engine = RR.jH().ke() : this._engine = RR, this._updatable = GR, this._instanced = qR, this._divisor = fR || 1, this._label = VR, JR instanceof yR.b ? (this._data = null, this._buffer = JR) … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L31-L32` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L31-L32) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L31-L32)

```diff
-         const LW = NW ? iW : iW * Float32Array.BYTES_PER_ELEMENT,
-           wW = mW ? NW ? mW : mW * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         const qR = uR ? JR : JR * Float32Array.BYTES_PER_ELEMENT,
+           fR = yR ? uR ? yR : yR * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
```

#### 7. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L55-L56` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L55-L56) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L55-L56)

```diff
-           if (this._buffer.aZ > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.aZ, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.aZ, void 0, this._label));
-           EW.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+           if (this._buffer.hK > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.hK, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.hK, void 0, this._label));
+           tR.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
```

#### 8. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L64)

```diff
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, WW, mW ? iW : iW * Float32Array.BYTES_PER_ELEMENT, OW ? OW * this.byteStride : void 0), this._data = 0 === iW && void 0 === OW ? WW : null)
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, RR, yR ? JR : JR * Float32Array.BYTES_PER_ELEMENT, GR ? GR * this.byteStride : void 0), this._data = 0 === JR && void 0 === GR ? RR : null)
```

#### 9. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L98)

```diff
-         UW ? (this._size = lW || (PW ? PW / MW : wW(OW)), this.byteStride = PW || this._buffer.byteStride || this._size * MW, this.byteOffset = xW || 0) : (this._size = lW || PW || wW(OW), this.byteStride = PW ? PW * MW : this._buffer.byteStride || this._size * MW, this.byteOffse … [truncated]
+         nR ? (this._size = rR || (ZR ? ZR / AR : fR(GR)), this.byteStride = ZR || this._buffer.byteStride || this._size * AR, this.byteOffset = wR || 0) : (this._size = rR || ZR || fR(GR), this.byteStride = ZR ? ZR * AR : this._buffer.byteStride || this._size * AR, this.byteOffse … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L119)

```diff
-             throw new Error(`Invalid vertex buffer type '${WW}'`)
+             throw new Error(`Invalid vertex buffer type '${RR}'`)
```

#### 11. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L139)

```diff
-         return OW ? (0, NW.j)(OW, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, WW, iW) : null
+         return GR ? (0, uR.h)(GR, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, RR, JR) : null
```

#### 12. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L150)

```diff
-       DOW() {
+       MyR() {
```

#### 13. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L176)

```diff
-         (0, NW.f)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, WW, this.normalized, ((WW, OW) => {
+         (0, uR.e)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, RR, this.normalized, ((RR, GR) => {
```

#### 14. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L217)

```diff
-       (0, NW.f)(WW, iW, OW, mW, EW, PW, LW, ((WW, iW) => {
+       (0, uR.e)(RR, JR, GR, yR, tR, ZR, qR, ((RR, JR) => {
```

#### 15. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L223)

```diff
-       return (0, NW.j)(WW, iW, OW, mW, EW, PW, LW, cW)
+       return (0, uR.h)(RR, JR, GR, yR, tR, ZR, qR, iR)
```

#### 16. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L232)

```diff
-   41453: (WW, iW, OW) => {
+   41444: (RR, JR, GR) => {
```

#### 17. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L234` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L234) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L234)

```diff
-       e: () => mW
+       b: () => yR
```

#### 18. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L241)

```diff
-         this.references = 0, this.aZ = 0, this.is32Bits = !1, this.uniqueId = mW._Counter++
+         this.references = 0, this.hK = 0, this.is32Bits = !1, this.uniqueId = yR._Counter++
```

#### 19. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L246)

```diff
-   41653: (WW, iW, OW) => {
+   41659: (RR, JR, GR) => {
```

#### 20. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L248)

```diff
-       b: () => NW
+       e: () => uR
```

#### 21. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L250-L251` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L250-L251) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L250-L251)

```diff
-     var mW = OW(38241),
-       EW = OW(41660);
+     var yR = GR(38204),
+       tR = GR(41663);
```

#### 22. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L259-L260)

```diff
-         if (!this.pickedMesh || iW && !this.pickedMesh.isVerticesDataPresent(EW.k.NormalKind)) return null;
-         let OW, NW = this.pickedMesh.IEW();
+         if (!this.pickedMesh || JR && !this.pickedMesh.isVerticesDataPresent(tR.l.NormalKind)) return null;
+         let GR, uR = this.pickedMesh.NuR();
```

#### 23. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L262-L264` → after: `L262-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L262-L264) · [Before (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L262-L264)

```diff
-         const PW = mW.l.fA[0],
-           LW = mW.l.fA[1],
-           cW = mW.l.fA[2];
+         const ZR = yR.l.Fe[0],
+           qR = yR.l.Fe[1],
+           iR = yR.l.Fe[2];
```

#### 24. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L266-L270` → after: `L266-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L266-L270) · [Before (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L266-L270)

```diff
-           const WW = this.pickedMesh.getVerticesData(EW.k.NormalKind);
-           let iW = NW ? mW.q.FromArrayToRef(WW, 3 * NW[3 * this.faceId], PW) : PW.yWW(WW[3 * this.faceId * 3], WW[3 * this.faceId * 3 + 1], WW[3 * this.faceId * 3 + 2]),
-             wW = NW ? mW.q.FromArrayToRef(WW, 3 * NW[3 * this.faceId + 1], LW) : LW.yWW(WW[3 * (3 * this.faceId + 1)], WW[3 * (3 * this.faceId + 1) + 1], WW[3 * (3 * this.faceId + 1) + 2]),
-             tW = NW ? mW.q.FromArrayToRef(WW, 3 * NW[3 * this.faceId + 2], cW) : cW.yWW(WW[3 * (3 * this.faceId + 2)], WW[3 * (3 * this.faceId + 2) + 1], WW[3 * (3 * this.faceId + 2) + 2]);
-           iW = iW.scale(this.bu), wW = wW.scale(this.bv), tW = tW.scale(1 - this.bu - this.bv), OW = new mW.q(iW.x + wW.x + tW.x, iW.y + wW.y + tW.y, iW.z + wW.z + tW.z)
+           const RR = this.pickedMesh.getVerticesData(tR.l.NormalKind);
+           let JR = uR ? yR.r.FromArrayToRef(RR, 3 * uR[3 * this.faceId], ZR) : ZR.VJR(RR[3 * this.faceId * 3], RR[3 * this.faceId * 3 + 1], RR[3 * this.faceId * 3 + 2]),
+             fR = uR ? yR.r.FromArrayToRef(RR, 3 * uR[3 * this.faceId + 1], qR) : qR.VJR(RR[3 * (3 * this.faceId + 1)], RR[3 * (3 * this.faceId + 1) + 1], RR[3 * (3 * this.faceId + 1) + 2]),
+             VR = uR ? yR.r.FromArrayToRef(RR, 3 * uR[3 * this.faceId + 2], iR) : iR.VJR(RR[3 * (3 * this.faceId + 2)], RR[3 * (3 * this.faceId + 2) + 1], RR[3 * (3 * this.faceId + 2) + 2]);
+           JR = JR.scale(this.bu), fR = fR.scale(this.bv), VR = VR.scale(1 - this.bu - this.bv), GR = new yR.r(JR.x + fR.x + VR.x, JR.y + fR.y + VR.y, JR.z + fR.z + VR.z)
```

#### 25. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L272-L275` → after: `L272-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L272-L275) · [Before (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L272-L275)

```diff
-           const WW = this.pickedMesh.getVerticesData(EW.k.PositionKind),
-             iW = NW ? mW.q.FromArrayToRef(WW, 3 * NW[3 * this.faceId], PW) : PW.yWW(WW[3 * this.faceId * 3], WW[3 * this.faceId * 3 + 1], WW[3 * this.faceId * 3 + 2]),
-             wW = NW ? mW.q.FromArrayToRef(WW, 3 * NW[3 * this.faceId + 1], LW) : LW.yWW(WW[3 * (3 * this.faceId + 1)], WW[3 * (3 * this.faceId + 1) + 1], WW[3 * (3 * this.faceId + 1) + 2]),
-             tW = NW ? mW.q.FromArrayToRef(WW, 3 * NW[3 * this.faceId + 2], cW) : cW.yWW(WW[3 * (3 * this.faceId + 2)], WW[3 * (3 * this.faceId + 2) + 1], WW[3 * (3 * this.faceId + 2) + 2]),
+           const RR = this.pickedMesh.getVerticesData(tR.l.PositionKind),
+             JR = uR ? yR.r.FromArrayToRef(RR, 3 * uR[3 * this.faceId], ZR) : ZR.VJR(RR[3 * this.faceId * 3], RR[3 * this.faceId * 3 + 1], RR[3 * this.faceId * 3 + 2]),
+             fR = uR ? yR.r.FromArrayToRef(RR, 3 * uR[3 * this.faceId + 1], qR) : qR.VJR(RR[3 * (3 * this.faceId + 1)], RR[3 * (3 * this.faceId + 1) + 1], RR[3 * (3 * this.faceId + 1) + 2]),
+             VR = uR ? yR.r.FromArrayToRef(RR, 3 * uR[3 * this.faceId + 2], iR) : iR.VJR(RR[3 * (3 * this.faceId + 2)], RR[3 * (3 * this.faceId + 2) + 1], RR[3 * (3 * this.faceId + 2) + 2]),
```

#### 26. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L278)

```diff
-           OW = mW.q.Cross(ZW, xW)
+           GR = yR.r.Cross(KR, wR)
```

#### 27. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L286)

```diff
-               mW.d.FromArrayToRef(OW, EW, WW), mW.q.TransformNormalToRef(iW, WW, iW)
+               yR.e.FromArrayToRef(GR, tR, RR), yR.r.TransformNormalToRef(JR, RR, JR)
```

#### 28. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L290)

```diff
-           WW.nonUniformScaling && (mW.l.Matrix[0].HJ(OW), OW = mW.l.Matrix[0], OW.setTranslationFromFloats(0, 0, 0), OW.invert(), OW.transposeToRef(mW.l.Matrix[1]), OW = mW.l.Matrix[1]), mW.q.TransformNormalToRef(iW, OW, iW)
+           RR.nonUniformScaling && (yR.l.Matrix[0].vN(GR), GR = yR.l.Matrix[0], GR.setTranslationFromFloats(0, 0, 0), GR.invert(), GR.transposeToRef(yR.l.Matrix[1]), GR = yR.l.Matrix[1]), yR.r.TransformNormalToRef(JR, GR, JR)
```

#### 29. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L293-L294` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L293-L294) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L293-L294)

```diff
-           const iW = mW.l.fA[0].HJ(OW);
-           WW || wW(this.pickedMesh, iW), mW.q.Dot(iW, this.ray.direction) > 0 && OW.negateInPlace()
+           const JR = yR.l.Fe[0].vN(GR);
+           RR || fR(this.pickedMesh, JR), yR.r.Dot(JR, this.ray.direction) > 0 && GR.negateInPlace()
```

#### 30. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L299)

```diff
-         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EW.k.UVKind;
+         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tR.l.UVKind;
```

#### 31. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L301)

```diff
-         const iW = this.pickedMesh.IEW();
+         const JR = this.pickedMesh.NuR();
```

#### 32. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L305-L308` → after: `L305-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L305-L308) · [Before (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L305-L308)

```diff
-         let NW = mW.m.FromArray(OW, 2 * iW[3 * this.faceId]),
-           PW = mW.m.FromArray(OW, 2 * iW[3 * this.faceId + 1]),
-           LW = mW.m.FromArray(OW, 2 * iW[3 * this.faceId + 2]);
-         return NW = NW.scale(this.bu), PW = PW.scale(this.bv), LW = LW.scale(1 - this.bu - this.bv), new mW.m(NW.x + PW.x + LW.x, NW.y + PW.y + LW.y)
+         let uR = yR.n.FromArray(GR, 2 * JR[3 * this.faceId]),
+           ZR = yR.n.FromArray(GR, 2 * JR[3 * this.faceId + 1]),
+           qR = yR.n.FromArray(GR, 2 * JR[3 * this.faceId + 2]);
+         return uR = uR.scale(this.bu), ZR = ZR.scale(this.bv), qR = qR.scale(1 - this.bu - this.bv), new yR.n(uR.x + ZR.x + qR.x, uR.y + ZR.y + qR.y)
```

#### 33. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L312)

```diff
-   41484: (WW, iW, OW) => {
+   41491: (RR, JR, GR) => {
```

#### 34. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L314` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L314) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L314)

```diff
-       b: () => NW
+       e: () => uR
```

#### 35. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L316)

```diff
-     var mW = OW(41384);
+     var yR = GR(41375);
```

#### 36. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L322)

```diff
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(WW), OW = WW.is32Bits ? iW instanceof Uint32Array ? iW : new Uint32Array(iW) : iW instanceof Uint16Array ? iW : new Uint16Array(iW), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, OW, … [truncated]
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(RR), GR = RR.is32Bits ? JR instanceof Uint32Array ? JR : new Uint32Array(JR) : JR instanceof Uint16Array ? JR : new Uint16Array(JR), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, GR, … [truncated]
```

#### 37. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L330)

```diff
-   41463: (WW, iW, OW) => {
+   41457: (RR, JR, GR) => {
```

#### 38. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L332)

```diff
-       c: () => mW
+       e: () => yR
```

#### 39. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L369)

```diff
-   41423: (WW, iW, OW) => {
+   41418: (RR, JR, GR) => {
```

#### 40. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L371)

```diff
-       b: () => kW
+       c: () => UR
```

#### 41. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L373-L378` → after: `L373-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L373-L378) · [Before (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L373-L378)

```diff
-     var mW = OW(38276),
-       EW = OW(41389),
-       NW = OW(38270),
-       PW = OW(39911),
-       LW = OW(38262),
-       cW = OW(41431);
+     var yR = GR(38233),
+       tR = GR(41382),
+       uR = GR(38224),
+       ZR = GR(39914),
+       qR = GR(38219),
+       iR = GR(41425);
```

#### 42. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L612-L616` → after: `L612-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L612-L616) · [Before (L612-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L612-L616)

```diff
-     var xW = OW(41433),
-       lW = OW(41415),
-       AW = OW(41371),
-       bW = OW(41406),
-       jW = OW(41412);
+     var wR = GR(41429),
+       rR = GR(41407),
+       eR = GR(41364),
+       aR = GR(41395),
+       LR = GR(41399);
```

#### 43. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L625)

```diff
-       if ((0, bW.j)()) {
+       if ((0, aR.m)()) {
```

#### 44. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L652)

```diff
-       get nmW() {
+       get LtR() {
```

#### 45. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L655)

```diff
-       set nmW(WW) {
+       set LtR(RR) {
```

#### 46. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L677)

```diff
-         if (WW) return this.isNDCHalfZRange ? WW.IS_NDC_HALF_ZRANGE = "" : delete WW.IS_NDC_HALF_ZRANGE, this.nmW ? WW.USE_REVERSE_DEPTHBUFFER = "" : delete WW.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? WW.USE_EXACT_SRGB_CONVERSIONS = "" : delete WW.USE_EXACT_SR … [truncated]
+         if (RR) return this.isNDCHalfZRange ? RR.IS_NDC_HALF_ZRANGE = "" : delete RR.IS_NDC_HALF_ZRANGE, this.LtR ? RR.USE_REVERSE_DEPTHBUFFER = "" : delete RR.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? RR.USE_EXACT_SRGB_CONVERSIONS = "" : delete RR.USE_EXACT_SR … [truncated]
```

#### 47. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L680` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L680) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L680)

```diff
-           return this.isNDCHalfZRange && (WW += "#define IS_NDC_HALF_ZRANGE"), this.nmW && (WW && (WW += "\n"), WW += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (WW && (WW += "\n"), WW += "#define USE_EXACT_SRGB_CONVERSIONS"), WW
+           return this.isNDCHalfZRange && (RR += "#define IS_NDC_HALF_ZRANGE"), this.LtR && (RR && (RR += "\n"), RR += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (RR && (RR += "\n"), RR += "#define USE_EXACT_SRGB_CONVERSIONS"), RR
```

#### 48. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L696)

```diff
-         EW.e.ResetCache()
+         tR.d.ResetCache()
```

#### 49. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L702` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L702) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L702)

```diff
-         PW.b.Warn(this.name + " context successfully restored."), this.DA.notifyObservers(this), this._contextWasLost = !1
+         ZR.c.Warn(this.name + " context successfully restored."), this.Ye.notifyObservers(this), this._contextWasLost = !1
```

#### 50. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L763)

```diff
-             WW && WW(this.customAnimationFrameRequester.CA), delete this.customAnimationFrameRequester.CA
+             RR && RR(this.customAnimationFrameRequester.Te), delete this.customAnimationFrameRequester.Te
```

#### 51. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L767)

```diff
-           if (this._frameHandler = 0, (0, bW.j)()) {
+           if (this._frameHandler = 0, (0, aR.m)()) {
```

#### 52. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L796)

```diff
-           (this.Ay || !this.renderEvenInBackground && this._windowIsBackground) && (WW = !1), WW && (this.AY(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.SZ())
+           (this.oB || !this.renderEvenInBackground && this._windowIsBackground) && (RR = !1), RR && (this.yX(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.XK())
```

#### 53. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L814)

```diff
-         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.CA = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.C … [truncated]
+         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Te = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.T … [truncated]
```

#### 54. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L826)

```diff
-         this._depthCullingState.zOffset = this.nmW ? -WW : WW
+         this._depthCullingState.zOffset = this.LtR ? -RR : RR
```

#### 55. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L830` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L830) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L830)

```diff
-         return this.nmW ? -WW : WW
+         return this.LtR ? -RR : RR
```

#### 56. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L833)

```diff
-         this._depthCullingState.zOffsetUnits = this.nmW ? -WW : WW
+         this._depthCullingState.zOffsetUnits = this.LtR ? -RR : RR
```

#### 57. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L837)

```diff
-         return this.nmW ? -WW : WW
+         return this.LtR ? -RR : RR
```

#### 58. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L840)

```diff
-         return (0, bW.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
+         return (0, aR.m)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
```

#### 59. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L891` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L891) · [Before (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L891)

```diff
-           YW = xW || new AW.e(this, 1);
+           MR = wR || new eR.b(this, 1);
```

#### 60. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L903)

```diff
-           mW && mW.removePendingData(YW), WW === yW ? (HW && YW.onLoadedObservable.remove(HW), NW.d.UseFallbackTexture && WW !== NW.d.FallbackTexture && this._createTextureBase(NW.d.FallbackTexture, iW, YW.invertY, mW, EW, null, cW, wW, tW, ZW, YW), OW = (OW || "Unknown error") + … [truncated]
+           yR && yR.removePendingData(MR), RR === BR ? (bR && MR.onLoadedObservable.remove(bR), uR.c.UseFallbackTexture && RR !== uR.c.FallbackTexture && this._createTextureBase(uR.c.FallbackTexture, JR, MR.invertY, yR, tR, null, iR, fR, VR, KR, MR), GR = (GR || "Unknown error") + … [truncated]
```

#### 61. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L906)

```diff
-           }), cW && cW(OW, xW)) : (PW.b.Warn(`Failed to load ${WW}, falling back to ${yW}`), this._createTextureBase(yW, iW, YW.invertY, mW, EW, LW, cW, wW, tW, ZW, YW, lW, bW, jW, UW, sW))
+           }), iR && iR(GR, wR)) : (ZR.c.Warn(`Failed to load ${RR}, falling back to ${BR}`), this._createTextureBase(BR, JR, MR.invertY, yR, tR, qR, iR, fR, VR, KR, MR, rR, aR, LR, nR, WR))
```

#### 62. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L954)

```diff
-         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, bW.f)() ? document : null
+         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, aR.e)() ? document : null
```

#### 63. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1009)

```diff
-         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new wW, this._stencilStateComposer = new tW, this._stencilState = new ZW, this._alphaState = new xW.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
+         this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new fR, this._stencilStateComposer = new VR, this._stencilState = new KR, this._alphaState = new wR.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._ac … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1014)

```diff
-         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new mW.e, this.onCanvasFocusObservable = new mW.e, this.onNewSceneAddedObservable = new mW.e, this.onResizeObservable = new mW.e, this.onCanvasPointerOutObservable = new mW.e, this.onE … [truncated]
+         }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new yR.b, this.onCanvasFocusObservable = new yR.b, this.onNewSceneAddedObservable = new yR.b, this.onResizeObservable = new yR.b, this.onCanvasPointerOutObservable = new yR.b, this.onE … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1016-L1017` → after: `L1016-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1016-L1017) · [Before (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1016-L1017)

```diff
-         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
-         const EW = (0, bW.j)() && window.devicePixelRatio || 1,
+         }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDep … [truncated]
+         const tR = (0, aR.m)() && window.devicePixelRatio || 1,
```

#### 66. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1024)

```diff
-           const WW = (0, bW.j)() && window.devicePixelRatio || 1,
+           const RR = (0, aR.m)() && window.devicePixelRatio || 1,
```

#### 67. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1028)

```diff
-         if ((0, bW.j)() && (0, bW.f)())
+         if ((0, aR.m)() && (0, aR.e)())
```

#### 68. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1052` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1052) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1052)

```diff
-         throw (0, lW.o)("engine.rawTexture")
+         throw (0, rR.j)("engine.rawTexture")
```

#### 69. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1055` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1055) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1055)

```diff
-         throw (0, lW.o)("engine.rawTexture")
+         throw (0, rR.j)("engine.rawTexture")
```

#### 70. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1058)

```diff
-         throw (0, lW.o)("engine.rawTexture")
+         throw (0, rR.j)("engine.rawTexture")
```

#### 71. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1061)

```diff
-         throw (0, lW.o)("engine.rawTexture")
+         throw (0, rR.j)("engine.rawTexture")
```

#### 72. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1069-L1070` → after: `L1069-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1069-L1070) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1069-L1070)

```diff
-           this.hostInformation.isMobile = -1 !== WW.indexOf("Mobile") || -1 !== WW.indexOf("Mac") && (0, bW.f)() && "ontouchend" in document
-         }, this._checkForMobile(), (0, bW.j)() && window.addEventListener("resize", this._checkForMobile))
+           this.hostInformation.isMobile = -1 !== RR.indexOf("Mobile") || -1 !== RR.indexOf("Mac") && (0, aR.e)() && "ontouchend" in document
+         }, this._checkForMobile(), (0, aR.m)() && window.addEventListener("resize", this._checkForMobile))
```

#### 73. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1115-L1116` → after: `L1115-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1115-L1116) · [Before (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1115-L1116)

```diff
-         if (!jW.e.loadImage) throw (0, lW.o)("FileTools");
-         return jW.e.loadImage(WW, iW, OW, mW, EW, NW, PW)
+         if (!LR.d.loadImage) throw (0, rR.j)("FileTools");
+         return LR.d.loadImage(RR, JR, GR, yR, tR, uR, ZR)
```

#### 74. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1119` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1119) · [Before (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1119)

```diff
-         const PW = (0, jW.l)(WW, iW, OW, mW, EW, NW);
+         const ZR = (0, LR.k)(RR, JR, GR, yR, tR, uR);
```

#### 75. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1125-L1126` → after: `L1125-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1125-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1125-L1126) · [Before (L1125-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1125-L1126)

```diff
-         if (jW.e.loadFile) return jW.e.loadFile(WW, iW, OW, mW, EW, NW);
-         throw (0, lW.o)("FileTools")
+         if (LR.d.loadFile) return LR.d.loadFile(RR, JR, GR, yR, tR, uR);
+         throw (0, rR.j)("FileTools")
```

#### 76. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1132` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1132) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1132)

```diff
-         this.releaseComputeEffects?.(), EW.e.ResetCache();
+         this.releaseComputeEffects?.(), tR.d.ResetCache();
```

#### 77. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1134-L1136` → after: `L1134-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1134-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1134-L1136) · [Before (L1134-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1134-L1136)

```diff
-         this._boundRenderFunction = null, this.jD.notifyObservers(this), this.jD.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
-         const WW = NW.d.Instances.indexOf(this);
-         WW >= 0 && NW.d.Instances.splice(WW, 1), NW.d.Instances.length || (NW.d.OnEnginesDisposedObservable.notifyObservers(this), NW.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservabl … [truncated]
+         this._boundRenderFunction = null, this.YH.notifyObservers(this), this.YH.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), … [truncated]
+         const RR = uR.c.Instances.indexOf(this);
+         RR >= 0 && uR.c.Instances.splice(RR, 1), uR.c.Instances.length || (uR.c.OnEnginesDisposedObservable.notifyObservers(this), uR.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservabl … [truncated]
```

#### 78. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1139)

```diff
-         throw (0, lW.o)("LoadingScreen")
+         throw (0, rR.j)("LoadingScreen")
```

#### 79. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1142-L1143` → after: `L1142-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1142-L1143) · [Before (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1142-L1143)

```diff
-         for (let OW = 0; OW < NW.d.Instances.length; OW++) {
-           const mW = NW.d.Instances[OW];
+         for (let GR = 0; GR < uR.c.Instances.length; GR++) {
+           const yR = uR.c.Instances[GR];
```

#### 80. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1153` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1153) · [Before (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1153)

```diff
-   41392: (WW, iW, OW) => {
+   41387: (RR, JR, GR) => {
```

#### 81. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1155` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1155) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1155)

```diff
-       c: () => mW
+       b: () => yR
```

#### 82. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1170)

```diff
-   41408: (WW, iW, OW) => {
+   41397: (RR, JR, GR) => {
```

#### 83. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1173-L1176` → after: `L1173-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1173-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1173-L1176) · [Before (L1173-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1173-L1176)

```diff
-       h: () => sW,
-       l: () => AW,
-       p: () => lW,
-       q: () => bW,
+       g: () => WR,
+       k: () => eR,
+       n: () => rR,
+       o: () => aR,
```

#### 84. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1180-L1182` → after: `L1179-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1179-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1179-L1182) · [Before (L1180-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1180-L1182)

```diff
-       x: () => tW,
-       y: () => cW,
-       A: () => LW
+       z: () => fR,
+       C: () => VR,
+       E: () => iR,
+       H: () => qR
```

#### 85. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1222)

```diff
-         const EW = iW.wEW();
+         const tR = JR.QtR();
```

#### 86. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1318` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1318) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1318)

```diff
-         this._cacheMatrix(WW, iW) && (this.engine.setMatrices(this._uniforms[WW], iW.wEW()) || (this._valueCache[WW] = null))
+         this._cacheMatrix(RR, JR) && (this.engine.setMatrices(this._uniforms[RR], JR.QtR()) || (this._valueCache[RR] = null))
```

#### 87. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1367)

```diff
-     var EW = OW(41412);
+     var tR = GR(41399);
```

#### 88. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1465)

```diff
-       return UW((0, EW.h)(WW, OW, mW), iW, NW, PW)
+       return nR((0, tR.f)(RR, GR, yR), JR, uR, ZR)
```

#### 89. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1474)

```diff
-         throw new Error(`Something went wrong while creating a gl ${iW} shader object. gl error=${EW}, gl isContextLost=${OW.isContextLost()}, _contextWasLost=${mW}`)
+         throw new Error(`Something went wrong while creating a gl ${JR} shader object. gl error=${tR}, gl isContextLost=${GR.isContextLost()}, _contextWasLost=${yR}`)
```

#### 90. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1492)

```diff
-   41384: (WW, iW, OW) => {
+   41375: (RR, JR, GR) => {
```

#### 91. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1496-L1501` → after: `L1496-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1496-L1501) · [Before (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1496-L1501)

```diff
-     var mW = OW(41389),
-       EW = OW(41408),
-       NW = OW(41423),
-       PW = OW(41439),
-       LW = OW(39911),
-       cW = OW(41406);
+     var yR = GR(41382),
+       tR = GR(41397),
+       uR = GR(41418),
+       ZR = GR(41436),
+       qR = GR(39914),
+       iR = GR(41395);
```

#### 92. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1542-L1549` → after: `L1542-L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1542-L1549) · [Before (L1542-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1542-L1549)

```diff
-     var xW = OW(41446),
-       lW = OW(41458),
-       AW = OW(41463),
-       bW = OW(41371),
-       jW = OW(41412),
-       UW = OW(41401),
-       kW = OW(41467),
-       sW = OW(41433);
+     var wR = GR(41441),
+       rR = GR(41449),
+       eR = GR(41457),
+       aR = GR(41364),
+       LR = GR(41399),
+       nR = GR(41393),
+       UR = GR(41466),
+       WR = GR(41429);
```

#### 93. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1551` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1551) · [Before (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1551)

```diff
-     class KW extends NW.b {
+     class CR extends uR.c {
```

#### 94. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1562` → after: `L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1562) · [Before (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1562)

```diff
-         return mW.e.ShadersRepository
+         return yR.d.ShadersRepository
```

#### 95. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1565` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1565) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1565)

```diff
-         mW.e.ShadersRepository = WW
+         yR.d.ShadersRepository = RR
```

#### 96. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1568` → after: `L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1568) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1568)

```diff
-         return this.bb > 1 && !this.disableUniformBuffers
+         return this.Ma > 1 && !this.disableUniformBuffers
```

#### 97. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1615)

```diff
-               (0, EW.y)(this._gl)
+               (0, tR.E)(this._gl)
```

#### 98. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1617)

```diff
-               WW.preventDefault(), this._contextWasLost = !0, (0, EW.y)(this._gl), LW.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
+               RR.preventDefault(), this._contextWasLost = !0, (0, tR.E)(this._gl), qR.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
```

#### 99. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1641-L1644` → after: `L1641-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1641-L1644) · [Before (L1641-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1641-L1644)

```diff
-         this._shaderProcessor = this.bb > 1 ? new ZW : new wW;
-         const PW = `Babylon.js v${KW.Version}`;
-         LW.b.Log(PW + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", PW);
-         const cW = (0, EW.A)(this._gl);
+         this._shaderProcessor = this.Ma > 1 ? new KR : new fR;
+         const ZR = `Babylon.js v${CR.Version}`;
+         qR.c.Log(ZR + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", ZR);
+         const iR = (0, tR.H)(this._gl);
```

#### 100. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1727` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1727) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1727)

```diff
-         if (this._caps.blendParametersPerTarget = !!iW, this._alphaState = new sW.c(this._caps.blendParametersPerTarget), iW && (this._gl.blendEquationSeparateIndexed = iW.blendEquationSeparateiOES.bind(iW), this._gl.blendEquationIndexed = iW.blendEquationiOES.bind(iW), this._gl. … [truncated]
+         if (this._caps.blendParametersPerTarget = !!JR, this._alphaState = new WR.d(this._caps.blendParametersPerTarget), JR && (this._gl.blendEquationSeparateIndexed = JR.blendEquationSeparateiOES.bind(JR), this._gl.blendEquationIndexed = JR.blendEquationiOES.bind(JR), this._gl. … [truncated]
```

#### 101. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1861)

```diff
-             if (void 0 !== OW && (0, kW.i)(OW)) {
+             if (void 0 !== GR && (0, UR.k)(GR)) {
```

#### 102. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1863` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1863) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1863)

```diff
-               void 0 !== OW && (0, kW.m)(OW) ? (KW._TempClearColorUint32[0] = 255 * WW.r, KW._TempClearColorUint32[1] = 255 * WW.g, KW._TempClearColorUint32[2] = 255 * WW.b, KW._TempClearColorUint32[3] = 255 * WW.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, KW._TempClearColorUin … [truncated]
+               void 0 !== GR && (0, UR.n)(GR) ? (CR._TempClearColorUint32[0] = 255 * RR.r, CR._TempClearColorUint32[1] = 255 * RR.g, CR._TempClearColorUint32[2] = 255 * RR.b, CR._TempClearColorUint32[3] = 255 * RR.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, CR._TempClearColorUin … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1868` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1868) · [Before (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1868)

```diff
-         OW && (this.nmW ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), PW |= this._gl.DEPTH_BUFFER_BIT), mW && (this._gl.clearStencil(EW), PW |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(PW)
+         GR && (this.LtR ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), ZR |= this._gl.DEPTH_BUFFER_BIT), yR && (this._gl.clearStencil(tR), ZR |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(ZR)
```

#### 104. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1871-L1872` → after: `L1871-L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1871-L1872) · [Before (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1871-L1872)

```diff
-         if ((0, kW.i)(OW)) {
-           const OW = (0, kW.m)(mW),
+         if ((0, UR.k)(GR)) {
+           const GR = (0, UR.n)(yR),
```

#### 105. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1882)

```diff
-         super.SZ(), this._badOS && this.flushFramebuffer()
+         super.XK(), this._badOS && this.flushFramebuffer()
```

#### 106. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1895` → after: `L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1895) · [Before (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1895)

```diff
-         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = WW, this._integerMRTAttachmentsMask = !WW.isMulti && WW.texture && (0, kW.i)(WW.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(cW._frameb … [truncated]
+         this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = RR, this._integerMRTAttachmentsMask = !RR.isMulti && RR.texture && (0, UR.k)(RR.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(iR._frameb … [truncated]
```

#### 107. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1900)

```diff
-           WW.is3D && (WW.texture.width === tW.width && WW.texture.height === tW.height && WW.texture.depth === tW.depth || LW.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
+           RR.is3D && (RR.texture.width === VR.width && RR.texture.height === VR.height && RR.texture.depth === VR.depth || qR.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
```

#### 108. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1964-L1965` → after: `L1964-L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1964-L1965) · [Before (L1964-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1964-L1965)

```diff
-         const mW = new xW.b(OW);
-         return this.bindArrayBuffer(mW), "number" !== typeof WW ? WW instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(WW), iW), mW.aZ = 4 * WW.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, WW, iW), mW.aZ = WW.byteLength) : (this._gl.bufferDa … [truncated]
+         const yR = new wR.d(GR);
+         return this.bindArrayBuffer(yR), "number" !== typeof RR ? RR instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(RR), JR), yR.hK = 4 * RR.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, RR, JR), yR.hK = RR.byteLength) : (this._gl.bufferDa … [truncated]
```

#### 109. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L1975)

```diff
-           EW = new xW.b(mW);
+           tR = new wR.d(yR);
```

#### 110. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2165)

```diff
-         return (0, jW.k)(WW, this.isNDCHalfZRange, this.nmW, this.useExactSrgbConversions)
+         return (0, LR.j)(RR, this.isNDCHalfZRange, this.LtR, this.useExactSrgbConversions)
```

#### 111. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2170-L2171` → after: `L2170-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2170-L2171) · [Before (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2170-L2171)

```diff
-         const lW = "string" === typeof WW ? WW : WW.vertexToken || WW.vertexSource || WW.vertexElement || WW.vertex,
-           AW = "string" === typeof WW ? WW : WW.fragmentToken || WW.fragmentSource || WW.fragmentElement || WW.fragment,
+         const rR = "string" === typeof RR ? RR : RR.vertexToken || RR.vertexSource || RR.vertexElement || RR.vertex,
+           eR = "string" === typeof RR ? RR : RR.fragmentToken || RR.fragmentSource || RR.fragmentElement || RR.fragment,
```

#### 112. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2181-L2182` → after: `L2181-L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2181-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2181-L2182) · [Before (L2181-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2181-L2182)

```diff
-         this._gl && (0, EW.A)(this._gl);
-         const sW = new mW.e(WW, iW, jW ? this : OW, NW, this, PW, LW, cW, wW, tW, kW, iW.shaderLanguage ?? ZW, iW.extraInitializationsAsync ?? xW);
+         this._gl && (0, tR.H)(this._gl);
+         const WR = new yR.d(RR, JR, LR ? this : GR, uR, this, ZR, qR, iR, fR, VR, UR, JR.shaderLanguage ?? KR, JR.extraInitializationsAsync ?? wR);
```

#### 113. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2190-L2191` → after: `L2190-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2190-L2191) · [Before (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2190-L2191)

```diff
-         const PW = (0, EW.A)(this._gl);
-         return PW._contextWasLost = this._contextWasLost, PW.validateShaderPrograms = this.validateShaderPrograms, (0, EW.v)(WW, iW, OW, mW || this._gl, NW)
+         const ZR = (0, tR.H)(this._gl);
+         return ZR._contextWasLost = this._contextWasLost, ZR.validateShaderPrograms = this.validateShaderPrograms, (0, tR.z)(RR, JR, GR, yR || this._gl, uR)
```

#### 114. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2195-L2196` → after: `L2195-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2195-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2195-L2196) · [Before (L2195-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2195-L2196)

```diff
-         const LW = (0, EW.A)(this._gl);
-         return LW._contextWasLost = this._contextWasLost, LW.validateShaderPrograms = this.validateShaderPrograms, (0, EW.x)(WW, iW, OW, mW, NW || this._gl, PW)
+         const qR = (0, tR.H)(this._gl);
+         return qR._contextWasLost = this._contextWasLost, qR.validateShaderPrograms = this.validateShaderPrograms, (0, tR.C)(RR, JR, GR, yR, uR || this._gl, ZR)
```

#### 115. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2203` → after: `L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2203) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2203)

```diff
-           (0, EW.A)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
+           (0, tR.H)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
```

#### 116. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2205` → after: `L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2205) · [Before (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2205)

```diff
-         const iW = (0, EW.t)(this._gl, WW);
+         const JR = (0, tR.v)(this._gl, RR);
```

#### 117. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2211)

```diff
-         return (0, EW.l)(WW, this._gl, this.validateShaderPrograms)
+         return (0, tR.k)(RR, this._gl, this.validateShaderPrograms)
```

#### 118. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2214-L2215` → after: `L2214-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2214-L2215) · [Before (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2214-L2215)

```diff
-         const xW = (0, EW.A)(this._gl);
-         return xW._contextWasLost = this._contextWasLost, xW.validateShaderPrograms = this.validateShaderPrograms, xW._createShaderProgramInjection = this._createShaderProgram.bind(this), xW.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), xW.createShader … [truncated]
+         const wR = (0, tR.H)(this._gl);
+         return wR._contextWasLost = this._contextWasLost, wR.validateShaderPrograms = this.validateShaderPrograms, wR._createShaderProgramInjection = this._createShaderProgram.bind(this), wR.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), wR.createShader … [truncated]
```

#### 119. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2222` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2222) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2222)

```diff
-         return !this._isDisposed && (0, EW.p)(WW, this._gl, this.validateShaderPrograms)
+         return !this._isDisposed && (0, tR.n)(RR, this._gl, this.validateShaderPrograms)
```

#### 120. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2225` → after: `L2225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2225) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2225)

```diff
-         (0, EW.h)(WW, iW)
+         (0, tR.g)(RR, JR)
```

#### 121. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2394` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2394) · [Before (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2394)

```diff
-         return new AW.c(this._createTexture(), this._gl)
+         return new eR.e(this._createTexture(), this._gl)
```

#### 122. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2407-L2409` → after: `L2407-L2409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2407-L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2407-L2409) · [Before (L2407-L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2407-L2409)

```diff
-         void 0 !== iW && "object" === typeof iW ? (OW = !!iW.generateMipMaps, NW = !!iW.createMipMaps, PW = void 0 === iW.type ? 0 : iW.type, cW = void 0 === iW.samplingMode ? 3 : iW.samplingMode, wW = void 0 === iW.format ? 5 : iW.format, tW = void 0 !== iW.useSRGBBuffer && iW.u … [truncated]
-         const jW = (0, kW.e)(wW),
-           UW = (0, kW.c)(wW),
+         void 0 !== JR && "object" === typeof JR ? (GR = !!JR.generateMipMaps, uR = !!JR.createMipMaps, ZR = void 0 === JR.type ? 0 : JR.type, iR = void 0 === JR.samplingMode ? 3 : JR.samplingMode, fR = void 0 === JR.format ? 5 : JR.format, VR = void 0 !== JR.useSRGBBuffer && JR.u … [truncated]
+         const LR = (0, UR.g)(fR),
+           nR = (0, UR.d)(fR),
```

#### 123. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2411` → after: `L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2411) · [Before (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2411)

```diff
-           MW = new bW.e(this, EW),
+           AR = new aR.b(this, tR),
```

#### 124. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2427` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2427) · [Before (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2427)

```diff
-         if (sW.texParameteri(JW, sW.TEXTURE_MAG_FILTER, TW.mag), sW.texParameteri(JW, sW.TEXTURE_MIN_FILTER, TW.min), sW.texParameteri(JW, sW.TEXTURE_WRAP_S, sW.CLAMP_TO_EDGE), sW.texParameteri(JW, sW.TEXTURE_WRAP_T, sW.CLAMP_TO_EDGE), jW && this.bb > 1 && (0 === lW ? (sW.texPara … [truncated]
+         if (WR.texParameteri(pR, WR.TEXTURE_MAG_FILTER, lR.mag), WR.texParameteri(pR, WR.TEXTURE_MIN_FILTER, lR.min), WR.texParameteri(pR, WR.TEXTURE_WRAP_S, WR.CLAMP_TO_EDGE), WR.texParameteri(pR, WR.TEXTURE_WRAP_T, WR.CLAMP_TO_EDGE), LR && this.Ma > 1 && (0 === rR ? (WR.texPara … [truncated]
```

#### 125. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2429` → after: `L2429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2429) · [Before (L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2429)

```diff
-           if (WW = (0, kW.e)(MW.format) ? this._setupFramebufferDepthAttachments((0, kW.c)(MW.format), 19 !== MW.format, MW.width, MW.height, ZW, MW.format, !0) : this._createRenderBuffer(MW.width, MW.height, ZW, -1, this._getRGBABufferInternalSizedFormat(MW.type, MW.format, MW._ … [truncated]
+           if (RR = (0, UR.g)(AR.format) ? this._setupFramebufferDepthAttachments((0, UR.d)(AR.format), 19 !== AR.format, AR.width, AR.height, KR, AR.format, !0) : this._createRenderBuffer(AR.width, AR.height, KR, -1, this._getRGBABufferInternalSizedFormat(AR.type, AR.format, AR._ … [truncated]
```

#### 126. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2437` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2437) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2437)

```diff
-         return WW && this._caps.supportSRGBBuffers && (this.bb > 1 || iW)
+         return RR && this._caps.supportSRGBBuffers && (this.Ma > 1 || JR)
```

#### 127. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2464` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2464) · [Before (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2464)

```diff
-             const WW = new bW.e(this, 2);
+             const RR = new aR.b(this, 2);
```

#### 128. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2474` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2474) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2474)

```diff
-         return 1 === this.bb ? (OW = this._getInternalFormat(WW, iW), mW = OW) : (OW = this._getInternalFormat(WW, !1), mW = this._getRGBABufferInternalSizedFormat(0, WW, iW)), {
+         return 1 === this.Ma ? (GR = this._getInternalFormat(RR, JR), yR = GR) : (GR = this._getInternalFormat(RR, !1), yR = this._getRGBABufferInternalSizedFormat(0, RR, JR)), {
```

#### 129. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2623-L2624` → after: `L2623-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2623-L2624) · [Before (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2623-L2624)

```diff
-           ZW = Math.min(tW, this.needPOTTextures ? (0, lW.h)(mW.width, tW) : mW.width),
-           xW = Math.min(tW, this.needPOTTextures ? (0, lW.h)(mW.height, tW) : mW.height),
+           KR = Math.min(VR, this.needPOTTextures ? (0, rR.e)(yR.width, VR) : yR.width),
+           wR = Math.min(VR, this.needPOTTextures ? (0, rR.e)(yR.height, VR) : yR.height),
```

#### 130. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2634` → after: `L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2634) · [Before (L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2634)

```diff
-         return this.bb > 1 ? 15 === WW ? EW = mW.DEPTH_COMPONENT16 : 16 === WW ? EW = mW.DEPTH_COMPONENT24 : 17 === WW || 13 === WW ? EW = OW ? mW.DEPTH24_STENCIL8 : mW.DEPTH_COMPONENT24 : 14 === WW ? EW = mW.DEPTH_COMPONENT32F : 18 === WW && (EW = OW ? mW.DEPTH32F_STENCIL8 : mW. … [truncated]
+         return this.Ma > 1 ? 15 === RR ? tR = yR.DEPTH_COMPONENT16 : 16 === RR ? tR = yR.DEPTH_COMPONENT24 : 17 === RR || 13 === RR ? tR = GR ? yR.DEPTH24_STENCIL8 : yR.DEPTH_COMPONENT24 : 14 === RR ? tR = yR.DEPTH_COMPONENT32F : 18 === RR && (tR = GR ? yR.DEPTH32F_STENCIL8 : yR. … [truncated]
```

#### 131. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2690)

```diff
-           if (this._activateCurrentTexture(), iW && iW.isMultiview) throw LW.b.Error(["_bindTextureDirectly called with a multiview texture!", WW, iW]), "_bindTextureDirectly called with a multiview texture!";
+           if (this._activateCurrentTexture(), JR && JR.isMultiview) throw qR.c.Error(["_bindTextureDirectly called with a multiview texture!", RR, JR]), "_bindTextureDirectly called with a multiview texture!";
```

#### 132. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2702` → after: `L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2702) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2702)

```diff
-         for (let WW = 0; WW < this._maxSimultaneousTextures; WW++) this._activeChannel = WW, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.bb > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
+         for (let RR = 0; RR < this._maxSimultaneousTextures; RR++) this._activeChannel = RR, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Ma > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), thi … [truncated]
```

#### 133. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2725` → after: `L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2725) · [Before (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2725)

```diff
-         if (!iW) return null != this._boundTexturesCache[WW] && (this._activeChannel = WW, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.bb > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
+         if (!JR) return null != this._boundTexturesCache[RR] && (this._activeChannel = RR, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Ma > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this. … [truncated]
```

#### 134. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L2777` → after: `L2777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L2777) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L2777)

```diff
-         (0, cW.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
+         (0, iR.m)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dumm … [truncated]
```

#### 135. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3088` → after: `L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3088) · [Before (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3088)

```diff
-           if (PW.length < tW) return LW.b.Error(`Data buffer is too small to store the read pixels (${PW.length} should be more than ${tW})`), Promise.resolve(PW)
+           if (ZR.length < VR) return qR.c.Error(`Data buffer is too small to store the read pixels (${ZR.length} should be more than ${VR})`), Promise.resolve(ZR)
```

#### 136. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3101` → after: `L3101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3101) · [Before (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3101)

```diff
-           const WW = NW.b._CreateCanvas(1, 1),
+           const RR = uR.c._CreateCanvas(1, 1),
```

#### 137. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3111` → after: `L3111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3111) · [Before (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3111)

```diff
-           const WW = NW.b._CreateCanvas(1, 1),
+           const RR = uR.c._CreateCanvas(1, 1),
```

#### 138. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3184` → after: `L3184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3184) · [Before (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3184)

```diff
-     }], KW._ConcatenateShader = jW.h, KW._IsSupported = null, KW._HasMajorPerformanceCaveat = null
+     }], CR._ConcatenateShader = LR.f, CR._IsSupported = null, CR._HasMajorPerformanceCaveat = null
```

#### 139. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3186` → after: `L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3186) · [Before (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3186)

```diff
-   41703: (WW, iW, OW) => {
+   41707: (RR, JR, GR) => {
```

#### 140. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3189` → after: `L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3189) · [Before (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3189)

```diff
-         e: () => EW
+         c: () => tR
```

#### 141. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3197` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3197) · [Before (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3197)

```diff
-   41700: (WW, iW, OW) => {
+   41705: (RR, JR, GR) => {
```

#### 142. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3199-L3200` → after: `L3199-L3200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3199-L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3199-L3200) · [Before (L3199-L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3199-L3200)

```diff
-       c: () => mW,
-       g: () => NW,
+       b: () => yR,
+       e: () => uR,
```

#### 143. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3222` → after: `L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3222) · [Before (L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3222)

```diff
-   41695: (WW, iW, OW) => {
+   41701: (RR, JR, GR) => {
```

#### 144. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3225-L3226` → after: `L3225-L3226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3225-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3225-L3226) · [Before (L3225-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3225-L3226)

```diff
-       d: () => PW,
-       f: () => LW
+       f: () => ZR,
+       j: () => qR
```

#### 145. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3228` → after: `L3228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3228) · [Before (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3228)

```diff
-     var mW = OW(38241);
+     var yR = GR(38204);
```

#### 146. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3238` → after: `L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3238) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3238)

```diff
-         super(WW, iW), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new mW.m(OW, EW)
+         super(RR, JR), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new yR.n(GR, tR)
```

#### 147. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3254` → after: `L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3254) · [Before (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3254)

```diff
-   41710: (WW, iW, OW) => {
+   41715: (RR, JR, GR) => {
```

#### 148. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3256` → after: `L3256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3256) · [Before (L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3256)

```diff
-       e: () => mW
+       c: () => yR
```

#### 149. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3265` → after: `L3265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3265) · [Before (L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3265)

```diff
-   41371: (WW, iW, OW) => {
+   41364: (RR, JR, GR) => {
```

#### 150. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3267` → after: `L3267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3267) · [Before (L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3267)

```diff
-       e: () => PW
+       b: () => ZR
```

#### 151. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3269-L3270` → after: `L3269-L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3269-L3270) · [Before (L3269-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3269-L3270)

```diff
-     var mW, EW = OW(38276),
-       NW = OW(41380);
+     var yR, tR = GR(38233),
+       uR = GR(41370);
```

#### 152. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3274` → after: `L3274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3274) · [Before (L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3274)

```diff
-     class PW extends NW.c {
+     class ZR extends uR.e {
```

#### 153. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3295` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3295) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3295)

```diff
-         super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable … [truncated]
+         super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable … [truncated]
```

#### 154. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3372` → after: `L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3372) · [Before (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3372)

```diff
-   41467: (WW, iW, OW) => {
+   41466: (RR, JR, GR) => {
```

#### 155. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3389-L3392` → after: `L3389-L3392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3389-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3389-L3392) · [Before (L3389-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3389-L3392)

```diff
-       c: () => PW,
-       e: () => mW,
-       i: () => EW,
-       m: () => NW
+       d: () => ZR,
+       g: () => yR,
+       k: () => tR,
+       n: () => uR
```

#### 156. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3395` → after: `L3395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3395) · [Before (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3395)

```diff
-   41380: (WW, iW, OW) => {
+   41370: (RR, JR, GR) => {
```

#### 157. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3397` → after: `L3397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3397) · [Before (L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3397)

```diff
-       c: () => mW
+       e: () => yR
```

#### 158. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3453` → after: `L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3453) · [Before (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3453)

```diff
-   41639: (WW, iW, OW) => {
+   41636: (RR, JR, GR) => {
```

#### 159. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3461` → after: `L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3461) · [Before (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3461)

```diff
-   41439: (WW, iW, OW) => {
+   41436: (RR, JR, GR) => {
```

#### 160. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3469` → after: `L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3469) · [Before (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3469)

```diff
-   41840: (WW, iW, OW) => {
+   41844: (RR, JR, GR) => {
```

#### 161. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3471` → after: `L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3471) · [Before (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3471)

```diff
-       d: () => EW
+       c: () => tR
```

#### 162. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3473)

```diff
-     var mW = OW(41420);
+     var yR = GR(41415);
```

#### 163. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3490-L3491` → after: `L3490-L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3490-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3490-L3491) · [Before (L3490-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3490-L3491)

```diff
-           WW ? iW.dispose() : mW.d.SetImmediate((() => {
-             iW.VA().onEndFrameObservable.addOnce((() => {
+           RR ? JR.dispose() : yR.e.SetImmediate((() => {
+             JR.ke().onEndFrameObservable.addOnce((() => {
```

#### 164. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3500` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3500) · [Before (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3500)

```diff
-   41401: (WW, iW, OW) => {
+   41393: (RR, JR, GR) => {
```

#### 165. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3504` → after: `L3504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3504) · [Before (L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3504)

```diff
-       g: () => wW,
+       h: () => fR,
```

#### 166. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3507-L3512` → after: `L3507-L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3507-L3512) · [Before (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3507-L3512)

```diff
-     var mW = OW(41406),
-       EW = OW(41408),
-       NW = OW(41392),
-       PW = OW(39911),
-       LW = OW(41418),
-       cW = OW(41412);
+     var yR = GR(41395),
+       tR = GR(41397),
+       uR = GR(41387),
+       ZR = GR(39914),
+       qR = GR(41410),
+       iR = GR(41399);
```

#### 167. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3515` → after: `L3515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3515) · [Before (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3515)

```diff
-       return (0, EW.A)(iW).cachedPipelines[WW]
+       return (0, tR.H)(JR).cachedPipelines[RR]
```

#### 168. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3522` → after: `L3522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3522) · [Before (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3522)

```diff
-         const WW = (0, EW.A)(OW),
+         const RR = (0, tR.H)(GR),
```

#### 169. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3530-L3531` → after: `L3530-L3531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3530-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3530-L3531) · [Before (L3530-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3530-L3531)

```diff
-       const ZW = (0, mW.j)() ? PW?.getHostDocument() : null;
-       wW = "string" === typeof iW ? iW : "string" === typeof iW.vertexSource ? "source:" + iW.vertexSource : "string" === typeof iW.vertexElement ? ZW?.getElementById(iW.vertexElement) || iW.vertexElement : iW.vertex || iW, tW = "string" === typeof iW ? iW : "string" === typeof i … [truncated]
+       const KR = (0, yR.m)() ? ZR?.getHostDocument() : null;
+       fR = "string" === typeof JR ? JR : "string" === typeof JR.vertexSource ? "source:" + JR.vertexSource : "string" === typeof JR.vertexElement ? KR?.getElementById(JR.vertexElement) || JR.vertexElement : JR.vertex || JR, VR = "string" === typeof JR ? JR : "string" === typeof J … [truncated]
```

#### 170. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3536-L3537` → after: `L3536-L3537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3536-L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3536-L3537) · [Before (L3536-L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3536-L3537)

```diff
-             (0, LW.c)(WW), (0, LW.i)(mW, WW, ((mW, tW) => {
-               cW && (cW._vertexSourceCodeBeforeMigration = tW), OW && (mW = OW("vertex", mW)), WW.isFragment = !0, (0, LW.i)(wW, WW, ((PW, wW) => {
+             (0, qR.h)(RR), (0, qR.m)(yR, RR, ((yR, VR) => {
+               iR && (iR._vertexSourceCodeBeforeMigration = VR), GR && (yR = GR("vertex", yR)), RR.isFragment = !0, (0, qR.m)(fR, RR, ((ZR, fR) => {
```

#### 171. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3539` → after: `L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3539) · [Before (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3539)

```diff
-                 const tW = (0, LW.b)(mW, PW, WW);
+                 const VR = (0, qR.e)(yR, ZR, RR);
```

#### 172. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3567` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3567) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3567)

```diff
-         return void EW((0, mW.c)(WW))
+         return void tR((0, yR.d)(RR))
```

#### 173. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3573` → after: `L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3573) · [Before (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3573)

```diff
-       const wW = NW.c.GetShadersStore(PW);
+       const fR = uR.b.GetShadersStore(ZR);
```

#### 174. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3577` → after: `L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3577) · [Before (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3577)

```diff
-       if (tW = "." === WW[0] || "/" === WW[0] || WW.indexOf("http") > -1 ? WW : NW.c.GetShadersRepository(PW) + WW, !(LW = LW || cW.l)) throw new Error("loadFileInjection is not defined");
+       if (VR = "." === RR[0] || "/" === RR[0] || RR.indexOf("http") > -1 ? RR : uR.b.GetShadersRepository(ZR) + RR, !(qR = qR || iR.k)) throw new Error("loadFileInjection is not defined");
```

#### 175. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3582` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3582) · [Before (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3582)

```diff
-         const NW = WW.context ? (0, EW.A)(WW.context) : null;
+         const uR = RR.context ? (0, tR.H)(RR.context) : null;
```

#### 176. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3591` → after: `L3591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3591) · [Before (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3591)

```diff
-         throw PW.b.Error("Error compiling effect"), NW
+         throw ZR.c.Error("Error compiling effect"), uR
```

#### 177. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3595` → after: `L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3595) · [Before (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3595)

```diff
-   41389: (WW, iW, OW) => {
+   41382: (RR, JR, GR) => {
```

#### 178. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3597` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3597) · [Before (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3597)

```diff
-       e: () => cW
+       d: () => iR
```

#### 179. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3599-L3603` → after: `L3599-L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3599-L3603) · [Before (L3599-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3599-L3603)

```diff
-     var mW = OW(38276),
-       EW = OW(39911),
-       NW = OW(41392),
-       PW = OW(41401),
-       LW = OW(41420);
+     var yR = GR(38233),
+       tR = GR(39914),
+       uR = GR(41387),
+       ZR = GR(41393),
+       qR = GR(41415);
```

#### 180. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3606` → after: `L3606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3606) · [Before (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3606)

```diff
-         return NW.c.ShadersRepository
+         return uR.b.ShadersRepository
```

#### 181. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3609` → after: `L3609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3609) · [Before (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3609)

```diff
-         NW.c.ShadersRepository = WW
+         uR.b.ShadersRepository = RR
```

#### 182. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3615` → after: `L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3615) · [Before (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3615)

```diff
-         return this._onBindObservable || (this._onBindObservable = new mW.e), this._onBindObservable
+         return this._onBindObservable || (this._onBindObservable = new yR.b), this._onBindObservable
```

#### 183. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3631` → after: `L3631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3631) · [Before (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3631)

```diff
-         this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new mW.e, this.onErrorObservable = new mW.e, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationF … [truncated]
+         this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new yR.b, this.onErrorObservable = new yR.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationF … [truncated]
```

#### 184. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3642` → after: `L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3642) · [Before (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3642)

```diff
-         "WEBGL2" === this._engine.shaderPlatformName && (UW = (0, PW.g)(jW, this._engine._gl) ?? UW), this._attributeLocationByName = {}, this.uniqueId = cW._UniqueIdSeed++, UW ? (this._pipelineContext = UW, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCom … [truncated]
+         "WEBGL2" === this._engine.shaderPlatformName && (nR = (0, ZR.h)(LR, this._engine._gl) ?? nR), this._attributeLocationByName = {}, this.uniqueId = iR._UniqueIdSeed++, nR ? (this._pipelineContext = nR, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCom … [truncated]
```

#### 185. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3644-L3645` → after: `L3644-L3645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3644-L3645) · [Before (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3644-L3645)

```diff
-             OW = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${iW}`);
-           WW && "string" === typeof WW.stack && (OW.stack = `${OW.message}\nCaused by: ${WW.stack}`), this._processCompilationErrors(OW)
+             GR = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${JR}`);
+           RR && "string" === typeof RR.stack && (GR.stack = `${GR.message}\nCaused by: ${RR.stack}`), this._processCompilationErrors(GR)
```

#### 186. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3647` → after: `L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3647) · [Before (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3647)

```diff
-           this._onReleaseEffectsObserver = null, this.Ay || this.dispose(!0)
+           this._onReleaseEffectsObserver = null, this.oB || this.dispose(!0)
```

#### 187. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3663-L3664` → after: `L3663-L3664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3663-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3663-L3664) · [Before (L3663-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3663-L3664)

```diff
-           shadersRepository: NW.c.GetShadersRepository(this._shaderLanguage),
-           includesShadersStore: NW.c.GetIncludesShadersStore(this._shaderLanguage),
+           shadersRepository: uR.b.GetShadersRepository(this._shaderLanguage),
+           includesShadersStore: uR.b.GetIncludesShadersStore(this._shaderLanguage),
```

#### 188. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3669` → after: `L3669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3669) · [Before (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3669)

```diff
-           nmW: this._engine.nmW,
+           LtR: this._engine.LtR,
```

#### 189. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3687` → after: `L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3687) · [Before (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3687)

```diff
-         return !!this._engine.Ay || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
+         return !!this._engine.oB || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
```

#### 190. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3775` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3775) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3775)

```diff
-             nmW: this._engine.nmW,
+             LtR: this._engine.LtR,
```

#### 191. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3788` → after: `L3788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3788) · [Before (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3788)

```diff
-           const WW = this.VA().scenes;
+           const RR = this.ke().scenes;
```

#### 192. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3813` → after: `L3813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3813) · [Before (L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3813)

```diff
-             existingPipelineContext: WW ? iW : null,
+             existingPipelineContext: RR ? JR : null,
```

#### 193. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3840` → after: `L3840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3840) · [Before (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3840)

```diff
-             mW.length >= iW && (EW = `Offending line [${iW}] in ${OW?"fragment":"vertex"} code: ${mW[iW-1]}`)
+             yR.length >= JR && (tR = `Offending line [${JR}] in ${GR?"fragment":"vertex"} code: ${yR[JR-1]}`)
```

#### 194. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3850` → after: `L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3850) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3850)

```diff
-         if (EW.b.Error("Unable to compile effect:"), EW.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), EW.b.Error(`Attributes: ${OW.join(" ")}`), EW.b.Error("Defines:\n" + this.defines), cW.LogShaderCodeOnCompilationError) {
+         if (tR.c.Error("Unable to compile effect:"), tR.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), tR.c.Error(`Attributes: ${GR.join(" ")}`), tR.c.Error("Defines:\n" + this.defines), iR.LogShaderCodeOnCompilationError) {
```

#### 195. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3853` → after: `L3853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3853) · [Before (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3853)

```diff
-           this._pipelineContext?._getVertexShaderCode() && ([WW, iW] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), WW && (EW.b.Error("Vertex code:"), EW.b.Error(WW))), this._pipelineContext?._getFragmentShaderCode() & … [truncated]
+           this._pipelineContext?._getVertexShaderCode() && ([RR, JR] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), RR && (tR.c.Error("Vertex code:"), tR.c.Error(RR))), this._pipelineContext?._getFragmentShaderCode() & … [truncated]
```

#### 196. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3855)

```diff
-         EW.b.Error("Error: " + this._compilationError);
+         tR.c.Error("Error: " + this._compilationError);
```

#### 197. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L3862` → after: `L3862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L3862) · [Before (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L3862)

```diff
-         iW && (this._pipelineContext = iW, this._isReady = !0, NW()), mW ? (this._pipelineContext = null, mW.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, EW.b.Error("Trying next fallback."), this.defines = mW.reduce(this.defines, this), this._prepareEffect()) : (this._al … [truncated]
+         JR && (this._pipelineContext = JR, this._isReady = !0, uR()), yR ? (this._pipelineContext = null, yR.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, tR.c.Error("Trying next fallback."), this.defines = yR.reduce(this.defines, this), this._prepareEffect()) : (this._al … [truncated]
```

#### 198. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4026` → after: `L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4026) · [Before (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4026)

```diff
-         iW && (NW.c.GetShadersStore(mW)[`${WW}PixelShader`] = iW), OW && (NW.c.GetShadersStore(mW)[`${WW}VertexShader`] = OW)
+         JR && (uR.b.GetShadersStore(yR)[`${RR}PixelShader`] = JR), GR && (uR.b.GetShadersStore(yR)[`${RR}VertexShader`] = GR)
```

#### 199. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4032` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4032) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4032)

```diff
-     cW.LogShaderCodeOnCompilationError = !0, cW.PersistentMode = !1, cW.AutomaticallyClearCodeCache = !1, cW._UniqueIdSeed = 0, cW._BaseCache = {}, cW.ShadersStore = NW.c.ShadersStore, cW.IncludesShadersStore = NW.c.IncludesShadersStore
+     iR.LogShaderCodeOnCompilationError = !0, iR.PersistentMode = !1, iR.AutomaticallyClearCodeCache = !1, iR._UniqueIdSeed = 0, iR._BaseCache = {}, iR.ShadersStore = uR.b.ShadersStore, iR.IncludesShadersStore = uR.b.IncludesShadersStore
```

#### 200. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4034` → after: `L4034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4034) · [Before (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4034)

```diff
-   41670: (WW, iW, OW) => {
+   41678: (RR, JR, GR) => {
```

#### 201. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4036-L4038` → after: `L4036-L4038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4036-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4036-L4038) · [Before (L4036-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4036-L4038)

```diff
-       c: () => tW,
-       f: () => YW,
-       j: () => SW
+       d: () => VR,
+       h: () => MR,
+       i: () => XR
```

#### 202. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4040-L4046` → after: `L4040-L4046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4040-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4040-L4046) · [Before (L4040-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4040-L4046)

```diff
-     var mW = OW(41389),
-       EW = OW(38241),
-       NW = OW(38291),
-       PW = OW(41649);
-     const LW = new EW.d,
-       cW = new EW.d,
-       wW = new EW.d,
+     var yR = GR(41382),
+       tR = GR(38204),
+       uR = GR(38247),
+       ZR = GR(41650);
+     const qR = new tR.e,
+       iR = new tR.e,
+       fR = new tR.e,
```

#### 203. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4048` → after: `L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4048) · [Before (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4048)

```diff
-         bD: () => {},
+         jH: () => {},
```

#### 204. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4053-L4054` → after: `L4053-L4054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4053-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4053-L4054) · [Before (L4053-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4053-L4054)

```diff
-       const mW = OW.wEW(),
-         EW = iW.wEW();
+       const yR = GR.QtR(),
+         tR = JR.QtR();
```

#### 205. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4060` → after: `L4060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4060) · [Before (L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4060)

```diff
-       return (0, NW.i)(iW, cW), ZW(WW, cW, wW), (0, NW.i)(wW, OW), OW
+       return (0, uR.h)(JR, iR), KR(RR, iR, fR), (0, uR.h)(fR, GR), GR
```

#### 206. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4065-L4066` → after: `L4065-L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4065-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4065-L4066) · [Before (L4065-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4065-L4066)

```diff
-       const mW = OW.wEW(),
-         EW = iW.wEW();
+       const yR = GR.QtR(),
+         tR = JR.QtR();
```

#### 207. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4072` → after: `L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4072) · [Before (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4072)

```diff
-       return (0, NW.o)(lW(WW, iW, mW), OW, mW), mW
+       return (0, uR.r)(rR(RR, JR, yR), GR, yR), yR
```

#### 208. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4076` → after: `L4076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4076) · [Before (L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4076)

```diff
-       return (0, NW.i)(OW, cW), (0, NW.o)(iW, cW, wW), ZW(WW, wW, cW), lW(WW, OW, wW), (0, NW.o)(cW, wW, mW), mW
+       return (0, uR.h)(GR, iR), (0, uR.r)(JR, iR, fR), KR(RR, fR, iR), rR(RR, GR, fR), (0, uR.r)(iR, fR, yR), yR
```

#### 209. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4080` → after: `L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4080) · [Before (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4080)

```diff
-       return (0, NW.i)(OW, cW), (0, NW.o)(iW, cW, wW), ZW(WW, wW, cW), AW(WW, mW, EW, wW), (0, NW.o)(cW, wW, PW), PW
+       return (0, uR.h)(GR, iR), (0, uR.r)(JR, iR, fR), KR(RR, fR, iR), eR(RR, yR, tR, fR), (0, uR.r)(iR, fR, ZR), ZR
```

#### 210. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4084` → after: `L4084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4084) · [Before (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4084)

```diff
-       const OW = tW.bD();
+       const GR = VR.jH();
```

#### 211. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4111-L4112` → after: `L4111-L4112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4111-L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4111-L4112) · [Before (L4111-L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4111-L4112)

```diff
-     const kW = PW.c,
-       sW = mW.e,
+     const UR = ZR.b,
+       WR = yR.d,
```

#### 212. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4114` → after: `L4114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4114) · [Before (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4114)

```diff
-       KW = mW.e.prototype.setMatrix;
+       CR = yR.d.prototype.setMatrix;
```

#### 213. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4117` → after: `L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4117) · [Before (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4117)

```diff
-       mW.e.prototype.setMatrix = KW, sW._setMatrixOverride = void 0, kW.prototype._updateMatrixForUniform = MW, kW.prototype._updateMatrixForUniformOverride = void 0
+       yR.d.prototype.setMatrix = CR, WR._setMatrixOverride = void 0, UR.prototype._updateMatrixForUniform = AR, UR.prototype._updateMatrixForUniformOverride = void 0
```

#### 214. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4130-L4131` → after: `L4130-L4131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4130-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4130-L4131) · [Before (L4130-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4130-L4131)

```diff
-       e: () => NW,
-       h: () => EW
+       c: () => uR,
+       e: () => tR
```

#### 215. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4133` → after: `L4133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4133) · [Before (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4133)

```diff
-     var mW = OW(41639);
+     var yR = GR(41636);
```

#### 216. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4145-L4146` → after: `L4145-L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4145-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4145-L4146) · [Before (L4145-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4145-L4146)

```diff
-       e: () => HW,
-       g: () => oW
+       b: () => bR,
+       d: () => xR
```

#### 217. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4148-L4153` → after: `L4148-L4153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4148-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4148-L4153) · [Before (L4148-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4148-L4153)

```diff
-     var mW = OW(41516),
-       EW = OW(41519),
-       NW = OW(38276),
-       PW = OW(38372),
-       LW = OW(38285),
-       cW = OW(38241);
+     var yR = GR(41520),
+       tR = GR(41524),
+       uR = GR(38233),
+       ZR = GR(38331),
+       qR = GR(38239),
+       iR = GR(38204);
```

#### 218. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4191` → after: `L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4191) · [Before (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4191)

```diff
-       const OW = Number.isNaN(WW) ? tW : Math.max(WW, tW),
+       const GR = Number.isNaN(RR) ? VR : Math.max(RR, VR),
```

#### 219. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4197` → after: `L4197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4197) · [Before (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4197)

```diff
-         wW[WW][0] <= mW ? EW = WW : NW = WW
+         fR[RR][0] <= yR ? tR = RR : uR = RR
```

#### 220. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4203-L4206` → after: `L4203-L4206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4203-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4203-L4206) · [Before (L4203-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4203-L4206)

```diff
-         KW = cW.m.Lerp(new cW.m(lW, AW), new cW.m(UW, kW), MW),
-         SW = cW.m.Normalize(new cW.m(1, bW)),
-         YW = cW.m.Normalize(new cW.m(1, sW)),
-         yW = cW.m.Normalize(cW.m.Lerp(SW, YW, MW)),
+         CR = iR.n.Lerp(new iR.n(rR, eR), new iR.n(nR, UR), AR),
+         XR = iR.n.Normalize(new iR.n(1, aR)),
+         MR = iR.n.Normalize(new iR.n(1, WR)),
+         BR = iR.n.Normalize(iR.n.Lerp(XR, MR, AR)),
```

#### 221. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4208` → after: `L4208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4208) · [Before (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4208)

```diff
-       KW.yEW(yW.scale(TW / 3e3));
+       CR.VuR(BR.scale(lR / 3e3));
```

#### 222. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4212` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4212) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4212)

```diff
-       return new cW.q(hW / HW, 1, (1 - hW - HW) / HW)
+       return new iR.r(gR / bR, 1, (1 - gR - bR) / bR)
```

#### 223. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4214-L4215` → after: `L4214-L4215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4214-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4214-L4215) · [Before (L4214-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4214-L4215)

```diff
-     const lW = cW.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
-       AW = cW.d.Invert(lW);
+     const rR = iR.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
+       eR = iR.e.Invert(rR);
```

#### 224. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4218` → after: `L4218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4218) · [Before (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4218)

```diff
-       const OW = iW > 0 ? WW / iW : 10;
+       const GR = JR > 0 ? RR / JR : 10;
```

#### 225. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4223-L4225` → after: `L4223-L4225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4223-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4223-L4225) · [Before (L4223-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4223-L4225)

```diff
-       const OW = cW.q.TransformNormal(WW, lW),
-         mW = cW.q.TransformNormal(iW, lW),
-         EW = cW.d.FromArray([bW(mW.x, OW.x), 0, 0, 0, 0, bW(mW.y, OW.y), 0, 0, 0, 0, bW(mW.z, OW.z), 0, 0, 0, 0, 1]);
+       const GR = iR.r.TransformNormal(RR, rR),
+         yR = iR.r.TransformNormal(JR, rR),
+         tR = iR.e.FromArray([aR(yR.x, GR.x), 0, 0, 0, 0, aR(yR.y, GR.y), 0, 0, 0, 0, aR(yR.z, GR.z), 0, 0, 0, 0, 1]);
```

#### 226. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4228-L4233` → after: `L4228-L4233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4228-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4228-L4233) · [Before (L4228-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4228-L4233)

```diff
-     const UW = new cW.q(.95047, 1, 1.08883),
-       kW = cW.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(jW(UW, xW(6500, 0))),
-       sW = cW.d.Invert(kW),
-       MW = cW.q.TransformNormal(new cW.q(1, 1, 1), kW);
-     var KW = OW(41538),
-       SW = OW(41639);
+     const nR = new iR.r(.95047, 1, 1.08883),
+       UR = iR.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(LR(nR, wR(6500, 0))),
+       WR = iR.e.Invert(UR),
+       AR = iR.r.TransformNormal(new iR.r(1, 1, 1), UR);
+     var CR = GR(41542),
+       XR = GR(41636);
```

#### 227. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4262` → after: `L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4262) · [Before (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4262)

```diff
-           this._dirty = !0, this._tempColor = new PW.d(0, 0, 0, 0), this._globalCurve = new PW.d(0, 0, 0, 0), this._highlightsCurve = new PW.d(0, 0, 0, 0), this._midtonesCurve = new PW.d(0, 0, 0, 0), this._shadowsCurve = new PW.d(0, 0, 0, 0), this._positiveCurve = new PW.d(0, 0,  … [truncated]
+           this._dirty = !0, this._tempColor = new ZR.e(0, 0, 0, 0), this._globalCurve = new ZR.e(0, 0, 0, 0), this._highlightsCurve = new ZR.e(0, 0, 0, 0), this._midtonesCurve = new ZR.e(0, 0, 0, 0), this._shadowsCurve = new ZR.e(0, 0, 0, 0), this._positiveCurve = new ZR.e(0, 0,  … [truncated]
```

#### 228. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4409` → after: `L4409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4409) · [Before (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4409)

```diff
-           return KW.d.Clone((() => new WW), this)
+           return CR.c.Clone((() => new RR), this)
```

#### 229. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4412` → after: `L4412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4412) · [Before (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4412)

```diff
-           return KW.d.Serialize(this)
+           return CR.c.Serialize(this)
```

#### 230. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4422)

```diff
-         iW = [(0, EW.M)()], OW = [(0, EW.M)()], NW = [(0, EW.M)()], LW = [(0, EW.M)()], cW = [(0, EW.M)()], wW = [(0, EW.M)()], tW = [(0, EW.M)()], ZW = [(0, EW.M)()], xW = [(0, EW.M)()], lW = [(0, EW.M)()], AW = [(0, EW.M)()], bW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
+         JR = [(0, tR.H)()], GR = [(0, tR.H)()], uR = [(0, tR.H)()], qR = [(0, tR.H)()], iR = [(0, tR.H)()], fR = [(0, tR.H)()], VR = [(0, tR.H)()], KR = [(0, tR.H)()], wR = [(0, tR.H)()], rR = [(0, tR.H)()], eR = [(0, tR.H)()], aR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
```

#### 231. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4435` → after: `L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4435) · [Before (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4435)

```diff
-         }, jW, UW), (0, mW.e)(null, null, OW, {
+         }, LR, nR), (0, yR.l)(null, null, GR, {
```

#### 232. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4448` → after: `L4448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4448) · [Before (L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4448)

```diff
-         }, kW, sW), (0, mW.e)(null, null, NW, {
+         }, UR, WR), (0, yR.l)(null, null, uR, {
```

#### 233. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4461` → after: `L4461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4461) · [Before (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4461)

```diff
-         }, MW, YW), (0, mW.e)(null, null, LW, {
+         }, AR, MR), (0, yR.l)(null, null, qR, {
```

#### 234. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4474` → after: `L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4474) · [Before (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4474)

```diff
-         }, yW, TW), (0, mW.e)(null, null, cW, {
+         }, BR, lR), (0, yR.l)(null, null, iR, {
```

#### 235. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4487` → after: `L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4487) · [Before (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4487)

```diff
-         }, JW, hW), (0, mW.e)(null, null, wW, {
+         }, pR, gR), (0, yR.l)(null, null, fR, {
```

#### 236. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4500` → after: `L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4500) · [Before (L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4500)

```diff
-         }, HW, nW), (0, mW.e)(null, null, tW, {
+         }, bR, vR), (0, yR.l)(null, null, VR, {
```

#### 237. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4513` → after: `L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4513) · [Before (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4513)

```diff
-         }, uW, oW), (0, mW.e)(null, null, ZW, {
+         }, OR, xR), (0, yR.l)(null, null, KR, {
```

#### 238. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4526` → after: `L4526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4526) · [Before (L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4526)

```diff
-         }, dW, eW), (0, mW.e)(null, null, xW, {
+         }, NR, DR), (0, yR.l)(null, null, wR, {
```

#### 239. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4539` → after: `L4539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4539) · [Before (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4539)

```diff
-         }, vW, gW), (0, mW.e)(null, null, lW, {
+         }, HR, oR), (0, yR.l)(null, null, rR, {
```

#### 240. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4552` → after: `L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4552) · [Before (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4552)

```diff
-         }, DW, VW), (0, mW.e)(null, null, AW, {
+         }, cR, PR), (0, yR.l)(null, null, eR, {
```

#### 241. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4565` → after: `L4565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4565) · [Before (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4565)

```diff
-         }, pW, fW), (0, mW.e)(null, null, bW, {
+         }, IR, mR), (0, yR.l)(null, null, aR, {
```

#### 242. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4593` → after: `L4593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4593) · [Before (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4593)

```diff
-     var TW = OW(41458),
+     var lR = GR(41449),
```

#### 243. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4595` → after: `L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4595) · [Before (L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4595)

```diff
-       hW = OW(38299);
+       gR = GR(38253);
```

#### 244. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4656` → after: `L4656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4656) · [Before (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4656)

```diff
-             this.colorCurves = (0, mW.g)(this, aW, new YW), this._colorCurvesEnabled = ((0, mW.g)(this, rW), (0, mW.g)(this, zW, !1)), this._colorGradingTexture = ((0, mW.g)(this, FW), (0, mW.g)(this, QW, void 0)), this._colorGradingEnabled = ((0, mW.g)(this, Wi), (0, mW.g)(this, … [truncated]
+             this.colorCurves = (0, yR.m)(this, QR, new MR), this._colorCurvesEnabled = ((0, yR.m)(this, FR), (0, yR.m)(this, TR, !1)), this._colorGradingTexture = ((0, yR.m)(this, sR), (0, yR.m)(this, hR, void 0)), this._colorGradingEnabled = ((0, yR.m)(this, RJ), (0, yR.m)(this, … [truncated]
```

#### 245. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4722` → after: `L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4722) · [Before (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4722)

```diff
-             WW = Number.isNaN(WW) ? tW : Math.max(WW, tW), this._temperature !== WW && (this._temperature = WW, this._updateParameters())
+             RR = Number.isNaN(RR) ? VR : Math.max(RR, VR), this._temperature !== RR && (this._temperature = RR, this._updateParameters())
```

#### 246. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4734` → after: `L4734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4734) · [Before (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4734)

```diff
-               return cW.d.GetAsMatrix3x3(mW)
+               return iR.e.GetAsMatrix3x3(yR)
```

#### 247. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4816-L4817` → after: `L4816-L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4816-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4816-L4817) · [Before (L4816-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4816-L4817)

```diff
-               const OW = 1 / (this.outputTextureWidth || WW.VA().getRenderWidth()),
-                 mW = 1 / (this.outputTextureHeight || WW.VA().getRenderHeight());
+               const GR = 1 / (this.outputTextureWidth || RR.ke().getRenderWidth()),
+                 yR = 1 / (this.outputTextureHeight || RR.ke().getRenderHeight());
```

#### 248. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4819` → after: `L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4819) · [Before (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4819)

```diff
-                 const EW = null != iW ? iW : mW / OW;
+                 const tR = null != JR ? JR : yR / GR;
```

#### 249. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4823` → after: `L4823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4823) · [Before (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4823)

```diff
-                 PW = (0, TW.j)(PW, LW, this.vignetteStretch), NW = (0, TW.j)(NW, LW, this.vignetteStretch), WW.setFloat4("vignetteSettings1", PW, NW, -PW * this.vignetteCenterX, -NW * this.vignetteCenterY);
+                 ZR = (0, lR.h)(ZR, qR, this.vignetteStretch), uR = (0, lR.h)(uR, qR, this.vignetteStretch), RR.setFloat4("vignetteSettings1", ZR, uR, -ZR * this.vignetteCenterX, -uR * this.vignetteCenterY);
```

#### 250. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4835` → after: `L4835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4835) · [Before (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4835)

```diff
-             return KW.d.Clone((() => new WW), this)
+             return CR.c.Clone((() => new RR), this)
```

#### 251. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4838` → after: `L4838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4838) · [Before (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4838)

```diff
-             return KW.d.Serialize(this)
+             return CR.c.Serialize(this)
```

#### 252. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4848` → after: `L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4848) · [Before (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4848)

```diff
-           iW = [(0, EW.k)()], OW = [(0, EW.M)()], wW = [(0, EW.F)("colorGradingTexture")], lW = [(0, EW.M)()], AW = [(0, EW.M)()], bW = [(0, EW.M)()], UW = [(0, EW.M)()], SW = [(0, EW.M)()], hW = [(0, EW.M)()], HW = [(0, EW.M)()], nW = [(0, EW.M)()], uW = [(0, EW.M)()], oW = [(0, … [truncated]
+           JR = [(0, tR.h)()], GR = [(0, tR.H)()], fR = [(0, tR.C)("colorGradingTexture")], rR = [(0, tR.H)()], eR = [(0, tR.H)()], aR = [(0, tR.H)()], nR = [(0, tR.H)()], XR = [(0, tR.H)()], gR = [(0, tR.H)()], bR = [(0, tR.H)()], vR = [(0, tR.H)()], OR = [(0, tR.H)()], xR = [(0, … [truncated]
```

#### 253. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4861` → after: `L4861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4861) · [Before (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4861)

```diff
-           }, aW, rW), (0, mW.e)(null, null, OW, {
+           }, QR, FR), (0, yR.l)(null, null, GR, {
```

#### 254. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4874` → after: `L4874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4874) · [Before (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4874)

```diff
-           }, zW, FW), (0, mW.e)(null, null, wW, {
+           }, TR, sR), (0, yR.l)(null, null, fR, {
```

#### 255. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4887` → after: `L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4887) · [Before (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4887)

```diff
-           }, QW, Wi), (0, mW.e)(null, null, lW, {
+           }, hR, RJ), (0, yR.l)(null, null, rR, {
```

#### 256. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4900` → after: `L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4900) · [Before (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4900)

```diff
-           }, ii, Oi), (0, mW.e)(null, null, AW, {
+           }, JJ, GJ), (0, yR.l)(null, null, eR, {
```

#### 257. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4913` → after: `L4913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4913) · [Before (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4913)

```diff
-           }, mi, Ei), (0, mW.e)(null, null, bW, {
+           }, yJ, tJ), (0, yR.l)(null, null, aR, {
```

#### 258. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4926` → after: `L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4926) · [Before (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4926)

```diff
-           }, Ni, Pi), (0, mW.e)(null, null, UW, {
+           }, uJ, ZJ), (0, yR.l)(null, null, nR, {
```

#### 259. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4939` → after: `L4939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4939) · [Before (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4939)

```diff
-           }, Li, ci), (0, mW.e)(null, null, SW, {
+           }, qJ, iJ), (0, yR.l)(null, null, XR, {
```

#### 260. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4952` → after: `L4952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4952) · [Before (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4952)

```diff
-           }, wi, ti), (0, mW.e)(null, null, hW, {
+           }, fJ, VJ), (0, yR.l)(null, null, gR, {
```

#### 261. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4965` → after: `L4965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4965) · [Before (L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4965)

```diff
-           }, Zi, xi), (0, mW.e)(null, null, HW, {
+           }, KJ, wJ), (0, yR.l)(null, null, bR, {
```

#### 262. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4978` → after: `L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4978) · [Before (L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4978)

```diff
-           }, li, Ai), (0, mW.e)(null, null, nW, {
+           }, rJ, eJ), (0, yR.l)(null, null, vR, {
```

#### 263. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4991` → after: `L4991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L4991) · [Before (L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L4991)

```diff
-           }, bi, ji), (0, mW.e)(null, null, uW, {
+           }, aJ, LJ), (0, yR.l)(null, null, OR, {
```

#### 264. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5004` → after: `L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5004) · [Before (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5004)

```diff
-           }, Ui, ki), (0, mW.e)(null, null, oW, {
+           }, nJ, UJ), (0, yR.l)(null, null, xR, {
```

#### 265. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5017` → after: `L5017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5017) · [Before (L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5017)

```diff
-           }, si, Mi), (0, mW.e)(null, null, dW, {
+           }, WJ, AJ), (0, yR.l)(null, null, NR, {
```

#### 266. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5030` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5030) · [Before (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5030)

```diff
-           }, Ki, Si), (0, mW.e)(null, null, eW, {
+           }, CJ, XJ), (0, yR.l)(null, null, DR, {
```

#### 267. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5043` → after: `L5043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5043) · [Before (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5043)

```diff
-           }, Yi, yi), (0, mW.e)(null, null, vW, {
+           }, MJ, BJ), (0, yR.l)(null, null, HR, {
```

#### 268. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5056` → after: `L5056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5056) · [Before (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5056)

```diff
-           }, Ti, Ji), (0, mW.e)(null, null, gW, {
+           }, lJ, pJ), (0, yR.l)(null, null, oR, {
```

#### 269. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5069` → after: `L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5069) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5069)

```diff
-           }, Hi, ni), (0, mW.e)(null, null, DW, {
+           }, gJ, bJ), (0, yR.l)(null, null, cR, {
```

#### 270. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5082` → after: `L5082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5082) · [Before (L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5082)

```diff
-           }, ui, oi), (0, mW.e)(null, null, VW, {
+           }, vJ, OJ), (0, yR.l)(null, null, PR, {
```

#### 271. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5095` → after: `L5095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5095) · [Before (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5095)

```diff
-           }, di, ei), (0, mW.e)(null, null, pW, {
+           }, xJ, NJ), (0, yR.l)(null, null, IR, {
```

#### 272. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5108` → after: `L5108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5108) · [Before (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5108)

```diff
-           }, vi, gi), (0, mW.e)(null, null, fW, {
+           }, DJ, HJ), (0, yR.l)(null, null, mR, {
```

#### 273. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5121` → after: `L5121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5121) · [Before (L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5121)

```diff
-           }, Di, Vi), (0, mW.e)(null, null, CW, {
+           }, oJ, cJ), (0, yR.l)(null, null, zR, {
```

#### 274. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5134` → after: `L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5134) · [Before (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5134)

```diff
-           }, fi, Ci), (0, mW.e)(null, null, XW, {
+           }, PJ, IJ), (0, yR.l)(null, null, SR, {
```

#### 275. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5147` → after: `L5147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5147) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5147)

```diff
-           }, Xi, Bi), (0, mW.e)(null, null, BW, {
+           }, mJ, zJ), (0, yR.l)(null, null, jR, {
```

#### 276. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5160` → after: `L5160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5160) · [Before (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5160)

```diff
-           }, qi, Ri), (0, mW.e)(null, null, qW, {
+           }, SJ, jJ), (0, yR.l)(null, null, dR, {
```

#### 277. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5173` → after: `L5173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5173) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5173)

```diff
-           }, Gi, Ii), (0, mW.e)(null, null, RW, {
+           }, dJ, EJ), (0, yR.l)(null, null, ER, {
```

#### 278. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5186` → after: `L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5186) · [Before (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5186)

```diff
-           }, ai, ri), (0, mW.e)(null, null, GW, {
+           }, YJ, kJ), (0, yR.l)(null, null, YR, {
```

#### 279. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5199` → after: `L5199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5199) · [Before (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5199)

```diff
-           }, zi, Fi), (0, mW.e)(null, null, IW, {
+           }, QJ, FJ), (0, yR.l)(null, null, kR, {
```

#### 280. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5218` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5218) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5218)

```diff
-         })(), WW.TONEMAPPING_STANDARD = 0, WW.TONEMAPPING_ACES = 1, WW.TONEMAPPING_KHR_PBR_NEUTRAL = 2, WW.PrepareUniforms = JW.h, WW.PrepareSamplers = JW.e, WW._VIGNETTEMODE_MULTIPLY = 0, WW._VIGNETTEMODE_OPAQUE = 1, WW
+         })(), RR.TONEMAPPING_STANDARD = 0, RR.TONEMAPPING_ACES = 1, RR.TONEMAPPING_KHR_PBR_NEUTRAL = 2, RR.PrepareUniforms = pR.e, RR.PrepareSamplers = pR.c, RR._VIGNETTEMODE_MULTIPLY = 0, RR._VIGNETTEMODE_OPAQUE = 1, RR
```

#### 281. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5223` → after: `L5223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5223) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5223)

```diff
-       const iW = KW.d.Parse((() => new HW), WW, null, null);
+       const JR = CR.c.Parse((() => new bR), RR, null, null);
```

#### 282. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5228` → after: `L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5228) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5228)

```diff
-       nW || (nW = !0, HW.Parse = uW, KW.d._ImageProcessingConfigurationParser = uW, (0, hW.h)("BABYLON.ImageProcessingConfiguration", HW))
+       vR || (vR = !0, bR.Parse = OR, CR.c._ImageProcessingConfigurationParser = OR, (0, gR.f)("BABYLON.ImageProcessingConfiguration", bR))
```

#### 283. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5231` → after: `L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5231) · [Before (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5231)

```diff
-   41649: (WW, iW, OW) => {
+   41650: (RR, JR, GR) => {
```

#### 284. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5233` → after: `L5233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5233) · [Before (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5233)

```diff
-       c: () => NW
+       b: () => uR
```

#### 285. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5235-L5236` → after: `L5235-L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5235-L5236) · [Before (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5235-L5236)

```diff
-     var mW = OW(39911),
-       EW = OW(41620);
+     var yR = GR(39914),
+       tR = GR(41616);
```

#### 286. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5243` → after: `L5243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5243) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5243)

```diff
-         this._uniformNames = [], this._valueCache = {}, this._engine = WW, this._noUBO = !WW.supportsUniformBuffers || EW, this._dynamic = OW, this._name = mW ?? "no-name", this._data = iW || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
+         this._uniformNames = [], this._valueCache = {}, this._engine = RR, this._noUBO = !RR.supportsUniformBuffers || tR, this._dynamic = GR, this._name = yR ?? "no-name", this._data = JR || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {},  … [truncated]
```

#### 287. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5265` → after: `L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5265) · [Before (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5265)

```diff
-         if (iW = WW <= 2 ? WW : 4, this._uniformLocationPointer % iW !== 0) {
+         if (JR = RR <= 2 ? RR : 4, this._uniformLocationPointer % JR !== 0) {
```

#### 288. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5300` → after: `L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5300) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5300)

```diff
-         this.addUniform(WW, Array.prototype.slice.call(iW.wEW()))
+         this.addUniform(RR, Array.prototype.slice.call(JR.QtR()))
```

#### 289. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5423` → after: `L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5423) · [Before (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5423)

```diff
-           if (this._buffer) return void mW.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + WW);
+           if (this._buffer) return void yR.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + RR);
```

#### 290. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5438` → after: `L5438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5438) · [Before (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5438)

```diff
-         if (void 0 === NW) return void mW.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
+         if (void 0 === uR) return void yR.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
```

#### 291. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5449` → after: `L5449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5449) · [Before (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5449)

```diff
-             if (this._bufferData[NW + 4 * LW + mW] !== EW.f.FloatRound(iW[cW]) && (WW = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[NW + 4 * LW + mW] = iW[cW]), mW++, mW === PW.strideSize) {
+             if (this._bufferData[uR + 4 * qR + yR] !== tR.h.FloatRound(JR[iR]) && (RR = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[uR + 4 * qR + yR] = JR[iR]), yR++, yR === ZR.strideSize) {
```

#### 292. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5544` → after: `L5544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5544) · [Before (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5544)

```diff
-         this._cacheMatrix(WW, iW) && this.updateUniform(WW, iW.wEW(), 16)
+         this._cacheMatrix(RR, JR) && this.updateUniform(RR, JR.QtR(), 16)
```

#### 293. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5688` → after: `L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5688) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5688)

```diff
-   41446: (WW, iW, OW) => {
+   41441: (RR, JR, GR) => {
```

#### 294. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5690` → after: `L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5690) · [Before (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5690)

```diff
-       b: () => EW
+       d: () => tR
```

#### 295. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5692-L5693` → after: `L5692-L5693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5692-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5692-L5693) · [Before (L5692-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5692-L5693)

```diff
-     var mW = OW(41453);
-     class EW extends mW.e {
+     var yR = GR(41444);
+     class tR extends yR.b {
```

#### 296. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5702` → after: `L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5702) · [Before (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5702)

```diff
-   41523: (WW, iW, OW) => {
+   41527: (RR, JR, GR) => {
```

#### 297. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5704-L5705` → after: `L5704-L5705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5704-L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5704-L5705) · [Before (L5704-L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5704-L5705)

```diff
-       b: () => cW,
-       c: () => wW
+       d: () => iR,
+       h: () => fR
```

#### 298. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5723` → after: `L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5723) · [Before (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5723)

```diff
-       return "function" === typeof WW ? WW : WW?.constructor
+       return "function" === typeof RR ? RR : RR?.constructor
```

#### 299. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5727` → after: `L5727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5727) · [Before (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5727)

```diff
-       if (!WW) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(PW)}) polyfill must run before decorated classes are evaluated.`);
+       if (!RR) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(ZR)}) polyfill must run before decorated classes are evaluated.`);
```

#### 300. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5748` → after: `L5748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5748) · [Before (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5748)

```diff
-   41519: (WW, iW, OW) => {
+   41524: (RR, JR, GR) => {
```

#### 301. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5753-L5754` → after: `L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5754) · [Before (L5753-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5753-L5754)

```diff
-       K: () => ZW,
-       M: () => PW,
+       c: () => WR,
```

#### 302. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5759-L5761` → after: `L5759-L5761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5759-L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5759-L5761) · [Before (L5759-L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5759-L5761)

```diff
-       n: () => cW,
-       r: () => AW,
-       t: () => wW,
+       m: () => eR,
+       q: () => fR,
+       u: () => LR,
```

#### 303. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5763` → after: `L5763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5763) · [Before (L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5763)

```diff
-       z: () => xW
+       y: () => aR
```

#### 304. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5765` → after: `L5765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5765) · [Before (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5765)

```diff
-     var mW = OW(41523);
+     var yR = GR(41527);
```

#### 305. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5771` → after: `L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5771) · [Before (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5771)

```diff
-           PW = (0, mW.b)(EW.metadata);
+           ZR = (0, yR.d)(tR.metadata);
```

#### 306. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5883` → after: `L5883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5883) · [Before (L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5883)

```diff
-   41538: (WW, iW, OW) => {
+   41542: (RR, JR, GR) => {
```

#### 307. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5885` → after: `L5885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5885) · [Before (L5885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5885)

```diff
-       d: () => wW
+       c: () => fR
```

#### 308. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5887-L5891` → after: `L5887-L5891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5887-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5887-L5891) · [Before (L5887-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5887-L5891)

```diff
-     var mW = OW(41415),
-       EW = OW(41544),
-       NW = OW(38372),
-       PW = OW(38241),
-       LW = OW(41523);
+     var yR = GR(41407),
+       tR = GR(41547),
+       uR = GR(38331),
+       ZR = GR(38204),
+       qR = GR(41527);
```

#### 309. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5896` → after: `L5896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5896) · [Before (L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5896)

```diff
-       const PW = (0, LW.c)(NW),
+       const ZR = (0, qR.h)(uR),
```

#### 310. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5910` → after: `L5910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5910) · [Before (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5910)

```diff
-             mW.cloneTexturesOnlyOnce && cW[LW.uniqueId] ? NW[EW] = cW[LW.uniqueId] : (NW[EW] = OW || LW.isRenderTarget ? LW : LW.clone(), cW[LW.uniqueId] = NW[EW]);
+             yR.cloneTexturesOnlyOnce && iR[qR.uniqueId] ? uR[tR] = iR[qR.uniqueId] : (uR[tR] = GR || qR.isRenderTarget ? qR : qR.clone(), iR[qR.uniqueId] = uR[tR]);
```

#### 311. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5921` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5921) · [Before (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5921)

```diff
-             NW[EW] = OW ? LW : LW.clone()
+             uR[tR] = GR ? qR : qR.clone()
```

#### 312. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5938` → after: `L5938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5938) · [Before (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5938)

```diff
-         const OW = (0, LW.c)(WW);
+         const GR = (0, qR.h)(RR);
```

#### 313. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5961` → after: `L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5961) · [Before (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5961)

```diff
-               iW[NW] = LW.wEW();
+               JR[uR] = qR.QtR();
```

#### 314. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5972` → after: `L5972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5972) · [Before (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5972)

```diff
-         const EW = (0, LW.c)(iW);
+         const tR = (0, qR.h)(JR);
```

#### 315. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5987` → after: `L5987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5987) · [Before (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5987)

```diff
-                 WW[LW] = NW.b.FromArray(tW);
+                 RR[qR] = uR.d.FromArray(VR);
```

#### 316. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5993` → after: `L5993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5993) · [Before (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5993)

```diff
-                 WW[LW] = PW.m.FromArray(tW);
+                 RR[qR] = ZR.n.FromArray(VR);
```

#### 317. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L5996` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L5996) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L5996)

```diff
-                 WW[LW] = PW.q.FromArray(tW);
+                 RR[qR] = ZR.r.FromArray(VR);
```

#### 318. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6005` → after: `L6005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6005) · [Before (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6005)

```diff
-                 WW[LW] = NW.d.FromArray(tW);
+                 RR[qR] = uR.e.FromArray(VR);
```

#### 319. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6011` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6011) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6011)

```diff
-                 WW[LW] = PW.g.FromArray(tW);
+                 RR[qR] = ZR.i.FromArray(VR);
```

#### 320. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6017` → after: `L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6017) · [Before (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6017)

```diff
-                 WW[LW] = PW.d.FromArray(tW);
+                 RR[qR] = ZR.e.FromArray(VR);
```

#### 321. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6020` → after: `L6020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6020) · [Before (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6020)

```diff
-                 WW[LW] = PW.r.FromArray(tW)
+                 RR[qR] = ZR.s.FromArray(VR)
```

#### 322. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6038` → after: `L6038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6038) · [Before (L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6038)

```diff
-       throw (0, mW.o)("ImageProcessingConfiguration")
+       throw (0, yR.j)("ImageProcessingConfiguration")
```

#### 323. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6040` → after: `L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6040) · [Before (L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6040)

```diff
-       throw (0, mW.o)("FresnelParameters")
+       throw (0, yR.j)("FresnelParameters")
```

#### 324. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6042` → after: `L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6042) · [Before (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6042)

```diff
-       throw (0, mW.o)("ColorCurves")
+       throw (0, yR.j)("ColorCurves")
```

#### 325. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6044` → after: `L6044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6044) · [Before (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6044)

```diff
-       throw (0, mW.o)("Texture")
+       throw (0, yR.j)("Texture")
```

#### 326. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6047` → after: `L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6047) · [Before (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6047)

```diff
-   41469: (WW, iW, OW) => {
+   41475: (RR, JR, GR) => {
```

#### 327. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6049` → after: `L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6049) · [Before (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6049)

```diff
-       e: () => EW
+       d: () => tR
```

#### 328. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6051` → after: `L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6051) · [Before (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6051)

```diff
-     var mW = OW(41431);
+     var yR = GR(41425);
```

#### 329. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6084` → after: `L6084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6084) · [Before (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6084)

```diff
-         EW.Enabled && (this._startMonitoringTime = mW.d.Now)
+         tR.Enabled && (this._startMonitoringTime = yR.b.Now)
```

#### 330. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6090` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6090) · [Before (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6090)

```diff
-         const iW = mW.d.Now;
+         const JR = yR.b.Now;
```

#### 331. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6099` → after: `L6099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6099) · [Before (L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6099)

```diff
-         const WW = mW.d.Now;
+         const RR = yR.b.Now;
```

#### 332. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6105` → after: `L6105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6105) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6105)

```diff
-   41628: (WW, iW, OW) => {
+   41626: (RR, JR, GR) => {
```

#### 333. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6108` → after: `L6108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6108) · [Before (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6108)

```diff
-       g: () => mW
+       f: () => yR
```

#### 334. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6168` → after: `L6168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6168) · [Before (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6168)

```diff
-   41544: (WW, iW, OW) => {
+   41547: (RR, JR, GR) => {
```

#### 335. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6249` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6249) · [Before (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6249)

```diff
-   41665: (WW, iW, OW) => {
+   41670: (RR, JR, GR) => {
```

#### 336. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6251` → after: `L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6251) · [Before (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6251)

```diff
-       c: () => NW
+       b: () => uR
```

#### 337. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6253-L6254` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6253-L6254) · [Before (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6253-L6254)

```diff
-     var mW = OW(41660),
-       EW = OW(38276);
+     var yR = GR(41663),
+       tR = GR(38233);
```

#### 338. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6257` → after: `L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6257) · [Before (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6257)

```diff
-         this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new EW.e, this._scene = WW
+         this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new tR.b, this._scene = RR
```

#### 339. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6260` → after: `L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6260) · [Before (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6260)

```diff
-         if (this._vertexBuffers[mW.k.PositionKind]) return;
+         if (this._vertexBuffers[yR.l.PositionKind]) return;
```

#### 340. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6262` → after: `L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6262) · [Before (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6262)

```diff
-         WW.push(1, 1), WW.push(-1, 1), WW.push(-1, -1), WW.push(1, -1), this._vertexBuffers[mW.k.PositionKind] = new mW.k(this._scene.VA(), WW, mW.k.PositionKind, !1, !1, 2), this._buildIndexBuffer()
+         RR.push(1, 1), RR.push(-1, 1), RR.push(-1, -1), RR.push(1, -1), this._vertexBuffers[yR.l.PositionKind] = new yR.l(this._scene.ke(), RR, yR.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
```

#### 341. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6266` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6266) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6266)

```diff
-         WW.push(0), WW.push(1), WW.push(2), WW.push(0), WW.push(2), WW.push(3), this._indexBuffer = this._scene.VA().createIndexBuffer(WW)
+         RR.push(0), RR.push(1), RR.push(2), RR.push(0), RR.push(2), RR.push(3), this._indexBuffer = this._scene.ke().createIndexBuffer(RR)
```

#### 342. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6278` → after: `L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6278) · [Before (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6278)

```diff
-         const WW = this._vertexBuffers[mW.k.PositionKind];
+         const RR = this._vertexBuffers[yR.l.PositionKind];
```

#### 343. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6294` → after: `L6294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6294) · [Before (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6294)

```diff
-         const LW = this._scene.VA();
+         const qR = this._scene.ke();
```

#### 344. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6296` → after: `L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6296) · [Before (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6296)

```diff
-           cW < WW.length - 1 ? WW[cW + 1].activate(this._scene.activeCamera || this._scene, iW?.texture) : (iW ? LW.bindFramebuffer(iW, mW, void 0, void 0, OW, EW) : NW || LW.restoreDefaultFramebuffer(), LW._debugInsertMarker?.(`post process ${WW[cW].name} output`));
+           iR < RR.length - 1 ? RR[iR + 1].activate(this._scene.activeCamera || this._scene, JR?.texture) : (JR ? qR.bindFramebuffer(JR, yR, void 0, void 0, GR, tR) : uR || qR.restoreDefaultFramebuffer(), qR._debugInsertMarker?.(`post process ${RR[iR].name} output`));
```

#### 345. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6308)

```diff
-         const PW = this._scene.VA();
+         const ZR = this._scene.ke();
```

#### 346. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6311` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6311) · [Before (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6311)

```diff
-           if (LW < cW - 1 ? wW._outputTexture = mW[LW + 1].activate(NW, iW?.texture) : (iW ? (PW.bindFramebuffer(iW, OW, void 0, void 0, EW), wW._outputTexture = iW) : (PW.restoreDefaultFramebuffer(), wW._outputTexture = null), PW._debugInsertMarker?.(`post process ${mW[LW].name} … [truncated]
+           if (qR < iR - 1 ? fR._outputTexture = yR[qR + 1].activate(uR, JR?.texture) : (JR ? (ZR.bindFramebuffer(JR, GR, void 0, void 0, tR), fR._outputTexture = JR) : (ZR.restoreDefaultFramebuffer(), fR._outputTexture = null), ZR._debugInsertMarker?.(`post process ${yR[qR].name} … [truncated]
```

#### 347. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6318-L6319` → after: `L6318-L6319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6318-L6319) · [Before (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6318-L6319)

```diff
-         const WW = this._vertexBuffers[mW.k.PositionKind];
-         WW && (WW.dispose(), this._vertexBuffers[mW.k.PositionKind] = null), this._indexBuffer && (this._scene.VA()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
+         const RR = this._vertexBuffers[yR.l.PositionKind];
+         RR && (RR.dispose(), this._vertexBuffers[yR.l.PositionKind] = null), this._indexBuffer && (this._scene.ke()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
```

#### 348. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6323` → after: `L6323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/287.js#L6323) · [Before (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/287.js#L6323)

```diff
-   41680: (WW, iW, OW) => {
+   41690: (RR, JR, GR) => {
```
