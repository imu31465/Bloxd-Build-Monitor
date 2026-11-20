# Changed — Bundle Modifications Report (Part 027 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `27 / 115` (**419** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 026](part-026.md) · [Part 028 →](part-028.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/243.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/chunks/js/243.js` (868 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9)

#### 17. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L246)

```diff
-             this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = lT.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), kT = MT.useRightHandedSystem ? yT.d.PerspectiveFovRHToRef … [truncated]
+             this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Yq.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), Eq = lq.useRightHandedSystem ? xq.e.PerspectiveFovRHToRef … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L250)

```diff
-             MT.useRightHandedSystem ? this.oblique ? yT.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -TT, this.orthoRight ?? TT, this.orthoBottom ?? -kT, this.orthoTop ?? kT, KT ? cT : this.minZ, KT ? this.minZ : cT, this.oblique.length, this.oblique.angle, this._computeObliqueDis … [truncated]
+             lq.useRightHandedSystem ? this.oblique ? xq.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -qq, this.orthoRight ?? qq, this.orthoBottom ?? -Eq, this.orthoTop ?? Eq, Oq ? gq : this.minZ, Oq ? this.minZ : gq, this.oblique.length, this.oblique.angle, this._computeObliqueDis … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L258)

```diff
-           return (this.radius || (this.target ? yT.m.Distance(this.position, this.target) : this.position.length())) + TT
+           return (this.radius || (this.target ? xq.q.Distance(this.position, this.target) : this.position.length())) + qq
```

#### 20. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L276)

```diff
-           throw (0, AT.i)("Ray")
+           throw (0, Bq.m)("Ray")
```

#### 21. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L279)

```diff
-           throw (0, AT.i)("Ray")
+           throw (0, Bq.m)("Ray")
```

#### 22. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L283)

```diff
-           for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.NJ().stopAnimation(this), this.NJ().removeCamera … [truncated]
+           for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.ZJ().stopAnimation(this), this.ZJ().removeCamera … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L302)

```diff
-           this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.NJ().Dv().releaseRenderPassId(this.renderPassId), super.dispose(kT, cT)
+           this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.ZJ().Ba().releaseRenderPassId(this.renderPassId), super.dispose(Eq, gq)
```

#### 24. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L339)

```diff
-           return yT.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Dv().isNDCHalfZRange), this._cameraRigParams.vrW … [truncated]
+           return xq.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Ba().isNDCHalfZRange), this._cameraRigParams.vrW … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L348)

```diff
-           for (let TT = 0; TT < this._rigCameras.length; TT++) this._rigCameras[TT].minZ = this.minZ, this._rigCameras[TT].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[TT].fov = this.fov, this._rigCameras[TT].upVector.UkT(this.upVector);
+           for (let qq = 0; qq < this._rigCameras.length; qq++) this._rigCameras[qq].minZ = this.minZ, this._rigCameras[qq].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[qq].fov = this.fov, this._rigCameras[qq].upVector.WG(this.upVector);
```

#### 26. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L354)

```diff
-           return TT.uniqueId = this.uniqueId, TT.type = this.getClassName(), this.parent && this.parent._serializeAsParent(TT), this.inputs && this.inputs.serialize(TT), tT.d.AppendSerializedAnimations(this, TT), TT.qt = this.serializeAnimationRanges(), TT.isEnabled = this.isEnab … [truncated]
+           return qq.uniqueId = this.uniqueId, qq.type = this.getClassName(), this.parent && this.parent._serializeAsParent(qq), this.inputs && this.inputs.serialize(qq), Vq.d.AppendSerializedAnimations(this, qq), qq.zV = this.serializeAnimationRanges(), qq.isEnabled = this.isEnab … [truncated]
```

#### 27. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L358)

```diff
-           const lT = tT.d.Clone(TT.GetConstructorFromName(this.getClassName(), kT, this.NJ(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
+           const Yq = Vq.d.Clone(qq.GetConstructorFromName(this.getClassName(), Eq, this.ZJ(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
```

#### 28. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L362)

```diff
-           const kT = yT.m.Zero();
+           const Eq = xq.q.Zero();
```

#### 29. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L369)

```diff
-           yT.m.TransformNormalToRef(TT, this.getWorldMatrix(), kT)
+           xq.q.TransformNormalToRef(qq, this.getWorldMatrix(), Eq)
```

#### 30. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L374` → after: `L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L374) · [Before (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L374)

```diff
-           const OT = fT.b.Construct(kT, cT, lT, {
+           const mq = Aq.c.Construct(Eq, gq, Yq, {
```

#### 31. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L384)

```diff
-           let TT = this.NJ().useRightHandedSystem ? -1 : 1;
+           let qq = this.ZJ().useRightHandedSystem ? -1 : 1;
```

#### 32. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L389` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L389) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L389)

```diff
-         kT = [(0, MT.F)("position")], cT = [(0, MT.F)("upVector")], IT = [(0, MT.J)()], hT = [(0, MT.J)()], NT = [(0, MT.J)()], QT = [(0, MT.J)()], ST = [(0, MT.J)()], DT = [(0, MT.J)()], aT = [(0, MT.J)()], FT = [(0, MT.J)()], rT = [(0, MT.J)()], PT = [(0, MT.J)()], wT = [(0, MT … [truncated]
+         Eq = [(0, lq.I)("position")], gq = [(0, lq.I)("upVector")], uq = [(0, lq.M)()], dq = [(0, lq.M)()], jq = [(0, lq.M)()], Hq = [(0, lq.M)()], oq = [(0, lq.M)()], Pq = [(0, lq.M)()], Qq = [(0, lq.M)()], yq = [(0, lq.M)()], tq = [(0, lq.M)()], rq = [(0, lq.M)()], vq = [(0, lq … [truncated]
```

#### 33. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L399)

```diff
-         }, null, eT), (0, lT.e)(TT, null, hT, {
+         }, null, Mq), (0, Yq.f)(qq, null, dq, {
```

#### 34. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L409)

```diff
-         }, null, eT), (0, lT.e)(TT, null, NT, {
+         }, null, Mq), (0, Yq.f)(qq, null, jq, {
```

#### 35. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L419)

```diff
-         }, null, eT), (0, lT.e)(TT, null, QT, {
+         }, null, Mq), (0, Yq.f)(qq, null, Hq, {
```

#### 36. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L429` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L429) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L429)

```diff
-         }, null, eT), (0, lT.e)(TT, null, rT, {
+         }, null, Mq), (0, Yq.f)(qq, null, tq, {
```

#### 37. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L439` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L439) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L439)

```diff
-         }, null, eT), (0, lT.e)(TT, null, PT, {
+         }, null, Mq), (0, Yq.f)(qq, null, rq, {
```

#### 38. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L449)

```diff
-         }, null, eT), (0, lT.e)(null, null, kT, {
+         }, null, Mq), (0, Yq.f)(null, null, Eq, {
```

#### 39. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L462)

```diff
-         }, GT, VT), (0, lT.e)(null, null, cT, {
+         }, Tq, zq), (0, Yq.f)(null, null, gq, {
```

#### 40. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L475)

```diff
-         }, ET, ZT), (0, lT.e)(null, null, ST, {
+         }, Sq, pq), (0, Yq.f)(null, null, oq, {
```

#### 41. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L488` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L488) · [Before (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L488)

```diff
-         }, uT, XT), (0, lT.e)(null, null, DT, {
+         }, Gq, Lq), (0, Yq.f)(null, null, Pq, {
```

#### 42. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L501)

```diff
-         }, dT, LT), (0, lT.e)(null, null, aT, {
+         }, Jq, kq), (0, Yq.f)(null, null, Qq, {
```

#### 43. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L514` → after: `L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L514) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L514)

```diff
-         }, RT, gT), (0, lT.e)(null, null, FT, {
+         }, Rq, Uq), (0, Yq.f)(null, null, yq, {
```

#### 44. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L527` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L527) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L527)

```diff
-         }, UT, YT), (0, lT.e)(null, null, wT, {
+         }, Fq, sq), (0, Yq.f)(null, null, vq, {
```

#### 45. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L540` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L540) · [Before (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L540)

```diff
-         }, BT, WT), (0, lT.e)(null, null, mT, {
+         }, Xq, wq), (0, Yq.f)(null, null, hq, {
```

#### 46. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L553)

```diff
-         }, nT, pT), (0, lT.e)(null, null, bT, {
+         }, Kq, Cq), (0, Yq.f)(null, null, nq, {
```

#### 47. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L566)

```diff
-         }, iT, qT), (0, lT.e)(null, null, zT, {
+         }, Iq, eq), (0, Yq.f)(null, null, bq, {
```

#### 48. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L579` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L579) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L579)

```diff
-         }, sT, Tk), (0, lT.e)(null, null, JT, {
+         }, Dq, qE), (0, Yq.f)(null, null, iq, {
```

#### 49. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L592)

```diff
-         }, kk, ck), (0, lT.e)(null, null, oT, {
+         }, EE, gE), (0, Yq.f)(null, null, Zq, {
```

#### 50. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L612)

```diff
-         throw (0, AT.i)("UniversalCamera")
+         throw (0, Bq.m)("UniversalCamera")
```

#### 51. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L620` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L620) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L620)

```diff
-       if (void 0 !== TT.parentId && (MT._waitingParentId = TT.parentId), void 0 !== TT.parentInstanceIndex && (MT._waitingParentInstanceIndex = TT.parentInstanceIndex), MT.inputs && (MT.inputs.parse(TT), MT._setupInputs()), TT.upVector && (MT.upVector = yT.m.FromArray(TT.upVector … [truncated]
+       if (void 0 !== qq.parentId && (lq._waitingParentId = qq.parentId), void 0 !== qq.parentInstanceIndex && (lq._waitingParentInstanceIndex = qq.parentInstanceIndex), lq.inputs && (lq.inputs.parse(qq), lq._setupInputs()), qq.upVector && (lq.upVector = xq.q.FromArray(qq.upVector … [truncated]
```

#### 52. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L632` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L632) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L632)

```diff
-         fT.b.ParseAnimationRanges(MT, TT, kT)
+         Aq.c.ParseAnimationRanges(lq, qq, Eq)
```

#### 53. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L634` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L634) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L634)

```diff
-       return TT.autoAnimate && kT.beginAnimation(MT, TT.autoAnimateFrom, TT.autoAnimateTo, TT.autoAnimateLoop, TT.autoAnimateSpeed || 1), void 0 !== TT.isEnabled && MT.PD(TT.isEnabled), MT
+       return qq.autoAnimate && Eq.beginAnimation(lq, qq.autoAnimateFrom, qq.autoAnimateTo, qq.autoAnimateLoop, qq.autoAnimateSpeed || 1), void 0 !== qq.isEnabled && lq.hG(qq.isEnabled), lq
```

#### 54. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L642)

```diff
-   39851: (TT, kT, cT) => {
+   39972: (qq, Eq, gq) => {
```

#### 55. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L644` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L644) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L644)

```diff
-       b: () => MT
+       e: () => lq
```

#### 56. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L646` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L646) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L646)

```diff
-     var lT = cT(36892);
+     var Yq = gq(37139);
```

#### 57. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L649` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L649) · [Before (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L649)

```diff
-         this._cameraPosition = kT, this._behavior = cT, this.activeInput = !1, this.speed = 1, this.lL = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
+         this._cameraPosition = Eq, this._behavior = gq, this.activeInput = !1, this.speed = 1, this.RC = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
```

#### 58. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L652)

```diff
-         const TT = this._scene.Dv().getDeltaTime(),
+         const qq = this._scene.Ba().getDeltaTime(),
```

#### 59. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L654-L656` → after: `L654-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L654-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L654-L656) · [Before (L654-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L654-L656)

```diff
-         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
-         this.panDeltaCurrentFrame.Xs(0), this.rotationDeltaCurrentFrame.Xs(0), this.zoomDeltaCurrentFrame = 0;
-         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.I5(this._calculateCurrentVelocity(this._pa … [truncated]
+         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
+         this.panDeltaCurrentFrame.A4(0), this.rotationDeltaCurrentFrame.A4(0), this.zoomDeltaCurrentFrame = 0;
+         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.Vqq(this._calculateCurrentVelocity(this._p … [truncated]
```

#### 60. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L659)

```diff
-         this._rotationVelocity.Xs(0), this.rotationAccumulatedPixels.Xs(0)
+         this._rotationVelocity.A4(0), this.rotationAccumulatedPixels.A4(0)
```

#### 61. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L662` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L662) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L662)

```diff
-         this._panVelocity.Xs(0), this.panAccumulatedPixels.Xs(0)
+         this._panVelocity.A4(0), this.panAccumulatedPixels.A4(0)
```

#### 62. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L671` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L671) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L671)

```diff
-         const kT = this._scene.Dv().getDeltaTime(),
+         const Eq = this._scene.Ba().getDeltaTime(),
```

#### 63. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L682` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L682) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L682)

```diff
-         return TT > 0 ? TT : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
+         return qq > 0 ? qq : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
```

#### 64. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L686` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L686) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L686)

```diff
-         const MT = this._scene.Dv().getDeltaTime(),
+         const lq = this._scene.Ba().getDeltaTime(),
```

#### 65. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L692)

```diff
-           lT += kT / KT * (TT > 0 ? (1 - OT) / TT : 1)
+           Yq += Eq / Oq * (qq > 0 ? (1 - mq) / qq : 1)
```

#### 66. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L698)

```diff
-   39854: (TT, kT, cT) => {
+   39977: (qq, Eq, gq) => {
```

#### 67. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L700)

```diff
-       c: () => lT
+       b: () => Yq
```

#### 68. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L812` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L812) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L812)

```diff
-   39839: (TT, kT, cT) => {
+   39943: (qq, Eq, gq) => {
```

#### 69. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L814-L815` → after: `L814-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L814-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L814-L815) · [Before (L814-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L814-L815)

```diff
-       c: () => NT,
-       g: () => tT
+       e: () => jq,
+       h: () => Vq
```

#### 70. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L817-L826` → after: `L817-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L817-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L817-L826) · [Before (L817-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L817-L826)

```diff
-     var lT = cT(39620),
-       MT = cT(39624),
-       KT = cT(39841),
-       OT = cT(36892),
-       yT = cT(36901),
-       fT = cT(39849),
-       xT = cT(39846),
-       IT = cT(39851),
-       AT = cT(39854);
-     class CT extends IT.b {
+     var Yq = gq(39757),
+       lq = gq(39759),
+       Oq = gq(39951),
+       mq = gq(37139),
+       xq = gq(37145),
+       Aq = gq(39967),
+       cq = gq(39960),
+       uq = gq(39972),
+       Bq = gq(39977);
+     class Wq extends uq.e {
```

#### 71. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L828` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L828) · [Before (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L828)

```diff
-         super(TT, kT, cT), this.input = new AT.c({
+         super(qq, Eq, gq), this.input = new Bq.b({
```

#### 72. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L856-L857` → after: `L856-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L856-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L856-L857) · [Before (L856-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L856-L857)

```diff
-     const jT = OT.d.Zero(),
-       vT = OT.f.Identity();
+     const Nq = mq.e.Zero(),
+       aq = mq.h.Identity();
```

#### 73. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L860` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L860) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L860)

```diff
-         let kT, cT, xT, IT, AT = KT.c,
+         let Eq, gq, cq, uq, Bq = Oq.e,
```

#### 74. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L877` → after: `L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L877) · [Before (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L877)

```diff
-             super(TT, kT, cT, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new OT.m(0, 0, 0), this.cameraRotation = new OT.i(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, lT.h)(this, tT, !1), this.rotation =  … [truncated]
+             super(qq, Eq, gq, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new mq.q(0, 0, 0), this.cameraRotation = new mq.p(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Yq.i)(this, Vq, !1), this.rotation =  … [truncated]
```

#### 75. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L881-L882` → after: `L881-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L881-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L881-L882) · [Before (L881-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L881-L882)

```diff
-             const kT = OT.h.Fv[0],
-               cT = OT.h.Fv[1];
+             const Eq = mq.o.Na[0],
+               gq = mq.o.Na[1];
```

#### 76. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L897` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L897) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L897)

```diff
-             return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.c … [truncated]
+             return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.c … [truncated]
```

#### 77. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L900)

```diff
-             super._initCache(), this._cache.lockedTarget = new OT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new OT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new OT.f(Number.MAX_VALUE, Number.MAX … [truncated]
+             super._initCache(), this._cache.lockedTarget = new mq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new mq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new mq.h(Number.MAX_VALUE, Number.MAX … [truncated]
```

#### 78. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L905` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L905) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L905)

```diff
-             kT ? this._cache.lockedTarget ? this._cache.lockedTarget.UkT(kT) : this._cache.lockedTarget = kT.clone() : this._cache.lockedTarget = null, this._cache.rotation.UkT(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.UkT(this.rotationQuaternion)
+             Eq ? this._cache.lockedTarget ? this._cache.lockedTarget.WG(Eq) : this._cache.lockedTarget = Eq.clone() : this._cache.lockedTarget = null, this._cache.rotation.WG(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.WG(this.rotationQuaternion)
```

#### 79. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L913` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L913) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L913)

```diff
-             const TT = this.Dv();
+             const qq = this.Ba();
```

#### 80. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L917` → after: `L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L917) · [Before (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L917)

