# Changed — Bundle Modifications Report (Part 030 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `30 / 99` (**294** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 029](part-029.md) · [Part 031 →](part-031.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/286.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/286.js` (58 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b)

#### 19. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L72-L73` → after: `L73-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L73-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L73-L77) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L72-L73)

```diff
-         get cameraColorCurves() {
-           return this._imageProcessingConfiguration.colorCurves
+         getRotation() {
+           this.direction.normalize();
+           const UU = QU.q.Cross(this.direction, FU.b.Y),
+             XU = QU.q.Cross(UU, this.direction);
+           return QU.q.RotationFromAxis(UU, XU, this.direction)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L75-L76` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L79-L80) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L75-L76)

```diff
-         set cameraColorCurves(MM) {
-           this._imageProcessingConfiguration.colorCurves = MM
+         needCube() {
+           return !1
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L78-L91` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L82-L83) · [Before (L78-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L78-L91)

```diff
-       }
-     }
-   },
-   41386: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => jM,
-       h: () => SM
-     });
-     var OM = iM(41393);
- 
-     function SM(MM) {
-       return class extends MM {
-         constructor() {
-           super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING … [truncated]
+         needProjectionMatrixCompute() {
+           return this._needProjectionMatrixCompute
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L93-L140` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L85-L86) · [Before (L93-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L93-L140)

```diff
-       }
-     }
-     class jM extends OM.c {
-       constructor() {
-         super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this. … [truncated]
-       }
-     }
-   },
-   41454: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => LM
-     });
-     var OM = iM(41099),
-       SM = iM(41397),
-       jM = iM(41105),
-       aM = iM(41438),
- ... (32 more removed lines; see GitHub link above)
+         forceProjectionMatrixCompute() {
+           this._needProjectionMatrixCompute = !0
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L142-L143` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L88-L89) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L142-L143)

```diff
-         set normalBlendMethod(MM) {
-           (0, OM.f)(this, iM, MM, "f")
+         _initCache() {
+           super._initCache(), this._cache.position = QU.q.Zero()
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L145-L146` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L91-L92) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L145-L146)

```diff
-         get isEnabled() {
-           return (0, OM.c)(this, PM, "f")
+         _isSynchronized() {
+           return !!this._cache.position.equals(this.position)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L148-L149` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L94-L95) · [Before (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L148-L149)

```diff
-         set isEnabled(MM) {
-           (0, OM.f)(this, PM, MM, "f")
+         computeWorldMatrix(UU) {
+           return !UU && this.isSynchronized() ? (this._currentRenderId = this.nS().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.YL(this.position), this._worldMatrix || (this._worldMatrix = QU.e.Identity()), QU.e.TranslationToRef(this.position.x,  … [truncated]
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L151-L152` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L97-L98) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L151-L152)

```diff
-         _markAllSubMeshesAsTexturesDirty() {
-           this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
+         getDepthMinZ(UU) {
+           return void 0 !== this.shadowMinZ ? this.shadowMinZ : UU?.minZ || 0
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L154-L155` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L100-L101) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L154-L155)

```diff
-         isCompatible() {
-           return !0
+         getDepthMaxZ(UU) {
+           return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : UU?.maxZ || 1e4
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L157-L159` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L103-L104) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L157-L159)

