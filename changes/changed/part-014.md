# Changed — Bundle Modifications Report (Part 014 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `14 / 50` (**266** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/252.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/252.js` (134 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af)

#### 107. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1651-L1679` → after: `L2996-L3013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2996-L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L2996-L3013) · [Before (L1651-L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1651-L1679)

```diff
-             this._checkLimits(), super._checkInputs()
-           }
-           _checkLimits() {
-             null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === thi … [truncated]
-           }
-           rebuildAnglesAndRadius() {
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || mq.q.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
-             const qq = this.alpha;
-             var Eq, gq;
-             this.alpha = function(qq) {
-               let Eq = Math.PI / 2;
-               return 0 === qq.x && 0 === qq.z || (Eq = Math.acos(qq.x / Math.sqrt(Math.pow(qq.x, 2) + Math.pow(qq.z, 2)))), qq.z < 0 && (Eq = 2 * Math.PI - Eq), Eq
-             }(this._computationVector), this.beta = (Eq = this._computationVector.y, gq = this.radius, Math.acos(Eq / gq));
-             const Yq = Math.round((qq - this.alpha) / (2 * Math.PI));
-             this.alpha += 2 * Yq * Math.PI, this._checkLimits()
-           }
- ... (13 more removed lines; see GitHub link above)
+           case 5:
+             switch (zC) {
+               case 8:
+                 return this._gl.R16UI;
+               case 33322:
+                 return this._gl.R16_EXT;
+               case 33324:
+                 return this._gl.RG16_EXT;
+               case 32852:
+                 return this._gl.RGB16_EXT;
+               case 32859:
+                 return this._gl.RGBA16_EXT;
+               case 9:
+                 return this._gl.RG16UI;
+               case 10:
+                 return this._gl.RGB16UI;
+ ... (2 more added lines; see GitHub link above)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1681-L1696` → after: `L3015-L3024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3015-L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3015-L3024) · [Before (L1681-L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1681-L1696)

```diff
-             Yq || this.rebuildAnglesAndRadius()
-           }
-           _getViewMatrix() {
-             const qq = Math.cos(this.alpha),
-               Eq = Math.sin(this.alpha),
-               gq = Math.cos(this.beta);
-             let Yq = Math.sin(this.beta);
-             0 === Yq && (Yq = 1e-4), 0 === this.radius && (this.radius = 1e-4);
-             const lq = this._getTargetPosition();
-             if (this._computationVector.Vqq(this.radius * qq * Yq, this.radius * gq, this.radius * Eq * Yq), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || mq.q.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationV … [truncated]
-               const qq = this.ZJ().collisionCoordinator;
-               this._collider || (this._collider = qq.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, qq.getNewPosition(this._position, this._collisionVelocit … [truncated]
-             } else {
-               this._position.WG(this._newPosition);
-               let qq = this.upVector;
-               this.allowUpsideDown && Yq < 0 && (qq = qq.nY()), this._computeViewMatrix(this._position, lq, qq), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
+           case 6:
+             switch (zC) {
+               case 8:
+                 return this._gl.R32I;
+               case 9:
+                 return this._gl.RG32I;
+               case 10:
+                 return this._gl.RGB32I;
+               default:
+                 return this._gl.RGBA32I
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1698-L1708` → after: `L3026-L3035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3026-L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3026-L3035) · [Before (L1698-L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1698-L1708)

```diff
-             return this._currentTarget.WG(lq), this._viewMatrix
-           }
-           zoomOn(qq) {
-             let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             qq = qq || this.ZJ().meshes;
-             const gq = cq.e.MinMax(qq);
-             let Yq = this._calculateLowerRadiusFromModelBoundingSphere(gq.min, gq.max);
-             if (Yq = Math.max(Math.min(Yq, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Yq * this.zoomOnFactor, this.mode === Hq.e.ORTHOGRAPHIC_CAMERA) {
-               const qq = this.ZJ().Ba().getAspectRatio(this),
-                 Eq = Yq * this.zoomOnFactor / 2;
-               this.orthoLeft = -Eq * qq, this.orthoRight = Eq * qq, this.orthoBottom = -Eq, this.orthoTop = Eq
+           case 7:
+             switch (zC) {
+               case 8:
+                 return this._gl.R32UI;
+               case 9:
+                 return this._gl.RG32UI;
+               case 10:
+                 return this._gl.RGB32UI;
+               default:
+                 return this._gl.RGBA32UI
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1710-L1722` → after: `L3037-L3046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3037-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3037-L3046) · [Before (L1710-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1710-L1722)

```diff
-             this.focusOn({
-               min: gq.min,
-               max: gq.max,
-               distance: Yq
-             }, Eq)
-           }
-           focusOn(qq) {
-             let Eq, gq, Yq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             if (void 0 === qq.min) {
-               const Yq = qq || this.ZJ().meshes;
-               Eq = cq.e.MinMax(Yq), gq = mq.q.Distance(Eq.min, Eq.max)
-             } else {
-               Eq = qq, gq = qq.distance
+           case 1:
+             switch (zC) {
+               case 6:
+                 return this._gl.R32F;
+               case 7:
+                 return this._gl.RG32F;
+               case 4:
+                 return this._gl.RGB32F;
+               default:
+                 return this._gl.RGBA32F
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1724-L1737` → after: `L3048-L3057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3048-L3057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3048-L3057) · [Before (L1724-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1724-L1737)

```diff
-             this.K3 = cq.e.Center(Eq), Yq || (this.maxZ = 2 * gq)
-           }
-           createRigCamera(Eq, gq) {
-             let Yq = 0;
-             switch (this.cameraRigMode) {
-               case Hq.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case Hq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case Hq.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case Hq.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case Hq.e.RIG_MODE_VR:
-                 Yq = this._cameraRigParams.stereoHalfAngle * (0 === gq ? 1 : -1);
-                 break;
-               case Hq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
-                 Yq = this._cameraRigParams.stereoHalfAngle * (0 === gq ? -1 : 1)
+           case 2:
+             switch (zC) {
+               case 6:
+                 return this._gl.R16F;
+               case 7:
+                 return this._gl.RG16F;
+               case 4:
+                 return this._gl.RGB16F;
+               default:
+                 return this._gl.RGBA16F
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1739-L1754` → after: `L3059-L3075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3059-L3075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3059-L3075) · [Before (L1739-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1739-L1754)

```diff
-             const lq = new qq(Eq, this.alpha + Yq, this.beta, this.radius, this.K3, this.ZJ());
-             return lq._cameraRigParams = {}, lq.isRigCamera = !0, lq.rigParent = this, lq.upVector = this.upVector, lq.mode = this.mode, lq.orthoLeft = this.orthoLeft, lq.orthoRight = this.orthoRight, lq.orthoBottom = this.orthoBottom, lq.orthoTop = this.orthoTop, lq
-           }
-           _updateRigCameras() {
-             const qq = this._rigCameras[0],
-               Eq = this._rigCameras[1];
-             switch (qq.beta = Eq.beta = this.beta, this.cameraRigMode) {
-               case Hq.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case Hq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case Hq.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case Hq.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case Hq.e.RIG_MODE_VR:
-                 qq.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, Eq.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
-                 break;
-               case Hq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
-                 qq.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, Eq.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
+           case 10:
+             return this._gl.RGB565;
+           case 13:
+             return this._gl.R11F_G11F_B10F;
+           case 14:
+             return this._gl.RGB9_E5;
+           case 8:
+             return this._gl.RGBA4;
+           case 9:
+             return this._gl.RGB5_A1;
+           case 11:
+             switch (zC) {
+               case 5:
+               default:
+                 return this._gl.RGB10_A2;
+               case 11:
+ ... (1 more added lines; see GitHub link above)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1756-L1979` → after: `L3077-L3327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3077-L3327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3077-L3327) · [Before (L1756-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1756-L1979)

```diff
-             super._updateRigCameras()
-           }
-           _calculateLowerRadiusFromModelBoundingSphere(qq, Eq) {
-             let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-             const Yq = mq.q.Distance(qq, Eq),
-               lq = this.ZJ().Ba().getAspectRatio(this),
-               Oq = Math.tan(this.fov / 2),
-               xq = Oq * lq,
-               Aq = .5 * Yq * gq,
-               cq = Aq * Math.sqrt(1 + 1 / (xq * xq)),
-               uq = Aq * Math.sqrt(1 + 1 / (Oq * Oq));
-             return Math.max(cq, uq)
-           }
-           dispose() {
-             this.inputs.clear(), super.dispose()
-           }
- ... (208 more removed lines; see GitHub link above)
+         }
+         return ZC ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
+       }
+       readPixels(CC, zC, ZC, QC) {
+         let wC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+           nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
+         const oC = wC ? 4 : 3,
+           qC = wC ? this._gl.RGBA : this._gl.RGB,
+           FC = ZC * QC * oC;
+         if (nC) {
+           if (nC.length < FC) return fC.c.Error(`Data buffer is too small to store the read pixels (${nC.length} should be more than ${FC})`), Promise.resolve(nC)
+         } else nC = new Uint8Array(FC);
+         return bC && this.flushFramebuffer(), this._gl.readPixels(CC, zC, ZC, QC, qC, this._gl.UNSIGNED_BYTE, nC), Promise.resolve(nC)
+       }
+       static get IsSupportedAsync() {
+ ... (235 more added lines; see GitHub link above)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1981-L1992` → after: `L3329-L3338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3329-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3329-L3338) · [Before (L1981-L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1981-L1992)

```diff
-             },
-             metadata: Oq
-           }, jE, HE), (0, Yq.f)(null, null, iq, {
-             kind: "field",
-             name: "lowerTargetYLimit",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "lowerTargetYLimit" in qq,
-               get: qq => qq.lowerTargetYLimit,
-               set: (qq, Eq) => {
-                 qq.lowerTargetYLimit = Eq
+             this.isReady = !0;
+             break;
+           case 10:
+             CC = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), CC._swapAndDie(this, !1), this.isReady = !0;
+             break;
+           case 11:
+             if (CC = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), CC._swapAndDie( … [truncated]
+               for (let CC = 0; CC < this._bufferViewArray.length; CC++) {
+                 const zC = this._bufferViewArray[CC];
+                 zC && this._engine.updateRawTexture2DArray(this, zC, this.format, this.invertY, this._compression, this.type, CC)
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1994-L2135` → after: `L3340-L3393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3340-L3393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3340-L3393) · [Before (L1994-L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L1994-L2135)

```diff
-             },
-             metadata: Oq
-           }, oE, PE), (0, Yq.f)(null, null, Zq, {
-             kind: "field",
-             name: "inertialPanningX",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "inertialPanningX" in qq,
-               get: qq => qq.inertialPanningX,
-               set: (qq, Eq) => {
-                 qq.inertialPanningX = Eq
-               }
-             },
-             metadata: Oq
-           }, QE, yE), (0, Yq.f)(null, null, fq, {
- ... (126 more removed lines; see GitHub link above)
+             this.isReady = !0;
+             break;
+           case 4:
+             CC = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), CC._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlph … [truncated]
+             break;
+           case 7:
+             return void(CC = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
+               CC._swapAndDie(this, !1), this.isReady = !0
+             }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
+           case 8:
+             CC = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), CC._swapAndDie(this, !1), this.isReady = !0;
+             break;
+           case 13:
+             return;
+           case 9:
+             return CC = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (CC => {
+ ... (38 more added lines; see GitHub link above)
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2137` → after: `L3395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3395) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2137)

```diff
-   39988: (qq, Eq, gq) => {
+   39657: (CC, zC, ZC) => {
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2139` → after: `L3397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3397) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2139)

```diff
-       d: () => Yq.d
+       b: () => QC
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2141-L2142` → after: `L3399-L3451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3399-L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3399-L3451) · [Before (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2141-L2142)

```diff
-     var Yq = gq(39993);
-     (0, Yq.e)()
+     class QC {
+       get wrapU() {
+         return this._cachedWrapU
+       }
+       set wrapU(CC) {
+         this._cachedWrapU = CC
+       }
+       get wrapV() {
+         return this._cachedWrapV
+       }
+       set wrapV(CC) {
+         this._cachedWrapV = CC
+       }
+       get wrapR() {
+         return this._cachedWrapR
+       }
+ ... (37 more added lines; see GitHub link above)
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2144` → after: `L3453-L3456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3453-L3456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3453-L3456) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2144)

```diff
-   39993: (qq, Eq, gq) => {
+   39938: (CC, zC, ZC) => {
+     function QC(CC) {
+       CC.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
+     }
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2146-L2147` → after: `L3458-L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3458-L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3458-L3471) · [Before (L2146-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2146-L2147)

```diff
-       d: () => uq,
-       e: () => Wq
+       b: () => QC
+     })
+   },
+   39738: (CC, zC, ZC) => {
+     function QC(CC) {
+       return void 0 === CC.getPipelineContext
+     }
+     ZC.d(zC, {
+       c: () => QC
+     })
+   },
+   40148: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => wC
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2149-L2165` → after: `L3473-L8807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3473-L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L3473-L8807) · [Before (L2149-L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2149-L2165)

```diff
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(37139),
-       mq = gq(37289),
-       xq = gq(39995),
-       Aq = gq(39960),
-       cq = gq(37171);
-     let uq = (() => {
-         var qq;
-         let Eq, gq, Aq = xq.c,
-           cq = [],
-           uq = [],
-           Bq = [],
-           Wq = [];
-         return qq = class extends Aq {
-           constructor(qq, Eq, gq, lq) {
- ... (1 more removed lines; see GitHub link above)
+     var QC = ZC(39712);
+     class wC {
+       static GetEffect(CC) {
+         return void 0 === CC.getPipelineContext ? CC.effect : CC
+       }
+       constructor(CC) {
+         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = CC.createDrawContext(), zC && (this.materialContext = CC.createMaterialContext())
+       }
+       setEffect(CC, zC) {
+         let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         ZC || this.effect === CC || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = CC, void 0 !== zC && (this.defines = zC), ZC && this.drawContext?.reset()
+       }
+       dispose() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (this.effect) {
+ ... (5319 more added lines; see GitHub link above)
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2167-L2168` → after: `L8809-L8817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR8809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L8809-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L8809-L8817) · [Before (L2167-L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2167-L2168)

```diff
-           _buildUniformLayout() {
-             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniform … [truncated]
+         }
+         return null
+       }
+       getMorphTargetByName(CC) {
+         for (let zC = 0; zC < this.morphTargetManagers.length; ++zC) {
+           const ZC = this.morphTargetManagers[zC];
+           for (let zC = 0; zC < ZC.numTargets; ++zC) {
+             const QC = ZC.getTarget(zC);
+             if (QC.name === CC) return QC
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2170-L2171` → after: `L8819-L8850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L8819-L8850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L8819-L8850) · [Before (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2170-L2171)

```diff
-           getClassName() {
-             return "HemisphericLight"
+         }
+         return null
+       }
+       getPostProcessByName(CC) {
+         for (let zC = 0; zC < this.postProcesses.length; ++zC) {
+           const ZC = this.postProcesses[zC];
+           if (ZC.name === CC) return ZC
+         }
+         return null
+       }
+       isActiveMesh(CC) {
+         return -1 !== this._activeMeshes.indexOf(CC)
+       }
+       get uid() {
+         return this._uid || (this._uid = QC.g.RandomId()), this._uid
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2173-L2174` → after: `L8852-L8869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR8852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L8852-L8869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L8852-L8869) · [Before (L2173-L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2173-L2174)

```diff
-           setDirectionToTarget(qq) {
-             return this.direction = Oq.q.Normalize(qq.subtract(Oq.q.Zero())), this.direction
+           const ZC = CC.cg();
+           null !== ZC && void 0 !== ZC && (ZC.hasRenderTargetTextures && null != ZC.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(ZC) && (this._processedMaterials.push(ZC), this._materialsRenderTargets.concatWithNoDuplicate(ZC.getRenderTargetTextures())), thi … [truncated]
+         }
+       }
+       freeProcessedMaterials() {
+         this._processedMaterials.dispose()
+       }
+       get blockfreeActiveMeshesAndRenderingGroups() {
+         return this._preventFreeActiveMeshesAndRenderingGroups
+       }
+       set blockfreeActiveMeshesAndRenderingGroups(CC) {
+         this._preventFreeActiveMeshesAndRenderingGroups !== CC && (CC && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = CC)
+       }
+       freeActiveMeshes() {
+         if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
+           for (let CC = 0; CC < this.activeCameras.length; CC++) {
+ ... (2 more added lines; see GitHub link above)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2176-L2177` → after: `L8871-L8876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR8871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L8871-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L8871-L8876) · [Before (L2176-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2176-L2177)

```diff
-           getShadowGenerator() {
-             return null
+       }
+       freeRenderingGroups() {
+         if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
+           for (let CC = 0; CC < this.textures.length; CC++) {
+             const zC = this.textures[CC];
+             zC && zC.renderList && zC.freeRenderingGroups()
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2179-L2181` → after: `L8878-L8944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR8878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L8878-L8944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L8878-L8944) · [Before (L2179-L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2179-L2181)

```diff
-           transferToEffect(qq, Eq) {
-             const gq = Oq.q.Normalize(this.direction);
-             return this._uniformBuffer.updateFloat4("vLightData", gq.x, gq.y, gq.z, 0, Eq), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Eq), this
+       }
+       _isInIntermediateRendering() {
+         return this._intermediateRendering
+       }
+       _isInRenderingMeshEvaluation() {
+         return this._renderingMeshEvaluationDepth > 0
+       }
+       freezeActiveMeshes() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           zC = arguments.length > 1 ? arguments[1] : void 0,
+           ZC = arguments.length > 2 ? arguments[2] : void 0,
+           QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+           bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if (this.frameGraph) {
+           this._renderWithFrameGraph(!0, !1, !0);
+           const nC = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
+ ... (51 more added lines; see GitHub link above)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2183-L2185` → after: `L8946-L8948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L8946-L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L8946-L8948) · [Before (L2183-L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2183-L2185)

```diff
-           transferToNodeMaterialEffect(qq, Eq) {
-             const gq = Oq.q.Normalize(this.direction);
-             return qq.setFloat3(Eq, gq.x, gq.y, gq.z), this
+           if (this._activeParticleSystems) {
+             const CC = this._activeParticleSystems.length;
+             for (let zC = 0; zC < CC; zC++) this._activeParticleSystems.data[zC].animate()
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2187-L2188` → after: `L8950-L8974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR8950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L8950-L8974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L8950-L8974) · [Before (L2187-L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2187-L2188)

```diff
-           computeWorldMatrix() {
-             return this._worldMatrix || (this._worldMatrix = Oq.e.Identity()), this._worldMatrix
+           return void this._renderingManager.resetSprites()
+         }
+         if (!this.activeCamera) return;
+         this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(),  … [truncated]
+         for (let wC = 0, bC = this._beforeEvaluateActiveMeshStage; wC < bC.length; wC++) {
+           bC[wC].action()
+         }
+         const CC = this.getActiveMeshCandidates(),
+           zC = CC.length,
+           ZC = DC.b.Enabled,
+           QC = this.customLODSelector;
+         for (let wC = 0; wC < zC; wC++) {
+           const zC = CC.data[wC],
+             bC = !QC && !zC.ZH && !zC._internalMeshDataInfo?._LODLevels.length;
+           let nC, fC;
+           if ((bC || (nC = zC._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), nC ? nC[1] = -1 : (nC = [zC, -1], zC._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, nC))), !zC.isBlocked) && (ZC && this._totalVertices.addCount(zC.getTotalVertices() … [truncated]
+ ... (9 more added lines; see GitHub link above)
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2190-L2191` → after: `L8976-L8983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR8976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L8976-L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L8976-L8983) · [Before (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2190-L2191)

```diff
-           getTypeID() {
-             return xq.c.LIGHTTYPEID_HEMISPHERICLIGHT
+         }
+         if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
+           this.onBeforeParticlesRenderingObservable.notifyObservers(this);
+           for (let CC = 0; CC < this.Ix.length; CC++) {
+             const zC = this.Ix[CC];
+             if (!zC.isStarted() || !zC.emitter) continue;
+             const ZC = zC.emitter;
+             ZC.position && !ZC.isEnabled() || (this._activeParticleSystems.push(zC), zC.animate(), this._renderingManager.dispatchParticles(zC))
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2193-L2194` → after: `L8985-L9000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR8985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L8985-L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L8985-L9000) · [Before (L2193-L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2193-L2194)

```diff
-           prepareLightSpecificDefines(qq, Eq) {
-             qq["HEMILIGHT" + Eq] = !0
+           this.onAfterParticlesRenderingObservable.notifyObservers(this)
+         }
+       }
+       _prepareSkeleton(CC) {
+         this._skeletonsEnabled && CC.skeleton && (this._activeSkeletons.pushNoDuplicate(CC.skeleton) && (CC.skeleton.prepare(), this._activeBones.addCount(CC.skeleton.bones.length, !1)), CC.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(CC) && this.frameG … [truncated]
+       }
+       _activeMesh(CC, zC) {
+         this._prepareSkeleton(zC);
+         let ZC = CC.yQC || CC.ZH || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || zC.Hg;
+         if (zC && zC.Zx && zC.Zx.length > 0) {
+           const QC = this.getActiveSubMeshCandidates(zC),
+             wC = QC.length;
+           ZC = ZC || 1 === wC;
+           for (let bC = 0; bC < wC; bC++) {
+             const wC = QC.data[bC];
+             this._evaluateSubMesh(wC, zC, CC, ZC)
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2196-L2207` → after: `L9002-L9053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR9002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L9002-L9053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L9002-L9053) · [Before (L2196-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2196-L2207)

```diff
-         }, (() => {
-           const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(Aq[Symbol.metadata] ?? null) : void 0;
-           Eq = [(0, lq.o)()], gq = [(0, lq.I)()], (0, Yq.f)(null, null, Eq, {
-             kind: "field",
-             name: "groundColor",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "groundColor" in qq,
-               get: qq => qq.groundColor,
-               set: (qq, Eq) => {
-                 qq.groundColor = Eq
+         }
+       }
+       updateTransformMatrix(CC) {
+         const zC = this.activeCamera;
+         if (zC)
+           if (zC._renderingMultiview) {
+             const ZC = zC._rigCameras[0],
+               QC = zC._rigCameras[1];
+             this.setTransformMatrix(ZC.getViewMatrix(), ZC.getProjectionMatrix(CC), QC.getViewMatrix(), QC.getProjectionMatrix(CC))
+           } else this.setTransformMatrix(zC.getViewMatrix(), zC.getProjectionMatrix(CC))
+       }
+       _bindFrameBuffer(CC) {
+         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         this._useCurrentFrameBuffer || (CC && CC._multiviewTexture ? CC._multiviewTexture._bindFrameBuffer() : CC && CC.outputRenderTarget ? CC.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer … [truncated]
+       }
+       _clearFrameBuffer(CC) {
+ ... (36 more added lines; see GitHub link above)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2209-L2220` → after: `L9055-L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR9055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L9055-L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L9055-L9111) · [Before (L2209-L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2209-L2220)

```diff
-             },
-             metadata: Oq
-           }, cq, uq), (0, Yq.f)(null, null, gq, {
-             kind: "field",
-             name: "direction",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "direction" in qq,
-               get: qq => qq.direction,
-               set: (qq, Eq) => {
-                 qq.direction = Eq
+             }
+             zC && CC && (zC.renderList.data = CC, zC.renderList.length = CC.length), QC.g.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
+           }
+           if (this._cameraDrawRenderTargetStage.length > 0) {
+             const zC = this.getBoundingBoxRenderer?.();
+             zC && !CC && (CC = zC.renderList.length > 0 ? zC.renderList.data.slice() : [], CC.length = zC.renderList.length);
+             for (let CC = 0, ZC = this._cameraDrawRenderTargetStage; CC < ZC.length; CC++) {
+               bC = ZC[CC].action(this.activeCamera) || bC
+             }
+             zC && CC && (zC.renderList.data = CC, zC.renderList.length = CC.length)
+           }
+           this._intermediateRendering = !1
+         }
+         bC && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || CC._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame … [truncated]
+         for (let QC = 0, fC = this._beforeCameraDrawStage; QC < fC.length; QC++) {
+           fC[QC].action(this.activeCamera)
+ ... (41 more added lines; see GitHub link above)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2222-L2232` → after: `L9113-L9595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR9113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L9113-L9595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L9113-L9595) · [Before (L2222-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2222-L2232)

```diff
-             },
-             metadata: Oq
-           }, Bq, Wq), Oq && Object.defineProperty(qq, Symbol.metadata, {
-             enumerable: !0,
-             configurable: !0,
-             writable: !0,
-             value: Oq
-           })
-         })(), qq
-       })(),
-       Bq = !1;
+             }
+         }
+       }
+       _advancePhysicsEngineStep(CC) {}
+       _animate(CC) {}
+       animate() {
+         if (this._engine.isDeterministicLockStep()) {
+           let CC = Math.max(bZ.MinDeltaTime, Math.min(this._engine.getDeltaTime(), bZ.MaxDeltaTime)) + this._timeAccumulator;
+           const zC = this._engine.getTimeStep(),
+             ZC = 1e3 / zC / 1e3;
+           let QC = 0;
+           const wC = this._engine.getLockstepMaxSteps();
+           let bC = Math.floor(CC / zC);
+           for (bC = Math.min(bC, wC); CC > 0 && QC < bC;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = zC * ZC, this._animate(zC), this.onAfterAnimationsObservable.notifyObservers(this), this.ku && this._advancePhysicsEngineStep(zC), this.onAfterStepO … [truncated]
+           this._timeAccumulator = CC < 0 ? 0 : CC
+         } else {
+ ... (467 more added lines; see GitHub link above)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2235` → after: `L9598-L9690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR9598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L9598-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/252.js#L9598-L9690) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/252.js#L2235)

```diff
-       Bq || (Bq = !0, Aq.c.AddNodeConstructor("Light_Type_3", ((qq, Eq) => () => new uq(qq, Oq.q.Zero(), Eq))), (0, cq.g)("BABYLON.HemisphericLight", uq))
+       nZ || (nZ = !0, (0, zZ.d)("BABYLON.Scene", bZ))
+     }(VC = bZ.prototype).sortActiveAnimatables ?? (VC.sortActiveAnimatables = (0, xC.f)("Scene", "sortActiveAnimatables")), (Cz = bZ.prototype).beginWeightedAnimation ?? (Cz.beginWeightedAnimation = (0, xC.f)("Scene", "beginWeightedAnimation")), (zz = bZ.prototype).beginAnimation … [truncated]
+   },
+   39990: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => QC,
+       c: () => wC
+     });
+     class QC {}
+     QC.NAME_EFFECTLAYER = "EffectLayer", QC.NAME_LAYER = "Layer", QC.NAME_LENSFLARESYSTEM = "LensFlareSystem", QC.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", QC.NAME_PARTICLESYSTEM = "ParticleSystem", QC.NAME_GAMEPAD = "Gamepad", QC.NAME_SIMPLIFICATIONQUEUE = "Simplificatio … [truncated]
+     class wC extends Array {
+       constructor(CC) {
+         super(...CC)
+       }
+       static Create() {
+         return Object.create(wC.prototype)
+ ... (77 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/253.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/253.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/253.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/253.js#L2)

```diff
- export const ids = [253];
+ export const ids = [253, 353];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/253.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/253.js#L4)

```diff
-   40150: (qq, Eq, gq) => {
+   39674: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L6-L978` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/253.js#L6) · [Before (L6-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/253.js#L6-L978)

```diff
-       c: () => lq
-     });
-     var Yq = gq(39768);
- 
-     function lq(qq) {
-       return class extends qq {
-         constructor() {
-           super(...arguments);
-           const qq = new.target;
-           if (!qq[Symbol.metadata]) {
-             const Eq = Object.getPrototypeOf(qq)?.[Symbol.metadata];
-             qq[Symbol.metadata] = Eq ? Object.create(Eq) : {}
-           }
-           const Eq = (0, Yq.e)(qq[Symbol.metadata]);
-           Eq._imageProcessingConfiguration || (Eq._imageProcessingConfiguration = {
-             type: 9,
- ... (957 more removed lines; see GitHub link above)
+       b: () => QC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L981-L982` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/253.js#L9-L10) · [Before (L981-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/253.js#L981-L982)

```diff
-       constructor() {
-         this.previousWorldMatrices = {}, this.previousBones = {}
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersRepository : QC.ShadersRepositoryWGSL
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L984-L985` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/253.js#L12-L13) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/253.js#L984-L985)

```diff
-       static AddUniforms(qq) {
-         qq.push("previousWorld", "previousViewProjection", "mPreviousBones")
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersStore : QC.ShadersStoreWGSL
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L987-L993` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/253.js#L15-L16) · [Before (L987-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/253.js#L987-L993)

```diff
-       static AddSamplers(qq) {}
-       bindForSubMesh(qq, Eq, gq, Yq, lq) {
-         if (Eq.prePassRenderer && Eq.prePassRenderer.enabled && Eq.prePassRenderer.currentRTisSceneRT && (-1 !== Eq.prePassRenderer.getIndex(2) || -1 !== Eq.prePassRenderer.getIndex(11))) {
-           this.previousWorldMatrices[gq.uniqueId] || (this.previousWorldMatrices[gq.uniqueId] = Yq.clone()), this.previousViewProjection || (this.previousViewProjection = Eq.getTransformMatrix().clone(), this.currentViewProjection = Eq.getTransformMatrix().clone());
-           const lq = Eq.Ba();
-           this.currentViewProjection.updateFlag !== Eq.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = lq.frameId, this.previousViewProjection.WG(this.currentViewProjection), this.currentViewProjection.WG(Eq.getTransformMatrix())) : this._lastUpdateFrameId !== lq.fra … [truncated]
-         }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.IncludesShadersStore : QC.IncludesShadersStoreWGSL
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L997-L1011` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/253.js#L21-L23) · [Before (L997-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/253.js#L997-L1011)

```diff
-   40145: (qq, Eq, gq) => {
-     function Yq(qq) {
-       return class extends qq {
-         constructor() {
-           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
-         }
-       }
-     }
-     gq.d(Eq, {
-       d: () => Yq
-     })
-   },
-   40003: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       StandardMaterial: () => Yq.g
+   60938: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       postprocessVertexShader: () => nC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L1013-L1046` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/253.js#L25-L28) · [Before (L1013-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/253.js#L1013-L1046)

```diff
-     var Yq = gq(40010);
-     (0, Yq.e)()
-   },
-   40010: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Sq,
-       g: () => Tq
-     });
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(39858),
-       mq = gq(39838),
-       xq = gq(37289),
-       Aq = gq(39879),
-       cq = gq(40019),
-       uq = gq(40028),
- ... (18 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "postprocessVertexShader",
+       bC = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L1048-L2729` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/253.js#L30-L31) · [Before (L1048-L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/253.js#L1048-L2729)

```diff
-       effect: null,
-       subMesh: null
-     };
-     class Zq extends((0, vq.d)((0, rq.b)(Nq.c))) {}
-     class fq extends((0, uq.e)(Zq)) {
-       constructor(qq) {
-         super(qq), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTU … [truncated]
-       }
-     }
-     class Mq extends((0, hq.c)(aq.b)) {}
-     let Tq = (() => {
-         var qq, Eq, uq, Nq, rq, vq, hq, nq, bq, Zq, Tq, zq, Sq, pq, Gq, Lq, Jq, kq, Rq, Uq, Fq, sq, Xq, wq, Kq, Cq, Iq, eq, Dq, qE, EE, gE, YE;
-         let lE, OE, mE, xE, AE, cE, uE, BE, WE, NE, aE, VE, dE, jE, HE, oE, PE, QE, yE, tE, rE, vE, hE, nE, bE, iE, ZE, fE, ME, TE, zE, SE, pE, GE, LE, JE, kE, RE, UE, FE, sE, XE, wE, KE, CE, IE, eE, DE, qg, Eg, gg, Yg, lg, Og, mg, xg, Ag, cg, ug, Bg, Wg, Ng, ag, Vg, dg, jg, Hg,  … [truncated]
-           hg = [],
-           ng = [],
-           bg = [],
- ... (1666 more removed lines; see GitHub link above)
+       name: wC,
+       shader: bC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/254.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/254.js` (91 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L4)

```diff
-   40049: (qq, Eq, gq) => {
+   39882: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L6` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L6-L12) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L6)

```diff
-       c: () => Yq
+       c: () => NC,
+       g: () => WC,
+       h: () => oC,
+       i: () => MC,
+       k: () => qC,
+       m: () => fC,
+       o: () => FC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L8-L10` → after: `L14-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L14-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L14-L44) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L8-L10)

```diff
-     class Yq {
-       constructor(qq, Eq, gq) {
-         this.bu = qq, this.bv = Eq, this.distance = gq, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
+     var QC = ZC(38507),
+       wC = ZC(39889);
+ 
+     function bC(CC, zC, ZC, QC) {
+       switch (zC) {
+         case 5120: {
+           let zC = CC.getInt8(ZC);
+           return QC && (zC = Math.max(zC / 127, -1)), zC
+         }
+         case 5121: {
+           let zC = CC.getUint8(ZC);
+           return QC && (zC /= 255), zC
+         }
+         case 5122: {
+           let zC = CC.getInt16(ZC, !0);
+           return QC && (zC = Math.max(zC / 32767, -1)), zC
+ ... (15 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L13-L139` → after: `L47-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L47-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L47-L75) · [Before (L13-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L13-L139)

```diff
-   },
-   40060: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(37149),
-       lq = gq(37139),
-       Oq = gq(37145);
-     class mq {
-       constructor(qq, Eq, gq) {
-         this.vectors = (0, Yq.e)(8, lq.q.Zero), this.center = lq.q.Zero(), this.centerWorld = lq.q.Zero(), this.extendSize = lq.q.Zero(), this.extendSizeWorld = lq.q.Zero(), this.directions = (0, Yq.e)(3, lq.q.Zero), this.vectorsWorld = (0, Yq.e)(8, lq.q.Zero), this.minimumWorld  … [truncated]
-       }
-       reConstruct(qq, Eq, gq) {
-         const Yq = qq.x,
-           Oq = qq.y,
-           mq = qq.z,
- ... (111 more removed lines; see GitHub link above)
+ 
+     function nC(CC, zC, ZC, QC, bC) {
+       switch (zC) {
+         case 5120:
+           QC && (bC = Math.round(127 * bC)), CC.setInt8(ZC, bC);
+           break;
+         case 5121:
+           QC && (bC = Math.round(255 * bC)), CC.setUint8(ZC, bC);
+           break;
+         case 5122:
+           QC && (bC = Math.round(32767 * bC)), CC.setInt16(ZC, bC, !0);
+           break;
+         case 5123:
+           QC && (bC = Math.round(65535 * bC)), CC.setUint16(ZC, bC, !0);
+           break;
+         case 5131:
+ ... (13 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L142-L207` → after: `L78-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L78-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L78-L93) · [Before (L142-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L142-L207)

```diff
-     mq._TmpVector3 = (0, Yq.e)(3, lq.q.Zero)
-   },
-   40055: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => Bq
-     });
-     var Yq = gq(37149),
-       lq = gq(37139),
-       Oq = gq(40060);
-     class mq {
-       constructor(qq, Eq, gq) {
-         this.center = lq.q.Zero(), this.centerWorld = lq.q.Zero(), this.minimum = lq.q.Zero(), this.maximum = lq.q.Zero(), this.reConstruct(qq, Eq, gq)
-       }
-       reConstruct(qq, Eq, gq) {
-         this.minimum.WG(qq), this.maximum.WG(Eq);
-         const Yq = lq.q.Distance(qq, Eq);
- ... (50 more removed lines; see GitHub link above)
+ 
+     function fC(CC) {
+       switch (CC) {
+         case 5120:
+         case 5121:
+           return 1;
+         case 5122:
+         case 5123:
+         case 5131:
+           return 2;
+         case 5124:
+         case 5125:
+         case 5126:
+           return 4;
+         default:
+           throw new Error(`Invalid type '${CC}'`)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L210-L291` → after: `L96-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L96-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L96-L117) · [Before (L210-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L210-L291)

```diff
-     mq._TmpVector3 = (0, Yq.e)(3, lq.q.Zero);
-     const xq = {
-         min: 0,
-         max: 0
-       },
-       Aq = {
-         min: 0,
-         max: 0
-       },
-       cq = (qq, Eq, gq) => {
-         const Yq = lq.q.Dot(Eq.centerWorld, qq),
-           Oq = Math.abs(lq.q.Dot(Eq.directions[0], qq)) * Eq.extendSize.x + Math.abs(lq.q.Dot(Eq.directions[1], qq)) * Eq.extendSize.y + Math.abs(lq.q.Dot(Eq.directions[2], qq)) * Eq.extendSize.z;
-         gq.min = Yq - Oq, gq.max = Yq + Oq
-       },
-       uq = (qq, Eq, gq) => (cq(qq, Eq, xq), cq(qq, gq, Aq), !(xq.min > Aq.max || Aq.min > xq.max));
-     class Bq {
- ... (66 more removed lines; see GitHub link above)
+ 
+     function oC(CC, zC, ZC, QC, wC, oC, qC, FC) {
+       const WC = new Array(QC),
+         NC = new Array(QC);
+       if (CC instanceof Array) {
+         let wC = zC / 4;
+         const bC = ZC / 4;
+         for (let zC = 0; zC < oC; zC += QC) {
+           for (let zC = 0; zC < QC; zC++) WC[zC] = NC[zC] = CC[wC + zC];
+           FC(NC, zC);
+           for (let zC = 0; zC < QC; zC++) WC[zC] !== NC[zC] && (CC[wC + zC] = NC[zC]);
+           wC += bC
+         }
+       } else {
+         const MC = ArrayBuffer.isView(CC) ? new DataView(CC.buffer, CC.byteOffset, CC.byteLength) : new DataView(CC),
+           gC = fC(wC);
+ ... (6 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L306-L307` → after: `L121-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L121-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L121-L141) · [Before (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L306-L307)

```diff
-     function Oq(qq) {
-       -1 === qq.indexOf("vClipPlane") && qq.push("vClipPlane"), -1 === qq.indexOf("vClipPlane2") && qq.push("vClipPlane2"), -1 === qq.indexOf("vClipPlane3") && qq.push("vClipPlane3"), -1 === qq.indexOf("vClipPlane4") && qq.push("vClipPlane4"), -1 === qq.indexOf("vClipPlane5") &&  … [truncated]
+     function qC(CC, zC, ZC, wC, bC, nC, qC, FC) {
+       const WC = zC * fC(ZC),
+         NC = qC * zC;
+       if (5126 !== ZC || bC !== WC) {
+         const QC = new Float32Array(NC);
+         return oC(CC, wC, bC, zC, ZC, NC, nC, ((CC, ZC) => {
+           for (let wC = 0; wC < zC; wC++) QC[ZC + wC] = CC[wC]
+         })), QC
+       }
+       if (!(CC instanceof Array || CC instanceof Float32Array) || 0 !== wC || CC.length !== NC) {
+         if (CC instanceof Array) {
+           const zC = wC / 4;
+           return CC.slice(zC, zC + NC)
+         }
+         if (ArrayBuffer.isView(CC)) {
+           const zC = CC.byteOffset + wC;
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L310-L317` → after: `L144-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L144-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L144-L195) · [Before (L310-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L310-L317)

```diff
-     function mq(qq, Eq, gq) {
-       const Yq = !!(qq.clipPlane ?? Eq.clipPlane),
-         lq = !!(qq.clipPlane2 ?? Eq.clipPlane2),
-         Oq = !!(qq.clipPlane3 ?? Eq.clipPlane3),
-         mq = !!(qq.clipPlane4 ?? Eq.clipPlane4),
-         xq = !!(qq.clipPlane5 ?? Eq.clipPlane5),
-         Aq = !!(qq.clipPlane6 ?? Eq.clipPlane6);
-       Yq && gq.push("#define CLIPPLANE"), lq && gq.push("#define CLIPPLANE2"), Oq && gq.push("#define CLIPPLANE3"), mq && gq.push("#define CLIPPLANE4"), xq && gq.push("#define CLIPPLANE5"), Aq && gq.push("#define CLIPPLANE6")
+     function FC(CC, zC, ZC, wC, bC, nC, qC) {
+       const FC = fC(ZC),
+         WC = function(CC) {
+           switch (CC) {
+             case 5120:
+               return Int8Array;
+             case 5121:
+               return Uint8Array;
+             case 5122:
+               return Int16Array;
+             case 5123:
+             case 5131:
+               return Uint16Array;
+             case 5124:
+               return Int32Array;
+             case 5125:
+ ... (36 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L320-L328` → after: `L198-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L198-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L198-L216) · [Before (L320-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L320-L328)

```diff
-     function xq(qq, Eq, gq) {
-       let Yq = !1;
-       const lq = !!(qq.clipPlane ?? Eq.clipPlane),
-         Oq = !!(qq.clipPlane2 ?? Eq.clipPlane2),
-         mq = !!(qq.clipPlane3 ?? Eq.clipPlane3),
-         xq = !!(qq.clipPlane4 ?? Eq.clipPlane4),
-         Aq = !!(qq.clipPlane5 ?? Eq.clipPlane5),
-         cq = !!(qq.clipPlane6 ?? Eq.clipPlane6);
-       return gq.CLIPPLANE !== lq && (gq.CLIPPLANE = lq, Yq = !0), gq.CLIPPLANE2 !== Oq && (gq.CLIPPLANE2 = Oq, Yq = !0), gq.CLIPPLANE3 !== mq && (gq.CLIPPLANE3 = mq, Yq = !0), gq.CLIPPLANE4 !== xq && (gq.CLIPPLANE4 = xq, Yq = !0), gq.CLIPPLANE5 !== Aq && (gq.CLIPPLANE5 = Aq, Yq = … [truncated]
+     function WC(CC, zC, ZC, wC, bC, nC, qC, FC) {
+       const WC = zC * fC(ZC),
+         NC = qC * zC;
+       if (FC.length !== NC) throw new Error("Output length is not valid");
+       if (5126 === ZC && bC === WC)
+         if (CC instanceof Array) {
+           const zC = wC / 4;
+           FC.set(CC, zC)
+         } else if (ArrayBuffer.isView(CC)) {
+         const zC = CC.byteOffset + wC;
+         if (0 !== (3 & zC)) return QC.c.Warn("Float array must be aligned to 4-bytes border"), void FC.set(new Float32Array(CC.buffer.slice(zC, zC + NC * Float32Array.BYTES_PER_ELEMENT)));
+         const ZC = new Float32Array(CC.buffer, zC, NC);
+         FC.set(ZC)
+       } else {
+         const zC = new Float32Array(CC, wC, NC);
+         FC.set(zC)
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L331-L333` → after: `L219-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L219-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L219-L227) · [Before (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L331-L333)

```diff
-     function Aq(qq, Eq, gq) {
-       let Yq = Eq.clipPlane ?? gq.clipPlane;
-       cq(qq, "vClipPlane", Yq), Yq = Eq.clipPlane2 ?? gq.clipPlane2, cq(qq, "vClipPlane2", Yq), Yq = Eq.clipPlane3 ?? gq.clipPlane3, cq(qq, "vClipPlane3", Yq), Yq = Eq.clipPlane4 ?? gq.clipPlane4, cq(qq, "vClipPlane4", Yq), Yq = Eq.clipPlane5 ?? gq.clipPlane5, cq(qq, "vClipPlane5 … [truncated]
+     function NC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+         QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       if (Array.isArray(CC)) {
+         for (let wC = 0; wC < zC; wC++)
+           if (CC[ZC + wC] - QC > 65535) return !0;
+         return !1
+       }
+       return 4 === CC.BYTES_PER_ELEMENT
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L336-L340` → after: `L230-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L230-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L230-L234) · [Before (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L336-L340)

```diff
-     function cq(qq, Eq, gq) {
-       if (gq) {
-         const Oq = Yq.e.ZJ()?.floatingOriginOffset || lq.q.ZeroReadOnly;
-         qq.setFloat4(Eq, gq.normal.x, gq.normal.y, gq.normal.z, gq.d + lq.q.Dot(gq.normal, Oq))
-       }
+     function MC(CC) {
+       const zC = CC.buffer;
+       if (zC instanceof ArrayBuffer) return CC;
+       const ZC = new ArrayBuffer(CC.byteLength);
+       return new Uint8Array(ZC).set(new Uint8Array(zC, CC.byteOffset, CC.byteLength)), ZC
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L343` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L237) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L343)

```diff
-   40104: (qq, Eq, gq) => {
+   39703: (CC, zC, ZC) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L345` → after: `L239-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L239-L243) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L345)

```diff
-       c: () => Yq
+       e: () => iC,
+       f: () => JC,
+       n: () => IC,
+       j: () => mC,
+       o: () => HC
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L349-L379` → after: `L247-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L247-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L247-L269) · [Before (L349-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L349-L379)

```diff
-         this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
-       }
-       unBindMesh() {
-         this._mesh = null
-       }
-       addFallback(qq, Eq) {
-         this._defines[qq] || (qq < this._currentRank && (this._currentRank = qq), qq > this._maxRank && (this._maxRank = qq), this._defines[qq] = new Array), this._defines[qq].push(Eq)
-       }
-       addCPUSkinningFallback(qq, Eq) {
-         this._mesh = Eq, qq < this._currentRank && (this._currentRank = qq), qq > this._maxRank && (this._maxRank = qq)
-       }
-       get hasMoreFallbacks() {
-         return this._currentRank <= this._maxRank
-       }
-       reduce(qq, Eq) {
-         if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
- ... (15 more removed lines; see GitHub link above)
+         this.children = []
+       }
+       isValid(CC) {
+         return !0
+       }
+       process(CC, zC, ZC) {
+         let QC = "";
+         if (this.line) {
+           let ZC = this.line;
+           const wC = zC.processor;
+           if (wC) {
+             wC.lineProcessor && (ZC = wC.lineProcessor(ZC, zC.isFragment, zC.processingContext));
+             const QC = zC.processor?.attributeKeywordName ?? "attribute",
+               bC = zC.isFragment && zC.processor?.varyingFragmentKeywordName ? zC.processor?.varyingFragmentKeywordName : !zC.isFragment && zC.processor?.varyingVertexKeywordName ? zC.processor?.varyingVertexKeywordName : "varying";
+             if (!zC.isFragment && wC.attributeProcessor && this.line.startsWith(QC)) ZC = wC.attributeProcessor(this.line, CC, zC.processingContext);
+             else if (wC.varyingProcessor && (wC.varyingCheck?.(this.line, zC.isFragment) || !wC.varyingCheck && this.line.startsWith(bC))) ZC = wC.varyingProcessor(this.line, zC.isFragment, CC, zC.processingContext);
+ ... (7 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L381-L385` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L271) · [Before (L381-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L381-L385)

```diff
-         } else {
-           const Eq = this._defines[this._currentRank];
-           if (Eq)
-             for (let gq = 0; gq < Eq.length; gq++) qq = qq.replace("#define " + Eq[gq], "");
-           this._currentRank++
+           QC += ZC + "\n"
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L387` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L273-L274) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L387)

```diff
-         return qq
+         for (const wC of this.children) QC += wC.process(CC, zC, ZC);
+         return this.additionalDefineKey && (CC[this.additionalDefineKey] = this.additionalDefineValue || "true", ZC[this.additionalDefineKey] = CC[this.additionalDefineKey]), QC
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L390-L972` → after: `L277-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L277-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L277-L293) · [Before (L390-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L390-L972)

```diff
-   },
-   40037: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Hq
-     });
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(39845),
-       mq = gq(37156),
-       xq = gq(37153),
-       Aq = gq(40040),
-       cq = gq(39870),
-       uq = gq(38653),
-       Bq = gq(37767),
-       Wq = gq(40074),
-       Nq = gq(39779);
- ... (567 more removed lines; see GitHub link above)
+     class wC {
+       constructor() {
+         this._lines = []
+       }
+       get currentLine() {
+         return this._lines[this.lineIndex]
+       }
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
+       }
+       set lines(CC) {
+         this._lines.length = 0;
+         for (const zC of CC) {
+           if (!zC || "\r" === zC) continue;
+           if ("#" === zC[0]) {
+             this._lines.push(zC);
+ ... (1 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L974-L975` → after: `L295-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L295-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L295-L299) · [Before (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L974-L975)

```diff
-           if (this.disableColorWrite) {
-             this._scene.Ba().setColorWrite(this._cachedColorWriteState)
+           const CC = zC.trim();
+           if (!CC) continue;
+           if (CC.startsWith("//")) {
+             this._lines.push(zC);
+             continue
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L977-L1003` → after: `L301-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L301-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L301-L308) · [Before (L977-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L977-L1003)

```diff
-         }
-         getAnimatables() {
-           return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
-         }
-         getActiveTextures() {
-           return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
-         }
-         hasTexture(qq) {
-           return this._eventInfo.hasTexture = !1, this._eventInfo.texture = qq, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
-         }
-         clone(qq) {
-           return null
-         }
-         _clonePlugins(Eq, gq) {
-           const Yq = {};
-           if (this._serializePlugins(Yq), qq._ParsePlugins(Yq, Eq, this._scene, gq), this.pluginManager)
- ... (11 more removed lines; see GitHub link above)
+           const ZC = CC.indexOf(";");
+           if (-1 === ZC) this._lines.push(CC);
+           else if (ZC === CC.length - 1) CC.length > 1 && this._lines.push(CC);
+           else {
+             const CC = zC.split(";");
+             for (let zC = 0; zC < CC.length; zC++) {
+               let ZC = CC[zC];
+               ZC && (ZC = ZC.trim(), ZC && this._lines.push(ZC + (zC !== CC.length - 1 ? ";" : "")))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1625-L1698` → after: `L313-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L313-L320) · [Before (L1625-L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1625-L1698)

```diff
-       static get BumpTextureEnabled() {
-         return this._BumpTextureEnabled
-       }
-       static set BumpTextureEnabled(qq) {
-         this._BumpTextureEnabled !== qq && (this._BumpTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
-       }
-       static get LightmapTextureEnabled() {
-         return this._LightmapTextureEnabled
-       }
-       static set LightmapTextureEnabled(qq) {
-         this._LightmapTextureEnabled !== qq && (this._LightmapTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
-       }
-       static get RefractionTextureEnabled() {
-         return this._RefractionTextureEnabled
-       }
-       static set RefractionTextureEnabled(qq) {
- ... (58 more removed lines; see GitHub link above)
+     }
+     class bC extends QC {
+       process(CC, zC, ZC) {
+         for (let QC = 0; QC < this.children.length; QC++) {
+           const wC = this.children[QC];
+           if (wC.isValid(CC)) return wC.process(CC, zC, ZC)
+         }
+         return ""
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1700-L1701` → after: `L322-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L322-L325) · [Before (L1700-L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1700-L1701)

```diff
-       static set TranslucencyIntensityTextureEnabled(qq) {
-         this._TranslucencyIntensityTextureEnabled !== qq && (this._TranslucencyIntensityTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+     }
+     class nC extends QC {
+       isValid(CC) {
+         return this.testExpression.isTrue(CC)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1703-L1704` → after: `L327-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L327-L330) · [Before (L1703-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1703-L1704)

```diff
-       static get TranslucencyColorTextureEnabled() {
-         return this._TranslucencyColorTextureEnabled
+     }
+     class fC {
+       isTrue(CC) {
+         return !0
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1706-L1707` → after: `L332-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L332-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L332-L379) · [Before (L1706-L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1706-L1707)

```diff
-       static set TranslucencyColorTextureEnabled(qq) {
-         this._TranslucencyColorTextureEnabled !== qq && (this._TranslucencyColorTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+       static postfixToInfix(CC) {
+         const zC = [];
+         for (const ZC of CC)
+           if (void 0 === fC._OperatorPriority[ZC]) zC.push(ZC);
+           else {
+             const CC = zC[zC.length - 1],
+               QC = zC[zC.length - 2];
+             zC.length -= 2, zC.push(`(${QC}${ZC}${CC})`)
+           } return zC[zC.length - 1]
+       }
+       static infixToPostfix(CC) {
+         const zC = fC._InfixToPostfixCache.get(CC);
+         if (zC) return zC.accessTime = Date.now(), zC.result;
+         if (!CC.includes("&&") && !CC.includes("||") && !CC.includes(")") && !CC.includes("(")) return [CC];
+         const ZC = [];
+         let QC = -1;
+ ... (32 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1709-L1710` → after: `L381-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L381-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L381-L391) · [Before (L1709-L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1709-L1710)

```diff
-       static get IridescenceTextureEnabled() {
-         return this._IridescenceTextureEnabled
+     }
+     fC.InfixToPostfixCacheLimitSize = 5e4, fC.InfixToPostfixCacheCleanupSize = 25e3, fC._InfixToPostfixCache = new Map, fC._OperatorPriority = {
+       ")": 0,
+       "(": 1,
+       "||": 2,
+       "&&": 3
+     }, fC._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
+     class oC extends fC {
+       constructor(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         super(), this.define = CC, this.not = zC
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1712-L1713` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L393-L395) · [Before (L1712-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1712-L1713)

```diff
-       static set IridescenceTextureEnabled(qq) {
-         this._IridescenceTextureEnabled !== qq && (this._IridescenceTextureEnabled = qq, Yq.b.MarkAllMaterialsAsDirty(1))
+       isTrue(CC) {
+         let zC = void 0 !== CC[this.define];
+         return this.not && (zC = !zC), zC
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1716-L1759` → after: `L398-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L398-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L398-L400) · [Before (L1716-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1716-L1759)

```diff
-     lq._DiffuseTextureEnabled = !0, lq._BaseWeightTextureEnabled = !0, lq._BaseDiffuseRoughnessTextureEnabled = !0, lq._DetailTextureEnabled = !0, lq._DecalMapEnabled = !0, lq._AmbientTextureEnabled = !0, lq._OpacityTextureEnabled = !0, lq._ReflectionTextureEnabled = !0, lq._Emis … [truncated]
-   },
-   40079: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       D: () => Qq,
-       G: () => nq,
-       J: () => bq,
-       M: () => Nq,
-       Q: () => Wq,
-       R: () => kq,
-       V: () => Sq,
-       W: () => Tq,
-       _: () => Mq,
-       b: () => fq,
-       bb: () => oq,
-       c: () => yq,
- ... (28 more removed lines; see GitHub link above)
+     class qC extends fC {
+       isTrue(CC) {
+         return this.leftOperand.isTrue(CC) || this.rightOperand.isTrue(CC)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1762-L1783` → after: `L403-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L403-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L403-L406) · [Before (L1762-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1762-L1783)

```diff
-     const cq = {
-         r: 0,
-         g: 0,
-         b: 0
-       },
-       uq = {
-         NUM_MORPH_INFLUENCERS: 0,
-         NORMAL: !1,
-         TANGENT: !1,
-         UV: !1,
-         UV2: !1,
-         COLOR: !1
-       };
- 
-     function Bq(qq, Eq, gq) {
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
- ... (6 more removed lines; see GitHub link above)
+     class FC extends fC {
+       isTrue(CC) {
+         return this.leftOperand.isTrue(CC) && this.rightOperand.isTrue(CC)
+       }
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1785-L1799` → after: `L408-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L408-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L408-L439) · [Before (L1785-L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1785-L1799)

```diff
- 
-     function Nq(qq, Eq, gq) {
-       let Oq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const mq = gq.NUM_MORPH_INFLUENCERS;
-       if (mq > 0 && lq.b.LastCreatedEngine) {
-         const xq = lq.b.LastCreatedEngine.getCaps().maxVertexAttribs,
-           Aq = Eq.morphTargetManager;
-         if (Aq?.isUsingTextureForTargets) return;
-         const cq = Aq && Aq.supportsPositions && Oq,
-           uq = Aq && Aq.supportsNormals && gq.NORMAL,
-           Bq = Aq && Aq.supportsTangents && gq.TANGENT,
-           Wq = Aq && Aq.supportsUVs && gq.UV1,
-           Nq = Aq && Aq.supportsUV2s && gq.UV2,
-           aq = Aq && Aq.supportsColors && gq.VERTEXCOLOR;
-         for (let gq = 0; gq < mq; gq++) cq && qq.push("position" + gq), uq && qq.push("normal" + gq), Bq && qq.push("tangent" + gq), Wq && qq.push("uv_" + gq), Nq && qq.push("uv2_" + gq), aq && qq.push("color" + gq), qq.length > xq && Yq.b.Error("Cannot add more vertex attributes … [truncated]
+     class WC extends fC {
+       constructor(CC, zC, ZC) {
+         super(), this.define = CC, this.operand = zC, this.testValue = ZC
+       }
+       toString() {
+         return `${this.define} ${this.operand} ${this.testValue}`
+       }
+       isTrue(CC) {
+         let zC = !1;
+         const ZC = parseInt(void 0 != CC[this.define] ? CC[this.define] : this.define),
+           QC = parseInt(void 0 != CC[this.testValue] ? CC[this.testValue] : this.testValue);
+         if (isNaN(ZC) || isNaN(QC)) return !1;
+         switch (this.operand) {
+           case ">":
+             zC = ZC > QC;
+             break;
+ ... (16 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1804-L1814` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L454) · [Before (L1804-L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1804-L1814)

```diff
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       qq.push("world0"), qq.push("world1"), qq.push("world2"), qq.push("world3"), Eq && (qq.push("previousWorld0"), qq.push("previousWorld1"), qq.push("previousWorld2"), qq.push("previousWorld3"))
-     }
- 
-     function Vq(qq, Eq) {
-       const gq = qq.morphTargetManager;
-       qq && gq && Eq.setFloatArray("morphTargetInfluences", gq.influences)
-     }
- 
-     function dq(qq, Eq) {
-       Eq.bindToEffect(qq, "Scene")
+       CC.processor && CC.processor.initializeShaders && CC.processor.initializeShaders(CC.processingContext)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1818-L1845` → after: `L458-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L458-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L458-L479) · [Before (L1818-L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1818-L1845)

```diff
-       let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-         Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         Aq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         cq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         uq = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         Bq = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
-         Wq = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
-       if (qq.texturesEnabled && lq && xq.c.ReflectionTextureEnabled) {
-         if (gq.Eqq("reflectionMatrix", lq.getReflectionTextureMatrix()), gq.updateFloat2("vReflectionInfos", lq.level * qq.iblIntensity, Wq), Aq && lq.boundingBoxSize) {
-           const qq = lq;
-           gq.updateVector3("vReflectionPosition", qq.boundingBoxPosition), gq.updateVector3("vReflectionSize", qq.boundingBoxSize)
-         }
-         if (Oq) {
-           const qq = lq.getSize().width;
-           gq.updateFloat2("vReflectionFilteringInfo", qq, Math.log2(qq))
- ... (12 more removed lines; see GitHub link above)
+       zC.processor?.preProcessShaderCode && (CC = zC.processor.preProcessShaderCode(CC, zC.isFragment)), mC(CC, zC, (CC => {
+         zC.processCodeAfterIncludes && (CC = zC.processCodeAfterIncludes(zC.isFragment ? "fragment" : "vertex", CC, zC.defines));
+         const wC = function(CC, zC, ZC) {
+           let QC = function(CC, zC) {
+             if (zC.processor?.noPrecision) return CC;
+             const ZC = zC.shouldUseHighPrecisionShader; - 1 === CC.indexOf("precision highp float") ? CC = ZC ? "precision highp float;\n" + CC : "precision mediump float;\n" + CC : ZC || (CC = CC.replace("precision highp float", "precision mediump float"));
+             return CC
+           }(CC, zC);
+           if (!zC.processor) return QC;
+           if (0 === zC.processor.shaderLanguage && -1 !== QC.indexOf("#version 3") && (QC = QC.replace("#version 300 es", ""), !zC.processor.parseGLES3)) return QC;
+           const wC = zC.defines,
+             bC = dC(zC, ZC);
+           zC.processor.preProcessor && (QC = zC.processor.preProcessor(QC, wC, bC, zC.isFragment, zC.processingContext));
+           const nC = {};
+           QC = YC(QC, bC, zC, nC), zC.processor.postProcessor && (QC = zC.processor.postProcessor(QC, wC, zC.isFragment, zC.processingContext, ZC ? {
+             drawBuffersExtensionDisabled: !ZC.getCaps().drawBuffersExtension
+ ... (6 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1849-L1854` → after: `L483-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L483-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L483-L485) · [Before (L1849-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1849-L1854)

```diff
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       if (Yq && xq.c.ReflectionTextureEnabled) {
-         Eq.LODBASEDMICROSFURACE ? gq.setTexture("reflectionSampler", Yq) : (gq.setTexture("reflectionSampler", Yq._lodTextureMid || Yq), gq.setTexture("reflectionSamplerLow", Yq._lodTextureLow || Yq), gq.setTexture("reflectionSamplerHigh", Yq._lodTextureHigh || Yq)), Eq.USEIRRADI … [truncated]
-         const Oq = qq.iblCdfGenerator;
-         lq && Oq && gq.setTexture("icdfSampler", Oq.getIcdfTexture())
+       return ZC.processor && ZC.processor.finalizeShaders ? ZC.processor.finalizeShaders(CC, zC, ZC.processingContext) : {
+         vertexCode: CC,
+         fragmentCode: zC
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1858-L1859` → after: `L489-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L489-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L489-L500) · [Before (L1858-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1858-L1859)

```diff
-     function oq(qq, Eq, gq) {
-       Eq._needUVs = !0, Eq[gq] = !0, qq.optimizeUVAllocation && qq.getTextureMatrix().isIdentityAs3x2() ? (Eq[gq + "DIRECTUV"] = qq.coordinatesIndex + 1, Eq["MAINUV" + (qq.coordinatesIndex + 1)] = !0) : Eq[gq + "DIRECTUV"] = 0
+     function vC(CC) {
+       const zC = /defined\((.+)\)/.exec(CC);
+       if (zC && zC.length) return new oC(zC[1].trim(), "!" === CC[0]);
+       const ZC = ["==", "!=", ">=", "<=", "<", ">"];
+       let QC = "",
+         wC = 0;
+       for (QC of ZC)
+         if (wC = CC.indexOf(QC), wC > -1) break;
+       if (-1 === wC) return new oC(CC);
+       const bC = CC.substring(0, wC).trim(),
+         nC = CC.substring(wC + QC.length).trim();
+       return new WC(bC, QC, nC)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1862-L1864` → after: `L503-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L503-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L503-L522) · [Before (L1862-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1862-L1864)

```diff
-     function Pq(qq, Eq, gq) {
-       const Yq = qq.getTextureMatrix();
-       Eq.Eqq(gq + "Matrix", Yq)
+     function eC(CC, zC) {
+       const ZC = new nC,
+         QC = CC.substring(0, zC);
+       let wC = CC.substring(zC);
+       return wC = wC.substring(0, (wC.indexOf("//") + 1 || wC.length + 1) - 1).trim(), ZC.testExpression = "#ifdef" === QC ? new oC(wC) : "#ifndef" === QC ? new oC(wC, !0) : function(CC) {
+         CC = CC.replace(gC, "defined[$1]");
+         const zC = fC.infixToPostfix(CC),
+           ZC = [];
+         for (const wC of zC)
+           if ("||" !== wC && "&&" !== wC) ZC.push(wC);
+           else if (ZC.length >= 2) {
+           let CC = ZC[ZC.length - 1],
+             zC = ZC[ZC.length - 2];
+           ZC.length -= 2;
+           const QC = "&&" == wC ? new FC : new qC;
+           "string" === typeof CC && (CC = CC.replace(SC, "defined($1)")), "string" === typeof zC && (zC = zC.replace(SC, "defined($1)")), QC.leftOperand = "string" === typeof zC ? vC(zC) : zC, QC.rightOperand = "string" === typeof CC ? vC(CC) : CC, ZC.push(QC)
+ ... (4 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1867-L1868` → after: `L525-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L525-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L525-L538) · [Before (L1867-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1867-L1868)

```diff
-     function Qq(qq, Eq, gq) {
-       gq.BAKED_VERTEX_ANIMATION_TEXTURE && gq.INSTANCES && qq.push("bakedVertexAnimationSettingsInstanced")
+     function hC(CC, zC, ZC, wC) {
+       let bC;
+       for (; KC(CC, ZC, wC);) {
+         bC = CC.currentLine;
+         const nC = bC.substring(0, 5).toLowerCase();
+         if ("#else" === nC) {
+           const ZC = new QC;
+           return zC.children.push(ZC), void KC(CC, ZC, wC)
+         }
+         if ("#elif" === nC) {
+           const CC = eC(bC, 5);
+           zC.children.push(CC), ZC = CC
+         }
+       }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1872-L1880` → after: `L542-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L542-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L542-L581) · [Before (L1872-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1872-L1880)

```diff
-       var Yq;
-       if (Eq && qq && (qq.computeBonesUsingShaders && Eq._bonesComputationForcedToCPU && (qq.computeBonesUsingShaders = !1), qq.useBones && qq.computeBonesUsingShaders && qq.skeleton)) {
-         const lq = qq.skeleton;
-         if (lq.isUsingTextureForMatrices && Eq.getUniformIndex("boneTextureInfo") > -1) {
-           const gq = lq.getTransformMatrixTexture(qq);
-           Eq.setTexture("boneSampler", gq), Eq.setFloat2("boneTextureInfo", lq._textureWidth, lq._textureHeight)
-         } else {
-           const Oq = lq.getTransformMatrices(qq);
-           Oq && (Eq.setMatrices("mBones", Oq), gq && qq.ZJ().prePassRenderer && qq.ZJ().prePassRenderer.getIndex(2) && (gq.previousBones[qq.uniqueId] || (gq.previousBones[qq.uniqueId] = Oq.slice()), Eq.setMatrices("mPreviousBones", gq.previousBones[qq.uniqueId]), Yq = Oq, gq.prev … [truncated]
+       for (; CC.canRead;) {
+         CC.lineIndex++;
+         const wC = CC.currentLine;
+         if (wC.indexOf("#") >= 0) {
+           const QC = xC.exec(wC);
+           if (QC && QC.length) {
+             switch (QC[0]) {
+               case "#ifdef": {
+                 const QC = new bC;
+                 zC.children.push(QC);
+                 const nC = eC(wC, 6);
+                 QC.children.push(nC), hC(CC, QC, nC, ZC);
+                 break
+               }
+               case "#else":
+               case "#elif":
+ ... (24 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1885-L1887` → after: `L587-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L587-L590) · [Before (L1885-L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1885-L1887)

```diff
-     function tq(qq, Eq, gq, Yq, lq) {
-       let Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-       qq._bindLight(Eq, gq, Yq, lq, Oq)
+     function YC(CC, zC, ZC, bC) {
+       const nC = new QC,
+         fC = new wC;
+       return fC.lineIndex = -1, fC.lines = CC.split("\n"), KC(fC, nC, bC), nC.process(zC, ZC, bC)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1892-L1896` → after: `L593-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L593-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L593-L598) · [Before (L1892-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1892-L1896)

```diff
-     function hq(qq, Eq, gq, Yq) {
-       let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
-       const Oq = Math.min(Eq.lightSources.length, lq);
-       for (let mq = 0; mq < Oq; mq++) {
-         tq(Eq.lightSources[mq], mq, qq, gq, "boolean" === typeof Yq ? Yq : Yq.SPECULARTERM, Eq.receiveShadows)
+     function dC(CC, zC) {
+       const ZC = CC.defines,
+         QC = {};
+       for (const wC of ZC) {
+         const CC = wC.replace("#define", "").replace(";", "").trim().split(" ");
+         QC[CC[0]] = CC.length > 1 ? CC[1] : ""
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1900-L1901` → after: `L603-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L603-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L603-L647) · [Before (L1900-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1900-L1901)

```diff
-     function nq(qq, Eq, gq, Yq) {
-       gq.NUM_BONE_INFLUENCERS > 0 && (Yq.addCPUSkinningFallback(0, Eq), qq.push("matricesIndices"), qq.push("matricesWeights"), gq.NUM_BONE_INFLUENCERS > 4 && (qq.push("matricesIndicesExtra"), qq.push("matricesWeightsExtra")))
+     function mC(CC, zC, ZC) {
+       let QC;
+       for (AC.length = 0; null !== (QC = pC.exec(CC));) AC.push(QC);
+       let wC = [CC],
+         bC = !1;
+       for (const fC of AC) {
+         let CC = fC[1];
+         if (-1 !== CC.indexOf("__decl__") && (CC = CC.replace(PC, ""), zC.supportsUniformBuffers && (CC = CC.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), CC += "Declaration"), !zC.includesShadersStore[CC]) {
+           const QC = zC.shadersRepository + "ShadersInclude/" + CC + ".fx";
+           return void HC.loadFile(QC, (QC => {
+             zC.includesShadersStore[CC] = QC, mC(wC.join(""), zC, ZC)
+           }))
+         } {
+           let ZC = zC.includesShadersStore[CC];
+           if (fC[2]) {
+             const CC = fC[3].split(",");
+ ... (29 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1903-L1905` → after: `L649-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L649-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L649-L652) · [Before (L1903-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1903-L1905)

```diff
- 
-     function bq(qq, Eq) {
-       (Eq.INSTANCES || Eq.THIN_INSTANCES) && aq(qq, !!Eq.PREPASS_VELOCITY), Eq.INSTANCESCOLOR && qq.push("instanceColor")
+     const HC = {
+       loadFile: (CC, zC, ZC, QC, wC, bC) => {
+         throw (0, NC.i)("FileTools")
+       }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1909-L1913` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L667) · [Before (L1909-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1909-L1913)

```diff
-       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
-         Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         lq = 0;
-       for (let Oq = 0; Oq < gq && qq["LIGHT" + Oq]; Oq++) Oq > 0 && (lq = Yq + Oq, Eq.addFallback(lq, "LIGHT" + Oq)), qq.SHADOWS || (qq["SHADOW" + Oq] && Eq.addFallback(Yq, "SHADOW" + Oq), qq["SHADOWPCF" + Oq] && Eq.addFallback(Yq, "SHADOWPCF" + Oq), qq["SHADOWPCSS" + Oq] && Eq.a … [truncated]
-       return lq
+       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (zC ? zC + "\n" : "") + CC
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1917-L1938` → after: `L671-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L671-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L671-L673) · [Before (L1917-L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1917-L1938)

```diff
-       let xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         Aq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         cq = arguments.length > 9 ? arguments[9] : void 0,
-         uq = arguments.length > 10 ? arguments[10] : void 0;
-       if (mq._areMiscDirty) {
-         mq.LOGARITHMICDEPTH = gq, mq.POINTSIZE = Yq, mq.FOG = lq && function(qq, Eq) {
-           return Eq.fogEnabled && qq.applyFog && 0 !== Eq.fogMode
-         }(qq, Eq), mq.NONUNIFORMSCALING = qq.nonUniformScaling, mq.ALPHATEST = Oq, mq.DECAL_AFTER_DETAIL = xq, mq.USE_VERTEX_PULLING = Aq, mq.RIGHT_HANDED = Eq.useRightHandedSystem;
-         const Bq = Aq ? cq?.geometry?.getIndexBuffer() : null,
-           Wq = !!cq && cq.isUnIndexed;
-         mq.VERTEX_PULLING_USE_INDEX_BUFFER = !!Bq && !Wq, mq.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Bq || Wq) && Bq.is32Bits, mq.VERTEXOUTPUT_INVARIANT = !!uq
-       }
-     }
- 
-     function fq(qq, Eq, gq) {
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
- ... (6 more removed lines; see GitHub link above)
+       const qC = oC || wC.loadFile;
+       if (!qC) throw (0, QC.i)("FileTools");
+       return qC(CC, zC, ZC, bC, nC, fC)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L1942-L2033` → after: `L677-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L677-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L677-L680) · [Before (L1942-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L1942-L2033)

```diff
-       let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
-         mq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       if (!gq._areLightsDirty) return gq._needNormals;
-       const xq = Oq;
-       Oq = function(qq, Eq) {
-         const gq = qq.Ba().getCaps().maxUniformBuffersPerShaderStage;
-         if (null == gq) return Eq;
-         const Yq = Math.max(gq - rq, 1);
-         return Math.min(Eq, Yq)
-       }(qq, Oq);
-       let Aq = 0;
-       const cq = {
-         needNormals: gq._needNormals,
-         needRebuild: !1,
-         lightmapMode: !1,
-         shadowEnabled: !1,
- ... (76 more removed lines; see GitHub link above)
+       if (CC) return zC ? CC.IS_NDC_HALF_ZRANGE = "" : delete CC.IS_NDC_HALF_ZRANGE, ZC ? CC.USE_REVERSE_DEPTHBUFFER = "" : delete CC.USE_REVERSE_DEPTHBUFFER, void(QC ? CC.USE_EXACT_SRGB_CONVERSIONS = "" : delete CC.USE_EXACT_SRGB_CONVERSIONS);
+       {
+         let CC = "";
+         return zC && (CC += "#define IS_NDC_HALF_ZRANGE"), ZC && (CC && (CC += "\n"), CC += "#define USE_REVERSE_DEPTHBUFFER"), QC && (CC && (CC += "\n"), CC += "#define USE_EXACT_SRGB_CONVERSIONS"), CC
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2038-L2052` → after: `L684-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L684-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L684-L727) · [Before (L2038-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2038-L2052)

```diff
-     function Sq(qq, Eq, gq, Yq, lq) {
-       let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-         xq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         Aq = function(qq, Eq) {
-           let gq = !1;
-           if (qq.activeCamera) {
-             const Yq = Eq.CAMERA_ORTHOGRAPHIC ? 1 : 0,
-               lq = Eq.CAMERA_PERSPECTIVE ? 1 : 0,
-               Oq = 1 === qq.activeCamera.mode ? 1 : 0,
-               mq = 0 === qq.activeCamera.mode ? 1 : 0;
-             (Yq ^ Oq || lq ^ mq) && (Eq.CAMERA_ORTHOGRAPHIC = 1 === Oq, Eq.CAMERA_PERSPECTIVE = 1 === mq, gq = !0)
-           }
-           return gq
-         }(qq, Yq);
-       !1 !== Oq && (Aq = (0, mq.l)(gq, qq, Yq)), Yq.DEPTHPREPASS !== !Eq.getColorWrite() && (Yq.DEPTHPREPASS = !Yq.DEPTHPREPASS, Aq = !0), Yq.INSTANCES !== lq && (Yq.INSTANCES = lq, Aq = !0), Yq.THIN_INSTANCES !== xq && (Yq.THIN_INSTANCES = xq, Aq = !0), Aq && Yq.markAsUnprocesse … [truncated]
+     function oC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         QC = arguments.length > 3 ? arguments[3] : void 0;
+       switch (CC) {
+         case 3: {
+           const CC = new Int8Array(zC);
+           return QC && CC.set(new Int8Array(QC)), CC
+         }
+         case 0: {
+           const CC = new Uint8Array(zC);
+           return QC && CC.set(new Uint8Array(QC)), CC
+         }
+         case 4: {
+           const CC = "number" !== typeof zC ? new Int16Array(zC) : new Int16Array(ZC ? zC / 2 : zC);
+           return QC && CC.set(new Int16Array(QC)), CC
+         }
+ ... (28 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2054-L2057` → after: `L729-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L729-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L729-L737) · [Before (L2054-L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2054-L2057)

```diff
-     const pq = 40,
-       Gq = 64,
-       Lq = new WeakMap,
-       Jq = new WeakSet;
+   },
+   39694: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => qC,
+       d: () => FC,
+       f: () => oC,
+       i: () => wC
+     });
+     const QC = {};
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2059-L2103` → after: `L739-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L739-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L739-L740) · [Before (L2059-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2059-L2103)

```diff
-     function kq(qq, Eq, gq, lq) {
-       let Oq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         mq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-         xq = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       if (!Eq._areAttributesDirty && Eq._needNormals === Eq._normals && Eq._needUVs === Eq._uvs) return !1;
-       Eq._normals = Eq._needNormals, Eq._uvs = Eq._needUVs, Eq.NORMAL = Eq._needNormals && qq.isVerticesDataPresent("normal"), Eq._needNormals && qq.isVerticesDataPresent("tangent") && (Eq.TANGENT = !0);
-       for (let Yq = 1; Yq <= 6; ++Yq) Eq["UV" + Yq] = !!Eq._needUVs && qq.isVerticesDataPresent(`uv${1===Yq?"":Yq}`);
-       if (gq) {
-         const gq = qq.useVertexColors && qq.isVerticesDataPresent("color");
-         Eq.VERTEXCOLOR = gq, Eq.VERTEXALPHA = qq.hasVertexAlpha && gq && mq
-       }
-       return qq.isVerticesDataPresent("instanceColor") && (qq.olq || qq.hasThinInstances) && (Eq.INSTANCESCOLOR = !0), lq && function(qq, Eq) {
-         if (qq.useBones && qq.computeBonesUsingShaders && qq.skeleton) {
-           Eq.NUM_BONE_INFLUENCERS = qq.numBoneInfluencers;
-           const gq = void 0 !== Eq.BONETEXTURE;
-           if (qq.skeleton.isUsingTextureForMatrices && gq) Eq.BONETEXTURE = !0;
- ... (29 more removed lines; see GitHub link above)
+     function wC(CC) {
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !QC[CC]) return QC[CC] = !0, `${CC} needs to be imported before as it contains a side-effect required by your code.`
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2107-L2110` → after: `L747-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L747-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L747-L754) · [Before (L2107-L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2107-L2110)

```diff
-       if (qq.activeCamera) {
-         const gq = Eq.MULTIVIEW;
-         Eq.MULTIVIEW = null !== qq.activeCamera.outputRenderTarget && qq.activeCamera.outputRenderTarget.getViewCount() > 1, Eq.MULTIVIEW != gq && Eq.markAsUnprocessed()
-       }
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const QC = function() {
+         if ((ZC || nC) && 0 === fC) {
+           const ZC = `${CC}.${zC}`;
+           bC[ZC] || (bC[ZC] = !0, console.warn(`[Babylon.js] ${ZC}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
+         }
+       };
+       return QC.__isSideEffectStub = !0, QC
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2113-L2116` → after: `L757-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L757-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L757-L758) · [Before (L2113-L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2113-L2116)

```diff
-     function Uq(qq, Eq, gq) {
-       const Yq = Eq.ORDER_INDEPENDENT_TRANSPARENCY,
-         lq = Eq.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
-       Eq.ORDER_INDEPENDENT_TRANSPARENCY = qq.useOrderIndependentTransparency && gq, Eq.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !qq.Ba().getCaps().textureFloatLinearFiltering, Yq === Eq.ORDER_INDEPENDENT_TRANSPARENCY && lq === Eq.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || Eq.markAsU … [truncated]
+     function qC(CC) {
+       return !!CC && !CC.__isSideEffectStub
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2119-L2178` → after: `L761-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L761-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L761-L773) · [Before (L2119-L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2119-L2178)

```diff
-     function Fq(qq, Eq, gq) {
-       const Yq = Eq.PREPASS;
-       if (!Eq._arePrePassDirty) return;
-       const lq = [{
-         type: 1,
-         define: "PREPASS_POSITION",
-         index: "PREPASS_POSITION_INDEX"
-       }, {
-         type: 9,
-         define: "PREPASS_LOCAL_POSITION",
-         index: "PREPASS_LOCAL_POSITION_INDEX"
-       }, {
-         type: 2,
-         define: "PREPASS_VELOCITY",
-         index: "PREPASS_VELOCITY_INDEX"
-       }, {
- ... (44 more removed lines; see GitHub link above)
+     function FC(CC, zC) {
+       return {
+         get() {},
+         set(CC) {
+           Object.defineProperty(this, zC, {
+             value: CC,
+             writable: !0,
+             configurable: !0,
+             enumerable: !0
+           })
+         },
+         configurable: !0,
+         enumerable: !0
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2182-L2190` → after: `L776-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L776-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L776-L779) · [Before (L2182-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2182-L2190)

```diff
- 
-     function sq(qq, Eq, gq, Yq) {
-       let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-         Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         Aq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         cq = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
-       lq && lq.push("Light" + qq), Oq || (Eq.push("vLightData" + qq, "vLightDiffuse" + qq, "vLightSpecular" + qq, "vLightDirection" + qq, "vLightWidth" + qq, "vLightHeight" + qq, "vLightFalloff" + qq, "vLightGround" + qq, "vSliceData" + qq, "vSliceRanges" + qq, "lightMatrix" + qq … [truncated]
+   },
+   39680: (CC, zC, ZC) => {
+     function QC() {
+       return "undefined" !== typeof window
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2193-L2196` → after: `L782-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L782-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L782-L783) · [Before (L2193-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2193-L2196)

```diff
-     function Xq(qq, Eq, gq) {
-       const Yq = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
-       gq && Yq.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSpheri … [truncated]
-       Eq.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
+     function wC() {
+       return "undefined" !== typeof navigator
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2199-L2207` → after: `L786-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L786-L787) · [Before (L2199-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2199-L2207)

```diff
-     function wq(qq, Eq, gq) {
-       let Yq, lq, Oq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
-         mq = null;
-       if (qq.uniformsNames) {
-         const xq = qq;
-         Yq = xq.uniformsNames, lq = xq.uniformBuffersNames, Eq = xq.samplers, gq = xq.defines, Oq = xq.maxSimultaneousLights || 0, mq = xq.shaderLanguage ?? null
-       } else Yq = qq, Eq || (Eq = []);
-       for (let xq = 0; xq < Oq && gq["LIGHT" + xq]; xq++) sq(xq, Yq, Eq, gq["PROJECTEDLIGHTTEXTURE" + xq], lq, !1, gq["IESLIGHTTEXTURE" + xq], gq["CLUSTLIGHT" + xq], gq["RECTAREALIGHTEMISSIONTEXTURE" + xq], 1 === mq);
-       gq.NUM_MORPH_INFLUENCERS && (Yq.push("morphTargetInfluences"), Yq.push("morphTargetCount")), gq.BAKED_VERTEX_ANIMATION_TEXTURE && (Yq.push("bakedVertexAnimationSettings"), Yq.push("bakedVertexAnimationTextureSizeInverted"), Yq.push("bakedVertexAnimationTime"), Eq.push("bake … [truncated]
+     function bC() {
+       return "undefined" !== typeof document
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2211-L2216` → after: `L791-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L791-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L791-L794) · [Before (L2211-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2211-L2216)

```diff
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       qq.addUniform("vReflectionInfos", 2), qq.addUniform("reflectionMatrix", 16), Eq && qq.addUniform("vReflectionMicrosurfaceInfos", 3), gq && (qq.addUniform("vReflectionPosition", 3), qq.addUniform("vReflectionSize", 3)), Yq && (qq.addUniform("vReflectionFilteringInfo", 2), qq … [truncated]
+       let zC = "",
+         ZC = CC.firstChild;
+       for (; ZC;) 3 === ZC.nodeType && (zC += ZC.textContent), ZC = ZC.nextSibling;
+       return zC
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2219` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L803) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2219)

```diff
-   40096: (qq, Eq, gq) => {
+   39872: (CC, zC, ZC) => {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2221` → after: `L805-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L805-L807) · [Before (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2221)

```diff
-       b: () => Oq
+       d: () => QC,
+       f: () => wC,
+       j: () => bC
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2223-L2247` → after: `L809-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L809-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L809-L822) · [Before (L2223-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2223-L2247)

```diff
-     var Yq = gq(37139),
-       lq = gq(40037);
-     class Oq extends lq.e {
-       constructor(qq, Eq) {
-         let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-         super(qq, Eq, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Yq.e, this._storeEffectOnSubMeshes = gq
-       }
-       getEffect() {
-         return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
-       }
-       isReady(qq, Eq) {
-         return !!qq && (!this._storeEffectOnSubMeshes || (!qq.fn || 0 === qq.fn.length || this.isReadyForSubMesh(qq, qq.fn[0], Eq)))
-       }
-       _isReadyForSubMesh(qq) {
-         const Eq = qq.materialDefines;
-         return !(this.checkReadyOnEveryCall || !qq.effect || !Eq || Eq._renderId !== this.ZJ().getRenderId())
- ... (9 more removed lines; see GitHub link above)
+     class QC extends Error {}
+     QC._setPrototypeOf = Object.setPrototypeOf || ((CC, zC) => (CC.__proto__ = zC, CC));
+     const wC = {
+       MeshInvalidPositionsError: 0,
+       UnsupportedTextureError: 1e3,
+       GLTFLoaderUnexpectedMagicError: 2e3,
+       SceneLoaderError: 3e3,
+       LoadFileError: 4e3,
+       RequestFileError: 4001,
+       ReadFileError: 4002
+     };
+     class bC extends QC {
+       constructor(CC, zC, ZC) {
+         super(CC), this.errorCode = zC, this.innerError = ZC, this.name = "RuntimeError", QC._setPrototypeOf(this, bC.prototype)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2249-L2252` → after: `L824-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L824-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L824-L855) · [Before (L2249-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2249-L2252)

```diff
-       _afterBind(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           gq = arguments.length > 2 ? arguments[2] : void 0;
-         super._afterBind(qq, Eq, gq), this.ZJ()._cachedEffect = Eq, gq ? gq._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
+     }
+   },
+   39865: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => dC,
+       e: () => RC,
+       g: () => eC,
+       h: () => KC,
+       i: () => iC,
+       m: () => JC,
+       o: () => IC,
+       p: () => XC,
+       r: () => vC,
+       v: () => AC
+     });
+     var QC = ZC(39867),
+ ... (16 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2254-L2256` → after: `L857-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L857-L860) · [Before (L2254-L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2254-L2256)

```diff
-       _mustRebind(qq, Eq, gq) {
-         let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
-         return gq._drawWrapper._forceRebindOnNextCall || qq.isCachedMaterialInvalid(this, Eq, Yq)
+     }
+     class PC extends fC.j {
+       constructor(CC, zC) {
+         super(CC, fC.f.RequestFileError), this.request = zC, this.name = "RequestFileError", fC.d._setPrototypeOf(this, PC.prototype)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2258-L2259` → after: `L862-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L862-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L862-L865) · [Before (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2258-L2259)

```diff
-       dispose(qq, Eq, gq) {
-         this._activeEffect = void 0, super.dispose(qq, Eq, gq)
+     }
+     class GC extends fC.j {
+       constructor(CC, zC) {
+         super(CC, fC.f.ReadFileError), this.file = zC, this.name = "ReadFileError", fC.d._setPrototypeOf(this, GC.prototype)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2263` → after: `L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1241) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2263)

```diff
-   40115: (qq, Eq, gq) => {
+   39889: (CC, zC, ZC) => {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2266` → after: `L1244-L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1244-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1244-L1245) · [Before (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2266)

```diff
-       f: () => lq
+       h: () => bC,
+       k: () => nC
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2268` → after: `L1247-L1285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1247-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1247-L1285) · [Before (L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2268)

```diff
-     const Yq = new WeakMap;
+     let QC = null;
+ 
+     function wC() {
+       if (QC) return QC;
+       const CC = new ArrayBuffer(4),
+         zC = new Float32Array(CC),
+         ZC = new Uint32Array(CC),
+         wC = new Uint32Array(512),
+         bC = new Uint32Array(512);
+       for (let QC = 0; QC < 256; ++QC) {
+         const CC = QC - 127;
+         CC < -24 ? (wC[QC] = 0, wC[256 | QC] = 32768, bC[QC] = 24, bC[256 | QC] = 24) : CC < -14 ? (wC[QC] = 1024 >> -CC - 14, wC[256 | QC] = 1024 >> -CC - 14 | 32768, bC[QC] = -CC - 1, bC[256 | QC] = -CC - 1) : CC <= 15 ? (wC[QC] = CC + 15 << 10, wC[256 | QC] = CC + 15 << 10 | 3 … [truncated]
+       }
+       const nC = new Uint32Array(2048),
+         fC = new Uint32Array(64),
+         oC = new Uint32Array(64);
+ ... (23 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2271-L2297` → after: `L1288-L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1288-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1288-L1292) · [Before (L2271-L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2271-L2297)

```diff
-       const Eq = qq.getVertexBuffers();
-       if (!Eq) return null;
-       let gq = Yq.get(qq);
-       if (gq) {
-         let qq = !1;
-         for (const Yq in Eq)
-           if (!gq.has(Yq)) {
-             qq = !0;
-             break
-           } if (!qq) return gq
-       } else gq = new Map, Yq.set(qq, gq);
-       for (const Yq in Eq) {
-         const qq = Eq[Yq];
-         if (qq) {
-           const Eq = qq.byteOffset,
-             lq = qq.byteStride,
- ... (11 more removed lines; see GitHub link above)
+       const zC = wC();
+       zC.floatView[0] = CC;
+       const ZC = zC.uint32View[0],
+         QC = ZC >> 23 & 511;
+       return zC.baseTable[QC] + ((8388607 & ZC) >> zC.shiftTable[QC])
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2300-L2304` → after: `L1295-L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1295-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1295-L1297) · [Before (L2300-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2300-L2304)

```diff
-     function Oq(qq, Eq) {
-       Eq.forEach(((Eq, gq) => {
-         const Yq = `vp_${gq}_info`;
-         qq.setFloat4(Yq, Eq.offset, Eq.stride, Eq.type, Eq.normalized ? 1 : 0)
-       }))
+     function fC(CC) {
+       const zC = wC();
+       return zC.uint32View[0] = zC.mantissaTable[zC.offsetTable[CC >> 10] + (1023 & CC)] + zC.exponentTable[CC >> 10], zC.floatView[0]
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2307` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1300) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2307)

```diff
-   40067: (qq, Eq, gq) => {
+   39878: (CC, zC, ZC) => {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2309-L2310` → after: `L1302-L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1302-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1302-L1304) · [Before (L2309-L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2309-L2310)

```diff
-       b: () => xq,
-       c: () => Aq
+       d: () => bC,
+       f: () => wC,
+       i: () => QC
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2312-L2377` → after: `L1306-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1306-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1306-L1337) · [Before (L2312-L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2312-L2377)

```diff
-     var Yq = gq(39757),
-       lq = gq(37139),
-       Oq = gq(39759);
-     let mq = (() => {
-       var qq;
-       let Eq, gq, lq = [];
-       return qq = class {
-         static extractMinAndMaxIndexed(qq, Eq, gq, Yq, lq, Oq) {
-           for (let mq = gq; mq < gq + Yq; mq++) {
-             const gq = 3 * Eq[mq],
-               Yq = qq[gq],
-               xq = qq[gq + 1],
-               Aq = qq[gq + 2];
-             lq.minimizeInPlaceFromFloats(Yq, xq, Aq), Oq.maximizeInPlaceFromFloats(Yq, xq, Aq)
-           }
-         }
- ... (50 more removed lines; see GitHub link above)
+     const QC = CC => {
+         const zC = ArrayBuffer.isView(CC) ? new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength) : new Uint8Array(CC);
+         return "function" === typeof zC.toBase64 ? zC.toBase64() : function(CC) {
+           const zC = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
+           let ZC, QC, wC, bC, nC, fC, oC, qC = "",
+             FC = 0;
+           for (; FC < CC.length;) ZC = CC[FC++], QC = FC < CC.length ? CC[FC++] : Number.NaN, wC = FC < CC.length ? CC[FC++] : Number.NaN, bC = ZC >> 2, nC = (3 & ZC) << 4 | QC >> 4, fC = (15 & QC) << 2 | wC >> 6, oC = 63 & wC, isNaN(QC) ? fC = oC = 64 : isNaN(wC) && (oC = 64), q … [truncated]
+           return qC
+         }(zC)
+       },
+       wC = CC => atob(CC),
+       bC = CC => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(CC).buffer : function(CC) {
+         const zC = wC(CC),
+           ZC = zC.length,
+           QC = new Uint8Array(new ArrayBuffer(ZC));
+         for (let wC = 0; wC < ZC; wC++) QC[wC] = zC.charCodeAt(wC);
+ ... (16 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2382-L2388` → after: `L1342-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1342-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1342-L1345) · [Before (L2382-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2382-L2388)

```diff
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         Oq = arguments.length > 4 ? arguments[4] : void 0;
-       const xq = new lq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         Aq = new lq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-       return Oq || (Oq = 3), mq.extractMinAndMax(qq, Eq, gq, Oq, xq, Aq), Yq && (xq.x -= xq.x * Yq.x + Yq.y, xq.y -= xq.y * Yq.x + Yq.y, xq.z -= xq.z * Yq.x + Yq.y, Aq.x += Aq.x * Yq.x + Yq.y, Aq.y += Aq.y * Yq.x + Yq.y, Aq.z += Aq.z * Yq.x + Yq.y), {
-         minimum: xq,
-         maximum: Aq
+       try {
+         if (CC()) return zC(), !0
+       } catch (QC) {
+         return ZC?.(QC), !0
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2392` → after: `L1360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1360) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2392)

```diff
-   40040: (qq, Eq, gq) => {
+   39867: (CC, zC, ZC) => {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2394` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1362) · [Before (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2394)

```diff
-       c: () => uq
+       d: () => QC
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2403-L2427` → after: `L1365-L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1365-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1365-L1440) · [Before (L2403-L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2403-L2427)

```diff
-       get materialDefines() {
-         const qq = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
-         return "string" === typeof qq ? null : qq
-       }
-       set materialDefines(qq) {
-         (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = qq
-       }
-       _getDrawWrapper(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         qq = qq ?? this._engine.currentRenderPassId;
-         let gq = this._drawWrappers[qq];
-         return !gq && Eq && (this._drawWrappers[qq] = gq = new Aq.b(this._mesh.ZJ().Ba())), gq
-       }
-       _removeDrawWrapper(qq) {
-         let Eq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[qq]?.dispose(Eq), this._drawWrappers[qq] = void 0
- ... (9 more removed lines; see GitHub link above)
+       constructor() {
+         this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
+       }
+       static get IsCustomRequestAvailable() {
+         return Object.keys(QC.CustomRequestHeaders).length > 0 || QC.CustomRequestModifiers.length > 0
+       }
+       static _CleanUrl(CC) {
+         return CC = (CC = CC.replace("file:http:", "http:")).replace("file:https:", "https:")
+       }
+       static _ShouldSkipRequestModifications(CC) {
+         return QC.SkipRequestModificationForBabylonCDN && (CC.includes("preview.babylonjs.com") || CC.includes("cdn.babylonjs.com"))
+       }
+       static _CollectCustomizations(CC) {
+         const zC = {
+           ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
+         };
+ ... (60 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2429-L2430` → after: `L1442-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1442-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1442-L1443) · [Before (L2429-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2429-L2430)

```diff
-       _setMainDrawWrapperOverride(qq) {
-         this._mainDrawWrapperOverride = qq
+       get requestURL() {
+         return this._requestURL
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2432-L2437` → after: `L1445-L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1445-L1446) · [Before (L2432-L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2432-L2437)

```diff
-       setEffect(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           gq = arguments.length > 2 ? arguments[2] : void 0,
-           Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const lq = this._drawWrapper;
-         lq.setEffect(qq, Eq, Yq), void 0 !== gq && (lq.materialContext = gq), qq || (lq.defines = null, lq.materialContext = void 0)
+       get onprogress() {
+         return this._xhr.onprogress
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2439-L2445` → after: `L1448-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1448-L1449) · [Before (L2439-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2439-L2445)

```diff
-       resetDrawCache(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this._drawWrappers) {
-           if (void 0 !== qq) return void this._removeDrawWrapper(qq, !0, Eq);
-           for (const qq of this._drawWrappers) qq?.dispose(Eq)
-         }
-         this._drawWrappers = []
+       set onprogress(CC) {
+         this._xhr.onprogress = CC
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2447-L2448` → after: `L1451-L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1451-L1452) · [Before (L2447-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2447-L2448)

```diff
-       static AddToMesh(qq, Eq, gq, Yq, lq, Oq, mq) {
-         return new uq(qq, Eq, gq, Yq, lq, Oq, mq, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
+       get readyState() {
+         return this._xhr.readyState
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2450-L2453` → after: `L1454-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1454-L1455) · [Before (L2450-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2450-L2453)

```diff
-       constructor(qq, Eq, gq, Yq, lq, Oq, mq) {
-         let xq = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
-           Aq = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
-         this.materialIndex = qq, this.verticesStart = Eq, this.verticesCount = gq, this.indexStart = Yq, this.indexCount = lq, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
+       get status() {
+         return this._xhr.status
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2455-L2456` → after: `L1457-L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1457-L1458) · [Before (L2455-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2455-L2456)

```diff
-       get IsGlobal() {
-         return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
+       get statusText() {
+         return this._xhr.statusText
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2458-L2459` → after: `L1460-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1460-L1461) · [Before (L2458-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2458-L2459)

```diff
-       yR() {
-         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.yR() : this._boundingInfo
+       get response() {
+         return this._xhr.response
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2461-L2462` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1463-L1464) · [Before (L2461-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2461-L2462)

```diff
-       setBoundingInfo(qq) {
-         return this._boundingInfo = qq, this
+       get responseURL() {
+         return this._xhr.responseURL
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2464-L2465` → after: `L1466-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1466-L1467) · [Before (L2464-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2464-L2465)

```diff
-       getMesh() {
-         return this._mesh
+       get responseText() {
+         return this._xhr.responseText
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2467-L2468` → after: `L1469-L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1469-L1470) · [Before (L2467-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2467-L2468)

```diff
-       getRenderingMesh() {
-         return this._renderingMesh
+       get responseType() {
+         return this._xhr.responseType
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2470-L2471` → after: `L1472-L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1472-L1473) · [Before (L2470-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2470-L2471)

```diff
-       getReplacementMesh() {
-         return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null
+       set responseType(CC) {
+         this._xhr.responseType = CC
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2473-L2475` → after: `L1475-L1476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1475-L1476) · [Before (L2473-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2473-L2475)

```diff
-       getEffectiveMesh() {
-         const qq = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
-         return qq || this._renderingMesh
+       get timeout() {
+         return this._xhr.timeout
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2477-L2485` → after: `L1478-L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1478-L1479) · [Before (L2477-L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2477-L2485)

```diff
-       da() {
-         let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         const Eq = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
-         if (!Eq) return qq && this._mesh.ZJ()._hasDefaultMaterial ? this._mesh.ZJ().defaultMaterial : null;
-         if (this._isMultiMaterial(Eq)) {
-           const qq = Eq.getSubMaterial(this.materialIndex);
-           return this._currentMaterial !== qq && (this._currentMaterial = qq, this.resetDrawCache()), qq
-         }
-         return Eq
+       set timeout(CC) {
+         this._xhr.timeout = CC
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2487-L2564` → after: `L1481-L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1481-L1482) · [Before (L2487-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2487-L2564)

```diff
-       _isMultiMaterial(qq) {
-         return void 0 !== qq.getSubMaterial
-       }
-       refreshBoundingInfo() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
-         if (qq || (qq = this._renderingMesh.getVerticesData(lq.g.PositionKind)), !qq) return this._boundingInfo = this._mesh.yR(), this;
-         const Eq = this._renderingMesh.iYq();
-         let gq;
-         if (0 === this.indexStart && this.indexCount === Eq.length) {
-           const qq = this._renderingMesh.yR();
-           gq = {
-             minimum: qq.minimum.clone(),
-             maximum: qq.maximum.clone()
-           }
-         } else gq = (0, xq.b)(qq, Eq, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
- ... (62 more removed lines; see GitHub link above)
+       addEventListener(CC, zC, ZC) {
+         this._xhr.addEventListener(CC, zC, ZC)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2566-L2574` → after: `L1484-L1485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1484-L1485) · [Before (L2566-L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2566-L2574)

```diff
-       _intersectUnIndexedLines(qq, Eq, gq, Yq, lq) {
-         let mq = null;
-         for (let xq = this.verticesStart; xq < this.verticesStart + this.verticesCount; xq += 2) {
-           const gq = Eq[xq],
-             Aq = Eq[xq + 1],
-             cq = qq.intersectionSegment(gq, Aq, Yq);
-           if (!(cq < 0) && ((lq || !mq || cq < mq.distance) && (mq = new Oq.c(null, null, cq), mq.faceId = xq / 2, lq))) break
-         }
-         return mq
+       removeEventListener(CC, zC, ZC) {
+         this._xhr.removeEventListener(CC, zC, ZC)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2576-L2599` → after: `L1487-L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1487-L1488) · [Before (L2576-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2576-L2599)

```diff
-       _intersectTriangles(qq, Eq, gq, Yq, lq, Oq, mq) {
-         let xq = null,
-           Aq = -1;
-         for (let cq = this.indexStart; cq < this.indexStart + this.indexCount - (3 - Yq); cq += Yq) {
-           Aq++;
-           const Yq = gq[cq],
-             uq = gq[cq + 1],
-             Bq = gq[cq + 2];
-           if (lq && 4294967295 === Bq) {
-             cq += 2;
-             continue
-           }
-           const Wq = Eq[Yq],
-             Nq = Eq[uq],
-             aq = Eq[Bq];
-           if (!Wq || !Nq || !aq) continue;
- ... (8 more removed lines; see GitHub link above)
+       abort() {
+         this._xhr.abort()
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2601-L2614` → after: `L1490-L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1490-L1491) · [Before (L2601-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2601-L2614)

```diff
-       _intersectUnIndexedTriangles(qq, Eq, gq, Yq, lq) {
-         let Oq = null;
-         for (let mq = this.verticesStart; mq < this.verticesStart + this.verticesCount; mq += 3) {
-           const gq = Eq[mq],
-             xq = Eq[mq + 1],
-             Aq = Eq[mq + 2];
-           if (lq && !lq(gq, xq, Aq, qq, -1, -1, -1)) continue;
-           const cq = qq.intersectsTriangle(gq, xq, Aq);
-           if (cq) {
-             if (cq.distance < 0) continue;
-             if ((Yq || !Oq || cq.distance < Oq.distance) && (Oq = cq, Oq.faceId = mq / 3, Yq)) break
-           }
-         }
-         return Oq
+       send(CC) {
+         this._xhr.send(CC)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2616-L2617` → after: `L1493-L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1493-L1499) · [Before (L2616-L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2616-L2617)

```diff
-       _rebuild() {
-         this._linesIndexBuffer && (this._linesIndexBuffer = null)
+       open(CC, zC, ZC) {
+         const {
+           url: wC,
+           headers: bC
+         } = QC._CollectCustomizations(zC, ZC);
+         this._requestURL = QC._CleanUrl(wC), this._xhr.open(CC, this._requestURL, !0);
+         for (const QC in bC) this._xhr.setRequestHeader(QC, bC[QC])
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2619-L2626` → after: `L1501-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1501-L1502) · [Before (L2619-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2619-L2626)

```diff
-       clone(qq, Eq) {
-         const gq = new uq(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, qq, Eq, !1);
-         if (!this.IsGlobal) {
-           const qq = this.yR();
-           if (!qq) return gq;
-           gq._boundingInfo = new mq.d(qq.minimum, qq.maximum)
-         }
-         return gq
+       setRequestHeader(CC, zC) {
+         this._xhr.setRequestHeader(CC, zC)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2628-L2646` → after: `L1504-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1504-L1505) · [Before (L2628-L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2628-L2646)

```diff
-       dispose() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._linesIndexBuffer && (this._mesh.ZJ().Ba()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
-         const Eq = this._mesh.fn.indexOf(this);
-         this._mesh.fn.splice(Eq, 1), this.resetDrawCache(void 0, qq)
-       }
-       getClassName() {
-         return "SubMesh"
-       }
-       static CreateFromIndices(qq, Eq, gq, Yq, lq) {
-         let Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           mq = Number.MAX_VALUE,
-           xq = -Number.MAX_VALUE;
-         const Aq = (lq || Yq).iYq();
-         for (let cq = Eq; cq < Eq + gq; cq++) {
-           const qq = Aq[cq];
- ... (3 more removed lines; see GitHub link above)
+       getResponseHeader(CC) {
+         return this._xhr.getResponseHeader(CC)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L2648` → after: `L1507-L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L1507-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/254.js#L1507-L1508) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/254.js#L2648)

```diff
-     }(Yq = uq.prototype).projectToRef ?? (Yq.projectToRef = (0, cq.i)("SubMesh", "projectToRef"))
+     }
+     QC.CustomRequestHeaders = {}, QC.CustomRequestModifiers = new Array, QC.SkipRequestModificationForBabylonCDN = !0
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/255.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/255.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L4-L170` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L4) · [Before (L4-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L4-L170)

```diff
-   41347: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Yq
-     });
-     class Yq {}
-     Yq.AUTOSAMPLERSUFFIX = "Sampler", Yq.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Yq.ALPHA_DISABLE = 0, Yq.ALPHA_ADD = 1, Yq.ALPHA_COMBINE = 2, Yq.ALPHA_SUBTRACT = 3, Yq.ALPHA_MULTIPLY = 4, Yq.ALPHA_MAXIMIZED = 5, Yq.ALPHA_ONEONE = 6, Yq.ALPHA_PREMULTIPLIED = 7, Yq.ALPH … [truncated]
-   },
-   41329: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Aq
-     });
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(37139),
-       mq = gq(39995),
-       xq = gq(39967);
- ... (151 more removed lines; see GitHub link above)
+   39921: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L174-L229` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L8-L19) · [Before (L174-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L174-L229)

```diff
-     var Yq = gq(40233);
-     class lq extends Yq.d {
-       constructor(qq, Eq, gq, lq, Oq) {
-         let mq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           xq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           Aq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
-           cq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
-           uq = arguments.length > 9 ? arguments[9] : void 0,
-           Bq = arguments.length > 10 ? arguments[10] : void 0,
-           Wq = arguments.length > 11 ? arguments[11] : void 0,
-           Nq = arguments.length > 12 ? arguments[12] : void 0;
-         super(null, Oq, !mq, xq, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, uq), this.format = lq, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== cq || (Aq = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== cq || (Aq = … [truncated]
-       }
-       update(qq) {
-         this.updateMipLevel(qq, 0)
-       }
- ... (40 more removed lines; see GitHub link above)
+     var QC = ZC(38507),
+       wC = ZC(37002);
+     class bC {
+       static Instantiate(CC) {
+         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[CC]) return this.RegisteredExternalClasses[CC];
+         const zC = (0, wC.c)(CC);
+         if (zC) return zC;
+         QC.c.Warn(CC + " not found, you may have missed an import.");
+         const ZC = CC.split(".");
+         let bC = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
+         for (let QC = 0, wC = ZC.length; QC < wC; QC++) bC = bC[ZC[QC]];
+         return "function" !== typeof bC ? null : bC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L233` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L24) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L233)

```diff
-   41377: (qq, Eq, gq) => {
+   39730: (CC, zC, ZC) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L235` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L26) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L235)

```diff
-       d: () => Yq.c
+       b: () => wC
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L237-L238` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L28-L33) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L237-L238)

```diff
-     var Yq = gq(40197);
-     (0, Yq.f)()
+     var QC = ZC(39680);
+     class wC {
+       static get Now() {
+         return (0, QC.k)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
+       }
+     }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L240` → after: `L35-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L35-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L35-L75) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L240)

```diff
-   41334: (qq, Eq, gq) => {
+   39747: (CC, zC, ZC) => {
+     function QC(CC) {
+       let zC = 1;
+       do {
+         zC *= 2
+       } while (zC < CC);
+       return zC === CC
+     }
+ 
+     function wC(CC, zC, ZC) {
+       return CC * (1 - ZC) + zC * ZC
+     }
+ 
+     function bC(CC) {
+       const zC = nC(CC),
+         ZC = fC(CC);
+ ... (25 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L242-L245` → after: `L77-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L77-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L77-L82) · [Before (L242-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L242-L245)

```diff
-       b: () => Yq.b
-     });
-     var Yq = gq(40213);
-     (0, Yq.c)()
+       c: () => fC,
+       e: () => oC,
+       h: () => QC,
+       i: () => wC,
+       j: () => bC
+     })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L247` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L84) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L247)

```diff
-   40213: (qq, Eq, gq) => {
+   39913: (CC, zC, ZC) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L249-L250` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L86-L89) · [Before (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L249-L250)

```diff
-       b: () => Wq,
-       c: () => Vq
+       d: () => RC,
+       e: () => xC,
+       g: () => PC,
+       i: () => GC
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L252-L280` → after: `L91-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L91-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L91-L314) · [Before (L252-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L252-L280)

```diff
-     var Yq, lq, Oq = gq(37289),
-       mq = gq(39879),
-       xq = gq(40163),
-       Aq = gq(40221),
-       cq = gq(40037),
-       uq = gq(40225),
-       Bq = gq(39636);
-     class Wq extends xq.e {
-       _isShaderMaterial(qq) {
-         return !!qq && "ShaderMaterial" === qq.getClassName()
-       }
-       constructor(qq) {
-         let Eq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           Yq = arguments.length > 5 ? arguments[5] : void 0,
-           lq = arguments.length > 6 ? arguments[6] : void 0,
-           xq = arguments.length > 7 ? arguments[7] : void 0;
- ... (13 more removed lines; see GitHub link above)
+     var QC, wC = ZC(36987),
+       bC = ZC(39680),
+       nC = ZC(38507),
+       fC = ZC(38501),
+       oC = ZC(39730),
+       qC = ZC(39694),
+       FC = ZC(39867),
+       WC = ZC(36985),
+       NC = ZC(39865),
+       MC = ZC(39712),
+       gC = ZC(39921),
+       SC = ZC(37731),
+       pC = ZC(39747);
+     class PC {
+       static get BaseUrl() {
+         return NC.e.BaseUrl
+ ... (208 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L282-L283` → after: `L316-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L316-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L316-L347) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L282-L283)

```diff
-           const qq = new uq.s("colorShader", this.ZJ(), "color", Aq, !1);
-           qq.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(qq)
+         return QC.onloadend = () => {
+           bC.onCompleteObservable.notifyObservers(bC)
+         }, QC.onload = CC => {
+           zC(CC.target.result)
+         }, QC.onprogress = ZC, QC.readAsDataURL(CC), bC
+       }
+       static ReadFile(CC, zC, ZC, QC, wC) {
+         return (0, NC.o)(CC, zC, ZC, QC, wC)
+       }
+       static FileAsURL(CC) {
+         const zC = new Blob([CC]);
+         return window.URL.createObjectURL(zC)
+       }
+       static Format(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
+         return CC.toFixed(zC)
+ ... (16 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L286-L314` → after: `L350-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L350-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L350-L356) · [Before (L286-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L286-L314)

```diff
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(qq) {
-         const Eq = this.material;
-         if (Eq === qq) return;
-         const gq = Eq && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(qq), gq && Eq?.dispose()
-       }
-       _setInternalMaterial(qq) {
-         this._setMaterial(qq), this.material && (this.material.fillMode = cq.e.LineListDrawMode, this.material.disableLighting = !0)
-       }
-       get checkCollisions() {
- ... (13 more removed lines; see GitHub link above)
+       static UnregisterTopRootEvents(CC, zC) {
+         for (let QC = 0; QC < zC.length; QC++) {
+           const wC = zC[QC];
+           CC.removeEventListener(wC.name, wC.handler);
+           try {
+             CC.parent && CC.parent.removeEventListener(wC.name, wC.handler)
+           } catch (ZC) {}
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L318-L321` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L359-L360) · [Before (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L318-L321)

```diff
-       _draw(qq, Eq, gq) {
-         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
-         const Yq = this.ZJ().Ba();
-         return this._unIndexed ? Yq.drawArraysType(cq.e.LineListDrawMode, qq.verticesStart, qq.verticesCount, gq) : Yq.drawElementsType(cq.e.LineListDrawMode, qq.indexStart, qq.indexCount, gq), this
+       static async DumpFramebuffer(CC, zC, ZC, QC) {
+         throw (0, qC.i)("DumpTools")
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L323-L332` → after: `L362-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L362-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L362-L403) · [Before (L323-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L323-L332)

```diff
-       dispose(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Eq) && this.material?.dispose(!1, !1, !0), super.dispose(qq)
-       }
-       clone(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           gq = arguments.length > 2 ? arguments[2] : void 0;
-         if (Eq && void 0 === Eq._addToSceneRootNodes) {
-           const gq = Eq;
-           return gq.source = this, new Wq(qq, this.ZJ(), gq.parent, gq.source, gq.doNotCloneChildren)
+       static DumpData(CC, zC, ZC, QC) {
+         throw (0, qC.i)("DumpTools")
+       }
+       static async DumpDataAsync(CC, zC, ZC) {
+         throw (0, qC.i)("DumpTools")
+       }
+       static _IsOffScreenCanvas(CC) {
+         return void 0 !== CC.convertToBlob
+       }
+       static ToBlob(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
+           wC = arguments.length > 3 ? arguments[3] : void 0;
+         QC._IsOffScreenCanvas(CC) || CC.toBlob || (CC.toBlob = function(CC, zC, ZC) {
+           setTimeout((() => {
+             const QC = atob(this.toDataURL(zC, ZC).split(",")[1]),
+               wC = QC.length,
+ ... (26 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L336-L340` → after: `L406-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L406-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L406-L531) · [Before (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L336-L340)

```diff
-       createInstance(qq) {
-         const Eq = new Nq(qq, this);
-         if (this.uR) {
-           Eq.uR = {};
-           for (const qq in this.uR) Eq.uR[qq] = this.uR[qq]
+       static EncodeScreenshotCanvasData(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
+           wC = arguments.length > 3 ? arguments[3] : void 0,
+           bC = arguments.length > 4 ? arguments[4] : void 0;
+         if ("string" !== typeof wC && zC) {
+           if (zC) {
+             if (QC._IsOffScreenCanvas(CC)) return void CC.convertToBlob({
+               type: ZC,
+               quality: bC
+             }).then((CC => {
+               const ZC = new FileReader;
+               ZC.readAsDataURL(CC), ZC.onloadend = () => {
+                 const CC = ZC.result;
+                 zC(CC)
+               }
+             }));
+ ... (110 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L344-L345` → after: `L535-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L535-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L535-L562) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L344-L345)

```diff
-       serialize(qq) {
-         super.serialize(qq), qq.color = this.color.bYq(), qq.alpha = this.alpha
+       static First(CC, zC) {
+         for (const ZC of CC)
+           if (zC(ZC)) return ZC;
+         return null
+       }
+       static getFullClassName(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           ZC = null,
+           QC = null;
+         if (!zC && CC.getClassName) ZC = CC.getClassName();
+         else {
+           if (CC instanceof Object) {
+             const wC = zC ? CC : Object.getPrototypeOf(CC);
+             ZC = wC.constructor.__bjsclassName__, QC = wC.constructor.__bjsmoduleName__
+           }
+           ZC || (ZC = typeof CC)
+ ... (12 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L347-L349` → after: `L564-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L564-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L564-L568) · [Before (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L347-L349)

```diff
-       static Parse(qq, Eq) {
-         const gq = new Wq(qq.name, Eq);
-         return gq.color = Oq.d.FromArray(qq.color), gq.alpha = qq.alpha, gq
+     }
+ 
+     function GC(CC, zC) {
+       return ZC => {
+         ZC.__bjsclassName__ = CC, ZC.__bjsmoduleName__ = null != zC ? zC : null
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L352-L355` → after: `L571-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L571-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L571-L580) · [Before (L352-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L352-L355)

```diff
-     Wq.ForceGLSL = !1;
-     class Nq extends Aq.b {
-       constructor(qq, Eq) {
-         super(qq, Eq), this.intersectionThreshold = Eq.intersectionThreshold
+     QC = PC, PC.AssetBaseUrl = "", PC.UseCustomRequestHeaders = !1, PC.CustomRequestHeaders = FC.d.CustomRequestHeaders, PC.GetDOMTextContent = bC.e, PC._DefaultCdnUrl = "https://cdn.babylonjs.com", PC._CdnVersion = "9.28.0", PC._DefaultAssetsUrl = "https://assets.babylonjs.com/c … [truncated]
+       const zC = document.createElement("a");
+       return zC.href = CC, zC.href
+     } : "function" === typeof URL && "object" === typeof location ? CC => new URL(CC, location.origin).href : () => {
+       throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
+     }, PC.NoneLogLevel = nC.c.NoneLogLevel, PC.MessageLogLevel = nC.c.MessageLogLevel, PC.WarningLogLevel = nC.c.WarningLogLevel, PC.ErrorLogLevel = nC.c.ErrorLogLevel, PC.AllLogLevel = nC.c.AllLogLevel, PC.IsWindowObjectExist = bC.k, PC.PerformanceNoneLogLevel = 0, PC.Performanc … [truncated]
+     class RC {
+       constructor(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.iterations = CC, this.index = QC - 1, this._done = !1, this._fn = zC, this._successCallback = ZC
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L357-L358` → after: `L582-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L582-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L582-L606) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L357-L358)

```diff
-       getClassName() {
-         return "InstancedLinesMesh"
+       executeNext() {
+         this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
+       }
+       breakLoop() {
+         this._done = !0, this._successCallback()
+       }
+       static Run(CC, zC, ZC) {
+         const QC = new RC(CC, zC, ZC, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
+         return QC.executeNext(), QC
+       }
+       static SyncAsyncForLoop(CC, zC, ZC, QC, wC) {
+         let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
+         return RC.Run(Math.ceil(CC / zC), (QC => {
+           wC && wC() ? QC.breakLoop() : setTimeout((() => {
+             for (let bC = 0; bC < zC; ++bC) {
+               const nC = QC.index * zC + bC;
+ ... (9 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L364-L365` → after: `L612-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/255.js#L612-L613) · [Before (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/255.js#L364-L365)

```diff
-       aq || (aq = !0, xq.e._LinesMeshParser = (qq, Eq) => Wq.Parse(qq, Eq))
-     }(Yq = Wq.prototype).enableEdgesRendering ?? (Yq.enableEdgesRendering = (0, Bq.i)("LinesMesh", "enableEdgesRendering")), (lq = Nq.prototype).enableEdgesRendering ?? (lq.enableEdgesRendering = (0, Bq.i)("InstancedLinesMesh", "enableEdgesRendering"))
+       AC || (AC = !0, PC.Mix = pC.i, PC.IsExponentOfTwo = pC.h, WC.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/256.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/256.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L4)

```diff
-   40225: (qq, Eq, gq) => {
+   40256: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L6-L11)

```diff
-       e: () => tq,
-       i: () => Qq,
-       k: () => oq,
-       m: () => Pq,
-       p: () => Hq,
-       s: () => jq
+       d: () => QC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L13-L82` → after: `L8-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L8-L23) · [Before (L13-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L13-L82)

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
-     const dq = {
-       effect: null,
-       subMesh: null
- ... (54 more removed lines; see GitHub link above)
+     let QC = !1
+   },
+   39803: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => gC
+     });
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36987),
+       nC = ZC(36963),
+       fC = ZC(36985),
+       oC = ZC(37731),
+       qC = ZC(39833);
+     class FC {
+       get wrapU() {
+         return this._wrapU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L84-L85` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L25-L26) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L84-L85)

```diff
-       setExternalTexture(qq, Eq) {
-         return -1 === this._options.externalTextures.indexOf(qq) && this._options.externalTextures.push(qq), this._externalTextures[qq] = Eq, this
+       set wrapU(CC) {
+         this._wrapU = CC
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L87-L88` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L28-L29) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L87-L88)

```diff
-       setFloat(qq, Eq) {
-         return this._checkUniform(qq), this._floats[qq] = Eq, this
+       get wrapV() {
+         return this._wrapV
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L90-L91` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L31-L32) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L90-L91)

```diff
-       setInt(qq, Eq) {
-         return this._checkUniform(qq), this._ints[qq] = Eq, this
+       set wrapV(CC) {
+         this._wrapV = CC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L93-L94` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L34-L35) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L93-L94)

```diff
-       setUInt(qq, Eq) {
-         return this._checkUniform(qq), this._uints[qq] = Eq, this
+       get coordinatesMode() {
+         return 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L96-L97` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L37-L38) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L96-L97)

```diff
-       setFloats(qq, Eq) {
-         return this._checkUniform(qq), this._floatsArrays[qq] = Eq, this
+       get isCube() {
+         return !!this._texture && this._texture.isCube
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L99-L100` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L40-L41) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L99-L100)

```diff
-       setColor3(qq, Eq) {
-         return this._checkUniform(qq), this._colors3[qq] = Eq, this
+       set isCube(CC) {
+         this._texture && (this._texture.isCube = CC)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L102-L103` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L43-L44) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L102-L103)

```diff
-       setColor3Array(qq, Eq) {
-         return this._checkUniform(qq), this._colors3Arrays[qq] = Eq.reduce(((qq, Eq) => (qq.push(Eq.r, Eq.g, Eq.b), qq)), []), this
+       get is3D() {
+         return !!this._texture && this._texture.is3D
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L105-L106` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L46-L47) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L105-L106)

```diff
-       setColor4(qq, Eq) {
-         return this._checkUniform(qq), this._colors4[qq] = Eq, this
+       set is3D(CC) {
+         this._texture && (this._texture.is3D = CC)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L108-L109` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L49-L50) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L108-L109)

```diff
-       setColor4Array(qq, Eq) {
-         return this._checkUniform(qq), this._colors4Arrays[qq] = Eq.reduce(((qq, Eq) => (qq.push(Eq.r, Eq.g, Eq.b, Eq.a), qq)), []), this
+       get is2DArray() {
+         return !!this._texture && this._texture.is2DArray
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L111-L112` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L52-L53) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L111-L112)

```diff
-       setVector2(qq, Eq) {
-         return this._checkUniform(qq), this._vectors2[qq] = Eq, this
+       set is2DArray(CC) {
+         this._texture && (this._texture.is2DArray = CC)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L114-L115` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L55-L56) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L114-L115)

```diff
-       setVector3(qq, Eq) {
-         return this._checkUniform(qq), this._vectors3[qq] = Eq, this
+       getClassName() {
+         return "ThinTexture"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L117-L118` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L58-L59) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L117-L118)

```diff
-       setVector4(qq, Eq) {
-         return this._checkUniform(qq), this._vectors4[qq] = Eq, this
+       static _IsRenderTargetWrapper(CC) {
+         return void 0 !== CC?.shareDepth
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L120-L121` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L61-L62) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L120-L121)

```diff
-       setQuaternion(qq, Eq) {
-         return this._checkUniform(qq), this._quaternions[qq] = Eq, this
+       constructor(CC) {
+         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = qC.d.Zero(), this._cachedBaseSize = qC.d.Zero(), this._initialSamplingMode = 2, this._texture = FC. … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L123-L124` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L64-L65) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L123-L124)

```diff
-       setQuaternionArray(qq, Eq) {
-         return this._checkUniform(qq), this._quaternionsArrays[qq] = Eq.reduce(((qq, Eq) => (Eq.toArray(qq, qq.length), qq)), []), this
+       isReady() {
+         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L126-L127` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L67-L69) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L126-L127)

```diff
-       setMatrix(qq, Eq) {
-         return this._checkUniform(qq), this._matrices[qq] = Eq, this
+       delayLoad() {}
+       getInternalTexture() {
+         return this._texture
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L129-L133` → after: `L71-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L71-L74) · [Before (L129-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L129-L133)

```diff
-       setMatrices(qq, Eq) {
-         this._checkUniform(qq);
-         const gq = new Float32Array(16 * Eq.length);
-         for (let Yq = 0; Yq < Eq.length; Yq++) {
-           Eq[Yq].copyToArray(gq, 16 * Yq)
+       getSize() {
+         if (this._texture) {
+           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
+           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L135-L138` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L76) · [Before (L135-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L135-L138)

```diff
-         return this._matrixArrays[qq] = gq, this
-       }
-       setMatrix3x3(qq, Eq) {
-         return this._checkUniform(qq), this._matrices3x3[qq] = Eq, this
+         return this._cachedSize
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L140-L141` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L78-L79) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L140-L141)

```diff
-       setMatrix2x2(qq, Eq) {
-         return this._checkUniform(qq), this._matrices2x2[qq] = Eq, this
+       getBaseSize() {
+         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L143-L144` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L81-L82) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L143-L144)

```diff
-       setArray2(qq, Eq) {
-         return this._checkUniform(qq), this._vectors2Arrays[qq] = Eq, this
+       get samplingMode() {
+         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L146-L147` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L84-L86) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L146-L147)

```diff
-       setArray3(qq, Eq) {
-         return this._checkUniform(qq), this._vectors3Arrays[qq] = Eq, this
+       updateSamplingMode(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this._texture && this._engine && this._engine.updateTextureSamplingMode(CC, this._texture, this._texture.generateMipMaps && zC)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L149-L150` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L88-L89) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L149-L150)

```diff
-       setArray4(qq, Eq) {
-         return this._checkUniform(qq), this._vectors4Arrays[qq] = Eq, this
+       releaseInternalTexture() {
+         this._texture && (this._texture.dispose(), this._texture = null)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L152-L153` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L91-L92) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L152-L153)

```diff
-       setUniformBuffer(qq, Eq) {
-         return -1 === this._options.uniformBuffers.indexOf(qq) && this._options.uniformBuffers.push(qq), this._uniformBuffers[qq] = Eq, this
+       dispose() {
+         this._texture && (this.releaseInternalTexture(), this._engine = null)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L155-L173` → after: `L94-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L94-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L94-L133) · [Before (L155-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L155-L173)

```diff
-       setTextureSampler(qq, Eq) {
-         return -1 === this._options.samplerObjects.indexOf(qq) && this._options.samplerObjects.push(qq), this._textureSamplers[qq] = Eq, this
-       }
-       setStorageBuffer(qq, Eq) {
-         return -1 === this._options.storageBuffers.indexOf(qq) && this._options.storageBuffers.push(qq), this._storageBuffers[qq] = Eq, this
-       }
-       setDefine(qq, Eq) {
-         const gq = qq.trimEnd() + " ",
-           Yq = this.options.defines.findIndex((Eq => Eq === qq || Eq.startsWith(gq)));
-         return Yq >= 0 && this.options.defines.splice(Yq, 1), ("boolean" !== typeof Eq || Eq) && this.options.defines.push(gq + Eq), this
-       }
-       isReadyForSubMesh(qq, Eq, gq) {
-         return this.isReady(qq, gq, Eq)
-       }
-       isReady(qq, Eq, gq) {
-         const Yq = gq && this._storeEffectOnSubMeshes;
- ... (3 more removed lines; see GitHub link above)
+     }
+     var WC, NC = ZC(39842),
+       MC = ZC(39694);
+     let gC = (() => {
+       var CC;
+       let zC, ZC, qC, WC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC, HC, EC, lC = FC,
+         XC = [],
+         cC = [],
+         uC = [],
+         rC = [],
+         sC = [],
+         TC = [],
+         aC = [],
+         tC = [],
+         DC = [],
+         jC = [],
+ ... (24 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L175-L270` → after: `L135-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L135-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L135-L195) · [Before (L175-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L175-L270)

```diff
-         const Oq = this.ZJ(),
-           xq = Oq.Ba(),
-           cq = [],
-           uq = [];
-         let Bq = null,
-           Vq = this._shaderPath,
-           jq = this._options.uniforms,
-           Hq = this._options.uniformBuffers,
-           oq = this._options.samplers;
-         xq.getCaps().multiview && Oq.activeCamera && Oq.activeCamera.outputRenderTarget && Oq.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, cq.push("#define MULTIVIEW"), -1 !== jq.indexOf("viewProjection") && -1 === jq.indexOf("viewProjectionR") &&  … [truncated]
-         for (let lq = 0; lq < this._options.defines.length; lq++) {
-           const qq = 0 === this._options.defines[lq].indexOf("#define") ? this._options.defines[lq] : `#define ${this._options.defines[lq]}`;
-           cq.push(qq)
-         }
-         for (let lq = 0; lq < this._options.attributes.length; lq++) uq.push(this._options.attributes[lq]);
-         if (qq && qq.isVerticesDataPresent(mq.g.ColorKind) && (-1 === uq.indexOf(mq.g.ColorKind) && uq.push(mq.g.ColorKind), cq.push("#define VERTEXCOLOR")), Eq && (cq.push("#define INSTANCES"), (0, Nq.xb)(uq, this._materialHelperNeedsPreviousMatrices), qq?.hasThinInstances && (c … [truncated]
- ... (80 more removed lines; see GitHub link above)
+         get hasAlpha() {
+           return this._hasAlpha
+         }
+         set getAlphaFromRGB(CC) {
+           this._getAlphaFromRGB !== CC && (this._getAlphaFromRGB = CC, this._scene && this._scene.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
+         }
+         get getAlphaFromRGB() {
+           return this._getAlphaFromRGB
+         }
+         set coordinatesIndex(CC) {
+           this._coordinatesIndex !== CC && (this._coordinatesIndex = CC, this._scene && this._scene.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
+         }
+         get coordinatesIndex() {
+           return this._coordinatesIndex
+         }
+         set coordinatesMode(CC) {
+ ... (45 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L272-L286` → after: `L197-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L197-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L197-L286) · [Before (L272-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L272-L286)

```diff
-         const cq = Eq && lq ? this._mustRebind(mq, Oq, Yq, Eq.visibility) : mq.getCachedMaterial() !== this;
-         if (Oq && cq) {
-           let qq;
-           for (qq in Aq || -1 === this._options.uniforms.indexOf("view") || Oq.setMatrix("view", mq.getViewMatrix()), Aq || -1 === this._options.uniforms.indexOf("projection") || Oq.setMatrix("projection", mq.getProjectionMatrix()), Aq || -1 === this._options.uniforms.indexOf("vi … [truncated]
-           for (qq in this._internalTextures) Oq._bindTexture(qq, this._internalTextures[qq]);
-           for (qq in this._textureArrays) Oq.setTextureArray(qq, this._textureArrays[qq]);
-           for (qq in this._ints) Oq.setInt(qq, this._ints[qq]);
-           for (qq in this._uints) Oq.setUInt(qq, this._uints[qq]);
-           for (qq in this._floats) Oq.setFloat(qq, this._floats[qq]);
-           for (qq in this._floatsArrays) Oq.setArray(qq, this._floatsArrays[qq]);
-           for (qq in this._colors3) Oq.setColor3(qq, this._colors3[qq]);
-           for (qq in this._colors3Arrays) Oq.setArray3(qq, this._colors3Arrays[qq]);
-           for (qq in this._colors4) {
-             const Eq = this._colors4[qq];
-             Oq.setFloat4(qq, Eq.r, Eq.g, Eq.b, Eq.a)
+           this.Km()?.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this)))
+         }
+         get isRGBD() {
+           return null != this._texture && this._texture._isRGBD
+         }
+         set isRGBD(CC) {
+           CC !== this.isRGBD && (this._texture && (this._texture._isRGBD = CC), this.Km()?.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
+         }
+         get noMipmap() {
+           return !1
+         }
+         get lodGenerationOffset() {
+           return this._texture ? this._texture._lodGenerationOffset : 0
+         }
+         set lodGenerationOffset(CC) {
+           this._texture && (this._texture._lodGenerationOffset = CC)
+ ... (74 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L288-L303` → after: `L288-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L288-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L288-L324) · [Before (L288-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L288-L303)

```diff
-           for (qq in this._colors4Arrays) Oq.setArray4(qq, this._colors4Arrays[qq]);
-           for (qq in this._vectors2) Oq.setVector2(qq, this._vectors2[qq]);
-           for (qq in this._vectors3) Oq.setVector3(qq, this._vectors3[qq]);
-           for (qq in this._vectors4) Oq.setVector4(qq, this._vectors4[qq]);
-           for (qq in this._quaternions) Oq.setQuaternion(qq, this._quaternions[qq]);
-           for (qq in this._matrices) Oq.setMatrix(qq, this._matrices[qq]);
-           for (qq in this._matrixArrays) Oq.setMatrices(qq, this._matrixArrays[qq]);
-           for (qq in this._matrices3x3) Oq.setMatrix3x3(qq, this._matrices3x3[qq]);
-           for (qq in this._matrices2x2) Oq.setMatrix2x2(qq, this._matrices2x2[qq]);
-           for (qq in this._vectors2Arrays) Oq.setArray2(qq, this._vectors2Arrays[qq]);
-           for (qq in this._vectors3Arrays) Oq.setArray3(qq, this._vectors3Arrays[qq]);
-           for (qq in this._vectors4Arrays) Oq.setArray4(qq, this._vectors4Arrays[qq]);
-           for (qq in this._quaternionsArrays) Oq.setArray4(qq, this._quaternionsArrays[qq]);
-           for (qq in this._uniformBuffers) {
-             const Eq = this._uniformBuffers[qq].getBuffer();
-             Eq && Oq.bindUniformBuffer(Eq, qq)
+           return null
+         }
+         _rebuild() {}
+         clone() {
+           return null
+         }
+         get textureType() {
+           return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
+         }
+         get textureFormat() {
+           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
+         }
+         _markAllSubMeshesAsTexturesDirty() {
+           const CC = this.Km();
+           CC && CC.markAllMaterialsAsDirty(1)
+         }
+ ... (21 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L305-L321` → after: `L326-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L326-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L326-L343) · [Before (L305-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L305-L321)

```diff
-           const gq = mq.Ba(),
-             xq = gq.setExternalTexture;
-           if (xq)
-             for (qq in this._externalTextures) xq.call(gq, qq, this._externalTextures[qq]);
-           const cq = gq.setTextureSampler;
-           if (cq)
-             for (qq in this._textureSamplers) cq.call(gq, qq, this._textureSamplers[qq]);
-           const uq = gq.setStorageBuffer;
-           if (uq)
-             for (qq in this._storageBuffers) uq.call(gq, qq, this._storageBuffers[qq])
-         }
-         if (Oq && Eq && (cq || !this.isFrozen)) {
-           (0, Nq.p)(Eq, Oq), Eq.morphTargetManager && Eq.morphTargetManager.isUsingTextureForTargets && Eq.morphTargetManager._bind(Oq);
-           const qq = Eq.bakedVertexAnimationManager;
-           if (qq && qq.isEnabled) {
-             const qq = lq ? Yq._drawWrapper : this._drawWrapper;
- ... (1 more removed lines; see GitHub link above)
+         }
+         _readPixelsSync() {
+           let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+             zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+             ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+             QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+             wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+           if (!this._texture) return null;
+           const bC = this.getSize();
+           let nC = bC.width,
+             fC = bC.height;
+           const oC = this._getEngine();
+           if (!oC) return null;
+           0 != zC && (nC /= Math.pow(2, zC), fC /= Math.pow(2, zC), nC = Math.round(nC), fC = Math.round(fC));
+           try {
+             return this._texture.isCube ? oC._readTexturePixelsSync(this._texture, nC, fC, CC, zC, ZC, QC, wC) : oC._readTexturePixelsSync(this._texture, nC, fC, -1, zC, ZC, QC, wC)
+ ... (2 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L324-L398` → after: `L346-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L346-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L346-L362) · [Before (L324-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L324-L398)

```diff
-         this._afterBind(Eq, Oq, Yq)
-       }
-       getActiveTextures() {
-         const qq = super.getActiveTextures();
-         for (const Eq in this._textures) qq.push(this._textures[Eq]);
-         for (const Eq in this._textureArrays) {
-           const gq = this._textureArrays[Eq];
-           for (let Eq = 0; Eq < gq.length; Eq++) qq.push(gq[Eq])
-         }
-         return qq
-       }
-       hasTexture(qq) {
-         if (super.hasTexture(qq)) return !0;
-         for (const gq in this._textures)
-           if (this._textures[gq] === qq) return !0;
-         const Eq = qq.getInternalTexture();
- ... (59 more removed lines; see GitHub link above)
+         get _lodTextureHigh() {
+           return this._texture ? this._texture._lodTextureHigh : null
+         }
+         get _lodTextureMid() {
+           return this._texture ? this._texture._lodTextureMid : null
+         }
+         get _lodTextureLow() {
+           return this._texture ? this._texture._lodTextureLow : null
+         }
+         dispose() {
+           if (this._scene) {
+             this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
+             const CC = this._scene.textures.indexOf(this);
+             if (CC >= 0 && this._scene.textures.splice(CC, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
+               const CC = this._parentContainer.textures.indexOf(this);
+               CC > -1 && this._parentContainer.textures.splice(CC, 1), this._parentContainer = null
+ ... (1 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L401-L447` → after: `L366-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L366-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L366-L724) · [Before (L401-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L401-L447)

```diff
-         this._textures = {}, this._internalTextures = {}, super.dispose(qq, Eq, gq)
-       }
-       serialize() {
-         const qq = Yq.d.Serialize(this);
-         let Eq;
-         for (Eq in qq.customType = "BABYLON.ShaderMaterial", qq.uniqueId = this.uniqueId, qq.options = this._options, qq.shaderPath = this._shaderPath, qq.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, qq.stencil = this.stencil.serialize(), qq.textures = {}, this._texture … [truncated]
-         for (Eq in qq.textureArrays = {}, this._textureArrays) {
-           qq.textureArrays[Eq] = [];
-           const gq = this._textureArrays[Eq];
-           for (let Yq = 0; Yq < gq.length; Yq++) qq.textureArrays[Eq].push(gq[Yq].serialize())
-         }
-         for (Eq in qq.ints = {}, this._ints) qq.ints[Eq] = this._ints[Eq];
-         for (Eq in qq.uints = {}, this._uints) qq.uints[Eq] = this._uints[Eq];
-         for (Eq in qq.floats = {}, this._floats) qq.floats[Eq] = this._floats[Eq];
-         for (Eq in qq.floatsArrays = {}, this._floatsArrays) qq.floatsArrays[Eq] = this._floatsArrays[Eq];
-         for (Eq in qq.colors3 = {}, this._colors3) {
- ... (31 more removed lines; see GitHub link above)
+         serialize() {
+           let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           if (!this.name && !CC) return null;
+           const zC = NC.d.Serialize(this);
+           return NC.d.AppendSerializedAnimations(this, zC), zC
+         }
+         static WhenAllReady(CC, zC) {
+           let ZC = CC.length;
+           if (0 !== ZC)
+             for (let QC = 0; QC < CC.length; QC++) {
+               const wC = CC[QC];
+               if (wC.isReady()) 0 === --ZC && zC();
+               else {
+                 const CC = wC.onLoadObservable;
+                 CC ? CC.addOnce((() => {
+                   0 === --ZC && zC()
+ ... (343 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L451-L456` → after: `L740-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L740-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L740-L784) · [Before (L451-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L451-L456)

```diff
-     function Hq(qq, Eq, gq) {
-       const lq = Yq.d.Parse((() => new jq(qq.name, Eq, qq.shaderPath, qq.options, qq.storeEffectOnSubMeshes)), qq, Eq, gq);
-       let mq;
-       for (mq in qq.stencil && lq.stencil.parse(qq.stencil, Eq, gq), qq.textures) lq.setTexture(mq, xq.d.Parse(qq.textures[mq], Eq, gq));
-       for (mq in qq.textureArrays) {
-         const Yq = qq.textureArrays[mq],
+     function SC(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const QC = CC.getInternalTexture();
+       if (!QC) return null;
+       const wC = CC._readPixelsSync(zC, ZC);
+       return wC ? gC(wC, CC.getSize(), QC.invertY) : null
+     }
+     async function pC(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const QC = CC.getInternalTexture();
+       if (!QC) return null;
+       const wC = await CC.readPixels(zC, ZC);
+       return wC ? gC(wC, CC.getSize(), QC.invertY) : null
+     }
+ ... (29 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L458-L471` → after: `L786-L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L786-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L786-L1240) · [Before (L458-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L458-L471)

```diff
-         for (let qq = 0; qq < Yq.length; qq++) Oq.push(xq.d.Parse(Yq[qq], Eq, gq));
-         lq.setTextureArray(mq, Oq)
-       }
-       for (mq in qq.ints) lq.setInt(mq, qq.ints[mq]);
-       for (mq in qq.uints) lq.setUInt(mq, qq.uints[mq]);
-       for (mq in qq.floats) lq.setFloat(mq, qq.floats[mq]);
-       for (mq in qq.floatsArrays) lq.setFloats(mq, qq.floatsArrays[mq]);
-       for (mq in qq.colors3) {
-         const Eq = qq.colors3[mq];
-         lq.setColor3(mq, {
-           r: Eq[0],
-           g: Eq[1],
-           b: Eq[2]
-         })
+         return CC = class extends YC {
+           static _CreateVideoTexture(zC, ZC, QC) {
+             arguments.length > 5 && void 0 !== arguments[5] || CC.TRILINEAR_SAMPLINGMODE;
+             throw (0, qC.i)("VideoTexture")
+           }
+           get noMipmap() {
+             return this._noMipmap
+           }
+           get mimeType() {
+             return this._mimeType
+           }
+           set isBlocking(CC) {
+             this._isBlocking = CC
+           }
+           get isBlocking() {
+             return this._isBlocking
+ ... (439 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L473-L488` → after: `L1242-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L1242-L1243) · [Before (L473-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L473-L488)

```diff
-       for (mq in qq.colors3Arrays) {
-         const Eq = qq.colors3Arrays[mq].reduce(((qq, Eq, gq) => (gq % 3 === 0 ? qq.push([Eq]) : qq[qq.length - 1].push(Eq), qq)), []).map((qq => ({
-           r: qq[0],
-           g: qq[1],
-           b: qq[2]
-         })));
-         lq.setColor3Array(mq, Eq)
-       }
-       for (mq in qq.colors4) {
-         const Eq = qq.colors4[mq];
-         lq.setColor4(mq, {
-           r: Eq[0],
-           g: Eq[1],
-           b: Eq[2],
-           a: Eq[3]
-         })
+       toString() {
+         return `{W: ${this.width}, H: ${this.height}}`
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L490-L504` → after: `L1245-L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L1245-L1246) · [Before (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L490-L504)

```diff
-       for (mq in qq.colors4Arrays) {
-         const Eq = qq.colors4Arrays[mq].reduce(((qq, Eq, gq) => (gq % 4 === 0 ? qq.push([Eq]) : qq[qq.length - 1].push(Eq), qq)), []).map((qq => ({
-           r: qq[0],
-           g: qq[1],
-           b: qq[2],
-           a: qq[3]
-         })));
-         lq.setColor4Array(mq, Eq)
-       }
-       for (mq in qq.vectors2) {
-         const Eq = qq.vectors2[mq];
-         lq.setVector2(mq, {
-           x: Eq[0],
-           y: Eq[1]
-         })
+       getClassName() {
+         return "Size"
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L506-L512` → after: `L1248-L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L1248-L1250) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L506-L512)

```diff
-       for (mq in qq.vectors3) {
-         const Eq = qq.vectors3[mq];
-         lq.setVector3(mq, {
-           x: Eq[0],
-           y: Eq[1],
-           z: Eq[2]
-         })
+       getHashCode() {
+         let CC = 0 | this.width;
+         return CC = 397 * CC ^ this.height, CC
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L514-L521` → after: `L1252-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L1252-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/256.js#L1252-L1288) · [Before (L514-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/256.js#L514-L521)

```diff
-       for (mq in qq.vectors4) {
-         const Eq = qq.vectors4[mq];
-         lq.setVector4(mq, {
-           x: Eq[0],
-           y: Eq[1],
-           z: Eq[2],
-           w: Eq[3]
-         })
+       Av(CC) {
+         this.width = CC.width, this.height = CC.height
+       }
+       L_(CC, zC) {
+         return this.width = CC, this.height = zC, this
+       }
+       set(CC, zC) {
+         return this.L_(CC, zC)
+       }
+       multiplyByFloats(CC, zC) {
+         return new QC(this.width * CC, this.height * zC)
+       }
+       clone() {
+         return new QC(this.width, this.height)
+       }
+       equals(CC) {
+ ... (21 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/257.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/257.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775)

#### 1. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L5-L24` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/257.js#L4-L7) · [Before (L5-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/257.js#L5-L24)

```diff
-   40252: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       FirebaseError: () => Yq.c,
-       SDK_VERSION: () => Yq.d,
-       _DEFAULT_ENTRY_NAME: () => Yq.h,
-       VYq: () => Yq.k,
-       _addOrOverwriteComponent: () => Yq.o,
-       _apps: () => Yq.p,
-       _clearComponents: () => Yq.q,
-       _components: () => Yq.r,
-       _getProvider: () => Yq.s,
-       _registerComponent: () => Yq.v,
-       _removeServiceInstance: () => Yq.w,
-       deleteApp: () => Yq.A,
-       getApp: () => Yq.F,
-       getApps: () => Yq.C,
- ... (4 more removed lines; see GitHub link above)
+   40069: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC,
+       i: () => fC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L26-L27` → after: `L9-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L9-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/257.js#L9-L620) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/257.js#L26-L27)

```diff
-     var Yq = gq(40254);
-     (0, Yq.L)("firebase", "9.23.0", "app")
+     var QC = ZC(38507),
+       wC = ZC(39842),
+       bC = ZC(40042),
+       nC = {};
+     class fC {
+       constructor(CC) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = CC, this.checkInputs = () => {}
+       }
+       add(CC) {
+         const zC = CC.getSimpleName();
+         this.attached[zC] ? QC.c.Warn("camera input of type " + zC + " already exists on camera") : (this.attached[zC] = CC, CC.camera = this.camera, CC.checkInputs && (this.checkInputs = this._addCheckInputs(CC.checkInputs.bind(CC))), this.attachedToElement && CC.attachControl(t … [truncated]
+       }
+       remove(CC) {
+         for (const zC in this.attached) {
+           const ZC = this.attached[zC];
+           if (ZC === CC) return ZC.detachControl(), ZC.camera = null, delete this.attached[zC], void this.rebuildInputCheck()
+ ... (596 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/258.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/258.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44)

#### 1. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L5)

```diff
-   40265: (qq, Eq, gq) => {
+   40031: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L7-L30` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L6) · [Before (L7-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L7-L30)

```diff
-       $: () => bq,
-       A: () => Zq,
-       B: () => Bq,
-       F: () => uq,
-       J: () => Wq,
-       K: () => Jq,
-       L: () => aq,
-       M: () => dq,
-       N: () => vq,
-       Q: () => Hq,
-       T: () => oq,
-       V: () => Vq,
-       W: () => jq,
-       X: () => iq,
-       bb: () => Pq,
-       c: () => Nq,
- ... (8 more removed lines; see GitHub link above)
+       d: () => eC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L32-L37` → after: `L8-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L8-L41) · [Before (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L32-L37)

```diff
-     const Yq = function(qq) {
-         const Eq = [];
-         let gq = 0;
-         for (let Yq = 0; Yq < qq.length; Yq++) {
-           let lq = qq.charCodeAt(Yq);
-           lq < 128 ? Eq[gq++] = lq : lq < 2048 ? (Eq[gq++] = lq >> 6 | 192, Eq[gq++] = 63 & lq | 128) : 55296 === (64512 & lq) && Yq + 1 < qq.length && 56320 === (64512 & qq.charCodeAt(Yq + 1)) ? (lq = 65536 + ((1023 & lq) << 10) + (1023 & qq.charCodeAt(++Yq)), Eq[gq++] = lq >> 1 … [truncated]
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36963),
+       nC = ZC(40035),
+       fC = ZC(40069),
+       oC = ZC(40001),
+       qC = ZC(39913);
+     let FC = (() => {
+       var CC;
+       let zC, ZC, nC, fC, FC, WC, NC, MC, gC, SC, pC, PC = [],
+         GC = [],
+         RC = [],
+         AC = [],
+         xC = [],
+         JC = [],
+         IC = [],
+ ... (18 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L39-L94` → after: `L43-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L43-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L43-L55) · [Before (L39-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L39-L94)

```diff
-         return Eq
-       },
-       lq = {
-         byteToCharMap_: null,
-         charToByteMap_: null,
-         byteToCharMapWebSafe_: null,
-         charToByteMapWebSafe_: null,
-         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
-         get ENCODED_VALS() {
-           return this.ENCODED_VALS_BASE + "+/="
-         },
-         get ENCODED_VALS_WEBSAFE() {
-           return this.ENCODED_VALS_BASE + "-_."
-         },
-         HAS_NATIVE_SUPPORT: "function" === typeof atob,
-         encodeByteArray(qq, Eq) {
- ... (40 more removed lines; see GitHub link above)
+         attachControl(CC) {
+           CC = qC.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Km(), this._engine = this._scene.mg(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+             this._keys.length = 0
+           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((zC => {
+             const ZC = zC.event;
+             if (!ZC.metaKey)
+               if (zC.type === oC.c.KEYDOWN) {
+                 if (-1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysUpward.indexOf(ZC.keyCode) || -1 !== this.keysDownward.indexOf(ZC.key … [truncated]
+                   -1 === this._keys.indexOf(ZC.keyCode) && this._keys.push(ZC.keyCode), CC || ZC.preventDefault()
+                 }
+               } else if (-1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysUpward.indexOf(ZC.keyCode) || -1 !== this.keysDownward.indexOf(Z … [truncated]
+               const zC = this._keys.indexOf(ZC.keyCode);
+               zC >= 0 && this._keys.splice(zC, 1), CC || ZC.preventDefault()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L96-L117` → after: `L57-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L57-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L57-L75) · [Before (L96-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L96-L117)

```diff
-             return Eq.join("")
-           }(this.decodeStringToByteArray(qq, Eq))
-         },
-         decodeStringToByteArray(qq, Eq) {
-           this.init_();
-           const gq = Eq ? this.charToByteMapWebSafe_ : this.charToByteMap_,
-             Yq = [];
-           for (let lq = 0; lq < qq.length;) {
-             const Eq = gq[qq.charAt(lq++)],
-               mq = lq < qq.length ? gq[qq.charAt(lq)] : 0;
-             ++lq;
-             const xq = lq < qq.length ? gq[qq.charAt(lq)] : 64;
-             ++lq;
-             const Aq = lq < qq.length ? gq[qq.charAt(lq)] : 64;
-             if (++lq, null == Eq || null == mq || null == xq || null == Aq) throw new Oq;
-             const cq = Eq << 2 | mq >> 4;
- ... (6 more removed lines; see GitHub link above)
+           })))
+         }
+         detachControl() {
+           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         }
+         checkInputs() {
+           if (this._onKeyboardObserver) {
+             const CC = this.camera,
+               zC = CC.movement.input,
+               ZC = zC.getEntry("keyboard", "translate"),
+               QC = zC.getEntry("keyboard", "rotate"),
+               wC = QC?.sensitivity ?? 1,
+               nC = CC._localDirection.L_(0, 0, 0);
+             for (let bC = 0; bC < this._keys.length; bC++) {
+               const zC = this._keys[bC]; - 1 !== this.keysLeft.indexOf(zC) ? nC.x -= 1 : -1 !== this.keysUp.indexOf(zC) ? nC.z += 1 : -1 !== this.keysRight.indexOf(zC) ? nC.x += 1 : -1 !== this.keysDown.indexOf(zC) ? nC.z -= 1 : -1 !== this.keysUpward.indexOf(zC) ? nC.y += 1 : -1 … [truncated]
+             }
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L128-L144` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L79-L80) · [Before (L128-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L128-L144)

```diff
-       };
-     class Oq extends Error {
-       constructor() {
-         super(...arguments), this.name = "DecodeBase64StringError"
-       }
-     }
-     const mq = function(qq) {
-         return function(qq) {
-           const Eq = Yq(qq);
-           return lq.encodeByteArray(Eq, !0)
-         }(qq).replace(/\./g, "")
-       },
-       xq = function(qq) {
-         try {
-           return lq.decodeString(qq, !0)
-         } catch (Eq) {
- ... (1 more removed lines; see GitHub link above)
+         getClassName() {
+           return "FreeCameraKeyboardMoveInput"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L146-L164` → after: `L82-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L82-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L82-L116) · [Before (L146-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L146-L164)

```diff
-         return null
-       };
-     const Aq = () => function() {
-         if ("undefined" !== typeof self) return self;
-         if ("undefined" !== typeof window) return window;
-         if ("undefined" !== typeof gq.g) return gq.g;
-         throw new Error("Unable to locate global object.")
-       }().__FIREBASE_DEFAULTS__,
-       cq = () => {
-         try {
-           return Aq() || (() => {
-             if ("undefined" === typeof process) return
-           })() || (() => {
-             if ("undefined" === typeof document) return;
-             let qq;
-             try {
- ... (3 more removed lines; see GitHub link above)
+         _onLostFocus() {
+           this._keys.length = 0
+         }
+         getSimpleName() {
+           return "keyboard"
+         }
+         _getLocalRotation() {
+           const CC = this.camera._calculateHandednessMultiplier();
+           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * CC
+         }
+       }, (() => {
+         const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], nC = [(0, wC.M)()], fC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.M)()], NC = [(0, wC.M)()], MC = [(0, wC.M)()], gC = [(0, wC.M)()], SC = [(0, wC.M)()], pC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
+           kind: "field",
+           name: "keysUp",
+           static: !1,
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L166-L170` → after: `L118-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L118-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L118-L261) · [Before (L166-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L166-L170)

```diff
-             const Eq = qq && xq(qq[1]);
-             return Eq && JSON.parse(Eq)
-           })()
-         } catch (qq) {
-           return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${qq}`)
+           },
+           metadata: bC
+         }, RC, AC), (0, QC.j)(null, null, nC, {
+           kind: "field",
+           name: "keysDown",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "keysDown" in CC,
+             get: CC => CC.keysDown,
+             set: (CC, zC) => {
+               CC.keysDown = zC
+             }
+           },
+           metadata: bC
+         }, xC, JC), (0, QC.j)(null, null, fC, {
+ ... (128 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L172-L193` → after: `L263-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L263-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L263-L265) · [Before (L172-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L172-L193)

```diff
-       },
-       uq = qq => {
-         var Eq, gq;
-         return null === (gq = null === (Eq = cq()) || void 0 === Eq ? void 0 : Eq.emulatorHosts) || void 0 === gq ? void 0 : gq[qq]
-       },
-       Bq = () => {
-         var qq;
-         return null === (qq = cq()) || void 0 === qq ? void 0 : qq.config
-       },
-       Wq = qq => {
-         var Eq;
-         return null === (Eq = cq()) || void 0 === Eq ? void 0 : Eq[`_${qq}`]
-       };
-     class Nq {
-       constructor() {
-         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((qq, Eq) => {
- ... (6 more removed lines; see GitHub link above)
+         constructor() {
+           let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+           this.touchEnabled = CC, this.buttons = (0, QC.n)(this, bC, [0, 1, 2]), this.angularSensibility = ((0, QC.n)(this, nC), (0, QC.n)(this, fC, 2e3)), this._pointerInput = (0, QC.n)(this, oC), this._previousPosition = null, this.onPointerMovedObservable = new WC.d, this._all … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L195-L243` → after: `L267-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L267-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L267-L310) · [Before (L195-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L195-L243)

```diff
-       }
-     }
- 
-     function aq() {
-       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
-     }
- 
-     function Vq() {
-       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(aq())
-     }
- 
-     function dq() {
-       const qq = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
-       return "object" === typeof qq && void 0 !== qq.id
-     }
- 
- ... (33 more removed lines; see GitHub link above)
+         attachControl(CC) {
+           CC = qC.g.BackCompatCameraNoPreventDefault(arguments);
+           const zC = this.camera.mg(),
+             ZC = zC.getInputElement();
+           this._pointerInput || (this._pointerInput = QC => {
+             const wC = QC.event,
+               bC = "touch" === wC.pointerType;
+             if (!this.touchEnabled && bC) return;
+             if (QC.type !== NC.b.POINTERMOVE && -1 === this.buttons.indexOf(wC.button)) return;
+             const nC = wC.target;
+             if (QC.type === NC.b.POINTERDOWN) {
+               if (bC && -1 !== this._activePointerId || !bC && -1 !== this._currentActiveButton) return;
+               this._activePointerId = wC.pointerId;
+               try {
+                 nC?.setPointerCapture(wC.pointerId)
+               } catch (fC) {} - 1 === this._currentActiveButton && (this._currentActiveButton = wC.button), this._previousPosition = {
+ ... (28 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L245-L316` → after: `L312-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L312-L313) · [Before (L245-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L245-L316)

```diff
-       }))
-     }
- 
-     function Qq() {
-       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
-     }
-     class yq extends Error {
-       constructor(qq, Eq, gq) {
-         super(Eq), this.code = qq, this.customData = gq, this.name = "FirebaseError", Object.setPrototypeOf(this, yq.prototype), Error.captureStackTrace && Error.captureStackTrace(this, tq.prototype.create)
-       }
-     }
-     class tq {
-       constructor(qq, Eq, gq) {
-         this.service = qq, this.serviceName = Eq, this.errors = gq
-       }
-       create(qq) {
- ... (56 more removed lines; see GitHub link above)
+         onContextMenu(CC) {
+           CC.preventDefault()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L318-L387` → after: `L315-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L315-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L315-L321) · [Before (L318-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L318-L387)

```diff
-       })), Eq
-     }
- 
-     function Zq(qq) {
-       const Eq = qq.indexOf("?");
-       if (!Eq) return "";
-       const gq = qq.indexOf("#", Eq);
-       return qq.substring(Eq, gq > 0 ? gq : void 0)
-     }
- 
-     function fq(qq, Eq) {
-       const gq = new Mq(qq, Eq);
-       return gq.subscribe.bind(gq)
-     }
-     class Mq {
-       constructor(qq, Eq) {
- ... (54 more removed lines; see GitHub link above)
+         detachControl() {
+           if (this._observer) {
+             if (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
+               const CC = this.camera.mg().getInputElement();
+               CC && CC.removeEventListener("contextmenu", this._contextMenuBind)
+             }
+             this.onPointerMovedObservable && this.onPointerMovedObservable.clear(), this._observer = null, this._onMouseMove = null, this._previousPosition = null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L389-L450` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L323) · [Before (L389-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L389-L450)

```diff
-         }))
-       }
-       close(qq) {
-         this.finalized || (this.finalized = !0, void 0 !== qq && (this.finalError = qq), this.task.then((() => {
-           this.observers = void 0, this.onNoObservers = void 0
-         })))
-       }
-     }
- 
-     function Tq() {}
-     const zq = 1e3,
-       Sq = 2,
-       pq = 144e5,
-       Gq = .5;
- 
-     function Lq(qq) {
- ... (46 more removed lines; see GitHub link above)
+           this._activePointerId = -1, this._currentActiveButton = -1
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L452-L705` → after: `L325-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L325-L326) · [Before (L452-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L452-L705)

```diff
-         return dq(qq[Eq])
-       },
-       set: (qq, Eq, gq) => (qq[Eq] = gq, !0),
-       has: (qq, Eq) => qq instanceof IDBTransaction && ("done" === Eq || "store" === Eq) || Eq in qq
-     };
- 
-     function aq(qq) {
-       return qq !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (xq || (xq = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(qq) ? function() {
-         for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
-         return qq.apply(jq(this), gq), dq(Aq.get(this))
-       } : function() {
-         for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
-         return dq(qq.apply(jq(this), gq))
-       } : function(Eq) {
-         for (var gq = arguments.length, Yq = new Array(gq > 1 ? gq - 1 : 0), lq = 1; lq < gq; lq++) Yq[lq - 1] = arguments[lq];
-         const Oq = qq.call(jq(this), Eq, ...Yq);
- ... (238 more removed lines; see GitHub link above)
+         getClassName() {
+           return "FreeCameraMouseInput"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L707-L721` → after: `L328-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L328-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L328-L363) · [Before (L707-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L707-L721)

```diff
-       }
-       const lq = Object.assign({
-           name: eq,
-           automaticDataCollectionEnabled: !1
-         }, Eq),
-         mq = lq.name;
-       if ("string" !== typeof mq || !mq) throw cE.create("bad-app-name", {
-         appName: String(mq)
-       });
-       if (gq || (gq = (0, Oq.B)()), !gq) throw cE.create("no-options");
-       const xq = qE.get(mq);
-       if (xq) {
-         if ((0, Oq.x)(gq, xq.options) && (0, Oq.x)(lq, xq.config)) return xq;
-         throw cE.create("duplicate-app", {
-           appName: mq
+         getSimpleName() {
+           return "mouse"
+         }
+       }, (() => {
+         const qC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
+           kind: "field",
+           name: "buttons",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "buttons" in CC,
+             get: CC => CC.buttons,
+             set: (CC, zC) => {
+               CC.buttons = zC
+             }
+ ... (20 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L723-L748` → after: `L365-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L365-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L365-L369) · [Before (L723-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L723-L748)

```diff
-       }
-       const Aq = new Yq.e(mq);
-       for (const Yq of EE.values()) Aq.zk(Yq);
-       const cq = new uE(gq, lq, Aq);
-       return qE.set(mq, cq), cq
-     }
- 
-     function NE() {
-       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq;
-       const Eq = qE.get(qq);
-       if (!Eq && qq === eq && (0, Oq.B)()) return WE();
-       if (!Eq) throw cE.create("no-app", {
-         appName: qq
-       });
-       return Eq
-     }
- ... (10 more removed lines; see GitHub link above)
+       })(), CC
+     })();
+     fC.e.FreeCameraMouseInput = MC;
+     var gC = ZC(40010);
+     let SC = (() => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L750-L792` → after: `L371-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L371-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L371-L379) · [Before (L750-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L750-L792)

```diff
-       let Oq = null !== (lq = Dq[qq]) && void 0 !== lq ? lq : qq;
-       gq && (Oq += `-${gq}`);
-       const mq = Oq.match(/\s|\//),
-         xq = Eq.match(/\s|\//);
-       if (mq || xq) {
-         const qq = [`Unable to register library "${Oq}" with version "${Eq}":`];
-         return mq && qq.push(`library name "${Oq}" contains illegal characters (whitespace or "/")`), mq && xq && qq.push("and"), xq && qq.push(`version name "${Eq}" contains illegal characters (whitespace or "/")`), void vq.warn(qq.join(" "))
-       }
-       lE(new Yq.f(`${Oq}-version`, (() => ({
-         library: Oq,
-         version: Eq
-       })), "VERSION"))
-     }
- 
-     function jE(qq, Eq) {
-       if (null !== qq && "function" !== typeof qq) throw cE.create("invalid-log-argument");
- ... (27 more removed lines; see GitHub link above)
+       let zC, ZC, bC, nC = [],
+         fC = [],
+         oC = [],
+         FC = [],
+         MC = [],
+         SC = [];
+       return CC = class {
+         constructor() {
+           this.wheelPrecisionX = (0, QC.n)(this, nC, 3), this.wheelPrecisionY = ((0, QC.n)(this, fC), (0, QC.n)(this, oC, 3)), this.wheelPrecisionZ = ((0, QC.n)(this, FC), (0, QC.n)(this, MC, 3)), this.onChangedObservable = ((0, QC.n)(this, SC), new WC.d), this._wheelDeltaX = 0,  … [truncated]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L794-L811` → after: `L381-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L381-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L381-L387) · [Before (L794-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L794-L811)

```diff
-       }).catch((qq => {
-         throw cE.create("idb-open", {
-           originalErrorMessage: qq.message
-         })
-       }))), PE
-     }
-     async function yE(qq, Eq) {
-       try {
-         const gq = (await QE()).transaction(oE, "readwrite"),
-           Yq = gq.objectStore(oE);
-         await Yq.put(Eq, tE(qq)), await gq.done
-       } catch (gq) {
-         if (gq instanceof Oq.h) vq.warn(gq.message);
-         else {
-           const qq = cE.create("idb-set", {
-             originalErrorMessage: null === gq || void 0 === gq ? void 0 : gq.message
- ... (2 more removed lines; see GitHub link above)
+         attachControl(CC) {
+           CC = qC.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = zC => {
+             if (zC.type !== NC.b.POINTERWHEEL) return;
+             const ZC = zC.event,
+               QC = ZC.deltaMode === gC.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
+             this._wheelDeltaX += this.wheelPrecisionX * QC * ZC.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * QC * ZC.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * QC * ZC.deltaZ / this._normalize, ZC.preventDefault && (CC || ZC.pre … [truncated]
+           }, this._observer = this.camera.Km()._inputManager._addCameraPointerObserver(this._wheel, NC.b.POINTERWHEEL)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L813-L860` → after: `L389-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L389-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L389-L416) · [Before (L813-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L813-L860)

```diff
-       }
-     }
- 
-     function tE(qq) {
-       return `${qq.name}!${qq.options.appId}`
-     }
-     class rE {
-       constructor(qq) {
-         this.container = qq, this._heartbeatsCache = null;
-         const Eq = this.container.getProvider("app").getImmediate();
-         this.qV = new hE(Eq), this._heartbeatsCachePromise = this.qV.read().then((qq => (this._heartbeatsCache = qq, qq)))
-       }
-       async triggerHeartbeat() {
-         const qq = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
-           Eq = vE();
-         if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== Eq && !this._heartbeatsCache.heartbeats.some((qq => qq.date === Eq))) return this._heartbeatsCache.heartbeats.push({
- ... (32 more removed lines; see GitHub link above)
+         detachControl() {
+           this._observer && (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
+         }
+         checkInputs() {
+           this.onChangedObservable.notifyObservers({
+             wheelDeltaX: this._wheelDeltaX,
+             wheelDeltaY: this._wheelDeltaY,
+             wheelDeltaZ: this._wheelDeltaZ
+           }), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0
+         }
+         getClassName() {
+           return "BaseCameraMouseWheelInput"
+         }
+         getSimpleName() {
+           return "mousewheel"
+         }
+ ... (12 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L862-L864` → after: `L418-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L418-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L418-L429) · [Before (L862-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L862-L864)

```diff
-             return {
-               heartbeatsToSend: gq,
-               unsentEntries: Yq
+           },
+           metadata: qC
+         }, nC, fC), (0, QC.j)(null, null, ZC, {
+           kind: "field",
+           name: "wheelPrecisionY",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "wheelPrecisionY" in CC,
+             get: CC => CC.wheelPrecisionY,
+             set: (CC, zC) => {
+               CC.wheelPrecisionY = zC
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L866-L898` → after: `L431-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L431-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L431-L442) · [Before (L866-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L866-L898)

```diff
-           }(this._heartbeatsCache.heartbeats),
-           Yq = (0, Oq.p)(JSON.stringify({
-             version: 2,
-             heartbeats: Eq
-           }));
-         return this._heartbeatsCache.lastSentHeartbeatDate = qq, gq.length > 0 ? (this._heartbeatsCache.heartbeats = gq, await this.qV.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.qV.overwrite(this._heartbeatsCache)), Yq
-       }
-     }
- 
-     function vE() {
-       return (new Date).toISOString().substring(0, 10)
-     }
-     class hE {
-       constructor(qq) {
-         this.app = qq, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
-       }
- ... (17 more removed lines; see GitHub link above)
+           },
+           metadata: qC
+         }, oC, FC), (0, QC.j)(null, null, bC, {
+           kind: "field",
+           name: "wheelPrecisionZ",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "wheelPrecisionZ" in CC,
+             get: CC => CC.wheelPrecisionZ,
+             set: (CC, zC) => {
+               CC.wheelPrecisionZ = zC
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L900-L902` → after: `L444-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L444-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L444-L464) · [Before (L900-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L900-L902)

```diff
-           }(this.app) || {
-             heartbeats: []
-           }
+           },
+           metadata: qC
+         }, MC, SC), qC && Object.defineProperty(CC, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: qC
+         })
+       })(), CC
+     })();
+     var pC;
+     ! function(CC) {
+       CC[CC.MoveRelative = 0] = "MoveRelative", CC[CC.RotateRelative = 1] = "RotateRelative", CC[CC.MoveScene = 2] = "MoveScene"
+     }(pC || (pC = {}));
+     let PC = (() => {
+       var CC;
+ ... (5 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L904-L905` → after: `L466-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L466-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L466-L467) · [Before (L904-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L904-L905)

```diff
-         return {
-           heartbeats: []
+         getClassName() {
+           return "FreeCameraMouseWheelInput"
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L907-L915` → after: `L469-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L469-L470) · [Before (L907-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L907-L915)

```diff
-       }
-       async overwrite(qq) {
-         var Eq;
-         if (await this._canUseIndexedDBPromise) {
-           const gq = await this.read();
-           return yE(this.app, {
-             lastSentHeartbeatDate: null !== (Eq = qq.lastSentHeartbeatDate) && void 0 !== Eq ? Eq : gq.lastSentHeartbeatDate,
-             heartbeats: qq.heartbeats
-           })
+         set wheelXMoveRelative(CC) {
+           null === CC && this._wheelXAction !== pC.MoveRelative || (this._wheelXAction = pC.MoveRelative, this._wheelXActionCoordinate = CC)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L917-L925` → after: `L472-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L472-L473) · [Before (L917-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L917-L925)

```diff
-       }
-       async add(qq) {
-         var Eq;
-         if (await this._canUseIndexedDBPromise) {
-           const gq = await this.read();
-           return yE(this.app, {
-             lastSentHeartbeatDate: null !== (Eq = qq.lastSentHeartbeatDate) && void 0 !== Eq ? Eq : gq.lastSentHeartbeatDate,
-             heartbeats: [...gq.heartbeats, ...qq.heartbeats]
-           })
+         get wheelXMoveRelative() {
+           return this._wheelXAction !== pC.MoveRelative ? null : this._wheelXActionCoordinate
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L927-L976` → after: `L475-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L475-L476) · [Before (L927-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L927-L976)

```diff
-       }
-     }
- 
-     function nE(qq) {
-       return (0, Oq.p)(JSON.stringify({
-         version: 2,
-         heartbeats: qq
-       })).length
-     }
-     var bE;
-     bE = "", lE(new Yq.f("platform-logger", (qq => new yq(qq)), "PRIVATE")), lE(new Yq.f("heartbeat", (qq => new rE(qq)), "PRIVATE")), dE(tq, rq, bE), dE(tq, rq, "esm2017"), dE("fire-js", "")
-   },
-   40258: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => xq,
-       f: () => lq
- ... (34 more removed lines; see GitHub link above)
+         set wheelYMoveRelative(CC) {
+           null === CC && this._wheelYAction !== pC.MoveRelative || (this._wheelYAction = pC.MoveRelative, this._wheelYActionCoordinate = CC)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L978-L986` → after: `L478-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L478-L479) · [Before (L978-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L978-L986)

```diff
-         return this.instancesDeferred.get(Eq).promise
-       }
-       getImmediate(qq) {
-         var Eq;
-         const gq = this.normalizeInstanceIdentifier(null === qq || void 0 === qq ? void 0 : qq.identifier),
-           Yq = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.optional) && void 0 !== Eq && Eq;
-         if (!this.isInitialized(gq) && !this.shouldAutoInitialize()) {
-           if (Yq) return null;
-           throw Error(`Service ${this.name} is not available`)
+         get wheelYMoveRelative() {
+           return this._wheelYAction !== pC.MoveRelative ? null : this._wheelYActionCoordinate
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L988-L994` → after: `L481-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L481-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L481-L482) · [Before (L988-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L988-L994)

```diff
-         try {
-           return this.getOrInitializeService({
-             instanceIdentifier: gq
-           })
-         } catch (lq) {
-           if (Yq) return null;
-           throw lq
+         set wheelZMoveRelative(CC) {
+           null === CC && this._wheelZAction !== pC.MoveRelative || (this._wheelZAction = pC.MoveRelative, this._wheelZActionCoordinate = CC)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L996-L1018` → after: `L484-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L484-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L484-L556) · [Before (L996-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L996-L1018)

```diff
-       }
-       getComponent() {
-         return this.component
-       }
-       setComponent(qq) {
-         if (qq.name !== this.name) throw Error(`Mismatching Component ${qq.name} for Provider ${this.name}.`);
-         if (this.component) throw Error(`Component for ${this.name} has already been provided`);
-         if (this.component = qq, this.shouldAutoInitialize()) {
-           if (function(qq) {
-               return "EAGER" === qq.instantiationMode
-             }(qq)) try {
-             this.getOrInitializeService({
-               instanceIdentifier: Oq
-             })
-           } catch (Eq) {}
-           for (const [qq, gq] of this.instancesDeferred.entries()) {
- ... (7 more removed lines; see GitHub link above)
+         get wheelZMoveRelative() {
+           return this._wheelZAction !== pC.MoveRelative ? null : this._wheelZActionCoordinate
+         }
+         set wheelXRotateRelative(CC) {
+           null === CC && this._wheelXAction !== pC.RotateRelative || (this._wheelXAction = pC.RotateRelative, this._wheelXActionCoordinate = CC)
+         }
+         get wheelXRotateRelative() {
+           return this._wheelXAction !== pC.RotateRelative ? null : this._wheelXActionCoordinate
+         }
+         set wheelYRotateRelative(CC) {
+           null === CC && this._wheelYAction !== pC.RotateRelative || (this._wheelYAction = pC.RotateRelative, this._wheelYActionCoordinate = CC)
+         }
+         get wheelYRotateRelative() {
+           return this._wheelYAction !== pC.RotateRelative ? null : this._wheelYActionCoordinate
+         }
+         set wheelZRotateRelative(CC) {
+ ... (57 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1021-L1053` → after: `L559-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L559-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L559-L687) · [Before (L1021-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L1021-L1053)

```diff
-       }
-       clearInstance() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oq;
-         this.instancesDeferred.delete(qq), this.instancesOptions.delete(qq), this.instances.delete(qq)
-       }
-       async delete() {
-         const qq = Array.from(this.instances.values());
-         await Promise.all([...qq.filter((qq => "INTERNAL" in qq)).map((qq => qq.INTERNAL.delete())), ...qq.filter((qq => "_delete" in qq)).map((qq => qq._delete()))])
-       }
-       isComponentSet() {
-         return null != this.component
-       }
-       isInitialized() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oq;
-         return this.instances.has(qq)
-       }
- ... (17 more removed lines; see GitHub link above)
+       }, (() => {
+         const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(MC[Symbol.metadata] ?? null) : void 0;
+         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], nC = [(0, wC.M)()], fC = [(0, wC.M)()], oC = [(0, wC.M)()], qC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.M)()], NC = [(0, wC.M)()], (0, QC.j)(CC, null, zC, {
+           kind: "setter",
+           name: "wheelXMoveRelative",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "wheelXMoveRelative" in CC,
+             set: (CC, zC) => {
+               CC.wheelXMoveRelative = zC
+             }
+           },
+           metadata: bC
+         }, null, gC), (0, QC.j)(CC, null, ZC, {
+           kind: "setter",
+ ... (113 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1055-L1064` → after: `L689-L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L689-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L689-L718) · [Before (L1055-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L1055-L1064)

```diff
-         return Yq
-       }
-       YF(qq, Eq) {
-         var gq;
-         const Yq = this.normalizeInstanceIdentifier(Eq),
-           lq = null !== (gq = this.onInitCallbacks.get(Yq)) && void 0 !== gq ? gq : new Set;
-         lq.add(qq), this.onInitCallbacks.set(Yq, lq);
-         const Oq = this.instances.get(Yq);
-         return Oq && qq(Oq, Yq), () => {
-           lq.delete(qq)
+         attachControl(CC) {
+           CC = qC.g.BackCompatCameraNoPreventDefault(arguments);
+           let zC = null;
+           if (void 0 === this._pointerInput && (this._onLostFocus = () => {
+               this._offsetX = null, this._offsetY = null
+             }, this._pointerInput = ZC => {
+               const QC = ZC.event,
+                 wC = "mouse" === QC.pointerType || this._isSafari && "undefined" === typeof QC.pointerType;
+               if (this.allowMouse || !wC)
+                 if (ZC.type === NC.b.POINTERDOWN) {
+                   if (CC || QC.preventDefault(), this._pointerPressed.push(QC.pointerId), 1 !== this._pointerPressed.length) return;
+                   zC = {
+                     x: QC.clientX,
+                     y: QC.clientY
+                   }
+                 } else if (ZC.type === NC.b.POINTERUP) {
+ ... (14 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1066-L1154` → after: `L720-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L720-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L720-L793) · [Before (L1066-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L1066-L1154)

```diff
-       }
-       invokeOnInitCallbacks(qq, Eq) {
-         const gq = this.onInitCallbacks.get(Eq);
-         if (gq)
-           for (const lq of gq) try {
-             lq(qq, Eq)
-           } catch (Yq) {}
-       }
-       getOrInitializeService(qq) {
-         let {
-           instanceIdentifier: Eq,
-           options: gq = {}
-         } = qq, Yq = this.instances.get(Eq);
-         if (!Yq && this.component && (Yq = this.component.instanceFactory(this.container, {
-             instanceIdentifier: (lq = Eq, lq === Oq ? void 0 : lq),
-             options: gq
- ... (73 more removed lines; see GitHub link above)
+         detachControl() {
+           if (this._pointerInput) {
+             if (this._observer && (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
+               const CC = this.camera.mg().getInputElement();
+               CC && CC.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
+             }
+             this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
+           }
+         }
+         checkInputs() {
+           if (null === this._offsetX || null === this._offsetY) return;
+           if (0 === this._offsetX && 0 === this._offsetY) return;
+           const CC = this.camera,
+             zC = CC.movement.input,
+             ZC = zC.getEntry("touch", "rotate"),
+             QC = zC.getEntry("touch", "translate"),
+ ... (58 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1156-L1166` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L795) · [Before (L1156-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L1156-L1166)

```diff
-         this.name = qq, this._logLevel = mq, this._logHandler = Aq, this._userLogHandler = null, Yq.push(this)
-       }
-       get logLevel() {
-         return this._logLevel
-       }
-       set logLevel(qq) {
-         if (!(qq in lq)) throw new TypeError(`Invalid value "${qq}" assigned to \`logLevel\``);
-         this._logLevel = qq
-       }
-       setLogLevel(qq) {
-         this._logLevel = "string" === typeof qq ? Oq[qq] : qq
+         super(CC), this._mouseInput = null, this._mouseWheelInput = null
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1168-L1169` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L797-L798) · [Before (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L1168-L1169)

```diff
-       get logHandler() {
-         return this._logHandler
+       addKeyboard() {
+         return this.add(new FC), this
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1171-L1173` → after: `L800-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L800-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L800-L802) · [Before (L1171-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L1171-L1173)

```diff
-       set logHandler(qq) {
-         if ("function" !== typeof qq) throw new TypeError("Value assigned to `logHandler` must be a function");
-         this._logHandler = qq
+       addMouse() {
+         let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return this._mouseInput || (this._mouseInput = new MC(CC), this.add(this._mouseInput)), this
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1175-L1176` → after: `L804-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L804-L805) · [Before (L1175-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L1175-L1176)

```diff
-       get userLogHandler() {
-         return this._userLogHandler
+       removeMouse() {
+         return this._mouseInput && this.remove(this._mouseInput), this
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1178-L1179` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L807-L808) · [Before (L1178-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L1178-L1179)

```diff
-       set userLogHandler(qq) {
-         this._userLogHandler = qq
+       addMouseWheel() {
+         return this._mouseWheelInput || (this._mouseWheelInput = new PC, this.add(this._mouseWheelInput)), this
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1181-L1183` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L810-L811) · [Before (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L1181-L1183)

```diff
-       debug() {
-         for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
-         this._userLogHandler && this._userLogHandler(this, lq.DEBUG, ...Eq), this._logHandler(this, lq.DEBUG, ...Eq)
+       removeMouseWheel() {
+         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1185-L1187` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L813-L814) · [Before (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L1185-L1187)

```diff
-       log() {
-         for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
-         this._userLogHandler && this._userLogHandler(this, lq.VERBOSE, ...Eq), this._logHandler(this, lq.VERBOSE, ...Eq)
+       addTouch() {
+         return this.add(new GC), this
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1189-L1191` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L816-L817) · [Before (L1189-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L1189-L1191)

```diff
-       info() {
-         for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
-         this._userLogHandler && this._userLogHandler(this, lq.INFO, ...Eq), this._logHandler(this, lq.INFO, ...Eq)
+       clear() {
+         super.clear(), this._mouseInput = null
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1193-L1229` → after: `L819-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L819-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L819-L1028) · [Before (L1193-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L1193-L1229)

```diff
-       warn() {
-         for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
-         this._userLogHandler && this._userLogHandler(this, lq.WARN, ...Eq), this._logHandler(this, lq.WARN, ...Eq)
-       }
-       error() {
-         for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
-         this._userLogHandler && this._userLogHandler(this, lq.ERROR, ...Eq), this._logHandler(this, lq.ERROR, ...Eq)
-       }
-     }
- 
-     function uq(qq) {
-       Yq.forEach((Eq => {
-         Eq.setLogLevel(qq)
-       }))
-     }
- 
- ... (21 more removed lines; see GitHub link above)
+     }(RC = IC.prototype).addDeviceOrientation ?? (RC.addDeviceOrientation = (0, JC.f)("FreeCameraInputsManager", "addDeviceOrientation")), (AC = IC.prototype).addVirtualJoystick ?? (AC.addVirtualJoystick = (0, JC.f)("FreeCameraInputsManager", "addVirtualJoystick")), (xC = IC.prot … [truncated]
+     var iC = ZC(39721),
+       vC = ZC(37002);
+     let eC = (() => {
+         var CC;
+         let zC, ZC, fC, oC, FC = nC.h,
+           WC = [],
+           NC = [],
+           MC = [],
+           gC = [],
+           SC = [],
+           pC = [],
+           PC = [],
+           GC = [];
+         return CC = class extends FC {
+           get angularSensibility() {
+ ... (194 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1231-L1233` → after: `L1030-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1030-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/258.js#L1030-L1033) · [Before (L1231-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/258.js#L1231-L1233)

```diff
-         }
-       }
-     }
+         })(), CC
+       })(),
+       hC = !1;
+     hC || (hC = !0, (0, vC.d)("BABYLON.FreeCamera", eC))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/259.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/259.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L5-L18` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L4-L6) · [Before (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L5-L18)

```diff
-   40278: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       getAnalytics: () => XE,
-       getGoogleAnalyticsClientId: () => IE,
-       initializeAnalytics: () => wE,
-       isSupported: () => KE,
-       logEvent: () => gg,
-       setAnalyticsCollectionEnabled: () => qg,
-       setConsent: () => Yg,
-       setCurrentScreen: () => CE,
-       setDefaultEventParameters: () => Eg,
-       setUserId: () => eE,
-       setUserProperties: () => DE,
-       settings: () => FE
+   40084: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => NC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L20-L437` → after: `L8-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L8-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L8-L121) · [Before (L20-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L20-L437)

```diff
-     var Yq = gq(40254),
-       lq = gq(40273),
-       Oq = gq(40265),
-       mq = gq(40258);
-     let xq, Aq;
-     const cq = new WeakMap,
-       uq = new WeakMap,
-       Bq = new WeakMap,
-       Wq = new WeakMap,
-       Nq = new WeakMap;
-     let aq = {
-       get(qq, Eq, gq) {
-         if (qq instanceof IDBTransaction) {
-           if ("done" === Eq) return uq.get(qq);
-           if ("objectStoreNames" === Eq) return qq.objectStoreNames || Bq.get(qq);
-           if ("store" === Eq) return gq.objectStoreNames[1] ? void 0 : gq.objectStore(gq.objectStoreNames[0])
- ... (402 more removed lines; see GitHub link above)
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36963),
+       nC = ZC(37142),
+       fC = ZC(40046),
+       oC = ZC(39950),
+       qC = ZC(37002),
+       FC = ZC(40022),
+       WC = ZC(39842);
+     let NC = (() => {
+       var CC, zC;
+       let ZC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC = fC.d,
+         vC = [],
+         eC = [],
+         hC = [],
+         KC = [],
+ ... (98 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L439-L495` → after: `L123-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L123-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L123-L162) · [Before (L439-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L439-L495)

```diff
-         },
-         Aq = {
-           method: "POST",
-           headers: Oq,
-           body: JSON.stringify(xq)
-         },
-         cq = await Gq((() => fetch(lq, Aq)));
-       if (cq.ok) {
-         return Tq(await cq.json())
-       }
-       throw await zq("Generate Auth Token", cq)
-     }
-     async function xE(qq) {
-       let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const Yq = await EE(qq.appConfig, (Yq => {
-         if (!cE(Yq)) throw Zq.create("not-registered");
- ... (41 more removed lines; see GitHub link above)
+           if (this.transferTexturesToEffect(ZC, bC), zC.shadowsEnabled && this.shadowEnabled && wC) {
+             const CC = this.getShadowGenerator(zC.activeCamera) ?? this.getShadowGenerator();
+             CC && (CC.bindShadowLight(bC, ZC), fC = !0)
+           }
+           fC ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
+         }
+         getClassName() {
+           return "Light"
+         }
+         toString(CC) {
+           let zC = "Name: " + this.name;
+           if (zC += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
+             for (let ZC = 0; ZC < this.animations.length; ZC++) zC += ", animation[0]: " + this.animations[ZC].toString(CC);
+           return zC
+         }
+         _syncParentEnabledState() {
+ ... (24 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L497` → after: `L164-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L164-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L164-L171) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L497)

```diff
-           }(qq, gq), gq
+             this._shadowGenerators = null
+           }
+           if (this.Km().stopAnimation(this), this._parentContainer) {
+             const CC = this._parentContainer.lights.indexOf(this);
+             CC > -1 && this._parentContainer.lights.splice(CC, 1), this._parentContainer = null
+           }
+           for (const ZC of this.Km().meshes) ZC._removeLightSource(this, !0);
+           this._uniformBuffer.dispose(), this.Km().removeLight(this), super.dispose(CC, zC)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L499-L509` → after: `L173-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L173-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L173-L190) · [Before (L499-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L499-L509)

```diff
-       }));
-       return Eq ? await Eq : Yq.authToken
-     }
- 
-     function AE(qq) {
-       return EE(qq, (qq => {
-         if (!cE(qq)) throw Zq.create("not-registered");
-         const Eq = qq.authToken;
-         return 1 === (gq = Eq).requestStatus && gq.requestTime + vq < Date.now() ? Object.assign(Object.assign({}, qq), {
-           authToken: {
-             requestStatus: 0
+         getTypeID() {
+           return 0
+         }
+         getScaledIntensity() {
+           return this._photometricScale * this.intensity
+         }
+         clone(zC) {
+           let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           const QC = CC.GetConstructorFromName(this.getTypeID(), zC, this.Km());
+           if (!QC) return null;
+           const wC = WC.d.Clone(QC, this);
+           return zC && (wC.name = zC), ZC && (wC.parent = ZC), wC.IK(this.isEnabled()), this.onClonedObservable.notifyObservers(wC), wC
+         }
+         serialize() {
+           const CC = WC.d.Serialize(this);
+           if (CC.uniqueId = this.uniqueId, CC.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(CC), this.excludedMeshes.length > 0) {
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L511-L549` → after: `L192-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L192-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L192-L211) · [Before (L511-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L511-L549)

```diff
-         }) : qq;
-         var gq
-       }))
-     }
- 
-     function cE(qq) {
-       return void 0 !== qq && 2 === qq.registrationStatus
-     }
-     async function uE(qq) {
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const gq = qq;
-       await async function(qq) {
-         const {
-           registrationPromise: Eq
-         } = await gE(qq);
-         Eq && await Eq
- ... (23 more removed lines; see GitHub link above)
+           if (this.includedOnlyMeshes.length > 0) {
+             CC.includedOnlyMeshesIds = [];
+             for (const zC of this.includedOnlyMeshes) CC.includedOnlyMeshesIds.push(zC.id)
+           }
+           return WC.d.AppendSerializedAnimations(this, CC), CC.np = this.serializeAnimationRanges(), CC.isEnabled = this.isEnabled(), CC
+         }
+         static GetConstructorFromName(CC, zC, ZC) {
+           const QC = fC.d.Construct("Light_Type_" + CC, zC, ZC);
+           return QC || null
+         }
+         static Parse(zC, ZC) {
+           let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+           const wC = CC.GetConstructorFromName(zC.type, zC.name, ZC);
+           if (!wC) return null;
+           const bC = WC.d.Parse(wC, zC, ZC, QC);
+           if (zC.excludedMeshesIds && (bC._excludedMeshesIds = zC.excludedMeshesIds), zC.includedOnlyMeshesIds && (bC._includedOnlyMeshesIds = zC.includedOnlyMeshesIds), void 0 !== zC.parentId && (bC._waitingParentId = zC.parentId), void 0 !== zC.parentInstanceIndex && (bC._waiti … [truncated]
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L551-L645` → after: `L213-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L213-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L213-L275) · [Before (L551-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L551-L645)

```diff
-           }(Eq);
-         return {
-           app: Eq,
-           appConfig: gq,
-           heartbeatServiceProvider: (0, Yq.s)(Eq, "heartbeat"),
-           _delete: () => Promise.resolve()
-         }
-       },
-       aE = qq => {
-         const Eq = qq.getProvider("app").getImmediate(),
-           gq = (0, Yq.s)(Eq, WE).getImmediate();
-         return {
-           getId: () => async function(qq) {
-             const Eq = qq,
-               {
-                 installationEntry: gq,
- ... (79 more removed lines; see GitHub link above)
+             fC.d.ParseAnimationRanges(bC, zC, ZC)
+           }
+           return zC.autoAnimate && ZC.beginAnimation(bC, zC.autoAnimateFrom, zC.autoAnimateTo, zC.autoAnimateLoop, zC.autoAnimateSpeed || 1), void 0 !== zC.isEnabled && bC.IK(zC.isEnabled), bC._onParsed(zC, ZC, QC), bC
+         }
+         _onParsed(CC, zC) {}
+         _hookArrayForExcluded(CC) {
+           var zC = this;
+           const ZC = CC.push;
+           CC.push = function() {
+             for (var QC = arguments.length, wC = new Array(QC), bC = 0; bC < QC; bC++) wC[bC] = arguments[bC];
+             const nC = ZC.apply(CC, wC);
+             if (zC._clusteredContainer) return nC;
+             for (const CC of wC) CC._resyncLightSource(zC);
+             return nC
+           };
+           const QC = CC.splice;
+ ... (47 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L647-L656` → after: `L277-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L277-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L277-L287) · [Before (L647-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L647-L656)

```diff
-             }(qq, Eq, gq, Yq, lq)
-           } else if ("config" === lq) {
-             const [lq, Oq] = mq;
-             await async function(qq, Eq, gq, Yq, lq, Oq) {
-               const mq = Yq[lq];
-               try {
-                 if (mq) await Eq[mq];
-                 else {
-                   const qq = (await QE(gq)).find((qq => qq.measurementId === lq));
-                   qq && await Eq[qq.appId]
+               break;
+             case CC.LIGHTTYPEID_DIRECTIONALLIGHT:
+               switch (QC) {
+                 case CC.INTENSITYMODE_ILLUMINANCE:
+                   zC = 1;
+                   break;
+                 case CC.INTENSITYMODE_LUMINANCE: {
+                   let CC = this.radius;
+                   CC = Math.max(CC, .001);
+                   zC = 2 * Math.PI * (1 - Math.cos(CC));
+                   break
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L661-L674` → after: `L290-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L290-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L290-L295) · [Before (L661-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L661-L674)

```diff
-               qq("config", lq, Oq)
-             }(qq, Eq, gq, Yq, lq, Oq)
-           } else if ("consent" === lq) {
-             const [Eq] = mq;
-             qq("consent", "update", Eq)
-           } else if ("get" === lq) {
-             const [Eq, gq, Yq] = mq;
-             qq("get", Eq, gq, Yq)
-           } else if ("set" === lq) {
-             const [Eq] = mq;
-             qq("set", Eq)
-           } else qq(lq, ...mq)
-         } catch (Aq) {
-           jE.error(Aq)
+               break;
+             case CC.LIGHTTYPEID_HEMISPHERICLIGHT:
+             case CC.LIGHTTYPEID_RECT_AREALIGHT:
+               zC = 1
+           }
+           return zC
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L676-L678` → after: `L297-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L297-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L297-L489) · [Before (L676-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L676-L678)

```diff
-       }
-     }
-     const rE = new class {
+         _reorderLightsInScene() {
+           const CC = this.Km();
+           0 != this._renderPriority && (CC.requireLightSorting = !0), this.Km().sortLightsByPriority()
+         }
+         areLightTexturesReady() {
+           return !0
+         }
+         _isReady() {
+           return !0
+         }
+       }, zC = new WeakMap, (() => {
+         const zC = "function" === typeof Symbol && Symbol.metadata ? Object.create(iC[Symbol.metadata] ?? null) : void 0;
+         ZC = [(0, wC.n)()], NC = [(0, wC.n)()], MC = [(0, wC.M)()], gC = [(0, wC.M)()], SC = [(0, wC.M)()], pC = [(0, wC.M)()], PC = [(0, wC.M)()], GC = [(0, wC.M)()], RC = [(0, wC.d)("_reorderLightsInScene")], AC = [(0, wC.M)("shadowEnabled")], xC = [(0, wC.M)("excludeWithLayerM … [truncated]
+           kind: "getter",
+           name: "range",
+           static: !1,
+ ... (177 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L680-L685` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L491) · [Before (L680-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L680-L685)

```diff
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
-         this.throttleMetadata = qq, this.intervalMillis = Eq
-       }
-       getThrottleMetadata(qq) {
-         return this.throttleMetadata[qq]
+         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new nC.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L701-L734` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L494) · [Before (L701-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L701-L734)

```diff
-     async function hE(qq) {
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rE,
-         gq = arguments.length > 2 ? arguments[2] : void 0;
-       const {
-         appId: Yq,
-         apiKey: lq,
-         measurementId: Oq
-       } = qq.options;
-       if (!Yq) throw oE.create("no-app-id");
-       if (!lq) {
-         if (Oq) return {
-           measurementId: Oq,
-           appId: Yq
-         };
-         throw oE.create("no-api-key")
-       }
- ... (18 more removed lines; see GitHub link above)
+     let WC = (() => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L736-L761` → after: `L496-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L496-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L496-L580) · [Before (L736-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L736-L761)

```diff
-       const {
-         appId: Aq,
-         measurementId: cq
-       } = qq;
-       try {
-         await
-         function(qq, Eq) {
-           return new Promise(((gq, Yq) => {
-             const lq = Math.max(Eq - Date.now(), 0),
-               Oq = setTimeout(gq, lq);
-             qq.addEventListener((() => {
-               clearTimeout(Oq), Yq(oE.create("fetch-throttle", {
-                 throttleEndTimeMillis: Eq
-               }))
-             }))
-           }))
- ... (10 more removed lines; see GitHub link above)
+       let zC, ZC, WC, NC, MC, gC = [],
+         SC = [],
+         pC = [],
+         PC = [],
+         GC = [],
+         RC = [],
+         AC = [],
+         xC = [],
+         JC = [],
+         IC = [];
+       return CC = class {
+         static AddNodeConstructor(CC, zC) {
+           this._NodeConstructors[CC] = zC
+         }
+         static Construct(CC, zC, ZC, QC) {
+           const wC = this._NodeConstructors[CC];
+ ... (69 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L763-L779` → after: `L582-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L582-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L582-L667) · [Before (L763-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L763-L779)

```diff
-           const {
-             appId: gq,
-             apiKey: Yq
-           } = qq, lq = {
-             method: "GET",
-             headers: vE(Yq)
-           }, Oq = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", gq), mq = await fetch(Oq, lq);
-           if (200 !== mq.status && 304 !== mq.status) {
-             let qq = "";
-             try {
-               const gq = await mq.json();
-               (null === (Eq = gq.error) || void 0 === Eq ? void 0 : Eq.message) && (qq = gq.error.message)
-             } catch (xq) {}
-             throw oE.create("config-fetch-failed", {
-               httpStatus: mq.status,
-               responseMessage: qq
- ... (1 more removed lines; see GitHub link above)
+           return (CC = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (CC._onEffectiveEnabledStateChangedObservable = new nC.d)
+         }
+         get onClonedObservable() {
+           return this._nodeDataStorage._onClonedObservable
+         }
+         constructor(CC) {
+           let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+             ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+           this._isDirty = !1, this._nodeDataStorage = new FC, this.name = (0, QC.n)(this, gC, void 0), this.id = ((0, QC.n)(this, SC), (0, QC.n)(this, pC, void 0)), this.uniqueId = ((0, QC.n)(this, PC), (0, QC.n)(this, GC, void 0)), this.state = ((0, QC.n)(this, RC), (0, QC.n)(th … [truncated]
+         }
+         Km() {
+           return this._scene
+         }
+         mg() {
+           return this._scene.mg()
+         }
+ ... (70 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L797-L908` → after: `L670-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L670-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L670-L676) · [Before (L797-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L797-L908)

```diff
-         const Yq = 503 === Number(null === (xq = null === Eq || void 0 === Eq ? void 0 : Eq.customData) || void 0 === xq ? void 0 : xq.httpStatus) ? (0, Oq.s)(lq, mq.intervalMillis, 30) : (0, Oq.s)(lq, mq.intervalMillis),
-           Bq = {
-             throttleEndTimeMillis: Date.now() + Yq,
-             backoffCount: lq + 1
-           };
-         return mq.setThrottleMetadata(Aq, Bq), jE.debug(`Calling attemptFetch again in ${Yq} millis`), nE(qq, Bq, gq, mq)
-       }
-     }
-     class bE {
-       constructor() {
-         this.listeners = []
-       }
-       addEventListener(qq) {
-         this.listeners.push(qq)
-       }
-       abort() {
- ... (96 more removed lines; see GitHub link above)
+         IK(CC) {
+           if (this._nodeDataStorage._isEnabled === CC) return;
+           const zC = this._hasEffectiveEnabledStateObservers(),
+             ZC = zC ? this.isEnabled() : null;
+           if (this._nodeDataStorage._isEnabled = CC, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(CC), zC) {
+             const CC = this.isEnabled();
+             CC !== ZC && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(CC)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L910-L1036` → after: `L678-L875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L678-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L678-L875) · [Before (L910-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L910-L1036)

```diff
-         }(SE, pE, GE, kE, RE);
-         JE = qq, LE = Eq, UE = !0
-       }
-       SE[Yq] = TE(qq, pE, GE, Eq, LE, kE, gq);
-       return new zE(qq)
-     }
- 
-     function XE() {
-       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.F)();
-       qq = (0, Oq.K)(qq);
-       const Eq = (0, Yq.s)(qq, VE);
-       return Eq.isInitialized() ? Eq.getImmediate() : wE(qq)
-     }
- 
-     function wE(qq) {
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
- ... (111 more removed lines; see GitHub link above)
+         }
+         isDescendantOf(CC) {
+           return !!this.parent && (this.parent === CC || this.parent.isDescendantOf(CC))
+         }
+         _getDescendants(CC) {
+           let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             ZC = arguments.length > 2 ? arguments[2] : void 0;
+           if (this._children)
+             for (let QC = 0; QC < this._children.length; QC++) {
+               const wC = this._children[QC];
+               ZC && !ZC(wC) || CC.push(wC), zC || wC._getDescendants(CC, !1, ZC)
+             }
+         }
+         getDescendants(CC, zC) {
+           const ZC = [];
+           return this._getDescendants(ZC, CC, zC), ZC
+ ... (182 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1038-L1039` → after: `L877-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L877-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/259.js#L877-L880) · [Before (L1038-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/259.js#L1038-L1039)

```diff
-       }
-     }), "PRIVATE")), (0, Yq.L)(lg, Og), (0, Yq.L)(lg, Og, "esm2017")
+       })(), CC._AnimationRangeFactory = (CC, zC, ZC) => {
+         throw (0, oC.i)("AnimationRange")
+       }, CC._NodeConstructors = {}, CC
+     })()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/260.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/260.js` (89 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L5-L253` → after: `L4-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L4-L449) · [Before (L5-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L5-L253)

```diff
-     40280: (qq, Eq, gq) => {
-         gq.r(Eq), gq.d(Eq, {
-           ActionCodeOperation: () => Wq,
-           ActionCodeURL: () => IE,
-           AuthCredential: () => GE,
-           AuthErrorCodes: () => jq,
-           EmailAuthCredential: () => sE,
-           EmailAuthProvider: () => DE,
-           FacebookAuthProvider: () => Yg,
-           FactorId: () => Aq,
-           GithubAuthProvider: () => Og,
-           GoogleAuthProvider: () => lg,
-           OAuthCredential: () => wE,
-           OAuthProvider: () => gg,
-           OperationType: () => Bq,
-           PhoneAuthCredential: () => CE,
- ... (233 more removed lines; see GitHub link above)
+   40925: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => sC
+     });
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36987),
+       nC = ZC(36963),
+       fC = ZC(36991),
+       oC = ZC(40046),
+       qC = ZC(40224),
+       FC = ZC(39993),
+       WC = ZC(39730),
+       NC = ZC(36968);
+     class MC {
+       constructor() {
+ ... (430 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L255-L389` → after: `L451-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L451-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L451-L494) · [Before (L255-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L255-L389)

```diff
-           },
-           Vq = Nq,
-           dq = new Yq.d("auth", "Firebase", {
-             "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
-           }),
-           jq = {
-             ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
-             ARGUMENT_ERROR: "auth/argument-error",
-             APP_NOT_AUTHORIZED: "auth/app-not-authorized",
-             APP_NOT_INSTALLED: "auth/app-not-installed",
-             CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
-             CODE_EXPIRED: "auth/code-expired",
-             CORDOVA_NOT_READY: "auth/cordova-not-ready",
-             CORS_UNSUPPORTED: "auth/cors-unsupported",
-             CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
-             CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
- ... (119 more removed lines; see GitHub link above)
+             if (this._observer) {
+               if (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
+                 const CC = this.camera.Km().mg().getInputElement();
+                 CC && CC.removeEventListener("contextmenu", this._contextMenuBind)
+               }
+               this._onLostFocus = null
+             }
+             this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._currentMousePointerIdDown = -1
+           }
+           getClassName() {
+             return "BaseCameraPointersInput"
+           }
+           getSimpleName() {
+             return "pointers"
+           }
+           onDoubleTap(CC, zC) {}
+ ... (28 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L391-L441` → after: `L496-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L496-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L496-L599) · [Before (L391-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L391-L441)

```diff
-         }
- 
-         function tq(qq, Eq, gq) {
-           if (!(Eq instanceof gq)) throw gq.name !== Eq.constructor.name && Pq(qq, "argument-error"), yq(qq, "argument-error", `Type of ${Eq.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
-         }
- 
-         function rq(qq) {
-           for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
-           if ("string" !== typeof qq) {
-             const Eq = gq[0],
-               Yq = [...gq.slice(1)];
-             return Yq[0] && (Yq[0].appName = qq.name), qq._errorFactory.create(Eq, ...Yq)
-           }
-           return dq.create(qq, ...gq)
-         }
- 
- ... (35 more removed lines; see GitHub link above)
+         })(), CC
+       })(),
+       IC = (() => {
+         var CC;
+         let zC, ZC, bC, nC = JC,
+           fC = [],
+           oC = [],
+           qC = [],
+           FC = [],
+           WC = [],
+           NC = [];
+         return CC = class extends nC {
+           constructor() {
+             super(...arguments), this.pinchZoom = (0, QC.n)(this, fC, !0), this.multiTouchPanning = ((0, QC.n)(this, oC), (0, QC.n)(this, qC, !0)), this.multiTouchPanAndZoom = ((0, QC.n)(this, FC), (0, QC.n)(this, WC, !0)), this._isPinching = ((0, QC.n)(this, NC), !1), this._twoF … [truncated]
+           }
+           _computePinchZoom(CC, zC) {}
+ ... (88 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L443-L454` → after: `L601-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L601-L602) · [Before (L443-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L443-L454)

```diff
-         }
- 
-         function Mq(qq, Eq) {
-           nq(qq.emulator, "Emulator should always be set here");
-           const {
-             url: gq
-           } = qq.emulator;
-           return Eq ? `${gq}${Eq.startsWith("/")?Eq.slice(1):Eq}` : gq
-         }
-         class Tq {
-           static initialize(qq, Eq, gq) {
-             this.fetchImpl = qq, Eq && (this.headersImpl = Eq), gq && (this.responseImpl = gq)
+           getClassName() {
+             return "ArcRotateCameraPointersInput"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L456-L457` → after: `L604-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L604-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L604-L611) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L456-L457)

```diff
-           static fetch() {
-             return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void hq("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
+           _computeMultiTouchPanning(CC, zC) {
+             if (CC && zC) {
+               const ZC = zC.x - CC.x,
+                 QC = zC.y - CC.y,
+                 wC = this.camera.movement.input.getEntry("pointer", "pan"),
+                 bC = wC?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
+               0 !== bC && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -ZC * bC, this.camera.movement.panAccumulatedPixels.y += QC * bC)
+             }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L459-L460` → after: `L613-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L613-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L613-L622) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L459-L460)

```diff
-           static headers() {
-             return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void hq("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
+           _computePinchZoom(zC, ZC) {
+             const QC = this.camera.radius || CC.MinimumRadiusForPinch;
+             if (this.useNaturalPinchZoom) this.camera.radius = QC * Math.sqrt(zC) / Math.sqrt(ZC);
+             else if (this.pinchDeltaPercentage) {
+               const CC = .001 * (ZC - zC) * QC * this.pinchDeltaPercentage;
+               this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += CC
+             } else {
+               const CC = (ZC - zC) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
+               this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += CC
+             }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L462-L463` → after: `L624-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L624-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L624-L634) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L462-L463)

```diff
-           static response() {
-             return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void hq("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
+           onTouch(CC, zC, ZC) {
+             const QC = this._activeEntry ?? (this.camera.mg().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
+             if (QC)
+               if ("pan" === QC.interaction) {
+                 const CC = QC.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
+                 0 !== CC && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -zC * CC, this.camera.movement.panAccumulatedPixels.y += ZC * CC)
+               } else if ("rotate" === QC.interaction) {
+               const CC = QC.fL ?? QC.sensitivity ?? 1 / this.angularSensibilityX,
+                 wC = QC.qL ?? QC.sensitivity ?? 1 / this.angularSensibilityY;
+               this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -zC * CC, this.camera.movement.rotationAccumulatedPixels.y += -ZC * wC
+             }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L465-L526` → after: `L636-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L636-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L636-L798) · [Before (L465-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L465-L526)

```diff
-         }
-         const zq = {
-             CREDENTIAL_MISMATCH: "custom-token-mismatch",
-             MISSING_CUSTOM_TOKEN: "internal-error",
-             INVALID_IDENTIFIER: "invalid-email",
-             MISSING_CONTINUE_URI: "internal-error",
-             INVALID_PASSWORD: "wrong-password",
-             MISSING_PASSWORD: "missing-password",
-             EMAIL_EXISTS: "email-already-in-use",
-             PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
-             INVALID_IDP_RESPONSE: "invalid-credential",
-             INVALID_PENDING_TOKEN: "invalid-credential",
-             FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
-             MISSING_REQ_TYPE: "internal-error",
-             EMAIL_NOT_FOUND: "user-not-found",
-             RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
- ... (46 more removed lines; see GitHub link above)
+           onDoubleTap() {
+             this.camera.useInputToRestoreState && this.camera.restoreState()
+           }
+           onMultiTouch(CC, zC, ZC, QC, wC, bC) {
+             this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(QC) - Math.sqrt(ZC)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(CC, zC, ZC, QC, wC, bC)
+           }
+           onButtonDown(CC) {
+             this._pointerConditions.button = CC.button, this._pointerModifiers.ctrl = CC.ctrlKey, this._pointerModifiers.alt = CC.altKey, this._pointerModifiers.shift = CC.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditio … [truncated]
+           }
+           onButtonUp(CC) {
+             this._activeEntry = null, super.onButtonUp(CC)
+           }
+           onLostFocus() {
+             this._activeEntry = null, super.onLostFocus()
+           }
+         }, (() => {
+ ... (147 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L528-L537` → after: `L800-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L800-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L800-L806) · [Before (L528-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L528-L537)

```diff
-             const xq = (0, Yq.$)(Object.assign({
-                 key: qq.config.apiKey
-               }, mq)).slice(1),
-               Aq = await qq._getAdditionalHeaders();
-             return Aq["Content-Type"] = "application/json", qq.languageCode && (Aq["X-Firebase-Locale"] = qq.languageCode), Tq.fetch()(kq(qq, qq.config.apiHost, gq, xq), Object.assign({
-               method: Eq,
-               headers: Aq,
-               referrerPolicy: "no-referrer"
-             }, Oq))
-           }))
+           !this._useAltToZoom && zC ? CC.inputMap.splice(CC.inputMap.indexOf(zC), 1) : this._useAltToZoom && !zC && CC.addEntry({
+             source: "keyboard",
+             modifiers: {
+               alt: !0
+             },
+             interaction: "zoom"
+           })
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L539-L557` → after: `L808-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L808-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L808-L820) · [Before (L539-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L539-L557)

```diff
-         async function Lq(qq, Eq, gq) {
-           qq._canInitEmulator = !1;
-           const lq = Object.assign(Object.assign({}, zq), Eq);
-           try {
-             const Eq = new Rq(qq),
-               Yq = await Promise.race([gq(), Eq.promise]);
-             Eq.clearNetworkTimeout();
-             const Oq = await Yq.json();
-             if ("needConfirmation" in Oq) throw Uq(qq, "account-exists-with-different-credential", Oq);
-             if (Yq.ok && !("errorMessage" in Oq)) return Oq;
-             {
-               const Eq = Yq.ok ? Oq.errorMessage : Oq.error.message,
-                 [gq, mq] = Eq.split(" : ");
-               if ("FEDERATED_USER_ID_ALREADY_LINKED" === gq) throw Uq(qq, "credential-already-in-use", Oq);
-               if ("EMAIL_EXISTS" === gq) throw Uq(qq, "email-already-in-use", Oq);
-               if ("USER_DISABLED" === gq) throw Uq(qq, "user-disabled", Oq);
- ... (3 more removed lines; see GitHub link above)
+         attachControl(CC) {
+           CC = xC.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Km(), this._engine = this._scene.mg(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+             this._keys.length = 0
+           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((zC => {
+             const ZC = zC.event;
+             if (!ZC.metaKey)
+               if (zC.type === vC.c.KEYDOWN) {
+                 if (this._ctrlPressed = ZC.ctrlKey, this._altPressed = ZC.altKey, -1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysReset.i … [truncated]
+                   -1 === this._keys.indexOf(ZC.keyCode) && this._keys.push(ZC.keyCode), ZC.preventDefault && (CC || ZC.preventDefault())
+                 }
+               } else if (-1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysReset.indexOf(ZC.keyCode) || -1 !== this.keysZoomIn.indexOf(ZC.k … [truncated]
+               const zC = this._keys.indexOf(ZC.keyCode);
+               zC >= 0 && this._keys.splice(zC, 1), ZC.preventDefault && (CC || ZC.preventDefault())
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L559-L624` → after: `L822-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L822-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L822-L847) · [Before (L559-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L559-L624)

```diff
-           } catch (Oq) {
-             if (Oq instanceof Yq.h) throw Oq;
-             Pq(qq, "network-request-failed", {
-               message: String(Oq)
-             })
-           }
-         }
-         async function Jq(qq, Eq, gq, Yq) {
-           let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-           const Oq = await Gq(qq, Eq, gq, Yq, lq);
-           return "mfaPendingCredential" in Oq && Pq(qq, "multi-factor-auth-required", {
-             _serverResponse: Oq
-           }), Oq
-         }
- 
-         function kq(qq, Eq, gq, Yq) {
- ... (50 more removed lines; see GitHub link above)
+           })))
+         }
+         detachControl() {
+           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         }
+         checkInputs() {
+           if (this._onKeyboardObserver) {
+             const CC = this.camera,
+               zC = CC.movement.input;
+             this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
+             const ZC = this._rotateDirection.set(0, 0),
+               QC = this._panDirection.set(0, 0);
+             let wC = 0,
+               bC = 0;
+             for (let nC = 0; nC < this._keys.length; nC++) {
+               const fC = this._keys[nC];
+ ... (10 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L627-L629` → after: `L850-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L850-L851) · [Before (L627-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L627-L629)

```diff
- 
-         function wq(qq) {
-           return 1e3 * Number(qq)
+         getClassName() {
+           return "ArcRotateCameraKeyboardMoveInput"
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L631-L640` → after: `L853-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L853-L854) · [Before (L631-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L631-L640)

```diff
- 
-         function Kq(qq) {
-           const [Eq, gq, lq] = qq.split(".");
-           if (void 0 === Eq || void 0 === gq || void 0 === lq) return oq("JWT malformed, contained fewer than 3 sections"), null;
-           try {
-             const qq = (0, Yq.n)(gq);
-             return qq ? JSON.parse(qq) : (oq("Failed to decode base64 JWT payload"), null)
-           } catch (Oq) {
-             return oq("Caught error parsing JWT payload as JSON", null === Oq || void 0 === Oq ? void 0 : Oq.toString()), null
-           }
+         getSimpleName() {
+           return "keyboard"
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L642-L653` → after: `L856-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L856-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L856-L1024) · [Before (L642-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L642-L653)

```diff
-         async function Cq(qq, Eq) {
-           if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return Eq;
-           try {
-             return await Eq
-           } catch (gq) {
-             throw gq instanceof Yq.h && function(qq) {
-               let {
-                 code: Eq
-               } = qq;
-               return "auth/user-disabled" === Eq || "auth/user-token-expired" === Eq
-             }(gq) && qq.auth.currentUser === qq && await qq.auth.signOut(), gq
-           }
+       }, (() => {
+         const nC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], fC = [(0, wC.M)()], oC = [(0, wC.M)()], qC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.M)()], NC = [(0, wC.M)()], MC = [(0, wC.M)()], gC = [(0, wC.M)()], (0, QC.j)(CC, null, gC, {
+           kind: "getter",
+           name: "useAltToZoom",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "useAltToZoom" in CC,
+             get: CC => CC.useAltToZoom
+           },
+           metadata: nC
+         }, null, SC), (0, QC.j)(null, null, zC, {
+           kind: "field",
+           name: "keysUp",
+           static: !1,
+ ... (153 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L655-L673` → after: `L1026-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1026-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1026-L1044) · [Before (L655-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L655-L673)

```diff
-         class Iq {
-           constructor(qq) {
-             this.user = qq, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
-           }
-           _start() {
-             this.isRunning || (this.isRunning = !0, this.schedule())
-           }
-           _stop() {
-             this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
-           }
-           getInterval(qq) {
-             var Eq;
-             if (qq) {
-               const qq = this.errorBackoff;
-               return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), qq
-             } {
- ... (3 more removed lines; see GitHub link above)
+         attachControl(CC) {
+           CC = xC.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = zC => {
+             if (zC.type !== FC.b.POINTERWHEEL) return;
+             const ZC = zC.event;
+             let QC;
+             const wC = ZC.deltaMode === KC.d.DOM_DELTA_LINE ? 40 : 1,
+               bC = -ZC.deltaY * wC;
+             if (this.customComputeDeltaFromMouseWheel) QC = this.customComputeDeltaFromMouseWheel(bC, this, ZC);
+             else if (this.wheelDeltaPercentage) {
+               if (QC = this._computeDeltaFromMouseWheelLegacyEvent(bC, this.camera.radius), QC > 0) {
+                 const CC = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
+                 let zC = this.camera.radius,
+                   ZC = CC + QC;
+                 for (let QC = 0; QC < 20 && !(zC <= ZC) && !(Math.abs(ZC * this.camera.inertia) < .001); QC++) zC -= ZC, ZC *= this.camera.inertia;
+                 zC = (0, fC.Clamp)(zC, 0, Number.MAX_VALUE), QC = this._computeDeltaFromMouseWheelLegacyEvent(bC, zC)
+               }
+ ... (3 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L675-L688` → after: `L1046-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1046-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1046-L1124) · [Before (L675-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L675-L688)

```diff
-           }
-           schedule() {
-             let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-             if (!this.isRunning) return;
-             const Eq = this.getInterval(qq);
-             this.timerId = setTimeout((async () => {
-               await this.iteration()
-             }), Eq)
-           }
-           async iteration() {
-             try {
-               await this.user.getIdToken(!0)
-             } catch (qq) {
-               return void("auth/network-request-failed" === (null === qq || void 0 === qq ? void 0 : qq.code) && this.schedule(!0))
+             QC && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(QC)) : this.camera.movement.zoomAccumulatedPixels += QC), ZC.preventDefault && (CC || ZC.preventDefault())
+           }, this._observer = this.camera.Km()._inputManager._addCameraPointerObserver(this._wheel, FC.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Q_(0)
+         }
+         detachControl() {
+           this._observer && (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
+         }
+         checkInputs() {
+           if (!this.zoomToMouseLocation) return;
+           const CC = this.camera;
+           if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(CC.inertialAlphaOffset) + Math.abs(CC.inertialBetaOffset) + Math.abs(CC.inertialRadiusOffset)) {
+             this._updateHitPlane(), CC.target.addInPlace(this._inertialPanning), CC.radius -= this._zoomToMouseRadiusOffset;
+             const zC = CC.movement.getFrameIndependentDecay(CC.inertia);
+             this._inertialPanning.scaleInPlace(zC), this._zoomToMouseRadiusOffset *= zC, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < NC.e && (this._zoomToMouseRadiusOffset = 0)
+           }
+         }
+         getClassName() {
+ ... (63 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L690` → after: `L1126-L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1126-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1126-L1369) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L690)

```diff
-             this.schedule()
+           },
+           metadata: nC
+         }, WC, MC), (0, QC.j)(null, null, bC, {
+           kind: "field",
+           name: "wheelDeltaPercentage",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "wheelDeltaPercentage" in CC,
+             get: CC => CC.wheelDeltaPercentage,
+             set: (CC, zC) => {
+               CC.wheelDeltaPercentage = zC
+             }
+           },
+           metadata: nC
+         }, gC, SC), nC && Object.defineProperty(CC, Symbol.metadata, {
+ ... (228 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L692-L695` → after: `L1371-L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1371-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1371-L1373) · [Before (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L692-L695)

```diff
-         }
-         class eq {
-           constructor(qq, Eq) {
-             this.createdAt = qq, this.lastLoginAt = Eq, this._initializeTime()
+           get pinchDeltaPercentage() {
+             const CC = this.inputs.attached.pointers;
+             return CC ? CC.pinchDeltaPercentage : 0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L697-L698` → after: `L1375-L1377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1375-L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1375-L1377) · [Before (L697-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L697-L698)

```diff
-           _initializeTime() {
-             this.lastSignInTime = Fq(this.lastLoginAt), this.creationTime = Fq(this.createdAt)
+           set pinchDeltaPercentage(CC) {
+             const zC = this.inputs.attached.pointers;
+             zC && (zC.pinchDeltaPercentage = CC)
```
