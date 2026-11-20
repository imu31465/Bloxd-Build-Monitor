# Changed — Bundle Modifications Report (Part 015 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `15 / 58` (**309** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 014](part-014.md) · [Part 016 →](part-016.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/251.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/251.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e)

#### 19. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L78-L91` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L93-L94) · [Before (L78-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L78-L91)

```diff
-       }
-     }
-   },
-   39444: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => iz,
-       h: () => nz
-     });
-     var Ez = bz(39446);
- 
-     function nz(zz) {
-       return class extends zz {
-         constructor() {
-           super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING … [truncated]
+         set includeOnlyWithLayerMask(qq) {
+           this._includeOnlyWithLayerMask = qq, this._resyncMeshes()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L93-L134` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L96-L97) · [Before (L93-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L93-L134)

```diff
-       }
-     }
-     class iz extends Ez.e {
-       constructor() {
-         super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this. … [truncated]
-       }
-     }
-   },
-   39530: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => pz
-     });
-     var Ez = bz(39170),
-       nz = bz(39451),
-       iz = bz(39172),
-       lz = bz(39513),
- ... (26 more removed lines; see GitHub link above)
+         get lightmapMode() {
+           return this._lightmapMode
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L136-L137` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L99-L100) · [Before (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L136-L137)

```diff
-         set texture(zz) {
-           (0, Ez.g)(this, uz, zz, "f")
+         set lightmapMode(qq) {
+           this._lightmapMode !== qq && (this._lightmapMode = qq, this._markMeshesAsLightDirty())
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L139-L140` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L102-L103) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L139-L140)

```diff
-         get normalBlendMethod() {
-           return (0, Ez.c)(this, bz, "f")
+         getViewMatrix(qq) {
+           return null
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L142-L143` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L105-L106) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L142-L143)

```diff
-         set normalBlendMethod(zz) {
-           (0, Ez.g)(this, bz, zz, "f")
+         getProjectionMatrix(qq, Eq) {
+           return null
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L145-L146` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L108-L109) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L145-L146)

```diff
-         get isEnabled() {
-           return (0, Ez.c)(this, Mz, "f")
+         constructor(gq, lq, Oq) {
+           super(gq, lq, !1), this.diffuse = ((0, Yq.i)(this, vq), (0, Yq.i)(this, hq, new mq.d(1, 1, 1))), this.specular = ((0, Yq.i)(this, nq), (0, Yq.i)(this, bq, new mq.d(1, 1, 1))), this.falloffType = ((0, Yq.i)(this, iq), (0, Yq.i)(this, Zq, qq.FALLOFF_DEFAULT)), this.intens … [truncated]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L148-L149` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L111-L112) · [Before (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L148-L149)

```diff
-         set isEnabled(zz) {
-           (0, Ez.g)(this, Mz, zz, "f")
+         transferTexturesToEffect(qq, Eq) {
+           return this
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L151-L152` → after: `L114-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L114-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L114-L127) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L151-L152)

```diff
-         _markAllSubMeshesAsTexturesDirty() {
-           this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
+         _bindLight(qq, Eq, gq, Yq) {
+           let lq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
+           const Oq = qq.toString();
+           let xq = !1;
+           if (this._uniformBuffer.bindToEffect(gq, "Light" + Oq), this._renderId !== Eq.getRenderId() || this._lastUseSpecular !== Yq || !this._uniformBuffer.useUbo) {
+             this._renderId = Eq.getRenderId(), this._lastUseSpecular = Yq;
+             const qq = this.getScaledIntensity();
+             this.transferToEffect(gq, Oq), this.diffuse.scaleToRef(qq, mq.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", mq.k.Color3[0], this.range, Oq), Yq && (this.specular.scaleToRef(qq, mq.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", mq.k. … [truncated]
+           }
+           if (this.transferTexturesToEffect(gq, Oq), Eq.shadowsEnabled && this.shadowEnabled && lq) {
+             const qq = this.getShadowGenerator(Eq.activeCamera) ?? this.getShadowGenerator();
+             qq && (qq.bindShadowLight(Oq, gq), xq = !0)
+           }
+           xq ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L154-L155` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L129-L130) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L154-L155)

```diff
-         isCompatible() {
-           return !0
+         getClassName() {
+           return "Light"
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L157-L159` → after: `L132-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L132-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L132-L136) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L157-L159)

```diff
-         constructor(zz) {
-           let iz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           super(zz, "DetailMap", 140, new Oz, iz), this._texture = null, uz.set(this, (0, Ez.j)(this, Xz, void 0)), this.diffuseBlendLevel = ((0, Ez.j)(this, fz), (0, Ez.j)(this, sz, 1)), this.roughnessBlendLevel = ((0, Ez.j)(this, rz), (0, Ez.j)(this, oz, 1)), this.bumpLevel = ( … [truncated]
+         toString(qq) {
+           let Eq = "Name: " + this.name;
+           if (Eq += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
+             for (let gq = 0; gq < this.animations.length; gq++) Eq += ", animation[0]: " + this.animations[gq].toString(qq);
+           return Eq
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L161-L162` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L138-L139) · [Before (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L161-L162)

```diff
-         isReadyForSubMesh(zz, uz, bz) {
-           return !this._isEnabled || !(zz._areTexturesDirty && uz.texturesEnabled && bz.getCaps().standardDerivatives && this._texture && lz.d.DetailTextureEnabled && !this._texture.isReady())
+         _syncParentEnabledState() {
+           super._syncParentEnabledState(), this.bM() || this._resyncMeshes()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L164-L169` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L141-L142) · [Before (L164-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L164-L169)

```diff
-         prepareDefines(zz, uz) {
-           if (this._isEnabled) {
-             zz.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
-             const bz = uz.uR();
-             zz._areTexturesDirty && (bz.getCaps().standardDerivatives && this._texture && lz.d.DetailTextureEnabled && this._isEnabled ? ((0, Hz.db)(this._texture, zz, "DETAIL"), zz.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : zz.DETAIL = !1)
-           } else zz.DETAIL = !1
+         hG(qq) {
+           super.hG(qq), this._resyncMeshes()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L171-L174` → after: `L144-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L144-L146) · [Before (L171-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L171-L174)

```diff
-         bindForSubMesh(zz, uz) {
-           if (!this._isEnabled) return;
-           const bz = this._material.isFrozen;
-           zz.useUbo && bz && zz.isSync || this._texture && lz.d.DetailTextureEnabled && (zz.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Hz.B)(this._texture, zz, "detail")), uz.texturesEnabled  … [truncated]
+         getShadowGenerator() {
+           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return null === this._shadowGenerators ? null : this._shadowGenerators.get(qq) ?? null
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L176-L177` → after: `L148-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L148-L149) · [Before (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L176-L177)

```diff
-         hasTexture(zz) {
-           return this._texture === zz
+         getShadowGenerators() {
+           return this._shadowGenerators
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L179-L180` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L151-L152) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L179-L180)

```diff
-         getActiveTextures(zz) {
-           this._texture && zz.push(this._texture)
+         getAbsolutePosition() {
+           return Oq.q.Zero()
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L182-L183` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L154-L155) · [Before (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L182-L183)

```diff
-         getAnimatables(zz) {
-           this._texture && this._texture.animations && this._texture.animations.length > 0 && zz.push(this._texture)
+         canAffectMesh(qq) {
+           return !qq || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(qq)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(qq)) && ((0 === this.includeOnlyWithLayerMask | … [truncated]
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L186` → after: `L158-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L158-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L158-L295) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L186)

```diff
-           zz && this._texture?.dispose()
+           let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           if (this._shadowGenerators) {
+             const qq = this._shadowGenerators.values();
+             for (let Eq = qq.next(); !0 !== Eq.done; Eq = qq.next()) {
+               Eq.value.dispose()
+             }
+             this._shadowGenerators = null
+           }
+           if (this.ZJ().stopAnimation(this), this._parentContainer) {
+             const qq = this._parentContainer.lights.indexOf(this);
+             qq > -1 && this._parentContainer.lights.splice(qq, 1), this._parentContainer = null
+           }
+           for (const gq of this.ZJ().meshes) gq._removeLightSource(this, !0);
+           this._uniformBuffer.dispose(), this.ZJ().removeLight(this), super.dispose(qq, Eq)
+         }
+         getTypeID() {
+ ... (122 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L188-L189` → after: `L297-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L297-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L297-L299) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L188-L189)

```diff
-         getClassName() {
-           return "DetailMapConfiguration"
+         _reorderLightsInScene() {
+           const qq = this.ZJ();
+           0 != this._renderPriority && (qq.requireLightSorting = !0), this.ZJ().sortLightsByPriority()
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L191-L192` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L301-L302) · [Before (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L191-L192)

```diff
-         getSamplers(zz) {
-           zz.push("detailSampler")
+         areLightTexturesReady() {
+           return !0
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L194-L205` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L304-L305) · [Before (L194-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L194-L205)

```diff
-         getUniforms() {
-           return {
-             ubo: [{
-               name: "vDetailInfos",
-               size: 4,
-               type: "vec4"
-             }, {
-               name: "detailMatrix",
-               size: 16,
-               type: "mat4"
-             }]
-           }
+         _isReady() {
+           return !0
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L207` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L307) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L207)

```diff
-       }, uz = new WeakMap, bz = new WeakMap, Mz = new WeakMap, (() => {
+       }, Eq = new WeakMap, (() => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L209` → after: `L309-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L309-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L309-L339) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L209)

```diff
-         pz = [(0, iz.B)("detailTexture"), (0, iz.i)("_markAllSubMeshesAsTexturesDirty")], dz = [(0, iz.G)()], Fz = [(0, iz.G)()], Zz = [(0, iz.G)()], Rz = [(0, iz.G)(), (0, iz.i)("_markAllSubMeshesAsTexturesDirty")], Kz = [(0, iz.G)(), (0, iz.i)("_markAllSubMeshesAsTexturesDirty" … [truncated]
+         gq = [(0, lq.o)()], Wq = [(0, lq.o)()], Nq = [(0, lq.M)()], aq = [(0, lq.M)()], Vq = [(0, lq.M)()], dq = [(0, lq.M)()], jq = [(0, lq.M)()], Hq = [(0, lq.M)()], oq = [(0, lq.f)("_reorderLightsInScene")], Pq = [(0, lq.M)("shadowEnabled")], Qq = [(0, lq.M)("excludeWithLayerM … [truncated]
+           kind: "getter",
+           name: "range",
+           static: !1,
+           private: !1,
+           access: {
+             has: qq => "range" in qq,
+             get: qq => qq.range
+           },
+           metadata: Eq
+         }, null, vq), (0, Yq.f)(qq, null, dq, {
+           kind: "getter",
+           name: "intensityMode",
+           static: !1,
+           private: !1,
+           access: {
+ ... (15 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L211` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L341) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L211)

```diff
-           name: "texture",
+           name: "renderPriority",
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L215-L216` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L345-L346) · [Before (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L215-L216)

```diff
-             has: zz => "texture" in zz,
-             get: zz => zz.texture,
+             has: qq => "renderPriority" in qq,
+             get: qq => qq.renderPriority,
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L218` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L348) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L218)

```diff
-               zz.texture = uz
+               qq.renderPriority = Eq
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L222-L224` → after: `L352-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L352-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L352-L354) · [Before (L222-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L222-L224)

```diff
-         }, Xz, fz), (0, Ez.h)(zz, null, Rz, {
-           kind: "accessor",
-           name: "normalBlendMethod",
+         }, pq, Gq), (0, Yq.f)(null, null, gq, {
+           kind: "field",
+           name: "diffuse",
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L228-L229` → after: `L358-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L358-L359) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L228-L229)

```diff
-             has: zz => "normalBlendMethod" in zz,
-             get: zz => zz.normalBlendMethod,
+             has: qq => "diffuse" in qq,
+             get: qq => qq.diffuse,
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L231` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L361) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L231)

```diff
-               zz.normalBlendMethod = uz
+               qq.diffuse = Eq
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L235-L237` → after: `L365-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L365-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L365-L419) · [Before (L235-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L235-L237)

```diff
-         }, Jz, Az), (0, Ez.h)(zz, null, Kz, {
-           kind: "accessor",
-           name: "isEnabled",
+         }, hq, nq), (0, Yq.f)(null, null, Wq, {
+           kind: "field",
+           name: "specular",
+           static: !1,
+           private: !1,
+           access: {
+             has: qq => "specular" in qq,
+             get: qq => qq.specular,
+             set: (qq, Eq) => {
+               qq.specular = Eq
+             }
+           },
+           metadata: Eq
+         }, bq, iq), (0, Yq.f)(null, null, Nq, {
+           kind: "field",
+           name: "falloffType",
+ ... (39 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L241-L242` → after: `L423-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L423-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L423-L424) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L241-L242)

```diff
-             has: zz => "isEnabled" in zz,
-             get: zz => zz.isEnabled,
+             has: qq => "_shadowEnabled" in qq,
+             get: qq => qq._shadowEnabled,
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L244` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L426) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L244)

```diff
-               zz.isEnabled = uz
+               qq._shadowEnabled = Eq
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L248` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L430) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L248)

```diff
-         }, Tz, Lz), (0, Ez.h)(null, null, dz, {
+         }, Lq, Jq), (0, Yq.f)(null, null, Qq, {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L250` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L432) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L250)

```diff
-           name: "diffuseBlendLevel",
+           name: "_excludeWithLayerMask",
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L254-L255` → after: `L436-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L436-L437) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L254-L255)

```diff
-             has: zz => "diffuseBlendLevel" in zz,
-             get: zz => zz.diffuseBlendLevel,
+             has: qq => "_excludeWithLayerMask" in qq,
+             get: qq => qq._excludeWithLayerMask,
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L257` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L439) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L257)

```diff
-               zz.diffuseBlendLevel = uz
+               qq._excludeWithLayerMask = Eq
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L261` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L443) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L261)

```diff
-         }, sz, rz), (0, Ez.h)(null, null, Fz, {
+         }, kq, Rq), (0, Yq.f)(null, null, yq, {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L263` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L445) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L263)

```diff
-           name: "roughnessBlendLevel",
+           name: "_includeOnlyWithLayerMask",
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L267-L268` → after: `L449-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L449-L450) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L267-L268)

```diff
-             has: zz => "roughnessBlendLevel" in zz,
-             get: zz => zz.roughnessBlendLevel,
+             has: qq => "_includeOnlyWithLayerMask" in qq,
+             get: qq => qq._includeOnlyWithLayerMask,
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L270` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L452) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L270)

```diff
-               zz.roughnessBlendLevel = uz
+               qq._includeOnlyWithLayerMask = Eq
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L274` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L456) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L274)

```diff
-         }, oz, Nz), (0, Ez.h)(null, null, Zz, {
+         }, Uq, Fq), (0, Yq.f)(null, null, tq, {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L276` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L458) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L276)

```diff
-           name: "bumpLevel",
+           name: "_lightmapMode",
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L280-L281` → after: `L462-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L462-L463) · [Before (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L280-L281)

```diff
-             has: zz => "bumpLevel" in zz,
-             get: zz => zz.bumpLevel,
+             has: qq => "_lightmapMode" in qq,
+             get: qq => qq._lightmapMode,
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L283` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L465) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L283)

```diff
-               zz.bumpLevel = uz
+               qq._lightmapMode = Eq
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L293` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L475) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L293)

```diff
-       })(), zz
+       })(), qq.FALLOFF_DEFAULT = uq.c.FALLOFF_DEFAULT, qq.FALLOFF_PHYSICAL = uq.c.FALLOFF_PHYSICAL, qq.FALLOFF_GLTF = uq.c.FALLOFF_GLTF, qq.FALLOFF_STANDARD = uq.c.FALLOFF_STANDARD, qq.LIGHTMAP_DEFAULT = uq.c.LIGHTMAP_DEFAULT, qq.LIGHTMAP_SPECULAR = uq.c.LIGHTMAP_SPECULAR, qq.LIG … [truncated]
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L296` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L478) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L296)

```diff
-   39446: (zz, uz, bz) => {
+   39960: (qq, Eq, gq) => {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L298` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L480) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L298)