```diff
-             this.upVector.normalize(), this._initialFocalDistance = TT.subtract(this.position).length(), this.position.z === TT.z && (this.position.z += yT.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.NJ().useRightHandedSystem ? OT.d.LookAtR … [truncated]
+             this.upVector.normalize(), this._initialFocalDistance = qq.subtract(this.position).length(), this.position.z === qq.z && (this.position.z += xq.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.ZJ().useRightHandedSystem ? mq.e.LookAtR … [truncated]
```

#### 81. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L919` → after: `L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L919) · [Before (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L919)

```diff
-             OT.f.FromRotationMatrixToRef(jT, kT), kT.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
+             mq.h.FromRotationMatrixToRef(Nq, Eq), Eq.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
```

#### 82. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L934-L935` → after: `L934-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L934-L935) · [Before (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L934-L935)

```diff
-             if (this.parent) return this.parent.getWorldMatrix().invertToRef(OT.h.Matrix[0]), OT.m.TransformNormalToRef(this.cameraDirection, OT.h.Matrix[0], OT.h.Fv[0]), this._deferredPositionUpdate.addInPlace(OT.h.Fv[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this … [truncated]
-             this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.UkT(this._deferredPositionUpdate)
+             if (this.parent) return this.parent.getWorldMatrix().invertToRef(mq.o.Matrix[0]), mq.q.TransformNormalToRef(this.cameraDirection, mq.o.Matrix[0], mq.o.Na[0]), this._deferredPositionUpdate.addInPlace(mq.o.Na[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this … [truncated]
+             this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.WG(this._deferredPositionUpdate)
```

#### 83. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L940` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L940) · [Before (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L940)

```diff
-             TT.panAccumulatedPixels.addInPlace(this.cameraDirection), TT.rotationAccumulatedPixels.x += this.cameraRotation.x, TT.rotationAccumulatedPixels.y += this.cameraRotation.y, TT.computeCurrentFrameDeltas(), this.cameraDirection.UkT(TT.panDeltaCurrentFrame), this.cameraRo … [truncated]
+             qq.panAccumulatedPixels.addInPlace(this.cameraDirection), qq.rotationAccumulatedPixels.x += this.cameraRotation.x, qq.rotationAccumulatedPixels.y += this.cameraRotation.y, qq.computeCurrentFrameDeltas(), this.cameraDirection.WG(qq.panDeltaCurrentFrame), this.cameraRot … [truncated]
```

#### 84. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L942` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L942) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L942)

```diff
-             !kT && Math.abs(this.cameraDirection.x) < cT && Math.abs(this.cameraDirection.y) < cT && Math.abs(this.cameraDirection.z) < cT && (this.cameraDirection.Xs(0), TT.resetPanVelocity());
+             !Eq && Math.abs(this.cameraDirection.x) < gq && Math.abs(this.cameraDirection.y) < gq && Math.abs(this.cameraDirection.z) < gq && (this.cameraDirection.A4(0), qq.resetPanVelocity());
```

#### 85. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L946)

```diff
-             if (this._deferredUpdated = !1, this._deferredRotationUpdate.UkT(this.rotation), this._deferredPositionUpdate.UkT(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.UkT(this.rotationQuaternion), MT && this._updatePosition(), KT) {
+             if (this._deferredUpdated = !1, this._deferredRotationUpdate.WG(this.rotation), this._deferredPositionUpdate.WG(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.WG(this.rotationQuaternion), lq && this._updatePosition(), Oq) {
```

#### 86. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L951-L952` → after: `L951-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L951-L952) · [Before (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L951-L952)

```diff
-               if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.UkT(this._deferredRotationUpdate), this.rotationQuaternion) {
-                 this._deferredRotationUpdate.lengthSquared() && (OT.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 :  … [truncated]
+               if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.WG(this._deferredRotationUpdate), this.rotationQuaternion) {
+                 this._deferredRotationUpdate.lengthSquared() && (mq.h.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 :  … [truncated]
```

#### 87. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L955` → after: `L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L955) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L955)

```diff
-             this.cameraDirection.Xs(0), this.cameraRotation.set(0, 0), super._checkInputs()
+             this.cameraDirection.A4(0), this.cameraRotation.set(0, 0), super._checkInputs()
```

#### 88. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L958` → after: `L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L958) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L958)

```diff
-             this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : OT.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
+             this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : mq.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
```

#### 89. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L961` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L961) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L961)

```diff
-             return OT.m.TransformNormalToRef(OT.m.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
+             return mq.q.TransformNormalToRef(mq.q.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
```

#### 90. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L964` → after: `L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L964) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L964)

```diff
-             return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuat … [truncated]
+             return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuat … [truncated]
```

#### 91. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L967` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L967) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L967)

```diff
-             if (this.NJ().useRightHandedSystem ? OT.d.LookAtRHToRef(TT, kT, cT, this._viewMatrix) : OT.d.LookAtLHToRef(TT, kT, cT, this._viewMatrix), this.parent) {
+             if (this.ZJ().useRightHandedSystem ? mq.e.LookAtRHToRef(qq, Eq, gq, this._viewMatrix) : mq.e.LookAtLHToRef(qq, Eq, gq, this._viewMatrix), this.parent) {
```

#### 92. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L973-L975` → after: `L973-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L973-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L973-L975) · [Before (L973-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L973-L975)

```diff
-             if (this.cameraRigMode !== KT.c.RIG_MODE_NONE) {
-               const cT = new TT(kT, this.position.clone(), this.NJ());
-               return cT.isRigCamera = !0, cT.rigParent = this, this.cameraRigMode === KT.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new OT.f), cT._cameraRigParams = {}, cT.rotationQuaternion = new OT.f), cT.mode = this.mode, cT.orthoLeft = this.orthoL … [truncated]
+             if (this.cameraRigMode !== Oq.e.RIG_MODE_NONE) {
+               const gq = new qq(Eq, this.position.clone(), this.ZJ());
+               return gq.isRigCamera = !0, gq.rigParent = this, this.cameraRigMode === Oq.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new mq.h), gq._cameraRigParams = {}, gq.rotationQuaternion = new mq.h), gq.mode = this.mode, gq.orthoLeft = this.orthoL … [truncated]
```

#### 93. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L983-L989` → after: `L983-L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L983-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L983-L989) · [Before (L983-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L983-L989)

```diff
-               case KT.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case KT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case KT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
-               case KT.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case KT.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
-                 const cT = this.cameraRigMode === KT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
-                   lT = this.cameraRigMode === KT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
+               case Oq.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case Oq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case Oq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case Oq.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case Oq.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
+                 const gq = this.cameraRigMode === Oq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
+                   Yq = this.cameraRigMode === Oq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
```

#### 94. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L993-L994` → after: `L993-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L993-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L993-L994) · [Before (L993-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L993-L994)

```diff
-               case KT.c.RIG_MODE_VR:
-                 TT.rotationQuaternion && kT.rotationQuaternion && this.rotationQuaternion ? (TT.rotationQuaternion.UkT(this.rotationQuaternion), kT.rotationQuaternion.UkT(this.rotationQuaternion)) : (TT.rotation.UkT(this.rotation), kT.rotation.UkT(this.rotation)), TT.position.UkT … [truncated]
+               case Oq.e.RIG_MODE_VR:
+                 qq.rotationQuaternion && Eq.rotationQuaternion && this.rotationQuaternion ? (qq.rotationQuaternion.WG(this.rotationQuaternion), Eq.rotationQuaternion.WG(this.rotationQuaternion)) : (qq.rotation.WG(this.rotation), Eq.rotation.WG(this.rotation)), qq.position.WG(this … [truncated]
```

#### 95. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1001` → after: `L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1001) · [Before (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1001)

```diff
-             OT.d.TranslationToRef(-lT.x, -lT.y, -lT.z, TT._TargetTransformMatrix), TT._TargetTransformMatrix.multiplyToRef(OT.d.RotationAxis(cT.upVector, kT), TT._RigCamTransformMatrix), OT.d.TranslationToRef(lT.x, lT.y, lT.z, TT._TargetTransformMatrix), TT._RigCamTransformMatrix … [truncated]
+             mq.e.TranslationToRef(-Yq.x, -Yq.y, -Yq.z, qq._TargetTransformMatrix), qq._TargetTransformMatrix.multiplyToRef(mq.e.RotationAxis(gq.upVector, Eq), qq._RigCamTransformMatrix), mq.e.TranslationToRef(Yq.x, Yq.y, Yq.z, qq._TargetTransformMatrix), qq._RigCamTransformMatrix … [truncated]
```

#### 96. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1008` → after: `L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1008) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1008)

```diff
-           kT = [(0, MT.J)()], cT = [(0, MT.F)()], xT = [(0, MT.J)()], IT = [(0, MT.t)("lockedTargetId")], (0, lT.e)(null, null, kT, {
+           Eq = [(0, lq.M)()], gq = [(0, lq.I)()], cq = [(0, lq.M)()], uq = [(0, lq.B)("lockedTargetId")], (0, Yq.f)(null, null, Eq, {
```

#### 97. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1021)

```diff
-           }, tT, hT), (0, lT.e)(null, null, cT, {
+           }, Vq, dq), (0, Yq.f)(null, null, gq, {
```

#### 98. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1034` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1034) · [Before (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1034)

```diff
-           }, NT, QT), (0, lT.e)(null, null, xT, {
+           }, jq, Hq), (0, Yq.f)(null, null, cq, {
```

#### 99. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1047)

```diff
-           }, ST, DT), (0, lT.e)(null, null, IT, {
+           }, oq, Pq), (0, Yq.f)(null, null, uq, {
```

#### 100. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1066` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1066) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1066)

```diff
-         })(), TT._RigCamTransformMatrix = new OT.d, TT._TargetTransformMatrix = new OT.d, TT._TargetFocalPoint = new OT.m, TT
+         })(), qq._RigCamTransformMatrix = new mq.e, qq._TargetTransformMatrix = new mq.e, qq._TargetFocalPoint = new mq.q, qq
```

#### 101. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1071` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1071) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1071)

```diff
-       hT || (hT = !0, xT.b.AddNodeConstructor("TargetCamera", ((TT, kT) => () => new tT(TT, OT.m.Zero(), kT))))
+       dq || (dq = !0, cq.c.AddNodeConstructor("TargetCamera", ((qq, Eq) => () => new Vq(qq, mq.q.Zero(), Eq))))
```

#### 102. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1074` → after: `L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1074) · [Before (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1074)

```diff
-   39579: (TT, kT, cT) => {
+   39714: (qq, Eq, gq) => {
```

#### 103. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1076` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1076) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1076)

```diff
-       d: () => KT
+       e: () => Oq
```

#### 104. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1078` → after: `L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1078) · [Before (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1078)

```diff
-     var lT = cT(39516);
+     var Yq = gq(39653);
```

#### 105. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1082` → after: `L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1082) · [Before (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1082)

```diff
-       MT || (MT = !0, lT.d.prototype.getInputElement = function() {
+       lq || (lq = !0, Yq.b.prototype.getInputElement = function() {
```

#### 106. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1084)

```diff
-       }, lT.d.prototype.getRenderingCanvasClientRect = function() {
+       }, Yq.b.prototype.getRenderingCanvasClientRect = function() {
```

#### 107. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1086` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1086) · [Before (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1086)

```diff
-       }, lT.d.prototype.getInputElementClientRect = function() {
+       }, Yq.b.prototype.getInputElementClientRect = function() {
```

#### 108. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1088` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1088) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1088)

```diff
-       }, lT.d.prototype.getAspectRatio = function(TT) {
+       }, Yq.b.prototype.getAspectRatio = function(qq) {
```

#### 109. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1092)

```diff
-       }, lT.d.prototype.getScreenAspectRatio = function() {
+       }, Yq.b.prototype.getScreenAspectRatio = function() {
```

#### 110. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1094` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1094) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1094)

```diff
-       }, lT.d.prototype._verifyPointerLock = function() {
+       }, Yq.b.prototype._verifyPointerLock = function() {
```

#### 111. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1099-L1101` → after: `L1099-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1099-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1099-L1101) · [Before (L1099-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1099-L1101)

```diff
-   39657: (TT, kT, cT) => {
-     var lT = cT(39516),
-       MT = cT(39666);
+   39794: (qq, Eq, gq) => {
+     var Yq = gq(39653),
+       lq = gq(39799);
```

#### 112. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1103` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1103) · [Before (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1103)

```diff
-     KT || (KT = !0, (0, MT.q)(), lT.d.prototype._loadFileAsync = async function(TT, kT, cT) {
+     Oq || (Oq = !0, (0, lq.D)(), Yq.b.prototype._loadFileAsync = async function(qq, Eq, gq) {
```

#### 113. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1113-L1114` → after: `L1113-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1113-L1114) · [Before (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1113-L1114)

```diff
-   39651: (TT, kT, cT) => {
-     (0, cT(39583).c)()
+   39789: (qq, Eq, gq) => {
+     (0, gq(39717).d)()
```

#### 114. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1116` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1116) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1116)

```diff
-   39583: (TT, kT, cT) => {
+   39717: (qq, Eq, gq) => {
```

#### 115. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1118` → after: `L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1118) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1118)

```diff
-       c: () => KT
+       d: () => Oq
```

#### 116. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1120` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1120) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1120)

```diff
-     var lT = cT(39516);
+     var Yq = gq(39653);
```

#### 117. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1124` → after: `L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1124) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1124)

```diff
-       MT || (MT = !0, lT.d.prototype.getRenderPassNames = function() {
+       lq || (lq = !0, Yq.b.prototype.getRenderPassNames = function() {
```

#### 118. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1126` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1126) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1126)

```diff
-       }, lT.d.prototype.getCurrentRenderPassName = function() {
+       }, Yq.b.prototype.getCurrentRenderPassName = function() {
```

#### 119. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1128-L1129` → after: `L1128-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1128-L1129) · [Before (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1128-L1129)

```diff
-       }, lT.d.prototype.createRenderPassId = function(TT) {
-         const kT = ++lT.d._RenderPassIdCounter;
+       }, Yq.b.prototype.createRenderPassId = function(qq) {
+         const Eq = ++Yq.b._RenderPassIdCounter;
```

#### 120. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1131` → after: `L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1131) · [Before (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1131)

```diff
-       }, lT.d.prototype.releaseRenderPassId = function(TT) {
+       }, Yq.b.prototype.releaseRenderPassId = function(qq) {
```

#### 121. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1137-L1139` → after: `L1137-L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1137-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1137-L1139) · [Before (L1137-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1137-L1139)

```diff
-             if (lT._releaseRenderPassId(TT), lT.kF)
-               for (let kT = 0; kT < lT.kF.length; ++kT) {
-                 lT.kF[kT]._removeDrawWrapper(TT)
+             if (Yq._releaseRenderPassId(qq), Yq.fn)
+               for (let Eq = 0; Eq < Yq.fn.length; ++Eq) {
+                 Yq.fn[Eq]._removeDrawWrapper(qq)
```

#### 122. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1147-L1149` → after: `L1147-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1147-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1147-L1149) · [Before (L1147-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1147-L1149)

```diff
-   39703: (TT, kT, cT) => {
-     var lT = cT(39709),
-       MT = cT(39516);
+   39827: (qq, Eq, gq) => {
+     var Yq = gq(39830),
+       lq = gq(39653);
```

#### 123. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1151` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1151) · [Before (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1151)

```diff
-     KT || (KT = !0, MT.d.GetCompatibleTextureLoader = lT.d)
+     Oq || (Oq = !0, lq.b.GetCompatibleTextureLoader = Yq.b)
```

#### 124. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1153` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1153) · [Before (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1153)

```diff
-   39586: (TT, kT, cT) => {
+   39721: (qq, Eq, gq) => {
```

#### 125. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1155` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1155) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1155)

```diff
-       d: () => KT
+       b: () => Oq
```

#### 126. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1157)

```diff
-     var lT = cT(39463);
+     var Yq = gq(39608);
```

#### 127. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1176-L1182` → after: `L1176-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1176-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1176-L1182) · [Before (L1176-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1176-L1182)

```diff
-   39597: (TT, kT, cT) => {
-     var lT = cT(39454),
-       MT = cT(38512),
-       KT = cT(39463),
-       OT = cT(39601),
-       yT = cT(39562);
-     class fT extends OT.d {
+   39732: (qq, Eq, gq) => {
+     var Yq = gq(39593),
+       lq = gq(38653),
+       Oq = gq(39608),
+       mq = gq(39736),
+       xq = gq(39703);
+     class Aq extends mq.e {
```

#### 128. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1191` → after: `L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1191) · [Before (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1191)

```diff
-           cT._bindUnboundFramebuffer(this._MSAAFramebuffer), lT.framebufferRenderbuffer(lT.FRAMEBUFFER, (0, yT.c)(TT.format) ? lT.DEPTH_STENCIL_ATTACHMENT : lT.DEPTH_ATTACHMENT, lT.RENDERBUFFER, MT.getMSAARenderBuffer()), cT._bindUnboundFramebuffer(kT)
+           gq._bindUnboundFramebuffer(this._MSAAFramebuffer), Yq.framebufferRenderbuffer(Yq.FRAMEBUFFER, (0, xq.e)(qq.format) ? Yq.DEPTH_STENCIL_ATTACHMENT : Yq.DEPTH_ATTACHMENT, Yq.RENDERBUFFER, lq.getMSAARenderBuffer()), gq._bindUnboundFramebuffer(Eq)
```

