# Changed — Bundle Modifications Report (Part 013 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `13 / 56` (**308** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 012](part-012.md) · [Part 014 →](part-014.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/260.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/260.js` (95 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc)

#### 55. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L279-L286` → after: `L1766-L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1766-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1766-L1778) · [Before (L279-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L279-L286)

```diff
-         _getFromCache(pp, ip, cp, Op, op, Ip) {
-           const Sp = this._getEngine();
-           if (!Sp) return null;
-           const xp = Sp._getUseSRGBBuffer(!!op, ip),
-             Lp = Sp.getLoadedTexturesCache();
-           for (let Yp = 0; Yp < Lp.length; Yp++) {
-             const Sp = Lp[Yp];
-             if ((void 0 === op || xp === Sp._useSRGBBuffer) && (void 0 === Op || Op === Sp.invertY) && Sp.url === pp && Sp.generateMipMaps === !ip && (!cp || cp === Sp.samplingMode) && (void 0 === Ip || Ip === Sp.isCube)) return Sp.incrementReferences(), Sp
+         if (!this._caps.supportSRGBBuffers) {
+           if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
+             SRGB: WebGL2RenderingContext.SRGB,
+             SRGB8: WebGL2RenderingContext.SRGB8,
+             SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
+           };
+           else {
+             const QQ = this._gl.getExtension("EXT_sRGB");
+             null != QQ && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
+               SRGB: QQ.SRGB_EXT,
+               SRGB8: QQ.SRGB_ALPHA_EXT,
+               SRGB8_ALPHA8: QQ.SRGB_ALPHA_EXT
+             })
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L288-L343` → after: `L1780-L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1780-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1780-L1782) · [Before (L288-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L288-L343)

```diff
-           return null
-         }
-         _rebuild() {}
-         clone() {
-           return null
-         }
-         get textureType() {
-           return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
-         }
-         get textureFormat() {
-           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
-         }
-         _markAllSubMeshesAsTexturesDirty() {
-           const pp = this.Gl();
-           pp && pp.markAllMaterialsAsDirty(1)
-         }
- ... (40 more removed lines; see GitHub link above)
+           if (this._creationOptions) {
+             const QQ = this._creationOptions.forceSRGBBufferSupportState;
+             void 0 !== QQ && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && QQ)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L346-L350` → after: `L1785-L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1785-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1785-L1816) · [Before (L346-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L346-L350)

```diff
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
-         }
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
+         this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
+         for (let XQ = 0; XQ < this._maxSimultaneousTextures; XQ++) this._nextFreeTextureSlots.push(XQ);
+         "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
+       }
+       _initFeatures() {
+         this._features = {
+           forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
+           supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
+           supportDepthStencilTexture: 1 !== this._webGLVersion,
+           supportShadowSamplers: 1 !== this._webGLVersion,
+           uniformBufferHardCheckMatrix: !1,
+           allowTexturePrefiltering: 1 !== this._webGLVersion,
+           trackUbosInFrame: !1,
+           checkUbosContentBeforeUpload: !1,
+           supportCSM: 1 !== this._webGLVersion,
+           basisNeedsPOT: 1 === this._webGLVersion,
+ ... (16 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L352-L353` → after: `L1818-L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1818-L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1818-L1838) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L352-L353)

```diff
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
+       }
+       get Mj() {
+         return this._webGLVersion
+       }
+       getClassName() {
+         return "ThinEngine"
+       }
+       _prepareWorkingCanvas() {
+         if (this._workingCanvas) return;
+         this._workingCanvas = this.createCanvas(1, 1);
+         const QQ = this._workingCanvas.getContext("2d");
+         QQ && (this._workingContext = QQ)
+       }
+       getInfo() {
+         return this.getGlInfo()
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L355-L361` → after: `L1840-L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1840-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1840-L1863) · [Before (L355-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L355-L361)

```diff
-         dispose() {
-           if (this._scene) {
-             this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
-             const pp = this._scene.textures.indexOf(this);
-             if (pp >= 0 && this._scene.textures.splice(pp, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
-               const pp = this._parentContainer.textures.indexOf(this);
-               pp > -1 && this._parentContainer.textures.splice(pp, 1), this._parentContainer = null
+       }
+       extractDriverInfo() {
+         const QQ = this.getGlInfo();
+         return QQ && QQ.renderer ? QQ.renderer : ""
+       }
+       getRenderWidth() {
+         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
+       }
+       getRenderHeight() {
+         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
+       }
+       clear(QQ, WQ, XQ) {
+         let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         const TQ = this.stencilStateComposer.useStencilGlobalOnly;
+         this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = TQ;
+ ... (8 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L364` → after: `L1866-L4409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1866-L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1866-L4409) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L364)

```diff
-           this.Kl.notifyObservers(this), this.Kl.clear(), this.metadata = null, super.dispose()
+           WQ && (this._gl.clearColor(QQ.r, QQ.g, QQ.b, void 0 !== QQ.a ? QQ.a : 1), zQ |= this._gl.COLOR_BUFFER_BIT)
+         }
+         XQ && (this.vwQ ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), zQ |= this._gl.DEPTH_BUFFER_BIT), wQ && (this._gl.clearStencil(qQ), zQ |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(zQ)
+       }
+       _clearColorAttachment(QQ, WQ, XQ, wQ) {
+         if ((0, DQ.k)(XQ)) {
+           const XQ = (0, DQ.o)(wQ),
+             qQ = XQ ? UQ._TempClearColorUint32 : UQ._TempClearColorInt32;
+           return qQ[0] = WQ.r, qQ[1] = WQ.g, qQ[2] = WQ.b, qQ[3] = WQ.a, void(XQ ? this._gl.clearBufferuiv(this._gl.COLOR, QQ, qQ) : this._gl.clearBufferiv(this._gl.COLOR, QQ, qQ))
+         }
+         UQ._TempClearColorFloat32[0] = WQ.r, UQ._TempClearColorFloat32[1] = WQ.g, UQ._TempClearColorFloat32[2] = WQ.b, UQ._TempClearColorFloat32[3] = WQ.a, this._gl.clearBufferfv(this._gl.COLOR, QQ, UQ._TempClearColorFloat32)
+       }
+       _viewport(QQ, WQ, XQ, wQ) {
+         QQ === this._viewportCached.x && WQ === this._viewportCached.y && XQ === this._viewportCached.z && wQ === this._viewportCached.w || (this._viewportCached.x = QQ, this._viewportCached.y = WQ, this._viewportCached.z = XQ, this._viewportCached.w = wQ, this._gl.viewport(QQ, W … [truncated]
+       }
+       dD() {
+ ... (2528 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L367-L377` → after: `L4412-L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4412-L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L4412-L7624) · [Before (L367-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L367-L377)

```diff
-           let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           if (!this.name && !pp) return null;
-           const ip = Pp.c.Serialize(this);
-           return Pp.c.AppendSerializedAnimations(this, ip), ip
-         }
-         static WhenAllReady(pp, ip) {
-           let cp = pp.length;
-           if (0 !== cp)
-             for (let Op = 0; Op < pp.length; Op++) {
-               const op = pp[Op];
-               if (op.isReady()) 0 === --cp && ip();
+           return UQ.b.Serialize(this)
+         }
+         _bind(QQ) {
+           let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
+             XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
+             wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
+           this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturati … [truncated]
+         }
+       }, (() => {
+         const zQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], TQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], FQ = [(0, qQ.I)()], PQ = [(0, qQ.I)()], gQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], IQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], BQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
+           kind: "field",
+           name: "_globalHue",
+           static: !1,
+           private: !1,
+           access: {
+ ... (3197 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L379-L382` → after: `L7626-L7631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L7626-L7631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L7626-L7631) · [Before (L379-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L379-L382)

```diff
-                 const pp = op.onLoadObservable;
-                 pp ? pp.addOnce((() => {
-                   0 === --cp && ip()
-                 })) : 0 === --cp && ip()
+                 const QQ = {
+                   evt: XQ,
+                   clickInfo: qQ,
+                   timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, zQ, qQ, wQ), eQ.DoubleClickDelay)
+                 };
+                 this._delayedClicks[zQ] = QQ
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L384` → after: `L7633-L8912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR7633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L7633-L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L7633-L8912) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L384)