```diff
-       e: () => Ez
+       c: () => Bq
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L301-L343` → after: `L490-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L490-L491) · [Before (L301-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L301-L343)

```diff
-       constructor(zz) {
-         if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, … [truncated]
-           for (const uz in zz) Object.prototype.hasOwnProperty.call(zz, uz) && this._setDefaultValue(uz)
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
-       }
- ... (27 more removed lines; see GitHub link above)
+       constructor() {
+         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new mq.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L345-L349` → after: `L493-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L493-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L493-L508) · [Before (L345-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L345-L349)

```diff
-       isEqual(zz) {
-         if (this._keys.length !== zz._keys.length) return !1;
-         for (let uz = 0; uz < this._keys.length; uz++) {
-           const bz = this._keys[uz];
-           if (this[bz] !== zz[bz]) return !1
+     }
+     let Bq = (() => {
+       var qq;
+       let Eq, gq, Bq, Wq, Nq, aq = [],
+         Vq = [],
+         dq = [],
+         jq = [],
+         Hq = [],
+         oq = [],
+         Pq = [],
+         Qq = [],
+         yq = [],
+         tq = [];
+       return qq = class {
+         static AddNodeConstructor(qq, Eq) {
+           this._NodeConstructors[qq] = Eq
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L351-L357` → after: `L510-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L510-L512) · [Before (L351-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L351-L357)

```diff
-         return !0
-       }
-       cloneTo(zz) {
-         this._keys.length !== zz._keys.length && (zz._keys = this._keys.slice(0));
-         for (let uz = 0; uz < this._keys.length; uz++) {
-           const bz = this._keys[uz];
-           zz[bz] = this[bz]
+         static Construct(qq, Eq, gq, Yq) {
+           const lq = this._NodeConstructors[qq];
+           return lq ? lq(Eq, gq, Yq) : null
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L359-L374` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L514-L515) · [Before (L359-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L359-L374)

```diff
-       }
-       reset() {
-         for (const zz of this._keys) this._setDefaultValue(zz)
-       }
-       _setDefaultValue(zz) {
-         const uz = this._externalProperties?.[zz]?.type ?? typeof this[zz],
-           bz = this._externalProperties?.[zz]?.default;
-         switch (uz) {
-           case "number":
-             this[zz] = bz ?? 0;
-             break;
-           case "string":
-             this[zz] = bz ?? "";
-             break;
-           default:
-             this[zz] = bz ?? !1
+         set accessibilityTag(qq) {
+           this._accessibilityTag = qq, this.onAccessibilityTagChangedObservable.notifyObservers(qq)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L376-L389` → after: `L517-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L517-L518) · [Before (L376-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L376-L389)

```diff
-       }
-       toString() {
-         let zz = "";
-         for (let uz = 0; uz < this._keys.length; uz++) {
-           const bz = this._keys[uz],
-             Ez = this[bz];
-           switch (typeof Ez) {
-             case "number":
-             case "string":
-               zz += "#define " + bz + " " + Ez + "\n";
-               break;
-             default:
-               Ez && (zz += "#define " + bz + "\n")
-           }
+         get accessibilityTag() {
+           return this._accessibilityTag
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L391-L521` → after: `L520-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L520-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L520-L533) · [Before (L391-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L391-L521)

```diff
-         return zz
-       }
-     }
-   },
-   39552: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Mz,
-       g: () => lz,
-       j: () => iz
-     });
-     var Ez, nz = bz(36519);
- 
-     function iz(zz, uz) {
-       let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
-       const Ez = uz(zz);
-       if (!Number.isInteger(Ez) || Ez < 0 || Ez > bz) throw new Error(`Invalid geometry object ID ${Ez} for mesh "${zz.name}". Object IDs must be integers between 0 and 0x${bz.toString(16).toUpperCase()}.`);
- ... (115 more removed lines; see GitHub link above)
+         get doNotSerialize() {
+           return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
+         }
+         set doNotSerialize(qq) {
+           this._nodeDataStorage._doNotSerialize = qq
+         }
+         bM() {
+           return this._nodeDataStorage._isDisposed
+         }
+         set parent(qq) {
+           if (this._parentNode === qq) return;
+           const Eq = this._parentNode;
+           if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
+             const Eq = this._parentNode._children.indexOf(this); - 1 !== Eq && this._parentNode._children.splice(Eq, 1), qq || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L524-L697` → after: `L537-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L537-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L537-L562) · [Before (L524-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L524-L697)

```diff
-       }
-     }
-     Mz.GeometryTextureDescriptions = [{
-       type: 0,
-       name: "IrradianceLegacy",
-       clearType: 0,
-       define: "PREPASS_IRRADIANCE_LEGACY",
-       defineIndex: "PREPASS_IRRADIANCE_LEGACY_INDEX"
-     }, {
-       type: 1,
-       name: "WorldPosition",
-       clearType: 0,
-       define: "PREPASS_POSITION",
-       defineIndex: "PREPASS_POSITION_INDEX"
-     }, {
-       type: 2,
- ... (158 more removed lines; see GitHub link above)
+         get parent() {
+           return this._parentNode
+         }
+         get inheritVisibility() {
+           return this._nodeDataStorage._inheritVisibility
+         }
+         set inheritVisibility(qq) {
+           this._nodeDataStorage._inheritVisibility = qq
+         }
+         get isVisible() {
+           return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
+         }
+         set isVisible(qq) {
+           this._nodeDataStorage._isVisible = qq
+         }
+         _serializeAsParent(qq) {
+ ... (10 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L699-L702` → after: `L564-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L564-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L564-L667) · [Before (L699-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L699-L702)

```diff
-           case 256: {
-             const zz = uz;
-             for (const uz of this._activePlugins) uz.getAnimatables(zz.animatables);
-             break
+         }
+         get animationPropertiesOverride() {
+           return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
+         }
+         set animationPropertiesOverride(qq) {
+           this._animationPropertiesOverride = qq
+         }
+         getClassName() {
+           return "Node"
+         }
+         set onDispose(qq) {
+           this._onDisposeObserver && this.MJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.MJ.add(qq)
+         }
+         get onEnabledStateChangedObservable() {
+           return this._nodeDataStorage._onEnabledStateChangedObservable
+         }
+ ... (88 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L704-L710` → after: `L669-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L669-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L669-L676) · [Before (L704-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L704-L710)

```diff
-           case 1024: {
-             const zz = uz;
-             let bz = !1;
-             for (const uz of this._activePlugins)
-               if (bz = uz.hasTexture(zz.texture), bz) break;
-             zz.hasTexture = bz;
-             break
+         }
+         hG(qq) {
+           if (this._nodeDataStorage._isEnabled === qq) return;
+           const Eq = this._hasEffectiveEnabledStateObservers(),
+             gq = Eq ? this.isEnabled() : null;
+           if (this._nodeDataStorage._isEnabled = qq, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(qq), Eq) {
+             const qq = this.isEnabled();
+             qq !== gq && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(qq)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L712-L715` → after: `L678-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L678-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L678-L709) · [Before (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L712-L715)

```diff
-           case 2: {
-             const zz = uz;
-             for (const uz of this._plugins) uz.dispose(zz.forceDisposeTextures);
-             break
+         }
+         isDescendantOf(qq) {
+           return !!this.parent && (this.parent === qq || this.parent.isDescendantOf(qq))
+         }
+         _getDescendants(qq) {
+           let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             gq = arguments.length > 2 ? arguments[2] : void 0;
+           if (this._children)
+             for (let Yq = 0; Yq < this._children.length; Yq++) {
+               const lq = this._children[Yq];
+               gq && !gq(lq) || qq.push(lq), Eq || lq._getDescendants(qq, !1, gq)
+             }
+         }
+         getDescendants(qq, Eq) {
+           const gq = [];
+           return this._getDescendants(gq, qq, Eq), gq
+ ... (16 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L717-L724` → after: `L711-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L711-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L711-L716) · [Before (L717-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L717-L724)

```diff
-           case 4:
-             uz.defineNames = this._defineNamesFromPlugins;
-             break;
-           case 128: {
-             const zz = uz;
-             for (const uz of this._activePlugins) zz.fallbackRank = uz.addFallbacks(zz.defines, zz.fallbacks, zz.fallbackRank), uz.getAttributes(zz.attributes, this._scene, zz.mesh);
-             this._uniformList.length > 0 && zz.uniforms.push(...this._uniformList), this._samplerList.length > 0 && zz.samplers.push(...this._samplerList), this._uboList.length > 0 && zz.uniformBuffersNames.push(...this._uboList), zz.customCode = this._injectCustomCode(zz, zz.cus … [truncated]
-             break
+           return null
+         }
+         createAnimationRange(Eq, gq, Yq) {
+           if (!this._ranges[Eq]) {
+             this._ranges[Eq] = qq._AnimationRangeFactory(Eq, gq, Yq);
+             for (let qq = 0, lq = this.animations.length; qq < lq; qq++) this.animations[qq] && this.animations[qq].createRange(Eq, gq, Yq)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L726-L756` → after: `L718-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L718-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L718-L733) · [Before (L726-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L726-L756)

```diff
-           case 8: {
-             const zz = uz;
-             this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
-             const bz = 1 === this._material.shaderLanguage;
-             for (const uz of this._plugins) {
-               const Ez = uz.getUniforms(this._material.shaderLanguage);
-               if (Ez) {
-                 if (Ez.ubo)
-                   for (const uz of Ez.ubo) {
-                     if (uz.size && uz.type) {
-                       const Ez = uz.arraySize ?? 0;
-                       if (zz.ubo.addUniform(uz.name, uz.size, Ez), bz) {
-                         let zz;
-                         switch (uz.type) {
-                           case "mat4":
-                             zz = "mat4x4f";
- ... (15 more removed lines; see GitHub link above)
+         }
+         deleteAnimationRange(qq) {
+           let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+           for (let gq = 0, Yq = this.animations.length; gq < Yq; gq++) this.animations[gq] && this.animations[gq].deleteRange(qq, Eq);
+           this._ranges[qq] = null
+         }
+         getAnimationRange(qq) {
+           return this._ranges[qq] || null
+         }
+         clone(Eq, gq, Yq) {
+           const lq = cq.d.Clone((() => new qq(Eq, this.ZJ())), this);
+           if (gq && (lq.parent = gq), !Yq) {
+             const qq = this.getDescendants(!0);
+             for (let gq = 0; gq < qq.length; gq++) {
+               const Yq = qq[gq];
+               Yq.clone(Eq + "." + Yq.name, lq)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L761-L816` → after: `L738-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L738-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L738-L741) · [Before (L761-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L761-L816)

```diff
-       }
-       _collectPointNames(zz, uz) {
-         if (uz)
-           for (const bz in uz) this._codeInjectionPoints[zz] || (this._codeInjectionPoints[zz] = {}), this._codeInjectionPoints[zz][bz] = !0
-       }
-       _injectCustomCode(zz, uz) {
-         return (bz, Ez) => {
-           uz && (Ez = uz(bz, Ez)), this._uboDeclaration && (Ez = Ez.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Ez = Ez.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
-           const nz = this._codeInjectionPoints?.[bz];
-           if (!nz) return Ez;
-           let tz = null;
-           for (let uz in nz) {
-             let nz = "";
-             for (const Ez of this._activePlugins) {
-               const Mz = this._material.shaderLanguage;
-               let Hz = Ez.getCustomCode(bz, Mz)?.[uz];
- ... (40 more removed lines; see GitHub link above)
+         getAnimationRanges() {
+           const qq = [];
+           let Eq;
+           for (Eq in this._ranges) qq.push(this._ranges[Eq]);
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L819-L906` → after: `L744-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L744-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L744-L754) · [Before (L819-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L819-L906)

```diff
-       }
-     }
-     tz._MaterialPluginClassToMainDefine = {}, tz._MaterialPluginCounter = 0;
- 
-     function Hz(zz, uz) {
-       return zz.replace(/\$(\d+)/g, ((zz, bz) => {
-         const Ez = Number(bz);
-         return Ez < uz.length ? uz[Ez] : ""
-       }))
-     }
-     var Oz = bz(39182),
-       pz = bz(36564);
-     let dz = (() => {
-         var zz;
-         let uz, bz, iz, lz, Mz = [],
-           Hz = [],
- ... (72 more removed lines; see GitHub link above)
+         beginAnimation(qq, Eq, gq, Yq) {
+           const lq = this.getAnimationRange(qq);
+           return lq ? this._scene.beginAnimation(this, lq.from, lq.to, Eq, gq, Yq) : null
+         }
+         serializeAnimationRanges() {
+           const qq = [];
+           for (const Eq in this._ranges) {
+             const gq = this._ranges[Eq];
+             if (!gq) continue;
+             const Yq = {};
+             Yq.name = Eq, Yq.from = gq.from, Yq.to = gq.to, qq.push(Yq)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L908-L992` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L756) · [Before (L908-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L908-L992)

```diff
-         }, (() => {
-           const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           uz = [(0, nz.G)()], bz = [(0, nz.G)()], iz = [(0, nz.G)()], lz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
-             kind: "field",
-             name: "name",
-             static: !1,
-             private: !1,
-             access: {
-               has: zz => "name" in zz,
-               get: zz => zz.name,
-               set: (zz, uz) => {
-                 zz.name = uz
-               }
-             },
-             metadata: tz
-           }, Mz, Hz), (0, Ez.h)(null, null, bz, {
- ... (69 more removed lines; see GitHub link above)
+           return qq
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L994-L1001` → after: `L758-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L758-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L758-L759) · [Before (L994-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L994-L1001)

```diff
-       }
-     }
-   },
-   39566: (zz, uz, bz) => {
-     function Ez(zz) {
-       return class extends zz {
-         constructor() {
-           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
+         computeWorldMatrix(qq) {
+           return this._worldMatrix || (this._worldMatrix = lq.e.Identity()), this._worldMatrix
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1003-L1425` → after: `L761-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L761-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L761-L797) · [Before (L1003-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L1003-L1425)

```diff
-       }
-     }
-     bz.d(uz, {
-       d: () => Ez
-     })
-   },
-   39425: (zz, uz, bz) => {
-     bz.d(uz, {
-       StandardMaterial: () => Ez.e
-     });
-     var Ez = bz(39429);
-     (0, Ez.b)()
-   },
-   39429: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => qz,
- ... (407 more removed lines; see GitHub link above)
+         dispose(qq) {
+           let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           if (this._nodeDataStorage._isDisposed = !0, !qq) {
+             const gq = this.getDescendants(!0);
+             for (const Yq of gq) Yq.dispose(qq, Eq)
+           }
+           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.MJ.notifyObservers(this), this.MJ.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
+           for (const gq of this._behaviors) gq.detach();
+           this._behaviors.length = 0, this.metadata = null
+         }
+         static ParseAnimationRanges(qq, Eq, gq) {
+           if (Eq.zV)
+             for (let Yq = 0; Yq < Eq.zV.length; Yq++) {
+               const gq = Eq.zV[Yq];
+               qq.createAnimationRange(gq.name, gq.from, gq.to)
+             }
+ ... (21 more added lines; see GitHub link above)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1427-L1428` → after: `L799-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L799-L801) · [Before (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L1427-L1428)

```diff
-           getAlphaTestTexture() {
-             return this._diffuseTexture
+           return {
+             min: qq,
+             max: Eq
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1430-L1482` → after: `L803-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L803-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L803-L815) · [Before (L1430-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L1430-L1482)

```diff
-           isReadyForSubMesh(uz, bz) {
-             let Ez = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-             this._uniformBufferLayoutBuilt || this.buildUniformLayout();
-             const nz = bz._drawWrapper;
-             if (nz.effect && this.isFrozen && nz._wasPreviouslyReady && nz._wasPreviouslyUsingInstances === Ez) return !0;
-             bz.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), bz.materialDefines = new Gz(this._eventInfo.defineNames));
-             const iz = this.XT(),
-               lz = bz.materialDefines;
-             if (this._isReadyForSubMesh(bz)) return !0;
-             const Mz = iz.uR();
-             if (lz._needNormals = (0, sz.$)(iz, uz, lz, !0, this._maxSimultaneousLights, this._disableLighting), !(0, sz.d)(iz, uz, this._maxSimultaneousLights, this._disableLighting)) return !1;
-             (0, sz.ib)(iz, lz);
-             const Oz = this.needAlphaBlendingForMesh(uz) && this.XT().useOrderIndependentTransparency;
-             if ((0, sz.mb)(iz, lz, this.canRenderToMRT && !Oz), (0, sz.kb)(iz, lz, Oz), Nz.d.PrepareDefines(Mz.currentRenderPassId, uz, lz), lz._areTexturesDirty) {
-               this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, lz._needUVs = !1;
-               for (let zz = 1; zz <= 6; ++zz) lz["MAINUV" + zz] = !1;
- ... (37 more removed lines; see GitHub link above)
+         }
+       }, (() => {
+         const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         Eq = [(0, Oq.M)()], gq = [(0, Oq.M)()], Bq = [(0, Oq.M)()], Wq = [(0, Oq.M)()], Nq = [(0, Oq.M)()], (0, Yq.f)(null, null, Eq, {
+           kind: "field",
+           name: "name",
+           static: !1,
+           private: !1,
+           access: {
+             has: qq => "name" in qq,
+             get: qq => qq.name,
+             set: (qq, Eq) => {
+               qq.name = Eq
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1484-L1487` → after: `L817-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L817-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L817-L828) · [Before (L1484-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L1484-L1487)

```diff
-             if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = lz, this._eventInfo.subMesh = bz, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
-             if (lz._areImageProcessingDirty && this._imageProcessingConfiguration) {
-               if (!this._imageProcessingConfiguration.isReady()) return !1;
-               this._imageProcessingConfiguration.prepareDefines(lz), lz.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, lz.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
+           },
+           metadata: lq
+         }, aq, Vq), (0, Yq.f)(null, null, gq, {
+           kind: "field",
+           name: "id",
+           static: !1,
+           private: !1,
+           access: {
+             has: qq => "id" in qq,
+             get: qq => qq.id,
+             set: (qq, Eq) => {
+               qq.id = Eq
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1489-L1549` → after: `L830-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L830-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L830-L841) · [Before (L1489-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L1489-L1549)

```diff
-             if (lz._areFresnelDirty && (zz.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (lz.DIFFUSEFRESNEL = this._diffuseFresnel … [truncated]
-               for (let zz = 0; zz < uz.lightSources.length; zz++)
-                 if (!uz.lightSources[zz]._isReady()) return !1;
-             (0, sz.hb)(uz, iz, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(uz), lz, this._applyDecalMapAfterDetailMap, this._useVertexPulling, bz.getRenderingMesh(), this._isVertexOutputInvariant), (0, sz.W)(iz, Mz, this, lz, Ez, nul … [truncated]
-             let dz = !1;
-             if (lz.isDirty) {
-               const Ez = lz._areLightsDisposed;
-               lz.markAsProcessed();
-               const nz = new Kz.c;
-               lz.REFLECTION && nz.addFallback(0, "REFLECTION"), lz.SPECULAR && nz.addFallback(0, "SPECULAR"), lz.BUMP && nz.addFallback(0, "BUMP"), lz.PARALLAX && nz.addFallback(1, "PARALLAX"), lz.PARALLAX_RHS && nz.addFallback(1, "PARALLAX_RHS"), lz.PARALLAXOCCLUSION && nz.addFa … [truncated]
-               const Oz = [tz.j.PositionKind];
-               lz.NORMAL && Oz.push(tz.j.NormalKind), lz.TANGENT && Oz.push(tz.j.TangentKind);
-               for (let zz = 1; zz <= 6; ++zz) lz["UV" + zz] && Oz.push(`uv${1===zz?"":zz}`);
-               lz.VERTEXCOLOR && Oz.push(tz.j.ColorKind), (0, sz.I)(Oz, uz, lz, nz), (0, sz.M)(Oz, lz), (0, sz.P)(Oz, uz, lz), (0, sz.G)(Oz, uz, lz);
-               let Fz = "default";
-               const Zz = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfo … [truncated]
- ... (45 more removed lines; see GitHub link above)
+           },
+           metadata: lq
+         }, dq, jq), (0, Yq.f)(null, null, Bq, {
+           kind: "field",
+           name: "uniqueId",
+           static: !1,
+           private: !1,
+           access: {
+             has: qq => "uniqueId" in qq,
+             get: qq => qq.uniqueId,
+             set: (qq, Eq) => {
+               qq.uniqueId = Eq
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1551-L1715` → after: `L843-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L843-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L843-L854) · [Before (L1551-L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L1551-L1715)

```diff
-             return !(!bz.effect || !bz.effect.isReady()) && (lz._renderId = iz.getRenderId(), nz._wasPreviouslyReady = !dz, nz._wasPreviouslyUsingInstances = Ez, this._checkScenePerformancePriority(), !0)
-           }
-           buildUniformLayout() {
-             const zz = this._uniformBuffer;
-             zz.addUniform("diffuseLeftColor", 4), zz.addUniform("diffuseRightColor", 4), zz.addUniform("opacityParts", 4), zz.addUniform("reflectionLeftColor", 4), zz.addUniform("reflectionRightColor", 4), zz.addUniform("refractionLeftColor", 4), zz.addUniform("refractionRightCol … [truncated]
-           }
-           bindForSubMesh(uz, bz, Ez) {
-             const nz = this.XT(),
-               iz = Ez.materialDefines;
-             if (!iz) return;
-             const tz = Ez.effect;
-             if (!tz) return;
-             this._activeEffect = tz, bz.getMeshUniformBuffer().bindToEffect(tz, "Mesh"), bz.transferToEffect(uz), this._uniformBuffer.bindToEffect(tz, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, nz, bz, uz, this.isFrozen), Nz.d.Bind(nz.uR().currentRe … [truncated]
-             const Hz = nz.activeCamera;
-             Hz ? this._uniformBuffer.updateFloat4("cameraInfo", Hz.minZ, Hz.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
-             const Oz = this.textureRepetitionHexTilingParams;
- ... (149 more removed lines; see GitHub link above)
+           },
+           metadata: lq
+         }, Hq, oq), (0, Yq.f)(null, null, Wq, {
+           kind: "field",
+           name: "state",
+           static: !1,
+           private: !1,
+           access: {
+             has: qq => "state" in qq,
+             get: qq => qq.state,
+             set: (qq, Eq) => {
+               qq.state = Eq
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1717-L2730` → after: `L856-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L856-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L856-L880) · [Before (L1717-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L1717-L2730)

```diff
-           })], Lu = [(0, nz.G)("useEmissiveAsIllumination")], Pu = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], Gu = [(0, nz.G)("linkEmissiveWithDiffuse")], au = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], Vu = [(0, nz.G)("useSpecularOverAlpha")], mu = [(0, nz.i)("_markA … [truncated]
-             kind: "accessor",
-             name: "diffuseTexture",
-             static: !1,
-             private: !1,
-             access: {
-               has: zz => "diffuseTexture" in zz,
-               get: zz => zz.diffuseTexture,
-               set: (zz, uz) => {
-                 zz.diffuseTexture = uz
-               }
-             },
-             metadata: uz
-           }, Tb, Lb), (0, Ez.h)(zz, null, Mu, {
-             kind: "accessor",
-             name: "ambientTexture",
- ... (998 more removed lines; see GitHub link above)
+           },
+           metadata: lq
+         }, Pq, Qq), (0, Yq.f)(null, null, Nq, {
+           kind: "field",
+           name: "metadata",
+           static: !1,
+           private: !1,
+           access: {
+             has: qq => "metadata" in qq,
+             get: qq => qq.metadata,
+             set: (qq, Eq) => {
+               qq.metadata = Eq
+             }
+           },
+           metadata: lq
+         }, yq, tq), lq && Object.defineProperty(qq, Symbol.metadata, {
+ ... (9 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/252.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/252.js` (108 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af)

#### 1. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L4)

```diff
-   39467: (zz, uz, bz) => {
+   40832: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L9-L10` → after: `L19-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L19-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L19-L94) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L9-L10)

```diff
-       constructor(zz, uz, bz) {
-         this.bu = zz, this.bv = uz, this.distance = bz, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
+       constructor() {
+         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
+       }
+       get name() {
+         return "AutoRotation"
+       }
+       set zoomStopsAnimation(qq) {
+         this._zoomStopsAnimation = qq
+       }
+       get zoomStopsAnimation() {
+         return this._zoomStopsAnimation
+       }
+       set idleRotationSpeed(qq) {
+         this._idleRotationSpeed = qq
+       }
+       get idleRotationSpeed() {
+ ... (60 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L13-L20` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L97) · [Before (L13-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L13-L20)

```diff
-   },
-   39483: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => lz
-     });
-     var Ez = bz(36528),
-       nz = bz(36519),
-       iz = bz(36526);
+     gq(40835);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L22-L137` → after: `L99-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L99-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L99-L117) · [Before (L22-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L22-L137)

```diff
-       constructor(zz, uz, bz) {
-         this.vectors = (0, Ez.d)(8, nz.n.Zero), this.center = nz.n.Zero(), this.centerWorld = nz.n.Zero(), this.extendSize = nz.n.Zero(), this.extendSizeWorld = nz.n.Zero(), this.directions = (0, Ez.d)(3, nz.n.Zero), this.vectorsWorld = (0, Ez.d)(8, nz.n.Zero), this.minimumWorld  … [truncated]
-       }
-       reConstruct(zz, uz, bz) {
-         const Ez = zz.x,
-           iz = zz.y,
-           lz = zz.z,
-           Mz = uz.x,
-           tz = uz.y,
-           Hz = uz.z,
-           Oz = this.vectors;
-         this.minimum.P_(Ez, iz, lz), this.maximum.P_(Mz, tz, Hz), Oz[0].P_(Ez, iz, lz), Oz[1].P_(Mz, tz, Hz), Oz[2].P_(Mz, iz, lz), Oz[3].P_(Ez, tz, lz), Oz[4].P_(Ez, iz, Hz), Oz[5].P_(Mz, tz, lz), Oz[6].P_(Ez, tz, Hz), Oz[7].P_(Mz, iz, Hz), uz.addToRef(zz, this.center).scaleInPl … [truncated]
-       }
-       scale(zz) {
-         const uz = lz._TmpVector3,
-           bz = this.maximum.subtractToRef(this.minimum, uz[0]),
- ... (100 more removed lines; see GitHub link above)
+       constructor() {
+         this._easingMode = aq.EASINGMODE_EASEIN
+       }
+       setEasingMode(qq) {
+         const Eq = Math.min(Math.max(qq, 0), 2);
+         this._easingMode = Eq
+       }
+       getEasingMode() {
+         return this._easingMode
+       }
+       easeInCore(qq) {
+         throw new Error("You must implement this method")
+       }
+       ease(qq) {
+         switch (this._easingMode) {
+           case aq.EASINGMODE_EASEIN:
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L139` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L119) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L139)

```diff
-         return !0
+         return qq >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - qq))) + .5 : .5 * this.easeInCore(2 * qq)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L142-L150` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L122-L123) · [Before (L142-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L142-L150)

```diff
-     lz._TmpVector3 = (0, Ez.d)(3, nz.n.Zero)
-   },
-   39474: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => pz
-     });
-     var Ez = bz(36528),
-       nz = bz(36519),
-       iz = bz(39483);
+     aq.EASINGMODE_EASEIN = 0, aq.EASINGMODE_EASEOUT = 1, aq.EASINGMODE_EASEINOUT = 2;
+     var Vq = gq(40844);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L152-L180` → after: `L125-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L125-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L125-L158) · [Before (L152-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L152-L180)

```diff
-       constructor(zz, uz, bz) {
-         this.center = nz.n.Zero(), this.centerWorld = nz.n.Zero(), this.minimum = nz.n.Zero(), this.maximum = nz.n.Zero(), this.reConstruct(zz, uz, bz)
-       }
-       reConstruct(zz, uz, bz) {
-         this.minimum.euz(zz), this.maximum.euz(uz);
-         const Ez = nz.n.Distance(zz, uz);
-         uz.addToRef(zz, this.center).scaleInPlace(.5), this.radius = .5 * Ez, this._update(bz || nz.d.IdentityReadOnly)
-       }
-       scale(zz) {
-         const uz = lz._TmpVector3,
-           bz = this.maximum.subtractToRef(this.minimum, uz[0]),
-           Ez = bz.length();
-         bz.normalizeFromLength(Ez);
-         const nz = Ez * zz,
-           iz = bz.scaleInPlace(.5 * nz),
-           Mz = this.center.subtractToRef(iz, uz[1]),
- ... (13 more removed lines; see GitHub link above)
+       constructor() {
+         this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
+       }
+       get name() {
+         return "Bouncing"
+       }
+       get autoTransitionRange() {
+         return this._autoTransitionRange
+       }
+       set autoTransitionRange(qq) {
+         if (this._autoTransitionRange === qq) return;
+         this._autoTransitionRange = qq;
+         const Eq = this._attachedCamera;
+         Eq && (qq ? this._onMeshTargetChangedObserver = Eq.onMeshTargetChangedObservable.add((qq => {
+           if (qq && (qq.computeWorldMatrix(!0), qq.yR)) {
+             const Eq = qq.yR().diagonalLength;
+ ... (18 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L182-L207` → after: `L160-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L160-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L160-L170) · [Before (L182-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L182-L207)

```diff
-       isInFrustum(zz) {
-         const uz = this.centerWorld,
-           bz = this.radiusWorld;
-         for (let Ez = 0; Ez < 6; Ez++)
-           if (zz[Ez].dotCoordinate(uz) <= -bz) return !1;
-         return !0
-       }
-       isCenterInFrustum(zz) {
-         const uz = this.centerWorld;
-         for (let bz = 0; bz < 6; bz++)
-           if (zz[bz].dotCoordinate(uz) < 0) return !1;
-         return !0
-       }
-       intersectsPoint(zz) {
-         const uz = nz.n.DistanceSquared(this.centerWorld, zz);
-         return !(this.radiusWorld * this.radiusWorld < uz)
- ... (10 more removed lines; see GitHub link above)
+       _applyBoundRadiusAnimation(qq) {
+         if (!this._attachedCamera) return;
+         this._radiusBounceTransition || (dq.EasingFunction.setEasingMode(dq.EasingMode), this._radiusBounceTransition = Vq.d.CreateAnimation("radius", Vq.d.ANIMATIONTYPE_FLOAT, 60, dq.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
+         const Eq = Vq.d.TransitionTo("radius", this._attachedCamera.radius + qq, this._attachedCamera, this._attachedCamera.ZJ(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
+         Eq && this._animatables.push(Eq)
+       }
+       _clearAnimationLocks() {
+         this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
+       }
+       stopAllAnimations() {
+         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L210-L224` → after: `L173-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L173-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L173-L182) · [Before (L210-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L210-L224)

```diff
-     lz._TmpVector3 = (0, Ez.d)(3, nz.n.Zero);
-     const Mz = {
-         min: 0,
-         max: 0
-       },
-       tz = {
-         min: 0,
-         max: 0
-       },
-       Hz = (zz, uz, bz) => {
-         const Ez = nz.n.Dot(uz.centerWorld, zz),
-           iz = Math.abs(nz.n.Dot(uz.directions[0], zz)) * uz.extendSize.x + Math.abs(nz.n.Dot(uz.directions[1], zz)) * uz.extendSize.y + Math.abs(nz.n.Dot(uz.directions[2], zz)) * uz.extendSize.z;
-         bz.min = Ez - iz, bz.max = Ez + iz
-       },
-       Oz = (zz, uz, bz) => (Hz(zz, uz, Mz), Hz(zz, bz, tz), !(Mz.min > tz.max || tz.min > Mz.max));
+     dq.EasingFunction = new class extends aq {
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         super(), this.amplitude = qq
+       }
+       easeInCore(qq) {
+         const Eq = Math.max(0, this.amplitude);
+         return Math.pow(qq, 3) - qq * Eq * Math.sin(3.141592653589793 * qq)
+       }
+     }(.3), dq.EasingMode = aq.EASINGMODE_EASEOUT;
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L226-L227` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L184-L185) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L226-L227)

```diff
-       constructor(zz, uz, bz) {
-         this._isLocked = !1, this.boundingBox = new iz.e(zz, uz, bz), this.Ibz = new lz(zz, uz, bz)
+       constructor() {
+         this.onTargetFramingAnimationEndObservable = new Oq.d, this._mode = jq.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L229-L230` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L187-L188) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L229-L230)

```diff
-       reConstruct(zz, uz, bz) {
-         this.boundingBox.reConstruct(zz, uz, bz), this.Ibz.reConstruct(zz, uz, bz)
+       get name() {
+         return "Framing"
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L232-L233` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L190-L191) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L232-L233)

```diff
-       get minimum() {
-         return this.boundingBox.minimum
+       set mode(qq) {
+         this._mode = qq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L235-L236` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L193-L194) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L235-L236)

```diff
-       get maximum() {
-         return this.boundingBox.maximum
+       get mode() {
+         return this._mode
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L238-L239` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L196-L197) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L238-L239)

```diff
-       get isLocked() {
-         return this._isLocked
+       set radiusScale(qq) {
+         this._radiusScale = qq
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L241-L242` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L199-L200) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L241-L242)

```diff
-       set isLocked(zz) {
-         this._isLocked = zz
+       get radiusScale() {
+         return this._radiusScale
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L244-L245` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L202-L203) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L244-L245)

```diff
-       update(zz) {
-         this._isLocked || (this.boundingBox._update(zz), this.Ibz._update(zz))
+       set positionScale(qq) {
+         this._positionScale = qq
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L247-L250` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L205-L206) · [Before (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L247-L250)

```diff
-       centerOn(zz, uz) {
-         const bz = pz._TmpVector3[0].euz(zz).Qbz(uz),
-           Ez = pz._TmpVector3[1].euz(zz).addInPlace(uz);
-         return this.boundingBox.reConstruct(bz, Ez, this.boundingBox.getWorldMatrix()), this.Ibz.reConstruct(bz, Ez, this.boundingBox.getWorldMatrix()), this
+       get positionScale() {
+         return this._positionScale
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L252-L255` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L208-L209) · [Before (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L252-L255)

```diff
-       encapsulate(zz) {
-         const uz = nz.n.Minimize(this.minimum, zz),
-           bz = nz.n.Maximize(this.maximum, zz);
-         return this.reConstruct(uz, bz, this.boundingBox.getWorldMatrix()), this
+       set defaultElevation(qq) {
+         this._defaultElevation = qq
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L257-L261` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L211-L212) · [Before (L257-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L257-L261)

```diff
-       encapsulateBoundingInfo(zz) {
-         const uz = nz.l.Matrix[0];
-         this.boundingBox.getWorldMatrix().invertToRef(uz);
-         const bz = nz.l.ER[0];
-         return nz.n.TransformCoordinatesToRef(zz.boundingBox.minimumWorld, uz, bz), this.encapsulate(bz), nz.n.TransformCoordinatesToRef(zz.boundingBox.maximumWorld, uz, bz), this.encapsulate(bz), this
+       get defaultElevation() {
+         return this._defaultElevation
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L263-L264` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L214-L215) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L263-L264)

```diff
-       scale(zz) {
-         return this.boundingBox.scale(zz), this.Ibz.scale(zz), this
+       set elevationReturnTime(qq) {
+         this._elevationReturnTime = qq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L266-L270` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L217-L218) · [Before (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L266-L270)

```diff
-       isInFrustum(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         if ((2 === uz || 3 === uz) && this.Ibz.isCenterInFrustum(zz)) return !0;
-         if (!this.Ibz.isInFrustum(zz)) return !1;
-         return !(1 !== uz && 3 !== uz) || this.boundingBox.isInFrustum(zz)
+       get elevationReturnTime() {
+         return this._elevationReturnTime
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L272-L274` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L220-L221) · [Before (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L272-L274)

```diff
-       get diagonalLength() {
-         const zz = this.boundingBox;
-         return zz.maximumWorld.subtractToRef(zz.minimumWorld, pz._TmpVector3[0]).length()
+       set elevationReturnWaitTime(qq) {
+         this._elevationReturnWaitTime = qq
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L276-L277` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L223-L224) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L276-L277)

```diff
-       isCompletelyInFrustum(zz) {
-         return this.boundingBox.isCompletelyInFrustum(zz)
+       get elevationReturnWaitTime() {
+         return this._elevationReturnWaitTime
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L279-L280` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L226-L227) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L279-L280)

```diff
-       _checkCollision(zz) {
-         return zz._canDoCollision(this.Ibz.centerWorld, this.Ibz.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
+       set zoomStopsAnimation(qq) {
+         this._zoomStopsAnimation = qq
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L282-L283` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L229-L230) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L282-L283)

```diff
-       intersectsPoint(zz) {
-         return !!this.Ibz.centerWorld && (!!this.Ibz.intersectsPoint(zz) && !!this.boundingBox.intersectsPoint(zz))
+       get zoomStopsAnimation() {
+         return this._zoomStopsAnimation
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L285-L291` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L232-L233) · [Before (L285-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L285-L291)

```diff
-       intersects(zz, uz) {
-         if (!lz.Intersects(this.Ibz, zz.Ibz)) return !1;
-         if (!iz.e.Intersects(this.boundingBox, zz.boundingBox)) return !1;
-         if (!uz) return !0;
-         const bz = this.boundingBox,
-           Ez = zz.boundingBox;
-         return !!Oz(bz.directions[0], bz, Ez) && (!!Oz(bz.directions[1], bz, Ez) && (!!Oz(bz.directions[2], bz, Ez) && (!!Oz(Ez.directions[0], bz, Ez) && (!!Oz(Ez.directions[1], bz, Ez) && (!!Oz(Ez.directions[2], bz, Ez) && (!!Oz(nz.n.Cross(bz.directions[0], Ez.directions[0]), bz … [truncated]
+       set framingTime(qq) {
+         this._framingTime = qq
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L293-L339` → after: `L235-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L235-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L235-L343) · [Before (L293-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L293-L339)

```diff
-     }
-     pz._TmpVector3 = (0, Ez.d)(2, nz.n.Zero)
-   },
-   39511: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => iz,
-       d: () => tz,
-       g: () => Mz,
-       i: () => lz
-     });
-     var Ez = bz(39311),
-       nz = bz(36519);
- 
-     function iz(zz) {
-       -1 === zz.indexOf("vClipPlane") && zz.push("vClipPlane"), -1 === zz.indexOf("vClipPlane2") && zz.push("vClipPlane2"), -1 === zz.indexOf("vClipPlane3") && zz.push("vClipPlane3"), -1 === zz.indexOf("vClipPlane4") && zz.push("vClipPlane4"), -1 === zz.indexOf("vClipPlane5") &&  … [truncated]
-     }
- ... (31 more removed lines; see GitHub link above)
+       get framingTime() {
+         return this._framingTime
+       }
+       get attachedNode() {
+         return this._attachedCamera
+       }
+       init() {}
+       attach(qq) {
+         this._attachedCamera = qq;
+         const Eq = this._attachedCamera.ZJ();
+         jq.EasingFunction.setEasingMode(jq.EasingMode), this._onPrePointerObservableObserver = Eq.onPrePointerObservable.add((qq => {
+           qq.type !== uq.b.POINTERDOWN ? qq.type === uq.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
+         })), this._onMeshTargetChangedObserver = qq.onMeshTargetChangedObservable.add((qq => {
+           qq && qq.yR && this.zoomOnMesh(qq, void 0, (() => {
+             this.onTargetFramingAnimationEndObservable.notifyObservers()
+           }))
+ ... (93 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L342-L347` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L346) · [Before (L342-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L342-L347)

```diff
-   },
-   39528: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => Ez
-     });
-     class Ez {
+     jq.EasingFunction = new class extends aq {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L349-L376` → after: `L348-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L348-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L348-L404) · [Before (L349-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L349-L376)

```diff
-         this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
-       }
-       unBindMesh() {
-         this._mesh = null
-       }
-       addFallback(zz, uz) {
-         this._defines[zz] || (zz < this._currentRank && (this._currentRank = zz), zz > this._maxRank && (this._maxRank = zz), this._defines[zz] = new Array), this._defines[zz].push(uz)
-       }
-       addCPUSkinningFallback(zz, uz) {
-         this._mesh = uz, zz < this._currentRank && (this._currentRank = zz), zz > this._maxRank && (this._maxRank = zz)
-       }
-       get hasMoreFallbacks() {
-         return this._currentRank <= this._maxRank
-       }
-       reduce(zz, uz) {
-         if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
- ... (12 more removed lines; see GitHub link above)
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
+         super(), this.exponent = qq
+       }
+       easeInCore(qq) {
+         return this.exponent <= 0 ? qq : (Math.exp(this.exponent * qq) - 1) / (Math.exp(this.exponent) - 1)
+       }
+     }, jq.EasingMode = aq.EASINGMODE_EASEINOUT, jq.IgnoreBoundsSizeMode = 0, jq.FitFrustumSidesMode = 1;
+     var Hq = gq(39951),
+       oq = gq(39943),
+       Pq = gq(39980),
+       Qq = gq(39845);
+     let yq = (() => {
+         var qq;
+         let Eq, gq = [],
+           Oq = [];
+         return qq = class {
+ ... (41 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L379` → after: `L433-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L433-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L433-L441) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L379)

```diff
-             } else !this._mesh.material && Ez.computeBonesUsingShaders && Ez.numBoneInfluencers > 0 && (Ez.computeBonesUsingShaders = !1)
+               }
+             }, this._observer = this.camera.ZJ()._inputManager._addCameraPointerObserver(this._pointerInput, uq.b.POINTERDOWN | uq.b.POINTERUP | uq.b.POINTERMOVE | uq.b.POINTERDOUBLETAP), this._onLostFocus = () => {
+               this._pointA = this._pointB = null, Yq = 0, lq = null, this.onLostFocus()
+             }, this._contextMenuBind = qq => this.onContextMenu(qq), gq && gq.addEventListener("contextmenu", this._contextMenuBind, !1);
+             const Oq = this.camera.ZJ().Ba().getHostWindow();
+             Oq && Qq.f.RegisterTopRootEvents(Oq, [{
+               name: "blur",
+               handler: this._onLostFocus
+             }])
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L381-L405` → after: `L443-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L443-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L443-L753) · [Before (L381-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L381-L405)

```diff
-         } else {
-           const uz = this._defines[this._currentRank];
-           if (uz)
-             for (let bz = 0; bz < uz.length; bz++) zz = zz.replace("#define " + uz[bz], "");
-           this._currentRank++
-         }
-         return zz
-       }
-     }
-   },
-   39451: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => Xz
-     });
-     var Ez = bz(39170),
-       nz = bz(39172),
- ... (9 more removed lines; see GitHub link above)
+           detachControl() {
+             if (this._onLostFocus) {
+               const qq = this.camera.ZJ().Ba().getHostWindow();
+               qq && Qq.f.UnregisterTopRootEvents(qq, [{
+                 name: "blur",
+                 handler: this._onLostFocus
+               }])
+             }
+             if (this._observer) {
+               if (this.camera.ZJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
+                 const qq = this.camera.ZJ().Ba().getInputElement();
+                 qq && qq.removeEventListener("contextmenu", this._contextMenuBind)
+               }
+               this._onLostFocus = null
+             }
+             this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._currentMousePointerIdDown = -1
+ ... (295 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L408` → after: `L756-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L756-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L756-L776) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L408)

```diff
-       let uz, bz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Zz, Rz, Kz = [];
+       let Eq, gq, Oq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq = [],
+         dq = [],
+         jq = [],
+         Hq = [],
+         oq = [],
+         Pq = [],
+         yq = [],
+         tq = [],
+         rq = [],
+         hq = [],
+         nq = [],
+         bq = [],
+         iq = [],
+         Zq = [],
+         fq = [],
+         Mq = [],
+ ... (5 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L411-L483` → after: `L779-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L779-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L779-L806) · [Before (L411-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L411-L483)

```diff
-           this._func = (0, Ez.j)(this, Kz), this.reset()
-         }
-         reset() {
-           this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpSt … [truncated]
-         }
-         get func() {
-           return this._func
-         }
-         set func(zz) {
-           this._func = zz
-         }
-         get backFunc() {
-           return this._backFunc
-         }
-         set backFunc(zz) {
-           this._backFunc = zz
- ... (57 more removed lines; see GitHub link above)
+           this.camera = (0, Yq.i)(this, Vq), this.keysUp = (0, Yq.i)(this, dq, [38]), this.keysDown = ((0, Yq.i)(this, jq), (0, Yq.i)(this, Hq, [40])), this.keysLeft = ((0, Yq.i)(this, oq), (0, Yq.i)(this, Pq, [37])), this.keysRight = ((0, Yq.i)(this, yq), (0, Yq.i)(this, tq, [39 … [truncated]
+             ctrl: !1,
+             alt: !1
+           }, this._keyboardConditions = {
+             modifiers: this._keyboardModifiers
+           }, this._rotateDirection = new mq.p, this._panDirection = new mq.p
+         }
+         get useAltToZoom() {
+           return this._useAltToZoom
+         }
+         set useAltToZoom(qq) {
+           this._useAltToZoom = qq, this._applyUseAltToZoomToInputMap()
+         }
+         _applyUseAltToZoomToInputMap() {
+           if (!this.camera?.movement) return;
+           const qq = this.camera.movement.input,
+ ... (12 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L485-L486` → after: `L808-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L808-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L808-L848) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L485-L486)

```diff
-         set enabled(zz) {
-           this._enabled = zz
+         attachControl(qq) {
+           qq = Qq.f.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.ZJ(), this._engine = this._scene.Ba(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+             this._keys.length = 0
+           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Eq => {
+             const gq = Eq.event;
+             if (!gq.metaKey)
+               if (Eq.type === vq.c.KEYDOWN) {
+                 if (this._ctrlPressed = gq.ctrlKey, this._altPressed = gq.altKey, -1 !== this.keysUp.indexOf(gq.keyCode) || -1 !== this.keysDown.indexOf(gq.keyCode) || -1 !== this.keysLeft.indexOf(gq.keyCode) || -1 !== this.keysRight.indexOf(gq.keyCode) || -1 !== this.keysReset.i … [truncated]
+                   -1 === this._keys.indexOf(gq.keyCode) && this._keys.push(gq.keyCode), gq.preventDefault && (qq || gq.preventDefault())
+                 }
+               } else if (-1 !== this.keysUp.indexOf(gq.keyCode) || -1 !== this.keysDown.indexOf(gq.keyCode) || -1 !== this.keysLeft.indexOf(gq.keyCode) || -1 !== this.keysRight.indexOf(gq.keyCode) || -1 !== this.keysReset.indexOf(gq.keyCode) || -1 !== this.keysZoomIn.indexOf(gq.k … [truncated]
+               const Eq = this._keys.indexOf(gq.keyCode);
+               Eq >= 0 && this._keys.splice(Eq, 1), gq.preventDefault && (qq || gq.preventDefault())
+             }
+           })))
+         }
+ ... (25 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L489-L492` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L851) · [Before (L489-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L489-L492)

```diff
-           return "MaterialStencilState"
-         }
-         copyTo(zz) {
-           Fz.e.Clone((() => zz), this)
+           return "ArcRotateCameraKeyboardMoveInput"
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L494-L498` → after: `L853-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L853-L854) · [Before (L494-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L494-L498)

```diff
-         serialize() {
-           return Fz.e.Serialize(this)
-         }
-         parse(zz, uz, bz) {
-           Fz.e.Parse((() => this), zz, uz, bz)
+         getSimpleName() {
+           return "keyboard"
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L502-L512` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L858) · [Before (L502-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L502-L512)

```diff
-         uz = [(0, nz.G)()], bz = [(0, nz.G)()], iz = [(0, nz.G)()], lz = [(0, nz.G)()], Mz = [(0, nz.G)()], tz = [(0, nz.G)()], Hz = [(0, nz.G)()], Oz = [(0, nz.G)()], pz = [(0, nz.G)()], dz = [(0, nz.G)()], Zz = [(0, nz.G)()], Rz = [(0, nz.G)()], (0, Ez.h)(zz, null, uz, {
-           kind: "getter",
-           name: "func",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "func" in zz,
-             get: zz => zz.func
-           },
-           metadata: Fz
-         }, null, Kz), (0, Ez.h)(zz, null, bz, {
+         Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], xq = [(0, lq.M)()], Aq = [(0, lq.M)()], cq = [(0, lq.M)()], uq = [(0, lq.M)()], Bq = [(0, lq.M)()], Wq = [(0, lq.M)()], Nq = [(0, lq.M)()], aq = [(0, lq.M)()], (0, Yq.f)(qq, null, aq, {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L514` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L860) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L514)

```diff
-           name: "backFunc",
+           name: "useAltToZoom",
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L518-L519` → after: `L864-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L864-L865) · [Before (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L518-L519)

```diff
-             has: zz => "backFunc" in zz,
-             get: zz => zz.backFunc
+             has: qq => "useAltToZoom" in qq,
+             get: qq => qq.useAltToZoom
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L522-L524` → after: `L868-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L868-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L868-L870) · [Before (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L522-L524)

```diff
-         }, null, Kz), (0, Ez.h)(zz, null, iz, {
-           kind: "getter",
-           name: "funcRef",
+         }, null, Vq), (0, Yq.f)(null, null, Eq, {
+           kind: "field",
+           name: "keysUp",
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L528-L529` → after: `L874-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L874-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L874-L878) · [Before (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L528-L529)

```diff
-             has: zz => "funcRef" in zz,
-             get: zz => zz.funcRef
+             has: qq => "keysUp" in qq,
+             get: qq => qq.keysUp,
+             set: (qq, Eq) => {
+               qq.keysUp = Eq
+             }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L532-L534` → after: `L881-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L881-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L881-L883) · [Before (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L532-L534)

```diff
-         }, null, Kz), (0, Ez.h)(zz, null, lz, {
-           kind: "getter",
-           name: "funcMask",
+         }, dq, jq), (0, Yq.f)(null, null, gq, {
+           kind: "field",
+           name: "keysDown",
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L538-L539` → after: `L887-L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L887-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L887-L891) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L538-L539)

```diff
-             has: zz => "funcMask" in zz,
-             get: zz => zz.funcMask
+             has: qq => "keysDown" in qq,
+             get: qq => qq.keysDown,
+             set: (qq, Eq) => {
+               qq.keysDown = Eq
+             }
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L542-L544` → after: `L894-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L894-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L894-L896) · [Before (L542-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L542-L544)

```diff
-         }, null, Kz), (0, Ez.h)(zz, null, Mz, {
-           kind: "getter",
-           name: "opStencilFail",
+         }, Hq, oq), (0, Yq.f)(null, null, Oq, {
+           kind: "field",
+           name: "keysLeft",
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L548-L549` → after: `L900-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L900-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L900-L904) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L548-L549)

```diff
-             has: zz => "opStencilFail" in zz,
-             get: zz => zz.opStencilFail
+             has: qq => "keysLeft" in qq,
+             get: qq => qq.keysLeft,
+             set: (qq, Eq) => {
+               qq.keysLeft = Eq
+             }
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L552-L554` → after: `L907-L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L907-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L907-L909) · [Before (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L552-L554)

```diff
-         }, null, Kz), (0, Ez.h)(zz, null, tz, {
-           kind: "getter",
-           name: "opDepthFail",
+         }, Pq, yq), (0, Yq.f)(null, null, xq, {
+           kind: "field",
+           name: "keysRight",
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L558-L559` → after: `L913-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L913-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L913-L917) · [Before (L558-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L558-L559)

```diff
-             has: zz => "opDepthFail" in zz,
-             get: zz => zz.opDepthFail
+             has: qq => "keysRight" in qq,
+             get: qq => qq.keysRight,
+             set: (qq, Eq) => {
+               qq.keysRight = Eq
+             }
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L562-L564` → after: `L920-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L920-L922) · [Before (L562-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L562-L564)

```diff
-         }, null, Kz), (0, Ez.h)(zz, null, Hz, {
-           kind: "getter",
-           name: "opStencilDepthPass",
+         }, tq, rq), (0, Yq.f)(null, null, Aq, {
+           kind: "field",
+           name: "keysReset",
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L568-L569` → after: `L926-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L926-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L926-L930) · [Before (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L568-L569)

```diff
-             has: zz => "opStencilDepthPass" in zz,
-             get: zz => zz.opStencilDepthPass
+             has: qq => "keysReset" in qq,
+             get: qq => qq.keysReset,
+             set: (qq, Eq) => {
+               qq.keysReset = Eq
+             }
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L572-L574` → after: `L933-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L933-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L933-L935) · [Before (L572-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L572-L574)

```diff
-         }, null, Kz), (0, Ez.h)(zz, null, Oz, {
-           kind: "getter",
-           name: "backOpStencilFail",
+         }, hq, nq), (0, Yq.f)(null, null, cq, {
+           kind: "field",
+           name: "keysZoomIn",
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L578-L579` → after: `L939-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L939-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L939-L943) · [Before (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L578-L579)

```diff
-             has: zz => "backOpStencilFail" in zz,
-             get: zz => zz.backOpStencilFail
+             has: qq => "keysZoomIn" in qq,
+             get: qq => qq.keysZoomIn,
+             set: (qq, Eq) => {
+               qq.keysZoomIn = Eq
+             }
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L582-L584` → after: `L946-L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L946-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L946-L948) · [Before (L582-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L582-L584)

```diff
-         }, null, Kz), (0, Ez.h)(zz, null, pz, {
-           kind: "getter",
-           name: "backOpDepthFail",
+         }, bq, iq), (0, Yq.f)(null, null, uq, {
+           kind: "field",
+           name: "keysZoomOut",
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L588-L589` → after: `L952-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L952-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L952-L956) · [Before (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L588-L589)

```diff
-             has: zz => "backOpDepthFail" in zz,
-             get: zz => zz.backOpDepthFail
+             has: qq => "keysZoomOut" in qq,
+             get: qq => qq.keysZoomOut,
+             set: (qq, Eq) => {
+               qq.keysZoomOut = Eq
+             }
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L592-L594` → after: `L959-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L959-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L959-L961) · [Before (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L592-L594)

```diff
-         }, null, Kz), (0, Ez.h)(zz, null, dz, {
-           kind: "getter",
-           name: "backOpStencilDepthPass",
+         }, Zq, fq), (0, Yq.f)(null, null, Bq, {
+           kind: "field",
+           name: "panningSensibility",
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L598-L599` → after: `L965-L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L965-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L965-L969) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L598-L599)

```diff
-             has: zz => "backOpStencilDepthPass" in zz,
-             get: zz => zz.backOpStencilDepthPass
+             has: qq => "panningSensibility" in qq,
+             get: qq => qq.panningSensibility,
+             set: (qq, Eq) => {
+               qq.panningSensibility = Eq
+             }
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L602-L604` → after: `L972-L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L972-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L972-L974) · [Before (L602-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L602-L604)

```diff
-         }, null, Kz), (0, Ez.h)(zz, null, Zz, {
-           kind: "getter",
-           name: "mask",
+         }, Mq, Tq), (0, Yq.f)(null, null, Wq, {
+           kind: "field",
+           name: "zoomingSensibility",
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L608-L609` → after: `L978-L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L978-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L978-L982) · [Before (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L608-L609)

```diff
-             has: zz => "mask" in zz,
-             get: zz => zz.mask
+             has: qq => "zoomingSensibility" in qq,
+             get: qq => qq.zoomingSensibility,
+             set: (qq, Eq) => {
+               qq.zoomingSensibility = Eq
+             }
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L612-L614` → after: `L985-L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L985-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L985-L987) · [Before (L612-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L612-L614)

```diff
-         }, null, Kz), (0, Ez.h)(zz, null, Rz, {
-           kind: "getter",
-           name: "enabled",
+         }, zq, Sq), (0, Yq.f)(null, null, Nq, {
+           kind: "field",
+           name: "angularSpeed",
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L618-L619` → after: `L991-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L991-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L991-L995) · [Before (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L618-L619)

```diff
-             has: zz => "enabled" in zz,
-             get: zz => zz.enabled
+             has: qq => "angularSpeed" in qq,
+             get: qq => qq.angularSpeed,
+             set: (qq, Eq) => {
+               qq.angularSpeed = Eq
+             }
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L622` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L998) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L622)

```diff
-         }, null, Kz), Fz && Object.defineProperty(zz, Symbol.metadata, {
+         }, pq, Gq), mq && Object.defineProperty(qq, Symbol.metadata, {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L630-L632` → after: `L1006-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1006-L1008) · [Before (L630-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L630-L632)

```diff
-     var Rz = bz(39505),
-       Kz = bz(39103),
-       wz = bz(39061);
+     Pq.d.ArcRotateCameraKeyboardMoveInput = hq;
+     var nq = gq(37767),
+       bq = gq(39926);
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L635-L680` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1011) · [Before (L635-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L635-L680)

```diff
-       let uz, bz, wz, Xz, fz, sz, rz, oz, Nz, vz, xz, Jz, Az, Tz, Lz, Pz, Gz, az, Vz, mz, qz, hz, Uz, cz, gz, Sz, yz, Dz, Qz, Wz = [],
-         ez = [],
-         jz = [],
-         Iz = [],
-         Bz = [],
-         Cz = [],
-         Yz = [],
-         kz = [],
-         zu = [],
-         uu = [],
-         bu = [],
-         Eu = [],
-         nu = [],
-         iu = [],
-         lu = [],
-         Mu = [],
- ... (30 more removed lines; see GitHub link above)
+       let Eq, gq, Oq, Aq = [],
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L687-L807` → after: `L1018-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1018-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1018-L1058) · [Before (L687-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L687-L807)

```diff
-         get useVertexPulling() {
-           return this._useVertexPulling
-         }
-         set useVertexPulling(uz) {
-           this._useVertexPulling !== uz && (this._useVertexPulling = uz, this.zuz(zz.MiscDirtyFlag))
-         }
-         get _supportGlowLayer() {
-           return !1
-         }
-         set _glowModeEnabled(zz) {}
-         get shaderLanguage() {
-           return this._shaderLanguage
-         }
-         get canRenderToMRT() {
-           return !1
-         }
- ... (105 more removed lines; see GitHub link above)
+         constructor() {
+           this.wheelPrecision = (0, Yq.i)(this, Aq, 3), this.zoomToMouseLocation = ((0, Yq.i)(this, cq), (0, Yq.i)(this, Bq, !1)), this.wheelDeltaPercentage = ((0, Yq.i)(this, Nq), (0, Yq.i)(this, aq, 0)), this.customComputeDeltaFromMouseWheel = ((0, Yq.i)(this, Vq), null), this. … [truncated]
+         }
+         _computeDeltaFromMouseWheelLegacyEvent(qq, Eq) {
+           let gq;
+           const Yq = .01 * qq * this.wheelDeltaPercentage * Eq;
+           return gq = qq > 0 ? Yq / (1 + this.wheelDeltaPercentage) : Yq * (1 + this.wheelDeltaPercentage), gq
+         }
+         attachControl(qq) {
+           qq = Qq.f.BackCompatCameraNoPreventDefault(arguments), this._wheel = Eq => {
+             if (Eq.type !== uq.b.POINTERWHEEL) return;
+             const gq = Eq.event;
+             let Yq;
+             const lq = gq.deltaMode === bq.b.DOM_DELTA_LINE ? 40 : 1,
+               Oq = -gq.deltaY * lq;
+             if (this.customComputeDeltaFromMouseWheel) Yq = this.customComputeDeltaFromMouseWheel(Oq, this, gq);
+ ... (25 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L853-L908` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1062) · [Before (L853-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L853-L908)

```diff
-           return "Material"
-         }
-         get _isMaterial() {
-           return !0
-         }
-         get isFrozen() {
-           return this.checkReadyOnlyOnce
-         }
-         freeze() {
-           this.markDirty(), this.checkReadyOnlyOnce = !0
-         }
-         unfreeze() {
-           this.markDirty(), this.checkReadyOnlyOnce = !1
-         }
-         isReady(zz, uz) {
-           return !0
- ... (40 more removed lines; see GitHub link above)
+           return "ArcRotateCameraMouseWheelInput"
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L910-L911` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1064-L1065) · [Before (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L910-L911)

```diff
-         needAlphaTestingForMesh(zz) {
-           return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(zz) && this.needAlphaTesting()
+         getSimpleName() {
+           return "mousewheel"
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L913-L914` → after: `L1067-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1067-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1067-L1070) · [Before (L913-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L913-L914)

```diff
-         getAlphaTestTexture() {
-           return null
+         _updateHitPlane() {
+           const qq = this.camera,
+             Eq = qq.target.subtract(qq.position);
+           this._hitPlane = nq.d.FromPositionAndNormal(qq.target, Eq)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L916-L1005` → after: `L1072-L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1072-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1072-L1086) · [Before (L916-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L916-L1005)

```diff
-         markDirty() {
-           let uz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           const bz = this.XT().meshes;
-           for (const zz of bz)
-             if (zz.hN)
-               for (const bz of zz.hN)
-                 if (bz.lR() === this)
-                   for (const zz of bz._drawWrappers) zz && this._materialContext === zz.materialContext && (zz._wasPreviouslyReady = !1, zz._wasPreviouslyUsingInstances = null, zz._forceRebindOnNextCall = uz);
-           uz && this.zuz(zz.AllDirtyFlag)
-         }
-         _preBind(uz) {
-           let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           const Ez = this._scene.uR(),
-             nz = (null == bz ? this.sideOrientation : bz) === zz.ClockWiseSideOrientation,
-             iz = uz || this._getDrawWrapper();
-           return (0, Kz.c)(iz) && iz.materialContext && (iz.materialContext.useVertexPulling = this.useVertexPulling), Ez.enableEffect(iz), Ez.setState(this.backFaceCulling, this.zOffset, !1, nz, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this … [truncated]
- ... (74 more removed lines; see GitHub link above)
+         _getPosition() {
+           const qq = this.camera,
+             Eq = qq.ZJ(),
+             gq = Eq.createPickingRay(Eq.pointerX, Eq.pointerY, mq.e.Identity(), qq, !1);
+           0 === qq.targetScreenOffset.x && 0 === qq.targetScreenOffset.y || (this._viewOffset.set(qq.targetScreenOffset.x, qq.targetScreenOffset.y, 0), qq.getViewMatrix().invertToRef(qq._cameraTransformMatrix), this._globalOffset = mq.q.TransformNormal(this._viewOffset, qq._camer … [truncated]
+           let Yq = 0;
+           return this._hitPlane && (Yq = gq.intersectsPlane(this._hitPlane) ?? 0), gq.origin.addInPlace(gq.direction.scaleInPlace(Yq))
+         }
+         _zoomToMouse(qq) {
+           const Eq = this.camera,
+             gq = 1 - Eq.inertia,
+             Yq = Eq.movement.getFrameIndependentInputScale(Eq.inertia);
+           if (Eq.lowerRadiusLimit) {
+             const lq = Eq.lowerRadiusLimit ?? 0;
+             Eq.radius - (this._zoomToMouseRadiusOffset + qq * Yq) / gq < lq && (qq = ((Eq.radius - lq) * gq - this._zoomToMouseRadiusOffset) / Yq)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1007-L1106` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1088-L1090) · [Before (L1007-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1007-L1106)

```diff
-           return this._scene.meshes.filter((zz => zz.material === this))
-         }
-         forceCompilation(zz, uz, bz, Ez) {
-           const nz = {
-               clipPlane: !1,
-               useInstances: !1,
-               ...bz
-             },
-             iz = this.XT(),
-             lz = this.allowShaderHotSwapping;
-           this.allowShaderHotSwapping = !1;
-           const Mz = () => {
-             if (!this._scene || !this._scene.uR()) return;
-             const bz = iz.clipPlane;
-             if (nz.clipPlane && (iz.clipPlane = new pz.b(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
-               let bz = !0,
- ... (84 more removed lines; see GitHub link above)
+           if (Eq.upperRadiusLimit) {
+             const lq = Eq.upperRadiusLimit ?? 0;
+             Eq.radius - (this._zoomToMouseRadiusOffset + qq * Yq) / gq > lq && (qq = ((Eq.radius - lq) * gq - this._zoomToMouseRadiusOffset) / Yq)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1109-L1174` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1097-L1098) · [Before (L1109-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1109-L1174)

```diff
-         setPrePassRenderer(zz) {
-           return !1
-         }
-         dispose(zz, uz, bz) {
-           const Ez = this.XT();
-           if (Ez.stopAnimation(this), Ez.freeProcessedMaterials(), Ez.removeMaterial(this), this._eventInfo.forceDisposeTextures = uz, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
-             const zz = this._parentContainer.materials.indexOf(this);
-             zz > -1 && this._parentContainer.materials.splice(zz, 1), this._parentContainer = null
-           }
-           if (!0 !== bz)
-             if (this.meshMap)
-               for (const nz in this.meshMap) {
-                 const zz = this.meshMap[nz];
-                 this._disposeMeshResources(zz)
-               } else {
-                 const zz = Ez.meshes;
- ... (50 more removed lines; see GitHub link above)
+         _zeroIfClose(qq) {
+           Math.abs(qq.x) < Wq.c && (qq.x = 0), Math.abs(qq.y) < Wq.c && (qq.y = 0), Math.abs(qq.z) < Wq.c && (qq.z = 0)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1178-L1270` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1102) · [Before (L1178-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1178-L1270)

```diff
-         uz = [(0, nz.G)()], bz = [(0, nz.G)()], wz = [(0, nz.G)()], Xz = [(0, nz.G)()], fz = [(0, nz.G)()], sz = [(0, nz.G)()], rz = [(0, nz.G)()], oz = [(0, nz.G)("alpha")], Nz = [(0, nz.G)("backFaceCulling")], vz = [(0, nz.G)("textureRepetitionMode")], xz = [(0, nz.G)("textureR … [truncated]
-           kind: "getter",
-           name: "pointsCloud",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "pointsCloud" in zz,
-             get: zz => zz.pointsCloud
-           },
-           metadata: iz
-         }, null, Wz), (0, Ez.h)(zz, null, Sz, {
-           kind: "getter",
-           name: "fillMode",
-           static: !1,
-           private: !1,
-           access: {
- ... (77 more removed lines; see GitHub link above)
+         Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1272` → after: `L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1104) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1272)

```diff
-           name: "checkReadyOnEveryCall",
+           name: "wheelPrecision",
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1276-L1277` → after: `L1108-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1108-L1109) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1276-L1277)

```diff
-             has: zz => "checkReadyOnEveryCall" in zz,
-             get: zz => zz.checkReadyOnEveryCall,
+             has: qq => "wheelPrecision" in qq,
+             get: qq => qq.wheelPrecision,
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1279` → after: `L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1111) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1279)

```diff
-               zz.checkReadyOnEveryCall = uz
+               qq.wheelPrecision = Eq
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1283` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1115) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1283)

```diff
-         }, uu, bu), (0, Ez.h)(null, null, sz, {
+         }, Aq, cq), (0, Yq.f)(null, null, gq, {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1285` → after: `L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1117) · [Before (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1285)

```diff
-           name: "checkReadyOnlyOnce",
+           name: "zoomToMouseLocation",
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1289-L1290` → after: `L1121-L1122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1121-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1121-L1122) · [Before (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1289-L1290)

```diff
-             has: zz => "checkReadyOnlyOnce" in zz,
-             get: zz => zz.checkReadyOnlyOnce,
+             has: qq => "zoomToMouseLocation" in qq,
+             get: qq => qq.zoomToMouseLocation,
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1292` → after: `L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1124) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1292)

```diff
-               zz.checkReadyOnlyOnce = uz
+               qq.zoomToMouseLocation = Eq
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1296` → after: `L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1128) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1296)

```diff
-         }, Eu, nu), (0, Ez.h)(null, null, rz, {
+         }, Bq, Nq), (0, Yq.f)(null, null, Oq, {
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1298` → after: `L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1130) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1298)

```diff
-           name: "state",
+           name: "wheelDeltaPercentage",
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1302-L1303` → after: `L1134-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1134-L1135) · [Before (L1302-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1302-L1303)

```diff
-             has: zz => "state" in zz,
-             get: zz => zz.state,
+             has: qq => "wheelDeltaPercentage" in qq,
+             get: qq => qq.wheelDeltaPercentage,
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1305` → after: `L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1137) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1305)

```diff
-               zz.state = uz
+               qq.wheelDeltaPercentage = Eq
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1309-L1319` → after: `L1141-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1141-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1141-L1172) · [Before (L1309-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1309-L1319)

```diff
-         }, iu, lu), (0, Ez.h)(null, null, oz, {
-           kind: "field",
-           name: "_alpha",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "_alpha" in zz,
-             get: zz => zz._alpha,
-             set: (zz, uz) => {
-               zz._alpha = uz
-             }
+         }, aq, Vq), mq && Object.defineProperty(qq, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: mq
+         })
+       })(), qq
+     })();
+     Pq.d.ArcRotateCameraMouseWheelInput = iq;
+     var Zq, fq, Mq = gq(39636);
+     class Tq extends Pq.f {
+       constructor(qq) {
+         super(qq)
+       }
+       addMouseWheel() {
+         return this.add(new iq), this
+ ... (16 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1321-L1332` → after: `L1174-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1174-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1174-L1175) · [Before (L1321-L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1321-L1332)

```diff
-           metadata: iz
-         }, Mu, tu), (0, Ez.h)(null, null, Nz, {
-           kind: "field",
-           name: "_backFaceCulling",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "_backFaceCulling" in zz,
-             get: zz => zz._backFaceCulling,
-             set: (zz, uz) => {
-               zz._backFaceCulling = uz
-             }
+           rotate: (qq, Eq) => {
+             this.rotationAccumulatedPixels.x += qq, this.rotationAccumulatedPixels.y += Eq
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1334-L1345` → after: `L1177-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1177-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1177-L1187) · [Before (L1334-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1334-L1345)

```diff
-           metadata: iz
-         }, Hu, Ou), (0, Ez.h)(null, null, vz, {
-           kind: "field",
-           name: "_textureRepetitionMode",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "_textureRepetitionMode" in zz,
-             get: zz => zz._textureRepetitionMode,
-             set: (zz, uz) => {
-               zz._textureRepetitionMode = uz
-             }
+           zoom: qq => {
+             this.zoomAccumulatedPixels += qq
+           }
+         }, (() => this._createDefaultInputMap()))
+       }
+       _createDefaultInputMap() {
+         return [{
+           source: "pointer",
+           button: 0,
+           modifiers: {
+             ctrl: !0
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1347-L1358` → after: `L1189-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1189-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1189-L1208) · [Before (L1347-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1347-L1358)

```diff
-           metadata: iz
-         }, pu, du), (0, Ez.h)(null, null, xz, {
-           kind: "field",
-           name: "textureRepetitionHexTilingParams",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "textureRepetitionHexTilingParams" in zz,
-             get: zz => zz.textureRepetitionHexTilingParams,
-             set: (zz, uz) => {
-               zz.textureRepetitionHexTilingParams = uz
-             }
+           interaction: "pan"
+         }, {
+           source: "pointer",
+           button: 0,
+           interaction: "rotate"
+         }, {
+           source: "pointer",
+           button: 2,
+           interaction: "pan"
+         }, {
+           source: "wheel",
+           interaction: "zoom"
+         }, {
+           source: "keyboard",
+           key: [187, 107, 189, 109],
+           interaction: "zoom"
+ ... (4 more added lines; see GitHub link above)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1360-L1371` → after: `L1210-L1214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1210-L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1210-L1214) · [Before (L1360-L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1360-L1371)

```diff
-           metadata: iz
-         }, Fu, Zu), (0, Ez.h)(null, null, Jz, {
-           kind: "field",
-           name: "_cullBackFaces",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "_cullBackFaces" in zz,
-             get: zz => zz._cullBackFaces,
-             set: (zz, uz) => {
-               zz._cullBackFaces = uz
-             }
+           interaction: "pan"
+         }, {
+           source: "keyboard",
+           modifiers: {
+             alt: !0
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1373-L1448` → after: `L1216-L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1216-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1216-L1549) · [Before (L1373-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1373-L1448)

```diff
-           metadata: iz
-         }, Ru, Ku), (0, Ez.h)(null, null, Az, {
-           kind: "field",
-           name: "sideOrientation",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "sideOrientation" in zz,
-             get: zz => zz.sideOrientation,
-             set: (zz, uz) => {
-               zz.sideOrientation = uz
-             }
-           },
-           metadata: iz
-         }, wu, Xu), (0, Ez.h)(null, null, Tz, {
-           kind: "field",
- ... (60 more removed lines; see GitHub link above)
+           interaction: "zoom"
+         }, {
+           source: "keyboard",
+           interaction: "rotate"
+         }]
+       }
+     }
+ 
+     function Lq(qq, Eq) {
+       return isNaN(qq) ? Eq : qq
+     }
+     let Jq = (() => {
+         var qq;
+         let Eq, gq, Aq, uq, Bq, aq, Vq, Pq, yq, tq, rq, vq, hq, nq, bq, iq, Zq, fq, Mq, zq, Sq, pq, Jq, kq, Rq, Uq, Fq, sq, Xq = oq.h,
+           wq = [],
+           Kq = [],
+ ... (318 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1450-L1461` → after: `L1551-L1580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1551-L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1551-L1580) · [Before (L1450-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1450-L1461)

```diff
-           },
-           metadata: iz
-         }, Au, Tu), (0, Ez.h)(null, null, Vz, {
-           kind: "field",
-           name: "depthFunction",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "depthFunction" in zz,
-             get: zz => zz.depthFunction,
-             set: (zz, uz) => {
-               zz.depthFunction = uz
+             const qq = this._getLockedTargetPosition();
+             return qq || this.K3
+           }
+           storeState() {
+             return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
+           }
+           _restoreStateValues() {
+             return this.hasStateStored() && this.restoreStateInterpolationFactor > Wq.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreState … [truncated]
+           }
+           stopInterpolation() {
+             this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
+           }
+           interpolateTo() {
+             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
+               Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
+               gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
+ ... (14 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1463-L1474` → after: `L1582-L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1582-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1582-L1621) · [Before (L1463-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1463-L1474)

```diff
-           },
-           metadata: iz
-         }, Lu, Pu), (0, Ez.h)(null, null, mz, {
-           kind: "field",
-           name: "separateCullingPass",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "separateCullingPass" in zz,
-             get: zz => zz.separateCullingPass,
-             set: (zz, uz) => {
-               zz.separateCullingPass = uz
+           }
+           detachControl() {
+             this.inputs.detachElement(), this._reset && this._reset()
+           }
+           _applyRotationAndZoomDelta(qq, Eq, gq) {
+             const Yq = this.invertRotation ? -1 : 1;
+             let lq = qq * this._calculateHandednessMultiplier();
+             this.beta < 0 && (lq *= -1), this.alpha += lq * Yq, this.beta += Eq * Yq, this.radius -= gq
+           }
+           _applyPanDelta(qq, Eq) {
+             const gq = mq.o.Na[0].Vqq(qq, Eq, Eq);
+             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), gq.multiplyInPlace(this.panningAxis), mq.q.TransformNormalToRef(gq, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
+               const qq = this.upVector,
+                 Eq = mq.q.CrossToRef(this._transformedDirection, qq, this._transformedDirection);
+               mq.q.CrossToRef(qq, Eq, this._transformedDirection)
+             } else this.panningAxis.y || (this._transformedDirection.y = 0);
+ ... (24 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1476-L1487` → after: `L1623-L1649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1623-L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1623-L1649) · [Before (L1476-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1476-L1487)

```diff
-           },
-           metadata: iz
-         }, Gu, au), (0, Ez.h)(null, null, qz, {
-           kind: "field",
-           name: "_fogEnabled",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "_fogEnabled" in zz,
-             get: zz => zz._fogEnabled,
-             set: (zz, uz) => {
-               zz._fogEnabled = uz
+             if (qq) this.stopInterpolation();
+             else if (this._isInterpolating) {
+               let qq = !1;
+               const Eq = this._scene.Ba().getDeltaTime() / 1e3,
+                 gq = 1 - Math.pow(2, -Eq / this._currentInterpolationFactor),
+                 Yq = Lq(this._goalRadius, this.radius);
+               if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
+                 const Eq = mq.o.Na[0].set(Lq(this._goalTarget.x, this.K3.x), Lq(this._goalTarget.y, this.K3.y), Lq(this._goalTarget.z, this.K3.z));
+                 mq.q.LerpToRef(this.target, Eq, gq, this.K3), 10 * mq.q.Distance(this.target, Eq) / Yq < Wq.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.WG(Eq), this.setTarget(this.target, !1, !0, !0)) : qq = !0
+               }
+               if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
+                 const Eq = mq.h.RotationAlphaBetaGammaToRef(Lq(this._goalAlpha, this.alpha), Lq(this._goalBeta, this.beta), 0, mq.o.Quaternion[0]),
+                   Yq = mq.h.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, mq.o.Quaternion[1]),
+                   lq = mq.h.SlerpToRef(Yq, Eq, gq, mq.o.Quaternion[2]);
+                 lq.normalize();
+                 const Oq = lq.toAlphaBetaGammaToRef(mq.o.Na[0]);
+ ... (11 more added lines; see GitHub link above)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1489-L1500` → after: `L1651-L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1651-L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1651-L1679) · [Before (L1489-L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1489-L1500)

```diff
-           },
-           metadata: iz
-         }, Vu, mu), (0, Ez.h)(null, null, hz, {
-           kind: "field",
-           name: "pointSize",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "pointSize" in zz,
-             get: zz => zz.pointSize,
-             set: (zz, uz) => {
-               zz.pointSize = uz
+             this._checkLimits(), super._checkInputs()
+           }
+           _checkLimits() {
+             null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === thi … [truncated]
+           }
+           rebuildAnglesAndRadius() {
+             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || mq.q.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
+             const qq = this.alpha;
+             var Eq, gq;
+             this.alpha = function(qq) {
+               let Eq = Math.PI / 2;
+               return 0 === qq.x && 0 === qq.z || (Eq = Math.acos(qq.x / Math.sqrt(Math.pow(qq.x, 2) + Math.pow(qq.z, 2)))), qq.z < 0 && (Eq = 2 * Math.PI - Eq), Eq
+             }(this._computationVector), this.beta = (Eq = this._computationVector.y, gq = this.radius, Math.acos(Eq / gq));
+             const Yq = Math.round((qq - this.alpha) / (2 * Math.PI));
+             this.alpha += 2 * Yq * Math.PI, this._checkLimits()
+           }
+ ... (13 more added lines; see GitHub link above)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1502-L1513` → after: `L1681-L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1681-L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1681-L1696) · [Before (L1502-L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1502-L1513)

```diff
-           },
-           metadata: iz
-         }, qu, hu), (0, Ez.h)(null, null, Uz, {
-           kind: "field",
-           name: "zOffset",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "zOffset" in zz,
-             get: zz => zz.zOffset,
-             set: (zz, uz) => {
-               zz.zOffset = uz
+             Yq || this.rebuildAnglesAndRadius()
+           }
+           _getViewMatrix() {
+             const qq = Math.cos(this.alpha),
+               Eq = Math.sin(this.alpha),
+               gq = Math.cos(this.beta);
+             let Yq = Math.sin(this.beta);
+             0 === Yq && (Yq = 1e-4), 0 === this.radius && (this.radius = 1e-4);
+             const lq = this._getTargetPosition();
+             if (this._computationVector.Vqq(this.radius * qq * Yq, this.radius * gq, this.radius * Eq * Yq), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || mq.q.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationV … [truncated]
+               const qq = this.ZJ().collisionCoordinator;
+               this._collider || (this._collider = qq.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, qq.getNewPosition(this._position, this._collisionVelocit … [truncated]
+             } else {
+               this._position.WG(this._newPosition);
+               let qq = this.upVector;
+               this.allowUpsideDown && Yq < 0 && (qq = qq.nY()), this._computeViewMatrix(this._position, lq, qq), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1515-L1526` → after: `L1698-L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1698-L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1698-L1708) · [Before (L1515-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1515-L1526)

```diff
-           },
-           metadata: iz
-         }, Uu, cu), (0, Ez.h)(null, null, cz, {
-           kind: "field",
-           name: "zOffsetUnits",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "zOffsetUnits" in zz,
-             get: zz => zz.zOffsetUnits,
-             set: (zz, uz) => {
-               zz.zOffsetUnits = uz
+             return this._currentTarget.WG(lq), this._viewMatrix
+           }
+           zoomOn(qq) {
+             let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+             qq = qq || this.ZJ().meshes;
+             const gq = cq.e.MinMax(qq);
+             let Yq = this._calculateLowerRadiusFromModelBoundingSphere(gq.min, gq.max);
+             if (Yq = Math.max(Math.min(Yq, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Yq * this.zoomOnFactor, this.mode === Hq.e.ORTHOGRAPHIC_CAMERA) {
+               const qq = this.ZJ().Ba().getAspectRatio(this),
+                 Eq = Yq * this.zoomOnFactor / 2;
+               this.orthoLeft = -Eq * qq, this.orthoRight = Eq * qq, this.orthoBottom = -Eq, this.orthoTop = Eq
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1528-L1539` → after: `L1710-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1710-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1710-L1722) · [Before (L1528-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1528-L1539)

```diff
-           },
-           metadata: iz
-         }, gu, Su), (0, Ez.h)(null, null, Dz, {
-           kind: "field",
-           name: "_isVertexOutputInvariant",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "_isVertexOutputInvariant" in zz,
-             get: zz => zz._isVertexOutputInvariant,
-             set: (zz, uz) => {
-               zz._isVertexOutputInvariant = uz
+             this.focusOn({
+               min: gq.min,
+               max: gq.max,
+               distance: Yq
+             }, Eq)
+           }
+           focusOn(qq) {
+             let Eq, gq, Yq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+             if (void 0 === qq.min) {
+               const Yq = qq || this.ZJ().meshes;
+               Eq = cq.e.MinMax(Yq), gq = mq.q.Distance(Eq.min, Eq.max)
+             } else {
+               Eq = qq, gq = qq.distance
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1541-L2081` → after: `L1724-L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1724-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1724-L1737) · [Before (L1541-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L1541-L2081)

```diff
-           },
-           metadata: iz
-         }, yu, Du), iz && Object.defineProperty(zz, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: iz
-         })
-       })(), zz.TriangleFillMode = 0, zz.WireFrameFillMode = 1, zz.PointFillMode = 2, zz.PointListDrawMode = 3, zz.LineListDrawMode = 4, zz.LineLoopDrawMode = 5, zz.LineStripDrawMode = 6, zz.TriangleStripDrawMode = 7, zz.TriangleFanDrawMode = 8, zz.ClockWiseSideOrientation = 0, zz … [truncated]
-         zz._FresnelDirtyCallBack(uz), zz._MiscDirtyCallBack(uz)
-       }, zz._TextureAndMiscDirtyCallBack = uz => {
-         zz._TextureDirtyCallBack(uz), zz._MiscDirtyCallBack(uz)
-       }, zz._DirtyCallbackArray = [], zz._RunDirtyCallBacks = uz => {
-         for (const bz of zz._DirtyCallbackArray) bz(uz)
-       }, zz
-     })();
- ... (525 more removed lines; see GitHub link above)
+             this.K3 = cq.e.Center(Eq), Yq || (this.maxZ = 2 * gq)
+           }
+           createRigCamera(Eq, gq) {
+             let Yq = 0;
+             switch (this.cameraRigMode) {
+               case Hq.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case Hq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case Hq.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case Hq.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case Hq.e.RIG_MODE_VR:
+                 Yq = this._cameraRigParams.stereoHalfAngle * (0 === gq ? 1 : -1);
+                 break;
+               case Hq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+                 Yq = this._cameraRigParams.stereoHalfAngle * (0 === gq ? -1 : 1)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2083-L2093` → after: `L1739-L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1739-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1739-L1754) · [Before (L2083-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L2083-L2093)

```diff
-             const lz = !0 === uz.MULTIVIEW,
-               Mz = 2 * uz.BonesPerMesh + (lz ? 1 : 0);
-             if (cz.get(zz.skeleton) !== Mz) {
-               cz.set(zz.skeleton, Mz);
-               const bz = nz.uR().getCaps().maxVertexUniformVectors;
-               if (bz && !gz.has(zz.skeleton)) {
-                 const nz = 4 * uz.BonesPerMesh,
-                   iz = lz ? Uz : hz,
-                   Mz = Math.max(bz - iz, 0);
-                 (nz > Mz || lz && 3 * nz > bz) && (gz.add(zz.skeleton), Ez.e.Warn(`Skeleton "${zz.skeleton.name}": ${zz.skeleton.bones.length} bones stored as vertex uniforms use ${nz} of ~${Mz} usable uniform vectors${lz?" (multiview)":""} on a device reporting ${bz}. This can e … [truncated]
-               }
+             const lq = new qq(Eq, this.alpha + Yq, this.beta, this.radius, this.K3, this.ZJ());
+             return lq._cameraRigParams = {}, lq.isRigCamera = !0, lq.rigParent = this, lq.upVector = this.upVector, lq.mode = this.mode, lq.orthoLeft = this.orthoLeft, lq.orthoRight = this.orthoRight, lq.orthoBottom = this.orthoBottom, lq.orthoTop = this.orthoTop, lq
+           }
+           _updateRigCameras() {
+             const qq = this._rigCameras[0],
+               Eq = this._rigCameras[1];
+             switch (qq.beta = Eq.beta = this.beta, this.cameraRigMode) {
+               case Hq.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case Hq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case Hq.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case Hq.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case Hq.e.RIG_MODE_VR:
+                 qq.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, Eq.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
+                 break;
+               case Hq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+                 qq.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, Eq.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2096-L2217` → after: `L1758-L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1758-L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L1758-L2135) · [Before (L2096-L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L2096-L2217)

```diff
-         } else uz.NUM_BONE_INFLUENCERS = 0, uz.BonesPerMesh = 0, void 0 !== uz.BONETEXTURE && (uz.BONETEXTURE = !1)
-       }(zz, uz), iz && function(zz, uz) {
-         const bz = zz.morphTargetManager;
-         bz ? (uz.MORPHTARGETS_UV = bz.supportsUVs && uz.UV1, uz.MORPHTARGETS_UV2 = bz.supportsUV2s && uz.UV2, uz.MORPHTARGETS_TANGENT = bz.supportsTangents && uz.TANGENT, uz.MORPHTARGETS_NORMAL = bz.supportsNormals && uz.NORMAL, uz.MORPHTARGETS_POSITION = bz.supportsPositions, uz … [truncated]
-       }(zz, uz), Mz && function(zz, uz) {
-         const bz = zz.bakedVertexAnimationManager;
-         uz.BAKED_VERTEX_ANIMATION_TEXTURE = !(!bz || !bz.isEnabled)
-       }(zz, uz), !0
-     }
- 
-     function yz(zz, uz) {
-       if (zz.activeCamera) {
-         const bz = uz.MULTIVIEW;
-         uz.MULTIVIEW = null !== zz.activeCamera.outputRenderTarget && zz.activeCamera.outputRenderTarget.getViewCount() > 1, uz.MULTIVIEW != bz && uz.markAsUnprocessed()
-       }
-     }
- ... (106 more removed lines; see GitHub link above)
+           _calculateLowerRadiusFromModelBoundingSphere(qq, Eq) {
+             let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+             const Yq = mq.q.Distance(qq, Eq),
+               lq = this.ZJ().Ba().getAspectRatio(this),
+               Oq = Math.tan(this.fov / 2),
+               xq = Oq * lq,
+               Aq = .5 * Yq * gq,
+               cq = Aq * Math.sqrt(1 + 1 / (xq * xq)),
+               uq = Aq * Math.sqrt(1 + 1 / (Oq * Oq));
+             return Math.max(cq, uq)
+           }
+           dispose() {
+             this.inputs.clear(), super.dispose()
+           }
+           getClassName() {
+             return "ArcRotateCamera"
+ ... (362 more added lines; see GitHub link above)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2219` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L2137) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L2219)

```diff
-   39519: (zz, uz, bz) => {
+   39988: (qq, Eq, gq) => {
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2221` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L2139) · [Before (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L2221)

```diff
-       b: () => iz
+       d: () => Yq.d
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2223-L2261` → after: `L2141-L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L2141-L2142) · [Before (L2223-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L2223-L2261)

```diff
-     var Ez = bz(36519),
-       nz = bz(39451);
-     class iz extends nz.c {
-       constructor(zz, uz) {
-         let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-         super(zz, uz, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Ez.d, this._storeEffectOnSubMeshes = bz
-       }
-       getEffect() {
-         return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
-       }
-       isReady(zz, uz) {
-         return !!zz && (!this._storeEffectOnSubMeshes || (!zz.hN || 0 === zz.hN.length || this.isReadyForSubMesh(zz, zz.hN[0], uz)))
-       }
-       _isReadyForSubMesh(zz) {
-         const uz = zz.materialDefines;
-         return !(this.checkReadyOnEveryCall || !zz.effect || !uz || uz._renderId !== this.XT().getRenderId())
- ... (23 more removed lines; see GitHub link above)
+     var Yq = gq(39993);
+     (0, Yq.e)()
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2263` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L2144) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L2263)

```diff
-   39540: (zz, uz, bz) => {
+   39993: (qq, Eq, gq) => {
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2265` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L2146) · [Before (L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L2265)

```diff
-       c: () => iz,
+       d: () => uq,
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2268-L2314` → after: `L2149-L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L2149-L2155) · [Before (L2268-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L2268-L2314)

```diff
-     const Ez = new WeakMap;
- 
-     function nz(zz) {
-       const uz = zz.getVertexBuffers();
-       if (!uz) return null;
-       let bz = Ez.get(zz);
-       if (bz) {
-         let zz = !1;
-         for (const Ez in uz)
-           if (!bz.has(Ez)) {
-             zz = !0;
-             break
-           } if (!zz) return bz
-       } else bz = new Map, Ez.set(zz, bz);
-       for (const Ez in uz) {
-         const zz = uz[Ez];
- ... (31 more removed lines; see GitHub link above)
+     var Yq = gq(39757),
+       lq = gq(39759),
+       Oq = gq(37139),
+       mq = gq(37289),
+       xq = gq(39995),
+       Aq = gq(39960),
+       cq = gq(37171);
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2316-L2325` → after: `L2157-L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2157-L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L2157-L2165) · [Before (L2316-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L2316-L2325)

```diff
-       var zz;
-       let uz, bz, nz = [];
-       return zz = class {
-         static extractMinAndMaxIndexed(zz, uz, bz, Ez, nz, iz) {
-           for (let lz = bz; lz < bz + Ez; lz++) {
-             const bz = 3 * uz[lz],
-               Ez = zz[bz],
-               Mz = zz[bz + 1],
-               tz = zz[bz + 2];
-             nz.minimizeInPlaceFromFloats(Ez, Mz, tz), iz.maximizeInPlaceFromFloats(Ez, Mz, tz)
+         var qq;
+         let Eq, gq, Aq = xq.c,
+           cq = [],
+           uq = [],
+           Bq = [],
+           Wq = [];
+         return qq = class extends Aq {
+           constructor(qq, Eq, gq, lq) {
+             super(qq, gq, lq), this.groundColor = (0, Yq.i)(this, cq, new mq.d(0, 0, 0)), this.direction = ((0, Yq.i)(this, uq), (0, Yq.i)(this, Bq, void 0)), (0, Yq.i)(this, Wq), this.direction = Eq || Oq.q.Up()
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2327-L2333` → after: `L2167-L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2167-L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L2167-L2168) · [Before (L2327-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L2327-L2333)

```diff
-         }
-         static extractMinAndMax(zz, uz, bz, Ez, nz, iz) {
-           for (let lz = uz, Mz = uz * Ez; lz < uz + bz; lz++, Mz += Ez) {
-             const uz = zz[Mz],
-               bz = zz[Mz + 1],
-               Ez = zz[Mz + 2];
-             nz.minimizeInPlaceFromFloats(uz, bz, Ez), iz.maximizeInPlaceFromFloats(uz, bz, Ez)
+           _buildUniformLayout() {
+             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniform … [truncated]
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2335-L2596` → after: `L2170-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L2170-L2171) · [Before (L2335-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L2335-L2596)

```diff
-         }
-       }, (() => {
-         const lz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         uz = [iz.l.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
-         }))], bz = [iz.l.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], (0, Ez.h)(zz, null, uz, {
-           kind: "method",
-           name: "extractMinAndMaxIndexed",
-           static: !0,
-           private: !1,
-           access: {
-             has: zz => "extractMinAndMaxIndexed" in zz,
-             get: zz => zz.extractMinAndMaxIndexed
-           },
- ... (246 more removed lines; see GitHub link above)
+           getClassName() {
+             return "HemisphericLight"
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2598-L2611` → after: `L2173-L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2173-L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L2173-L2174) · [Before (L2598-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L2598-L2611)

```diff
-         }
-         return Mz
-       }
-       _intersectUnIndexedTriangles(zz, uz, bz, Ez, nz) {
-         let iz = null;
-         for (let lz = this.verticesStart; lz < this.verticesStart + this.verticesCount; lz += 3) {
-           const bz = uz[lz],
-             Mz = uz[lz + 1],
-             tz = uz[lz + 2];
-           if (nz && !nz(bz, Mz, tz, zz, -1, -1, -1)) continue;
-           const Hz = zz.intersectsTriangle(bz, Mz, tz);
-           if (Hz) {
-             if (Hz.distance < 0) continue;
-             if ((Ez || !iz || Hz.distance < iz.distance) && (iz = Hz, iz.faceId = lz / 3, Ez)) break
+           setDirectionToTarget(qq) {
+             return this.direction = Oq.q.Normalize(qq.subtract(Oq.q.Zero())), this.direction
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2613-L2648` → after: `L2176-L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2176-L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/252.js#L2176-L2236) · [Before (L2613-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/252.js#L2613-L2648)

```diff
-         }
-         return iz
-       }
-       _rebuild() {
-         this._linesIndexBuffer && (this._linesIndexBuffer = null)
-       }
-       clone(zz, uz) {
-         const bz = new Oz(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, zz, uz, !1);
-         if (!this.IsGlobal) {
-           const zz = this.lG();
-           if (!zz) return bz;
-           bz._boundingInfo = new lz.e(zz.minimum, zz.maximum)
-         }
-         return bz
-       }
-       dispose() {
- ... (20 more removed lines; see GitHub link above)
+           getShadowGenerator() {
+             return null
+           }
+           transferToEffect(qq, Eq) {
+             const gq = Oq.q.Normalize(this.direction);
+             return this._uniformBuffer.updateFloat4("vLightData", gq.x, gq.y, gq.z, 0, Eq), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Eq), this
+           }
+           transferToNodeMaterialEffect(qq, Eq) {
+             const gq = Oq.q.Normalize(this.direction);
+             return qq.setFloat3(Eq, gq.x, gq.y, gq.z), this
+           }
+           computeWorldMatrix() {
+             return this._worldMatrix || (this._worldMatrix = Oq.e.Identity()), this._worldMatrix
+           }
+           getTypeID() {
+             return xq.c.LIGHTTYPEID_HEMISPHERICLIGHT
+ ... (45 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/253.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/253.js` (57 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L4)

```diff
-   40809: (zz, uz, bz) => {
+   40150: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L8-L24` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L8-L11) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L8-L24)

```diff
-     class Ez {}
-     Ez.AUTOSAMPLERSUFFIX = "Sampler", Ez.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Ez.ALPHA_DISABLE = 0, Ez.ALPHA_ADD = 1, Ez.ALPHA_COMBINE = 2, Ez.ALPHA_SUBTRACT = 3, Ez.ALPHA_MULTIPLY = 4, Ez.ALPHA_MAXIMIZED = 5, Ez.ALPHA_ONEONE = 6, Ez.ALPHA_PREMULTIPLIED = 7, Ez.ALPH … [truncated]
-   },
-   40786: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => tz
-     });
-     var Ez = bz(39170),
-       nz = bz(39172),
-       iz = bz(36519),
-       lz = bz(39421),
-       Mz = bz(39386);
-     let tz = (() => {
-       var zz;
-       let uz, bz, tz, Hz, Oz = lz.b,
-         pz = [];
- ... (1 more removed lines; see GitHub link above)
+     var Yq = gq(39768);
+ 
+     function lq(qq) {
+       return class extends qq {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L26` → after: `L13-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L13-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L13-L34) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L26)

```diff
-           super(...arguments), this._position = (0, Ez.j)(this, pz), this._needProjectionMatrixCompute = !0, this._viewMatrix = iz.d.Identity(), this._projectionMatrix = iz.d.Identity()
+           super(...arguments);
+           const qq = new.target;
+           if (!qq[Symbol.metadata]) {
+             const Eq = Object.getPrototypeOf(qq)?.[Symbol.metadata];
+             qq[Symbol.metadata] = Eq ? Object.create(Eq) : {}
+           }
+           const Eq = (0, Yq.e)(qq[Symbol.metadata]);
+           Eq._imageProcessingConfiguration || (Eq._imageProcessingConfiguration = {
+             type: 9,
+             sourceName: void 0
+           })
+         }
+         get imageProcessingConfiguration() {
+           return this._imageProcessingConfiguration
+         }
+         set imageProcessingConfiguration(qq) {
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L28-L29` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L36-L37) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L28-L29)

```diff
-         _setPosition(zz) {
-           this._position = zz
+         get cameraColorCurvesEnabled() {
+           return this.imageProcessingConfiguration.colorCurvesEnabled
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L31-L32` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L39-L40) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L31-L32)

```diff
-         get position() {
-           return this._position
+         set cameraColorCurvesEnabled(qq) {
+           this.imageProcessingConfiguration.colorCurvesEnabled = qq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L34-L35` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L42-L43) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L34-L35)

```diff
-         set position(zz) {
-           this._setPosition(zz)
+         get cameraColorGradingEnabled() {
+           return this.imageProcessingConfiguration.colorGradingEnabled
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L37-L38` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L45-L46) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L37-L38)

```diff
-         _setDirection(zz) {
-           this._direction = zz
+         set cameraColorGradingEnabled(qq) {
+           this.imageProcessingConfiguration.colorGradingEnabled = qq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L40-L41` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L48-L49) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L40-L41)

```diff
-         get direction() {
-           return this._direction
+         get cameraToneMappingEnabled() {
+           return this._imageProcessingConfiguration.toneMappingEnabled
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L43-L44` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L51-L52) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L43-L44)

```diff
-         set direction(zz) {
-           this._setDirection(zz)
+         set cameraToneMappingEnabled(qq) {
+           this._imageProcessingConfiguration.toneMappingEnabled = qq
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L46-L47` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L54-L55) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L46-L47)

```diff
-         get shadowMinZ() {
-           return this._shadowMinZ
+         get cameraExposure() {
+           return this._imageProcessingConfiguration.exposure
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L49-L50` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L57-L58) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L49-L50)