#### 129. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1239` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1239) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1239)

```diff
-         if (OT._bindUnboundFramebuffer(KT), OT.qv > 1) {
+         if (mq._bindUnboundFramebuffer(Oq), mq.Ra > 1) {
```

#### 130. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1245)

```diff
-           const KT = void 0 !== cT ? TT.TEXTURE_CUBE_MAP_POSITIVE_X + cT : TT.TEXTURE_2D;
+           const Oq = void 0 !== gq ? qq.TEXTURE_CUBE_MAP_POSITIVE_X + gq : qq.TEXTURE_2D;
```

#### 131. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1316-L1317` → after: `L1316-L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1316-L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1316-L1317) · [Before (L1316-L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1316-L1317)

```diff
-       const IT = new lT.b(this, 12);
-       if (IT.label = kT.label, !this._caps.depthTextureExtension) return MT.e.Error("Depth texture is not supported by your browser or hardware."), IT;
+       const uq = new Yq.c(this, 12);
+       if (uq.label = Eq.label, !this._caps.depthTextureExtension) return lq.b.Error("Depth texture is not supported by your browser or hardware."), uq;
```

#### 132. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1325` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1325) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1325)

```diff
-         if (15 !== AT.depthTextureFormat && 16 !== AT.depthTextureFormat && 17 !== AT.depthTextureFormat && 13 !== AT.depthTextureFormat && 14 !== AT.depthTextureFormat && 18 !== AT.depthTextureFormat) return MT.e.Error(`Depth texture ${AT.depthTextureFormat} format is not suppor … [truncated]
+         if (15 !== Bq.depthTextureFormat && 16 !== Bq.depthTextureFormat && 17 !== Bq.depthTextureFormat && 13 !== Bq.depthTextureFormat && 14 !== Bq.depthTextureFormat && 18 !== Bq.depthTextureFormat) return lq.b.Error(`Depth texture ${Bq.depthTextureFormat} format is not suppor … [truncated]
```

#### 133. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1328` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1328) · [Before (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1328)

```diff
-       const CT = (0, yT.c)(IT.format),
+       const Wq = (0, xq.e)(uq.format),
```

#### 134. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1334` → after: `L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1334) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1334)

```diff
-       if (this.qv < 2 || !TT) return 1;
+       if (this.Ra < 2 || !qq) return 1;
```

#### 135. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1360` → after: `L1360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1360) · [Before (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1360)

```diff
-       xT.texParameteri(IT, xT.TEXTURE_MAG_FILTER, AT.mag), xT.texParameteri(IT, xT.TEXTURE_MIN_FILTER, AT.min), xT.texParameteri(IT, xT.TEXTURE_WRAP_S, xT.CLAMP_TO_EDGE), xT.texParameteri(IT, xT.TEXTURE_WRAP_T, xT.CLAMP_TO_EDGE), this.qv > 1 && (0 === lT ? (xT.texParameteri(IT, x … [truncated]
+       cq.texParameteri(uq, cq.TEXTURE_MAG_FILTER, Bq.mag), cq.texParameteri(uq, cq.TEXTURE_MIN_FILTER, Bq.min), cq.texParameteri(uq, cq.TEXTURE_WRAP_S, cq.CLAMP_TO_EDGE), cq.texParameteri(uq, cq.TEXTURE_WRAP_T, cq.CLAMP_TO_EDGE), this.Ra > 1 && (0 === Yq ? (cq.texParameteri(uq, c … [truncated]
```

#### 136. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1363` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1363) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1363)

```diff
-   39448: (TT, kT, cT) => {
+   39585: (qq, Eq, gq) => {
```

#### 137. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1365` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1365) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1365)

```diff
-       d: () => lT.c
+       b: () => Yq.d
```

#### 138. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1367-L1369` → after: `L1367-L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1367-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1367-L1369) · [Before (L1367-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1367-L1369)

```diff
-     var lT = cT(39451);
-     (0, cT(39586).d)();
-     var MT = cT(39463);
+     var Yq = gq(39587);
+     (0, gq(39721).b)();
+     var lq = gq(39608);
```

#### 139. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1390-L1392` → after: `L1390-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1390-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1390-L1392) · [Before (L1390-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1390-L1392)

```diff
-     var OT = cT(39454),
-       yT = cT(38512),
-       fT = cT(39549);
+     var mq = gq(39593),
+       xq = gq(38653),
+       Aq = gq(39696);
```

#### 140. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1413)

```diff
-             vT = new OT.b(this, jT);
+             aq = new mq.c(this, Nq);
```

#### 141. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1444` → after: `L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1444) · [Before (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1444)

```diff
-         const AT = new OT.b(this, 3);
+         const Bq = new mq.c(this, 3);
```

#### 142. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1451` → after: `L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1451) · [Before (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1451)

```diff
-           CT = new OT.b(this, 8);
+           Wq = new mq.c(this, 8);
```

#### 143. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1455` → after: `L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1455) · [Before (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1455)

```diff
-         vT === AT.RGB && (vT = AT.RGBA), jT !== AT.FLOAT || this._caps.textureFloatLinearFiltering ? jT !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? jT !== AT.FLOAT || this._caps.textureFloatRender ? jT !== AT.HALF_FLOAT || this._caps.colorBufferFlo … [truncated]
+         aq === Bq.RGB && (aq = Bq.RGBA), Nq !== Bq.FLOAT || this._caps.textureFloatLinearFiltering ? Nq !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? Nq !== Bq.FLOAT || this._caps.textureFloatRender ? Nq !== Bq.HALF_FLOAT || this._caps.colorBufferFlo … [truncated]
```

#### 144. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1459)

```diff
-         if (!this.needPOTTextures || (0, fT.g)(CT.width) && (0, fT.g)(CT.height) || (MT = !1), TT) this.updateRawCubeTexture(CT, TT, cT, lT, KT, IT);
+         if (!this.needPOTTextures || (0, Aq.k)(Wq.width) && (0, Aq.k)(Wq.height) || (lq = !1), qq) this.updateRawCubeTexture(Wq, qq, gq, Yq, Oq, uq);
```

#### 145. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1483` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1483) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1483)

```diff
-         }(!this.needPOTTextures || (0, fT.g)(kT.width) && (0, fT.g)(kT.height)) && kT.generateMipMaps && 0 === yT && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), kT.isReady = !0
+         }(!this.needPOTTextures || (0, Aq.k)(Eq.width) && (0, Aq.k)(Eq.height)) && Eq.generateMipMaps && 0 === xq && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), Eq.isReady = !0
```

#### 146. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1499` → after: `L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1499) · [Before (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1499)

```diff
-             const OT = lT instanceof Promise ? await lT : lT,
+             const mq = Yq instanceof Promise ? await Yq : Yq,
```

#### 147. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1526` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1526) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1526)

```diff
-     var IT = cT(39496);
+     var uq = gq(39630);
```

#### 148. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1545` → after: `L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1545) · [Before (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1545)

```diff
-       return yT ? KT || (KT = (0, IT.n)(TT.type, 4 * kT * cT)) : CT === AT.UNSIGNED_BYTE ? (KT || (KT = new Uint8Array(4 * kT * cT)), CT = AT.UNSIGNED_BYTE) : (KT || (KT = new Float32Array(4 * kT * cT)), CT = AT.FLOAT), OT && this.flushFramebuffer(), AT.readPixels(fT, xT, kT, cT, … [truncated]
+       return xq ? Oq || (Oq = (0, uq.p)(qq.type, 4 * Eq * gq)) : Wq === Bq.UNSIGNED_BYTE ? (Oq || (Oq = new Uint8Array(4 * Eq * gq)), Wq = Bq.UNSIGNED_BYTE) : (Oq || (Oq = new Float32Array(4 * Eq * gq)), Wq = Bq.FLOAT), mq && this.flushFramebuffer(), Bq.readPixels(Aq, cq, Eq, gq, … [truncated]
```

#### 149. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1555)

```diff
-     }), (0, cT(39592).b)();
+     }), (0, gq(39725).e)();
```

#### 150. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1558-L1559` → after: `L1558-L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1558-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1558-L1559) · [Before (L1558-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1558-L1559)

```diff
-       const cT = new OT.b(this, 12);
-       if (cT.isCube = !0, 1 === this.qv) return yT.e.Error("Depth cube texture is not supported by WebGL 1."), cT;
+       const gq = new mq.c(this, 12);
+       if (gq.isCube = !0, 1 === this.Ra) return xq.b.Error("Depth cube texture is not supported by WebGL 1."), gq;
```

#### 151. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1586)

```diff
-         const cT = this.needPOTTextures ? (0, fT.c)(kT[0].width, this._caps.maxCubemapTextureSize) : kT[0].width,
+         const gq = this.needPOTTextures ? (0, Aq.g)(Eq[0].width, this._caps.maxCubemapTextureSize) : Eq[0].width,
```

#### 152. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1592)

```diff
-         TT._useSRGBBuffer && 1 === this.qv && (AT = IT);
+         qq._useSRGBBuffer && 1 === this.Ra && (Bq = uq);
```

#### 153. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1595` → after: `L1595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1595) · [Before (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1595)

```diff
-             if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void yT.e.Warn("Cannot create canvas to resize texture.");
+             if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void xq.b.Warn("Cannot create canvas to resize texture.");
```

#### 154. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1607)

```diff
-     cT(39597);
+     gq(39732);
```

#### 155. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1626)

```diff
-         KT = new OT.b(this, 5);
+         Oq = new mq.c(this, 5);
```

#### 156. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1629` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1629) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1629)

```diff
-       1 !== lT.type || this._caps.textureFloat || (lT.type = 0, yT.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), MT.texParameteri(MT.TEXTURE_CUBE_MAP, MT.TEXTURE_MAG_FILTER, fT.mag), MT.texParameteri(MT.TEXTURE_CUBE_MAP … [truncated]
+       1 !== Yq.type || this._caps.textureFloat || (Yq.type = 0, xq.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), lq.texParameteri(lq.TEXTURE_CUBE_MAP, lq.TEXTURE_MAG_FILTER, Aq.mag), lq.texParameteri(lq.TEXTURE_CUBE_MAP … [truncated]
```

#### 157. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1634-L1635` → after: `L1634-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1634-L1635) · [Before (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1634-L1635)

```diff
-     var tT = cT(39607),
-       hT = cT(39615);
+     var Vq = gq(39741),
+       dq = gq(39748);
```

#### 158. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1647` → after: `L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1647) · [Before (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1647)

```diff
-         if (AT ? TT.info.sphericalPolynomial && (fT._sphericalPolynomial = TT.info.sphericalPolynomial) : fT._sphericalPolynomial = fT._sphericalPolynomial ?? new tT.e, fT._source = 9, this.getCaps().textureLOD) return void(KT && KT(fT));
+         if (Bq ? qq.info.sphericalPolynomial && (Aq._sphericalPolynomial = qq.info.sphericalPolynomial) : Aq._sphericalPolynomial = Aq._sphericalPolynomial ?? new Vq.d, Aq._source = 9, this.getCaps().textureLOD) return void(Oq && Oq(Aq));
```

#### 159. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1653` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1653) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1653)

```diff
-         } = await cT.e(297).then((() => cT(41329))), jT = [];
+         } = await gq.e(297).then((() => gq(41515))), Nq = [];
```

#### 160. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1660)

```diff
-             QT = new OT.b(this, 2);
+             Hq = new mq.c(this, 2);
```

#### 161. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1665` → after: `L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1665) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1665)

```diff
-           } else yT.e.Warn("DDS is the only prefiltered cube map supported so far.");
+           } else xq.b.Warn("DDS is the only prefiltered cube map supported so far.");
```

#### 162. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1667)

```diff
-           const ST = new hT.c(kT);
+           const oq = new dq.d(Eq);
```

#### 163. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1673` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1673) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1673)

```diff
-     var QT = cT(39539);
+     var Hq = gq(39683);
```

#### 164. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1678` → after: `L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1678) · [Before (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1678)

```diff
-       const lT = new QT.c(cT);
+       const Yq = new Hq.e(gq);
```

#### 165. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1683` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1683) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1683)

```diff
-       const lT = new QT.c(cT);
+       const Yq = new Hq.e(gq);
```

#### 166. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1696-L1697` → after: `L1696-L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1696-L1697) · [Before (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1696-L1697)

```diff
-     var DT = cT(39482),
-       aT = cT(39516);
+     var Pq = gq(39626),
+       Qq = gq(39653);
```

#### 167. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1699-L1700` → after: `L1699-L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1699-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1699-L1700) · [Before (L1699-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1699-L1700)

```diff
-     FT || (FT = !0, aT.d.prototype.displayLoadingUI = function() {
-       if (!(0, DT.i)()) return;
+     yq || (yq = !0, Qq.b.prototype.displayLoadingUI = function() {
+       if (!(0, Pq.n)()) return;
```

#### 168. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1703-L1704` → after: `L1703-L1704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1703-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1703-L1704) · [Before (L1703-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1703-L1704)

```diff
-     }, aT.d.prototype.hideLoadingUI = function() {
-       if (!(0, DT.i)()) return;
+     }, Qq.b.prototype.hideLoadingUI = function() {
+       if (!(0, Pq.n)()) return;
```

#### 169. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1707)

```diff
-     }, Object.defineProperty(aT.d.prototype, "loadingScreen", {
+     }, Object.defineProperty(Qq.b.prototype, "loadingScreen", {
```

#### 170. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1709` → after: `L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1709) · [Before (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1709)

```diff
-         return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = aT.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
+         return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Qq.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
```

#### 171. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1716)

```diff
-     }), Object.defineProperty(aT.d.prototype, "loadingUIText", {
+     }), Object.defineProperty(Qq.b.prototype, "loadingUIText", {
```

#### 172. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1722)

```diff
-     }), Object.defineProperty(aT.d.prototype, "loadingUIBackgroundColor", {
+     }), Object.defineProperty(Qq.b.prototype, "loadingUIBackgroundColor", {
```

#### 173. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1728` → after: `L1728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1728) · [Before (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1728)

```diff
-     })), (0, cT(39579).d)();
+     })), (0, gq(39714).e)();
```

#### 174. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1730` → after: `L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1730) · [Before (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1730)

```diff
-     rT || (rT = !0, aT.d.prototype.getInputElement = function() {
+     tq || (tq = !0, Qq.b.prototype.getInputElement = function() {
```

#### 175. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1732` → after: `L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1732) · [Before (L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1732)

```diff
-     }, aT.d.prototype.getDepthFunction = function() {
+     }, Qq.b.prototype.getDepthFunction = function() {
```

#### 176. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1734` → after: `L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1734) · [Before (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1734)

```diff
-     }, aT.d.prototype.setDepthFunction = function(TT) {
+     }, Qq.b.prototype.setDepthFunction = function(qq) {
```

#### 177. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1736)

```diff
-     }, aT.d.prototype.setDepthFunctionToGreater = function() {
+     }, Qq.b.prototype.setDepthFunctionToGreater = function() {
```

#### 178. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1738` → after: `L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1738) · [Before (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1738)

```diff
-     }, aT.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
+     }, Qq.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
```

#### 179. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1740` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1740) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1740)

```diff
-     }, aT.d.prototype.setDepthFunctionToLess = function() {
+     }, Qq.b.prototype.setDepthFunctionToLess = function() {
```

#### 180. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1742` → after: `L1742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1742) · [Before (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1742)

```diff
-     }, aT.d.prototype.setDepthFunctionToLessOrEqual = function() {
+     }, Qq.b.prototype.setDepthFunctionToLessOrEqual = function() {
```

#### 181. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1744` → after: `L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1744) · [Before (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1744)

```diff
-     }, aT.d.prototype.getDepthWrite = function() {
+     }, Qq.b.prototype.getDepthWrite = function() {
```

#### 182. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1746` → after: `L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1746) · [Before (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1746)

```diff
-     }, aT.d.prototype.setDepthWrite = function(TT) {
+     }, Qq.b.prototype.setDepthWrite = function(qq) {
```

#### 183. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1748` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1748) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1748)

```diff
-     }, aT.d.prototype.setAlphaConstants = function(TT, kT, cT, lT) {
+     }, Qq.b.prototype.setAlphaConstants = function(qq, Eq, gq, Yq) {
```

#### 184. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1750` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1750) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1750)

```diff
-     }, aT.d.prototype.getAlphaMode = function() {
+     }, Qq.b.prototype.getAlphaMode = function() {
```

#### 185. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1753)

```diff
-     }, aT.d.prototype.getAlphaEquation = function() {
+     }, Qq.b.prototype.getAlphaEquation = function() {
```

#### 186. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1758` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1758) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1758)

```diff
-     PT || (PT = !0, aT.d.prototype.getStencilBuffer = function() {
+     rq || (rq = !0, Qq.b.prototype.getStencilBuffer = function() {
```

#### 187. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1760` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1760) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1760)

```diff
-     }, aT.d.prototype.setStencilBuffer = function(TT) {
+     }, Qq.b.prototype.setStencilBuffer = function(qq) {
```

#### 188. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1762` → after: `L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1762) · [Before (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1762)

```diff
-     }, aT.d.prototype.getStencilMask = function() {
+     }, Qq.b.prototype.getStencilMask = function() {
```

#### 189. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1764` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1764) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1764)

```diff
-     }, aT.d.prototype.setStencilMask = function(TT) {
+     }, Qq.b.prototype.setStencilMask = function(qq) {
```

#### 190. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1766` → after: `L1766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1766) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1766)

```diff
-     }, aT.d.prototype.getStencilFunction = function() {
+     }, Qq.b.prototype.getStencilFunction = function() {
```

#### 191. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1768` → after: `L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1768) · [Before (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1768)

```diff
-     }, aT.d.prototype.getStencilBackFunction = function() {
+     }, Qq.b.prototype.getStencilBackFunction = function() {
```

#### 192. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1770` → after: `L1770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1770) · [Before (L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1770)

```diff
-     }, aT.d.prototype.getStencilFunctionReference = function() {
+     }, Qq.b.prototype.getStencilFunctionReference = function() {
```

#### 193. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1772` → after: `L1772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1772) · [Before (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1772)

```diff
-     }, aT.d.prototype.getStencilFunctionMask = function() {
+     }, Qq.b.prototype.getStencilFunctionMask = function() {
```

#### 194. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1774` → after: `L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1774) · [Before (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1774)

```diff
-     }, aT.d.prototype.setStencilFunction = function(TT) {
+     }, Qq.b.prototype.setStencilFunction = function(qq) {
```

#### 195. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1776` → after: `L1776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1776) · [Before (L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1776)

```diff
-     }, aT.d.prototype.setStencilBackFunction = function(TT) {
+     }, Qq.b.prototype.setStencilBackFunction = function(qq) {
```

#### 196. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1778)

```diff
-     }, aT.d.prototype.setStencilFunctionReference = function(TT) {
+     }, Qq.b.prototype.setStencilFunctionReference = function(qq) {
```

#### 197. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1780` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1780) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1780)

```diff
-     }, aT.d.prototype.setStencilFunctionMask = function(TT) {
+     }, Qq.b.prototype.setStencilFunctionMask = function(qq) {
```

#### 198. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1782` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1782) · [Before (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1782)

```diff
-     }, aT.d.prototype.getStencilOperationFail = function() {
+     }, Qq.b.prototype.getStencilOperationFail = function() {
```

#### 199. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1784` → after: `L1784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1784) · [Before (L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1784)

```diff
-     }, aT.d.prototype.getStencilBackOperationFail = function() {
+     }, Qq.b.prototype.getStencilBackOperationFail = function() {
```

#### 200. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1786)

```diff
-     }, aT.d.prototype.getStencilOperationDepthFail = function() {
+     }, Qq.b.prototype.getStencilOperationDepthFail = function() {
```

#### 201. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1788` → after: `L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1788) · [Before (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1788)

```diff
-     }, aT.d.prototype.getStencilBackOperationDepthFail = function() {
+     }, Qq.b.prototype.getStencilBackOperationDepthFail = function() {
```

#### 202. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1790` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1790) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1790)

```diff
-     }, aT.d.prototype.getStencilOperationPass = function() {
+     }, Qq.b.prototype.getStencilOperationPass = function() {
```

#### 203. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1792` → after: `L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1792) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1792)

```diff
-     }, aT.d.prototype.getStencilBackOperationPass = function() {
+     }, Qq.b.prototype.getStencilBackOperationPass = function() {
```

#### 204. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1794` → after: `L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1794) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1794)

```diff
-     }, aT.d.prototype.setStencilOperationFail = function(TT) {
+     }, Qq.b.prototype.setStencilOperationFail = function(qq) {
```

#### 205. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1796` → after: `L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1796) · [Before (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1796)

```diff
-     }, aT.d.prototype.setStencilBackOperationFail = function(TT) {
+     }, Qq.b.prototype.setStencilBackOperationFail = function(qq) {
```

#### 206. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1798` → after: `L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1798) · [Before (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1798)

```diff
-     }, aT.d.prototype.setStencilOperationDepthFail = function(TT) {
+     }, Qq.b.prototype.setStencilOperationDepthFail = function(qq) {
```

#### 207. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1800` → after: `L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1800) · [Before (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1800)

```diff
-     }, aT.d.prototype.setStencilBackOperationDepthFail = function(TT) {
+     }, Qq.b.prototype.setStencilBackOperationDepthFail = function(qq) {
```

#### 208. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1802` → after: `L1802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1802) · [Before (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1802)

```diff
-     }, aT.d.prototype.setStencilOperationPass = function(TT) {
+     }, Qq.b.prototype.setStencilOperationPass = function(qq) {
```

#### 209. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1804` → after: `L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1804) · [Before (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1804)

```diff
-     }, aT.d.prototype.setStencilBackOperationPass = function(TT) {
+     }, Qq.b.prototype.setStencilBackOperationPass = function(qq) {
```

#### 210. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1806` → after: `L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1806) · [Before (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1806)

```diff
-     }, aT.d.prototype.cacheStencilState = function() {
+     }, Qq.b.prototype.cacheStencilState = function() {
```

#### 211. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1808` → after: `L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1808) · [Before (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1808)

```diff
-     }, aT.d.prototype.restoreStencilState = function() {
+     }, Qq.b.prototype.restoreStencilState = function() {
```

#### 212. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1811` → after: `L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1811) · [Before (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1811)

```diff
-     cT(39651);
+     gq(39789);
```

#### 213. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1813` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1813) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1813)

```diff
-     wT || (wT = !0, aT.d.prototype.createDepthStencilTexture = function(TT, kT, cT) {
+     vq || (vq = !0, Qq.b.prototype.createDepthStencilTexture = function(qq, Eq, gq) {
```

#### 214. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1820` → after: `L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1820) · [Before (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1820)

```diff
-     cT(39657), cT(39703);
+     gq(39794), gq(39827);
```

#### 215. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1830` → after: `L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1830) · [Before (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1830)

```diff
-   39451: (TT, kT, cT) => {
+   39587: (qq, Eq, gq) => {
```

#### 216. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1832` → after: `L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1832) · [Before (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1832)

```diff
-       c: () => aT
+       d: () => Qq
```

#### 217. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1834-L1837` → after: `L1834-L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1834-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1834-L1837) · [Before (L1834-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1834-L1837)

```diff
-     var lT = cT(39454),
-       MT = cT(36925),
-       KT = cT(39463),
-       OT = cT(39521);
+     var Yq = gq(39593),
+       lq = gq(37153),
+       Oq = gq(39608),
+       mq = gq(39662);
```

#### 218. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1844` → after: `L1844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1844) · [Before (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1844)

```diff
-         let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.d.Now;
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.c.Now;
```

#### 219. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1913-L1917` → after: `L1913-L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1913-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1913-L1917) · [Before (L1913-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1913-L1917)

```diff
-     var xT = cT(39539),
-       IT = cT(38512),
-       AT = cT(39557),
-       CT = cT(39516),
-       jT = cT(39482);
+     var cq = gq(39683),
+       uq = gq(38653),
+       Bq = gq(39698),
+       Wq = gq(39653),
+       Nq = gq(39626);
```

#### 220. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1921` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1921) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1921)

```diff
-         if (!(0, jT.d)() || !document.body) return null;
+         if (!(0, Nq.f)() || !document.body) return null;
```

#### 221. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1939)

```diff
-         return tT(OT) ? OT : null
+         return Vq(mq) ? mq : null
```

#### 222. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1945` → after: `L1945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1945) · [Before (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1945)

```diff
-           "undefined" !== typeof OffscreenCanvas ? kT = new OffscreenCanvas(64, 64) : (0, jT.d)() && "function" === typeof document.createElement && (kT = document.createElement("canvas"), kT.width = 64, kT.height = 64);
+           "undefined" !== typeof OffscreenCanvas ? Eq = new OffscreenCanvas(64, 64) : (0, Nq.f)() && "function" === typeof document.createElement && (Eq = document.createElement("canvas"), Eq.width = 64, Eq.height = 64);
```

#### 223. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1957)

```diff
-           return tT(OT) ? OT : null
+           return Vq(mq) ? mq : null
```

#### 224. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1992-L1995` → after: `L1992-L1995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1992-L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1992-L1995) · [Before (L1992-L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1992-L1995)

```diff
-     var NT = cT(39571),
-       QT = cT(39514),
-       ST = cT(39579),
-       DT = cT(39583);
+     var jq = gq(39712),
+       Hq = gq(39644),
+       oq = gq(39714),
+       Pq = gq(39717);
```

#### 225. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L1998` → after: `L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L1998) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L1998)

```diff
-         return CT.d.NpmPackage
+         return Wq.b.NpmPackage
```

#### 226. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2001` → after: `L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2001) · [Before (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2001)

```diff
-         return CT.d.Version
+         return Wq.b.Version
```

#### 227. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2004` → after: `L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2004) · [Before (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2004)

```diff
-         return MT.d.Instances
+         return lq.b.Instances
```

#### 228. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2007` → after: `L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2007) · [Before (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2007)

```diff
-         return MT.d.LastCreatedEngine
+         return lq.b.LastCreatedEngine
```

#### 229. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2010` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2010) · [Before (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2010)

```diff
-         return MT.d.LastCreatedScene
+         return lq.b.LastCreatedScene
```

#### 230. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2013` → after: `L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2013) · [Before (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2013)

```diff
-         return CT.d.DefaultLoadingScreenFactory(TT)
+         return Wq.b.DefaultLoadingScreenFactory(qq)
```

#### 231. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2026` → after: `L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2026) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2026)

```diff
-         (0, ST.d)(), (0, DT.c)(), super(TT, kT, cT, lT), this._performanceMonitor = new yT, this._drawCalls = new NT.b, TT && (this._features.supportRenderPasses = !0)
+         (0, oq.e)(), (0, Pq.d)(), super(qq, Eq, gq, Yq), this._performanceMonitor = new xq, this._drawCalls = new jq.b, qq && (this._features.supportRenderPasses = !0)
```

#### 232. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2050` → after: `L2050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2050) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2050)

```diff
-             }(kT), !CT.d.audioEngine && cT.audioEngine && CT.d.AudioEngineFactory && (CT.d.audioEngine = CT.d.AudioEngineFactory(TT.getRenderingCanvas(), TT.getAudioContext(), TT.getAudioDestination())), (0, jT.d)() && (TT._onFullscreenChange = () => {
+             }(Eq), !Wq.b.audioEngine && gq.audioEngine && Wq.b.AudioEngineFactory && (Wq.b.audioEngine = Wq.b.AudioEngineFactory(qq.getRenderingCanvas(), qq.getAudioContext(), qq.getAudioDestination())), (0, Nq.f)() && (qq._onFullscreenChange = () => {
```

#### 233. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2054` → after: `L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2054) · [Before (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2054)

```diff
-             }, document.addEventListener("pointerlockchange", TT._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", TT._onPointerLockChange, !1)), TT.enableOfflineSupport = void 0 !== CT.d.OfflineProviderFactory, TT._deterministicLockstep = !!cT.deter … [truncated]
+             }, document.addEventListener("pointerlockchange", qq._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", qq._onPointerLockChange, !1)), qq.enableOfflineSupport = void 0 !== Wq.b.OfflineProviderFactory, qq._deterministicLockstep = !!gq.deter … [truncated]
```

#### 234. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2075` → after: `L2075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2075) · [Before (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2075)

```diff
-               MT(`Error loading image ${KT.src}`)
+               lq(`Error loading image ${Oq.src}`)
```

#### 235. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2134` → after: `L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2134) · [Before (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2134)

```diff
-         this._measureFps(), super.iN()
+         this._measureFps(), super.Qr()
```

#### 236. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2150` → after: `L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2150) · [Before (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2150)

```diff
-         if (lT.attachShader(KT, kT), lT.attachShader(KT, cT), this.qv > 1 && MT) {
+         if (Yq.attachShader(Oq, Eq), Yq.attachShader(Oq, gq), this.Ra > 1 && lq) {
```

#### 237. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2154` → after: `L2154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2154) · [Before (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2154)

```diff
-         return lT.linkProgram(KT), this.qv > 1 && MT && this.bindTransformFeedback(null), TT.context = lT, TT.vertexShader = kT, TT.fragmentShader = cT, TT.isParallelCompiled || this._finalizePipelineContext(TT), KT
+         return Yq.linkProgram(Oq), this.Ra > 1 && lq && this.bindTransformFeedback(null), qq.context = Yq, qq.vertexShader = Eq, qq.fragmentShader = gq, qq.isParallelCompiled || this._finalizePipelineContext(qq), Oq
```

#### 238. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2200` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2200) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2200)

```diff
-           yT = new lT.b(this, 15, !0);
+           xq = new Yq.c(this, 15, !0);
```

#### 239. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2237` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2237) · [Before (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2237)

```diff
-         if (1 === this.qv) return void IT.e.Error("WebGL 1 does not support texture comparison.");
+         if (1 === this.Ra) return void uq.b.Error("WebGL 1 does not support texture comparison.");
```

#### 240. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2244-L2245` → after: `L2244-L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2244-L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2244-L2245) · [Before (L2244-L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2244-L2245)

```diff
-         const cT = new xT.c(kT);
-         return cT.DA = TT, this.bindArrayBuffer(cT), this._gl.bufferData(this._gl.ARRAY_BUFFER, TT, this._gl.DYNAMIC_DRAW), cT.references = 1, cT
+         const gq = new cq.e(Eq);
+         return gq.WB = qq, this.bindArrayBuffer(gq), this._gl.bufferData(this._gl.ARRAY_BUFFER, qq, this._gl.DYNAMIC_DRAW), gq.references = 1, gq
```

#### 241. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2255` → after: `L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2255) · [Before (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2255)

```diff
-           (0, QT.g)((() => {
+           (0, Hq.e)((() => {
```

#### 242. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2273` → after: `L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2273) · [Before (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2273)

```diff
-             1 === MT.d.Instances.length && CT.d.audioEngine && (CT.d.audioEngine.dispose(), CT.d.audioEngine = null);
+             1 === lq.b.Instances.length && Wq.b.audioEngine && (Wq.b.audioEngine.dispose(), Wq.b.audioEngine = null);
```

#### 243. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2275` → after: `L2275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2275) · [Before (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2275)

```diff
-             cT && "function" === typeof cT.removeEventListener && (cT.removeEventListener("blur", TT._onBlur), cT.removeEventListener("focus", TT._onFocus)), kT && (kT.removeEventListener("focus", TT._onCanvasFocus), kT.removeEventListener("blur", TT._onCanvasBlur), kT.removeEven … [truncated]
+             gq && "function" === typeof gq.removeEventListener && (gq.removeEventListener("blur", qq._onBlur), gq.removeEventListener("focus", qq._onFocus)), Eq && (Eq.removeEventListener("focus", qq._onCanvasFocus), Eq.removeEventListener("blur", qq._onCanvasBlur), Eq.removeEven … [truncated]
```

#### 244. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2281` → after: `L2281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2281) · [Before (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2281)

```diff
-   39601: (TT, kT, cT) => {
+   39736: (qq, Eq, gq) => {
```

#### 245. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2283` → after: `L2283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2283) · [Before (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2283)

```diff
-       d: () => MT
+       e: () => lq
```

#### 246. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2285` → after: `L2285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2285) · [Before (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2285)

```diff
-     var lT = cT(39562);
+     var Yq = gq(39703);
```

#### 247. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2291` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2291) · [Before (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2291)

```diff
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = TT, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, T … [truncated]
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = qq, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, q … [truncated]
```

#### 248. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2340` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2340) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2340)

```diff
-         return kT.isCube ? 6 * cT + lT : kT.is3D ? 0 : cT
+         return Eq.isCube ? 6 * gq + Yq : Eq.is3D ? 0 : gq
```

#### 249. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2362` → after: `L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2362) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2362)

```diff
-         Array.isArray(TT) ? this._textures = TT : this._textures = TT ? [TT] : null
+         Array.isArray(qq) ? this._textures = qq : this._textures = qq ? [qq] : null
```

#### 250. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2436` → after: `L2436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2436) · [Before (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2436)

```diff
-                 pKT: lT,
+                 wmq: Yq,
```

#### 251. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2497)

```diff
-   40051: (TT, kT, cT) => {
+   40186: (qq, Eq, gq) => {
```

#### 252. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2499` → after: `L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2499) · [Before (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2499)

```diff
-       c: () => lT
+       e: () => Yq
```

#### 253. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2529` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2529) · [Before (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2529)

```diff
-   39709: (TT, kT, cT) => {
+   39830: (qq, Eq, gq) => {
```

#### 254. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2531` → after: `L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2531) · [Before (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2531)

```diff
-       d: () => OT
+       b: () => mq
```

#### 255. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2533` → after: `L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2533) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2533)

```diff
-     var lT = cT(38512);
+     var Yq = gq(38653);
```

#### 256. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2539` → after: `L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2539) · [Before (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2539)

```diff
-       })(TT) && lT.e.Warn(`Extension with the name '${TT}' already exists`), MT.set(TT, kT)
+       })(qq) && Yq.b.Warn(`Extension with the name '${qq}' already exists`), lq.set(qq, Eq)
```

#### 257. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2543` → after: `L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2543) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2543)

```diff
-       "image/ktx" !== kT && "image/ktx2" !== kT || (TT = ".ktx"), MT.has(TT) || (TT.endsWith(".ies") && KT(".ies", (async () => await cT.e(300).then((() => cT(41341))).then((TT => new TT._IESTextureLoader)))), TT.endsWith(".dds") && KT(".dds", (async () => await cT.e(298).then((( … [truncated]
+       "image/ktx" !== Eq && "image/ktx2" !== Eq || (qq = ".ktx"), lq.has(qq) || (qq.endsWith(".ies") && Oq(".ies", (async () => await gq.e(300).then((() => gq(41525))).then((qq => new qq._IESTextureLoader)))), qq.endsWith(".dds") && Oq(".dds", (async () => await gq.e(298).then((( … [truncated]
```

#### 258. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2548` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2548) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2548)

```diff
-   40077: (TT, kT, cT) => {
+   40202: (qq, Eq, gq) => {
```

#### 259. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2550-L2551` → after: `L2550-L2551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2550-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2550-L2551) · [Before (L2550-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2550-L2551)

```diff
-       c: () => OT,
-       e: () => xT
+       b: () => mq,
+       f: () => cq
```

#### 260. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2553-L2555` → after: `L2553-L2555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2553-L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2553-L2555) · [Before (L2553-L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2553-L2555)

```diff
-     var lT = cT(39908),
-       MT = cT(39649),
-       KT = cT(36949);
+     var Yq = gq(40037),
+       lq = gq(39786),
+       Oq = gq(37171);
```

#### 261. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2557` → after: `L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2557) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2557)

```diff
-       get o4() {
+       get Bqq() {
```

#### 262. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2560` → after: `L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2560) · [Before (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2560)

```diff
-       set o4(TT) {
+       set Bqq(qq) {
```

#### 263. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2564` → after: `L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2564) · [Before (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2564)

```diff
-         return this.o4
+         return this.Bqq
```

#### 264. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2567` → after: `L2567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2567) · [Before (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2567)

```diff
-         super(TT, kT, !0), this._waitingSubMaterialsUniqueIds = [], this.NJ().addMultiMaterial(this), this.o4 = [], this._storeEffectOnSubMeshes = !0
+         super(qq, Eq, !0), this._waitingSubMaterialsUniqueIds = [], this.ZJ().addMultiMaterial(this), this.Bqq = [], this._storeEffectOnSubMeshes = !0
```

#### 265. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2584` → after: `L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2584) · [Before (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2584)

```diff
-         return TT < 0 || TT >= this.o4.length ? this.NJ().defaultMaterial : this.o4[TT]
+         return qq < 0 || qq >= this.Bqq.length ? this.ZJ().defaultMaterial : this.Bqq[qq]
```

#### 266. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2587` → after: `L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2587) · [Before (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2587)

```diff
-         return super.getActiveTextures().concat(...this.o4.map((TT => TT ? TT.getActiveTextures() : [])))
+         return super.getActiveTextures().concat(...this.Bqq.map((qq => qq ? qq.getActiveTextures() : [])))
```

#### 267. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2591-L2592` → after: `L2591-L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2591-L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2591-L2592) · [Before (L2591-L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2591-L2592)

```diff
-         for (let kT = 0; kT < this.o4.length; kT++)
-           if (this.o4[kT]?.hasTexture(TT)) return !0;
+         for (let Eq = 0; Eq < this.Bqq.length; Eq++)
+           if (this.Bqq[Eq]?.hasTexture(qq)) return !0;
```

#### 268. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2599-L2600` → after: `L2599-L2600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2599-L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2599-L2600) · [Before (L2599-L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2599-L2600)

```diff
-         for (let lT = 0; lT < this.o4.length; lT++) {
-           const MT = this.o4[lT];
+         for (let Yq = 0; Yq < this.Bqq.length; Yq++) {
+           const lq = this.Bqq[Yq];
```

#### 269. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2612-L2613` → after: `L2612-L2613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2612-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2612-L2613) · [Before (L2612-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2612-L2613)

```diff
-         const cT = new OT(TT, this.NJ());
-         for (let lT = 0; lT < this.o4.length; lT++) {
+         const gq = new mq(qq, this.ZJ());
+         for (let Yq = 0; Yq < this.Bqq.length; Yq++) {
```

#### 270. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2615-L2616` → after: `L2615-L2616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2615-L2616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2615-L2616) · [Before (L2615-L2616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2615-L2616)

```diff
-           const KT = this.o4[lT];
-           MT = kT && KT ? KT.clone(TT + "-" + KT.name) : this.o4[lT], cT.o4.push(MT)
+           const Oq = this.Bqq[Yq];
+           lq = Eq && Oq ? Oq.clone(qq + "-" + Oq.name) : this.Bqq[Yq], gq.Bqq.push(lq)
```

#### 271. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2623-L2624` → after: `L2623-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2623-L2624) · [Before (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2623-L2624)

```diff
-         for (let kT = 0; kT < this.o4.length; kT++) {
-           const cT = this.o4[kT];
+         for (let Eq = 0; Eq < this.Bqq.length; Eq++) {
+           const gq = this.Bqq[Eq];
```

#### 272. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2630` → after: `L2630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2630) · [Before (L2630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2630)

```diff
-         const lT = this.NJ();
+         const Yq = this.ZJ();
```

#### 273. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2633-L2634` → after: `L2633-L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2633-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2633-L2634) · [Before (L2633-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2633-L2634)

```diff
-           for (let KT = 0; KT < this.o4.length; KT++) {
-             const cT = this.o4[KT];
+           for (let Oq = 0; Oq < this.Bqq.length; Oq++) {
+             const gq = this.Bqq[Oq];
```

#### 274. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2647` → after: `L2647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2647) · [Before (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2647)

```diff
-         for (const lT of TT.materials) cT.o4.push(kT.getLastMaterialById(lT));
+         for (const Yq of qq.materials) gq.Bqq.push(Eq.getLastMaterialById(Yq));
```

#### 275. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2655` → after: `L2655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2655) · [Before (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2655)

```diff
-   39849: (TT, kT, cT) => {
+   39967: (qq, Eq, gq) => {
```

#### 276. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2657` → after: `L2657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2657) · [Before (L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2657)

```diff
-       c: () => OT
+       b: () => mq
```

#### 277. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2659` → after: `L2659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2659) · [Before (L2659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2659)

```diff
-     var lT, MT, KT = cT(36892);
+     var Yq, lq, Oq = gq(37139);
```

#### 278. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2664` → after: `L2664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2664) · [Before (L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2664)

```diff
-     OT.X = new KT.m(1, 0, 0), OT.Y = new KT.m(0, 1, 0), OT.Z = new KT.m(0, 0, 1),
+     mq.X = new Oq.q(1, 0, 0), mq.Y = new Oq.q(0, 1, 0), mq.Z = new Oq.q(0, 0, 1),
```

#### 279. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2669` → after: `L2669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2669) · [Before (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2669)

```diff
-   39607: (TT, kT, cT) => {
+   39741: (qq, Eq, gq) => {
```

#### 280. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2672` → after: `L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2672) · [Before (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2672)

```diff
-       e: () => xT
+       d: () => cq
```

#### 281. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2674` → after: `L2674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2674) · [Before (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2674)

```diff
-     var lT = cT(36892);
+     var Yq = gq(37139);
```

#### 282. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2681` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2681) · [Before (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2681)

```diff
-         this.preScaled = !1, this.l00 = lT.m.Zero(), this.l1_1 = lT.m.Zero(), this.l10 = lT.m.Zero(), this.l11 = lT.m.Zero(), this.l2_2 = lT.m.Zero(), this.l2_1 = lT.m.Zero(), this.l20 = lT.m.Zero(), this.l21 = lT.m.Zero(), this.l22 = lT.m.Zero()
+         this.preScaled = !1, this.l00 = Yq.q.Zero(), this.l1_1 = Yq.q.Zero(), this.l10 = Yq.q.Zero(), this.l11 = Yq.q.Zero(), this.l2_2 = Yq.q.Zero(), this.l2_1 = Yq.q.Zero(), this.l20 = Yq.q.Zero(), this.l21 = Yq.q.Zero(), this.l22 = Yq.q.Zero()
```

#### 283. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2684-L2687` → after: `L2684-L2687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2684-L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2684-L2687) · [Before (L2684-L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2684-L2687)

```diff
-         lT.h.Fv[0].set(kT.r, kT.g, kT.b);
-         const MT = lT.h.Fv[0],
-           KT = lT.h.Fv[1];
-         MT.scaleToRef(cT, KT), KT.scaleToRef(OT(0, TT), lT.h.Fv[2]), this.l00.addInPlace(lT.h.Fv[2]), KT.scaleToRef(OT(1, TT), lT.h.Fv[2]), this.l1_1.addInPlace(lT.h.Fv[2]), KT.scaleToRef(OT(2, TT), lT.h.Fv[2]), this.l10.addInPlace(lT.h.Fv[2]), KT.scaleToRef(OT(3, TT), lT.h.Fv[2] … [truncated]
+         Yq.o.Na[0].set(Eq.r, Eq.g, Eq.b);
+         const lq = Yq.o.Na[0],
+           Oq = Yq.o.Na[1];
+         lq.scaleToRef(gq, Oq), Oq.scaleToRef(mq(0, qq), Yq.o.Na[2]), this.l00.addInPlace(Yq.o.Na[2]), Oq.scaleToRef(mq(1, qq), Yq.o.Na[2]), this.l1_1.addInPlace(Yq.o.Na[2]), Oq.scaleToRef(mq(2, qq), Yq.o.Na[2]), this.l10.addInPlace(Yq.o.Na[2]), Oq.scaleToRef(mq(3, qq), Yq.o.Na[2] … [truncated]
```

#### 284. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2702` → after: `L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2702) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2702)

```diff
-         return lT.m.FromArrayToRef(TT[0], 0, this.l00), lT.m.FromArrayToRef(TT[1], 0, this.l1_1), lT.m.FromArrayToRef(TT[2], 0, this.l10), lT.m.FromArrayToRef(TT[3], 0, this.l11), lT.m.FromArrayToRef(TT[4], 0, this.l2_2), lT.m.FromArrayToRef(TT[5], 0, this.l2_1), lT.m.FromArrayTo … [truncated]
+         return Yq.q.FromArrayToRef(qq[0], 0, this.l00), Yq.q.FromArrayToRef(qq[1], 0, this.l1_1), Yq.q.FromArrayToRef(qq[2], 0, this.l10), Yq.q.FromArrayToRef(qq[3], 0, this.l11), Yq.q.FromArrayToRef(qq[4], 0, this.l2_2), Yq.q.FromArrayToRef(qq[5], 0, this.l2_1), Yq.q.FromArrayTo … [truncated]
```

#### 285. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2705` → after: `L2705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2705) · [Before (L2705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2705)

```diff
-         return lT.m.FromFloatsToRef(TT[0], TT[1], TT[2], this.l00), lT.m.FromFloatsToRef(TT[3], TT[4], TT[5], this.l1_1), lT.m.FromFloatsToRef(TT[6], TT[7], TT[8], this.l10), lT.m.FromFloatsToRef(TT[9], TT[10], TT[11], this.l11), lT.m.FromFloatsToRef(TT[12], TT[13], TT[14], this. … [truncated]
+         return Yq.q.FromFloatsToRef(qq[0], qq[1], qq[2], this.l00), Yq.q.FromFloatsToRef(qq[3], qq[4], qq[5], this.l1_1), Yq.q.FromFloatsToRef(qq[6], qq[7], qq[8], this.l10), Yq.q.FromFloatsToRef(qq[9], qq[10], qq[11], this.l11), Yq.q.FromFloatsToRef(qq[12], qq[13], qq[14], this. … [truncated]
```

#### 286. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2717` → after: `L2717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2717) · [Before (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2717)

```diff
-         this.x = lT.m.Zero(), this.y = lT.m.Zero(), this.z = lT.m.Zero(), this.xx = lT.m.Zero(), this.yy = lT.m.Zero(), this.zz = lT.m.Zero(), this.xy = lT.m.Zero(), this.yz = lT.m.Zero(), this.zx = lT.m.Zero()
+         this.x = Yq.q.Zero(), this.y = Yq.q.Zero(), this.z = Yq.q.Zero(), this.xx = Yq.q.Zero(), this.yy = Yq.q.Zero(), this.zz = Yq.q.Zero(), this.xy = Yq.q.Zero(), this.yz = Yq.q.Zero(), this.zx = Yq.q.Zero()
```

#### 287. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2723-L2724` → after: `L2723-L2724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2723-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2723-L2724) · [Before (L2723-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2723-L2724)

```diff
-         lT.h.Fv[0].I5(TT.r, TT.g, TT.b);
-         const kT = lT.h.Fv[0];
+         Yq.o.Na[0].Vqq(qq.r, qq.g, qq.b);
+         const Eq = Yq.o.Na[0];
```

#### 288. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2731` → after: `L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2731) · [Before (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2731)

```diff
-         return this._harmonics = TT, this.x.UkT(TT.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.UkT(TT.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.UkT(TT.l10), this.z.scaleInPlace(1.02333), this.xx.UkT(TT.l00), lT.h.Fv[0].UkT(TT.l20).scaleInPlace(. … [truncated]
+         return this._harmonics = qq, this.x.WG(qq.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.WG(qq.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.WG(qq.l10), this.z.scaleInPlace(1.02333), this.xx.WG(qq.l00), Yq.o.Na[0].WG(qq.l20).scaleInPlace(.24770 … [truncated]
```

#### 289. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2738` → after: `L2738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2738) · [Before (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2738)

```diff
-         return lT.m.FromArrayToRef(TT[0], 0, kT.x), lT.m.FromArrayToRef(TT[1], 0, kT.y), lT.m.FromArrayToRef(TT[2], 0, kT.z), lT.m.FromArrayToRef(TT[3], 0, kT.xx), lT.m.FromArrayToRef(TT[4], 0, kT.yy), lT.m.FromArrayToRef(TT[5], 0, kT.zz), lT.m.FromArrayToRef(TT[6], 0, kT.yz), lT … [truncated]
+         return Yq.q.FromArrayToRef(qq[0], 0, Eq.x), Yq.q.FromArrayToRef(qq[1], 0, Eq.y), Yq.q.FromArrayToRef(qq[2], 0, Eq.z), Yq.q.FromArrayToRef(qq[3], 0, Eq.xx), Yq.q.FromArrayToRef(qq[4], 0, Eq.yy), Yq.q.FromArrayToRef(qq[5], 0, Eq.zz), Yq.q.FromArrayToRef(qq[6], 0, Eq.yz), Yq … [truncated]
```

#### 290. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2742` → after: `L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2742) · [Before (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2742)

```diff
-   40066: (TT, kT, cT) => {
+   40197: (qq, Eq, gq) => {
```

#### 291. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2745` → after: `L2745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2745) · [Before (L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2745)

```diff
-       g: () => GT
+       f: () => Tq
```

#### 292. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2747-L2755` → after: `L2747-L2755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2747-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2747-L2755) · [Before (L2747-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2747-L2755)

```diff
-     var lT = cT(39620),
-       MT = cT(36932),
-       KT = cT(36892),
-       OT = cT(39782),
-       yT = cT(40038),
-       fT = cT(40071),
-       xT = cT(39775),
-       IT = cT(39926),
-       AT = cT(39770);
+     var Yq = gq(39757),
+       lq = gq(37156),
+       Oq = gq(37139),
+       mq = gq(39879),
+       xq = gq(40176),
+       Aq = gq(40199),
+       cq = gq(39876),
+       uq = gq(40055),
+       Bq = gq(39870);
```

#### 293. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2758` → after: `L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2758) · [Before (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2758)

```diff
-         this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new KT.m(0, 0, 0), this._diffPositionForCollisions = new KT.m(0, 0, 0), this._collisionResponse = !0
+         this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Oq.q(0, 0, 0), this._diffPositionForCollisions = new Oq.q(0, 0, 0), this._collisionResponse = !0
```

#### 294. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2761-L2770` → after: `L2761-L2770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2761-L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2761-L2770) · [Before (L2761-L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2761-L2770)

```diff
-     var jT, vT, tT, hT = cT(39500),
-       NT = cT(39694),
-       QT = cT(39932),
-       ST = cT(37093),
-       DT = cT(36901),
-       aT = cT(39849),
-       FT = cT(38512),
-       rT = cT(39624),
-       PT = cT(39516),
-       wT = cT(36949);
+     var Nq, aq, Vq, dq = gq(39636),
+       jq = gq(39819),
+       Hq = gq(40067),
+       oq = gq(37289),
+       Pq = gq(37145),
+       Qq = gq(39967),
+       yq = gq(38653),
+       tq = gq(39759),
+       rq = gq(39653),
+       vq = gq(37171);
```

#### 295. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2777` → after: `L2777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2777) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2777)

```diff
-       TT instanceof Float32Array ? KT.d.FromArrayToRef(TT, kT, cT) : cT.I5((0, NT.e)(TT[kT]), (0, NT.e)(TT[kT + 1]), (0, NT.e)(TT[kT + 2]), (0, NT.e)(TT[kT + 3]), (0, NT.e)(TT[kT + 4]), (0, NT.e)(TT[kT + 5]), (0, NT.e)(TT[kT + 6]), (0, NT.e)(TT[kT + 7]), (0, NT.e)(TT[kT + 8]), (0 … [truncated]
+       qq instanceof Float32Array ? Oq.e.FromArrayToRef(qq, Eq, gq) : gq.Vqq((0, jq.e)(qq[Eq]), (0, jq.e)(qq[Eq + 1]), (0, jq.e)(qq[Eq + 2]), (0, jq.e)(qq[Eq + 3]), (0, jq.e)(qq[Eq + 4]), (0, jq.e)(qq[Eq + 5]), (0, jq.e)(qq[Eq + 6]), (0, jq.e)(qq[Eq + 7]), (0, jq.e)(qq[Eq + 8]), ( … [truncated]
```

#### 296. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2784` → after: `L2784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2784) · [Before (L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2784)

```diff
-       if (!(jT instanceof Float32Array) && !(jT instanceof Uint16Array)) return FT.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
+       if (!(Nq instanceof Float32Array) && !(Nq instanceof Uint16Array)) return yq.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
```

#### 297. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2794-L2797` → after: `L2794-L2797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2794-L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2794-L2797) · [Before (L2794-L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2794-L2797)

```diff
-       if (!isFinite(tT) || tT < 0 || tT >= vT.height) return FT.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
-       const hT = KT.h.Fv[0],
-         NT = KT.h.Matrix[0],
-         QT = KT.h.Matrix[1],
+       if (!isFinite(Vq) || Vq < 0 || Vq >= aq.height) return yq.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
+       const dq = Oq.o.Na[0],
+         jq = Oq.o.Matrix[0],
+         Hq = Oq.o.Matrix[1],
```

#### 298. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2799` → after: `L2799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2799) · [Before (L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2799)

```diff
-         DT = kT === OT.l.NormalKind ? KT.m.TransformNormalFromFloatsToRef : KT.m.TransformCoordinatesFromFloatsToRef;
+         Pq = Eq === mq.g.NormalKind ? Oq.q.TransformNormalFromFloatsToRef : Oq.q.TransformCoordinatesFromFloatsToRef;
```

#### 299. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2811` → after: `L2811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2811) · [Before (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2811)

```diff
-         this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = KT.m.Zero(), this.subDiv = {
+         this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Oq.q.Zero(), this.subDiv = {
```

#### 300. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2826` → after: `L2826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2826) · [Before (L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2826)

```diff
-         let kT, CT = fT.f,
+         let Eq, Wq = Aq.g,
```

#### 301. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2830` → after: `L2830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2830) · [Before (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2830)

```diff
-             return fT.f.BILLBOARDMODE_NONE
+             return Aq.g.BILLBOARDMODE_NONE
```

#### 302. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2833` → after: `L2833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2833) · [Before (L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2833)

```diff
-             return fT.f.BILLBOARDMODE_X
+             return Aq.g.BILLBOARDMODE_X
```

#### 303. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2836` → after: `L2836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2836) · [Before (L2836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2836)

```diff
-             return fT.f.BILLBOARDMODE_Y
+             return Aq.g.BILLBOARDMODE_Y
```

#### 304. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2839` → after: `L2839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2839) · [Before (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2839)

```diff
-             return fT.f.BILLBOARDMODE_Z
+             return Aq.g.BILLBOARDMODE_Z
```

#### 305. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2842` → after: `L2842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2842) · [Before (L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2842)

```diff
-             return fT.f.BILLBOARDMODE_ALL
+             return Aq.g.BILLBOARDMODE_ALL
```

#### 306. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2845` → after: `L2845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2845) · [Before (L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2845)

```diff
-             return fT.f.BILLBOARDMODE_USE_POSITION
+             return Aq.g.BILLBOARDMODE_USE_POSITION
```

#### 307. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2947` → after: `L2947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L2947) · [Before (L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L2947)

```diff
-             this._internalAbstractMeshDataInfo._material !== TT && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDa … [truncated]
+             this._internalAbstractMeshDataInfo._material !== qq && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDa … [truncated]
```

#### 308. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3042` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3042) · [Before (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3042)

```diff
-             switch (super(kT, lT, !1), cT = this, this._internalAbstractMeshDataInfo = new oT, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = TT.CULLINGSTRATEGY … [truncated]
+             switch (super(Eq, Yq, !1), gq = this, this._internalAbstractMeshDataInfo = new Zq, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = qq.CULLINGSTRATEGY … [truncated]
```

#### 309. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3045-L3046` → after: `L3045-L3046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3045-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3045-L3046) · [Before (L3045-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3045-L3046)

```diff
-                 bJ: null
-               }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new MT.b, this._onCollisionPositionChange = function(TT, kT) {
+                 eJ: null
+               }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new lq.d, this._onCollisionPositionChange = function(qq, Eq) {
```

#### 310. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3048-L3049` → after: `L3048-L3049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3048-L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3048-L3049) · [Before (L3048-L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3048-L3049)

```diff
-                 kT.subtractToRef(cT._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, cT._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), cT._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() … [truncated]
-               }, lT = this.NJ(), this.layerMask = lT.defaultRenderableLayerMask, lT.rcT(this), this._resyncLightSources(), this._uniformBuffer = new AT.b(this.NJ().Dv(), void 0, void 0, kT, !this.NJ().Dv().isWebGPU), this._buildUniformLayout(), lT.performancePriority) {
+                 Eq.subtractToRef(gq._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, gq._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), gq._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() … [truncated]
+               }, Yq = this.ZJ(), this.layerMask = Yq.defaultRenderableLayerMask, Yq.ZYq(this), this._resyncLightSources(), this._uniformBuffer = new Bq.b(this.ZJ().Ba(), void 0, void 0, Eq, !this.ZJ().Ba().isWebGPU), this._buildUniformLayout(), Yq.performancePriority) {
```

#### 311. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3051` → after: `L3051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3051) · [Before (L3051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3051)

```diff
-                 this.Pv = !0;
+                 this.Va = !0;
```

#### 312. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3053` → after: `L3053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3053) · [Before (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3053)

```diff
-                 this.av = !0, this.Vt = !1
+                 this.Wa = !0, this.yV = !1
```

#### 313. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3061` → after: `L3061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3061) · [Before (L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3061)

```diff
-             kT.X3("world", TT), kT.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), kT.update()
+             Eq.Eqq("world", qq), Eq.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), Eq.update()
```

#### 314. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3074` → after: `L3074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3074) · [Before (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3074)

```diff
-             kT += ", # of submeshes: " + (this.kF ? this.kF.length : 0);
+             Eq += ", # of submeshes: " + (this.fn ? this.fn.length : 0);
```

#### 315. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3076` → after: `L3076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3076) · [Before (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3076)

```diff
-             return cT && (kT += ", skeleton: " + cT.name), TT && (kT += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], kT += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.bJ ? "YES" : "NO")), kT
+             return gq && (Eq += ", skeleton: " + gq.name), qq && (Eq += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], Eq += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.eJ ? "YES" : "NO")), Eq
```

#### 316. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3079` → after: `L3079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3079) · [Before (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3079)

```diff
-             return this._masterMesh && this.billboardMode !== fT.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
+             return this._masterMesh && this.billboardMode !== Aq.g.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
```

#### 317. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3091-L3092` → after: `L3091-L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3091-L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3091-L3092) · [Before (L3091-L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3091-L3092)

```diff
-             if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.kF) {
-               for (const TT of this.kF) TT._rebuild();
+             if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.fn) {
+               for (const qq of this.fn) qq._rebuild();
```

#### 318. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3098` → after: `L3098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3098) · [Before (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3098)

```diff
-             for (const TT of this.NJ().lights) TT.isEnabled() && TT.canAffectMesh(this) && this._lightSources.push(TT);
+             for (const qq of this.ZJ().lights) qq.isEnabled() && qq.canAffectMesh(this) && this._lightSources.push(qq);
```

#### 319. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3115` → after: `L3115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3115) · [Before (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3115)

```diff
-             for (const TT of this.kF) TT.setEffect(null)
+             for (const qq of this.fn) qq.setEffect(null)
```

#### 320. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3121-L3122` → after: `L3121-L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3121-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3121-L3122) · [Before (L3121-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3121-L3122)

```diff
-             if (this.kF)
-               for (const kT of this.kF)
+             if (this.fn)
+               for (const Eq of this.fn)
```

#### 321. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3138-L3139` → after: `L3138-L3139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3138-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3138-L3139) · [Before (L3138-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3138-L3139)

```diff
-           pTT(TT) {
-             return this._currentRenderId = Number.MAX_VALUE, super.pTT(TT), this._isDirty = !0, this
+           xgq(qq) {
+             return this._currentRenderId = Number.MAX_VALUE, super.xgq(qq), this._isDirty = !0, this
```

#### 322. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3143-L3144` → after: `L3143-L3144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3143-L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3143-L3144) · [Before (L3143-L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3143-L3144)

```diff
-             if (this.kF)
-               for (const cT of this.kF) cT.resetDrawCache(TT, kT)
+             if (this.fn)
+               for (const gq of this.fn) gq.resetDrawCache(qq, Eq)
```

#### 323. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3158` → after: `L3158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3158) · [Before (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3158)

```diff
-           FcT() {
+           iYq() {
```

#### 324. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3177` → after: `L3177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3177) · [Before (L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3177)

```diff
-             return this._masterMesh ? this._masterMesh.DH() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
+             return this._masterMesh ? this._masterMesh.yR() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
```

#### 325. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3180` → after: `L3180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3180) · [Before (L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3180)

```diff
-             return this.rawBoundingInfo ?? this.DH()
+             return this.rawBoundingInfo ?? this.yR()
```

#### 326. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3189` → after: `L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3189) · [Before (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3189)

```diff
-             return this._boundingInfo = new IT.e(TT, kT, cT), this._boundingInfo
+             return this._boundingInfo = new uq.d(qq, Eq, gq), this._boundingInfo
```

#### 327. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3198` → after: `L3198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3198) · [Before (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3198)

```diff
-             return this.skeleton && this.NJ().skeletonsEnabled && this.isVerticesDataPresent(OT.l.MatricesIndicesKind) && this.isVerticesDataPresent(OT.l.MatricesWeightsKind)
+             return this.skeleton && this.ZJ().skeletonsEnabled && this.isVerticesDataPresent(mq.g.MatricesIndicesKind) && this.isVerticesDataPresent(mq.g.MatricesWeightsKind)
```

#### 328. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3209` → after: `L3209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3209) · [Before (L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3209)

```diff
-             return this._masterMesh && this.billboardMode === fT.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
+             return this._masterMesh && this.billboardMode === Aq.g.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
```

#### 329. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3217` → after: `L3217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3217) · [Before (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3217)

```diff
-           get tlT() {
+           get olq() {
```

#### 330. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3227-L3229` → after: `L3227-L3229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3227-L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3227-L3229) · [Before (L3227-L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3227-L3229)

```diff
-             const lT = new KT.d;
-             (this.rotationQuaternion ? this.rotationQuaternion : KT.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(lT);
-             const MT = KT.m.Zero(),
+             const Yq = new Oq.e;
+             (this.rotationQuaternion ? this.rotationQuaternion : Oq.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Yq);
+             const lq = Oq.q.Zero(),
```

#### 331. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3231` → after: `L3231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3231) · [Before (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3231)

```diff
-             return KT.m.TransformCoordinatesFromFloatsToRef(TT * OT, kT, cT * OT, lT, MT), MT
+             return Oq.q.TransformCoordinatesFromFloatsToRef(qq * mq, Eq, gq * mq, Yq, lq), lq
```

#### 332. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3238` → after: `L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3238) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3238)

```diff
-             return new KT.m(TT * lT, kT, cT * lT)
+             return new Oq.q(qq * Yq, Eq, gq * Yq)
```

#### 333. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3242-L3243` → after: `L3242-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3242-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3242-L3243) · [Before (L3242-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3242-L3243)

```diff
-               const cT = (0, QT.g)(TT, 0, this.getTotalVertices(), kT);
-               this._boundingInfo ? this._boundingInfo.reConstruct(cT.minimum, cT.maximum) : this._boundingInfo = new IT.e(cT.minimum, cT.maximum)
+               const gq = (0, Hq.c)(qq, 0, this.getTotalVertices(), Eq);
+               this._boundingInfo ? this._boundingInfo.reConstruct(gq.minimum, gq.maximum) : this._boundingInfo = new uq.d(gq.minimum, gq.maximum)
```

#### 334. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3245-L3246` → after: `L3245-L3246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3245-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3245-L3246) · [Before (L3245-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3245-L3246)

```diff
-             if (this.kF)
-               for (let cT = 0; cT < this.kF.length; cT++) this.kF[cT].refreshBoundingInfo(TT);
+             if (this.fn)
+               for (let gq = 0; gq < this.fn.length; gq++) this.fn[gq].refreshBoundingInfo(qq);
```

#### 335. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3250-L3251` → after: `L3250-L3251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3250-L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3250-L3251) · [Before (L3250-L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3250-L3251)

```diff
-             if (this._boundingInfo ? this._boundingInfo.reConstruct(TT.minimum, TT.maximum) : this._boundingInfo = new IT.e(TT.minimum, TT.maximum), this.kF)
-               for (let kT = 0; kT < this.kF.length; kT++) this.kF[kT].refreshBoundingInfo(null);
+             if (this._boundingInfo ? this._boundingInfo.reConstruct(qq.minimum, qq.maximum) : this._boundingInfo = new uq.d(qq.minimum, qq.maximum), this.fn)
+               for (let Eq = 0; Eq < this.fn.length; Eq++) this.fn[Eq].refreshBoundingInfo(null);
```

#### 336. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3256-L3259` → after: `L3256-L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3256-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3256-L3259) · [Before (L3256-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3256-L3259)

```diff
-               const xT = KT.h.Fv[0],
-                 IT = KT.h.Matrix[0],
-                 AT = KT.h.Matrix[1],
-                 CT = kT === OT.l.NormalKind ? KT.m.TransformNormalFromFloatsToRef : KT.m.TransformCoordinatesFromFloatsToRef;
+               const cq = Oq.o.Na[0],
+                 uq = Oq.o.Matrix[0],
+                 Bq = Oq.o.Matrix[1],
+                 Wq = Eq === mq.g.NormalKind ? Oq.q.TransformNormalFromFloatsToRef : Oq.q.TransformCoordinatesFromFloatsToRef;
```

#### 337. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3262` → after: `L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3262) · [Before (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3262)

```diff
-                 for (IT.reset(), kT = 0; kT < 4; kT++) vT = MT[jT + kT], vT > 0 && (KT.d.FromFloat32ArrayToRefScaled(cT, Math.floor(16 * lT[jT + kT]), vT, AT), IT.addToSelf(AT));
+                 for (uq.reset(), Eq = 0; Eq < 4; Eq++) aq = lq[Nq + Eq], aq > 0 && (Oq.e.FromFloat32ArrayToRefScaled(gq, Math.floor(16 * Yq[Nq + Eq]), aq, Bq), uq.addToSelf(Bq));
```

#### 338. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3264` → after: `L3264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3264) · [Before (L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3264)

```diff
-                   for (kT = 0; kT < 4; kT++) vT = fT[jT + kT], vT > 0 && (KT.d.FromFloat32ArrayToRefScaled(cT, Math.floor(16 * yT[jT + kT]), vT, AT), IT.addToSelf(AT));
+                   for (Eq = 0; Eq < 4; Eq++) aq = Aq[Nq + Eq], aq > 0 && (Oq.e.FromFloat32ArrayToRefScaled(gq, Math.floor(16 * xq[Nq + Eq]), aq, Bq), uq.addToSelf(Bq));
```

#### 339. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3270` → after: `L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3270) · [Before (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3270)

```diff
-             let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OT.l.PositionKind;
+             let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mq.g.PositionKind;
```

#### 340. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3283` → after: `L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3283) · [Before (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3283)

```diff
-                 case OT.l.PositionKind:
+                 case mq.g.PositionKind:
```

#### 341. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3286` → after: `L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3286) · [Before (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3286)

```diff
-                 case OT.l.NormalKind:
+                 case mq.g.NormalKind:
```

#### 342. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3289` → after: `L3289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3289) · [Before (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3289)

```diff
-                 case OT.l.TangentKind:
+                 case mq.g.TangentKind:
```

#### 343. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3292` → after: `L3292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3292) · [Before (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3292)

```diff
-                 case OT.l.UVKind:
+                 case mq.g.UVKind:
```

#### 344. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3295` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3295) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3295)

```diff
-                 case OT.l.UV2Kind:
+                 case mq.g.UV2Kind:
```

#### 345. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3298` → after: `L3298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3298) · [Before (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3298)

```diff
-                 case OT.l.ColorKind:
+                 case mq.g.ColorKind:
```

#### 346. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3320-L3321` → after: `L3320-L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3320-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3320-L3321) · [Before (L3320-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3320-L3321)

```diff
-               const TT = yT(OT.l.MatricesIndicesKind),
-                 MT = yT(OT.l.MatricesWeightsKind);
+               const qq = xq(mq.g.MatricesIndicesKind),
+                 lq = xq(mq.g.MatricesWeightsKind);
```

#### 347. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3324-L3325` → after: `L3324-L3325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3324-L3325) · [Before (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3324-L3325)

```diff
-                   IT = KT ? yT(OT.l.MatricesIndicesExtraKind) : null,
-                   AT = KT ? yT(OT.l.MatricesWeightsExtraKind) : null;
+                   uq = Oq ? xq(mq.g.MatricesIndicesExtraKind) : null,
+                   Bq = Oq ? xq(mq.g.MatricesWeightsExtraKind) : null;
```

#### 348. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3330-L3331` → after: `L3330-L3331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3330-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3330-L3331) · [Before (L3330-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3330-L3331)

```diff
-               const kT = yT(OT.l.MatricesIndicesKind),
-                 MT = yT(OT.l.MatricesWeightsKind);
+               const Eq = xq(mq.g.MatricesIndicesKind),
+                 lq = xq(mq.g.MatricesWeightsKind);
```

#### 349. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3334-L3335` → after: `L3334-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3334-L3335) · [Before (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3334-L3335)

```diff
-                   fT = KT ? yT(OT.l.MatricesIndicesExtraKind) : null,
-                   xT = KT ? yT(OT.l.MatricesWeightsExtraKind) : null,
+                   Aq = Oq ? xq(mq.g.MatricesIndicesExtraKind) : null,
+                   cq = Oq ? xq(mq.g.MatricesWeightsExtraKind) : null,
```

#### 350. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3340` → after: `L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3340) · [Before (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3340)

```diff
-             if (!1 !== kT.updatePositionsArray && lT === OT.l.PositionKind) {
+             if (!1 !== Eq.updatePositionsArray && Yq === mq.g.PositionKind) {
```

#### 351. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3344-L3345` → after: `L3344-L3345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3344-L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3344-L3345) · [Before (L3344-L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3344-L3345)

```diff
-                 for (let cT = kT; cT < TT.length; cT++) TT[cT] = new KT.m;
-               for (let lT = 0, MT = 0; lT < TT.length; lT++, MT += 3) TT[lT].I5(cT[MT], cT[MT + 1], cT[MT + 2]);
+                 for (let gq = Eq; gq < qq.length; gq++) qq[gq] = new Oq.q;
+               for (let Yq = 0, lq = 0; Yq < qq.length; Yq++, lq += 3) qq[Yq].Vqq(gq[lq], gq[lq + 1], gq[lq + 2]);
```

#### 352. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3357` → after: `L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3357) · [Before (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3357)

```diff
-             }, null, OT.l.NormalKind)
+             }, null, mq.g.NormalKind)
```

#### 353. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3367` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3367) · [Before (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3367)

```diff
-             }, cT, OT.l.PositionKind)
+             }, gq, mq.g.PositionKind)
```

#### 354. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3370` → after: `L3370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3370) · [Before (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3370)

```diff
-             return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new IT.e(KT.m.Zero(), KT.m.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
+             return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new uq.d(Oq.q.Zero(), Oq.q.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
```

#### 355. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3373-L3374` → after: `L3373-L3374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3373-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3373-L3374) · [Before (L3373-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3373-L3374)

```diff
-             if (!this.kF) return this;
-             const kT = this.kF.length;
+             if (!this.fn) return this;
+             const Eq = this.fn.length;
```

#### 356. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3376` → after: `L3376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3376) · [Before (L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3376)

```diff
-               const lT = this.kF[cT];
+               const Yq = this.fn[gq];
```

#### 357. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3382` → after: `L3382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3382) · [Before (L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3382)

```diff
-             this.Pv || (this._boundingInfoIsDirty = !0)
+             this.Va || (this._boundingInfoIsDirty = !0)
```

#### 358. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3385` → after: `L3385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3385) · [Before (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3385)

```diff
-             return this.DH().isInFrustum(TT, this.cullingStrategy)
+             return this.yR().isInFrustum(qq, this.cullingStrategy)
```

#### 359. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3388` → after: `L3388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3388) · [Before (L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3388)

```diff
-             return this.DH().isCompletelyInFrustum(TT)
+             return this.yR().isCompletelyInFrustum(qq)
```

#### 360. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3390` → after: `L3390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3390) · [Before (L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3390)

```diff
-           xlT(TT) {
+           Nlq(qq) {
```

#### 361. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3393-L3394` → after: `L3393-L3394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3393-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3393-L3394) · [Before (L3393-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3393-L3394)

```diff
-             const lT = this.DH(),
-               MT = TT.DH();
+             const Yq = this.yR(),
+               lq = qq.yR();
```

#### 362. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3398` → after: `L3398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3398) · [Before (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3398)

```diff
-                 if (KT.xlT(TT, kT, !0)) return !0;
+                 if (Oq.Nlq(qq, Eq, !0)) return !0;
```

#### 363. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3402` → after: `L3402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3402) · [Before (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3402)

```diff
-             return this.DH().intersectsPoint(TT)
+             return this.yR().intersectsPoint(qq)
```

#### 364. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3416` → after: `L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3416) · [Before (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3416)

```diff
-             const cT = this.NJ().collisionCoordinator;
+             const gq = this.ZJ().collisionCoordinator;
```

#### 365. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3425` → after: `L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3425) · [Before (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3425)

```diff
-               for (let MT = cT; MT < lT; MT++) TT._lastColliderWorldVertices.push(KT.m.TransformCoordinates(this._positions[MT], kT))
+               for (let lq = gq; lq < Yq; lq++) qq._lastColliderWorldVertices.push(Oq.q.TransformCoordinates(this._positions[lq], Eq))
```

#### 366. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3427` → after: `L3427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3427) · [Before (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3427)

```diff
-             return cT._collide(TT._trianglePlanes, TT._lastColliderWorldVertices, this.FcT(), TT.indexStart, TT.indexStart + TT.indexCount, TT.verticesStart, !!TT.wv(), this, this._shouldConvertRHS(), 7 === TT.wv()?.fillMode), this
+             return gq._collide(qq._trianglePlanes, qq._lastColliderWorldVertices, this.iYq(), qq.indexStart, qq.indexStart + qq.indexCount, qq.verticesStart, !!qq.da(), this, this._shouldConvertRHS(), 7 === qq.da()?.fillMode), this
```

#### 367. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3442-L3445` → after: `L3442-L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3442-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3442-L3445) · [Before (L3442-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3442-L3445)

```diff
-             if (!this.DH()._checkCollision(TT)) return this;
-             const kT = KT.h.Matrix[0],
-               cT = KT.h.Matrix[1];
-             return KT.d.ScalingToRef(1 / TT._radius.x, 1 / TT._radius.y, 1 / TT._radius.z, kT), this.worldMatrixFromCache.multiplyToRef(kT, cT), this._processCollisionsForSubMeshes(TT, cT), this
+             if (!this.yR()._checkCollision(qq)) return this;
+             const Eq = Oq.o.Matrix[0],
+               gq = Oq.o.Matrix[1];
+             return Oq.e.ScalingToRef(1 / qq._radius.x, 1 / qq._radius.y, 1 / qq._radius.z, Eq), this.worldMatrixFromCache.multiplyToRef(Eq, gq), this._processCollisionsForSubMeshes(qq, gq), this
```

#### 368. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3457-L3460` → after: `L3457-L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3457-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3457-L3460) · [Before (L3457-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3457-L3460)

```diff
-               AT = this.DH();
-             if (!this.kF) return yT;
-             if (!OT && (!TT.intersectsSphere(AT.WcT, IT) || !TT.intersectsBox(AT.boundingBox, IT))) return yT;
-             if (lT) return yT.hit = !OT, yT.pickedMesh = OT ? null : this, yT.distance = OT ? 0 : KT.m.Distance(TT.origin, AT.WcT.center), yT.subMeshId = 0, yT;
+               Bq = this.yR();
+             if (!this.fn) return xq;
+             if (!mq && (!qq.intersectsSphere(Bq.DYq, uq) || !qq.intersectsBox(Bq.boundingBox, uq))) return xq;
+             if (Yq) return xq.hit = !mq, xq.pickedMesh = mq ? null : this, xq.distance = mq ? 0 : Oq.q.Distance(qq.origin, Bq.DYq.center), xq.subMeshId = 0, xq;
```

#### 369. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3467` → after: `L3467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3467) · [Before (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3467)

```diff
-               const TT = jT.data[KT].wv();
+               const qq = Nq.data[Oq].da();
```

#### 370. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3473)

```diff
-             if (!tT) return yT.hit = !0, yT.pickedMesh = this, yT.distance = KT.m.Distance(TT.origin, AT.WcT.center), yT.subMeshId = -1, yT;
+             if (!Vq) return xq.hit = !0, xq.pickedMesh = this, xq.distance = Oq.q.Distance(qq.origin, Bq.DYq.center), xq.subMeshId = -1, xq;
```

#### 371. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3477` → after: `L3477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3477) · [Before (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3477)

```diff
-               const MT = lT.intersects(TT, this._positions, this.FcT(), kT, cT);
+               const lq = Yq.intersects(qq, this._positions, this.iYq(), Eq, gq);
```

#### 372. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3482-L3486` → after: `L3482-L3486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3482-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3482-L3486) · [Before (L3482-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3482-L3486)

```diff
-                 cT = KT.h.Fv[0],
-                 lT = KT.h.Fv[1];
-               KT.m.TransformCoordinatesToRef(TT.origin, kT, cT), TT.direction.scaleToRef(CT.distance, lT);
-               const OT = KT.m.TransformNormal(lT, kT).addInPlace(cT);
-               return yT.hit = !0, yT.distance = KT.m.Distance(cT, OT), yT.pickedPoint = OT, yT.pickedMesh = this, yT.bu = CT.bu || 0, yT.bv = CT.bv || 0, yT.subMeshFaceId = CT.faceId, yT.faceId = CT.faceId + jT.data[CT._internalSubMeshId].indexStart / (-1 !== this.getClassName(). … [truncated]
+                 gq = Oq.o.Na[0],
+                 Yq = Oq.o.Na[1];
+               Oq.q.TransformCoordinatesToRef(qq.origin, Eq, gq), qq.direction.scaleToRef(Wq.distance, Yq);
+               const mq = Oq.q.TransformNormal(Yq, Eq).addInPlace(gq);
+               return xq.hit = !0, xq.distance = Oq.q.Distance(gq, mq), xq.pickedPoint = mq, xq.pickedMesh = this, xq.bu = Wq.bu || 0, xq.bv = Wq.bv || 0, xq.subMeshFaceId = Wq.faceId, xq.faceId = Wq.faceId + Nq.data[Wq._internalSubMeshId].indexStart / (-1 !== this.getClassName(). … [truncated]
```

#### 373. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3495-L3497` → after: `L3495-L3497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3495-L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3495-L3497) · [Before (L3495-L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3495-L3497)

```diff
-             if (this.kF)
-               for (; this.kF.length;) this.kF[0].dispose(TT);
-             else this.kF = [];
+             if (this.fn)
+               for (; this.fn.length;) this.fn[0].dispose(qq);
+             else this.fn = [];
```

#### 374. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3502` → after: `L3502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3502) · [Before (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3502)

```diff
-             const lT = this.NJ();
+             const Yq = this.ZJ();
```

#### 375. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3522-L3523` → after: `L3522-L3523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3522-L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3522-L3523) · [Before (L3522-L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3522-L3523)

```diff
-             const KT = lT.Dv();
-             if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, KT.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), KT.wipeCaches(), lT.eJ(this), this._parentContainer) {
+             const Oq = Yq.Ba();
+             if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Oq.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Oq.wipeCaches(), Yq.Wk(this), this._parentContainer) {
```

#### 376. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3528` → after: `L3528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3528) · [Before (L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3528)

```diff
-               for (kT = 0; kT < lT.lF.length; kT++) lT.lF[kT].emitter === this && (lT.lF[kT].dispose(), kT--);
+               for (Eq = 0; Eq < Yq.xZ.length; Eq++) Yq.xZ[Eq].emitter === this && (Yq.xZ[Eq].dispose(), Eq--);
```

#### 377. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3533-L3534` → after: `L3533-L3534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3533-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3533-L3534) · [Before (L3533-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3533-L3534)

```diff
-             TT.facetNormals || (TT.facetNormals = []), TT.facetPositions || (TT.facetPositions = []), TT.facetPartitioning || (TT.facetPartitioning = new Array), TT.facetNb = this.FcT().length / 3 | 0, TT.partitioningSubdivisions = TT.partitioningSubdivisions ? TT.partitioningSub … [truncated]
-             for (let kT = 0; kT < TT.facetNb; kT++) TT.facetNormals[kT] = KT.m.Zero(), TT.facetPositions[kT] = KT.m.Zero();
+             qq.facetNormals || (qq.facetNormals = []), qq.facetPositions || (qq.facetPositions = []), qq.facetPartitioning || (qq.facetPartitioning = new Array), qq.facetNb = this.iYq().length / 3 | 0, qq.partitioningSubdivisions = qq.partitioningSubdivisions ? qq.partitioningSub … [truncated]
+             for (let Eq = 0; Eq < qq.facetNb; Eq++) qq.facetNormals[Eq] = Oq.q.Zero(), qq.facetPositions[Eq] = Oq.q.Zero();
```

#### 378. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3540-L3543` → after: `L3540-L3543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3540-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3540-L3543) · [Before (L3540-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3540-L3543)

```diff
-             const kT = this.getVerticesData(OT.l.PositionKind),
-               cT = this.FcT(),
-               lT = this.getVerticesData(OT.l.NormalKind)?.slice(),
-               MT = this.DH();
+             const Eq = this.getVerticesData(mq.g.PositionKind),
+               gq = this.iYq(),
+               Yq = this.getVerticesData(mq.g.NormalKind)?.slice(),
+               lq = this.yR();
```

#### 379. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3558-L3559` → after: `L3558-L3559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3558-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3558-L3559) · [Before (L3558-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3558-L3559)

```diff
-                 const kT = this.NJ().activeCamera;
-                 TT.facetDepthSortFrom = kT ? kT.position : KT.m.Zero()
+                 const Eq = this.ZJ().activeCamera;
+                 qq.facetDepthSortFrom = Eq ? Eq.position : Oq.q.Zero()
```

#### 380. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3569` → after: `L3569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3569) · [Before (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3569)

```diff
-               TT.invertedMatrix = KT.d.Identity(), TT.facetDepthSortOrigin = KT.m.Zero()
+               qq.invertedMatrix = Oq.e.Identity(), qq.facetDepthSortOrigin = Oq.q.Zero()
```

#### 381. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3571` → after: `L3571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3571) · [Before (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3571)

```diff
-             TT.bbSize.x = MT.maximum.x - MT.minimum.x > DT.b ? MT.maximum.x - MT.minimum.x : DT.b, TT.bbSize.y = MT.maximum.y - MT.minimum.y > DT.b ? MT.maximum.y - MT.minimum.y : DT.b, TT.bbSize.z = MT.maximum.z - MT.minimum.z > DT.b ? MT.maximum.z - MT.minimum.z : DT.b;
+             qq.bbSize.x = lq.maximum.x - lq.minimum.x > Pq.c ? lq.maximum.x - lq.minimum.x : Pq.c, qq.bbSize.y = lq.maximum.y - lq.minimum.y > Pq.c ? lq.maximum.y - lq.minimum.y : Pq.c, qq.bbSize.z = lq.maximum.z - lq.minimum.z > Pq.c ? lq.maximum.z - lq.minimum.z : Pq.c;
```

#### 382. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3573` → after: `L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3573) · [Before (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3573)

```diff
-             if (fT = fT > TT.bbSize.z ? fT : TT.bbSize.z, TT.subDiv.max = TT.partitioningSubdivisions, TT.subDiv.X = Math.floor(TT.subDiv.max * TT.bbSize.x / fT), TT.subDiv.Y = Math.floor(TT.subDiv.max * TT.bbSize.y / fT), TT.subDiv.Z = Math.floor(TT.subDiv.max * TT.bbSize.z / fT … [truncated]
+             if (Aq = Aq > qq.bbSize.z ? Aq : qq.bbSize.z, qq.subDiv.max = qq.partitioningSubdivisions, qq.subDiv.X = Math.floor(qq.subDiv.max * qq.bbSize.x / Aq), qq.subDiv.Y = Math.floor(qq.subDiv.max * qq.bbSize.y / Aq), qq.subDiv.Z = Math.floor(qq.subDiv.max * qq.bbSize.z / Aq … [truncated]
```

#### 383. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3597` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3597) · [Before (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3597)

```diff
-             const kT = KT.m.Zero();
+             const Eq = Oq.q.Zero();
```

#### 384. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3603` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3603) · [Before (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3603)

```diff
-             return KT.m.TransformCoordinatesToRef(cT, lT, kT), this
+             return Oq.q.TransformCoordinatesToRef(gq, Yq, Eq), this
```

#### 385. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3606` → after: `L3606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3606) · [Before (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3606)

```diff
-             const kT = KT.m.Zero();
+             const Eq = Oq.q.Zero();
```

#### 386. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3611` → after: `L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3611) · [Before (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3611)

```diff
-             return KT.m.TransformNormalToRef(cT, this.getWorldMatrix(), kT), this
+             return Oq.q.TransformNormalToRef(gq, this.getWorldMatrix(), Eq), this
```

#### 387. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3614` → after: `L3614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3614) · [Before (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3614)

```diff
-             const lT = this.DH(),
+             const Yq = this.yR(),
```

#### 388. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3625` → after: `L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3625) · [Before (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3625)

```diff
-               fT = KT.h.Matrix[5];
+               Aq = Oq.o.Matrix[5];
```

#### 389. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3627-L3628` → after: `L3627-L3628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3627-L3628) · [Before (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3627-L3628)

```diff
-             const xT = KT.h.Fv[8];
-             KT.m.TransformCoordinatesFromFloatsToRef(TT, kT, cT, fT, xT);
+             const cq = Oq.o.Na[8];
+             Oq.q.TransformCoordinatesFromFloatsToRef(qq, Eq, gq, Aq, cq);
```

#### 390. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3630` → after: `L3630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3630) · [Before (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3630)

```diff
-             return lT && KT.m.TransformCoordinatesFromFloatsToRef(lT.x, lT.y, lT.z, yT, lT), IT
+             return Yq && Oq.q.TransformCoordinatesFromFloatsToRef(Yq.x, Yq.y, Yq.z, xq, Yq), uq
```

#### 391. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3655-L3656` → after: `L3655-L3656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3655-L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3655-L3656) · [Before (L3655-L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3655-L3656)

```diff
-             const kT = this.getVerticesData(OT.l.PositionKind),
-               cT = this.FcT();
+             const Eq = this.getVerticesData(mq.g.PositionKind),
+               gq = this.iYq();
```

#### 392. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3658-L3660` → after: `L3658-L3660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3658-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3658-L3660) · [Before (L3658-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3658-L3660)

```diff
-             return lT = this.isVerticesDataPresent(OT.l.NormalKind) ? this.getVerticesData(OT.l.NormalKind) : [], yT.d.ComputeNormals(kT, cT, lT, {
-               useRightHandedSystem: this.NJ().useRightHandedSystem
-             }), this.setVerticesData(OT.l.NormalKind, lT, TT), this
+             return Yq = this.isVerticesDataPresent(mq.g.NormalKind) ? this.getVerticesData(mq.g.NormalKind) : [], xq.d.ComputeNormals(Eq, gq, Yq, {
+               useRightHandedSystem: this.ZJ().useRightHandedSystem
+             }), this.setVerticesData(mq.g.NormalKind, Yq, qq), this
```

#### 393. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3663` → after: `L3663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3663) · [Before (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3663)

```diff
-             const TT = this.FcT();
+             const qq = this.iYq();
```

#### 394. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3667` → after: `L3667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3667) · [Before (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3667)

```diff
-             } = await cT.e(342).then((() => cT(42086)));
+             } = await gq.e(342).then((() => gq(42308)));
```

#### 395. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3671-L3674` → after: `L3671-L3674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3671-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3671-L3674) · [Before (L3671-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3671-L3674)

```diff
-             kT || (kT = aT.c.Y);
-             const cT = KT.h.Fv[0],
-               lT = KT.h.Fv[1];
-             return KT.m.CrossToRef(kT, TT, lT), KT.m.CrossToRef(TT, lT, cT), this.rotationQuaternion ? KT.f.RotationQuaternionFromAxisToRef(cT, TT, lT, this.rotationQuaternion) : KT.m.RotationFromAxisToRef(cT, TT, lT, this.rotation), this
+             Eq || (Eq = Qq.b.Y);
+             const gq = Oq.o.Na[0],
+               Yq = Oq.o.Na[1];
+             return Oq.q.CrossToRef(Eq, qq, Yq), Oq.q.CrossToRef(qq, Yq, gq), this.rotationQuaternion ? Oq.h.RotationQuaternionFromAxisToRef(gq, qq, Yq, this.rotationQuaternion) : Oq.q.RotationFromAxisToRef(gq, qq, Yq, this.rotation), this
```

#### 396. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3680` → after: `L3680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3680) · [Before (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3680)

```diff
-             throw (0, hT.i)("EdgesRenderer")
+             throw (0, dq.m)("EdgesRenderer")
```

#### 397. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3683` → after: `L3683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3683) · [Before (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3683)

```diff
-             throw (0, hT.i)("EdgesRenderer")
+             throw (0, dq.m)("EdgesRenderer")
```

#### 398. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3686` → after: `L3686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3686) · [Before (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3686)

```diff
-             return this._scene.lF.filter((TT => TT.emitter === this))
+             return this._scene.xZ.filter((qq => qq.emitter === this))
```

#### 399. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3690` → after: `L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3690) · [Before (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3690)

```diff
-           kT = [rT.e.filter((function() {
+           Eq = [tq.j.filter((function() {
```

#### 400. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3692` → after: `L3692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3692) · [Before (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3692)

```diff
-           }))], (0, lT.e)(TT, null, kT, {
+           }))], (0, Yq.f)(qq, null, Eq, {
```

#### 401. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3708` → after: `L3708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3708) · [Before (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3708)

```diff
-         })(), TT.OCCLUSION_TYPE_NONE = ((0, lT.h)(TT, jT), 0), TT.OCCLUSION_TYPE_OPTIMISTIC = 1, TT.OCCLUSION_TYPE_STRICT = 2, TT.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, TT.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, TT.CULLINGSTRATEGY_STANDARD = 0, TT.CULLINGSTRATEGY_BOUNDINGSPHER … [truncated]
+         })(), qq.OCCLUSION_TYPE_NONE = ((0, Yq.i)(qq, Nq), 0), qq.OCCLUSION_TYPE_OPTIMISTIC = 1, qq.OCCLUSION_TYPE_STRICT = 2, qq.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, qq.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, qq.CULLINGSTRATEGY_STANDARD = 0, qq.CULLINGSTRATEGY_BOUNDINGSPHER … [truncated]
```

#### 402. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3714` → after: `L3714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3714) · [Before (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3714)

```diff
-     }(jT = HT.prototype).createOrUpdateSubmeshesOctree ?? (jT.createOrUpdateSubmeshesOctree = (0, hT.f)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (vT = HT.prototype).getPhysicsImpostor ?? (vT.getPhysicsImpostor = (0, hT.f)("AbstractMesh", "getPhysicsImpostor")), (tT = HT … [truncated]
+     }(Nq = fq.prototype).createOrUpdateSubmeshesOctree ?? (Nq.createOrUpdateSubmeshesOctree = (0, dq.i)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (aq = fq.prototype).getPhysicsImpostor ?? (aq.getPhysicsImpostor = (0, dq.i)("AbstractMesh", "getPhysicsImpostor")), (Vq = fq … [truncated]
```

#### 403. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3716` → after: `L3716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3716) · [Before (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3716)

```diff
-   40042: (TT, kT, cT) => {
+   40180: (qq, Eq, gq) => {
```

#### 404. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3720-L3733` → after: `L3720-L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3720-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3720-L3733) · [Before (L3720-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3720-L3733)

```diff
-     var lT = cT(36892),
-       MT = cT(37093),
-       KT = cT(40038),
-       OT = cT(39782),
-       yT = cT(39917),
-       fT = cT(40051),
-       xT = cT(39926),
-       IT = cT(39727),
-       AT = cT(38512),
-       CT = cT(39649),
-       jT = cT(39932),
-       vT = cT(36925),
-       tT = cT(40057),
-       hT = cT(39689);
+     var Yq = gq(37139),
+       lq = gq(37289),
+       Oq = gq(40176),
+       mq = gq(39879),
+       xq = gq(40040),
+       Aq = gq(40186),
+       cq = gq(40055),
+       uq = gq(39845),
+       Bq = gq(38653),
+       Wq = gq(39786),
+       Nq = gq(40067),
+       aq = gq(37153),
+       Vq = gq(40190),
+       dq = gq(39817);
```

#### 405. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3739` → after: `L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3739) · [Before (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3739)

```diff
-         this._boundingBias ? this._boundingBias.UkT(TT) : this._boundingBias = TT.clone(), this._updateBoundingInfo(!0, null)
+         this._boundingBias ? this._boundingBias.WG(qq) : this._boundingBias = qq.clone(), this._updateBoundingInfo(!0, null)
```

#### 406. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3742` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3742) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3742)

```diff
-         const kT = new NT(NT.RandomId(), TT.NJ());
+         const Eq = new jq(jq.RandomId(), qq.ZJ());
```

#### 407. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3753-L3755` → after: `L3753-L3755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3753-L3755) · [Before (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3753-L3755)

```diff
-           minimum: new lT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
-           maximum: new lT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
-         }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = kT || vT.d.LastCreatedScene, this._scene && (this.id = TT, this.uniqueId = this._scene.getUniqueId(), this._engine = this._s … [truncated]
+           minimum: new Yq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
+           maximum: new Yq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
+         }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = Eq || aq.b.LastCreatedScene, this._scene && (this.id = qq, this.uniqueId = this._scene.getUniqueId(), this._engine = this._s … [truncated]
```

#### 408. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3789` → after: `L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3789) · [Before (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3789)

```diff
-         const MT = new OT.l(this._engine, kT, TT, {
+         const lq = new mq.g(this._engine, Eq, qq, {
```

#### 409. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3807` → after: `L3807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3807) · [Before (L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3807)

```diff
-         if (MT === OT.l.PositionKind) {
+         if (lq === mq.g.PositionKind) {
```

#### 410. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3809-L3810` → after: `L3809-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3809-L3810) · [Before (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3809-L3810)

```diff
-           const cT = this._extend && this._extend.minimum || new lT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
-             MT = this._extend && this._extend.maximum || new lT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
+           const gq = this._extend && this._extend.minimum || new Yq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
+             lq = this._extend && this._extend.maximum || new Yq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
```

#### 411. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3826` → after: `L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3826) · [Before (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3826)

```diff
-         lT && (lT.update(kT), TT === OT.l.PositionKind && this._updateBoundingInfo(cT, kT), this._notifyUpdate(TT))
+         Yq && (Yq.update(Eq), qq === mq.g.PositionKind && this._updateBoundingInfo(gq, Eq), this._notifyUpdate(qq))
```

#### 412. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3832-L3833` → after: `L3832-L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3832-L3833) · [Before (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3832-L3833)

```diff
-             kT.hasBoundingInfo ? kT.DH().reConstruct(this._extend.minimum, this._extend.maximum) : kT.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
-             const TT = kT.kF;
+             Eq.hasBoundingInfo ? Eq.yR().reConstruct(this._extend.minimum, this._extend.maximum) : Eq.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
+             const qq = Eq.fn;
```

#### 413. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3860` → after: `L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3860) · [Before (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3860)

```diff
-         lT && (0, hT.f)(lT, cT.getSize(), cT.type, cT.byteOffset, cT.byteStride, cT.normalized, this._totalVertices, kT[TT])
+         Yq && (0, dq.d)(Yq, gq.getSize(), gq.type, gq.byteOffset, gq.byteStride, gq.normalized, this._totalVertices, Eq[qq])
```

#### 414. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3910` → after: `L3910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3910) · [Before (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3910)

```diff
-       FcT(TT, kT) {
+       iYq(qq, Eq) {
```

#### 415. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3940-L3941` → after: `L3940-L3941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3940-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3940-L3941) · [Before (L3940-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3940-L3941)

```diff
-           if (!TT && (TT = this.getVerticesData(OT.l.PositionKind), !TT)) return;
-           this._extend = (0, jT.g)(TT, 0, this._totalVertices, this.boundingBias, 3)
+           if (!qq && (qq = this.getVerticesData(mq.g.PositionKind), !qq)) return;
+           this._extend = (0, Nq.c)(qq, 0, this._totalVertices, this.boundingBias, 3)
```

#### 416. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3947` → after: `L3947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3947) · [Before (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3947)

```diff
-           cT._buffer.getBuffer() || cT.create(), kT === OT.l.PositionKind && (this._extend || this._updateExtend(), TT.buildBoundingInfo(this._extend.minimum, this._extend.maximum), TT._createGlobalSubMesh(TT.isUnIndexed), TT._updateBoundingInfo())
+           gq._buffer.getBuffer() || gq.create(), Eq === mq.g.PositionKind && (this._extend || this._updateExtend(), qq.buildBoundingInfo(this._extend.minimum, this._extend.maximum), qq._createGlobalSubMesh(qq.isUnIndexed), qq._updateBoundingInfo())
```

#### 417. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3968` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3968) · [Before (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3968)

```diff
-             TT.removePendingData(this), TT.VkT || AT.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${cT}`)
+             qq.removePendingData(this), qq.bM || Bq.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${gq}`)
```