```diff
-             } else ip()
+               let PQ = QQ.hasSpecificMask(bQ.d.POINTERDOUBLETAP) || WQ.hasSpecificMask(bQ.d.POINTERDOUBLETAP);
+               !PQ && vQ.HasSpecificTrigger(6) && (TQ = this._initActionManager(TQ, qQ), TQ && (PQ = TQ.hasSpecificTrigger(6))), PQ && (zQ === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < eQ.DoubleClickDelay && !this._doubleClickOccured ? (qQ.has … [truncated]
+             }
+           }
+           sQ || wQ(qQ, this._currentPickResult)
+         }, this._onPointerMove = QQ => {
+           if (this._updatePointerPosition(QQ), this._latestPointerMoveEvents.set(QQ.pointerId, {
+               event: QQ,
+               pointerX: this._pointerX,
+               pointerY: this._pointerY,
+               unTranslatedPointerX: this._unTranslatedPointerX,
+               unTranslatedPointerY: this._unTranslatedPointerY
+             }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > eQ.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > eQ.DragMovementThreshold), TQ.isPointerLo … [truncated]
+           if (!qQ.cameraToUseForPointers && !qQ.activeCamera) return;
+           if (qQ.skipPointerMovePicking) return void this._processPointerMove(new IQ.b, QQ);
+           this._ensurePointerMovePredicate();
+ ... (1264 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L386-L387` → after: `L8914-L8925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR8914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L8914-L8925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L8914-L8925) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L386-L387)

```diff
-         static _IsScene(pp) {
-           return "Scene" === pp.getClassName()
+         return this.executeWhenReady((() => {
+           if (this.activeCamera) {
+             if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = TQ, this._skipEvaluateActiveMeshesCompletely = QQ, wQ)
+               for (let QQ = 0; QQ < this._activeMeshes.length; QQ++) this._activeMeshes.data[QQ]._freeze();
+             WQ && WQ()
+           } else XQ && XQ("No active camera found")
+         })), this
+       }
+       unfreezeActiveMeshes() {
+         for (let QQ = 0; QQ < this.meshes.length; QQ++) {
+           const WQ = this.meshes[QQ];
+           WQ._internalAbstractMeshDataInfo && (WQ._internalAbstractMeshDataInfo._isActive = !1)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L389-L669` → after: `L8927-L8943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR8927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L8927-L8943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L8927-L8943) · [Before (L389-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L389-L669)

```diff
-       }, (() => {
-         const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bp[Symbol.metadata] ?? null) : void 0;
-         ip = [(0, op.K)()], cp = [(0, op.K)()], Yp = [(0, op.K)()], Ap = [(0, op.K)()], Wp = [(0, op.K)("hasAlpha")], yp = [(0, op.K)("getAlphaFromRGB")], Up = [(0, op.K)()], wp = [(0, op.K)("coordinatesIndex")], vp = [(0, op.K)()], tp = [(0, op.K)("coordinatesMode")], Hp = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
-           static: !1,
-           private: !1,
-           access: {
-             has: pp => "wrapU" in pp,
-             get: pp => pp.wrapU
-           },
-           metadata: Ip
-         }, null, Np), (0, Op.j)(pp, null, dp, {
-           kind: "getter",
-           name: "wrapV",
-           static: !1,
- ... (265 more removed lines; see GitHub link above)
+         if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
+           const QQ = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
+           for (const WQ of QQ) WQ.objectRenderer._unfreezeActiveMeshes()
+         } else
+           for (let QQ = 0; QQ < this._activeMeshes.length; QQ++) this._activeMeshes.data[QQ]._unFreeze();
+         return this._activeMeshesFrozen = !1, this
+       }
+       _executeActiveContainerCleanup(QQ) {
+         (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => QQ.dispose()))
+       }
+       _evaluateActiveMeshes() {
+         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._acti … [truncated]
+         if (this._activeMeshesFrozen && this._activeMeshes.length) {
+           if (!this._skipEvaluateActiveMeshesCompletely) {
+             const QQ = this._activeMeshes.length;
+             for (let WQ = 0; WQ < QQ; WQ++) {
+ ... (1 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L671-L682` → after: `L8945-L8973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR8945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L8945-L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L8945-L8973) · [Before (L671-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L671-L682)

```diff
-           },
-           metadata: Ip
-         }, Pi, Wi), (0, Op.j)(null, null, Jp, {
-           kind: "field",
-           name: "isRenderTarget",
-           static: !1,
-           private: !1,
-           access: {
-             has: pp => "isRenderTarget" in pp,
-             get: pp => pp.isRenderTarget,
-             set: (pp, ip) => {
-               pp.isRenderTarget = ip
+           }
+           if (this._activeParticleSystems) {
+             const QQ = this._activeParticleSystems.length;
+             for (let WQ = 0; WQ < QQ; WQ++) this._activeParticleSystems.data[WQ].animate()
+           }
+           return void this._renderingManager.resetSprites()
+         }
+         if (!this.activeCamera) return;
+         this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(),  … [truncated]
+         for (let qQ = 0, TQ = this._beforeEvaluateActiveMeshStage; qQ < TQ.length; qQ++) {
+           TQ[qQ].action()
+         }
+         const QQ = this.getActiveMeshCandidates(),
+           WQ = QQ.length,
+           XQ = nQ.d.Enabled,
+           wQ = this.customLODSelector;
+ ... (13 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L684-L735` → after: `L8975-L8986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR8975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L8975-L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L8975-L8986) · [Before (L684-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L684-L735)

```diff
-           },
-           metadata: Ip
-         }, yi, Ui), Ip && Object.defineProperty(pp, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Ip
-         })
-       })(), pp.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, pp
-     })();
-     (Ap = yp.prototype).forceSphericalPolynomialsRecompute ?? (Ap.forceSphericalPolynomialsRecompute = (0, Wp.k)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(yp.prototype, "sphericalPolynomial") || Object.defineProperty(yp.prototype, "sph … [truncated]
-   },
-   40654: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => ep,
-       d: () => Hp
- ... (36 more removed lines; see GitHub link above)
+           }
+         }
+         if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
+           this.onBeforeParticlesRenderingObservable.notifyObservers(this);
+           for (let QQ = 0; QQ < this.KD.length; QQ++) {
+             const WQ = this.KD[QQ];
+             if (!WQ.isStarted() || !WQ.emitter) continue;
+             const XQ = WQ.emitter;
+             XQ.position && !XQ.isEnabled() || (this._activeParticleSystems.push(WQ), WQ.animate(), this._renderingManager.dispatchParticles(WQ))
+           }
+           this.onAfterParticlesRenderingObservable.notifyObservers(this)
+         }
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L737-L842` → after: `L8988-L9053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR8988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L8988-L9053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L8988-L9053) · [Before (L737-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L737-L842)

```diff
-       return Ip.toDataURL("image/png")
-     }
- 
-     function Up(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const Op = pp.getInternalTexture();
-       if (!Op) return null;
-       const op = pp._readPixelsSync(ip, cp);
-       return op ? yp(op, pp.getSize(), Op.invertY) : null
-     }
-     async function wp(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const Op = pp.getInternalTexture();
-       if (!Op) return null;
- ... (90 more removed lines; see GitHub link above)
+       _prepareSkeleton(QQ) {
+         this._skeletonsEnabled && QQ.skeleton && (this._activeSkeletons.pushNoDuplicate(QQ.skeleton) && (QQ.skeleton.prepare(), this._activeBones.addCount(QQ.skeleton.bones.length, !1)), QQ.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(QQ) && this.frameG … [truncated]
+       }
+       _activeMesh(QQ, WQ) {
+         this._prepareSkeleton(WQ);
+         let XQ = QQ.UqQ || QQ.pE || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || WQ.bj;
+         if (WQ && WQ.ZD && WQ.ZD.length > 0) {
+           const wQ = this.getActiveSubMeshCandidates(WQ),
+             qQ = wQ.length;
+           XQ = XQ || 1 === qQ;
+           for (let TQ = 0; TQ < qQ; TQ++) {
+             const qQ = wQ.data[TQ];
+             this._evaluateSubMesh(qQ, WQ, QQ, XQ)
+           }
+         }
+       }
+ ... (50 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L844-L849` → after: `L9055-L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9055-L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9055-L9111) · [Before (L844-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L844-L849)

```diff
-             else if (kp && kp.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = Rp, this._delayedOnError = qp;
-             else {
-               try {
-                 this._texture = mp.createTexture(this.url, xp, this._invertY, kp, Lp, Rp, qp, this._buffer, void 0, this._format, this._forcedExtension, Up, wp, tp, dp)
-               } catch (Mp) {
-                 throw qp("error loading", Mp), Mp
+             }
+             WQ && QQ && (WQ.renderList.data = QQ, WQ.renderList.length = QQ.length), wQ.g.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
+           }
+           if (this._cameraDrawRenderTargetStage.length > 0) {
+             const WQ = this.getBoundingBoxRenderer?.();
+             WQ && !QQ && (QQ = WQ.renderList.length > 0 ? WQ.renderList.data.slice() : [], QQ.length = WQ.renderList.length);
+             for (let QQ = 0, XQ = this._cameraDrawRenderTargetStage; QQ < XQ.length; QQ++) {
+               TQ = XQ[QQ].action(this.activeCamera) || TQ
+             }
+             WQ && QQ && (WQ.renderList.data = QQ, WQ.renderList.length = QQ.length)
+           }
+           this._intermediateRendering = !1
+         }
+         TQ && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || QQ._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame … [truncated]
+         for (let wQ = 0, sQ = this._beforeCameraDrawStage; wQ < sQ.length; wQ++) {
+           sQ[wQ].action(this.activeCamera)
+ ... (41 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L854-L888` → after: `L9142-L9189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9142-L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9142-L9189) · [Before (L854-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L854-L888)

```diff
-           updateURL(pp) {
-             let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               cp = arguments.length > 2 ? arguments[2] : void 0,
-               Op = arguments.length > 3 ? arguments[3] : void 0;
-             this.url && (this.releaseInternalTexture(), this.Gl().markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = pp), this.url = pp, this._buffer = ip, this._forcedExtension = Op, this.delayLoadState = 4;
-             const op = this._delayedOnLoad;
-             this._delayedOnLoad = () => {
-               op ? op() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), cp && cp()
-             }, this.delayLoad()
-           }
-           delayLoad() {
-             if (4 !== this.delayLoadState) return;
-             const pp = this.Gl();
-             if (!pp) return;
-             let ip = this.url;
-             !ip && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (ip = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(ip, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
- ... (19 more removed lines; see GitHub link above)
+       }
+       resetDrawCache(QQ) {
+         if (this.meshes)
+           for (const WQ of this.meshes) WQ.resetDrawCache(QQ)
+       }
+       _renderWithFrameGraph() {
+         let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           WQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this.activeCamera = null, this.activeCameras = null, QQ)
+           for (const XQ of this.cameras)
+             if (XQ.update(), 0 !== XQ.cameraRigMode)
+               for (let QQ = 0; QQ < XQ._rigCameras.length; QQ++) XQ._rigCameras[QQ].update();
+         this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
+         try {
+           this._renderWithFrameGraphAfterBeforeRender(WQ)
+         } finally {
+ ... (32 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L890-L900` → after: `L9191-L9202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9191-L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9191-L9202) · [Before (L890-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L890-L900)

```diff
-             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Sp.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Sp.b.Zero());
-             const cp = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
-             switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMo … [truncated]
-               case pp.PLANAR_MODE:
-                 Sp.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
-                 break;
-               case pp.PROJECTION_MODE: {
-                 Sp.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
-                 const pp = ip.getProjectionMatrix();
-                 this._cachedReflectionProjectionMatrixId = pp.updateFlag, pp.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
-                 break
+           } else {
+             this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
+             for (let wQ = 0; wQ < XQ; wQ++) {
+               const XQ = WQ.data[wQ];
+               XQ._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, XQ.isBlocked || (this._totalVertices.addCount(XQ.getTotalVertices(), !1), XQ.isReady() && XQ.isEnabled() && !XQ.oB.hasAZeroComponent && (XQ.computeWorldMatrix(QQ), XQ.actionManager && XQ.actionManager.hasSpe … [truncated]
+             }
+             if (this.particlesEnabled)
+               for (let QQ = 0; QQ < this.KD.length; QQ++) {
+                 const WQ = this.KD[QQ];
+                 if (!WQ.isStarted() || !WQ.emitter) continue;
+                 const XQ = WQ.emitter;
+                 XQ.position && !XQ.isEnabled() || (this._activeParticleSystems.push(WQ), WQ.animate())
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L902-L903` → after: `L9204-L9252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9204-L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9204-L9252) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L902-L903)

```diff
-               default:
-                 Sp.b.IdentityToRef(this._cachedReflectionTextureMatrix)
+           }
+         }
+         this.frameGraph?.execute()
+       }
+       _renderRenderTarget(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._intermediateRendering = !0, QQ._shouldRender()) {
+           if (this._renderId++, this.activeCamera = WQ, !this.activeCamera) throw new Error("Active camera not set");
+           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), QQ.render(XQ, wQ)
+         }
+         this._intermediateRendering = !1
+       }
+       render() {
+         let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ ... (33 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L905` → after: `L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9254) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L905)

```diff
-             return cp && ip.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))), this._cachedReflectionTextureMatrix
+             wQ.g.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L907-L922` → after: `L9256-L9258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9256-L9258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9256-L9258) · [Before (L907-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L907-L922)

```diff
-           clone() {
-             const ip = {
-               noMipmap: this._noMipmap,
-               invertY: this._invertY,
-               samplingMode: this.samplingMode,
-               onLoad: void 0,
-               onError: void 0,
-               buffer: this._texture ? this._texture._buffer : void 0,
-               deleteBuffer: this._deleteBuffer,
-               format: this.textureFormat,
-               mimeType: this.mimeType,
-               loaderOptions: this._loaderOptions,
-               creationFlags: this._creationFlags,
-               useSRGBBuffer: this._useSRGBBuffer
-             };
-             return tp.c.Clone((() => new pp(this._texture ? this._texture.url : null, this.Gl(), ip)), this)
+           this._engine.currentRenderPassId = QQ?.renderPassId ?? 0, this.activeCamera = QQ, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(t … [truncated]
+           for (let WQ = 0, XQ = this._beforeClearStage; WQ < XQ.length; WQ++) {
+             XQ[WQ].action()
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L924-L935` → after: `L9260-L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9260-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9260-L9262) · [Before (L924-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L924-L935)

```diff
-           serialize() {
-             const ip = this.name;
-             pp.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
-             const cp = super.serialize(pp._SerializeInternalTextureUniqueId);
-             if (!cp) return null;
-             if (pp.SerializeBuffers || pp.ForceSerializeBuffers)
-               if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) cp.base64String = this._buffer, cp.name = cp.name.replace("data:", "");
-               else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
-               const pp = this.mimeType || "image/png";
-               cp.base64String = `data:${pp};base64,${(0,Wp.i)(this._buffer)}`
-             } else(pp.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (cp.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Up(this) : wp(this));
-             return cp.invertY = this._invertY, cp.samplingMode = this.samplingMode, cp._creationFlags = this._creationFlags, cp._useSRGBBuffer = this._useSRGBBuffer, pp._SerializeInternalTextureUniqueId && (cp.internalTextureUniqueId = this._texture?.uniqueId), cp.internalTexture … [truncated]
+           this._clearFrameBuffer(this.activeCamera);
+           for (let WQ = 0, XQ = this._gatherRenderTargetsStage; WQ < XQ.length; WQ++) {
+             XQ[WQ].action(this._renderTargets)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L937-L938` → after: `L9264-L9268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9264-L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9264-L9268) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L937-L938)

```diff
-           getClassName() {
-             return "Texture"
+           if (this.activeCameras && this.activeCameras.length > 0)
+             for (let WQ = 0; WQ < this.activeCameras.length; WQ++) this._processSubCameras(this.activeCameras[WQ], WQ > 0);
+           else {
+             if (!this.activeCamera) throw new Error("No camera defined");
+             this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L940-L941` → after: `L9270-L9278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9270-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9270-L9278) · [Before (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L940-L941)

```diff
-           dispose() {
-             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
+         }
+         this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
+         for (let XQ = 0, wQ = this._afterRenderStage; XQ < wQ.length; XQ++) {
+           wQ[XQ].action()
+         }
+         if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
+           for (let QQ = 0; QQ < this._toBeDisposed.length; QQ++) {
+             const WQ = this._toBeDisposed[QQ];
+             WQ && WQ.dispose()
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L943-L958` → after: `L9280-L9320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9280-L9320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9280-L9320) · [Before (L943-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L943-L958)

```diff
-           static Parse(ip, cp, Op) {
-             if (ip.customType) {
-               const pp = Ap.d.Instantiate(ip.customType).Parse(ip, cp, Op);
-               return ip.samplingMode && pp.updateSamplingMode && pp._samplingMode && pp._samplingMode !== ip.samplingMode && pp.updateSamplingMode(ip.samplingMode), pp
-             }
-             if (ip.isCube && !ip.isRenderTarget) return pp._CubeTextureParser(ip, cp, Op);
-             const op = void 0 !== ip.internalTextureUniqueId;
-             if (!ip.name && !ip.isRenderTarget && !op) return null;
-             let Ip;
-             if (op) {
-               const pp = cp.gy().getLoadedTexturesCache();
-               for (const cp of pp)
-                 if (cp.uniqueId === ip.internalTextureUniqueId) {
-                   Ip = cp;
-                   break
-                 }
+           this._toBeDisposed.length = 0
+         }
+         this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
+       }
+       freezeMaterials() {
+         for (let QQ = 0; QQ < this.materials.length; QQ++) this.materials[QQ].freeze()
+       }
+       unfreezeMaterials() {
+         for (let QQ = 0; QQ < this.materials.length; QQ++) this.materials[QQ].unfreeze()
+       }
+       dispose() {
+         if (this.rG) return;
+         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
+           for (const QQ of this._activeAnimatables) QQ.onAnimationEndObservable.clear(), QQ.onAnimationEnd = null;
+           this.stopAllAnimations()
+         }
+ ... (25 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L960-L1044` → after: `L9322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9322) · [Before (L960-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L960-L1044)

```diff
-             const Sp = pp => {
-               if (pp && pp._texture && (pp._texture._cachedWrapU = null, pp._texture._cachedWrapV = null, pp._texture._cachedWrapR = null), ip.samplingMode) {
-                 const cp = ip.samplingMode;
-                 pp && pp.samplingMode !== cp && pp.updateSamplingMode(cp)
-               }
-               if (pp && ip.animations)
-                 for (let cp = 0; cp < ip.animations.length; cp++) {
-                   const Op = ip.animations[cp],
-                     op = (0, Lp.d)("BABYLON.Animation");
-                   op && pp.animations.push(op.Parse(Op))
-                 }
-               pp && pp._texture && (op && !Ip && pp._texture._setUniqueId(ip.internalTextureUniqueId), pp._texture.label = ip.internalTextureLabel)
-             };
-             return tp.c.Parse((() => {
-               let op = !0;
-               if (ip.noMipmap && (op = !1), ip.mirrorPlane) {
- ... (69 more removed lines; see GitHub link above)
+             QQ--
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1046-L1240` → after: `L9324-L9325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9324-L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9324-L9325) · [Before (L1046-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1046-L1240)

```diff
-         }, (() => {
-           const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ep[Symbol.metadata] ?? null) : void 0;
-           ip = [(0, op.K)()], cp = [(0, op.K)()], yp = [(0, op.K)()], Hp = [(0, op.K)()], dp = [(0, op.K)()], ep = [(0, op.K)()], jp = [(0, op.K)()], kp = [(0, op.K)()], mp = [(0, op.K)()], Rp = [(0, op.K)()], qp = [(0, op.K)()], Mp = [(0, op.K)()], Cp = [(0, op.K)()], (0, Op.j)( … [truncated]
-             kind: "getter",
-             name: "isBlocking",
-             static: !1,
-             private: !1,
-             access: {
-               has: pp => "isBlocking" in pp,
-               get: pp => pp.isBlocking
-             },
-             metadata: Ip
-           }, null, Xp), (0, Op.j)(null, null, ip, {
-             kind: "field",
-             name: "url",
-             static: !1,
- ... (179 more removed lines; see GitHub link above)
+         }
+         wQ = this._engine._virtualScenes.indexOf(this), wQ > -1 && this._engine._virtualScenes.splice(wQ, 1), this._engine.wipeCaches(!0), this.yE.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1242-L1243` → after: `L9327-L9331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9327-L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9327-L9331) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1242-L1243)

```diff
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
+       _disposeList(QQ, WQ) {
+         const XQ = QQ.slice(0);
+         WQ = WQ ?? (QQ => QQ.dispose());
+         for (const wQ of XQ) WQ(wQ);
+         QQ.length = 0
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1245-L1246` → after: `L9333-L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9333-L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9333-L9334) · [Before (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1245-L1246)

```diff
-       getClassName() {
-         return "Size"
+       get rG() {
+         return this._isDisposed
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1248-L1250` → after: `L9336-L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9336-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9336-L9340) · [Before (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1248-L1250)

```diff
-       getHashCode() {
-         let pp = 0 | this.width;
-         return pp = 397 * pp ^ this.height, pp
+       clearCachedVertexData() {
+         for (let QQ = 0; QQ < this.meshes.length; QQ++) {
+           const WQ = this.meshes[QQ].geometry;
+           WQ && WQ.clearCachedData()
+         }
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1252-L1253` → after: `L9342-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9342-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9342-L9345) · [Before (L1252-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1252-L1253)

```diff
-       rM(pp) {
-         this.width = pp.width, this.height = pp.height
+       cleanCachedTextureBuffer() {
+         for (const QQ of this.textures) {
+           QQ._buffer && (QQ._buffer = null)
+         }
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1255-L1256` → after: `L9347-L9365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9347-L9365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9347-L9365) · [Before (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1255-L1256)

```diff
-       i5(pp, ip) {
-         return this.width = pp, this.height = ip, this
+       getWorldExtends(QQ) {
+         const WQ = new gQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           XQ = new gQ.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         QQ = QQ || (() => !0);
+         const wQ = this.meshes.filter(QQ);
+         for (const qQ of wQ) {
+           if (qQ.computeWorldMatrix(!0), !qQ.ZD || 0 === qQ.ZD.length || qQ.infiniteDistance) continue;
+           const QQ = qQ.uC(),
+             wQ = QQ.boundingBox.minimumWorld,
+             TQ = QQ.boundingBox.maximumWorld;
+           gQ.s.CheckExtends(wQ, WQ, XQ), gQ.s.CheckExtends(TQ, WQ, XQ)
+         }
+         return WQ.x === Number.MAX_VALUE ? {
+           min: gQ.s.Zero(),
+           max: gQ.s.Zero()
+         } : {
+ ... (3 more added lines; see GitHub link above)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1258-L1259` → after: `L9367-L9413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9367-L9413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9367-L9413) · [Before (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1258-L1259)

```diff
-       set(pp, ip) {
-         return this.i5(pp, ip)
+       createPickingRay(QQ, WQ, XQ, wQ) {
+         throw (0, UQ.i)("Ray")
+       }
+       createPickingRayToRef(QQ, WQ, XQ, wQ, qQ) {
+         throw (0, UQ.i)("Ray")
+       }
+       createPickingRayInCameraSpace(QQ, WQ, XQ) {
+         throw (0, UQ.i)("Ray")
+       }
+       createPickingRayInCameraSpaceToRef(QQ, WQ, XQ, wQ) {
+         throw (0, UQ.i)("Ray")
+       }
+       tr(QQ, WQ, XQ, wQ, qQ, TQ) {
+         const zQ = (0, UQ.i)("Ray", !0);
+         return zQ && QX.b.Warn(zQ), new IQ.b
+       }
+ ... (31 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1261-L1262` → after: `L9415-L9558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9415-L9558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9415-L9558) · [Before (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1261-L1262)

```diff
-       multiplyByFloats(pp, ip) {
-         return new Op(this.width * pp, this.height * ip)
+       _getByTags(QQ, WQ, XQ) {
+         if (void 0 === WQ) return QQ;
+         const wQ = [];
+         for (const qQ in QQ) {
+           const TQ = QQ[qQ];
+           PQ.d && PQ.d.MatchesQuery(TQ, WQ) && (!XQ || XQ(TQ)) && wQ.push(TQ)
+         }
+         return wQ
+       }
+       getMeshesByTags(QQ, WQ) {
+         return this._getByTags(this.meshes, QQ, WQ)
+       }
+       getCamerasByTags(QQ, WQ) {
+         return this._getByTags(this.cameras, QQ, WQ)
+       }
+       getLightsByTags(QQ, WQ) {
+ ... (128 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1264-L1265` → after: `L9560-L9561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9560-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9560-L9561) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1264-L1265)

```diff
-       clone() {
-         return new Op(this.width, this.height)
+       getGeometryByID(QQ) {
+         return this.getGeometryById(QQ)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1267-L1268` → after: `L9563-L9564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9563-L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9563-L9564) · [Before (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1267-L1268)

```diff
-       equals(pp) {
-         return !!pp && (this.width === pp.width && this.height === pp.height)
+       getMeshByID(QQ) {
+         return this.getMeshById(QQ)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1270-L1271` → after: `L9566-L9567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9566-L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9566-L9567) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1270-L1271)

```diff
-       get surface() {
-         return this.width * this.height
+       getMeshByUniqueID(QQ) {
+         return this.getMeshByUniqueId(QQ)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1273-L1274` → after: `L9569-L9570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9569-L9570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9569-L9570) · [Before (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1273-L1274)

```diff
-       static Zero() {
-         return new Op(0, 0)
+       getLastMeshByID(QQ) {
+         return this.getLastMeshById(QQ)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1276-L1277` → after: `L9572-L9573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9572-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9572-L9573) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1276-L1277)

```diff
-       add(pp) {
-         return new Op(this.width + pp.width, this.height + pp.height)
+       getMeshesByID(QQ) {
+         return this.getMeshesById(QQ)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1279-L1280` → after: `L9575-L9576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9575-L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9575-L9576) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1279-L1280)

```diff
-       subtract(pp) {
-         return new Op(this.width - pp.width, this.height - pp.height)
+       getTransformNodeByID(QQ) {
+         return this.getTransformNodeById(QQ)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1282-L1283` → after: `L9578-L9579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9578-L9579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9578-L9579) · [Before (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1282-L1283)

```diff
-       scale(pp) {
-         return new Op(this.width * pp, this.height * pp)
+       getTransformNodeByUniqueID(QQ) {
+         return this.getTransformNodeByUniqueId(QQ)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1285-L1288` → after: `L9581-L9582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9581-L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L9581-L9582) · [Before (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L1285-L1288)

```diff
-       static Lerp(pp, ip, cp) {
-         const op = pp.width + (ip.width - pp.width) * cp,
-           Ip = pp.height + (ip.height - pp.height) * cp;
-         return new Op(op, Ip)
+       getTransformNodesByID(QQ) {
+         return this.getTransformNodesById(QQ)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/261.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/261.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/261.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/261.js#L2)

```diff
- export const ids = [261];
+ export const ids = [261, 362];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4-L96` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/261.js#L4) · [Before (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/261.js#L4-L96)

```diff
-   40435: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp,
-       f: () => xp
-     });
-     var Op = cp(38905),
-       op = cp(40233),
-       Ip = cp(40411),
-       Sp = {};
-     class xp {
-       constructor(pp) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = pp, this.checkInputs = () => {}
-       }
-       add(pp) {
-         const ip = pp.getSimpleName();
-         this.attached[ip] ? Op.e.Warn("camera input of type " + ip + " already exists on camera") : (this.attached[ip] = pp, pp.camera = this.camera, pp.checkInputs && (this.checkInputs = this._addCheckInputs(pp.checkInputs.bind(pp))), this.attachedToElement && pp.attachControl(t … [truncated]
- ... (77 more removed lines; see GitHub link above)
+   40126: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L100-L511` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/261.js#L8-L10) · [Before (L100-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/261.js#L100-L511)

```diff
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(40107),
-       Sp = cp(37320),
-       xp = cp(40195),
-       Lp = cp(40654),
-       Yp = cp(37368),
-       Dp = cp(37349),
-       Ap = cp(40233),
-       Pp = cp(40033),
-       Wp = cp(38905),
-       yp = cp(40257),
-       Up = cp(38124),
-       wp = cp(40286);
-     var vp = cp(40113);
-     let tp = !1;
- ... (396 more removed lines; see GitHub link above)
+     class wQ {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersRepository : wQ.ShadersRepositoryWGSL
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L513-L514` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/261.js#L12-L13) · [Before (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/261.js#L513-L514)

```diff
-       getClassName() {
-         return "DynamicTexture"
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersStore : wQ.ShadersStoreWGSL
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L516-L575` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/261.js#L15-L16) · [Before (L516-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/261.js#L516-L575)

```diff
-       get canRescale() {
-         return !0
-       }
-       _recreate(pp) {
-         this._canvas.width = pp.width, this._canvas.height = pp.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(pp.width, pp.height, this._generateMipMaps, this.samplingMode)
-       }
-       scale(pp) {
-         const ip = this.getSize();
-         ip.width *= pp, ip.height *= pp, this._recreate(ip)
-       }
-       scaleTo(pp, ip) {
-         const cp = this.getSize();
-         cp.width = pp, cp.height = ip, this._recreate(cp)
-       }
-       getContext() {
-         return this._context
- ... (44 more removed lines; see GitHub link above)
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.IncludesShadersStore : wQ.IncludesShadersStoreWGSL
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L579-L581` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/261.js#L21-L23) · [Before (L579-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/261.js#L579-L581)

```diff
-   41367: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => op
+   61542: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       postprocessVertexShader: () => zQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L583-L605` → after: `L25-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/261.js#L25-L31) · [Before (L583-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/261.js#L583-L605)

```diff
-     var Op = cp(40654);
-     class op extends Op.d {
-       get depth() {
-         return this._depth
-       }
-       constructor(pp, ip, cp, op, Ip, Sp) {
-         let xp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           Lp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-           Yp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Op.d.TRILINEAR_SAMPLINGMODE,
-           Dp = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           Ap = arguments.length > 10 ? arguments[10] : void 0,
-           Pp = arguments.length > 11 ? arguments[11] : void 0;
-         super(null, Sp, !xp, Lp), this.format = Ip, this._texture = Sp.gy().createRawTexture2DArray(pp, ip, cp, op, Ip, xp, Lp, Yp, null, Dp, Ap ?? 0, Pp), this._depth = op, this.is2DArray = !0
-       }
-       update(pp) {
-         this.updateMipLevel(pp, 0)
- ... (7 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     const qQ = "postprocessVertexShader",
+       TQ = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/262.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/262.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L4)

```diff
-   40405: (pp, ip, cp) => {
+   40331: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L6-L12) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L6)

```diff
-       b: () => qp
+       e: () => rQ,
+       h: () => JQ,
+       j: () => FQ,
+       l: () => IQ,
+       p: () => PQ,
+       t: () => sQ,
+       w: () => gQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8-L41` → after: `L14-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L14-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L14-L21) · [Before (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L8-L41)

```diff
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(37320),
-       Sp = cp(40409),
-       xp = cp(40435),
-       Lp = cp(40380),
-       Yp = cp(40304);
-     let Dp = (() => {
-       var pp;
-       let ip, cp, Sp, xp, Dp, Ap, Pp, Wp, yp, Up, wp, vp = [],
-         tp = [],
-         Hp = [],
-         dp = [],
-         ep = [],
-         jp = [],
-         kp = [],
- ... (18 more removed lines; see GitHub link above)
+     var wQ = XQ(38956),
+       qQ = XQ(40337);
+ 
+     function TQ(QQ, WQ, XQ, wQ) {
+       switch (WQ) {
+         case 5120: {
+           let WQ = QQ.getInt8(XQ);
+           return wQ && (WQ = Math.max(WQ / 127, -1)), WQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L43-L57` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L23-L25) · [Before (L43-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L43-L57)

```diff
-         attachControl(pp) {
-           pp = Yp.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Gl(), this._engine = this._scene.gy(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ip => {
-             const cp = ip.event;
-             if (!cp.metaKey)
-               if (ip.type === Lp.d.KEYDOWN) {
-                 if (-1 !== this.keysUp.indexOf(cp.keyCode) || -1 !== this.keysDown.indexOf(cp.keyCode) || -1 !== this.keysLeft.indexOf(cp.keyCode) || -1 !== this.keysRight.indexOf(cp.keyCode) || -1 !== this.keysUpward.indexOf(cp.keyCode) || -1 !== this.keysDownward.indexOf(cp.key … [truncated]
-                   -1 === this._keys.indexOf(cp.keyCode) && this._keys.push(cp.keyCode), pp || cp.preventDefault()
-                 }
-               } else if (-1 !== this.keysUp.indexOf(cp.keyCode) || -1 !== this.keysDown.indexOf(cp.keyCode) || -1 !== this.keysLeft.indexOf(cp.keyCode) || -1 !== this.keysRight.indexOf(cp.keyCode) || -1 !== this.keysUpward.indexOf(cp.keyCode) || -1 !== this.keysDownward.indexOf(c … [truncated]
-               const ip = this._keys.indexOf(cp.keyCode);
-               ip >= 0 && this._keys.splice(ip, 1), pp || cp.preventDefault()
-             }
-           })))
+         case 5121: {
+           let WQ = QQ.getUint8(XQ);
+           return wQ && (WQ /= 255), WQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L59-L60` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L27-L29) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L59-L60)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         case 5122: {
+           let WQ = QQ.getInt16(XQ, !0);
+           return wQ && (WQ = Math.max(WQ / 32767, -1)), WQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L62-L77` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L31-L33) · [Before (L62-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L62-L77)

```diff
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const pp = this.camera,
-               ip = pp.movement.input,
-               cp = ip.getEntry("keyboard", "translate"),
-               Op = ip.getEntry("keyboard", "rotate"),
-               op = Op?.sensitivity ?? 1,
-               Sp = pp._localDirection.i5(0, 0, 0);
-             for (let Ip = 0; Ip < this._keys.length; Ip++) {
-               const ip = this._keys[Ip]; - 1 !== this.keysLeft.indexOf(ip) ? Sp.x -= 1 : -1 !== this.keysUp.indexOf(ip) ? Sp.z += 1 : -1 !== this.keysRight.indexOf(ip) ? Sp.x += 1 : -1 !== this.keysDown.indexOf(ip) ? Sp.z -= 1 : -1 !== this.keysUpward.indexOf(ip) ? Sp.y += 1 : -1 … [truncated]
-             }
-             if (cp && (0 !== Sp.x || 0 !== Sp.y || 0 !== Sp.z)) {
-               const ip = pp._computeLocalCameraSpeed() * (cp.sensitivity ?? 1);
-               Sp.normalize().scaleInPlace(ip), pp.Gl().useRightHandedSystem && (Sp.z *= -1), pp.getViewMatrix().invertToRef(pp._cameraTransformMatrix), Ip.o.TransformNormalToRef(Sp, pp._cameraTransformMatrix, pp._transformedDirection), pp.cameraDirection.addInPlace(pp._transforme … [truncated]
-             }
-           }
+         case 5123: {
+           let WQ = QQ.getUint16(XQ, !0);
+           return wQ && (WQ /= 65535), WQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L79-L80` → after: `L35-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L35-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L35-L107) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L79-L80)

```diff
-         getClassName() {
-           return "FreeCameraKeyboardMoveInput"
+         case 5131:
+           return (0, qQ.d)(QQ.getUint16(XQ, !0));
+         case 5124:
+           return QQ.getInt32(XQ, !0);
+         case 5125:
+           return QQ.getUint32(XQ, !0);
+         case 5126:
+           return QQ.getFloat32(XQ, !0);
+         default:
+           throw new Error(`Invalid component type ${WQ}`)
+       }
+     }
+ 
+     function zQ(QQ, WQ, XQ, wQ, TQ) {
+       switch (WQ) {
+         case 5120:
+ ... (57 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L82-L83` → after: `L109-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L109-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L109-L116) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L82-L83)

```diff
-         _onLostFocus() {
-           this._keys.length = 0
+       } else {
+         const IQ = ArrayBuffer.isView(QQ) ? new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength) : new DataView(QQ),
+           jQ = sQ(qQ);
+         for (let QQ = 0; QQ < FQ; QQ += wQ) {
+           for (let QQ = 0, XQ = WQ; QQ < wQ; QQ++, XQ += jQ) JQ[QQ] = rQ[QQ] = TQ(IQ, qQ, XQ, PQ);
+           gQ(rQ, QQ);
+           for (let QQ = 0, XQ = WQ; QQ < wQ; QQ++, XQ += jQ) JQ[QQ] !== rQ[QQ] && zQ(IQ, qQ, XQ, PQ, rQ[QQ]);
+           WQ += XQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L85-L86` → after: `L118-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L118-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L118-L133) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L85-L86)

```diff
-         getSimpleName() {
-           return "keyboard"
+       }
+     }
+ 
+     function PQ(QQ, WQ, XQ, qQ, TQ, zQ, PQ, gQ) {
+       const JQ = WQ * sQ(XQ),
+         rQ = PQ * WQ;
+       if (5126 !== XQ || TQ !== JQ) {
+         const wQ = new Float32Array(rQ);
+         return FQ(QQ, qQ, TQ, WQ, XQ, rQ, zQ, ((QQ, XQ) => {
+           for (let qQ = 0; qQ < WQ; qQ++) wQ[XQ + qQ] = QQ[qQ]
+         })), wQ
+       }
+       if (!(QQ instanceof Array || QQ instanceof Float32Array) || 0 !== qQ || QQ.length !== rQ) {
+         if (QQ instanceof Array) {
+           const WQ = qQ / 4;
+           return QQ.slice(WQ, WQ + rQ)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L88-L90` → after: `L135-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L135-L137) · [Before (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L88-L90)

```diff
-         _getLocalRotation() {
-           const pp = this.camera._calculateHandednessMultiplier();
-           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * pp
+         if (ArrayBuffer.isView(QQ)) {
+           const WQ = QQ.byteOffset + qQ;
+           return 0 !== (3 & WQ) && (wQ.b.Warn("Float array must be aligned to 4-bytes border"), gQ = !0), gQ ? new Float32Array(QQ.buffer.slice(WQ, WQ + rQ * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(QQ.buffer, WQ, rQ)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L92-L265` → after: `L139-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L139-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L139-L178) · [Before (L92-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L92-L265)

```diff
-       }, (() => {
-         const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ip = [(0, op.K)()], cp = [(0, op.K)()], Sp = [(0, op.K)()], xp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], Wp = [(0, op.K)()], yp = [(0, op.K)()], Up = [(0, op.K)()], wp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
-           kind: "field",
-           name: "keysUp",
-           static: !1,
-           private: !1,
-           access: {
-             has: pp => "keysUp" in pp,
-             get: pp => pp.keysUp,
-             set: (pp, ip) => {
-               pp.keysUp = ip
-             }
-           },
-           metadata: Ip
-         }, vp, tp), (0, Op.j)(null, null, cp, {
- ... (158 more removed lines; see GitHub link above)
+         return new Float32Array(QQ, qQ, rQ)
+       }
+       return gQ ? QQ.slice() : QQ
+     }
+ 
+     function gQ(QQ, WQ, XQ, qQ, TQ, zQ, PQ) {
+       const gQ = sQ(XQ),
+         JQ = function(QQ) {
+           switch (QQ) {
+             case 5120:
+               return Int8Array;
+             case 5121:
+               return Uint8Array;
+             case 5122:
+               return Int16Array;
+             case 5123:
+ ... (24 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L267-L304` → after: `L180-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L180-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L180-L267) · [Before (L267-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L267-L304)

```diff
-         attachControl(pp) {
-           pp = Yp.i.BackCompatCameraNoPreventDefault(arguments);
-           const ip = this.camera.gy(),
-             cp = ip.getInputElement();
-           this._pointerInput || (this._pointerInput = Op => {
-             const op = Op.event,
-               Ip = "touch" === op.pointerType;
-             if (!this.touchEnabled && Ip) return;
-             if (Op.type !== Pp.d.POINTERMOVE && -1 === this.buttons.indexOf(op.button)) return;
-             const Sp = op.target;
-             if (Op.type === Pp.d.POINTERDOWN) {
-               if (Ip && -1 !== this._activePointerId || !Ip && -1 !== this._currentActiveButton) return;
-               this._activePointerId = op.pointerId;
-               try {
-                 Sp?.setPointerCapture(op.pointerId)
-               } catch (xp) {} - 1 === this._currentActiveButton && (this._currentActiveButton = op.button), this._previousPosition = {
- ... (22 more removed lines; see GitHub link above)
+         return new JQ(QQ.slice(wQ, wQ + rQ))
+       }
+       let IQ, jQ = qQ;
+       ArrayBuffer.isView(QQ) ? (IQ = QQ.buffer, jQ += QQ.byteOffset) : IQ = QQ;
+       if (jQ + (zQ - 1) * TQ + WQ * gQ > IQ.byteLength) throw new Error("Last accessed byte is out of bounds.");
+       const BQ = WQ * gQ;
+       if (TQ < BQ) throw new Error("Byte stride cannot be smaller than the component's byte size.");
+       if (TQ !== BQ) {
+         const QQ = new JQ(rQ),
+           XQ = new Uint8Array(IQ, jQ),
+           wQ = new Uint8Array(QQ.buffer),
+           qQ = WQ * gQ;
+         for (let WQ = 0, sQ = 0, FQ = 0; WQ < zQ; WQ++, sQ += TQ, FQ += qQ) wQ.set(XQ.subarray(sQ, sQ + qQ), FQ);
+         return QQ
+       }
+       return 1 !== gQ && 0 !== (jQ & gQ - 1) && (wQ.b.Warn("Array must be aligned to border of element size. Data will be copied."), PQ = !0), PQ ? new JQ(IQ.slice(jQ, jQ + rQ * gQ)) : new JQ(IQ, jQ, rQ)
+ ... (72 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L306-L313` → after: `L269-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L269-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L269-L271) · [Before (L306-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L306-L313)

```diff
-           }), this._onMouseMove = cp => {
-             if (!ip.isPointerLock) return;
-             const Op = this.camera._calculateHandednessMultiplier();
-             this._applyPointerRotation(cp.movementX * Op, cp.movementY * Op), this._previousPosition = null, pp || cp.preventDefault()
-           }, this._observer = this.camera.Gl()._inputManager._addCameraPointerObserver(this._pointerInput, Pp.d.POINTERDOWN | Pp.d.POINTERUP | Pp.d.POINTERMOVE), cp && (this._contextMenuBind = pp => this.onContextMenu(pp), cp.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
-         }
-         onContextMenu(pp) {
-           pp.preventDefault()
+             WQ.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (WQ.lookForClosingBracketForUniformBuffer = !1, qQ.endOfUniformBufferProcessor && (XQ = qQ.endOfUniformBufferProcessor(this.line, WQ.isFragment, WQ.processingContext)))
+           }
+           wQ += XQ + "\n"
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L315-L319` → after: `L273-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L273-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L273-L308) · [Before (L315-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L315-L319)

```diff
-         detachControl() {
-           if (this._observer) {
-             if (this.camera.Gl()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
-               const pp = this.camera.gy().getInputElement();
-               pp && pp.removeEventListener("contextmenu", this._contextMenuBind)
+         for (const qQ of this.children) wQ += qQ.process(QQ, WQ, XQ);
+         return this.additionalDefineKey && (QQ[this.additionalDefineKey] = this.additionalDefineValue || "true", XQ[this.additionalDefineKey] = QQ[this.additionalDefineKey]), wQ
+       }
+     }
+     class qQ {
+       constructor() {
+         this._lines = []
+       }
+       get currentLine() {
+         return this._lines[this.lineIndex]
+       }
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
+       }
+       set lines(QQ) {
+         this._lines.length = 0;
+ ... (20 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L325-L329` → after: `L312-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L312-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L312-L318) · [Before (L325-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L325-L329)

```diff
-         getClassName() {
-           return "FreeCameraMouseInput"
-         }
-         getSimpleName() {
-           return "mouse"
+       }
+     }
+     class TQ extends wQ {
+       process(QQ, WQ, XQ) {
+         for (let wQ = 0; wQ < this.children.length; wQ++) {
+           const qQ = this.children[wQ];
+           if (qQ.isValid(QQ)) return qQ.process(QQ, WQ, XQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L331-L343` → after: `L320-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L320-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L320-L349) · [Before (L331-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L331-L343)

```diff
-       }, (() => {
-         const Yp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ip = [(0, op.K)()], cp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
-           kind: "field",
-           name: "buttons",
-           static: !1,
-           private: !1,
-           access: {
-             has: pp => "buttons" in pp,
-             get: pp => pp.buttons,
-             set: (pp, ip) => {
-               pp.buttons = ip
-             }
+         return ""
+       }
+     }
+     class zQ extends wQ {
+       isValid(QQ) {
+         return this.testExpression.isTrue(QQ)
+       }
+     }
+     class sQ {
+       isTrue(QQ) {
+         return !0
+       }
+       static postfixToInfix(QQ) {
+         const WQ = [];
+         for (const XQ of QQ)
+           if (void 0 === sQ._OperatorPriority[XQ]) WQ.push(XQ);
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L345-L356` → after: `L351-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L351-L352) · [Before (L345-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L345-L356)

```diff
-           metadata: Yp
-         }, Ip, Sp), (0, Op.j)(null, null, cp, {
-           kind: "field",
-           name: "angularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: pp => "angularSensibility" in pp,
-             get: pp => pp.angularSensibility,
-             set: (pp, ip) => {
-               pp.angularSensibility = ip
-             }
+           TQ = QQ => {
+             wQ < sQ._Stack.length - 1 && (sQ._Stack[++wQ] = QQ)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L358-L379` → after: `L354-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L354-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L354-L369) · [Before (L358-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L358-L379)

```diff
-           metadata: Yp
-         }, xp, Lp), Yp && Object.defineProperty(pp, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Yp
-         })
-       })(), pp
-     })();
-     xp.e.FreeCameraMouseInput = Wp;
-     var yp = cp(40388);
-     let Up = (() => {
-       var pp;
-       let ip, cp, Ip, Sp = [],
-         xp = [],
-         Lp = [],
- ... (6 more removed lines; see GitHub link above)
+           zQ = () => sQ._Stack[wQ],
+           FQ = () => -1 === wQ ? "!!INVALID EXPRESSION!!" : sQ._Stack[wQ--];
+         let PQ = 0,
+           gQ = "";
+         for (; PQ < QQ.length;) {
+           const WQ = QQ.charAt(PQ),
+             JQ = PQ < QQ.length - 1 ? QQ.substring(PQ, 2 + PQ) : "";
+           if ("(" === WQ) gQ = "", TQ(WQ);
+           else if (")" === WQ) {
+             for (qQ(); - 1 !== wQ && "(" !== zQ();) XQ.push(FQ());
+             FQ()
+           } else if (sQ._OperatorPriority[JQ] > 1) {
+             for (qQ(); - 1 !== wQ && sQ._OperatorPriority[zQ()] >= sQ._OperatorPriority[JQ];) XQ.push(FQ());
+             TQ(JQ), PQ++
+           } else gQ += WQ;
+           PQ++
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L381-L390` → after: `L371-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L371-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L371-L437) · [Before (L381-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L381-L390)

```diff
-         attachControl(pp) {
-           pp = Yp.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = ip => {
-             if (ip.type !== Pp.d.POINTERWHEEL) return;
-             const cp = ip.event,
-               Op = cp.deltaMode === yp.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
-             this._wheelDeltaX += this.wheelPrecisionX * Op * cp.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Op * cp.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Op * cp.deltaZ / this._normalize, cp.preventDefault && (pp || cp.pre … [truncated]
-           }, this._observer = this.camera.Gl()._inputManager._addCameraPointerObserver(this._wheel, Pp.d.POINTERWHEEL)
-         }
-         detachControl() {
-           this._observer && (this.camera.Gl()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
+         for (qQ(); - 1 !== wQ;) "(" === zQ() ? FQ() : XQ.push(FQ());
+         return sQ._InfixToPostfixCache.size >= sQ.InfixToPostfixCacheLimitSize && sQ.ClearCache(), sQ._InfixToPostfixCache.set(QQ, {
+           result: XQ,
+           accessTime: Date.now()
+         }), XQ
+       }
+       static ClearCache() {
+         const QQ = Array.from(sQ._InfixToPostfixCache.entries()).sort(((QQ, WQ) => QQ[1].accessTime - WQ[1].accessTime));
+         for (let WQ = 0; WQ < sQ.InfixToPostfixCacheCleanupSize; WQ++) sQ._InfixToPostfixCache.delete(QQ[WQ][0])
+       }
+     }
+     sQ.InfixToPostfixCacheLimitSize = 5e4, sQ.InfixToPostfixCacheCleanupSize = 25e3, sQ._InfixToPostfixCache = new Map, sQ._OperatorPriority = {
+       ")": 0,
+       "(": 1,
+       "||": 2,
+       "&&": 3
+ ... (51 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L392-L397` → after: `L439-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L439-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L439-L518) · [Before (L392-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L392-L397)

```diff
-         checkInputs() {
-           this.onChangedObservable.notifyObservers({
-             wheelDeltaX: this._wheelDeltaX,
-             wheelDeltaY: this._wheelDeltaY,
-             wheelDeltaZ: this._wheelDeltaZ
-           }), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0
+         return WQ
+       }
+     }
+     var rQ = XQ(40153),
+       IQ = XQ(40150);
+     const jQ = /defined\s*?\((.+?)\)/g,
+       BQ = /defined\s*?\[(.+?)\]/g,
+       yQ = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
+       VQ = /__decl__/,
+       DQ = /light\{X\}.(\w*)/g,
+       pQ = /\{X\}/g,
+       GQ = [],
+       UQ = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+ 
+     function bQ(QQ) {
+       QQ.processor && QQ.processor.initializeShaders && QQ.processor.initializeShaders(QQ.processingContext)
+ ... (64 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L399-L400` → after: `L520-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L520-L532) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L399-L400)

```diff
-         getClassName() {
-           return "BaseCameraMouseWheelInput"
+         let wQ = XQ[XQ.length - 1];
+         return "string" === typeof wQ && (wQ = wQ.replace(BQ, "defined($1)")), "string" === typeof wQ ? HQ(wQ) : wQ
+       }(qQ), XQ
+     }
+ 
+     function lQ(QQ, WQ, XQ, qQ) {
+       let TQ;
+       for (; hQ(QQ, XQ, qQ);) {
+         TQ = QQ.currentLine;
+         const zQ = TQ.substring(0, 5).toLowerCase();
+         if ("#else" === zQ) {
+           const XQ = new wQ;
+           return WQ.children.push(XQ), void hQ(QQ, XQ, qQ)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L402-L403` → after: `L534-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L534-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L534-L536) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L402-L403)

```diff
-         getSimpleName() {
-           return "mousewheel"
+         if ("#elif" === zQ) {
+           const QQ = aQ(TQ, 5);
+           WQ.children.push(QQ), XQ = QQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L405-L442` → after: `L538-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L538-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L538-L573) · [Before (L405-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L405-L442)

```diff
-       }, (() => {
-         const Yp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], (0, Op.j)(null, null, ip, {
-           kind: "field",
-           name: "wheelPrecisionX",
-           static: !1,
-           private: !1,
-           access: {
-             has: pp => "wheelPrecisionX" in pp,
-             get: pp => pp.wheelPrecisionX,
-             set: (pp, ip) => {
-               pp.wheelPrecisionX = ip
-             }
-           },
-           metadata: Yp
-         }, Sp, xp), (0, Op.j)(null, null, cp, {
- ... (22 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function hQ(QQ, WQ, XQ) {
+       for (; QQ.canRead;) {
+         QQ.lineIndex++;
+         const qQ = QQ.currentLine;
+         if (qQ.indexOf("#") >= 0) {
+           const wQ = UQ.exec(qQ);
+           if (wQ && wQ.length) {
+             switch (wQ[0]) {
+               case "#ifdef": {
+                 const wQ = new TQ;
+                 WQ.children.push(wQ);
+                 const zQ = aQ(qQ, 6);
+                 wQ.children.push(zQ), lQ(QQ, wQ, zQ, XQ);
+ ... (20 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L444-L491` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L575-L576) · [Before (L444-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L444-L491)

```diff
-           },
-           metadata: Yp
-         }, Wp, Up), Yp && Object.defineProperty(pp, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Yp
-         })
-       })(), pp
-     })();
-     var wp;
-     ! function(pp) {
-       pp[pp.MoveRelative = 0] = "MoveRelative", pp[pp.RotateRelative = 1] = "RotateRelative", pp[pp.MoveScene = 2] = "MoveScene"
-     }(wp || (wp = {}));
-     let vp = (() => {
-       var pp;
- ... (32 more removed lines; see GitHub link above)
+             continue
+           }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L493-L494` → after: `L578-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L578-L581) · [Before (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L493-L494)

```diff
-         set wheelYRotateRelative(pp) {
-           null === pp && this._wheelYAction !== wp.RotateRelative || (this._wheelYAction = wp.RotateRelative, this._wheelYActionCoordinate = pp)
+         const zQ = new wQ;
+         if (zQ.line = qQ, WQ.children.push(zQ), "#" === qQ[0] && "d" === qQ[1]) {
+           const QQ = qQ.replace(";", "").split(" ");
+           zQ.additionalDefineKey = QQ[1], 3 === QQ.length && (zQ.additionalDefineValue = QQ[2])
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L496-L497` → after: `L583-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L583-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L583-L642) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L496-L497)

```diff
-         get wheelYRotateRelative() {
-           return this._wheelYAction !== wp.RotateRelative ? null : this._wheelYActionCoordinate
+       }
+       return !1
+     }
+ 
+     function iQ(QQ, WQ, XQ, TQ) {
+       const zQ = new wQ,
+         sQ = new qQ;
+       return sQ.lineIndex = -1, sQ.lines = QQ.split("\n"), hQ(sQ, zQ, TQ), zQ.process(WQ, XQ, TQ)
+     }
+ 
+     function cQ(QQ, WQ) {
+       const XQ = QQ.defines,
+         wQ = {};
+       for (const qQ of XQ) {
+         const QQ = qQ.replace("#define", "").replace(";", "").trim().split(" ");
+         wQ[QQ[0]] = QQ.length > 1 ? QQ[1] : ""
+ ... (44 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L499-L500` → after: `L644-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L644-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L644-L690) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L499-L500)

```diff
-         set wheelZRotateRelative(pp) {
-           null === pp && this._wheelZAction !== wp.RotateRelative || (this._wheelZAction = wp.RotateRelative, this._wheelZActionCoordinate = pp)
+       }
+       GQ.length = 0;
+       const zQ = qQ.join("");
+       TQ ? AQ(zQ.toString(), WQ, XQ) : XQ(zQ)
+     }
+     const RQ = {
+       loadFile: (QQ, WQ, XQ, wQ, qQ, TQ) => {
+         throw (0, rQ.i)("FileTools")
+       }
+     }
+   },
+   40150: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => qQ,
+       e: () => TQ,
+       h: () => sQ,
+ ... (31 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L502-L503` → after: `L692-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L692-L694) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L502-L503)

```diff
-         get wheelZRotateRelative() {
-           return this._wheelZAction !== wp.RotateRelative ? null : this._wheelZActionCoordinate
+         case 0: {
+           const QQ = new Uint8Array(WQ);
+           return wQ && QQ.set(new Uint8Array(wQ)), QQ
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L505-L506` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L696-L698) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L505-L506)

```diff
-         set wheelXMoveScene(pp) {
-           null === pp && this._wheelXAction !== wp.MoveScene || (this._wheelXAction = wp.MoveScene, this._wheelXActionCoordinate = pp)
+         case 4: {
+           const QQ = "number" !== typeof WQ ? new Int16Array(WQ) : new Int16Array(XQ ? WQ / 2 : WQ);
+           return wQ && QQ.set(new Int16Array(wQ)), QQ
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L508-L509` → after: `L700-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L700-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L700-L706) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L508-L509)

```diff
-         get wheelXMoveScene() {
-           return this._wheelXAction !== wp.MoveScene ? null : this._wheelXActionCoordinate
+         case 5:
+         case 8:
+         case 9:
+         case 10:
+         case 2: {
+           const QQ = "number" !== typeof WQ ? new Uint16Array(WQ) : new Uint16Array(XQ ? WQ / 2 : WQ);
+           return wQ && QQ.set(new Uint16Array(wQ)), QQ
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L511-L512` → after: `L708-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L708-L710) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L511-L512)

```diff
-         set wheelYMoveScene(pp) {
-           null === pp && this._wheelYAction !== wp.MoveScene || (this._wheelYAction = wp.MoveScene, this._wheelYActionCoordinate = pp)
+         case 6: {
+           const QQ = "number" !== typeof WQ ? new Int32Array(WQ) : new Int32Array(XQ ? WQ / 4 : WQ);
+           return wQ && QQ.set(new Int32Array(wQ)), QQ
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L514-L515` → after: `L712-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L712-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L712-L719) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L514-L515)

```diff
-         get wheelYMoveScene() {
-           return this._wheelYAction !== wp.MoveScene ? null : this._wheelYActionCoordinate
+         case 7:
+         case 11:
+         case 12:
+         case 13:
+         case 14:
+         case 15: {
+           const QQ = "number" !== typeof WQ ? new Uint32Array(WQ) : new Uint32Array(XQ ? WQ / 4 : WQ);
+           return wQ && QQ.set(new Uint32Array(wQ)), QQ
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L517-L518` → after: `L721-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L721-L723) · [Before (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L517-L518)

```diff
-         set wheelZMoveScene(pp) {
-           null === pp && this._wheelZAction !== wp.MoveScene || (this._wheelZAction = wp.MoveScene, this._wheelZActionCoordinate = pp)
+         case 1: {
+           const QQ = "number" !== typeof WQ ? new Float32Array(WQ) : new Float32Array(XQ ? WQ / 4 : WQ);
+           return wQ && QQ.set(new Float32Array(wQ)), QQ
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L520-L521` → after: `L725-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L725-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L725-L751) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L520-L521)

```diff
-         get wheelZMoveScene() {
-           return this._wheelZAction !== wp.MoveScene ? null : this._wheelZActionCoordinate
+       }
+       const qQ = new Uint8Array(WQ);
+       return wQ && qQ.set(new Uint8Array(wQ)), qQ
+     }
+   },
+   40153: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => PQ,
+       g: () => gQ,
+       h: () => FQ,
+       i: () => qQ
+     });
+     const wQ = {};
+ 
+     function qQ(QQ) {
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !wQ[QQ]) return wQ[QQ] = !0, `${QQ} needs to be imported before as it contains a side-effect required by your code.`
+ ... (11 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L523-L529` → after: `L753-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L753-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L753-L914) · [Before (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L523-L529)

```diff
-         checkInputs() {
-           if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
-           this._moveRelative.E_(0), this._rotateRelative.E_(0), this._moveScene.E_(0), this._updateCamera(), this.camera.Gl().useRightHandedSystem && (this._moveRelative.z *= -1);
-           const pp = Ip.b.Zero();
-           this.camera.getViewMatrix().invertToRef(pp);
-           const ip = Ip.o.Zero();
-           Ip.o.TransformNormalToRef(this._moveRelative, pp, ip), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(ip), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
+       };
+       return wQ.__isSideEffectStub = !0, wQ
+     }
+ 
+     function PQ(QQ) {
+       return !!QQ && !QQ.__isSideEffectStub
+     }
+ 
+     function gQ(QQ, WQ) {
+       return {
+         get() {},
+         set(QQ) {
+           Object.defineProperty(this, WQ, {
+             value: QQ,
+             writable: !0,
+             configurable: !0,
+ ... (146 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L531-L532` → after: `L916-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L916-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L916-L949) · [Before (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L531-L532)

```diff
-         _updateCamera() {
-           this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._whee … [truncated]
+         let rQ = !1;
+         if (QQ instanceof ArrayBuffer || ArrayBuffer.isView(QQ))
+           if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
+             let WQ;
+             WQ = QQ instanceof ArrayBuffer ? QQ : (0, jQ.l)(QQ), TQ = URL.createObjectURL(new Blob([WQ], {
+               type: sQ
+             })), rQ = !0
+           } else TQ = `data:${sQ};base64,` + (0, FQ.d)(QQ);
+         else QQ instanceof Blob ? (TQ = URL.createObjectURL(QQ), rQ = !0) : (TQ = pQ.CleanUrl(QQ), TQ = pQ.PreprocessUrl(TQ));
+         const IQ = WQ => {
+           if (XQ) {
+             const wQ = TQ || QQ.toString();
+             XQ(`Error while trying to load image: ${0===wQ.indexOf("http")||wQ.length<=128?wQ:wQ.slice(0,128)+"..."}`, WQ)
+           }
+         };
+         if (JQ?._features.forceBitmapOverHTMLImageElement) return dQ(TQ, (wQ => {
+ ... (18 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L534-L546` → after: `L951-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L951-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L951-L961) · [Before (L534-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L534-L546)

```diff
-         _updateCameraProperty(pp, ip, cp) {
-           if (0 === pp) return;
-           if (null === ip || null === cp) return;
-           let Op = null;
-           switch (ip) {
-             case wp.MoveRelative:
-               Op = this._moveRelative;
-               break;
-             case wp.RotateRelative:
-               Op = this._rotateRelative;
-               break;
-             case wp.MoveScene:
-               Op = this._moveScene
+         GQ(TQ, BQ);
+         const yQ = [],
+           VQ = () => {
+             for (const QQ of yQ) QQ.target.removeEventListener(QQ.name, QQ.handler);
+             yQ.length = 0
+           };
+         yQ.push({
+           target: BQ,
+           name: "load",
+           handler: () => {
+             VQ(), WQ(BQ), rQ && BQ.src && URL.revokeObjectURL(BQ.src)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L548-L556` → after: `L963-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L963-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L963-L967) · [Before (L548-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L548-L556)

```diff
-           switch (cp) {
-             case 0:
-               Op.set(pp, 0, 0);
-               break;
-             case 1:
-               Op.set(0, pp, 0);
-               break;
-             case 2:
-               Op.set(0, 0, pp)
+         }), yQ.push({
+           target: BQ,
+           name: "error",
+           handler: QQ => {
+             VQ(), IQ(QQ), rQ && BQ.src && URL.revokeObjectURL(BQ.src)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L558-L666` → after: `L969-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L969-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L969-L992) · [Before (L558-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L558-L666)

```diff
-         }
-       }, (() => {
-         const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Wp[Symbol.metadata] ?? null) : void 0;
-         ip = [(0, op.K)()], cp = [(0, op.K)()], Sp = [(0, op.K)()], xp = [(0, op.K)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], (0, Op.j)(pp, null, ip, {
-           kind: "setter",
-           name: "wheelXMoveRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: pp => "wheelXMoveRelative" in pp,
-             set: (pp, ip) => {
-               pp.wheelXMoveRelative = ip
-             }
-           },
-           metadata: Ip
-         }, null, yp), (0, Op.j)(pp, null, cp, {
- ... (93 more removed lines; see GitHub link above)
+         }), yQ.push({
+           target: document,
+           name: "securitypolicyviolation",
+           handler: QQ => {
+             if (QQ.blockedURI !== BQ.src || "nI" === QQ.disposition) return;
+             VQ();
+             const WQ = new Error(`CSP violation of policy ${QQ.effectiveDirective} ${QQ.blockedURI}. Current policy is ${QQ.originalPolicy}`);
+             PQ.d.UseFallbackTexture = !1, IQ(WQ), rQ && BQ.src && URL.revokeObjectURL(BQ.src), BQ.src = ""
+           }
+         }), (() => {
+           for (const QQ of yQ) QQ.target.addEventListener(QQ.name, QQ.handler)
+         })();
+         const DQ = "blob:" === TQ.substring(0, 5),
+           bQ = "data:" === TQ.substring(0, 5),
+           vQ = () => {
+             DQ || bQ || !wQ.b.IsCustomRequestAvailable ? BQ.src = TQ : dQ(TQ, ((QQ, WQ, XQ) => {
+ ... (8 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L668-L713` → after: `L994-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L994-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L994-L1011) · [Before (L668-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L668-L713)

```diff
-           metadata: Ip
-         }, null, yp), Ip && Object.defineProperty(pp, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Ip
-         })
-       })(), pp
-     })();
-     xp.e.FreeCameraMouseWheelInput = vp;
-     let tp = (() => {
-       var pp;
-       let ip, cp, Sp = [],
-         xp = [],
-         Lp = [],
-         Dp = [];
- ... (30 more removed lines; see GitHub link above)
+           HQ = () => {
+             qQ && qQ.loadImage(TQ, BQ)
+           };
+         if (!DQ && !bQ && qQ && qQ.enableTexturesOffline) qQ.open(HQ, vQ);
+         else {
+           if (-1 !== TQ.indexOf("file:")) {
+             const QQ = decodeURIComponent(TQ.substring(5).toLowerCase());
+             if (zQ.FilesToLoad[QQ] && "undefined" !== typeof URL) {
+               try {
+                 let WQ;
+                 try {
+                   WQ = URL.createObjectURL(zQ.FilesToLoad[QQ])
+                 } catch (aQ) {
+                   WQ = URL.createObjectURL(zQ.FilesToLoad[QQ])
+                 }
+                 BQ.src = WQ, rQ = !0
+ ... (2 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L715-L724` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L1013) · [Before (L715-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L715-L724)

```diff
-             }), this._observer = this.camera.Gl()._inputManager._addCameraPointerObserver(this._pointerInput, Pp.d.POINTERDOWN | Pp.d.POINTERUP | Pp.d.POINTERMOVE), this._onLostFocus) {
-             const pp = this.camera.gy().getInputElement();
-             pp && pp.addEventListener("blur", this._onLostFocus)
-           }
-         }
-         detachControl() {
-           if (this._pointerInput) {
-             if (this._observer && (this.camera.Gl()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
-               const pp = this.camera.gy().getInputElement();
-               pp && pp.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
+               return BQ
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L729-L746` → after: `L1018-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1018-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L1018-L1056) · [Before (L729-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L729-L746)

```diff
-         checkInputs() {
-           if (null === this._offsetX || null === this._offsetY) return;
-           if (0 === this._offsetX && 0 === this._offsetY) return;
-           const pp = this.camera,
-             ip = pp.movement.input,
-             cp = ip.getEntry("touch", "rotate"),
-             Op = ip.getEntry("touch", "translate"),
-             op = pp._calculateHandednessMultiplier(),
-             Sp = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
-           if (cp) {
-             const ip = cp.sensitivity ?? 1 / this.touchAngularSensibility;
-             pp.cameraRotation.y = this._offsetX * op * ip, Sp && (pp.cameraRotation.x = -this._offsetY * op * ip)
-           }
-           if (!Sp && Op) {
-             const ip = pp._computeLocalCameraSpeed(),
-               cp = Op.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
- ... (2 more removed lines; see GitHub link above)
+         return BQ
+       },
+       vQ = (QQ, WQ, XQ, wQ, qQ) => {
+         const zQ = new FileReader,
+           sQ = {
+             onCompleteObservable: new TQ.b,
+             abort: () => zQ.abort()
+           };
+         return zQ.onloadend = () => sQ.onCompleteObservable.notifyObservers(sQ), qQ && (zQ.onerror = () => {
+           qQ(new DQ(`Unable to read ${QQ.name}`, QQ))
+         }), zQ.onload = QQ => {
+           WQ(QQ.target.result)
+         }, XQ && (zQ.onprogress = XQ), wQ ? zQ.readAsArrayBuffer(QQ) : zQ.readAsText(QQ), sQ
+       },
+       dQ = (QQ, WQ, XQ, wQ, qQ, FQ, PQ) => {
+         if (QQ.name) return vQ(QQ, WQ, XQ, qQ, FQ ? QQ => {
+ ... (23 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L749-L750` → after: `L1062-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1062-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L1062-L1168) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L749-L750)

```diff
-         getClassName() {
-           return "FreeCameraTouchInput"
+         return HQ(gQ, ((QQ, XQ) => {
+           WQ(QQ, XQ?.responseURL, XQ?.getResponseHeader("content-type"))
+         }), XQ, wQ, qQ, FQ ? QQ => {
+           FQ(QQ.request, new yQ(QQ.message, QQ.request))
+         } : void 0, PQ)
+       },
+       HQ = (QQ, WQ, XQ, zQ, sQ, FQ, gQ) => {
+         null !== zQ && (zQ ?? (zQ = PQ.d.LastCreatedScene?.offlineProvider)), QQ = pQ.CleanUrl(QQ), QQ = pQ.PreprocessUrl(QQ);
+         const JQ = pQ.BaseUrl + QQ;
+         let IQ = !1;
+         const jQ = {
+             onCompleteObservable: new TQ.b,
+             abort: () => IQ = !0
+           },
+           BQ = () => {
+             let QQ, TQ = new wQ.b,
+ ... (91 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L752-L753` → after: `L1170-L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1170-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L1170-L1181) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L752-L753)

```diff
-         getSimpleName() {
-           return "touch"
+       },
+       lQ = () => "undefined" !== typeof location && "file:" === location.protocol,
+       hQ = QQ => BQ.test(QQ),
+       iQ = QQ => {
+         const WQ = BQ.exec(QQ);
+         if (null === WQ || 0 === WQ.length) return {
+           match: !1,
+           type: ""
+         };
+         return {
+           match: !0,
+           type: WQ[0].replace("data:", "").replace(";base64,", "")
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L755-L831` → after: `L1183-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1183-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L1183-L1334) · [Before (L755-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L755-L831)

```diff
-       }, (() => {
-         const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ip = [(0, op.K)()], cp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
-           kind: "field",
-           name: "touchAngularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: pp => "touchAngularSensibility" in pp,
-             get: pp => pp.touchAngularSensibility,
-             set: (pp, ip) => {
-               pp.touchAngularSensibility = ip
-             }
-           },
-           metadata: Ip
-         }, Sp, xp), (0, Op.j)(null, null, cp, {
- ... (61 more removed lines; see GitHub link above)
+       };
+ 
+     function cQ(QQ) {
+       return (0, FQ.b)(QQ.split(",")[1])
+     }
+     const AQ = QQ => (0, FQ.c)(QQ.split(",")[1]);
+     let RQ;
+     const EQ = (QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) => {
+       RQ = {
+         DecodeBase64UrlToBinary: QQ,
+         DecodeBase64UrlToString: WQ,
+         DefaultRetryStrategy: XQ.DefaultRetryStrategy,
+         BaseUrl: XQ.BaseUrl,
+         CorsBehavior: XQ.CorsBehavior,
+         PreprocessUrl: XQ.PreprocessUrl,
+         IsBase64DataUrl: wQ,
+ ... (136 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L833-L968` → after: `L1336-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1336-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L1336-L1391) · [Before (L833-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L833-L968)

```diff
-         return pp = class extends Dp {
-           get angularSensibility() {
-             const pp = this.inputs.attached.mouse;
-             return pp ? pp.angularSensibility : 0
-           }
-           set angularSensibility(pp) {
-             const ip = this.inputs.attached.mouse;
-             ip && (ip.angularSensibility = pp)
-           }
-           get keysUp() {
-             const pp = this.inputs.attached.keyboard;
-             return pp ? pp.keysUp : []
-           }
-           set keysUp(pp) {
-             const ip = this.inputs.attached.keyboard;
-             ip && (ip.keysUp = pp)
- ... (120 more removed lines; see GitHub link above)
+           for (const WQ of QQ) WQ()
+         }), 1), wQ.push(QQ)
+       }
+     }
+ 
+     function TQ(QQ, WQ, XQ) {
+       try {
+         if (QQ()) return WQ(), !0
+       } catch (wQ) {
+         return XQ?.(wQ), !0
+       }
+       return !1
+     }
+     const zQ = function(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
+         qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
+ ... (40 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L970-L1028` → after: `L1393-L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1393-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L1393-L1415) · [Before (L970-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L970-L1028)

```diff
-         }, (() => {
-           const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Dp[Symbol.metadata] ?? null) : void 0;
-           ip = [(0, op.H)()], cp = [(0, op.H)()], xp = [(0, op.K)()], Lp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
-             kind: "field",
-             name: "ellipsoid",
-             static: !1,
-             private: !1,
-             access: {
-               has: pp => "ellipsoid" in pp,
-               get: pp => pp.ellipsoid,
-               set: (pp, ip) => {
-                 pp.ellipsoid = ip
-               }
-             },
-             metadata: Ip
-           }, Ap, Pp), (0, Op.j)(null, null, cp, {
- ... (43 more removed lines; see GitHub link above)
+         };
+         for (const qQ of wQ.CustomRequestModifiers) {
+           if (wQ._ShouldSkipRequestModifications(QQ)) break;
+           const WQ = qQ(XQ, QQ);
+           "string" === typeof WQ && (QQ = WQ)
+         }
+         return {
+           url: QQ,
+           headers: WQ
+         }
+       }
+       static async FetchAsync(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const XQ = WQ.method ?? "GET";
+         if ("undefined" !== typeof fetch) {
+           const {
+ ... (7 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1030-L1033` → after: `L1417-L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1417-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/262.js#L1417-L1508) · [Before (L1030-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/262.js#L1030-L1033)

```diff
-         })(), pp
-       })(),
-       Mp = !1;
-     Mp || (Mp = !0, (0, Rp.g)("BABYLON.FreeCamera", qp))
+         }
+         return await new Promise(((qQ, TQ) => {
+           const zQ = new wQ;
+           zQ.responseType = "arraybuffer", zQ.addEventListener("readystatechange", (() => {
+             if (4 === zQ.readyState)
+               if (zQ.status >= 200 && zQ.status < 300) {
+                 const QQ = "undefined" !== typeof Headers ? new Headers : void 0,
+                   WQ = zQ.getResponseHeader("Content-Type");
+                 WQ && QQ && QQ.set("Content-Type", WQ), "undefined" !== typeof Response ? qQ(new Response(zQ.response, {
+                   status: zQ.status,
+                   statusText: zQ.statusText,
+                   headers: QQ
+                 })) : qQ({
+                   ok: !0,
+                   status: zQ.status,
+                   statusText: zQ.statusText,
+ ... (76 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/263.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/263.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696)

#### 1. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L4)

```diff
-   40451: (pp, ip, cp) => {
+   40363: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L8-L476` → after: `L8-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L8-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L8-L22) · [Before (L8-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L8-L476)

```diff
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(37320),
-       Sp = cp(37487),
-       xp = cp(40415),
-       Lp = cp(40332),
-       Yp = cp(37368),
-       Dp = cp(40398),
-       Ap = cp(40233);
-     let Pp = (() => {
-       var pp, ip;
-       let cp, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp = xp.b,
-         Rp = [],
-         qp = [],
-         Mp = [],
-         Cp = [],
- ... (453 more removed lines; see GitHub link above)
+     var wQ = XQ(38956),
+       qQ = XQ(37418);
+     class TQ {
+       static Instantiate(QQ) {
+         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[QQ]) return this.RegisteredExternalClasses[QQ];
+         const WQ = (0, qQ.b)(QQ);
+         if (WQ) return WQ;
+         wQ.b.Warn(QQ + " not found, you may have missed an import.");
+         const XQ = QQ.split(".");
+         let TQ = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
+         for (let wQ = 0, qQ = XQ.length; wQ < qQ; wQ++) TQ = TQ[XQ[wQ]];
+         return "function" !== typeof TQ ? null : TQ
+       }
+     }
+     TQ.RegisteredExternalClasses = {}
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L478` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L24) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L478)

```diff
-   40415: (pp, ip, cp) => {
+   40178: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L480` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L26) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L480)

```diff
-       b: () => Ap
+       e: () => qQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L482-L488` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L28) · [Before (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L482-L488)

```diff
-     var Op = cp(40203),
-       op = cp(37320),
-       Ip = cp(40210),
-       Sp = cp(37349),
-       xp = cp(37345),
-       Lp = cp(40096),
-       Yp = cp(40233);
+     var wQ = XQ(40142);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L490-L491` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L30-L31) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L490-L491)

```diff
-       constructor() {
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Sp.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+       static get Now() {
+         return (0, wQ.l)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L494-L668` → after: `L34-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L34-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L34-L243) · [Before (L494-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L494-L668)

```diff
-     let Ap = (() => {
-       var pp;
-       let ip, cp, Ap, Pp, Wp, yp = [],
-         Up = [],
-         wp = [],
-         vp = [],
-         tp = [],
-         Hp = [],
-         dp = [],
-         ep = [],
-         jp = [],
-         kp = [];
-       return pp = class {
-         static AddNodeConstructor(pp, ip) {
-           this._NodeConstructors[pp] = ip
-         }
- ... (159 more removed lines; see GitHub link above)
+   },
+   40206: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       let WQ = 1;
+       do {
+         WQ *= 2
+       } while (WQ < QQ);
+       return WQ === QQ
+     }
+ 
+     function qQ(QQ, WQ, XQ) {
+       return QQ * (1 - XQ) + WQ * XQ
+     }
+ 
+     function TQ(QQ) {
+       const WQ = zQ(QQ),
+ ... (194 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L670-L676` → after: `L245-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L245-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L245-L269) · [Before (L670-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L670-L676)

```diff
-         eC(pp) {
-           if (this._nodeDataStorage._isEnabled === pp) return;
-           const ip = this._hasEffectiveEnabledStateObservers(),
-             cp = ip ? this.isEnabled() : null;
-           if (this._nodeDataStorage._isEnabled = pp, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(pp), ip) {
-             const pp = this.isEnabled();
-             pp !== cp && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(pp)
+         return QQ
+       }
+       static GetBabylonScriptURL(QQ, WQ) {
+         if (!QQ) return "";
+         if (QQ.startsWith(wQ._DefaultCdnUrl))
+           if (wQ.ScriptBaseUrl) {
+             const WQ = wQ.ScriptBaseUrl.endsWith("/") ? wQ.ScriptBaseUrl.slice(0, -1) : wQ.ScriptBaseUrl;
+             QQ = QQ.replace(wQ._DefaultCdnUrl, WQ)
+           } else if (wQ._CdnVersion) {
+           const WQ = `${wQ._DefaultCdnUrl}/v${wQ._CdnVersion}`;
+           QQ.startsWith(WQ) || (QQ = QQ.replace(wQ._DefaultCdnUrl, WQ))
+         }
+         return QQ = wQ.ScriptPreprocessUrl(QQ), WQ && !wQ.IsAbsoluteUrl(QQ) && (QQ = wQ.GetAbsoluteUrl(QQ)), QQ
+       }
+       static LoadBabylonScript(QQ, WQ, XQ, qQ) {
+         QQ = wQ.GetBabylonScriptURL(QQ), wQ.LoadScript(QQ, WQ, XQ)
+ ... (9 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L678-L688` → after: `L271-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L271-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L271-L275) · [Before (L678-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L678-L688)

```diff
-         }
-         isDescendantOf(pp) {
-           return !!this.parent && (this.parent === pp || this.parent.isDescendantOf(pp))
-         }
-         _getDescendants(pp) {
-           let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-             cp = arguments.length > 2 ? arguments[2] : void 0;
-           if (this._children)
-             for (let Op = 0; Op < this._children.length; Op++) {
-               const op = this._children[Op];
-               cp && !cp(op) || pp.push(op), ip || op._getDescendants(pp, !1, cp)
+           wQ.LoadFile(QQ, (QQ => {
+             try {
+               Function(QQ).apply(null), WQ && WQ()
+             } catch (wQ) {
+               XQ && XQ("LoadScript Error", wQ)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L691-L716` → after: `L281-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L281-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L281-L288) · [Before (L691-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L691-L716)

```diff
-         getDescendants(pp, ip) {
-           const cp = [];
-           return this._getDescendants(cp, pp, ip), cp
-         }
-         getChildMeshes(pp, ip) {
-           const cp = [];
-           return this._getDescendants(cp, pp, (pp => (!ip || ip(pp)) && void 0 !== pp.cullingStrategy)), cp
-         }
-         getChildren(pp) {
-           let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           return this.getDescendants(ip, pp)
-         }
-         _setReady(pp) {
-           pp !== this._nodeDataStorage._isReady && (pp ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
-         }
-         getAnimationByName(pp) {
- ... (10 more removed lines; see GitHub link above)
+       }
+       static _LoadScriptWeb(QQ, WQ, XQ, wQ) {
+         let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if ("function" === typeof importScripts) {
+           try {
+             importScripts(QQ), WQ && WQ()
+           } catch (FQ) {
+             XQ?.(`Unable to load script '${QQ}' in worker`, FQ)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L719-L725` → after: `L349-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L349-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L349-L356) · [Before (L719-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L719-L725)

```diff
-         deleteAnimationRange(pp) {
-           let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           for (let cp = 0, Op = this.animations.length; cp < Op; cp++) this.animations[cp] && this.animations[cp].deleteRange(pp, ip);
-           this._ranges[pp] = null
-         }
-         getAnimationRange(pp) {
-           return this._ranges[pp] || null
+       }
+       static UnregisterTopRootEvents(QQ, WQ) {
+         for (let wQ = 0; wQ < WQ.length; wQ++) {
+           const qQ = WQ[wQ];
+           QQ.removeEventListener(qQ.name, qQ.handler);
+           try {
+             QQ.parent && QQ.parent.removeEventListener(qQ.name, qQ.handler)
+           } catch (XQ) {}
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L727-L734` → after: `L358-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L358-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L358-L393) · [Before (L727-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L727-L734)

```diff
-         clone(ip, cp, Op) {
-           const op = Yp.c.Clone((() => new pp(ip, this.Gl())), this);
-           if (cp && (op.parent = cp), !Op) {
-             const pp = this.getDescendants(!0);
-             for (let cp = 0; cp < pp.length; cp++) {
-               const Op = pp[cp];
-               Op.clone(ip + "." + Op.name, op)
-             }
+       }
+       static async DumpFramebuffer(QQ, WQ, XQ, wQ) {
+         throw (0, PQ.i)("DumpTools")
+       }
+       static DumpData(QQ, WQ, XQ, wQ) {
+         throw (0, PQ.i)("DumpTools")
+       }
+       static async DumpDataAsync(QQ, WQ, XQ) {
+         throw (0, PQ.i)("DumpTools")
+       }
+       static _IsOffScreenCanvas(QQ) {
+         return void 0 !== QQ.convertToBlob
+       }
+       static ToBlob(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
+           qQ = arguments.length > 3 ? arguments[3] : void 0;
+ ... (20 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L736-L742` → after: `L395-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L395-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L395-L403) · [Before (L736-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L736-L742)

```diff
-           return op
-         }
-         getAnimationRanges() {
-           const pp = [];
-           let ip;
-           for (ip in this._ranges) pp.push(this._ranges[ip]);
-           return pp
+           wQ.Download(QQ, WQ)
+         } else if (QQ && "undefined" !== typeof URL) {
+           const WQ = URL.createObjectURL(QQ),
+             XQ = window.open("");
+           if (!XQ) return;
+           const wQ = XQ.document.createElement("img");
+           wQ.onload = function() {
+             URL.revokeObjectURL(WQ)
+           }, wQ.src = WQ, XQ.document.body.appendChild(wQ)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L744-L754` → after: `L405-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L405-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L405-L423) · [Before (L744-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L744-L754)

```diff
-         beginAnimation(pp, ip, cp, Op) {
-           const op = this.getAnimationRange(pp);
-           return op ? this._scene.beginAnimation(this, op.from, op.to, ip, cp, Op) : null
-         }
-         serializeAnimationRanges() {
-           const pp = [];
-           for (const ip in this._ranges) {
-             const cp = this._ranges[ip];
-             if (!cp) continue;
-             const Op = {};
-             Op.name = ip, Op.from = cp.from, Op.to = cp.to, pp.push(Op)
+       }
+       static EncodeScreenshotCanvasData(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
+           qQ = arguments.length > 3 ? arguments[3] : void 0,
+           TQ = arguments.length > 4 ? arguments[4] : void 0;
+         if ("string" !== typeof qQ && WQ) {
+           if (WQ) {
+             if (wQ._IsOffScreenCanvas(QQ)) return void QQ.convertToBlob({
+               type: XQ,
+               quality: TQ
+             }).then((QQ => {
+               const XQ = new FileReader;
+               XQ.readAsDataURL(QQ), XQ.onloadend = () => {
+                 const QQ = XQ.result;
+                 WQ(QQ)
+               }
+ ... (3 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L756-L765` → after: `L425-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L425-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L425-L511) · [Before (L756-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L756-L765)

```diff
-           return pp
-         }
-         computeWorldMatrix(pp) {
-           return this._worldMatrix || (this._worldMatrix = op.b.Identity()), this._worldMatrix
-         }
-         dispose(pp) {
-           let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           if (this._nodeDataStorage._isDisposed = !0, !pp) {
-             const cp = this.getDescendants(!0);
-             for (const Op of cp) Op.dispose(pp, ip)
+         } else this.ToBlob(QQ, (function(QQ) {
+           QQ && wQ.DownloadBlob(QQ, qQ), WQ && WQ("")
+         }), XQ, TQ)
+       }
+       static Download(QQ, WQ) {
+         if ("undefined" === typeof URL) return;
+         const XQ = window.URL.createObjectURL(QQ),
+           wQ = document.createElement("a");
+         document.body.appendChild(wQ), wQ.style.display = "none", wQ.href = XQ, wQ.download = WQ, wQ.addEventListener("click", (() => {
+           wQ.parentElement && wQ.parentElement.removeChild(wQ)
+         })), wQ.click(), window.URL.revokeObjectURL(XQ)
+       }
+       static BackCompatCameraNoPreventDefault(QQ) {
+         return "boolean" === typeof QQ[0] ? QQ[0] : "boolean" === typeof QQ[1] && QQ[1]
+       }
+       static CreateScreenshot(QQ, WQ, XQ, wQ) {
+ ... (71 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L767-L776` → after: `L513-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L513-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L513-L517) · [Before (L767-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L767-L776)

```diff
-           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Kl.notifyObservers(this), this.Kl.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
-           for (const cp of this._behaviors) cp.detach();
-           this._behaviors.length = 0, this.metadata = null
-         }
-         static ParseAnimationRanges(pp, ip, cp) {
-           if (ip.By)
-             for (let Op = 0; Op < ip.By.length; Op++) {
-               const cp = ip.By[Op];
-               pp.createAnimationRange(cp.name, cp.from, cp.to)
-             }
+       }
+       static _EndMarkNative(QQ) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
+           const WQ = wQ._NativePerformanceCounterHandles.get(QQ);
+           WQ ? (_native.endPerformanceCounter(WQ), wQ._NativePerformanceCounterHandles.delete(QQ)) : wQ.Warn(`Performance counter with name ${QQ} was not started.`)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L778-L797` → after: `L519-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L519-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L519-L529) · [Before (L778-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L778-L797)

```diff
-         getHierarchyBoundingVectors() {
-           let pp, ip, cp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-             Op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           this.Gl().incrementRenderId(), this.computeWorldMatrix(!0);
-           const Ip = this;
-           if (Ip.bJ && Ip.Am) {
-             const cp = Ip.bJ();
-             pp = cp.boundingBox.minimumWorld.clone(), ip = cp.boundingBox.maximumWorld.clone()
-           } else pp = new op.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), ip = new op.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-           if (cp) {
-             const cp = this.getDescendants(!1);
-             for (const Ip of cp) {
-               const cp = Ip;
-               if (cp.computeWorldMatrix(!0), Op && !Op(cp)) continue;
-               if (!cp.bJ || 0 === cp.getTotalVertices()) continue;
-               const Sp = cp.bJ().boundingBox,
- ... (4 more removed lines; see GitHub link above)
+       }
+       static get Now() {
+         return FQ.e.Now
+       }
+       static GetClassName(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           XQ = null;
+         if (!WQ && QQ.getClassName) XQ = QQ.getClassName();
+         else {
+           if (QQ instanceof Object) {
+             XQ = (WQ ? QQ : Object.getPrototypeOf(QQ)).constructor.__bjsclassName__
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L799-L801` → after: `L531-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L531-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L531-L548) · [Before (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L799-L801)

```diff
-           return {
-             min: pp,
-             max: ip
+           XQ || (XQ = typeof QQ)
+         }
+         return XQ
+       }
+       static First(QQ, WQ) {
+         for (const XQ of QQ)
+           if (WQ(XQ)) return XQ;
+         return null
+       }
+       static getFullClassName(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           XQ = null,
+           wQ = null;
+         if (!WQ && QQ.getClassName) XQ = QQ.getClassName();
+         else {
+           if (QQ instanceof Object) {
+ ... (2 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L804-L867` → after: `L552-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L552-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L552-L602) · [Before (L804-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L804-L867)

```diff
-       }, (() => {
-         const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ip = [(0, Ip.K)()], cp = [(0, Ip.K)()], Ap = [(0, Ip.K)()], Pp = [(0, Ip.K)()], Wp = [(0, Ip.K)()], (0, Op.j)(null, null, ip, {
-           kind: "field",
-           name: "name",
-           static: !1,
-           private: !1,
-           access: {
-             has: pp => "name" in pp,
-             get: pp => pp.name,
-             set: (pp, ip) => {
-               pp.name = ip
-             }
-           },
-           metadata: op
-         }, yp, Up), (0, Op.j)(null, null, cp, {
- ... (48 more removed lines; see GitHub link above)
+         return XQ ? (null != wQ ? wQ + "." : "") + XQ : null
+       }
+       static async DelayAsync(QQ) {
+         await new Promise((WQ => {
+           setTimeout((() => {
+             WQ()
+           }), QQ)
+         }))
+       }
+       static IsSafari() {
+         return !!(0, TQ.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
+       }
+     }
+ 
+     function DQ(QQ, WQ) {
+       return XQ => {
+ ... (35 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L869-L880` → after: `L604-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L604-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/263.js#L604-L613) · [Before (L869-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/263.js#L869-L880)

```diff
-           },
-           metadata: op
-         }, jp, kp), op && Object.defineProperty(pp, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: op
-         })
-       })(), pp._AnimationRangeFactory = (pp, ip, cp) => {
-         throw (0, Lp.o)("AnimationRange")
-       }, pp._NodeConstructors = {}, pp
-     })()
+             wQ.executeNext()
+           }), TQ)
+         }), wQ)
+       }
+     }
+     let GQ = !1;
+ 
+     function UQ() {
+       GQ || (GQ = !0, VQ.Mix = yQ.n, VQ.IsExponentOfTwo = yQ.k, JQ.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/264.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/264.js` (169 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42)

#### 1. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L4-L10) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L4)

```diff
-   41300: (pp, ip, cp) => {
+   40679: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => wQ
+     });
+     let wQ = !1
+   },
+   40253: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L8-L182` → after: `L14-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L14-L20) · [Before (L8-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L8-L182)

```diff
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(37349),
-       Sp = cp(37320),
-       xp = cp(37356),
-       Lp = cp(40415),
-       Yp = cp(40577),
-       Dp = cp(40372),
-       Ap = cp(40122),
-       Pp = cp(37324);
-     class Wp {
-       constructor() {
-         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
-       }
-       get name() {
-         return "AutoRotation"
- ... (159 more removed lines; see GitHub link above)
+     var wQ = XQ(40260),
+       qQ = XQ(40268),
+       TQ = XQ(37399),
+       zQ = XQ(37370),
+       sQ = XQ(37392),
+       FQ = XQ(38191),
+       PQ = XQ(40277);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L184-L206` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L22-L23) · [Before (L184-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L184-L206)

```diff
-       constructor() {
-         this.onTargetFramingAnimationEndObservable = new Ip.d, this._mode = vp.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
-       }
-       get name() {
-         return "Framing"
-       }
-       set mode(pp) {
-         this._mode = pp
-       }
-       get mode() {
-         return this._mode
-       }
-       set radiusScale(pp) {
-         this._radiusScale = pp
-       }
-       get radiusScale() {
- ... (7 more removed lines; see GitHub link above)
+       get wrapU() {
+         return this._wrapU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L208-L209` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L25-L26) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L208-L209)

```diff
-       set defaultElevation(pp) {
-         this._defaultElevation = pp
+       set wrapU(QQ) {
+         this._wrapU = QQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L211-L212` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L28-L29) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L211-L212)

```diff
-       get defaultElevation() {
-         return this._defaultElevation
+       get wrapV() {
+         return this._wrapV
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L214-L215` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L31-L32) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L214-L215)

```diff
-       set elevationReturnTime(pp) {
-         this._elevationReturnTime = pp
+       set wrapV(QQ) {
+         this._wrapV = QQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L217-L218` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L34-L35) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L217-L218)

```diff
-       get elevationReturnTime() {
-         return this._elevationReturnTime
+       get coordinatesMode() {
+         return 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L220-L221` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L37-L38) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L220-L221)

```diff
-       set elevationReturnWaitTime(pp) {
-         this._elevationReturnWaitTime = pp
+       get isCube() {
+         return !!this._texture && this._texture.isCube
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L223-L224` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L40-L41) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L223-L224)

```diff
-       get elevationReturnWaitTime() {
-         return this._elevationReturnWaitTime
+       set isCube(QQ) {
+         this._texture && (this._texture.isCube = QQ)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L226-L227` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L43-L44) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L226-L227)

```diff
-       set zoomStopsAnimation(pp) {
-         this._zoomStopsAnimation = pp
+       get is3D() {
+         return !!this._texture && this._texture.is3D
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L229-L230` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L46-L47) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L229-L230)

```diff
-       get zoomStopsAnimation() {
-         return this._zoomStopsAnimation
+       set is3D(QQ) {
+         this._texture && (this._texture.is3D = QQ)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L232-L233` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L49-L50) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L232-L233)

```diff
-       set framingTime(pp) {
-         this._framingTime = pp
+       get is2DArray() {
+         return !!this._texture && this._texture.is2DArray
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L235-L236` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L52-L53) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L235-L236)

```diff
-       get framingTime() {
-         return this._framingTime
+       set is2DArray(QQ) {
+         this._texture && (this._texture.is2DArray = QQ)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L238-L239` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L55-L56) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L238-L239)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+       getClassName() {
+         return "ThinTexture"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L241-L253` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L58-L59) · [Before (L241-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L241-L253)

```diff
-       init() {}
-       attach(pp) {
-         this._attachedCamera = pp;
-         const ip = this._attachedCamera.Gl();
-         vp.EasingFunction.setEasingMode(vp.EasingMode), this._onPrePointerObservableObserver = ip.onPrePointerObservable.add((pp => {
-           pp.type !== Dp.d.POINTERDOWN ? pp.type === Dp.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
-         })), this._onMeshTargetChangedObserver = pp.onMeshTargetChangedObservable.add((pp => {
-           pp && pp.bJ && this.zoomOnMesh(pp, void 0, (() => {
-             this.onTargetFramingAnimationEndObservable.notifyObservers()
-           }))
-         })), this._onAfterCheckInputsObserver = pp.onAfterCheckInputsObservable.add((() => {
-           this._applyUserInteraction(), this._maintainCameraAboveGround()
-         }))
+       static _IsRenderTargetWrapper(QQ) {
+         return void 0 !== QQ?.shareDepth
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L255-L265` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L61-L62) · [Before (L255-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L255-L265)

```diff
-       detach() {
-         if (!this._attachedCamera) return;
-         const pp = this._attachedCamera.Gl();
-         this._onPrePointerObservableObserver && pp.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserve … [truncated]
-       }
-       zoomOnMesh(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         pp.computeWorldMatrix(!0);
-         const Op = pp.bJ().boundingBox;
-         this.zoomOnBoundingInfo(Op.minimumWorld, Op.maximumWorld, ip, cp)
+       constructor(QQ) {
+         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = PQ.e.Zero(), this._cachedBaseSize = PQ.e.Zero(), this._initialSamplingMode = 2, this._texture = gQ. … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L267-L272` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L64-L65) · [Before (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L267-L272)

```diff
-       zoomOnMeshHierarchy(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         pp.computeWorldMatrix(!0);
-         const Op = pp.getHierarchyBoundingVectors(!0);
-         this.zoomOnBoundingInfo(Op.min, Op.max, ip, cp)
+       isReady() {
+         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L274-L283` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L67-L69) · [Before (L274-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L274-L283)

```diff
-       zoomOnMeshesHierarchy(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         const Op = new Sp.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           op = new Sp.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-         for (let Ip = 0; Ip < pp.length; Ip++) {
-           const ip = pp[Ip].getHierarchyBoundingVectors(!0);
-           Sp.o.CheckExtends(ip.min, Op, op), Sp.o.CheckExtends(ip.max, Op, op)
-         }
-         this.zoomOnBoundingInfo(Op, op, ip, cp)
+       delayLoad() {}
+       getInternalTexture() {
+         return this._texture
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L285-L308` → after: `L71-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L71-L74) · [Before (L285-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L285-L308)

```diff
-       zoomOnBoundingInfo(pp, ip) {
-         let cp, Op = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         if (!this._attachedCamera) return !1;
-         const Ip = pp.y,
-           xp = Ip + (ip.y - Ip) * this._positionScale,
-           Lp = ip.subtract(pp).scale(.5);
-         if (!isFinite(xp)) return !1;
-         if (Op) cp = new Sp.o(0, xp, 0);
-         else {
-           const ip = pp.add(Lp);
-           cp = new Sp.o(ip.x, xp, ip.z)
-         }
-         this._vectorTransition || (this._vectorTransition = Up.e.CreateAnimation("target", Up.e.ANIMATIONTYPE_VECTOR3, 60, vp.EasingFunction)), this._betaIsAnimating = !0;
-         let Yp = Up.e.TransitionTo("target", cp, this._attachedCamera, this._attachedCamera.Gl(), 60, this._vectorTransition, this._framingTime);
-         Yp && this._animatables.push(Yp);
- ... (8 more removed lines; see GitHub link above)
+       getSize() {
+         if (this._texture) {
+           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
+           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L310-L312` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L76) · [Before (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L310-L312)

```diff
-         return this._radiusTransition || (this._radiusTransition = Up.e.CreateAnimation("radius", Up.e.ANIMATIONTYPE_FLOAT, 60, vp.EasingFunction)), Yp = Up.e.TransitionTo("radius", Dp, this._attachedCamera, this._attachedCamera.Gl(), 60, this._radiusTransition, this._framingTime … [truncated]
-           this.stopAllAnimations(), op && op(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
-         })), Yp && this._animatables.push(Yp), !0
+         return this._cachedSize
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L314-L318` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L78-L79) · [Before (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L314-L318)

```diff
-       _calculateLowerRadiusFromModelBoundingSphere(pp, ip) {
-         const cp = this._attachedCamera;
-         if (!cp) return 0;
-         let Op = cp._calculateLowerRadiusFromModelBoundingSphere(pp, ip, this._radiusScale);
-         return cp.lowerRadiusLimit && this._mode === vp.IgnoreBoundsSizeMode && (Op = Op < cp.lowerRadiusLimit ? cp.lowerRadiusLimit : Op), cp.upperRadiusLimit && (Op = Op > cp.upperRadiusLimit ? cp.upperRadiusLimit : Op), Op
+       getBaseSize() {
+         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L320-L334` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L81-L82) · [Before (L320-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L320-L334)

```diff
-       _maintainCameraAboveGround() {
-         if (this._elevationReturnTime < 0) return;
-         const pp = Ap.e.Now - this._lastInteractionTime,
-           ip = .5 * Math.PI - this._defaultElevation,
-           cp = .5 * Math.PI;
-         if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > cp && pp >= this._elevationReturnWaitTime) {
-           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Up.e.CreateAnimation("beta", Up.e.ANIMATIONTYPE_FLOAT, 60, vp.EasingFunction));
-           const pp = Up.e.TransitionTo("beta", ip, this._attachedCamera, this._attachedCamera.Gl(), 60, this._betaTransition, this._elevationReturnTime, (() => {
-             this._clearAnimationLocks(), this.stopAllAnimations()
-           }));
-           pp && this._animatables.push(pp)
-         }
-       }
-       _clearAnimationLocks() {
-         this._betaIsAnimating = !1
+       get samplingMode() {
+         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L336-L337` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L84-L86) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L336-L337)

```diff
-       _applyUserInteraction() {
-         this.isUserIsMoving && (this._lastInteractionTime = Ap.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+       updateSamplingMode(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this._texture && this._engine && this._engine.updateTextureSamplingMode(QQ, this._texture, this._texture.generateMipMaps && WQ)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L339-L340` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L88-L89) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L339-L340)

```diff
-       stopAllAnimations() {
-         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
+       releaseInternalTexture() {
+         this._texture && (this._texture.dispose(), this._texture = null)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L342-L343` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L91-L92) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L342-L343)

```diff
-       get isUserIsMoving() {
-         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       dispose() {
+         this._texture && (this.releaseInternalTexture(), this._engine = null)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L346-L753` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L95-L96) · [Before (L346-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L346-L753)

```diff
-     vp.EasingFunction = new class extends yp {
-       constructor() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
-         super(), this.exponent = pp
-       }
-       easeInCore(pp) {
-         return this.exponent <= 0 ? pp : (Math.exp(this.exponent * pp) - 1) / (Math.exp(this.exponent) - 1)
-       }
-     }, vp.EasingMode = yp.EASINGMODE_EASEINOUT, vp.IgnoreBoundsSizeMode = 0, vp.FitFrustumSidesMode = 1;
-     var tp = cp(40411),
-       Hp = cp(40409),
-       dp = cp(40435),
-       ep = cp(40304);
-     let jp = (() => {
-         var pp;
-         let ip, cp = [],
- ... (392 more removed lines; see GitHub link above)
+     var JQ, rQ = XQ(40286),
+       IQ = XQ(40153);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L756` → after: `L99-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L99-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L99-L110) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L756)

```diff
-       let ip, cp, Ip, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up = [],
+       let WQ, XQ, PQ, JQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ, cQ, AQ, RQ, EQ, CQ = gQ,
+         uQ = [],
+         LQ = [],
+         kQ = [],
+         fQ = [],
+         SQ = [],
+         tQ = [],
+         oQ = [],
+         eQ = [],
+         nQ = [],
+         xQ = [],
+         YQ = [],
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L777-L784` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L131-L133) · [Before (L777-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L777-L784)

```diff
-       return pp = class {
-         constructor() {
-           this.camera = (0, Op.l)(this, Up), this.keysUp = (0, Op.l)(this, wp, [38]), this.keysDown = ((0, Op.l)(this, vp), (0, Op.l)(this, tp, [40])), this.keysLeft = ((0, Op.l)(this, Hp), (0, Op.l)(this, dp, [37])), this.keysRight = ((0, Op.l)(this, jp), (0, Op.l)(this, kp, [39 … [truncated]
-             ctrl: !1,
-             alt: !1
-           }, this._keyboardConditions = {
-             modifiers: this._keyboardModifiers
-           }, this._rotateDirection = new Sp.l, this._panDirection = new Sp.l
+       return QQ = class extends CQ {
+         set hasAlpha(QQ) {
+           this._hasAlpha = QQ
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L786-L787` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L135-L136) · [Before (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L786-L787)

```diff
-         get useAltToZoom() {
-           return this._useAltToZoom
+         get hasAlpha() {
+           return this._hasAlpha
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L789-L790` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L138-L139) · [Before (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L789-L790)

```diff
-         set useAltToZoom(pp) {
-           this._useAltToZoom = pp, this._applyUseAltToZoomToInputMap()
+         set getAlphaFromRGB(QQ) {
+           this._getAlphaFromRGB !== QQ && (this._getAlphaFromRGB = QQ, this._scene && this._scene.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this))))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L792-L806` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L141-L142) · [Before (L792-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L792-L806)

```diff
-         _applyUseAltToZoomToInputMap() {
-           if (!this.camera?.movement) return;
-           const pp = this.camera.movement.input,
-             ip = pp.getEntry("keyboard", "zoom", {
-               modifiers: {
-                 alt: !0
-               }
-             });
-           !this._useAltToZoom && ip ? pp.inputMap.splice(pp.inputMap.indexOf(ip), 1) : this._useAltToZoom && !ip && pp.addEntry({
-             source: "keyboard",
-             modifiers: {
-               alt: !0
-             },
-             interaction: "zoom"
-           })
+         get getAlphaFromRGB() {
+           return this._getAlphaFromRGB
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L808-L822` → after: `L144-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L144-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L144-L239) · [Before (L808-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L808-L822)

```diff
-         attachControl(pp) {
-           pp = ep.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Gl(), this._engine = this._scene.gy(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ip => {
-             const cp = ip.event;
-             if (!cp.metaKey)
-               if (ip.type === Rp.d.KEYDOWN) {
-                 if (this._ctrlPressed = cp.ctrlKey, this._altPressed = cp.altKey, -1 !== this.keysUp.indexOf(cp.keyCode) || -1 !== this.keysDown.indexOf(cp.keyCode) || -1 !== this.keysLeft.indexOf(cp.keyCode) || -1 !== this.keysRight.indexOf(cp.keyCode) || -1 !== this.keysReset.i … [truncated]
-                   -1 === this._keys.indexOf(cp.keyCode) && this._keys.push(cp.keyCode), cp.preventDefault && (pp || cp.preventDefault())
-                 }
-               } else if (-1 !== this.keysUp.indexOf(cp.keyCode) || -1 !== this.keysDown.indexOf(cp.keyCode) || -1 !== this.keysLeft.indexOf(cp.keyCode) || -1 !== this.keysRight.indexOf(cp.keyCode) || -1 !== this.keysReset.indexOf(cp.keyCode) || -1 !== this.keysZoomIn.indexOf(cp.k … [truncated]
-               const ip = this._keys.indexOf(cp.keyCode);
-               ip >= 0 && this._keys.splice(ip, 1), cp.preventDefault && (pp || cp.preventDefault())
-             }
-           })))
+         set coordinatesIndex(QQ) {
+           this._coordinatesIndex !== QQ && (this._coordinatesIndex = QQ, this._scene && this._scene.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this))))
+         }
+         get coordinatesIndex() {
+           return this._coordinatesIndex
+         }
+         set coordinatesMode(QQ) {
+           this._coordinatesMode !== QQ && (this._coordinatesMode = QQ, this._scene && this._scene.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this))))
+         }
+         get coordinatesMode() {
+           return this._coordinatesMode
+         }
+         get wrapU() {
+           return this._wrapU
+         }
+         set wrapU(QQ) {
+ ... (80 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L824-L825` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L241-L242) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L824-L825)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         set onDispose(QQ) {
+           this._onDisposeObserver && this.yE.remove(this._onDisposeObserver), this._onDisposeObserver = this.yE.add(QQ)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L827-L845` → after: `L244-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L244-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L244-L361) · [Before (L827-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L827-L845)

```diff
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const pp = this.camera,
-               ip = pp.movement.input;
-             this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
-             const cp = this._rotateDirection.set(0, 0),
-               Op = this._panDirection.set(0, 0);
-             let op = 0,
-               Ip = 0;
-             for (let Sp = 0; Sp < this._keys.length; Sp++) {
-               const xp = this._keys[Sp];
-               if (this._keyboardConditions.key = xp, -1 === this.keysReset.indexOf(xp)) {
-                 const pp = ip.resolveInteraction("keyboard", this._keyboardConditions);
-                 if (pp)
-                   if ("pan" === pp.interaction) Ip = Math.max(Ip, pp.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(xp) ? Op.x -= 1 : -1 !== this.keysRight.indexOf(xp) ? Op.x += 1 : -1 !== this.keysUp.indexOf(xp) ? Op.y += 1 : -1 !== this.keysDown.index … [truncated]
-                   else if ("zoom" === pp.interaction) {
- ... (3 more removed lines; see GitHub link above)
+         get isBlocking() {
+           return !0
+         }
+         get loadingError() {
+           return this._loadingError
+         }
+         get errorObject() {
+           return this._errorObject
+         }
+         constructor(WQ) {
+           let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           super(null), this.uniqueId = ((0, wQ.n)(this, uQ), (0, wQ.n)(this, LQ, void 0)), this.name = ((0, wQ.n)(this, kQ), (0, wQ.n)(this, fQ, void 0)), this.displayName = ((0, wQ.n)(this, SQ), (0, wQ.n)(this, tQ, void 0)), this.metadata = ((0, wQ.n)(this, oQ), (0, wQ.n)(this,  … [truncated]
+         }
+         sE() {
+           return this._scene
+         }
+ ... (102 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L850-L851` → after: `L366-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L366-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L366-L384) · [Before (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L850-L851)

```diff
-         getClassName() {
-           return "ArcRotateCameraKeyboardMoveInput"
+         serialize() {
+           let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           if (!this.name && !QQ) return null;
+           const WQ = rQ.b.Serialize(this);
+           return rQ.b.AppendSerializedAnimations(this, WQ), WQ
+         }
+         static WhenAllReady(QQ, WQ) {
+           let XQ = QQ.length;
+           if (0 !== XQ)
+             for (let wQ = 0; wQ < QQ.length; wQ++) {
+               const qQ = QQ[wQ];
+               if (qQ.isReady()) 0 === --XQ && WQ();
+               else {
+                 const QQ = qQ.onLoadObservable;
+                 QQ ? QQ.addOnce((() => {
+                   0 === --XQ && WQ()
+ ... (3 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L853-L854` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L386-L387) · [Before (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L853-L854)

```diff
-         getSimpleName() {
-           return "keyboard"
+         static _IsScene(QQ) {
+           return "Scene" === QQ.getClassName()
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L857-L858` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L390-L391) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L857-L858)

```diff
-         const Sp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], xp = [(0, op.K)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], Wp = [(0, op.K)()], yp = [(0, op.K)()], (0, Op.j)(pp, null, yp, {
+         const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(CQ[Symbol.metadata] ?? null) : void 0;
+         WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], PQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], IQ = [(0, qQ.I)("hasAlpha")], jQ = [(0, qQ.I)("getAlphaFromRGB")], BQ = [(0, qQ.I)()], yQ = [(0, qQ.I)("coordinatesIndex")], VQ = [(0, qQ.I)()], DQ = [(0, qQ.I)("coordinatesMode")], pQ = [(0,  … [truncated]
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L860` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L393) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L860)

```diff
-           name: "useAltToZoom",
+           name: "wrapU",
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L864-L865` → after: `L397-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L397-L398) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L864-L865)

```diff
-             has: pp => "useAltToZoom" in pp,
-             get: pp => pp.useAltToZoom
+             has: QQ => "wrapU" in QQ,
+             get: QQ => QQ.wrapU
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L868` → after: `L401-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L401-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L401-L491) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L868)

```diff
-         }, null, Up), (0, Op.j)(null, null, ip, {
+         }, null, uQ), (0, wQ.k)(QQ, null, GQ, {
+           kind: "getter",
+           name: "wrapV",
+           static: !1,
+           private: !1,
+           access: {
+             has: QQ => "wrapV" in QQ,
+             get: QQ => QQ.wrapV
+           },
+           metadata: TQ
+         }, null, uQ), (0, wQ.k)(QQ, null, vQ, {
+           kind: "getter",
+           name: "isCube",
+           static: !1,
+           private: !1,
+           access: {
+ ... (75 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L870` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L493) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L870)

```diff
-           name: "keysUp",
+           name: "uniqueId",
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L874-L875` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L497-L498) · [Before (L874-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L874-L875)

```diff
-             has: pp => "keysUp" in pp,
-             get: pp => pp.keysUp,
+             has: QQ => "uniqueId" in QQ,
+             get: QQ => QQ.uniqueId,
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L877` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L500) · [Before (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L877)

```diff
-               pp.keysUp = ip
+               QQ.uniqueId = WQ
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L881` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L504) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L881)

```diff
-         }, wp, vp), (0, Op.j)(null, null, cp, {
+         }, LQ, kQ), (0, wQ.k)(null, null, XQ, {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L883` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L506) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L883)

```diff
-           name: "keysDown",
+           name: "name",
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L887-L888` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L510-L511) · [Before (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L887-L888)

```diff
-             has: pp => "keysDown" in pp,
-             get: pp => pp.keysDown,
+             has: QQ => "name" in QQ,
+             get: QQ => QQ.name,
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L890` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L513) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L890)

```diff
-               pp.keysDown = ip
+               QQ.name = WQ
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L894` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L517) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L894)

```diff
-         }, tp, Hp), (0, Op.j)(null, null, Ip, {
+         }, fQ, SQ), (0, wQ.k)(null, null, PQ, {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L896` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L519) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L896)

```diff
-           name: "keysLeft",
+           name: "displayName",
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L900-L901` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L523-L524) · [Before (L900-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L900-L901)

```diff
-             has: pp => "keysLeft" in pp,
-             get: pp => pp.keysLeft,
+             has: QQ => "displayName" in QQ,
+             get: QQ => QQ.displayName,
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L903` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L526) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L903)

```diff
-               pp.keysLeft = ip
+               QQ.displayName = WQ
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L907` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L530) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L907)

```diff
-         }, dp, jp), (0, Op.j)(null, null, xp, {
+         }, tQ, oQ), (0, wQ.k)(null, null, JQ, {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L909` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L532) · [Before (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L909)

```diff
-           name: "keysRight",
+           name: "metadata",
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L913-L914` → after: `L536-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L536-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L536-L537) · [Before (L913-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L913-L914)

```diff
-             has: pp => "keysRight" in pp,
-             get: pp => pp.keysRight,
+             has: QQ => "metadata" in QQ,
+             get: QQ => QQ.metadata,
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L916` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L539) · [Before (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L916)

```diff
-               pp.keysRight = ip
+               QQ.metadata = WQ
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L920` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L543) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L920)

```diff
-         }, kp, mp), (0, Op.j)(null, null, Lp, {
+         }, eQ, nQ), (0, wQ.k)(null, null, IQ, {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L922` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L545) · [Before (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L922)

```diff
-           name: "keysReset",
+           name: "_hasAlpha",
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L926-L927` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L549-L550) · [Before (L926-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L926-L927)

```diff
-             has: pp => "keysReset" in pp,
-             get: pp => pp.keysReset,
+             has: QQ => "_hasAlpha" in QQ,
+             get: QQ => QQ._hasAlpha,
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L929` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L552) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L929)

```diff
-               pp.keysReset = ip
+               QQ._hasAlpha = WQ
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L933` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L556) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L933)

```diff
-         }, qp, Mp), (0, Op.j)(null, null, Yp, {
+         }, xQ, YQ), (0, wQ.k)(null, null, jQ, {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L935` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L558) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L935)

```diff
-           name: "keysZoomIn",
+           name: "_getAlphaFromRGB",
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L939-L940` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L562-L563) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L939-L940)

```diff
-             has: pp => "keysZoomIn" in pp,
-             get: pp => pp.keysZoomIn,
+             has: QQ => "_getAlphaFromRGB" in QQ,
+             get: QQ => QQ._getAlphaFromRGB,
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L942` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L565) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L942)

```diff
-               pp.keysZoomIn = ip
+               QQ._getAlphaFromRGB = WQ
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L946` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L569) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L946)

```diff
-         }, Cp, Ep), (0, Op.j)(null, null, Dp, {
+         }, NQ, ZQ), (0, wQ.k)(null, null, BQ, {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L948` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L571) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L948)

```diff
-           name: "keysZoomOut",
+           name: "level",
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L952-L953` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L575-L576) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L952-L953)

```diff
-             has: pp => "keysZoomOut" in pp,
-             get: pp => pp.keysZoomOut,
+             has: QQ => "level" in QQ,
+             get: QQ => QQ.level,
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L955` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L578) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L955)

```diff
-               pp.keysZoomOut = ip
+               QQ.level = WQ
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L959` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L582) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L959)

```diff
-         }, Xp, lp), (0, Op.j)(null, null, Ap, {
+         }, OQ, KQ), (0, wQ.k)(null, null, yQ, {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L961` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L584) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L961)

```diff
-           name: "panningSensibility",
+           name: "_coordinatesIndex",
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L965-L966` → after: `L588-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L588-L589) · [Before (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L965-L966)

```diff
-             has: pp => "panningSensibility" in pp,
-             get: pp => pp.panningSensibility,
+             has: QQ => "_coordinatesIndex" in QQ,
+             get: QQ => QQ._coordinatesIndex,
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L968` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L591) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L968)

```diff
-               pp.panningSensibility = ip
+               QQ._coordinatesIndex = WQ
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L972` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L595) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L972)

```diff
-         }, Qp, Jp), (0, Op.j)(null, null, Pp, {
+         }, mQ, MQ), (0, wQ.k)(null, null, VQ, {
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L974` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L597) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L974)

```diff
-           name: "zoomingSensibility",
+           name: "optimizeUVAllocation",
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L978-L979` → after: `L601-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L601-L602) · [Before (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L978-L979)

```diff
-             has: pp => "zoomingSensibility" in pp,
-             get: pp => pp.zoomingSensibility,
+             has: QQ => "optimizeUVAllocation" in QQ,
+             get: QQ => QQ.optimizeUVAllocation,
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L981` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L604) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L981)

```diff
-               pp.zoomingSensibility = ip
+               QQ.optimizeUVAllocation = WQ
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L985` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L608) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L985)

```diff
-         }, Bp, Np), (0, Op.j)(null, null, Wp, {
+         }, QW, WW), (0, wQ.k)(null, null, DQ, {
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L987` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L610) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L987)

```diff
-           name: "angularSpeed",
+           name: "_coordinatesMode",
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L991-L992` → after: `L614-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L614-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L614-L615) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L991-L992)

```diff
-             has: pp => "angularSpeed" in pp,
-             get: pp => pp.angularSpeed,
+             has: QQ => "_coordinatesMode" in QQ,
+             get: QQ => QQ._coordinatesMode,
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L994` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L617) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L994)

```diff
-               pp.angularSpeed = ip
+               QQ._coordinatesMode = WQ
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L998-L1044` → after: `L621-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L621-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L621-L630) · [Before (L998-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L998-L1044)

```diff
-         }, Tp, fp), Sp && Object.defineProperty(pp, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Sp
-         })
-       })(), pp
-     })();
-     dp.e.ArcRotateCameraKeyboardMoveInput = qp;
-     var Mp = cp(37989),
-       Cp = cp(40388);
-     let Ep = (() => {
-       var pp;
-       let ip, cp, Ip, Lp = [],
-         Yp = [],
-         Ap = [],
- ... (31 more removed lines; see GitHub link above)
+         }, XW, wW), (0, wQ.k)(null, null, UQ, {
+           kind: "field",
+           name: "wrapR",
+           static: !1,
+           private: !1,
+           access: {
+             has: QQ => "wrapR" in QQ,
+             get: QQ => QQ.wrapR,
+             set: (QQ, WQ) => {
+               QQ.wrapR = WQ
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1046-L1102` → after: `L632-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L632-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L632-L634) · [Before (L1046-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1046-L1102)

```diff
-             Op && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Op)) : this.camera.movement.zoomAccumulatedPixels += Op), cp.preventDefault && (pp || cp.preventDefault())
-           }, this._observer = this.camera.Gl()._inputManager._addCameraPointerObserver(this._wheel, Dp.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.E_(0)
-         }
-         detachControl() {
-           this._observer && (this.camera.Gl()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
-         }
-         checkInputs() {
-           if (!this.zoomToMouseLocation) return;
-           const pp = this.camera;
-           if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(pp.inertialAlphaOffset) + Math.abs(pp.inertialBetaOffset) + Math.abs(pp.inertialRadiusOffset)) {
-             this._updateHitPlane(), pp.target.addInPlace(this._inertialPanning), pp.radius -= this._zoomToMouseRadiusOffset;
-             const ip = pp.movement.getFrameIndependentDecay(pp.inertia);
-             this._inertialPanning.scaleInPlace(ip), this._zoomToMouseRadiusOffset *= ip, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Pp.b && (this._zoomToMouseRadiusOffset = 0)
-           }
-         }
-         getClassName() {
- ... (41 more removed lines; see GitHub link above)
+           },
+           metadata: TQ
+         }, qW, TW), (0, wQ.k)(null, null, bQ, {
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1104` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L636) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1104)

```diff
-           name: "wheelPrecision",
+           name: "anisotropicFilteringLevel",
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1108-L1109` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L640-L641) · [Before (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1108-L1109)

```diff
-             has: pp => "wheelPrecision" in pp,
-             get: pp => pp.wheelPrecision,
+             has: QQ => "anisotropicFilteringLevel" in QQ,
+             get: QQ => QQ.anisotropicFilteringLevel,
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1111` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L643) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1111)

```diff
-               pp.wheelPrecision = ip
+               QQ.anisotropicFilteringLevel = WQ
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1115` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L647) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1115)

```diff
-         }, Lp, Yp), (0, Op.j)(null, null, cp, {
+         }, zW, sW), (0, wQ.k)(null, null, lQ, {
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1117` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L649) · [Before (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1117)

```diff
-           name: "zoomToMouseLocation",
+           name: "invertZ",
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1121-L1122` → after: `L653-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L653-L654) · [Before (L1121-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1121-L1122)

```diff
-             has: pp => "zoomToMouseLocation" in pp,
-             get: pp => pp.zoomToMouseLocation,
+             has: QQ => "invertZ" in QQ,
+             get: QQ => QQ.invertZ,
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1124` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L656) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1124)

```diff
-               pp.zoomToMouseLocation = ip
+               QQ.invertZ = WQ
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1128` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L660) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1128)

```diff
-         }, Ap, Wp), (0, Op.j)(null, null, Ip, {
+         }, FW, PW), (0, wQ.k)(null, null, hQ, {
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1130` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L662) · [Before (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1130)

```diff
-           name: "wheelDeltaPercentage",
+           name: "lodLevelInAlpha",
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1134-L1135` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L666-L667) · [Before (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1134-L1135)

```diff
-             has: pp => "wheelDeltaPercentage" in pp,
-             get: pp => pp.wheelDeltaPercentage,
+             has: QQ => "lodLevelInAlpha" in QQ,
+             get: QQ => QQ.lodLevelInAlpha,
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1137` → after: `L669-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L669-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L669-L682) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1137)

```diff
-               pp.wheelDeltaPercentage = ip
+               QQ.lodLevelInAlpha = WQ
+             }
+           },
+           metadata: TQ
+         }, gW, JW), (0, wQ.k)(null, null, EQ, {
+           kind: "field",
+           name: "isRenderTarget",
+           static: !1,
+           private: !1,
+           access: {
+             has: QQ => "isRenderTarget" in QQ,
+             get: QQ => QQ.isRenderTarget,
+             set: (QQ, WQ) => {
+               QQ.isRenderTarget = WQ
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1147` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L692) · [Before (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1147)

```diff
-       })(), pp
+       })(), QQ.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, QQ
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1149-L1222` → after: `L694-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L694-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L694-L711) · [Before (L1149-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1149-L1222)

```diff
-     dp.e.ArcRotateCameraMouseWheelInput = Ep;
-     var Xp, lp, Qp = cp(40096);
-     class Jp extends dp.f {
-       constructor(pp) {
-         super(pp)
-       }
-       addMouseWheel() {
-         return this.add(new Ep), this
-       }
-       addPointers() {
-         return this.add(new mp), this
-       }
-       addKeyboard() {
-         return this.add(new qp), this
-       }
-     }(Xp = Jp.prototype).addVRDeviceOrientation ?? (Xp.addVRDeviceOrientation = (0, Qp.k)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (lp = Jp.prototype).addGamepad ?? (lp.addGamepad = (0, Qp.k)("ArcRotateCameraInputsManager", "addGamepad"));
- ... (58 more removed lines; see GitHub link above)
+     (JQ = jQ.prototype).forceSphericalPolynomialsRecompute ?? (JQ.forceSphericalPolynomialsRecompute = (0, IQ.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(jQ.prototype, "sphericalPolynomial") || Object.defineProperty(jQ.prototype, "sph … [truncated]
+   },
+   40724: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => UQ,
+       g: () => pQ
+     });
+     var wQ = XQ(40260),
+       qQ = XQ(40268),
+       TQ = XQ(37399),
+       zQ = XQ(37370),
+       sQ = XQ(40253),
+       FQ = XQ(37418),
+       PQ = XQ(40153),
+       gQ = XQ(40164),
+       JQ = XQ(40363),
+ ... (2 more added lines; see GitHub link above)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1225` → after: `L714-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L714-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L714-L737) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1225)

```diff
-       return isNaN(pp) ? ip : pp
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const wQ = WQ.width,
+         qQ = WQ.height;
+       if (QQ instanceof Float32Array) {
+         let WQ = QQ.byteLength / QQ.BYTES_PER_ELEMENT;
+         const XQ = new Uint8Array(WQ);
+         for (; --WQ >= 0;) {
+           let wQ = QQ[WQ];
+           wQ < 0 ? wQ = 0 : wQ > 1 && (wQ = 1), XQ[WQ] = 255 * wQ
+         }
+         QQ = XQ
+       }
+       const TQ = document.createElement("canvas");
+       TQ.width = wQ, TQ.height = qQ;
+       const zQ = TQ.getContext("2d");
+       if (!zQ) return null;
+ ... (8 more added lines; see GitHub link above)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1229-L1237` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L760) · [Before (L1229-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1229-L1237)

```diff
-         let ip, cp, Lp, Dp, Ap, yp, Up, dp, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp, Qp, Bp, Np, Tp, hp, ap, np, Fp, gp, Gp, rp = Hp.f,
-           Zp = [],
-           zp = [],
-           sp = [],
-           Kp = [],
-           Vp = [],
-           ii = [],
-           ci = [],
-           Oi = [],
+         let WQ, XQ, jQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ = sQ.c,
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1256-L1433` → after: `L779-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L779-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L779-L789) · [Before (L1256-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1256-L1433)

```diff
-           ui = [],
-           ji = [],
-           ki = [],
-           mi = [],
-           Ri = [],
-           qi = [],
-           Mi = [],
-           Ci = [],
-           Ei = [],
-           Xi = [],
-           li = [],
-           Qi = [],
-           Ji = [],
-           Bi = [],
-           Ni = [],
-           Ti = [],
- ... (162 more removed lines; see GitHub link above)
+           OQ = [],
+           KQ = [],
+           mQ = [],
+           MQ = [],
+           QW = [],
+           WW = [],
+           XW = [];
+         return QQ = class extends iQ {
+           static _CreateVideoTexture(WQ, XQ, wQ) {
+             arguments.length > 5 && void 0 !== arguments[5] || QQ.TRILINEAR_SAMPLINGMODE;
+             throw (0, PQ.i)("VideoTexture")
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1435-L1437` → after: `L791-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L791-L792) · [Before (L1435-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1435-L1437)

```diff
-           get zoomToMouseLocation() {
-             const pp = this.inputs.attached.mousewheel;
-             return !!pp && pp.zoomToMouseLocation
+           get noMipmap() {
+             return this._noMipmap
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1439-L1441` → after: `L794-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L794-L795) · [Before (L1439-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1439-L1441)

```diff
-           set zoomToMouseLocation(pp) {
-             const ip = this.inputs.attached.mousewheel;
-             ip && (ip.zoomToMouseLocation = pp)
+           get mimeType() {
+             return this._mimeType
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1443-L1445` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L797-L798) · [Before (L1443-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1443-L1445)

```diff
-           get wheelDeltaPercentage() {
-             const pp = this.inputs.attached.mousewheel;
-             return pp ? pp.wheelDeltaPercentage : 0
+           set isBlocking(QQ) {
+             this._isBlocking = QQ
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1447-L1449` → after: `L800-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L800-L801) · [Before (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1447-L1449)

```diff
-           set wheelDeltaPercentage(pp) {
-             const ip = this.inputs.attached.mousewheel;
-             ip && (ip.wheelDeltaPercentage = pp)
+           get isBlocking() {
+             return this._isBlocking
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1451-L1452` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L803-L804) · [Before (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1451-L1452)

```diff
-           get _useCtrlForPanning() {
-             return this._useCtrlForPanningInternal
+           get invertY() {
+             return this._invertY
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1454-L1465` → after: `L806-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L806-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L806-L827) · [Before (L1454-L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1454-L1465)

```diff
-           set _useCtrlForPanning(pp) {
-             this._useCtrlForPanningInternal = pp;
-             const ip = this.movement.input,
-               cp = ip.getEntry("keyboard", "pan", {
-                 modifiers: {
-                   ctrl: !0
-                 }
-               });
-             !pp && cp ? ip.inputMap.splice(ip.inputMap.indexOf(cp), 1) : pp && !cp && ip.addEntry({
-               source: "keyboard",
-               modifiers: {
-                 ctrl: !0
+           constructor(WQ, XQ, qQ, zQ) {
+             let sQ, FQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : QQ.TRILINEAR_SAMPLINGMODE,
+               PQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               JQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
+               rQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               IQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+               jQ = arguments.length > 9 ? arguments[9] : void 0,
+               BQ = arguments.length > 10 ? arguments[10] : void 0,
+               yQ = arguments.length > 11 ? arguments[11] : void 0,
+               DQ = arguments.length > 12 ? arguments[12] : void 0,
+               pQ = arguments.length > 13 ? arguments[13] : void 0;
+             super(XQ), this.url = ((0, wQ.n)(this, cQ), (0, wQ.n)(this, AQ, null)), this.uOffset = ((0, wQ.n)(this, RQ), (0, wQ.n)(this, EQ, 0)), this.vOffset = ((0, wQ.n)(this, CQ), (0, wQ.n)(this, uQ, 0)), this.uScale = ((0, wQ.n)(this, LQ), (0, wQ.n)(this, kQ, 1)), this.vScale … [truncated]
+             let GQ = !1,
+               UQ = null,
+               bQ = !0;
+             "object" === typeof qQ && null !== qQ ? (sQ = qQ.noMipmap ?? !1, zQ = qQ.invertY ?? !VQ.e, FQ = qQ.samplingMode ?? QQ.TRILINEAR_SAMPLINGMODE, PQ = qQ.onLoad ?? null, JQ = qQ.onError ?? null, rQ = qQ.buffer ?? null, IQ = qQ.deleteBuffer ?? !1, jQ = qQ.format, BQ = qQ.m … [truncated]
+ ... (6 more added lines; see GitHub link above)
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1467-L1471` → after: `L829-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L829-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L829-L842) · [Before (L1467-L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1467-L1471)

```diff
-               interaction: "pan"
-             });
-             const Op = ip.getEntry("pointer", "pan", {
-               modifiers: {
-                 ctrl: !0
+               aQ = (WQ, XQ) => {
+                 this._loadingError = !0, this._errorObject = {
+                   message: WQ,
+                   exception: XQ
+                 }, JQ && JQ(WQ, XQ), QQ.OnTextureLoadErrorObservable.notifyObservers(this)
+               };
+             if (!this.url && !UQ) return this._delayedOnLoad = HQ, void(this._delayedOnError = aQ);
+             if (this._texture = UQ ?? this._getFromCache(this.url, sQ, FQ, this._invertY, GQ, this.isCube), this._texture)
+               if (this._texture.isReady) gQ.b.SetImmediate((() => HQ()));
+               else {
+                 const QQ = this._texture.onLoadedObservable.add(HQ);
+                 this._texture.onErrorObservable.add((WQ => {
+                   aQ(WQ.message, WQ.exception), this._texture?.onLoadedObservable.remove(QQ)
+                 }))
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1473-L1549` → after: `L844-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L844-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L844-L851) · [Before (L1473-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1473-L1549)

```diff
-             });
-             !pp && Op ? ip.inputMap.splice(ip.inputMap.indexOf(Op), 1) : pp && !Op && ip.addEntry({
-               source: "pointer",
-               button: 0,
-               modifiers: {
-                 ctrl: !0
-               },
-               interaction: "pan"
-             })
-           }
-           get _panningMouseButton() {
-             return this._panningMouseButtonInternal
-           }
-           set _panningMouseButton(pp) {
-             this._panningMouseButtonInternal = pp;
-             const ip = this.movement.input.getEntry("pointer", "pan", {
- ... (61 more removed lines; see GitHub link above)
+             else if (vQ && vQ.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = HQ, this._delayedOnError = aQ;
+             else {
+               try {
+                 this._texture = dQ.createTexture(this.url, sQ, this._invertY, vQ, FQ, HQ, aQ, this._buffer, void 0, this._format, this._forcedExtension, BQ, yQ, DQ, GQ)
+               } catch (lQ) {
+                 throw aQ("error loading", lQ), lQ
+               }
+               IQ && (this._buffer = null)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1563-L1580` → after: `L854-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L854-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L854-L903) · [Before (L1563-L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1563-L1580)

```diff
-           interpolateTo() {
-             let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
-               ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
-               cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
-               Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
-               op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
-               Ip = arguments.length > 5 ? arguments[5] : void 0;
-             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Ip ? this._currentInterpolationFactor = Ip : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
-           }
-           _isSynchronizedViewMatrix() {
-             return !!super._isSynchronizedViewMatrix() && (this._cache.mV.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
-           }
-           attachControl(pp, ip) {
-             let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-               Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
-             const op = arguments;
- ... (2 more removed lines; see GitHub link above)
+           updateURL(QQ) {
+             let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               XQ = arguments.length > 2 ? arguments[2] : void 0,
+               wQ = arguments.length > 3 ? arguments[3] : void 0;
+             this.url && (this.releaseInternalTexture(), this.sE().markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = QQ), this.url = QQ, this._buffer = WQ, this._forcedExtension = wQ, this.delayLoadState = 4;
+             const qQ = this._delayedOnLoad;
+             this._delayedOnLoad = () => {
+               qQ ? qQ() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), XQ && XQ()
+             }, this.delayLoad()
+           }
+           delayLoad() {
+             if (4 !== this.delayLoadState) return;
+             const QQ = this.sE();
+             if (!QQ) return;
+             let WQ = this.url;
+             !WQ && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (WQ = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(WQ, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
+ ... (34 more added lines; see GitHub link above)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1583-L1584` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L937-L938) · [Before (L1583-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1583-L1584)

```diff
-           detachControl() {
-             this.inputs.detachElement(), this._reset && this._reset()
+           getClassName() {
+             return "Texture"
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1586-L1589` → after: `L940-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L940-L941) · [Before (L1586-L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1586-L1589)

```diff
-           _applyRotationAndZoomDelta(pp, ip, cp) {
-             const Op = this.invertRotation ? -1 : 1;
-             let op = pp * this._calculateHandednessMultiplier();
-             this.beta < 0 && (op *= -1), this.alpha += op * Op, this.beta += ip * Op, this.radius -= cp
+           dispose() {
+             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1591-L1605` → after: `L943-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L943-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L943-L957) · [Before (L1591-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1591-L1605)

```diff
-           _applyPanDelta(pp, ip) {
-             const cp = Sp.i.Zy[0].i5(pp, ip, ip);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), cp.multiplyInPlace(this.panningAxis), Sp.o.TransformNormalToRef(cp, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
-               const pp = this.upVector,
-                 ip = Sp.o.CrossToRef(this._transformedDirection, pp, this._transformedDirection);
-               Sp.o.CrossToRef(pp, ip, this._transformedDirection)
-             } else this.panningAxis.y || (this._transformedDirection.y = 0);
-             if (!this._targetHost)
-               if (null !== this.panningDistanceLimit) {
-                 this._transformedDirection.addInPlace(this.mV);
-                 Sp.o.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.mV.rM(this._transformedDirection)
-               } else {
-                 if (this.parent) {
-                   const pp = Sp.i.Matrix[0];
-                   this.parent.getWorldMatrix().getRotationMatrixToRef(pp), pp.transposeToRef(pp), Sp.o.TransformCoordinatesToRef(this._transformedDirection, pp, this._transformedDirection)
+           static Parse(WQ, XQ, wQ) {
+             if (WQ.customType) {
+               const QQ = JQ.d.Instantiate(WQ.customType).Parse(WQ, XQ, wQ);
+               return WQ.samplingMode && QQ.updateSamplingMode && QQ._samplingMode && QQ._samplingMode !== WQ.samplingMode && QQ.updateSamplingMode(WQ.samplingMode), QQ
+             }
+             if (WQ.isCube && !WQ.isRenderTarget) return QQ._CubeTextureParser(WQ, XQ, wQ);
+             const qQ = void 0 !== WQ.internalTextureUniqueId;
+             if (!WQ.name && !WQ.isRenderTarget && !qQ) return null;
+             let TQ;
+             if (qQ) {
+               const QQ = XQ.Uj().getLoadedTexturesCache();
+               for (const XQ of QQ)
+                 if (XQ.uniqueId === WQ.internalTextureUniqueId) {
+                   TQ = XQ;
+                   break
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1623-L1631` → after: `L960-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L960-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L960-L963) · [Before (L1623-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1623-L1631)

```diff
-             if (pp) this.stopInterpolation();
-             else if (this._isInterpolating) {
-               let pp = !1;
-               const ip = this._scene.gy().getDeltaTime() / 1e3,
-                 cp = 1 - Math.pow(2, -ip / this._currentInterpolationFactor),
-                 Op = bp(this._goalRadius, this.radius);
-               if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
-                 const ip = Sp.i.Zy[0].set(bp(this._goalTarget.x, this.mV.x), bp(this._goalTarget.y, this.mV.y), bp(this._goalTarget.z, this.mV.z));
-                 Sp.o.LerpToRef(this.target, ip, cp, this.mV), 10 * Sp.o.Distance(this.target, ip) / Op < Pp.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.rM(ip), this.setTarget(this.target, !1, !0, !0)) : pp = !0
+             const zQ = QQ => {
+               if (QQ && QQ._texture && (QQ._texture._cachedWrapU = null, QQ._texture._cachedWrapV = null, QQ._texture._cachedWrapR = null), WQ.samplingMode) {
+                 const XQ = WQ.samplingMode;
+                 QQ && QQ.samplingMode !== XQ && QQ.updateSamplingMode(XQ)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1633-L1643` → after: `L965-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L965-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L965-L977) · [Before (L1633-L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1633-L1643)

```diff
-               if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
-                 const ip = Sp.f.RotationAlphaBetaGammaToRef(bp(this._goalAlpha, this.alpha), bp(this._goalBeta, this.beta), 0, Sp.i.Quaternion[0]),
-                   Op = Sp.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Sp.i.Quaternion[1]),
-                   op = Sp.f.SlerpToRef(Op, ip, cp, Sp.i.Quaternion[2]);
-                 op.normalize();
-                 const Ip = op.toAlphaBetaGammaToRef(Sp.i.Zy[0]);
-                 if (this.alpha = Ip.x, this.beta = Ip.y, op.isApprox(ip, Pp.b / 5)) {
-                   this._goalAlpha = NaN, this._goalBeta = NaN;
-                   const pp = ip.toAlphaBetaGammaToRef(Sp.i.Zy[0]);
-                   this.alpha = pp.x, this.beta = pp.y
-                 } else pp = !0
+               if (QQ && WQ.animations)
+                 for (let XQ = 0; XQ < WQ.animations.length; XQ++) {
+                   const wQ = WQ.animations[XQ],
+                     qQ = (0, FQ.b)("BABYLON.Animation");
+                   qQ && QQ.animations.push(qQ.Parse(wQ))
+                 }
+               QQ && QQ._texture && (qQ && !TQ && QQ._texture._setUniqueId(WQ.internalTextureUniqueId), QQ._texture.label = WQ.internalTextureLabel)
+             };
+             return DQ.b.Parse((() => {
+               let qQ = !0;
+               if (WQ.noMipmap && (qQ = !1), WQ.mirrorPlane) {
+                 const wQ = QQ._CreateMirror(WQ.name, WQ.renderTargetSize, XQ, qQ);
+                 return wQ._waitingRenderList = WQ.renderList, wQ.mirrorPlane = rQ.b.FromArray(WQ.mirrorPlane), zQ(wQ), wQ
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1645-L1647` → after: `L979-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L979-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L979-L988) · [Before (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1645-L1647)

```diff
-               if (isNaN(this._goalRadius) || (this.radius += (Op - this.radius) * cp, Math.abs(Op / this.radius - 1) < Pp.b ? (this._goalRadius = NaN, this.radius = Op) : pp = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
-                 const ip = Sp.i.Vector2[0].set(bp(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), bp(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
-                 Sp.l.LerpToRef(this.targetScreenOffset, ip, cp, this.targetScreenOffset), Sp.l.Distance(this.targetScreenOffset, ip) < Pp.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.rM(ip)) : pp = !0
+               if (WQ.isRenderTarget && !WQ.base64String) {
+                 let wQ = null;
+                 if (WQ.isCube) {
+                   if (XQ.reflectionProbes)
+                     for (let QQ = 0; QQ < XQ.reflectionProbes.length; QQ++) {
+                       const wQ = XQ.reflectionProbes[QQ];
+                       if (wQ.name === WQ.name) return wQ.cubeTexture
+                     }
+                 } else wQ = QQ._CreateRenderTargetTexture(WQ.name, WQ.renderTargetSize, XQ, qQ, WQ._creationFlags ?? 0), wQ._waitingRenderList = WQ.renderList;
+                 return zQ(wQ), wQ
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1649-L1773` → after: `L990-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L990-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L990-L1044) · [Before (L1649-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1649-L1773)

```diff
-               this._isInterpolating = pp
-             }
-             this._checkLimits(), super._checkInputs()
-           }
-           _checkLimits() {
-             null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === thi … [truncated]
-           }
-           rebuildAnglesAndRadius() {
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Sp.o.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
-             const pp = this.alpha;
-             var ip, cp;
-             this.alpha = function(pp) {
-               let ip = Math.PI / 2;
-               return 0 === pp.x && 0 === pp.z || (ip = Math.acos(pp.x / Math.sqrt(Math.pow(pp.x, 2) + Math.pow(pp.z, 2)))), pp.z < 0 && (ip = 2 * Math.PI - ip), ip
-             }(this._computationVector), this.beta = (ip = this._computationVector.y, cp = this.radius, Math.acos(ip / cp));
-             const Op = Math.round((pp - this.alpha) / (2 * Math.PI));
- ... (109 more removed lines; see GitHub link above)
+               if (WQ.isVideo) {
+                 const TQ = QQ._CreateVideoTexture(wQ + (WQ.url || WQ.name), wQ + (WQ.src || WQ.url), XQ, qQ, WQ.invertY, WQ.samplingMode, WQ.settings || {});
+                 return zQ(TQ), TQ
+               } {
+                 let sQ;
+                 if ("string" === typeof WQ.base64String && WQ.base64String && !TQ) {
+                   const wQ = {
+                       buffer: WQ.base64String,
+                       noMipmap: !qQ,
+                       invertY: WQ.invertY,
+                       samplingMode: WQ.samplingMode,
+                       useSRGBBuffer: WQ._useSRGBBuffer ?? !1,
+                       creationFlags: WQ._creationFlags ?? 0,
+                       onLoad: () => {
+                         zQ(sQ)
+                       }
+ ... (39 more added lines; see GitHub link above)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1777-L1817` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1048) · [Before (L1777-L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1777-L1817)

```diff
-           ip = [(0, op.K)()], cp = [(0, op.K)()], Lp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.H)("target")], yp = [(0, op.u)("targetHost")], Up = [(0, op.K)()], dp = [(0, op.K)()], jp = [(0, op.K)()], kp = [(0, op.K)()], mp = [(0, op.K)()], Rp = [(0, op.K)()], qp = [(0,  … [truncated]
-             kind: "getter",
-             name: "inertialAlphaOffset",
-             static: !1,
-             private: !1,
-             access: {
-               has: pp => "inertialAlphaOffset" in pp,
-               get: pp => pp.inertialAlphaOffset
-             },
-             metadata: Ip
-           }, null, Zp), (0, Op.j)(pp, null, dp, {
-             kind: "getter",
-             name: "inertialBetaOffset",
-             static: !1,
-             private: !1,
-             access: {
- ... (25 more removed lines; see GitHub link above)
+           WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], UQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], dQ = [(0, qQ.I)()], HQ = [(0, qQ.I)()], aQ = [(0, qQ.I)()], lQ = [(0, qQ.I)()], hQ = [(0, qQ.I)()], (0, wQ.k)( … [truncated]
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1819-L1959` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1050) · [Before (L1819-L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1819-L1959)

```diff
-             name: "zoomToMouseLocation",
-             static: !1,
-             private: !1,
-             access: {
-               has: pp => "zoomToMouseLocation" in pp,
-               get: pp => pp.zoomToMouseLocation
-             },
-             metadata: Ip
-           }, null, Zp), (0, Op.j)(null, null, ip, {
-             kind: "field",
-             name: "alpha",
-             static: !1,
-             private: !1,
-             access: {
-               has: pp => "alpha" in pp,
-               get: pp => pp.alpha,
- ... (125 more removed lines; see GitHub link above)
+             name: "isBlocking",
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1963-L1967` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1054-L1055) · [Before (L1963-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1963-L1967)

```diff
-               has: pp => "lowerRadiusLimit" in pp,
-               get: pp => pp.lowerRadiusLimit,
-               set: (pp, ip) => {
-                 pp.lowerRadiusLimit = ip
-               }
+               has: QQ => "isBlocking" in QQ,
+               get: QQ => QQ.isBlocking
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1970` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1058) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1970)

```diff
-           }, vi, ti), (0, Op.j)(null, null, Cp, {
+           }, null, cQ), (0, wQ.k)(null, null, WQ, {
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1972` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1060) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1972)

```diff
-             name: "upperRadiusLimit",
+             name: "url",
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1976-L1977` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1064-L1065) · [Before (L1976-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1976-L1977)

```diff
-               has: pp => "upperRadiusLimit" in pp,
-               get: pp => pp.upperRadiusLimit,
+               has: QQ => "url" in QQ,
+               get: QQ => QQ.url,
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1979` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1067) · [Before (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1979)

```diff
-                 pp.upperRadiusLimit = ip
+                 QQ.url = WQ
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1983` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1071) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1983)

```diff
-           }, Hi, di), (0, Op.j)(null, null, Ep, {
+           }, AQ, RQ), (0, wQ.k)(null, null, XQ, {
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1985` → after: `L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1073) · [Before (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1985)

```diff
-             name: "lowerTargetYLimit",
+             name: "uOffset",
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1989-L1990` → after: `L1077-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1077-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1077-L1078) · [Before (L1989-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1989-L1990)

```diff
-               has: pp => "lowerTargetYLimit" in pp,
-               get: pp => pp.lowerTargetYLimit,
+               has: QQ => "uOffset" in QQ,
+               get: QQ => QQ.uOffset,
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1992` → after: `L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1080) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1992)

```diff
-                 pp.lowerTargetYLimit = ip
+                 QQ.uOffset = WQ
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1996` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1084) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1996)

```diff
-           }, ei, ui), (0, Op.j)(null, null, Xp, {
+           }, EQ, CQ), (0, wQ.k)(null, null, jQ, {
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1998` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1086) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L1998)

```diff
-             name: "inertialPanningX",
+             name: "vOffset",
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2002-L2003` → after: `L1090-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1090-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1090-L1091) · [Before (L2002-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2002-L2003)

```diff
-               has: pp => "inertialPanningX" in pp,
-               get: pp => pp.inertialPanningX,
+               has: QQ => "vOffset" in QQ,
+               get: QQ => QQ.vOffset,
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2005` → after: `L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1093) · [Before (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2005)

```diff
-                 pp.inertialPanningX = ip
+                 QQ.vOffset = WQ
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2009` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1097) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2009)

```diff
-           }, ji, ki), (0, Op.j)(null, null, lp, {
+           }, uQ, LQ), (0, wQ.k)(null, null, pQ, {
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2011` → after: `L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1099) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2011)

```diff
-             name: "inertialPanningY",
+             name: "uScale",
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2015-L2016` → after: `L1103-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1103-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1103-L1104) · [Before (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2015-L2016)

```diff
-               has: pp => "inertialPanningY" in pp,
-               get: pp => pp.inertialPanningY,
+               has: QQ => "uScale" in QQ,
+               get: QQ => QQ.uScale,
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2018` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1106) · [Before (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2018)

```diff
-                 pp.inertialPanningY = ip
+                 QQ.uScale = WQ
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2022` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1110) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2022)

```diff
-           }, mi, Ri), (0, Op.j)(null, null, Qp, {
+           }, kQ, fQ), (0, wQ.k)(null, null, GQ, {
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2024` → after: `L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1112) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2024)

```diff
-             name: "pinchToPanMaxDistance",
+             name: "vScale",
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2028-L2029` → after: `L1116-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1116-L1117) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2028-L2029)

```diff
-               has: pp => "pinchToPanMaxDistance" in pp,
-               get: pp => pp.pinchToPanMaxDistance,
+               has: QQ => "vScale" in QQ,
+               get: QQ => QQ.vScale,
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2031` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1119) · [Before (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2031)

```diff
-                 pp.pinchToPanMaxDistance = ip
+                 QQ.vScale = WQ
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2035` → after: `L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1123) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2035)

```diff
-           }, qi, Mi), (0, Op.j)(null, null, Bp, {
+           }, SQ, tQ), (0, wQ.k)(null, null, UQ, {
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2037` → after: `L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1125) · [Before (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2037)

```diff
-             name: "panningDistanceLimit",
+             name: "uAng",
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2041-L2042` → after: `L1129-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1129-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1129-L1130) · [Before (L2041-L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2041-L2042)

```diff
-               has: pp => "panningDistanceLimit" in pp,
-               get: pp => pp.panningDistanceLimit,
+               has: QQ => "uAng" in QQ,
+               get: QQ => QQ.uAng,
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2044` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1132) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2044)

```diff
-                 pp.panningDistanceLimit = ip
+                 QQ.uAng = WQ
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2048` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1136) · [Before (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2048)

```diff
-           }, Ci, Ei), (0, Op.j)(null, null, Np, {
+           }, oQ, eQ), (0, wQ.k)(null, null, bQ, {
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2050` → after: `L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1138) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2050)

```diff
-             name: "panningOriginTarget",
+             name: "vAng",
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2054-L2055` → after: `L1142-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1142-L1143) · [Before (L2054-L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2054-L2055)

```diff
-               has: pp => "panningOriginTarget" in pp,
-               get: pp => pp.panningOriginTarget,
+               has: QQ => "vAng" in QQ,
+               get: QQ => QQ.vAng,
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2057` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1145) · [Before (L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2057)

```diff
-                 pp.panningOriginTarget = ip
+                 QQ.vAng = WQ
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2061` → after: `L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1149) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2061)

```diff
-           }, Xi, li), (0, Op.j)(null, null, ap, {
+           }, nQ, xQ), (0, wQ.k)(null, null, vQ, {
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2063` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1151) · [Before (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2063)

```diff
-             name: "zoomOnFactor",
+             name: "wAng",
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2067-L2068` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1155-L1156) · [Before (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2067-L2068)

```diff
-               has: pp => "zoomOnFactor" in pp,
-               get: pp => pp.zoomOnFactor,
+               has: QQ => "wAng" in QQ,
+               get: QQ => QQ.wAng,
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2070` → after: `L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1158) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2070)

```diff
-                 pp.zoomOnFactor = ip
+                 QQ.wAng = WQ
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2074` → after: `L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1162) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2074)

```diff
-           }, Qi, Ji), (0, Op.j)(null, null, np, {
+           }, YQ, NQ), (0, wQ.k)(null, null, dQ, {
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2076` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1164) · [Before (L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2076)

```diff
-             name: "targetScreenOffset",
+             name: "uRotationCenter",
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2080-L2081` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1168-L1169) · [Before (L2080-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2080-L2081)

```diff
-               has: pp => "targetScreenOffset" in pp,
-               get: pp => pp.targetScreenOffset,
+               has: QQ => "uRotationCenter" in QQ,
+               get: QQ => QQ.uRotationCenter,
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2083` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1171) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2083)

```diff
-                 pp.targetScreenOffset = ip
+                 QQ.uRotationCenter = WQ
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2087` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1175) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2087)

```diff
-           }, Bi, Ni), (0, Op.j)(null, null, Fp, {
+           }, ZQ, OQ), (0, wQ.k)(null, null, HQ, {
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2089` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1177) · [Before (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2089)

```diff
-             name: "allowUpsideDown",
+             name: "vRotationCenter",
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2093-L2094` → after: `L1181-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1181-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1181-L1182) · [Before (L2093-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2093-L2094)

```diff
-               has: pp => "allowUpsideDown" in pp,
-               get: pp => pp.allowUpsideDown,
+               has: QQ => "vRotationCenter" in QQ,
+               get: QQ => QQ.vRotationCenter,
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2096` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1184) · [Before (L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2096)

```diff
-                 pp.allowUpsideDown = ip
+                 QQ.vRotationCenter = WQ
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2100` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1188) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2100)

```diff
-           }, Ti, fi), (0, Op.j)(null, null, gp, {
+           }, KQ, mQ), (0, wQ.k)(null, null, aQ, {
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2102` → after: `L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1190) · [Before (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2102)

```diff
-             name: "useInputToRestoreState",
+             name: "wRotationCenter",
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2106-L2107` → after: `L1194-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1194-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1194-L1195) · [Before (L2106-L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2106-L2107)

```diff
-               has: pp => "useInputToRestoreState" in pp,
-               get: pp => pp.useInputToRestoreState,
+               has: QQ => "wRotationCenter" in QQ,
+               get: QQ => QQ.wRotationCenter,
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2109` → after: `L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1197) · [Before (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2109)

```diff
-                 pp.useInputToRestoreState = ip
+                 QQ.wRotationCenter = WQ
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2113` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1201) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2113)

```diff
-           }, bi, ai), (0, Op.j)(null, null, Gp, {
+           }, MQ, QW), (0, wQ.k)(null, null, lQ, {
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2115` → after: `L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1203) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2115)

```diff
-             name: "restoreStateInterpolationFactor",
+             name: "homogeneousRotationInUVTransform",
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2119-L2120` → after: `L1207-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1207-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1207-L1208) · [Before (L2119-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2119-L2120)

```diff
-               has: pp => "restoreStateInterpolationFactor" in pp,
-               get: pp => pp.restoreStateInterpolationFactor,
+               has: QQ => "homogeneousRotationInUVTransform" in QQ,
+               get: QQ => QQ.homogeneousRotationInUVTransform,
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2122` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1210) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2122)

```diff
-                 pp.restoreStateInterpolationFactor = ip
+                 QQ.homogeneousRotationInUVTransform = WQ
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2132` → after: `L1220-L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1220-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1220-L1226) · [Before (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2132)

```diff
-         })(), pp
+         })(), QQ.SerializeBuffers = !0, QQ.ForceSerializeBuffers = !1, QQ.OnTextureLoadErrorObservable = new TQ.b, QQ._SerializeInternalTextureUniqueId = !1, QQ._CubeTextureParser = (QQ, WQ, XQ) => {
+           throw (0, PQ.i)("CubeTexture")
+         }, QQ._CreateMirror = (QQ, WQ, XQ, wQ) => {
+           throw (0, PQ.i)("MirrorTexture")
+         }, QQ._CreateRenderTargetTexture = (QQ, WQ, XQ, wQ, qQ) => {
+           throw (0, PQ.i)("RenderTargetTexture")
+         }, QQ.NEAREST_SAMPLINGMODE = 1, QQ.NEAREST_NEAREST_MIPLINEAR = 8, QQ.BILINEAR_SAMPLINGMODE = 2, QQ.LINEAR_LINEAR_MIPNEAREST = 11, QQ.TRILINEAR_SAMPLINGMODE = 3, QQ.LINEAR_LINEAR_MIPLINEAR = 3, QQ.NEAREST_NEAREST_MIPNEAREST = 4, QQ.NEAREST_LINEAR_MIPNEAREST = 5, QQ.NEAREST … [truncated]
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2135-L2142` → after: `L1229-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1229-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1229-L1232) · [Before (L2135-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2135-L2142)

```diff
-     ap || (ap = !0, Lp.b.AddNodeConstructor("ArcRotateCamera", ((pp, ip) => () => new hp(pp, 0, 0, 1, Sp.o.Zero(), ip))), (0, Bp.g)("BABYLON.ArcRotateCamera", hp))
-   },
-   40443: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Op.b
-     });
-     var Op = cp(40445);
-     (0, Op.d)()
+ 
+     function UQ() {
+       GQ || (GQ = !0, (0, FQ.d)("BABYLON.Texture", pQ), DQ.b._TextureParser = pQ.Parse)
+     }
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2144` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1234) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2144)

```diff
-   40445: (pp, ip, cp) => {
+   40277: (QQ, WQ, XQ) => {
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2146-L2147` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1236) · [Before (L2146-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2146-L2147)

```diff
-       b: () => Dp,
-       d: () => Pp
+       e: () => wQ
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L2149-L2235` → after: `L1238-L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1238-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/264.js#L1238-L1289) · [Before (L2149-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/264.js#L2149-L2235)

```diff
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(37320),
-       Sp = cp(37487),
-       xp = cp(40451),
-       Lp = cp(40415),
-       Yp = cp(37368);
-     let Dp = (() => {
-         var pp;
-         let ip, cp, Lp = xp.d,
-           Yp = [],
-           Dp = [],
-           Ap = [],
-           Pp = [];
-         return pp = class extends Lp {
-           constructor(pp, ip, cp, op) {
- ... (71 more removed lines; see GitHub link above)
+     class wQ {
+       constructor(QQ, WQ) {
+         this.width = QQ, this.height = WQ
+       }
+       toString() {
+         return `{W: ${this.width}, H: ${this.height}}`
+       }
+       getClassName() {
+         return "Size"
+       }
+       getHashCode() {
+         let QQ = 0 | this.width;
+         return QQ = 397 * QQ ^ this.height, QQ
+       }
+       WH(QQ) {
+         this.width = QQ.width, this.height = QQ.height
+ ... (36 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/265.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/265.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250)

#### 1. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L4)

```diff
-   40562: (pp, ip, cp) => {
+   40515: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L6-L298` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L6-L7) · [Before (L6-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L6-L298)

```diff
-       b: () => op
-     });
-     var Op = cp(40217);
- 
-     function op(pp) {
-       return class extends pp {
-         constructor() {
-           super(...arguments);
-           const pp = new.target;
-           if (!pp[Symbol.metadata]) {
-             const ip = Object.getPrototypeOf(pp)?.[Symbol.metadata];
-             pp[Symbol.metadata] = ip ? Object.create(ip) : {}
-           }
-           const ip = (0, Op.c)(pp[Symbol.metadata]);
-           ip._imageProcessingConfiguration || (ip._imageProcessingConfiguration = {
-             type: 9,
- ... (277 more removed lines; see GitHub link above)
+       d: () => zQ,
+       g: () => sQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L302-L337` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L15) · [Before (L302-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L302-L337)

```diff
-         if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, … [truncated]
-           for (const ip in pp) Object.prototype.hasOwnProperty.call(pp, ip) && this._setDefaultValue(ip)
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
-       markAsImageProcessingDirty() {
- ... (20 more removed lines; see GitHub link above)
+         this.attachedToElement = !1, this.attached = {}, this.camera = QQ, this.checkInputs = () => {}
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L339-L343` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L17-L19) · [Before (L339-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L339-L343)

```diff
-       rebuild() {
-         this._keys.length = 0;
-         for (const pp of Object.keys(this)) "_" !== pp[0] && this._keys.push(pp);
-         if (this._externalProperties)
-           for (const pp in this._externalProperties) - 1 === this._keys.indexOf(pp) && this._keys.push(pp)
+       add(QQ) {
+         const WQ = QQ.getSimpleName();
+         this.attached[WQ] ? wQ.b.Warn("camera input of type " + WQ + " already exists on camera") : (this.attached[WQ] = QQ, QQ.camera = this.camera, QQ.checkInputs && (this.checkInputs = this._addCheckInputs(QQ.checkInputs.bind(QQ))), this.attachedToElement && QQ.attachControl(t … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L345-L349` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L21-L24) · [Before (L345-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L345-L349)

```diff
-       isEqual(pp) {
-         if (this._keys.length !== pp._keys.length) return !1;
-         for (let ip = 0; ip < this._keys.length; ip++) {
-           const cp = this._keys[ip];
-           if (this[cp] !== pp[cp]) return !1
+       remove(QQ) {
+         for (const WQ in this.attached) {
+           const XQ = this.attached[WQ];
+           if (XQ === QQ) return XQ.detachControl(), XQ.camera = null, delete this.attached[WQ], void this.rebuildInputCheck()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L363-L374` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L27-L30) · [Before (L363-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L363-L374)

```diff
-       _setDefaultValue(pp) {
-         const ip = this._externalProperties?.[pp]?.type ?? typeof this[pp],
-           cp = this._externalProperties?.[pp]?.default;
-         switch (ip) {
-           case "number":
-             this[pp] = cp ?? 0;
-             break;
-           case "string":
-             this[pp] = cp ?? "";
-             break;
-           default:
-             this[pp] = cp ?? !1
+       removeByType(QQ) {
+         for (const WQ in this.attached) {
+           const XQ = this.attached[WQ];
+           XQ.getClassName() === QQ && (XQ.detachControl(), XQ.camera = null, delete this.attached[WQ], this.rebuildInputCheck())
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L377-L389` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L33-L36) · [Before (L377-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L377-L389)

```diff
-       toString() {
-         let pp = "";
-         for (let ip = 0; ip < this._keys.length; ip++) {
-           const cp = this._keys[ip],
-             Op = this[cp];
-           switch (typeof Op) {
-             case "number":
-             case "string":
-               pp += "#define " + cp + " " + Op + "\n";
-               break;
-             default:
-               Op && (pp += "#define " + cp + "\n")
-           }
+       _addCheckInputs(QQ) {
+         const WQ = this.checkInputs;
+         return () => {
+           WQ(), QQ()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L431-L432` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L39-L40) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L431-L432)

```diff
-       static DeleteConfiguration(pp) {
-         delete xp._Configurations[pp]
+       attachInput(QQ) {
+         this.attachedToElement && QQ.attachControl(this.noPreventDefault)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L434-L443` → after: `L42-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L42-L46) · [Before (L434-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L434-L443)

```diff
-       static GetConfiguration(pp) {
-         return xp._Configurations[pp]
-       }
-       static _PrepareConfiguration(pp, ip, cp) {
-         const Op = xp._Configurations[pp];
-         Op._attachments = ip, Op._colorAttachments = cp, Op._mrtCount = ip.length;
-         let op = "#define PREPASS\n";
-         for (const Ip of xp.GeometryTextureDescriptions) {
-           const pp = Op.defines[Ip.defineIndex];
-           void 0 !== pp && (op += `#define ${Ip.define}\n#define ${Ip.defineIndex} ${pp}\n`)
+       attachElement() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           QQ = !TQ.d.ForceAttachControlToAlwaysPreventDefault && QQ, this.attachedToElement = !0, this.noPreventDefault = QQ;
+           for (const WQ in this.attached) this.attached[WQ].attachControl(QQ)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L463-L495` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L49-L52) · [Before (L463-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L463-L495)

```diff
-       static _IsColorAttachmentEnabled(pp) {
-         const ip = xp._Configurations[pp.currentRenderPassId];
-         return !ip?._colorAttachments || void 0 !== ip.defines.PREPASS_COLOR_INDEX
-       }
-       static _BindZeroAlphaDiscard(pp, ip) {
-         const cp = xp._Configurations[pp.currentRenderPassId];
-         if (!cp) return;
-         const Op = pp.getAlphaMode(),
-           op = void 0 === cp.defines.PREPASS_COLOR_INDEX || 2 === Op || 1 === Op || 17 === Op;
-         ip.setFloat("geometryZeroAlphaDiscard", op ? 1 : 0)
-       }
-       static AddUniformsAndSamplers(pp, ip) {
-         pp.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
-       }
-       static MarkAsDirty(pp, ip) {
-         for (const cp of ip)
- ... (17 more removed lines; see GitHub link above)
+       detachElement() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const WQ in this.attached) this.attached[WQ].detachControl(), QQ && (this.attached[WQ].camera = null);
+         this.attachedToElement = !1
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L497-L522` → after: `L54-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L54-L58) · [Before (L497-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L497-L522)

```diff
-       static Bind(pp, ip, cp, Op, op) {
-         const Lp = xp._Configurations[pp];
-         if (!Lp) return;
-         const Yp = cp.Gl(),
-           Dp = Yp.gy();
-         if (Lp.reverseCulling && Dp.setStateCullFaceType(Yp._mirroredCameraPosition ? op.cullBackFaces : !op.cullBackFaces), void 0 !== Lp.defines.PREPASS_OBJECT_ID_INDEX) {
-           const pp = Lp.objectIdIsRedFormat ? 255 : 16777215;
-           let Op = cp.uniqueId;
-           if (Lp.objectIdProvider) Op = Ip(cp, Lp.objectIdProvider, pp);
-           else if (Op > pp) throw new Error(`Invalid geometry object ID ${Op} for mesh "${cp.name}". Object IDs must be integers between 0 and 0x${pp.toString(16).toUpperCase()}.`);
-           ip.setFloat("objectId", Op)
-         }
-         if (void 0 !== Lp.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
-           const pp = Lp.meshBlendTagProvider ? Sp(cp, Lp.meshBlendTagProvider) : cp.meshBlendingTag;
-           ip.setInt("meshBlendTag", pp)
-         }
- ... (10 more removed lines; see GitHub link above)
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const QQ in this.attached) {
+           const WQ = this.attached[QQ];
+           WQ.checkInputs && (this.checkInputs = this._addCheckInputs(WQ.checkInputs.bind(WQ)))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L525-L642` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L61-L62) · [Before (L525-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L525-L642)

```diff
-     }
-     xp.GeometryTextureDescriptions = [{
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
-       name: "Velocity",
- ... (102 more removed lines; see GitHub link above)
+       clear() {
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L644-L649` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L64) · [Before (L644-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L644-L649)

```diff
-       _addPlugin(pp) {
-         for (let Op = 0; Op < this._plugins.length; ++Op)
-           if (this._plugins[Op].name === pp.name) return !1;
-         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !pp.isCompatible(this._material.shaderLanguage)) throw `The plugin "${pp.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
-         const ip = pp.getClassName();
-         Lp._MaterialPluginClassToMainDefine[ip] || (Lp._MaterialPluginClassToMainDefine[ip] = "MATERIALPLUGIN_" + ++Lp._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (pp, ip) => this._handlePluginEvent(pp, ip), this._plugins.push(pp), this._plugins.sort(((p … [truncated]
+       serialize(QQ) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L651-L756` → after: `L66-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L66-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L66-L82) · [Before (L651-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L651-L756)

```diff
-         cp[Lp._MaterialPluginClassToMainDefine[ip]] = {
-           type: "boolean",
-           default: !0
-         };
-         for (const Op of this._plugins) Op.collectDefines(cp), this._collectPointNames("vertex", Op.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Op.getCustomCode("fragment", this._material.shaderLanguage));
-         return this._defineNamesFromPlugins = cp, !0
-       }
-       _activatePlugin(pp) {
-         -1 === this._activePlugins.indexOf(pp) && (this._activePlugins.push(pp), this._activePlugins.sort(((pp, ip) => pp.priority - ip.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callback … [truncated]
-       }
-       getPlugin(pp) {
-         for (let ip = 0; ip < this._plugins.length; ++ip)
-           if (this._plugins[ip].name === pp) return this._plugins[ip];
-         return null
-       }
-       _handlePluginEventIsReadyForSubMesh(pp) {
- ... (90 more removed lines; see GitHub link above)
+         for (const XQ in this.attached) {
+           const QQ = this.attached[XQ],
+             wQ = qQ.b.Serialize(QQ);
+           WQ[QQ.getClassName()] = wQ
+         }
+         QQ.inputsmgr = WQ
+       }
+       parse(QQ) {
+         const WQ = QQ.inputsmgr;
+         if (WQ) {
+           this.clear();
+           for (const QQ in WQ) {
+             const XQ = zQ[QQ];
+             if (XQ) {
+               const wQ = WQ[QQ],
+                 TQ = qQ.b.Parse((() => new XQ), wQ, null);
+ ... (1 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L760-L792` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L85-L90) · [Before (L760-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L760-L792)

```diff
-         }
-       }
-       _collectPointNames(pp, ip) {
-         if (ip)
-           for (const cp in ip) this._codeInjectionPoints[pp] || (this._codeInjectionPoints[pp] = {}), this._codeInjectionPoints[pp][cp] = !0
-       }
-       _injectCustomCode(pp, ip) {
-         return (cp, Op) => {
-           ip && (Op = ip(cp, Op)), this._uboDeclaration && (Op = Op.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Op = Op.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
-           const op = this._codeInjectionPoints?.[cp];
-           if (!op) return Op;
-           let Lp = null;
-           for (let ip in op) {
-             let op = "";
-             for (const Op of this._activePlugins) {
-               const xp = this._material.shaderLanguage;
- ... (17 more removed lines; see GitHub link above)
+         } else
+           for (const XQ in this.attached) {
+             const WQ = zQ[this.attached[XQ].getClassName()];
+             if (WQ) {
+               const wQ = qQ.b.Parse((() => new WQ), QQ, null);
+               this.remove(this.attached[XQ]), this.add(wQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L821-L830` → after: `L95-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L95-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L95-L115) · [Before (L821-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L821-L830)

```diff
-     Lp._MaterialPluginClassToMainDefine = {}, Lp._MaterialPluginCounter = 0;
- 
-     function Yp(pp, ip) {
-       return pp.replace(/\$(\d+)/g, ((pp, cp) => {
-         const Op = Number(cp);
-         return Op < ip.length ? ip[Op] : ""
-       }))
-     }
-     var Dp = cp(40233),
-       Ap = cp(37368);
+   },
+   41348: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => pQ
+     });
+     var wQ = XQ(40260),
+       qQ = XQ(40268),
+       TQ = XQ(40164),
+       zQ = XQ(37370),
+       sQ = XQ(40253),
+       FQ = XQ(40724),
+       PQ = XQ(37418),
+       gQ = XQ(37399),
+       JQ = XQ(40286),
+       rQ = XQ(40103),
+       IQ = XQ(38956),
+ ... (5 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L833` → after: `L118-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L118-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L118-L126) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L833)

```diff
-         let ip, cp, Ip, Sp, xp = [],
+         let WQ, XQ, PQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ = sQ.c,
+           aQ = [],
+           lQ = [],
+           hQ = [],
+           iQ = [],
+           cQ = [],
+           AQ = [],
+           RQ = [],
+           EQ = [],
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L841-L877` → after: `L134-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L134-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L134-L139) · [Before (L841-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L841-L877)

```diff
-         return pp = class {
-           isCompatible(pp) {
-             return 0 === pp
-           }
-           _enable(pp) {
-             pp && this._pluginManager._activatePlugin(this)
-           }
-           constructor(pp, ip, cp, op) {
-             let Ip = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-               Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-               Dp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-             this.name = (0, Op.l)(this, xp, void 0), this.priority = ((0, Op.l)(this, Yp), (0, Op.l)(this, Ap, 500)), this.resolveIncludes = ((0, Op.l)(this, Pp), (0, Op.l)(this, Wp, !1)), this.registerForExtraEvents = ((0, Op.l)(this, yp), (0, Op.l)(this, Up, !1)), this.doNotSer … [truncated]
-               pp.pluginManager = void 0
-             }))), this._pluginDefineNames = op, this._pluginManager = pp.pluginManager, Ip && this._pluginManager._addPlugin(this), Sp && this._enable(!0), this.markAllDefinesAsDirty = pp._dirtyCallbacks[127]
-           }
-           getClassName() {
- ... (21 more removed lines; see GitHub link above)
+         return QQ = class extends HQ {
+           set boundingBoxSize(QQ) {
+             if (this._boundingBoxSize && this._boundingBoxSize.equals(QQ)) return;
+             this._boundingBoxSize = QQ;
+             const WQ = this.sE();
+             WQ && WQ.markAllMaterialsAsDirty(1)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L879-L882` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L141-L142) · [Before (L879-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L879-L882)

```diff
-           prepareDefinesBeforeAttributes(pp, ip, cp) {}
-           prepareDefines(pp, ip, cp) {}
-           hasTexture(pp) {
-             return !1
+           get boundingBoxSize() {
+             return this._boundingBoxSize
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L884-L885` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L144-L145) · [Before (L884-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L884-L885)

```diff
-           hasRenderTargetTextures() {
-             return !1
+           set rotationY(QQ) {
+             this._rotationY = QQ, this.setReflectionTextureMatrix(zQ.e.RotationY(this._rotationY))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L887-L891` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L147-L148) · [Before (L887-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L887-L891)

```diff
-           fillRenderTargetTextures(pp) {}
-           getActiveTextures(pp) {}
-           getAnimatables(pp) {}
-           addFallbacks(pp, ip, cp) {
-             return cp
+           get rotationY() {
+             return this._rotationY
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L893-L897` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L150-L151) · [Before (L893-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L893-L897)

```diff
-           getSamplers(pp) {}
-           getAttributes(pp, ip, cp) {}
-           getUniformBuffersNames(pp) {}
-           getUniforms() {
-             return {}
+           get noMipmap() {
+             return this._noMipmap
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L899-L900` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L153-L154) · [Before (L899-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L899-L900)

```diff
-           copyTo(pp) {
-             Dp.c.Clone((() => pp), this)
+           get forcedExtension() {
+             return this._forcedExtension
```