```diff
-         set shadowMinZ(zz) {
-           this._shadowMinZ = zz, this.forceProjectionMatrixCompute()
+         set cameraExposure(qq) {
+           this._imageProcessingConfiguration.exposure = qq
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L52-L53` → after: `L60-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L60-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L60-L91) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L52-L53)

```diff
-         get shadowMaxZ() {
-           return this._shadowMaxZ
+         get cameraContrast() {
+           return this._imageProcessingConfiguration.contrast
+         }
+         set cameraContrast(qq) {
+           this._imageProcessingConfiguration.contrast = qq
+         }
+         get cameraColorGradingTexture() {
+           return this._imageProcessingConfiguration.colorGradingTexture
+         }
+         set cameraColorGradingTexture(qq) {
+           this._imageProcessingConfiguration.colorGradingTexture = qq
+         }
+         get cameraColorCurves() {
+           return this._imageProcessingConfiguration.colorCurves
+         }
+         set cameraColorCurves(qq) {
+ ... (16 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L55-L56` → after: `L93-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L93-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L93-L134) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L55-L56)

```diff
-         set shadowMaxZ(zz) {
-           this._shadowMaxZ = zz, this.forceProjectionMatrixCompute()
+       }
+     }
+     class Oq extends Yq.c {
+       constructor() {
+         super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this. … [truncated]
+       }
+     }
+   },
+   40111: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => Bq
+     });
+     var Yq = gq(39757),
+       lq = gq(40037),
+       Oq = gq(39759),
+       mq = gq(40092),
+ ... (26 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L58-L59` → after: `L136-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L136-L137) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L58-L59)

```diff
-         computeTransformedInformation() {
-           return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = iz.n.Zero()), iz.n.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDire … [truncated]
+         set texture(qq) {
+           (0, Yq.e)(this, Eq, qq, "f")
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L61-L62` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L139-L140) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L61-L62)

```diff
-         getDepthScale() {
-           return 50
+         get normalBlendMethod() {
+           return (0, Yq.b)(this, gq, "f")
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L64-L65` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L142-L143) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L64-L65)

```diff
-         getShadowDirection(zz) {
-           return this.transformedDirection ? this.transformedDirection : this.direction
+         set normalBlendMethod(qq) {
+           (0, Yq.e)(this, gq, qq, "f")
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L67-L68` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L145-L146) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L67-L68)

```diff
-         getAbsolutePosition() {
-           return this.transformedPosition ? this.transformedPosition : this.position
+         get isEnabled() {
+           return (0, Yq.b)(this, xq, "f")
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L70-L71` → after: `L148-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L148-L149) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L70-L71)

```diff
-         setDirectionToTarget(zz) {
-           return this.direction = iz.n.Normalize(zz.subtract(this.position)), this.direction
+         set isEnabled(qq) {
+           (0, Yq.e)(this, xq, qq, "f")
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L73-L77` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L151-L152) · [Before (L73-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L73-L77)

```diff
-         getRotation() {
-           this.direction.normalize();
-           const zz = iz.n.Cross(this.direction, Mz.b.Y),
-             uz = iz.n.Cross(zz, this.direction);
-           return iz.n.RotationFromAxis(zz, uz, this.direction)
+         _markAllSubMeshesAsTexturesDirty() {
+           this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L79-L80` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L154-L155) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L79-L80)

```diff
-         needCube() {
-           return !1
+         isCompatible() {
+           return !0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L82-L83` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L157-L159) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L82-L83)

```diff
-         needProjectionMatrixCompute() {
-           return this._needProjectionMatrixCompute
+         constructor(qq) {
+           let Oq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+           super(qq, "DetailMap", 140, new uq, Oq), this._texture = null, Eq.set(this, (0, Yq.i)(this, Hq, void 0)), this.diffuseBlendLevel = ((0, Yq.i)(this, oq), (0, Yq.i)(this, Pq, 1)), this.roughnessBlendLevel = ((0, Yq.i)(this, Qq), (0, Yq.i)(this, yq, 1)), this.bumpLevel = ( … [truncated]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L85-L86` → after: `L161-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L161-L162) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L85-L86)

```diff
-         forceProjectionMatrixCompute() {
-           this._needProjectionMatrixCompute = !0
+         isReadyForSubMesh(qq, Eq, gq) {
+           return !this._isEnabled || !(qq._areTexturesDirty && Eq.texturesEnabled && gq.getCaps().standardDerivatives && this._texture && mq.c.DetailTextureEnabled && !this._texture.isReady())
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L88-L89` → after: `L164-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L164-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L164-L169) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L88-L89)

```diff
-         _initCache() {
-           super._initCache(), this._cache.position = iz.n.Zero()
+         prepareDefines(qq, Eq) {
+           if (this._isEnabled) {
+             qq.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
+             const gq = Eq.Ba();
+             qq._areTexturesDirty && (gq.getCaps().standardDerivatives && this._texture && mq.c.DetailTextureEnabled && this._isEnabled ? ((0, cq.bb)(this._texture, qq, "DETAIL"), qq.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : qq.DETAIL = !1)
+           } else qq.DETAIL = !1
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L91-L92` → after: `L171-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L171-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L171-L174) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L91-L92)

```diff
-         _isSynchronized() {
-           return !!this._cache.position.equals(this.position)
+         bindForSubMesh(qq, Eq) {
+           if (!this._isEnabled) return;
+           const gq = this._material.isFrozen;
+           qq.useUbo && gq && qq.isSync || this._texture && mq.c.DetailTextureEnabled && (qq.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, cq.w)(this._texture, qq, "detail")), Eq.texturesEnabled  … [truncated]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L94-L95` → after: `L176-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L176-L177) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L94-L95)

```diff
-         computeWorldMatrix(zz) {
-           return !zz && this.isSynchronized() ? (this._currentRenderId = this.XT().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.euz(this.position), this._worldMatrix || (this._worldMatrix = iz.d.Identity()), iz.d.TranslationToRef(this.position.x, … [truncated]
+         hasTexture(qq) {
+           return this._texture === qq
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L97-L98` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L179-L180) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L97-L98)

