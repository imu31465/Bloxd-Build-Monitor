# Changed — Bundle Modifications Report (Part 052 / 132)

- **Updated at**: `2026-11-21T04:21 JST`
- **Part**: `52 / 132` (**430** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 051](part-051.md) · [Part 053 →](part-053.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/254.js` (bbb6l5.0244a119 → halsg.2bd74967 · continued)

- **File**: `bundles/bloxd.io/chunks/js/254.js` (232 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6)

#### 77. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L944)

```diff
-           this._useUBO ? this._needToBindSceneUbo = !0 : qq.setMatrix("view", this.ZJ().getViewMatrix())
+           this._useUBO ? this._needToBindSceneUbo = !0 : bb.setMatrix("view", this.ZN().getViewMatrix())
```

#### 78. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L947` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L947) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L947)

```diff
-           this._useUBO ? this._needToBindSceneUbo = !0 : (qq.setMatrix("viewProjection", this.ZJ().getTransformMatrix()), qq.setMatrix("projection", this.ZJ().getProjectionMatrix()), qq.setMatrix("inverseProjection", this.ZJ().getInverseProjectionMatrix()))
+           this._useUBO ? this._needToBindSceneUbo = !0 : (bb.setMatrix("viewProjection", this.ZN().getTransformMatrix()), bb.setMatrix("projection", this.ZN().getProjectionMatrix()), bb.setMatrix("inverseProjection", this.ZN().getInverseProjectionMatrix()))
```

#### 79. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L954-L955` → after: `L954-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L954-L955) · [Before (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L954-L955)

```diff
-           if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && Eq && (this._needToBindSceneUbo = !1, (0, Vq.s)(Eq, this.ZJ().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = qq ? qq.visibility : 1, this._onBindObservable && … [truncated]
-             const qq = this._scene.Ba();
+           if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && ub && (this._needToBindSceneUbo = !1, (0, pb.s)(ub, this.ZN().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = bb ? bb.visibility : 1, this._onBindObservable && … [truncated]
+             const bb = this._scene.UX();
```

#### 80. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L959)

```diff
-             const qq = this._scene.Ba();
+             const bb = this._scene.UX();
```

#### 81. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L963` → after: `L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L963) · [Before (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L963)

```diff
-             const qq = this._scene.Ba();
+             const bb = this._scene.UX();
```

#### 82. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L969` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L969) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L969)

```diff
-             this._scene.Ba().setDepthFunction(this._cachedDepthFunctionState)
+             this._scene.UX().setDepthFunction(this._cachedDepthFunctionState)
```

#### 83. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L972)

```diff
-             this._scene.Ba().setDepthWrite(this._cachedDepthWriteState)
+             this._scene.UX().setDepthWrite(this._cachedDepthWriteState)
```

#### 84. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L975` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L975) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L975)

```diff
-             this._scene.Ba().setColorWrite(this._cachedColorWriteState)
+             this._scene.UX().setColorWrite(this._cachedColorWriteState)
```

#### 85. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1015` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1015) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1015)

```diff
-             Oq = this.ZJ(),
+             Gb = this.ZN(),
```

#### 86. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1019)

```diff
-             if (!this._scene || !this._scene.Ba()) return;
+             if (!this._scene || !this._scene.UX()) return;
```

#### 87. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1024)

```diff
-               if (qq.fn) {
+               if (bb.FW) {
```

#### 88. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1043-L1044` → after: `L1043-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1043-L1044) · [Before (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1043-L1044)

```diff
-         xgq(Eq) {
-           this.ZJ().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (qq._DirtyCallbackArray.length = 0, Eq & qq.ImageProcessingDirtyFlag && qq._DirtyCallbackArray.push(qq._ImageProcessingDirtyCallBack), Eq & qq.TextureDirtyFlag && qq._DirtyCallbackArray.push(qq._Textu … [truncated]
+         yub(ub) {
+           this.ZN().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (bb._DirtyCallbackArray.length = 0, ub & bb.ImageProcessingDirtyFlag && bb._DirtyCallbackArray.push(bb._ImageProcessingDirtyCallBack), ub & bb.TextureDirtyFlag && bb._DirtyCallbackArray.push(bb._Textu … [truncated]
```

#### 89. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1047)

```diff
-           const qq = this.ZJ().meshes;
+           const bb = this.ZN().meshes;
```

#### 90. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1049-L1050` → after: `L1049-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1049-L1050) · [Before (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1049-L1050)

```diff
-             if (Eq.fn)
-               for (const qq of Eq.fn) qq.da() === this && qq.resetDrawCache()
+             if (ub.FW)
+               for (const bb of ub.FW) bb.HX() === this && bb.resetDrawCache()
```

#### 91. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1053` → after: `L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1053) · [Before (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1053)

```diff
-           const Eq = this.ZJ();
+           const ub = this.ZN();
```

#### 92. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1057-L1059` → after: `L1057-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1057-L1059) · [Before (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1057-L1059)

```diff
-             if (Yq.fn)
-               for (const gq of Yq.fn) {
-                 if ((gq.da() || (Eq._hasDefaultMaterial ? Eq.defaultMaterial : null)) === this)
+             if (Bb.FW)
+               for (const hb of Bb.FW) {
+                 if ((hb.HX() || (ub._hasDefaultMaterial ? ub.defaultMaterial : null)) === this)
```

#### 93. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1064-L1066` → after: `L1064-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1064-L1066) · [Before (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1064-L1066)

```diff
-           if (this.ZJ().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
-           const qq = this.ZJ().enablePrePassRenderer();
-           qq && qq.xgq()
+           if (this.ZN().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
+           const bb = this.ZN().enablePrePassRenderer();
+           bb && bb.yub()
```

#### 94. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1104` → after: `L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1104) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1104)

```diff
-             this.MJ.add((() => {
+             this.XN.add((() => {
```

#### 95. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1113` → after: `L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1113) · [Before (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1113)

```diff
-           const Yq = this.ZJ();
+           const Bb = this.ZN();
```

#### 96. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1127)

```diff
-           this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.MJ.notifyObservers(this), this.MJ.clear(), this._onBindObservable && this._onBind … [truncated]
+           this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.XN.notifyObservers(this), this.XN.clear(), this._onBindObservable && this._onBind … [truncated]
```

#### 97. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1134-L1135` → after: `L1134-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1134-L1135) · [Before (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1134-L1135)

```diff
-             if (qq.fn && gq)
-               for (const Yq of qq.fn) {
+             if (bb.FW && hb)
+               for (const Bb of bb.FW) {
```

#### 98. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1144` → after: `L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1144) · [Before (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1144)

```diff
-           qq.material !== this || qq.Plq || (qq.material = null)
+           bb.material !== this || bb.LOb || (bb.material = null)
```

#### 99. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1147` → after: `L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1147) · [Before (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1147)

```diff
-           const qq = Nq.d.Serialize(this);
+           const bb = Zb.c.Serialize(this);
```

#### 100. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1161` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1161) · [Before (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1161)

```diff
-           const lq = Oq.f.Instantiate(Eq.customType).Parse(Eq, gq, Yq);
+           const Ob = Gb.k.Instantiate(ub.customType).Parse(ub, hb, Bb);
```

#### 101. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1170)

```diff
-                 const qq = Oq.f.Instantiate("BABYLON." + lq);
+                 const bb = Gb.k.Instantiate("BABYLON." + Ob);
```

#### 102. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1178` → after: `L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1178) · [Before (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1178)