#### 418. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3973` → after: `L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3973) · [Before (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3973)

```diff
-         const TT = this.FcT(!1);
+         const qq = this.iYq(!1);
```

#### 419. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3981` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3981) · [Before (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3981)

```diff
-         const kT = this.getVerticesData(OT.l.PositionKind, !1);
+         const Eq = this.getVerticesData(mq.g.PositionKind, !1);
```

#### 420. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3984` → after: `L3984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3984) · [Before (L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3984)

```diff
-           this.setVerticesData(OT.l.PositionKind, kT, !1)
+           this.setVerticesData(mq.g.PositionKind, Eq, !1)
```

#### 421. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3986` → after: `L3986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3986) · [Before (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3986)

```diff
-         const cT = this.getVerticesData(OT.l.NormalKind, !1);
+         const gq = this.getVerticesData(mq.g.NormalKind, !1);
```

#### 422. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3989` → after: `L3989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3989) · [Before (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3989)

```diff
-           this.setVerticesData(OT.l.NormalKind, cT, !1)
+           this.setVerticesData(mq.g.NormalKind, gq, !1)
```

#### 423. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3997` → after: `L3997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3997) · [Before (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3997)

```diff
-         const TT = this.getVerticesData(OT.l.PositionKind);
+         const qq = this.getVerticesData(mq.g.PositionKind);
```

