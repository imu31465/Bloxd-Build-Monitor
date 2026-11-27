# Changed — Bundle Modifications Report (Part 019 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `19 / 82` (**316** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 018](part-018.md) · [Part 020 →](part-020.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/286.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/286.js` (83 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469)

#### 45. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L444-L450` → after: `L1081-L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1081-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1081-L1096) · [Before (L444-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L444-L450)

```diff
-     function Oe(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-         ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const be = ie.useDelayedTextureLoading;
-       ie.useDelayedTextureLoading = !1;
-       const Me = new Be(ee, ie, null, !1, null, null, null, void 0, !0, He, ye);
-       return ie.useDelayedTextureLoading = be, Me
+     function NW() {
+       EW || (EW = !0, mW.b.prototype.getInputElement = function() {
+         return this._renderingCanvas
+       }, mW.b.prototype.getRenderingCanvasClientRect = function() {
+         return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
+       }, mW.b.prototype.getInputElementClientRect = function() {
+         return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
+       }, mW.b.prototype.getAspectRatio = function(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const OW = WW.viewport;
+         return this.getRenderWidth(iW) * OW.width / (this.getRenderHeight(iW) * OW.height)
+       }, mW.b.prototype.getScreenAspectRatio = function() {
+         return this.getRenderWidth(!0) / this.getRenderHeight(!0)
+       }, mW.b.prototype._verifyPointerLock = function() {
+         this._onPointerLockChange?.()
+       })
```

#### 46. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L453-L462` → after: `L1123-L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1123-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1123-L1141) · [Before (L453-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L453-L462)