```diff
-         getDepthMinZ(zz) {
-           return void 0 !== this.shadowMinZ ? this.shadowMinZ : zz?.minZ || 0
+         getActiveTextures(qq) {
+           this._texture && qq.push(this._texture)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L100-L101` → after: `L182-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L182-L183) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L100-L101)

```diff
-         getDepthMaxZ(zz) {
-           return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : zz?.maxZ || 1e4
+         getAnimatables(qq) {
+           this._texture && this._texture.animations && this._texture.animations.length > 0 && qq.push(this._texture)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L103-L104` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L185-L186) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L103-L104)

```diff
-         setShadowProjectionMatrix(zz, uz, bz) {
-           return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(uz, bz, zz) : this._setDefaultShadowProjectionMatrix(zz, uz, bz), this
+         dispose(qq) {
+           qq && this._texture?.dispose()
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L106-L107` → after: `L188-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L188-L189) · [Before (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L106-L107)

```diff
-         _syncParentEnabledState() {
-           super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
+         getClassName() {
+           return "DetailMapConfiguration"
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L109-L114` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L191-L192) · [Before (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L109-L114)

```diff
-         getViewMatrix(zz) {
-           const uz = iz.l.ER[0];
-           let bz = this.position;
-           this.computeTransformedInformation() && (bz = this.transformedPosition), iz.n.NormalizeToRef(this.getShadowDirection(zz), uz), 1 === Math.abs(iz.n.Dot(uz, iz.n.Up())) && (uz.z = 1e-13);
-           const Ez = iz.l.ER[1];
-           return bz.addToRef(uz, Ez), iz.d.LookAtLHToRef(bz, Ez, iz.n.Up(), this._viewMatrix), this._viewMatrix
+         getSamplers(qq) {
+           qq.push("detailSampler")
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L116-L117` → after: `L194-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L194-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L194-L205) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L116-L117)

```diff
-         getProjectionMatrix(zz, uz) {
-           return this.setShadowProjectionMatrix(this._projectionMatrix, zz ?? this._viewMatrix, uz ?? []), this._projectionMatrix
+         getUniforms() {
+           return {
+             ubo: [{
+               name: "vDetailInfos",
+               size: 4,
+               type: "vec4"
+             }, {
+               name: "detailMatrix",
+               size: 16,
+               type: "mat4"
+             }]
+           }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L119` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L207) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L119)

```diff
-       }, (() => {
+       }, Eq = new WeakMap, gq = new WeakMap, xq = new WeakMap, (() => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L121-L123` → after: `L209-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L209-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L209-L224) · [Before (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L121-L123)

```diff
-         uz = [(0, nz.D)()], bz = [(0, nz.D)()], tz = [(0, nz.G)()], Hz = [(0, nz.G)()], (0, Ez.h)(zz, null, uz, {
-           kind: "getter",
-           name: "position",
+         Bq = [(0, Oq.E)("detailTexture"), (0, Oq.f)("_markAllSubMeshesAsTexturesDirty")], Wq = [(0, Oq.M)()], Nq = [(0, Oq.M)()], aq = [(0, Oq.M)()], Vq = [(0, Oq.M)(), (0, Oq.f)("_markAllSubMeshesAsTexturesDirty")], dq = [(0, Oq.M)(), (0, Oq.f)("_markAllSubMeshesAsTexturesDirty" … [truncated]
+           kind: "accessor",
+           name: "texture",
+           static: !1,
+           private: !1,
+           access: {
+             has: qq => "texture" in qq,
+             get: qq => qq.texture,
+             set: (qq, Eq) => {
+               qq.texture = Eq
+             }
+           },
+           metadata: Eq
+         }, Hq, oq), (0, Yq.f)(qq, null, Vq, {
+           kind: "accessor",
+           name: "normalBlendMethod",
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L127-L128` → after: `L228-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L228-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L228-L232) · [Before (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L127-L128)

```diff
-             has: zz => "position" in zz,
-             get: zz => zz.position
+             has: qq => "normalBlendMethod" in qq,
+             get: qq => qq.normalBlendMethod,
+             set: (qq, Eq) => {
+               qq.normalBlendMethod = Eq
+             }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L131-L133` → after: `L235-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L235-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L235-L237) · [Before (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L131-L133)

```diff
-         }, null, pz), (0, Ez.h)(zz, null, bz, {
-           kind: "getter",
-           name: "direction",
+         }, hq, nq), (0, Yq.f)(qq, null, dq, {
+           kind: "accessor",
+           name: "isEnabled",
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L137-L138` → after: `L241-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L241-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L241-L245) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L137-L138)

```diff
-             has: zz => "direction" in zz,
-             get: zz => zz.direction
+             has: qq => "isEnabled" in qq,
+             get: qq => qq.isEnabled,
+             set: (qq, Eq) => {
+               qq.isEnabled = Eq
+             }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L141-L143` → after: `L248-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L248-L250) · [Before (L141-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L141-L143)

```diff
-         }, null, pz), (0, Ez.h)(zz, null, tz, {
-           kind: "getter",
-           name: "shadowMinZ",
+         }, bq, iq), (0, Yq.f)(null, null, Wq, {
+           kind: "field",
+           name: "diffuseBlendLevel",
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L147-L148` → after: `L254-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L254-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L254-L258) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L147-L148)

```diff
-             has: zz => "shadowMinZ" in zz,
-             get: zz => zz.shadowMinZ
+             has: qq => "diffuseBlendLevel" in qq,
+             get: qq => qq.diffuseBlendLevel,
+             set: (qq, Eq) => {
+               qq.diffuseBlendLevel = Eq
+             }
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L151-L153` → after: `L261-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L261-L263) · [Before (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L151-L153)

```diff
-         }, null, pz), (0, Ez.h)(zz, null, Hz, {
-           kind: "getter",
-           name: "shadowMaxZ",
+         }, Pq, Qq), (0, Yq.f)(null, null, Nq, {
+           kind: "field",
+           name: "roughnessBlendLevel",
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L157-L158` → after: `L267-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L267-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L267-L271) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L157-L158)

```diff
-             has: zz => "shadowMaxZ" in zz,
-             get: zz => zz.shadowMaxZ
+             has: qq => "roughnessBlendLevel" in qq,
+             get: qq => qq.roughnessBlendLevel,
+             set: (qq, Eq) => {
+               qq.roughnessBlendLevel = Eq
+             }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L161` → after: `L274-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L274-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L274-L287) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L161)

```diff
-         }, null, pz), iz && Object.defineProperty(zz, Symbol.metadata, {
+         }, yq, tq), (0, Yq.f)(null, null, aq, {
+           kind: "field",
+           name: "bumpLevel",
+           static: !1,
+           private: !1,
+           access: {
+             has: qq => "bumpLevel" in qq,
+             get: qq => qq.bumpLevel,
+             set: (qq, Eq) => {
+               qq.bumpLevel = Eq
+             }
+           },
+           metadata: Eq
+         }, rq, vq), Eq && Object.defineProperty(qq, Symbol.metadata, {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L170` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L296) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L170)

```diff
-   40803: (zz, uz, bz) => {
+   40033: (qq, Eq, gq) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L172` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L298) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L172)

```diff
-       b: () => nz
+       c: () => Yq
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L174-L229` → after: `L300-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L300-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L300-L391) · [Before (L174-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L174-L229)

```diff
-     var Ez = bz(39636);
-     class nz extends Ez.e {
-       constructor(zz, uz, bz, nz, iz) {
-         let lz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           Mz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           tz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
-           Hz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
-           Oz = arguments.length > 9 ? arguments[9] : void 0,
-           pz = arguments.length > 10 ? arguments[10] : void 0,
-           dz = arguments.length > 11 ? arguments[11] : void 0,
-           Fz = arguments.length > 12 ? arguments[12] : void 0;
-         super(null, iz, !lz, Mz, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, Oz), this.format = nz, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== Hz || (tz = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== Hz || (tz = … [truncated]
-       }
-       update(zz) {
-         this.updateMipLevel(zz, 0)
-       }
- ... (40 more removed lines; see GitHub link above)
+     class Yq {
+       constructor(qq) {
+         if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, … [truncated]
+           for (const Eq in qq) Object.prototype.hasOwnProperty.call(qq, Eq) && this._setDefaultValue(Eq)
+       }
+       get isDirty() {
+         return this._isDirty
+       }
+       markAsProcessed() {
+         this._isDirty = !1, this._areAttributesDirty = !1, this._areTexturesDirty = !1, this._areFresnelDirty = !1, this._areLightsDirty = !1, this._areLightsDisposed = !1, this._areMiscDirty = !1, this._arePrePassDirty = !1, this._areImageProcessingDirty = !1
+       }
+       markAsUnprocessed() {
+         this._isDirty = !0
+       }
+       markAllAsDirty() {
+         this._areTexturesDirty = !0, this._areAttributesDirty = !0, this._areLightsDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._isDirty = !0
+ ... (76 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L233` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L395) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L233)

```diff
-   40847: (zz, uz, bz) => {
+   40127: (qq, Eq, gq) => {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L235` → after: `L397-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L397-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L397-L399) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L235)

```diff
-       d: () => Ez.e
+       e: () => xq,
+       f: () => mq,
+       i: () => Oq
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L237-L245` → after: `L401-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L401-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L401-L628) · [Before (L237-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L237-L245)

```diff
-     var Ez = bz(39614);
-     (0, Ez.f)()
-   },
-   40792: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Ez.c
-     });
-     var Ez = bz(39626);
-     (0, Ez.d)()
+     var Yq, lq = gq(37139);
+ 
+     function Oq(qq, Eq) {
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
+       const Yq = Eq(qq);
+       if (!Number.isInteger(Yq) || Yq < 0 || Yq > gq) throw new Error(`Invalid geometry object ID ${Yq} for mesh "${qq.name}". Object IDs must be integers between 0 and 0x${gq.toString(16).toUpperCase()}.`);
+       return Yq
+     }
+ 
+     function mq(qq, Eq) {
+       const gq = Eq(qq);
+       if (!Number.isInteger(gq) || gq < 0 || gq > 255 || 0 !== gq && 0 === (63 & gq)) throw new Error(`Invalid geometry mesh-blending tag ${gq} for mesh "${qq.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
+       return gq
+     }! function(qq) {
+       qq[qq.Zero = 0] = "Zero", qq[qq.One = 1] = "One", qq[qq.MaxViewZ = 2] = "MaxViewZ", qq[qq.NoClear = 3] = "NoClear"
+     }(Yq || (Yq = {}));
+ ... (212 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L247` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L630) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L247)

```diff
-   39626: (zz, uz, bz) => {
+   40113: (qq, Eq, gq) => {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L252-L262` → after: `L635-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L635-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L635-L640) · [Before (L252-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L252-L262)

```diff
-     var Ez, nz, iz = bz(36715),
-       lz = bz(39299),
-       Mz = bz(39584),
-       tz = bz(39631),
-       Hz = bz(39451),
-       Oz = bz(39634),
-       pz = bz(39061);
-     class dz extends Mz.c {
-       _isShaderMaterial(zz) {
-         return !!zz && "ShaderMaterial" === zz.getClassName()
-       }
+     var Yq = gq(39757),
+       lq = gq(39759),
+       Oq = gq(39640),
+       mq = gq(39617);
+     const xq = new RegExp("^([gimus]+)!");
+     class Aq {
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L264-L275` → after: `L642-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L642-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L642-L653) · [Before (L264-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L264-L275)

```diff
-         let uz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           Ez = arguments.length > 5 ? arguments[5] : void 0,
-           nz = arguments.length > 6 ? arguments[6] : void 0,
-           Mz = arguments.length > 7 ? arguments[7] : void 0;
-         super(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, uz, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Ez, this.useVertexAlpha = nz, this.color = new  … [truncated]
-         const tz = {
-           attributes: [lz.j.PositionKind],
-           uniforms: ["world", "viewProjection"],
-           needAlphaBlending: !0,
-           defines: [],
-           useClipPlane: null,
-           shaderLanguage: 0
+         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = qq, this._scene = qq.ZJ(), this._engine = this._scene.Ba()
+       }
+       _addPlugin(qq) {
+         for (let Yq = 0; Yq < this._plugins.length; ++Yq)
+           if (this._plugins[Yq].name === qq.name) return !1;
+         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !qq.isCompatible(this._material.shaderLanguage)) throw `The plugin "${qq.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
+         const Eq = qq.getClassName();
+         Aq._MaterialPluginClassToMainDefine[Eq] || (Aq._MaterialPluginClassToMainDefine[Eq] = "MATERIALPLUGIN_" + ++Aq._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (qq, Eq) => this._handlePluginEvent(qq, Eq), this._plugins.push(qq), this._plugins.sort(((q … [truncated]
+         const gq = {};
+         gq[Aq._MaterialPluginClassToMainDefine[Eq]] = {
+           type: "boolean",
+           default: !0
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L277-L340` → after: `L655-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L655-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L655-L759) · [Before (L277-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L277-L340)

```diff
-         if (this.useVertexAlpha ? tz.defines.push("#define VERTEXALPHA") : tz.needAlphaBlending = !1, this.useVertexColor ? (tz.defines.push("#define VERTEXCOLOR"), tz.attributes.push(lz.j.ColorKind)) : (tz.uniforms.push("color"), this._color4 = new iz.g), Mz) this.material = Mz;
-         else {
-           this.XT().uR().isWebGPU && !dz.ForceGLSL && (this._shaderLanguage = 1), tz.shaderLanguage = this._shaderLanguage, tz.extraInitializationsAsync = async () => {
-             1 === this._shaderLanguage ? await Promise.all([bz.e(334).then((() => bz(41776))), bz.e(340).then((() => bz(41784)))]) : await Promise.all([bz.e(316).then((() => bz(41790))), bz.e(322).then((() => bz(41798)))])
-           };
-           const zz = new Oz.p("colorShader", this.XT(), "color", tz, !1);
-           zz.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(zz)
-         }
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(zz) {
- ... (48 more removed lines; see GitHub link above)
+         for (const Yq of this._plugins) Yq.collectDefines(gq), this._collectPointNames("vertex", Yq.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Yq.getCustomCode("fragment", this._material.shaderLanguage));
+         return this._defineNamesFromPlugins = gq, !0
+       }
+       _activatePlugin(qq) {
+         -1 === this._activePlugins.indexOf(qq) && (this._activePlugins.push(qq), this._activePlugins.sort(((qq, Eq) => qq.priority - Eq.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callback … [truncated]
+       }
+       getPlugin(qq) {
+         for (let Eq = 0; Eq < this._plugins.length; ++Eq)
+           if (this._plugins[Eq].name === qq) return this._plugins[Eq];
+         return null
+       }
+       _handlePluginEventIsReadyForSubMesh(qq) {
+         let Eq = !0;
+         for (const gq of this._activePlugins) Eq = Eq && gq.isReadyForSubMesh(qq.defines, this._scene, this._engine, qq.subMesh);
+         qq.isReadyForSubMesh = Eq
+       }
+ ... (89 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L344-L345` → after: `L762-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L762-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L762-L764) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L344-L345)

```diff
-       serialize(zz) {
-         super.serialize(zz), zz.color = this.color.obz(), zz.alpha = this.alpha
+       _collectPointNames(qq, Eq) {
+         if (Eq)
+           for (const gq in Eq) this._codeInjectionPoints[qq] || (this._codeInjectionPoints[qq] = {}), this._codeInjectionPoints[qq][gq] = !0
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L347-L349` → after: `L766-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L766-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L766-L818) · [Before (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L347-L349)

```diff
-       static Parse(zz, uz) {
-         const bz = new dz(zz.name, uz);
-         return bz.color = iz.c.FromArray(zz.color), bz.alpha = zz.alpha, bz
+       _injectCustomCode(qq, Eq) {
+         return (gq, Yq) => {
+           Eq && (Yq = Eq(gq, Yq)), this._uboDeclaration && (Yq = Yq.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Yq = Yq.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
+           const lq = this._codeInjectionPoints?.[gq];
+           if (!lq) return Yq;
+           let Aq = null;
+           for (let Eq in lq) {
+             let lq = "";
+             for (const Yq of this._activePlugins) {
+               const xq = this._material.shaderLanguage;
+               let cq = Yq.getCustomCode(gq, xq)?.[Eq];
+               cq && (Yq.resolveIncludes && (null === Aq && (Aq = {
+                 defines: [],
+                 indexParameters: qq.indexParameters,
+                 isFragment: !1,
+                 shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
+ ... (37 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L352-L355` → after: `L821-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L821-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L821-L985) · [Before (L352-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L352-L355)

```diff
-     dz.ForceGLSL = !1;
-     class Fz extends tz.e {
-       constructor(zz, uz) {
-         super(zz, uz), this.intersectionThreshold = uz.intersectionThreshold
+     Aq._MaterialPluginClassToMainDefine = {}, Aq._MaterialPluginCounter = 0;
+ 
+     function cq(qq, Eq) {
+       return qq.replace(/\$(\d+)/g, ((qq, gq) => {
+         const Yq = Number(gq);
+         return Yq < Eq.length ? Eq[Yq] : ""
+       }))
+     }
+     var uq = gq(39779),
+       Bq = gq(37171);
+     let Wq = (() => {
+         var qq;
+         let Eq, gq, Oq, mq, xq = [],
+           cq = [],
+           Bq = [],
+           Wq = [],
+ ... (149 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L357-L358` → after: `L987-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L987-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L987-L993) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L357-L358)

```diff
-       getClassName() {
-         return "InstancedLinesMesh"
+       static AddSamplers(qq) {}
+       bindForSubMesh(qq, Eq, gq, Yq, lq) {
+         if (Eq.prePassRenderer && Eq.prePassRenderer.enabled && Eq.prePassRenderer.currentRTisSceneRT && (-1 !== Eq.prePassRenderer.getIndex(2) || -1 !== Eq.prePassRenderer.getIndex(11))) {
+           this.previousWorldMatrices[gq.uniqueId] || (this.previousWorldMatrices[gq.uniqueId] = Yq.clone()), this.previousViewProjection || (this.previousViewProjection = Eq.getTransformMatrix().clone(), this.currentViewProjection = Eq.getTransformMatrix().clone());
+           const lq = Eq.Ba();
+           this.currentViewProjection.updateFlag !== Eq.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = lq.frameId, this.previousViewProjection.WG(this.currentViewProjection), this.currentViewProjection.WG(Eq.getTransformMatrix())) : this._lastUpdateFrameId !== lq.fra … [truncated]
+         }
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L361` → after: `L996-L2674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L996-L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L996-L2674) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L361)

```diff
-     let Zz = !1;
+   },
+   40145: (qq, Eq, gq) => {
+     function Yq(qq) {
+       return class extends qq {
+         constructor() {
+           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
+         }
+       }
+     }
+     gq.d(Eq, {
+       d: () => Yq
+     })
+   },
+   40003: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       StandardMaterial: () => Yq.g
+ ... (1663 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L364-L365` → after: `L2677-L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR2677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L2677-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/253.js#L2677-L2730) · [Before (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/253.js#L364-L365)

```diff
-       Zz || (Zz = !0, Mz.c._LinesMeshParser = (zz, uz) => dz.Parse(zz, uz))
-     }(Ez = dz.prototype).enableEdgesRendering ?? (Ez.enableEdgesRendering = (0, pz.h)("LinesMesh", "enableEdgesRendering")), (nz = Fz.prototype).enableEdgesRendering ?? (nz.enableEdgesRendering = (0, pz.h)("InstancedLinesMesh", "enableEdgesRendering"))
+       zq || (zq = !0, (0, Bq.f)(), (0, nq.g)("BABYLON.StandardMaterial", Tq), mq.i.DefaultMaterialFactory = qq => new Tq("default material", qq))
+     }
+     Object.getOwnPropertyDescriptor(Tq.prototype, "decalMap") || Object.defineProperty(Tq.prototype, "decalMap", (0, bq.e)("StandardMaterial", "decalMap"))
+   },
+   40136: (qq, Eq, gq) => {
+     function Yq(qq) {
+       return class extends qq {
+         constructor() {
+           super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
+         }
+       }
+     }
+     gq.d(Eq, {
+       b: () => Yq
+     })
+   },
+ ... (38 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/254.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/254.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L4)

```diff
-   39634: (zz, uz, bz) => {
+   40049: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L6-L7` → after: `L6-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L6-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L6-L298) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L6-L7)

```diff
-       b: () => Nz,
-       f: () => rz,
+       c: () => Yq
+     });
+     class Yq {
+       constructor(qq, Eq, gq) {
+         this.bu = qq, this.bv = Eq, this.distance = gq, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
+       }
+     }
+   },
+   40060: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(37149),
+       lq = gq(37139),
+       Oq = gq(37145);
+     class mq {
+ ... (277 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L11` → after: `L301-L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L301-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L301-L1561) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L11)

```diff
-       p: () => wz
+       m: () => mq
+     });
+     var Yq = gq(39891),
+       lq = gq(37139);
+ 
+     function Oq(qq) {
+       -1 === qq.indexOf("vClipPlane") && qq.push("vClipPlane"), -1 === qq.indexOf("vClipPlane2") && qq.push("vClipPlane2"), -1 === qq.indexOf("vClipPlane3") && qq.push("vClipPlane3"), -1 === qq.indexOf("vClipPlane4") && qq.push("vClipPlane4"), -1 === qq.indexOf("vClipPlane5") &&  … [truncated]
+     }
+ 
+     function mq(qq, Eq, gq) {
+       const Yq = !!(qq.clipPlane ?? Eq.clipPlane),
+         lq = !!(qq.clipPlane2 ?? Eq.clipPlane2),
+         Oq = !!(qq.clipPlane3 ?? Eq.clipPlane3),
+         mq = !!(qq.clipPlane4 ?? Eq.clipPlane4),
+         xq = !!(qq.clipPlane5 ?? Eq.clipPlane5),
+         Aq = !!(qq.clipPlane6 ?? Eq.clipPlane6);
+ ... (1245 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L13-L58` → after: `L1563-L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1563-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1563-L1566) · [Before (L13-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L13-L58)

```diff
-     var Ez = bz(39182),
-       nz = bz(39253),
-       iz = bz(36519),
-       lz = bz(39299),
-       Mz = bz(39636),
-       tz = bz(39528),
-       Hz = bz(39208),
-       Oz = bz(39519),
-       pz = bz(36543),
-       dz = bz(39511),
-       Fz = bz(39505),
-       Zz = bz(39540),
-       Rz = bz(36564);
-     const Kz = {
-       effect: null,
-       subMesh: null
- ... (30 more removed lines; see GitHub link above)
+     var Yq = gq(39653);
+     class lq {
+       static get DiffuseTextureEnabled() {
+         return this._DiffuseTextureEnabled
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L60-L61` → after: `L1568-L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1568-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1568-L1569) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L60-L61)

```diff
-       getClassName() {
-         return "ShaderMaterial"
+       static set DiffuseTextureEnabled(qq) {
+         this._DiffuseTextureEnabled !== qq && (this._DiffuseTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L63-L64` → after: `L1571-L1572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1571-L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1571-L1572) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L63-L64)

```diff
-       needAlphaBlending() {
-         return this.alpha < 1 || this._options.needAlphaBlending
+       static get BaseWeightTextureEnabled() {
+         return this._BaseWeightTextureEnabled
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L66-L67` → after: `L1574-L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1574-L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1574-L1575) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L66-L67)

```diff
-       needAlphaTesting() {
-         return this._options.needAlphaTesting
+       static set BaseWeightTextureEnabled(qq) {
+         this._BaseWeightTextureEnabled !== qq && (this._BaseWeightTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L69-L70` → after: `L1577-L1578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1577-L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1577-L1578) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L69-L70)

```diff
-       _checkUniform(zz) {
-         -1 === this._options.uniforms.indexOf(zz) && this._options.uniforms.push(zz)
+       static get BaseDiffuseRoughnessTextureEnabled() {
+         return this._BaseDiffuseRoughnessTextureEnabled
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L72-L73` → after: `L1580-L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1580-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1580-L1581) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L72-L73)

```diff
-       setTexture(zz, uz) {
-         return -1 === this._options.samplers.indexOf(zz) && this._options.samplers.push(zz), this._textures[zz] = uz, this
+       static set BaseDiffuseRoughnessTextureEnabled(qq) {
+         this._BaseDiffuseRoughnessTextureEnabled !== qq && (this._BaseDiffuseRoughnessTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L75-L76` → after: `L1583-L1584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1583-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1583-L1584) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L75-L76)

```diff
-       setInternalTexture(zz, uz) {
-         return -1 === this._options.samplers.indexOf(zz) && this._options.samplers.push(zz), this._internalTextures[zz] = uz, this
+       static get DetailTextureEnabled() {
+         return this._DetailTextureEnabled
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L78-L79` → after: `L1586-L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1586-L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1586-L1587) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L78-L79)

```diff
-       removeTexture(zz) {
-         delete this._textures[zz]
+       static set DetailTextureEnabled(qq) {
+         this._DetailTextureEnabled !== qq && (this._DetailTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L81-L82` → after: `L1589-L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1589-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1589-L1590) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L81-L82)

```diff
-       setTextureArray(zz, uz) {
-         return -1 === this._options.samplers.indexOf(zz) && this._options.samplers.push(zz), this._checkUniform(zz), this._textureArrays[zz] = uz, this
+       static get DecalMapEnabled() {
+         return this._DecalMapEnabled
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L84-L85` → after: `L1592-L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1592-L1593) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L84-L85)

```diff
-       setExternalTexture(zz, uz) {
-         return -1 === this._options.externalTextures.indexOf(zz) && this._options.externalTextures.push(zz), this._externalTextures[zz] = uz, this
+       static set DecalMapEnabled(qq) {
+         this._DecalMapEnabled !== qq && (this._DecalMapEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L87-L88` → after: `L1595-L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1595-L1596) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L87-L88)

```diff
-       setFloat(zz, uz) {
-         return this._checkUniform(zz), this._floats[zz] = uz, this
+       static get AmbientTextureEnabled() {
+         return this._AmbientTextureEnabled
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L90-L91` → after: `L1598-L1599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1598-L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1598-L1599) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L90-L91)

```diff
-       setInt(zz, uz) {
-         return this._checkUniform(zz), this._ints[zz] = uz, this
+       static set AmbientTextureEnabled(qq) {
+         this._AmbientTextureEnabled !== qq && (this._AmbientTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L93-L94` → after: `L1601-L1602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1601-L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1601-L1602) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L93-L94)

```diff
-       setUInt(zz, uz) {
-         return this._checkUniform(zz), this._uints[zz] = uz, this
+       static get OpacityTextureEnabled() {
+         return this._OpacityTextureEnabled
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L96-L97` → after: `L1604-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1604-L1605) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L96-L97)

```diff
-       setFloats(zz, uz) {
-         return this._checkUniform(zz), this._floatsArrays[zz] = uz, this
+       static set OpacityTextureEnabled(qq) {
+         this._OpacityTextureEnabled !== qq && (this._OpacityTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L99-L100` → after: `L1607-L1608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1607-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1607-L1608) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L99-L100)

```diff
-       setColor3(zz, uz) {
-         return this._checkUniform(zz), this._colors3[zz] = uz, this
+       static get ReflectionTextureEnabled() {
+         return this._ReflectionTextureEnabled
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L102-L103` → after: `L1610-L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1610-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1610-L1611) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L102-L103)

```diff
-       setColor3Array(zz, uz) {
-         return this._checkUniform(zz), this._colors3Arrays[zz] = uz.reduce(((zz, uz) => (zz.push(uz.r, uz.g, uz.b), zz)), []), this
+       static set ReflectionTextureEnabled(qq) {
+         this._ReflectionTextureEnabled !== qq && (this._ReflectionTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L105-L106` → after: `L1613-L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1613-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1613-L1614) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L105-L106)

```diff
-       setColor4(zz, uz) {
-         return this._checkUniform(zz), this._colors4[zz] = uz, this
+       static get EmissiveTextureEnabled() {
+         return this._EmissiveTextureEnabled
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L108-L109` → after: `L1616-L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1616-L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1616-L1617) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L108-L109)

```diff
-       setColor4Array(zz, uz) {
-         return this._checkUniform(zz), this._colors4Arrays[zz] = uz.reduce(((zz, uz) => (zz.push(uz.r, uz.g, uz.b, uz.a), zz)), []), this
+       static set EmissiveTextureEnabled(qq) {
+         this._EmissiveTextureEnabled !== qq && (this._EmissiveTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L111-L112` → after: `L1619-L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1619-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1619-L1620) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L111-L112)

```diff
-       setVector2(zz, uz) {
-         return this._checkUniform(zz), this._vectors2[zz] = uz, this
+       static get SpecularTextureEnabled() {
+         return this._SpecularTextureEnabled
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L114-L115` → after: `L1622-L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1622-L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1622-L1623) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L114-L115)

```diff
-       setVector3(zz, uz) {
-         return this._checkUniform(zz), this._vectors3[zz] = uz, this
+       static set SpecularTextureEnabled(qq) {
+         this._SpecularTextureEnabled !== qq && (this._SpecularTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L117-L118` → after: `L1625-L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1625-L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1625-L1626) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L117-L118)

```diff
-       setVector4(zz, uz) {
-         return this._checkUniform(zz), this._vectors4[zz] = uz, this
+       static get BumpTextureEnabled() {
+         return this._BumpTextureEnabled
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L120-L121` → after: `L1628-L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1628-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1628-L1629) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L120-L121)

```diff
-       setQuaternion(zz, uz) {
-         return this._checkUniform(zz), this._quaternions[zz] = uz, this
+       static set BumpTextureEnabled(qq) {
+         this._BumpTextureEnabled !== qq && (this._BumpTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L123-L124` → after: `L1631-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1631-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1631-L1632) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L123-L124)

```diff
-       setQuaternionArray(zz, uz) {
-         return this._checkUniform(zz), this._quaternionsArrays[zz] = uz.reduce(((zz, uz) => (uz.toArray(zz, zz.length), zz)), []), this
+       static get LightmapTextureEnabled() {
+         return this._LightmapTextureEnabled
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L126-L127` → after: `L1634-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1634-L1635) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L126-L127)

```diff
-       setMatrix(zz, uz) {
-         return this._checkUniform(zz), this._matrices[zz] = uz, this
+       static set LightmapTextureEnabled(qq) {
+         this._LightmapTextureEnabled !== qq && (this._LightmapTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L129-L135` → after: `L1637-L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1637-L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1637-L1665) · [Before (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L129-L135)

```diff
-       setMatrices(zz, uz) {
-         this._checkUniform(zz);
-         const bz = new Float32Array(16 * uz.length);
-         for (let Ez = 0; Ez < uz.length; Ez++) {
-           uz[Ez].copyToArray(bz, 16 * Ez)
-         }
-         return this._matrixArrays[zz] = bz, this
+       static get RefractionTextureEnabled() {
+         return this._RefractionTextureEnabled
+       }
+       static set RefractionTextureEnabled(qq) {
+         this._RefractionTextureEnabled !== qq && (this._RefractionTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get ColorGradingTextureEnabled() {
+         return this._ColorGradingTextureEnabled
+       }
+       static set ColorGradingTextureEnabled(qq) {
+         this._ColorGradingTextureEnabled !== qq && (this._ColorGradingTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get FresnelEnabled() {
+         return this._FresnelEnabled
+       }
+       static set FresnelEnabled(qq) {
+ ... (13 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L137-L138` → after: `L1667-L1668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1667-L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1667-L1668) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L137-L138)

```diff
-       setMatrix3x3(zz, uz) {
-         return this._checkUniform(zz), this._matrices3x3[zz] = uz, this
+       static get ClearCoatTintTextureEnabled() {
+         return this._ClearCoatTintTextureEnabled
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L140-L141` → after: `L1670-L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1670-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1670-L1671) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L140-L141)

```diff
-       setMatrix2x2(zz, uz) {
-         return this._checkUniform(zz), this._matrices2x2[zz] = uz, this
+       static set ClearCoatTintTextureEnabled(qq) {
+         this._ClearCoatTintTextureEnabled !== qq && (this._ClearCoatTintTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L143-L144` → after: `L1673-L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1673-L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1673-L1674) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L143-L144)

```diff
-       setArray2(zz, uz) {
-         return this._checkUniform(zz), this._vectors2Arrays[zz] = uz, this
+       static get SheenTextureEnabled() {
+         return this._SheenTextureEnabled
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L146-L147` → after: `L1676-L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1676-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1676-L1677) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L146-L147)

```diff
-       setArray3(zz, uz) {
-         return this._checkUniform(zz), this._vectors3Arrays[zz] = uz, this
+       static set SheenTextureEnabled(qq) {
+         this._SheenTextureEnabled !== qq && (this._SheenTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L149-L150` → after: `L1679-L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1679-L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1679-L1680) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L149-L150)

```diff
-       setArray4(zz, uz) {
-         return this._checkUniform(zz), this._vectors4Arrays[zz] = uz, this
+       static get AnisotropicTextureEnabled() {
+         return this._AnisotropicTextureEnabled
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L152-L153` → after: `L1682-L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1682-L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1682-L1683) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L152-L153)

```diff
-       setUniformBuffer(zz, uz) {
-         return -1 === this._options.uniformBuffers.indexOf(zz) && this._options.uniformBuffers.push(zz), this._uniformBuffers[zz] = uz, this
+       static set AnisotropicTextureEnabled(qq) {
+         this._AnisotropicTextureEnabled !== qq && (this._AnisotropicTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L155-L156` → after: `L1685-L1686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1685-L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1685-L1686) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L155-L156)

```diff
-       setTextureSampler(zz, uz) {
-         return -1 === this._options.samplerObjects.indexOf(zz) && this._options.samplerObjects.push(zz), this._textureSamplers[zz] = uz, this
+       static get ThicknessTextureEnabled() {
+         return this._ThicknessTextureEnabled
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L158-L159` → after: `L1688-L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1688-L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1688-L1689) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L158-L159)

```diff
-       setStorageBuffer(zz, uz) {
-         return -1 === this._options.storageBuffers.indexOf(zz) && this._options.storageBuffers.push(zz), this._storageBuffers[zz] = uz, this
+       static set ThicknessTextureEnabled(qq) {
+         this._ThicknessTextureEnabled !== qq && (this._ThicknessTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L161-L164` → after: `L1691-L1692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1691-L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1691-L1692) · [Before (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L161-L164)

```diff
-       setDefine(zz, uz) {
-         const bz = zz.trimEnd() + " ",
-           Ez = this.options.defines.findIndex((uz => uz === zz || uz.startsWith(bz)));
-         return Ez >= 0 && this.options.defines.splice(Ez, 1), ("boolean" !== typeof uz || uz) && this.options.defines.push(bz + uz), this
+       static get RefractionIntensityTextureEnabled() {
+         return this._ThicknessTextureEnabled
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L166-L167` → after: `L1694-L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1694-L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1694-L1695) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L166-L167)

```diff
-       isReadyForSubMesh(zz, uz, bz) {
-         return this.isReady(zz, bz, uz)
+       static set RefractionIntensityTextureEnabled(qq) {
+         this._RefractionIntensityTextureEnabled !== qq && (this._RefractionIntensityTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L169-L173` → after: `L1697-L1829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1697-L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1697-L1829) · [Before (L169-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L169-L173)

```diff
-       isReady(zz, uz, bz) {
-         const Ez = bz && this._storeEffectOnSubMeshes;
-         if (this.isFrozen) {
-           const zz = Ez ? bz._drawWrapper : this._drawWrapper;
-           if (zz.effect && zz._wasPreviouslyReady && zz._wasPreviouslyUsingInstances === uz) return !0
+       static get TranslucencyIntensityTextureEnabled() {
+         return this._TranslucencyIntensityTextureEnabled
+       }
+       static set TranslucencyIntensityTextureEnabled(qq) {
+         this._TranslucencyIntensityTextureEnabled !== qq && (this._TranslucencyIntensityTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get TranslucencyColorTextureEnabled() {
+         return this._TranslucencyColorTextureEnabled
+       }
+       static set TranslucencyColorTextureEnabled(qq) {
+         this._TranslucencyColorTextureEnabled !== qq && (this._TranslucencyColorTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get IridescenceTextureEnabled() {
+         return this._IridescenceTextureEnabled
+       }
+       static set IridescenceTextureEnabled(qq) {
+ ... (117 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L206-L322` → after: `L1832-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1832-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1832-L1833) · [Before (L206-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L206-L322)

```diff
-           const bz = zz.bakedVertexAnimationManager;
-           bz && bz.isEnabled && (Hz.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === wz.indexOf("bakedVertexAnimationSettings") && wz.push("bakedVertexAnimationSettings"), -1 === wz.indexOf("bakedVertexAnimationTextureSizeInverted") && wz.push("bakedVertexAnimationTextureSi … [truncated]
-         }
-         for (const nz in this._textures)
-           if (!this._textures[nz].isReady()) return !1;
-         for (const nz in this._internalTextures)
-           if (!this._internalTextures[nz].isReady) return !1;
-         zz && this.needAlphaTestingForMesh(zz) && Hz.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, dz.c)(wz), (0, dz.i)(this, iz, Hz)), iz.fogEnabled && zz?.applyFog && iz.fogMode !== nz.e.FOGMODE_NONE && (Hz.push("#define FOG"), -1 === wz.indexOf("view") & … [truncated]
-         const oz = bz ? bz.getRenderingMesh() : zz;
-         if (oz && this.useVertexPulling) {
-           const zz = oz.geometry;
-           zz && (this._vertexPullingMetadata = (0, Zz.e)(zz), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((zz, uz) => {
-             wz.push(`vp_${uz}_info`)
-           }))), Hz.push("#define USE_VERTEX_PULLING");
-           const uz = oz.geometry?.getIndexBuffer();
-           uz && !oz.isUnIndexed && (Hz.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), uz.is32Bits && Hz.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
- ... (101 more removed lines; see GitHub link above)
+           const qq = lq.getSize().width;
+           gq.updateFloat2("vReflectionFilteringInfo", qq, Math.log2(qq))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L324` → after: `L1835-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1835-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1835-L1854) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L324)

```diff
-         this._afterBind(uz, iz, Ez)
+         if (uq && !Eq.USEIRRADIANCEMAP) {
+           const qq = lq.sphericalPolynomial;
+           if (Eq.USESPHERICALFROMREFLECTIONMAP && qq)
+             if (Eq.SPHERICAL_HARMONICS) {
+               const Eq = qq.preScaledHarmonics;
+               gq.updateVector3("vSphericalL00", Eq.l00), gq.updateVector3("vSphericalL1_1", Eq.l1_1), gq.updateVector3("vSphericalL10", Eq.l10), gq.updateVector3("vSphericalL11", Eq.l11), gq.updateVector3("vSphericalL2_2", Eq.l2_2), gq.updateVector3("vSphericalL2_1", Eq.l2_1), gq … [truncated]
+             } else gq.updateFloat3("vSphericalX", qq.x.x, qq.x.y, qq.x.z), gq.updateFloat3("vSphericalY", qq.y.x, qq.y.y, qq.y.z), gq.updateFloat3("vSphericalZ", qq.z.x, qq.z.y, qq.z.z), gq.updateFloat3("vSphericalXX_ZZ", qq.xx.x - qq.zz.x, qq.xx.y - qq.zz.y, qq.xx.z - qq.zz.z),  … [truncated]
+         } else cq && Eq.USEIRRADIANCEMAP && Eq.USE_IRRADIANCE_DOMINANT_DIRECTION && lq.irradianceTexture && gq.updateVector3("vReflectionDominantDirection", lq.irradianceTexture._dominantDirection);
+         mq && gq.updateFloat3("vReflectionMicrosurfaceInfos", lq.getSize().width, lq.lodGenerationScale, lq.lodGenerationOffset)
+       }
+       Bq && gq.updateColor3("vReflectionColor", Yq)
+     }
+ 
+     function Hq(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+ ... (4 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L326-L331` → after: `L1856-L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1856-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1856-L1880) · [Before (L326-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L326-L331)

```diff
-       getActiveTextures() {
-         const zz = super.getActiveTextures();
-         for (const uz in this._textures) zz.push(this._textures[uz]);
-         for (const uz in this._textureArrays) {
-           const bz = this._textureArrays[uz];
-           for (let uz = 0; uz < bz.length; uz++) zz.push(bz[uz])
+     }
+ 
+     function oq(qq, Eq, gq) {
+       Eq._needUVs = !0, Eq[gq] = !0, qq.optimizeUVAllocation && qq.getTextureMatrix().isIdentityAs3x2() ? (Eq[gq + "DIRECTUV"] = qq.coordinatesIndex + 1, Eq["MAINUV" + (qq.coordinatesIndex + 1)] = !0) : Eq[gq + "DIRECTUV"] = 0
+     }
+ 
+     function Pq(qq, Eq, gq) {
+       const Yq = qq.getTextureMatrix();
+       Eq.Eqq(gq + "Matrix", Yq)
+     }
+ 
+     function Qq(qq, Eq, gq) {
+       gq.BAKED_VERTEX_ANIMATION_TEXTURE && gq.INSTANCES && qq.push("bakedVertexAnimationSettingsInstanced")
+     }
+ 
+     function yq(qq, Eq, gq) {
+ ... (9 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L335-L389` → after: `L1883-L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1883-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1883-L1896) · [Before (L335-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L335-L389)

```diff
-       hasTexture(zz) {
-         if (super.hasTexture(zz)) return !0;
-         for (const bz in this._textures)
-           if (this._textures[bz] === zz) return !0;
-         const uz = zz.getInternalTexture();
-         for (const bz in this._internalTextures)
-           if (this._internalTextures[bz] === uz) return !0;
-         for (const bz in this._textureArrays) {
-           const uz = this._textureArrays[bz];
-           for (let bz = 0; bz < uz.length; bz++)
-             if (uz[bz] === zz) return !0
-         }
-         return !1
-       }
-       clone(zz) {
-         const uz = Ez.e.Clone((() => new wz(zz, this.XT(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
- ... (39 more removed lines; see GitHub link above)
+     }
+ 
+     function tq(qq, Eq, gq, Yq, lq) {
+       let Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+       qq._bindLight(Eq, gq, Yq, lq, Oq)
+     }
+     const rq = 4,
+       vq = new WeakMap;
+ 
+     function hq(qq, Eq, gq, Yq) {
+       let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
+       const Oq = Math.min(Eq.lightSources.length, lq);
+       for (let mq = 0; mq < Oq; mq++) {
+         tq(Eq.lightSources[mq], mq, qq, gq, "boolean" === typeof Yq ? Yq : Yq.SPECULARTERM, Eq.receiveShadows)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L391` → after: `L1898-L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1898-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L1898-L2029) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L391)

```diff
-       dispose(zz, uz, bz) {
+     }
+ 
+     function nq(qq, Eq, gq, Yq) {
+       gq.NUM_BONE_INFLUENCERS > 0 && (Yq.addCPUSkinningFallback(0, Eq), qq.push("matricesIndices"), qq.push("matricesWeights"), gq.NUM_BONE_INFLUENCERS > 4 && (qq.push("matricesIndicesExtra"), qq.push("matricesWeightsExtra")))
+     }
+ 
+     function bq(qq, Eq) {
+       (Eq.INSTANCES || Eq.THIN_INSTANCES) && aq(qq, !!Eq.PREPASS_VELOCITY), Eq.INSTANCESCOLOR && qq.push("instanceColor")
+     }
+ 
+     function iq(qq, Eq) {
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
+         Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         lq = 0;
+       for (let Oq = 0; Oq < gq && qq["LIGHT" + Oq]; Oq++) Oq > 0 && (lq = Yq + Oq, Eq.addFallback(lq, "LIGHT" + Oq)), qq.SHADOWS || (qq["SHADOW" + Oq] && Eq.addFallback(Yq, "SHADOW" + Oq), qq["SHADOWPCF" + Oq] && Eq.addFallback(Yq, "SHADOWPCF" + Oq), qq["SHADOWPCSS" + Oq] && Eq.a … [truncated]
+       return lq
+ ... (116 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L393-L399` → after: `L2031-L2032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2031-L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L2031-L2032) · [Before (L393-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L393-L399)

```diff
-           let zz;
-           for (zz in this._textures) this._textures[zz].dispose();
-           for (zz in this._internalTextures) this._internalTextures[zz].dispose();
-           for (zz in this._textureArrays) {
-             const uz = this._textureArrays[zz];
-             for (let zz = 0; zz < uz.length; zz++) uz[zz].dispose()
-           }
+           const qq = Eq.getShadowMap();
+           qq && qq.renderList && qq.renderList.length > 0 && (xq.shadowEnabled = !0, Eq.prepareDefines(lq, Yq))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L403-L447` → after: `L2035-L2109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2035-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L2035-L2109) · [Before (L403-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L403-L447)

```diff
-       serialize() {
-         const zz = Ez.e.Serialize(this);
-         let uz;
-         for (uz in zz.customType = "BABYLON.ShaderMaterial", zz.uniqueId = this.uniqueId, zz.options = this._options, zz.shaderPath = this._shaderPath, zz.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, zz.stencil = this.stencil.serialize(), zz.textures = {}, this._texture … [truncated]
-         for (uz in zz.textureArrays = {}, this._textureArrays) {
-           zz.textureArrays[uz] = [];
-           const bz = this._textureArrays[uz];
-           for (let Ez = 0; Ez < bz.length; Ez++) zz.textureArrays[uz].push(bz[Ez].serialize())
-         }
-         for (uz in zz.ints = {}, this._ints) zz.ints[uz] = this._ints[uz];
-         for (uz in zz.uints = {}, this._uints) zz.uints[uz] = this._uints[uz];
-         for (uz in zz.floats = {}, this._floats) zz.floats[uz] = this._floats[uz];
-         for (uz in zz.floatsArrays = {}, this._floatsArrays) zz.floatsArrays[uz] = this._floatsArrays[uz];
-         for (uz in zz.colors3 = {}, this._colors3) {
-           const bz = this._colors3[uz];
-           zz.colors3[uz] = [bz.r, bz.g, bz.b]
- ... (29 more removed lines; see GitHub link above)
+       gq.lightmapMode != Oq.c.LIGHTMAP_DEFAULT ? (xq.lightmapMode = !0, lq["LIGHTMAPEXCLUDED" + Yq] = !0, lq["LIGHTMAPNOSPECULAR" + Yq] = gq.lightmapMode == Oq.c.LIGHTMAP_SHADOWSONLY) : (lq["LIGHTMAPEXCLUDED" + Yq] = !1, lq["LIGHTMAPNOSPECULAR" + Yq] = !1)
+     }
+ 
+     function Sq(qq, Eq, gq, Yq, lq) {
+       let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+         xq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Aq = function(qq, Eq) {
+           let gq = !1;
+           if (qq.activeCamera) {
+             const Yq = Eq.CAMERA_ORTHOGRAPHIC ? 1 : 0,
+               lq = Eq.CAMERA_PERSPECTIVE ? 1 : 0,
+               Oq = 1 === qq.activeCamera.mode ? 1 : 0,
+               mq = 0 === qq.activeCamera.mode ? 1 : 0;
+             (Yq ^ Oq || lq ^ mq) && (Eq.CAMERA_ORTHOGRAPHIC = 1 === Oq, Eq.CAMERA_PERSPECTIVE = 1 === mq, gq = !0)
+           }
+           return gq
+ ... (59 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L452-L471` → after: `L2114-L2178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2114-L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L2114-L2178) · [Before (L452-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L452-L471)

```diff
-       const nz = Ez.e.Parse((() => new wz(zz.name, uz, zz.shaderPath, zz.options, zz.storeEffectOnSubMeshes)), zz, uz, bz);
-       let lz;
-       for (lz in zz.stencil && nz.stencil.parse(zz.stencil, uz, bz), zz.textures) nz.setTexture(lz, Mz.e.Parse(zz.textures[lz], uz, bz));
-       for (lz in zz.textureArrays) {
-         const Ez = zz.textureArrays[lz],
-           iz = [];
-         for (let zz = 0; zz < Ez.length; zz++) iz.push(Mz.e.Parse(Ez[zz], uz, bz));
-         nz.setTextureArray(lz, iz)
-       }
-       for (lz in zz.ints) nz.setInt(lz, zz.ints[lz]);
-       for (lz in zz.uints) nz.setUInt(lz, zz.uints[lz]);
-       for (lz in zz.floats) nz.setFloat(lz, zz.floats[lz]);
-       for (lz in zz.floatsArrays) nz.setFloats(lz, zz.floatsArrays[lz]);
-       for (lz in zz.colors3) {
-         const uz = zz.colors3[lz];
-         nz.setColor3(lz, {
- ... (4 more removed lines; see GitHub link above)
+       const Yq = Eq.ORDER_INDEPENDENT_TRANSPARENCY,
+         lq = Eq.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
+       Eq.ORDER_INDEPENDENT_TRANSPARENCY = qq.useOrderIndependentTransparency && gq, Eq.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !qq.Ba().getCaps().textureFloatLinearFiltering, Yq === Eq.ORDER_INDEPENDENT_TRANSPARENCY && lq === Eq.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || Eq.markAsU … [truncated]
+     }
+ 
+     function Fq(qq, Eq, gq) {
+       const Yq = Eq.PREPASS;
+       if (!Eq._arePrePassDirty) return;
+       const lq = [{
+         type: 1,
+         define: "PREPASS_POSITION",
+         index: "PREPASS_POSITION_INDEX"
+       }, {
+         type: 9,
+         define: "PREPASS_LOCAL_POSITION",
+         index: "PREPASS_LOCAL_POSITION_INDEX"
+ ... (49 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L473-L488` → after: `L2180-L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2180-L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L2180-L2228) · [Before (L473-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L473-L488)

```diff
-       for (lz in zz.colors3Arrays) {
-         const uz = zz.colors3Arrays[lz].reduce(((zz, uz, bz) => (bz % 3 === 0 ? zz.push([uz]) : zz[zz.length - 1].push(uz), zz)), []).map((zz => ({
-           r: zz[0],
-           g: zz[1],
-           b: zz[2]
-         })));
-         nz.setColor3Array(lz, uz)
-       }
-       for (lz in zz.colors4) {
-         const uz = zz.colors4[lz];
-         nz.setColor4(lz, {
-           r: uz[0],
-           g: uz[1],
-           b: uz[2],
-           a: uz[3]
-         })
+       Eq.PREPASS != Yq && (Eq.markAsUnprocessed(), Eq.markAsImageProcessingDirty())
+     }
+ 
+     function sq(qq, Eq, gq, Yq) {
+       let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         Aq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         cq = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
+       lq && lq.push("Light" + qq), Oq || (Eq.push("vLightData" + qq, "vLightDiffuse" + qq, "vLightSpecular" + qq, "vLightDirection" + qq, "vLightWidth" + qq, "vLightHeight" + qq, "vLightFalloff" + qq, "vLightGround" + qq, "vSliceData" + qq, "vSliceRanges" + qq, "lightMatrix" + qq … [truncated]
+     }
+ 
+     function Xq(qq, Eq, gq) {
+       const Yq = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
+       gq && Yq.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSpheri … [truncated]
+ ... (33 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L490-L504` → after: `L2230-L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2230-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L2230-L2231) · [Before (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L490-L504)

```diff
-       for (lz in zz.colors4Arrays) {
-         const uz = zz.colors4Arrays[lz].reduce(((zz, uz, bz) => (bz % 4 === 0 ? zz.push([uz]) : zz[zz.length - 1].push(uz), zz)), []).map((zz => ({
-           r: zz[0],
-           g: zz[1],
-           b: zz[2],
-           a: zz[3]
-         })));
-         nz.setColor4Array(lz, uz)
-       }
-       for (lz in zz.vectors2) {
-         const uz = zz.vectors2[lz];
-         nz.setVector2(lz, {
-           x: uz[0],
-           y: uz[1]
-         })
+       getEffect() {
+         return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L506-L512` → after: `L2233-L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2233-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L2233-L2234) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L506-L512)

```diff
-       for (lz in zz.vectors3) {
-         const uz = zz.vectors3[lz];
-         nz.setVector3(lz, {
-           x: uz[0],
-           y: uz[1],
-           z: uz[2]
-         })
+       isReady(qq, Eq) {
+         return !!qq && (!this._storeEffectOnSubMeshes || (!qq.fn || 0 === qq.fn.length || this.isReadyForSubMesh(qq, qq.fn[0], Eq)))
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L514-L521` → after: `L2236-L2295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2236-L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L2236-L2295) · [Before (L514-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L514-L521)

```diff
-       for (lz in zz.vectors4) {
-         const uz = zz.vectors4[lz];
-         nz.setVector4(lz, {
-           x: uz[0],
-           y: uz[1],
-           z: uz[2],
-           w: uz[3]
-         })
+       _isReadyForSubMesh(qq) {
+         const Eq = qq.materialDefines;
+         return !(this.checkReadyOnEveryCall || !qq.effect || !Eq || Eq._renderId !== this.ZJ().getRenderId())
+       }
+       bindOnlyWorldMatrix(qq) {
+         this._activeEffect.setMatrix("world", qq)
+       }
+       bindOnlyNormalMatrix(qq) {
+         this._activeEffect.setMatrix("normalMatrix", qq)
+       }
+       bind(qq, Eq) {
+         Eq && this.bindForSubMesh(qq, Eq, Eq.fn[0])
+       }
+       _afterBind(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           gq = arguments.length > 2 ? arguments[2] : void 0;
+ ... (44 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L535-L545` → after: `L2299-L2303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2299-L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L2299-L2303) · [Before (L535-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L535-L545)

```diff
-     async function fz(zz, uz, bz) {
-       let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
-       return await new Promise(((nz, iz) => {
-         const lz = new Hz.b;
-         lz.addEventListener("readystatechange", (() => {
-           if (4 == lz.readyState)
-             if (200 == lz.status) {
-               const uz = Xz(JSON.parse(lz.responseText), bz || pz.d.LastCreatedScene, Ez);
-               zz && (uz.name = zz), nz(uz)
-             } else iz("Unable to load the ShaderMaterial")
-         })), lz.open("GET", uz), lz.send()
+ 
+     function Oq(qq, Eq) {
+       Eq.forEach(((Eq, gq) => {
+         const Yq = `vp_${gq}_info`;
+         qq.setFloat4(Yq, Eq.offset, Eq.stride, Eq.type, Eq.normalized ? 1 : 0)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L548-L561` → after: `L2306-L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2306-L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L2306-L2378) · [Before (L548-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L548-L561)

```diff
-     async function sz(zz, uz) {
-       let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const Ez = this?.SnippetUrl ?? wz.SnippetUrl;
-       return await new Promise(((nz, iz) => {
-         const lz = new Hz.b;
-         lz.addEventListener("readystatechange", (() => {
-           if (4 == lz.readyState)
-             if (200 == lz.status) {
-               const Ez = JSON.parse(JSON.parse(lz.responseText).jsonPayload),
-                 iz = Xz(JSON.parse(Ez.shaderMaterial), uz || pz.d.LastCreatedScene, bz);
-               iz.snippetId = zz, nz(iz)
-             } else iz("Unable to load the snippet " + zz)
-         })), lz.open("GET", Ez + "/" + zz.replace(/#/g, "/")), lz.send()
-       }))
+   },
+   40067: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => xq,
+       c: () => Aq
+     });
+     var Yq = gq(39757),
+       lq = gq(37139),
+       Oq = gq(39759);
+     let mq = (() => {
+       var qq;
+       let Eq, gq, lq = [];
+       return qq = class {
+         static extractMinAndMaxIndexed(qq, Eq, gq, Yq, lq, Oq) {
+           for (let mq = gq; mq < gq + Yq; mq++) {
+             const gq = 3 * Eq[mq],
+ ... (57 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L567-L568` → after: `L2381-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L2381-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/254.js#L2381-L2389) · [Before (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/254.js#L567-L568)

```diff
-     function Nz() {
-       oz || (oz = !0, wz.Parse = Xz, wz.ParseFromFileAsync = fz, wz.ParseFromSnippetAsync = sz, wz.CreateFromSnippetAsync = rz, (0, Rz.c)("BABYLON.ShaderMaterial", wz))
+     function Aq(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         Oq = arguments.length > 4 ? arguments[4] : void 0;
+       const xq = new lq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         Aq = new lq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       return Oq || (Oq = 3), mq.extractMinAndMax(qq, Eq, gq, Oq, xq, Aq), Yq && (xq.x -= xq.x * Yq.x + Yq.y, xq.y -= xq.y * Yq.x + Yq.y, xq.z -= xq.z * Yq.x + Yq.y, Aq.x += Aq.x * Yq.x + Yq.y, Aq.y += Aq.y * Yq.x + Yq.y, Aq.z += Aq.z * Yq.x + Yq.y), {
+         minimum: xq,
+         maximum: Aq
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/255.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/255.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L5-L27` → after: `L4-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/255.js#L4-L365) · [Before (L5-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/255.js#L5-L27)

```diff
-   39654: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       FirebaseError: () => Ez.e,
-       SDK_VERSION: () => Ez.h,
-       _DEFAULT_ENTRY_NAME: () => Ez.i,
-       Hbz: () => Ez.j,
-       _addOrOverwriteComponent: () => Ez.l,
-       _apps: () => Ez.n,
-       _clearComponents: () => Ez.r,
-       _components: () => Ez.t,
-       _getProvider: () => Ez.x,
-       _registerComponent: () => Ez.A,
-       _removeServiceInstance: () => Ez.E,
-       deleteApp: () => Ez.H,
-       getApp: () => Ez.K,
-       getApps: () => Ez.J,
- ... (7 more removed lines; see GitHub link above)
+   41347: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Yq
+     });
+     class Yq {}
+     Yq.AUTOSAMPLERSUFFIX = "Sampler", Yq.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Yq.ALPHA_DISABLE = 0, Yq.ALPHA_ADD = 1, Yq.ALPHA_COMBINE = 2, Yq.ALPHA_SUBTRACT = 3, Yq.ALPHA_MULTIPLY = 4, Yq.ALPHA_MAXIMIZED = 5, Yq.ALPHA_ONEONE = 6, Yq.ALPHA_PREMULTIPLIED = 7, Yq.ALPH … [truncated]
+   },
+   41329: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => Aq
+     });
+     var Yq = gq(39757),
+       lq = gq(39759),
+       Oq = gq(37139),
+       mq = gq(39995),
+       xq = gq(39967);
+ ... (346 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/256.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/256.js` (62 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L5)

```diff
-   39673: (zz, uz, bz) => {
+   40225: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L7-L30` → after: `L6-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L6-L11) · [Before (L7-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L7-L30)

```diff
-       B: () => Oz,
-       E: () => dz,
-       I: () => gz,
-       J: () => Zz,
-       N: () => Kz,
-       Q: () => xz,
-       T: () => Xz,
-       X: () => fz,
-       Z: () => Rz,
-       b: () => Fz,
-       bb: () => wz,
-       c: () => Nz,
-       f: () => oz,
-       fb: () => Lz,
-       gb: () => Tz,
-       hb: () => sz,
- ... (8 more removed lines; see GitHub link above)
+       e: () => tq,
+       i: () => Qq,
+       k: () => oq,
+       m: () => Pq,
+       p: () => Hq,
+       s: () => jq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L32-L126` → after: `L13-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L13-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L13-L45) · [Before (L32-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L32-L126)

```diff
-     const Ez = function(zz) {
-         const uz = [];
-         let bz = 0;
-         for (let Ez = 0; Ez < zz.length; Ez++) {
-           let nz = zz.charCodeAt(Ez);
-           nz < 128 ? uz[bz++] = nz : nz < 2048 ? (uz[bz++] = nz >> 6 | 192, uz[bz++] = 63 & nz | 128) : 55296 === (64512 & nz) && Ez + 1 < zz.length && 56320 === (64512 & zz.charCodeAt(Ez + 1)) ? (nz = 65536 + ((1023 & nz) << 10) + (1023 & zz.charCodeAt(++Ez)), uz[bz++] = nz >> 1 … [truncated]
-         }
-         return uz
-       },
-       nz = {
-         byteToCharMap_: null,
-         charToByteMap_: null,
-         byteToCharMapWebSafe_: null,
-         charToByteMapWebSafe_: null,
-         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
-         get ENCODED_VALS() {
- ... (79 more removed lines; see GitHub link above)
+     var Yq = gq(39779),
+       lq = gq(39838),
+       Oq = gq(37139),
+       mq = gq(39879),
+       xq = gq(40233),
+       Aq = gq(40104),
+       cq = gq(39801),
+       uq = gq(40096),
+       Bq = gq(37153),
+       Wq = gq(40083),
+       Nq = gq(40079),
+       aq = gq(40115),
+       Vq = gq(37171);
+     const dq = {
+       effect: null,
+       subMesh: null
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L133-L189` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L48-L49) · [Before (L133-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L133-L189)

```diff
-     }
-     const lz = function(zz) {
-         return function(zz) {
-           const uz = Ez(zz);
-           return nz.encodeByteArray(uz, !0)
-         }(zz).replace(/\./g, "")
-       },
-       Mz = function(zz) {
-         try {
-           return nz.decodeString(zz, !0)
-         } catch (uz) {
-           console.error("base64Decode failed: ", uz)
-         }
-         return null
-       };
-     const tz = () => function() {
- ... (41 more removed lines; see GitHub link above)
+       get shaderPath() {
+         return this._shaderPath
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L191-L194` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L51-L52) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L191-L194)

```diff
-       wrapCallback(zz) {
-         return (uz, bz) => {
-           uz ? this.reject(uz) : this.resolve(bz), "function" === typeof zz && (this.promise.catch((() => {})), 1 === zz.length ? zz(uz) : zz(uz, bz))
-         }
+       set shaderPath(qq) {
+         this._shaderPath = qq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L196-L224` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L54-L55) · [Before (L196-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L196-L224)

```diff
-     }
- 
-     function Zz() {
-       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
-     }
- 
-     function Rz() {
-       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zz())
-     }
- 
-     function Kz() {
-       const zz = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
-       return "object" === typeof zz && void 0 !== zz.id
-     }
- 
-     function wz() {
- ... (13 more removed lines; see GitHub link above)
+       get options() {
+         return this._options
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L226-L253` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L57-L58) · [Before (L226-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L226-L253)

```diff
-     }
- 
-     function sz() {
-       return new Promise(((zz, uz) => {
-         try {
-           let bz = !0;
-           const Ez = "validate-browser-context-for-indexeddb-analytics-module",
-             nz = self.indexedDB.open(Ez);
-           nz.onsuccess = () => {
-             nz.result.close(), bz || self.indexedDB.deleteDatabase(Ez), zz(!0)
-           }, nz.onupgradeneeded = () => {
-             bz = !1
-           }, nz.onerror = () => {
-             var zz;
-             uz((null === (zz = nz.error) || void 0 === zz ? void 0 : zz.message) || "")
-           }
- ... (12 more removed lines; see GitHub link above)
+       get isMultiview() {
+         return this._multiview
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L255-L258` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L60-L61) · [Before (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L255-L258)

```diff
-     }
-     class Nz {
-       constructor(zz, uz, bz) {
-         this.service = zz, this.serviceName = uz, this.errors = bz
+       getClassName() {
+         return "ShaderMaterial"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L260-L271` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L63-L64) · [Before (L260-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L260-L271)

```diff
-       create(zz) {
-         const uz = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
-           bz = `${this.service}/${zz}`,
-           Ez = this.errors[zz],
-           nz = Ez ? function(zz, uz) {
-             return zz.replace(vz, ((zz, bz) => {
-               const Ez = uz[bz];
-               return null != Ez ? String(Ez) : `<${bz}?>`
-             }))
-           }(Ez, uz) : "Error",
-           iz = `${this.serviceName}: ${nz} (${bz}).`;
-         return new oz(bz, iz, uz)
+       needAlphaBlending() {
+         return this.alpha < 1 || this._options.needAlphaBlending
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L273-L292` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L66-L67) · [Before (L273-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L273-L292)

```diff
-     }
-     const vz = /\{\$([^}]+)}/g;
- 
-     function xz(zz) {
-       for (const uz in zz)
-         if (Object.prototype.hasOwnProperty.call(zz, uz)) return !1;
-       return !0
-     }
- 
-     function Jz(zz, uz) {
-       if (zz === uz) return !0;
-       const bz = Object.keys(zz),
-         Ez = Object.keys(uz);
-       for (const nz of bz) {
-         if (!Ez.includes(nz)) return !1;
-         const bz = zz[nz],
- ... (4 more removed lines; see GitHub link above)
+       needAlphaTesting() {
+         return this._options.needAlphaTesting
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L294-L338` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L69-L70) · [Before (L294-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L294-L338)

```diff
-       for (const nz of Ez)
-         if (!bz.includes(nz)) return !1;
-       return !0
-     }
- 
-     function Az(zz) {
-       return null !== zz && "object" === typeof zz
-     }
- 
-     function Tz(zz) {
-       const uz = [];
-       for (const [bz, Ez] of Object.entries(zz)) Array.isArray(Ez) ? Ez.forEach((zz => {
-         uz.push(encodeURIComponent(bz) + "=" + encodeURIComponent(zz))
-       })) : uz.push(encodeURIComponent(bz) + "=" + encodeURIComponent(Ez));
-       return uz.length ? "&" + uz.join("&") : ""
-     }
- ... (29 more removed lines; see GitHub link above)
+       _checkUniform(qq) {
+         -1 === this._options.uniforms.indexOf(qq) && this._options.uniforms.push(qq)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L340-L343` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L72-L73) · [Before (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L340-L343)

```diff
-       next(zz) {
-         this.forEachObserver((uz => {
-           uz.next(zz)
-         }))
+       setTexture(qq, Eq) {
+         return -1 === this._options.samplers.indexOf(qq) && this._options.samplers.push(qq), this._textures[qq] = Eq, this
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L345-L348` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L75-L76) · [Before (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L345-L348)

```diff
-       error(zz) {
-         this.forEachObserver((uz => {
-           uz.error(zz)
-         })), this.close(zz)
+       setInternalTexture(qq, Eq) {
+         return -1 === this._options.samplers.indexOf(qq) && this._options.samplers.push(qq), this._internalTextures[qq] = Eq, this
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L350-L353` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L78-L79) · [Before (L350-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L350-L353)

```diff
-       complete() {
-         this.forEachObserver((zz => {
-           zz.complete()
-         })), this.close()
+       removeTexture(qq) {
+         delete this._textures[qq]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L355-L373` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L81-L82) · [Before (L355-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L355-L373)

```diff
-       subscribe(zz, uz, bz) {
-         let Ez;
-         if (void 0 === zz && void 0 === uz && void 0 === bz) throw new Error("Missing Observer.");
-         Ez = function(zz, uz) {
-           if ("object" !== typeof zz || null === zz) return !1;
-           for (const bz of uz)
-             if (bz in zz && "function" === typeof zz[bz]) return !0;
-           return !1
-         }(zz, ["next", "error", "complete"]) ? zz : {
-           next: zz,
-           error: uz,
-           complete: bz
-         }, void 0 === Ez.next && (Ez.next = Vz), void 0 === Ez.error && (Ez.error = Vz), void 0 === Ez.complete && (Ez.complete = Vz);
-         const nz = this.unsubscribeOne.bind(this, this.observers.length);
-         return this.finalized && this.task.then((() => {
-           try {
- ... (3 more removed lines; see GitHub link above)
+       setTextureArray(qq, Eq) {
+         return -1 === this._options.samplers.indexOf(qq) && this._options.samplers.push(qq), this._checkUniform(qq), this._textureArrays[qq] = Eq, this
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L375-L376` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L84-L85) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L375-L376)

```diff
-       unsubscribeOne(zz) {
-         void 0 !== this.observers && void 0 !== this.observers[zz] && (delete this.observers[zz], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
+       setExternalTexture(qq, Eq) {
+         return -1 === this._options.externalTextures.indexOf(qq) && this._options.externalTextures.push(qq), this._externalTextures[qq] = Eq, this
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L378-L380` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L87-L88) · [Before (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L378-L380)

```diff
-       forEachObserver(zz) {
-         if (!this.finalized)
-           for (let uz = 0; uz < this.observers.length; uz++) this.sendOne(uz, zz)
+       setFloat(qq, Eq) {
+         return this._checkUniform(qq), this._floats[qq] = Eq, this
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L382-L389` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L90-L91) · [Before (L382-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L382-L389)

```diff
-       sendOne(zz, uz) {
-         this.task.then((() => {
-           if (void 0 !== this.observers && void 0 !== this.observers[zz]) try {
-             uz(this.observers[zz])
-           } catch (bz) {
-             "undefined" !== typeof console && console.error && console.error(bz)
-           }
-         }))
+       setInt(qq, Eq) {
+         return this._checkUniform(qq), this._ints[qq] = Eq, this
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L391-L394` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L93-L94) · [Before (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L391-L394)

```diff
-       close(zz) {
-         this.finalized || (this.finalized = !0, void 0 !== zz && (this.finalError = zz), this.task.then((() => {
-           this.observers = void 0, this.onNoObservers = void 0
-         })))
+       setUInt(qq, Eq) {
+         return this._checkUniform(qq), this._uints[qq] = Eq, this
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L396-L468` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L96-L97) · [Before (L396-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L396-L468)

```diff
-     }
- 
-     function Vz() {}
-     const mz = 1e3,
-       qz = 2,
-       hz = 144e5,
-       Uz = .5;
- 
-     function cz(zz) {
-       let uz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qz;
-       const bz = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mz) * Math.pow(uz, zz),
-         Ez = Math.round(Uz * bz * (Math.random() - .5) * 2);
-       return Math.min(hz, bz + Ez)
-     }
- 
-     function gz(zz) {
- ... (57 more removed lines; see GitHub link above)
+       setFloats(qq, Eq) {
+         return this._checkUniform(qq), this._floatsArrays[qq] = Eq, this
```