#### 424. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L3999` → after: `L3999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L3999) · [Before (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L3999)

```diff
-         for (let kT = 3 * this._positionsCache.length, cT = this._positionsCache.length; kT < TT.length; kT += 3, ++cT) this._positionsCache[cT] = lT.m.FromArray(TT, kT);
+         for (let Eq = 3 * this._positionsCache.length, gq = this._positionsCache.length; Eq < qq.length; Eq += 3, ++gq) this._positionsCache[gq] = Yq.q.FromArray(qq, Eq);
```

#### 425. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4003` → after: `L4003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L4003) · [Before (L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L4003)

```diff
-       VkT() {
+       bM() {
```

#### 426. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4030` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L4030) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L4030)

```diff
-           cT = this.FcT(void 0, !0);
+           gq = this.iYq(void 0, !0);
```

#### 427. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4051-L4052` → after: `L4051-L4052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4051-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L4051-L4052) · [Before (L4051-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L4051-L4052)

```diff
-           const jT = (0, hT.m)(cT, yT, fT, xT, IT, CT, !0),
-             vT = new OT.l(this._engine, jT, lT, {
+           const Nq = (0, dq.r)(gq, xq, Aq, cq, uq, Wq, !0),
+             aq = new mq.g(this._engine, Nq, Yq, {
```