```diff
-     function de(ee, ie, He) {
-       const ye = Re.c.Parse((() => {
-         let ye = !1;
-         return ee.prefiltered && (ye = ee.prefiltered), new Be(He + (ee.url ?? ee.name), ie, ee.extensions, !1, ee.files || null, null, null, void 0, ye, ee.forcedExtension)
-       }), ee, ie);
-       if (ee.boundingBoxPosition && (ye.boundingBoxPosition = Ke.p.FromArray(ee.boundingBoxPosition)), ee.boundingBoxSize && (ye.boundingBoxSize = Ke.p.FromArray(ee.boundingBoxSize)), ee.animations)
-         for (let be = 0; be < ee.animations.length; be++) {
-           const ie = ee.animations[be],
-             He = (0, Je.c)("BABYLON.Animation");
-           He && ye.animations.push(He.Parse(ie))
+     function NW() {
+       EW || (EW = !0, mW.b.prototype.getRenderPassNames = function() {
+         return this._renderPassNames
+       }, mW.b.prototype.getCurrentRenderPassName = function() {
+         return this._renderPassNames[this.currentRenderPassId]
+       }, mW.b.prototype.createRenderPassId = function(WW) {
+         const iW = ++mW.b._RenderPassIdCounter;
+         return this._renderPassNames[iW] = WW ?? "NONAME", iW
+       }, mW.b.prototype.releaseRenderPassId = function(WW) {
+         this._renderPassNames[WW] = void 0;
+         for (let iW = 0; iW < this.scenes.length; ++iW) {
+           const OW = this.scenes[iW];
+           for (let iW = 0; iW < OW.meshes.length; ++iW) {
+             const mW = OW.meshes[iW];
+             if (mW._releaseRenderPassId(WW), mW.hY)
+               for (let iW = 0; iW < mW.hY.length; ++iW) {
+ ... (3 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L464` → after: `L1143-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1143-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1143-L1144) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L464)

```diff
-       return ye
+         this._onReleaseRenderPassObservable?.notifyObservers(WW)
+       })
```

#### 48. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L468` → after: `L1147-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1147-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1147-L1153) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L468)

```diff
-   42250: (ee, ie, He) => {
+   41589: (WW, iW, OW) => {
+     var mW = OW(41595),
+       EW = OW(41423);
+     let NW = !1;
+     NW || (NW = !0, EW.b.GetCompatibleTextureLoader = mW.e)
+   },
+   41481: (WW, iW, OW) => {
```

#### 49. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L472-L476` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1157) · [Before (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L472-L476)

```diff
-     var ye = He(39467),
-       be = He(41593),
-       Me = He(41044),
-       Ke = He(40936),
-       Ue = He(40924);
+     var mW = OW(41384);
```

#### 50. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L478-L502` → after: `L1159-L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1159-L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1159-L1434) · [Before (L478-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L478-L502)

```diff
-     class Je extends be.e {
-       constructor(ee, ie, He) {
-         let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           Je = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
-           oe = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
-           Re = arguments.length > 6 ? arguments[6] : void 0;
-         const ke = !He || He._isScene;
-         super(null, ke ? He : He?.yp, ke ? !ye : He, Re, Je, void 0, void 0, void 0, void 0, oe), Fe || (Fe = !0, Ke.ThinEngine.prototype.createDynamicTexture = function(ee, ie, He, ye) {
-           const be = new Ue.b(this, 4);
-           return be.baseWidth = ee, be.baseHeight = ie, He && (ee = this.needPOTTextures ? (0, Me.h)(ee, this._caps.maxTextureSize) : ee, ie = this.needPOTTextures ? (0, Me.h)(ie, this._caps.maxTextureSize) : ie), be.width = ee, be.height = ie, be.isReady = !1, be.generateMipMaps … [truncated]
-         }, Ke.ThinEngine.prototype.updateDynamicTexture = function(ee, ie, He) {
-           let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-             be = arguments.length > 4 ? arguments[4] : void 0,
-             Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-           if (!ee) return;
-           const Ke = this._gl,
- ... (9 more removed lines; see GitHub link above)
+ 
+     function NW() {
+       EW || (EW = !0, mW.ThinEngine.prototype.setAlphaMode = function(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         if (this._alphaMode[OW] === WW) {
+           if (!iW) {
+             const iW = 0 === WW;
+             this.depthCullingState.depthMask !== iW && (this.depthCullingState.depthMask = iW)
+           }
+           return
+         }
+         const mW = 0 === WW;
+         this._alphaState.setAlphaBlend(!mW, OW), this._alphaState.setAlphaMode(WW, OW), iW || (this.depthCullingState.depthMask = mW), this._alphaMode[OW] = WW
+       })
+     }
+ ... (260 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L504` → after: `L1436-L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1436-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1436-L1459) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L504)

```diff
-         if (ie.getContext) this._canvas = ie, this._ownCanvas = !1, this._texture = qe.createDynamicTexture(this._canvas.width, this._canvas.height, ye, Je);
+         const LW = this._getRGBABufferInternalSizedFormat(NW, OW, PW),
+           cW = this._getInternalFormat(OW),
+           wW = this._getWebGLTextureType(NW);
+         this._bindTextureDirectly(this._gl.TEXTURE_2D, WW, !0), this._unpackFlipY(void 0 === mW || !!mW), this._doNotHandleContextLost || (WW._bufferView = iW, WW.format = OW, WW.type = NW, WW.invertY = mW, WW._compression = EW), WW.width % 4 !== 0 && this._gl.pixelStorei(this._g … [truncated]
+       }, EW.ThinEngine.prototype.createRawTexture = function(WW, iW, OW, mW, EW, NW, LW) {
+         let cW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+           wW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
+           tW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
+         const ZW = new PW.e(this, 3);
+         ZW.baseWidth = iW, ZW.baseHeight = OW, ZW.width = iW, ZW.height = OW, ZW.format = mW, ZW.generateMipMaps = EW, ZW.samplingMode = LW, ZW.invertY = NW, ZW._compression = cW, ZW.type = wW, ZW._useSRGBBuffer = this._getUseSRGBBuffer(tW, !EW), this._doNotHandleContextLost || ( … [truncated]
+         const xW = this._getSamplingParameters(LW, EW);
+         return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, xW.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, xW.min), EW && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, nu … [truncated]
+       }, EW.ThinEngine.prototype.createRawCubeTexture = function(WW, iW, OW, mW, EW, NW, wW) {
+         let tW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
+         const ZW = this._gl,
+           xW = new PW.e(this, 8);
+ ... (8 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L506` → after: `L1461-L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1461-L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1461-L1960) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L506)

```diff
-           this._canvas = qe.createCanvas(1, 1), this._ownCanvas = !0;
+           const WW = this._getRGBABufferInternalSizedFormat(mW),
+             iW = 0;
+           this._bindTextureDirectly(ZW.TEXTURE_CUBE_MAP, xW, !0);
+           for (let OW = 0; OW < 6; OW++) tW ? ZW.compressedTexImage2D(ZW.TEXTURE_CUBE_MAP_POSITIVE_X + OW, iW, this.getCaps().s3tc[tW], xW.width, xW.height, 0, void 0) : ZW.texImage2D(ZW.TEXTURE_CUBE_MAP_POSITIVE_X + OW, iW, WW, xW.width, xW.height, 0, AW, lW, null);
+           this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
+         }
+         this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, xW, !0), WW && EW && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
+         const UW = this._getSamplingParameters(wW, EW);
+         return ZW.texParameteri(ZW.TEXTURE_CUBE_MAP, ZW.TEXTURE_MAG_FILTER, UW.mag), ZW.texParameteri(ZW.TEXTURE_CUBE_MAP, ZW.TEXTURE_MIN_FILTER, UW.min), ZW.texParameteri(ZW.TEXTURE_CUBE_MAP, ZW.TEXTURE_WRAP_S, ZW.CLAMP_TO_EDGE), ZW.texParameteri(ZW.TEXTURE_CUBE_MAP, ZW.TEXTURE_ … [truncated]
+       }, EW.ThinEngine.prototype.updateRawCubeTexture = function(iW, OW, mW, EW, NW) {
+         let PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+           LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         iW._bufferViewArray = OW, iW.format = mW, iW.type = EW, iW.invertY = NW, iW._compression = PW;
+         const wW = this._gl,
+           tW = this._getWebGLTextureType(EW);
+         let ZW = this._getInternalFormat(mW);
+ ... (484 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L508` → after: `L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1962) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L508)

```diff
-           ee.width || 0 === ee.width ? this._texture = qe.createDynamicTexture(ee.width, ee.height, ye, Je) : this._texture = qe.createDynamicTexture(ie, ie, ye, Je)
+           "function" === typeof WW?.dispose && WW.dispose()
```

#### 54. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L510-L511` → after: `L1964-L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1964-L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1964-L1989) · [Before (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L510-L511)

```diff
-         const fe = this.getSize();
-         this._canvas.width !== fe.width && (this._canvas.width = fe.width), this._canvas.height !== fe.height && (this._canvas.height = fe.height), this._context = this._canvas.getContext("2d")
+       }(WW);
+       return OW || function(WW) {
+         const iW = Math.max(1, function(WW) {
+             const iW = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(WW || ""));
+             return iW ? Number(iW[1]) : 16
+           }(WW)),
+           OW = .8 * iW,
+           mW = .2 * iW;
+         return {
+           ascent: OW,
+           height: OW + mW,
+           descent: mW
+         }
+       }(WW)
+     }
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L513-L514` → after: `L1991-L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1991-L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1991-L1998) · [Before (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L513-L514)

```diff
-       getClassName() {
-         return "DynamicTexture"
+     }
+     var UW = OW(41469),
+       kW = OW(41420),
+       sW = OW(41475),
+       MW = OW(41477);
+     class KW extends NW.ThinEngine {
+       static get NpmPackage() {
+         return xW.b.NpmPackage
```

#### 56. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L516-L517` → after: `L2000-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2000-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2000-L2001) · [Before (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L516-L517)

```diff
-       get canRescale() {
-         return !0
+       static get Version() {
+         return xW.b.Version
```

#### 57. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L519-L520` → after: `L2003-L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2003-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2003-L2004) · [Before (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L519-L520)

```diff
-       _recreate(ee) {
-         this._canvas.width = ee.width, this._canvas.height = ee.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(ee.width, ee.height, this._generateMipMaps, this.samplingMode)
+       static get Instances() {
+         return EW.d.Instances
```

#### 58. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L522-L524` → after: `L2006-L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2006-L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2006-L2007) · [Before (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L522-L524)

```diff
-       scale(ee) {
-         const ie = this.getSize();
-         ie.width *= ee, ie.height *= ee, this._recreate(ie)
+       static get LastCreatedEngine() {
+         return EW.d.LastCreatedEngine
```

#### 59. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L526-L528` → after: `L2009-L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2009-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2009-L2010) · [Before (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L526-L528)

```diff
-       scaleTo(ee, ie) {
-         const He = this.getSize();
-         He.width = ee, He.height = ie, this._recreate(He)
+       static get LastCreatedScene() {
+         return EW.d.LastCreatedScene
```

#### 60. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L530-L531` → after: `L2012-L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2012-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2012-L2013) · [Before (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L530-L531)

```diff
-       getContext() {
-         return this._context
+       static DefaultLoadingScreenFactory(WW) {
+         return xW.b.DefaultLoadingScreenFactory(WW)
```

#### 61. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L533-L535` → after: `L2015-L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2015-L2016) · [Before (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L533-L535)

```diff
-       clear(ee) {
-         const ie = this.getSize();
-         ee && (this._context.fillStyle = ee), this._context.clearRect(0, 0, ie.width, ie.height)
+       get _supportsHardwareTextureRescaling() {
+         return !!KW._RescalePostProcessFactory
```

#### 62. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L537-L540` → after: `L2018-L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2018-L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2018-L2131) · [Before (L537-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L537-L540)

```diff
-       update(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === ee || ee, ie, this._format || void 0, void 0, He)
+       _measureFps() {
+         this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
+       }
+       get performanceMonitor() {
+         return this._performanceMonitor
+       }
+       constructor(WW, iW, OW) {
+         let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         (0, sW.b)(), (0, MW.d)(), super(WW, iW, OW, mW), this._performanceMonitor = new LW, this._drawCalls = new UW.e, WW && (this._features.supportRenderPasses = !0)
+       }
+       _initGLContext() {
+         super._initGLContext(), this._rescalePostProcess = null
+       }
+       _sharedInit(WW) {
+         super._sharedInit(WW),
+           function(WW, iW, OW) {
+ ... (98 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L542-L547` → after: `L2133-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2133-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2133-L2191) · [Before (L542-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L542-L547)

```diff
-       drawText(ee, ie, He, ye, be, Me, Ke) {
-         let Ue = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
-         const Fe = this.getSize();
-         if (Me && (this._context.fillStyle = Me, this._context.fillRect(0, 0, Fe.width, Fe.height)), this._context.font = ye, null === ie || void 0 === ie) {
-           const He = this._context.measureText(ee);
-           ie = (Fe.width - He.width) / 2
+       AY() {
+         this._measureFps(), super.AY()
+       }
+       _deletePipelineContext(WW) {
+         const iW = WW;
+         iW && iW.program && iW.transformFeedback && (this.deleteTransformFeedback(iW.transformFeedback), iW.transformFeedback = null), super._deletePipelineContext(WW)
+       }
+       createShaderProgram(WW, iW, OW, mW, EW) {
+         let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
+         EW = EW || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
+         const PW = super.createShaderProgram(WW, iW, OW, mW, EW, NW);
+         return this.onAfterShaderCompilationObservable.notifyObservers(this), PW
+       }
+       _createShaderProgram(WW, iW, OW, mW) {
+         let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+         const NW = mW.createProgram();
+ ... (43 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L549-L551` → after: `L2193-L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2193-L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2193-L2221) · [Before (L549-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L549-L551)

```diff
-         if (null === He || void 0 === He) {
-           const ee = parseInt(ye.replace(/\D/g, ""));
-           He = Fe.height / 2 + ee / 3.65
+       }
+       wrapWebGLTexture(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
+           EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         const PW = new ZW.c(WW, this._gl),
+           LW = new mW.e(this, 15, !0);
+         return LW._hardwareTexture = PW, LW.baseWidth = EW, LW.baseHeight = NW, LW.width = EW, LW.height = NW, LW.isReady = !0, LW.useMipMaps = iW, this.updateTextureSamplingMode(OW, LW), LW
+       }
+       updateWrappedWebGLTexture(WW, iW) {
+         if (15 !== WW.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
+         for (const mW of this._renderTargetWrapperCache)
+           if (mW.textures?.includes(WW)) {
+             if (mW.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
+             if (mW._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
+ ... (13 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L553` → after: `L2223-L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2223-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2223-L2268) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L553)

```diff
-         this._context.fillStyle = be || "", this._context.fillText(ee, ie, He), Ue && this.update(Ke)
+       }
+       _uploadImageToTexture(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         const EW = this._gl,
+           NW = this._getWebGLTextureType(WW.type),
+           PW = this._getInternalFormat(WW.format),
+           LW = this._getRGBABufferInternalSizedFormat(WW.type, PW),
+           cW = WW.isCube ? EW.TEXTURE_CUBE_MAP : EW.TEXTURE_2D;
+         this._bindTextureDirectly(cW, WW, !0), this._unpackFlipY(WW.invertY);
+         let wW = EW.TEXTURE_2D;
+         WW.isCube && (wW = EW.TEXTURE_CUBE_MAP_POSITIVE_X + OW), EW.texImage2D(wW, mW, LW, PW, NW, iW), this._bindTextureDirectly(cW, null, !0)
+       }
+       updateTextureComparisonFunction(WW, iW) {
+         if (1 === this.bb) return void tW.b.Error("WebGL 1 does not support texture comparison.");
+         const OW = this._gl;
+ ... (30 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L556` → after: `L2271-L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2271-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2271-L2276) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L556)

```diff
-         super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
+         this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
+           function(WW, iW) {
+             1 === EW.d.Instances.length && xW.b.audioEngine && (xW.b.audioEngine.dispose(), xW.b.audioEngine = null);
+             const OW = WW.getHostWindow();
+             OW && "function" === typeof OW.removeEventListener && (OW.removeEventListener("blur", WW._onBlur), OW.removeEventListener("focus", WW._onFocus)), iW && (iW.removeEventListener("focus", WW._onCanvasFocus), iW.removeEventListener("blur", WW._onCanvasBlur), iW.removeEven … [truncated]
+           }(this, this._renderingCanvas), super.dispose()
```

#### 67. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L558-L563` → after: `L2278-L2288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2278-L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2278-L2288) · [Before (L558-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L558-L563)

```diff
-       clone() {
-         const ee = this.Xx();
-         if (!ee) return this;
-         const ie = this.getSize(),
-           He = new Je(this.name, ie, ee, this._generateMipMaps);
-         return He.hasAlpha = this.hasAlpha, He.level = this.level, He.wrapU = this.wrapU, He.wrapV = this.wrapV, He
+     }
+     KW.ALPHA_DISABLE = 0, KW.ALPHA_ADD = 1, KW.ALPHA_COMBINE = 2, KW.ALPHA_SUBTRACT = 3, KW.ALPHA_MULTIPLY = 4, KW.ALPHA_MAXIMIZED = 5, KW.ALPHA_ONEONE = 6, KW.ALPHA_PREMULTIPLIED = 7, KW.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, KW.ALPHA_INTERPOLATE = 9, KW.ALPHA_SCREENMODE = 10, KW.D … [truncated]
+   },
+   41500: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => EW
+     });
+     var mW = OW(41467);
+     class EW {
+       get depthStencilTexture() {
+         return this._depthStencilTexture
```

#### 68. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L565-L569` → after: `L2290-L2306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2290-L2306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2290-L2306) · [Before (L565-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L565-L569)

```diff
-       serialize() {
-         const ee = this.Xx();
-         ee && !ee.isReady() && ye.e.Warn("The scene must be ready before serializing the dynamic texture");
-         const ie = super.serialize();
-         return Je._IsCanvasElement(this._canvas) && (ie.base64String = this._canvas.toDataURL()), ie.invertY = this._invertY, ie.samplingMode = this.samplingMode, ie
+       setDepthStencilTexture(WW) {
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = WW, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, W … [truncated]
+       }
+       get depthStencilTextureWithStencil() {
+         return this._depthStencilTextureWithStencil
+       }
+       get isCube() {
+         return this._isCube
+       }
+       get isMulti() {
+         return this._isMulti
+       }
+       get is2DArray() {
+         return this.layers > 0
+       }
+       get is3D() {
+ ... (1 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L571-L572` → after: `L2308-L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2308-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2308-L2473) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L571-L572)

```diff
-       static _IsCanvasElement(ee) {
-         return void 0 !== ee.toDataURL
+       get size() {
+         return this.width
+       }
+       get width() {
+         return this._size.width ?? this._size
+       }
+       get height() {
+         return this._size.height ?? this._size
+       }
+       get layers() {
+         return this._size.layers || 0
+       }
+       get depth() {
+         return this._size.depth || 0
+       }
+       get texture() {
+ ... (150 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L575` → after: `L2476-L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2476-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2476-L2493) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L575)

```diff
-         this.update()
+         const WW = this._cloneRenderTargetWrapper();
+         if (WW) {
+           if (this._depthStencilTexture) {
+             const iW = this._depthStencilTexture.samplingMode,
+               OW = this._depthStencilTexture.format,
+               mW = 2 === iW || 3 === iW || 11 === iW;
+             WW.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, mW, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, OW, this._depthStencilTextureLabel)
+           }
+           this.samples > 1 && WW.setSamples(this.samples), WW._swapRenderTargetWrapper(this), WW.dispose()
+         }
+       }
+       releaseTextures() {
+         if (this._textures)
+           for (let WW = 0; WW < this._textures.length; ++WW) this._textures[WW].dispose();
+         this._textures = null
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L579` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2497) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L579)

```diff
-   42223: (ee, ie, He) => {
+   41936: (WW, iW, OW) => {
```

#### 72. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L581` → after: `L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2499) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L581)

```diff
-       c: () => be
+       d: () => mW
```

#### 73. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L583-L586` → after: `L2501-L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2501-L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2501-L2503) · [Before (L583-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L583-L586)

```diff
-     var ye = He(41593);
-     class be extends ye.e {
-       get depth() {
-         return this._depth
+     class mW {
+       static get ForceFullSceneLoadingForIncremental() {
+         return mW._ForceFullSceneLoadingForIncremental
```

#### 74. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L588-L595` → after: `L2505-L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2505-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2505-L2506) · [Before (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L588-L595)

```diff
-       constructor(ee, ie, He, be, Me, Ke) {
-         let Ue = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           Fe = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-           Je = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : ye.e.TRILINEAR_SAMPLINGMODE,
-           oe = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           Re = arguments.length > 10 ? arguments[10] : void 0,
-           ke = arguments.length > 11 ? arguments[11] : void 0;
-         super(null, Ke, !Ue, Fe), this.format = Me, this._texture = Ke.Nf().createRawTexture2DArray(ee, ie, He, be, Me, Ue, Fe, Je, null, oe, Re ?? 0, ke), this._depth = be, this.is2DArray = !0
+       static set ForceFullSceneLoadingForIncremental(WW) {
+         mW._ForceFullSceneLoadingForIncremental = WW
```

#### 75. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L597-L598` → after: `L2508-L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2508-L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2508-L2509) · [Before (L597-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L597-L598)

```diff
-       update(ee) {
-         this.updateMipLevel(ee, 0)
+       static get ShowLoadingScreen() {
+         return mW._ShowLoadingScreen
```

#### 76. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L600-L601` → after: `L2511-L2512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2511-L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2511-L2512) · [Before (L600-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L600-L601)

```diff
-       updateMipLevel(ee, ie) {
-         this._texture && this._getEngine().updateRawTexture2DArray(this._texture, ee, this._texture.format, this._texture.invertY, null, this._texture.type, ie)
+       static set ShowLoadingScreen(WW) {
+         mW._ShowLoadingScreen = WW
```

#### 77. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L603-L604` → after: `L2514-L2524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2514-L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2514-L2524) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L603-L604)

```diff
-       static CreateRGBATexture(ee, ie, He, ye, Me) {
-         return new be(ee, ie, He, ye, 5, Me, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== … [truncated]
+       static get loggingLevel() {
+         return mW._LoggingLevel
+       }
+       static set loggingLevel(WW) {
+         mW._LoggingLevel = WW
+       }
+       static get CleanBoneMatrixWeights() {
+         return mW._CleanBoneMatrixWeights
+       }
+       static set CleanBoneMatrixWeights(WW) {
+         mW._CleanBoneMatrixWeights = WW
```

#### 78. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L608` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2529) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L608)

```diff
-   42219: (ee, ie, He) => {
+   41595: (WW, iW, OW) => {
```

#### 79. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L610` → after: `L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2531) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L610)

```diff
-       e: () => ye.b
+       e: () => PW
```

#### 80. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L612-L613` → after: `L2533-L2546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2533-L2546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2533-L2546) · [Before (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L612-L613)

```diff
-     var ye = He(41490);
-     (0, ye.d)()
+     var mW = OW(39911);
+     const EW = new Map;
+ 
+     function NW(WW, iW) {
+       (function(WW) {
+         return EW.delete(WW)
+       })(WW) && mW.b.Warn(`Extension with the name '${WW}' already exists`), EW.set(WW, iW)
+     }
+ 
+     function PW(WW, iW) {
+       "image/ktx" !== iW && "image/ktx2" !== iW || (WW = ".ktx"), EW.has(WW) || (WW.endsWith(".ies") && NW(".ies", (async () => await OW.e(627).then((() => OW(53955))).then((WW => new WW._IESTextureLoader)))), WW.endsWith(".dds") && NW(".dds", (async () => await OW.e(625).then((( … [truncated]
+       const mW = EW.get(WW);
+       return mW ? Promise.resolve(mW(iW)) : null
+     }
```

#### 81. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L615` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2548) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L615)

```diff
-   41195: (ee, ie, He) => {
+   41957: (WW, iW, OW) => {
```

#### 82. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L617` → after: `L2550-L2551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2550-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2550-L2551) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L617)

```diff
-       b: () => ye.f
+       e: () => PW,
+       f: () => wW
```

#### 83. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L619-L620` → after: `L2553-L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L2553-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L2553-L7749) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L619-L620)

```diff
-     var ye = He(41199);
-     (0, ye.d)()
+     var mW = OW(41805),
+       EW = OW(41544),
+       NW = OW(38299);
+     class PW extends mW.d {
+       get MWW() {
+         return this._subMaterials
+       }
+       set MWW(WW) {
+         this._subMaterials = WW, this._hookArray(WW)
+       }
+       getChildren() {
+         return this.MWW
+       }
+       constructor(WW, iW) {
+         super(WW, iW, !0), this._waitingSubMaterialsUniqueIds = [], this.bD().addMultiMaterial(this), this.MWW = [], this._storeEffectOnSubMeshes = !0
+       }
+ ... (5181 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/287.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/287.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1)

#### 1. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4` → after: `L4-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L4-L232) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L4)

```diff
-   41306: (ee, ie, He) => {
+   41660: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => LW,
+       c: () => bW,
+       g: () => wW,
+       k: () => cW
+     });
+     var mW = OW(41453),
+       EW = OW(39911),
+       NW = OW(41582),
+       PW = OW(41484);
+     class LW {
+       get Ay() {
+         return this._isDisposed
+       }
+       constructor(WW, iW, OW) {
+ ... (213 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8-L37` → after: `L236-L5737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L236-L5737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L236-L5737) · [Before (L8-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L8-L37)

```diff
-     var ye = He(41113),
-       be = He(41121),
-       Me = He(37917),
-       Ke = He(41311),
-       Ue = He(41350),
-       Fe = He(41289),
-       Je = He(41203);
-     let oe = (() => {
-       var ee;
-       let ie, He, Ke, Ue, oe, Re, ke, qe, fe, Te, pe, Xe = [],
-         ze = [],
-         Be = [],
-         Ee = [],
-         ge = [],
-         Oe = [],
-         de = [],
- ... (14 more removed lines; see GitHub link above)
+     class mW {
+       get underlyingResource() {
+         return null
+       }
+       constructor() {
+         this.references = 0, this.aZ = 0, this.is32Bits = !1, this.uniqueId = mW._Counter++
+       }
+     }
+     mW._Counter = 0
+   },
+   41653: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => NW
+     });
+     var mW = OW(38241),
+       EW = OW(41660);
+ ... (5486 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L39-L51` → after: `L5739-L6189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5739-L6189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L5739-L6189) · [Before (L39-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L39-L51)

```diff
-       return ee = class {
-         constructor() {
-           this.keysUp = (0, ye.l)(this, Xe, [38]), this.keysUpward = ((0, ye.l)(this, ze), (0, ye.l)(this, Be, [33])), this.keysDown = ((0, ye.l)(this, Ee), (0, ye.l)(this, ge, [40])), this.keysDownward = ((0, ye.l)(this, Oe), (0, ye.l)(this, de, [34])), this.keysLeft = ((0, ye.l … [truncated]
-         }
-         attachControl(ee) {
-           ee = Je.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Xx(), this._engine = this._scene.Nf(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ie => {
-             const He = ie.event;
-             if (!He.metaKey)
-               if (ie.type === Fe.e.KEYDOWN) {
-                 if (-1 !== this.keysUp.indexOf(He.keyCode) || -1 !== this.keysDown.indexOf(He.keyCode) || -1 !== this.keysLeft.indexOf(He.keyCode) || -1 !== this.keysRight.indexOf(He.keyCode) || -1 !== this.keysUpward.indexOf(He.keyCode) || -1 !== this.keysDownward.indexOf(He.key … [truncated]
-                   -1 === this._keys.indexOf(He.keyCode) && this._keys.push(He.keyCode), ee || He.preventDefault()
+       let ZW = OW;
+       for (; ZW;) tW.push(ZW), ZW = Object.getPrototypeOf(ZW);
+       for (const EW of tW)
+         if (NW(EW, mW)) {
+           const WW = EW[mW];
+           for (const iW in WW) wW[iW] = WW[iW]
+         } return EW.set(OW, wW), wW
+     }
+   },
+   41519: (WW, iW, OW) => {
+     OW.d(iW, {
+       C: () => bW,
+       F: () => LW,
+       H: () => tW,
+       K: () => ZW,
+       M: () => PW,
+ ... (435 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L53-L55` → after: `L6191-L6194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6191-L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L6191-L6194) · [Before (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L53-L55)

```diff
-               } else if (-1 !== this.keysUp.indexOf(He.keyCode) || -1 !== this.keysDown.indexOf(He.keyCode) || -1 !== this.keysLeft.indexOf(He.keyCode) || -1 !== this.keysRight.indexOf(He.keyCode) || -1 !== this.keysUpward.indexOf(He.keyCode) || -1 !== this.keysDownward.indexOf(H … [truncated]
-               const ie = this._keys.indexOf(He.keyCode);
-               ie >= 0 && this._keys.splice(ie, 1), ee || He.preventDefault()
+               }
+             if (OW || "true" === WW) {
+               OW = !0;
+               break
```

#### 5. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L57` → after: `L6196-L6418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6196-L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L6196-L6418) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L57)

```diff
-           })))
+             OW = "true" !== WW && "false" !== WW ? "!" === WW[0] ? !iW(WW.substring(1)) : iW(WW) : "true" === WW
+           } return OW ? "true" : "false"
+       }
+       static _SimplifyNegation(WW) {
+         return "!true" === (WW = (WW = WW.replace(/^[\s!]+/, (WW => (WW = WW.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? WW = "false" : "!false" === WW && (WW = "true"), WW
+       }
+     }
+     class EW {
+       static EnableFor(WW) {
+         WW._tags = WW._tags || {}, WW.hasTags = () => EW.HasTags(WW), WW.addTags = iW => EW.AddTagsTo(WW, iW), WW.removeTags = iW => EW.RemoveTagsFrom(WW, iW), WW.matchesTagsQuery = iW => EW.MatchesQuery(WW, iW)
+       }
+       static DisableFor(WW) {
+         delete WW._tags, delete WW.hasTags, delete WW.addTags, delete WW.removeTags, delete WW.matchesTagsQuery
+       }
+       static HasTags(WW) {
+         if (!WW._tags) return !1;
+ ... (207 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L59-L71` → after: `L6420-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6420-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L6420-L6430) · [Before (L59-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L59-L71)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
-         }
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const ee = this.camera,
-               ie = ee.movement.input,
-               He = ie.getEntry("keyboard", "translate"),
-               ye = ie.getEntry("keyboard", "rotate"),
-               be = ye?.sensitivity ?? 1,
-               Ke = ee._localDirection.wie(0, 0, 0);
-             for (let Me = 0; Me < this._keys.length; Me++) {
-               const ie = this._keys[Me]; - 1 !== this.keysLeft.indexOf(ie) ? Ke.x -= 1 : -1 !== this.keysUp.indexOf(ie) ? Ke.z += 1 : -1 !== this.keysRight.indexOf(ie) ? Ke.x += 1 : -1 !== this.keysDown.indexOf(ie) ? Ke.z -= 1 : -1 !== this.keysUpward.indexOf(ie) ? Ke.y += 1 : -1 … [truncated]
+       }
+       static _StableSort(WW, iW, OW) {
+         for (let mW = 0; mW < iW; mW += 16) {
+           const EW = Math.min(mW + 16, iW);
+           for (let iW = mW + 1; iW < EW; iW++) {
+             const EW = WW[iW];
+             let NW = mW,
+               PW = iW;
+             for (; NW < PW;) {
+               const iW = NW + PW >>> 1;
+               OW(EW, WW[iW]) < 0 ? PW = iW : NW = iW + 1
```

#### 7. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L73-L75` → after: `L6432-L6454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6432-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L6432-L6454) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L73-L75)

```diff
-             if (He && (0 !== Ke.x || 0 !== Ke.y || 0 !== Ke.z)) {
-               const ie = ee._computeLocalCameraSpeed() * (He.sensitivity ?? 1);
-               Ke.normalize().scaleInPlace(ie), ee.Xx().useRightHandedSystem && (Ke.z *= -1), ee.getViewMatrix().invertToRef(ee._cameraTransformMatrix), Me.p.TransformNormalToRef(Ke, ee._cameraTransformMatrix, ee._transformedDirection), ee.cameraDirection.addInPlace(ee._transforme … [truncated]
+             for (let OW = iW; OW > NW; OW--) WW[OW] = WW[OW - 1];
+             WW[NW] = EW
+           }
+         }
+         if (!(iW <= 16)) {
+           cW(NW, iW);
+           try {
+             let mW = WW,
+               EW = NW;
+             for (let WW = 16; WW < iW; WW *= 2) {
+               for (let PW = 0; PW < iW; PW += 2 * WW) {
+                 const NW = Math.min(PW + WW, iW),
+                   LW = Math.min(PW + 2 * WW, iW);
+                 let cW = PW,
+                   wW = NW,
+                   tW = PW;
+ ... (7 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L79-L80` → after: `L6462-L6503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6462-L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L6462-L6503) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L79-L80)

```diff
-         getClassName() {
-           return "FreeCameraKeyboardMoveInput"
+       }
+       static defaultTransparentSortCompare(WW, iW) {
+         return WW._alphaIndex > iW._alphaIndex ? 1 : WW._alphaIndex < iW._alphaIndex ? -1 : wW.backToFrontSortCompare(WW, iW)
+       }
+       static backToFrontSortCompare(WW, iW) {
+         return WW._distanceToCamera < iW._distanceToCamera ? 1 : WW._distanceToCamera > iW._distanceToCamera ? -1 : 0
+       }
+       static frontToBackSortCompare(WW, iW) {
+         return WW._distanceToCamera < iW._distanceToCamera ? -1 : WW._distanceToCamera > iW._distanceToCamera ? 1 : 0
+       }
+       static PainterSortCompare(WW, iW) {
+         const OW = WW.getMesh(),
+           mW = iW.getMesh();
+         return OW.material && mW.material ? OW.material.uniqueId - mW.material.uniqueId : OW.uniqueId - mW.uniqueId
+       }
+       prepare() {
+ ... (26 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L82-L83` → after: `L6505-L6513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6505-L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L6505-L6513) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L82-L83)

```diff
-         _onLostFocus() {
-           this._keys.length = 0
+         this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
+       }
+       _renderSprites() {
+         if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
+         const WW = this._scene.activeCamera;
+         this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
+         for (let iW = 0; iW < this._spriteManagers.length; iW++) {
+           const OW = this._spriteManagers.data[iW];
+           0 !== (WW && WW.layerMask & OW.layerMask) && OW.render()
```

#### 10. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L85-L86` → after: `L6515-L6553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6515-L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L6515-L6553) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L85-L86)

```diff
-         getSimpleName() {
-           return "keyboard"
+         this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
+       }
+     }
+     wW._ZeroVector = EW.q.Zero()
+   },
+   41675: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => NW
+     });
+     var mW = OW(41680);
+     class EW {}
+     class NW {
+       get disableDepthPrePass() {
+         return this._disableDepthPrePass
+       }
+       set disableDepthPrePass(WW) {
+ ... (23 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L88-L90` → after: `L6555-L6599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6555-L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L6555-L6599) · [Before (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L88-L90)

```diff
-         _getLocalRotation() {
-           const ee = this.camera._calculateHandednessMultiplier();
-           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * ee
+       }
+       get renderingGroups() {
+         return this._renderingGroups
+       }
+       getRenderingGroup(WW) {
+         const iW = WW || 0;
+         return this._prepareRenderingGroup(iW), this._renderingGroups[iW]
+       }
+       _clearDepthStencilBuffer() {
+         let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         this._depthStencilBufferAlreadyCleaned || (this._scene.VA().clear(null, !1, WW, iW), this._depthStencilBufferAlreadyCleaned = !0)
+       }
+       render(WW, iW, OW, mW) {
+         let EW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           PW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+ ... (29 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L92-L241` → after: `L6601-L7035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6601-L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L6601-L7035) · [Before (L92-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L92-L241)

```diff
-       }, (() => {
-         const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ie = [(0, be.R)()], He = [(0, be.R)()], Ke = [(0, be.R)()], Ue = [(0, be.R)()], oe = [(0, be.R)()], Re = [(0, be.R)()], ke = [(0, be.R)()], qe = [(0, be.R)()], fe = [(0, be.R)()], Te = [(0, be.R)()], pe = [(0, be.R)()], (0, ye.i)(null, null, ie, {
-           kind: "field",
-           name: "keysUp",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "keysUp" in ee,
-             get: ee => ee.keysUp,
-             set: (ee, ie) => {
-               ee.keysUp = ie
-             }
-           },
-           metadata: Me
-         }, Xe, ze), (0, ye.i)(null, null, He, {
- ... (134 more removed lines; see GitHub link above)
+       }
+       reset() {
+         if (!this.maintainStateBetweenFrames)
+           for (let WW = NW.MIN_RENDERINGGROUPS; WW < NW.MAX_RENDERINGGROUPS; WW++) {
+             const iW = this._renderingGroups[WW];
+             iW && iW.prepare()
+           }
+       }
+       resetSprites() {
+         if (!this.maintainStateBetweenFrames)
+           for (let WW = NW.MIN_RENDERINGGROUPS; WW < NW.MAX_RENDERINGGROUPS; WW++) {
+             const iW = this._renderingGroups[WW];
+             iW && iW.prepareSprites()
+           }
+       }
+       dispose() {
+ ... (419 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L243-L261` → after: `L7037-L7063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7037-L7063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7037-L7063) · [Before (L243-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L243-L261)

```diff
-       })(), ee
-     })();
-     Ue.c.FreeCameraKeyboardMoveInput = oe;
-     var Re = He(37931),
-       ke = He(41286);
-     let qe = (() => {
-       var ee;
-       let ie, He, Me = [],
-         Ke = [],
-         Ue = [],
-         Fe = [];
-       return ee = class {
-         _applyPointerRotation(ee, ie) {
-           this._pointerConditions.button = this._currentActiveButton;
-           const He = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
-           if (!He || "rotate" !== He.interaction) return;
- ... (3 more removed lines; see GitHub link above)
+       }
+       pollInput(WW, iW, OW) {
+         const EW = this._inputs[WW][iW];
+         if (!EW) throw `Unable to find device ${yW[WW]}`;
+         WW >= yW.DualShock && WW <= yW.DualSense && this._updateDevice(WW, iW, OW);
+         const NW = EW[OW];
+         if (void 0 === NW) throw `Unable to find input ${OW} for device ${yW[WW]} in slot ${iW}`;
+         return OW === TW.Move && mW.f.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), NW
+       }
+       isDeviceAvailable(WW) {
+         return void 0 !== this._inputs[WW]
+       }
+       dispose() {
+         this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
+       }
+       _enableEvents() {
+ ... (11 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L263-L289` → after: `L7065-L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7065-L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7065-L7165) · [Before (L263-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L263-L289)

```diff
-         constructor() {
-           let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-           this.touchEnabled = ee, this.buttons = (0, ye.l)(this, Me, [0, 1, 2]), this.angularSensibility = ((0, ye.l)(this, Ke), (0, ye.l)(this, Ue, 2e3)), this._pointerInput = (0, ye.l)(this, Fe), this._previousPosition = null, this.onPointerMovedObservable = new Re.d, this._all … [truncated]
-         }
-         attachControl(ee) {
-           ee = Je.h.BackCompatCameraNoPreventDefault(arguments);
-           const ie = this.camera.Nf(),
-             He = ie.getInputElement();
-           this._pointerInput || (this._pointerInput = ye => {
-             const be = ye.event,
-               Me = "touch" === be.pointerType;
-             if (!this.touchEnabled && Me) return;
-             if (ye.type !== ke.c.POINTERMOVE && -1 === this.buttons.indexOf(be.button)) return;
-             const Ke = be.target;
-             if (ye.type === ke.c.POINTERDOWN) {
-               if (Me && -1 !== this._activePointerId || !Me && -1 !== this._currentActiveButton) return;
- ... (11 more removed lines; see GitHub link above)
+       }
+       _disableEvents() {
+         this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._el … [truncated]
+       }
+       _checkForConnectedDevices() {
+         if (navigator.getGamepads) {
+           const WW = navigator.getGamepads();
+           for (const iW of WW) iW && this._addGamePad(iW)
+         }
+         "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(yW.Mouse, 0, 0, 0)
+       }
+       _addGamePad(WW) {
+         const iW = this._getGamepadDeviceType(WW.id),
+           OW = WW.index;
+         this._gamepads = this._gamepads || new Array(WW.index + 1), this._registerDevice(iW, OW, WW.buttons.length + WW.axes.length), this._gamepads[OW] = iW
+       }
+ ... (85 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L291-L304` → after: `L7167-L7216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7167-L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7167-L7216) · [Before (L291-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L291-L304)

```diff
-               this._currentActiveButton = -1, this._previousPosition = null, ee || be.preventDefault(), this._activePointerId = -1
-             } else if (ye.type === ke.c.POINTERMOVE && (this._activePointerId === be.pointerId || !Me))
-               if (ie.isPointerLock && this._onMouseMove) this._onMouseMove(ye.event);
-               else if (this._previousPosition) {
-               const ie = this.camera._calculateHandednessMultiplier(),
-                 He = (be.clientX - this._previousPosition.x) * ie,
-                 ye = (be.clientY - this._previousPosition.y) * ie;
-               this._allowCameraRotation && this._applyPointerRotation(He, ye), this.onPointerMovedObservable.notifyObservers({
-                 offsetX: He,
-                 offsetY: ye
-               }), this._previousPosition = {
-                 x: be.clientX,
-                 y: be.clientY
-               }, ee || be.preventDefault()
+             } else if (WW.pointerId && !document.pointerLockElement) try {
+               this._elementToAttachTo.setPointerCapture(WW.pointerId)
+             } catch (NW) {}
+             EW[TW.Horizontal] = WW.clientX, EW[TW.Vertical] = WW.clientY, EW[WW.button + 2] = 1;
+             const LW = WW;
+             LW.inputIndex = WW.button + 2, this._onInputChanged(iW, OW, LW), mW === WW.clientX && PW === WW.clientY || (LW.inputIndex = TW.Move, this._onInputChanged(iW, OW, LW))
+           }
+         }, this._pointerUpEvent = WW => {
+           const iW = this._getPointerType(WW),
+             OW = iW === yW.Mouse ? 0 : this._activeTouchIds.indexOf(WW.pointerId);
+           if (iW === yW.Touch) {
+             if (-1 === OW) return;
+             this._activeTouchIds[OW] = -1
+           }
+           const mW = this._inputs[iW]?.[OW];
+           let EW = WW.button,
+ ... (34 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L306-L319` → after: `L7218-L7240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7218-L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7218-L7240) · [Before (L306-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L306-L319)

```diff
-           }), this._onMouseMove = He => {
-             if (!ie.isPointerLock) return;
-             const ye = this.camera._calculateHandednessMultiplier();
-             this._applyPointerRotation(He.movementX * ye, He.movementY * ye), this._previousPosition = null, ee || He.preventDefault()
-           }, this._observer = this.camera.Xx()._inputManager._addCameraPointerObserver(this._pointerInput, ke.c.POINTERDOWN | ke.c.POINTERUP | ke.c.POINTERMOVE), He && (this._contextMenuBind = ee => this.onContextMenu(ee), He.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
-         }
-         onContextMenu(ee) {
-           ee.preventDefault()
-         }
-         detachControl() {
-           if (this._observer) {
-             if (this.camera.Xx()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
-               const ee = this.camera.Nf().getInputElement();
-               ee && ee.removeEventListener("contextmenu", this._contextMenuBind)
+           });
+           this._elementToAttachTo.addEventListener("test", iW, OW), this._elementToAttachTo.removeEventListener("test", iW, OW)
+         } catch (OW) {}
+         this._pointerBlurEvent = () => {
+           if (this.isDeviceAvailable(yW.Mouse)) {
+             const WW = this._inputs[yW.Mouse][0];
+             this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
+             for (let iW = TW.LeftClick; iW <= TW.BrowserForward; iW++)
+               if (1 === WW[iW]) {
+                 WW[iW] = 0;
+                 const OW = eW.CreateDeviceEvent(yW.Mouse, 0, iW, 0, this, this._elementToAttachTo);
+                 this._onInputChanged(yW.Mouse, 0, OW)
+               }
+           }
+           if (this.isDeviceAvailable(yW.Touch)) {
+             const WW = this._inputs[yW.Touch];
+ ... (7 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L323-L329` → after: `L7243-L7278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7243-L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7243-L7278) · [Before (L323-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L323-L329)

```diff
-           this._activePointerId = -1, this._currentActiveButton = -1
-         }
-         getClassName() {
-           return "FreeCameraMouseInput"
-         }
-         getSimpleName() {
-           return "mouse"
+         }, this._pointerWheelEvent = WW => {
+           const iW = yW.Mouse;
+           this._inputs[iW] || (this._inputs[iW] = []), this._inputs[iW][0] || (this._pointerActive = !0, this._registerDevice(iW, 0, gW));
+           const OW = this._inputs[iW][0];
+           if (OW) {
+             OW[TW.MouseWheelX] = WW.deltaX || 0, OW[TW.MouseWheelY] = WW.deltaY || WW.wheelDelta || 0, OW[TW.MouseWheelZ] = WW.deltaZ || 0;
+             const mW = WW;
+             void 0 === WW.pointerId && (WW.pointerId = this._mouseId), 0 !== OW[TW.MouseWheelX] && (mW.inputIndex = TW.MouseWheelX, this._onInputChanged(iW, 0, mW)), 0 !== OW[TW.MouseWheelY] && (mW.inputIndex = TW.MouseWheelY, this._onInputChanged(iW, 0, mW)), 0 !== OW[TW.MouseWh … [truncated]
+           }
+         }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = WW => {
+           WW.buttons > 1 && this._pointerCancelEvent(WW)
+         }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._p … [truncated]
+           passive: !1
+         }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
+           if (this.isDeviceAvailable(yW.Mouse)) {
+             const WW = this._inputs[yW.Mouse][0];
+ ... (20 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L331-L342` → after: `L7280-L7305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7280-L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7280-L7305) · [Before (L331-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L331-L342)

```diff
-       }, (() => {
-         const Je = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ie = [(0, be.R)()], He = [(0, be.R)()], (0, ye.i)(null, null, ie, {
-           kind: "field",
-           name: "buttons",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "buttons" in ee,
-             get: ee => ee.buttons,
-             set: (ee, ie) => {
-               ee.buttons = ie
+       }
+       _getGamepadDeviceType(WW) {
+         return -1 !== WW.indexOf("054c") ? -1 !== WW.indexOf("0ce6") ? yW.DualSense : yW.DualShock : -1 !== WW.indexOf("Xbox One") || -1 !== WW.search("Xbox 360") || -1 !== WW.search("xinput") || -1 !== WW.indexOf("045e") && -1 === WW.indexOf("Surface Dock") ? yW.Xbox : -1 !== WW … [truncated]
+       }
+       _getPointerType(WW) {
+         let iW = yW.Mouse;
+         return ("touch" === WW.pointerType || "pen" === WW.pointerType || WW.touches) && (iW = yW.Touch), iW
+       }
+     }
+     class VW {
+       constructor(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.deviceType = iW, this.deviceSlot = OW, this.onInputChangedObservable = new PW.e, this._deviceInputSystem = WW
+       }
+       getInput(WW) {
+         return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, WW)
+ ... (10 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L344-L355` → after: `L7307-L7319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7307-L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7307-L7319) · [Before (L344-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L344-L355)

```diff
-           },
-           metadata: Je
-         }, Me, Ke), (0, ye.i)(null, null, He, {
-           kind: "field",
-           name: "angularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "angularSensibility" in ee,
-             get: ee => ee.angularSensibility,
-             set: (ee, ie) => {
-               ee.angularSensibility = ie
+           }
+           this._registeredManagers.push(WW)
+         }, this.unregisterManager = WW => {
+           const iW = this._registeredManagers.indexOf(WW);
+           iW > -1 && this._registeredManagers.splice(iW, 1)
+         };
+         const iW = Object.keys(yW).length / 2;
+         this._devices = new Array(iW);
+         const OW = (WW, iW) => {
+             this._devices[WW] || (this._devices[WW] = new Array), this._devices[WW][iW] || (this._devices[WW][iW] = iW);
+             for (const OW of this._registeredManagers) {
+               const mW = new VW(this._deviceInputSystem, WW, iW);
+               OW._addDevice(mW)
```

#### 20. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L358-L397` → after: `L7322-L7340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7322-L7340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7322-L7340) · [Before (L358-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L358-L397)

```diff
-           metadata: Je
-         }, Ue, Fe), Je && Object.defineProperty(ee, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Je
-         })
-       })(), ee
-     })();
-     Ue.c.FreeCameraMouseInput = qe;
-     var fe = He(41292);
-     let Te = (() => {
-       var ee;
-       let ie, He, Me, Ke = [],
-         Ue = [],
-         Fe = [],
- ... (24 more removed lines; see GitHub link above)
+           mW = (WW, iW) => {
+             this._devices[WW]?.[iW] && delete this._devices[WW][iW];
+             for (const OW of this._registeredManagers) OW._removeDevice(WW, iW)
+           },
+           EW = (WW, iW, OW) => {
+             if (OW)
+               for (const mW of this._registeredManagers) mW._onInputChanged(WW, iW, OW)
+           };
+         "undefined" !== typeof _native ? this._deviceInputSystem = new vW(OW, mW, EW) : this._deviceInputSystem = new DW(WW, OW, mW, EW)
+       }
+       dispose() {
+         this._deviceInputSystem.dispose()
+       }
+     }
+     class fW {
+       getDeviceSource(WW, iW) {
+ ... (3 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L399-L400` → after: `L7342-L7390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7342-L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7342-L7390) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L399-L400)

```diff
-         getClassName() {
-           return "BaseCameraMouseWheelInput"
+         return this._devices[WW] && void 0 !== this._devices[WW][iW] ? this._devices[WW][iW] : null
+       }
+       getDeviceSources(WW) {
+         return this._devices[WW] ? this._devices[WW].filter((WW => !!WW)) : []
+       }
+       constructor(WW) {
+         const iW = Object.keys(yW).length / 2;
+         this._devices = new Array(iW), this._firstDevice = new Array(iW), this._engine = WW, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new pW(WW)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new PW.e((WW => {
+           for (const iW of this._devices)
+             if (iW)
+               for (const OW of iW) OW && this.onDeviceConnectedObservable.notifyObserver(WW, OW)
+         })), this.onDeviceDisconnectedObservable = new PW.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = WW.jD.add((() => {
+           this.dispose()
+         }))
+       }
+       dispose() {
+ ... (33 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L402-L403` → after: `L7392-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7392-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7392-L7461) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L402-L403)

```diff
-         getSimpleName() {
-           return "mousewheel"
+       }
+     }
+     var CW = OW(41706);
+     class XW {
+       constructor() {
+         this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
+       }
+       get singleClick() {
+         return this._singleClick
+       }
+       get aL() {
+         return this._doubleClick
+       }
+       get hasSwiped() {
+         return this._hasSwiped
+       }
+ ... (54 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L405-L416` → after: `L7463-L7536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7463-L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7463-L7536) · [Before (L405-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L405-L416)

```diff
-       }, (() => {
-         const Je = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ie = [(0, be.R)()], He = [(0, be.R)()], Me = [(0, be.R)()], (0, ye.i)(null, null, ie, {
-           kind: "field",
-           name: "wheelPrecisionX",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "wheelPrecisionX" in ee,
-             get: ee => ee.wheelPrecisionX,
-             set: (ee, ie) => {
-               ee.wheelPrecisionX = ie
+         const NW = iW.inputIndex >= TW.MouseWheelX && iW.inputIndex <= TW.MouseWheelZ ? SW.c.POINTERWHEEL : SW.c.POINTERMOVE;
+         let PW;
+         OW.onPointerMove && (WW = WW || this._pickMove(iW), OW.onPointerMove(iW, WW, NW)), WW ? (PW = new SW.f(NW, iW, WW), this._setRayOnPointerInfo(WW, iW)) : (PW = new SW.f(NW, iW, null, this), this._movePointerInfo = PW), OW.onPointerObservable.hasObservers() && OW.onPointerO … [truncated]
+       }
+       _setRayOnPointerInfo(WW, iW) {
+         const OW = this._scene;
+         WW && CW.b._IsPickingAvailable && (WW.ray || (WW.ray = OW.createPickingRay(iW.offsetX, iW.offsetY, tW.d.Identity(), OW.activeCamera)))
+       }
+       _addCameraPointerObserver(WW, iW) {
+         return this._cameraObserverCount++, this._scene.onPointerObservable.add(WW, iW)
+       }
+       _removeCameraPointerObserver(WW) {
+         return this._cameraObserverCount--, this._scene.onPointerObservable.remove(WW)
+       }
+       _checkForPicking() {
+         return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
+ ... (58 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L418-L429` → after: `L7538-L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7538-L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7538-L7584) · [Before (L418-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L418-L429)

```diff
-           },
-           metadata: Je
-         }, Ke, Ue), (0, ye.i)(null, null, He, {
-           kind: "field",
-           name: "wheelPrecisionY",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "wheelPrecisionY" in ee,
-             get: ee => ee.wheelPrecisionY,
-             set: (ee, ie) => {
-               ee.wheelPrecisionY = ie
+             mW.hasSpecificTrigger(8) && window.setTimeout((() => {
+               const WW = OW.Kl(this._unTranslatedPointerX, this._unTranslatedPointerY, (WW => WW.Fb && WW.isVisible && WW.isReady() && WW.actionManager && WW.actionManager.hasSpecificTrigger(8) && WW === this._pickedDownMesh), !1, OW.cameraToUseForPointers);
+               WW?.pickedMesh && mW && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > BW.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, mW.processTrigger(8, AW.CreateNew(WW.pickedMesh, iW)))
+             }), BW.LongPressDelay)
+           }
+         } else
+           for (const NW of OW._pointerDownStage) WW = NW.action(this._unTranslatedPointerX, this._unTranslatedPointerY, WW, iW, !1);
+         let mW;
+         const EW = SW.c.POINTERDOWN;
+         WW ? (OW.onPointerDown && OW.onPointerDown(iW, WW, EW), mW = new SW.f(EW, iW, WW), this._setRayOnPointerInfo(WW, iW)) : mW = new SW.f(EW, iW, null, this), OW.onPointerObservable.hasObservers() && OW.onPointerObservable.notifyObservers(mW, EW)
+       }
+       _isPointerSwiping() {
+         return this._isSwiping
+       }
+       simulatePointerUp(WW, iW, OW) {
+         const mW = new PointerEvent("pointerup", iW);
+ ... (31 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L431-L442` → after: `L7586-L7634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7586-L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7586-L7634) · [Before (L431-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L431-L442)

```diff
-           },
-           metadata: Je
-         }, Fe, oe), (0, ye.i)(null, null, Me, {
-           kind: "field",
-           name: "wheelPrecisionZ",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "wheelPrecisionZ" in ee,
-             get: ee => ee.wheelPrecisionZ,
-             set: (ee, ie) => {
-               ee.wheelPrecisionZ = ie
+           }
+         }
+       }
+       isPointerCaptured() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return this._pointerCaptures[WW]
+       }
+       attachControl() {
+         let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
+           mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         const EW = this._scene,
+           NW = EW.VA();
+         mW || (mW = NW.getInputElement()), this._alreadyAttached && this.detachControl(), mW && (this._alreadyAttachedTo = mW), this._deviceSourceManager = new fW(NW), this._initActionManager = WW => {
+           if (!this._meshPickProceed) {
+ ... (33 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L444-L450` → after: `L7636-L7725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7636-L7725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7636-L7725) · [Before (L444-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L444-L450)

```diff
-           },
-           metadata: Je
-         }, qe, Te), Je && Object.defineProperty(ee, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Je
+           }
+           LW || mW(EW, this._currentPickResult)
+         }, this._onPointerMove = WW => {
+           if (this._updatePointerPosition(WW), this._latestPointerMoveEvents.set(WW.pointerId, {
+               event: WW,
+               pointerX: this._pointerX,
+               pointerY: this._pointerY,
+               unTranslatedPointerX: this._unTranslatedPointerX,
+               unTranslatedPointerY: this._unTranslatedPointerY
+             }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > BW.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > BW.DragMovementThreshold), NW.isPointerLo … [truncated]
+           if (!EW.cameraToUseForPointers && !EW.activeCamera) return;
+           if (EW.skipPointerMovePicking) return void this._processPointerMove(new lW.b, WW);
+           this._ensurePointerMovePredicate();
+           const iW = EW._registeredActions > 0 || EW.constantlyUpdateMeshUnderPointer ? this._pickMove(WW) : null;
+           this._processPointerMove(iW, WW)
+         }, this._onPointerDown = WW => {
+ ... (74 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L452-L453` → after: `L7727-L7758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7727-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7727-L7758) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L452-L453)

```diff
-       })(), ee
-     })();
+       }
+       getPointerOverMesh() {
+         return this.meshUnderPointer
+       }
+       _invalidateMesh(WW) {
+         this._pointerOverMesh === WW && (this._pointerOverMesh = null), this._pickedDownMesh === WW && (this._pickedDownMesh = null), this._pickedUpMesh === WW && (this._pickedUpMesh = null);
+         for (const iW in this._meshUnderPointerId) this._meshUnderPointerId[iW] === WW && delete this._meshUnderPointerId[iW]
+       }
+     }
+     BW.DragMovementThreshold = 10, BW.LongPressDelay = 500, BW.DoubleClickDelay = 300, BW.ExclusiveDoubleClickMode = !1;
+     var qW = OW(41469),
+       RW = OW(38372),
+       GW = OW(38937);
+     class IW {
+       static get UniqueId() {
+         const WW = this._UniqueIdCounter;
+ ... (16 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L456` → after: `L7761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7761) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L456)

```diff
-       ee[ee.MoveRelative = 0] = "MoveRelative", ee[ee.RotateRelative = 1] = "RotateRelative", ee[ee.MoveScene = 2] = "MoveScene"
+       WW[WW.BackwardCompatible = 0] = "BackwardCompatible", WW[WW.Intermediate = 1] = "Intermediate", WW[WW.Aggressive = 2] = "Aggressive"
```

#### 29. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L458-L500` → after: `L7763-L7794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7763-L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7763-L7794) · [Before (L458-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L458-L500)

```diff
-     let Xe = (() => {
-       var ee;
-       let ie, He, Ke, Ue, Fe, Je, oe, Re, ke, qe = Te,
-         fe = [];
-       return ee = class extends qe {
-         constructor() {
-           super(...arguments), this.camera = (0, ye.l)(this, fe), this._moveRelative = Me.p.Zero(), this._rotateRelative = Me.p.Zero(), this._moveScene = Me.p.Zero(), this._wheelXAction = pe.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = pe.MoveRelative, thi … [truncated]
-         }
-         getClassName() {
-           return "FreeCameraMouseWheelInput"
-         }
-         set wheelXMoveRelative(ee) {
-           null === ee && this._wheelXAction !== pe.MoveRelative || (this._wheelXAction = pe.MoveRelative, this._wheelXActionCoordinate = ee)
-         }
-         get wheelXMoveRelative() {
-           return this._wheelXAction !== pe.MoveRelative ? null : this._wheelXActionCoordinate
- ... (27 more removed lines; see GitHub link above)
+     class LO {
+       static DefaultMaterialFactory(WW) {
+         throw (0, KW.o)("StandardMaterial")
+       }
+       static CollisionCoordinatorFactory() {
+         throw (0, KW.o)("DefaultCollisionCoordinator")
+       }
+       get clearColor() {
+         return this._clearColor
+       }
+       set clearColor(WW) {
+         WW !== this._clearColor && (this._clearColor = WW, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
+       }
+       get imageProcessingConfiguration() {
+         return this._imageProcessingConfiguration
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L502-L503` → after: `L7796-L8044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7796-L8044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L7796-L8044) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L502-L503)

```diff
-         get wheelZRotateRelative() {
-           return this._wheelZAction !== pe.RotateRelative ? null : this._wheelZActionCoordinate
+       }
+       set forceWireframe(WW) {
+         this._forceWireframe !== WW && (this._forceWireframe = WW, this.markAllMaterialsAsDirty(16))
+       }
+       get forceWireframe() {
+         return this._forceWireframe
+       }
+       set skipFrustumClipping(WW) {
+         this._skipFrustumClipping !== WW && (this._skipFrustumClipping = WW)
+       }
+       get skipFrustumClipping() {
+         return this._skipFrustumClipping
+       }
+       set forcePointsCloud(WW) {
+         this._forcePointsCloud !== WW && (this._forcePointsCloud = WW, this.markAllMaterialsAsDirty(16))
+       }
+ ... (233 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L505-L506` → after: `L8046-L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8046-L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8046-L8211) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L505-L506)

```diff
-         set wheelXMoveScene(ee) {
-           null === ee && this._wheelXAction !== pe.MoveScene || (this._wheelXAction = pe.MoveScene, this._wheelXActionCoordinate = ee)
+       }
+       MmW(WW) {
+         this._components.push(WW), this._transientComponents.push(WW);
+         const iW = WW;
+         iW.addFromContainer && iW.serialize && this._serializableComponents.push(iW)
+       }
+       _getComponent(WW) {
+         for (const iW of this._components)
+           if (iW.name === WW) return iW;
+         return null
+       }
+       get uniqueId() {
+         return this._uniqueId
+       }
+       constructor(WW, iW) {
+         this._inputManager = new BW(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new RW.d(.2, .2, .3, 1), this.onClearColorChangedObservable = new PW.e, … [truncated]
+ ... (150 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L508-L509` → after: `L8213-L8219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8213-L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8213-L8219) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L508-L509)

```diff
-         get wheelXMoveScene() {
-           return this._wheelXAction !== pe.MoveScene ? null : this._wheelXActionCoordinate
+         if (iW) {
+           for (WW = 0; WW < this._materialsRenderTargets.length; ++WW) {
+             this._materialsRenderTargets.data[WW].isReadyForRendering() || (EW = !1)
+           }
+           for (WW = 0; WW < this.customRenderTargets.length; ++WW) {
+             this.customRenderTargets[WW].isReadyForRendering() || (EW = !1)
+           }
```

#### 33. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L511-L512` → after: `L8221-L8222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8221-L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8221-L8222) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L511-L512)

```diff
-         set wheelYMoveScene(ee) {
-           null === ee && this._wheelYAction !== pe.MoveScene || (this._wheelYAction = pe.MoveScene, this._wheelYActionCoordinate = ee)
+         for (WW = 0; WW < this.geometries.length; WW++) {
+           2 === this.geometries[WW].delayLoadState && (EW = !1)
```

#### 34. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L514-L515` → after: `L8224-L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8224-L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8224-L8355) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L514-L515)

```diff
-         get wheelYMoveScene() {
-           return this._wheelYAction !== pe.MoveScene ? null : this._wheelYActionCoordinate
+         if (this.activeCameras && this.activeCameras.length > 0)
+           for (const NW of this.activeCameras) NW.isReady(!0) || (EW = !1);
+         else this.activeCamera && (this.activeCamera.isReady(!0) || (EW = !1));
+         for (const NW of this.vY) NW.isReady() || (EW = !1);
+         if (this.proceduralTexturesEnabled)
+           for (const NW of this.proceduralTextures) NW.isReady() || (EW = !1);
+         if (this.layers)
+           for (const NW of this.layers) NW.isReady() || (EW = !1);
+         if (this.effectLayers)
+           for (const NW of this.effectLayers) NW.isLayerReady() || (EW = !1);
+         for (const NW of this._isReadyChecks) NW.isReady() || (EW = !1);
+         return OW.areAllEffectsReady() || (EW = !1), OW.currentRenderPassId = mW, EW
+       }
+       resetCachedMaterial() {
+         this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
+       }
+ ... (116 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L517-L518` → after: `L8357-L8363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8357-L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8357-L8363) · [Before (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L517-L518)

```diff
-         set wheelZMoveScene(ee) {
-           null === ee && this._wheelZAction !== pe.MoveScene || (this._wheelZAction = pe.MoveScene, this._wheelZActionCoordinate = ee)
+       }
+       pD(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const OW = this.meshes.indexOf(WW);
+         if (-1 !== OW && (this.meshes.splice(OW, 1), WW.parent || WW._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(WW), this.onMeshRemovedObservable.notifyObservers(WW), iW) {
+           const iW = WW.getChildMeshes();
+           for (const WW of iW) this.pD(WW)
```

#### 36. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L520-L521` → after: `L8365-L8377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8365-L8377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8365-L8377) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L520-L521)

```diff
-         get wheelZMoveScene() {
-           return this._wheelZAction !== pe.MoveScene ? null : this._wheelZActionCoordinate
+         return OW
+       }
+       addTransformNode(WW) {
+         this._blockEntityCollection || WW.bD() === this && -1 !== WW._indexInSceneTransformNodesArray || (WW._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(WW), WW.parent || WW._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable … [truncated]
+       }
+       removeTransformNode(WW) {
+         const iW = WW._indexInSceneTransformNodesArray;
+         if (-1 !== iW) {
+           if (iW !== this.transformNodes.length - 1) {
+             const WW = this.transformNodes[this.transformNodes.length - 1];
+             this.transformNodes[iW] = WW, WW._indexInSceneTransformNodesArray = iW
+           }
+           WW._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), WW.parent || WW._removeFromSceneRootNodes()
```

#### 37. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L523-L529` → after: `L8379-L8393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8379-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8379-L8393) · [Before (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L523-L529)

```diff
-         checkInputs() {
-           if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
-           this._moveRelative.Iee(0), this._rotateRelative.Iee(0), this._moveScene.Iee(0), this._updateCamera(), this.camera.Xx().useRightHandedSystem && (this._moveRelative.z *= -1);
-           const ee = Me.b.Zero();
-           this.camera.getViewMatrix().invertToRef(ee);
-           const ie = Me.p.Zero();
-           Me.p.TransformNormalToRef(this._moveRelative, ee, ie), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(ie), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
+         return this.onTransformNodeRemovedObservable.notifyObservers(WW), iW
+       }
+       removeSkeleton(WW) {
+         const iW = this.skeletons.indexOf(WW);
+         return -1 !== iW && (this.skeletons.splice(iW, 1), this.onSkeletonRemovedObservable.notifyObservers(WW), this._executeActiveContainerCleanup(this._activeSkeletons)), iW
+       }
+       removeMorphTargetManager(WW) {
+         const iW = this.morphTargetManagers.indexOf(WW);
+         return -1 !== iW && this.morphTargetManagers.splice(iW, 1), iW
+       }
+       removeLight(WW) {
+         const iW = this.lights.indexOf(WW);
+         if (-1 !== iW) {
+           for (const iW of this.meshes) iW._removeLightSource(WW, !1);
+           this.lights.splice(iW, 1), this.sortLightsByPriority(), WW.parent || WW._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(WW)
```

#### 38. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L531-L532` → after: `L8395-L8400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8395-L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8395-L8400) · [Before (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L531-L532)

```diff
-         _updateCamera() {
-           this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._whee … [truncated]
+         return iW
+       }
+       removeCamera(WW) {
+         const iW = this.cameras.indexOf(WW);
+         if (-1 !== iW && (this.cameras.splice(iW, 1), WW.parent || WW._removeFromSceneRootNodes()), this.activeCameras) {
+           const iW = this.activeCameras.indexOf(WW); - 1 !== iW && this.activeCameras.splice(iW, 1)
```

#### 39. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L534-L556` → after: `L8402-L8426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8402-L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8402-L8426) · [Before (L534-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L534-L556)

```diff
-         _updateCameraProperty(ee, ie, He) {
-           if (0 === ee) return;
-           if (null === ie || null === He) return;
-           let ye = null;
-           switch (ie) {
-             case pe.MoveRelative:
-               ye = this._moveRelative;
-               break;
-             case pe.RotateRelative:
-               ye = this._rotateRelative;
-               break;
-             case pe.MoveScene:
-               ye = this._moveScene
-           }
-           switch (He) {
-             case 0:
- ... (7 more removed lines; see GitHub link above)
+         return this.activeCamera === WW && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(WW), iW
+       }
+       removeParticleSystem(WW) {
+         const iW = this.vY.indexOf(WW);
+         return -1 !== iW && (this.vY.splice(iW, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(WW), iW
+       }
+       removeAnimation(WW) {
+         const iW = this.animations.indexOf(WW);
+         return -1 !== iW && this.animations.splice(iW, 1), iW
+       }
+       stopAnimation(WW, iW, OW) {}
+       removeAnimationGroup(WW) {
+         const iW = this.animationGroups.indexOf(WW);
+         return -1 !== iW && this.animationGroups.splice(iW, 1), this.onAnimationGroupRemovedObservable.notifyObservers(WW), iW
+       }
+       removeMultiMaterial(WW) {
+ ... (9 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L559-L718` → after: `L8430-L8462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8430-L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8430-L8462) · [Before (L559-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L559-L718)

```diff
-       }, (() => {
-         const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(qe[Symbol.metadata] ?? null) : void 0;
-         ie = [(0, be.R)()], He = [(0, be.R)()], Ke = [(0, be.R)()], Ue = [(0, be.R)()], Fe = [(0, be.R)()], Je = [(0, be.R)()], oe = [(0, be.R)()], Re = [(0, be.R)()], ke = [(0, be.R)()], (0, ye.i)(ee, null, ie, {
-           kind: "setter",
-           name: "wheelXMoveRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "wheelXMoveRelative" in ee,
-             set: (ee, ie) => {
-               ee.wheelXMoveRelative = ie
-             }
-           },
-           metadata: Me
-         }, null, fe), (0, ye.i)(ee, null, He, {
-           kind: "setter",
- ... (144 more removed lines; see GitHub link above)
+         return this.onMaterialRemovedObservable.notifyObservers(WW), iW
+       }
+       removeActionManager(WW) {
+         const iW = this.actionManagers.indexOf(WW);
+         return -1 !== iW && this.actionManagers.splice(iW, 1), iW
+       }
+       removeTexture(WW) {
+         const iW = this.textures.indexOf(WW);
+         return -1 !== iW && this.textures.splice(iW, 1), this.onTextureRemovedObservable.notifyObservers(WW), iW
+       }
+       removeFrameGraph(WW) {
+         const iW = this.frameGraphs.indexOf(WW);
+         return -1 !== iW && this.frameGraphs.splice(iW, 1), this.onFrameGraphRemovedObservable.notifyObservers(WW), iW
+       }
+       removeObjectRenderer(WW) {
+         const iW = this.objectRenderers.indexOf(WW);
+ ... (17 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L720-L747` → after: `L8464-L8553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8464-L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8464-L8553) · [Before (L720-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L720-L747)

```diff
-         detachControl() {
-           if (this._pointerInput) {
-             if (this._observer && (this.camera.Xx()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
-               const ee = this.camera.Nf().getInputElement();
-               ee && ee.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
-             }
-             this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
-           }
-         }
-         checkInputs() {
-           if (null === this._offsetX || null === this._offsetY) return;
-           if (0 === this._offsetX && 0 === this._offsetY) return;
-           const ee = this.camera,
-             ie = ee.movement.input,
-             He = ie.getEntry("touch", "rotate"),
-             ye = ie.getEntry("touch", "translate"),
- ... (12 more removed lines; see GitHub link above)
+       }
+       sortLightsByPriority() {
+         this.requireLightSorting && this.lights.sort(rW.e.CompareLightsPriority)
+       }
+       addCamera(WW) {
+         this._blockEntityCollection || (this.cameras.push(WW), EW.d.SetImmediate((() => {
+           this.onNewCameraAddedObservable.notifyObservers(WW)
+         })), WW.parent || WW._addToSceneRootNodes())
+       }
+       addSkeleton(WW) {
+         this._blockEntityCollection || (this.skeletons.push(WW), EW.d.SetImmediate((() => {
+           this.onNewSkeletonAddedObservable.notifyObservers(WW)
+         })))
+       }
+       addParticleSystem(WW) {
+         this._blockEntityCollection || (this.vY.push(WW), EW.d.SetImmediate((() => {
+ ... (74 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L749-L750` → after: `L8555-L8616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8555-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8555-L8616) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L749-L750)

```diff
-         getClassName() {
-           return "FreeCameraTouchInput"
+         if (WW)
+           for (let OW = 0; OW < this.multiMaterials.length; OW++) {
+             const WW = this.multiMaterials[OW];
+             if (iW(WW)) return WW
+           }
+         return null
+       }
+       getMaterialByUniqueID(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         return this.getMaterialByUniqueId(WW, iW)
+       }
+       getMaterialByUniqueId(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         return this._getMaterial(iW, (iW => iW.uniqueId === WW))
+       }
+       getMaterialById(WW) {
+ ... (46 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L752-L753` → after: `L8618-L8624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8618-L8624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8618-L8624) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L752-L753)

```diff
-         getSimpleName() {
-           return "touch"
+         return null
+       }
+       getBoneByName(WW) {
+         for (let iW = 0; iW < this.skeletons.length; iW++) {
+           const OW = this.skeletons[iW];
+           for (let iW = 0; iW < OW.bones.length; iW++)
+             if (OW.bones[iW].name === WW) return OW.bones[iW]
```

#### 44. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L755-L795` → after: `L8626-L8641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8626-L8641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8626-L8641) · [Before (L755-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L755-L795)

```diff
-       }, (() => {
-         const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ie = [(0, be.R)()], He = [(0, be.R)()], (0, ye.i)(null, null, ie, {
-           kind: "field",
-           name: "touchAngularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "touchAngularSensibility" in ee,
-             get: ee => ee.touchAngularSensibility,
-             set: (ee, ie) => {
-               ee.touchAngularSensibility = ie
-             }
-           },
-           metadata: Me
-         }, Ke, Ue), (0, ye.i)(null, null, He, {
- ... (25 more removed lines; see GitHub link above)
+         return null
+       }
+       getLightByName(WW) {
+         for (let iW = 0; iW < this.lights.length; iW++)
+           if (this.lights[iW].name === WW) return this.lights[iW];
+         return null
+       }
+       getLightById(WW) {
+         for (let iW = 0; iW < this.lights.length; iW++)
+           if (this.lights[iW].id === WW) return this.lights[iW];
+         return null
+       }
+       getLightByUniqueId(WW) {
+         for (let iW = 0; iW < this.lights.length; iW++)
+           if (this.lights[iW].uniqueId === WW) return this.lights[iW];
+         return null
```

#### 45. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L797-L798` → after: `L8643-L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8643-L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8643-L8646) · [Before (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L797-L798)

```diff
-       addKeyboard() {
-         return this.add(new oe), this
+       getParticleSystemById(WW) {
+         for (let iW = 0; iW < this.vY.length; iW++)
+           if (this.vY[iW].id === WW) return this.vY[iW];
+         return null
```

#### 46. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L800-L802` → after: `L8648-L8651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8648-L8651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8648-L8651) · [Before (L800-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L800-L802)

```diff
-       addMouse() {
-         let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         return this._mouseInput || (this._mouseInput = new qe(ee), this.add(this._mouseInput)), this
+       getGeometryById(WW) {
+         for (let iW = 0; iW < this.geometries.length; iW++)
+           if (this.geometries[iW].id === WW) return this.geometries[iW];
+         return null
```

#### 47. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L804-L805` → after: `L8653-L8660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8653-L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8653-L8660) · [Before (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L804-L805)

```diff
-       removeMouse() {
-         return this._mouseInput && this.remove(this._mouseInput), this
+       _getGeometryByUniqueId(WW) {
+         if (this._geometriesByUniqueId) {
+           const iW = this._geometriesByUniqueId[WW];
+           if (void 0 !== iW) return this.geometries[iW]
+         } else
+           for (let iW = 0; iW < this.geometries.length; iW++)
+             if (this.geometries[iW].uniqueId === WW) return this.geometries[iW];
+         return null
```

#### 48. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L807-L808` → after: `L8662-L8665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8662-L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8662-L8665) · [Before (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L807-L808)

```diff
-       addMouseWheel() {
-         return this._mouseWheelInput || (this._mouseWheelInput = new Xe, this.add(this._mouseWheelInput)), this
+       getFrameGraphByName(WW) {
+         for (let iW = 0; iW < this.frameGraphs.length; iW++)
+           if (this.frameGraphs[iW].name === WW) return this.frameGraphs[iW];
+         return null
```

#### 49. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L810-L811` → after: `L8667-L8670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8667-L8670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8667-L8670) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L810-L811)

```diff
-       removeMouseWheel() {
-         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
+       pushGeometry(WW, iW) {
+         return !(!iW && this._getGeometryByUniqueId(WW.uniqueId)) && (this.addGeometry(WW), EW.d.SetImmediate((() => {
+           this.onNewGeometryAddedObservable.notifyObservers(WW)
+         })), !0)
```

#### 50. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L813-L814` → after: `L8672-L8681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8672-L8681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8672-L8681) · [Before (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L813-L814)

```diff
-       addTouch() {
-         return this.add(new ze), this
+       removeGeometry(WW) {
+         let iW;
+         if (this._geometriesByUniqueId) {
+           if (iW = this._geometriesByUniqueId[WW.uniqueId], void 0 === iW) return !1
+         } else if (iW = this.geometries.indexOf(WW), iW < 0) return !1;
+         if (iW !== this.geometries.length - 1) {
+           const WW = this.geometries[this.geometries.length - 1];
+           WW && (this.geometries[iW] = WW, this._geometriesByUniqueId && (this._geometriesByUniqueId[WW.uniqueId] = iW))
+         }
+         return this._geometriesByUniqueId && (this._geometriesByUniqueId[WW.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(WW), !0
```

#### 51. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L816-L817` → after: `L8683-L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8683-L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8683-L8684) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L816-L817)

```diff
-       clear() {
-         super.clear(), this._mouseInput = null
+       getGeometries() {
+         return this.geometries
```

#### 52. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L819-L892` → after: `L8686-L8807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8686-L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8686-L8807) · [Before (L819-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L819-L892)

```diff
-     }(Be = de.prototype).addDeviceOrientation ?? (Be.addDeviceOrientation = (0, Oe.h)("FreeCameraInputsManager", "addDeviceOrientation")), (Ee = de.prototype).addVirtualJoystick ?? (Ee.addVirtualJoystick = (0, Oe.h)("FreeCameraInputsManager", "addVirtualJoystick")), (ge = de.prot … [truncated]
-     var We = He(41e3),
-       te = He(37949);
-     let Ze = (() => {
-         var ee;
-         let ie, He, Ue, Fe, oe = Ke.c,
-           Re = [],
-           ke = [],
-           qe = [],
-           fe = [],
-           Te = [],
-           pe = [],
-           Xe = [],
-           ze = [];
-         return ee = class extends oe {
-           get angularSensibility() {
- ... (58 more removed lines; see GitHub link above)
+       getMeshById(WW) {
+         for (let iW = 0; iW < this.meshes.length; iW++)
+           if (this.meshes[iW].id === WW) return this.meshes[iW];
+         return null
+       }
+       getMeshesById(WW) {
+         return this.meshes.filter((function(iW) {
+           return iW.id === WW
+         }))
+       }
+       getTransformNodeById(WW) {
+         for (let iW = 0; iW < this.transformNodes.length; iW++)
+           if (this.transformNodes[iW].id === WW) return this.transformNodes[iW];
+         return null
+       }
+       getTransformNodeByUniqueId(WW) {
+ ... (106 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L894-L896` → after: `L8809-L8817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8809-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8809-L8817) · [Before (L894-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L894-L896)

```diff
-           set keysRotateLeft(ee) {
-             const ie = this.inputs.attached.keyboard;
-             ie && (ie.keysRotateLeft = ee)
+         }
+         return null
+       }
+       getMorphTargetByName(WW) {
+         for (let iW = 0; iW < this.morphTargetManagers.length; ++iW) {
+           const OW = this.morphTargetManagers[iW];
+           for (let iW = 0; iW < OW.numTargets; ++iW) {
+             const mW = OW.getTarget(iW);
+             if (mW.name === WW) return mW
```

#### 54. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L898-L900` → after: `L8819-L8850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8819-L8850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8819-L8850) · [Before (L898-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L898-L900)

```diff
-           get keysRotateRight() {
-             const ee = this.inputs.attached.keyboard;
-             return ee ? ee.keysRotateRight : []
+         }
+         return null
+       }
+       getPostProcessByName(WW) {
+         for (let iW = 0; iW < this.postProcesses.length; ++iW) {
+           const OW = this.postProcesses[iW];
+           if (OW.name === WW) return OW
+         }
+         return null
+       }
+       isActiveMesh(WW) {
+         return -1 !== this._activeMeshes.indexOf(WW)
+       }
+       get uid() {
+         return this._uid || (this._uid = mW.f.RandomId()), this._uid
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L902-L904` → after: `L8852-L8869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8852-L8869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8852-L8869) · [Before (L902-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L902-L904)

```diff
-           set keysRotateRight(ee) {
-             const ie = this.inputs.attached.keyboard;
-             ie && (ie.keysRotateRight = ee)
+           const OW = WW.BA();
+           null !== OW && void 0 !== OW && (OW.hasRenderTargetTextures && null != OW.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(OW) && (this._processedMaterials.push(OW), this._materialsRenderTargets.concatWithNoDuplicate(OW.getRenderTargetTextures())), thi … [truncated]
+         }
+       }
+       freeProcessedMaterials() {
+         this._processedMaterials.dispose()
+       }
+       get blockfreeActiveMeshesAndRenderingGroups() {
+         return this._preventFreeActiveMeshesAndRenderingGroups
+       }
+       set blockfreeActiveMeshesAndRenderingGroups(WW) {
+         this._preventFreeActiveMeshesAndRenderingGroups !== WW && (WW && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = WW)
+       }
+       freeActiveMeshes() {
+         if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
+           for (let WW = 0; WW < this.activeCameras.length; WW++) {
+ ... (2 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L906-L908` → after: `L8871-L8876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8871-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8871-L8876) · [Before (L906-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L906-L908)

```diff
-           get keysRotateUp() {
-             const ee = this.inputs.attached.keyboard;
-             return ee ? ee.keysRotateUp : []
+       }
+       freeRenderingGroups() {
+         if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
+           for (let WW = 0; WW < this.textures.length; WW++) {
+             const iW = this.textures[WW];
+             iW && iW.renderList && iW.freeRenderingGroups()
```

#### 57. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L910-L912` → after: `L8878-L8944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8878-L8944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8878-L8944) · [Before (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L910-L912)

```diff
-           set keysRotateUp(ee) {
-             const ie = this.inputs.attached.keyboard;
-             ie && (ie.keysRotateUp = ee)
+       }
+       _isInIntermediateRendering() {
+         return this._intermediateRendering
+       }
+       _isInRenderingMeshEvaluation() {
+         return this._renderingMeshEvaluationDepth > 0
+       }
+       freezeActiveMeshes() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           iW = arguments.length > 1 ? arguments[1] : void 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0,
+           mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+           NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if (this.frameGraph) {
+           this._renderWithFrameGraph(!0, !1, !0);
+           const PW = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
+ ... (51 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L914-L916` → after: `L8946-L8948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8946-L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8946-L8948) · [Before (L914-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L914-L916)

```diff
-           get keysRotateDown() {
-             const ee = this.inputs.attached.keyboard;
-             return ee ? ee.keysRotateDown : []
+           if (this._activeParticleSystems) {
+             const WW = this._activeParticleSystems.length;
+             for (let iW = 0; iW < WW; iW++) this._activeParticleSystems.data[iW].animate()
```

#### 59. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L918-L920` → after: `L8950-L8974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8950-L8974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8950-L8974) · [Before (L918-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L918-L920)

```diff
-           set keysRotateDown(ee) {
-             const ie = this.inputs.attached.keyboard;
-             ie && (ie.keysRotateDown = ee)
+           return void this._renderingManager.resetSprites()
+         }
+         if (!this.activeCamera) return;
+         this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(),  … [truncated]
+         for (let EW = 0, NW = this._beforeEvaluateActiveMeshStage; EW < NW.length; EW++) {
+           NW[EW].action()
+         }
+         const WW = this.getActiveMeshCandidates(),
+           iW = WW.length,
+           OW = qW.e.Enabled,
+           mW = this.customLODSelector;
+         for (let EW = 0; EW < iW; EW++) {
+           const iW = WW.data[EW],
+             NW = !mW && !iW.KD && !iW._internalMeshDataInfo?._LODLevels.length;
+           let PW, LW;
+           if ((NW || (PW = iW._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), PW ? PW[1] = -1 : (PW = [iW, -1], iW._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, PW))), !iW.isBlocked) && (OW && this._totalVertices.addCount(iW.getTotalVertices() … [truncated]
+ ... (9 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L922-L927` → after: `L8976-L8983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8976-L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8976-L8983) · [Before (L922-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L922-L927)

```diff
-           constructor(ee, ie, He) {
-             var be;
-             super(ee, ie, He, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), be = this, this.ellipsoid = (0, ye.l)(this, Re, new Me.p(.5, 1, .5)), this.ellipsoidOffset = ((0, ye.l)(this, ke), (0, ye.l)(this, qe, new Me.p(0, 0, 0))), this.checkCollisions = (( … [truncated]
-               let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-               be._newPosition.jD(ie), be._newPosition.subtractToRef(be._oldPosition, be._diffPosition), be._diffPosition.length() > We.e.CollisionsEpsilon && (be.position.addToRef(be._diffPosition, be._deferredPositionUpdate), be._deferOnly ? be._deferredUpdated = !0 : be.positio … [truncated]
-             }, this.inputs = new de(this), this.inputs.addKeyboard().addMouse()
+         }
+         if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
+           this.onBeforeParticlesRenderingObservable.notifyObservers(this);
+           for (let WW = 0; WW < this.vY.length; WW++) {
+             const iW = this.vY[WW];
+             if (!iW.isStarted() || !iW.emitter) continue;
+             const OW = iW.emitter;
+             OW.position && !OW.isEnabled() || (this._activeParticleSystems.push(iW), iW.animate(), this._renderingManager.dispatchParticles(iW))
```

#### 61. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L929-L930` → after: `L8985-L9000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8985-L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L8985-L9000) · [Before (L929-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L929-L930)

```diff
-           attachControl(ee, ie) {
-             ie = Je.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(ie)
+           this.onAfterParticlesRenderingObservable.notifyObservers(this)
+         }
+       }
+       _prepareSkeleton(WW) {
+         this._skeletonsEnabled && WW.skeleton && (this._activeSkeletons.pushNoDuplicate(WW.skeleton) && (WW.skeleton.prepare(), this._activeBones.addCount(WW.skeleton.bones.length, !1)), WW.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(WW) && this.frameG … [truncated]
+       }
+       _activeMesh(WW, iW) {
+         this._prepareSkeleton(iW);
+         let OW = WW.QEW || WW.KD || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || iW.pA;
+         if (iW && iW.hY && iW.hY.length > 0) {
+           const mW = this.getActiveSubMeshCandidates(iW),
+             EW = mW.length;
+           OW = OW || 1 === EW;
+           for (let NW = 0; NW < EW; NW++) {
+             const EW = mW.data[NW];
+             this._evaluateSubMesh(EW, iW, WW, OW)
```

#### 62. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L932-L933` → after: `L9002-L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R9002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L9002-L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L9002-L9056) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L932-L933)

```diff
-           detachControl() {
-             this.inputs.detachElement(), this.cameraDirection = new Me.p(0, 0, 0), this.cameraRotation = new Me.n(0, 0)
+         }
+       }
+       updateTransformMatrix(WW) {
+         const iW = this.activeCamera;
+         if (iW)
+           if (iW._renderingMultiview) {
+             const OW = iW._rigCameras[0],
+               mW = iW._rigCameras[1];
+             this.setTransformMatrix(OW.getViewMatrix(), OW.getProjectionMatrix(WW), mW.getViewMatrix(), mW.getProjectionMatrix(WW))
+           } else this.setTransformMatrix(iW.getViewMatrix(), iW.getProjectionMatrix(WW))
+       }
+       _bindFrameBuffer(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         this._useCurrentFrameBuffer || (WW && WW._multiviewTexture ? WW._multiviewTexture._bindFrameBuffer() : WW && WW.outputRenderTarget ? WW.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer … [truncated]
+       }
+       _clearFrameBuffer(WW) {
+ ... (39 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L935-L936` → after: `L9058-L9064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R9058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L9058-L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L9058-L9064) · [Before (L935-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L935-L936)

```diff
-           get collisionMask() {
-             return this._collisionMask
+           if (this._cameraDrawRenderTargetStage.length > 0) {
+             const iW = this.getBoundingBoxRenderer?.();
+             iW && !WW && (WW = iW.renderList.length > 0 ? iW.renderList.data.slice() : [], WW.length = iW.renderList.length);
+             for (let WW = 0, OW = this._cameraDrawRenderTargetStage; WW < OW.length; WW++) {
+               NW = OW[WW].action(this.activeCamera) || NW
+             }
+             iW && WW && (iW.renderList.data = WW, iW.renderList.length = WW.length)
```

#### 64. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L938-L939` → after: `L9066-L9140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L9066-L9140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L9066-L9140) · [Before (L938-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L938-L939)

```diff
-           set collisionMask(ee) {
-             this._collisionMask = isNaN(ee) ? -1 : ee
+           this._intermediateRendering = !1
+         }
+         NW && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || WW._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame … [truncated]
+         for (let mW = 0, LW = this._beforeCameraDrawStage; mW < LW.length; mW++) {
+           LW[mW].action(this.activeCamera)
+         }
+         this.onBeforeDrawPhaseObservable.notifyObservers(this);
+         const PW = EW.snapshotRendering && 1 === EW.snapshotRenderingMode;
+         PW && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !PW), this.onAfterDrawPhaseObservable.notifyObservers(this);
+         for (let mW = 0, LW = this._afterCameraDrawStage; mW < LW.length; mW++) {
+           LW[mW].action(this.activeCamera)
+         }
+         if (this.postProcessManager && !WW._multiviewTexture) {
+           const iW = WW.outputRenderTarget ? WW.outputRenderTarget.renderTarget : void 0;
+           this.postProcessManager._finalizeFrame(WW.isIntermediate, iW)
+         }
+ ... (59 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L941-L947` → after: `L9142-L9169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R9142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L9142-L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L9142-L9169) · [Before (L941-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L941-L947)

```diff
-           _collideWithWorld(ee) {
-             let ie;
-             ie = this.parent ? Me.p.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, ie.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
-             const He = this.Xx().collisionCoordinator;
-             this._collider || (this._collider = He.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
-             let ye = ee;
-             this.applyGravity && (ye = ee.add(this.Xx().gravity)), He.getNewPosition(this._oldPosition, ye, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
+       }
+       resetDrawCache(WW) {
+         if (this.meshes)
+           for (const iW of this.meshes) iW.resetDrawCache(WW)
+       }
+       _renderWithFrameGraph() {
+         let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           iW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this.activeCamera = null, this.activeCameras = null, WW)
+           for (const OW of this.cameras)
+             if (OW.update(), 0 !== OW.cameraRigMode)
+               for (let WW = 0; WW < OW._rigCameras.length; WW++) OW._rigCameras[WW].update();
+         this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
+         try {
+           this._renderWithFrameGraphAfterBeforeRender(iW)
+         } finally {
+ ... (12 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L949-L950` → after: `L9171-L9203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R9171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L9171-L9203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L9171-L9203) · [Before (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L949-L950)

```diff
-           _checkInputs() {
-             this._localDirection || (this._localDirection = Me.p.Zero(), this._transformedDirection = Me.p.Zero()), this.inputs.checkInputs(), super._checkInputs()
+           mW.f.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
+         }
+         this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
+         for (let OW = 0, mW = this._beforeClearStage; OW < mW.length; OW++) {
+           mW[OW].action()
+         }
+         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
+         else {
+           const iW = this.getActiveMeshCandidates(),
+             OW = iW.length;
+           if (this._activeMeshesFrozen) {
+             if (!this._skipEvaluateActiveMeshesCompletely)
+               for (let WW = 0; WW < OW; WW++) {
+                 const OW = iW.data[WW];
+                 OW._internalAbstractMeshDataInfo._wasActiveLastFrame && OW.computeWorldMatrix()
+               }
+ ... (17 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L952-L953` → after: `L9205-L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R9205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L9205-L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L9205-L9254) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L952-L953)

```diff
-           set needMoveForGravity(ee) {
-             this._needMoveForGravity = ee
+         }
+         this.frameGraph?.execute()
+       }
+       _renderRenderTarget(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._intermediateRendering = !0, WW._shouldRender()) {
+           if (this._renderId++, this.activeCamera = iW, !this.activeCamera) throw new Error("Active camera not set");
+           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), WW.render(OW, mW)
+         }
+         this._intermediateRendering = !1
+       }
+       render() {
+         let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this.Ay) return;
+ ... (34 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L955-L956` → after: `L9256-L9258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L9256-L9258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L9256-L9258) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L955-L956)

```diff
-           get needMoveForGravity() {
-             return this._needMoveForGravity
+           this._engine.currentRenderPassId = WW?.renderPassId ?? 0, this.activeCamera = WW, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(t … [truncated]
+           for (let iW = 0, OW = this._beforeClearStage; iW < OW.length; iW++) {
+             OW[iW].action()
```

#### 69. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L958-L959` → after: `L9260-L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R9260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L9260-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L9260-L9262) · [Before (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L958-L959)

```diff
-           _decideIfNeedsToMove() {
-             return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
+           this._clearFrameBuffer(this.activeCamera);
+           for (let iW = 0, OW = this._gatherRenderTargetsStage; iW < OW.length; iW++) {
+             OW[iW].action(this._renderTargets)
```

#### 70. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L961-L962` → after: `L9264-L9268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L9264-L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L9264-L9268) · [Before (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L961-L962)

```diff
-           _updatePosition() {
-             this.checkCollisions && this.Xx().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
+           if (this.activeCameras && this.activeCameras.length > 0)
+             for (let iW = 0; iW < this.activeCameras.length; iW++) this._processSubCameras(this.activeCameras[iW], iW > 0);
+           else {
+             if (!this.activeCamera) throw new Error("No camera defined");
+             this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
```

#### 71. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L964-L965` → after: `L9270-L9278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R9270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L9270-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L9270-L9278) · [Before (L964-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L964-L965)

```diff
-           dispose() {
-             this.inputs.clear(), super.dispose()
+         }
+         this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
+         for (let OW = 0, mW = this._afterRenderStage; OW < mW.length; OW++) {
+           mW[OW].action()
+         }
+         if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
+           for (let WW = 0; WW < this._toBeDisposed.length; WW++) {
+             const iW = this._toBeDisposed[WW];
+             iW && iW.dispose()
```

#### 72. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L967-L968` → after: `L9280-L9322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R9280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L9280-L9322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L9280-L9322) · [Before (L967-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L967-L968)

```diff
-           getClassName() {
-             return "FreeCamera"
+           this._toBeDisposed.length = 0
+         }
+         this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
+       }
+       freezeMaterials() {
+         for (let WW = 0; WW < this.materials.length; WW++) this.materials[WW].freeze()
+       }
+       unfreezeMaterials() {
+         for (let WW = 0; WW < this.materials.length; WW++) this.materials[WW].unfreeze()
+       }
+       dispose() {
+         if (this.Ay) return;
+         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
+           for (const WW of this._activeAnimatables) WW.onAnimationEndObservable.clear(), WW.onAnimationEnd = null;
+           this.stopAllAnimations()
+         }
+ ... (27 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L970-L1033` → after: `L9324-L9692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L9324-L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/287.js#L9324-L9692) · [Before (L970-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/287.js#L970-L1033)

```diff
-         }, (() => {
-           const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(oe[Symbol.metadata] ?? null) : void 0;
-           ie = [(0, be.P)()], He = [(0, be.P)()], Ue = [(0, be.R)()], Fe = [(0, be.R)()], (0, ye.i)(null, null, ie, {
-             kind: "field",
-             name: "ellipsoid",
-             static: !1,
-             private: !1,
-             access: {
-               has: ee => "ellipsoid" in ee,
-               get: ee => ee.ellipsoid,
-               set: (ee, ie) => {
-                 ee.ellipsoid = ie
-               }
-             },
-             metadata: Me
-           }, Re, ke), (0, ye.i)(null, null, He, {
- ... (48 more removed lines; see GitHub link above)
+         }
+         mW = this._engine._virtualScenes.indexOf(this), mW > -1 && this._engine._virtualScenes.splice(mW, 1), this._engine.wipeCaches(!0), this.jD.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
+       }
+       _disposeList(WW, iW) {
+         const OW = WW.slice(0);
+         iW = iW ?? (WW => WW.dispose());
+         for (const mW of OW) iW(mW);
+         WW.length = 0
+       }
+       get Ay() {
+         return this._isDisposed
+       }
+       clearCachedVertexData() {
+         for (let WW = 0; WW < this.meshes.length; WW++) {
+           const iW = this.meshes[WW].geometry;
+           iW && iW.clearCachedData()
+ ... (353 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/288.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/288.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1)

#### 1. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/288.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/288.js#L2)

```diff
- export const ids = [288];
+ export const ids = [288, 671];
```

#### 2. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/288.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/288.js#L4)

```diff
-   41374: (ee, ie, He) => {
+   41392: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/288.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/288.js#L6)

```diff
-       e: () => ke
+       c: () => mW
```

#### 4. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L490-L491` → after: `L9-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/288.js#L9-L16) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/288.js#L490-L491)

```diff
-       constructor() {
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Ke.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.ShadersRepository : mW.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.ShadersStore : mW.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.IncludesShadersStore : mW.IncludesShadersStoreWGSL
```

#### 5. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L494-L880` → after: `L19-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L19-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/288.js#L19-L32) · [Before (L494-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/288.js#L494-L880)

```diff
-     let Re = (() => {
-       var ee;
-       let ie, He, Re, ke, qe, fe = [],
-         Te = [],
-         pe = [],
-         Xe = [],
-         ze = [],
-         Be = [],
-         Ee = [],
-         ge = [],
-         Oe = [],
-         de = [];
-       return ee = class {
-         static AddNodeConstructor(ee, ie) {
-           this._NodeConstructors[ee] = ie
-         }
- ... (371 more removed lines; see GitHub link above)
+     mW.ShadersRepository = "src/Shaders/", mW.ShadersStore = {}, mW.IncludesShadersStore = {}, mW.ShadersRepositoryWGSL = "src/ShadersWGSL/", mW.ShadersStoreWGSL = {}, mW.IncludesShadersStoreWGSL = {}
+   },
+   64405: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       postprocessVertexShader: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "postprocessVertexShader",
+       NW = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/289.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/289.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848)

#### 1. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L4)

```diff
-   42157: (ee, ie, He) => {
+   41582: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L6` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L6-L12) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L6)

```diff
-       b: () => ue
+       c: () => xW,
+       e: () => ZW,
+       f: () => cW,
+       g: () => lW,
+       j: () => wW,
+       k: () => LW,
+       l: () => tW
```

#### 3. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L8-L20` → after: `L14-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L14-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L14-L44) · [Before (L8-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L8-L20)

```diff
-     var ye = He(41113),
-       be = He(41121),
-       Me = He(37931),
-       Ke = He(37917),
-       Ue = He(37938),
-       Fe = He(41323),
-       Je = He(41524),
-       oe = He(41286),
-       Re = He(41005),
-       ke = He(37920);
-     class qe {
-       constructor() {
-         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
+     var mW = OW(39911),
+       EW = OW(41586);
+ 
+     function NW(WW, iW, OW, mW) {
+       switch (iW) {
+         case 5120: {
+           let iW = WW.getInt8(OW);
+           return mW && (iW = Math.max(iW / 127, -1)), iW
+         }
+         case 5121: {
+           let iW = WW.getUint8(OW);
+           return mW && (iW /= 255), iW
+         }
+         case 5122: {
+           let iW = WW.getInt16(OW, !0);
+           return mW && (iW = Math.max(iW / 32767, -1)), iW
+ ... (15 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L22-L23` → after: `L46-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L46-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L46-L75) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L22-L23)

```diff
-       get name() {
-         return "AutoRotation"
+     }
+ 
+     function PW(WW, iW, OW, mW, NW) {
+       switch (iW) {
+         case 5120:
+           mW && (NW = Math.round(127 * NW)), WW.setInt8(OW, NW);
+           break;
+         case 5121:
+           mW && (NW = Math.round(255 * NW)), WW.setUint8(OW, NW);
+           break;
+         case 5122:
+           mW && (NW = Math.round(32767 * NW)), WW.setInt16(OW, NW, !0);
+           break;
+         case 5123:
+           mW && (NW = Math.round(65535 * NW)), WW.setUint16(OW, NW, !0);
+           break;
+ ... (14 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L25-L26` → after: `L77-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L77-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L77-L93) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L25-L26)

```diff
-       set zoomStopsAnimation(ee) {
-         this._zoomStopsAnimation = ee
+     }
+ 
+     function LW(WW) {
+       switch (WW) {
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
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L28-L29` → after: `L95-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L95-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L95-L117) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L28-L29)

```diff
-       get zoomStopsAnimation() {
-         return this._zoomStopsAnimation
+     }
+ 
+     function cW(WW, iW, OW, mW, EW, cW, wW, tW) {
+       const ZW = new Array(mW),
+         xW = new Array(mW);
+       if (WW instanceof Array) {
+         let EW = iW / 4;
+         const NW = OW / 4;
+         for (let iW = 0; iW < cW; iW += mW) {
+           for (let iW = 0; iW < mW; iW++) ZW[iW] = xW[iW] = WW[EW + iW];
+           tW(xW, iW);
+           for (let iW = 0; iW < mW; iW++) ZW[iW] !== xW[iW] && (WW[EW + iW] = xW[iW]);
+           EW += NW
+         }
+       } else {
+         const lW = ArrayBuffer.isView(WW) ? new DataView(WW.buffer, WW.byteOffset, WW.byteLength) : new DataView(WW),
+ ... (7 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L31-L32` → after: `L119-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L119-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L119-L139) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L31-L32)

```diff
-       set idleRotationSpeed(ee) {
-         this._idleRotationSpeed = ee
+     }
+ 
+     function wW(WW, iW, OW, EW, NW, PW, wW, tW) {
+       const ZW = iW * LW(OW),
+         xW = wW * iW;
+       if (5126 !== OW || NW !== ZW) {
+         const mW = new Float32Array(xW);
+         return cW(WW, EW, NW, iW, OW, xW, PW, ((WW, OW) => {
+           for (let EW = 0; EW < iW; EW++) mW[OW + EW] = WW[EW]
+         })), mW
+       }
+       if (!(WW instanceof Array || WW instanceof Float32Array) || 0 !== EW || WW.length !== xW) {
+         if (WW instanceof Array) {
+           const iW = EW / 4;
+           return WW.slice(iW, iW + xW)
+         }
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L34-L35` → after: `L141-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L141-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L141-L274) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L34-L35)

```diff
-       get idleRotationSpeed() {
-         return this._idleRotationSpeed
+       return tW ? WW.slice() : WW
+     }
+ 
+     function tW(WW, iW, OW, EW, NW, PW, wW) {
+       const tW = LW(OW),
+         ZW = function(WW) {
+           switch (WW) {
+             case 5120:
+               return Int8Array;
+             case 5121:
+               return Uint8Array;
+             case 5122:
+               return Int16Array;
+             case 5123:
+             case 5131:
+               return Uint16Array;
+ ... (118 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L37-L38` → after: `L276-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L276-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L276-L311) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L37-L38)

```diff
-       set idleRotationWaitTime(ee) {
-         this._idleRotationWaitTime = ee
+     }
+     class EW {
+       constructor() {
+         this._lines = []
+       }
+       get currentLine() {
+         return this._lines[this.lineIndex]
+       }
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
+       }
+       set lines(WW) {
+         this._lines.length = 0;
+         for (const iW of WW) {
+           if (!iW || "\r" === iW) continue;
+           if ("#" === iW[0]) {
+ ... (20 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L40-L41` → after: `L313-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L313-L320) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L40-L41)

```diff
-       get idleRotationWaitTime() {
-         return this._idleRotationWaitTime
+     }
+     class NW extends mW {
+       process(WW, iW, OW) {
+         for (let mW = 0; mW < this.children.length; mW++) {
+           const EW = this.children[mW];
+           if (EW.isValid(WW)) return EW.process(WW, iW, OW)
+         }
+         return ""
```

#### 11. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L43-L44` → after: `L322-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L322-L325) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L43-L44)

```diff
-       set idleRotationSpinupTime(ee) {
-         this._idleRotationSpinupTime = ee
+     }
+     class PW extends mW {
+       isValid(WW) {
+         return this.testExpression.isTrue(WW)
```

#### 12. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L46-L47` → after: `L327-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L327-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L327-L375) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L46-L47)

```diff
-       get idleRotationSpinupTime() {
-         return this._idleRotationSpinupTime
+     }
+     class LW {
+       isTrue(WW) {
+         return !0
+       }
+       static postfixToInfix(WW) {
+         const iW = [];
+         for (const OW of WW)
+           if (void 0 === LW._OperatorPriority[OW]) iW.push(OW);
+           else {
+             const WW = iW[iW.length - 1],
+               mW = iW[iW.length - 2];
+             iW.length -= 2, iW.push(`(${mW}${OW}${WW})`)
+           } return iW[iW.length - 1]
+       }
+       static infixToPostfix(WW) {
+ ... (33 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L49-L50` → after: `L377-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L377-L379) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L49-L50)

```diff
-       get rotationInProgress() {
-         return Math.abs(this._cameraRotationSpeed) > 0
+       static ClearCache() {
+         const WW = Array.from(LW._InfixToPostfixCache.entries()).sort(((WW, iW) => WW[1].accessTime - iW[1].accessTime));
+         for (let iW = 0; iW < LW.InfixToPostfixCacheCleanupSize; iW++) LW._InfixToPostfixCache.delete(WW[iW][0])
```

#### 14. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L52-L53` → after: `L381-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L381-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L381-L391) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L52-L53)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+     }
+     LW.InfixToPostfixCacheLimitSize = 5e4, LW.InfixToPostfixCacheCleanupSize = 25e3, LW._InfixToPostfixCache = new Map, LW._OperatorPriority = {
+       ")": 0,
+       "(": 1,
+       "||": 2,
+       "&&": 3
+     }, LW._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
+     class cW extends LW {
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         super(), this.define = WW, this.not = iW
```

#### 15. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L55-L69` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L393-L395) · [Before (L55-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L55-L69)

```diff
-       init() {}
-       attach(ee) {
-         this._attachedCamera = ee;
-         const ie = this._attachedCamera.Xx();
-         this._onPrePointerObservableObserver = ie.onPrePointerObservable.add((ee => {
-           ee.type !== oe.c.POINTERDOWN ? ee.type === oe.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
-         })), this._onAfterCheckInputsObserver = ee.onAfterCheckInputsObservable.add((() => {
-           if (this._reachTargetAlpha()) return;
-           const ee = Re.e.Now;
-           let ie = 0;
-           null != this._lastFrameTime && (ie = ee - this._lastFrameTime), this._lastFrameTime = ee, this._applyUserInteraction();
-           const He = ee - this._lastInteractionTime - this._idleRotationWaitTime,
-             ye = Math.max(Math.min(He / this._idleRotationSpinupTime, 1), 0);
-           this._cameraRotationSpeed = this._idleRotationSpeed * ye, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (ie / 1e3))
-         }))
+       isTrue(WW) {
+         let iW = void 0 !== WW[this.define];
+         return this.not && (iW = !iW), iW
```

#### 16. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L71-L74` → after: `L397-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L397-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L397-L400) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L71-L74)

```diff
-       detach() {
-         if (!this._attachedCamera) return;
-         const ee = this._attachedCamera.Xx();
-         this._onPrePointerObservableObserver && ee.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
+     }
+     class wW extends LW {
+       isTrue(WW) {
+         return this.leftOperand.isTrue(WW) || this.rightOperand.isTrue(WW)
```

#### 17. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L76-L77` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L402-L405) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L76-L77)

```diff
-       resetLastInteractionTime(ee) {
-         this._lastInteractionTime = ee ?? Re.e.Now
+     }
+     class tW extends LW {
+       isTrue(WW) {
+         return this.leftOperand.isTrue(WW) && this.rightOperand.isTrue(WW)
```

#### 18. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L79-L80` → after: `L407-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L407-L410) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L79-L80)

```diff
-       _reachTargetAlpha() {
-         return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < ke.b
+     }
+     class ZW extends LW {
+       constructor(WW, iW, OW) {
+         super(), this.define = WW, this.operand = iW, this.testValue = OW
```

#### 19. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L82-L83` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L412-L413) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L82-L83)

```diff
-       _userIsZooming() {
-         return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
+       toString() {
+         return `${this.define} ${this.operand} ${this.testValue}`
```

#### 20. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L85-L86` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L415) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L85-L86)

```diff
-       _shouldAnimationStopForInteraction() {
-         if (!this._attachedCamera) return !1;
+       isTrue(WW) {
```

#### 21. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L88-L94` → after: `L417-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L417-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L417-L439) · [Before (L88-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L88-L94)

```diff
-         return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (ee = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? ee : this._userIsZooming()
-       }
-       _applyUserInteraction() {
-         this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Re.e.Now)
-       }
-       _userIsMoving() {
-         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+         const OW = parseInt(void 0 != WW[this.define] ? WW[this.define] : this.define),
+           mW = parseInt(void 0 != WW[this.testValue] ? WW[this.testValue] : this.testValue);
+         if (isNaN(OW) || isNaN(mW)) return !1;
+         switch (this.operand) {
+           case ">":
+             iW = OW > mW;
+             break;
+           case "<":
+             iW = OW < mW;
+             break;
+           case "<=":
+             iW = OW <= mW;
+             break;
+           case ">=":
+             iW = OW >= mW;
+             break;
+ ... (7 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L97-L100` → after: `L442-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L442-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L442-L485) · [Before (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L97-L100)

```diff
-     He(42166);
-     class fe {
-       constructor() {
-         this._easingMode = fe.EASINGMODE_EASEIN
+     var xW = OW(41415),
+       lW = OW(41412);
+     const AW = /defined\s*?\((.+?)\)/g,
+       bW = /defined\s*?\[(.+?)\]/g,
+       jW = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
+       UW = /__decl__/,
+       kW = /light\{X\}.(\w*)/g,
+       sW = /\{X\}/g,
+       MW = [],
+       KW = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+ 
+     function SW(WW) {
+       WW.processor && WW.processor.initializeShaders && WW.processor.initializeShaders(WW.processingContext)
+     }
+ 
+     function YW(WW, iW, OW, mW) {
+ ... (28 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L102-L104` → after: `L487-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L487-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L487-L537) · [Before (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L102-L104)

```diff
-       setEasingMode(ee) {
-         const ie = Math.min(Math.max(ee, 0), 2);
-         this._easingMode = ie
+     }
+ 
+     function TW(WW) {
+       const iW = /defined\((.+)\)/.exec(WW);
+       if (iW && iW.length) return new cW(iW[1].trim(), "!" === WW[0]);
+       const OW = ["==", "!=", ">=", "<=", "<", ">"];
+       let mW = "",
+         EW = 0;
+       for (mW of OW)
+         if (EW = WW.indexOf(mW), EW > -1) break;
+       if (-1 === EW) return new cW(WW);
+       const NW = WW.substring(0, EW).trim(),
+         PW = WW.substring(EW + mW.length).trim();
+       return new ZW(NW, mW, PW)
+     }
+ 
+ ... (35 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L106-L107` → after: `L539-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L539-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L539-L582) · [Before (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L106-L107)

```diff
-       getEasingMode() {
-         return this._easingMode
+     }
+ 
+     function HW(WW, iW, OW) {
+       for (; WW.canRead;) {
+         WW.lineIndex++;
+         const EW = WW.currentLine;
+         if (EW.indexOf("#") >= 0) {
+           const mW = KW.exec(EW);
+           if (mW && mW.length) {
+             switch (mW[0]) {
+               case "#ifdef": {
+                 const mW = new NW;
+                 iW.children.push(mW);
+                 const PW = JW(EW, 6);
+                 mW.children.push(PW), hW(WW, mW, PW, OW);
+                 break
+ ... (28 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L109-L110` → after: `L584-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L584-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L584-L598) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L109-L110)

```diff
-       easeInCore(ee) {
-         throw new Error("You must implement this method")
+       return !1
+     }
+ 
+     function nW(WW, iW, OW, NW) {
+       const PW = new mW,
+         LW = new EW;
+       return LW.lineIndex = -1, LW.lines = WW.split("\n"), HW(LW, PW, NW), PW.process(iW, OW, NW)
+     }
+ 
+     function uW(WW, iW) {
+       const OW = WW.defines,
+         mW = {};
+       for (const EW of OW) {
+         const WW = EW.replace("#define", "").replace(";", "").trim().split(" ");
+         mW[WW[0]] = WW.length > 1 ? WW[1] : ""
```

#### 26. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L112-L117` → after: `L600-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L600-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L600-L642) · [Before (L112-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L112-L117)

```diff
-       ease(ee) {
-         switch (this._easingMode) {
-           case fe.EASINGMODE_EASEIN:
-             return this.easeInCore(ee);
-           case fe.EASINGMODE_EASEOUT:
-             return 1 - this.easeInCore(1 - ee)
+       return 0 === WW.processor?.shaderLanguage && (mW.GL_ES = "true"), mW.__VERSION__ = WW.version, mW[WW.platformName] = "true", (0, lW.k)(mW, iW?.isNDCHalfZRange, iW?.nmW, iW?.useExactSrgbConversions), mW
+     }
+ 
+     function oW(WW, iW, OW) {
+       let mW;
+       for (MW.length = 0; null !== (mW = jW.exec(WW));) MW.push(mW);
+       let EW = [WW],
+         NW = !1;
+       for (const LW of MW) {
+         let WW = LW[1];
+         if (-1 !== WW.indexOf("__decl__") && (WW = WW.replace(UW, ""), iW.supportsUniformBuffers && (WW = WW.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), WW += "Declaration"), !iW.includesShadersStore[WW]) {
+           const mW = iW.shadersRepository + "ShadersInclude/" + WW + ".fx";
+           return void dW.loadFile(mW, (mW => {
+             iW.includesShadersStore[WW] = mW, oW(EW.join(""), iW, OW)
+           }))
+         } {
+ ... (27 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L122-L143` → after: `L649-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L649-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L649-L651) · [Before (L122-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L122-L143)

```diff
-     fe.EASINGMODE_EASEIN = 0, fe.EASINGMODE_EASEOUT = 1, fe.EASINGMODE_EASEINOUT = 2;
-     var Te = He(42172);
-     class pe {
-       constructor() {
-         this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
-       }
-       get name() {
-         return "Bouncing"
-       }
-       get autoTransitionRange() {
-         return this._autoTransitionRange
-       }
-       set autoTransitionRange(ee) {
-         if (this._autoTransitionRange === ee) return;
-         this._autoTransitionRange = ee;
-         const ie = this._attachedCamera;
- ... (6 more removed lines; see GitHub link above)
+     const dW = {
+       loadFile: (WW, iW, OW, mW, EW, NW) => {
+         throw (0, xW.o)("FileTools")
```

#### 28. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L145-L146` → after: `L653-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L653-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L653-L680) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L145-L146)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+     }
+   },
+   41412: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       h: () => NW,
+       k: () => LW,
+       l: () => PW,
+       p: () => cW
+     });
+     var mW = OW(41415);
+     const EW = {};
+ 
+     function NW(WW, iW) {
+       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (iW ? iW + "\n" : "") + WW
+     }
+ ... (12 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L148-L152` → after: `L682-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L682-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L682-L724) · [Before (L148-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L148-L152)

```diff
-       init() {}
-       attach(ee) {
-         this._attachedCamera = ee, this._onAfterCheckInputsObserver = ee.onAfterCheckInputsObservable.add((() => {
-           this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTra … [truncated]
-         }))
+     }
+ 
+     function cW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         mW = arguments.length > 3 ? arguments[3] : void 0;
+       switch (WW) {
+         case 3: {
+           const WW = new Int8Array(iW);
+           return mW && WW.set(new Int8Array(mW)), WW
+         }
+         case 0: {
+           const WW = new Uint8Array(iW);
+           return mW && WW.set(new Uint8Array(mW)), WW
+         }
+         case 4: {
+           const WW = "number" !== typeof iW ? new Int16Array(iW) : new Int16Array(OW ? iW / 2 : iW);
+ ... (27 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L154-L155` → after: `L726-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L726-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L726-L773) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L154-L155)

```diff
-       detach() {
-         this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChange … [truncated]
+       const EW = new Uint8Array(iW);
+       return mW && EW.set(new Uint8Array(mW)), EW
+     }
+   },
+   41415: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => wW,
+       h: () => tW,
+       k: () => cW,
+       o: () => EW
+     });
+     const mW = {};
+ 
+     function EW(WW) {
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !mW[WW]) return mW[WW] = !0, `${WW} needs to be imported before as it contains a side-effect required by your code.`
+     }
+ ... (32 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L157-L158` → after: `L775-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L775-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L775-L822) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L157-L158)

```diff
-       _isRadiusAtLimit(ee) {
-         return !!this._attachedCamera && (this._attachedCamera.radius === ee && !this._radiusIsAnimating)
+     }
+   },
+   41406: (WW, iW, OW) => {
+     function mW() {
+       return "undefined" !== typeof window
+     }
+ 
+     function EW() {
+       return "undefined" !== typeof navigator
+     }
+ 
+     function NW() {
+       return "undefined" !== typeof document
+     }
+ 
+     function PW(WW) {
+ ... (32 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L160-L164` → after: `L824-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L824-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L824-L855) · [Before (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L160-L164)

```diff
-       _applyBoundRadiusAnimation(ee) {
-         if (!this._attachedCamera) return;
-         this._radiusBounceTransition || (pe.EasingFunction.setEasingMode(pe.EasingMode), this._radiusBounceTransition = Te.b.CreateAnimation("radius", Te.b.ANIMATIONTYPE_FLOAT, 60, pe.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
-         const ie = Te.b.TransitionTo("radius", this._attachedCamera.radius + ee, this._attachedCamera, this._attachedCamera.Xx(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
-         ie && this._animatables.push(ie)
+     }
+   },
+   41558: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => uW,
+       f: () => sW,
+       i: () => JW,
+       l: () => HW,
+       o: () => yW,
+       s: () => SW,
+       v: () => YW,
+       z: () => gW,
+       D: () => TW,
+       H: () => MW
+     });
+     var mW = OW(41564),
+ ... (16 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L166-L167` → after: `L857-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L857-L860) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L166-L167)

```diff
-       _clearAnimationLocks() {
-         this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
+     }
+     class UW extends LW.j {
+       constructor(WW, iW) {
+         super(WW, LW.g.RequestFileError), this.request = iW, this.name = "RequestFileError", LW.c._setPrototypeOf(this, UW.prototype)
```

#### 34. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L169-L170` → after: `L862-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L862-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L862-L865) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L169-L170)

```diff
-       stopAllAnimations() {
-         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
+     }
+     class kW extends LW.j {
+       constructor(WW, iW) {
+         super(WW, LW.g.ReadFileError), this.file = iW, this.name = "ReadFileError", LW.c._setPrototypeOf(this, kW.prototype)
```

#### 35. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L173-L176` → after: `L868-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L868-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L868-L1337) · [Before (L173-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L173-L176)

```diff
-     pe.EasingFunction = new class extends fe {
-       constructor() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
-         super(), this.amplitude = ee
+     const sW = {
+         DefaultRetryStrategy: class {
+           static ExponentialBackoff() {
+             let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
+               iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
+             return (OW, mW, EW) => 0 !== mW.status || EW >= WW || -1 !== OW.indexOf("file:") ? -1 : Math.pow(2, EW) * iW
+           }
+         }.ExponentialBackoff(),
+         BaseUrl: "",
+         CorsBehavior: "anonymous",
+         PreprocessUrl: WW => WW,
+         ScriptBaseUrl: "",
+         ScriptPreprocessUrl: WW => WW,
+         CleanUrl: WW => WW = WW.replace(/#/gm, "%23")
+       },
+       MW = (WW, iW) => {
+ ... (454 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L178-L180` → after: `L1339-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1339-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1339-L1345) · [Before (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L178-L180)

```diff
-       easeInCore(ee) {
-         const ie = Math.max(0, this.amplitude);
-         return Math.pow(ee, 3) - ee * ie * Math.sin(3.141592653589793 * ee)
+     }
+ 
+     function NW(WW, iW, OW) {
+       try {
+         if (WW()) return iW(), !0
+       } catch (mW) {
+         return OW?.(mW), !0
```

#### 37. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L182` → after: `L1347-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1347-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1347-L1363) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L182)

```diff
-     }(.3), pe.EasingMode = fe.EASINGMODE_EASEOUT;
+       return !1
+     }
+     const PW = function(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
+         EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
+         PW = arguments.length > 6 ? arguments[6] : void 0;
+       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && NW(WW, iW, OW)) return null;
+       const LW = setInterval((() => {
+         NW(WW, iW, OW) ? clearInterval(LW) : (EW -= mW, EW < 0 && (clearInterval(LW), OW?.(new Error("Operation timed out after maximum retries. " + (PW || "")), !0)))
+       }), mW);
+       return () => clearInterval(LW)
+     }
+   },
+   41564: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => mW
+ ... (1 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L185-L194` → after: `L1366-L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1366-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1366-L1402) · [Before (L185-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L185-L194)

```diff
-         this.onTargetFramingAnimationEndObservable = new Me.d, this._mode = Xe.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
-       }
-       get name() {
-         return "Framing"
-       }
-       set mode(ee) {
-         this._mode = ee
-       }
-       get mode() {
-         return this._mode
+         this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
+       }
+       static get IsCustomRequestAvailable() {
+         return Object.keys(mW.CustomRequestHeaders).length > 0 || mW.CustomRequestModifiers.length > 0
+       }
+       static _CleanUrl(WW) {
+         return WW = (WW = WW.replace("file:http:", "http:")).replace("file:https:", "https:")
+       }
+       static _ShouldSkipRequestModifications(WW) {
+         return mW.SkipRequestModificationForBabylonCDN && (WW.includes("preview.babylonjs.com") || WW.includes("cdn.babylonjs.com"))
+       }
+       static _CollectCustomizations(WW) {
+         const iW = {
+           ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
+         };
+         if (mW._ShouldSkipRequestModifications(WW)) return {
+ ... (21 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L196-L197` → after: `L1404-L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1404-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1404-L1440) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L196-L197)

```diff
-       set radiusScale(ee) {
-         this._radiusScale = ee
+       static async FetchAsync(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const OW = iW.method ?? "GET";
+         if ("undefined" !== typeof fetch) {
+           const {
+             url: EW,
+             headers: NW
+           } = mW._CollectCustomizations(mW._CleanUrl(WW), iW.headers ?? {});
+           return await fetch(EW, {
+             method: OW,
+             headers: NW,
+             body: iW.body ?? void 0
+           })
+         }
+         return await new Promise(((EW, NW) => {
+           const PW = new mW;
+ ... (21 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L199-L200` → after: `L1442-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1442-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1442-L1443) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L199-L200)

```diff
-       get radiusScale() {
-         return this._radiusScale
+       get requestURL() {
+         return this._requestURL
```

#### 41. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L202-L203` → after: `L1445-L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1445-L1446) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L202-L203)

```diff
-       set positionScale(ee) {
-         this._positionScale = ee
+       get onprogress() {
+         return this._xhr.onprogress
```

#### 42. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L205-L206` → after: `L1448-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1448-L1449) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L205-L206)

```diff
-       get positionScale() {
-         return this._positionScale
+       set onprogress(WW) {
+         this._xhr.onprogress = WW
```

#### 43. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L208-L209` → after: `L1451-L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1451-L1452) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L208-L209)

```diff
-       set defaultElevation(ee) {
-         this._defaultElevation = ee
+       get readyState() {
+         return this._xhr.readyState
```

#### 44. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L211-L212` → after: `L1454-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1454-L1455) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L211-L212)

```diff
-       get defaultElevation() {
-         return this._defaultElevation
+       get status() {
+         return this._xhr.status
```

#### 45. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L214-L215` → after: `L1457-L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1457-L1458) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L214-L215)

```diff
-       set elevationReturnTime(ee) {
-         this._elevationReturnTime = ee
+       get statusText() {
+         return this._xhr.statusText
```

#### 46. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L217-L218` → after: `L1460-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1460-L1461) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L217-L218)

```diff
-       get elevationReturnTime() {
-         return this._elevationReturnTime
+       get response() {
+         return this._xhr.response
```

#### 47. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L220-L221` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1463-L1464) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L220-L221)

```diff
-       set elevationReturnWaitTime(ee) {
-         this._elevationReturnWaitTime = ee
+       get responseURL() {
+         return this._xhr.responseURL
```

#### 48. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L223-L224` → after: `L1466-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1466-L1467) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L223-L224)

```diff
-       get elevationReturnWaitTime() {
-         return this._elevationReturnWaitTime
+       get responseText() {
+         return this._xhr.responseText
```

#### 49. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L226-L227` → after: `L1469-L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1469-L1470) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L226-L227)

```diff
-       set zoomStopsAnimation(ee) {
-         this._zoomStopsAnimation = ee
+       get responseType() {
+         return this._xhr.responseType
```

#### 50. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L229-L230` → after: `L1472-L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1472-L1473) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L229-L230)

```diff
-       get zoomStopsAnimation() {
-         return this._zoomStopsAnimation
+       set responseType(WW) {
+         this._xhr.responseType = WW
```

#### 51. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L232-L233` → after: `L1475-L1476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1475-L1476) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L232-L233)

```diff
-       set framingTime(ee) {
-         this._framingTime = ee
+       get timeout() {
+         return this._xhr.timeout
```

#### 52. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L235-L236` → after: `L1478-L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1478-L1479) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L235-L236)

```diff
-       get framingTime() {
-         return this._framingTime
+       set timeout(WW) {
+         this._xhr.timeout = WW
```

#### 53. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L238-L239` → after: `L1481-L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1481-L1482) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L238-L239)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+       addEventListener(WW, iW, OW) {
+         this._xhr.addEventListener(WW, iW, OW)
```

#### 54. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L241-L253` → after: `L1484-L1485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1484-L1485) · [Before (L241-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L241-L253)

```diff
-       init() {}
-       attach(ee) {
-         this._attachedCamera = ee;
-         const ie = this._attachedCamera.Xx();
-         Xe.EasingFunction.setEasingMode(Xe.EasingMode), this._onPrePointerObservableObserver = ie.onPrePointerObservable.add((ee => {
-           ee.type !== oe.c.POINTERDOWN ? ee.type === oe.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
-         })), this._onMeshTargetChangedObserver = ee.onMeshTargetChangedObservable.add((ee => {
-           ee && ee.WC && this.zoomOnMesh(ee, void 0, (() => {
-             this.onTargetFramingAnimationEndObservable.notifyObservers()
-           }))
-         })), this._onAfterCheckInputsObserver = ee.onAfterCheckInputsObservable.add((() => {
-           this._applyUserInteraction(), this._maintainCameraAboveGround()
-         }))
+       removeEventListener(WW, iW, OW) {
+         this._xhr.removeEventListener(WW, iW, OW)
```

#### 55. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L255-L331` → after: `L1487-L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1487-L1488) · [Before (L255-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L255-L331)

```diff
-       detach() {
-         if (!this._attachedCamera) return;
-         const ee = this._attachedCamera.Xx();
-         this._onPrePointerObservableObserver && ee.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserve … [truncated]
-       }
-       zoomOnMesh(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         ee.computeWorldMatrix(!0);
-         const ye = ee.WC().boundingBox;
-         this.zoomOnBoundingInfo(ye.minimumWorld, ye.maximumWorld, ie, He)
-       }
-       zoomOnMeshHierarchy(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         ee.computeWorldMatrix(!0);
- ... (61 more removed lines; see GitHub link above)
+       abort() {
+         this._xhr.abort()
```

#### 56. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L333-L334` → after: `L1490-L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1490-L1491) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L333-L334)

```diff
-       _clearAnimationLocks() {
-         this._betaIsAnimating = !1
+       send(WW) {
+         this._xhr.send(WW)
```

#### 57. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L336-L337` → after: `L1493-L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1493-L1499) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L336-L337)

```diff
-       _applyUserInteraction() {
-         this.isUserIsMoving && (this._lastInteractionTime = Re.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+       open(WW, iW, OW) {
+         const {
+           url: EW,
+           headers: NW
+         } = mW._CollectCustomizations(iW, OW);
+         this._requestURL = mW._CleanUrl(EW), this._xhr.open(WW, this._requestURL, !0);
+         for (const mW in NW) this._xhr.setRequestHeader(mW, NW[mW])
```

#### 58. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L339-L340` → after: `L1501-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1501-L1502) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L339-L340)

```diff
-       stopAllAnimations() {
-         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
+       setRequestHeader(WW, iW) {
+         this._xhr.setRequestHeader(WW, iW)
```

#### 59. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L342-L343` → after: `L1504-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1504-L1505) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L342-L343)

```diff
-       get isUserIsMoving() {
-         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       getResponseHeader(WW) {
+         return this._xhr.getResponseHeader(WW)
```

#### 60. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L346-L2236` → after: `L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R1508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/289.js#L1508) · [Before (L346-L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/289.js#L346-L2236)

```diff
-     Xe.EasingFunction = new class extends fe {
-       constructor() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
-         super(), this.exponent = ee
-       }
-       easeInCore(ee) {
-         return this.exponent <= 0 ? ee : (Math.exp(this.exponent * ee) - 1) / (Math.exp(this.exponent) - 1)
-       }
-     }, Xe.EasingMode = fe.EASINGMODE_EASEINOUT, Xe.IgnoreBoundsSizeMode = 0, Xe.FitFrustumSidesMode = 1;
-     var ze = He(41320),
-       Be = He(41311),
-       Ee = He(41350),
-       ge = He(41203);
-     let Oe = (() => {
-         var ee;
-         let ie, He = [],
- ... (1875 more removed lines; see GitHub link above)
+     mW.CustomRequestHeaders = {}, mW.CustomRequestModifiers = new Array, mW.SkipRequestModificationForBabylonCDN = !0
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/290.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/290.js` (57 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b)

#### 1. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L4)

```diff
-   41515: (ee, ie, He) => {
+   41626: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L6)

```diff
-       e: () => be
+       b: () => NW
```

#### 3. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L8-L77` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L8-L19) · [Before (L8-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L8-L77)

```diff
-     var ye = He(41129);
- 
-     function be(ee) {
-       return class extends ee {
-         constructor() {
-           super(...arguments);
-           const ee = new.target;
-           if (!ee[Symbol.metadata]) {
-             const ie = Object.getPrototypeOf(ee)?.[Symbol.metadata];
-             ee[Symbol.metadata] = ie ? Object.create(ie) : {}
-           }
-           const ie = (0, ye.b)(ee[Symbol.metadata]);
-           ie._imageProcessingConfiguration || (ie._imageProcessingConfiguration = {
-             type: 9,
-             sourceName: void 0
-           })
- ... (54 more removed lines; see GitHub link above)
+     var mW = OW(39911),
+       EW = OW(38299);
+     class NW {
+       static Instantiate(WW) {
+         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[WW]) return this.RegisteredExternalClasses[WW];
+         const iW = (0, EW.d)(WW);
+         if (iW) return iW;
+         mW.b.Warn(WW + " not found, you may have missed an import.");
+         const OW = WW.split(".");
+         let NW = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
+         for (let mW = 0, EW = OW.length; mW < EW; mW++) NW = NW[OW[mW]];
+         return "function" !== typeof NW ? null : NW
```

#### 4. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L81` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L24) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L81)

```diff
-   41400: (ee, ie, He) => {
+   41431: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L83-L84` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L26) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L83-L84)

```diff
-       d: () => Me,
-       e: () => be
+       d: () => EW
```

#### 6. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L89-L93` → after: `L49-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L49-L51) · [Before (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L89-L93)

```diff
-       return class extends ee {
-         constructor() {
-           super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING … [truncated]
-         }
-       }
+       const iW = PW(WW),
+         OW = LW(WW);
+       return iW - WW > WW - OW ? OW : iW
```

#### 7. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L95-L98` → after: `L53-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L53-L55) · [Before (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L95-L98)

```diff
-     class Me extends ye.e {
-       constructor() {
-         super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this. … [truncated]
-       }
+ 
+     function PW(WW) {
+       return WW--, WW |= WW >> 1, WW |= WW >> 2, WW |= WW >> 4, WW |= WW >> 8, WW |= WW >> 16, ++WW
```

#### 8. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L100-L115` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L57-L59) · [Before (L100-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L100-L115)

```diff
-   },
-   41483: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Re
-     });
-     var ye = He(41113),
-       be = He(41414),
-       Me = He(41121),
-       Ke = He(41466),
-       Ue = He(41406),
-       Fe = He(41490),
-       Je = He(41451);
-     class oe extends Ue.e {
-       constructor() {
-         super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
-       }
+ 
+     function LW(WW) {
+       return WW |= WW >> 1, WW |= WW >> 2, WW |= WW >> 4, WW |= WW >> 8, (WW |= WW >> 16) - (WW >> 1)
```

#### 9. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L117-L294` → after: `L61-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L61-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L61-L82) · [Before (L117-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L117-L294)

```diff
-     let Re = (() => {
-       var ee, ie, He, Ue;
-       let Re, ke, qe, fe, Te, pe, Xe = Fe.b,
-         ze = [],
-         Be = [],
-         Ee = [],
-         ge = [],
-         Oe = [],
-         de = [],
-         We = [],
-         te = [],
-         Ze = [],
-         we = [],
-         De = [],
-         Pe = [];
-       return ee = class extends Xe {
- ... (162 more removed lines; see GitHub link above)
+ 
+     function cW(WW, iW) {
+       let OW;
+       switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
+         case 1:
+           OW = LW(WW);
+           break;
+         case 2:
+           OW = NW(WW);
+           break;
+         default:
+           OW = PW(WW)
+       }
+       return Math.min(OW, iW)
+     }
+     OW.d(iW, {
+ ... (6 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L296` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L84) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L296)

```diff
-   41406: (ee, ie, He) => {
+   41620: (WW, iW, OW) => {
```

#### 11. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L298` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L86-L89) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L298)

```diff
-       e: () => ye
+       b: () => sW,
+       c: () => KW,
+       f: () => UW,
+       h: () => kW
```

#### 12. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L301-L303` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L105-L106) · [Before (L301-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L301-L303)

```diff
-       constructor(ee) {
-         if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, … [truncated]
-           for (const ie in ee) Object.prototype.hasOwnProperty.call(ee, ie) && this._setDefaultValue(ie)
+       static get BaseUrl() {
+         return xW.f.BaseUrl
```

#### 13. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L305-L306` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L108-L109) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L305-L306)

```diff
-       get isDirty() {
-         return this._isDirty
+       static set BaseUrl(WW) {
+         xW.f.BaseUrl = WW
```

#### 14. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L308-L309` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L111-L112) · [Before (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L308-L309)

```diff
-       markAsProcessed() {
-         this._isDirty = !1, this._areAttributesDirty = !1, this._areTexturesDirty = !1, this._areFresnelDirty = !1, this._areLightsDirty = !1, this._areLightsDisposed = !1, this._areMiscDirty = !1, this._arePrePassDirty = !1, this._areImageProcessingDirty = !1
+       static get CleanUrl() {
+         return xW.f.CleanUrl
```

#### 15. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L311-L312` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L114-L115) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L311-L312)

```diff
-       markAsUnprocessed() {
-         this._isDirty = !0
+       static set CleanUrl(WW) {
+         xW.f.CleanUrl = WW
```

#### 16. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L314-L315` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L117-L118) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L314-L315)

```diff
-       markAllAsDirty() {
-         this._areTexturesDirty = !0, this._areAttributesDirty = !0, this._areLightsDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._isDirty = !0
+       static IsAbsoluteUrl(WW) {
+         return 0 === WW.indexOf("//") || -1 !== WW.indexOf("://") && (-1 !== WW.indexOf(".") && (-1 !== WW.indexOf("/") && (!(WW.indexOf(":") > WW.indexOf("/")) && (WW.indexOf("://") < WW.indexOf(".") || (0 === WW.indexOf("data:") || 0 === WW.indexOf("blob:"))))))
```

#### 17. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L317-L318` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L120-L121) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L317-L318)

```diff
-       markAsImageProcessingDirty() {
-         this._areImageProcessingDirty = !0, this._isDirty = !0
+       static set ScriptBaseUrl(WW) {
+         xW.f.ScriptBaseUrl = WW
```

#### 18. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L320-L322` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L123-L124) · [Before (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L320-L322)

```diff
-       markAsLightDirty() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || ee, this._isDirty = !0
+       static get ScriptBaseUrl() {
+         return xW.f.ScriptBaseUrl
```

#### 19. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L324-L325` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L126-L127) · [Before (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L324-L325)

```diff
-       markAsAttributesDirty() {
-         this._areAttributesDirty = !0, this._isDirty = !0
+       static set CDNBaseUrl(WW) {
+         mW.ScriptBaseUrl = WW, mW.AssetBaseUrl = WW
```

#### 20. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L327-L328` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L129-L130) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L327-L328)

```diff
-       markAsTexturesDirty() {
-         this._areTexturesDirty = !0, this._isDirty = !0
+       static set ScriptPreprocessUrl(WW) {
+         xW.f.ScriptPreprocessUrl = WW
```

#### 21. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L330-L331` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L132-L133) · [Before (L330-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L330-L331)

```diff
-       markAsFresnelDirty() {
-         this._areFresnelDirty = !0, this._isDirty = !0
+       static get ScriptPreprocessUrl() {
+         return xW.f.ScriptPreprocessUrl
```

#### 22. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L333-L334` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L135-L136) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L333-L334)

```diff
-       markAsMiscDirty() {
-         this._areMiscDirty = !0, this._isDirty = !0
+       static get DefaultRetryStrategy() {
+         return xW.f.DefaultRetryStrategy
```

#### 23. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L336-L337` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L138-L139) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L336-L337)

```diff
-       markAsPrePassDirty() {
-         this._arePrePassDirty = !0, this._isDirty = !0
+       static set DefaultRetryStrategy(WW) {
+         xW.f.DefaultRetryStrategy = WW
```

#### 24. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L339-L343` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L141-L142) · [Before (L339-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L339-L343)

```diff
-       rebuild() {
-         this._keys.length = 0;
-         for (const ee of Object.keys(this)) "_" !== ee[0] && this._keys.push(ee);
-         if (this._externalProperties)
-           for (const ee in this._externalProperties) - 1 === this._keys.indexOf(ee) && this._keys.push(ee)
+       static get CorsBehavior() {
+         return xW.f.CorsBehavior
```

#### 25. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L345-L351` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L144-L145) · [Before (L345-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L345-L351)

```diff
-       isEqual(ee) {
-         if (this._keys.length !== ee._keys.length) return !1;
-         for (let ie = 0; ie < this._keys.length; ie++) {
-           const He = this._keys[ie];
-           if (this[He] !== ee[He]) return !1
-         }
-         return !0
+       static set CorsBehavior(WW) {
+         xW.f.CorsBehavior = WW
```

#### 26. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L353-L358` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L147-L148) · [Before (L353-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L353-L358)

```diff
-       cloneTo(ee) {
-         this._keys.length !== ee._keys.length && (ee._keys = this._keys.slice(0));
-         for (let ie = 0; ie < this._keys.length; ie++) {
-           const He = this._keys[ie];
-           ee[He] = this[He]
-         }
+       static get UseFallbackTexture() {
+         return ZW.d.UseFallbackTexture
```

#### 27. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L360-L375` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L150-L151) · [Before (L360-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L360-L375)

```diff
-       reset() {
-         for (const ee of this._keys) this._setDefaultValue(ee)
-       }
-       _setDefaultValue(ee) {
-         const ie = this._externalProperties?.[ee]?.type ?? typeof this[ee],
-           He = this._externalProperties?.[ee]?.default;
-         switch (ie) {
-           case "number":
-             this[ee] = He ?? 0;
-             break;
-           case "string":
-             this[ee] = He ?? "";
-             break;
-           default:
-             this[ee] = He ?? !1
-         }
+       static set UseFallbackTexture(WW) {
+         ZW.d.UseFallbackTexture = WW
```

#### 28. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L377-L391` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L153-L154) · [Before (L377-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L377-L391)

```diff
-       toString() {
-         let ee = "";
-         for (let ie = 0; ie < this._keys.length; ie++) {
-           const He = this._keys[ie],
-             ye = this[He];
-           switch (typeof ye) {
-             case "number":
-             case "string":
-               ee += "#define " + He + " " + ye + "\n";
-               break;
-             default:
-               ye && (ee += "#define " + He + "\n")
-           }
-         }
-         return ee
+       static get RegisteredExternalClasses() {
+         return AW.b.RegisteredExternalClasses
```

#### 29. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L393-L445` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L156-L157) · [Before (L393-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L393-L445)

```diff
-     }
-   },
-   41499: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ue,
-       d: () => Ke,
-       e: () => Me
-     });
-     var ye, be = He(37917);
- 
-     function Me(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
-       const ye = ie(ee);
-       if (!Number.isInteger(ye) || ye < 0 || ye > He) throw new Error(`Invalid geometry object ID ${ye} for mesh "${ee.name}". Object IDs must be integers between 0 and 0x${He.toString(16).toUpperCase()}.`);
-       return ye
-     }
- ... (37 more removed lines; see GitHub link above)
+       static set RegisteredExternalClasses(WW) {
+         AW.b.RegisteredExternalClasses = WW
```

#### 30. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L447-L449` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L159-L160) · [Before (L447-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L447-L449)

```diff
-       static _PrepareStringDefines(ee, ie) {
-         const He = Ue._Configurations[ee];
-         return !!He?._defines && (ie.push(He._defines), !0)
+       static get fallbackTexture() {
+         return ZW.d.FallbackTexture
```

#### 31. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L451-L453` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L162-L163) · [Before (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L451-L453)

```diff
-       static _BindAttachmentsForEffect(ee, ie) {
-         const He = Ue._Configurations[ee.currentRenderPassId];
-         return !He?._attachments || (ee.bindAttachments(ie._multiTarget ? He._attachments : He._colorAttachments), ie._multiTarget || void 0 !== He.defines.PREPASS_COLOR_INDEX)
+       static set fallbackTexture(WW) {
+         ZW.d.FallbackTexture = WW
```

#### 32. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L455-L457` → after: `L165-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L165-L167) · [Before (L455-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L455-L457)

```diff
-       static _RestoreAttachments(ee) {
-         const ie = Ue._Configurations[ee.currentRenderPassId];
-         ie?._colorAttachments && ee.bindAttachments(ie._colorAttachments)
+       static FetchToRef(WW, iW, OW, mW, EW, NW) {
+         const PW = 4 * ((Math.abs(WW) * OW % OW | 0) + (Math.abs(iW) * mW % mW | 0) * OW);
+         NW.r = EW[PW] / 255, NW.g = EW[PW + 1] / 255, NW.b = EW[PW + 2] / 255, NW.a = EW[PW + 3] / 255
```

#### 33. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L459-L461` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L169-L170) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L459-L461)

```diff
-       static _BindColorAttachments(ee) {
-         const ie = Ue._Configurations[ee.currentRenderPassId];
-         return !ie?._colorAttachments || (ee.bindAttachments(ie._colorAttachments), void 0 !== ie.defines.PREPASS_COLOR_INDEX)
+       static Mix(WW, iW, OW) {
+         return 0
```

#### 34. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L463-L465` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L172-L173) · [Before (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L463-L465)

```diff
-       static _IsColorAttachmentEnabled(ee) {
-         const ie = Ue._Configurations[ee.currentRenderPassId];
-         return !ie?._colorAttachments || void 0 !== ie.defines.PREPASS_COLOR_INDEX
+       static Instantiate(WW) {
+         return AW.b.Instantiate(WW)
```

#### 35. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L467-L472` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L175-L176) · [Before (L467-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L467-L472)

```diff
-       static _BindZeroAlphaDiscard(ee, ie) {
-         const He = Ue._Configurations[ee.currentRenderPassId];
-         if (!He) return;
-         const ye = ee.getAlphaMode(),
-           be = void 0 === He.defines.PREPASS_COLOR_INDEX || 2 === ye || 1 === ye || 17 === ye;
-         ie.setFloat("geometryZeroAlphaDiscard", be ? 1 : 0)
+       static SetImmediate(WW) {
+         lW.d.SetImmediate(WW)
```

#### 36. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L474-L475` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L178-L179) · [Before (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L474-L475)

```diff
-       static AddUniformsAndSamplers(ee, ie) {
-         ee.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
+       static IsExponentOfTwo(WW) {
+         return !0
```

#### 37. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L477-L523` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L181-L182) · [Before (L477-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L477-L523)

```diff
-       static MarkAsDirty(ee, ie) {
-         for (const He of ie)
-           if (He.pW)
-             for (const ie of He.pW) ie._removeDrawWrapper(ee)
-       }
-       static PrepareDefines(ee, ie, He) {
-         if (!He._arePrePassDirty) return;
-         const ye = Ue._Configurations[ee];
-         if (!ye) return;
-         He.PREPASS = !0;
-         let be = 0;
-         for (let Me = 0; Me < Ue.GeometryTextureDescriptions.length; Me++) {
-           const ee = Ue.GeometryTextureDescriptions[Me],
-             ie = ee.define,
-             Ke = ee.defineIndex,
-             Fe = ye.defines[Ke];
- ... (31 more removed lines; see GitHub link above)
+       static FloatRound(WW) {
+         return Math.fround(WW)
```

#### 38. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L525-L664` → after: `L184-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L184-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L184-L186) · [Before (L525-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L525-L664)

```diff
-     }
-     Ue.GeometryTextureDescriptions = [{
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
- ... (124 more removed lines; see GitHub link above)
+       static GetFilename(WW) {
+         const iW = WW.lastIndexOf("/");
+         return iW < 0 ? WW : WW.substring(iW + 1)
```

#### 39. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L666-L669` → after: `L188-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L188-L191) · [Before (L666-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L666-L669)

```diff
-       _handlePluginEventIsReadyForSubMesh(ee) {
-         let ie = !0;
-         for (const He of this._activePlugins) ie = ie && He.isReadyForSubMesh(ee.defines, this._scene, this._engine, ee.subMesh);
-         ee.isReadyForSubMesh = ie
+       static GetFolderPath(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const OW = WW.lastIndexOf("/");
+         return OW < 0 ? iW ? WW : "" : WW.substring(0, OW + 1)
```

#### 40. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L671-L672` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L193-L194) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L671-L672)

```diff
-       _handlePluginEventPrepareDefinesBeforeAttributes(ee) {
-         for (const ie of this._activePlugins) ie.prepareDefinesBeforeAttributes(ee.defines, this._scene, ee.mesh)
+       static ToDegrees(WW) {
+         return 180 * WW / Math.PI
```

#### 41. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L674-L675` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L196-L197) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L674-L675)

```diff
-       _handlePluginEventPrepareDefines(ee) {
-         for (const ie of this._activePlugins) ie.prepareDefines(ee.defines, this._scene, ee.mesh)
+       static ToRadians(WW) {
+         return WW * Math.PI / 180
```

#### 42. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L677-L678` → after: `L199-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L199-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L199-L203) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L677-L678)

```diff
-       _handlePluginEventHardBindForSubMesh(ee) {
-         for (const ie of this._activePluginsForExtraEvents) ie.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, ee.subMesh)
+       static SmoothAngleChange(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
+         const mW = this.ToRadians(WW),
+           EW = this.ToRadians(iW);
+         return this.ToDegrees(Math.atan2((1 - OW) * Math.sin(EW) + OW * Math.sin(mW), (1 - OW) * Math.cos(EW) + OW * Math.cos(mW)))
```

#### 43. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L680-L681` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L205-L206) · [Before (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L680-L681)

```diff
-       _handlePluginEventBindForSubMesh(ee) {
-         for (const ie of this._activePlugins) ie.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, ee.subMesh)
+       static MakeArray(WW, iW) {
+         return !0 === iW || void 0 !== WW && null != WW ? Array.isArray(WW) ? WW : [WW] : null
```

#### 44. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L683-L687` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L208-L209) · [Before (L683-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L683-L687)

```diff
-       _handlePluginEventHasRenderTargetTextures(ee) {
-         let ie = !1;
-         for (const He of this._activePluginsForExtraEvents)
-           if (ie = He.hasRenderTargetTextures(), ie) break;
-         ee.hasRenderTargetTextures = ie
+       static GetPointerPrefix(WW) {
+         return (0, NW.j)() && !window.PointerEvent ? "mouse" : "pointer"
```

#### 45. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L689-L690` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L211-L212) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L689-L690)

```diff
-       _handlePluginEventFillRenderTargetTextures(ee) {
-         for (const ie of this._activePluginsForExtraEvents) ie.fillRenderTargetTextures(ee.renderTargets)
+       static SetCorsBehavior(WW, iW) {
+         (0, xW.H)(WW, iW)
```

#### 46. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L692-L759` → after: `L214-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L214-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L214-L243) · [Before (L692-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L692-L759)

```diff
-       _handlePluginEvent(ee, ie) {
-         switch (ee) {
-           case 512: {
-             const ee = ie;
-             for (const ie of this._activePlugins) ie.getActiveTextures(ee.activeTextures);
-             break
-           }
-           case 256: {
-             const ee = ie;
-             for (const ie of this._activePlugins) ie.getAnimatables(ee.animatables);
-             break
-           }
-           case 1024: {
-             const ee = ie;
-             let He = !1;
-             for (const ie of this._activePlugins)
- ... (52 more removed lines; see GitHub link above)
+       static SetReferrerPolicyBehavior(WW, iW) {
+         iW.referrerPolicy = WW
+       }
+       static get PreprocessUrl() {
+         return xW.f.PreprocessUrl
+       }
+       static set PreprocessUrl(WW) {
+         xW.f.PreprocessUrl = WW
+       }
+       static LoadImage(WW, iW, OW, mW, EW, NW) {
+         return (0, xW.s)(WW, iW, OW, mW, EW, NW)
+       }
+       static LoadFile(WW, iW, OW, mW, EW, NW) {
+         return (0, xW.o)(WW, iW, OW, mW, EW, NW)
+       }
+       static async LoadFileAsync(WW) {
+ ... (14 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L762-L792` → after: `L247-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L247-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L247-L275) · [Before (L762-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L762-L792)

```diff
-       _collectPointNames(ee, ie) {
-         if (ie)
-           for (const He in ie) this._codeInjectionPoints[ee] || (this._codeInjectionPoints[ee] = {}), this._codeInjectionPoints[ee][He] = !0
-       }
-       _injectCustomCode(ee, ie) {
-         return (He, ye) => {
-           ie && (ye = ie(He, ye)), this._uboDeclaration && (ye = ye.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (ye = ye.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
-           const be = this._codeInjectionPoints?.[He];
-           if (!be) return ye;
-           let Fe = null;
-           for (let ie in be) {
-             let be = "";
-             for (const ye of this._activePlugins) {
-               const Ue = this._material.shaderLanguage;
-               let Je = ye.getCustomCode(He, Ue)?.[ie];
-               Je && (ye.resolveIncludes && (null === Fe && (Fe = {
- ... (15 more removed lines; see GitHub link above)
+       static GetBabylonScriptURL(WW, iW) {
+         if (!WW) return "";
+         if (WW.startsWith(mW._DefaultCdnUrl))
+           if (mW.ScriptBaseUrl) {
+             const iW = mW.ScriptBaseUrl.endsWith("/") ? mW.ScriptBaseUrl.slice(0, -1) : mW.ScriptBaseUrl;
+             WW = WW.replace(mW._DefaultCdnUrl, iW)
+           } else if (mW._CdnVersion) {
+           const iW = `${mW._DefaultCdnUrl}/v${mW._CdnVersion}`;
+           WW.startsWith(iW) || (WW = WW.replace(mW._DefaultCdnUrl, iW))
+         }
+         return WW = mW.ScriptPreprocessUrl(WW), iW && !mW.IsAbsoluteUrl(WW) && (WW = mW.GetAbsoluteUrl(WW)), WW
+       }
+       static LoadBabylonScript(WW, iW, OW, EW) {
+         WW = mW.GetBabylonScriptURL(WW), mW.LoadScript(WW, iW, OW)
+       }
+       static async LoadBabylonScriptAsync(WW) {
+ ... (13 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L794-L817` → after: `L277-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L277-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L277-L491) · [Before (L794-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L794-L817)

```diff
-             if (be.length > 0)
-               if ("!" === ie.charAt(0)) {
-                 ie = ie.substring(1);
-                 let ee = "g";
-                 if ("!" === ie.charAt(0)) ee = "", ie = ie.substring(1);
-                 else {
-                   const He = Ue.exec(ie);
-                   He && He.length >= 2 && (ee = He[1], ie = ie.substring(ee.length + 1))
-                 }
-                 ee.indexOf("g") < 0 && (ee += "g");
-                 const He = new RegExp(ie, ee);
-                 let Me = He.exec(ye);
-                 for (; null !== Me;) {
-                   const {
-                     index: ee
-                   } = Me, ie = Je(be, Me);
- ... (8 more removed lines; see GitHub link above)
+           }), void 0, void 0, !1, ((WW, iW) => {
+             OW && OW("LoadScript Error", iW)
+           }))
+         }
+       }
+       static _LoadScriptWeb(WW, iW, OW, mW) {
+         let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if ("function" === typeof importScripts) {
+           try {
+             importScripts(WW), iW && iW()
+           } catch (cW) {
+             OW?.(`Unable to load script '${WW}' in worker`, cW)
+           }
+           return
+         }
+         if (!(0, NW.j)()) return void OW?.(`Cannot load script '${WW}' outside of a window or a worker`);
+ ... (199 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L820-L906` → after: `L495-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L495-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L495-L511) · [Before (L820-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L820-L906)

```diff
-     }
-     Fe._MaterialPluginClassToMainDefine = {}, Fe._MaterialPluginCounter = 0;
- 
-     function Je(ee, ie) {
-       return ee.replace(/\$(\d+)/g, ((ee, He) => {
-         const ye = Number(He);
-         return ye < ie.length ? ie[ye] : ""
-       }))
-     }
-     var oe = He(41141),
-       Re = He(37949);
-     let ke = (() => {
-         var ee;
-         let ie, He, Me, Ke, Ue = [],
-           Je = [],
-           Re = [],
- ... (71 more removed lines; see GitHub link above)
+       static _EndUserMark(WW) {
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && mW._Performance.mark && (mW._Performance.mark(WW + "-End"), mW._Performance.measure(WW, WW + "-Begin", WW + "-End"))
+       }
+       static _StartPerformanceConsole(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         iW && (mW._StartUserMark(WW, iW), console.time && console.time(WW))
+       }
+       static _EndPerformanceConsole(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         iW && (mW._EndUserMark(WW, iW), console.timeEnd(WW))
+       }
+       static _StartMarkNative(WW) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
+           if (mW._NativePerformanceCounterHandles.has(WW)) mW.Warn(`Performance counter with name ${WW} is already started.`);
+           else {
+             const iW = _native.startPerformanceCounter(WW);
+ ... (1 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L995-L1001` → after: `L514-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L514-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L514-L517) · [Before (L995-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L995-L1001)

```diff
-     }
-   },
-   41509: (ee, ie, He) => {
-     function ye(ee) {
-       return class extends ee {
-         constructor() {
-           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
+       static _EndMarkNative(WW) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
+           const iW = mW._NativePerformanceCounterHandles.get(WW);
+           iW ? (_native.endPerformanceCounter(iW), mW._NativePerformanceCounterHandles.delete(WW)) : mW.Warn(`Performance counter with name ${WW} was not started.`)
```

#### 51. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L1004-L1054` → after: `L520-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L520-L521) · [Before (L1004-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L1004-L1054)

```diff
-     }
-     He.d(ie, {
-       d: () => ye
-     })
-   },
-   41380: (ee, ie, He) => {
-     He.d(ie, {
-       StandardMaterial: () => ye.h
-     });
-     var ye = He(41382);
-     (0, ye.d)()
-   },
-   41382: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => xe,
-       h: () => ae
- ... (35 more removed lines; see GitHub link above)
+       static get Now() {
+         return cW.d.Now
```

#### 52. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L1056-L1263` → after: `L523-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L523-L529) · [Before (L1056-L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L1056-L1263)

```diff
-     }
-     class Ve extends((0, Ze.e)(fe.c)) {}
-     let ae = (() => {
-         var ee, ie, oe, qe, We, te, Ze, we, De, Ae, ae, ce, xe, Le, Ce, ve, ue, me, le, Se, ne, je, se, Ie, he, Ne, Ge, re, Qe, ei, ii, Hi, yi;
-         let bi, Mi, Ki, Ui, Fi, Ji, oi, Ri, ki, qi, fi, Ti, Xi, zi, Bi, Ei, gi, Oi, di, Wi, ti, Zi, wi, Di, Pi, Ai, Yi, Vi, ai, ci, xi, Li, Ci, vi, ui, mi, li, Si, ni, ji, si, Ii, Ni, Gi, ri, Qi, eH, iH, HH, yH, bH, MH, KH, UH, FH, JH, oH, RH, kH, qH, fH, TH, pH, XH, zH, BH, EH,  … [truncated]
-           DH = [],
-           PH = [],
-           AH = [],
-           YH = [],
-           VH = [],
-           aH = [],
-           cH = [],
-           xH = [],
-           LH = [],
-           CH = [],
-           vH = [],
- ... (192 more removed lines; see GitHub link above)
+       static GetClassName(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = null;
+         if (!iW && WW.getClassName) OW = WW.getClassName();
+         else {
+           if (WW instanceof Object) {
+             OW = (iW ? WW : Object.getPrototypeOf(WW)).constructor.__bjsclassName__
```

#### 53. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L1265-L2685` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L531) · [Before (L1265-L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L1265-L2685)

```diff
-           set useAlphaFromDiffuseTexture(ee) {
-             (0, ye.f)(this, ae, ee, "f")
-           }
-           get useEmissiveAsIllumination() {
-             return (0, ye.c)(this, ce, "f")
-           }
-           set useEmissiveAsIllumination(ee) {
-             (0, ye.f)(this, ce, ee, "f")
-           }
-           get linkEmissiveWithDiffuse() {
-             return (0, ye.c)(this, xe, "f")
-           }
-           set linkEmissiveWithDiffuse(ee) {
-             (0, ye.f)(this, xe, ee, "f")
-           }
-           get useSpecularOverAlpha() {
- ... (1405 more removed lines; see GitHub link above)
+           OW || (OW = typeof WW)
```

#### 54. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L2688-L2707` → after: `L535-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L535-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L535-L538) · [Before (L2688-L2707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L2688-L2707)

```diff
-     }
-     He.d(ie, {
-       d: () => ye
-     })
-   },
-   41497: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => ye
-     });
-     class ye {
-       constructor(ee, ie) {
-         this._webGL = {
-           load: ee,
-           loaded: !1,
-           loadPromise: null
-         }, this._webGPU = {
- ... (4 more removed lines; see GitHub link above)
+       static First(WW, iW) {
+         for (const OW of WW)
+           if (iW(OW)) return OW;
+         return null
```

#### 55. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L2709-L2712` → after: `L540-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L540-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L540-L550) · [Before (L2709-L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L2709-L2712)

```diff
-       getLoadCallback(ee) {
-         const ie = 1 === ee ? this._webGPU : this._webGL;
-         return ie.loaded ? void 0 : async () => {
-           await this._loadAsync(ie)
+       static getFullClassName(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = null,
+           mW = null;
+         if (!iW && WW.getClassName) OW = WW.getClassName();
+         else {
+           if (WW instanceof Object) {
+             const EW = iW ? WW : Object.getPrototypeOf(WW);
+             OW = EW.constructor.__bjsclassName__, mW = EW.constructor.__bjsmoduleName__
+           }
+           OW || (OW = typeof WW)
```

#### 56. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L2715-L2725` → after: `L554-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L554-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L554-L559) · [Before (L2715-L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L2715-L2725)

```diff
-       async _loadAsync(ee) {
-         if (ee.loaded) return;
-         let ie = ee.loadPromise;
-         const He = null === ie;
-         He && (ie = Promise.all(ee.load()), ee.loadPromise = ie);
-         let ye = !1;
-         try {
-           await ie, ye = !0
-         } finally {
-           He && this._completeLoad(ee, ye)
-         }
+       static async DelayAsync(WW) {
+         await new Promise((iW => {
+           setTimeout((() => {
+             iW()
+           }), WW)
+         }))
```

#### 57. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L2727-L2728` → after: `L561-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/290.js#L561-L562) · [Before (L2727-L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/290.js#L2727-L2728)

```diff
-       _completeLoad(ee, ie) {
-         ee.loaded = ie, ee.loadPromise = null
+       static IsSafari() {
+         return !!(0, NW.i)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/291.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/291.js` (174 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4)

#### 1. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L4)

```diff
-   41424: (ee, ie, He) => {
+   41940: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L8-L142` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L8) · [Before (L8-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L8-L142)

```diff
-     class ye {
-       constructor(ee, ie, He) {
-         this.bu = ee, this.bv = ie, this.distance = He, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
-       }
-     }
-   },
-   41437: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(37925),
-       be = He(37917),
-       Me = He(37920);
-     class Ke {
-       constructor(ee, ie, He) {
-         this.vectors = (0, ye.c)(8, be.p.Zero), this.center = be.p.Zero(), this.centerWorld = be.p.Zero(), this.extendSize = be.p.Zero(), this.extendSizeWorld = be.p.Zero(), this.directions = (0, ye.c)(3, be.p.Zero), this.vectorsWorld = (0, ye.c)(8, be.p.Zero), this.minimumWorld  … [truncated]
- ... (119 more removed lines; see GitHub link above)
+     let mW = !1
```

#### 3. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L144` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L10) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L144)

```diff
-   41429: (ee, ie, He) => {
+   41511: (WW, iW, OW) => {
```

#### 4. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L148-L224` → after: `L14-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L14-L20) · [Before (L148-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L148-L224)

```diff
-     var ye = He(37925),
-       be = He(37917),
-       Me = He(41437);
-     class Ke {
-       constructor(ee, ie, He) {
-         this.center = be.p.Zero(), this.centerWorld = be.p.Zero(), this.minimum = be.p.Zero(), this.maximum = be.p.Zero(), this.reConstruct(ee, ie, He)
-       }
-       reConstruct(ee, ie, He) {
-         this.minimum.jD(ee), this.maximum.jD(ie);
-         const ye = be.p.Distance(ee, ie);
-         ie.addToRef(ee, this.center).scaleInPlace(.5), this.radius = .5 * ye, this._update(He || be.b.IdentityReadOnly)
-       }
-       scale(ee) {
-         const ie = Ke._TmpVector3,
-           He = this.maximum.subtractToRef(this.minimum, ie[0]),
-           ye = He.length();
- ... (61 more removed lines; see GitHub link above)
+     var mW = OW(41516),
+       EW = OW(41519),
+       NW = OW(38276),
+       PW = OW(38241),
+       LW = OW(38270),
+       cW = OW(39088),
+       wW = OW(41531);
```

#### 5. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L226-L230` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L22-L23) · [Before (L226-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L226-L230)

```diff
-       constructor(ee, ie, He) {
-         this._isLocked = !1, this.boundingBox = new Me.d(ee, ie, He), this.OMe = new Ke(ee, ie, He)
-       }
-       reConstruct(ee, ie, He) {
-         this.boundingBox.reConstruct(ee, ie, He), this.OMe.reConstruct(ee, ie, He)
+       get wrapU() {
+         return this._wrapU
```

#### 6. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L232-L233` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L25-L26) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L232-L233)

```diff
-       get minimum() {
-         return this.boundingBox.minimum
+       set wrapU(WW) {
+         this._wrapU = WW
```

#### 7. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L235-L236` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L28-L29) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L235-L236)

```diff
-       get maximum() {
-         return this.boundingBox.maximum
+       get wrapV() {
+         return this._wrapV
```

#### 8. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L238-L239` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L31-L32) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L238-L239)

```diff
-       get isLocked() {
-         return this._isLocked
+       set wrapV(WW) {
+         this._wrapV = WW
```

#### 9. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L241-L242` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L34-L35) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L241-L242)

```diff
-       set isLocked(ee) {
-         this._isLocked = ee
+       get coordinatesMode() {
+         return 0
```

#### 10. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L244-L245` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L37-L38) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L244-L245)

```diff
-       update(ee) {
-         this._isLocked || (this.boundingBox._update(ee), this.OMe._update(ee))
+       get isCube() {
+         return !!this._texture && this._texture.isCube
```

#### 11. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L247-L250` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L40-L41) · [Before (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L247-L250)

```diff
-       centerOn(ee, ie) {
-         const He = Re._TmpVector3[0].jD(ee).XMe(ie),
-           ye = Re._TmpVector3[1].jD(ee).addInPlace(ie);
-         return this.boundingBox.reConstruct(He, ye, this.boundingBox.getWorldMatrix()), this.OMe.reConstruct(He, ye, this.boundingBox.getWorldMatrix()), this
+       set isCube(WW) {
+         this._texture && (this._texture.isCube = WW)
```

#### 12. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L252-L255` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L43-L44) · [Before (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L252-L255)

```diff
-       encapsulate(ee) {
-         const ie = be.p.Minimize(this.minimum, ee),
-           He = be.p.Maximize(this.maximum, ee);
-         return this.reConstruct(ie, He, this.boundingBox.getWorldMatrix()), this
+       get is3D() {
+         return !!this._texture && this._texture.is3D
```

#### 13. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L257-L264` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L46-L47) · [Before (L257-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L257-L264)

```diff
-       encapsulateBoundingInfo(ee) {
-         const ie = be.j.Matrix[0];
-         this.boundingBox.getWorldMatrix().invertToRef(ie);
-         const He = be.j.rf[0];
-         return be.p.TransformCoordinatesToRef(ee.boundingBox.minimumWorld, ie, He), this.encapsulate(He), be.p.TransformCoordinatesToRef(ee.boundingBox.maximumWorld, ie, He), this.encapsulate(He), this
-       }
-       scale(ee) {
-         return this.boundingBox.scale(ee), this.OMe.scale(ee), this
+       set is3D(WW) {
+         this._texture && (this._texture.is3D = WW)
```

#### 14. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L266-L270` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L49-L50) · [Before (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L266-L270)

```diff
-       isInFrustum(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         if ((2 === ie || 3 === ie) && this.OMe.isCenterInFrustum(ee)) return !0;
-         if (!this.OMe.isInFrustum(ee)) return !1;
-         return !(1 !== ie && 3 !== ie) || this.boundingBox.isInFrustum(ee)
+       get is2DArray() {
+         return !!this._texture && this._texture.is2DArray
```

#### 15. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L272-L274` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L52-L53) · [Before (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L272-L274)

```diff
-       get diagonalLength() {
-         const ee = this.boundingBox;
-         return ee.maximumWorld.subtractToRef(ee.minimumWorld, Re._TmpVector3[0]).length()
+       set is2DArray(WW) {
+         this._texture && (this._texture.is2DArray = WW)
```

#### 16. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L276-L277` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L55-L56) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L276-L277)

```diff
-       isCompletelyInFrustum(ee) {
-         return this.boundingBox.isCompletelyInFrustum(ee)
+       getClassName() {
+         return "ThinTexture"
```

#### 17. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L279-L280` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L58-L59) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L279-L280)

```diff
-       _checkCollision(ee) {
-         return ee._canDoCollision(this.OMe.centerWorld, this.OMe.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
+       static _IsRenderTargetWrapper(WW) {
+         return void 0 !== WW?.shareDepth
```

#### 18. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L282-L283` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L61-L62) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L282-L283)

```diff
-       intersectsPoint(ee) {
-         return !!this.OMe.centerWorld && (!!this.OMe.intersectsPoint(ee) && !!this.boundingBox.intersectsPoint(ee))
+       constructor(WW) {
+         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = wW.d.Zero(), this._cachedBaseSize = wW.d.Zero(), this._initialSamplingMode = 2, this._texture = tW. … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L285-L291` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L64-L65) · [Before (L285-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L285-L291)

```diff
-       intersects(ee, ie) {
-         if (!Ke.Intersects(this.OMe, ee.OMe)) return !1;
-         if (!Me.d.Intersects(this.boundingBox, ee.boundingBox)) return !1;
-         if (!ie) return !0;
-         const He = this.boundingBox,
-           ye = ee.boundingBox;
-         return !!oe(He.directions[0], He, ye) && (!!oe(He.directions[1], He, ye) && (!!oe(He.directions[2], He, ye) && (!!oe(ye.directions[0], He, ye) && (!!oe(ye.directions[1], He, ye) && (!!oe(ye.directions[2], He, ye) && (!!oe(be.p.Cross(He.directions[0], ye.directions[0]), He … [truncated]
+       isReady() {
+         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
```

#### 20. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L293-L339` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L67-L69) · [Before (L293-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L293-L339)

```diff
-     }
-     Re._TmpVector3 = (0, ye.c)(2, be.p.Zero)
-   },
-   41458: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Me,
-       f: () => Fe,
-       g: () => Ue,
-       k: () => Ke
-     });
-     var ye = He(41264),
-       be = He(37917);
- 
-     function Me(ee) {
-       -1 === ee.indexOf("vClipPlane") && ee.push("vClipPlane"), -1 === ee.indexOf("vClipPlane2") && ee.push("vClipPlane2"), -1 === ee.indexOf("vClipPlane3") && ee.push("vClipPlane3"), -1 === ee.indexOf("vClipPlane4") && ee.push("vClipPlane4"), -1 === ee.indexOf("vClipPlane5") &&  … [truncated]
-     }
- ... (31 more removed lines; see GitHub link above)
+       delayLoad() {}
+       getInternalTexture() {
+         return this._texture
```

#### 21. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L341-L349` → after: `L71-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L71-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L71-L76) · [Before (L341-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L341-L349)

```diff
-     }
-   },
-   41481: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => ye
-     });
-     class ye {
-       constructor() {
-         this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
+       getSize() {
+         if (this._texture) {
+           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
+           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
+         }
+         return this._cachedSize
```

#### 22. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L351-L352` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L78-L79) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L351-L352)

```diff
-       unBindMesh() {
-         this._mesh = null
+       getBaseSize() {
+         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L354-L355` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L81-L82) · [Before (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L354-L355)

```diff
-       addFallback(ee, ie) {
-         this._defines[ee] || (ee < this._currentRank && (this._currentRank = ee), ee > this._maxRank && (this._maxRank = ee), this._defines[ee] = new Array), this._defines[ee].push(ie)
+       get samplingMode() {
+         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
```

#### 24. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L357-L358` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L84-L86) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L357-L358)

```diff
-       addCPUSkinningFallback(ee, ie) {
-         this._mesh = ie, ee < this._currentRank && (this._currentRank = ee), ee > this._maxRank && (this._maxRank = ee)
+       updateSamplingMode(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this._texture && this._engine && this._engine.updateTextureSamplingMode(WW, this._texture, this._texture.generateMipMaps && iW)
```

#### 25. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L360-L361` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L88-L89) · [Before (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L360-L361)

```diff
-       get hasMoreFallbacks() {
-         return this._currentRank <= this._maxRank
+       releaseInternalTexture() {
+         this._texture && (this._texture.dispose(), this._texture = null)
```

#### 26. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L363-L387` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L91-L92) · [Before (L363-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L363-L387)

```diff
-       reduce(ee, ie) {
-         if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
-           this._mesh.computeBonesUsingShaders = !1, ee = ee.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), ie._bonesComputationForcedToCPU = !0;
-           const He = this._mesh.Xx();
-           for (let ee = 0; ee < He.meshes.length; ee++) {
-             const ye = He.meshes[ee];
-             if (ye.material) {
-               if (ye.computeBonesUsingShaders && 0 !== ye.numBoneInfluencers)
-                 if (ye.material.getEffect() === ie) ye.computeBonesUsingShaders = !1;
-                 else if (ye.pW)
-                 for (const ee of ye.pW) {
-                   if (ee.effect === ie) {
-                     ye.computeBonesUsingShaders = !1;
-                     break
-                   }
-                 }
- ... (9 more removed lines; see GitHub link above)
+       dispose() {
+         this._texture && (this.releaseInternalTexture(), this._engine = null)
```

#### 27. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L390-L405` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L95-L96) · [Before (L390-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L390-L405)

```diff
-   },
-   41414: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => ze
-     });
-     var ye = He(41113),
-       be = He(41121),
-       Me = He(41203),
-       Ke = He(37931),
-       Ue = He(37929),
-       Fe = He(41421),
-       Je = He(41238),
-       oe = He(39467),
-       Re = He(38590),
-       ke = He(41446),
-       qe = He(41141);
+     var ZW, xW = OW(41538),
+       lW = OW(41415);
```

#### 28. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L408-L411` → after: `L99-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L99-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L99-L142) · [Before (L408-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L408-L411)

```diff
-       let ie, He, Me, Ke, Ue, Fe, Je, oe, Re, ke, fe, Te, pe = [];
-       return ee = class {
-         constructor() {
-           this._func = (0, ye.l)(this, pe), this.reset()
+       let iW, OW, wW, ZW, lW, AW, bW, jW, UW, kW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW, nW, uW, oW, dW, eW, vW = tW,
+         gW = [],
+         DW = [],
+         VW = [],
+         pW = [],
+         fW = [],
+         CW = [],
+         XW = [],
+         BW = [],
+         qW = [],
+         RW = [],
+         GW = [],
+         IW = [],
+         aW = [],
+         rW = [],
+         zW = [],
+ ... (28 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L413-L414` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L144-L145) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L413-L414)

```diff
-         reset() {
-           this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpSt … [truncated]
+         set coordinatesIndex(WW) {
+           this._coordinatesIndex !== WW && (this._coordinatesIndex = WW, this._scene && this._scene.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))))
```

#### 30. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L416-L417` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L147-L148) · [Before (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L416-L417)

```diff
-         get func() {
-           return this._func
+         get coordinatesIndex() {
+           return this._coordinatesIndex
```

#### 31. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L419-L420` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L150-L151) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L419-L420)

```diff
-         set func(ee) {
-           this._func = ee
+         set coordinatesMode(WW) {
+           this._coordinatesMode !== WW && (this._coordinatesMode = WW, this._scene && this._scene.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))))
```

#### 32. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L422-L423` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L153-L154) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L422-L423)

```diff
-         get backFunc() {
-           return this._backFunc
+         get coordinatesMode() {
+           return this._coordinatesMode
```

#### 33. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L425-L426` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L156-L157) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L425-L426)

```diff
-         set backFunc(ee) {
-           this._backFunc = ee
+         get wrapU() {
+           return this._wrapU
```

#### 34. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L428-L429` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L159-L160) · [Before (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L428-L429)

```diff
-         get funcRef() {
-           return this._funcRef
+         set wrapU(WW) {
+           this._wrapU = WW
```

#### 35. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L431-L432` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L162-L163) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L431-L432)

```diff
-         set funcRef(ee) {
-           this._funcRef = ee
+         get wrapV() {
+           return this._wrapV
```

#### 36. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L434-L435` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L165-L166) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L434-L435)

```diff
-         get funcMask() {
-           return this._funcMask
+         set wrapV(WW) {
+           this._wrapV = WW
```

#### 37. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L437-L438` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L168-L169) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L437-L438)

```diff
-         set funcMask(ee) {
-           this._funcMask = ee
+         get isCube() {
+           return this._texture ? this._texture.isCube : this._isCube
```

#### 38. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L440-L441` → after: `L171-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L171-L172) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L440-L441)

```diff
-         get opStencilFail() {
-           return this._opStencilFail
+         set isCube(WW) {
+           this._texture ? this._texture.isCube = WW : this._isCube = WW
```

#### 39. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L443-L444` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L174-L175) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L443-L444)

```diff
-         set opStencilFail(ee) {
-           this._opStencilFail = ee
+         get is3D() {
+           return !!this._texture && this._texture.is3D
```

#### 40. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L446-L447` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L177-L178) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L446-L447)

```diff
-         get opDepthFail() {
-           return this._opDepthFail
+         set is3D(WW) {
+           this._texture && (this._texture.is3D = WW)
```

#### 41. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L449-L450` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L180-L181) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L449-L450)

```diff
-         set opDepthFail(ee) {
-           this._opDepthFail = ee
+         get is2DArray() {
+           return !!this._texture && this._texture.is2DArray
```

#### 42. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L452-L453` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L183-L184) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L452-L453)

```diff
-         get opStencilDepthPass() {
-           return this._opStencilDepthPass
+         set is2DArray(WW) {
+           this._texture && (this._texture.is2DArray = WW)
```

#### 43. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L455-L456` → after: `L186-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L186-L187) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L455-L456)

```diff
-         set opStencilDepthPass(ee) {
-           this._opStencilDepthPass = ee
+         get gammaSpace() {
+           return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
```

#### 44. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L458-L459` → after: `L189-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L189-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L189-L209) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L458-L459)

```diff
-         get backOpStencilFail() {
-           return this._backOpStencilFail
+         set gammaSpace(WW) {
+           if (this._texture) {
+             if (this._texture._gammaSpace === WW) return;
+             this._texture._gammaSpace = WW
+           } else {
+             if (this._gammaSpace === WW) return;
+             this._gammaSpace = WW
+           }
+           this.bD()?.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this)))
+         }
+         get isRGBD() {
+           return null != this._texture && this._texture._isRGBD
+         }
+         set isRGBD(WW) {
+           WW !== this.isRGBD && (this._texture && (this._texture._isRGBD = WW), this.bD()?.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))))
+         }
+ ... (5 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L461-L462` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L211-L212) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L461-L462)

```diff
-         set backOpStencilFail(ee) {
-           this._backOpStencilFail = ee
+         set lodGenerationOffset(WW) {
+           this._texture && (this._texture._lodGenerationOffset = WW)
```

#### 46. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L464-L465` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L214-L215) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L464-L465)

```diff
-         get backOpDepthFail() {
-           return this._backOpDepthFail
+         get lodGenerationScale() {
+           return this._texture ? this._texture._lodGenerationScale : 0
```

#### 47. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L467-L468` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L217-L218) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L467-L468)

```diff
-         set backOpDepthFail(ee) {
-           this._backOpDepthFail = ee
+         set lodGenerationScale(WW) {
+           this._texture && (this._texture._lodGenerationScale = WW)
```

#### 48. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L470-L471` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L220-L221) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L470-L471)

```diff
-         get backOpStencilDepthPass() {
-           return this._backOpStencilDepthPass
+         get linearSpecularLOD() {
+           return !!this._texture && this._texture._linearSpecularLOD
```

#### 49. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L473-L474` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L223-L224) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L473-L474)

```diff
-         set backOpStencilDepthPass(ee) {
-           this._backOpStencilDepthPass = ee
+         set linearSpecularLOD(WW) {
+           this._texture && (this._texture._linearSpecularLOD = WW)
```

#### 50. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L476-L477` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L226-L227) · [Before (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L476-L477)

```diff
-         get mask() {
-           return this._mask
+         get irradianceTexture() {
+           return this._texture ? this._texture._irradianceTexture : null
```

#### 51. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L479-L480` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L229-L230) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L479-L480)

```diff
-         set mask(ee) {
-           this._mask = ee
+         set irradianceTexture(WW) {
+           this._texture && (this._texture._irradianceTexture = WW)
```

#### 52. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L482-L483` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L232-L233) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L482-L483)

```diff
-         get enabled() {
-           return this._enabled
+         get uid() {
+           return this._uid || (this._uid = (0, cW.b)()), this._uid
```

#### 53. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L485-L486` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L235-L236) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L485-L486)

```diff
-         set enabled(ee) {
-           this._enabled = ee
+         toString() {
+           return this.name
```

#### 54. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L489` → after: `L239-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L239-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L239-L298) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L489)

```diff
-           return "MaterialStencilState"
+           return "BaseTexture"
+         }
+         set onDispose(WW) {
+           this._onDisposeObserver && this.jD.remove(this._onDisposeObserver), this._onDisposeObserver = this.jD.add(WW)
+         }
+         get isBlocking() {
+           return !0
+         }
+         get loadingError() {
+           return this._loadingError
+         }
+         get errorObject() {
+           return this._errorObject
+         }
+         constructor(iW) {
+           let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+ ... (44 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L491-L492` → after: `L300-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L300-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L300-L364) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L491-L492)

```diff
-         copyTo(ee) {
-           qe.c.Clone((() => ee), this)
+         _markAllSubMeshesAsTexturesDirty() {
+           const WW = this.bD();
+           WW && WW.markAllMaterialsAsDirty(1)
+         }
+         readPixels() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+             iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+             OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+             mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+             EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+             NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
+             PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
+             LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
+             cW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
+           if (!this._texture) return null;
+           const wW = this._getEngine();
+ ... (49 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L495` → after: `L367-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L367-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L367-L384) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L495)

```diff
-           return qe.c.Serialize(this)
+           let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           if (!this.name && !WW) return null;
+           const iW = xW.d.Serialize(this);
+           return xW.d.AppendSerializedAnimations(this, iW), iW
+         }
+         static WhenAllReady(WW, iW) {
+           let OW = WW.length;
+           if (0 !== OW)
+             for (let mW = 0; mW < WW.length; mW++) {
+               const EW = WW[mW];
+               if (EW.isReady()) 0 === --OW && iW();
+               else {
+                 const WW = EW.onLoadObservable;
+                 WW ? WW.addOnce((() => {
+                   0 === --OW && iW()
+                 })) : 0 === --OW && iW()
+ ... (2 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L497-L498` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L386-L387) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L497-L498)

```diff
-         parse(ee, ie, He) {
-           qe.c.Parse((() => this), ee, ie, He)
+         static _IsScene(WW) {
+           return "Scene" === WW.getClassName()
```

#### 58. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L501-L502` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L390-L391) · [Before (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L501-L502)

```diff
-         const qe = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ie = [(0, be.R)()], He = [(0, be.R)()], Me = [(0, be.R)()], Ke = [(0, be.R)()], Ue = [(0, be.R)()], Fe = [(0, be.R)()], Je = [(0, be.R)()], oe = [(0, be.R)()], Re = [(0, be.R)()], ke = [(0, be.R)()], fe = [(0, be.R)()], Te = [(0, be.R)()], (0, ye.i)(ee, null, ie, {
+         const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(vW[Symbol.metadata] ?? null) : void 0;
+         iW = [(0, EW.M)()], OW = [(0, EW.M)()], wW = [(0, EW.M)()], ZW = [(0, EW.M)()], lW = [(0, EW.M)("hasAlpha")], AW = [(0, EW.M)("getAlphaFromRGB")], bW = [(0, EW.M)()], jW = [(0, EW.M)("coordinatesIndex")], UW = [(0, EW.M)()], kW = [(0, EW.M)("coordinatesMode")], sW = [(0,  … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L504` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L393) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L504)

```diff
-           name: "func",
+           name: "wrapU",
```

#### 60. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L508-L509` → after: `L397-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L397-L398) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L508-L509)

```diff
-             has: ee => "func" in ee,
-             get: ee => ee.func
+             has: WW => "wrapU" in WW,
+             get: WW => WW.wrapU
```

#### 61. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L512` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L401) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L512)

```diff
-         }, null, pe), (0, ye.i)(ee, null, He, {
+         }, null, gW), (0, mW.e)(WW, null, MW, {
```

#### 62. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L514` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L403) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L514)

```diff
-           name: "backFunc",
+           name: "wrapV",
```

#### 63. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L518-L519` → after: `L407-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L407-L408) · [Before (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L518-L519)

```diff
-             has: ee => "backFunc" in ee,
-             get: ee => ee.backFunc
+             has: WW => "wrapV" in WW,
+             get: WW => WW.wrapV
```

#### 64. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L522` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L411) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L522)

```diff
-         }, null, pe), (0, ye.i)(ee, null, Me, {
+         }, null, gW), (0, mW.e)(WW, null, YW, {
```

#### 65. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L524` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L413) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L524)

```diff
-           name: "funcRef",
+           name: "isCube",
```

#### 66. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L528-L529` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L417-L418) · [Before (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L528-L529)

```diff
-             has: ee => "funcRef" in ee,
-             get: ee => ee.funcRef
+             has: WW => "isCube" in WW,
+             get: WW => WW.isCube
```

#### 67. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L532` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L421) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L532)

```diff
-         }, null, pe), (0, ye.i)(ee, null, Ke, {
+         }, null, gW), (0, mW.e)(WW, null, yW, {
```

#### 68. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L534` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L423) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L534)

```diff
-           name: "funcMask",
+           name: "is3D",
```

#### 69. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L538-L539` → after: `L427-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L427-L428) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L538-L539)

```diff
-             has: ee => "funcMask" in ee,
-             get: ee => ee.funcMask
+             has: WW => "is3D" in WW,
+             get: WW => WW.is3D
```

#### 70. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L542` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L431) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L542)

```diff
-         }, null, pe), (0, ye.i)(ee, null, Ue, {
+         }, null, gW), (0, mW.e)(WW, null, TW, {
```

#### 71. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L544` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L433) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L544)

```diff
-           name: "opStencilFail",
+           name: "is2DArray",
```

#### 72. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L548-L549` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L437-L438) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L548-L549)

```diff
-             has: ee => "opStencilFail" in ee,
-             get: ee => ee.opStencilFail
+             has: WW => "is2DArray" in WW,
+             get: WW => WW.is2DArray
```

#### 73. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L552` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L441) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L552)

```diff
-         }, null, pe), (0, ye.i)(ee, null, Fe, {
+         }, null, gW), (0, mW.e)(WW, null, JW, {
```

#### 74. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L554` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L443) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L554)

```diff
-           name: "opDepthFail",
+           name: "gammaSpace",
```

#### 75. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L558-L559` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L447-L448) · [Before (L558-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L558-L559)

```diff
-             has: ee => "opDepthFail" in ee,
-             get: ee => ee.opDepthFail
+             has: WW => "gammaSpace" in WW,
+             get: WW => WW.gammaSpace
```

#### 76. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L562` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L451) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L562)

```diff
-         }, null, pe), (0, ye.i)(ee, null, Je, {
+         }, null, gW), (0, mW.e)(WW, null, nW, {
```

#### 77. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L564` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L453) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L564)

```diff
-           name: "opStencilDepthPass",
+           name: "lodGenerationOffset",
```

#### 78. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L568-L569` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L457-L458) · [Before (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L568-L569)

```diff
-             has: ee => "opStencilDepthPass" in ee,
-             get: ee => ee.opStencilDepthPass
+             has: WW => "lodGenerationOffset" in WW,
+             get: WW => WW.lodGenerationOffset
```

#### 79. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L572` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L461) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L572)

```diff
-         }, null, pe), (0, ye.i)(ee, null, oe, {
+         }, null, gW), (0, mW.e)(WW, null, uW, {
```

#### 80. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L574` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L463) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L574)

```diff
-           name: "backOpStencilFail",
+           name: "lodGenerationScale",
```

#### 81. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L578-L579` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L467-L468) · [Before (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L578-L579)

```diff
-             has: ee => "backOpStencilFail" in ee,
-             get: ee => ee.backOpStencilFail
+             has: WW => "lodGenerationScale" in WW,
+             get: WW => WW.lodGenerationScale
```

#### 82. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L582` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/291.js#L471) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/291.js#L582)

```diff
-         }, null, pe), (0, ye.i)(ee, null, Re, {
+         }, null, gW), (0, mW.e)(WW, null, oW, {
```