```diff
-         Eq = [(0, lq.M)()], gq = [(0, lq.M)()], jq = [(0, lq.M)()], Hq = [(0, lq.M)()], oq = [(0, lq.M)()], Pq = [(0, lq.M)()], Qq = [(0, lq.M)()], yq = [(0, lq.M)("alpha")], tq = [(0, lq.M)("backFaceCulling")], rq = [(0, lq.M)("textureRepetitionMode")], vq = [(0, lq.M)("textureR … [truncated]
+         ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Ab = [(0, Ob.K)()], lb = [(0, Ob.K)()], Kb = [(0, Ob.K)()], Wb = [(0, Ob.K)()], Cb = [(0, Ob.K)()], db = [(0, Ob.K)("alpha")], rb = [(0, Ob.K)("backFaceCulling")], jb = [(0, Ob.K)("textureRepetitionMode")], nb = [(0, Ob.K)("textureR … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1188)

```diff
-         }, null, sq), (0, Yq.f)(qq, null, kq, {
+         }, null, Vb), (0, Bb.h)(bb, null, Pb, {
```

#### 104. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1198` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1198) · [Before (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1198)

```diff
-         }, null, sq), (0, Yq.f)(qq, null, Rq, {
+         }, null, Vb), (0, Bb.h)(bb, null, qb, {
```

#### 105. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1208` → after: `L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1208) · [Before (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1208)

```diff
-         }, null, sq), (0, Yq.f)(qq, null, Fq, {
+         }, null, Vb), (0, Bb.h)(bb, null, yb, {
```

#### 106. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1218)

```diff
-         }, null, sq), (0, Yq.f)(null, null, Eq, {
+         }, null, Vb), (0, Bb.h)(null, null, ub, {
```

#### 107. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1231)

```diff
-         }, Xq, wq), (0, Yq.f)(null, null, gq, {
+         }, Fb, fb), (0, Bb.h)(null, null, hb, {
```

#### 108. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1244` → after: `L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1244) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1244)

```diff
-         }, Kq, Cq), (0, Yq.f)(null, null, jq, {
+         }, kb, Tb), (0, Bb.h)(null, null, Ab, {
```

#### 109. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1257` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1257) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1257)

```diff
-         }, Iq, eq), (0, Yq.f)(null, null, Hq, {
+         }, cb, Qb), (0, Bb.h)(null, null, lb, {
```

#### 110. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1270` → after: `L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1270) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1270)

```diff
-         }, Dq, qE), (0, Yq.f)(null, null, oq, {
+         }, Rb, bu), (0, Bb.h)(null, null, Kb, {
```

#### 111. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1283` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1283) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1283)

```diff
-         }, EE, gE), (0, Yq.f)(null, null, Pq, {
+         }, uu, hu), (0, Bb.h)(null, null, Wb, {
```

#### 112. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1296)

```diff
-         }, YE, lE), (0, Yq.f)(null, null, Qq, {
+         }, Bu, Ou), (0, Bb.h)(null, null, Cb, {
```

#### 113. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1309)

```diff
-         }, OE, mE), (0, Yq.f)(null, null, yq, {
+         }, Gu, Uu), (0, Bb.h)(null, null, db, {
```

#### 114. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1322` → after: `L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1322) · [Before (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1322)

```diff
-         }, xE, AE), (0, Yq.f)(null, null, tq, {
+         }, Lu, Yu), (0, Bb.h)(null, null, rb, {
```

#### 115. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1335)

```diff
-         }, cE, uE), (0, Yq.f)(null, null, rq, {
+         }, Su, au), (0, Bb.h)(null, null, jb, {
```

#### 116. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1348)

```diff
-         }, BE, WE), (0, Yq.f)(null, null, vq, {
+         }, Hu, wu), (0, Bb.h)(null, null, nb, {
```

#### 117. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1361` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1361) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1361)

```diff
-         }, NE, aE), (0, Yq.f)(null, null, hq, {
+         }, Zu, Xu), (0, Bb.h)(null, null, Db, {
```

#### 118. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1374)

```diff
-         }, VE, dE), (0, Yq.f)(null, null, nq, {
+         }, pu, ou), (0, Bb.h)(null, null, xb, {
```

#### 119. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1387` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1387) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1387)

```diff
-         }, jE, HE), (0, Yq.f)(null, null, bq, {
+         }, Au, lu), (0, Bb.h)(null, null, zb, {
```

#### 120. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1400` → after: `L1400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1400) · [Before (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1400)

```diff
-         }, oE, PE), (0, Yq.f)(null, null, iq, {
+         }, Ku, Wu), (0, Bb.h)(null, null, gb, {
```

#### 121. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1413)

```diff
-         }, QE, yE), (0, Yq.f)(null, null, Zq, {
+         }, Cu, du), (0, Bb.h)(null, null, ib, {
```

#### 122. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1426` → after: `L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1426) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1426)

```diff
-         }, tE, rE), (0, Yq.f)(null, null, fq, {
+         }, ru, ju), (0, Bb.h)(null, null, vb, {
```

#### 123. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1439` → after: `L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1439) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1439)

```diff
-         }, vE, hE), (0, Yq.f)(null, null, Mq, {
+         }, nu, Du), (0, Bb.h)(null, null, tb, {
```

#### 124. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1452)

```diff
-         }, nE, bE), (0, Yq.f)(null, null, Tq, {
+         }, xu, zu), (0, Bb.h)(null, null, Jb, {
```

#### 125. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1465)

```diff
-         }, iE, ZE), (0, Yq.f)(null, null, zq, {
+         }, gu, iu), (0, Bb.h)(null, null, eb, {
```

#### 126. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1478` → after: `L1478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1478) · [Before (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1478)

```diff
-         }, fE, ME), (0, Yq.f)(null, null, Sq, {
+         }, vu, tu), (0, Bb.h)(null, null, Nb, {
```

#### 127. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1491` → after: `L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1491) · [Before (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1491)

```diff
-         }, TE, zE), (0, Yq.f)(null, null, pq, {
+         }, Ju, eu), (0, Bb.h)(null, null, sb, {
```

#### 128. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1504` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1504) · [Before (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1504)

```diff
-         }, SE, pE), (0, Yq.f)(null, null, Gq, {
+         }, Nu, su), (0, Bb.h)(null, null, Mb, {
```

#### 129. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1517` → after: `L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1517) · [Before (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1517)

```diff
-         }, GE, LE), (0, Yq.f)(null, null, Lq, {
+         }, Mu, mu), (0, Bb.h)(null, null, mb, {
```

#### 130. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1530` → after: `L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1530) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1530)

```diff
-         }, JE, kE), (0, Yq.f)(null, null, Uq, {
+         }, Iu, Pu), (0, Bb.h)(null, null, Eb, {
```

#### 131. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1549` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1549) · [Before (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1549)

```diff
-       })(), qq.TriangleFillMode = 0, qq.WireFrameFillMode = 1, qq.PointFillMode = 2, qq.PointListDrawMode = 3, qq.LineListDrawMode = 4, qq.LineLoopDrawMode = 5, qq.LineStripDrawMode = 6, qq.TriangleStripDrawMode = 7, qq.TriangleFanDrawMode = 8, qq.ClockWiseSideOrientation = 0, qq … [truncated]
+       })(), bb.TriangleFillMode = 0, bb.WireFrameFillMode = 1, bb.PointFillMode = 2, bb.PointListDrawMode = 3, bb.LineListDrawMode = 4, bb.LineLoopDrawMode = 5, bb.LineStripDrawMode = 6, bb.TriangleStripDrawMode = 7, bb.TriangleFanDrawMode = 8, bb.ClockWiseSideOrientation = 0, bb … [truncated]
```

#### 132. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1557` → after: `L1557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1557) · [Before (L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1557)

```diff
-     Object.getOwnPropertyDescriptor(Hq.prototype, "pluginManager") || Object.defineProperty(Hq.prototype, "pluginManager", (0, jq.e)("Material", "pluginManager"))
+     Object.getOwnPropertyDescriptor(lb.prototype, "pluginManager") || Object.defineProperty(lb.prototype, "pluginManager", (0, Ab.f)("Material", "pluginManager"))
```

#### 133. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1559` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1559) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1559)

```diff
-   40092: (qq, Eq, gq) => {
+   39788: (bb, ub, hb) => {
```

#### 134. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1561` → after: `L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1561) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1561)

```diff
-       c: () => lq
+       e: () => Ob
```

#### 135. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1563)

```diff
-     var Yq = gq(39653);
+     var Bb = hb(39350);
```

#### 136. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1569` → after: `L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1569) · [Before (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1569)

```diff
-         this._DiffuseTextureEnabled !== qq && (this._DiffuseTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._DiffuseTextureEnabled !== bb && (this._DiffuseTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 137. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1575` → after: `L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1575) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1575)

```diff
-         this._BaseWeightTextureEnabled !== qq && (this._BaseWeightTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._BaseWeightTextureEnabled !== bb && (this._BaseWeightTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 138. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1581` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1581) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1581)

```diff
-         this._BaseDiffuseRoughnessTextureEnabled !== qq && (this._BaseDiffuseRoughnessTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._BaseDiffuseRoughnessTextureEnabled !== bb && (this._BaseDiffuseRoughnessTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 139. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1587` → after: `L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1587) · [Before (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1587)

```diff
-         this._DetailTextureEnabled !== qq && (this._DetailTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._DetailTextureEnabled !== bb && (this._DetailTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 140. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1593` → after: `L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1593) · [Before (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1593)

```diff
-         this._DecalMapEnabled !== qq && (this._DecalMapEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._DecalMapEnabled !== bb && (this._DecalMapEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 141. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1599` → after: `L1599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1599) · [Before (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1599)

```diff
-         this._AmbientTextureEnabled !== qq && (this._AmbientTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._AmbientTextureEnabled !== bb && (this._AmbientTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 142. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1605` → after: `L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1605) · [Before (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1605)

```diff
-         this._OpacityTextureEnabled !== qq && (this._OpacityTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._OpacityTextureEnabled !== bb && (this._OpacityTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 143. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1611` → after: `L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1611) · [Before (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1611)

```diff
-         this._ReflectionTextureEnabled !== qq && (this._ReflectionTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._ReflectionTextureEnabled !== bb && (this._ReflectionTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 144. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1617)

```diff
-         this._EmissiveTextureEnabled !== qq && (this._EmissiveTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._EmissiveTextureEnabled !== bb && (this._EmissiveTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 145. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1623` → after: `L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1623) · [Before (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1623)

```diff
-         this._SpecularTextureEnabled !== qq && (this._SpecularTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._SpecularTextureEnabled !== bb && (this._SpecularTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 146. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1629` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1629) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1629)

```diff
-         this._BumpTextureEnabled !== qq && (this._BumpTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._BumpTextureEnabled !== bb && (this._BumpTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 147. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1635` → after: `L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1635) · [Before (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1635)

```diff
-         this._LightmapTextureEnabled !== qq && (this._LightmapTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._LightmapTextureEnabled !== bb && (this._LightmapTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 148. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1641)

```diff
-         this._RefractionTextureEnabled !== qq && (this._RefractionTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._RefractionTextureEnabled !== bb && (this._RefractionTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 149. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1647` → after: `L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1647) · [Before (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1647)

```diff
-         this._ColorGradingTextureEnabled !== qq && (this._ColorGradingTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._ColorGradingTextureEnabled !== bb && (this._ColorGradingTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 150. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1653` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1653) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1653)

```diff
-         this._FresnelEnabled !== qq && (this._FresnelEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(4))
+         this._FresnelEnabled !== bb && (this._FresnelEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(4))
```

#### 151. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1659` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1659) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1659)

```diff
-         this._ClearCoatTextureEnabled !== qq && (this._ClearCoatTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._ClearCoatTextureEnabled !== bb && (this._ClearCoatTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 152. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1665` → after: `L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1665) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1665)

```diff
-         this._ClearCoatBumpTextureEnabled !== qq && (this._ClearCoatBumpTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._ClearCoatBumpTextureEnabled !== bb && (this._ClearCoatBumpTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 153. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1671` → after: `L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1671) · [Before (L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1671)

```diff
-         this._ClearCoatTintTextureEnabled !== qq && (this._ClearCoatTintTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._ClearCoatTintTextureEnabled !== bb && (this._ClearCoatTintTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 154. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1677` → after: `L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1677) · [Before (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1677)

```diff
-         this._SheenTextureEnabled !== qq && (this._SheenTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._SheenTextureEnabled !== bb && (this._SheenTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 155. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1683` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1683) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1683)

```diff
-         this._AnisotropicTextureEnabled !== qq && (this._AnisotropicTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._AnisotropicTextureEnabled !== bb && (this._AnisotropicTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 156. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1689` → after: `L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1689) · [Before (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1689)

```diff
-         this._ThicknessTextureEnabled !== qq && (this._ThicknessTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._ThicknessTextureEnabled !== bb && (this._ThicknessTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 157. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1695` → after: `L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1695) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1695)

```diff
-         this._RefractionIntensityTextureEnabled !== qq && (this._RefractionIntensityTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._RefractionIntensityTextureEnabled !== bb && (this._RefractionIntensityTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 158. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1701` → after: `L1701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1701) · [Before (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1701)

```diff
-         this._TranslucencyIntensityTextureEnabled !== qq && (this._TranslucencyIntensityTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._TranslucencyIntensityTextureEnabled !== bb && (this._TranslucencyIntensityTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 159. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1707)

```diff
-         this._TranslucencyColorTextureEnabled !== qq && (this._TranslucencyColorTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._TranslucencyColorTextureEnabled !== bb && (this._TranslucencyColorTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 160. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1713` → after: `L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1713) · [Before (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1713)

```diff
-         this._IridescenceTextureEnabled !== qq && (this._IridescenceTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+         this._IridescenceTextureEnabled !== bb && (this._IridescenceTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
```

#### 161. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1718` → after: `L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1718) · [Before (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1718)

```diff
-   40079: (qq, Eq, gq) => {
+   39773: (bb, ub, hb) => {
```

#### 162. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1720-L1723` → after: `L1720-L1726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1720-L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1720-L1726) · [Before (L1720-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1720-L1723)

```diff
-       D: () => Qq,
-       G: () => nq,
-       J: () => bq,
-       M: () => Nq,
+       A: () => xb,
+       E: () => zb,
+       F: () => Zb,
+       H: () => wb,
+       I: () => Pb,
+       K: () => Nb,
+       O: () => Jb,
```

#### 163. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1726` → after: `L1729-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1729-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1729-L1730) · [Before (L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1726)

```diff
-       V: () => Sq,
+       S: () => ib,
+       U: () => qb,
```

#### 164. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1728-L1729` → after: `L1732-L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1732-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1732-L1734) · [Before (L1728-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1728-L1729)

```diff
-       _: () => Mq,
-       b: () => fq,
+       X: () => yb,
+       Y: () => kb,
+       Z: () => Fb,
```

#### 165. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1731` → after: `L1736-L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1736-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1736-L1737) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1731)

```diff
-       c: () => yq,
+       d: () => vb,
+       e: () => db,
```

#### 166. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1734` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1740) · [Before (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1734)

```diff
-       hb: () => Rq,
+       h: () => Ab,
```

#### 167. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1736` → after: `L1742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1742) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1736)

```diff
-       jb: () => Uq,
+       j: () => Db,
```

#### 168. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1745-L1748` → after: `L1746-L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1746-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1746-L1748) · [Before (L1745-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1745-L1748)

```diff
-       vb: () => wq,
-       w: () => Pq,
-       xb: () => aq,
-       z: () => iq
+       u: () => Wb,
+       x: () => gb,
+       y: () => Cb
```

#### 169. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1750-L1754` → after: `L1750-L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1750-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1750-L1754) · [Before (L1750-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1750-L1754)

```diff
-     var Yq = gq(38653),
-       lq = gq(37153),
-       Oq = gq(39938),
-       mq = gq(40083),
-       xq = gq(40092);
+     var Bb = hb(38302),
+       Ob = hb(36748),
+       Gb = hb(39659),
+       Ub = hb(39782),
+       Lb = hb(39788);
```

#### 170. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1778)

```diff
-       gq && qq.fogEnabled && (!Eq || Eq.applyFog) && 0 !== qq.fogMode && (gq.setFloat4("vFogInfos", qq.fogMode, qq.fogStart, qq.fogEnd, qq.fogDensity), Yq ? (qq.fogColor.toLinearSpaceToRef(cq, qq.Ba().useExactSrgbConversions), gq.setColor3("vFogColor", cq)) : gq.setColor3("vFogCo … [truncated]
+       hb && bb.fogEnabled && (!ub || ub.applyFog) && 0 !== bb.fogMode && (hb.setFloat4("vFogInfos", bb.fogMode, bb.fogStart, bb.fogEnd, bb.fogDensity), Bb ? (bb.fogColor.toLinearSpaceToRef(Sb, bb.UX().useExactSrgbConversions), hb.setColor3("vFogColor", Sb)) : hb.setColor3("vFogCo … [truncated]
```

#### 171. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1826-L1827` → after: `L1826-L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1826-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1826-L1827) · [Before (L1826-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1826-L1827)

```diff
-       if (qq.texturesEnabled && lq && xq.c.ReflectionTextureEnabled) {
-         if (gq.Eqq("reflectionMatrix", lq.getReflectionTextureMatrix()), gq.updateFloat2("vReflectionInfos", lq.level * qq.iblIntensity, Wq), Aq && lq.boundingBoxSize) {
+       if (bb.texturesEnabled && Ob && Lb.e.ReflectionTextureEnabled) {
+         if (hb.S_("reflectionMatrix", Ob.getReflectionTextureMatrix()), hb.updateFloat2("vReflectionInfos", Ob.level * bb.iblIntensity, wb), Yb && Ob.boundingBoxSize) {
```

#### 172. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1851` → after: `L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1851) · [Before (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1851)

```diff
-       if (Yq && xq.c.ReflectionTextureEnabled) {
+       if (Bb && Lb.e.ReflectionTextureEnabled) {
```

#### 173. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1864)

```diff
-       Eq.Eqq(gq + "Matrix", Yq)
+       ub.S_(hb + "Matrix", Bb)
```

#### 174. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1880` → after: `L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1880) · [Before (L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1880)

```diff
-           Oq && (Eq.setMatrices("mBones", Oq), gq && qq.ZJ().prePassRenderer && qq.ZJ().prePassRenderer.getIndex(2) && (gq.previousBones[qq.uniqueId] || (gq.previousBones[qq.uniqueId] = Oq.slice()), Eq.setMatrices("mPreviousBones", gq.previousBones[qq.uniqueId]), Yq = Oq, gq.prev … [truncated]
+           Gb && (ub.setMatrices("mBones", Gb), hb && bb.ZN().prePassRenderer && bb.ZN().prePassRenderer.getIndex(2) && (hb.previousBones[bb.uniqueId] || (hb.previousBones[bb.uniqueId] = Gb.slice()), ub.setMatrices("mPreviousBones", hb.previousBones[bb.uniqueId]), Bb = Gb, hb.prev … [truncated]
```

#### 175. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1896` → after: `L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1896) · [Before (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1896)

```diff
-         tq(Eq.lightSources[mq], mq, qq, gq, "boolean" === typeof Yq ? Yq : Yq.SPECULARTERM, Eq.receiveShadows)
+         rb(ub.lightSources[Ub], Ub, bb, hb, "boolean" === typeof Bb ? Bb : Bb.SPECULARTERM, ub.receiveShadows)
```

#### 176. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1947` → after: `L1947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1947) · [Before (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1947)

```diff
-         const gq = qq.Ba().getCaps().maxUniformBuffersPerShaderStage;
+         const hb = bb.UX().getCaps().maxUniformBuffersPerShaderStage;
```

#### 177. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1963-L1964` → after: `L1963-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1963-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1963-L1964) · [Before (L1963-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1963-L1964)

```diff
-           Oq || (Oq = new Set, vq.set(qq, Oq)), Oq.has(lq) || (Oq.add(lq), Yq.b.Warn(`maxSimultaneousLights is ${Eq} but this engine supports at most ${gq} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${lq} lights affecting this mes … [truncated]
-         }(qq.Ba(), xq, Oq, Math.min(Eq.lightSources.length, xq));
+           Gb || (Gb = new Set, nb.set(bb, Gb)), Gb.has(Ob) || (Gb.add(Ob), Bb.b.Warn(`maxSimultaneousLights is ${ub} but this engine supports at most ${hb} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Ob} lights affecting this mes … [truncated]
+         }(bb.UX(), Lb, Gb, Math.min(ub.lightSources.length, Lb));
```

#### 178. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1972) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1972)

```diff
-       const Bq = qq.Ba().getCaps();
+       const Hb = bb.UX().getCaps();
```

#### 179. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1980` → after: `L1980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1980) · [Before (L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1980)

```diff
-       if (Eq && xq.c.ReflectionTextureEnabled) {
+       if (ub && Lb.e.ReflectionTextureEnabled) {
```

#### 180. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1982-L1983` → after: `L1982-L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L1982-L1983) · [Before (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L1982-L1983)

```diff
-         gq._needNormals = !0, gq.REFLECTION = !0, gq.GAMMAREFLECTION = Eq.gammaSpace, gq.RGBDREFLECTION = Eq.isRGBD, gq.LODINREFLECTIONALPHA = Eq.lodLevelInAlpha, gq.LINEARSPECULARREFLECTION = Eq.linearSpecularLOD, gq.USEIRRADIANCEMAP = !1, gq.LODBASEDMICROSFURACE = qq.Ba().getCa … [truncated]
-         const mq = qq.Ba();
+         hb._needNormals = !0, hb.REFLECTION = !0, hb.GAMMAREFLECTION = ub.gammaSpace, hb.RGBDREFLECTION = ub.isRGBD, hb.LODINREFLECTIONALPHA = ub.lodLevelInAlpha, hb.LINEARSPECULARREFLECTION = ub.linearSpecularLOD, hb.USEIRRADIANCEMAP = !1, hb.LODBASEDMICROSFURACE = bb.UX().getCa … [truncated]
+         const Ub = bb.UX();
```

#### 181. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2019` → after: `L2019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2019) · [Before (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2019)

```diff
-         case Oq.c.FALLOFF_GLTF:
+         case Gb.d.FALLOFF_GLTF:
```

#### 182. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2022)

```diff
-         case Oq.c.FALLOFF_PHYSICAL:
+         case Gb.d.FALLOFF_PHYSICAL:
```

#### 183. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2025` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2025) · [Before (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2025)

```diff
-         case Oq.c.FALLOFF_STANDARD:
+         case Gb.d.FALLOFF_STANDARD:
```

#### 184. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2035)

```diff
-       gq.lightmapMode != Oq.c.LIGHTMAP_DEFAULT ? (xq.lightmapMode = !0, lq["LIGHTMAPEXCLUDED" + Yq] = !0, lq["LIGHTMAPNOSPECULAR" + Yq] = gq.lightmapMode == Oq.c.LIGHTMAP_SHADOWSONLY) : (lq["LIGHTMAPEXCLUDED" + Yq] = !1, lq["LIGHTMAPNOSPECULAR" + Yq] = !1)
+       hb.lightmapMode != Gb.d.LIGHTMAP_DEFAULT ? (Lb.lightmapMode = !0, Ob["LIGHTMAPEXCLUDED" + Bb] = !0, Ob["LIGHTMAPNOSPECULAR" + Bb] = hb.lightmapMode == Gb.d.LIGHTMAP_SHADOWSONLY) : (Ob["LIGHTMAPEXCLUDED" + Bb] = !1, Ob["LIGHTMAPNOSPECULAR" + Bb] = !1)
```

#### 185. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2052` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2052) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2052)

```diff
-       !1 !== Oq && (Aq = (0, mq.l)(gq, qq, Yq)), Yq.DEPTHPREPASS !== !Eq.getColorWrite() && (Yq.DEPTHPREPASS = !Yq.DEPTHPREPASS, Aq = !0), Yq.INSTANCES !== lq && (Yq.INSTANCES = lq, Aq = !0), Yq.THIN_INSTANCES !== xq && (Yq.THIN_INSTANCES = xq, Aq = !0), Aq && Yq.markAsUnprocesse … [truncated]
+       !1 !== Gb && (Yb = (0, Ub.i)(hb, bb, Bb)), Bb.DEPTHPREPASS !== !ub.getColorWrite() && (Bb.DEPTHPREPASS = !Bb.DEPTHPREPASS, Yb = !0), Bb.INSTANCES !== Ob && (Bb.INSTANCES = Ob, Yb = !0), Bb.THIN_INSTANCES !== Lb && (Bb.THIN_INSTANCES = Lb, Yb = !0), Yb && Bb.markAsUnprocesse … [truncated]
```

#### 186. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2065` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2065) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2065)

```diff
-       for (let Yq = 1; Yq <= 6; ++Yq) Eq["UV" + Yq] = !!Eq._needUVs && qq.isVerticesDataPresent(`uv${1===Yq?"":Yq}`);
+       for (let Bb = 1; Bb <= 6; ++Bb) ub["UV" + Bb] = !!ub._needUVs && bb.isVerticesDataPresent(`uv${1===Bb?"":Bb}`);
```

#### 187. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2070` → after: `L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2070) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2070)

```diff
-       return qq.isVerticesDataPresent("instanceColor") && (qq.olq || qq.hasThinInstances) && (Eq.INSTANCESCOLOR = !0), lq && function(qq, Eq) {
+       return bb.isVerticesDataPresent("instanceColor") && (bb.UOb || bb.hasThinInstances) && (ub.INSTANCESCOLOR = !0), Ob && function(bb, ub) {
```

#### 188. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2077` → after: `L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2077) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2077)

```diff
-             const lq = qq.ZJ(),
+             const Ob = bb.ZN(),
```

#### 189. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2087` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2087) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2087)

```diff
-               const gq = lq.Ba().getCaps().maxVertexUniformVectors;
+               const hb = Ob.UX().getCaps().maxVertexUniformVectors;
```

#### 190. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2090` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2090) · [Before (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2090)

```diff
-                   Oq = mq ? Gq : pq,
+                   Gb = Ub ? Mb : sb,
```

#### 191. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2092` → after: `L2092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2092) · [Before (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2092)

```diff
-                 (lq > xq || mq && 3 * lq > gq) && (Jq.add(qq.skeleton), Yq.b.Warn(`Skeleton "${qq.skeleton.name}": ${qq.skeleton.bones.length} bones stored as vertex uniforms use ${lq} of ~${xq} usable uniform vectors${mq?" (multiview)":""} on a device reporting ${gq}. This can e … [truncated]
+                 (Ob > Lb || Ub && 3 * Ob > hb) && (Ib.add(bb.skeleton), Bb.b.Warn(`Skeleton "${bb.skeleton.name}": ${bb.skeleton.bones.length} bones stored as vertex uniforms use ${Ob} of ~${Lb} usable uniform vectors${Ub?" (multiview)":""} on a device reporting ${hb}. This can e … [truncated]
```

#### 192. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2116` → after: `L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2116) · [Before (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2116)

```diff
-       Eq.ORDER_INDEPENDENT_TRANSPARENCY = qq.useOrderIndependentTransparency && gq, Eq.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !qq.Ba().getCaps().textureFloatLinearFiltering, Yq === Eq.ORDER_INDEPENDENT_TRANSPARENCY && lq === Eq.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || Eq.markAsU … [truncated]
+       ub.ORDER_INDEPENDENT_TRANSPARENCY = bb.useOrderIndependentTransparency && hb, ub.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !bb.UX().getCaps().textureFloatLinearFiltering, Bb === ub.ORDER_INDEPENDENT_TRANSPARENCY && Ob === ub.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || ub.markAsU … [truncated]
```

#### 193. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2219` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2219) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2219)

```diff
-   40096: (qq, Eq, gq) => {
+   39795: (bb, ub, hb) => {
```

#### 194. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2223-L2224` → after: `L2223-L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2223-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2223-L2224) · [Before (L2223-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2223-L2224)

```diff
-     var Yq = gq(37139),
-       lq = gq(40037);
+     var Bb = hb(36727),
+       Ob = hb(39728);
```

#### 195. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2228` → after: `L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2228) · [Before (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2228)

```diff
-         super(qq, Eq, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Yq.e, this._storeEffectOnSubMeshes = gq
+         super(bb, ub, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Bb.d, this._storeEffectOnSubMeshes = hb
```

#### 196. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2234` → after: `L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2234) · [Before (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2234)

```diff
-         return !!qq && (!this._storeEffectOnSubMeshes || (!qq.fn || 0 === qq.fn.length || this.isReadyForSubMesh(qq, qq.fn[0], Eq)))
+         return !!bb && (!this._storeEffectOnSubMeshes || (!bb.FW || 0 === bb.FW.length || this.isReadyForSubMesh(bb, bb.FW[0], ub)))
```

#### 197. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2238` → after: `L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2238) · [Before (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2238)

```diff
-         return !(this.checkReadyOnEveryCall || !qq.effect || !Eq || Eq._renderId !== this.ZJ().getRenderId())
+         return !(this.checkReadyOnEveryCall || !bb.effect || !ub || ub._renderId !== this.ZN().getRenderId())
```

#### 198. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2247` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2247) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2247)

```diff
-         Eq && this.bindForSubMesh(qq, Eq, Eq.fn[0])
+         ub && this.bindForSubMesh(bb, ub, ub.FW[0])
```

#### 199. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2252` → after: `L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2252) · [Before (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2252)

```diff
-         super._afterBind(qq, Eq, gq), this.ZJ()._cachedEffect = Eq, gq ? gq._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
+         super._afterBind(bb, ub, hb), this.ZN()._cachedEffect = ub, hb ? hb._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
```

#### 200. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2263)

```diff
-   40115: (qq, Eq, gq) => {
+   39809: (bb, ub, hb) => {
```

#### 201. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2265-L2266` → after: `L2265-L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2265-L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2265-L2266) · [Before (L2265-L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2265-L2266)

```diff
-       e: () => Oq,
-       f: () => lq
+       d: () => Gb,
+       h: () => Ob
```

#### 202. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2302)

```diff
-         const Yq = `vp_${gq}_info`;
+         const Bb = `vp_${hb}_info`;
```

#### 203. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2307)

```diff
-   40067: (qq, Eq, gq) => {
+   39763: (bb, ub, hb) => {
```

#### 204. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2309-L2310` → after: `L2309-L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2309-L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2309-L2310) · [Before (L2309-L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2309-L2310)

```diff
-       b: () => xq,
-       c: () => Aq
+       e: () => Lb,
+       h: () => Yb
```

#### 205. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2312-L2314` → after: `L2312-L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2312-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2312-L2314) · [Before (L2312-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2312-L2314)

```diff
-     var Yq = gq(39757),
-       lq = gq(37139),
-       Oq = gq(39759);
+     var Bb = hb(39463),
+       Ob = hb(36727),
+       Gb = hb(39467);
```

#### 206. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2338` → after: `L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2338) · [Before (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2338)

```diff
-         Eq = [Oq.j.filter((function() {
+         ub = [Gb.k.filter((function() {
```

#### 207. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2340` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2340) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2340)

```diff
-         }))], gq = [Oq.j.filter((function() {
+         }))], hb = [Gb.k.filter((function() {
```

#### 208. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2342` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2342) · [Before (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2342)

```diff
-         }))], (0, Yq.f)(qq, null, Eq, {
+         }))], (0, Bb.h)(bb, null, ub, {
```

#### 209. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2352` → after: `L2352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2352) · [Before (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2352)

```diff
-         }, null, lq), (0, Yq.f)(qq, null, gq, {
+         }, null, Ob), (0, Bb.h)(bb, null, hb, {
```

#### 210. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2367` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2367) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2367)

```diff
-         }), (0, Yq.i)(qq, lq)
+         }), (0, Bb.k)(bb, Ob)
```

#### 211. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2392` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2392) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2392)

```diff
-   40040: (qq, Eq, gq) => {
+   39736: (bb, ub, hb) => {
```

#### 212. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2396-L2401` → after: `L2396-L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2396-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2396-L2401) · [Before (L2396-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2396-L2401)

```diff
-     var Yq, lq = gq(39879),
-       Oq = gq(40049),
-       mq = gq(40055),
-       xq = gq(40067),
-       Aq = gq(40074),
-       cq = gq(39636);
+     var Bb, Ob = hb(39609),
+       Gb = hb(39744),
+       Ub = hb(39752),
+       Lb = hb(39763),
+       Yb = hb(39765),
+       Sb = hb(39333);
```

#### 213. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2414` → after: `L2414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2414) · [Before (L2414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2414)

```diff
-         return !gq && Eq && (this._drawWrappers[qq] = gq = new Aq.b(this._mesh.ZJ().Ba())), gq
+         return !hb && ub && (this._drawWrappers[bb] = hb = new Yb.d(this._mesh.ZN().UX())), hb
```

#### 214. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2453` → after: `L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2453) · [Before (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2453)

```diff
-         this.materialIndex = qq, this.verticesStart = Eq, this.verticesCount = gq, this.indexStart = Yq, this.indexCount = lq, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
+         this.materialIndex = bb, this.verticesStart = ub, this.verticesCount = hb, this.indexStart = Bb, this.indexCount = Ob, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
```

#### 215. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2459` → after: `L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2459) · [Before (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2459)

```diff
-         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.yR() : this._boundingInfo
+         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.XM() : this._boundingInfo
```

#### 216. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2480` → after: `L2480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2480) · [Before (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2480)

```diff
-         if (!Eq) return qq && this._mesh.ZJ()._hasDefaultMaterial ? this._mesh.ZJ().defaultMaterial : null;
+         if (!ub) return bb && this._mesh.ZN()._hasDefaultMaterial ? this._mesh.ZN().defaultMaterial : null;
```

#### 217. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2493-L2494` → after: `L2493-L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2493-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2493-L2494) · [Before (L2493-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2493-L2494)

```diff
-         if (qq || (qq = this._renderingMesh.getVerticesData(lq.g.PositionKind)), !qq) return this._boundingInfo = this._mesh.yR(), this;
-         const Eq = this._renderingMesh.iYq();
+         if (bb || (bb = this._renderingMesh.getVerticesData(Ob.i.PositionKind)), !bb) return this._boundingInfo = this._mesh.XM(), this;
+         const ub = this._renderingMesh.XBb();
```

#### 218. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2497)

```diff
-           const qq = this._renderingMesh.yR();
+           const bb = this._renderingMesh.XM();
```

#### 219. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2502-L2503` → after: `L2502-L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2502-L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2502-L2503) · [Before (L2502-L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2502-L2503)

```diff
-         } else gq = (0, xq.b)(qq, Eq, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
-         return this._boundingInfo ? this._boundingInfo.reConstruct(gq.minimum, gq.maximum) : this._boundingInfo = new mq.d(gq.minimum, gq.maximum), this
+         } else hb = (0, Lb.e)(bb, ub, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
+         return this._boundingInfo ? this._boundingInfo.reConstruct(hb.minimum, hb.maximum) : this._boundingInfo = new Ub.e(hb.minimum, hb.maximum), this
```

#### 220. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2506` → after: `L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2506) · [Before (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2506)

```diff
-         return this.yR()._checkCollision(qq)
+         return this.XM()._checkCollision(bb)
```

#### 221. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2509-L2510` → after: `L2509-L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2509-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2509-L2510) · [Before (L2509-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2509-L2510)

```diff
-         let Eq = this.yR();
-         return Eq || (this.refreshBoundingInfo(), Eq = this.yR()), Eq && Eq.update(qq), this
+         let ub = this.XM();
+         return ub || (this.refreshBoundingInfo(), ub = this.XM()), ub && ub.update(bb), this
```

#### 222. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2513` → after: `L2513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2513) · [Before (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2513)

```diff
-         const Eq = this.yR();
+         const ub = this.XM();
```

#### 223. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2517` → after: `L2517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2517) · [Before (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2517)

```diff
-         const Eq = this.yR();
+         const ub = this.XM();
```

#### 224. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2537` → after: `L2537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2537) · [Before (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2537)

```diff
-         const Eq = this.yR();
+         const ub = this.XM();
```

#### 225. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2541` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2541) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2541)

```diff
-         const Oq = this.da();
+         const Gb = this.HX();
```

#### 226. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2562` → after: `L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2562) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2562)

```diff
-           if (!(uq < 0) && ((lq || !mq || uq < mq.distance) && (mq = new Oq.c(null, null, uq), mq.faceId = xq / 2, lq))) break
+           if (!(ab < 0) && ((Ob || !Ub || ab < Ub.distance) && (Ub = new Gb.d(null, null, ab), Ub.faceId = Lb / 2, Ob))) break
```

#### 227. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2572` → after: `L2572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2572) · [Before (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2572)

```diff
-           if (!(cq < 0) && ((lq || !mq || cq < mq.distance) && (mq = new Oq.c(null, null, cq), mq.faceId = xq / 2, lq))) break
+           if (!(Sb < 0) && ((Ob || !Ub || Sb < Ub.distance) && (Ub = new Gb.d(null, null, Sb), Ub.faceId = Lb / 2, Ob))) break
```

#### 228. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2622` → after: `L2622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2622) · [Before (L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2622)

```diff
-           const qq = this.yR();
+           const bb = this.XM();
```

#### 229. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2624` → after: `L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2624) · [Before (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2624)

```diff
-           gq._boundingInfo = new mq.d(qq.minimum, qq.maximum)
+           hb._boundingInfo = new Ub.e(bb.minimum, bb.maximum)
```

#### 230. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2630-L2632` → after: `L2630-L2632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2630-L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2630-L2632) · [Before (L2630-L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2630-L2632)

```diff
-         this._linesIndexBuffer && (this._mesh.ZJ().Ba()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
-         const Eq = this._mesh.fn.indexOf(this);
-         this._mesh.fn.splice(Eq, 1), this.resetDrawCache(void 0, qq)
+         this._linesIndexBuffer && (this._mesh.ZN().UX()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
+         const ub = this._mesh.FW.indexOf(this);
+         this._mesh.FW.splice(ub, 1), this.resetDrawCache(void 0, bb)
```

#### 231. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2641` → after: `L2641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2641) · [Before (L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2641)

```diff
-         const Aq = (lq || Yq).iYq();
+         const Yb = (Ob || Bb).XBb();
```

#### 232. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2648` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/254.js#L2648) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/254.js#L2648)

```diff
-     }(Yq = uq.prototype).projectToRef ?? (Yq.projectToRef = (0, cq.i)("SubMesh", "projectToRef"))
+     }(Bb = ab.prototype).projectToRef ?? (Bb.projectToRef = (0, Sb.j)("SubMesh", "projectToRef"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/255.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/255.js` (43 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c)

#### 1. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L4)

```diff
-   41347: (qq, Eq, gq) => {
+   41056: (bb, ub, hb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L6)

```diff
-       c: () => Yq
+       e: () => Bb
```

#### 3. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L11)

```diff
-   41329: (qq, Eq, gq) => {
+   41030: (bb, ub, hb) => {
```

#### 4. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L13)

```diff
-       e: () => Aq
+       d: () => Yb
```

#### 5. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L15-L19` → after: `L15-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L15-L19) · [Before (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L15-L19)

```diff
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(37139),
-       mq = gq(39995),
-       xq = gq(39967);
+     var Bb = hb(39463),
+       Ob = hb(39467),
+       Gb = hb(36727),
+       Ub = hb(39700),
+       Lb = hb(39672);
```

#### 6. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L22)

```diff
-       let Eq, gq, Aq, cq, uq = mq.c,
+       let ub, hb, Yb, Sb, ab = Ub.b,
```

#### 7. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L26)

```diff
-           super(...arguments), this._position = (0, Yq.i)(this, Bq), this._needProjectionMatrixCompute = !0, this._viewMatrix = Oq.e.Identity(), this._projectionMatrix = Oq.e.Identity()
+           super(...arguments), this._position = (0, Bb.k)(this, Hb), this._needProjectionMatrixCompute = !0, this._viewMatrix = Gb.d.Identity(), this._projectionMatrix = Gb.d.Identity()
```

#### 8. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L75)

```diff
-           const qq = Oq.q.Cross(this.direction, xq.b.Y),
+           const bb = Gb.q.Cross(this.direction, Lb.e.Y),
```

#### 9. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L95)

```diff
-           return !qq && this.isSynchronized() ? (this._currentRenderId = this.ZJ().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.WG(this.position), this._worldMatrix || (this._worldMatrix = Oq.e.Identity()), Oq.e.TranslationToRef(this.position.x,  … [truncated]
+           return !bb && this.isSynchronized() ? (this._currentRenderId = this.ZN().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.mD(this.position), this._worldMatrix || (this._worldMatrix = Gb.d.Identity()), Gb.d.TranslationToRef(this.position.x,  … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L110)

```diff
-           const Eq = Oq.o.Na[0];
+           const ub = Gb.i.YX[0];
```

#### 11. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L113-L114` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L113-L114) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L113-L114)

```diff
-           const Yq = Oq.o.Na[1];
-           return gq.addToRef(Eq, Yq), Oq.e.LookAtLHToRef(gq, Yq, Oq.q.Up(), this._viewMatrix), this._viewMatrix
+           const Bb = Gb.i.YX[1];
+           return hb.addToRef(ub, Bb), Gb.d.LookAtLHToRef(hb, Bb, Gb.q.Up(), this._viewMatrix), this._viewMatrix
```

#### 12. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L121)

```diff
-         Eq = [(0, lq.I)()], gq = [(0, lq.I)()], Aq = [(0, lq.M)()], cq = [(0, lq.M)()], (0, Yq.f)(qq, null, Eq, {
+         ub = [(0, Ob.H)()], hb = [(0, Ob.H)()], Yb = [(0, Ob.K)()], Sb = [(0, Ob.K)()], (0, Bb.h)(bb, null, ub, {
```

#### 13. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L131)

```diff
-         }, null, Bq), (0, Yq.f)(qq, null, gq, {
+         }, null, Hb), (0, Bb.h)(bb, null, hb, {
```

#### 14. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L141)

```diff
-         }, null, Bq), (0, Yq.f)(qq, null, Aq, {
+         }, null, Hb), (0, Bb.h)(bb, null, Yb, {
```

#### 15. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L151)

```diff
-         }, null, Bq), (0, Yq.f)(qq, null, cq, {
+         }, null, Hb), (0, Bb.h)(bb, null, Sb, {
```

#### 16. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L170)

```diff
-   41340: (qq, Eq, gq) => {
+   41051: (bb, ub, hb) => {
```

#### 17. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L172)

```diff
-       d: () => lq
+       b: () => Ob
```

#### 18. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L174-L175` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L174-L175) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L174-L175)

```diff
-     var Yq = gq(40233);
-     class lq extends Yq.d {
+     var Bb = hb(39932);
+     class Ob extends Bb.f {
```

#### 19. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L185)

```diff
-         super(null, Oq, !mq, xq, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, uq), this.format = lq, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== cq || (Aq = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== cq || (Aq = … [truncated]
+         super(null, Gb, !Ub, Lb, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, ab), this.format = Ob, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== Sb || (Yb = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== Sb || (Yb = … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L195)

```diff
-         const qq = new lq(null, this.getSize().width, this.getSize().height, this.format, this.ZJ(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
+         const bb = new Ob(null, this.getSize().width, this.getSize().height, this.format, this.ZN(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
```

#### 21. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L222)

```diff
-           Aq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Yq.d.TRILINEAR_SAMPLINGMODE;
+           Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Bb.f.TRILINEAR_SAMPLINGMODE;
```

#### 22. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L228)

```diff
-           Aq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Yq.d.TRILINEAR_SAMPLINGMODE;
+           Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Bb.f.TRILINEAR_SAMPLINGMODE;
```

#### 23. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L233` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L233) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L233)

```diff
-   41377: (qq, Eq, gq) => {
+   41097: (bb, ub, hb) => {
```

#### 24. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L235)

```diff
-       d: () => Yq.c
+       b: () => Bb.c
```

#### 25. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L237-L238` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L237-L238) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L237-L238)

```diff
-     var Yq = gq(40197);
-     (0, Yq.f)()
+     var Bb = hb(39886);
+     (0, Bb.e)()
```

#### 26. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L240)

```diff
-   41334: (qq, Eq, gq) => {
+   41037: (bb, ub, hb) => {
```

#### 27. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L242)

```diff
-       b: () => Yq.b
+       b: () => Bb.d
```

#### 28. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L244-L245` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L244-L245) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L244-L245)

```diff
-     var Yq = gq(40213);
-     (0, Yq.c)()
+     var Bb = hb(39914);
+     (0, Bb.e)()
```

#### 29. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L247)

```diff
-   40213: (qq, Eq, gq) => {
+   39914: (bb, ub, hb) => {
```

#### 30. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L249-L250` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L249-L250) · [Before (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L249-L250)

```diff
-       b: () => Wq,
-       c: () => Vq
+       d: () => wb,
+       e: () => pb
```

#### 31. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L252-L259` → after: `L252-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L252-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L252-L259) · [Before (L252-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L252-L259)

```diff
-     var Yq, lq, Oq = gq(37289),
-       mq = gq(39879),
-       xq = gq(40163),
-       Aq = gq(40221),
-       cq = gq(40037),
-       uq = gq(40225),
-       Bq = gq(39636);
-     class Wq extends xq.e {
+     var Bb, Ob, Gb = hb(36893),
+       Ub = hb(39609),
+       Lb = hb(39854),
+       Yb = hb(39921),
+       Sb = hb(39728),
+       ab = hb(39928),
+       Hb = hb(39333);
+     class wb extends Lb.c {
```

#### 32. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L268` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L268) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L268)

```diff
-         super(qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Eq, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Yq, this.useVertexAlpha = lq, this.color = new  … [truncated]
+         super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ub, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Bb, this.useVertexAlpha = Ob, this.color = new  … [truncated]
```

#### 33. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L270)

```diff
-           attributes: [mq.g.PositionKind],
+           attributes: [Ub.i.PositionKind],
```

#### 34. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L277)

```diff
-         if (this.useVertexAlpha ? Aq.defines.push("#define VERTEXALPHA") : Aq.needAlphaBlending = !1, this.useVertexColor ? (Aq.defines.push("#define VERTEXCOLOR"), Aq.attributes.push(mq.g.ColorKind)) : (Aq.uniforms.push("color"), this._color4 = new Oq.g), xq) this.material = xq;
+         if (this.useVertexAlpha ? Yb.defines.push("#define VERTEXALPHA") : Yb.needAlphaBlending = !1, this.useVertexColor ? (Yb.defines.push("#define VERTEXCOLOR"), Yb.attributes.push(Ub.i.ColorKind)) : (Yb.uniforms.push("color"), this._color4 = new Gb.c), Lb) this.material = Lb;
```

#### 35. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L279-L280` → after: `L279-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L279-L280) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L279-L280)

```diff
-           this.ZJ().Ba().isWebGPU && !Wq.ForceGLSL && (this._shaderLanguage = 1), Aq.shaderLanguage = this._shaderLanguage, Aq.extraInitializationsAsync = async () => {
-             1 === this._shaderLanguage ? await Promise.all([gq.e(335).then((() => gq(42311))), gq.e(341).then((() => gq(42320)))]) : await Promise.all([gq.e(317).then((() => gq(42324))), gq.e(323).then((() => gq(42328)))])
+           this.ZN().UX().isWebGPU && !wb.ForceGLSL && (this._shaderLanguage = 1), Yb.shaderLanguage = this._shaderLanguage, Yb.extraInitializationsAsync = async () => {
+             1 === this._shaderLanguage ? await Promise.all([hb.e(335).then((() => hb(41974))), hb.e(341).then((() => hb(41980)))]) : await Promise.all([hb.e(317).then((() => hb(41982))), hb.e(323).then((() => hb(41987)))])
```

#### 36. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L282)

```diff
-           const qq = new uq.s("colorShader", this.ZJ(), "color", Aq, !1);
+           const bb = new ab.p("colorShader", this.ZN(), "color", Yb, !1);
```

#### 37. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L320` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L320) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L320)

```diff
-         const Yq = this.ZJ().Ba();
+         const Bb = this.ZN().UX();
```

#### 38. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L332)

```diff
-           return gq.source = this, new Wq(qq, this.ZJ(), gq.parent, gq.source, gq.doNotCloneChildren)
+           return hb.source = this, new wb(bb, this.ZN(), hb.parent, hb.source, hb.doNotCloneChildren)
```

#### 39. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L334)

```diff
-         return new Wq(qq, this.ZJ(), Eq, this, gq)
+         return new wb(bb, this.ZN(), ub, this, hb)
```

#### 40. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L338-L340` → after: `L338-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L338-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L338-L340) · [Before (L338-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L338-L340)

```diff
-         if (this.uR) {
-           Eq.uR = {};
-           for (const qq in this.uR) Eq.uR[qq] = this.uR[qq]
+         if (this.Fs) {
+           ub.Fs = {};
+           for (const bb in this.Fs) ub.Fs[bb] = this.Fs[bb]
```

#### 41. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L345)

```diff
-         super.serialize(qq), qq.color = this.color.bYq(), qq.alpha = this.alpha
+         super.serialize(bb), bb.color = this.color.ZBb(), bb.alpha = this.alpha
```

#### 42. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L349` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L349) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L349)

```diff
-         return gq.color = Oq.d.FromArray(qq.color), gq.alpha = qq.alpha, gq
+         return hb.color = Gb.b.FromArray(bb.color), hb.alpha = bb.alpha, hb
```

#### 43. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L364-L365` → after: `L364-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/255.js#L364-L365) · [Before (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/255.js#L364-L365)

```diff
-       aq || (aq = !0, xq.e._LinesMeshParser = (qq, Eq) => Wq.Parse(qq, Eq))
-     }(Yq = Wq.prototype).enableEdgesRendering ?? (Yq.enableEdgesRendering = (0, Bq.i)("LinesMesh", "enableEdgesRendering")), (lq = Nq.prototype).enableEdgesRendering ?? (lq.enableEdgesRendering = (0, Bq.i)("InstancedLinesMesh", "enableEdgesRendering"))
+       Xb || (Xb = !0, Lb.c._LinesMeshParser = (bb, ub) => wb.Parse(bb, ub))
+     }(Bb = wb.prototype).enableEdgesRendering ?? (Bb.enableEdgesRendering = (0, Hb.j)("LinesMesh", "enableEdgesRendering")), (Ob = Zb.prototype).enableEdgesRendering ?? (Ob.enableEdgesRendering = (0, Hb.j)("InstancedLinesMesh", "enableEdgesRendering"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 1. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L4)

```diff
-   40225: (qq, Eq, gq) => {
+   39928: (bb, ub, hb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L6)

```diff
-       e: () => tq,
+       d: () => rb,
+       f: () => Cb,
```

#### 3. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L10-L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L10-L11)

```diff
-       p: () => Hq,
-       s: () => jq
+       p: () => Ab
```

#### 4. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L13-L25` → after: `L13-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L13-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L13-L25) · [Before (L13-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L13-L25)

```diff
-     var Yq = gq(39779),
-       lq = gq(39838),
-       Oq = gq(37139),
-       mq = gq(39879),
-       xq = gq(40233),
-       Aq = gq(40104),
-       cq = gq(39801),
-       uq = gq(40096),
-       Bq = gq(37153),
-       Wq = gq(40083),
-       Nq = gq(40079),
-       aq = gq(40115),
-       Vq = gq(37171);
+     var Bb = hb(39488),
+       Ob = hb(39551),
+       Gb = hb(36727),
+       Ub = hb(39609),
+       Lb = hb(39932),
+       Yb = hb(39797),
+       Sb = hb(39520),
+       ab = hb(39795),
+       Hb = hb(36748),
+       wb = hb(39782),
+       Zb = hb(39773),
+       Xb = hb(39809),
+       pb = hb(36762);
```

#### 5. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L33)

```diff
-         super(qq, Eq, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this. … [truncated]
+         super(bb, ub, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this. … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L175-L176` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L175-L176) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L175-L176)

```diff
-         const Oq = this.ZJ(),
-           xq = Oq.Ba(),
+         const Gb = this.ZN(),
+           Lb = Gb.UX(),
```

#### 7. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L186)

```diff
-           const qq = 0 === this._options.defines[lq].indexOf("#define") ? this._options.defines[lq] : `#define ${this._options.defines[lq]}`;
+           const bb = 0 === this._options.defines[Ob].indexOf("#define") ? this._options.defines[Ob] : `#define ${this._options.defines[Ob]}`;
```

#### 8. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L190-L191` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L190-L191) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L190-L191)

```diff
-         if (qq && qq.isVerticesDataPresent(mq.g.ColorKind) && (-1 === uq.indexOf(mq.g.ColorKind) && uq.push(mq.g.ColorKind), cq.push("#define VERTEXCOLOR")), Eq && (cq.push("#define INSTANCES"), (0, Nq.xb)(uq, this._materialHelperNeedsPreviousMatrices), qq?.hasThinInstances && (c … [truncated]
-           uq.push(mq.g.MatricesIndicesKind), uq.push(mq.g.MatricesWeightsKind), qq.numBoneInfluencers > 4 && (uq.push(mq.g.MatricesIndicesExtraKind), uq.push(mq.g.MatricesWeightsExtraKind));
+         if (bb && bb.isVerticesDataPresent(Ub.i.ColorKind) && (-1 === ab.indexOf(Ub.i.ColorKind) && ab.push(Ub.i.ColorKind), Sb.push("#define VERTEXCOLOR")), ub && (Sb.push("#define INSTANCES"), (0, Zb.fb)(ab, this._materialHelperNeedsPreviousMatrices), bb?.hasThinInstances && (S … [truncated]
+           ab.push(Ub.i.MatricesIndicesKind), ab.push(Ub.i.MatricesWeightsKind), bb.numBoneInfluencers > 4 && (ab.push(Ub.i.MatricesIndicesExtraKind), ab.push(Ub.i.MatricesWeightsExtraKind));
```

#### 9. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L203)

```diff
-           Pq = (0, Nq.Q)(Qq, cq, uq, qq, !0, lq, Yq, Eq, gq, Oq), Qq.isUsingTextureForTargets && (-1 === jq.indexOf("morphTargetTextureIndices") && jq.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTar … [truncated]
+           Wb = (0, Zb.H)(Cb, Sb, ab, bb, !0, Ob, Bb, ub, hb, Gb), Cb.isUsingTextureForTargets && (-1 === Ab.indexOf("morphTargetTextureIndices") && Ab.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTar … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L213)

```diff
-         qq && this.needAlphaTestingForMesh(qq) && cq.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Wq.e)(jq), (0, Wq.m)(this, Oq, cq)), Oq.fogEnabled && qq?.applyFog && Oq.fogMode !== lq.i.FOGMODE_NONE && (cq.push("#define FOG"), -1 === jq.indexOf("view") & … [truncated]
+         bb && this.needAlphaTestingForMesh(bb) && Sb.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, wb.d)(Ab), (0, wb.k)(this, Gb, Sb)), Gb.fogEnabled && bb?.applyFog && Gb.fogMode !== Ob.f.FOGMODE_NONE && (Sb.push("#define FOG"), -1 === Ab.indexOf("view") & … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L217-L218` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L217-L218) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L217-L218)

```diff
-           qq && (this._vertexPullingMetadata = (0, aq.f)(qq), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((qq, Eq) => {
-             jq.push(`vp_${Eq}_info`)
+           bb && (this._vertexPullingMetadata = (0, Xb.h)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, ub) => {
+             Ab.push(`vp_${ub}_info`)
```

#### 12. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L243)

```diff
-         }, xq), Yq ? gq.setEffect(nq, hq, this._materialContext) : tq && tq.setEffect(nq, hq), this._onEffectCreatedObservable && (dq.effect = nq, dq.subMesh = gq ?? qq?.fn[0] ?? null, this._onEffectCreatedObservable.notifyObservers(dq))), tq._wasPreviouslyUsingInstances = !!Eq,  … [truncated]
+         }, Lb), Bb ? hb.setEffect(xb, Db, this._materialContext) : rb && rb.setEffect(xb, Db), this._onEffectCreatedObservable && (ob.effect = xb, ob.subMesh = hb ?? bb?.FW[0] ?? null, this._onEffectCreatedObservable.notifyObservers(ob))), rb._wasPreviouslyUsingInstances = !!ub,  … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L249)

```diff
-         const lq = this.ZJ(); - 1 !== Yq.indexOf("worldView") && (qq.multiplyToRef(lq.getViewMatrix(), this._cachedWorldViewMatrix), gq.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Yq.indexOf("worldViewProjection") && (qq.multiplyToRef(lq.getTransformMatrix(), thi … [truncated]
+         const Ob = this.ZN(); - 1 !== Bb.indexOf("worldView") && (bb.multiplyToRef(Ob.getViewMatrix(), this._cachedWorldViewMatrix), hb.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Bb.indexOf("worldViewProjection") && (bb.multiplyToRef(Ob.getTransformMatrix(), thi … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L258)

```diff
-         const mq = this.ZJ();
+         const Ub = this.ZN();
```

#### 15. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L262)

```diff
-         if (Oq && xq && xq.length > 0 && mq.Ba().supportsUniformBuffers)
+         if (Gb && Lb && Lb.length > 0 && Ub.UX().supportsUniformBuffers)
```

#### 16. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L275)

```diff
-           for (qq in Aq || -1 === this._options.uniforms.indexOf("view") || Oq.setMatrix("view", mq.getViewMatrix()), Aq || -1 === this._options.uniforms.indexOf("projection") || Oq.setMatrix("projection", mq.getProjectionMatrix()), Aq || -1 === this._options.uniforms.indexOf("vi … [truncated]
+           for (bb in Yb || -1 === this._options.uniforms.indexOf("view") || Gb.setMatrix("view", Ub.getViewMatrix()), Yb || -1 === this._options.uniforms.indexOf("projection") || Gb.setMatrix("projection", Ub.getProjectionMatrix()), Yb || -1 === this._options.uniforms.indexOf("vi … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L305` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L305) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L305)

```diff
-           const gq = mq.Ba(),
+           const hb = Ub.UX(),
```

#### 18. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L350)

```diff
-         const Eq = Yq.d.Clone((() => new jq(qq, this.ZJ(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
+         const ub = Bb.c.Clone((() => new Ab(bb, this.ZN(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
```

#### 19. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L404)

```diff
-         const qq = Yq.d.Serialize(this);
+         const bb = Bb.c.Serialize(this);
```

#### 20. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L438-L439` → after: `L438-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L438-L439) · [Before (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L438-L439)

```diff
-         for (Eq in qq.quaternions = {}, this._quaternions) qq.quaternions[Eq] = this._quaternions[Eq].bYq();
-         for (Eq in qq.matrices = {}, this._matrices) qq.matrices[Eq] = this._matrices[Eq].bYq();
+         for (ub in bb.quaternions = {}, this._quaternions) bb.quaternions[ub] = this._quaternions[ub].ZBb();
+         for (ub in bb.matrices = {}, this._matrices) bb.matrices[ub] = this._matrices[ub].ZBb();
```

#### 21. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L452)

```diff
-       const lq = Yq.d.Parse((() => new jq(qq.name, Eq, qq.shaderPath, qq.options, qq.storeEffectOnSubMeshes)), qq, Eq, gq);
+       const Ob = Bb.c.Parse((() => new Ab(bb.name, ub, bb.shaderPath, bb.options, bb.storeEffectOnSubMeshes)), bb, ub, hb);
```

#### 22. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L454)

```diff
-       for (mq in qq.stencil && lq.stencil.parse(qq.stencil, Eq, gq), qq.textures) lq.setTexture(mq, xq.d.Parse(qq.textures[mq], Eq, gq));
+       for (Ub in bb.stencil && Ob.stencil.parse(bb.stencil, ub, hb), bb.textures) Ob.setTexture(Ub, Lb.f.Parse(bb.textures[Ub], ub, hb));
```

#### 23. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L458)

```diff
-         for (let qq = 0; qq < Yq.length; qq++) Oq.push(xq.d.Parse(Yq[qq], Eq, gq));
+         for (let bb = 0; bb < Bb.length; bb++) Gb.push(Lb.f.Parse(Bb[bb], ub, hb));
```

#### 24. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L523-L524` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L523-L524) · [Before (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L523-L524)

```diff
-       for (mq in qq.quaternions) lq.setQuaternion(mq, Oq.h.FromArray(qq.quaternions[mq]));
-       for (mq in qq.matrices) lq.setMatrix(mq, Oq.e.FromArray(qq.matrices[mq]));
+       for (Ub in bb.quaternions) Ob.setQuaternion(Ub, Gb.f.FromArray(bb.quaternions[Ub]));
+       for (Ub in bb.matrices) Ob.setMatrix(Ub, Gb.d.FromArray(bb.matrices[Ub]));
```

#### 25. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L538` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L538) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L538)

```diff
-         const mq = new cq.e;
+         const Ub = new Sb.b;
```

#### 26. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L552)

```diff
-         const mq = new cq.e;
+         const Ub = new Sb.b;
```

#### 27. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/256.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/256.js#L568)

```diff
-       yq || (yq = !0, jq.Parse = Hq, jq.ParseFromFileAsync = oq, jq.ParseFromSnippetAsync = Pq, jq.CreateFromSnippetAsync = Qq, (0, Vq.g)("BABYLON.ShaderMaterial", jq))
+       db || (db = !0, Ab.Parse = lb, Ab.ParseFromFileAsync = Kb, Ab.ParseFromSnippetAsync = Wb, Ab.CreateFromSnippetAsync = Cb, (0, pb.f)("BABYLON.ShaderMaterial", Ab))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 1. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/257.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/257.js#L1)

```diff
- /*! For license information please see bbb6l5.257.4043bbd3.chunk.js.LICENSE.txt */
+ /*! For license information please see halsg.257.c5c1a293.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/257.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/257.js#L5)

```diff
-   40252: (qq, Eq, gq) => {
+   39953: (bb, ub, hb) => {
```

#### 3. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/257.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/257.js#L8-L11)

```diff
-       SDK_VERSION: () => Yq.d,
-       _DEFAULT_ENTRY_NAME: () => Yq.h,
-       VYq: () => Yq.k,
-       _addOrOverwriteComponent: () => Yq.o,
+       SDK_VERSION: () => Bb.e,
+       _DEFAULT_ENTRY_NAME: () => Bb.i,
+       bBb: () => Bb.m,
+       _addOrOverwriteComponent: () => Bb.n,
```

#### 4. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13-L24` → after: `L13-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/257.js#L13-L24) · [Before (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/257.js#L13-L24)

```diff
-       _clearComponents: () => Yq.q,
-       _components: () => Yq.r,
-       _getProvider: () => Yq.s,
-       _registerComponent: () => Yq.v,
-       _removeServiceInstance: () => Yq.w,
-       deleteApp: () => Yq.A,
-       getApp: () => Yq.F,
-       getApps: () => Yq.C,
-       initializeApp: () => Yq.G,
-       onLog: () => Yq.K,
-       registerVersion: () => Yq.L,
-       setLogLevel: () => Yq.O
+       _clearComponents: () => Bb.t,
+       _components: () => Bb.w,
+       _getProvider: () => Bb.z,
+       _registerComponent: () => Bb.D,
+       _removeServiceInstance: () => Bb.F,
+       deleteApp: () => Bb.I,
+       getApp: () => Bb.L,
+       getApps: () => Bb.J,
+       initializeApp: () => Bb.N,
+       onLog: () => Bb.Q,
+       registerVersion: () => Bb.R,
+       setLogLevel: () => Bb.V
```

#### 5. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L26-L27` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/257.js#L26-L27) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/257.js#L26-L27)

```diff
-     var Yq = gq(40254);
-     (0, Yq.L)("firebase", "9.23.0", "app")
+     var Bb = hb(39959);
+     (0, Bb.R)("firebase", "9.23.0", "app")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (65 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 1. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L1)

```diff
- /*! For license information please see bbb6l5.258.e248762a.chunk.js.LICENSE.txt */
+ /*! For license information please see halsg.258.03c35269.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L5)

```diff
-   40265: (qq, Eq, gq) => {
+   39976: (bb, ub, hb) => {
```

#### 3. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L7-L11` → after: `L7-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L7-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L7-L10) · [Before (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L7-L11)

```diff
-       $: () => bq,
-       A: () => Zq,
-       B: () => Bq,
-       F: () => uq,
-       J: () => Wq,
+       C: () => ib,
+       D: () => Hb,
+       E: () => ab,
+       H: () => wb,
```

#### 4. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L15` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L13) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L15)

```diff
-       N: () => vq,
+       P: () => ob,
```

#### 5. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L19-L23` → after: `L17-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L17-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L17-L21) · [Before (L19-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L19-L23)

```diff
-       W: () => jq,
-       X: () => iq,
-       bb: () => Pq,
-       c: () => Nq,
-       d: () => tq,
+       Y: () => pb,
+       ab: () => Ab,
+       e: () => Zb,
+       eb: () => gb,
+       fb: () => zb,
```

#### 6. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L25` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L23-L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L25)

```diff
-       l: () => Qq,
+       i: () => db,
+       j: () => Cb,
+       jb: () => Wb,
```

#### 7. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L27)

```diff
-       p: () => mq,
+       q: () => Ub,
```

#### 8. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L29-L30` → after: `L29-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L29-L30) · [Before (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L29-L30)

```diff
-       u: () => fq,
-       x: () => hq
+       v: () => vb,
+       y: () => Db
```

#### 9. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L37)

```diff
-           lq < 128 ? Eq[gq++] = lq : lq < 2048 ? (Eq[gq++] = lq >> 6 | 192, Eq[gq++] = 63 & lq | 128) : 55296 === (64512 & lq) && Yq + 1 < qq.length && 56320 === (64512 & qq.charCodeAt(Yq + 1)) ? (lq = 65536 + ((1023 & lq) << 10) + (1023 & qq.charCodeAt(++Yq)), Eq[gq++] = lq >> 1 … [truncated]
+           Ob < 128 ? ub[hb++] = Ob : Ob < 2048 ? (ub[hb++] = Ob >> 6 | 192, ub[hb++] = 63 & Ob | 128) : 55296 === (64512 & Ob) && Bb + 1 < bb.length && 56320 === (64512 & bb.charCodeAt(Bb + 1)) ? (Ob = 65536 + ((1023 & Ob) << 10) + (1023 & bb.charCodeAt(++Bb)), ub[hb++] = Ob >> 1 … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L170)

```diff
-           return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${qq}`)
+           return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${bb}`)
```

#### 11. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L183)

```diff
-         return null === (Eq = cq()) || void 0 === Eq ? void 0 : Eq[`_${qq}`]
+         return null === (ub = Sb()) || void 0 === ub ? void 0 : ub[`_${bb}`]
```

#### 12. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L262)

```diff
-           gq = `${this.service}/${qq}`,
+           hb = `${this.service}/${bb}`,
```

#### 13. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L267` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L267) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L267)

```diff
-               return null != Yq ? String(Yq) : `<${gq}?>`
+               return null != Bb ? String(Bb) : `<${hb}?>`
```

#### 14. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L270)

```diff
-           Oq = `${this.serviceName}: ${lq} (${gq}).`;
+           Gb = `${this.serviceName}: ${Ob} (${hb}).`;
```

#### 15. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L325)

```diff
-       return qq.substring(Eq, gq > 0 ? gq : void 0)
+       return bb.substring(ub, hb > 0 ? hb : void 0)
```

#### 16. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L363` → after: `L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L363) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L363)

```diff
-         }(qq, ["next", "error", "complete"]) ? qq : {
+         }(bb, ["next", "error", "complete"]) ? bb : {
```

#### 17. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L415)

```diff
-   40254: (qq, Eq, gq) => {
+   39959: (bb, ub, hb) => {
```

#### 18. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L417-L421` → after: `L417-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L417-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L417-L421) · [Before (L417-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L417-L421)

```diff
-       c: () => Oq.h,
-       d: () => BE,
-       h: () => eq,
-       k: () => gE,
-       o: () => YE,
+       c: () => Gb.i,
+       e: () => Hu,
+       i: () => Qb,
+       m: () => hu,
+       n: () => Bu,
```

#### 19. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L423-L426` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L423) · [Before (L423-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L423-L426)

```diff
-       q: () => xE,
-       r: () => EE,
-       s: () => OE,
-       v: () => lE,
+       t: () => Lu,
```

#### 20. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L428` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L425-L426) · [Before (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L428)

```diff
-       A: () => VE,
+       z: () => Gu,
+       D: () => Ou,
```

#### 21. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L430-L432` → after: `L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L428) · [Before (L430-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L430-L432)

```diff
-       C: () => aE,
-       G: () => WE,
-       K: () => jE,
+       I: () => pu,
```

#### 22. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L434` → after: `L430-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L430-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L430-L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L434)

```diff
-       O: () => HE
+       J: () => Xu,
+       N: () => wu,
+       Q: () => Au,
+       R: () => ou,
+       V: () => lu
```

#### 23. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L436-L438` → after: `L436-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L436-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L436-L438) · [Before (L436-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L436-L438)

```diff
-     var Yq = gq(40258),
-       lq = gq(40273),
-       Oq = gq(40265);
+     var Bb = hb(39967),
+       Ob = hb(39983),
+       Gb = hb(39976);
```

#### 24. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L550` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L550) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L550)

```diff
-             return `${Eq.library}/${Eq.version}`
+             return `${ub.library}/${ub.version}`
```

#### 25. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L558)

```diff
-       vq = new lq.g("@firebase/app"),
+       nb = new Ob.i("@firebase/app"),
```

#### 26. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L617)

```diff
-         qq.container.zk(Eq)
+         bb.container.FN(ub)
```

#### 27. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L619)

```diff
-         vq.debug(`Component ${Eq.name} failed to register with FirebaseApp ${qq.name}`, gq)
+         nb.debug(`Component ${ub.name} failed to register with FirebaseApp ${bb.name}`, hb)
```

#### 28. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L629` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L629) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L629)

```diff
-       if (EE.has(Eq)) return vq.debug(`There were multiple attempts to register component ${Eq}.`), !1;
+       if (uu.has(ub)) return nb.debug(`There were multiple attempts to register component ${ub}.`), !1;
```

#### 29. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L663)

```diff
-       cE = new Oq.d("app", "Firebase", AE);
+       Su = new Gb.h("app", "Firebase", Yu);
```

#### 30. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L666` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L666) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L666)

```diff
-         this._isDeleted = !1, this._options = Object.assign({}, qq), this._config = Object.assign({}, Eq), this._name = Eq.name, this._automaticDataCollectionEnabled = Eq.automaticDataCollectionEnabled, this._container = gq, this.container.zk(new Yq.f("app", (() => this), "PUBLIC … [truncated]
+         this._isDeleted = !1, this._options = Object.assign({}, bb), this._config = Object.assign({}, ub), this._name = ub.name, this._automaticDataCollectionEnabled = ub.automaticDataCollectionEnabled, this._container = hb, this.container.FN(new Bb.f("app", (() => this), "PUBLIC … [truncated]
```

#### 31. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L716` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L716) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L716)

```diff
-       if (gq || (gq = (0, Oq.B)()), !gq) throw cE.create("no-options");
+       if (hb || (hb = (0, Gb.D)()), !hb) throw Su.create("no-options");
```

#### 32. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L719` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L719) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L719)

```diff
-         if ((0, Oq.x)(gq, xq.options) && (0, Oq.x)(lq, xq.config)) return xq;
+         if ((0, Gb.y)(hb, Lb.options) && (0, Gb.y)(Ob, Lb.config)) return Lb;
```

#### 33. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L724-L725` → after: `L724-L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L724-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L724-L725) · [Before (L724-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L724-L725)

```diff
-       const Aq = new Yq.e(mq);
-       for (const Yq of EE.values()) Aq.zk(Yq);
+       const Yb = new Bb.b(Ub);
+       for (const Bb of uu.values()) Yb.FN(Bb);
```

#### 34. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L733` → after: `L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L733) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L733)

```diff
-       if (!Eq && qq === eq && (0, Oq.B)()) return WE();
+       if (!ub && bb === Qb && (0, Gb.D)()) return wu();
```

#### 35. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L750-L751` → after: `L750-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L750-L751) · [Before (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L750-L751)

```diff
-       let Oq = null !== (lq = Dq[qq]) && void 0 !== lq ? lq : qq;
-       gq && (Oq += `-${gq}`);
+       let Gb = null !== (Ob = Rb[bb]) && void 0 !== Ob ? Ob : bb;
+       hb && (Gb += `-${hb}`);
```

#### 36. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L755-L756` → after: `L755-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L755-L756) · [Before (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L755-L756)

```diff
-         const qq = [`Unable to register library "${Oq}" with version "${Eq}":`];
-         return mq && qq.push(`library name "${Oq}" contains illegal characters (whitespace or "/")`), mq && xq && qq.push("and"), xq && qq.push(`version name "${Eq}" contains illegal characters (whitespace or "/")`), void vq.warn(qq.join(" "))
+         const bb = [`Unable to register library "${Gb}" with version "${ub}":`];
+         return Ub && bb.push(`library name "${Gb}" contains illegal characters (whitespace or "/")`), Ub && Lb && bb.push("and"), Lb && bb.push(`version name "${ub}" contains illegal characters (whitespace or "/")`), void nb.warn(bb.join(" "))
```

#### 37. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L758` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L758) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L758)

```diff
-       lE(new Yq.f(`${Oq}-version`, (() => ({
+       Ou(new Bb.f(`${Gb}-version`, (() => ({
```

#### 38. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L770` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L770) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L770)

```diff
-       (0, lq.i)(qq)
+       (0, Ob.k)(bb)
```

#### 39. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L806)

```diff
-         if (gq instanceof Oq.h) vq.warn(gq.message);
+         if (hb instanceof Gb.i) nb.warn(hb.message);
```

#### 40. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L817)

```diff
-       return `${qq.name}!${qq.options.appId}`
+       return `${bb.name}!${bb.options.appId}`
```

#### 41. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L823` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L823) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L823)

```diff
-         this.qV = new hE(Eq), this._heartbeatsCachePromise = this.qV.read().then((qq => (this._heartbeatsCache = qq, qq)))
+         this.FX = new Du(ub), this._heartbeatsCachePromise = this.FX.read().then((bb => (this._heartbeatsCache = bb, bb)))
```

#### 42. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L834` → after: `L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L834) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L834)

```diff
-         })), this.qV.overwrite(this._heartbeatsCache)
+         })), this.FX.overwrite(this._heartbeatsCache)
```

#### 43. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L867)

```diff
-           Yq = (0, Oq.p)(JSON.stringify({
+           Bb = (0, Gb.q)(JSON.stringify({
```

#### 44. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L871` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L871) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L871)

```diff
-         return this._heartbeatsCache.lastSentHeartbeatDate = qq, gq.length > 0 ? (this._heartbeatsCache.heartbeats = gq, await this.qV.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.qV.overwrite(this._heartbeatsCache)), Yq
+         return this._heartbeatsCache.lastSentHeartbeatDate = bb, hb.length > 0 ? (this._heartbeatsCache.heartbeats = hb, await this.FX.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.FX.overwrite(this._heartbeatsCache)), Bb
```

#### 45. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L883` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L883) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L883)

```diff
-         return !!(0, Oq.T)() && (0, Oq.bb)().then((() => !0)).catch((() => !1))
+         return !!(0, Gb.V)() && (0, Gb.jb)().then((() => !0)).catch((() => !1))
```

#### 46. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L892)

```diff
-               if (Eq instanceof Oq.h) vq.warn(Eq.message);
+               if (ub instanceof Gb.i) nb.warn(ub.message);
```

#### 47. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L913` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L913) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L913)

```diff
-             lastSentHeartbeatDate: null !== (Eq = qq.lastSentHeartbeatDate) && void 0 !== Eq ? Eq : gq.lastSentHeartbeatDate,
+             lastSentHeartbeatDate: null !== (ub = bb.lastSentHeartbeatDate) && void 0 !== ub ? ub : hb.lastSentHeartbeatDate,
```

#### 48. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L923)

```diff
-             lastSentHeartbeatDate: null !== (Eq = qq.lastSentHeartbeatDate) && void 0 !== Eq ? Eq : gq.lastSentHeartbeatDate,
+             lastSentHeartbeatDate: null !== (ub = bb.lastSentHeartbeatDate) && void 0 !== ub ? ub : hb.lastSentHeartbeatDate,
```

#### 49. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L931)

```diff
-       return (0, Oq.p)(JSON.stringify({
+       return (0, Gb.q)(JSON.stringify({
```

#### 50. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L939` → after: `L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L939) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L939)

```diff
-   40258: (qq, Eq, gq) => {
+   39967: (bb, ub, hb) => {
```

#### 51. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L941` → after: `L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L941) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L941)

```diff
-       e: () => xq,
+       b: () => Lb,
```

#### 52. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L944)

```diff
-     var Yq = gq(40265);
+     var Bb = hb(39976);
```

#### 53. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L970` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L970) · [Before (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L970)

```diff
-           const qq = new Yq.c;
+           const bb = new Bb.e;
```

#### 54. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1001` → after: `L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L1001) · [Before (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L1001)

```diff
-         if (qq.name !== this.name) throw Error(`Mismatching Component ${qq.name} for Provider ${this.name}.`);
+         if (bb.name !== this.name) throw Error(`Mismatching Component ${bb.name} for Provider ${this.name}.`);
```

#### 55. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1046` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L1046) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L1046)

```diff
-         if (this.isInitialized(gq)) throw Error(`${this.name}(${gq}) has already been initialized`);
+         if (this.isInitialized(hb)) throw Error(`${this.name}(${hb}) has already been initialized`);
```

#### 56. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1060` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L1060) · [Before (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L1060)

```diff
-           lq = null !== (gq = this.onInitCallbacks.get(Yq)) && void 0 !== gq ? gq : new Set;
+           Ob = null !== (hb = this.onInitCallbacks.get(Bb)) && void 0 !== hb ? hb : new Set;
```

#### 57. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1090` → after: `L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L1090) · [Before (L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L1090)

```diff
-         return this.component ? this.component.multipleInstances ? qq : Oq : qq
+         return this.component ? this.component.multipleInstances ? bb : Gb : bb
```

#### 58. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1102` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L1102) · [Before (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L1102)

```diff
-         if (Eq.isComponentSet()) throw new Error(`Component ${qq.name} has already been registered with ${this.name}`);
+         if (ub.isComponentSet()) throw new Error(`Component ${bb.name} has already been registered with ${this.name}`);
```

#### 59. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1106` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L1106) · [Before (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L1106)

```diff
-         this.getProvider(qq.name).isComponentSet() && this.providers.delete(qq.name), this.zk(qq)
+         this.getProvider(bb.name).isComponentSet() && this.providers.delete(bb.name), this.FN(bb)
```

#### 60. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1118` → after: `L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L1118) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L1118)

```diff
-   40273: (qq, Eq, gq) => {
+   39983: (bb, ub, hb) => {
```

#### 61. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1120-L1121` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L1120) · [Before (L1120-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L1120-L1121)

```diff
-       c: () => lq,
-       g: () => cq,
+       e: () => Ob,
```

#### 62. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1150` → after: `L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L1150) · [Before (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L1150)

```diff
-         if (!Yq) throw new Error(`Attempted to log a message with an invalid logType (value: ${Eq})`);
+         if (!Bb) throw new Error(`Attempted to log a message with an invalid logType (value: ${ub})`);
```

#### 63. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1152` → after: `L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L1152) · [Before (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L1152)

```diff
-         console[Yq](`[${gq}]  ${qq.name}:`, ...Oq)
+         console[Bb](`[${hb}]  ${bb.name}:`, ...Gb)
```

#### 64. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1162` → after: `L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L1162) · [Before (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L1162)

```diff
-         if (!(qq in lq)) throw new TypeError(`Invalid value "${qq}" assigned to \`logLevel\``);
+         if (!(bb in Ob)) throw new TypeError(`Invalid value "${bb}" assigned to \`logLevel\``);
```

#### 65. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/258.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/258.js#L1225)

```diff
-           gq >= (null !== Yq && void 0 !== Yq ? Yq : Eq.logLevel) && qq({
+           hb >= (null !== Bb && void 0 !== Bb ? Bb : ub.logLevel) && bb({
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 1. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L1)

```diff
- /*! For license information please see bbb6l5.259.a60d05a1.chunk.js.LICENSE.txt */
+ /*! For license information please see halsg.259.76eeee1f.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L5)

```diff
-   40278: (qq, Eq, gq) => {
+   39986: (bb, ub, hb) => {
```

#### 3. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L20-L23` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L20-L23) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L20-L23)

```diff
-     var Yq = gq(40254),
-       lq = gq(40273),
-       Oq = gq(40265),
-       mq = gq(40258);
+     var Bb = hb(39959),
+       Ob = hb(39983),
+       Gb = hb(39976),
+       Ub = hb(39967);
```

#### 4. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L127)

```diff
-       hq = `w:${rq}`,
+       Db = `w:${jb}`,
```

#### 5. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L138)

```diff
-       Zq = new Oq.d("installations", "Installations", iq);
+       ib = new Gb.h("installations", "Installations", gb);
```

#### 6. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L141)

```diff
-       return qq instanceof Oq.h && qq.code.includes("request-failed")
+       return bb instanceof Gb.i && bb.code.includes("request-failed")
```

#### 7. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L148)

```diff
-       return `https://firebaseinstallations.googleapis.com/v1/projects/${Eq}/installations`
+       return `https://firebaseinstallations.googleapis.com/v1/projects/${ub}/installations`
```

#### 8. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L187)

```diff
-         return `${nq} ${qq}`
+         return `${xb} ${bb}`
```

#### 9. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L211)

```diff
-         return Jq.test(Eq) ? Eq : ""
+         return Ib.test(ub) ? ub : ""
```

#### 10. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L218)

```diff
-       return `${qq.appName}!${qq.appId}`
+       return `${bb.appName}!${bb.appId}`
```

#### 11. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L424` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L424) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L424)

```diff
-           return `${Mq(qq)}/${gq}/authTokens:generate`
+           return `${tb(bb)}/${hb}/authTokens:generate`
```

#### 12. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L500` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L500) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L500)

```diff
-       return Eq ? await Eq : Yq.authToken
+       return ub ? await ub : Bb.authToken
```

#### 13. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L555` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L555) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L555)

```diff
-           heartbeatServiceProvider: (0, Yq.s)(Eq, "heartbeat"),
+           heartbeatServiceProvider: (0, Bb.z)(ub, "heartbeat"),
```

#### 14. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L561` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L561) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L561)

```diff
-           gq = (0, Yq.s)(Eq, WE).getImmediate();
+           hb = (0, Bb.z)(ub, wu).getImmediate();
```

#### 15. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L574` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L574) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L574)

```diff
-     (0, Yq.v)(new mq.f(WE, NE, "PUBLIC")), (0, Yq.v)(new mq.f("installations-internal", aE, "PRIVATE")), (0, Yq.L)(tq, rq), (0, Yq.L)(tq, rq, "esm2017");
+     (0, Bb.D)(new Ub.f(wu, Zu, "PUBLIC")), (0, Bb.D)(new Ub.f("installations-internal", Xu, "PRIVATE")), (0, Bb.R)(rb, jb), (0, Bb.R)(rb, jb, "esm2017");
```

#### 16. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L577` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L577) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L577)

```diff
-       jE = new lq.g("@firebase/analytics"),
+       Au = new Ob.i("@firebase/analytics"),
```

#### 17. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L592)

```diff
-       oE = new Oq.d("analytics", "Analytics", HE);
+       Ku = new Gb.h("analytics", "Analytics", lu);
```

#### 18. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L616` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L616) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L616)

```diff
-         lq = `${dE}?l=${qq}&id=${Eq}`;
+         Ob = `${ou}?l=${bb}&id=${ub}`;
```

#### 19. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L724)

```diff
-       }), void 0 !== gq ? gq : 6e4), nE({
+       }), void 0 !== hb ? hb : 6e4), xu({
```

#### 20. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L754` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L754) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L754)

```diff
-         if (cq) return jE.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${cq} provided in the "measurementId" field in the local Firebase config. [${null===uq||void 0===uq?void 0:uq.message}]`), {
+         if (Sb) return Au.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Sb} provided in the "measurementId" field in the local Firebase config. [${null===ab||void 0===ab?void 0:ab.message}]`), {
```

#### 21. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L787)

```diff
-             if (!(qq instanceof Oq.h) || !qq.customData) return !1;
+             if (!(bb instanceof Gb.i) || !bb.customData) return !1;
```

#### 22. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L791)

```diff
-           if (mq.deleteThrottleMetadata(Aq), cq) return jE.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${cq} provided in the "measurementId" field in the local Firebase config. [${null===Eq||void 0===Eq?void 0:Eq.me … [truncated]
+           if (Ub.deleteThrottleMetadata(Yb), Sb) return Au.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Sb} provided in the "measurementId" field in the local Firebase config. [${null===ub||void 0===ub?void 0:ub.me … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L802` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L802) · [Before (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L802)

```diff
-         return mq.setThrottleMetadata(Aq, Bq), jE.debug(`Calling attemptFetch again in ${Yq} millis`), nE(qq, Bq, gq, mq)
+         return Ub.setThrottleMetadata(Yb, Hb), Au.debug(`Calling attemptFetch again in ${Bb} millis`), xu(bb, Hb, hb, Ub)
```

#### 24. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L829` → after: `L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L829) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L829)

```diff
-         gq[Eq.measurementId] = Eq.appId, qq.options.measurementId && Eq.measurementId !== qq.options.measurementId && jE.warn(`The measurement ID in the local Firebase config (${qq.options.measurementId}) does not match the measurement ID fetched from the server (${Eq.measurement … [truncated]
+         hb[ub.measurementId] = ub.appId, bb.options.measurementId && ub.measurementId !== bb.options.measurementId && Au.warn(`The measurement ID in the local Firebase config (${bb.options.measurementId}) does not match the measurement ID fetched from the server (${ub.measurement … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L832` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L832) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L832)

```diff
-         if (!(0, Oq.T)()) return jE.warn(oE.create("indexeddb-unavailable", {
+         if (!(0, Gb.V)()) return Au.warn(Ku.create("indexeddb-unavailable", {
```

#### 26. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L836` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L836) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L836)

```diff
-           await (0, Oq.bb)()
+           await (0, Gb.jb)()
```

#### 27. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L850` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L850) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L850)

```diff
-       const Nq = null !== (Aq = null === xq || void 0 === xq ? void 0 : xq.config) && void 0 !== Aq ? Aq : {};
+       const Zb = null !== (Yb = null === Lb || void 0 === Lb ? void 0 : Lb.config) && void 0 !== Yb ? Yb : {};
```

#### 28. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L876-L877` → after: `L876-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L876-L877) · [Before (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L876-L877)

```diff
-         if ((0, Oq.M)() && qq.push("This is a browser extension environment."), (0, Oq.l)() || qq.push("Cookies are not available."), qq.length > 0) {
-           const Eq = qq.map(((qq, Eq) => `(${Eq+1}) ${qq}`)).join(" "),
+         if ((0, Gb.P)() && bb.push("This is a browser extension environment."), (0, Gb.j)() || bb.push("Cookies are not available."), bb.length > 0) {
+           const ub = bb.map(((bb, ub) => `(${ub+1}) ${bb}`)).join(" "),
```

#### 29. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L888` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L888) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L888)

```diff
-         jE.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${qq.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
+         Au.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${bb.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
```

#### 30. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L918)

```diff
-       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.F)();
+       let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.L)();
```

#### 31. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L920` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L920) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L920)

```diff
-       const Eq = (0, Yq.s)(qq, VE);
+       const ub = (0, Bb.z)(bb, pu);
```

#### 32. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L926` → after: `L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L926) · [Before (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L926)

```diff
-       const gq = (0, Yq.s)(qq, VE);
+       const hb = (0, Bb.z)(bb, pu);
```

#### 33. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L929` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L929) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L929)

```diff
-         if ((0, Oq.x)(Eq, gq.getOptions())) return qq;
+         if ((0, Gb.y)(ub, hb.getOptions())) return bb;
```

#### 34. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L937-L939` → after: `L937-L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L937-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L937-L939) · [Before (L937-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L937-L939)

```diff
-       if ((0, Oq.M)()) return !1;
-       if (!(0, Oq.l)()) return !1;
-       if (!(0, Oq.T)()) return !1;
+       if ((0, Gb.P)()) return !1;
+       if (!(0, Gb.j)()) return !1;
+       if (!(0, Gb.V)()) return !1;
```

#### 35. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L941` → after: `L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L941) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L941)

```diff
-         return await (0, Oq.bb)()
+         return await (0, Gb.jb)()
```

#### 36. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L985` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L985) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L985)

```diff
-           for (const qq of Object.keys(gq)) Eq[`user_properties.${qq}`] = gq[qq];
+           for (const bb of Object.keys(hb)) ub[`user_properties.${bb}`] = hb[bb];
```

#### 37. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L998` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L998) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L998)

```diff
-         window[`ga-disable-${gq}`] = !Eq
+         window[`ga-disable-${hb}`] = !ub
```

#### 38. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1023` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L1023) · [Before (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L1023)

```diff
-     (0, Yq.v)(new mq.f(VE, ((qq, Eq) => {
+     (0, Bb.D)(new Ub.f(pu, ((bb, ub) => {
```

#### 39. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L1028)

```diff
-     }), "PUBLIC")), (0, Yq.v)(new mq.f("analytics-internal", (function(qq) {
+     }), "PUBLIC")), (0, Bb.D)(new Ub.f("analytics-internal", (function(bb) {
```

#### 40. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1039` → after: `L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/259.js#L1039) · [Before (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/259.js#L1039)

```diff
-     }), "PRIVATE")), (0, Yq.L)(lg, Og), (0, Yq.L)(lg, Og, "esm2017")
+     }), "PRIVATE")), (0, Bb.R)(Oh, Gh), (0, Bb.R)(Oh, Gh, "esm2017")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1)

```diff
- /*! For license information please see bbb6l5.260.3053a514.chunk.js.LICENSE.txt */
+ /*! For license information please see halsg.260.2088a8d7.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L5)

```diff
-     40280: (qq, Eq, gq) => {
+     39989: (bb, ub, hb) => {
```

#### 3. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L90-L91` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L90-L91) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L90-L91)

```diff
-         var Yq = gq(40265),
-           lq = gq(40254);
+         var Bb = hb(39976),
+           Ob = hb(39959);
```

#### 4. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L105-L106` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L105-L106) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L105-L106)

```diff
-         var mq = gq(40273),
-           xq = gq(40258);
+         var Ub = hb(39983),
+           Lb = hb(39967);
```

#### 5. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L257)

```diff
-           dq = new Yq.d("auth", "Firebase", {
+           ob = new Bb.h("auth", "Firebase", {
```

#### 6. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L365)

```diff
-           Hq = new mq.g("@firebase/auth");
+           lb = new Ub.i("@firebase/auth");
```

#### 7. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L368)

```diff
-           if (Hq.logLevel <= mq.c.ERROR) {
+           if (lb.logLevel <= Ub.e.ERROR) {
```

#### 8. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L370)

```diff
-             Hq.error(`Auth (${lq.d}): ${qq}`, ...gq)
+             lb.error(`Auth (${Ob.e}): ${bb}`, ...hb)
```

#### 9. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L388)

```diff
-           return new Yq.d("auth", "Firebase", lq).create(Eq, {
+           return new Bb.h("auth", "Firebase", Ob).create(ub, {
```

#### 10. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L394)

```diff
-           if (!(Eq instanceof gq)) throw gq.name !== Eq.constructor.name && Pq(qq, "argument-error"), yq(qq, "argument-error", `Type of ${Eq.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
+           if (!(ub instanceof hb)) throw hb.name !== ub.constructor.name && Wb(bb, "argument-error"), db(bb, "argument-error", `Type of ${ub.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
```

#### 11. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L438)

```diff
-             this.shortDelay = qq, this.longDelay = Eq, nq(Eq > qq, "Short delay should be less than long delay!"), this.isMobile = (0, Yq.V)() || (0, Yq.W)()
+             this.shortDelay = bb, this.longDelay = ub, xb(ub > bb, "Short delay should be less than long delay!"), this.isMobile = (0, Bb.Y)() || (0, Bb.ab)()
```

#### 12. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L441)

```diff
-             return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (iq() || (0, Yq.M)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.s … [truncated]
+             return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (gb() || (0, Bb.P)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.s … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L450` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L450) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L450)

```diff
-           return Eq ? `${gq}${Eq.startsWith("/")?Eq.slice(1):Eq}` : gq
+           return ub ? `${hb}${ub.startsWith("/")?ub.slice(1):ub}` : hb
```

#### 14. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L525)

```diff
-             lq && ("GET" === Eq ? mq = lq : Oq = {
+             Ob && ("GET" === ub ? Ub = Ob : Gb = {
```

#### 15. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L528` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L528) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L528)

```diff
-             const xq = (0, Yq.$)(Object.assign({
+             const Lb = (0, Bb.fb)(Object.assign({
```

#### 16. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L560` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L560) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L560)

```diff
-             if (Oq instanceof Yq.h) throw Oq;
+             if (Gb instanceof Bb.i) throw Gb;
```

#### 17. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L575-L576` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L575-L576) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L575-L576)

```diff
-           const lq = `${Eq}${gq}?${Yq}`;
-           return qq.config.emulator ? Mq(qq.config, lq) : `${qq.config.apiScheme}://${lq}`
+           const Ob = `${ub}${hb}?${Bb}`;
+           return bb.config.emulator ? tb(bb.config, Ob) : `${bb.config.apiScheme}://${Ob}`
```

#### 18. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L647)

```diff
-             throw gq instanceof Yq.h && function(qq) {
+             throw hb instanceof Bb.i && function(bb) {
```

#### 19. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L672` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L672) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L672)

```diff
-               const qq = (null !== (Eq = this.user.stsTokenManager.expirationTime) && void 0 !== Eq ? Eq : 0) - Date.now() - 3e5;
+               const bb = (null !== (ub = this.user.stsTokenManager.expirationTime) && void 0 !== ub ? ub : 0) - Date.now() - 3e5;
```

#### 20. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L787)

```diff
-                 const gq = (0, Yq.$)({
+                 const hb = (0, Bb.fb)({
```

#### 21. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L795` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L795) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L795)

```diff
-                   mq = kq(qq, lq, "/v1/token", `key=${Oq}`),
+                   Ub = Pb(bb, Ob, "/v1/token", `key=${Gb}`),
```

#### 22. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L928-L935` → after: `L928-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L928-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L928-L935) · [Before (L928-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L928-L935)

```diff
-             const uq = null !== (gq = Eq.displayName) && void 0 !== gq ? gq : void 0,
-               Bq = null !== (Yq = Eq.email) && void 0 !== Yq ? Yq : void 0,
-               Wq = null !== (lq = Eq.phoneNumber) && void 0 !== lq ? lq : void 0,
-               Nq = null !== (Oq = Eq.photoURL) && void 0 !== Oq ? Oq : void 0,
-               aq = null !== (mq = Eq.tenantId) && void 0 !== mq ? mq : void 0,
-               Vq = null !== (xq = Eq._redirectEventId) && void 0 !== xq ? xq : void 0,
-               dq = null !== (Aq = Eq.createdAt) && void 0 !== Aq ? Aq : void 0,
-               jq = null !== (cq = Eq.lastLoginAt) && void 0 !== cq ? cq : void 0,
+             const ab = null !== (hb = ub.displayName) && void 0 !== hb ? hb : void 0,
+               Hb = null !== (Bb = ub.email) && void 0 !== Bb ? Bb : void 0,
+               wb = null !== (Ob = ub.phoneNumber) && void 0 !== Ob ? Ob : void 0,
+               Zb = null !== (Gb = ub.photoURL) && void 0 !== Gb ? Gb : void 0,
+               Xb = null !== (Ub = ub.tenantId) && void 0 !== Ub ? Ub : void 0,
+               pb = null !== (Lb = ub._redirectEventId) && void 0 !== Lb ? Lb : void 0,
+               ob = null !== (Yb = ub.createdAt) && void 0 !== Yb ? Yb : void 0,
+               Ab = null !== (Sb = ub.lastLoginAt) && void 0 !== Sb ? Sb : void 0,
```

#### 23. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1006)

```diff
-           return `firebase:${qq}:${Eq}:${gq}`
+           return `firebase:${bb}:${ub}:${hb}`
```

#### 24. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1086` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1086) · [Before (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1086)

```diff
-           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
+           let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
```

#### 25. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1091` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1091) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1091)

```diff
-           const qq = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)()).toLowerCase();
+           const bb = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)()).toLowerCase();
```

#### 26. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1096` → after: `L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1096) · [Before (L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1096)

```diff
-           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
+           let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
```

#### 27. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1101` → after: `L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1101) · [Before (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1101)

```diff
-           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
+           let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
```

#### 28. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1106` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1106) · [Before (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1106)

```diff
-           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
+           let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
```

#### 29. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1111` → after: `L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1111) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1111)

```diff
-           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
+           let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
```

#### 30. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1116` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1116) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1116)

```diff
-           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
+           let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
```

#### 31. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1121)

```diff
-           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
+           let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
```

#### 32. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1126` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1126) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1126)

```diff
-           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)();
+           let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)();
```

#### 33. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1134` → after: `L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1134) · [Before (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1134)

```diff
-               Eq = uE((0, Yq.L)());
+               ub = au((0, Bb.M)());
```

#### 34. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1137` → after: `L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1137) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1137)

```diff
-               Eq = `${uE((0,Yq.L)())}-${qq}`;
+               ub = `${au((0,Bb.M)())}-${bb}`;
```

#### 35. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1143` → after: `L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1143) · [Before (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1143)

```diff
-           return `${Eq}/JsCore/${lq.d}/${Oq}`
+           return `${ub}/JsCore/${Ob.e}/${Gb}`
```

#### 36. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1172` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1172) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1172)

```diff
-                 return null !== (Eq = null === (qq = document.getElementsByTagName("head")) || void 0 === qq ? void 0 : qq[0]) && void 0 !== Eq ? Eq : document
+                 return null !== (ub = null === (bb = document.getElementsByTagName("head")) || void 0 === bb ? void 0 : bb[0]) && void 0 !== ub ? ub : document
```

#### 37. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1178` → after: `L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1178) · [Before (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1178)

```diff
-           return `__${qq}${Math.floor(1e6*Math.random())}`
+           return `__${bb}${Math.floor(1e6*Math.random())}`
```

#### 38. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1213` → after: `L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1213) · [Before (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1213)

```diff
-                       return null == qq.tenantId ? qq._agentRecaptchaConfig = gq : qq._tenantRecaptchaConfigs[qq.tenantId] = gq, Eq(gq.siteKey)
+                       return null == bb.tenantId ? bb._agentRecaptchaConfig = hb : bb._tenantRecaptchaConfigs[bb.tenantId] = hb, ub(hb.siteKey)
```

#### 39. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1386` → after: `L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1386) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1386)

```diff
-             if (null == this.tenantId ? this._agentRecaptchaConfig = Eq : this._tenantRecaptchaConfigs[this.tenantId] = Eq, Eq.emailPasswordEnabled) {
+             if (null == this.tenantId ? this._agentRecaptchaConfig = ub : this._tenantRecaptchaConfigs[this.tenantId] = ub, ub.emailPasswordEnabled) {
```

#### 40. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1397` → after: `L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1397) · [Before (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1397)

```diff
-             this._errorFactory = new Yq.d("auth", "Firebase", qq())
+             this._errorFactory = new Bb.h("auth", "Firebase", bb())
```

#### 41. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1454` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1454) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1454)

```diff
-             const gq = null !== (Eq = null === (qq = this.currentUser) || void 0 === qq ? void 0 : qq.uid) && void 0 !== Eq ? Eq : null;
+             const hb = null !== (ub = null === (bb = this.currentUser) || void 0 === bb ? void 0 : bb.uid) && void 0 !== ub ? ub : null;
```

#### 42. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1459)

```diff
-             const lq = "function" === typeof Eq ? Eq : Eq.next.bind(Eq),
+             const Ob = "function" === typeof ub ? ub : ub.next.bind(ub),
```

#### 43. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1497` → after: `L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1497) · [Before (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1497)

```diff
-               if (Hq.logLevel <= mq.c.WARN) {
+               if (lb.logLevel <= Ub.e.WARN) {
```

#### 44. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1499` → after: `L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1499) · [Before (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1499)

```diff
-                 Hq.warn(`Auth (${lq.d}): ${qq}`, ...gq)
+                 lb.warn(`Auth (${Ob.e}): ${bb}`, ...hb)
```

#### 45. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1501` → after: `L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1501) · [Before (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1501)

```diff
-             }(`Error while retrieving App Check token: ${Eq.error}`), null === Eq || void 0 === Eq ? void 0 : Eq.token
+             }(`Error while retrieving App Check token: ${ub.error}`), null === ub || void 0 === ub ? void 0 : ub.token
```

#### 46. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1510` → after: `L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1510) · [Before (L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1510)

```diff
-             this.auth = qq, this.observer = null, this.addObserver = (0, Yq.u)((qq => this.observer = qq))
+             this.auth = bb, this.observer = null, this.addObserver = (0, Bb.v)((bb => this.observer = bb))
```

#### 47. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1518` → after: `L1518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1518) · [Before (L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1518)

```diff
-           const gq = (0, lq.s)(qq, "auth");
+           const hb = (0, Ob.z)(bb, "auth");
```

#### 48. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1522` → after: `L1522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1522) · [Before (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1522)

```diff
-             if ((0, Yq.x)(lq, null !== Eq && void 0 !== Eq ? Eq : {})) return qq;
+             if ((0, Bb.y)(Ob, null !== ub && void 0 !== ub ? ub : {})) return bb;
```

#### 49. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1561` → after: `L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1561) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1561)

```diff
-             Aq = null === xq ? "" : `:${xq}`;
+             Yb = null === Lb ? "" : `:${Lb}`;
```

#### 50. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1563)

```diff
-             url: `${Oq}//${mq}${Aq}/`
+             url: `${Gb}//${Ub}${Yb}/`
```

#### 51. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1764` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1764) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1764)

```diff
-               this.idToken && (Eq.id_token = this.idToken), this.accessToken && (Eq.access_token = this.accessToken), this.secret && (Eq.oauth_token_secret = this.secret), Eq.providerId = this.providerId, this.nonce && !this.pendingToken && (Eq.nonce = this.nonce), qq.postBody =  … [truncated]
+               this.idToken && (ub.id_token = this.idToken), this.accessToken && (ub.access_token = this.accessToken), this.secret && (ub.oauth_token_secret = this.secret), ub.providerId = this.providerId, this.nonce && !this.pendingToken && (ub.nonce = this.nonce), bb.postBody =  … [truncated]
```

#### 52. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1849-L1851` → after: `L1849-L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1849-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1849-L1851) · [Before (L1849-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1849-L1851)

```diff
-             const Aq = (0, Yq.X)((0, Yq.A)(qq)),
-               cq = null !== (Eq = Aq.apiKey) && void 0 !== Eq ? Eq : null,
-               uq = null !== (gq = Aq.oobCode) && void 0 !== gq ? gq : null,
+             const Yb = (0, Bb.eb)((0, Bb.C)(bb)),
+               Sb = null !== (ub = Yb.apiKey) && void 0 !== ub ? ub : null,
+               ab = null !== (hb = Yb.oobCode) && void 0 !== hb ? hb : null,
```

#### 53. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1869-L1870` → after: `L1869-L1870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1869-L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1869-L1870) · [Before (L1869-L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1869-L1870)

```diff
-               }(null !== (lq = Aq.mode) && void 0 !== lq ? lq : null);
-             vq(cq && uq && Bq, "argument-error"), this.apiKey = cq, this.operation = Bq, this.code = uq, this.continueUrl = null !== (Oq = Aq.continueUrl) && void 0 !== Oq ? Oq : null, this.languageCode = null !== (mq = Aq.languageCode) && void 0 !== mq ? mq : null, this.tenantId … [truncated]
+               }(null !== (Ob = Yb.mode) && void 0 !== Ob ? Ob : null);
+             nb(Sb && ab && Hb, "argument-error"), this.apiKey = Sb, this.operation = Hb, this.code = ab, this.continueUrl = null !== (Gb = Yb.continueUrl) && void 0 !== Gb ? Gb : null, this.languageCode = null !== (Ub = Yb.languageCode) && void 0 !== Ub ? Ub : null, this.tenantId … [truncated]
```

#### 54. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1874-L1877` → after: `L1874-L1877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1874-L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L1874-L1877) · [Before (L1874-L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L1874-L1877)

```diff
-               const Eq = (0, Yq.X)((0, Yq.A)(qq)).link,
-                 gq = Eq ? (0, Yq.X)((0, Yq.A)(Eq)).deep_link_id : null,
-                 lq = (0, Yq.X)((0, Yq.A)(qq)).deep_link_id;
-               return (lq ? (0, Yq.X)((0, Yq.A)(lq)).link : null) || lq || gq || Eq || qq
+               const ub = (0, Bb.eb)((0, Bb.C)(bb)).link,
+                 hb = ub ? (0, Bb.eb)((0, Bb.C)(ub)).deep_link_id : null,
+                 Ob = (0, Bb.eb)((0, Bb.C)(bb)).deep_link_id;
+               return (Ob ? (0, Bb.eb)((0, Bb.C)(Ob)).link : null) || Ob || hb || ub || bb
```

#### 55. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2231` → after: `L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L2231) · [Before (L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L2231)

```diff
-         class Ng extends Yq.h {
+         class Zh extends Bb.i {
```

#### 56. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2236` → after: `L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L2236) · [Before (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L2236)

```diff
-               tenantId: null !== (lq = qq.tenantId) && void 0 !== lq ? lq : void 0,
+               tenantId: null !== (Ob = bb.tenantId) && void 0 !== Ob ? Ob : void 0,
```

#### 57. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2621` → after: `L2621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L2621) · [Before (L2621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L2621)

```diff
-               if (Yq) return new wg(Oq, "anonymous" !== Yq && "custom" !== Yq ? Yq : null)
+               if (Bb) return new fh(Gb, "anonymous" !== Bb && "custom" !== Bb ? Bb : null)
```

#### 58. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2762` → after: `L2762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L2762) · [Before (L2762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L2762)

```diff
-             const Eq = "string" === typeof qq ? qq : qq.uid,
+             const ub = "string" === typeof bb ? bb : bb.uid,
```

#### 59. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2816` → after: `L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L2816) · [Before (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L2816)

```diff
-               const qq = (0, Yq.L)();
+               const bb = (0, Bb.M)();
```

#### 60. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2849` → after: `L2849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L2849) · [Before (L2849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L2849)

```diff
-             (0, Yq.Q)() && 10 === document.documentMode && Oq !== qq.newValue && qq.newValue !== qq.oldValue ? setTimeout(lq, 10) : lq()
+             (0, Bb.T)() && 10 === document.documentMode && Gb !== bb.newValue && bb.newValue !== bb.oldValue ? setTimeout(Ob, 10) : Ob()
```

#### 61. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2977` → after: `L2977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L2977) · [Before (L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L2977)

```diff
-             qq.messageChannel && (qq.messageChannel.port1.removeEventListener("message", qq.vy), qq.messageChannel.port1.close()), this.handlers.delete(qq)
+             bb.messageChannel && (bb.messageChannel.port1.removeEventListener("message", bb.sK), bb.messageChannel.port1.close()), this.handlers.delete(bb)
```

#### 62. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2992` → after: `L2992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L2992) · [Before (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L2992)

```diff
-                 vy(qq) {
+                 sK(bb) {
```

#### 63. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3007` → after: `L3007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R3007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L3007) · [Before (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L3007)

```diff
-               }, this.handlers.add(Oq), Yq.port1.addEventListener("message", Oq.vy), this.target.postMessage({
+               }, this.handlers.add(Gb), Bb.port1.addEventListener("message", Gb.sK), this.target.postMessage({
```

#### 64. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3293` → after: `L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R3293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L3293) · [Before (L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L3293)

```diff
-               vE(`https://www.google.com/recaptcha/api.js??${(0,Yq.$)({onload:kY,render:"explicit",hl:Eq})}`).catch((() => {
+               nu(`https://www.google.com/recaptcha/api.js??${(0,Bb.fb)({onload:PB,render:"explicit",hl:ub})}`).catch((() => {
```

#### 65. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3323` → after: `L3323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L3323) · [Before (L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L3323)

```diff
-             vq(Yq, this.auth, "argument-error"), this.container = Yq, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new FY : new UY, this.validateStartingState()
+             nb(Bb, this.auth, "argument-error"), this.container = Bb, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new yB : new EB, this.validateStartingState()
```

#### 66. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3563` → after: `L3563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R3563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L3563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L3563) · [Before (L3563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L3563)

```diff
-             this.auth = qq, this.resolver = gq, this.user = Yq, this.bypassAuthState = lq, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(Eq) ? Eq : [Eq]
+             this.auth = bb, this.resolver = hb, this.user = Bb, this.bypassAuthState = Ob, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(ub) ? ub : [ub]
```

#### 67. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3784` → after: `L3784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R3784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L3784) · [Before (L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L3784)

```diff
-           const Eq = tY(`${qq.uid}:::`);
+           const ub = rB(`${bb.uid}:::`);
```

#### 68. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3908` → after: `L3908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R3908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L3908) · [Before (L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L3908)

```diff
-                   }, vE(`https://apis.google.com/js/api.js?onload=${Eq}`).catch((qq => gq(qq)))
+                   }, nu(`https://apis.google.com/js/api.js?onload=${ub}`).catch((bb => hb(bb)))
```

#### 69. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3937` → after: `L3937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R3937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L3937) · [Before (L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L3937)

```diff
-           const gq = Eq.emulator ? Mq(Eq, "emulator/auth/iframe") : `https://${qq.config.authDomain}/__/auth/iframe`,
+           const hb = ub.emulator ? tb(ub, "emulator/auth/iframe") : `https://${bb.config.authDomain}/__/auth/iframe`,
```

#### 70. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3941` → after: `L3941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R3941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L3941) · [Before (L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L3941)

```diff
-               v: lq.d
+               v: Ob.e
```

#### 71. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3946` → after: `L3946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R3946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L3946) · [Before (L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L3946)

```diff
-           return xq.length && (Oq.fw = xq.join(",")), `${gq}?${(0,Yq.$)(Oq).slice(1)}`
+           return Lb.length && (Gb.fw = Lb.join(",")), `${hb}?${(0,Bb.fb)(Gb).slice(1)}`
```

#### 72. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3977` → after: `L3977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R3977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L3977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L3977) · [Before (L3977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L3977)

```diff
-             uq = (0, Yq.L)().toLowerCase();
+             ab = (0, Bb.M)().toLowerCase();
```

#### 73. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3981` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L3981) · [Before (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L3981)

```diff
-             return `${qq}${gq}=${Yq},`
+             return `${bb}${hb}=${Bb},`
```

#### 74. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3985` → after: `L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R3985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L3985) · [Before (L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L3985)

```diff
-               return HE(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.L)()) && !!(null === (qq = window.navigator) || void 0 === qq ? void 0 : qq.standalone)
+               return lu(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.M)()) && !!(null === (bb = window.navigator) || void 0 === bb ? void 0 : bb.standalone)
```

#### 75. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L4009` → after: `L4009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R4009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L4009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L4009) · [Before (L4009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L4009)

```diff
-               v: lq.d,
+               v: Ob.e,
```

#### 76. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L4013` → after: `L4013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R4013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L4013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L4013) · [Before (L4013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L4013)

```diff
-               Eq.setDefaultLanguage(qq.languageCode), Aq.providerId = Eq.providerId || "", (0, Yq.N)(Eq.getCustomParameters()) || (Aq.customParameters = JSON.stringify(Eq.getCustomParameters()));
+               ub.setDefaultLanguage(bb.languageCode), Yb.providerId = ub.providerId || "", (0, Bb.Q)(ub.getCustomParameters()) || (Yb.customParameters = JSON.stringify(ub.getCustomParameters()));
```

#### 77. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L4024-L4026` → after: `L4024-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R4024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L4024-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/260.js#L4024-L4026) · [Before (L4024-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/260.js#L4024-L4026)

```diff
-               Bq = uq ? `#${wl}=${encodeURIComponent(uq)}` : "";
-             return `${function(qq){let{config:Eq}=qq;if(!Eq.emulator)return`
-             https: //${Eq.authDomain}/${sl}`;return Mq(Eq,Xl)}(qq)}?${(0,Yq.$)(cq).slice(1)}${Bq}`}const Cl="webStorageSupport";const Il=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QY,this._completeRedirectF … [truncated]
+               Hb = ab ? `#${fO}=${encodeURIComponent(ab)}` : "";
+             return `${function(bb){let{config:ub}=bb;if(!ub.emulator)return`
+             https: //${ub.authDomain}/${VO}`;return tb(ub,FO)}(bb)}?${(0,Bb.fb)(Sb).slice(1)}${Hb}`}const TO="webStorageSupport";const cO=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CB,this._completeRedirect … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (112 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L4)

```diff
-   40318: (qq, Eq, gq) => {
+   40035: (bb, ub, hb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L6-L8` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L6-L12) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L6-L8)

```diff
-       $b: () => Iq,
-       Ac: () => FE,
-       B: () => Wq,
+       $d: () => Hb,
+       $e: () => gh,
+       $f: () => wh,
+       A: () => wb,
+       Ad: () => Yb,
+       Ae: () => Th,
+       Bc: () => fu,
```

#### 3. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L15-L22` → after: `L18-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L18-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L18-L24) · [Before (L15-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L15-L22)

```diff
-       Df: () => Dg,
-       Ed: () => Tq,
-       F: () => lE,
-       Fb: () => xE,
-       Fd: () => Mq,
-       Fe: () => zg,
-       Gb: () => lq,
-       Gc: () => sq,
+       Dd: () => ou,
+       Eb: () => Ob,
+       Ee: () => vh,
+       Fc: () => Bu,
+       Ff: () => kh,
+       G: () => xb,
+       Ge: () => mh,
```

#### 4. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L25-L28` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L30-L32) · [Before (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L25-L28)

```diff
-       Ib: () => jq,
-       Ic: () => wE,
-       Id: () => Sq,
-       J: () => nq,
+       I: () => gb,
+       If: () => Kh,
+       Jc: () => Db,
```

#### 5. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L30-L39` → after: `L34-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L34-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L34-L44) · [Before (L30-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L30-L39)

```diff
-       Kc: () => YE,
-       Ke: () => Cg,
-       Kf: () => yg,
-       L: () => iq,
-       Ld: () => zq,
-       Mb: () => HE,
-       Md: () => aE,
-       Nc: () => BE,
-       Oe: () => fg,
-       Of: () => dg,
+       Jf: () => ph,
+       Kb: () => lu,
+       Kd: () => Ib,
+       Lc: () => Su,
+       M: () => zb,
+       Ne: () => qh,
+       Nf: () => Nh,
+       O: () => qu,
+       Ob: () => Tb,
+       Oc: () => Yu,
+       Od: () => wu,
```

#### 6. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L41-L42` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L46) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L41-L42)

```diff
-       Pc: () => hq,
-       Pd: () => Aq,
+       Pb: () => bh,
```

#### 7. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L46-L49` → after: `L49-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L49-L51) · [Before (L46-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L46-L49)

```diff
-       Qe: () => Zg,
-       R: () => RE,
-       Rb: () => qg,
-       Rd: () => uq,
+       Rf: () => rh,
+       S: () => Eb,
+       Sc: () => hu,
```

#### 8. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L51-L52` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L53) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L51-L52)

```diff
-       T: () => Nq,
-       Tc: () => cE,
+       Tb: () => Qb,
```

#### 9. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L54-L55` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L55-L56) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L54-L55)

```diff
-       Tf: () => pg,
-       U: () => Uq,
+       Te: () => Ih,
+       Ud: () => bu,
```

#### 10. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L57-L58` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L58-L59) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L57-L58)

```diff
-       Vb: () => Zq,
-       Vc: () => AE,
+       Uf: () => Wh,
+       Vd: () => Rb,
```

#### 11. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L60` → after: `L61-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L61-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L61-L63) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L60)

```diff
-       Wd: () => Jq,
+       W: () => GB,
+       Wb: () => cb,
+       Wc: () => nb,
```

#### 12. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L62` → after: `L65-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L65-L67) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L62)

```diff
-       X: () => OY,
+       Xb: () => uu,
+       Xd: () => qb,
+       Xf: () => lh,
```

#### 13. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L67` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L73) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L67)

```diff
-       Zf: () => og,
+       _: () => kb,
```

#### 14. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L70` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L76-L77) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L70)

```diff
-       ab: () => Kq,
+       _f: () => Eh,
+       ac: () => vb,
```

#### 15. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L72-L75` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L79) · [Before (L72-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L72-L75)

```diff
-       af: () => rg,
-       b: () => Oq,
-       be: () => KE,
-       bg: () => Vg,
+       bb: () => cu,
```

#### 16. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L77-L78` → after: `L81-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L81-L84) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L77-L78)

```diff
-       cc: () => EE,
-       cf: () => bg,
+       cb: () => Qu,
+       ce: () => Yh,
+       cg: () => Xh,
+       d: () => Ub,
```

#### 17. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L81-L82` → after: `L88-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L88-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/261.js#L88-L91) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/261.js#L81-L82)

```diff
-       ee: () => JE,
-       fb: () => eE,
+       df: () => xh,
+       ed: () => Uu,
+       f: () => rb,
+       fc: () => lb,
```