```diff
-         constructor(MM) {
-           let jM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           super(MM, "DetailMap", 140, new zM, jM), this._texture = null, rM.set(this, (0, OM.m)(this, lM, void 0)), this.diffuseBlendLevel = ((0, OM.m)(this, EM), (0, OM.m)(this, UM, 1)), this.roughnessBlendLevel = ((0, OM.m)(this, GM), (0, OM.m)(this, CM, 1)), this.bumpLevel = ( … [truncated]
+         setShadowProjectionMatrix(UU, XU, zU) {
+           return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(XU, zU, UU) : this._setDefaultShadowProjectionMatrix(UU, XU, zU), this
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L161-L162` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L106-L107) · [Before (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L161-L162)

```diff
-         isReadyForSubMesh(MM, rM, iM) {
-           return !this._isEnabled || !(MM._areTexturesDirty && rM.texturesEnabled && iM.getCaps().standardDerivatives && this._texture && aM.e.DetailTextureEnabled && !this._texture.isReady())
+         _syncParentEnabledState() {
+           super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L164-L169` → after: `L109-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L109-L114) · [Before (L164-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L164-L169)

```diff
-         prepareDefines(MM, rM) {
-           if (this._isEnabled) {
-             MM.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
-             const iM = rM.ph();
-             MM._areTexturesDirty && (iM.getCaps().standardDerivatives && this._texture && aM.e.DetailTextureEnabled && this._isEnabled ? ((0, QM.W)(this._texture, MM, "DETAIL"), MM.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : MM.DETAIL = !1)
-           } else MM.DETAIL = !1
+         getViewMatrix(UU) {
+           const XU = QU.l.Sp[0];
+           let zU = this.position;
+           this.computeTransformedInformation() && (zU = this.transformedPosition), QU.q.NormalizeToRef(this.getShadowDirection(UU), XU), 1 === Math.abs(QU.q.Dot(XU, QU.q.Up())) && (XU.z = 1e-13);
+           const cU = QU.l.Sp[1];
+           return zU.addToRef(XU, cU), QU.e.LookAtLHToRef(zU, cU, QU.q.Up(), this._viewMatrix), this._viewMatrix
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L171-L174` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L116-L117) · [Before (L171-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L171-L174)

```diff
-         bindForSubMesh(MM, rM) {
-           if (!this._isEnabled) return;
-           const iM = this._material.isFrozen;
-           MM.useUbo && iM && MM.isSync || this._texture && aM.e.DetailTextureEnabled && (MM.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, QM.x)(this._texture, MM, "detail")), rM.texturesEnabled  … [truncated]
+         getProjectionMatrix(UU, XU) {
+           return this.setShadowProjectionMatrix(this._projectionMatrix, UU ?? this._viewMatrix, XU ?? []), this._projectionMatrix
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L176-L207` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L119) · [Before (L176-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L176-L207)

```diff
-         hasTexture(MM) {
-           return this._texture === MM
-         }
-         getActiveTextures(MM) {
-           this._texture && MM.push(this._texture)
-         }
-         getAnimatables(MM) {
-           this._texture && this._texture.animations && this._texture.animations.length > 0 && MM.push(this._texture)
-         }
-         dispose(MM) {
-           MM && this._texture?.dispose()
-         }
-         getClassName() {
-           return "DetailMapConfiguration"
-         }
-         getSamplers(MM) {
- ... (16 more removed lines; see GitHub link above)
+       }, (() => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L209-L211` → after: `L121-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L121-L123) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L209-L211)

```diff
-         LM = [(0, jM.B)("detailTexture"), (0, jM.g)("_markAllSubMeshesAsTexturesDirty")], mM = [(0, jM.L)()], HM = [(0, jM.L)()], hM = [(0, jM.L)()], JM = [(0, jM.L)(), (0, jM.g)("_markAllSubMeshesAsTexturesDirty")], dM = [(0, jM.L)(), (0, jM.g)("_markAllSubMeshesAsTexturesDirty" … [truncated]
-           kind: "accessor",
-           name: "texture",
+         XU = [(0, yU.F)()], zU = [(0, yU.F)()], oU = [(0, yU.I)()], DU = [(0, yU.I)()], (0, cU.j)(UU, null, XU, {
+           kind: "getter",
+           name: "position",
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L215-L219` → after: `L127-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L127-L128) · [Before (L215-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L215-L219)

```diff
-             has: MM => "texture" in MM,
-             get: MM => MM.texture,
-             set: (MM, rM) => {
-               MM.texture = rM
-             }
+             has: UU => "position" in UU,
+             get: UU => UU.position
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L222-L224` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L131-L133) · [Before (L222-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L222-L224)

```diff
-         }, lM, EM), (0, OM.i)(MM, null, JM, {
-           kind: "accessor",
-           name: "normalBlendMethod",
+         }, null, YU), (0, cU.j)(UU, null, zU, {
+           kind: "getter",
+           name: "direction",
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L228-L232` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L137-L138) · [Before (L228-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L228-L232)

```diff
-             has: MM => "normalBlendMethod" in MM,
-             get: MM => MM.normalBlendMethod,
-             set: (MM, rM) => {
-               MM.normalBlendMethod = rM
-             }
+             has: UU => "direction" in UU,
+             get: UU => UU.direction
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L235-L237` → after: `L141-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L141-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L141-L143) · [Before (L235-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L235-L237)

```diff
-         }, tM, gM), (0, OM.i)(MM, null, dM, {
-           kind: "accessor",
-           name: "isEnabled",
+         }, null, YU), (0, cU.j)(UU, null, oU, {
+           kind: "getter",
+           name: "shadowMinZ",
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L241-L245` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L147-L148) · [Before (L241-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L241-L245)

```diff
-             has: MM => "isEnabled" in MM,
-             get: MM => MM.isEnabled,
-             set: (MM, rM) => {
-               MM.isEnabled = rM
-             }
+             has: UU => "shadowMinZ" in UU,
+             get: UU => UU.shadowMinZ
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L248-L250` → after: `L151-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L151-L153) · [Before (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L248-L250)

```diff
-         }, uM, RM), (0, OM.i)(null, null, mM, {
-           kind: "field",
-           name: "diffuseBlendLevel",
+         }, null, YU), (0, cU.j)(UU, null, DU, {
+           kind: "getter",
+           name: "shadowMaxZ",
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L254-L258` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L157-L158) · [Before (L254-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L254-L258)

```diff
-             has: MM => "diffuseBlendLevel" in MM,
-             get: MM => MM.diffuseBlendLevel,
-             set: (MM, rM) => {
-               MM.diffuseBlendLevel = rM
-             }
+             has: UU => "shadowMaxZ" in UU,
+             get: UU => UU.shadowMaxZ
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L261-L287` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L161) · [Before (L261-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L261-L287)

```diff
-         }, UM, GM), (0, OM.i)(null, null, HM, {
-           kind: "field",
-           name: "roughnessBlendLevel",
-           static: !1,
-           private: !1,
-           access: {
-             has: MM => "roughnessBlendLevel" in MM,
-             get: MM => MM.roughnessBlendLevel,
-             set: (MM, rM) => {
-               MM.roughnessBlendLevel = rM
-             }
-           },
-           metadata: rM
-         }, CM, eM), (0, OM.i)(null, null, hM, {
-           kind: "field",
-           name: "bumpLevel",
- ... (11 more removed lines; see GitHub link above)
+         }, null, YU), QU && Object.defineProperty(UU, Symbol.metadata, {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L296` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L170) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L296)

```diff
-   41393: (MM, rM, iM) => {
+   44262: (UU, XU, zU) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L298` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L172) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L298)

```diff
-       c: () => OM
+       b: () => yU
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L300-L391` → after: `L174-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L174-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L174-L229) · [Before (L300-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L300-L391)

```diff
-     class OM {
-       constructor(MM) {
-         if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, … [truncated]
-           for (const rM in MM) Object.prototype.hasOwnProperty.call(MM, rM) && this._setDefaultValue(rM)
-       }
-       get isDirty() {
-         return this._isDirty
-       }
-       markAsProcessed() {
-         this._isDirty = !1, this._areAttributesDirty = !1, this._areTexturesDirty = !1, this._areFresnelDirty = !1, this._areLightsDirty = !1, this._areLightsDisposed = !1, this._areMiscDirty = !1, this._arePrePassDirty = !1, this._areImageProcessingDirty = !1
-       }
-       markAsUnprocessed() {
-         this._isDirty = !0
-       }
-       markAllAsDirty() {
-         this._areTexturesDirty = !0, this._areAttributesDirty = !0, this._areLightsDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._isDirty = !0
- ... (76 more removed lines; see GitHub link above)
+     var cU = zU(41557);
+     class yU extends cU.e {
+       constructor(UU, XU, zU, yU, QU) {
+         let AU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+           FU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           oU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
+           DU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
+           EU = arguments.length > 9 ? arguments[9] : void 0,
+           YU = arguments.length > 10 ? arguments[10] : void 0,
+           NU = arguments.length > 11 ? arguments[11] : void 0,
+           IU = arguments.length > 12 ? arguments[12] : void 0;
+         super(null, QU, !AU, FU, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, EU), this.format = yU, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== DU || (oU = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== DU || (oU = … [truncated]
+       }
+       update(UU) {
+         this.updateMipLevel(UU, 0)
+       }
+ ... (40 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L395` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L233) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L395)

```diff
-   41474: (MM, rM, iM) => {
+   44307: (UU, XU, zU) => {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L397-L399` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L235) · [Before (L397-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L397-L399)

```diff
-       c: () => PM,
-       d: () => aM,
-       h: () => jM
+       b: () => cU.c
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L401-L628` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L237-L238) · [Before (L401-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L401-L628)

```diff
-     var OM, SM = iM(38040);
- 
-     function jM(MM, rM) {
-       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
-       const OM = rM(MM);
-       if (!Number.isInteger(OM) || OM < 0 || OM > iM) throw new Error(`Invalid geometry object ID ${OM} for mesh "${MM.name}". Object IDs must be integers between 0 and 0x${iM.toString(16).toUpperCase()}.`);
-       return OM
-     }
- 
-     function aM(MM, rM) {
-       const iM = rM(MM);
-       if (!Number.isInteger(iM) || iM < 0 || iM > 255 || 0 !== iM && 0 === (63 & iM)) throw new Error(`Invalid geometry mesh-blending tag ${iM} for mesh "${MM.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
-       return iM
-     }! function(MM) {
-       MM[MM.Zero = 0] = "Zero", MM[MM.One = 1] = "One", MM[MM.MaxViewZ = 2] = "MaxViewZ", MM[MM.NoClear = 3] = "NoClear"
-     }(OM || (OM = {}));
- ... (212 more removed lines; see GitHub link above)
+     var cU = zU(41512);
+     (0, cU.g)()
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L630` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L240) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L630)

```diff
-   41463: (MM, rM, iM) => {
+   44254: (UU, XU, zU) => {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L632-L633` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L242) · [Before (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L632-L633)

```diff
-       b: () => mM,
-       f: () => hM
+       d: () => cU.d
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L635-L974` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L244-L245) · [Before (L635-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L635-L974)

```diff
-     var OM = iM(41099),
-       SM = iM(41105),
-       jM = iM(40998),
-       aM = iM(40964);
-     const PM = new RegExp("^([gimus]+)!");
-     class nM {
-       constructor(MM) {
-         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = MM, this._scene = MM.Hk(), this._engine = this._scene.ph()
-       }
-       _addPlugin(MM) {
-         for (let OM = 0; OM < this._plugins.length; ++OM)
-           if (this._plugins[OM].name === MM.name) return !1;
-         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !MM.isCompatible(this._material.shaderLanguage)) throw `The plugin "${MM.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
-         const rM = MM.getClassName();
-         nM._MaterialPluginClassToMainDefine[rM] || (nM._MaterialPluginClassToMainDefine[rM] = "MATERIALPLUGIN_" + ++nM._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (MM, rM) => this._handlePluginEvent(MM, rM), this._plugins.push(MM), this._plugins.sort(((M … [truncated]
-         const iM = {};
- ... (324 more removed lines; see GitHub link above)
+     var cU = zU(41536);
+     (0, cU.e)()
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L976` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L247) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L976)

```diff
-   41378: (MM, rM, iM) => {
+   41536: (UU, XU, zU) => {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L980-L982` → after: `L252-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L252-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L252-L261) · [Before (L980-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L980-L982)

```diff
-     class OM {
-       constructor() {
-         this.previousWorldMatrices = {}, this.previousBones = {}
+     var cU, yU, QU = zU(37923),
+       AU = zU(41237),
+       FU = zU(41481),
+       oU = zU(41540),
+       DU = zU(41374),
+       EU = zU(41549),
+       YU = zU(40989);
+     class NU extends FU.b {
+       _isShaderMaterial(UU) {
+         return !!UU && "ShaderMaterial" === UU.getClassName()
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L984-L1001` → after: `L263-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L263-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L263-L340) · [Before (L984-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L984-L1001)

```diff
-       static AddUniforms(MM) {
-         MM.push("previousWorld", "previousViewProjection", "mPreviousBones")
-       }
-       static AddSamplers(MM) {}
-       bindForSubMesh(MM, rM, iM, OM, SM) {
-         if (rM.prePassRenderer && rM.prePassRenderer.enabled && rM.prePassRenderer.currentRTisSceneRT && (-1 !== rM.prePassRenderer.getIndex(2) || -1 !== rM.prePassRenderer.getIndex(11))) {
-           this.previousWorldMatrices[iM.uniqueId] || (this.previousWorldMatrices[iM.uniqueId] = OM.clone()), this.previousViewProjection || (this.previousViewProjection = rM.getTransformMatrix().clone(), this.currentViewProjection = rM.getTransformMatrix().clone());
-           const SM = rM.ph();
-           this.currentViewProjection.updateFlag !== rM.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = SM.frameId, this.previousViewProjection.jR(this.currentViewProjection), this.currentViewProjection.jR(rM.getTransformMatrix())) : this._lastUpdateFrameId !== SM.fra … [truncated]
-         }
-       }
-     }
-   },
-   41483: (MM, rM, iM) => {
-     function OM(MM) {
-       return class extends MM {
- ... (2 more removed lines; see GitHub link above)
+       constructor(UU) {
+         let XU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           cU = arguments.length > 5 ? arguments[5] : void 0,
+           yU = arguments.length > 6 ? arguments[6] : void 0,
+           FU = arguments.length > 7 ? arguments[7] : void 0;
+         super(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, XU, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = cU, this.useVertexAlpha = yU, this.color = new  … [truncated]
+         const oU = {
+           attributes: [AU.h.PositionKind],
+           uniforms: ["world", "viewProjection"],
+           needAlphaBlending: !0,
+           defines: [],
+           useClipPlane: null,
+           shaderLanguage: 0
+         };
+         if (this.useVertexAlpha ? oU.defines.push("#define VERTEXALPHA") : oU.needAlphaBlending = !1, this.useVertexColor ? (oU.defines.push("#define VERTEXCOLOR"), oU.attributes.push(AU.h.ColorKind)) : (oU.uniforms.push("color"), this._color4 = new QU.e), FU) this.material = FU;
+         else {
+ ... (62 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L1004-L1054` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L344-L345) · [Before (L1004-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L1004-L1054)

```diff
-     }
-     iM.d(rM, {
-       d: () => OM
-     })
-   },
-   41374: (MM, rM, iM) => {
-     iM.d(rM, {
-       StandardMaterial: () => OM.g
-     });
-     var OM = iM(41376);
-     (0, OM.d)()
-   },
-   41376: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => ZM,
-       g: () => DM
- ... (35 more removed lines; see GitHub link above)
+       serialize(UU) {
+         super.serialize(UU), UU.color = this.color.cyU(), UU.alpha = this.alpha
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L1056-L2686` → after: `L347-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L347-L349) · [Before (L1056-L2686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L1056-L2686)

```diff
-     }
-     class sM extends((0, tM.e)(hM.c)) {}
-     let DM = (() => {
-         var MM, rM, zM, HM, bM, wM, tM, gM, uM, pM, DM, kM, ZM, oM, fM, YM, NM, AM, xM, vM, FM, BM, XM, IM, KM, qM, TM, VM, cM, Mr, rr, ir, Or;
-         let Sr, jr, ar, Pr, nr, Qr, zr, Lr, mr, Hr, hr, Jr, dr, yr, lr, Er, Ur, Gr, Cr, er, br, wr, tr, gr, ur, Rr, pr, Wr, sr, Dr, kr, Zr, or, fr, Yr, Nr, Ar, xr, vr, Fr, Br, Xr, Ir, Kr, qr, Tr, Vr, cr, Mi, ri, ii, Oi, Si, ji, ai, Pi, ni, Qi, zi, Li, mi, Hi, Ji, di, yi, li, Ei,  … [truncated]
-           gi = [],
-           ui = [],
-           Ri = [],
-           Wi = [],
-           si = [],
-           Di = [],
-           ki = [],
-           Zi = [],
-           oi = [],
-           fi = [],
-           Yi = [],
- ... (1615 more removed lines; see GitHub link above)
+       static Parse(UU, XU) {
+         const zU = new NU(UU.name, XU);
+         return zU.color = QU.b.FromArray(UU.color), zU.alpha = UU.alpha, zU
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2689-L2697` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L352-L353) · [Before (L2689-L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L2689-L2697)

```diff
-     iM.d(rM, {
-       e: () => OM
-     })
-   },
-   41472: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => OM
-     });
-     class OM {
+     NU.ForceGLSL = !1;
+     class IU extends oU.b {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2699-L2725` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L355) · [Before (L2699-L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L2699-L2725)

```diff
-         this._webGL = {
-           load: MM,
-           loaded: !1,
-           loadPromise: null
-         }, this._webGPU = {
-           load: rM,
-           loaded: !1,
-           loadPromise: null
-         }
-       }
-       getLoadCallback(MM) {
-         const rM = 1 === MM ? this._webGPU : this._webGL;
-         return rM.loaded ? void 0 : async () => {
-           await this._loadAsync(rM)
-         }
-       }
- ... (11 more removed lines; see GitHub link above)
+         super(UU, XU), this.intersectionThreshold = XU.intersectionThreshold
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L2727-L2728` → after: `L357-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/286.js#L357-L358) · [Before (L2727-L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/286.js#L2727-L2728)

```diff
-       _completeLoad(MM, rM) {
-         MM.loaded = rM, MM.loadPromise = null
+       getClassName() {
+         return "InstancedLinesMesh"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/287.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/287.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L4)

```diff
-   41408: (MM, rM, iM) => {
+   41549: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6-L1561` → after: `L6-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L6-L11) · [Before (L6-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L6-L1561)

```diff
-       c: () => OM
-     });
-     class OM {
-       constructor(MM, rM, iM) {
-         this.bu = MM, this.bv = rM, this.distance = iM, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
-       }
-     }
-   },
-   41412: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(38048),
-       SM = iM(38040),
-       jM = iM(38044);
-     class aM {
- ... (1540 more removed lines; see GitHub link above)
+       d: () => PU,
+       h: () => ZU,
+       i: () => GU,
+       k: () => BU,
+       n: () => kU,
+       o: () => gU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1563-L1617` → after: `L13-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L13-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L13-L58) · [Before (L1563-L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1563-L1617)

```diff
-     var OM = iM(41005);
-     class SM {
-       static get DiffuseTextureEnabled() {
-         return this._DiffuseTextureEnabled
-       }
-       static set DiffuseTextureEnabled(MM) {
-         this._DiffuseTextureEnabled !== MM && (this._DiffuseTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
-       }
-       static get BaseWeightTextureEnabled() {
-         return this._BaseWeightTextureEnabled
-       }
-       static set BaseWeightTextureEnabled(MM) {
-         this._BaseWeightTextureEnabled !== MM && (this._BaseWeightTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
-       }
-       static get BaseDiffuseRoughnessTextureEnabled() {
-         return this._BaseDiffuseRoughnessTextureEnabled
- ... (39 more removed lines; see GitHub link above)
+     var cU = zU(41134),
+       yU = zU(41202),
+       QU = zU(37819),
+       AU = zU(41237),
+       FU = zU(41557),
+       oU = zU(41422),
+       DU = zU(41160),
+       EU = zU(41415),
+       YU = zU(37841),
+       NU = zU(41406),
+       IU = zU(41400),
+       pU = zU(41438),
+       aU = zU(37863);
+     const tU = {
+       effect: null,
+       subMesh: null
+ ... (30 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1619-L1620` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L60-L61) · [Before (L1619-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1619-L1620)

```diff
-       static get SpecularTextureEnabled() {
-         return this._SpecularTextureEnabled
+       getClassName() {
+         return "ShaderMaterial"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1622-L1623` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L63-L64) · [Before (L1622-L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1622-L1623)

```diff
-       static set SpecularTextureEnabled(MM) {
-         this._SpecularTextureEnabled !== MM && (this._SpecularTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       needAlphaBlending() {
+         return this.alpha < 1 || this._options.needAlphaBlending
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1625-L1626` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L66-L67) · [Before (L1625-L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1625-L1626)

```diff
-       static get BumpTextureEnabled() {
-         return this._BumpTextureEnabled
+       needAlphaTesting() {
+         return this._options.needAlphaTesting
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1628-L1629` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L69-L70) · [Before (L1628-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1628-L1629)

```diff
-       static set BumpTextureEnabled(MM) {
-         this._BumpTextureEnabled !== MM && (this._BumpTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       _checkUniform(UU) {
+         -1 === this._options.uniforms.indexOf(UU) && this._options.uniforms.push(UU)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1631-L1632` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L72-L73) · [Before (L1631-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1631-L1632)

```diff
-       static get LightmapTextureEnabled() {
-         return this._LightmapTextureEnabled
+       setTexture(UU, XU) {
+         return -1 === this._options.samplers.indexOf(UU) && this._options.samplers.push(UU), this._textures[UU] = XU, this
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1634-L1635` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L75-L76) · [Before (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1634-L1635)

```diff
-       static set LightmapTextureEnabled(MM) {
-         this._LightmapTextureEnabled !== MM && (this._LightmapTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       setInternalTexture(UU, XU) {
+         return -1 === this._options.samplers.indexOf(UU) && this._options.samplers.push(UU), this._internalTextures[UU] = XU, this
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1637-L1638` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L78-L79) · [Before (L1637-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1637-L1638)

```diff
-       static get RefractionTextureEnabled() {
-         return this._RefractionTextureEnabled
+       removeTexture(UU) {
+         delete this._textures[UU]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1640-L1641` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L81-L82) · [Before (L1640-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1640-L1641)

```diff
-       static set RefractionTextureEnabled(MM) {
-         this._RefractionTextureEnabled !== MM && (this._RefractionTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       setTextureArray(UU, XU) {
+         return -1 === this._options.samplers.indexOf(UU) && this._options.samplers.push(UU), this._checkUniform(UU), this._textureArrays[UU] = XU, this
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1643-L1644` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L84-L85) · [Before (L1643-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1643-L1644)

```diff
-       static get ColorGradingTextureEnabled() {
-         return this._ColorGradingTextureEnabled
+       setExternalTexture(UU, XU) {
+         return -1 === this._options.externalTextures.indexOf(UU) && this._options.externalTextures.push(UU), this._externalTextures[UU] = XU, this
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1646-L1647` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L87-L88) · [Before (L1646-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1646-L1647)

```diff
-       static set ColorGradingTextureEnabled(MM) {
-         this._ColorGradingTextureEnabled !== MM && (this._ColorGradingTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       setFloat(UU, XU) {
+         return this._checkUniform(UU), this._floats[UU] = XU, this
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1649-L1650` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L90-L91) · [Before (L1649-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1649-L1650)

```diff
-       static get FresnelEnabled() {
-         return this._FresnelEnabled
+       setInt(UU, XU) {
+         return this._checkUniform(UU), this._ints[UU] = XU, this
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1652-L1653` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L93-L94) · [Before (L1652-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1652-L1653)

```diff
-       static set FresnelEnabled(MM) {
-         this._FresnelEnabled !== MM && (this._FresnelEnabled = MM, OM.d.MarkAllMaterialsAsDirty(4))
+       setUInt(UU, XU) {
+         return this._checkUniform(UU), this._uints[UU] = XU, this
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1655-L1656` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L96-L97) · [Before (L1655-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1655-L1656)

```diff
-       static get ClearCoatTextureEnabled() {
-         return this._ClearCoatTextureEnabled
+       setFloats(UU, XU) {
+         return this._checkUniform(UU), this._floatsArrays[UU] = XU, this
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1658-L1659` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L99-L100) · [Before (L1658-L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1658-L1659)

```diff
-       static set ClearCoatTextureEnabled(MM) {
-         this._ClearCoatTextureEnabled !== MM && (this._ClearCoatTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       setColor3(UU, XU) {
+         return this._checkUniform(UU), this._colors3[UU] = XU, this
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1661-L1662` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L102-L103) · [Before (L1661-L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1661-L1662)

```diff
-       static get ClearCoatBumpTextureEnabled() {
-         return this._ClearCoatBumpTextureEnabled
+       setColor3Array(UU, XU) {
+         return this._checkUniform(UU), this._colors3Arrays[UU] = XU.reduce(((UU, XU) => (UU.push(XU.r, XU.g, XU.b), UU)), []), this
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1664-L1665` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L105-L106) · [Before (L1664-L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1664-L1665)

```diff
-       static set ClearCoatBumpTextureEnabled(MM) {
-         this._ClearCoatBumpTextureEnabled !== MM && (this._ClearCoatBumpTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       setColor4(UU, XU) {
+         return this._checkUniform(UU), this._colors4[UU] = XU, this
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1667-L1668` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L108-L109) · [Before (L1667-L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1667-L1668)

```diff
-       static get ClearCoatTintTextureEnabled() {
-         return this._ClearCoatTintTextureEnabled
+       setColor4Array(UU, XU) {
+         return this._checkUniform(UU), this._colors4Arrays[UU] = XU.reduce(((UU, XU) => (UU.push(XU.r, XU.g, XU.b, XU.a), UU)), []), this
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1670-L1671` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L111-L112) · [Before (L1670-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1670-L1671)

```diff
-       static set ClearCoatTintTextureEnabled(MM) {
-         this._ClearCoatTintTextureEnabled !== MM && (this._ClearCoatTintTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       setVector2(UU, XU) {
+         return this._checkUniform(UU), this._vectors2[UU] = XU, this
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1673-L1674` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L114-L115) · [Before (L1673-L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1673-L1674)

```diff
-       static get SheenTextureEnabled() {
-         return this._SheenTextureEnabled
+       setVector3(UU, XU) {
+         return this._checkUniform(UU), this._vectors3[UU] = XU, this
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1676-L1677` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L117-L118) · [Before (L1676-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1676-L1677)

```diff
-       static set SheenTextureEnabled(MM) {
-         this._SheenTextureEnabled !== MM && (this._SheenTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       setVector4(UU, XU) {
+         return this._checkUniform(UU), this._vectors4[UU] = XU, this
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1679-L1680` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L120-L121) · [Before (L1679-L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1679-L1680)

```diff
-       static get AnisotropicTextureEnabled() {
-         return this._AnisotropicTextureEnabled
+       setQuaternion(UU, XU) {
+         return this._checkUniform(UU), this._quaternions[UU] = XU, this
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1682-L1683` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L123-L124) · [Before (L1682-L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1682-L1683)

```diff
-       static set AnisotropicTextureEnabled(MM) {
-         this._AnisotropicTextureEnabled !== MM && (this._AnisotropicTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       setQuaternionArray(UU, XU) {
+         return this._checkUniform(UU), this._quaternionsArrays[UU] = XU.reduce(((UU, XU) => (XU.toArray(UU, UU.length), UU)), []), this
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1685-L1686` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L126-L127) · [Before (L1685-L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1685-L1686)

```diff
-       static get ThicknessTextureEnabled() {
-         return this._ThicknessTextureEnabled
+       setMatrix(UU, XU) {
+         return this._checkUniform(UU), this._matrices[UU] = XU, this
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1688-L1689` → after: `L129-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L129-L135) · [Before (L1688-L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1688-L1689)

```diff
-       static set ThicknessTextureEnabled(MM) {
-         this._ThicknessTextureEnabled !== MM && (this._ThicknessTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       setMatrices(UU, XU) {
+         this._checkUniform(UU);
+         const zU = new Float32Array(16 * XU.length);
+         for (let cU = 0; cU < XU.length; cU++) {
+           XU[cU].copyToArray(zU, 16 * cU)
+         }
+         return this._matrixArrays[UU] = zU, this
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1691-L1692` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L137-L138) · [Before (L1691-L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1691-L1692)

```diff
-       static get RefractionIntensityTextureEnabled() {
-         return this._ThicknessTextureEnabled
+       setMatrix3x3(UU, XU) {
+         return this._checkUniform(UU), this._matrices3x3[UU] = XU, this
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1694-L1695` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L140-L141) · [Before (L1694-L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1694-L1695)

```diff
-       static set RefractionIntensityTextureEnabled(MM) {
-         this._RefractionIntensityTextureEnabled !== MM && (this._RefractionIntensityTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       setMatrix2x2(UU, XU) {
+         return this._checkUniform(UU), this._matrices2x2[UU] = XU, this
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1697-L1698` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L143-L144) · [Before (L1697-L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1697-L1698)

```diff
-       static get TranslucencyIntensityTextureEnabled() {
-         return this._TranslucencyIntensityTextureEnabled
+       setArray2(UU, XU) {
+         return this._checkUniform(UU), this._vectors2Arrays[UU] = XU, this
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1700-L1701` → after: `L146-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L146-L147) · [Before (L1700-L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1700-L1701)

```diff
-       static set TranslucencyIntensityTextureEnabled(MM) {
-         this._TranslucencyIntensityTextureEnabled !== MM && (this._TranslucencyIntensityTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       setArray3(UU, XU) {
+         return this._checkUniform(UU), this._vectors3Arrays[UU] = XU, this
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1703-L1704` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L149-L150) · [Before (L1703-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1703-L1704)

```diff
-       static get TranslucencyColorTextureEnabled() {
-         return this._TranslucencyColorTextureEnabled
+       setArray4(UU, XU) {
+         return this._checkUniform(UU), this._vectors4Arrays[UU] = XU, this
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1706-L1707` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L152-L153) · [Before (L1706-L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1706-L1707)

```diff
-       static set TranslucencyColorTextureEnabled(MM) {
-         this._TranslucencyColorTextureEnabled !== MM && (this._TranslucencyColorTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       setUniformBuffer(UU, XU) {
+         return -1 === this._options.uniformBuffers.indexOf(UU) && this._options.uniformBuffers.push(UU), this._uniformBuffers[UU] = XU, this
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1709-L1710` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L155-L156) · [Before (L1709-L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1709-L1710)

```diff
-       static get IridescenceTextureEnabled() {
-         return this._IridescenceTextureEnabled
+       setTextureSampler(UU, XU) {
+         return -1 === this._options.samplerObjects.indexOf(UU) && this._options.samplerObjects.push(UU), this._textureSamplers[UU] = XU, this
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1712-L1713` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L158-L159) · [Before (L1712-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1712-L1713)

```diff
-       static set IridescenceTextureEnabled(MM) {
-         this._IridescenceTextureEnabled !== MM && (this._IridescenceTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
+       setStorageBuffer(UU, XU) {
+         return -1 === this._options.storageBuffers.indexOf(UU) && this._options.storageBuffers.push(UU), this._storageBuffers[UU] = XU, this
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1715-L1759` → after: `L161-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L161-L164) · [Before (L1715-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1715-L1759)

```diff
-     }
-     SM._DiffuseTextureEnabled = !0, SM._BaseWeightTextureEnabled = !0, SM._BaseDiffuseRoughnessTextureEnabled = !0, SM._DetailTextureEnabled = !0, SM._DecalMapEnabled = !0, SM._AmbientTextureEnabled = !0, SM._OpacityTextureEnabled = !0, SM._ReflectionTextureEnabled = !0, SM._Emis … [truncated]
-   },
-   41426: (MM, rM, iM) => {
-     iM.d(rM, {
-       $: () => xM,
-       A: () => GM,
-       D: () => gM,
-       F: () => uM,
-       G: () => HM,
-       H: () => mM,
-       K: () => AM,
-       N: () => ZM,
-       R: () => DM,
-       S: () => sM,
-       W: () => EM,
- ... (29 more removed lines; see GitHub link above)
+       setDefine(UU, XU) {
+         const zU = UU.trimEnd() + " ",
+           cU = this.options.defines.findIndex((XU => XU === UU || XU.startsWith(zU)));
+         return cU >= 0 && this.options.defines.splice(cU, 1), ("boolean" !== typeof XU || XU) && this.options.defines.push(zU + XU), this
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1761-L1799` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L166-L167) · [Before (L1761-L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1761-L1799)

```diff
-     }
-     const QM = {
-         r: 0,
-         g: 0,
-         b: 0
-       },
-       zM = {
-         NUM_MORPH_INFLUENCERS: 0,
-         NORMAL: !1,
-         TANGENT: !1,
-         UV: !1,
-         UV2: !1,
-         COLOR: !1
-       };
- 
-     function LM(MM, rM, iM) {
- ... (23 more removed lines; see GitHub link above)
+       isReadyForSubMesh(UU, XU, zU) {
+         return this.isReady(UU, zU, XU)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1801-L1829` → after: `L169-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L169-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L169-L173) · [Before (L1801-L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1801-L1829)

```diff
-     }
- 
-     function hM(MM) {
-       let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       MM.push("world0"), MM.push("world1"), MM.push("world2"), MM.push("world3"), rM && (MM.push("previousWorld0"), MM.push("previousWorld1"), MM.push("previousWorld2"), MM.push("previousWorld3"))
-     }
- 
-     function JM(MM, rM) {
-       const iM = MM.morphTargetManager;
-       MM && iM && rM.setFloatArray("morphTargetInfluences", iM.influences)
-     }
- 
-     function dM(MM, rM) {
-       rM.bindToEffect(MM, "Scene")
-     }
- 
- ... (13 more removed lines; see GitHub link above)
+       isReady(UU, XU, zU) {
+         const cU = zU && this._storeEffectOnSubMeshes;
+         if (this.isFrozen) {
+           const UU = cU ? zU._drawWrapper : this._drawWrapper;
+           if (UU.effect && UU._wasPreviouslyReady && UU._wasPreviouslyUsingInstances === XU) return !0
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1832-L1833` → after: `L206-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L206-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L206-L322) · [Before (L1832-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1832-L1833)

```diff
-           const MM = SM.getSize().width;
-           iM.updateFloat2("vReflectionFilteringInfo", MM, Math.log2(MM))
+           const zU = UU.bakedVertexAnimationManager;
+           zU && zU.isEnabled && (DU.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === gU.indexOf("bakedVertexAnimationSettings") && gU.push("bakedVertexAnimationSettings"), -1 === gU.indexOf("bakedVertexAnimationTextureSizeInverted") && gU.push("bakedVertexAnimationTextureSi … [truncated]
+         }
+         for (const yU in this._textures)
+           if (!this._textures[yU].isReady()) return !1;
+         for (const yU in this._internalTextures)
+           if (!this._internalTextures[yU].isReady) return !1;
+         UU && this.needAlphaTestingForMesh(UU) && DU.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, NU.c)(gU), (0, NU.m)(this, QU, DU)), QU.fogEnabled && UU?.applyFog && QU.fogMode !== yU.d.FOGMODE_NONE && (DU.push("#define FOG"), -1 === gU.indexOf("view") & … [truncated]
+         const RU = zU ? zU.getRenderingMesh() : UU;
+         if (RU && this.useVertexPulling) {
+           const UU = RU.geometry;
+           UU && (this._vertexPullingMetadata = (0, pU.f)(UU), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((UU, XU) => {
+             gU.push(`vp_${XU}_info`)
+           }))), DU.push("#define USE_VERTEX_PULLING");
+           const XU = RU.geometry?.getIndexBuffer();
+           XU && !RU.isUnIndexed && (DU.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), XU.is32Bits && DU.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
+ ... (101 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1835-L1854` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L324) · [Before (L1835-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1835-L1854)

```diff
-         if (zM && !rM.USEIRRADIANCEMAP) {
-           const MM = SM.sphericalPolynomial;
-           if (rM.USESPHERICALFROMREFLECTIONMAP && MM)
-             if (rM.SPHERICAL_HARMONICS) {
-               const rM = MM.preScaledHarmonics;
-               iM.updateVector3("vSphericalL00", rM.l00), iM.updateVector3("vSphericalL1_1", rM.l1_1), iM.updateVector3("vSphericalL10", rM.l10), iM.updateVector3("vSphericalL11", rM.l11), iM.updateVector3("vSphericalL2_2", rM.l2_2), iM.updateVector3("vSphericalL2_1", rM.l2_1), iM … [truncated]
-             } else iM.updateFloat3("vSphericalX", MM.x.x, MM.x.y, MM.x.z), iM.updateFloat3("vSphericalY", MM.y.x, MM.y.y, MM.y.z), iM.updateFloat3("vSphericalZ", MM.z.x, MM.z.y, MM.z.z), iM.updateFloat3("vSphericalXX_ZZ", MM.xx.x - MM.zz.x, MM.xx.y - MM.zz.y, MM.xx.z - MM.zz.z),  … [truncated]
-         } else QM && rM.USEIRRADIANCEMAP && rM.USE_IRRADIANCE_DOMINANT_DIRECTION && SM.irradianceTexture && iM.updateVector3("vReflectionDominantDirection", SM.irradianceTexture._dominantDirection);
-         aM && iM.updateFloat3("vReflectionMicrosurfaceInfos", SM.getSize().width, SM.lodGenerationScale, SM.lodGenerationOffset)
-       }
-       LM && iM.updateColor3("vReflectionColor", OM)
-     }
- 
-     function lM(MM, rM, iM) {
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
- ... (4 more removed lines; see GitHub link above)
+         this._afterBind(XU, QU, cU)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1856-L1880` → after: `L326-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L326-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L326-L331) · [Before (L1856-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1856-L1880)

```diff
-     }
- 
-     function EM(MM, rM, iM) {
-       rM._needUVs = !0, rM[iM] = !0, MM.optimizeUVAllocation && MM.getTextureMatrix().isIdentityAs3x2() ? (rM[iM + "DIRECTUV"] = MM.coordinatesIndex + 1, rM["MAINUV" + (MM.coordinatesIndex + 1)] = !0) : rM[iM + "DIRECTUV"] = 0
-     }
- 
-     function UM(MM, rM, iM) {
-       const OM = MM.getTextureMatrix();
-       rM.p_(iM + "Matrix", OM)
-     }
- 
-     function GM(MM, rM, iM) {
-       iM.BAKED_VERTEX_ANIMATION_TEXTURE && iM.INSTANCES && MM.push("bakedVertexAnimationSettingsInstanced")
-     }
- 
-     function CM(MM, rM, iM) {
- ... (9 more removed lines; see GitHub link above)
+       getActiveTextures() {
+         const UU = super.getActiveTextures();
+         for (const XU in this._textures) UU.push(this._textures[XU]);
+         for (const XU in this._textureArrays) {
+           const zU = this._textureArrays[XU];
+           for (let XU = 0; XU < zU.length; XU++) UU.push(zU[XU])
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1883-L2026` → after: `L335-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L335-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L335-L389) · [Before (L1883-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L1883-L2026)

```diff
-     }
- 
-     function eM(MM, rM, iM, OM, SM) {
-       let jM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-       MM._bindLight(rM, iM, OM, SM, jM)
-     }
-     const bM = 4,
-       wM = new WeakMap;
- 
-     function tM(MM, rM, iM, OM) {
-       let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
-       const jM = Math.min(rM.lightSources.length, SM);
-       for (let aM = 0; aM < jM; aM++) {
-         eM(rM.lightSources[aM], aM, MM, iM, "boolean" === typeof OM ? OM : OM.SPECULARTERM, rM.receiveShadows)
-       }
-     }
- ... (128 more removed lines; see GitHub link above)
+       hasTexture(UU) {
+         if (super.hasTexture(UU)) return !0;
+         for (const zU in this._textures)
+           if (this._textures[zU] === UU) return !0;
+         const XU = UU.getInternalTexture();
+         for (const zU in this._internalTextures)
+           if (this._internalTextures[zU] === XU) return !0;
+         for (const zU in this._textureArrays) {
+           const XU = this._textureArrays[zU];
+           for (let zU = 0; zU < XU.length; zU++)
+             if (XU[zU] === UU) return !0
+         }
+         return !1
+       }
+       clone(UU) {
+         const XU = cU.b.Clone((() => new gU(UU, this.nS(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
+ ... (39 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L2028-L2029` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L391) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L2028-L2029)

```diff
-       if (aM && !iM.specular.equalsFloats(0, 0, 0) && (PM.specularEnabled = !0), SM["SHADOW" + OM] = !1, SM["SHADOWCSM" + OM] = !1, SM["SHADOWCSMDEBUG" + OM] = !1, SM["SHADOWCSMNUM_CASCADES" + OM] = !1, SM["SHADOWCSMUSESHADOWMAXZ" + OM] = !1, SM["SHADOWCSMNOBLEND" + OM] = !1, SM[ … [truncated]
-         const rM = iM.getShadowGenerator(MM.activeCamera) ?? iM.getShadowGenerator();
+       dispose(UU, XU, zU) {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L2031-L2048` → after: `L393-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L393-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L393-L398) · [Before (L2031-L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L2031-L2048)

```diff
-           const MM = rM.getShadowMap();
-           MM && MM.renderList && MM.renderList.length > 0 && (PM.shadowEnabled = !0, rM.prepareDefines(SM, OM))
-         }
-       }
-       iM.lightmapMode != jM.b.LIGHTMAP_DEFAULT ? (PM.lightmapMode = !0, SM["LIGHTMAPEXCLUDED" + OM] = !0, SM["LIGHTMAPNOSPECULAR" + OM] = iM.lightmapMode == jM.b.LIGHTMAP_SHADOWSONLY) : (SM["LIGHTMAPEXCLUDED" + OM] = !1, SM["LIGHTMAPNOSPECULAR" + OM] = !1)
-     }
- 
-     function ZM(MM, rM, iM, OM, SM) {
-       let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-         PM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         nM = function(MM, rM) {
-           let iM = !1;
-           if (MM.activeCamera) {
-             const OM = rM.CAMERA_ORTHOGRAPHIC ? 1 : 0,
-               SM = rM.CAMERA_PERSPECTIVE ? 1 : 0,
-               jM = 1 === MM.activeCamera.mode ? 1 : 0,
- ... (2 more removed lines; see GitHub link above)
+           let UU;
+           for (UU in this._textures) this._textures[UU].dispose();
+           for (UU in this._internalTextures) this._internalTextures[UU].dispose();
+           for (UU in this._textureArrays) {
+             const XU = this._textureArrays[UU];
+             for (let UU = 0; UU < XU.length; UU++) XU[UU].dispose()
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L2176-L2178` → after: `L401-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L401-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L401-L447) · [Before (L2176-L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L2176-L2178)

```diff
-       } else {
-         rM.PREPASS = !1;
-         for (let MM = 0; MM < SM.length; MM++) rM[SM[MM].define] = !1
+         this._textures = {}, this._internalTextures = {}, super.dispose(UU, XU, zU)
+       }
+       serialize() {
+         const UU = cU.b.Serialize(this);
+         let XU;
+         for (XU in UU.customType = "BABYLON.ShaderMaterial", UU.uniqueId = this.uniqueId, UU.options = this._options, UU.shaderPath = this._shaderPath, UU.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, UU.stencil = this.stencil.serialize(), UU.textures = {}, this._texture … [truncated]
+         for (XU in UU.textureArrays = {}, this._textureArrays) {
+           UU.textureArrays[XU] = [];
+           const zU = this._textureArrays[XU];
+           for (let cU = 0; cU < zU.length; cU++) UU.textureArrays[XU].push(zU[cU].serialize())
+         }
+         for (XU in UU.ints = {}, this._ints) UU.ints[XU] = this._ints[XU];
+         for (XU in UU.uints = {}, this._uints) UU.uints[XU] = this._uints[XU];
+         for (XU in UU.floats = {}, this._floats) UU.floats[XU] = this._floats[XU];
+         for (XU in UU.floatsArrays = {}, this._floatsArrays) UU.floatsArrays[XU] = this._floatsArrays[XU];
+         for (XU in UU.colors3 = {}, this._colors3) {
+ ... (31 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L2200-L2247` → after: `L452-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L452-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L452-L471) · [Before (L2200-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L2200-L2247)

```diff
-       let OM, SM, jM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
-         aM = null;
-       if (MM.uniformsNames) {
-         const PM = MM;
-         OM = PM.uniformsNames, SM = PM.uniformBuffersNames, rM = PM.samplers, iM = PM.defines, jM = PM.maxSimultaneousLights || 0, aM = PM.shaderLanguage ?? null
-       } else OM = MM, rM || (rM = []);
-       for (let PM = 0; PM < jM && iM["LIGHT" + PM]; PM++) BM(PM, OM, rM, iM["PROJECTEDLIGHTTEXTURE" + PM], SM, !1, iM["IESLIGHTTEXTURE" + PM], iM["CLUSTLIGHT" + PM], iM["RECTAREALIGHTEMISSIONTEXTURE" + PM], 1 === aM);
-       iM.NUM_MORPH_INFLUENCERS && (OM.push("morphTargetInfluences"), OM.push("morphTargetCount")), iM.BAKED_VERTEX_ANIMATION_TEXTURE && (OM.push("bakedVertexAnimationSettings"), OM.push("bakedVertexAnimationTextureSizeInverted"), OM.push("bakedVertexAnimationTime"), rM.push("bake … [truncated]
-     }
- 
-     function KM(MM) {
-       let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
- ... (32 more removed lines; see GitHub link above)
+       const yU = cU.b.Parse((() => new gU(UU.name, XU, UU.shaderPath, UU.options, UU.storeEffectOnSubMeshes)), UU, XU, zU);
+       let AU;
+       for (AU in UU.stencil && yU.stencil.parse(UU.stencil, XU, zU), UU.textures) yU.setTexture(AU, FU.e.Parse(UU.textures[AU], XU, zU));
+       for (AU in UU.textureArrays) {
+         const cU = UU.textureArrays[AU],
+           QU = [];
+         for (let UU = 0; UU < cU.length; UU++) QU.push(FU.e.Parse(cU[UU], XU, zU));
+         yU.setTextureArray(AU, QU)
+       }
+       for (AU in UU.ints) yU.setInt(AU, UU.ints[AU]);
+       for (AU in UU.uints) yU.setUInt(AU, UU.uints[AU]);
+       for (AU in UU.floats) yU.setFloat(AU, UU.floats[AU]);
+       for (AU in UU.floatsArrays) yU.setFloats(AU, UU.floatsArrays[AU]);
+       for (AU in UU.colors3) {
+         const XU = UU.colors3[AU];
+         yU.setColor3(AU, {
+ ... (4 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L2249-L2252` → after: `L473-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L473-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L473-L488) · [Before (L2249-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L2249-L2252)

```diff
-       _afterBind(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           iM = arguments.length > 2 ? arguments[2] : void 0;
-         super._afterBind(MM, rM, iM), this.Hk()._cachedEffect = rM, iM ? iM._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
+       for (AU in UU.colors3Arrays) {
+         const XU = UU.colors3Arrays[AU].reduce(((UU, XU, zU) => (zU % 3 === 0 ? UU.push([XU]) : UU[UU.length - 1].push(XU), UU)), []).map((UU => ({
+           r: UU[0],
+           g: UU[1],
+           b: UU[2]
+         })));
+         yU.setColor3Array(AU, XU)
+       }
+       for (AU in UU.colors4) {
+         const XU = UU.colors4[AU];
+         yU.setColor4(AU, {
+           r: XU[0],
+           g: XU[1],
+           b: XU[2],
+           a: XU[3]
+         })
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L2254-L2256` → after: `L490-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L490-L504) · [Before (L2254-L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L2254-L2256)

```diff
-       _mustRebind(MM, rM, iM) {
-         let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
-         return iM._drawWrapper._forceRebindOnNextCall || MM.isCachedMaterialInvalid(this, rM, OM)
+       for (AU in UU.colors4Arrays) {
+         const XU = UU.colors4Arrays[AU].reduce(((UU, XU, zU) => (zU % 4 === 0 ? UU.push([XU]) : UU[UU.length - 1].push(XU), UU)), []).map((UU => ({
+           r: UU[0],
+           g: UU[1],
+           b: UU[2],
+           a: UU[3]
+         })));
+         yU.setColor4Array(AU, XU)
+       }
+       for (AU in UU.vectors2) {
+         const XU = UU.vectors2[AU];
+         yU.setVector2(AU, {
+           x: XU[0],
+           y: XU[1]
+         })
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L2258-L2259` → after: `L506-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L506-L512) · [Before (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L2258-L2259)

```diff
-       dispose(MM, rM, iM) {
-         this._activeEffect = void 0, super.dispose(MM, rM, iM)
+       for (AU in UU.vectors3) {
+         const XU = UU.vectors3[AU];
+         yU.setVector3(AU, {
+           x: XU[0],
+           y: XU[1],
+           z: XU[2]
+         })
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L2261-L2295` → after: `L514-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L514-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L514-L521) · [Before (L2261-L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L2261-L2295)

```diff
-     }
-   },
-   41469: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => jM,
-       g: () => SM
-     });
-     const OM = new WeakMap;
- 
-     function SM(MM) {
-       const rM = MM.getVertexBuffers();
-       if (!rM) return null;
-       let iM = OM.get(MM);
-       if (iM) {
-         let MM = !1;
-         for (const OM in rM)
- ... (19 more removed lines; see GitHub link above)
+       for (AU in UU.vectors4) {
+         const XU = UU.vectors4[AU];
+         yU.setVector4(AU, {
+           x: XU[0],
+           y: XU[1],
+           z: XU[2],
+           w: XU[3]
+         })
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L2299-L2303` → after: `L535-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L535-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L535-L545) · [Before (L2299-L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L2299-L2303)

```diff
- 
-     function jM(MM, rM) {
-       rM.forEach(((rM, iM) => {
-         const OM = `vp_${iM}_info`;
-         MM.setFloat4(OM, rM.offset, rM.stride, rM.type, rM.normalized ? 1 : 0)
+     async function GU(UU, XU, zU) {
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
+       return await new Promise(((yU, QU) => {
+         const AU = new DU.e;
+         AU.addEventListener("readystatechange", (() => {
+           if (4 == AU.readyState)
+             if (200 == AU.status) {
+               const XU = kU(JSON.parse(AU.responseText), zU || YU.b.LastCreatedScene, cU);
+               UU && (XU.name = UU), yU(XU)
+             } else QU("Unable to load the ShaderMaterial")
+         })), AU.open("GET", XU), AU.send()
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L2306-L2378` → after: `L548-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L548-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L548-L561) · [Before (L2306-L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L2306-L2378)

```diff
-   },
-   41416: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => PM,
-       d: () => nM
-     });
-     var OM = iM(41099),
-       SM = iM(38040),
-       jM = iM(41105);
-     let aM = (() => {
-       var MM;
-       let rM, iM, SM = [];
-       return MM = class {
-         static extractMinAndMaxIndexed(MM, rM, iM, OM, SM, jM) {
-           for (let aM = iM; aM < iM + OM; aM++) {
-             const iM = 3 * rM[aM],
- ... (57 more removed lines; see GitHub link above)
+     async function BU(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+       const cU = this?.SnippetUrl ?? gU.SnippetUrl;
+       return await new Promise(((yU, QU) => {
+         const AU = new DU.e;
+         AU.addEventListener("readystatechange", (() => {
+           if (4 == AU.readyState)
+             if (200 == AU.status) {
+               const cU = JSON.parse(JSON.parse(AU.responseText).jsonPayload),
+                 QU = kU(JSON.parse(cU.shaderMaterial), XU || YU.b.LastCreatedScene, zU);
+               QU.snippetId = UU, yU(QU)
+             } else QU("Unable to load the snippet " + UU)
+         })), AU.open("GET", cU + "/" + UU.replace(/#/g, "/")), AU.send()
+       }))
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L2381-L2389` → after: `L567-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/287.js#L567-L568) · [Before (L2381-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/287.js#L2381-L2389)

```diff
-     function nM(MM, rM, iM) {
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         jM = arguments.length > 4 ? arguments[4] : void 0;
-       const PM = new SM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         nM = new SM.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-       return jM || (jM = 3), aM.extractMinAndMax(MM, rM, iM, jM, PM, nM), OM && (PM.x -= PM.x * OM.x + OM.y, PM.y -= PM.y * OM.x + OM.y, PM.z -= PM.z * OM.x + OM.y, nM.x += nM.x * OM.x + OM.y, nM.y += nM.y * OM.x + OM.y, nM.z += nM.z * OM.x + OM.y), {
-         minimum: PM,
-         maximum: nM
-       }
+     function PU() {
+       RU || (RU = !0, gU.Parse = kU, gU.ParseFromFileAsync = GU, gU.ParseFromSnippetAsync = BU, gU.CreateFromSnippetAsync = ZU, (0, aU.h)("BABYLON.ShaderMaterial", gU))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/288.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/288.js` (45 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468)

#### 1. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L4-L6)

```diff
-   44241: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => OM
+   41568: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       default: () => gz
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L8-L20` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L8-L74) · [Before (L8-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L8-L20)

```diff
-     class OM {}
-     OM.AUTOSAMPLERSUFFIX = "Sampler", OM.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", OM.ALPHA_DISABLE = 0, OM.ALPHA_ADD = 1, OM.ALPHA_COMBINE = 2, OM.ALPHA_SUBTRACT = 3, OM.ALPHA_MULTIPLY = 4, OM.ALPHA_MAXIMIZED = 5, OM.ALPHA_ONEONE = 6, OM.ALPHA_PREMULTIPLIED = 7, OM.ALPH … [truncated]
-   },
-   44229: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => nM
-     });
-     var OM = iM(41099),
-       SM = iM(41105),
-       jM = iM(38040),
-       aM = iM(41366),
-       PM = iM(41337);
-     let nM = (() => {
+     var cU = zU(61),
+       yU = zU(1106),
+       QU = zU.n(yU);
+     const AU = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
+       FU = 3e3;
+ 
+     function oU(UU) {
+       return UU.down && UU.inPlay && !UU.bound
+     }
+ 
+     function DU(UU, XU) {
+       let zU = 0,
+         cU = UU.length;
+       for (; zU < cU;) {
+         const yU = zU + cU >> 1;
+         UU[yU].atMs <= XU ? zU = yU + 1 : cU = yU
+ ... (51 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L22-L80` → after: `L76-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L76-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L76-L163) · [Before (L22-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L22-L80)

```diff
-       let rM, iM, nM, QM, zM = aM.d,
-         LM = [];
-       return MM = class extends zM {
-         constructor() {
-           super(...arguments), this._position = (0, OM.m)(this, LM), this._needProjectionMatrixCompute = !0, this._viewMatrix = jM.d.Identity(), this._projectionMatrix = jM.d.Identity()
-         }
-         _setPosition(MM) {
-           this._position = MM
-         }
-         get position() {
-           return this._position
-         }
-         set position(MM) {
-           this._setPosition(MM)
-         }
-         _setDirection(MM) {
- ... (43 more removed lines; see GitHub link above)
+       const zU = NU[UU];
+       if (void 0 !== zU) return zU;
+       const cU = null !== (XU = /^(?:Key|Digit)(.)$/.exec(UU)) && void 0 !== XU ? XU : /^Numpad(.+)$/.exec(UU);
+       return null !== cU ? UU.startsWith("Numpad") ? `Num ${cU[1]}` : cU[1] : UU
+     }
+     const pU = 250,
+       aU = 60;
+     var tU = zU(1305);
+     const gU = 6;
+ 
+     function kU(UU) {
+       const XU = Math.max(0, Math.floor(UU / 1e3)),
+         zU = Math.floor(XU / 3600),
+         cU = Math.floor(XU % 3600 / 60),
+         yU = String(XU % 60).padStart(2, "0");
+       return zU > 0 ? `${zU}:${String(cU).padStart(2,"0")}:${yU}` : `${cU}:${yU}`
+ ... (72 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L82-L83` → after: `L165-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L165-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L165-L393) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L82-L83)

```diff
-         needProjectionMatrixCompute() {
-           return this._needProjectionMatrixCompute
+       }), []);
+       const wU = (0, cU.useMemo)((() => 0 === PU ? null : function(UU, XU, zU) {
+           const cU = Math.max(1, Math.min(zU, Math.floor(XU.durationMs / pU))),
+             yU = XU.durationMs / cU,
+             QU = new Array(cU).fill(0);
+           for (const AU of UU) XU.contains(AU.atMs) && QU[Math.min(cU - 1, Math.floor(XU.toPosition(AU.atMs) / yU))]++;
+           return {
+             bucketMs: yU,
+             fps: QU.map((UU => 0 === UU ? null : 1e3 * UU / yU))
+           }
+         }(zU, NU, Math.round(PU))), [zU, NU, PU]),
+         qU = XU.lowFps,
+         OU = (0, cU.useMemo)((() => null === wU ? null : (UU, XU, zU, cU) => {
+           ! function(UU, XU, zU, cU, yU, QU) {
+             UU.clearRect(0, 0, zU, cU);
+             const AU = zU / XU.fps.length;
+ ... (213 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L85-L86` → after: `L395-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L395-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L395-L409) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L85-L86)

```diff
-         forceProjectionMatrixCompute() {
-           this._needProjectionMatrixCompute = !0
+         return this.durationMs
+       }
+       toTime(UU) {
+         const XU = Math.max(0, Math.min(this.durationMs, UU));
+         for (let zU = this.Qt.length - 1; zU >= 0; zU--)
+           if (XU >= this.positionStarts[zU]) return this.Qt[zU].startMs + (XU - this.positionStarts[zU]);
+         return this.startMs
+       }
+       contains(UU) {
+         return this.Qt.some((XU => UU >= XU.startMs && UU < XU.endMs))
+       }
+       nextPlayableTime(UU) {
+         for (const XU of this.Qt) {
+           if (UU < XU.startMs) return XU.startMs;
+           if (UU < XU.endMs) return UU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L88-L89` → after: `L411-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L411-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L411-L478) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L88-L89)

```diff
-         _initCache() {
-           super._initCache(), this._cache.position = jM.q.Zero()
+         return null
+       }
+     }
+ 
+     function iU(UU) {
+       return [...UU].sort(((UU, XU) => UU.startMs - XU.startMs))
+     }
+ 
+     function HU(UU, XU) {
+       let zU = 1 / 0,
+         cU = -1 / 0;
+       const yU = UU => {
+         zU = Math.min(zU, UU), cU = Math.max(cU, UU)
+       };
+       for (const QU of [...UU.videoSegments, ...UU.telemetryChunks]) yU(QU.startMs), yU(QU.endMs);
+       for (const QU of UU.domEvents) yU(XU.toEpoch(QU.timestamp));
+ ... (52 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L91-L92` → after: `L480-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L480-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L480-L494) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L91-L92)

```diff
-         _isSynchronized() {
-           return !!this._cache.position.equals(this.position)
+         this.samples.sort(((UU, XU) => UU.domMs - XU.domMs))
+       }
+       toEpoch(UU) {
+         return UU + this.offsetAtDom(UU)
+       }
+       toDom(UU) {
+         return UU - this.offsetAtDom(UU)
+       }
+       offsetAtDom(UU) {
+         var XU, zU;
+         let cU = 0,
+           yU = this.samples.length - 1;
+         for (; cU < yU;) {
+           const XU = Math.ceil((cU + yU) / 2);
+           this.samples[XU].domMs <= UU ? cU = XU : yU = XU - 1
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L94-L95` → after: `L496-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L496-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L496-L522) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L94-L95)

```diff
-         computeWorldMatrix(MM) {
-           return !MM && this.isSynchronized() ? (this._currentRenderId = this.Hk().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.jR(this.position), this._worldMatrix || (this._worldMatrix = jM.d.Identity()), jM.d.TranslationToRef(this.position.x,  … [truncated]
+         return null !== (XU = null === (zU = this.samples[cU]) || void 0 === zU ? void 0 : zU.offsetMs) && void 0 !== XU ? XU : 0
+       }
+     }
+     const sU = new Set([rU.f.MouseMove, rU.f.MouseInteraction, rU.f.Scroll, rU.f.Input, rU.f.TouchMove, rU.f.Drag]),
+       nU = "bloxd-active",
+       mU = "player_death",
+       lU = "error",
+       xU = {
+         $exception: "error",
+         [lU]: "error",
+         death: "death",
+         [mU]: "death"
+       };
+ 
+     function JU(UU, XU, zU) {
+       return function(UU, XU) {
+ ... (11 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L97-L98` → after: `L524-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L524-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L524-L532) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L97-L98)

```diff
-         getDepthMinZ(MM) {
-           return void 0 !== this.shadowMinZ ? this.shadowMinZ : MM?.minZ || 0
+         return zU
+       }(function(UU) {
+         const XU = [];
+         for (const zU of UU) {
+           const UU = XU.at(-1);
+           void 0 !== UU && zU.atMs - UU.endMs <= 5e3 ? UU.endMs = zU.atMs : XU.push({
+             startMs: zU.atMs,
+             endMs: zU.atMs
+           })
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L100-L101` → after: `L534-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L534-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L534-L689) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L100-L101)

```diff
-         getDepthMaxZ(MM) {
-           return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : MM?.maxZ || 1e4
+         return XU
+       }(UU), uU([...XU, ...zU])).filter((UU => UU.endMs - UU.startMs >= 1e3))
+     }
+ 
+     function jU(UU) {
+       var XU, zU, cU;
+       return UU.type === rU.c.IncrementalSnapshot ? sU.has(null !== (zU = null === (cU = UU.data) || void 0 === cU ? void 0 : cU.source) && void 0 !== zU ? zU : -1) : UU.type === rU.c.Custom && (null === (XU = UU.data) || void 0 === XU ? void 0 : XU.tag) === nU
+     }
+ 
+     function KU(UU, XU) {
+       const zU = [];
+       for (const AU of UU)
+         if (AU.type === rU.c.Custom) {
+           var cU;
+           const UU = null === (cU = AU.data) || void 0 === cU ? void 0 : cU.tag,
+             yU = void 0 === UU ? void 0 : xU[UU];
+ ... (140 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L103-L104` → after: `L691-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L691-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L691-L696) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L103-L104)

```diff
-         setShadowProjectionMatrix(MM, rM, iM) {
-           return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(rM, iM, MM) : this._setDefaultShadowProjectionMatrix(MM, rM, iM), this
+       }
+       replaceUrls(UU) {
+         this.urls.reset(cX(UU));
+         for (const XU of this.chunks) {
+           const zU = UU.find((UU => UU.startMs === XU.chunk.startMs && UU.endMs === XU.chunk.endMs));
+           void 0 !== zU && (XU.chunk = zU, "failed" === XU.status && (XU.status = "idle"))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L106-L107` → after: `L698-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L698-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L698-L730) · [Before (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L106-L107)

```diff
-         _syncParentEnabledState() {
-           super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
+       }
+       destroy() {
+         this.destroyed = !0, this.urls.destroy()
+       }
+       getUrl(UU) {
+         var XU;
+         if (void 0 === UU.sequence) return null !== (XU = UU.url) && void 0 !== XU ? XU : null;
+         const zU = this.urls.get(UU.sequence);
+         return "string" === typeof zU ? null : zU.url
+       }
+       startLoad(UU, XU, zU) {
+         UU.status = "loading", UU.attempts++, this.loading++, zU(XU).then((XU => {
+           this.destroyed || (UU.status = "loaded", UU.telemetry = XU, this.merge(), this.onLoaded())
+         })).catch((XU => {
+           this.destroyed || (console.error(`Failed to load replay telemetry for ${UU.chunk.startMs}-${UU.chunk.endMs}.`, XU), UU.status = UU.attempts < 2 ? "idle" : "failed", this.onFailed())
+         })).finally((() => {
+ ... (17 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L109-L114` → after: `L732-L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L732-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L732-L979) · [Before (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L109-L114)

```diff
-         getViewMatrix(MM) {
-           const rM = jM.l.sh[0];
-           let iM = this.position;
-           this.computeTransformedInformation() && (iM = this.transformedPosition), jM.q.NormalizeToRef(this.getShadowDirection(MM), rM), 1 === Math.abs(jM.q.Dot(rM, jM.q.Up())) && (rM.z = 1e-13);
-           const OM = jM.l.sh[1];
-           return iM.addToRef(rM, OM), jM.d.LookAtLHToRef(iM, OM, jM.q.Up(), this._viewMatrix), this._viewMatrix
+         const zU = UU.map((UU => function(UU, XU) {
+           const zU = UU.actions.at(-1);
+           if (void 0 === zU || 0 === zU.bits) return UU;
+           return {
+             ...UU,
+             actions: [...UU.actions, {
+               atMs: XU,
+               bits: 0
+             }]
+           }
+         }(XX(UU.telemetry), UU.endMs)));
+         this.merged = XX(zU), this.hidden = zU.flatMap(((XU, zU) => function(UU, XU) {
+           const zU = [];
+           let cU = null;
+           for (const {
+               atMs: yU,
+ ... (232 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L116-L117` → after: `L981-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L981-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L981-L1026) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L116-L117)

```diff
-         getProjectionMatrix(MM, rM) {
-           return this.setShadowProjectionMatrix(this._projectionMatrix, MM ?? this._viewMatrix, rM ?? []), this._projectionMatrix
+         return FX.has(cU) ? kX(XU, zU) ? XU : null : "_csstext" === cU ? PX(XU, zU) : NX.test(XU) ? RX(XU, zU) : XU
+       }
+       if (Array.isArray(XU)) return XU.map((UU => WX("", UU, zU)));
+       if (null !== XU && "object" === typeof XU) {
+         const cU = "style" === UU.toLowerCase(),
+           yU = {};
+         for (const [UU, AU] of Object.entries(XU)) yU[UU] = WX(cU ? "" : UU, AU, zU);
+         const {
+           id: QU
+         } = yU;
+         if ("number" === typeof QU && zU.styleTextIds.has(QU))
+           for (const UU of ["textContent", "value"]) {
+             const XU = yU[UU];
+             "string" === typeof XU && (yU[UU] = PX(XU, zU))
+           }
+         return yU
+ ... (30 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L119-L165` → after: `L1028-L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1028-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1028-L1080) · [Before (L119-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L119-L165)

```diff
-       }, (() => {
-         const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(zM[Symbol.metadata] ?? null) : void 0;
-         rM = [(0, SM.J)()], iM = [(0, SM.J)()], nM = [(0, SM.L)()], QM = [(0, SM.L)()], (0, OM.i)(MM, null, rM, {
-           kind: "getter",
-           name: "position",
-           static: !1,
-           private: !1,
-           access: {
-             has: MM => "position" in MM,
-             get: MM => MM.position
-           },
-           metadata: jM
-         }, null, LM), (0, OM.i)(MM, null, iM, {
-           kind: "getter",
-           name: "direction",
-           static: !1,
- ... (31 more removed lines; see GitHub link above)
+         of zU) "number" === typeof AU && XU.has(AU) && yU.add(QU);
+       return yU
+     }
+     const LX = "brv-styles",
+       eX = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".b … [truncated]
+       CX = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv- … [truncated]
+     class wX {
+       static create(UU, XU, zU, cU, yU, QU, AU) {
+         return XU.some((UU => UU.type === rU.c.FullSnapshot)) ? new wX(UU, function(UU, XU) {
+           const zU = {
+             hosts: XU,
+             styleTextIds: dX(UU)
+           };
+           return UU.map((UU => UU.type === rU.c.Meta ? UU : {
+             ...UU,
+             data: WX("data", UU.data, zU)
+ ... (37 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L187-L188` → after: `L1083-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1083-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1083-L1084) · [Before (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L187-L188)

```diff
-       update(MM) {
-         this.updateMipLevel(MM, 0)
+       invalidateCanvasRect() {
+         this.lastCanvasRectMs = -1 / 0
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L190-L191` → after: `L1086-L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1086-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1086-L1087) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L190-L191)

```diff
-       updateMipLevel(MM, rM) {
-         this._getEngine().updateRawTexture(this._texture, MM, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, rM), this._waitingForData = !1
+       destroy() {
+         this.replayer.destroy()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L193-L196` → after: `L1089-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1089-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1089-L1090) · [Before (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L193-L196)

```diff
-       clone() {
-         if (!this._texture) return super.clone();
-         const MM = new SM(null, this.getSize().width, this.getSize().height, this.format, this.Hk(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
-         return MM._texture = this._texture, this._texture.incrementReferences(), MM
+       domOffsetAt(UU) {
+         return Math.max(0, Math.min(this.lastDomMs + 1, this.domClock.toDom(UU)) - this.firstDomMs)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L198-L199` → after: `L1092-L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1092-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1092-L1094) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L198-L199)

```diff
-       isReady() {
-         return super.isReady() && !this._waitingForData
+       checkDrift(UU) {
+         const XU = this.domOffsetAt(UU);
+         XU >= this.lastDomMs - this.firstDomMs || Math.abs(this.replayer.getCurrentTime() - XU) > 400 && this.replayer.play(XU)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L201-L202` → after: `L1096-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1096-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1096-L1106) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L201-L202)

```diff
-       static CreateLuminanceTexture(MM, rM, iM, OM) {
-         return new SM(MM, rM, iM, 1, OM, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
+       placeVideoOverCanvas() {
+         const UU = this.replayer.iframe.contentDocument,
+           XU = null === UU ? null : function(UU, XU) {
+             for (const zU of XU) {
+               const XU = UU.querySelector(zU);
+               if (null !== XU) return XU
+             }
+             return null
+           }(UU, this.canvasSelectors),
+           zU = this.videoLayer.element;
+         null !== XU ? (zU.previousSibling !== XU && XU.after(zU), zU.style.display = "", zU.style.left = `${XU.offsetLeft}px`, zU.style.top = `${XU.offsetTop}px`, zU.style.width = `${XU.offsetWidth}px`, zU.style.height = `${XU.offsetHeight}px`) : zU.style.display = "none"
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L204-L205` → after: `L1108-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1108-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1108-L1124) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L204-L205)

```diff
-       static CreateLuminanceAlphaTexture(MM, rM, iM, OM) {
-         return new SM(MM, rM, iM, 2, OM, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
+     }
+     const qX = {
+       width: 1280,
+       height: 720
+     };
+     class OX {
+       constructor(UU, XU) {
+         this.root = UU, this.onViewportChanged = XU, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", UU.appendChild(this.element), this.resizeObserver = new ResizeObserv … [truncated]
+           this.fit()
+         })), this.resizeObserver.observe(UU)
+       }
+       setViewport(UU) {
+         var XU;
+         null === UU || UU.width <= 0 || UU.height <= 0 || UU.width === (null === (XU = this.viewport) || void 0 === XU ? void 0 : XU.width) && UU.height === this.viewport.height || (this.viewport = UU, this.element.style.width = `${UU.width}px`, this.element.style.height = `${UU. … [truncated]
+       }
+       destroy() {
+ ... (1 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L207-L208` → after: `L1126-L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1126-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1126-L1133) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L207-L208)

```diff
-       static CreateAlphaTexture(MM, rM, iM, OM) {
-         return new SM(MM, rM, iM, 0, OM, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
+       fit() {
+         var UU;
+         const XU = null !== (UU = this.viewport) && void 0 !== UU ? UU : qX,
+           zU = this.root.getBoundingClientRect(),
+           cU = Math.min(zU.width / XU.width, zU.height / XU.height),
+           yU = (zU.width - XU.width * cU) / 2,
+           QU = (zU.height - XU.height * cU) / 2;
+         this.element.style.transform = `translate(${yU}px, ${QU}px) scale(${cU})`
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L210-L211` → after: `L1135-L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1135-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1135-L1140) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L210-L211)

```diff
-       static CreateRGBTexture(MM, rM, iM, OM) {
-         return new SM(MM, rM, iM, 4, OM, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
+     }
+     class SX {
+       constructor(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
+           zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bU;
+         this.urls = void 0, this.urls = new hU(UU, "video URLs", XU, zU)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L213-L214` → after: `L1142-L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1142-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1142-L1154) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L213-L214)

```diff
-       static CreateRGBATexture(MM, rM, iM, OM) {
-         return new SM(MM, rM, iM, 5, OM, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
+       reset(UU) {
+         this.urls.reset(UU.flatMap((UU => {
+           var XU;
+           return null !== (XU = function(UU) {
+             return "url" in UU ? null === UU.url ? null : {
+               sequence: UU.sequence,
+               url: UU.url
+             } : void 0 === UU.partUrls ? null : {
+               sequence: UU.sequence,
+               partUrls: UU.partUrls
+             }
+           }(UU)) && void 0 !== XU ? XU : []
+         })))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L216-L217` → after: `L1156-L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1156-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1156-L1157) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L216-L217)

```diff
-       static CreateRGBAStorageTexture(MM, rM, iM, OM) {
-         return new SM(MM, rM, iM, 5, OM, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
+       get(UU) {
+         return this.urls.get(UU)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L219-L223` → after: `L1159-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1159-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1159-L1162) · [Before (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L219-L223)

```diff
-       static CreateRTexture(MM, rM, iM, jM) {
-         let aM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           PM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           nM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : OM.h.TRILINEAR_SAMPLINGMODE;
-         return new SM(MM, rM, iM, 6, jM, aM, PM, nM, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
+       update(UU, XU, zU) {
+         this.urls.request(function(UU, XU, zU, cU) {
+           return UU.filter((UU => UU.endMs > XU && UU.startMs < XU + zU && cU(UU.sequence))).map((UU => UU.sequence))
+         }(UU, XU, 12e4 * Math.max(1, zU), (UU => this.urls.needs(UU))))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L225-L229` → after: `L1164-L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1164-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1164-L1165) · [Before (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L225-L229)

```diff
-       static CreateRStorageTexture(MM, rM, iM, jM) {
-         let aM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           PM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           nM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : OM.h.TRILINEAR_SAMPLINGMODE;
-         return new SM(MM, rM, iM, 6, jM, aM, PM, nM, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
+       destroy() {
+         this.urls.destroy()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L232-L261` → after: `L1168-L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1168-L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1168-L1210) · [Before (L232-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L232-L261)

```diff
-   },
-   44287: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => OM.e
-     });
-     var OM = iM(41529);
-     (0, OM.g)()
-   },
-   44235: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => OM.c
-     });
-     var OM = iM(41546);
-     (0, OM.e)()
-   },
-   41546: (MM, rM, iM) => {
- ... (14 more removed lines; see GitHub link above)
+     async function rX(UU, XU, zU) {
+       const cU = [];
+       let yU = UU.length,
+         QU = 0;
+       return await Promise.all(Array.from({
+         length: Math.min(3, UU.length)
+       }, (() => (async () => {
+         for (; QU < yU;) {
+           const FU = QU++;
+           try {
+             cU[FU] = await XU(UU[FU], zU)
+           } catch (AU) {
+             if (zU.aborted) throw AU;
+             console.warn(`Replay video part ${FU} failed to load; playing the parts before it.`, AU), yU = Math.min(yU, FU)
+           }
+         }
+ ... (27 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L263-L277` → after: `L1212-L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1212-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1212-L1279) · [Before (L263-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L263-L277)

```diff
-       constructor(MM) {
-         let rM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           OM = arguments.length > 5 ? arguments[5] : void 0,
-           SM = arguments.length > 6 ? arguments[6] : void 0,
-           PM = arguments.length > 7 ? arguments[7] : void 0;
-         super(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, rM, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = OM, this.useVertexAlpha = SM, this.color = new  … [truncated]
-         const nM = {
-           attributes: [aM.j.PositionKind],
-           uniforms: ["world", "viewProjection"],
-           needAlphaBlending: !0,
-           defines: [],
-           useClipPlane: null,
-           shaderLanguage: 0
-         };
-         if (this.useVertexAlpha ? nM.defines.push("#define VERTEXALPHA") : nM.needAlphaBlending = !1, this.useVertexColor ? (nM.defines.push("#define VERTEXCOLOR"), nM.attributes.push(aM.j.ColorKind)) : (nM.uniforms.push("color"), this._color4 = new jM.h), PM) this.material = PM;
+       return FU && DU > 0 ? DU : null
+     }
+     async function fX(UU, XU) {
+       const zU = await fetch(UU, {
+         signal: XU
+       });
+       if (!zU.ok) throw new Error(`HTTP ${zU.status}`);
+       return zU.arrayBuffer()
+     }
+     class iX {
+       constructor() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fX,
+           XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
+         this.fetchPart = UU, this.xY = XU, this.blobs = new Map
+       }
+       get(UU, XU) {
+ ... (52 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L279-L283` → after: `L1281-L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1281-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1281-L1282) · [Before (L279-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L279-L283)

```diff
-           this.Hk().ph().isWebGPU && !mM.ForceGLSL && (this._shaderLanguage = 1), nM.shaderLanguage = this._shaderLanguage, nM.extraInitializationsAsync = async () => {
-             1 === this._shaderLanguage ? await Promise.all([iM.e(653).then((() => iM(45235))), iM.e(659).then((() => iM(45238)))]) : await Promise.all([iM.e(635).then((() => iM(45242))), iM.e(641).then((() => iM(45246)))])
-           };
-           const MM = new zM.n("colorShader", this.Hk(), "color", nM, !1);
-           MM.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(MM)
+           if (!(XU >= QU.endMs)) return QU;
+           zU = yU + 1
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L286-L287` → after: `L1285-L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1285-L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1285-L1309) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L286-L287)

```diff
-       getClassName() {
-         return "LinesMesh"
+       return null
+     }
+ 
+     function VX(UU, XU) {
+       return (XU - UU.startMs) / 1e3
+     }
+ 
+     function sX(UU) {
+       return Math.max(.4, .1 * UU)
+     }
+ 
+     function nX(UU) {
+       return Math.max(.0625, Math.min(16, UU))
+     }
+     class mX {
+       constructor(UU, XU, zU, cU, yU, QU, AU) {
+ ... (9 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L289-L290` → after: `L1311-L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1311-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1311-L1312) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L289-L290)

```diff
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
+       get visible() {
+         return null !== this.shown || this.stillShown
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L292-L296` → after: `L1314-L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1314-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1314-L1320) · [Before (L292-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L292-L296)

```diff
-       set material(MM) {
-         const rM = this.material;
-         if (rM === MM) return;
-         const iM = rM && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(MM), iM && rM?.dispose()
+       getVideoSizeAt(UU) {
+         var XU, zU;
+         const cU = null !== (XU = null !== (zU = vX(this.segments, UU)) && void 0 !== zU ? zU : this.segments.find((XU => XU.startMs > UU))) && void 0 !== XU ? XU : this.segments.at(-1);
+         return void 0 === cU ? null : {
+           width: cU.width,
+           height: cU.height
+         }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L298-L299` → after: `L1322-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1322-L1324) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L298-L299)

```diff
-       _setInternalMaterial(MM) {
-         this._setMaterial(MM), this.material && (this.material.fillMode = QM.c.LineListDrawMode, this.material.disableLighting = !0)
+       failedAt(UU) {
+         const XU = vX(this.segments, UU);
+         return null !== XU && this.failed.has(XU.sequence)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L301-L302` → after: `L1326-L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1326-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1326-L1328) · [Before (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L301-L302)

```diff
-       get checkCollisions() {
-         return !1
+       replaceSegments(UU, XU) {
+         for (const zU of this.slots.values()) this.release(zU);
+         this.slots.clear(), this.failed.clear(), this.segments = MX(UU), this.segmentUrls.reset(this.segments), this.still = XU
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L304-L314` → after: `L1330-L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1330-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1330-L1349) · [Before (L304-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L304-L314)

```diff
-       set checkCollisions(MM) {}
-       _bind(MM, rM) {
-         if (!this._geometry) return this;
-         const iM = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
-         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(rM, iM) : this._geometry._bind(rM, iM, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
-           const {
-             r: MM,
-             g: rM,
-             b: iM
-           } = this.color;
-           this._color4.set(MM, rM, iM, this.alpha), this.material.setColor4("color", this._color4)
+       update(UU) {
+         var XU, zU;
+         this.segmentUrls.update(this.segments, UU, this.clock.speed);
+         const cU = vX(this.segments, UU),
+           yU = function(UU, XU) {
+             const zU = UU.find((UU => UU.startMs > XU));
+             return void 0 === zU ? null : zU.startMs - XU <= ("parts" in zU ? 15e3 : 8e3) ? zU : null
+           }(this.segments, UU);
+         this.evictExcept([cU, yU, null !== (XU = null === (zU = this.shown) || void 0 === zU ? void 0 : zU.segment) && void 0 !== XU ? XU : null]), null !== yU && this.getSlot(yU), this.showStill(null === cU ? function(UU, XU, zU) {
+           if (null === XU) return null;
+           const cU = UU.at(-1);
+           return void 0 === cU ? zU >= XU.atMs - 1e4 ? XU : null : zU >= cU.endMs && Math.abs(XU.atMs - cU.endMs) <= 1e4 ? XU : null
+         }(this.segments, this.still, UU) : null);
+         const QU = null === cU ? null : this.getSlot(cU);
+         if (null !== QU) {
+           this.sync(QU, VX(QU.segment, UU)), QU.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !QU.video.seeking && this.show(QU);
+ ... (4 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L323-L332` → after: `L1352-L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1352-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1352-L1365) · [Before (L323-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L323-L332)

```diff
-       dispose(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || rM) && this.material?.dispose(!1, !1, !0), super.dispose(MM)
-       }
-       clone(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           iM = arguments.length > 2 ? arguments[2] : void 0;
-         if (rM && void 0 === rM._addToSceneRootNodes) {
-           const iM = rM;
-           return iM.source = this, new mM(MM, this.Hk(), iM.parent, iM.source, iM.doNotCloneChildren)
+       getSyncStats() {
+         const {
+           frames: UU,
+           sumAbsDriftMs: XU,
+           maxAbsDriftMs: zU,
+           withinOneFrame: cU,
+           seeks: yU
+         } = this.stats;
+         return {
+           frames: UU,
+           meanAbsDriftMs: 0 === UU ? 0 : XU / UU,
+           maxAbsDriftMs: zU,
+           withinOneFrame: 0 === UU ? 1 : cU / UU,
+           seeks: yU
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L336-L340` → after: `L1368-L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1368-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1368-L1374) · [Before (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L336-L340)

```diff
-       createInstance(MM) {
-         const rM = new HM(MM, this);
-         if (this.xZ) {
-           rM.xZ = {};
-           for (const MM in this.xZ) rM.xZ[MM] = this.xZ[MM]
+       resetSyncStats() {
+         this.stats = {
+           frames: 0,
+           sumAbsDriftMs: 0,
+           maxAbsDriftMs: 0,
+           withinOneFrame: 0,
+           seeks: 0
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L344-L345` → after: `L1377-L1382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1377-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1377-L1382) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L344-L345)

```diff
-       serialize(MM) {
-         super.serialize(MM), MM.color = this.color.HOM(), MM.alpha = this.alpha
+       noteClockJump() {
+         this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null
+       }
+       destroy() {
+         for (const UU of this.slots.values()) this.release(UU);
+         this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L347-L349` → after: `L1384-L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1384-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1384-L1516) · [Before (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L347-L349)

```diff
-       static Parse(MM, rM) {
-         const iM = new mM(MM.name, rM);
-         return iM.color = jM.d.FromArray(MM.color), iM.alpha = MM.alpha, iM
+       sync(UU, XU) {
+         const {
+           video: zU
+         } = UU;
+         if (zU.seeking) return;
+         const {
+           playing: cU,
+           speed: yU
+         } = this.clock, QU = cU && yU < 16, AU = function(UU) {
+           let {
+             targetS: XU,
+             currentS: zU,
+             playing: cU,
+             speed: yU,
+             frameDurationS: QU
+           } = UU;
+ ... (117 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L352-L353` → after: `L1519-L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1519-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1519-L1521) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L352-L353)

```diff
-     mM.ForceGLSL = !1;
-     class HM extends nM.e {
+     const lX = 1 / 30,
+       xX = ["#noa-canvas", "#noa-container"];
+     class JX {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L355` → after: `L1523-L1591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1523-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1523-L1591) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L355)

```diff
-         super(MM, rM), this.intersectionThreshold = rM.intersectionThreshold
+         var zU, cU, yU, QU, AU, FU, oU, DU;
+         let EU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0,  … [truncated]
+           this.frame = requestAnimationFrame(this.LY);
+           const UU = performance.now();
+           this.applySkips();
+           const XU = this.clock.timeMs();
+           this.annotations.update(XU, this.clock.speed), this.videoLayer.update(XU), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(XU)) : this.domLayer.update(XU, this.clock.playing, UU);
+           const zU = this.getState();
+           (null === this.lastState || function(UU, XU) {
+             return Object.keys(UU).some((zU => "positionMs" === zU ? Math.floor(UU.positionMs / 1e3) !== Math.floor(XU.positionMs / 1e3) : UU[zU] !== XU[zU]))
+           }(zU, this.lastState)) && this.emitState(zU)
+         };
+         const YU = () => performance.now();
+         this.lowFps = null !== (zU = EU.lowFps) && void 0 !== zU ? zU : 25;
+         const NU = new VU(XU.domEvents);
+ ... (53 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L357-L358` → after: `L1593-L1594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1593-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1593-L1594) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L357-L358)

```diff
-       getClassName() {
-         return "InstancedLinesMesh"
+       getSyncStats() {
+         return this.videoLayer.getSyncStats()
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L361` → after: `L1675-L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1675-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1675-L1684) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L361)

```diff
-     let hM = !1;
+     const TX = [{
+       action: "primary",
+       className: "brv-mouse-left"
+     }, {
+       action: "middle",
+       className: "brv-mouse-middle"
+     }, {
+       action: "secondary",
+       className: "brv-mouse-right"
+     }];
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L363-L365` → after: `L1686-L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R1686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L1686-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/288.js#L1686-L2468) · [Before (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/288.js#L363-L365)

```diff
-     function JM() {
-       hM || (hM = !0, PM.d._LinesMeshParser = (MM, rM) => mM.Parse(MM, rM))
-     }(OM = mM.prototype).enableEdgesRendering ?? (OM.enableEdgesRendering = (0, LM.j)("LinesMesh", "enableEdgesRendering")), (SM = HM.prototype).enableEdgesRendering ?? (SM.enableEdgesRendering = (0, LM.j)("InstancedLinesMesh", "enableEdgesRendering"))
+     function hX(UU) {
+       const [XU, zU] = (0, cU.useState)({
+         bits: 0,
+         presses: []
+       });
+       return (0, cU.useEffect)((() => {
+         let XU = 0,
+           cU = "";
+         const yU = () => {
+           XU = requestAnimationFrame(yU);
+           const QU = UU.timeline.toTime(UU.getPositionMs()),
+             {
+               actions: AU,
+               keys: FU
+             } = UU.input,
+             NU = function(UU, XU) {
+ ... (767 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/289.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/289.js` (68 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L4)

```diff
-   41556: (MM, rM, iM) => {
+   41571: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L6` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L6)

```diff
-       d: () => eM,
+       c: () => eA,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L8-L11` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L8-L11)

```diff
-       g: () => EM,
-       j: () => UM,
-       m: () => lM,
-       n: () => yM
+       g: () => Fo
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L13-L25` → after: `L11-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L11-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L11-L25) · [Before (L13-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L13-L25)

```diff
-     var OM = iM(41121),
-       SM = iM(41196),
-       jM = iM(38040),
-       aM = iM(41250),
-       PM = iM(41560),
-       nM = iM(41447),
-       QM = iM(41148),
-       zM = iM(41442),
-       LM = iM(38064),
-       mM = iM(41433),
-       HM = iM(41426),
-       hM = iM(41469),
-       JM = iM(38085);
+     var cU, yU = Object.defineProperty,
+       QU = (UU, XU, zU) => ((UU, XU, zU) => XU in UU ? yU(UU, XU, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: zU
+       }) : UU[XU] = zU)(UU, "symbol" !== typeof XU ? XU + "" : XU, zU),
+       AU = Object.defineProperty,
+       FU = (UU, XU, zU) => ((UU, XU, zU) => XU in UU ? AU(UU, XU, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: zU
+       }) : UU[XU] = zU)(UU, "symbol" !== typeof XU ? XU + "" : XU, zU),
+       oU = (UU => (UU[UU.Document = 0] = "Document", UU[UU.DocumentType = 1] = "DocumentType", UU[UU.Element = 2] = "Element", UU[UU.Text = 3] = "Text", UU[UU.CDATA = 4] = "CDATA", UU[UU.Comment = 5] = "Comment", UU))(oU || {});
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L27-L28` → after: `L27-L8393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L27-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L27-L8393) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L27-L28)

```diff
-       effect: null,
-       subMesh: null
+         Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
+         ShadowRoot: ["host", "styleSheets"],
+         Element: ["shadowRoot", "querySelector", "querySelectorAll"],
+         MutationObserver: []
+       },
+       EU = {
+         Node: ["contains", "getRootNode"],
+         ShadowRoot: ["getSelection"],
+         Element: [],
+         MutationObserver: ["constructor"]
+       },
+       YU = {},
+       NU = {};
+ 
+     function IU(UU) {
+       if (YU[UU]) return YU[UU];
+ ... (8351 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L30-L45` → after: `L8395-L9244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR8395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L8395-L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L8395-L9244) · [Before (L30-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L30-L45)

```diff
-     class yM extends zM.c {
-       constructor(MM, rM, iM) {
-         let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-         super(MM, rM, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this. … [truncated]
-           needAlphaBlending: !1,
-           needAlphaTesting: !1,
-           attributes: ["position", "normal", "uv"],
-           uniforms: ["worldViewProjection"],
-           uniformBuffers: [],
-           samplers: [],
-           externalTextures: [],
-           samplerObjects: [],
-           storageBuffers: [],
-           defines: [],
-           useClipPlane: !1,
-           ...OM
+ 
+     function YF(UU, XU, zU) {
+       if (UU instanceof Array) return UU.map((UU => YF(UU, XU, zU)));
+       if (null === UU) return UU;
+       if (UU instanceof Float32Array || UU instanceof Float64Array || UU instanceof Int32Array || UU instanceof Uint32Array || UU instanceof Uint8Array || UU instanceof Uint16Array || UU instanceof Int16Array || UU instanceof Int8Array || UU instanceof Uint8ClampedArray) {
+         return {
+           rr_type: UU.constructor.name,
+           args: [Object.values(UU)]
+         }
+       }
+       if (UU instanceof ArrayBuffer) {
+         return {
+           rr_type: UU.constructor.name,
+           base64: function(UU) {
+             var XU, zU = new Uint8Array(UU),
+               cU = zU.length,
+ ... (834 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L48-L49` → after: `L9284-L9288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9284-L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9284-L9288) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L48-L49)

```diff
-       get shaderPath() {
-         return this._shaderPath
+ 
+       function YU(UU) {
+         const XU = DU(UU, "Y") && EU(UU, "Y"),
+           zU = DU(UU, "X") && EU(UU, "X");
+         return XU || zU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L51-L52` → after: `L9290-L9294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9290-L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9290-L9294) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L51-L52)

```diff
-       set shaderPath(MM) {
-         this._shaderPath = MM
+ 
+       function NU(XU) {
+         let zU, cU, QU, AU = (yU() - XU.startTime) / 468;
+         var FU;
+         AU = AU > 1 ? 1 : AU, FU = AU, zU = .5 * (1 - Math.cos(Math.PI * FU)), cU = XU.startX + (XU.x - XU.startX) * zU, QU = XU.startY + (XU.y - XU.startY) * zU, XU.method.call(XU.scrollable, cU, QU), cU === XU.x && QU === XU.y || UU.requestAnimationFrame(NU.bind(UU, XU))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L54-L55` → after: `L9296-L9308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9296-L9308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9296-L9308) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L54-L55)

```diff
-       get options() {
-         return this._options
+ 
+       function IU(zU, QU, AU) {
+         let oU, DU, EU, YU;
+         const IU = yU();
+         zU === XU.body ? (oU = UU, DU = UU.scrollX || UU.pageXOffset, EU = UU.scrollY || UU.pageYOffset, YU = cU.scroll) : (oU = zU, DU = zU.scrollLeft, EU = zU.scrollTop, YU = FU), NU({
+           scrollable: oU,
+           method: YU,
+           startTime: IU,
+           startX: DU,
+           startY: EU,
+           x: QU,
+           y: AU
+         })
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L57-L58` → after: `L9310-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9310-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9310-L9345) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L57-L58)

```diff
-       get isMultiview() {
-         return this._multiview
+       UU.scroll = UU.scrollTo = function() {
+         void 0 !== arguments[0] && (!0 !== oU(arguments[0]) ? IU.call(UU, XU.body, void 0 !== arguments[0].left ? ~~arguments[0].left : UU.scrollX || UU.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : UU.scrollY || UU.pageYOffset) : cU.scroll.call(UU, void 0 !== a … [truncated]
+       }, UU.scrollBy = function() {
+         void 0 !== arguments[0] && (oU(arguments[0]) ? cU.scrollBy.call(UU, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : IU.ca … [truncated]
+       }, zU.prototype.scroll = zU.prototype.scrollTo = function() {
+         if (void 0 === arguments[0]) return;
+         if (!0 === oU(arguments[0])) {
+           if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
+           return void cU.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop … [truncated]
+         }
+         const UU = arguments[0].left,
+           XU = arguments[0].top;
+         IU.call(this, this, "undefined" === typeof UU ? this.scrollLeft : ~~UU, "undefined" === typeof XU ? this.scrollTop : ~~XU)
+       }, zU.prototype.scrollBy = function() {
+         void 0 !== arguments[0] && (!0 !== oU(arguments[0]) ? this.scroll({
+           left: ~~arguments[0].left + this.scrollLeft,
+ ... (20 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L60-L61` → after: `L9347-L9367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9347-L9367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9347-L9367) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L60-L61)

```diff
-       getClassName() {
-         return "ShaderMaterial"
+     }
+     eF.addCustomEvent = (UU, XU) => {
+       if (!dF) throw new Error("please add custom event after start recording");
+       RF({
+         type: eA.Custom,
+         data: {
+           tag: UU,
+           payload: XU
+         }
+       })
+     }, eF.freezePage = () => {
+       nA.forEach((UU => UU.freeze()))
+     }, eF.takeFullSnapshot = UU => {
+       if (!dF) throw new Error("please take full snapshot after start recording");
+       PF(UU)
+     }, eF.mirror = LF;
+ ... (5 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L63-L64` → after: `L9369-L9376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9369-L9376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9369-L9376) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L63-L64)

```diff
-       needAlphaBlending() {
-         return this.alpha < 1 || this._options.needAlphaBlending
+       addAction(UU) {
+         const XU = !0 === this.raf;
+         if (!this.actions.length || this.actions[this.actions.length - 1].delay <= UU.delay) this.actions.push(UU);
+         else {
+           const XU = this.findActionIndex(UU);
+           this.actions.splice(XU, 0, UU)
+         }
+         XU && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L66-L67` → after: `L9378-L9379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9378-L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9378-L9379) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L66-L67)

```diff
-       needAlphaTesting() {
-         return this._options.needAlphaTesting
+       start() {
+         this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L69-L70` → after: `L9381-L9382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9381-L9382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9381-L9382) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L69-L70)

```diff
-       _checkUniform(MM) {
-         -1 === this._options.uniforms.indexOf(MM) && this._options.uniforms.push(MM)
+       updateLiveTime() {
+         !0 === this.raf && this.rafCheck()
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L72-L73` → after: `L9384-L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9384-L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9384-L9391) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L72-L73)

```diff
-       setTexture(MM, rM) {
-         return -1 === this._options.samplers.indexOf(MM) && this._options.samplers.push(MM), this._textures[MM] = rM, this
+       rafCheck() {
+         const UU = performance.now();
+         for (this.timeOffset += (UU - this.lastTimestamp) * this.speed, this.lastTimestamp = UU; this.actions.length;) {
+           const UU = this.actions[0];
+           if (!(this.timeOffset >= UU.delay)) break;
+           this.actions.shift(), UU.doAction()
+         }
+         this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L75-L76` → after: `L9393-L9394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9393-L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9393-L9394) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L75-L76)

```diff
-       setInternalTexture(MM, rM) {
-         return -1 === this._options.samplers.indexOf(MM) && this._options.samplers.push(MM), this._internalTextures[MM] = rM, this
+       clear() {
+         this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L78-L79` → after: `L9396-L9397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9396-L9397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9396-L9397) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L78-L79)

```diff
-       removeTexture(MM) {
-         delete this._textures[MM]
+       setSpeed(UU) {
+         this.speed = UU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L81-L82` → after: `L9399-L9400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9399-L9400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9399-L9400) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L81-L82)

```diff
-       setTextureArray(MM, rM) {
-         return -1 === this._options.samplers.indexOf(MM) && this._options.samplers.push(MM), this._checkUniform(MM), this._textureArrays[MM] = rM, this
+       isActive() {
+         return null !== this.raf
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L84-L85` → after: `L9402-L9413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9402-L9413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9402-L9413) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L84-L85)

```diff
-       setExternalTexture(MM, rM) {
-         return -1 === this._options.externalTextures.indexOf(MM) && this._options.externalTextures.push(MM), this._externalTextures[MM] = rM, this
+       findActionIndex(UU) {
+         let XU = 0,
+           zU = this.actions.length - 1;
+         for (; XU <= zU;) {
+           const cU = Math.floor((XU + zU) / 2);
+           if (this.actions[cU].delay < UU.delay) XU = cU + 1;
+           else {
+             if (!(this.actions[cU].delay > UU.delay)) return cU + 1;
+             zU = cU - 1
+           }
+         }
+         return XU
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L87-L88` → after: `L9415-L9421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9415-L9421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9415-L9421) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L87-L88)

```diff
-       setFloat(MM, rM) {
-         return this._checkUniform(MM), this._floats[MM] = rM, this
+     }
+ 
+     function qF(UU, XU) {
+       if (UU.type === eA.IncrementalSnapshot && UU.data.source === CA.MouseMove && UU.data.positions && UU.data.positions.length) {
+         const zU = UU.data.positions[0].timeOffset,
+           cU = UU.timestamp + zU;
+         return UU.delay = cU - XU, cU - XU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L90-L91` → after: `L9423-L9443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9423-L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9423-L9443) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L90-L91)

```diff
-       setInt(MM, rM) {
-         return this._checkUniform(MM), this._ints[MM] = rM, this
+       return UU.delay = UU.timestamp - XU, UU.delay
+     }
+ 
+     function OF(UU, XU) {
+       var zU = "function" == typeof Symbol && UU[Symbol.iterator];
+       if (!zU) return UU;
+       var cU, yU, QU = zU.call(UU),
+         AU = [];
+       try {
+         for (;
+           (void 0 === XU || XU-- > 0) && !(cU = QU.next()).done;) AU.push(cU.value)
+       } catch (FU) {
+         yU = {
+           error: FU
+         }
+       } finally {
+ ... (5 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L93-L94` → after: `L9445-L9460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9445-L9460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9445-L9460) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L93-L94)

```diff
-       setUInt(MM, rM) {
-         return this._checkUniform(MM), this._uints[MM] = rM, this
+       return AU
+     }
+     var SF, rF;
+     (rF = SF || (SF = {}))[rF.NotStarted = 0] = "NotStarted", rF[rF.Running = 1] = "Running", rF[rF.Stopped = 2] = "Stopped";
+     var uF = {
+       type: "xstate.init"
+     };
+ 
+     function fF(UU) {
+       return void 0 === UU ? [] : [].concat(UU)
+     }
+ 
+     function iF(UU) {
+       return {
+         type: "xstate.assign",
+         assignment: UU
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L96-L97` → after: `L9462-L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9462-L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9462-L9475) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L96-L97)

```diff
-       setFloats(MM, rM) {
-         return this._checkUniform(MM), this._floatsArrays[MM] = rM, this
+     }
+ 
+     function HF(UU, XU) {
+       return "string" == typeof(UU = "string" == typeof UU && XU && XU[UU] ? XU[UU] : UU) ? {
+         type: UU
+       } : "function" == typeof UU ? {
+         type: UU.name,
+         exec: UU
+       } : UU
+     }
+ 
+     function MF(UU) {
+       return function(XU) {
+         return UU === XU
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L99-L100` → after: `L9477-L9491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9477-L9491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9477-L9491) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L99-L100)

```diff
-       setColor3(MM, rM) {
-         return this._checkUniform(MM), this._colors3[MM] = rM, this
+     }
+ 
+     function vF(UU) {
+       return "string" == typeof UU ? {
+         type: UU
+       } : UU
+     }
+ 
+     function VF(UU, XU) {
+       return {
+         value: UU,
+         context: XU,
+         actions: [],
+         changed: !1,
+         matches: MF(UU)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L102-L103` → after: `L9493-L9871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9493-L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9493-L9871) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L102-L103)

```diff
-       setColor3Array(MM, rM) {
-         return this._checkUniform(MM), this._colors3Arrays[MM] = rM.reduce(((MM, rM) => (MM.push(rM.r, rM.g, rM.b), MM)), []), this
+     }
+ 
+     function sF(UU, XU, zU) {
+       var cU = XU,
+         yU = !1;
+       return [UU.filter((function(UU) {
+         if ("xstate.assign" === UU.type) {
+           yU = !0;
+           var XU = Object.assign({}, cU);
+           return "function" == typeof UU.assignment ? XU = UU.assignment(cU, zU) : Object.keys(UU.assignment).forEach((function(yU) {
+             XU[yU] = "function" == typeof UU.assignment[yU] ? UU.assignment[yU](cU, zU) : UU.assignment[yU]
+           })), cU = XU, !1
+         }
+         return !0
+       })), cU, yU]
+     }
+ ... (363 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L105-L106` → after: `L9873-L9905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9873-L9905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9873-L9905) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L105-L106)

```diff
-       setColor4(MM, rM) {
-         return this._checkUniform(MM), this._colors4[MM] = rM, this
+     }
+     const bF = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
+     async function TF(UU) {
+       let {
+         mutation: XU,
+         target: zU,
+         type: cU,
+         imageMap: yU,
+         errorHandler: QU
+       } = UU;
+       try {
+         const UU = function(UU, XU) {
+           try {
+             return XU === OA.WebGL ? UU.getContext("webgl") || UU.getContext("experimental-webgl") : UU.getContext("webgl2")
+           } catch (zU) {
+             return null
+ ... (17 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L108-L109` → after: `L9907-L9962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9907-L9962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9907-L9962) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L108-L109)

```diff
-       setColor4Array(MM, rM) {
-         return this._checkUniform(MM), this._colors4Arrays[MM] = rM.reduce(((MM, rM) => (MM.push(rM.r, rM.g, rM.b, rM.a), MM)), []), this
+     }
+     async function hF(UU) {
+       let {
+         event: XU,
+         mutation: zU,
+         target: cU,
+         imageMap: yU,
+         canvasEventMap: QU,
+         errorHandler: AU
+       } = UU;
+       try {
+         const UU = QU.get(XU) || zU,
+           FU = "commands" in UU ? UU.commands : [UU];
+         if ([OA.WebGL, OA.WebGL2].includes(zU.type)) {
+           for (let UU = 0; UU < FU.length; UU++) {
+             const XU = FU[UU];
+ ... (40 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L111-L112` → after: `L9964-L9969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9964-L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9964-L9969) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L111-L112)

```diff
-       setVector2(MM, rM) {
-         return this._checkUniform(MM), this._vectors2[MM] = rM, this
+     }
+     class Uo {
+       constructor(UU) {
+         QU(this, "mediaMap", new Map), QU(this, "warn"), QU(this, "service"), QU(this, "speedService"), QU(this, "emitter"), QU(this, "getCurrentTime"), QU(this, "metadataCallbackMap", new Map), this.warn = UU.warn, this.service = UU.service, this.speedService = UU.speedService,  … [truncated]
+           this.syncAllMediaElements()
+         }))
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L114-L115` → after: `L9971-L9977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9971-L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9971-L9977) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L114-L115)

```diff
-       setVector3(MM, rM) {
-         return this._checkUniform(MM), this._vectors3[MM] = rM, this
+       syncAllMediaElements() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
+           pause: !1
+         };
+         this.mediaMap.forEach(((XU, zU) => {
+           this.syncTargetWithState(zU), UU.pause && zU.pause()
+         }))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L117-L118` → after: `L9979-L9980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9979-L9980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9979-L9980) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L117-L118)

```diff
-       setVector4(MM, rM) {
-         return this._checkUniform(MM), this._vectors4[MM] = rM, this
+       start() {
+         this.syncAllMediaElements()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L120-L121` → after: `L9982-L9985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9982-L9985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9982-L9985) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L120-L121)

```diff
-       setQuaternion(MM, rM) {
-         return this._checkUniform(MM), this._quaternions[MM] = rM, this
+       pause() {
+         this.syncAllMediaElements({
+           pause: !0
+         })
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L123-L124` → after: `L9987-L9999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L9987-L9999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L9987-L9999) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L123-L124)

```diff
-       setQuaternionArray(MM, rM) {
-         return this._checkUniform(MM), this._quaternionsArrays[MM] = rM.reduce(((MM, rM) => (rM.toArray(MM, MM.length), MM)), []), this
+       seekTo(UU) {
+         let {
+           time: XU,
+           target: zU,
+           mediaState: cU
+         } = UU;
+         if (cU.isPlaying) {
+           const UU = (XU - cU.lastInteractionTimeOffset) / 1e3 * cU.playbackRate,
+             yU = "duration" in zU && zU.duration;
+           if (Number.isNaN(yU)) return void this.waitForMetadata(zU);
+           let QU = cU.currentTimeAtLastInteraction + UU;
+           zU.loop && !1 !== yU && (QU %= yU), zU.currentTime = QU
+         } else zU.pause(), zU.currentTime = cU.currentTimeAtLastInteraction
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L126-L127` → after: `L10001-L10015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10001-L10015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10001-L10015) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L126-L127)

```diff
-       setMatrix(MM, rM) {
-         return this._checkUniform(MM), this._matrices[MM] = rM, this
+       waitForMetadata(UU) {
+         if (this.metadataCallbackMap.has(UU)) return;
+         if (!("addEventListener" in UU)) return;
+         const XU = () => {
+           this.metadataCallbackMap.delete(UU);
+           const XU = this.mediaMap.get(UU);
+           XU && this.seekTo({
+             time: this.getCurrentTime(),
+             target: UU,
+             mediaState: XU
+           })
+         };
+         this.metadataCallbackMap.set(UU, XU), UU.addEventListener("loadedmetadata", XU, {
+           once: !0
+         })
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L129-L133` → after: `L10017-L10039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10017-L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10017-L10039) · [Before (L129-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L129-L133)

```diff
-       setMatrices(MM, rM) {
-         this._checkUniform(MM);
-         const iM = new Float32Array(16 * rM.length);
-         for (let OM = 0; OM < rM.length; OM++) {
-           rM[OM].copyToArray(iM, 16 * OM)
+       getMediaStateFromMutation(UU) {
+         let {
+           target: XU,
+           timeOffset: zU,
+           mutation: cU
+         } = UU;
+         const yU = this.mediaMap.get(XU),
+           {
+             type: QU,
+             playbackRate: AU,
+             currentTime: FU,
+             muted: oU,
+             volume: DU,
+             loop: EU
+           } = cU;
+         return {
+ ... (7 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L137-L138` → after: `L10042-L10059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10042-L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10042-L10059) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L137-L138)

```diff
-       setMatrix3x3(MM, rM) {
-         return this._checkUniform(MM), this._matrices3x3[MM] = rM, this
+       syncTargetWithState(UU) {
+         const XU = this.mediaMap.get(UU);
+         if (!XU) return;
+         const {
+           muted: zU,
+           loop: cU,
+           volume: yU,
+           isPlaying: QU
+         } = XU, AU = this.service.state.matches("paused"), FU = XU.playbackRate * this.speedService.state.context.timer.speed;
+         try {
+           this.seekTo({
+             time: this.getCurrentTime(),
+             target: UU,
+             mediaState: XU
+           }), UU.volume !== yU && (UU.volume = yU), UU.muted = zU, UU.loop = cU, UU.playbackRate !== FU && (UU.playbackRate = FU), QU && !AU ? UU.play() : UU.pause()
+         } catch (oU) {
+ ... (2 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L140-L141` → after: `L10061-L10087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10061-L10087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10061-L10087) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L140-L141)

```diff
-       setMatrix2x2(MM, rM) {
-         return this._checkUniform(MM), this._matrices2x2[MM] = rM, this
+       addMediaElements(UU, XU, zU) {
+         if (!["AUDIO", "VIDEO"].includes(UU.nodeName)) return;
+         const cU = UU,
+           yU = zU.getMeta(cU);
+         if (!yU || !("attributes" in yU)) return;
+         const QU = this.service.state.matches("paused"),
+           AU = yU.attributes;
+         let FU = !1;
+         FU = AU.rr_mediaState ? "played" === AU.rr_mediaState : null !== cU.getAttribute("autoplay"), FU && QU && cU.pause();
+         let oU = 1;
+         "number" === typeof AU.rr_mediaPlaybackRate && (oU = AU.rr_mediaPlaybackRate);
+         let DU = !1;
+         DU = "boolean" === typeof AU.rr_mediaMuted ? AU.rr_mediaMuted : null !== cU.getAttribute("muted");
+         let EU = !1;
+         EU = "boolean" === typeof AU.rr_mediaLoop ? AU.rr_mediaLoop : null !== cU.getAttribute("loop");
+         let YU = 1;
+ ... (11 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L143-L144` → after: `L10089-L10099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10089-L10099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10089-L10099) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L143-L144)

```diff
-       setArray2(MM, rM) {
-         return this._checkUniform(MM), this._vectors2Arrays[MM] = rM, this
+       mediaMutation(UU) {
+         let {
+           target: XU,
+           timeOffset: zU,
+           mutation: cU
+         } = UU;
+         this.mediaMap.set(XU, this.getMediaStateFromMutation({
+           target: XU,
+           timeOffset: zU,
+           mutation: cU
+         })), this.syncTargetWithState(XU)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L146-L147` → after: `L10101-L10102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10101-L10102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10101-L10102) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L146-L147)

```diff
-       setArray3(MM, rM) {
-         return this._checkUniform(MM), this._vectors3Arrays[MM] = rM, this
+       isSupportedMediaElement(UU) {
+         return ["AUDIO", "VIDEO"].includes(UU.nodeName)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L149-L150` → after: `L10104-L10105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10104-L10105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10104-L10105) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L149-L150)

```diff
-       setArray4(MM, rM) {
-         return this._checkUniform(MM), this._vectors4Arrays[MM] = rM, this
+       reset() {
+         this.mediaMap.clear()
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L152-L153` → after: `L10107-L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10107-L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10107-L10410) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L152-L153)

```diff
-       setUniformBuffer(MM, rM) {
-         return -1 === this._options.uniformBuffers.indexOf(MM) && this._options.uniformBuffers.push(MM), this._uniformBuffers[MM] = rM, this
+     }
+ 
+     function Xo(UU, XU) {
+       if ("DIALOG" !== UU.nodeName || UU instanceof UQ) return;
+       const zU = UU,
+         cU = zU.open,
+         yU = cU && zU.matches("dialog:modal"),
+         QU = zU.getAttribute("rr_open_mode"),
+         AU = "string" === typeof(null == XU ? void 0 : XU.attributes.open) || "string" === typeof zU.getAttribute("open"),
+         FU = "modal" === QU;
+       cU && !(yU && "non-modal" === QU || !yU && FU) || (zU.isConnected ? (cU && zU.close(), AU && (FU ? zU.showModal() : zU.show())) : console.warn("dialog is not attached to the dom", zU))
+     }
+ 
+     function zo(UU, XU) {
+       if ("DIALOG" !== UU.nodeName || UU instanceof UQ) return;
+       const zU = UU;
+ ... (288 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L155-L156` → after: `L10412-L10413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10412-L10413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10412-L10413) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L155-L156)

```diff
-       setTextureSampler(MM, rM) {
-         return -1 === this._options.samplerObjects.indexOf(MM) && this._options.samplerObjects.push(MM), this._textureSamplers[MM] = rM, this
+       get timer() {
+         return this.service.state.context.timer
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L158-L159` → after: `L10415-L10416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10415-L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10415-L10416) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L158-L159)

```diff
-       setStorageBuffer(MM, rM) {
-         return -1 === this._options.storageBuffers.indexOf(MM) && this._options.storageBuffers.push(MM), this._storageBuffers[MM] = rM, this
+       on(UU, XU) {
+         return this.emitter.on(UU, XU), this
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L161-L164` → after: `L10418-L10419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10418-L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10418-L10419) · [Before (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L161-L164)

```diff
-       setDefine(MM, rM) {
-         const iM = MM.trimEnd() + " ",
-           OM = this.options.defines.findIndex((rM => rM === MM || rM.startsWith(iM)));
-         return OM >= 0 && this.options.defines.splice(OM, 1), ("boolean" !== typeof rM || rM) && this.options.defines.push(iM + rM), this
+       off(UU, XU) {
+         return this.emitter.off(UU, XU), this
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L166-L167` → after: `L10421-L10429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10421-L10429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10421-L10429) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L166-L167)

```diff
-       isReadyForSubMesh(MM, rM, iM) {
-         return this.isReady(MM, iM, rM)
+       setConfig(UU) {
+         Object.keys(UU).forEach((XU => {
+           UU[XU], this.config[XU] = UU[XU]
+         })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof UU.speed && this.speedService.send({
+           type: "SET_SPEED",
+           payload: {
+             speed: UU.speed
+           }
+         }), "undefined" !== typeof UU.mouseTail && (!1 === UU.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail … [truncated]
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L169-L173` → after: `L10431-L10437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10431-L10437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10431-L10437) · [Before (L169-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L169-L173)

```diff
-       isReady(MM, rM, iM) {
-         const OM = iM && this._storeEffectOnSubMeshes;
-         if (this.isFrozen) {
-           const MM = OM ? iM._drawWrapper : this._drawWrapper;
-           if (MM.effect && MM._wasPreviouslyReady && MM._wasPreviouslyUsingInstances === rM) return !0
+       getMetaData() {
+         const UU = this.service.state.context.events[0],
+           XU = this.service.state.context.events[this.service.state.context.events.length - 1];
+         return {
+           startTime: UU.timestamp,
+           endTime: XU.timestamp,
+           totalTime: XU.timestamp - UU.timestamp
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L175-L176` → after: `L10439-L10577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10439-L10577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10439-L10577) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L175-L176)

```diff
-         const jM = this.Hk(),
-           PM = jM.ph(),
+       }
+       getCurrentTime() {
+         return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
+       }
+       getTimeOffset() {
+         const {
+           baselineTime: UU,
+           events: XU
+         } = this.service.state.context;
+         return UU - XU[0].timestamp
+       }
+       getMirror() {
+         return this.mirror
+       }
+       play() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+ ... (123 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L178-L187` → after: `L10579-L10617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10579-L10617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10579-L10617) · [Before (L178-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L178-L187)

```diff
-           zM = [];
-         let LM = null,
-           JM = this._shaderPath,
-           yM = this._options.uniforms,
-           lM = this._options.uniformBuffers,
-           EM = this._options.samplers;
-         PM.getCaps().multiview && jM.activeCamera && jM.activeCamera.outputRenderTarget && jM.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, QM.push("#define MULTIVIEW"), -1 !== yM.indexOf("viewProjection") && -1 === yM.indexOf("viewProjectionR") &&  … [truncated]
-         for (let SM = 0; SM < this._options.defines.length; SM++) {
-           const MM = 0 === this._options.defines[SM].indexOf("#define") ? this._options.defines[SM] : `#define ${this._options.defines[SM]}`;
-           QM.push(MM)
+           yU = new Set,
+           QU = (UU, QU) => {
+             "DIALOG" === UU.nodeName && yU.add(UU), this.collectIframeAndAttachDocument(cU, UU);
+             const AU = zU.getMeta(UU);
+             if ((null == AU ? void 0 : AU.type) === uA.Element && "HTML" === (null == AU ? void 0 : AU.tagName.toUpperCase())) {
+               const {
+                 documentElement: UU,
+                 head: zU
+               } = XU.contentDocument;
+               this.insertStyleRules(UU, zU)
+             }
+             if (!this.usingVirtualDom)
+               for (const XU of this.config.plugins || []) XU.onBuild && XU.onBuild(UU, {
+                 id: QU,
+                 replayer: this
+               })
+ ... (23 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L189-L204` → after: `L10619-L10622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10619-L10622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10619-L10622) · [Before (L189-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L189-L204)

```diff
-         for (let SM = 0; SM < this._options.attributes.length; SM++) zM.push(this._options.attributes[SM]);
-         if (MM && MM.isVerticesDataPresent(aM.j.ColorKind) && (-1 === zM.indexOf(aM.j.ColorKind) && zM.push(aM.j.ColorKind), QM.push("#define VERTEXCOLOR")), rM && (QM.push("#define INSTANCES"), (0, HM.jb)(zM, this._materialHelperNeedsPreviousMatrices), MM?.hasThinInstances && (Q … [truncated]
-           zM.push(aM.j.MatricesIndicesKind), zM.push(aM.j.MatricesWeightsKind), MM.numBoneInfluencers > 4 && (zM.push(aM.j.MatricesIndicesExtraKind), zM.push(aM.j.MatricesWeightsExtraKind));
-           const rM = MM.skeleton;
-           QM.push("#define NUM_BONE_INFLUENCERS " + MM.numBoneInfluencers), LM = new nM.b, LM.addCPUSkinningFallback(0, MM), rM.isUsingTextureForMatrices ? (QM.push("#define BONETEXTURE"), -1 === yM.indexOf("boneTextureInfo") && yM.push("boneTextureInfo"), -1 === this._options.sa … [truncated]
-         } else QM.push("#define NUM_BONE_INFLUENCERS 0");
-         let UM = 0;
-         const GM = MM ? MM.morphTargetManager : null;
-         if (GM) {
-           const rM = -1 !== QM.indexOf("#define UV1"),
-             iM = -1 !== QM.indexOf("#define UV2"),
-             OM = -1 !== QM.indexOf("#define TANGENT"),
-             SM = -1 !== QM.indexOf("#define NORMAL"),
-             jM = -1 !== QM.indexOf("#define VERTEXCOLOR");
-           UM = (0, HM.H)(GM, QM, zM, MM, !0, SM, OM, rM, iM, jM), GM.isUsingTextureForTargets && (-1 === yM.indexOf("morphTargetTextureIndices") && yM.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTar … [truncated]
-         } else QM.push("#define NUM_MORPH_INFLUENCERS 0");
+       }
+       waitForStylesheetLoad() {
+         var UU;
+         const XU = null == (UU = this.iframe.contentDocument) ? void 0 : UU.head;
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L206-L243` → after: `L10624-L10642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10624-L10642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10624-L10642) · [Before (L206-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L206-L243)

```diff
-           const iM = MM.bakedVertexAnimationManager;
-           iM && iM.isEnabled && (QM.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === yM.indexOf("bakedVertexAnimationSettings") && yM.push("bakedVertexAnimationSettings"), -1 === yM.indexOf("bakedVertexAnimationTextureSizeInverted") && yM.push("bakedVertexAnimationTextureSi … [truncated]
-         }
-         for (const SM in this._textures)
-           if (!this._textures[SM].isReady()) return !1;
-         for (const SM in this._internalTextures)
-           if (!this._internalTextures[SM].isReady) return !1;
-         MM && this.needAlphaTestingForMesh(MM) && QM.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, mM.b)(yM), (0, mM.j)(this, jM, QM)), jM.fogEnabled && MM?.applyFog && jM.fogMode !== SM.d.FOGMODE_NONE && (QM.push("#define FOG"), -1 === yM.indexOf("view") & … [truncated]
-         const CM = iM ? iM.getRenderingMesh() : MM;
-         if (CM && this.useVertexPulling) {
-           const MM = CM.geometry;
-           MM && (this._vertexPullingMetadata = (0, hM.g)(MM), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((MM, rM) => {
-             yM.push(`vp_${rM}_info`)
-           }))), QM.push("#define USE_VERTEX_PULLING");
-           const rM = CM.geometry?.getIndexBuffer();
-           rM && !CM.isUnIndexed && (QM.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), rM.is32Bits && QM.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
- ... (22 more removed lines; see GitHub link above)
+           const UU = new Set;
+           let zU, cU = this.service.state;
+           const yU = () => {
+             cU = this.service.state
+           };
+           this.emitter.on(rA.Start, yU), this.emitter.on(rA.Pause, yU);
+           const QU = () => {
+             this.emitter.off(rA.Start, yU), this.emitter.off(rA.Pause, yU)
+           };
+           XU.querySelectorAll('link[rel="stylesheet"]').forEach((XU => {
+             XU.sheet || (UU.add(XU), XU.addEventListener("load", (() => {
+               UU.delete(XU), 0 === UU.size && -1 !== zU && (cU.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(rA.LoadStylesheetEnd), zU && clearTimeout(zU), QU())
+             })))
+           })), UU.size > 0 && (this.service.send({
+             type: "PAUSE"
+           }), this.emitter.emit(rA.LoadStylesheetStart), zU = setTimeout((() => {
+ ... (3 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L245-L249` → after: `L10644-L10652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10644-L10652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10644-L10652) · [Before (L245-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L245-L249)

```diff
-       bindOnlyWorldMatrix(MM, rM) {
-         const iM = rM ?? this.getEffect();
-         if (!iM) return;
-         const OM = this._options.uniforms; - 1 !== OM.indexOf("world") && iM.setMatrix("world", MM);
-         const SM = this.Hk(); - 1 !== OM.indexOf("worldView") && (MM.multiplyToRef(SM.getViewMatrix(), this._cachedWorldViewMatrix), iM.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== OM.indexOf("worldViewProjection") && (MM.multiplyToRef(SM.getTransformMatrix(), thi … [truncated]
+       async preloadAllImages() {
+         const UU = [];
+         for (const XU of this.service.state.context.events)
+           if (XU.type === eA.IncrementalSnapshot && XU.data.source === CA.CanvasMutation) {
+             UU.push(this.deserializeAndPreloadCanvasEvents(XU.data, XU));
+             ("commands" in XU.data ? XU.data.commands : [XU.data]).forEach((UU => {
+               this.preloadImages(UU, XU)
+             }))
+           } return Promise.all(UU)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L251-L252` → after: `L10654-L10660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10654-L10660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10654-L10660) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L251-L252)

```diff
-       bindForSubMesh(MM, rM, iM) {
-         this.bind(MM, rM, iM._drawWrapperOverride?.effect, iM)
+       preloadImages(UU, XU) {
+         if ("drawImage" === UU.property && "string" === typeof UU.args[0] && !this.imageMap.has(XU)) {
+           const UU = document.createElement("canvas"),
+             XU = UU.getContext("2d"),
+             zU = null == XU ? void 0 : XU.createImageData(UU.width, UU.height);
+           null == XU || XU.putImageData(zU, 0, 0)
+         }
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L254-L266` → after: `L10662-L10739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10662-L10739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10662-L10739) · [Before (L254-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L254-L266)

```diff
-       bind(MM, rM, iM, OM) {
-         const SM = OM && this._storeEffectOnSubMeshes,
-           jM = iM ?? (SM ? OM.effect : this.getEffect());
-         if (!jM) return;
-         const aM = this.Hk();
-         this._activeEffect = jM, this.bindOnlyWorldMatrix(MM, iM);
-         const PM = this._options.uniformBuffers;
-         let nM = !1;
-         if (jM && PM && PM.length > 0 && aM.ph().supportsUniformBuffers)
-           for (let zM = 0; zM < PM.length; ++zM) {
-             switch (PM[zM]) {
-               case "Mesh":
-                 rM && (rM.getMeshUniformBuffer().bindToEffect(jM, "Mesh"), rM.transferToEffect(MM));
+       async deserializeAndPreloadCanvasEvents(UU, XU) {
+         if (!this.canvasEventMap.has(XU)) {
+           const zU = {
+             isUnchanged: !0
+           };
+           if ("commands" in UU) {
+             const cU = await Promise.all(UU.commands.map((async UU => {
+               const XU = await Promise.all(UU.args.map(KF(this.imageMap, null, zU)));
+               return {
+                 ...UU,
+                 args: XU
+               }
+             })));
+             !1 === zU.isUnchanged && this.canvasEventMap.set(XU, {
+               ...UU,
+               commands: cU
+ ... (62 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L268-L269` → after: `L10741-L10762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10741-L10762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10741-L10762) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L268-L269)

```diff
-               case "Scene":
-                 (0, HM.v)(jM, aM.getSceneUniformBuffer()), aM.finalizeSceneUbo(), nM = !0
+               case wA.Focus:
+                 cU && zU.focus && zU.focus({
+                   preventScroll: !0
+                 });
+                 break;
+               case wA.Click:
+               case wA.TouchStart:
+               case wA.TouchEnd:
+               case wA.MouseDown:
+               case wA.MouseUp:
+                 XU ? (QU.type === wA.TouchStart ? this.touchActive = !0 : QU.type === wA.TouchEnd && (this.touchActive = !1), QU.type === wA.MouseDown ? this.lastMouseDownEvent = [zU, UU] : QU.type === wA.MouseUp && (this.lastMouseDownEvent = null), this.mousePos = {
+                   x: QU.x || 0,
+                   y: QU.y || 0,
+                   id: QU.id,
+                   debugData: QU
+                 }) : (QU.type === wA.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(QU.x || 0, QU.y || 0, QU.id, XU, QU), QU.type === wA.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : QU.type === wA. … [truncated]
+ ... (6 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L272-L321` → after: `L10766-L10804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10766-L10804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10766-L10804) · [Before (L272-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L272-L321)

```diff
-         const QM = rM && SM ? this._mustRebind(aM, jM, OM, rM.visibility) : aM.getCachedMaterial() !== this;
-         if (jM && QM) {
-           let MM;
-           for (MM in nM || -1 === this._options.uniforms.indexOf("view") || jM.setMatrix("view", aM.getViewMatrix()), nM || -1 === this._options.uniforms.indexOf("projection") || jM.setMatrix("projection", aM.getProjectionMatrix()), nM || -1 === this._options.uniforms.indexOf("vi … [truncated]
-           for (MM in this._internalTextures) jM._bindTexture(MM, this._internalTextures[MM]);
-           for (MM in this._textureArrays) jM.setTextureArray(MM, this._textureArrays[MM]);
-           for (MM in this._ints) jM.setInt(MM, this._ints[MM]);
-           for (MM in this._uints) jM.setUInt(MM, this._uints[MM]);
-           for (MM in this._floats) jM.setFloat(MM, this._floats[MM]);
-           for (MM in this._floatsArrays) jM.setArray(MM, this._floatsArrays[MM]);
-           for (MM in this._colors3) jM.setColor3(MM, this._colors3[MM]);
-           for (MM in this._colors3Arrays) jM.setArray3(MM, this._colors3Arrays[MM]);
-           for (MM in this._colors4) {
-             const rM = this._colors4[MM];
-             jM.setFloat4(MM, rM.r, rM.g, rM.b, rM.a)
-           }
- ... (34 more removed lines; see GitHub link above)
+           case CA.Scroll:
+             if (-1 === QU.id) break;
+             if (this.usingVirtualDom) {
+               const UU = this.virtualDom.mirror.icU(QU.id);
+               if (!UU) return this.debugNodeNotFound(QU, QU.id);
+               UU.scrollData = QU;
+               break
+             }
+             this.applyScroll(QU, XU);
+             break;
+           case CA.ViewportResize:
+             this.emitter.emit(rA.Resize, {
+               width: QU.width,
+               height: QU.height
+             });
+             break;
+ ... (23 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L326-L331` → after: `L10851-L10947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10851-L10947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10851-L10947) · [Before (L326-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L326-L331)

```diff
-       getActiveTextures() {
-         const MM = super.getActiveTextures();
-         for (const rM in this._textures) MM.push(this._textures[rM]);
-         for (const rM in this._textureArrays) {
-           const iM = this._textureArrays[rM];
-           for (let rM = 0; rM < iM.length; rM++) MM.push(iM[rM])
+       applyMutation(UU, XU) {
+         if (this.config.useVirtualDom && !this.usingVirtualDom && XU && (this.usingVirtualDom = !0, uQ(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
+           for (const oU in this.legacy_missingNodeRetryMap) try {
+             const UU = this.legacy_missingNodeRetryMap[oU],
+               XU = rQ(UU.node, this.virtualDom, this.mirror);
+             XU && (UU.node = XU)
+           } catch (FU) {
+             this.warn(FU)
+           }
+         const zU = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
+         UU.removes = UU.removes.filter((XU => !!zU.icU(XU.id) || (this.warnNodeNotFound(UU, XU.id), !1))), UU.removes.forEach((XU => {
+           var cU;
+           const yU = zU.icU(XU.id);
+           if (!yU) return;
+           let QU = zU.icU(XU.parentId);
+           if (!QU) return this.warnNodeNotFound(UU, XU.parentId);
+ ... (81 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L333` → after: `L10949-L11049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR10949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L10949-L11049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L10949-L11049) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L333)

```diff
-         return MM
+         Object.keys(cU).length && Object.assign(this.legacy_missingNodeRetryMap, cU), ZA(UU.texts).forEach((XU => {
+           var cU;
+           const yU = zU.icU(XU.id);
+           if (!yU) {
+             if (UU.removes.find((UU => UU.id === XU.id))) return;
+             return this.warnNodeNotFound(UU, XU.id)
+           }
+           const QU = yU.parentElement;
+           if (XU.value && QU && "STYLE" === QU.tagName ? yU.textContent = Kz(XU.value, this.cache) : yU.textContent = XU.value, this.usingVirtualDom) {
+             const UU = yU.parentNode;
+             (null == (cU = null == UU ? void 0 : UU.rules) ? void 0 : cU.length) > 0 && (UU.rules = [])
+           }
+         })), UU.attributes.forEach((XU => {
+           var cU;
+           const yU = zU.icU(XU.id);
+           if (!yU) {
+ ... (85 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L335-L345` → after: `L11051-L11130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L11051-L11130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L11051-L11130) · [Before (L335-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L335-L345)

```diff
-       hasTexture(MM) {
-         if (super.hasTexture(MM)) return !0;
-         for (const iM in this._textures)
-           if (this._textures[iM] === MM) return !0;
-         const rM = MM.getInternalTexture();
-         for (const iM in this._internalTextures)
-           if (this._internalTextures[iM] === rM) return !0;
-         for (const iM in this._textureArrays) {
-           const rM = this._textureArrays[iM];
-           for (let iM = 0; iM < rM.length; iM++)
-             if (rM[iM] === MM) return !0
+       applySelection(UU) {
+         try {
+           const XU = new Set,
+             zU = UU.Qt.map((UU => {
+               let {
+                 start: zU,
+                 startOffset: cU,
+                 end: yU,
+                 endOffset: QU
+               } = UU;
+               const AU = this.mirror.icU(zU),
+                 FU = this.mirror.icU(yU);
+               if (!AU || !FU) return;
+               const oU = new Range;
+               oU.setStart(AU, cU), oU.setEnd(FU, QU);
+               const DU = AU.ownerDocument,
+ ... (64 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L349-L354` → after: `L11133-L11151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR11133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L11133-L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L11133-L11151) · [Before (L349-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L349-L354)

```diff
-       clone(MM) {
-         const rM = OM.b.Clone((() => new yM(MM, this.Hk(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
-         rM.name = MM, rM.id = MM, "object" === typeof rM._shaderPath && (rM._shaderPath = {
-           ...rM._shaderPath
-         }), this._options = {
-           ...this._options
+       applyAdoptedStyleSheet(UU) {
+         var XU;
+         const zU = this.mirror.icU(UU.id);
+         if (!zU) return;
+         null == (XU = UU.styles) || XU.forEach((UU => {
+           var XU;
+           let cU = null,
+             yU = null;
+           if (kA(zU) ? yU = (null == (XU = zU.ownerDocument) ? void 0 : XU.defaultView) || null : "#document" === zU.nodeName && (yU = zU.defaultView), yU) try {
+             cU = new yU.CSSStyleSheet, this.styleMirror.add(cU, UU.styleId), this.applyStyleSheetRule({
+               source: CA.StyleSheetRule,
+               adds: UU.rules
+             }, cU)
+           } catch (QU) {}
+         }));
+         let cU = 0;
+ ... (3 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L356-L389` → after: `L11153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR11153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L11153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L11153) · [Before (L356-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L356-L389)

```diff
-         const iM = Object.keys(this._options);
-         for (const OM of iM) {
-           const MM = this._options[OM];
-           Array.isArray(MM) && (this._options[OM] = MM.slice(0))
-         }
-         this.stencil.copyTo(rM.stencil);
-         for (const OM in this._textures) rM.setTexture(OM, this._textures[OM]);
-         for (const OM in this._internalTextures) rM.setInternalTexture(OM, this._internalTextures[OM]);
-         for (const OM in this._textureArrays) rM.setTextureArray(OM, this._textureArrays[OM]);
-         for (const OM in this._externalTextures) rM.setExternalTexture(OM, this._externalTextures[OM]);
-         for (const OM in this._ints) rM.setInt(OM, this._ints[OM]);
-         for (const OM in this._uints) rM.setUInt(OM, this._uints[OM]);
-         for (const OM in this._floats) rM.setFloat(OM, this._floats[OM]);
-         for (const OM in this._floatsArrays) rM.setFloats(OM, this._floatsArrays[OM]);
-         for (const OM in this._colors3) rM.setColor3(OM, this._colors3[OM]);
-         for (const OM in this._colors3Arrays) rM._colors3Arrays[OM] = this._colors3Arrays[OM];
- ... (18 more removed lines; see GitHub link above)
+         yU(zU, UU.styleIds)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L391` → after: `L11155-L11159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR11155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L11155-L11159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L11155-L11159) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L391)

```diff
-       dispose(MM, rM, iM) {
+       legacy_resolveMissingNode(UU, XU, zU, cU) {
+         const {
+           previousId: yU,
+           nextId: QU
+         } = cU, AU = yU && UU[yU], FU = QU && UU[QU];
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L393-L399` → after: `L11161-L11172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR11161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L11161-L11172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L11161-L11172) · [Before (L393-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L393-L399)

```diff
-           let MM;
-           for (MM in this._textures) this._textures[MM].dispose();
-           for (MM in this._internalTextures) this._internalTextures[MM].dispose();
-           for (MM in this._textureArrays) {
-             const rM = this._textureArrays[MM];
-             for (let MM = 0; MM < rM.length; MM++) rM[MM].dispose()
-           }
+           const {
+             node: cU,
+             mutation: yU
+           } = AU;
+           XU.insertBefore(cU, zU), delete UU[yU.node.id], delete this.legacy_missingNodeRetryMap[yU.node.id], (yU.previousId || yU.nextId) && this.legacy_resolveMissingNode(UU, XU, cU, yU)
+         }
+         if (FU) {
+           const {
+             node: cU,
+             mutation: yU
+           } = FU;
+           XU.insertBefore(cU, zU.nextSibling), delete UU[yU.node.id], delete this.legacy_missingNodeRetryMap[yU.node.id], (yU.previousId || yU.nextId) && this.legacy_resolveMissingNode(UU, XU, cU, yU)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L403-L447` → after: `L11175-L11184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR11175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L11175-L11184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L11175-L11184) · [Before (L403-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L403-L447)

```diff
-       serialize() {
-         const MM = OM.b.Serialize(this);
-         let rM;
-         for (rM in MM.customType = "BABYLON.ShaderMaterial", MM.uniqueId = this.uniqueId, MM.options = this._options, MM.shaderPath = this._shaderPath, MM.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, MM.stencil = this.stencil.serialize(), MM.textures = {}, this._texture … [truncated]
-         for (rM in MM.textureArrays = {}, this._textureArrays) {
-           MM.textureArrays[rM] = [];
-           const iM = this._textureArrays[rM];
-           for (let OM = 0; OM < iM.length; OM++) MM.textureArrays[rM].push(iM[OM].serialize())
-         }
-         for (rM in MM.ints = {}, this._ints) MM.ints[rM] = this._ints[rM];
-         for (rM in MM.uints = {}, this._uints) MM.uints[rM] = this._uints[rM];
-         for (rM in MM.floats = {}, this._floats) MM.floats[rM] = this._floats[rM];
-         for (rM in MM.floatsArrays = {}, this._floatsArrays) MM.floatsArrays[rM] = this._floatsArrays[rM];
-         for (rM in MM.colors3 = {}, this._colors3) {
-           const iM = this._colors3[rM];
-           MM.colors3[rM] = [iM.r, iM.g, iM.b]
- ... (29 more removed lines; see GitHub link above)
+       moveAndHover(UU, XU, zU, cU, yU) {
+         const QU = this.mirror.icU(zU);
+         if (!QU) return this.debugNodeNotFound(yU, zU);
+         const AU = gA(QU, this.iframe),
+           FU = UU * AU.absoluteScale + AU.x,
+           oU = XU * AU.absoluteScale + AU.y;
+         this.mouse.style.left = `${FU}px`, this.mouse.style.top = `${oU}px`, cU || this.drawMouseTail({
+           x: FU,
+           y: oU
+         }), this.hoverElements(QU)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L449-L471` → after: `L11186-L11200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR11186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L11186-L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L11186-L11200) · [Before (L449-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L449-L471)

```diff
-     }
- 
-     function lM(MM, rM, iM) {
-       const SM = OM.b.Parse((() => new yM(MM.name, rM, MM.shaderPath, MM.options, MM.storeEffectOnSubMeshes)), MM, rM, iM);
-       let aM;
-       for (aM in MM.stencil && SM.stencil.parse(MM.stencil, rM, iM), MM.textures) SM.setTexture(aM, PM.h.Parse(MM.textures[aM], rM, iM));
-       for (aM in MM.textureArrays) {
-         const OM = MM.textureArrays[aM],
-           jM = [];
-         for (let MM = 0; MM < OM.length; MM++) jM.push(PM.h.Parse(OM[MM], rM, iM));
-         SM.setTextureArray(aM, jM)
-       }
-       for (aM in MM.ints) SM.setInt(aM, MM.ints[aM]);
-       for (aM in MM.uints) SM.setUInt(aM, MM.uints[aM]);
-       for (aM in MM.floats) SM.setFloat(aM, MM.floats[aM]);
-       for (aM in MM.floatsArrays) SM.setFloats(aM, MM.floatsArrays[aM]);
- ... (7 more removed lines; see GitHub link above)
+       drawMouseTail(UU) {
+         if (!this.mouseTail) return;
+         const {
+           lineCap: XU,
+           lineWidth: zU,
+           strokeStyle: cU,
+           duration: yU
+         } = !0 === this.config.mouseTail ? Qo : Object.assign({}, Qo, this.config.mouseTail), QU = () => {
+           if (!this.mouseTail) return;
+           const UU = this.mouseTail.getContext("2d");
+           UU && this.tailPositions.length && (UU.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), UU.beginPath(), UU.lineWidth = zU, UU.lineCap = XU, UU.strokeStyle = cU, UU.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((XU => U … [truncated]
+         };
+         this.tailPositions.push(UU), QU(), setTimeout((() => {
+           this.tailPositions = this.tailPositions.filter((XU => XU !== UU)), QU()
+         }), yU / this.speedService.state.context.timer.speed)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L473-L488` → after: `L11202-L11208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR11202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L11202-L11208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L11202-L11208) · [Before (L473-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L473-L488)

```diff
-       for (aM in MM.colors3Arrays) {
-         const rM = MM.colors3Arrays[aM].reduce(((MM, rM, iM) => (iM % 3 === 0 ? MM.push([rM]) : MM[MM.length - 1].push(rM), MM)), []).map((MM => ({
-           r: MM[0],
-           g: MM[1],
-           b: MM[2]
-         })));
-         SM.setColor3Array(aM, rM)
-       }
-       for (aM in MM.colors4) {
-         const rM = MM.colors4[aM];
-         SM.setColor4(aM, {
-           r: rM[0],
-           g: rM[1],
-           b: rM[2],
-           a: rM[3]
-         })
+       hoverElements(UU) {
+         var XU;
+         null == (XU = this.lastHoveredRootNode || this.iframe.contentDocument) || XU.querySelectorAll(".\\:hover").forEach((UU => {
+           UU.classList.remove(":hover")
+         })), this.lastHoveredRootNode = UU.getRootNode();
+         let zU = UU;
+         for (; zU;) zU.classList && zU.classList.add(":hover"), zU = zU.parentElement
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L490-L497` → after: `L11210-L11211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR11210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L11210-L11211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L11210-L11211) · [Before (L490-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L490-L497)

```diff
-       for (aM in MM.colors4Arrays) {
-         const rM = MM.colors4Arrays[aM].reduce(((MM, rM, iM) => (iM % 4 === 0 ? MM.push([rM]) : MM[MM.length - 1].push(rM), MM)), []).map((MM => ({
-           r: MM[0],
-           g: MM[1],
-           b: MM[2],
-           a: MM[3]
-         })));
-         SM.setColor4Array(aM, rM)
+       isUserInteraction(UU) {
+         return UU.type === eA.IncrementalSnapshot && (UU.data.source > CA.Mutation && UU.data.source <= CA.Input)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L499-L504` → after: `L11213-L11218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR11213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L11213-L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L11213-L11218) · [Before (L499-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L499-L504)

```diff
-       for (aM in MM.vectors2) {
-         const rM = MM.vectors2[aM];
-         SM.setVector2(aM, {
-           x: rM[0],
-           y: rM[1]
-         })
+       backToNormal() {
+         this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
+           type: "BACK_TO_NORMAL"
+         }), this.emitter.emit(rA.SkipEnd, {
+           speed: this.speedService.state.context.normalSpeed
+         }))
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L506-L512` → after: `L11220-L11221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR11220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L11220-L11221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L11220-L11221) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L506-L512)

```diff
-       for (aM in MM.vectors3) {
-         const rM = MM.vectors3[aM];
-         SM.setVector3(aM, {
-           x: rM[0],
-           y: rM[1],
-           z: rM[2]
-         })
+       warnNodeNotFound(UU, XU) {
+         this.warn(`Node with id '${XU}' not found. `, UU)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L514-L521` → after: `L11223-L11239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR11223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L11223-L11239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/289.js#L11223-L11239) · [Before (L514-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/289.js#L514-L521)

```diff
-       for (aM in MM.vectors4) {
-         const rM = MM.vectors4[aM];
-         SM.setVector4(aM, {
-           x: rM[0],
-           y: rM[1],
-           z: rM[2],
-           w: rM[3]
-         })
+       warnCanvasMutationFailed(UU, XU) {
+         this.warn("Has error on canvas update", XU, "canvas mutation:", UU)
+       }
+       debugNodeNotFound(UU, XU) {
+         this.debug(`Node with id '${XU}' not found. `, UU)
+       }
+       warn() {
+         if (this.config.showWarning) {
+           for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
+           this.config.logger.warn(yo, ...XU)
+         }
+       }
+       debug() {
+         if (this.config.showDebug) {
+           for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
+           this.config.logger.log(yo, ...XU)
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/290.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/290.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/290.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/290.js#L4)

```diff
-   41573: (MM, rM, iM) => {
+   41577: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L6` → after: `L7-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L7-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/290.js#L7-L24) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/290.js#L6)

```diff
-       default: () => yi
+       FirebaseError: () => cU.b,
+       SDK_VERSION: () => cU.e,
+       _DEFAULT_ENTRY_NAME: () => cU.f,
+       ncU: () => cU.i,
+       _addOrOverwriteComponent: () => cU.j,
+       _apps: () => cU.k,
+       _clearComponents: () => cU.l,
+       _components: () => cU.o,
+       _getProvider: () => cU.s,
+       _registerComponent: () => cU.t,
+       _removeServiceInstance: () => cU.w,
+       deleteApp: () => cU.A,
+       getApp: () => cU.H,
+       getApps: () => cU.E,
+       initializeApp: () => cU.L,
+       onLog: () => cU.N,
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L8-L2446` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/290.js#L26-L27) · [Before (L8-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/290.js#L8-L2446)

```diff
-     var OM = iM(44),
-       SM = iM(1116),
-       jM = iM.n(SM);
-     const aM = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
-       PM = 3e3;
- 
-     function nM(MM) {
-       return MM.down && MM.inPlay && !MM.bound
-     }
- 
-     function QM(MM, rM) {
-       let iM = 0,
-         OM = MM.length;
-       for (; iM < OM;) {
-         const SM = iM + OM >> 1;
-         MM[SM].atMs <= rM ? iM = SM + 1 : OM = SM
- ... (2423 more removed lines; see GitHub link above)
+     var cU = zU(41582);
+     (0, cU.Q)("firebase", "9.23.0", "app")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/291.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/291.js` (113 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade)

#### 1. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L1)

```diff
- /*! For license information please see fo1voe.291.fbbdbff2.chunk.js.LICENSE.txt */
+ /*! For license information please see fecih8.291.0267cb5a.chunk.js.LICENSE.txt */
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L5)

```diff
-   41580: (MM, rM, iM) => {
+   41599: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L7-L9` → after: `L7-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L7-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L7-L30) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L7-L9)

```diff
-       e: () => Ra,
-       g: () => pa,
-       i: () => zn
+       C: () => qU,
+       G: () => YU,
+       K: () => EU,
+       N: () => NU,
+       R: () => vU,
+       V: () => pU,
+       Z: () => tU,
+       ab: () => dU,
+       c: () => IU,
+       eb: () => kU,
+       f: () => PU,
+       fb: () => GU,
+       gb: () => aU,
+       j: () => RU,
+       jb: () => gU,
+       m: () => ZU,
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11-L30` → after: `L32-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L32-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L32-L39) · [Before (L11-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11-L30)

```diff
-     var OM, SM = Object.defineProperty,
-       jM = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? SM(MM, rM, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: iM
-       }) : MM[rM] = iM)(MM, "symbol" !== typeof rM ? rM + "" : rM, iM),
-       aM = Object.defineProperty,
-       PM = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? aM(MM, rM, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: iM
-       }) : MM[rM] = iM)(MM, "symbol" !== typeof rM ? rM + "" : rM, iM),
-       nM = (MM => (MM[MM.Document = 0] = "Document", MM[MM.DocumentType = 1] = "DocumentType", MM[MM.Element = 2] = "Element", MM[MM.Text = 3] = "Text", MM[MM.CDATA = 4] = "CDATA", MM[MM.Comment = 5] = "Comment", MM))(nM || {});
-     const QM = {
- ... (4 more removed lines; see GitHub link above)
+     const cU = function(UU) {
+         const XU = [];
+         let zU = 0;
+         for (let cU = 0; cU < UU.length; cU++) {
+           let yU = UU.charCodeAt(cU);
+           yU < 128 ? XU[zU++] = yU : yU < 2048 ? (XU[zU++] = yU >> 6 | 192, XU[zU++] = 63 & yU | 128) : 55296 === (64512 & yU) && cU + 1 < UU.length && 56320 === (64512 & UU.charCodeAt(cU + 1)) ? (yU = 65536 + ((1023 & yU) << 10) + (1023 & UU.charCodeAt(++cU)), XU[zU++] = yU >> 1 … [truncated]
+         }
+         return XU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L33-L66` → after: `L42-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L42-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L42-L131) · [Before (L33-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L33-L66)

```diff
-         Node: ["contains", "getRootNode"],
-         ShadowRoot: ["getSelection"],
-         Element: [],
-         MutationObserver: ["constructor"]
-       },
-       LM = {},
-       mM = {};
- 
-     function HM(MM) {
-       if (LM[MM]) return LM[MM];
-       const rM = globalThis[MM],
-         iM = rM.prototype,
-         OM = MM in QM ? QM[MM] : void 0,
-         SM = Boolean(OM && OM.every((MM => {
-           var rM, OM;
-           return Boolean(null == (OM = null == (rM = Object.getOwnPropertyDescriptor(iM, MM)) ? void 0 : rM.get) ? void 0 : OM.toString().includes("[native code]"))
- ... (18 more removed lines; see GitHub link above)
+         byteToCharMap_: null,
+         charToByteMap_: null,
+         byteToCharMapWebSafe_: null,
+         charToByteMapWebSafe_: null,
+         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
+         get ENCODED_VALS() {
+           return this.ENCODED_VALS_BASE + "+/="
+         },
+         get ENCODED_VALS_WEBSAFE() {
+           return this.ENCODED_VALS_BASE + "-_."
+         },
+         HAS_NATIVE_SUPPORT: "function" === typeof atob,
+         encodeByteArray(UU, XU) {
+           if (!Array.isArray(UU)) throw Error("encodeByteArray takes an array as a parameter");
+           this.init_();
+           const zU = XU ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
+ ... (74 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L69-L130` → after: `L134-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L134-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L134-L138) · [Before (L69-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L69-L130)

```diff
-     const hM = {};
- 
-     function JM(MM, rM, iM) {
-       var OM, SM;
-       const jM = null == (OM = hM[MM]) ? void 0 : OM[iM];
-       if (jM) return jM.call(rM);
-       const aM = HM(MM),
-         PM = null == (SM = Object.getOwnPropertyDescriptor(aM, iM)) ? void 0 : SM.get;
-       return PM ? ((hM[MM] || (hM[MM] = {}))[iM] = PM, PM.call(rM)) : rM[iM]
-     }
-     const dM = {};
- 
-     function yM(MM, rM, iM) {
-       const OM = `${MM}.${String(iM)}`;
-       if (dM[OM]) return dM[OM].bind(rM);
-       const SM = HM(MM)[iM];
- ... (46 more removed lines; see GitHub link above)
+     const AU = function(UU) {
+         return function(UU) {
+           const XU = cU(UU);
+           return yU.encodeByteArray(XU, !0)
+         }(UU).replace(/\./g, "")
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L132-L133` → after: `L140-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L140-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L140-L171) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L132-L133)

```diff
-       querySelector: function(MM, rM) {
-         return JM("Element", MM, "querySelector")(rM)
+       FU = function(UU) {
+         try {
+           return yU.decodeString(UU, !0)
+         } catch (XU) {
+           console.error("base64Decode failed: ", XU)
+         }
+         return null
+       };
+     const oU = () => function() {
+         if ("undefined" !== typeof self) return self;
+         if ("undefined" !== typeof window) return window;
+         if ("undefined" !== typeof zU.g) return zU.g;
+         throw new Error("Unable to locate global object.")
+       }().__FIREBASE_DEFAULTS__,
+       DU = () => {
+         try {
+ ... (16 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L135-L136` → after: `L173-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L173-L175) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L135-L136)

```diff
-       querySelectorAll: function(MM, rM) {
-         return JM("Element", MM, "querySelectorAll")(rM)
+       EU = UU => {
+         var XU, zU;
+         return null === (zU = null === (XU = DU()) || void 0 === XU ? void 0 : XU.emulatorHosts) || void 0 === zU ? void 0 : zU[UU]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L138-L140` → after: `L177-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L177-L179) · [Before (L138-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L138-L140)

```diff
-       nowTimestamp: lM,
-       mutationObserverCtor: function() {
-         return [HM("MutationObserver").constructor, mM.MutationObserver ?? (() => {})]
+       YU = () => {
+         var UU;
+         return null === (UU = DU()) || void 0 === UU ? void 0 : UU.config
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L142-L156` → after: `L181-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L181-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L181-L193) · [Before (L142-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L142-L156)

```diff
-       patch: function(MM, rM, iM) {
-         try {
-           if (!(rM in MM)) return () => {};
-           const OM = MM[rM],
-             SM = iM(OM);
-           return "function" === typeof SM && (SM.prototype = SM.prototype || {}, Object.defineProperties(SM, {
-             __rrweb_original__: {
-               enumerable: !1,
-               value: OM
-             }
-           })), MM[rM] = SM, () => {
-             MM[rM] = OM
-           }
-         } catch {
-           return () => {}
+       NU = UU => {
+         var XU;
+         return null === (XU = DU()) || void 0 === XU ? void 0 : XU[`_${UU}`]
+       };
+     class IU {
+       constructor() {
+         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((UU, XU) => {
+           this.resolve = UU, this.reject = XU
+         }))
+       }
+       wrapCallback(UU) {
+         return (XU, zU) => {
+           XU ? this.reject(XU) : this.resolve(zU), "function" === typeof UU && (this.promise.catch((() => {})), 1 === UU.length ? UU(XU) : UU(XU, zU))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L159` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L196) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L159)

```diff
-     };
+     }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L161-L162` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L198-L199) · [Before (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L161-L162)

```diff
-     function UM(MM) {
-       return MM.nodeType === MM.ELEMENT_NODE
+     function pU() {
+       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L165-L167` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L202-L203) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L165-L167)

```diff
-     function GM(MM) {
-       const rM = MM && "host" in MM && "mode" in MM && EM.host(MM) || null;
-       return Boolean(rM && "shadowRoot" in rM && EM.shadowRoot(rM) === MM)
+     function aU() {
+       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pU())
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L170-L171` → after: `L206-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L206-L208) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L170-L171)

```diff
-     function CM(MM) {
-       return "[object ShadowRoot]" === Object.prototype.toString.call(MM)
+     function tU() {
+       const UU = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
+       return "object" === typeof UU && void 0 !== UU.id
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L174` → after: `L211-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L211-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L211-L220) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L174)

```diff
-     function eM(MM) {
+     function gU() {
+       return "object" === typeof navigator && "ReactNative" === navigator.product
+     }
+ 
+     function kU() {
+       const UU = pU();
+       return UU.indexOf("MSIE ") >= 0 || UU.indexOf("Trident/") >= 0
+     }
+ 
+     function GU() {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L176-L181` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L222) · [Before (L176-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L176-L181)

```diff
-         const iM = MM.rules || MM.cssRules;
-         if (!iM) return null;
-         let OM = MM.href;
-         !OM && MM.ownerNode && (OM = MM.ownerNode.baseURI);
-         const SM = Array.from(iM, (MM => bM(MM, OM))).join("");
-         return (rM = SM).includes(" background-clip: text;") && !rM.includes(" -webkit-background-clip: text;") && (rM = rM.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), rM
+         return "object" === typeof indexedDB
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L183` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L224) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L183)

```diff
-         return null
+         return !1
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L188-L192` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L228-L229) · [Before (L188-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L188-L192)

```diff
-     function bM(MM, rM) {
-       if (function(MM) {
-           return "styleSheet" in MM
-         }(MM)) {
-         let rM;
+     function BU() {
+       return new Promise(((UU, XU) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L194-L201` → after: `L231-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L231-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L231-L241) · [Before (L194-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L194-L201)

```diff
-           rM = eM(MM.styleSheet) || function(MM) {
-             const {
-               cssText: rM
-             } = MM;
-             if (rM.split('"').length < 3) return rM;
-             const iM = ["@import", `url(${JSON.stringify(MM.href)})`];
-             return "" === MM.layerName ? iM.push("layer") : MM.layerName && iM.push(`layer(${MM.layerName})`), MM.supportsText && iM.push(`supports(${MM.supportsText})`), MM.media.length && iM.push(MM.media.mediaText), iM.join(" ") + ";"
-           }(MM)
+           let zU = !0;
+           const cU = "validate-browser-context-for-indexeddb-analytics-module",
+             yU = self.indexedDB.open(cU);
+           yU.onsuccess = () => {
+             yU.result.close(), zU || self.indexedDB.deleteDatabase(cU), UU(!0)
+           }, yU.onupgradeneeded = () => {
+             zU = !1
+           }, yU.onerror = () => {
+             var UU;
+             XU((null === (UU = yU.error) || void 0 === UU ? void 0 : UU.message) || "")
+           }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L203` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L243) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L203)

```diff
-           rM = MM.cssText
+           XU(zU)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L205-L213` → after: `L245-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L245-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L245-L253) · [Before (L205-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L205-L213)

```diff
-         return MM.styleSheet.href ? oM(rM, MM.styleSheet.href) : rM
-       } {
-         let iM = MM.cssText;
-         return function(MM) {
-           return "selectorText" in MM
-         }(MM) && MM.selectorText.includes(":") && (iM = function(MM) {
-           const rM = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
-           return MM.replace(rM, "$1\\$2")
-         }(iM)), rM ? oM(iM, rM) : iM
+       }))
+     }
+ 
+     function ZU() {
+       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
+     }
+     class RU extends Error {
+       constructor(UU, XU, zU) {
+         super(XU), this.code = UU, this.customData = zU, this.name = "FirebaseError", Object.setPrototypeOf(this, RU.prototype), Error.captureStackTrace && Error.captureStackTrace(this, PU.prototype.create)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L217-L218` → after: `L257-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L257-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L257-L271) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L217-L218)

```diff
-       constructor() {
-         PM(this, "idNodeMap", new Map), PM(this, "nodeMetaMap", new WeakMap)
+       constructor(UU, XU, zU) {
+         this.service = UU, this.serviceName = XU, this.errors = zU
+       }
+       create(UU) {
+         const XU = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
+           zU = `${this.service}/${UU}`,
+           cU = this.errors[UU],
+           yU = cU ? function(UU, XU) {
+             return UU.replace(WU, ((UU, zU) => {
+               const cU = XU[zU];
+               return null != cU ? String(cU) : `<${zU}?>`
+             }))
+           }(cU, XU) : "Error",
+           QU = `${this.serviceName}: ${yU} (${zU}).`;
+         return new RU(zU, QU, XU)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L220-L223` → after: `L273-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L273-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L273-L292) · [Before (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L220-L223)

```diff
-       getId(MM) {
-         var rM;
-         if (!MM) return -1;
-         return (null == (rM = this.getMeta(MM)) ? void 0 : rM.id) ?? -1
+     }
+     const WU = /\{\$([^}]+)}/g;
+ 
+     function dU(UU) {
+       for (const XU in UU)
+         if (Object.prototype.hasOwnProperty.call(UU, XU)) return !1;
+       return !0
+     }
+ 
+     function LU(UU, XU) {
+       if (UU === XU) return !0;
+       const zU = Object.keys(UU),
+         cU = Object.keys(XU);
+       for (const yU of zU) {
+         if (!cU.includes(yU)) return !1;
+         const zU = UU[yU],
+ ... (4 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L225-L226` → after: `L294-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L294-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L294-L338) · [Before (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L225-L226)

```diff
-       lD(MM) {
-         return this.idNodeMap.get(MM) || null
+       for (const yU of cU)
+         if (!zU.includes(yU)) return !1;
+       return !0
+     }
+ 
+     function eU(UU) {
+       return null !== UU && "object" === typeof UU
+     }
+ 
+     function CU(UU) {
+       const XU = [];
+       for (const [zU, cU] of Object.entries(UU)) Array.isArray(cU) ? cU.forEach((UU => {
+         XU.push(encodeURIComponent(zU) + "=" + encodeURIComponent(UU))
+       })) : XU.push(encodeURIComponent(zU) + "=" + encodeURIComponent(cU));
+       return XU.length ? "&" + XU.join("&") : ""
+     }
+ ... (29 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L228-L229` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L340-L343) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L228-L229)

```diff
-       getIds() {
-         return Array.from(this.idNodeMap.keys())
+       next(UU) {
+         this.forEachObserver((XU => {
+           XU.next(UU)
+         }))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L231-L232` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L345-L348) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L231-L232)

```diff
-       getMeta(MM) {
-         return this.nodeMetaMap.get(MM) || null
+       error(UU) {
+         this.forEachObserver((XU => {
+           XU.error(UU)
+         })), this.close(UU)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L234-L236` → after: `L350-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L350-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L350-L353) · [Before (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L234-L236)

```diff
-       removeNodeFromMap(MM) {
-         const rM = this.getId(MM);
-         this.idNodeMap.delete(rM), MM.childNodes && MM.childNodes.forEach((MM => this.removeNodeFromMap(MM)))
+       complete() {
+         this.forEachObserver((UU => {
+           UU.complete()
+         })), this.close()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L238-L239` → after: `L355-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L355-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L355-L373) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L238-L239)

```diff
-       has(MM) {
-         return this.idNodeMap.has(MM)
+       subscribe(UU, XU, zU) {
+         let cU;
+         if (void 0 === UU && void 0 === XU && void 0 === zU) throw new Error("Missing Observer.");
+         cU = function(UU, XU) {
+           if ("object" !== typeof UU || null === UU) return !1;
+           for (const zU of XU)
+             if (zU in UU && "function" === typeof UU[zU]) return !0;
+           return !1
+         }(UU, ["next", "error", "complete"]) ? UU : {
+           next: UU,
+           error: XU,
+           complete: zU
+         }, void 0 === cU.next && (cU.next = rU), void 0 === cU.error && (cU.error = rU), void 0 === cU.complete && (cU.complete = rU);
+         const yU = this.unsubscribeOne.bind(this, this.observers.length);
+         return this.finalized && this.task.then((() => {
+           try {
+ ... (3 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L241-L242` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L375-L376) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L241-L242)

```diff
-       hasNode(MM) {
-         return this.nodeMetaMap.has(MM)
+       unsubscribeOne(UU) {
+         void 0 !== this.observers && void 0 !== this.observers[UU] && (delete this.observers[UU], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L244-L246` → after: `L378-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L378-L380) · [Before (L244-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L244-L246)

```diff
-       add(MM, rM) {
-         const iM = rM.id;
-         this.idNodeMap.set(iM, MM), this.nodeMetaMap.set(MM, rM)
+       forEachObserver(UU) {
+         if (!this.finalized)
+           for (let XU = 0; XU < this.observers.length; XU++) this.sendOne(XU, UU)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L248-L254` → after: `L382-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L382-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L382-L389) · [Before (L248-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L248-L254)

```diff
-       replace(MM, rM) {
-         const iM = this.lD(MM);
-         if (iM) {
-           const MM = this.nodeMetaMap.get(iM);
-           MM && this.nodeMetaMap.set(rM, MM)
-         }
-         this.idNodeMap.set(MM, rM)
+       sendOne(UU, XU) {
+         this.task.then((() => {
+           if (void 0 !== this.observers && void 0 !== this.observers[UU]) try {
+             XU(this.observers[UU])
+           } catch (zU) {
+             "undefined" !== typeof console && console.error && console.error(zU)
+           }
+         }))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L256-L257` → after: `L391-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L391-L394) · [Before (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L256-L257)

```diff
-       reset() {
-         this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
+       close(UU) {
+         this.finalized || (this.finalized = !0, void 0 !== UU && (this.finalError = UU), this.task.then((() => {
+           this.observers = void 0, this.onNoObservers = void 0
+         })))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L261-L263` → after: `L398-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L398-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L398-L402) · [Before (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L261-L263)

```diff
-     function tM() {
-       return new wM
-     }
+     function rU() {}
+     const uU = 1e3,
+       fU = 2,
+       iU = 144e5,
+       HU = .5;
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L266-L275` → after: `L405-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L405-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L405-L408) · [Before (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L266-L275)

```diff
-       let {
-         element: rM,
-         maskInputOptions: iM,
-         tagName: OM,
-         type: SM,
-         value: jM,
-         maskInputFn: aM
-       } = MM, PM = jM || "";
-       const nM = SM && uM(SM);
-       return (iM[OM.toLowerCase()] || nM && iM[nM]) && (PM = aM ? aM(PM, rM) : "*".repeat(PM.length)), PM
+       let XU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fU;
+       const zU = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uU) * Math.pow(XU, UU),
+         cU = Math.round(HU * zU * (Math.random() - .5) * 2);
+       return Math.min(iU, zU + cU)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L279` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L412) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L279)

```diff
-       return MM.toLowerCase()
+       return UU && UU._delegate ? UU._delegate : UU
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L281` → after: `L414-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L414-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L414-L456) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L281)

```diff
-     const RM = "__rrweb_original__";
+   },
+   41582: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => QU.j,
+       e: () => YX,
+       f: () => TU,
+       i: () => zX,
+       j: () => cX,
+       k: () => UX,
+       l: () => FX,
+       o: () => XX,
+       s: () => QX,
+       t: () => yX,
+       w: () => AX,
+       A: () => aX,
+       H: () => IX,
+ ... (27 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L284-L293` → after: `L459-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L459-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L459-L468) · [Before (L284-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L284-L293)

```diff
-       const rM = MM.type;
-       return MM.hasAttribute("data-rr-is-password") ? "password" : rM ? uM(rM) : null
-     }
- 
-     function WM(MM, rM) {
-       let iM;
-       try {
-         iM = new URL(MM, rM ?? window.location.href)
-       } catch (SM) {
-         return null
+       return UU !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (FU || (FU = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(UU) ? function() {
+         for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
+         return UU.apply(gU(this), zU), tU(oU.get(this))
+       } : function() {
+         for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
+         return tU(UU.apply(gU(this), zU))
+       } : function(XU) {
+         for (var zU = arguments.length, cU = new Array(zU > 1 ? zU - 1 : 0), yU = 1; yU < zU; yU++) cU[yU - 1] = arguments[yU];
+         const QU = UU.call(gU(this), XU, ...cU);
+         return EU.set(QU, XU.sort ? XU.sort() : [XU]), tU(QU)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L303-L318` → after: `L472-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L472-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L472-L489) · [Before (L303-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L303-L318)

```diff
-     function oM(MM, rM) {
-       return (MM || "").replace(sM, ((MM, iM, OM, SM, jM, aM) => {
-         const PM = OM || jM || aM,
-           nM = iM || SM || "";
-         if (!PM) return MM;
-         if (DM.test(PM) || kM.test(PM)) return `url(${nM}${PM}${nM})`;
-         if (ZM.test(PM)) return `url(${nM}${PM}${nM})`;
-         if ("/" === PM[0]) return `url(${nM}${function(MM){let rM="";return rM=MM.indexOf("//")>-1?MM.split("/").slice(0,3).join("/"):MM.split("/")[0],rM=rM.split("?")[0],rM}(rM)+PM}${nM})`;
-         const QM = PM.split("#")[0],
-           zM = PM.substring(QM.length),
-           LM = rM.split("#")[0].split("/"),
-           mM = QM.split("/");
-         LM.pop();
-         for (const rM of mM) "." !== rM && (".." === rM ? LM.pop() : LM.push(rM));
-         return `url(${nM}${LM.join("/")}${zM}${nM})`
-       }))
+     function aU(UU) {
+       return "function" === typeof UU ? pU(UU) : (UU instanceof IDBTransaction && function(UU) {
+         if (DU.has(UU)) return;
+         const XU = new Promise(((XU, zU) => {
+           const cU = () => {
+               UU.removeEventListener("complete", yU), UU.removeEventListener("error", QU), UU.removeEventListener("abort", QU)
+             },
+             yU = () => {
+               XU(), cU()
+             },
+             QU = () => {
+               zU(UU.error || new DOMException("AbortError", "AbortError")), cU()
+             };
+           UU.addEventListener("complete", yU), UU.addEventListener("error", QU), UU.addEventListener("abort", QU)
+         }));
+         DU.set(UU, XU)
+ ... (2 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L325` → after: `L493-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L493-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L493-L512) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L325)

```diff
-       return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? MM.replace(NM, "") : MM.replace(YM, "$1")
+       if (UU instanceof IDBRequest) return function(UU) {
+         const XU = new Promise(((XU, zU) => {
+           const cU = () => {
+               UU.removeEventListener("success", yU), UU.removeEventListener("error", QU)
+             },
+             yU = () => {
+               XU(tU(UU.result)), cU()
+             },
+             QU = () => {
+               zU(UU.error), cU()
+             };
+           UU.addEventListener("success", yU), UU.addEventListener("error", QU)
+         }));
+         return XU.then((XU => {
+           XU instanceof IDBCursor && oU.set(XU, UU)
+         })).catch((() => {})), NU.set(XU, UU), XU
+ ... (4 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L329-L377` → after: `L520-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L520-L532) · [Before (L329-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L329-L377)

```diff
-       return function(MM, rM) {
-         let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         const OM = Array.from(rM.childNodes),
-           SM = [];
-         let jM = 0;
-         if (OM.length > 1 && MM && "string" === typeof MM) {
-           let rM = AM(MM, iM);
-           const aM = rM.length / MM.length;
-           for (let PM = 1; PM < OM.length; PM++)
-             if (OM[PM].textContent && "string" === typeof OM[PM].textContent) {
-               const nM = AM(OM[PM].textContent, iM),
-                 QM = 100;
-               let zM = 3;
-               for (; zM < nM.length && (nM[zM].match(/[a-zA-Z0-9]/) || -1 !== nM.indexOf(nM.substring(0, zM), 1)); zM++);
-               for (; zM < nM.length; zM++) {
-                 let LM = nM.substring(0, zM),
- ... (33 more removed lines; see GitHub link above)
+       if (!(UU instanceof IDBDatabase) || XU in UU || "string" !== typeof XU) return;
+       if (BU.get(XU)) return BU.get(XU);
+       const zU = XU.replace(/FromIndex$/, ""),
+         cU = XU !== zU,
+         yU = GU.includes(zU);
+       if (!(zU in (cU ? IDBIndex : IDBObjectStore).prototype) || !yU && !kU.includes(zU)) return;
+       const QU = async function(UU) {
+         const XU = this.transaction(UU, yU ? "readwrite" : "readonly");
+         let QU = XU.store;
+         for (var AU = arguments.length, FU = new Array(AU > 1 ? AU - 1 : 0), oU = 1; oU < AU; oU++) FU[oU - 1] = arguments[oU];
+         return cU && (QU = QU.index(FU.shift())), (await Promise.all([QU[zU](...FU), yU && XU.done]))[0]
+       };
+       return BU.set(XU, QU), QU
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L379-L380` → after: `L534-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L534-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L534-L613) · [Before (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L379-L380)

```diff
-     let vM = 1;
-     const FM = new RegExp("[^a-z0-9-_:]");
+     IU = (UU => ({
+       ...UU,
+       get: (XU, zU, cU) => ZU(XU, zU) || UU.get(XU, zU, cU),
+       has: (XU, zU) => !!ZU(XU, zU) || UU.has(XU, zU)
+     }))(IU);
+     class RU {
+       constructor(UU) {
+         this.container = UU
+       }
+       getPlatformInfoString() {
+         return this.container.getProviders().map((UU => {
+           if (function(UU) {
+               const XU = UU.getComponent();
+               return "VERSION" === (null === XU || void 0 === XU ? void 0 : XU.type)
+             }(UU)) {
+             const XU = UU.getImmediate();
+ ... (64 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L382-L383` → after: `L615-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L615-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L615-L620) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L382-L383)

```diff
-     function BM() {
-       return vM++
+     function zX(UU, XU) {
+       try {
+         UU.container.sH(XU)
+       } catch (zU) {
+         dU.debug(`Component ${XU.name} failed to register with FirebaseApp ${UU.name}`, zU)
+       }
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L391` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L624) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L391)

```diff
-       return rM && "" !== rM.trim() ? Mr(MM, rM) : rM
+       UU.container.addOrOverwriteComponent(XU)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L395` → after: `L628-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L628-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L628-L632) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L395)

```diff
-       return Boolean("svg" === MM.tagName || MM.ownerSVGElement)
+       const XU = UU.name;
+       if (XX.has(XU)) return dU.debug(`There were multiple attempts to register component ${XU}.`), !1;
+       XX.set(XU, UU);
+       for (const zU of UX.values()) zX(zU, UU);
+       return !0
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L399-L403` → after: `L636-L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L636-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L636-L639) · [Before (L399-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L399-L403)

```diff
-       let iM = TM.get(MM);
-       if (iM || (iM = MM.createElement("a"), TM.set(MM, iM)), rM) {
-         if (rM.startsWith("blob:") || rM.startsWith("data:")) return rM
-       } else rM = "";
-       return iM.setAttribute("href", rM), iM.href
+       const zU = UU.container.getProvider("heartbeat").getImmediate({
+         optional: !0
+       });
+       return zU && zU.triggerHeartbeat(), UU.container.getProvider(XU)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L406-L443` → after: `L642-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L642-L644) · [Before (L406-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L406-L443)

```diff
-     function rr(MM, rM, iM, OM) {
-       return OM ? "src" === iM || "href" === iM && ("use" !== rM || "#" !== OM[0]) || "xlink:href" === iM && "#" !== OM[0] || "background" === iM && ["table", "td", "th"].includes(rM) ? VM(MM, OM) : "srcset" === iM ? function(MM, rM) {
-         if ("" === rM.trim()) return rM;
-         let iM = 0;
- 
-         function OM(MM) {
-           let OM;
-           const SM = MM.exec(rM.substring(iM));
-           return SM ? (OM = SM[0], iM += OM.length, OM) : ""
-         }
-         const SM = [];
-         for (; OM(qM), !(iM >= rM.length);) {
-           let jM = OM(KM);
-           if ("," === jM.slice(-1)) jM = VM(MM, jM.substring(0, jM.length - 1)), SM.push(jM);
-           else {
-             let OM = "";
- ... (22 more removed lines; see GitHub link above)
+     function AX(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TU;
+       QX(UU, XU).clearInstance(zU)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L446-L447` → after: `L647-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L647-L648) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L446-L447)

```diff
-     function ir(MM, rM, iM) {
-       return ["video", "audio"].includes(MM) && "autoplay" === uM(rM)
+     function FX() {
+       XX.clear()
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L449-L455` → after: `L650-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L650-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L650-L666) · [Before (L449-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L449-L455)

```diff
- 
-     function Or(MM, rM, iM) {
-       if (!MM) return !1;
-       if (MM.nodeType !== MM.ELEMENT_NODE) return !!iM && Or(EM.parentNode(MM), rM, iM);
-       for (let OM = MM.classList.length; OM--;) {
-         const iM = MM.classList[OM];
-         if (rM.test(iM)) return !0
+     const oX = {
+         "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
+         "bad-app-name": "Illegal App name: '{$appName}",
+         "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
+         "app-deleted": "Firebase App named '{$appName}' already deleted",
+         "no-options": "Need to provide options, when not being deployed to hosting via source.",
+         "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
+         "invalid-log-argument": "First argument to `onLog` must be null or a function.",
+         "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
+         "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
+         "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
+         "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
+       },
+       DX = new QU.f("app", "Firebase", oX);
+     class EX {
+       constructor(UU, XU, zU) {
+ ... (1 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L457-L466` → after: `L668-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L668-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L668-L695) · [Before (L457-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L457-L466)

```diff
-       return !!iM && Or(EM.parentNode(MM), rM, iM)
-     }
- 
-     function Sr(MM, rM, iM, OM) {
-       let SM;
-       if (UM(MM)) {
-         if (SM = MM, !EM.childNodes(SM).length) return !1
-       } else {
-         if (null === EM.parentElement(MM)) return !1;
-         SM = EM.parentElement(MM)
+       get automaticDataCollectionEnabled() {
+         return this.checkDestroyed(), this._automaticDataCollectionEnabled
+       }
+       set automaticDataCollectionEnabled(UU) {
+         this.checkDestroyed(), this._automaticDataCollectionEnabled = UU
+       }
+       get name() {
+         return this.checkDestroyed(), this._name
+       }
+       get options() {
+         return this.checkDestroyed(), this._options
+       }
+       get config() {
+         return this.checkDestroyed(), this._config
+       }
+       get container() {
+ ... (12 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L482-L8771` → after: `L700-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L700-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L700-L705) · [Before (L482-L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L482-L8771)

```diff
-     function jr(MM, rM) {
-       const {
-         doc: iM,
-         mirror: OM,
-         blockClass: SM,
-         blockSelector: jM,
-         needsMask: aM,
-         inlineStylesheet: PM,
-         maskInputOptions: QM = {},
-         maskTextFn: zM,
-         maskInputFn: LM,
-         dataURLOptions: mM = {},
-         inlineImages: HM,
-         recordCanvas: hM,
-         keepIframeSrcFn: JM,
-         newlyAddedElement: dM = !1,
- ... (8274 more removed lines; see GitHub link above)
+     function NX(UU) {
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         zU = UU;
+       if ("object" !== typeof XU) {
+         XU = {
+           name: XU
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L8849-L8956` → after: `L708-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L708-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L708-L714) · [Before (L8849-L8956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L8849-L8956)

```diff
-       if (DM && !rM) throw new Error("emit function is required");
-       if (!DM && !kM) return () => {};
-       void 0 !== UM && void 0 === lM.mousemove && (lM.mousemove = UM), uP.reset();
-       const ZM = !0 === LM ? {
-           color: !0,
-           date: !0,
-           "datetime-local": !0,
-           email: !0,
-           month: !0,
-           number: !0,
-           range: !0,
-           search: !0,
-           tel: !0,
-           text: !0,
-           time: !0,
-           url: !0,
- ... (92 more removed lines; see GitHub link above)
+       const yU = Object.assign({
+           name: TU,
+           automaticDataCollectionEnabled: !1
+         }, XU),
+         AU = yU.name;
+       if ("string" !== typeof AU || !AU) throw DX.create("bad-app-name", {
+         appName: String(AU)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L8958-L9344` → after: `L716-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L716-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L716-L721) · [Before (L8958-L9344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L8958-L9344)

```diff
-       const IM = new PP({
-         mutationCb: AM,
-         scrollCb: xM,
-         bypassOptions: {
-           blockClass: SM,
-           blockSelector: jM,
-           maskTextClass: nM,
-           maskTextSelector: QM,
-           inlineStylesheet: zM,
-           maskInputOptions: ZM,
-           dataURLOptions: EM,
-           maskTextFn: JM,
-           maskInputFn: hM,
-           recordCanvas: CM,
-           inlineImages: uM,
-           sampling: lM,
- ... (371 more removed lines; see GitHub link above)
+       if (zU || (zU = (0, QU.G)()), !zU) throw DX.create("no-options");
+       const FU = UX.get(AU);
+       if (FU) {
+         if ((0, QU.z)(zU, FU.options) && (0, QU.z)(yU, FU.config)) return FU;
+         throw DX.create("duplicate-app", {
+           appName: AU
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L9347-L9423` → after: `L724-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L724-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L724-L727) · [Before (L9347-L9423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L9347-L9423)

```diff
-     }
-     RP.addCustomEvent = (MM, rM) => {
-       if (!gP) throw new Error("please add custom event after start recording");
-       bP({
-         type: Ra.Custom,
-         data: {
-           tag: MM,
-           payload: rM
-         }
-       })
-     }, RP.freezePage = () => {
-       Ba.forEach((MM => MM.freeze()))
-     }, RP.takeFullSnapshot = MM => {
-       if (!gP) throw new Error("please take full snapshot after start recording");
-       wP(MM)
-     }, RP.mirror = uP;
- ... (61 more removed lines; see GitHub link above)
+       const oU = new cU.d(AU);
+       for (const cU of XX.values()) oU.sH(cU);
+       const DU = new EX(zU, yU, oU);
+       return UX.set(AU, DU), DU
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L9426-L9444` → after: `L730-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L730-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L730-L736) · [Before (L9426-L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L9426-L9444)

```diff
-     function DP(MM, rM) {
-       var iM = "function" == typeof Symbol && MM[Symbol.iterator];
-       if (!iM) return MM;
-       var OM, SM, jM = iM.call(MM),
-         aM = [];
-       try {
-         for (;
-           (void 0 === rM || rM-- > 0) && !(OM = jM.next()).done;) aM.push(OM.value)
-       } catch (PM) {
-         SM = {
-           error: PM
-         }
-       } finally {
-         try {
-           OM && !OM.done && (iM = jM.return) && iM.call(jM)
-         } finally {
- ... (3 more removed lines; see GitHub link above)
+     function IX() {
+       let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TU;
+       const XU = UX.get(UU);
+       if (!XU && UU === TU && (0, QU.G)()) return NX();
+       if (!XU) throw DX.create("no-app", {
+         appName: UU
+       });
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L9479-L9482` → after: `L740-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L740-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L740-L741) · [Before (L9479-L9482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L9479-L9482)

```diff
-     function xP(MM) {
-       return "string" == typeof MM ? {
-         type: MM
-       } : MM
+     function pX() {
+       return Array.from(UX.values())
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L9484-L9492` → after: `L743-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L743-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L743-L745) · [Before (L9484-L9492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L9484-L9492)

```diff
- 
-     function vP(MM, rM) {
-       return {
-         value: MM,
-         context: rM,
-         actions: [],
-         changed: !1,
-         matches: AP(MM)
-       }
+     async function aX(UU) {
+       const XU = UU.name;
+       UX.has(XU) && (UX.delete(XU), await Promise.all(UU.container.getProviders().map((UU => UU.delete()))), UU.isDeleted = !0)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L9496-L9507` → after: `L749-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L749-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L749-L761) · [Before (L9496-L9507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L9496-L9507)

```diff
-       var OM = rM,
-         SM = !1;
-       return [MM.filter((function(MM) {
-         if ("xstate.assign" === MM.type) {
-           SM = !0;
-           var rM = Object.assign({}, OM);
-           return "function" == typeof MM.assignment ? rM = MM.assignment(OM, iM) : Object.keys(MM.assignment).forEach((function(SM) {
-             rM[SM] = "function" == typeof MM.assignment[SM] ? MM.assignment[SM](OM, iM) : MM.assignment[SM]
-           })), OM = rM, !1
-         }
-         return !0
-       })), OM, SM]
+       var yU;
+       let QU = null !== (yU = hU[UU]) && void 0 !== yU ? yU : UU;
+       zU && (QU += `-${zU}`);
+       const AU = QU.match(/\s|\//),
+         FU = XU.match(/\s|\//);
+       if (AU || FU) {
+         const UU = [`Unable to register library "${QU}" with version "${XU}":`];
+         return AU && UU.push(`library name "${QU}" contains illegal characters (whitespace or "/")`), AU && FU && UU.push("and"), FU && UU.push(`version name "${XU}" contains illegal characters (whitespace or "/")`), void dU.warn(UU.join(" "))
+       }
+       yX(new cU.f(`${QU}-version`, (() => ({
+         library: QU,
+         version: XU
+       })), "VERSION"))
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L9511-L9602` → after: `L765-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L765-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L765-L766) · [Before (L9511-L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L9511-L9602)

```diff
-       void 0 === rM && (rM = {});
-       var iM = DP(FP(fP(MM.states[MM.initial].entry).map((function(MM) {
-           return NP(MM, rM.actions)
-         })), MM.context, oP), 2),
-         OM = iM[0],
-         SM = iM[1],
-         jM = {
-           config: MM,
-           _options: rM,
-           initialState: {
-             value: MM.initial,
-             actions: OM,
-             context: SM,
-             matches: AP(MM.initial)
-           },
-           transition: function(rM, iM) {
- ... (76 more removed lines; see GitHub link above)
+       if (null !== UU && "function" !== typeof UU) throw DX.create("invalid-log-argument");
+       (0, yU.j)(UU, XU)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L9612-L9819` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L770) · [Before (L9612-L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L9612-L9819)

```diff
-       var rM = MM.initialState,
-         iM = kP.NotStarted,
-         OM = new Set,
-         SM = {
-           _machine: MM,
-           send: function(SM) {
-             iM === kP.Running && (rM = MM.transition(rM, SM), XP(rM, xP(SM)), OM.forEach((function(MM) {
-               return MM(rM)
-             })))
-           },
-           subscribe: function(MM) {
-             return OM.add(MM), MM(rM), {
-               unsubscribe: function() {
-                 return OM.delete(MM)
-               }
-             }
- ... (192 more removed lines; see GitHub link above)
+       (0, yU.f)(UU)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L9822-L10089` → after: `L775-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L775-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L775-L776) · [Before (L9822-L10089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L9822-L10089)

```diff
-     function VP(MM, rM, iM) {
-       return async OM => {
-         if (OM && "object" === typeof OM && "rr_type" in OM) {
-           if (iM && (iM.isUnchanged = !1), "ImageBitmap" === OM.rr_type && "args" in OM) {
-             const SM = await VP(MM, rM, iM)(OM.args);
-             return await createImageBitmap.apply(null, SM)
-           }
-           if ("index" in OM) {
-             if (iM || null === rM) return OM;
-             const {
-               rr_type: MM,
-               index: SM
-             } = OM;
-             return TP(rM, MM)[SM]
-           }
-           if ("args" in OM) {
- ... (252 more removed lines; see GitHub link above)
+     function ZX() {
+       return BX || (BX = function(UU, XU) {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10091-L10143` → after: `L778-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L778-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L778-L811) · [Before (L10091-L10143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10091-L10143)

```diff
-           target: rM,
-           timeOffset: iM,
-           mutation: OM
-         } = MM;
-         this.mediaMap.set(rM, this.getMediaStateFromMutation({
-           target: rM,
-           timeOffset: iM,
-           mutation: OM
-         })), this.syncTargetWithState(rM)
-       }
-       isSupportedMediaElement(MM) {
-         return ["AUDIO", "VIDEO"].includes(MM.nodeName)
-       }
-       reset() {
-         this.mediaMap.clear()
-       }
- ... (37 more removed lines; see GitHub link above)
+           blocked: zU,
+           upgrade: cU,
+           blocking: yU,
+           terminated: QU
+         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const AU = indexedDB.open(UU, XU),
+           FU = tU(AU);
+         return cU && AU.addEventListener("upgradeneeded", (UU => {
+           cU(tU(AU.result), UU.oldVersion, UU.newVersion, tU(AU.transaction), UU)
+         })), zU && AU.addEventListener("blocked", (UU => zU(UU.oldVersion, UU.newVersion, UU))), FU.then((UU => {
+           QU && UU.addEventListener("close", (() => QU())), yU && UU.addEventListener("versionchange", (UU => yU(UU.oldVersion, UU.newVersion, UU)))
+         })).catch((() => {})), FU
+       }("firebase-heartbeat-database", 1, {
+         upgrade: (UU, XU) => {
+           if (0 === XU) UU.createObjectStore(GX)
+         }
+ ... (18 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10145-L10152` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L813-L814) · [Before (L10145-L10152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10145-L10152)

```diff
-       },
-       Pn = "[replayer]",
-       nn = {
-         duration: 500,
-         lineCap: "round",
-         lineWidth: 3,
-         strokeStyle: "red"
-       };
+       }
+     }
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10155` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L817) · [Before (L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10155)

```diff
-       return MM.type == Ra.IncrementalSnapshot && (MM.data.source == pa.TouchMove || MM.data.source == pa.MouseInteraction && MM.data.type == Wa.TouchStart)
+       return `${UU.name}!${UU.options.appId}`
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10158-L10163` → after: `L820-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L820-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L820-L845) · [Before (L10158-L10163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10158-L10163)

```diff
-       constructor(MM, rM) {
-         var iM = this;
-         if (jM(this, "wrapper"), jM(this, "iframe"), jM(this, "UNSAFE_replayCanvas", !1), jM(this, "service"), jM(this, "speedService"), jM(this, "config"), jM(this, "usingVirtualDom", !1), jM(this, "virtualDom", new bj), jM(this, "mouse"), jM(this, "mouseTail", null), jM(this, " … [truncated]
-             this.iframe.style.display = "inherit";
-             for (const rM of [this.mouseTail, this.iframe]) rM && (rM.setAttribute("width", String(MM.width)), rM.setAttribute("height", String(MM.height)))
-           })), jM(this, "applyEventsSynchronously", (MM => {
+       constructor(UU) {
+         this.container = UU, this._heartbeatsCache = null;
+         const XU = this.container.getProvider("app").getImmediate();
+         this.Ga = new LX(XU), this._heartbeatsCachePromise = this.Ga.read().then((UU => (this._heartbeatsCache = UU, UU)))
+       }
+       async triggerHeartbeat() {
+         const UU = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
+           XU = dX();
+         if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== XU && !this._heartbeatsCache.heartbeats.some((UU => UU.date === XU))) return this._heartbeatsCache.heartbeats.push({
+           date: XU,
+           agent: UU
+         }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((UU => {
+           const XU = new Date(UU.date).valueOf();
+           return Date.now() - XU <= 2592e6
+         })), this.Ga.overwrite(this._heartbeatsCache)
+       }
+ ... (10 more added lines; see GitHub link above)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10165-L10365` → after: `L847-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L847-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L847-L851) · [Before (L10165-L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10165-L10365)

```diff
-               switch (rM.type) {
-                 case Ra.DomContentLoaded:
-                 case Ra.Load:
-                   continue;
-                 case Ra.FullSnapshot:
-                 case Ra.Meta:
-                 case Ra.Plugin:
-                 case Ra.IncrementalSnapshot:
-               }
-               this.getCastFn(rM, !0)()
-             }
-           })), jM(this, "getCastFn", (function(MM) {
-             let rM, OM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             switch (MM.type) {
-               case Ra.DomContentLoaded:
-               case Ra.Load:
- ... (185 more removed lines; see GitHub link above)
+               const UU = zU.find((UU => UU.agent === yU.agent));
+               if (UU) {
+                 if (UU.dates.push(yU.date), eX(zU) > XU) {
+                   UU.dates.pop();
+                   break
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10369-L10379` → after: `L862-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L862-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L862-L864) · [Before (L10369-L10379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10369-L10379)

```diff
-           }
-         }, {
-           actions: {
-             setSpeed: (MM, rM) => {
-               "payload" in rM && MM.timer.setSpeed(rM.payload.speed)
-             },
-             recordSpeed: YP({
-               normalSpeed: MM => MM.timer.speed
-             }),
-             restoreSpeed: MM => {
-               MM.timer.setSpeed(MM.normalSpeed)
+             return {
+               heartbeatsToSend: zU,
+               unsentEntries: cU
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10381-L10413` → after: `L866-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L866-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L866-L871) · [Before (L10381-L10413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10381-L10413)

```diff
-           }
-         })), this.speedService.start(), this.speedService.subscribe((MM => {
-           this.emitter.emit(Za.StateChange, {
-             speed: MM
-           })
-         })), this.mediaManager = new On({
-           warn: this.warn.bind(this),
-           service: this.service,
-           speedService: this.speedService,
-           emitter: this.emitter,
-           getCurrentTime: this.getCurrentTime.bind(this)
-         });
-         const aM = this.service.state.context.events.find((MM => MM.type === Ra.Meta)),
-           PM = this.service.state.context.events.find((MM => MM.type === Ra.FullSnapshot));
-         if (aM) {
-           const {
- ... (17 more removed lines; see GitHub link above)
+           }(this._heartbeatsCache.heartbeats),
+           cU = (0, QU.s)(JSON.stringify({
+             version: 2,
+             heartbeats: XU
+           }));
+         return this._heartbeatsCache.lastSentHeartbeatDate = UU, zU.length > 0 ? (this._heartbeatsCache.heartbeats = zU, await this.Ga.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.Ga.overwrite(this._heartbeatsCache)), cU
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10415-L10416` → after: `L873-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L873-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L873-L880) · [Before (L10415-L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10415-L10416)

```diff
-       on(MM, rM) {
-         return this.emitter.on(MM, rM), this
+     }
+ 
+     function dX() {
+       return (new Date).toISOString().substring(0, 10)
+     }
+     class LX {
+       constructor(UU) {
+         this.app = UU, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10418-L10419` → after: `L882-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L882-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L882-L883) · [Before (L10418-L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10418-L10419)

```diff
-       off(MM, rM) {
-         return this.emitter.off(MM, rM), this
+       async runIndexedDBEnvironmentCheck() {
+         return !!(0, QU.fb)() && (0, QU.tb)().then((() => !0)).catch((() => !1))
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10421-L10427` → after: `L885-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L885-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L885-L901) · [Before (L10421-L10427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10421-L10427)

```diff
-       setConfig(MM) {
-         Object.keys(MM).forEach((rM => {
-           MM[rM], this.config[rM] = MM[rM]
-         })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof MM.speed && this.speedService.send({
-           type: "SET_SPEED",
-           payload: {
-             speed: MM.speed
+       async read() {
+         if (await this._canUseIndexedDBPromise) {
+           return await async function(UU) {
+             try {
+               const XU = await ZX();
+               return await XU.transaction(GX).objectStore(GX).get(PX(UU))
+             } catch (XU) {
+               if (XU instanceof QU.j) dU.warn(XU.message);
+               else {
+                 const UU = DX.create("idb-get", {
+                   originalErrorMessage: null === XU || void 0 === XU ? void 0 : XU.message
+                 });
+                 dU.warn(UU.message)
+               }
+             }
+           }(this.app) || {
+ ... (1 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10429-L10433` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L903) · [Before (L10429-L10433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10429-L10433)

```diff
-         }), "undefined" !== typeof MM.mouseTail && (!1 === MM.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail … [truncated]
-       }
-       getMetaData() {
-         const MM = this.service.state.context.events[0],
-           rM = this.service.state.context.events[this.service.state.context.events.length - 1];
+         }
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10435-L10437` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L905) · [Before (L10435-L10437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10435-L10437)

```diff
-           startTime: MM.timestamp,
-           endTime: rM.timestamp,
-           totalTime: rM.timestamp - MM.timestamp
+           heartbeats: []
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10440-L10441` → after: `L908-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L908-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L908-L916) · [Before (L10440-L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10440-L10441)

```diff
-       getCurrentTime() {
-         return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
+       async overwrite(UU) {
+         var XU;
+         if (await this._canUseIndexedDBPromise) {
+           const zU = await this.read();
+           return RX(this.app, {
+             lastSentHeartbeatDate: null !== (XU = UU.lastSentHeartbeatDate) && void 0 !== XU ? XU : zU.lastSentHeartbeatDate,
+             heartbeats: UU.heartbeats
+           })
+         }
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10443-L10448` → after: `L918-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L918-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L918-L926) · [Before (L10443-L10448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10443-L10448)

```diff
-       getTimeOffset() {
-         const {
-           baselineTime: MM,
-           events: rM
-         } = this.service.state.context;
-         return MM - rM[0].timestamp
+       async add(UU) {
+         var XU;
+         if (await this._canUseIndexedDBPromise) {
+           const zU = await this.read();
+           return RX(this.app, {
+             lastSentHeartbeatDate: null !== (XU = UU.lastSentHeartbeatDate) && void 0 !== XU ? XU : zU.lastSentHeartbeatDate,
+             heartbeats: [...zU.heartbeats, ...UU.heartbeats]
+           })
+         }
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10450-L10451` → after: `L928-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L928-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L928-L947) · [Before (L10450-L10451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10450-L10451)

```diff
-       getMirror() {
-         return this.mirror
+     }
+ 
+     function eX(UU) {
+       return (0, QU.s)(JSON.stringify({
+         version: 2,
+         heartbeats: UU
+       })).length
+     }
+     var CX;
+     CX = "", yX(new cU.f("platform-logger", (UU => new RU(UU)), "PRIVATE")), yX(new cU.f("heartbeat", (UU => new WX(UU)), "PRIVATE")), tX(PU, WU, CX), tX(PU, WU, "esm2017"), tX("fire-js", "")
+   },
+   41590: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => FU,
+       f: () => yU
+     });
+ ... (4 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10453-L10463` → after: `L949-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L949-L950) · [Before (L10453-L10463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10453-L10463)

```diff
-       play() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         var rM, iM;
-         this.service.state.matches("paused") || this.service.send({
-           type: "PAUSE"
-         }), this.service.send({
-           type: "PLAY",
-           payload: {
-             timeOffset: MM
-           }
-         }), null == (iM = null == (rM = this.iframe.contentDocument) ? void 0 : rM.getElementsByTagName("html")[0]) || iM.classList.remove("rrweb-paused"), this.emitter.emit(Za.Start)
+       setInstantiationMode(UU) {
+         return this.instantiationMode = UU, this
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10465-L10471` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L952-L953) · [Before (L10465-L10471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10465-L10471)

```diff
-       pause(MM) {
-         var rM, iM;
-         void 0 === MM && this.service.state.matches("playing") && this.service.send({
-           type: "PAUSE"
-         }), "number" === typeof MM && (this.play(MM), this.service.send({
-           type: "PAUSE"
-         })), null == (iM = null == (rM = this.iframe.contentDocument) ? void 0 : rM.getElementsByTagName("html")[0]) || iM.classList.add("rrweb-paused"), this.emitter.emit(Za.Pause)
+       setMultipleInstances(UU) {
+         return this.multipleInstances = UU, this
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10473-L10475` → after: `L955-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L955-L956) · [Before (L10473-L10475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10473-L10475)

```diff
-       resume() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(MM), this.emitter.emit(Za.Resume)
+       setServiceProps(UU) {
+         return this.serviceProps = UU, this
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10477-L10478` → after: `L958-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L958-L959) · [Before (L10477-L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10477-L10478)

```diff
-       destroy() {
-         this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(Za.Destroy)
+       setInstanceCreatedCallback(UU) {
+         return this.onInstanceCreated = UU, this
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10480-L10486` → after: `L961-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L961-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L961-L978) · [Before (L10480-L10486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10480-L10486)

```diff
-       startLive(MM) {
-         this.service.send({
-           type: "TO_LIVE",
-           payload: {
-             baselineTime: MM
-           }
-         })
+     }
+     const QU = "[DEFAULT]";
+     class AU {
+       constructor(UU, XU) {
+         this.name = UU, this.container = XU, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
+       }
+       get(UU) {
+         const XU = this.normalizeInstanceIdentifier(UU);
+         if (!this.instancesDeferred.has(XU)) {
+           const UU = new cU.c;
+           if (this.instancesDeferred.set(XU, UU), this.isInitialized(XU) || this.shouldAutoInitialize()) try {
+             const zU = this.getOrInitializeService({
+               instanceIdentifier: XU
+             });
+             zU && UU.resolve(zU)
+           } catch (zU) {}
+ ... (2 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10488-L10495` → after: `L980-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L980-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L980-L995) · [Before (L10488-L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10488-L10495)

```diff
-       addEvent(MM) {
-         const rM = this.config.unpackFn ? this.config.unpackFn(MM) : MM;
-         Qn(rM) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
-           type: "ADD_EVENT",
-           payload: {
-             event: rM
-           }
-         })))
+       getImmediate(UU) {
+         var XU;
+         const zU = this.normalizeInstanceIdentifier(null === UU || void 0 === UU ? void 0 : UU.identifier),
+           cU = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.optional) && void 0 !== XU && XU;
+         if (!this.isInitialized(zU) && !this.shouldAutoInitialize()) {
+           if (cU) return null;
+           throw Error(`Service ${this.name} is not available`)
+         }
+         try {
+           return this.getOrInitializeService({
+             instanceIdentifier: zU
+           })
+         } catch (yU) {
+           if (cU) return null;
+           throw yU
+         }
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10497-L10498` → after: `L997-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L997-L998) · [Before (L10497-L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10497-L10498)

```diff
-       enableInteract() {
-         this.iframe.setAttribute("scrolling", "auto"), this.iframe.style.pointerEvents = "auto"
+       getComponent() {
+         return this.component
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10500-L10501` → after: `L1000-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1000-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1000-L1020) · [Before (L10500-L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10500-L10501)

```diff
-       disableInteract() {
-         this.iframe.setAttribute("scrolling", "no"), this.iframe.style.pointerEvents = "none"
+       setComponent(UU) {
+         if (UU.name !== this.name) throw Error(`Mismatching Component ${UU.name} for Provider ${this.name}.`);
+         if (this.component) throw Error(`Component for ${this.name} has already been provided`);
+         if (this.component = UU, this.shouldAutoInitialize()) {
+           if (function(UU) {
+               return "EAGER" === UU.instantiationMode
+             }(UU)) try {
+             this.getOrInitializeService({
+               instanceIdentifier: QU
+             })
+           } catch (XU) {}
+           for (const [UU, zU] of this.instancesDeferred.entries()) {
+             const cU = this.normalizeInstanceIdentifier(UU);
+             try {
+               const UU = this.getOrInitializeService({
+                 instanceIdentifier: cU
+ ... (5 more added lines; see GitHub link above)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10503-L10504` → after: `L1022-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1022-L1024) · [Before (L10503-L10504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10503-L10504)

```diff
-       resetCache() {
-         this.cache = ci()
+       clearInstance() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QU;
+         this.instancesDeferred.delete(UU), this.instancesOptions.delete(UU), this.instances.delete(UU)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10506-L10518` → after: `L1026-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1026-L1028) · [Before (L10506-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10506-L10518)

```diff
-       setupDom() {
-         this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== t … [truncated]
-           var rM;
-           if (!MM.root.isConnected) throw new Error(MO);
-           const iM = MM.root.ownerDocument.createElement("iframe");
-           for (const [SM, jM] of Object.entries(MM.iframeAttributes || {})) "sandbox" !== SM && iM.setAttribute(SM, jM);
-           iM.setAttribute("sandbox", "allow-same-origin"), MM.root.appendChild(iM);
-           const OM = iM.contentDocument;
-           if (!OM || !iM.contentWindow) throw null == (rM = iM.parentNode) || rM.removeChild(iM), new Error(MO);
-           return rO.add(OM), iM
-         }({
-           root: this.wrapper
-         }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (pP(this.iframe.contentWindow, this.iframe.contentDocument), ha(this.iframe.contentWindow))
+       async delete() {
+         const UU = Array.from(this.instances.values());
+         await Promise.all([...UU.filter((UU => "INTERNAL" in UU)).map((UU => UU.INTERNAL.delete())), ...UU.filter((UU => "_delete" in UU)).map((UU => UU._delete()))])
```