#### 428. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4066` → after: `L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L4066) · [Before (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L4066)

```diff
-         return kT._boundingInfo = new xT.e(this._extend.minimum, this._extend.maximum), kT
+         return Eq._boundingInfo = new cq.d(this._extend.minimum, this._extend.maximum), Eq
```

#### 429. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4073` → after: `L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L4073) · [Before (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L4073)

```diff
-         return Array.isArray(TT) ? TT : Array.prototype.slice.call(TT)
+         return Array.isArray(qq) ? qq : Array.prototype.slice.call(qq)
```

#### 430. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4081` → after: `L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L4081) · [Before (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L4081)

```diff
-         return this.isVerticesDataPresent(OT.l.PositionKind) && (TT.positions = this._toNumberArray(this.getVerticesData(OT.l.PositionKind)), this.isVertexBufferUpdatable(OT.l.PositionKind) && (TT.positionsUpdatable = !0)), this.isVerticesDataPresent(OT.l.NormalKind) && (TT.norma … [truncated]
+         return this.isVerticesDataPresent(mq.g.PositionKind) && (qq.positions = this._toNumberArray(this.getVerticesData(mq.g.PositionKind)), this.isVertexBufferUpdatable(mq.g.PositionKind) && (qq.positionsUpdatable = !0)), this.isVerticesDataPresent(mq.g.NormalKind) && (qq.norma … [truncated]
```

#### 431. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4088` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L4088) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L4088)

```diff
-         return IT.h.RandomId()
+         return uq.f.RandomId()
```

#### 432. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4096` → after: `L4096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L4096) · [Before (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L4096)

```diff
-         const cT = kT.NJ(),
+         const gq = Eq.ZJ(),
```

#### 433. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4106` → after: `L4106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L4106) · [Before (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L4106)

```diff
-             kT.setVerticesData(OT.l.PositionKind, lT, !1)
+             Eq.setVerticesData(mq.g.PositionKind, Yq, !1)
```

#### 434. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4110` → after: `L4110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L4110) · [Before (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L4110)

```diff
-             kT.setVerticesData(OT.l.NormalKind, lT, !1)
+             Eq.setVerticesData(mq.g.NormalKind, Yq, !1)
```

#### 435. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4114` → after: `L4114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/243.js#L4114) · [Before (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/243.js#L4114)

```diff
-             kT.setVerticesData(OT.l.TangentKind, lT, !1)
+             Eq.setVerticesData(mq.g.TangentKind, Yq, !1)
```
