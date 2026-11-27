# Changed — Bundle Modifications Report (Part 019 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `19 / 86` (**278** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 018](part-018.md) · [Part 020 →](part-020.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/281.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/281.js` (61 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0)

#### 43. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1612-L1629` → after: `L1377-L1574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1377-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1377-L1574) · [Before (L1612-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1612-L1629)

```diff
-             }
-           }
-           if (this._doNotHandleContextLost ? this._onContextLost = () => {
-               (0, DB.s)(this._gl)
-             } : (this._onContextLost = BB => {
-               BB.preventDefault(), this._contextWasLost = !0, (0, DB.s)(this._gl), jB.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
-             }, this._onContextRestored = () => {
-               this._restoreEngineAfterContextLost((() => this._initGLContext()))
-             }, QB.addEventListener("webglcontextrestored", this._onContextRestored, !1), GB.powerPreference = GB.powerPreference || "high-performance"), QB.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (GB.xrCompatible = !1), !GB.disableWebG … [truncated]
-             this._gl = QB.getContext("webgl2", GB) || QB.getContext("experimental-webgl2", GB), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
-           } catch (MB) {}
-           if (!this._gl) {
-             if (!QB) throw new Error("The provided canvas is null or undefined.");
-             try {
-               this._gl = QB.getContext("webgl", GB) || QB.getContext("experimental-webgl", GB)
-             } catch (MB) {
- ... (2 more removed lines; see GitHub link above)
+             }, PW.key)]
+           }), (0, YW.jsx)("span", {
+             className: "CubeWarfareAmmoGun",
+             children: (0, YW.jsx)(Ai.b, {
+               itemName: iW.name,
+               amount: 0,
+               gunTransform: "none"
+             })
+           }), LW && null === PW && (0, YW.jsx)(rW.e, {
+             noaAction: "ReloadGun",
+             className: "CubeWarfareAmmoKey",
+             padHidesKey: !0
+           })]
+         })
+       })
+     }
+ ... (182 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1631-L1777` → after: `L1576-L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1576-L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1576-L1583) · [Before (L1631-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1631-L1777)

```diff
-             }
-           }
-           if (!this._gl) throw new Error("WebGL not supported")
-         } else {
-           this._gl = BB, QB = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
-           const OB = this._gl.getContextAttributes();
-           OB && (GB.stencil = OB.stencil)
-         }
-         this._sharedInit(QB), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== GB.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = GB.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
-         for (let DB = 0; DB < this._caps.maxVertexAttribs; DB++) this._currentBufferPointers[DB] = new AB;
-         this._shaderProcessor = this.Pq > 1 ? new PB : new JB;
-         const oB = `Babylon.js v${VB.Version}`;
-         jB.b.Log(oB + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", oB);
-         const yB = (0, DB.u)(this._gl);
-         yB.validateShaderPrograms = this.validateShaderPrograms, yB.parallelShaderCompile = this._caps.parallelShaderCompile
-       }
- ... (131 more removed lines; see GitHub link above)
+             },
+             touchPressOn: "pointerup",
+             children: (0, YW.jsxs)("span", {
+               className: "ShootingDeathLoadoutText",
+               children: [LW(`${yW}changeLoadout`), (0, YW.jsx)(rW.e, {
+                 noaAction: "OpenShop",
+                 padHidesKey: !0
+               })]
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1779-L1787` → after: `L1585-L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1585-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1585-L1600) · [Before (L1779-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1779-L1787)

```diff
-           }
-           if (this._creationOptions) {
-             const BB = this._creationOptions.forceSRGBBufferSupportState;
-             void 0 !== BB && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && BB)
-           }
-         }
-         this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
-         for (let GB = 0; GB < this._maxSimultaneousTextures; GB++) this._nextFreeTextureSlots.push(GB);
-         "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
+           }), (0, YW.jsx)("div", {
+             className: "ShootingDeathStatus FullyFancyText",
+             children: PW.status
+           })]
+         })]
+       })
+     }
+ 
+     function Gi(WW) {
+       switch (WW) {
+         case "self":
+           return `${yW}diedSelf`;
+         case "void":
+           return `${yW}diedVoid`;
+         default:
+           return "respawnPage:youDied"
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1789-L1816` → after: `L1602-L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1602-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1602-L1780) · [Before (L1789-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1789-L1816)

```diff
-       _initFeatures() {
-         this._features = {
-           forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
-           supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
-           supportDepthStencilTexture: 1 !== this._webGLVersion,
-           supportShadowSamplers: 1 !== this._webGLVersion,
-           uniformBufferHardCheckMatrix: !1,
-           allowTexturePrefiltering: 1 !== this._webGLVersion,
-           trackUbosInFrame: !1,
-           checkUbosContentBeforeUpload: !1,
-           supportCSM: 1 !== this._webGLVersion,
-           basisNeedsPOT: 1 === this._webGLVersion,
-           support3DTextures: 1 !== this._webGLVersion,
-           needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
-           supportMSAA: 1 !== this._webGLVersion,
-           supportSSAO2: 1 !== this._webGLVersion,
- ... (12 more removed lines; see GitHub link above)
+     }
+ 
+     function Ii(WW) {
+       let {
+         secondsLeft: iW,
+         totalSeconds: OW,
+         alive: mW
+       } = WW;
+       const EW = mW || iW <= 0,
+         NW = OW > 0 ? Math.min(1, iW / OW) : 0;
+       return (0, YW.jsxs)("div", {
+         className: "ShootingDeathRing",
+         children: [(0, YW.jsxs)("svg", {
+           viewBox: "0 0 44 44",
+           children: [(0, YW.jsx)("circle", {
+             className: "ShootingDeathRingTrack",
+ ... (163 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1819-L1834` → after: `L1785-L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1785-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1785-L1873) · [Before (L1819-L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1819-L1834)

```diff
-       get Pq() {
-         return this._webGLVersion
-       }
-       getClassName() {
-         return "ThinEngine"
-       }
-       _prepareWorkingCanvas() {
-         if (this._workingCanvas) return;
-         this._workingCanvas = this.createCanvas(1, 1);
-         const BB = this._workingCanvas.getContext("2d");
-         BB && (this._workingContext = BB)
-       }
-       getInfo() {
-         return this.getGlInfo()
-       }
-       getGlInfo() {
+     }
+ 
+     function EO(WW) {
+       let {
+         entry: iW,
+         place: OW,
+         mvp: mW,
+         tdm: EW
+       } = WW;
+       const {
+         t: NW
+       } = (0, sW.B)(), PW = dW(), [LW, cW, wW, tW, ZW] = iW, bW = (0, lW.g)("players").localId;
+       return (0, YW.jsxs)("div", {
+         className: xW()("ShootingPodiumCard", `Place${OW+1}`, {
+           Mvp: mW,
+           Mine: LW === bW,
+ ... (73 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1836-L1864` → after: `L1875-L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1875-L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1875-L1903) · [Before (L1836-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1836-L1864)

```diff
-           vendor: this._glVendor,
-           renderer: this._glRenderer,
-           version: this._glVersion
-         }
-       }
-       extractDriverInfo() {
-         const BB = this.getGlInfo();
-         return BB && BB.renderer ? BB.renderer : ""
-       }
-       getRenderWidth() {
-         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
-       }
-       getRenderHeight() {
-         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
-       }
-       clear(BB, OB, GB) {
- ... (13 more removed lines; see GitHub link above)
+           onCreate: WW => {
+             document.body.classList.add(LO), document.body.classList.toggle(cO, "ffa" === xW), AW = new tW.d(WW, PW), bW = new mi((WW => {
+               LW.l.iZ(Oi, WW, !0)
+             }), (iW => {
+               WW.sendCommand(iW)
+             })), lW = (0, cW.O)((0, mW.createElement)(mW.Fragment, null, (0, mW.createElement)(wW.e, {
+               controller: AW
+             }), (0, mW.createElement)(PO, {
+               store: ZW,
+               votes: bW,
+               variation: xW
+             })), {
+               content: (0, mW.createElement)(BW, {
+                 store: ZW,
+                 variation: xW
+               })
+ ... (13 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1870-L1926` → after: `L1907-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1907-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1907-L1964) · [Before (L1870-L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1870-L1926)

```diff
-       _clearColorAttachment(BB, OB, GB, YB) {
-         if ((0, RB.j)(GB)) {
-           const GB = (0, RB.m)(YB),
-             DB = GB ? VB._TempClearColorUint32 : VB._TempClearColorInt32;
-           return DB[0] = OB.r, DB[1] = OB.g, DB[2] = OB.b, DB[3] = OB.a, void(GB ? this._gl.clearBufferuiv(this._gl.COLOR, BB, DB) : this._gl.clearBufferiv(this._gl.COLOR, BB, DB))
-         }
-         VB._TempClearColorFloat32[0] = OB.r, VB._TempClearColorFloat32[1] = OB.g, VB._TempClearColorFloat32[2] = OB.b, VB._TempClearColorFloat32[3] = OB.a, this._gl.clearBufferfv(this._gl.COLOR, BB, VB._TempClearColorFloat32)
-       }
-       _viewport(BB, OB, GB, YB) {
-         BB === this._viewportCached.x && OB === this._viewportCached.y && GB === this._viewportCached.z && YB === this._viewportCached.w || (this._viewportCached.x = BB, this._viewportCached.y = OB, this._viewportCached.z = GB, this._viewportCached.w = YB, this._gl.viewport(BB, O … [truncated]
-       }
-       AP() {
-         super.AP(), this._badOS && this.flushFramebuffer()
-       }
-       get performanceMonitor() {
-         throw new Error("Not Supported by ThinEngine")
- ... (41 more removed lines; see GitHub link above)
+   },
+   40710: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => NW
+     });
+     var mW = OW(62),
+       EW = OW(1283);
+     const NW = (0, mW.memo)((function(WW) {
+       let {
+         controller: iW
+       } = WW;
+       return (0, EW.jsxs)("div", {
+         className: "DamageFeedback",
+         ref: iW.bindElement,
+         children: [(0, EW.jsx)("div", {
+           className: "DamageFeedbackLow",
+ ... (42 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1928-L1929` → after: `L1966-L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1966-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1966-L1967) · [Before (L1928-L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1928-L1929)

```diff
-       _currentFrameBufferIsDefaultFrameBuffer() {
-         return null === this._currentFramebuffer
+       WK(WW) {
+         WW !== this.enabled && (this.enabled = WW, this.showCustomDamage(), WW || this.clearHits(), this.showRoot())
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1931-L1933` → after: `L1969-L1971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1969-L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1969-L1971) · [Before (L1931-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1931-L1933)

```diff
-       generateMipmaps(BB) {
-         const OB = this._getTextureTarget(BB);
-         this._bindTextureDirectly(OB, BB, !0), this._gl.generateMipmap(OB), this._bindTextureDirectly(OB, null)
+       frame(WW) {
+         this.syncHealth(), this.cameraHeading = WW;
+         for (const iW of this.arcs) this.drawArcAngle(iW)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1935` → after: `L1973-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1973-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1973-L2054) · [Before (L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1935)

```diff
-       unBindFramebuffer(BB, OB, GB) {
+       dispose() {
+         mW.l.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(EW)
+       }
+       showCustomDamage() {
+         document.body.classList.toggle(EW, this.enabled && this.parts.arcs)
+       }
+       showRoot() {
+         this.root && (this.root.style.display = this.enabled ? "" : "none")
+       }
+       syncHealth() {
+         const WW = this.api.getClientOption(this.localPlayerId, "_health"),
+           iW = this.api.getClientOption(this.localPlayerId, "_shield"),
+           OW = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
+         if (Object.is(WW, this.readHealth) && Object.is(iW, this.readShield) && Object.is(OW, this.readMaxHealth)) return;
+         if (this.readHealth = WW, this.readShield = iW, this.readMaxHealth = OW, null === WW || void 0 === WW || !OW) return this.lastHealthPool = null, this.maxHealth = null, this.DE = 1, this.dead = !1, void this.drawLow();
+         const mW = WW + (null !== iW && void 0 !== iW ? iW : 0);
+ ... (66 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1937-L2093` → after: `L2056-L2069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L2056-L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L2056-L2069) · [Before (L1937-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1937-L2093)

```diff
-         this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(BB, OB), GB && (YB._MSAAFramebuffer && this._bindUnboundFramebuffer(YB._framebuffer), GB()), this._bindUnboundFramebuffer(null)
-       }
-       generateMipMapsFramebuffer(BB) {
-         BB.isMulti || !BB.texture?.generateMipMaps || BB.isCube || this.generateMipmaps(BB.texture)
-       }
-       resolveFramebuffer(BB) {
-         const OB = BB,
-           GB = this._gl;
-         if (!OB._MSAAFramebuffer || OB.isMulti) return;
-         let YB = OB.resolveMSAAColors ? GB.COLOR_BUFFER_BIT : 0;
-         YB |= OB._generateDepthBuffer && OB.resolveMSAADepth ? GB.DEPTH_BUFFER_BIT : 0, YB |= OB._generateStencilBuffer && OB.resolveMSAAStencil ? GB.STENCIL_BUFFER_BIT : 0, GB.bindFramebuffer(GB.READ_FRAMEBUFFER, OB._MSAAFramebuffer), GB.bindFramebuffer(GB.DRAW_FRAMEBUFFER, OB._ … [truncated]
-       }
-       flushFramebuffer() {
-         this._gl.flush()
-       }
-       restoreDefaultFramebuffer() {
- ... (141 more removed lines; see GitHub link above)
+         PW.onfinish = () => {
+           if (LW.fade !== PW) return;
+           const WW = LW.element.animate([{
+             opacity: 1
+           }, {
+             opacity: 0
+           }], {
+             delay: 936,
+             duration: 864,
+             easing: "cubic-bezier(0.4, 0, 0.7, 1)",
+             fill: "forwards"
+           });
+           WW.startTime = PW.startTime, LW.fade = WW, WW.onfinish = () => {
+             LW.fade === WW && (LW.element.remove(), tW(this.arcs, LW))
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L2155-L2158` → after: `L2073-L2075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R2073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L2073-L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L2073-L2075) · [Before (L2155-L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L2155-L2158)

```diff
-       _releaseEffect(BB) {
-         this._compiledEffects[BB._key] && delete this._compiledEffects[BB._key];
-         const OB = BB.getPipelineContext();
-         OB && this._deletePipelineContext(OB)
+       drawArcAngle(WW) {
+         const iW = WW.direction - this.cameraHeading;
+         (null === WW.drawnAngle || Math.abs(iW - WW.drawnAngle) > .005) && (WW.drawnAngle = iW, WW.element.style.rotate = `${iW}rad`)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L2160` → after: `L2077-L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L2077-L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L2077-L2150) · [Before (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L2160)

```diff
-       _deletePipelineContext(BB) {
+       flashEdge(WW, iW) {
+         var OW, mW, EW;
+         if (!this.root) return;
+         let NW = this.flashes.find((iW => null === iW.angle || null === WW ? iW.angle === WW : cW(iW.angle, WW) < .5));
+         if (!NW) {
+           const iW = document.createElement("div");
+           iW.className = "DamageFeedbackFlash";
+           const OW = iW.appendChild(document.createElement("div"));
+           OW.className = "DamageFeedbackFlashGlow", this.root.insertBefore(iW, this.arcLayer), NW = {
+             element: iW,
+             glow: OW,
+             angle: WW,
+             level: 0,
+             animation: null
+           }, this.flashes.push(NW)
+         }
+ ... (58 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L2162-L2179` → after: `L2152-L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L2152-L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L2152-L2153) · [Before (L2162-L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L2162-L2179)

```diff
-         OB && OB.program && (OB.program.__SPECTOR_rebuildProgram = null, (0, NB.k)(OB), this._gl && (this._currentProgram === OB.program && this._setProgram(null), this._gl.deleteProgram(OB.program)))
-       }
-       _getGlobalDefines(BB) {
-         return (0, ZB.h)(BB, this.isNDCHalfZRange, this.fDB, this.useExactSrgbConversions)
-       }
-       createEffect(BB, OB, GB, QB, oB, jB, yB, JB, MB) {
-         let PB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           zB = arguments.length > 10 ? arguments[10] : void 0;
-         const lB = "string" === typeof BB ? BB : BB.vertexToken || BB.vertexSource || BB.vertexElement || BB.vertex,
-           pB = "string" === typeof BB ? BB : BB.fragmentToken || BB.fragmentSource || BB.fragmentElement || BB.fragment,
-           qB = this._getGlobalDefines(),
-           ZB = void 0 !== OB.attributes;
-         let NB = oB ?? OB.defines ?? "";
-         qB && (NB += qB);
-         const RB = lB + "+" + pB + "@" + NB;
-         if (this._compiledEffects[RB]) {
- ... (2 more removed lines; see GitHub link above)
+         bW.onfinish = () => {
+           jW.animation === bW && (jW.element.remove(), tW(this.flashes, jW))
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L2193-L2203` → after: `L2156-L2159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R2156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L2156-L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L2156-L2159) · [Before (L2193-L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L2193-L2203)

```diff
-       createShaderProgram(BB, OB, GB, YB, QB) {
-         let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
-         const jB = (0, DB.u)(this._gl);
-         return jB._contextWasLost = this._contextWasLost, jB.validateShaderPrograms = this.validateShaderPrograms, (0, DB.r)(BB, OB, GB, YB, QB || this._gl, oB)
-       }
-       inlineShaderCode(BB) {
-         return BB
-       }
-       createPipelineContext(BB) {
-         if (this._gl) {
-           (0, DB.u)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
+       clearHits() {
+         for (const mW of this.arcs) {
+           var WW, iW;
+           null === (WW = mW.fade) || void 0 === WW || WW.cancel(), mW.fade = null, null === (iW = mW.pop) || void 0 === iW || iW.cancel(), mW.element.remove()
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L2205-L2225` → after: `L2161-L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R2161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L2161-L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L2161-L2166) · [Before (L2205-L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L2205-L2225)

```diff
-         const OB = (0, DB.p)(this._gl, BB);
-         return OB.engine = this, OB
-       }
-       createMaterialContext() {}
-       createDrawContext() {}
-       _finalizePipelineContext(BB) {
-         return (0, DB.f)(BB, this._gl, this.validateShaderPrograms)
-       }
-       _preparePipelineContextAsync(BB, OB, GB, YB, QB, oB, jB, yB, JB, MB, PB) {
-         const zB = (0, DB.u)(this._gl);
-         return zB._contextWasLost = this._contextWasLost, zB.validateShaderPrograms = this.validateShaderPrograms, zB._createShaderProgramInjection = this._createShaderProgram.bind(this), zB.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), zB.createShader … [truncated]
-       }
-       _createShaderProgram(BB, OB, GB, YB) {
-         let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-         return (0, DB.c)(BB, OB, GB, YB, QB)
-       }
- ... (5 more removed lines; see GitHub link above)
+         this.arcs.length = 0;
+         for (const mW of this.flashes) {
+           var OW;
+           null === (OW = mW.animation) || void 0 === OW || OW.cancel(), mW.element.remove()
+         }
+         this.flashes.length = 0
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L3377-L3378` → after: `L2170-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L2170-L2171) · [Before (L3377-L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L3377-L3378)

```diff
-     function DB(BB) {
-       return 8 === BB || 9 === BB || 10 === BB || 11 === BB
+     function cW(WW, iW) {
+       return Math.abs(Math.atan2(Math.sin(WW - iW), Math.cos(WW - iW)))
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L3382-L4219` → after: `L2175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L2175) · [Before (L3382-L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L3382-L4219)

```diff
-       return 0 === BB || 5 === BB || 7 === BB || 11 === BB
-     }
- 
-     function oB(BB) {
-       return 13 === BB || 17 === BB || 18 === BB || 19 === BB
-     }
-     GB.d(OB, {
-       b: () => oB,
-       f: () => YB,
-       j: () => DB,
-       m: () => QB
-     })
-   },
-   40844: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => YB
- ... (822 more removed lines; see GitHub link above)
+       return Math.max(0, Math.min(1, WW))
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L4223-L9690` → after: `L2179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R2179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L2179) · [Before (L4223-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L4223-L9690)

```diff
-       const GB = yB.r.TransformNormal(BB, lB),
-         YB = yB.r.TransformNormal(OB, lB),
-         DB = yB.d.FromArray([qB(YB.x, GB.x), 0, 0, 0, 0, qB(YB.y, GB.y), 0, 0, 0, 0, qB(YB.z, GB.z), 0, 0, 0, 0, 1]);
-       return lB.multiply(DB).multiply(pB)
-     }
-     const NB = new yB.r(.95047, 1, 1.08883),
-       RB = yB.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(ZB(NB, zB(6500, 0))),
-       WB = yB.d.Invert(RB),
-       AB = yB.r.TransformNormal(new yB.r(1, 1, 1), RB);
-     var VB = GB(41022),
-       SB = GB(41127);
-     let nB = (() => {
-       var BB;
-       let OB, GB, QB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB = [],
-         NB = [],
-         RB = [],
- ... (5452 more removed lines; see GitHub link above)
+       const OW = WW.indexOf(iW); - 1 !== OW && WW.splice(OW, 1)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/282.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/282.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/282.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/282.js#L2)

```diff
- export const ids = [282, 662];
+ export const ids = [282];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L4` → after: `L4-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L4-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/282.js#L4-L652) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/282.js#L4)

```diff
-   40864: (BB, OB, GB) => {
+   41084: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => wW
+     });
+     var mW = OW(5397);
+     const EW = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];
+ 
+     function NW(WW) {
+       return new Promise(((iW, OW) => {
+         WW.onsuccess = () => {
+           iW(WW.result)
+         }, WW.onerror = () => {
+           OW(WW.error)
+         }
+       }))
+     }
+ ... (633 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L8-L32` → after: `L656-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L656-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/282.js#L656-L783) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/282.js#L8-L32)

```diff
-     class YB {
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.ShadersRepository : YB.ShadersRepositoryWGSL
-       }
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.ShadersStore : YB.ShadersStoreWGSL
-       }
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.IncludesShadersStore : YB.IncludesShadersStoreWGSL
-       }
-     }
-     YB.ShadersRepository = "src/Shaders/", YB.ShadersStore = {}, YB.IncludesShadersStore = {}, YB.ShadersRepositoryWGSL = "src/ShadersWGSL/", YB.ShadersStoreWGSL = {}, YB.IncludesShadersStoreWGSL = {}
-   },
-   63889: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       postprocessVertexShader: () => oB
- ... (9 more removed lines; see GitHub link above)
+     var mW = OW(41035),
+       EW = OW(1194);
+     const NW = 6e4;
+     async function PW(WW, iW) {
+       const OW = JSON.stringify(iW);
+       try {
+         const iW = await mW.f.fetch(WW, {
+           method: "POST",
+           headers: {
+             "Content-Type": "application/json"
+           },
+           body: OW,
+           signal: (0, EW.t)(NW)
+         }, (0, mW.i)(OW));
+         return await async function(WW) {
+           if (!WW.ok) return 413 === WW.status ? "refused" : "retryLater";
+ ... (112 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/283.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/283.js` (102 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L4)

```diff
-   41067: (BB, OB, GB) => {
+   41109: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L6-L12` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L6-L7) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L6-L12)

```diff
-       e: () => zB,
-       h: () => PB,
-       k: () => yB,
-       o: () => lB,
-       r: () => JB,
-       s: () => jB,
-       v: () => MB
+       c: () => sw,
+       g: () => Gl
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L14-L15` → after: `L9-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L9-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L9-L131) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L14-L15)

```diff
-     var YB = GB(39366),
-       DB = GB(41071);
+     const mW = "0.9.4",
+       EW = {
+         DEBUG: !1,
+         LIB_VERSION: "1.438.7",
+         LIB_NAME: "web",
+         JS_SDK_VERSION: mW
+       };
+     var NW = EW;
+     const PW = "$early_access_features",
+       LW = "$active_feature_flags",
+       cW = "$feature_flag_details",
+       wW = "$feature_flag_errors",
+       tW = "$feature_flag_evaluated_at",
+       ZW = "$feature_flag_request_id",
+       xW = "$minimal_flag_called_events",
+       lW = "$enabled_feature_flags",
+ ... (107 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L17-L45` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L133-L134) · [Before (L17-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L17-L45)

```diff
-     function QB(BB, OB, GB, YB) {
-       switch (OB) {
-         case 5120: {
-           let OB = BB.getInt8(GB);
-           return YB && (OB = Math.max(OB / 127, -1)), OB
-         }
-         case 5121: {
-           let OB = BB.getUint8(GB);
-           return YB && (OB /= 255), OB
-         }
-         case 5122: {
-           let OB = BB.getInt16(GB, !0);
-           return YB && (OB = Math.max(OB / 32767, -1)), OB
-         }
-         case 5123: {
-           let OB = BB.getUint16(GB, !0);
- ... (13 more removed lines; see GitHub link above)
+     function AO(WW, iW) {
+       return -1 !== WW.indexOf(iW)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L48-L76` → after: `L143-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L143-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L143-L161) · [Before (L48-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L48-L76)

```diff
-     function oB(BB, OB, GB, YB, QB) {
-       switch (OB) {
-         case 5120:
-           YB && (QB = Math.round(127 * QB)), BB.setInt8(GB, QB);
-           break;
-         case 5121:
-           YB && (QB = Math.round(255 * QB)), BB.setUint8(GB, QB);
-           break;
-         case 5122:
-           YB && (QB = Math.round(32767 * QB)), BB.setInt16(GB, QB, !0);
-           break;
-         case 5123:
-           YB && (QB = Math.round(65535 * QB)), BB.setUint16(GB, QB, !0);
-           break;
-         case 5131:
-           BB.setUint16(GB, (0, DB.l)(QB), !0);
- ... (13 more removed lines; see GitHub link above)
+     function UO(WW) {
+       var iW;
+       const OW = [];
+       return null !== (iW = JSON.stringify(WW, (function(WW, iW) {
+         if ("bigint" == typeof iW) return iW.toString();
+         if ("function" != typeof iW && "symbol" != typeof iW) {
+           if (iW instanceof Error) return {
+             name: iW.name,
+             message: iW.message,
+             stack: iW.stack
+           };
+           if (iW && "object" == typeof iW) {
+             for (; OW.length > 0 && OW[OW.length - 1] !== this;) OW.pop();
+             if (OW.includes(iW)) return "[Circular]";
+             OW.push(iW)
+           }
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L80-L94` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L191) · [Before (L80-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L80-L94)

```diff
-       switch (BB) {
-         case 5120:
-         case 5121:
-           return 1;
-         case 5122:
-         case 5123:
-         case 5131:
-           return 2;
-         case 5124:
-         case 5125:
-         case 5126:
-           return 4;
-         default:
-           throw new Error(`Invalid type '${BB}'`)
-       }
+       return null === WW || "object" != typeof WW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L97-L118` → after: `L194-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L194-L195) · [Before (L97-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L97-L118)

```diff
-     function yB(BB, OB, GB, YB, DB, yB, JB, MB) {
-       const PB = new Array(YB),
-         zB = new Array(YB);
-       if (BB instanceof Array) {
-         let DB = OB / 4;
-         const QB = GB / 4;
-         for (let OB = 0; OB < yB; OB += YB) {
-           for (let OB = 0; OB < YB; OB++) PB[OB] = zB[OB] = BB[DB + OB];
-           MB(zB, OB);
-           for (let OB = 0; OB < YB; OB++) PB[OB] !== zB[OB] && (BB[DB + OB] = zB[OB]);
-           DB += QB
-         }
-       } else {
-         const lB = ArrayBuffer.isView(BB) ? new DataView(BB.buffer, BB.byteOffset, BB.byteLength) : new DataView(BB),
-           pB = jB(DB);
-         for (let BB = 0; BB < yB; BB += YB) {
- ... (6 more removed lines; see GitHub link above)
+     function DO(WW, iW) {
+       return {}.toString.call(WW) === `[object ${iW}]`
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L121-L139` → after: `L198-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L198-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L198-L207) · [Before (L121-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L121-L139)

```diff
-     function JB(BB, OB, GB, DB, QB, oB, JB, MB) {
-       const PB = OB * jB(GB),
-         zB = JB * OB;
-       if (5126 !== GB || QB !== PB) {
-         const YB = new Float32Array(zB);
-         return yB(BB, DB, QB, OB, GB, zB, oB, ((BB, GB) => {
-           for (let DB = 0; DB < OB; DB++) YB[GB + DB] = BB[DB]
-         })), YB
-       }
-       if (!(BB instanceof Array || BB instanceof Float32Array) || 0 !== DB || BB.length !== zB) {
-         if (BB instanceof Array) {
-           const OB = DB / 4;
-           return BB.slice(OB, OB + zB)
-         }
-         if (ArrayBuffer.isView(BB)) {
-           const OB = BB.byteOffset + DB;
- ... (3 more removed lines; see GitHub link above)
+     function VO(WW) {
+       switch ({}.toString.call(WW)) {
+         case "[object Error]":
+         case "[object Exception]":
+         case "[object DOMException]":
+         case "[object DOMError]":
+         case "[object WebAssembly.Exception]":
+           return !0;
+         default:
+           return fO(WW, Error)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L144-L216` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L211-L212) · [Before (L144-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L144-L216)

```diff
-     function MB(BB, OB, GB, DB, QB, oB, JB) {
-       const MB = jB(GB),
-         PB = function(BB) {
-           switch (BB) {
-             case 5120:
-               return Int8Array;
-             case 5121:
-               return Uint8Array;
-             case 5122:
-               return Int16Array;
-             case 5123:
-             case 5131:
-               return Uint16Array;
-             case 5124:
-               return Int32Array;
-             case 5125:
- ... (57 more removed lines; see GitHub link above)
+     function pO(WW) {
+       return "u" > typeof Event && fO(WW, Event)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L220-L224` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L216-L218) · [Before (L220-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L220-L224)

```diff
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       if (Array.isArray(BB)) {
-         for (let DB = 0; DB < OB; DB++)
-           if (BB[GB + DB] - YB > 65535) return !0;
+       try {
+         return WW instanceof iW
+       } catch (WW) {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L230-L274` → after: `L226-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L226-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L226-L231) · [Before (L230-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L230-L274)

```diff
-     function lB(BB) {
-       const OB = BB.buffer;
-       if (OB instanceof ArrayBuffer) return BB;
-       const GB = new ArrayBuffer(BB.byteLength);
-       return new Uint8Array(GB).set(new Uint8Array(OB, BB.byteOffset, BB.byteLength)), GB
-     }
-   },
-   40896: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => UB,
-       f: () => SB,
-       i: () => nB,
-       g: () => IB,
-       m: () => FB
-     });
-     class YB {
- ... (29 more removed lines; see GitHub link above)
+     function qO(WW, iW, OW, mW, EW, NW, PW) {
+       try {
+         var LW = WW[NW](PW),
+           cW = LW.value
+       } catch (WW) {
+         return void OW(WW)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L277-L299` → after: `L235-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L235-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L235-L244) · [Before (L277-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L277-L299)

```diff
-     class DB {
-       constructor() {
-         this._lines = []
-       }
-       get currentLine() {
-         return this._lines[this.lineIndex]
-       }
-       get canRead() {
-         return this.lineIndex < this._lines.length - 1
-       }
-       set lines(BB) {
-         this._lines.length = 0;
-         for (const OB of BB) {
-           if (!OB || "\r" === OB) continue;
-           if ("#" === OB[0]) {
-             this._lines.push(OB);
- ... (7 more removed lines; see GitHub link above)
+ 
+     function RO(WW) {
+       return function() {
+         var iW = this,
+           OW = arguments;
+         return new Promise((function(mW, EW) {
+           var NW = WW.apply(iW, OW);
+ 
+           function PW(WW) {
+             qO(NW, mW, EW, PW, LW, "next", WW)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L301-L309` → after: `L246-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L246-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L246-L248) · [Before (L301-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L301-L309)

```diff
-           const GB = BB.indexOf(";");
-           if (-1 === GB) this._lines.push(BB);
-           else if (GB === BB.length - 1) BB.length > 1 && this._lines.push(BB);
-           else {
-             const BB = OB.split(";");
-             for (let OB = 0; OB < BB.length; OB++) {
-               let GB = BB[OB];
-               GB && (GB = GB.trim(), GB && this._lines.push(GB + (OB !== BB.length - 1 ? ";" : "")))
-             }
+ 
+           function LW(WW) {
+             qO(NW, mW, EW, PW, LW, "throw", WW)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L311` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L250-L251) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L311)

```diff
-         }
+           PW(void 0)
+         }))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L314-L321` → after: `L254-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L254-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L254-L275) · [Before (L314-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L314-L321)

```diff
-     class QB extends YB {
-       process(BB, OB, GB) {
-         for (let YB = 0; YB < this.children.length; YB++) {
-           const DB = this.children[YB];
-           if (DB.isValid(BB)) return DB.process(BB, OB, GB)
-         }
-         return ""
-       }
+     const GO = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatal … [truncated]
+       IO = new Map,
+       aO = function(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+         if (!WW) return !1;
+         const OW = function(WW, iW) {
+             let OW = "";
+             for (let mW = 0; iW.length > mW; mW++) {
+               const WW = iW[mW];
+               OW += WW.length + ":" + WW
+             }
+             return WW.length + ":" + WW + "|" + iW.length + ":" + OW
+           }(WW, iW),
+           mW = IO.get(OW);
+         if (void 0 !== mW) return mW;
+         const EW = WW.toLowerCase(),
+ ... (6 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L323-L325` → after: `L277-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L277-L279) · [Before (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L323-L325)

```diff
-     class oB extends YB {
-       isValid(BB) {
-         return this.testExpression.isTrue(BB)
+     var zO = class {
+       constructor(WW) {
+         this._buckets = {}, this._onBucketRateLimited = WW._onBucketRateLimited, this._bucketSize = rO(WW.bucketSize, 0, 100, WW._logger), this._refillRate = rO(WW.refillRate, 0, this._bucketSize, WW._logger), this._refillInterval = rO(WW.refillInterval, 0, 864e5, WW._logger)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L327-L330` → after: `L281-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L281-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L281-L283) · [Before (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L327-L330)

```diff
-     }
-     class jB {
-       isTrue(BB) {
-         return !0
+       _applyRefill(WW, iW) {
+         const OW = Math.floor((iW - WW.lastAccess) / this._refillInterval);
+         OW > 0 && (WW.tokens = Math.min(WW.tokens + OW * this._refillRate, this._bucketSize), WW.lastAccess = WW.lastAccess + OW * this._refillInterval)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L332-L375` → after: `L285-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L285-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L285-L293) · [Before (L332-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L332-L375)

```diff
-       static postfixToInfix(BB) {
-         const OB = [];
-         for (const GB of BB)
-           if (void 0 === jB._OperatorPriority[GB]) OB.push(GB);
-           else {
-             const BB = OB[OB.length - 1],
-               YB = OB[OB.length - 2];
-             OB.length -= 2, OB.push(`(${YB}${GB}${BB})`)
-           } return OB[OB.length - 1]
-       }
-       static infixToPostfix(BB) {
-         const OB = jB._InfixToPostfixCache.get(BB);
-         if (OB) return OB.accessTime = Date.now(), OB.result;
-         if (!BB.includes("&&") && !BB.includes("||") && !BB.includes(")") && !BB.includes("(")) return [BB];
-         const GB = [];
-         let YB = -1;
- ... (28 more removed lines; see GitHub link above)
+       consumeRateLimit(WW) {
+         var iW;
+         const OW = Date.now(),
+           mW = String(WW);
+         let EW = this._buckets[mW];
+         return EW ? this._applyRefill(EW, OW) : (EW = {
+           tokens: this._bucketSize,
+           lastAccess: OW
+         }, this._buckets[mW] = EW), 0 === EW.tokens || (EW.tokens--, 0 === EW.tokens && (null === (iW = this._onBucketRateLimited) || void 0 === iW || iW.call(this, WW)), 0 === EW.tokens)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L377-L379` → after: `L295-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L295-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L295-L484) · [Before (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L377-L379)

```diff
-       static ClearCache() {
-         const BB = Array.from(jB._InfixToPostfixCache.entries()).sort(((BB, OB) => BB[1].accessTime - OB[1].accessTime));
-         for (let OB = 0; OB < jB.InfixToPostfixCacheCleanupSize; OB++) jB._InfixToPostfixCache.delete(BB[OB][0])
+       stop() {
+         this._buckets = {}
+       }
+     };
+     const FO = "Mobile",
+       QO = "Android",
+       Wm = "Tablet",
+       im = "Android Tablet",
+       Om = "iPad",
+       mm = "Apple Watch",
+       Em = "Safari",
+       Nm = "BlackBerry",
+       Pm = "Samsung Internet",
+       Lm = "Chrome",
+       cm = "Chrome iOS",
+       wm = "Internet Explorer",
+ ... (174 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L382-L391` → after: `L488-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L488-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L488-L495) · [Before (L382-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L382-L391)

```diff
-     jB.InfixToPostfixCacheLimitSize = 5e4, jB.InfixToPostfixCacheCleanupSize = 25e3, jB._InfixToPostfixCache = new Map, jB._OperatorPriority = {
-       ")": 0,
-       "(": 1,
-       "||": 2,
-       "&&": 3
-     }, jB._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
-     class yB extends jB {
-       constructor(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         super(), this.define = BB, this.not = OB
+ 
+     function LE(WW, iW) {
+       if (!iW) return WW;
+       let OW = [];
+       try {
+         OW = Object.keys(iW)
+       } catch (WW) {
+         OW = []
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L393-L395` → after: `L497-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L497-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L497-L509) · [Before (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L393-L395)

```diff
-       isTrue(BB) {
-         let OB = void 0 !== BB[this.define];
-         return this.not && (OB = !OB), OB
+       for (const mW of OW) {
+         let OW;
+         try {
+           OW = iW[mW]
+         } catch (WW) {
+           OW = NE
+         }
+         Object.defineProperty(WW, mW, {
+           value: OW,
+           enumerable: !0,
+           writable: !0,
+           configurable: !0
+         })
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L398-L400` → after: `L513-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L513-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L513-L524) · [Before (L398-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L398-L400)

```diff
-     class JB extends jB {
-       isTrue(BB) {
-         return this.leftOperand.isTrue(BB) || this.rightOperand.isTrue(BB)
+     Date, Date;
+     const cE = 3e5;
+     var wE = class {
+       record(WW) {
+         if ("too-large" === WW.kind) return;
+         if ("retry-later" !== WW.kind) return void this.reset();
+         if (!WW.retryAfterMs) return;
+         const iW = this.isOpen(),
+           OW = Date.now(),
+           mW = Math.min(WW.retryAfterMs, cE);
+         if (!iW) return this._installedAt = OW, void(this._until = OW + mW);
+         this._until = Math.max(this._until, Math.min(OW + mW, this._installedAt + cE))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L402-L405` → after: `L526-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L526-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L526-L530) · [Before (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L402-L405)

```diff
-     }
-     class MB extends jB {
-       isTrue(BB) {
-         return this.leftOperand.isTrue(BB) && this.rightOperand.isTrue(BB)
+       remainingMs() {
+         const WW = Date.now();
+         if (this._installedAt - 5e3 > WW) return this.reset(), 0;
+         const iW = Math.min(cE, Math.max(0, this._until - WW));
+         return 0 === iW && this.reset(), iW
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L407-L410` → after: `L532-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L532-L533) · [Before (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L407-L410)

```diff
-     }
-     class PB extends jB {
-       constructor(BB, OB, GB) {
-         super(), this.define = BB, this.operand = OB, this.testValue = GB
+       isOpen() {
+         return this.remainingMs() > 0
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L412-L413` → after: `L535-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L535-L536) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L412-L413)

```diff
-       toString() {
-         return `${this.define} ${this.operand} ${this.testValue}`
+       reset() {
+         this._until = 0, this._installedAt = 0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L415-L439` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L538-L539) · [Before (L415-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L415-L439)

```diff
-       isTrue(BB) {
-         let OB = !1;
-         const GB = parseInt(void 0 != BB[this.define] ? BB[this.define] : this.define),
-           YB = parseInt(void 0 != BB[this.testValue] ? BB[this.testValue] : this.testValue);
-         if (isNaN(GB) || isNaN(YB)) return !1;
-         switch (this.operand) {
-           case ">":
-             OB = GB > YB;
-             break;
-           case "<":
-             OB = GB < YB;
-             break;
-           case "<=":
-             OB = GB <= YB;
-             break;
-           case ">=":
- ... (9 more removed lines; see GitHub link above)
+       constructor() {
+         this._until = 0, this._installedAt = 0
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L441-L451` → after: `L541-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L541-L542) · [Before (L441-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L441-L451)

```diff
-     }
-     var zB = GB(40890),
-       lB = GB(40883);
-     const pB = /defined\s*?\((.+?)\)/g,
-       qB = /defined\s*?\[(.+?)\]/g,
-       ZB = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
-       NB = /__decl__/,
-       RB = /light\{X\}.(\w*)/g,
-       WB = /\{X\}/g,
-       AB = [],
-       VB = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+     };
+     const tE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L453-L454` → after: `L544-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L544-L546) · [Before (L453-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L453-L454)

```diff
-     function SB(BB) {
-       BB.processor && BB.processor.initializeShaders && BB.processor.initializeShaders(BB.processingContext)
+     function ZE(WW, iW) {
+       return "string" == typeof(OW = WW) && tE.test(OW) ? WW : iW();
+       var OW
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L457-L479` → after: `L549-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L549-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L549-L559) · [Before (L457-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L457-L479)

```diff
-     function nB(BB, OB, GB, YB) {
-       OB.processor?.preProcessShaderCode && (BB = OB.processor.preProcessShaderCode(BB, OB.isFragment)), IB(BB, OB, (BB => {
-         OB.processCodeAfterIncludes && (BB = OB.processCodeAfterIncludes(OB.isFragment ? "fragment" : "vertex", BB, OB.defines));
-         const DB = function(BB, OB, GB) {
-           let YB = function(BB, OB) {
-             if (OB.processor?.noPrecision) return BB;
-             const GB = OB.shouldUseHighPrecisionShader; - 1 === BB.indexOf("precision highp float") ? BB = GB ? "precision highp float;\n" + BB : "precision mediump float;\n" + BB : GB || (BB = BB.replace("precision highp float", "precision mediump float"));
-             return BB
-           }(BB, OB);
-           if (!OB.processor) return YB;
-           if (0 === OB.processor.shaderLanguage && -1 !== YB.indexOf("#version 3") && (YB = YB.replace("#version 300 es", ""), !OB.processor.parseGLES3)) return YB;
-           const DB = OB.defines,
-             QB = mB(OB, GB);
-           OB.processor.preProcessor && (YB = OB.processor.preProcessor(YB, DB, QB, OB.isFragment, OB.processingContext));
-           const oB = {};
-           YB = uB(YB, QB, OB, oB), OB.processor.postProcessor && (YB = OB.processor.postProcessor(YB, DB, OB.isFragment, OB.processingContext, GB ? {
- ... (7 more removed lines; see GitHub link above)
+     function xE(WW, iW) {
+       const OW = new Error(iW);
+       try {
+         Object.defineProperty(OW, "name", {
+           value: WW,
+           writable: !0,
+           enumerable: !0,
+           configurable: !0
+         })
+       } catch (WW) {}
+       return OW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L482-L486` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L562-L563) · [Before (L482-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L482-L486)

```diff
-     function UB(BB, OB, GB) {
-       return GB.processor && GB.processor.finalizeShaders ? GB.processor.finalizeShaders(BB, OB, GB.processingContext) : {
-         vertexCode: BB,
-         fragmentCode: OB
-       }
+     function lE(WW) {
+       return WW ? WW.split("#")[0] : WW
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L490-L500` → after: `L567-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L567-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L567-L571) · [Before (L490-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L490-L500)

```diff
-       const OB = /defined\((.+)\)/.exec(BB);
-       if (OB && OB.length) return new yB(OB[1].trim(), "!" === BB[0]);
-       const GB = ["==", "!=", ">=", "<=", "<", ">"];
-       let YB = "",
-         DB = 0;
-       for (YB of GB)
-         if (DB = BB.indexOf(YB), DB > -1) break;
-       if (-1 === DB) return new yB(BB);
-       const QB = BB.substring(0, DB).trim(),
-         oB = BB.substring(DB + YB.length).trim();
-       return new PB(QB, YB, oB)
+       try {
+         return WW()
+       } catch (WW) {
+         return
+       }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L504-L522` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L575-L576) · [Before (L504-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L504-L522)

```diff
-       const GB = new oB,
-         YB = BB.substring(0, OB);
-       let DB = BB.substring(OB);
-       return DB = DB.substring(0, (DB.indexOf("//") + 1 || DB.length + 1) - 1).trim(), GB.testExpression = "#ifdef" === YB ? new yB(DB) : "#ifndef" === YB ? new yB(DB, !0) : function(BB) {
-         BB = BB.replace(pB, "defined[$1]");
-         const OB = jB.infixToPostfix(BB),
-           GB = [];
-         for (const DB of OB)
-           if ("||" !== DB && "&&" !== DB) GB.push(DB);
-           else if (GB.length >= 2) {
-           let BB = GB[GB.length - 1],
-             OB = GB[GB.length - 2];
-           GB.length -= 2;
-           const YB = "&&" == DB ? new MB : new JB;
-           "string" === typeof BB && (BB = BB.replace(qB, "defined($1)")), "string" === typeof OB && (OB = OB.replace(qB, "defined($1)")), YB.leftOperand = "string" === typeof OB ? fB(OB) : OB, YB.rightOperand = "string" === typeof BB ? fB(BB) : BB, GB.push(YB)
-         }
- ... (3 more removed lines; see GitHub link above)
+       const OW = setTimeout(WW, iW);
+       return null != OW && OW.unref && (null == OW || OW.unref()), OW
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L525-L538` → after: `L579-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L579-L580) · [Before (L525-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L525-L538)

```diff
-     function dB(BB, OB, GB, DB) {
-       let QB;
-       for (; KB(BB, GB, DB);) {
-         QB = BB.currentLine;
-         const oB = QB.substring(0, 5).toLowerCase();
-         if ("#else" === oB) {
-           const GB = new YB;
-           return OB.children.push(GB), void KB(BB, GB, DB)
-         }
-         if ("#elif" === oB) {
-           const BB = kB(QB, 5);
-           OB.children.push(BB), GB = BB
-         }
-       }
+     function jE(WW, iW, OW) {
+       return UE.apply(this, arguments)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L541-L572` → after: `L583-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L583-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L583-L592) · [Before (L541-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L541-L572)

```diff
-     function KB(BB, OB, GB) {
-       for (; BB.canRead;) {
-         BB.lineIndex++;
-         const DB = BB.currentLine;
-         if (DB.indexOf("#") >= 0) {
-           const YB = VB.exec(DB);
-           if (YB && YB.length) {
-             switch (YB[0]) {
-               case "#ifdef": {
-                 const YB = new QB;
-                 OB.children.push(YB);
-                 const oB = kB(DB, 6);
-                 YB.children.push(oB), dB(BB, YB, oB, GB);
-                 break
-               }
-               case "#else":
- ... (16 more removed lines; see GitHub link above)
+     function UE() {
+       return (UE = RO((function*(WW, iW, OW) {
+         let mW;
+         try {
+           return yield Promise.race([WW, new Promise(((WW, EW) => {
+             mW = bE((() => {
+               try {
+                 null == OW || OW(), WW()
+               } catch (WW) {
+                 EW(WW)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L574-L576` → after: `L594-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L594-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L594-L597) · [Before (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L574-L576)

```diff
-             }
-             continue
-           }
+             }), iW)
+           }))])
+         } finally {
+           clearTimeout(mW)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L578-L584` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L599) · [Before (L578-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L578-L584)

```diff
-         const oB = new YB;
-         if (oB.line = DB, OB.children.push(oB), "#" === DB[0] && "d" === DB[1]) {
-           const BB = DB.replace(";", "").split(" ");
-           oB.additionalDefineKey = BB[1], 3 === BB.length && (oB.additionalDefineValue = BB[2])
-         }
-       }
-       return !1
+       }))).apply(this, arguments)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L587-L600` → after: `L602-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L602-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L602-L607) · [Before (L587-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L587-L600)

```diff
-     function uB(BB, OB, GB, QB) {
-       const oB = new YB,
-         jB = new DB;
-       return jB.lineIndex = -1, jB.lines = BB.split("\n"), KB(jB, oB, QB), oB.process(OB, GB, QB)
-     }
- 
-     function mB(BB, OB) {
-       const GB = BB.defines,
-         YB = {};
-       for (const DB of GB) {
-         const BB = DB.replace("#define", "").replace(";", "").trim().split(" ");
-         YB[BB[0]] = BB.length > 1 ? BB[1] : ""
-       }
-       return 0 === BB.processor?.shaderLanguage && (YB.GL_ES = "true"), YB.__VERSION__ = BB.version, YB[BB.platformName] = "true", (0, lB.h)(YB, OB?.isNDCHalfZRange, OB?.fDB, OB?.useExactSrgbConversions), YB
+     function kE(WW) {
+       return kE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
+         return typeof WW
+       } : function(WW) {
+         return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
+       }, kE(WW)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L604-L634` → after: `L611-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L611-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L611-L618) · [Before (L604-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L604-L634)

```diff
-       let YB;
-       for (AB.length = 0; null !== (YB = ZB.exec(BB));) AB.push(YB);
-       let DB = [BB],
-         QB = !1;
-       for (const jB of AB) {
-         let BB = jB[1];
-         if (-1 !== BB.indexOf("__decl__") && (BB = BB.replace(NB, ""), OB.supportsUniformBuffers && (BB = BB.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), BB += "Declaration"), !OB.includesShadersStore[BB]) {
-           const YB = OB.shadersRepository + "ShadersInclude/" + BB + ".fx";
-           return void FB.loadFile(YB, (YB => {
-             OB.includesShadersStore[BB] = YB, IB(DB.join(""), OB, GB)
-           }))
-         } {
-           let GB = OB.includesShadersStore[BB];
-           if (jB[2]) {
-             const BB = jB[3].split(",");
-             for (let OB = 0; OB < BB.length; OB += 2) {
- ... (15 more removed lines; see GitHub link above)
+       return (iW = function(WW) {
+         var iW = function(WW) {
+           if ("object" != kE(WW) || !WW) return WW;
+           var iW = WW[Symbol.toPrimitive];
+           if (void 0 !== iW) {
+             var OW = iW.call(WW, "string");
+             if ("object" != kE(OW)) return OW;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L636-L652` → after: `L620-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L620-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L620-L628) · [Before (L636-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L636-L652)

```diff
-           const YB = [];
-           for (const BB of DB) {
-             const OB = BB.split(jB[0]);
-             for (let BB = 0; BB < OB.length - 1; BB++) YB.push(OB[BB]), YB.push(GB);
-             YB.push(OB[OB.length - 1])
-           }
-           DB = YB, QB = QB || GB.indexOf("#include<") >= 0 || GB.indexOf("#include <") >= 0
-         }
-       }
-       AB.length = 0;
-       const oB = DB.join("");
-       QB ? IB(oB.toString(), OB, GB) : GB(oB)
-     }
-     const FB = {
-       loadFile: (BB, OB, GB, YB, DB, QB) => {
-         throw (0, zB.j)("FileTools")
- ... (1 more removed lines; see GitHub link above)
+           return String(WW)
+         }(WW);
+         return "symbol" == kE(iW) ? iW : iW + ""
+       }(iW)) in WW ? Object.defineProperty(WW, iW, {
+         value: OW,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : WW[iW] = OW, WW
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L667-L680` → after: `L632-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L632-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L632-L637) · [Before (L667-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L667-L680)

```diff
-       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (OB ? OB + "\n" : "") + BB
-     }
- 
-     function oB(BB, OB, GB, QB, oB, jB, yB) {
-       const JB = yB || DB.loadFile;
-       if (!JB) throw (0, YB.j)("FileTools");
-       return JB(BB, OB, GB, QB, oB, jB)
-     }
- 
-     function jB(BB, OB, GB, YB) {
-       if (BB) return OB ? BB.IS_NDC_HALF_ZRANGE = "" : delete BB.IS_NDC_HALF_ZRANGE, GB ? BB.USE_REVERSE_DEPTHBUFFER = "" : delete BB.USE_REVERSE_DEPTHBUFFER, void(YB ? BB.USE_EXACT_SRGB_CONVERSIONS = "" : delete BB.USE_EXACT_SRGB_CONVERSIONS);
-       {
-         let BB = "";
-         return OB && (BB += "#define IS_NDC_HALF_ZRANGE"), GB && (BB && (BB += "\n"), BB += "#define USE_REVERSE_DEPTHBUFFER"), YB && (BB && (BB += "\n"), BB += "#define USE_EXACT_SRGB_CONVERSIONS"), BB
+       var OW = Object.keys(WW);
+       if (Object.getOwnPropertySymbols) {
+         var mW = Object.getOwnPropertySymbols(WW);
+         iW && (mW = mW.filter((function(iW) {
+           return Object.getOwnPropertyDescriptor(WW, iW).enumerable
+         }))), OW.push.apply(OW, mW)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L740` → after: `L643-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L643-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L643-L651) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L740)

```diff
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !YB[BB]) return YB[BB] = !0, `${BB} needs to be imported before as it contains a side-effect required by your code.`
+       for (var iW = 1; arguments.length > iW; iW++) {
+         var OW = null != arguments[iW] ? arguments[iW] : {};
+         iW % 2 ? ME(Object(OW), !0).forEach((function(iW) {
+           sE(WW, iW, OW[iW])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : ME(Object(OW)).forEach((function(iW) {
+           Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
+         }))
+       }
+       return WW
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L742-L744` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L653) · [Before (L742-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L742-L744)

```diff
-     const QB = {};
-     let oB = !1,
-       jB = 0;
+     let SE, YE, yE, TE;
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L746-L751` → after: `L655-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L655-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L655-L681) · [Before (L746-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L746-L751)

```diff
-     function yB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const YB = function() {
-         if ((GB || oB) && 0 === jB) {
-           const GB = `${BB}.${OB}`;
-           QB[GB] || (QB[GB] = !0, console.warn(`[Babylon.js] ${GB}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
+     function JE(WW) {
+       var iW;
+       const OW = globalThis._posthogChunkIds,
+         mW = globalThis._debugIds;
+       if (!OW && !mW) return;
+       const EW = OW ? Object.keys(OW) : [],
+         NW = mW ? Object.keys(mW) : [];
+       if (TE && hE(OW, EW, YE) && hE(mW, NW, yE)) return TE;
+       YE = OW ? KE({}, OW) : void 0, yE = mW ? KE({}, mW) : void 0, TE = {}, null !== (iW = SE) && void 0 !== iW || (SE = {});
+       const PW = (iW, OW) => {
+         for (const EW of iW) {
+           const iW = OW[EW];
+           if (!iW) continue;
+           const NW = null == SE ? void 0 : SE[EW];
+           if (NW) {
+             TE[NW] = iW;
+ ... (11 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L754` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L684) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L754)

```diff
-       return YB.__isSideEffectStub = !0, YB
+       return mW && PW(NW, mW), OW && PW(EW, OW), TE
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L757-L758` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L687-L688) · [Before (L757-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L757-L758)

```diff
-     function JB(BB) {
-       return !!BB && !BB.__isSideEffectStub
+     function hE(WW, iW, OW) {
+       return WW && OW ? iW.length === Object.keys(OW).length && iW.every((iW => WW[iW] === OW[iW])) : WW === OW
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L760-L853` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L690) · [Before (L760-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L760-L853)

```diff
- 
-     function MB(BB, OB) {
-       return {
-         get() {},
-         set(BB) {
-           Object.defineProperty(this, OB, {
-             value: BB,
-             writable: !0,
-             configurable: !0,
-             enumerable: !0
-           })
-         },
-         configurable: !0,
-         enumerable: !0
-       }
-     }
- ... (78 more removed lines; see GitHub link above)
+     var HE = class {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L855` → after: `L692-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L692-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L692-L693) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L855)

```diff
-         super(BB, jB.g.LoadFileError), this.name = "LoadFileError", jB.d._setPrototypeOf(this, ZB.prototype), OB instanceof YB.e ? this.request = OB : this.file = OB
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         this.coercers = WW, this.stackParser = iW, this.modifiers = OW
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L857-L860` → after: `L695-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L695-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L695-L707) · [Before (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L857-L860)

```diff
-     }
-     class NB extends jB.i {
-       constructor(BB, OB) {
-         super(BB, jB.g.RequestFileError), this.request = OB, this.name = "RequestFileError", jB.d._setPrototypeOf(this, NB.prototype)
+       buildFromUnknown(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const OW = iW && iW.mechanism || {
+             handled: !0,
+             type: "generic"
+           },
+           mW = this.buildCoercingContext(OW, iW, 0).apply(WW),
+           EW = this.buildParsingContext(iW),
+           NW = this.parseStacktrace(mW, EW);
+         return {
+           $exception_list: this.convertToExceptionList(NW, OW),
+           $exception_level: "error"
+         }
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L862-L865` → after: `L709-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L709-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L709-L714) · [Before (L862-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L862-L865)

```diff
-     }
-     class RB extends jB.i {
-       constructor(BB, OB) {
-         super(BB, jB.g.ReadFileError), this.file = OB, this.name = "ReadFileError", jB.d._setPrototypeOf(this, RB.prototype)
+       modifyFrames(WW) {
+         var iW = this;
+         return RO((function*() {
+           for (const OW of WW) OW.stacktrace && OW.stacktrace.frames && KO(OW.stacktrace.frames) && (OW.stacktrace.frames = yield iW.applyModifiers(OW.stacktrace.frames));
+           return WW
+         }))()
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L867-L949` → after: `L716-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L716-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L716-L722) · [Before (L867-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L867-L949)

```diff
-     }
-     const WB = {
-         DefaultRetryStrategy: class {
-           static ExponentialBackoff() {
-             let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
-               OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
-             return (GB, YB, DB) => 0 !== YB.status || DB >= BB || -1 !== GB.indexOf("file:") ? -1 : Math.pow(2, DB) * OB
-           }
-         }.ExponentialBackoff(),
-         BaseUrl: "",
-         CorsBehavior: "anonymous",
-         PreprocessUrl: BB => BB,
-         ScriptBaseUrl: "",
-         ScriptPreprocessUrl: BB => BB,
-         CleanUrl: BB => BB = BB.replace(/#/gm, "%23")
-       },
- ... (67 more removed lines; see GitHub link above)
+       coerceFallback(WW) {
+         var iW;
+         return {
+           type: "Error",
+           value: "Unknown error",
+           stack: null === (iW = WW.syntheticException) || void 0 === iW ? void 0 : iW.stack,
+           synthetic: !0
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L951` → after: `L724-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L724-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L724-L753) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L951)

```diff
-         AB(QB, qB);
+       }
+       parseStacktrace(WW, iW) {
+         var OW;
+         let mW, EW;
+         if (null != WW.cause && (mW = this.parseStacktrace(WW.cause, iW)), "" != WW.stack && null != WW.stack) try {
+           EW = this.applyChunkIds(this.stackParser(WW.stack, WW.synthetic ? iW.skipFirstLines : 0), iW.chunkIdMap)
+         } catch (WW) {}
+         return KE(KE({}, WW), {}, {
+           cause: mW,
+           stack: EW,
+           errors: null === (OW = WW.errors) || void 0 === OW ? void 0 : OW.map((WW => this.parseStacktrace(WW, iW)))
+         })
+       }
+       applyChunkIds(WW, iW) {
+         return WW.map((WW => (WW.filename && iW && (WW.chunk_id = iW[WW.filename]), WW)))
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L953-L995` → after: `L755-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L755-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L755-L783) · [Before (L953-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L953-L995)

```diff
-           NB = () => {
-             for (const BB of ZB) BB.target.removeEventListener(BB.name, BB.handler);
-             ZB.length = 0
-           };
-         ZB.push({
-           target: qB,
-           name: "load",
-           handler: () => {
-             NB(), OB(qB), zB && qB.src && URL.revokeObjectURL(qB.src)
-           }
-         }), ZB.push({
-           target: qB,
-           name: "error",
-           handler: BB => {
-             NB(), lB(BB), zB && qB.src && URL.revokeObjectURL(qB.src)
-           }
- ... (27 more removed lines; see GitHub link above)
+           mW = (WW, EW, NW) => {
+             var PW;
+             const LW = OW.length,
+               cW = void 0 === EW ? KE(KE({
+                 type: "string" == typeof iW.type && iW.type.length > 0 ? iW.type : "generic"
+               }, "boolean" == typeof iW.handled ? {
+                 handled: iW.handled
+               } : void 0 === iW.handled ? {
+                 handled: !0
+               } : {}), {}, {
+                 synthetic: "boolean" == typeof iW.synthetic ? iW.synthetic : WW.synthetic,
+                 exception_id: LW
+               }) : {
+                 type: "chained",
+                 source: NW,
+                 synthetic: WW.synthetic,
+ ... (13 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L997-L1003` → after: `L785-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L785-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L785-L824) · [Before (L997-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L997-L1003)

```diff
-         if (!RB && !SB && DB && DB.enableTexturesOffline) DB.open(fB, nB);
-         else {
-           if (-1 !== QB.indexOf("file:")) {
-             const BB = decodeURIComponent(QB.substring(5).toLowerCase());
-             if (oB.FilesToLoad[BB] && "undefined" !== typeof URL) {
-               try {
-                 let OB;
+         return mW(WW), OW
+       }
+       buildParsingContext(WW) {
+         var iW;
+         return {
+           chunkIdMap: JE(this.stackParser),
+           skipFirstLines: null !== (iW = WW.skipFirstLines) && void 0 !== iW ? iW : 1
+         }
+       }
+       getAggregateErrors(WW) {
+         try {
+           if (VO(WW)) {
+             let OW = Object.getPrototypeOf(WW);
+             for (let mW = 0; OW && 100 > mW; mW++) {
+               var iW;
+               const mW = null === (iW = Object.getOwnPropertyDescriptor(OW, "constructor")) || void 0 === iW ? void 0 : iW.value;
+ ... (24 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1005-L1007` → after: `L826-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L826-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L826-L828) · [Before (L1005-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1005-L1007)

```diff
-                   OB = URL.createObjectURL(oB.FilesToLoad[BB])
-                 } catch (kB) {
-                   OB = URL.createObjectURL(oB.FilesToLoad[BB])
+                   return xW(iW)
+                 } finally {
+                   cW.pop()
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1009` → after: `L830-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L830-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L830-L856) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1009)

```diff
-                 qB.src = OB, zB = !0
+               }, mW > 4 || mW > 0 && -1 !== cW.indexOf(WW)) return OW.coerceFallback(tW);
+             const lW = "object" == typeof WW && null !== WW || "function" == typeof WW;
+             if (0 === mW && EW >= 50 || lW && LW.has(WW)) return;
+             lW && LW.add(WW), 0 === mW && EW++;
+             const AW = OW.getAggregateErrors(WW);
+             let bW, jW;
+             PW || (PW = !!AW);
+             try {
+               if (bW = OW.applyCoercers(WW, tW), !bW) throw wW
+             } catch (WW) {
+               if (WW === wW) return void(0 === mW && EW--);
+               if (!PW) throw WW;
+               bW = OW.coerceFallback(tW)
+             }
+             if (!AW || EW >= 50) return bW;
+             try {
+ ... (11 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1011` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L858) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1011)

```diff
-                 qB.src = ""
+                 EW++, mW = OW.coerceFallback(ZW(iW + 1))
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1013` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L860) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1013)

```diff
-               return qB
+               mW && UW.push(mW)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1016-L1018` → after: `L885-L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L885-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L885-L909) · [Before (L1016-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1016-L1018)

```diff
-           nB()
-         }
-         return qB
+         })
+       }
+     };
+     const nE = /^([a-z][a-z0-9.+-]+):/i,
+       uE = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];
+ 
+     function oE(WW) {
+       if (!WW || "<anonymous>" === WW) return !1;
+       const iW = nE.exec(WW);
+       return !iW || uE.includes(iW[1].toLowerCase())
+     }
+ 
+     function dE(WW, iW, OW, mW, EW) {
+       const NW = {
+         platform: WW,
+         filename: iW,
+ ... (9 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1020-L1041` → after: `L911-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L911-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L911-L918) · [Before (L1020-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1020-L1041)

```diff
-       nB = (BB, OB, GB, YB, DB) => {
-         const oB = new FileReader,
-           jB = {
-             onCompleteObservable: new QB.b,
-             abort: () => oB.abort()
-           };
-         return oB.onloadend = () => jB.onCompleteObservable.notifyObservers(jB), DB && (oB.onerror = () => {
-           DB(new RB(`Unable to read ${BB.name}`, BB))
-         }), oB.onload = BB => {
-           OB(BB.target.result)
-         }, GB && (oB.onprogress = GB), YB ? oB.readAsArrayBuffer(BB) : oB.readAsText(BB), jB
-       },
-       UB = (BB, OB, GB, YB, DB, yB, JB) => {
-         if (BB.name) return nB(BB, OB, GB, DB, yB ? BB => {
-           yB(void 0, BB)
-         } : void 0);
- ... (6 more removed lines; see GitHub link above)
+       vE = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
+       gE = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
+       DE = /\((\S*)(?::(\d+))(?::(\d+))\)/,
+       VE = (WW, iW) => {
+         const OW = vE.exec(WW);
+         if (OW) {
+           const [, WW, mW, EW] = OW;
+           return dE(iW, WW, "?", +mW, +EW)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1043-L1046` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L920) · [Before (L1043-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1043-L1046)

```diff
-         const {
-           match: PB,
-           type: pB
-         } = uB(MB);
+         const mW = gE.exec(WW);
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1048-L1056` → after: `L922-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L922-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L922-L924) · [Before (L1048-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1048-L1056)

```diff
-           const BB = {
-             onCompleteObservable: new QB.b,
-             abort: () => () => {}
-           };
-           try {
-             const BB = DB ? mB(MB) : IB(MB);
-             OB(BB, void 0, pB)
-           } catch (jB) {
-             yB ? yB(void 0, jB) : zB.b.Error(jB.message || "Failed to parse the Data URL")
+           if (mW[2] && 0 === mW[2].indexOf("eval")) {
+             const WW = DE.exec(mW[2]);
+             WW && (mW[2] = WW[1], mW[3] = WW[2], mW[4] = WW[3])
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1058-L1168` → after: `L926-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L926-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L926-L927) · [Before (L1058-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1058-L1168)

```diff
-           return lB.c.SetImmediate((() => {
-             BB.onCompleteObservable.notifyObservers(BB)
-           })), BB
-         }
-         return fB(MB, ((BB, GB) => {
-           OB(BB, GB?.responseURL, GB?.getResponseHeader("content-type"))
-         }), GB, YB, DB, yB ? BB => {
-           yB(BB.request, new ZB(BB.message, BB.request))
-         } : void 0, JB)
-       },
-       fB = (BB, OB, GB, oB, jB, yB, MB) => {
-         null !== oB && (oB ?? (oB = JB.b.LastCreatedScene?.offlineProvider)), BB = WB.CleanUrl(BB), BB = WB.PreprocessUrl(BB);
-         const PB = WB.BaseUrl + BB;
-         let lB = !1;
-         const pB = {
-             onCompleteObservable: new QB.b,
- ... (95 more removed lines; see GitHub link above)
+           const [WW, OW] = eE(mW[1] || "?", mW[2]);
+           return dE(iW, OW, WW, mW[3] ? +mW[3] : void 0, mW[4] ? +mW[4] : void 0)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1171-L1173` → after: `L930-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L930-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L930-L932) · [Before (L1171-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1171-L1173)

```diff
-       dB = () => "undefined" !== typeof location && "file:" === location.protocol,
-       KB = BB => qB.test(BB),
-       uB = BB => {
+       pE = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
+       fE = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
+       CE = (WW, iW) => {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1175-L1181` → after: `L934-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L934-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L934-L941) · [Before (L1175-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1175-L1181)

```diff
-         if (null === OB || 0 === OB.length) return {
-           match: !1,
-           type: ""
-         };
-         return {
-           match: !0,
-           type: OB[0].replace("data:", "").replace(";base64,", "")
+         if (OW) {
+           if (OW[3] && OW[3].indexOf(" > eval") > -1) {
+             const WW = fE.exec(OW[3]);
+             WW && (OW[1] = OW[1] || "eval", OW[3] = WW[1], OW[4] = WW[2], OW[5] = "")
+           }
+           let WW = OW[3],
+             mW = OW[1] || "?";
+           return [mW, WW] = eE(mW, WW), dE(iW, WW, mW, OW[4] ? +OW[4] : void 0, OW[5] ? +OW[5] : void 0)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1183` → after: `L943-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L943-L944) · [Before (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1183)

```diff
-       };
+       },
+       XE = /\(error: (.*)\)/;
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1185-L1186` → after: `L946-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L946-L947) · [Before (L1185-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1185-L1186)

```diff
-     function mB(BB) {
-       return (0, yB.e)(BB.split(",")[1])
+     function BE(WW, iW) {
+       return WW.filename === iW.filename && WW.function === iW.function && WW.module === iW.module && WW.lineno === iW.lineno && WW.colno === iW.colno
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1237-L1238` → after: `L950-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L950-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L950-L966) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1237-L1238)

```diff
-     function gB() {
-       LB || (LB = !0, iB(mB, IB, WB, KB, dB, UB, SB, nB, fB, AB), MB.b.loadFile = UB, MB.b.loadImage = SB, PB.m.loadFile = UB)
+     function qE(WW) {
+       for (let iW = 1; 10 >= iW; iW++) {
+         const OW = WW.length - 2 * iW;
+         if (0 > OW) break;
+         let mW = !0;
+         for (let EW = 0; iW > EW; EW++)
+           if (!BE(WW[OW + EW], WW[OW + iW + EW])) {
+             mW = !1;
+             break
+           } if (mW) {
+           for (let mW = 0; iW > mW; mW++) WW[OW + mW] = WW[OW + iW + mW];
+           return WW.length = OW + iW, {
+             start: OW,
+             length: iW
+           }
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1249-L1285` → after: `L969-L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L969-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L969-L973) · [Before (L1249-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1249-L1285)

```diff
-     function DB() {
-       if (YB) return YB;
-       const BB = new ArrayBuffer(4),
-         OB = new Float32Array(BB),
-         GB = new Uint32Array(BB),
-         DB = new Uint32Array(512),
-         QB = new Uint32Array(512);
-       for (let YB = 0; YB < 256; ++YB) {
-         const BB = YB - 127;
-         BB < -24 ? (DB[YB] = 0, DB[256 | YB] = 32768, QB[YB] = 24, QB[256 | YB] = 24) : BB < -14 ? (DB[YB] = 1024 >> -BB - 14, DB[256 | YB] = 1024 >> -BB - 14 | 32768, QB[YB] = -BB - 1, QB[256 | YB] = -BB - 1) : BB <= 15 ? (DB[YB] = BB + 15 << 10, DB[256 | YB] = BB + 15 << 10 | 3 … [truncated]
-       }
-       const oB = new Uint32Array(2048),
-         jB = new Uint32Array(64),
-         yB = new Uint32Array(64);
-       for (let YB = 1; YB < 1024; ++YB) {
-         let BB = YB << 13,
- ... (21 more removed lines; see GitHub link above)
+     function RE(WW, iW) {
+       const OW = iW.start + iW.length,
+         mW = IE(WW, iW);
+       mW && WW.splice(OW + mW === WW.length ? OW : iW.start, mW)
+     }
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1287-L1292` → after: `L975-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L975-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L975-L978) · [Before (L1287-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1287-L1292)

```diff
-     function oB(BB) {
-       const OB = DB();
-       OB.floatView[0] = BB;
-       const GB = OB.uint32View[0],
-         YB = GB >> 23 & 511;
-       return OB.baseTable[YB] + ((8388607 & GB) >> OB.shiftTable[YB])
+     function GE(WW, iW) {
+       let OW = iW.start;
+       for (; OW > 0 && BE(WW[OW - 1], WW[OW - 1 + iW.length]);) OW--;
+       return iW.start - OW
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1295-L1297` → after: `L981-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L981-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L981-L985) · [Before (L1295-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1295-L1297)

```diff
-     function jB(BB) {
-       const OB = DB();
-       return OB.uint32View[0] = OB.mantissaTable[OB.offsetTable[BB >> 10] + (1023 & BB)] + OB.exponentTable[BB >> 10], OB.floatView[0]
+     function IE(WW, iW) {
+       const OW = iW.start + iW.length;
+       let mW = OW;
+       for (; WW.length > mW && BE(WW[mW], WW[mW - iW.length]);) mW++;
+       return mW - OW
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1299-L1338` → after: `L987-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L987-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L987-L992) · [Before (L1299-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1299-L1338)

```diff
-   },
-   41058: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => QB,
-       g: () => DB,
-       k: () => YB
-     });
-     const YB = BB => {
-         const OB = ArrayBuffer.isView(BB) ? new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength) : new Uint8Array(BB);
-         return "function" === typeof OB.toBase64 ? OB.toBase64() : function(BB) {
-           const OB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
-           let GB, YB, DB, QB, oB, jB, yB, JB = "",
-             MB = 0;
-           for (; MB < BB.length;) GB = BB[MB++], YB = MB < BB.length ? BB[MB++] : Number.NaN, DB = MB < BB.length ? BB[MB++] : Number.NaN, QB = GB >> 2, oB = (3 & GB) << 4 | YB >> 4, jB = (15 & YB) << 2 | DB >> 6, yB = 63 & DB, isNaN(YB) ? jB = yB = 64 : isNaN(DB) && (yB = 64), J … [truncated]
-           return JB
-         }(OB)
- ... (24 more removed lines; see GitHub link above)
+ 
+     function aE(WW, iW) {
+       const OW = iW[0];
+       let mW = WW.length - (OW ? GE(WW, OW) : 0);
+       for (const EW of iW) mW -= IE(WW, EW);
+       return mW
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1342-L1345` → after: `L996-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L996-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L996-L999) · [Before (L1342-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1342-L1345)

```diff
-       try {
-         if (BB()) return OB(), !0
-       } catch (YB) {
-         return GB?.(YB), !0
+       for (let mW = 0; WW.length > mW; mW++) {
+         const EW = WW[(iW + mW) % WW.length],
+           NW = WW[(OW + mW) % WW.length];
+         if (EW !== NW) return NW > EW
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1349-L1366` → after: `L1003-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1003-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1003-L1093) · [Before (L1349-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1349-L1366)

```diff
-     const oB = function(BB, OB, GB) {
-       let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
-         DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
-         oB = arguments.length > 6 ? arguments[6] : void 0;
-       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && QB(BB, OB, GB)) return null;
-       const jB = setInterval((() => {
-         QB(BB, OB, GB) ? clearInterval(jB) : (DB -= YB, DB < 0 && (clearInterval(jB), GB?.(new Error("Operation timed out after maximum retries. " + (oB || "")), !0)))
-       }), YB);
-       return () => clearInterval(jB)
-     }
-   },
-   41041: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => YB
-     });
-     class YB {
- ... (2 more removed lines; see GitHub link above)
+     var zE = class {
+         match(WW) {
+           return this.isDOMException(WW) || this.isDOMError(WW)
+         }
+         coerce(WW, iW) {
+           const OW = JO(WW.stack);
+           return {
+             type: this.getType(WW),
+             value: this.getValue(WW),
+             stack: OW ? WW.stack : void 0,
+             cause: WW.cause ? iW.next(WW.cause) : void 0,
+             synthetic: !1
+           }
+         }
+         getType(WW) {
+           return this.isDOMError(WW) ? "DOMError" : "DOMException"
+ ... (75 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1368-L1369` → after: `L1095-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1095-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1095-L1103) · [Before (L1368-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1368-L1369)

```diff
-       static get IsCustomRequestAvailable() {
-         return Object.keys(YB.CustomRequestHeaders).length > 0 || YB.CustomRequestModifiers.length > 0
+       coerce(WW, iW) {
+         var OW;
+         const [mW, EW] = this.getInfos(WW);
+         return {
+           type: null != mW ? mW : "Error",
+           value: null != EW ? EW : WW,
+           stack: null === (OW = iW.syntheticException) || void 0 === OW ? void 0 : OW.stack,
+           synthetic: !0
+         }
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1371-L1372` → after: `L1105-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1105-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1105-L1109) · [Before (L1371-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1371-L1372)

```diff
-       static _CleanUrl(BB) {
-         return BB = (BB = BB.replace("file:http:", "http:")).replace("file:https:", "https:")
+       getInfos(WW) {
+         let iW = "Error",
+           OW = WW;
+         const mW = WW.match(WN);
+         return mW && (iW = mW[1], OW = mW[2]), [iW, OW]
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1374-L1375` → after: `L1111-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1111-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1111-L1120) · [Before (L1374-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1374-L1375)

```diff
-       static _ShouldSkipRequestModifications(BB) {
-         return YB.SkipRequestModificationForBabylonCDN && (BB.includes("preview.babylonjs.com") || BB.includes("cdn.babylonjs.com"))
+     };
+     const ON = ["fatal", "error", "warning", "log", "info", "debug"];
+ 
+     function mN(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
+       const OW = Object.keys(WW);
+       if (OW.sort(), !OW.length) return "[object has no keys]";
+       for (let mW = OW.length; mW > 0; mW--) {
+         const WW = OW.slice(0, mW).join(", ");
+         if (iW >= WW.length) return mW === OW.length ? WW : WW.length > iW ? `${WW.slice(0,iW)}...` : WW
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1377-L1387` → after: `L1122-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1122-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1122-L1126) · [Before (L1377-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1377-L1387)

```diff
-       static _CollectCustomizations(BB) {
-         const OB = {
-           ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
-         };
-         if (YB._ShouldSkipRequestModifications(BB)) return {
-           url: BB,
-           headers: OB
-         };
-         for (const DB in YB.CustomRequestHeaders) {
-           const BB = YB.CustomRequestHeaders[DB];
-           BB && (OB[DB] = BB)
+       return ""
+     }
+     var EN = class {
+         match(WW) {
+           return "object" == typeof WW && null !== WW
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1389-L1391` → after: `L1128-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1128-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1128-L1136) · [Before (L1389-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1389-L1391)

```diff
-         const GB = {
-           setRequestHeader: (BB, GB) => {
-             OB[BB] = GB
+         coerce(WW, iW) {
+           var OW, mW;
+           const EW = this.getErrorPropertyFromObject(WW);
+           return EW ? iW.apply(EW) : {
+             type: this.getType(WW),
+             value: this.getValue(WW),
+             stack: null !== (OW = this.getStack(WW)) && void 0 !== OW ? OW : null === (mW = iW.syntheticException) || void 0 === mW ? void 0 : mW.stack,
+             level: this.isSeverityLevel(WW.level) ? WW.level : "error",
+             synthetic: !0
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1399-L1401` → after: `L1139-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1139-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1139-L1142) · [Before (L1399-L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1399-L1401)

```diff
-         return {
-           url: BB,
-           headers: OB
+         getType(WW) {
+           if (pO(WW)) return WW.constructor.name;
+           const iW = "name" in WW ? WW.name : void 0;
+           return JO(iW) && !hO(iW) ? iW : "Error"
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1403-L1416` → after: `L1144-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1144-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1144-L1151) · [Before (L1403-L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1403-L1416)

```diff
-       }
-       static async FetchAsync(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         const GB = OB.method ?? "GET";
-         if ("undefined" !== typeof fetch) {
-           const {
-             url: DB,
-             headers: QB
-           } = YB._CollectCustomizations(YB._CleanUrl(BB), OB.headers ?? {});
-           return await fetch(DB, {
-             method: GB,
-             headers: QB,
-             body: OB.body ?? void 0
-           })
+         getValue(WW) {
+           if ("name" in WW && "string" == typeof WW.name) {
+             let iW = `'${WW.name}' captured as exception`;
+             return "message" in WW && "string" == typeof WW.message && (iW += ` with message: '${WW.message}'`), iW
+           }
+           if ("message" in WW && "string" == typeof WW.message) return WW.message;
+           const iW = this.getObjectClassName(WW);
+           return `${iW&&"Object"!==iW?`'${iW}'`:"Object"} captured as exception with keys: ${mN(WW)}`
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1418-L1440` → after: `L1153-L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1153-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1153-L1325) · [Before (L1418-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1418-L1440)

```diff
-         return await new Promise(((DB, QB) => {
-           const oB = new YB;
-           oB.responseType = "arraybuffer", oB.addEventListener("readystatechange", (() => {
-             if (4 === oB.readyState)
-               if (oB.status >= 200 && oB.status < 300) {
-                 const BB = "undefined" !== typeof Headers ? new Headers : void 0,
-                   OB = oB.getResponseHeader("Content-Type");
-                 OB && BB && BB.set("Content-Type", OB), "undefined" !== typeof Response ? DB(new Response(oB.response, {
-                   status: oB.status,
-                   statusText: oB.statusText,
-                   headers: BB
-                 })) : DB({
-                   ok: !0,
-                   status: oB.status,
-                   statusText: oB.statusText,
-                   headers: {
- ... (7 more removed lines; see GitHub link above)
+         isSeverityLevel(WW) {
+           return JO(WW) && !hO(WW) && ON.indexOf(WW) >= 0
+         }
+         getStack(WW) {
+           try {
+             return JO(WW.stacktrace) && WW.stacktrace.length > 0 ? WW.stacktrace : JO(WW.stack) && WW.stack.length > 0 ? WW.stack : void 0
+           } catch (WW) {
+             return
+           }
+         }
+         getErrorPropertyFromObject(WW) {
+           for (const iW in WW)
+             if ({}.hasOwnProperty.call(WW, iW)) {
+               const OW = WW[iW];
+               if (VO(OW)) return OW
+             }
+ ... (157 more added lines; see GitHub link above)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1442-L1443` → after: `L1327-L1412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1327-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1327-L1412) · [Before (L1442-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1442-L1443)

```diff
-       get requestURL() {
-         return this._requestURL
+     };
+ 
+     function jN(WW) {
+       return "string" == typeof WW || WW
+     }
+ 
+     function UN(WW) {
+       return "string" == typeof WW ? WW : void 0
+     }
+     const kN = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$proce … [truncated]
+       sN = "NativeGzipValidationError",
+       MN = WW => WW.length >= 2 && 31 === WW[0] && 139 === WW[1],
+       KN = (WW, iW) => WW === ZO.GZipJS || iW === ZO.GZipJS || "gzip" === iW,
+       SN = WW => !(!WW || "object" != typeof WW) && "NotReadableError" === ("name" in WW ? String(WW.name) : "");
+     let YN;
+     const yN = WW => {
+ ... (70 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1445-L1446` → after: `L1414-L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1414-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1414-L1470) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1445-L1446)

```diff
-       get onprogress() {
-         return this._xhr.onprogress
+       return EW
+     }
+     const nN = "[redacted]",
+       uN = /^[A-Za-z0-9+/\n\r]+=*$/,
+       oN = /^[A-Za-z0-9_-]+={0,2}$/,
+       dN = /[-_]/,
+       eN = /^data:[^,\s]*;base64,/i,
+       vN = /^[A-Za-z0-9+/_-]+={0,2}$/,
+       gN = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
+       DN = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
+       VN = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
+       pN = /[\s<>"]/,
+       fN = new RegExp(VN.source, "i"),
+       CN = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
+       XN = new RegExp(`^${CN.source}`, "i"),
+       BN = new RegExp(CN.source, "gi"),
+ ... (41 more added lines; see GitHub link above)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1448-L1449` → after: `L1472-L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1472-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1472-L1475) · [Before (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1448-L1449)

```diff
-       set onprogress(BB) {
-         this._xhr.onprogress = BB
+       return {
+         changed: mW,
+         lastFieldSensitive: EW,
+         serialized: OW.toString()
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1451-L1452` → after: `L1477-L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1477-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1477-L1487) · [Before (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1451-L1452)

```diff
-       get readyState() {
-         return this._xhr.readyState
+     }
+ 
+     function PP(WW, iW) {
+       if (!WW.includes("=")) return {
+         value: LP(WW, iW),
+         lastFieldSensitive: !1
+       };
+       const OW = NP(WW, iW);
+       return {
+         value: OW.changed ? OW.serialized : WW,
+         lastFieldSensitive: OW.lastFieldSensitive
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1454-L1455` → after: `L1489-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1489-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1489-L1523) · [Before (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1454-L1455)

```diff
-       get status() {
-         return this._xhr.status
+     }
+ 
+     function LP(WW, iW) {
+       return iW ? tP(WW, {
+         allowNestedUrls: !1,
+         stripPunctuation: !0
+       }) : fN.test(WW) ? nN : WW
+     }
+ 
+     function cP(WW, iW, OW) {
+       return "#" === WW ? !iW.fragment && (iW.fragment = !0) : "?" === WW && (iW.fragment ? "=" !== OW && !iW.fragmentQuery && (iW.fragmentQuery = !0) : !iW.query && (iW.query = !0))
+     }
+ 
+     function wP(WW, iW) {
+       var OW;
+       if (WW.length > 8192 && XN.test(WW)) return nN;
+ ... (19 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1457-L1458` → after: `L1525-L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1525-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1525-L1598) · [Before (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1457-L1458)

```diff
-       get statusText() {
-         return this._xhr.statusText
+       const PW = NW.search.slice(1),
+         LW = "" !== NW.hash,
+         cW = function(WW) {
+           const iW = WW.slice(1),
+             OW = iW.indexOf("?");
+           return 0 > OW ? {
+             head: iW,
+             tail: null
+           } : {
+             head: iW.slice(0, OW),
+             tail: iW.slice(OW + 1)
+           }
+         }(NW.hash);
+       if (mP(PW) || mP(cW.head) || mP(null !== (OW = cW.tail) && void 0 !== OW ? OW : "")) return nN + EW;
+       let wW = !1;
+       (NW.username || NW.password) && (NW.username = nN, NW.password = "", wW = !0);
+ ... (58 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1460-L1461` → after: `L1600-L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1600-L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1600-L1617) · [Before (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1460-L1461)

```diff
-       get response() {
-         return this._xhr.response
+       return iW % 10 == 0
+     }
+ 
+     function lP(WW) {
+       const iW = [];
+       for (let NW = QN.exec(WW); null !== NW; NW = QN.exec(WW)) iW.push({
+         digits: NW[0],
+         start: NW.index,
+         end: NW.index + NW[0].length
+       });
+       let OW = "",
+         mW = 0,
+         EW = 0;
+       for (; iW.length > EW;) {
+         let NW = "",
+           PW = -1;
+ ... (2 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1463-L1464` → after: `L1619-L1630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1619-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1619-L1630) · [Before (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1463-L1464)

```diff
-       get responseURL() {
-         return this._xhr.responseURL
+       return OW + WW.slice(mW)
+     }
+     const AP = {}.propertyIsEnumerable;
+ 
+     function bP(WW, iW) {
+       try {
+         return kP(WW, iW, {
+           ancestors: new WeakSet,
+           remainingNodes: 1e4
+         }, 0)
+       } catch (WW) {
+         return []
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1466-L1467` → after: `L1632-L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1632-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1632-L1670) · [Before (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1466-L1467)

```diff
-       get responseText() {
-         return this._xhr.responseText
+     }
+ 
+     function jP(WW, iW, OW, mW) {
+       if (0 >= OW.remainingNodes) return {
+         stringValue: EE
+       };
+       if (OW.remainingNodes--, dO(WW)) return {
+         boolValue: WW
+       };
+       if ("bigint" == typeof WW) return function(WW, iW) {
+         const OW = WW.toString(),
+           mW = BigInt("9223372036854775808");
+         return WW >= mW || -mW > WW ? (null == iW || iW.debug(`Attribute ${OW} is outside the int64 range; encoding it as a string`), {
+           stringValue: OW
+         }) : {
+           intValue: OW
+ ... (23 more added lines; see GitHub link above)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1469-L1470` → after: `L1672-L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1672-L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1672-L1712) · [Before (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1469-L1470)

```diff
-       get responseType() {
-         return this._xhr.responseType
+       if ("string" == typeof WW) return {
+         stringValue: PE(WW)
+       };
+       if ("function" == typeof WW) return {
+         stringValue: "[Function]"
+       };
+       if ("symbol" == typeof WW) return {
+         stringValue: String(WW)
+       };
+       if ("object" == typeof WW && null !== WW) {
+         if (OW.ancestors.has(WW)) return {
+           stringValue: "[Circular]"
+         };
+         if (mW >= 20) return {
+           stringValue: EE
+         };
+ ... (25 more added lines; see GitHub link above)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1472-L1473` → after: `L1714-L1715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1714-L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1714-L1715) · [Before (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1472-L1473)

```diff
-       set responseType(BB) {
-         this._xhr.responseType = BB
+       return {
+         stringValue: PE(String(WW))
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1475-L1476` → after: `L1717-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1717-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1717-L1730) · [Before (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1475-L1476)

```diff
-       get timeout() {
-         return this._xhr.timeout
+     }
+ 
+     function UP(WW, iW, OW, mW) {
+       const EW = [],
+         NW = Math.min(WW.length, 1e3);
+       let PW = 0;
+       for (; NW > PW && OW.remainingNodes > 0; PW++) try {
+         const NW = PW in WW ? WW[PW] : void 0;
+         if (nO(NW)) continue;
+         EW.push(jP(NW, iW, OW, mW))
+       } catch (WW) {
+         EW.push({
+           stringValue: NE
+         })
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1478-L1479` → after: `L1732-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1732-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1732-L1833) · [Before (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1478-L1479)

```diff
-       set timeout(BB) {
-         this._xhr.timeout = BB
+       return WW.length > PW && EW.push({
+         stringValue: EE
+       }), EW
+     }
+ 
+     function kP(WW, iW, OW, mW) {
+       const EW = [];
+       for (const NW in WW)
+         if (AP.call(WW, NW)) {
+           if (!NW) {
+             null == iW || iW.debug("Dropping an attribute with an empty key");
+             continue
+           }
+           if (EW.length >= 1e3 || 0 >= OW.remainingNodes) {
+             null == iW || iW.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
+             break
+ ... (86 more added lines; see GitHub link above)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1481-L1482` → after: `L1835-L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1835-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1835-L1871) · [Before (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1481-L1482)

```diff
-       addEventListener(BB, OB, GB) {
-         this._xhr.addEventListener(BB, OB, GB)
+     }
+ 
+     function JP(WW, iW, OW, mW) {
+       const EW = WW.level || "info",
+         {
+           text: NW,
+           number: PW
+         } = YP[EW] || yP,
+         LW = function() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+           return String(WW) + "000000"
+         }(uO(mW) ? mW : void 0),
+         cW = {};
+       iW.distinctId && (cW.posthogDistinctId = iW.distinctId), iW.sessionId && (cW.sessionId = iW.sessionId), iW.windowId && (cW["window.id"] = iW.windowId), nO(iW.sessionStartTimestamp) || (cW.sessionStartTimestamp = String(iW.sessionStartTimestamp)), nO(iW.lastActivityTimestamp … [truncated]
+       const wW = KE({}, cW),
+         tW = WW.attributes;
+ ... (21 more added lines; see GitHub link above)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1484-L1485` → after: `L1873-L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1873-L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1873-L1903) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1484-L1485)

```diff
-       removeEventListener(BB, OB, GB) {
-         this._xhr.removeEventListener(BB, OB, GB)
+       const ZW = {
+         timeUnixNano: LW,
+         observedTimeUnixNano: LW,
+         severityNumber: PW,
+         severityText: NW,
+         body: {
+           stringValue: TP(WW.body)
+         },
+         attributes: bP(wW, OW)
+       };
+       return WW.trace_id && (ZW.traceId = WW.trace_id), WW.span_id && (ZW.spanId = WW.span_id), TO(WW.trace_flags) || (ZW.flags = WW.trace_flags), ZW
+     }
+ 
+     function hP(WW, iW, OW) {
+       return sP(WW, iW, OW)
+     }
+ ... (15 more added lines; see GitHub link above)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1487-L1488` → after: `L1905-L1908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1905-L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1905-L1908) · [Before (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1487-L1488)

```diff
-       abort() {
-         this._xhr.abort()
+     }
+     var nP = class {
+       constructor(WW) {
+         this._onFire = WW, this._firesAt = 0
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1490-L1491` → after: `L1910-L1911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1910-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1910-L1911) · [Before (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1490-L1491)

```diff
-       send(BB) {
-         this._xhr.send(BB)
+       get pending() {
+         return !!this._timer
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1493-L1499` → after: `L1913-L1916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1913-L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1913-L1916) · [Before (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1493-L1499)

```diff
-       open(BB, OB, GB) {
-         const {
-           url: DB,
-           headers: QB
-         } = YB._CollectCustomizations(OB, GB);
-         this._requestURL = YB._CleanUrl(DB), this._xhr.open(BB, this._requestURL, !0);
-         for (const YB in QB) this._xhr.setRequestHeader(YB, QB[YB])
+       arm(WW) {
+         this.clear(), this._firesAt = Date.now() + WW, this._timer = bE((() => {
+           this._timer = void 0, this._onFire()
+         }), WW)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1501-L1502` → after: `L1918-L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1918-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1918-L1919) · [Before (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1501-L1502)

```diff
-       setRequestHeader(BB, OB) {
-         this._xhr.setRequestHeader(BB, OB)
+       armNoEarlierThan(WW) {
+         this._timer && Date.now() + WW <= this._firesAt || this.arm(WW)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1504-L1505` → after: `L1921-L1922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1921-L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1921-L1922) · [Before (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1504-L1505)

```diff
-       getResponseHeader(BB) {
-         return this._xhr.getResponseHeader(BB)
+       clear() {
+         this._timer && (clearTimeout(this._timer), this._timer = void 0)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L1508` → after: `L1929-L12783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1929-L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/283.js#L1929-L12783) · [Before (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/283.js#L1508)

```diff
-     YB.CustomRequestHeaders = {}, YB.CustomRequestModifiers = new Array, YB.SkipRequestModificationForBabylonCDN = !0
+ 
+     function oP(WW, iW, OW, mW) {
+       const EW = Math.min(Math.max(0, iW - 1), 6),
+         NW = WW * Math.pow(2, EW);
+       return Math.round((void 0 === mW ? NW : Math.min(NW, Math.max(mW, WW))) * OW)
+     }
+     var dP = class {
+       constructor(WW, iW, OW, mW, EW) {
+         let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
+           PW = arguments.length > 6 ? arguments[6] : void 0;
+         var LW;
+         this._instance = WW, this._config = iW, this._logger = OW, this._getContext = mW, this._onReady = EW, this._waitForStoragePersist = NW, this._scopeName = PW, this._flushTimer = new nP((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance … [truncated]
+       }
+       clearQueue() {
+         this._queueGeneration++, this._instance.setPersistedProperty(tO.LogsQueue, [])
+       }
+ ... (10839 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/284.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/284.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/284.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/284.js#L4-L6)

```diff
-   41103: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => QB
+   41336: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       playDocsSound: () => cW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L8-L19` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/284.js#L8-L26) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/284.js#L8-L19)

```diff
-     var YB = GB(39366),
-       DB = GB(37823);
-     class QB {
-       static Instantiate(BB) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[BB]) return this.RegisteredExternalClasses[BB];
-         const OB = (0, DB.c)(BB);
-         if (OB) return OB;
-         YB.b.Warn(BB + " not found, you may have missed an import.");
-         const GB = BB.split(".");
-         let QB = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let YB = 0, DB = GB.length; YB < DB; YB++) QB = QB[GB[YB]];
-         return "function" !== typeof QB ? null : QB
+     var mW = OW(5615),
+       EW = OW(37559),
+       NW = OW(1185),
+       PW = OW(37563);
+     const LW = new Map;
+ 
+     function cW(WW, iW, OW, cW, wW) {
+       let tW, ZW = 0;
+       if (iW) tW = new mW.Howl({
+         src: [`${NW.clientSideServerUrls.staticUrl}/sounds/music/${WW}.mp3`],
+         html5: !0,
+         volume: OW
+       });
+       else {
+         const iW = (0, EW.u)(WW);
+         ZW = iW.ms / 1e3, tW = LW.get(WW), tW || (tW = new mW.Howl({
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L21-L279` → after: `L28-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L28-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/284.js#L28-L71) · [Before (L21-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/284.js#L21-L279)

```diff
-     }
-     QB.RegisteredExternalClasses = {}
-   },
-   40911: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => DB
-     });
-     var YB = GB(40870);
-     class DB {
-       static get Now() {
-         return (0, YB.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
-       }
-     }
-   },
-   40932: (BB, OB, GB) => {
-     function YB(BB) {
- ... (243 more removed lines; see GitHub link above)
+       const xW = iW ? tW.play() : tW.play(PW.d);
+       tW.volume(OW, xW), cW > 0 && tW.seek(cW, xW);
+       const lW = () => {
+         const WW = tW.duration();
+         return iW || WW > 0 ? WW : ZW
+       };
+       let AW = !1;
+       const bW = WW => {
+           AW || (AW = !0, tW.off("play", jW, xW), tW.off("end", UW, xW), tW.off("loaderror", sW), tW.off("playerror", kW, xW), iW && tW.unload(), wW.onEnd(WW))
+         },
+         jW = () => {
+           wW.onPlay(lW())
+         },
+         UW = () => {
+           bW(!1)
+         },
+ ... (28 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/285.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/285.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L4-L6)

```diff
-   41436: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => YB
+   41350: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => IW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L8-L195` → after: `L8-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L8-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L8-L102) · [Before (L8-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L8-L195)

```diff
-     let YB = !1
-   },
-   40992: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => pB
-     });
-     var YB = GB(40998),
-       DB = GB(41004),
-       QB = GB(37802),
-       oB = GB(37778),
-       jB = GB(37796),
-       yB = GB(38589),
-       JB = GB(41015);
-     class MB {
-       get wrapU() {
-         return this._wrapU
- ... (172 more removed lines; see GitHub link above)
+     OW(7436);
+     var mW = OW(62),
+       EW = OW(41359),
+       NW = OW(41604),
+       PW = OW(41715),
+       LW = OW(41760),
+       cW = OW(41782),
+       wW = OW(38369),
+       tW = OW(38235),
+       ZW = OW(41916),
+       xW = OW(41966),
+       lW = (OW(41997), OW(1217)),
+       AW = OW(182),
+       bW = OW(1172),
+       jW = OW(25),
+       UW = OW(3809),
+ ... (79 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L197-L286` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L104-L107) · [Before (L197-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L197-L286)

```diff
-           this.JF()?.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this)))
-         }
-         get isRGBD() {
-           return null != this._texture && this._texture._isRGBD
-         }
-         set isRGBD(BB) {
-           BB !== this.isRGBD && (this._texture && (this._texture._isRGBD = BB), this.JF()?.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))))
-         }
-         get noMipmap() {
-           return !1
-         }
-         get lodGenerationOffset() {
-           return this._texture ? this._texture._lodGenerationOffset : 0
-         }
-         set lodGenerationOffset(BB) {
-           this._texture && (this._texture._lodGenerationOffset = BB)
- ... (74 more removed lines; see GitHub link above)
+           return {
+             positions: Int32Array.from(OW),
+             values: Float64Array.from(mW),
+             count: mW.length
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L288-L324` → after: `L109-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L109-L115) · [Before (L288-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L288-L324)

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
-           const BB = this.JF();
-           BB && BB.markAllMaterialsAsDirty(1)
-         }
- ... (21 more removed lines; see GitHub link above)
+         }(iW, ni)), [iW, ni]),
+         vi = yW * Ni.cameraFOV / 100,
+         gi = Zi.height > 0 ? Zi.width / Zi.height : 1,
+         Di = (0, mW.useMemo)((() => function(WW, iW) {
+           return {
+             min: [WW.min[0] - iW[0], WW.min[1] - iW[1], WW.min[2] - iW[2]],
+             max: [WW.max[0] - iW[0] + 1, WW.max[1] - iW[1] + 1, WW.max[2] - iW[2] + 1]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L326-L337` → after: `L117-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L117-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L117-L132) · [Before (L326-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L326-L337)

```diff
-         }
-         _readPixelsSync() {
-           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-             OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-             GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-             YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-             DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-           if (!this._texture) return null;
-           const QB = this.getSize();
-           let oB = QB.width,
-             jB = QB.height;
-           const yB = this._getEngine();
+         }(pW, ni)), [pW, ni]),
+         Vi = Oi(Di, gi, vi),
+         fi = null !== Ji && void 0 !== Ji ? Ji : Vi,
+         Ci = (0, mW.useRef)({
+           fittedView: Vi,
+           fieldOfView: vi,
+           mouseSensitivity: Ni.mouseSensitivity,
+           canLock: ji
+         });
+       Ci.current = {
+         fittedView: Vi,
+         fieldOfView: vi,
+         mouseSensitivity: Ni.mouseSensitivity,
+         canLock: ji
+       };
+       const Xi = (0, mW.useMemo)((() => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L339-L362` → after: `L134-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L134-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L134-L172) · [Before (L339-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L339-L362)

```diff
-           0 != OB && (oB /= Math.pow(2, OB), jB /= Math.pow(2, OB), oB = Math.round(oB), jB = Math.round(jB));
-           try {
-             return this._texture.isCube ? yB._readTexturePixelsSync(this._texture, oB, jB, BB, OB, GB, YB, DB) : yB._readTexturePixelsSync(this._texture, oB, jB, -1, OB, GB, YB, DB)
-           } catch (JB) {
-             return null
-           }
-         }
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
-         }
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
-         }
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
-         }
- ... (8 more removed lines; see GitHub link above)
+           const WW = (WW, OW, mW) => {
+               var EW, NW, PW;
+               return null !== (EW = null === (NW = iW.frequencies[WW + ni[0]]) || void 0 === NW || null === (PW = NW[OW + ni[1]]) || void 0 === PW ? void 0 : PW[mW + ni[2]]) && void 0 !== EW ? EW : 0
+             },
+             mW = function(WW, iW, OW, mW) {
+               let EW = 0,
+                 NW = 1 / 0;
+               for (const ZW of [0, 1, 2]) {
+                 if (0 === iW[ZW]) {
+                   if (WW[ZW] < 0 || WW[ZW] > OW[ZW]) return null;
+                   continue
+                 }
+                 const mW = (0 - WW[ZW]) / iW[ZW],
+                   PW = (OW[ZW] - WW[ZW]) / iW[ZW];
+                 EW = Math.max(EW, Math.min(mW, PW)), NW = Math.min(NW, Math.max(mW, PW))
+               }
+ ... (23 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L364-L382` → after: `L174-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L174-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L174-L186) · [Before (L364-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L364-L382)

```diff
-           this.lF.notifyObservers(this), this.lF.clear(), this.metadata = null, super.dispose()
-         }
-         serialize() {
-           let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           if (!this.name && !BB) return null;
-           const OB = zB.d.Serialize(this);
-           return zB.d.AppendSerializedAnimations(this, OB), OB
-         }
-         static WhenAllReady(BB, OB) {
-           let GB = BB.length;
-           if (0 !== GB)
-             for (let YB = 0; YB < BB.length; YB++) {
-               const DB = BB[YB];
-               if (DB.isReady()) 0 === --GB && OB();
-               else {
-                 const BB = DB.onLoadObservable;
- ... (3 more removed lines; see GitHub link above)
+         }), [Ki, iW, ni, fi, di, OW, dW]),
+         {
+           keyHandlers: Bi
+         } = (0, KW.d)({
+           isEnabled: Ki,
+           claimedKeyCodes: uW,
+           Xx: WW => {
+             Hi((iW => function(WW, iW) {
+               const OW = [Math.sin(WW.heading), 0, Math.cos(WW.heading)],
+                 mW = Pi(Pi(Li(OW, iW.forward), Li(ii(WW.heading), iW.right)), [0, iW.up, 0]);
+               return {
+                 ...WW,
+                 position: Pi(WW.position, mW)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L384-L458` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L188) · [Before (L384-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L384-L458)

```diff
-             } else OB()
-         }
-         static _IsScene(BB) {
-           return "Scene" === BB.getClassName()
-         }
-       }, (() => {
-         const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(LB[Symbol.metadata] ?? null) : void 0;
-         OB = [(0, DB.L)()], GB = [(0, DB.L)()], JB = [(0, DB.L)()], PB = [(0, DB.L)()], lB = [(0, DB.L)("hasAlpha")], pB = [(0, DB.L)("getAlphaFromRGB")], qB = [(0, DB.L)()], ZB = [(0, DB.L)("coordinatesIndex")], NB = [(0, DB.L)()], RB = [(0, DB.L)("coordinatesMode")], WB = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "wrapU" in BB,
-             get: BB => BB.wrapU
-           },
- ... (59 more removed lines; see GitHub link above)
+             }(null !== iW && void 0 !== iW ? iW : Ci.current.fittedView, WW)))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L460-L591` → after: `L190-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L190-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L190-L245) · [Before (L460-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L460-L591)

```diff
-           metadata: QB
-         }, null, gB), (0, YB.h)(BB, null, mB, {
-           kind: "getter",
-           name: "lodGenerationScale",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "lodGenerationScale" in BB,
-             get: BB => BB.lodGenerationScale
-           },
-           metadata: QB
-         }, null, gB), (0, YB.h)(BB, null, IB, {
-           kind: "getter",
-           name: "linearSpecularLOD",
-           static: !1,
-           private: !1,
- ... (116 more removed lines; see GitHub link above)
+           onZoomChange: Yi
+         });
+       (0, mW.useEffect)((() => {
+         const WW = wi.current;
+         if (!WW) return;
+         let iW;
+         try {
+           iW = function(WW, iW) {
+             const OW = new EW.c(WW, !0, {
+                 stencil: !1
+               }, !0),
+               mW = new NW.c(OW),
+               [lW, AW, bW] = MW.O;
+             mW.clearColor = new wW.c(lW / 255, AW / 255, bW / 255, 1);
+             const jW = new PW.b("Heatmap3DCamera", tW.fA.Zero(), mW);
+             jW.fov = iW, jW.minZ = .05;
+ ... (40 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L594-L605` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L263-L264) · [Before (L594-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L594-L605)

```diff
-           metadata: QB
-         }, xB, tB), (0, YB.h)(null, null, NB, {
-           kind: "field",
-           name: "optimizeUVAllocation",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "optimizeUVAllocation" in BB,
-             get: BB => BB.optimizeUVAllocation,
-             set: (BB, OB) => {
-               BB.optimizeUVAllocation = OB
-             }
+           OW = () => {
+             ki.current && (ki.current = !1, Ui(!1))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L607-L617` → after: `L266-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L266-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L266-L326) · [Before (L607-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L607-L617)

```diff
-           metadata: QB
-         }, BO, OO), (0, YB.h)(null, null, RB, {
-           kind: "field",
-           name: "_coordinatesMode",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "_coordinatesMode" in BB,
-             get: BB => BB._coordinatesMode,
-             set: (BB, OB) => {
-               BB._coordinatesMode = OB
+           mW = iW => {
+             const OW = !Ci.current.canLock && document.activeElement === WW && 0 !== (1 & iW.buttons);
+             if (document.pointerLockElement !== WW && !OW) return;
+             const mW = Ci.current.mouseSensitivity * JW;
+             Hi((WW => function(WW, iW, OW) {
+               const mW = 2 * Math.PI;
+               return {
+                 ...WW,
+                 heading: ((WW.heading + iW) % mW + mW) % mW,
+                 pitch: Math.max(-DW, Math.min(DW, WW.pitch + OW))
+               }
+             }(null !== WW && void 0 !== WW ? WW : Ci.current.fittedView, iW.movementX * mW, iW.movementY * mW)))
+           };
+         return document.addEventListener("pointerlockchange", iW), document.addEventListener("pointerlockerror", OW), document.addEventListener("pointermove", mW), () => {
+           document.removeEventListener("pointerlockchange", iW), document.removeEventListener("pointerlockerror", OW), document.removeEventListener("pointermove", mW), document.pointerLockElement === WW && (0, SW.e)()
+         }
+ ... (45 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L620-L631` → after: `L361-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L361-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L361-L372) · [Before (L620-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L620-L631)

```diff
-           metadata: QB
-         }, GO, YO), (0, YB.h)(null, null, VB, {
-           kind: "field",
-           name: "wrapR",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "wrapR" in BB,
-             get: BB => BB.wrapR,
-             set: (BB, OB) => {
-               BB.wrapR = OB
-             }
+           tabIndex: 0,
+           "aria-label": IW("3D heatmap"),
+           onClick: () => {
+             const WW = wi.current;
+             if (null === WW) return;
+             if (WW.focus({
+                 preventScroll: !0
+               }), Ai || !ji) return;
+             const iW = WW.requestPointerLock();
+             iW instanceof Promise ? iW.catch((WW => {
+               WW instanceof DOMException && ("WrongDocumentError" === WW.name || "NotSupportedError" === WW.name) && Ui(!1)
+             })) : ki.current = !0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L633-L644` → after: `L374-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L374-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L374-L381) · [Before (L633-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L633-L644)

```diff
-           metadata: QB
-         }, DO, QO), (0, YB.h)(null, null, SB, {
-           kind: "field",
-           name: "anisotropicFilteringLevel",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "anisotropicFilteringLevel" in BB,
-             get: BB => BB.anisotropicFilteringLevel,
-             set: (BB, OB) => {
-               BB.anisotropicFilteringLevel = OB
-             }
+           ...Bi,
+           onKeyDown: WW => {
+             if (Ki && hW.has(WW.code)) return WW.preventDefault(), void(() => {
+               const WW = wi.current;
+               null !== WW && document.pointerLockElement === WW ? (0, SW.e)() : null === WW || void 0 === WW || WW.blur()
+             })();
+             const iW = HW[WW.code];
+             return Ki && void 0 !== iW ? (WW.preventDefault(), void XW(iW)) : Ki && (0, KW.c)("replayPlayPause", WW.code) && !(0, KW.c)("Zoom", WW.code) ? (WW.preventDefault(), void(WW.repeat || qW())) : Ki && WW.code === nW ? (WW.preventDefault(), void BW()) : Ki && WW.code ===  … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L646-L657` → after: `L383-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L383-L384) · [Before (L646-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L646-L657)

```diff
-           metadata: QB
-         }, oO, jO), (0, YB.h)(null, null, dB, {
-           kind: "field",
-           name: "invertZ",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "invertZ" in BB,
-             get: BB => BB.invertZ,
-             set: (BB, OB) => {
-               BB.invertZ = OB
-             }
+           onFocus: () => {
+             Mi(!0)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L659-L670` → after: `L386-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L386-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L386-L409) · [Before (L659-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L659-L670)

```diff
-           metadata: QB
-         }, yO, JO), (0, YB.h)(null, null, KB, {
-           kind: "field",
-           name: "lodLevelInAlpha",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "lodLevelInAlpha" in BB,
-             get: BB => BB.lodLevelInAlpha,
-             set: (BB, OB) => {
-               BB.lodLevelInAlpha = OB
-             }
+           onBlur: () => {
+             Mi(!1), Bi.onBlur()
+           }
+         }), xi && (0, YW.jsx)("div", {
+           className: "StudioHeatmap3DUnavailable SmallTextLight",
+           children: IW("3D view isn't available in this browser.")
+         }), Ki && (0, YW.jsx)("div", {
+           className: "StudioHeatmap3DCrosshair"
+         }), (0, YW.jsx)("div", {
+           className: "StudioHeatmap3DCoordinates SmallTextLight",
+           children: fi.position.map(((WW, iW) => (WW + ni[iW]).toFixed(2))).join(" ")
+         }), yi && (0, YW.jsx)(aW, {
+           heading: fi.heading,
+           pitch: fi.pitch,
+           onViewFrom: WW => {
+             const iW = Li(WW, -1),
+ ... (8 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L672-L683` → after: `L411-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L411-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L411-L417) · [Before (L672-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L672-L683)

```diff
-           metadata: QB
-         }, MO, PO), (0, YB.h)(null, null, iB, {
-           kind: "field",
-           name: "isRenderTarget",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "isRenderTarget" in BB,
-             get: BB => BB.isRenderTarget,
-             set: (BB, OB) => {
-               BB.isRenderTarget = OB
-             }
+           onTurn: (WW, iW) => {
+             Hi((OW => function(WW, iW, OW, mW) {
+               return mi(WW, iW, {
+                 heading: WW.heading + OW * RW,
+                 pitch: Math.max(-DW, Math.min(DW, WW.pitch + mW * RW))
+               })
+             }(null !== OW && void 0 !== OW ? OW : Ci.current.fittedView, Ei(Di), WW, iW)))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L685-L711` → after: `L419-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L419-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L419-L617) · [Before (L685-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L685-L711)

```diff
-           metadata: QB
-         }, zO, lO), QB && Object.defineProperty(BB, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: QB
-         })
-       })(), BB.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, BB
-     })();
-     (PB = pB.prototype).forceSphericalPolynomialsRecompute ?? (PB.forceSphericalPolynomialsRecompute = (0, lB.g)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(pB.prototype, "sphericalPolynomial") || Object.defineProperty(pB.prototype, "sph … [truncated]
-   },
-   41470: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => VB,
-       e: () => WB
-     });
- ... (11 more removed lines; see GitHub link above)
+           onFlip: () => {
+             Hi((WW => function(WW, iW) {
+               return mi(WW, iW, {
+                 heading: WW.heading + Math.PI,
+                 pitch: -WW.pitch
+               })
+             }(null !== WW && void 0 !== WW ? WW : Ci.current.fittedView, Ei(Di))))
+           }
+         }), null !== Xi && (0, YW.jsx)("div", {
+           className: "StudioHeatmapMapReadout SmallTextLight",
+           children: null === GW ? IW("studio:heatmapBlockReadout", {
+             x: Xi.x,
+             y: Xi.y,
+             z: Xi.z,
+             count: (0, lW.V)(Xi.value)
+           }) : GW(Xi.x, Xi.y, Xi.z, Xi.value)
+ ... (183 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L714-L724` → after: `L620-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L620-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L620-L657) · [Before (L714-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L714-L724)

```diff
-       let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const YB = OB.width,
-         DB = OB.height;
-       if (BB instanceof Float32Array) {
-         let OB = BB.byteLength / BB.BYTES_PER_ELEMENT;
-         const GB = new Uint8Array(OB);
-         for (; --OB >= 0;) {
-           let YB = BB[OB];
-           YB < 0 ? YB = 0 : YB > 1 && (YB = 1), GB[OB] = 255 * YB
-         }
-         BB = GB
+       const OW = (OW, mW, EW) => new tW.fA(0 === OW ? WW[0] : iW[0], 0 === mW ? WW[1] : iW[1], 0 === EW ? WW[2] : iW[2]),
+         mW = [];
+       for (const EW of [0, 1])
+         for (const WW of [0, 1]) mW.push([OW(0, EW, WW), OW(1, EW, WW)], [OW(EW, 0, WW), OW(EW, 1, WW)], [OW(EW, WW, 0), OW(EW, WW, 1)]);
+       return mW
+     }
+ 
+     function Wi(WW) {
+       return [Math.sin(WW.heading) * Math.cos(WW.pitch), -Math.sin(WW.pitch), Math.cos(WW.heading) * Math.cos(WW.pitch)]
+     }
+ 
+     function ii(WW) {
+       return [Math.cos(WW), 0, -Math.sin(WW)]
+     }
+ 
+     function Oi(WW, iW, OW) {
+ ... (22 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L726-L735` → after: `L659-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L659-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L659-L669) · [Before (L726-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L726-L735)

```diff
-       const QB = document.createElement("canvas");
-       QB.width = YB, QB.height = DB;
-       const oB = QB.getContext("2d");
-       if (!oB) return null;
-       const jB = oB.createImageData(YB, DB);
-       if (jB.data.set(BB), oB.putImageData(jB, 0, 0), GB) {
-         const BB = document.createElement("canvas");
-         BB.width = YB, BB.height = DB;
-         const OB = BB.getContext("2d");
-         return OB ? (OB.translate(0, DB), OB.scale(1, -1), OB.drawImage(QB, 0, 0), BB.toDataURL("image/png")) : null
+     }
+ 
+     function mi(WW, iW, OW) {
+       const mW = Ni(WW),
+         EW = Ni(OW),
+         NW = Pi(WW.position, Li(iW, -1)),
+         PW = [0, 1, 2].reduce(((WW, iW) => Pi(WW, Li(EW[iW], ci(NW, mW[iW])))), [0, 0, 0]);
+       return {
+         position: Pi(iW, PW),
+         heading: OW.heading,
+         pitch: OW.pitch
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L741-L746` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L674) · [Before (L741-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L741-L746)

```diff
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const YB = BB.getInternalTexture();
-       if (!YB) return null;
-       const DB = BB._readPixelsSync(OB, GB);
-       return DB ? pB(DB, BB.getSize(), YB.invertY) : null
+       return Li(Pi(WW.min, WW.max), .5)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L748-L754` → after: `L676-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L676-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L676-L680) · [Before (L748-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L748-L754)

```diff
-     async function ZB(BB) {
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const YB = BB.getInternalTexture();
-       if (!YB) return null;
-       const DB = await BB.readPixels(OB, GB);
-       return DB ? pB(DB, BB.getSize(), YB.invertY) : null
+ 
+     function Ni(WW) {
+       const iW = Wi(WW),
+         OW = ii(WW.heading);
+       return [iW, OW, wi(iW, OW)]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1230-L1231` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L683-L684) · [Before (L1230-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L1230-L1231)

```diff
-     function VB() {
-       AB || (AB = !0, (0, yB.f)("BABYLON.Texture", WB), RB.d._TextureParser = WB.Parse)
+     function Pi(WW, iW) {
+       return [WW[0] + iW[0], WW[1] + iW[1], WW[2] + iW[2]]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1233-L1289` → after: `L686-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L686-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/285.js#L686-L696) · [Before (L1233-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/285.js#L1233-L1289)

```diff
-   },
-   41015: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => YB
-     });
-     class YB {
-       constructor(BB, OB) {
-         this.width = BB, this.height = OB
-       }
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
-       }
-       getClassName() {
-         return "Size"
-       }
-       getHashCode() {
- ... (41 more removed lines; see GitHub link above)
+ 
+     function Li(WW, iW) {
+       return [WW[0] * iW, WW[1] * iW, WW[2] * iW]
+     }
+ 
+     function ci(WW, iW) {
+       return WW[0] * iW[0] + WW[1] * iW[1] + WW[2] * iW[2]
+     }
+ 
+     function wi(WW, iW) {
+       return [WW[1] * iW[2] - WW[2] * iW[1], WW[2] * iW[0] - WW[0] * iW[2], WW[0] * iW[1] - WW[1] * iW[0]]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/286.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/286.js` (83 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L4` → after: `L4-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L4-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L4-L642) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L4)

```diff
-   41237: (BB, OB, GB) => {
+   41723: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => jW,
+       h: () => sW
+     });
+     var mW = OW(41516),
+       EW = OW(41519),
+       NW = OW(41628),
+       PW = OW(38276),
+       LW = OW(38241),
+       cW = OW(41732),
+       wW = OW(39911),
+       tW = OW(38299),
+       ZW = OW(41415),
+       xW = OW(39271),
+       lW = OW(38937),
+ ... (623 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L9-L12` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L646) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L9-L12)

```diff
-     var YB = GB(39366),
-       DB = GB(41022),
-       QB = GB(41217),
-       oB = {};
+     var mW = OW(38241);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L14-L15` → after: `L648-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L648-L649) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L14-L15)

```diff
-       constructor(BB) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = BB, this.checkInputs = () => {}
+       constructor(WW, iW, OW) {
+         this._cameraPosition = iW, this._behavior = OW, this.activeInput = !1, this.speed = 1, this.xG = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L17-L19` → after: `L651-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L651-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L651-L656) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L17-L19)

```diff
-       add(BB) {
-         const OB = BB.getSimpleName();
-         this.attached[OB] ? YB.b.Warn("camera input of type " + OB + " already exists on camera") : (this.attached[OB] = BB, BB.camera = this.camera, BB.checkInputs && (this.checkInputs = this._addCheckInputs(BB.checkInputs.bind(BB))), this.attachedToElement && BB.attachControl(t … [truncated]
+       computeCurrentFrameDeltas() {
+         const WW = this._scene.VA().getDeltaTime(),
+           iW = this._getEffectiveDeltaMs(WW);
+         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
+         this.panDeltaCurrentFrame.Z5(0), this.rotationDeltaCurrentFrame.Z5(0), this.zoomDeltaCurrentFrame = 0;
+         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.yWW(this._calculateCurrentVelocity(this._p … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L21-L25` → after: `L658-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L658-L659) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L21-L25)

```diff
-       remove(BB) {
-         for (const OB in this.attached) {
-           const GB = this.attached[OB];
-           if (GB === BB) return GB.detachControl(), GB.camera = null, delete this.attached[OB], void this.rebuildInputCheck()
-         }
+       resetRotationVelocity() {
+         this._rotationVelocity.Z5(0), this.rotationAccumulatedPixels.Z5(0)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L27-L31` → after: `L661-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L661-L662) · [Before (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L27-L31)

```diff
-       removeByType(BB) {
-         for (const OB in this.attached) {
-           const GB = this.attached[OB];
-           GB.getClassName() === BB && (GB.detachControl(), GB.camera = null, delete this.attached[OB], this.rebuildInputCheck())
-         }
+       resetPanVelocity() {
+         this._panVelocity.Z5(0), this.panAccumulatedPixels.Z5(0)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L33-L37` → after: `L664-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L664-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L664-L665) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L33-L37)

```diff
-       _addCheckInputs(BB) {
-         const OB = this.checkInputs;
-         return () => {
-           OB(), BB()
-         }
+       resetZoomVelocity() {
+         this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L39-L40` → after: `L667-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L667-L668) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L39-L40)

```diff
-       attachInput(BB) {
-         this.attachedToElement && BB.attachControl(this.noPreventDefault)
+       get isInterpolating() {
+         return !!this._behavior?.isInterpolating
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L42-L46` → after: `L670-L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L670-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L670-L718) · [Before (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L42-L46)

```diff
-       attachElement() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (!this.attachedToElement) {
-           BB = !QB.e.ForceAttachControlToAlwaysPreventDefault && BB, this.attachedToElement = !0, this.noPreventDefault = BB;
-           for (const OB in this.attached) this.attached[OB].attachControl(BB)
+       getFrameIndependentDecay(WW) {
+         const iW = this._scene.VA().getDeltaTime(),
+           OW = this._getEffectiveDeltaMs(iW),
+           mW = 1e3 / this.referenceFrameRate;
+         return Math.pow(WW, OW / mW)
+       }
+       getFrameIndependentInputScale(WW) {
+         const iW = 1 - WW;
+         if (iW <= 0) return 1;
+         return (1 - this.getFrameIndependentDecay(WW)) / iW
+       }
+       _getEffectiveDeltaMs(WW) {
+         return WW > 0 ? WW : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
+       }
+       _calculateCurrentVelocity(WW, iW, OW) {
+         let mW = WW;
+ ... (33 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L49-L52` → after: `L721-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L721-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L721-L745) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L49-L52)

```diff
-       detachElement() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         for (const OB in this.attached) this.attached[OB].detachControl(), BB && (this.attached[OB].camera = null);
-         this.attachedToElement = !1
+       getEntries(WW, iW, OW) {
+         const mW = [],
+           EW = this.inputMap;
+         for (let NW = 0; NW < EW.length; NW++) {
+           const PW = EW[NW];
+           PW.source === WW && PW.interaction === iW && this._entryConditionsMatch(PW, OW) && mW.push(PW)
+         }
+         return mW
+       }
+       addEntry(WW) {
+         const iW = this._entrySpecificity(WW);
+         let OW = this.inputMap.length;
+         for (let mW = 0; mW < this.inputMap.length; mW++)
+           if (this._entrySpecificity(this.inputMap[mW]) < iW) {
+             OW = mW;
+             break
+ ... (9 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L54-L58` → after: `L747-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L747-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L747-L757) · [Before (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L54-L58)

```diff
-       rebuildInputCheck() {
-         this.checkInputs = () => {};
-         for (const BB in this.attached) {
-           const OB = this.attached[BB];
-           OB.checkInputs && (this.checkInputs = this._addCheckInputs(OB.checkInputs.bind(OB)))
+       _entryCoversAllConditionsOf(WW, iW) {
+         if (!iW) return !0;
+         const OW = WW;
+         for (const mW of Object.keys(iW)) {
+           const WW = iW[mW];
+           if (void 0 !== WW)
+             if ("modifiers" === mW) {
+               const iW = OW.modifiers ?? {};
+               for (const OW of Object.keys(WW))
+                 if (void 0 !== WW[OW] && void 0 === iW[OW]) return !1
+             } else if (void 0 === OW[mW]) return !1
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L61-L62` → after: `L761-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L761-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L761-L768) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L61-L62)

```diff
-       clear() {
-         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       setInteractions(WW, iW, OW) {
+         let mW = 0;
+         const EW = this.inputMap;
+         for (let NW = 0; NW < EW.length; NW++) {
+           const PW = EW[NW];
+           PW.source === WW && this._entryMatches(PW, iW) && (PW.interaction = OW, mW++)
+         }
+         return mW
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L64-L69` → after: `L770-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L770-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L770-L779) · [Before (L64-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L64-L69)

```diff
-       serialize(BB) {
-         const OB = {};
-         for (const GB in this.attached) {
-           const BB = this.attached[GB],
-             YB = DB.d.Serialize(BB);
-           OB[BB.getClassName()] = YB
+       _entryMatches(WW, iW) {
+         switch (WW.source) {
+           case "pointer":
+             return (void 0 === WW.button || WW.button === iW?.button) && this._matchModifiers(WW.modifiers, iW?.modifiers);
+           case "wheel":
+             return this._matchModifiers(WW.modifiers, iW?.modifiers);
+           case "touch":
+             return void 0 === WW.touchCount || WW.touchCount === iW?.touchCount;
+           case "keyboard":
+             return (void 0 === WW.key || (Array.isArray(WW.key) ? -1 !== WW.key.indexOf(iW?.key ?? -1) : WW.key === iW?.key)) && this._matchModifiers(WW.modifiers, iW?.modifiers)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L73-L90` → after: `L782-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L782-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L782-L794) · [Before (L73-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L73-L90)

```diff
-       parse(BB) {
-         const OB = BB.inputsmgr;
-         if (OB) {
-           this.clear();
-           for (const BB in OB) {
-             const GB = oB[BB];
-             if (GB) {
-               const YB = OB[BB],
-                 QB = DB.d.Parse((() => new GB), YB, null);
-               this.add(QB)
-             }
-           }
-         } else
-           for (const GB in this.attached) {
-             const OB = oB[this.attached[GB].getClassName()];
-             if (OB) {
- ... (2 more removed lines; see GitHub link above)
+       _entryConditionsMatch(WW, iW) {
+         if (!iW) return !0;
+         switch (WW.source) {
+           case "pointer":
+             return (!("button" in iW) || WW.button === iW.button) && (!("modifiers" in iW) || this._entryModifiersMatch(WW.modifiers, iW.modifiers));
+           case "wheel":
+             return !("modifiers" in iW) || this._entryModifiersMatch(WW.modifiers, iW.modifiers);
+           case "touch":
+             return !("touchCount" in iW) || WW.touchCount === iW.touchCount;
+           case "keyboard":
+             if ("key" in iW) {
+               if (void 0 === WW.key) return void 0 === iW.key;
+               if (void 0 === iW.key || (Array.isArray(WW.key) ? -1 === WW.key.indexOf(iW.key) : WW.key !== iW.key)) return !1
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L92` → after: `L796-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L796-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L796-L808) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L92)

```diff
-           }
+             return !("modifiers" in iW) || this._entryModifiersMatch(WW.modifiers, iW.modifiers)
+         }
+       }
+       _entrySpecificity(WW) {
+         let iW = 0;
+         return "button" in WW && void 0 !== WW.button && iW++, "key" in WW && void 0 !== WW.key && iW++, "touchCount" in WW && void 0 !== WW.touchCount && iW++, "modifiers" in WW && WW.modifiers && iW++, iW
+       }
+       _matchModifiers(WW, iW) {
+         return !WW || (void 0 === WW.ctrl || WW.ctrl === (iW?.ctrl ?? !1)) && ((void 0 === WW.shift || WW.shift === (iW?.shift ?? !1)) && (void 0 === WW.alt || WW.alt === (iW?.alt ?? !1)))
+       }
+       _entryModifiersMatch(WW, iW) {
+         if (!iW) return !WW;
+         return void 0 !== iW.ctrl || void 0 !== iW.shift || void 0 !== iW.alt ? (void 0 === iW.ctrl || WW?.ctrl === iW.ctrl) && ((void 0 === iW.shift || WW?.shift === iW.shift) && (void 0 === iW.alt || WW?.alt === iW.alt)) : !WW || void 0 === WW.ctrl && void 0 === WW.shift && voi … [truncated]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L96` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L812) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L96)

```diff
-   42131: (BB, OB, GB) => {
+   41719: (WW, iW, OW) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L98` → after: `L814-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L814-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L814-L815) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L98)

```diff
-       e: () => WB
+       b: () => UW,
+       d: () => bW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L100-L115` → after: `L817-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L817-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L817-L857) · [Before (L100-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L100-L115)

```diff
-     var YB = GB(40998),
-       DB = GB(41004),
-       QB = GB(40899),
-       oB = GB(37778),
-       jB = GB(40992),
-       yB = GB(41470),
-       JB = GB(37823),
-       MB = GB(37802),
-       PB = GB(41022),
-       zB = GB(40837),
-       lB = GB(39366),
-       pB = GB(41035),
-       qB = GB(38589),
-       ZB = GB(41081);
-     var NB = GB(40905);
-     let RB = !1;
+     var mW = OW(41516),
+       EW = OW(41519),
+       NW = OW(41723),
+       PW = OW(38241),
+       LW = OW(38249),
+       cW = OW(41739),
+       wW = OW(41732),
+       tW = OW(41743),
+       ZW = OW(41747);
+     class xW extends tW.e {
+       constructor(WW, iW, OW) {
+         super(WW, iW, OW), this.input = new ZW.d({
+           translate: (WW, iW, OW) => {
+             this.panAccumulatedPixels.x += WW, this.panAccumulatedPixels.y += iW, this.panAccumulatedPixels.z += OW
+           },
+           rotate: (WW, iW) => {
+ ... (25 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L118-L125` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L860) · [Before (L118-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L118-L125)

```diff
-         let OB, GB, JB, WB, AB, VB, SB, nB, UB, fB = jB.d,
-           kB = [],
-           dB = [],
-           KB = [],
-           uB = [],
-           mB = [],
-           IB = [],
-           FB = [],
+         let iW, OW, wW, tW, ZW = NW.e,
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L135-L243` → after: `L870-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L870-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L870-L871) · [Before (L135-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L135-L243)

```diff
-           set boundingBoxSize(BB) {
-             if (this._boundingBoxSize && this._boundingBoxSize.equals(BB)) return;
-             this._boundingBoxSize = BB;
-             const OB = this.JF();
-             OB && OB.markAllMaterialsAsDirty(1)
-           }
-           get boundingBoxSize() {
-             return this._boundingBoxSize
-           }
-           set rotationY(BB) {
-             this._rotationY = BB, this.setReflectionTextureMatrix(oB.d.RotationY(this._rotationY))
-           }
-           get rotationY() {
-             return this._rotationY
-           }
-           get noMipmap() {
- ... (93 more removed lines; see GitHub link above)
+           get inertia() {
+             return this._targetInertia
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L245-L302` → after: `L873-L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L873-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L873-L874) · [Before (L245-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L245-L302)

```diff
-           getClassName() {
-             return "CubeTexture"
-           }
-           updateURL(BB) {
-             let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-               YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-               QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-               oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-               jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               yB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
-             this.name && !this.name.startsWith("data:") || (this.name = BB), this.url = BB, OB && (this._forcedExtension = OB);
-             const JB = BB.lastIndexOf("."),
-               MB = OB || (JB > -1 ? BB.substring(JB).toLowerCase() : ""),
-               PB = 0 === MB.indexOf(".dds"),
- ... (42 more removed lines; see GitHub link above)
+           set inertia(WW) {
+             this._targetInertia = WW, this.movement && (this.movement.panInertia = WW, this.movement.rotationInertia = WW)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L304-L311` → after: `L876-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L876-L877) · [Before (L304-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L304-L311)

```diff
-           clone() {
-             let OB = 0;
-             const GB = this.irradianceTexture,
-               YB = PB.d.Clone((() => {
-                 const GB = new BB(this.url, this.JF() || this._getEngine(), this._extensions, this._noMipmap, this._files);
-                 return OB = GB.uniqueId, GB
-               }), this);
-             return YB.uniqueId = OB, GB && !this.irradianceTexture && (this.irradianceTexture = GB), YB
+           constructor(WW, iW, OW) {
+             super(WW, iW, OW, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new PW.q(0, 0, 0), this.cameraRotation = new PW.m(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, mW.g)(this, bW, !1), this.rotation =  … [truncated]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L313-L346` → after: `L879-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L879-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L879-L949) · [Before (L313-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L313-L346)

```diff
-         }, (() => {
-           const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(fB[Symbol.metadata] ?? null) : void 0;
-           OB = [(0, DB.L)()], GB = [(0, DB.H)()], JB = [(0, DB.H)()], WB = [(0, DB.L)("rotationY")], AB = [(0, DB.L)("files")], VB = [(0, DB.L)("forcedExtension")], SB = [(0, DB.L)("extensions")], nB = [(0, DB.t)("textureMatrix")], UB = [(0, DB.t)("textureMatrixRefraction")], (0, … [truncated]
-             kind: "getter",
-             name: "boundingBoxSize",
-             static: !1,
-             private: !1,
-             access: {
-               has: BB => "boundingBoxSize" in BB,
-               get: BB => BB.boundingBoxSize
-             },
-             metadata: QB
-           }, null, kB), (0, YB.h)(BB, null, WB, {
-             kind: "setter",
-             name: "rotationY",
-             static: !1,
- ... (18 more removed lines; see GitHub link above)
+           getFrontPosition(WW) {
+             this.getWorldMatrix();
+             const iW = PW.l.fA[0],
+               OW = PW.l.fA[1];
+             return OW.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(OW, iW), iW.scaleInPlace(WW), this.globalPosition.add(iW)
+           }
+           _getLockedTargetPosition() {
+             if (!this.lockedTarget) return null;
+             if (this.lockedTarget.absolutePosition) {
+               const WW = this.lockedTarget;
+               WW.computeWorldMatrix().getTranslationToRef(WW.absolutePosition)
+             }
+             return this.lockedTarget.absolutePosition || this.lockedTarget
+           }
+           storeState() {
+             return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
+ ... (55 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L348-L359` → after: `L951-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L951-L952) · [Before (L348-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L348-L359)

```diff
-             },
-             metadata: QB
-           }, dB, KB), (0, YB.h)(null, null, GB, {
-             kind: "field",
-             name: "boundingBoxPosition",
-             static: !1,
-             private: !1,
-             access: {
-               has: BB => "boundingBoxPosition" in BB,
-               get: BB => BB.boundingBoxPosition,
-               set: (BB, OB) => {
-                 BB.boundingBoxPosition = OB
+               if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.HJ(this._deferredRotationUpdate), this.rotationQuaternion) {
+                 this._deferredRotationUpdate.lengthSquared() && (PW.g.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 :  … [truncated]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L361-L372` → after: `L954-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L954-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L954-L991) · [Before (L361-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L361-L372)

```diff
-             },
-             metadata: QB
-           }, uB, mB), (0, YB.h)(null, null, AB, {
-             kind: "field",
-             name: "_files",
-             static: !1,
-             private: !1,
-             access: {
-               has: BB => "_files" in BB,
-               get: BB => BB._files,
-               set: (BB, OB) => {
-                 BB._files = OB
+             }
+             this.cameraDirection.Z5(0), this.cameraRotation.set(0, 0), super._checkInputs()
+           }
+           _updateCameraRotationMatrix() {
+             this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : PW.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
+           }
+           _rotateUpVectorWithCameraRotationMatrix() {
+             return PW.q.TransformNormalToRef(PW.q.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
+           }
+           _getViewMatrix() {
+             return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuat … [truncated]
+           }
+           _computeViewMatrix(WW, iW, OW) {
+             if (this.bD().useRightHandedSystem ? PW.d.LookAtRHToRef(WW, iW, OW, this._viewMatrix) : PW.d.LookAtLHToRef(WW, iW, OW, this._viewMatrix), this.parent) {
+               const WW = this.parent.getWorldMatrix();
+               this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(WW, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
+ ... (22 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L374-L376` → after: `L993-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L993-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L993-L1008) · [Before (L374-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L374-L376)

```diff
-             },
-             metadata: QB
-           }, IB, FB), (0, YB.h)(null, null, VB, {
+               case NW.e.RIG_MODE_VR:
+                 WW.rotationQuaternion && iW.rotationQuaternion && this.rotationQuaternion ? (WW.rotationQuaternion.HJ(this.rotationQuaternion), iW.rotationQuaternion.HJ(this.rotationQuaternion)) : (WW.rotation.HJ(this.rotation), iW.rotation.HJ(this.rotation)), WW.position.HJ(this … [truncated]
+             }
+             super._updateRigCameras()
+           }
+           _getRigCamPositionAndTarget(iW, OW) {
+             this.getTarget().subtractToRef(this.position, WW._TargetFocalPoint), WW._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
+             const mW = WW._TargetFocalPoint.addInPlace(this.position);
+             PW.d.TranslationToRef(-mW.x, -mW.y, -mW.z, WW._TargetTransformMatrix), WW._TargetTransformMatrix.multiplyToRef(PW.d.RotationAxis(OW.upVector, iW), WW._RigCamTransformMatrix), PW.d.TranslationToRef(mW.x, mW.y, mW.z, WW._TargetTransformMatrix), WW._RigCamTransformMatrix … [truncated]
+           }
+           getClassName() {
+             return "TargetCamera"
+           }
+         }, (() => {
+           const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZW[Symbol.metadata] ?? null) : void 0;
+           iW = [(0, EW.M)()], OW = [(0, EW.K)()], wW = [(0, EW.M)()], tW = [(0, EW.z)("lockedTargetId")], (0, mW.e)(null, null, iW, {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L378` → after: `L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1010) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L378)

```diff
-             name: "_forcedExtension",
+             name: "updateUpVectorFromRotation",
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L382-L383` → after: `L1014-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1014-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1014-L1015) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L382-L383)

```diff
-               has: BB => "_forcedExtension" in BB,
-               get: BB => BB._forcedExtension,
+               has: WW => "updateUpVectorFromRotation" in WW,
+               get: WW => WW.updateUpVectorFromRotation,
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L385` → after: `L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1017) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L385)

```diff
-                 BB._forcedExtension = OB
+                 WW.updateUpVectorFromRotation = iW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L389` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1021) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L389)

```diff
-           }, iB, LB), (0, YB.h)(null, null, SB, {
+           }, bW, jW), (0, mW.e)(null, null, OW, {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L391` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1023) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L391)

```diff
-             name: "_extensions",
+             name: "rotation",
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L395-L396` → after: `L1027-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1027-L1028) · [Before (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L395-L396)

```diff
-               has: BB => "_extensions" in BB,
-               get: BB => BB._extensions,
+               has: WW => "rotation" in WW,
+               get: WW => WW.rotation,
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L398` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1030) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L398)

```diff
-                 BB._extensions = OB
+                 WW.rotation = iW
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L402` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1034) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L402)

```diff
-           }, gB, rB), (0, YB.h)(null, null, nB, {
+           }, UW, kW), (0, mW.e)(null, null, wW, {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L404` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1036) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L404)

```diff
-             name: "_textureMatrix",
+             name: "speed",
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L408-L409` → after: `L1040-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1040-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1040-L1041) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L408-L409)

```diff
-               has: BB => "_textureMatrix" in BB,
-               get: BB => BB._textureMatrix,
+               has: WW => "speed" in WW,
+               get: WW => WW.speed,
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L411` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1043) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L411)

```diff
-                 BB._textureMatrix = OB
+                 WW.speed = iW
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L415` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1047) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L415)

```diff
-           }, XB, wB), (0, YB.h)(null, null, UB, {
+           }, sW, MW), (0, mW.e)(null, null, tW, {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L417` → after: `L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1049) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L417)

```diff
-             name: "_textureMatrixRefraction",
+             name: "lockedTarget",
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L421-L422` → after: `L1053-L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1053-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1053-L1054) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L421-L422)

```diff
-               has: BB => "_textureMatrixRefraction" in BB,
-               get: BB => BB._textureMatrixRefraction,
+               has: WW => "lockedTarget" in WW,
+               get: WW => WW.lockedTarget,
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L424` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1056) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L424)

```diff
-                 BB._textureMatrixRefraction = OB
+                 WW.lockedTarget = iW
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L434` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1066) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L434)

```diff
-         })(), BB
+         })(), WW._RigCamTransformMatrix = new PW.d, WW._TargetTransformMatrix = new PW.d, WW._TargetFocalPoint = new PW.q, WW
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L438-L441` → after: `L1070-L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1070-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1070-L1071) · [Before (L438-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L438-L441)

```diff
-     function VB(BB, OB, GB) {
-       let YB = "";
-       for (const DB of BB) YB += DB;
-       return new WB(YB, OB, null, GB, BB)
+     function UW() {
+       jW || (jW = !0, wW.d.AddNodeConstructor("TargetCamera", ((WW, iW) => () => new bW(WW, PW.q.Zero(), iW))))
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L444-L450` → after: `L1081-L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1081-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1081-L1096) · [Before (L444-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L444-L450)

```diff
-     function SB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-         YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const DB = OB.useDelayedTextureLoading;
-       OB.useDelayedTextureLoading = !1;
-       const QB = new WB(BB, OB, null, !1, null, null, null, void 0, !0, GB, YB);
-       return OB.useDelayedTextureLoading = DB, QB
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

#### 45. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L452-L462` → after: `L1098-L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1098-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1098-L1141) · [Before (L452-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L452-L462)

```diff
- 
-     function nB(BB, OB, GB) {
-       const YB = PB.d.Parse((() => {
-         let YB = !1;
-         return BB.prefiltered && (YB = BB.prefiltered), new WB(GB + (BB.url ?? BB.name), OB, BB.extensions, !1, BB.files || null, null, null, void 0, YB, BB.forcedExtension)
-       }), BB, OB);
-       if (BB.boundingBoxPosition && (YB.boundingBoxPosition = oB.r.FromArray(BB.boundingBoxPosition)), BB.boundingBoxSize && (YB.boundingBoxSize = oB.r.FromArray(BB.boundingBoxSize)), BB.animations)
-         for (let DB = 0; DB < BB.animations.length; DB++) {
-           const OB = BB.animations[DB],
-             GB = (0, JB.c)("BABYLON.Animation");
-           GB && YB.animations.push(GB.Parse(OB))
+   },
+   41556: (WW, iW, OW) => {
+     var mW = OW(41423),
+       EW = OW(41558);
+     let NW = !1;
+     NW || (NW = !0, (0, EW.z)(), mW.b.prototype._loadFileAsync = async function(WW, iW, OW) {
+       return await new Promise(((mW, EW) => {
+         this._loadFile(WW, (WW => {
+           mW(WW)
+         }), void 0, iW, OW, ((WW, iW) => {
+           EW(iW)
+         }))
+       }))
+     })
+   },
+   41553: (WW, iW, OW) => {
+ ... (28 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L464` → after: `L1143-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1143-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1143-L1144) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L464)

```diff
-       return YB
+         this._onReleaseRenderPassObservable?.notifyObservers(WW)
+       })
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L468` → after: `L1147-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1147-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1147-L1153) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L468)

```diff
-   42177: (BB, OB, GB) => {
+   41589: (WW, iW, OW) => {
+     var mW = OW(41595),
+       EW = OW(41423);
+     let NW = !1;
+     NW || (NW = !0, EW.b.GetCompatibleTextureLoader = mW.e)
+   },
+   41481: (WW, iW, OW) => {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L470` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1155) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L470)

```diff
-       c: () => JB
+       d: () => NW
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L472-L476` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1157) · [Before (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L472-L476)

```diff
-     var YB = GB(39366),
-       DB = GB(41470),
-       QB = GB(40932),
-       oB = GB(40849),
-       jB = GB(40837);
+     var mW = OW(41384);
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L478-L502` → after: `L1159-L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1159-L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1159-L1434) · [Before (L478-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L478-L502)

```diff
-     class JB extends DB.e {
-       constructor(BB, OB, GB) {
-         let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
-           MB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
-           PB = arguments.length > 6 ? arguments[6] : void 0;
-         const zB = !GB || GB._isScene;
-         super(null, zB ? GB : GB?.eq, zB ? !YB : GB, PB, JB, void 0, void 0, void 0, void 0, MB), yB || (yB = !0, oB.ThinEngine.prototype.createDynamicTexture = function(BB, OB, GB, YB) {
-           const DB = new jB.b(this, 4);
-           return DB.baseWidth = BB, DB.baseHeight = OB, GB && (BB = this.needPOTTextures ? (0, QB.f)(BB, this._caps.maxTextureSize) : BB, OB = this.needPOTTextures ? (0, QB.f)(OB, this._caps.maxTextureSize) : OB), DB.width = BB, DB.height = OB, DB.isReady = !1, DB.generateMipMaps … [truncated]
-         }, oB.ThinEngine.prototype.updateDynamicTexture = function(BB, OB, GB) {
-           let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-             DB = arguments.length > 4 ? arguments[4] : void 0,
-             QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-           if (!BB) return;
-           const oB = this._gl,
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

#### 51. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L504` → after: `L1436-L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1436-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1436-L1459) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L504)

```diff
-         if (OB.getContext) this._canvas = OB, this._ownCanvas = !1, this._texture = lB.createDynamicTexture(this._canvas.width, this._canvas.height, YB, JB);
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

#### 52. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L506` → after: `L1461-L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1461-L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1461-L1960) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L506)

```diff
-           this._canvas = lB.createCanvas(1, 1), this._ownCanvas = !0;
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

#### 53. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L508` → after: `L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1962) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L508)

```diff
-           BB.width || 0 === BB.width ? this._texture = lB.createDynamicTexture(BB.width, BB.height, YB, JB) : this._texture = lB.createDynamicTexture(OB, OB, YB, JB)
+           "function" === typeof WW?.dispose && WW.dispose()
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L510-L511` → after: `L1964-L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1964-L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1964-L1989) · [Before (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L510-L511)

```diff
-         const pB = this.getSize();
-         this._canvas.width !== pB.width && (this._canvas.width = pB.width), this._canvas.height !== pB.height && (this._canvas.height = pB.height), this._context = this._canvas.getContext("2d")
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

#### 55. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L513-L514` → after: `L1991-L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L1991-L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L1991-L1998) · [Before (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L513-L514)

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

#### 56. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L516-L517` → after: `L2000-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2000-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2000-L2001) · [Before (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L516-L517)

```diff
-       get canRescale() {
-         return !0
+       static get Version() {
+         return xW.b.Version
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L519-L520` → after: `L2003-L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2003-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2003-L2004) · [Before (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L519-L520)

```diff
-       _recreate(BB) {
-         this._canvas.width = BB.width, this._canvas.height = BB.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(BB.width, BB.height, this._generateMipMaps, this.samplingMode)
+       static get Instances() {
+         return EW.d.Instances
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L522-L524` → after: `L2006-L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2006-L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2006-L2007) · [Before (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L522-L524)

```diff
-       scale(BB) {
-         const OB = this.getSize();
-         OB.width *= BB, OB.height *= BB, this._recreate(OB)
+       static get LastCreatedEngine() {
+         return EW.d.LastCreatedEngine
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L526-L528` → after: `L2009-L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2009-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2009-L2010) · [Before (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L526-L528)

```diff
-       scaleTo(BB, OB) {
-         const GB = this.getSize();
-         GB.width = BB, GB.height = OB, this._recreate(GB)
+       static get LastCreatedScene() {
+         return EW.d.LastCreatedScene
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L530-L531` → after: `L2012-L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2012-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2012-L2013) · [Before (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L530-L531)

```diff
-       getContext() {
-         return this._context
+       static DefaultLoadingScreenFactory(WW) {
+         return xW.b.DefaultLoadingScreenFactory(WW)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L533-L535` → after: `L2015-L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2015-L2016) · [Before (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L533-L535)

```diff
-       clear(BB) {
-         const OB = this.getSize();
-         BB && (this._context.fillStyle = BB), this._context.clearRect(0, 0, OB.width, OB.height)
+       get _supportsHardwareTextureRescaling() {
+         return !!KW._RescalePostProcessFactory
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L537-L540` → after: `L2018-L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2018-L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2018-L2131) · [Before (L537-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L537-L540)

```diff
-       update(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === BB || BB, OB, this._format || void 0, void 0, GB)
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

#### 63. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L542-L547` → after: `L2133-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2133-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2133-L2191) · [Before (L542-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L542-L547)

```diff
-       drawText(BB, OB, GB, YB, DB, QB, oB) {
-         let jB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
-         const yB = this.getSize();
-         if (QB && (this._context.fillStyle = QB, this._context.fillRect(0, 0, yB.width, yB.height)), this._context.font = YB, null === OB || void 0 === OB) {
-           const GB = this._context.measureText(BB);
-           OB = (yB.width - GB.width) / 2
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

#### 64. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L549-L551` → after: `L2193-L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2193-L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2193-L2221) · [Before (L549-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L549-L551)

```diff
-         if (null === GB || void 0 === GB) {
-           const BB = parseInt(YB.replace(/\D/g, ""));
-           GB = yB.height / 2 + BB / 3.65
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

#### 65. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L553` → after: `L2223-L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2223-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2223-L2268) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L553)

```diff
-         this._context.fillStyle = DB || "", this._context.fillText(BB, OB, GB), jB && this.update(oB)
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

#### 66. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L556` → after: `L2271-L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2271-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2271-L2276) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L556)

```diff
-         super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
+         this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
+           function(WW, iW) {
+             1 === EW.d.Instances.length && xW.b.audioEngine && (xW.b.audioEngine.dispose(), xW.b.audioEngine = null);
+             const OW = WW.getHostWindow();
+             OW && "function" === typeof OW.removeEventListener && (OW.removeEventListener("blur", WW._onBlur), OW.removeEventListener("focus", WW._onFocus)), iW && (iW.removeEventListener("focus", WW._onCanvasFocus), iW.removeEventListener("blur", WW._onCanvasBlur), iW.removeEven … [truncated]
+           }(this, this._renderingCanvas), super.dispose()
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L558-L563` → after: `L2278-L2288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2278-L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2278-L2288) · [Before (L558-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L558-L563)

```diff
-       clone() {
-         const BB = this.JF();
-         if (!BB) return this;
-         const OB = this.getSize(),
-           GB = new JB(this.name, OB, BB, this._generateMipMaps);
-         return GB.hasAlpha = this.hasAlpha, GB.level = this.level, GB.wrapU = this.wrapU, GB.wrapV = this.wrapV, GB
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

#### 68. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L565-L569` → after: `L2290-L2306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2290-L2306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2290-L2306) · [Before (L565-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L565-L569)

```diff
-       serialize() {
-         const BB = this.JF();
-         BB && !BB.isReady() && YB.b.Warn("The scene must be ready before serializing the dynamic texture");
-         const OB = super.serialize();
-         return JB._IsCanvasElement(this._canvas) && (OB.base64String = this._canvas.toDataURL()), OB.invertY = this._invertY, OB.samplingMode = this.samplingMode, OB
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

#### 69. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L571-L572` → after: `L2308-L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2308-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2308-L2473) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L571-L572)

```diff
-       static _IsCanvasElement(BB) {
-         return void 0 !== BB.toDataURL
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

#### 70. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L575` → after: `L2476-L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2476-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2476-L2493) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L575)

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

#### 71. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L579` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2497) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L579)

```diff
-   42148: (BB, OB, GB) => {
+   41936: (WW, iW, OW) => {
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L581` → after: `L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2499) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L581)

```diff
-       e: () => DB
+       d: () => mW
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L583-L586` → after: `L2501-L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2501-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2501-L2506) · [Before (L583-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L583-L586)

```diff
-     var YB = GB(41470);
-     class DB extends YB.e {
-       get depth() {
-         return this._depth
+     class mW {
+       static get ForceFullSceneLoadingForIncremental() {
+         return mW._ForceFullSceneLoadingForIncremental
+       }
+       static set ForceFullSceneLoadingForIncremental(WW) {
+         mW._ForceFullSceneLoadingForIncremental = WW
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L588-L595` → after: `L2508-L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2508-L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2508-L2509) · [Before (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L588-L595)

```diff
-       constructor(BB, OB, GB, DB, QB, oB) {
-         let jB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           yB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-           JB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : YB.e.TRILINEAR_SAMPLINGMODE,
-           MB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           PB = arguments.length > 10 ? arguments[10] : void 0,
-           zB = arguments.length > 11 ? arguments[11] : void 0;
-         super(null, oB, !jB, yB), this.format = QB, this._texture = oB.Lp().createRawTexture2DArray(BB, OB, GB, DB, QB, jB, yB, JB, null, MB, PB ?? 0, zB), this._depth = DB, this.is2DArray = !0
+       static get ShowLoadingScreen() {
+         return mW._ShowLoadingScreen
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L597-L598` → after: `L2511-L2512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2511-L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2511-L2512) · [Before (L597-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L597-L598)

```diff
-       update(BB) {
-         this.updateMipLevel(BB, 0)
+       static set ShowLoadingScreen(WW) {
+         mW._ShowLoadingScreen = WW
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L600-L601` → after: `L2514-L2515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2514-L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2514-L2515) · [Before (L600-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L600-L601)

```diff
-       updateMipLevel(BB, OB) {
-         this._texture && this._getEngine().updateRawTexture2DArray(this._texture, BB, this._texture.format, this._texture.invertY, null, this._texture.type, OB)
+       static get loggingLevel() {
+         return mW._LoggingLevel
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L603-L604` → after: `L2517-L2524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2517-L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2517-L2524) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L603-L604)

```diff
-       static CreateRGBATexture(BB, OB, GB, YB, QB) {
-         return new DB(BB, OB, GB, YB, 5, QB, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== … [truncated]
+       static set loggingLevel(WW) {
+         mW._LoggingLevel = WW
+       }
+       static get CleanBoneMatrixWeights() {
+         return mW._CleanBoneMatrixWeights
+       }
+       static set CleanBoneMatrixWeights(WW) {
+         mW._CleanBoneMatrixWeights = WW
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L608` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2529) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L608)

```diff
-   42140: (BB, OB, GB) => {
+   41595: (WW, iW, OW) => {
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L610` → after: `L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2531) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L610)

```diff
-       c: () => YB.c
+       e: () => PW
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L612-L613` → after: `L2533-L2546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2533-L2546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2533-L2546) · [Before (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L612-L613)

```diff
-     var YB = GB(41361);
-     (0, YB.g)()
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

#### 81. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L615` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2548) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L615)

```diff
-   41089: (BB, OB, GB) => {
+   41957: (WW, iW, OW) => {
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L617` → after: `L2550-L2551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2550-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2550-L2551) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L617)

```diff
-       b: () => YB.e
+       e: () => PW,
+       f: () => wW
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L619-L620` → after: `L2553-L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L2553-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/286.js#L2553-L7749) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/286.js#L619-L620)

```diff
-     var YB = GB(41091);
-     (0, YB.b)()
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/287.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/287.js` (69 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4` → after: `L4-L6661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L4-L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L4-L6661) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L4)

```diff
-   41213: (BB, OB, GB) => {
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
+ ... (6642 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L8-L57` → after: `L6665-L6705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L6665-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L6665-L6705) · [Before (L8-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L8-L57)

```diff
-     var YB = GB(40998),
-       DB = GB(41004),
-       QB = GB(37778),
-       oB = GB(41215),
-       jB = GB(41237),
-       yB = GB(41197),
-       JB = GB(41097);
-     let MB = (() => {
-       var BB;
-       let OB, GB, oB, jB, MB, PB, zB, lB, pB, qB, ZB, NB = [],
-         RB = [],
-         WB = [],
-         AB = [],
-         VB = [],
-         SB = [],
-         nB = [],
- ... (34 more removed lines; see GitHub link above)
+     class mW {
+       constructor(WW) {
+         this._supportBlendParametersPerTarget = WW, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled =  … [truncated]
+       }
+       get isDirty() {
+         return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
+       }
+       get alphaBlend() {
+         return this._numTargetEnabled > 0
+       }
+       set alphaBlend(WW) {
+         this.setAlphaBlend(WW)
+       }
+       setAlphaBlend(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         this._alphaBlend[iW] !== WW && (WW ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[iW] = WW, this._isAlphaBlendDirty = !0)
+ ... (25 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L59-L76` → after: `L6707-L6711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L6707-L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L6707-L6711) · [Before (L59-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L59-L76)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
-         }
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const BB = this.camera,
-               OB = BB.movement.input,
-               GB = OB.getEntry("keyboard", "translate"),
-               YB = OB.getEntry("keyboard", "rotate"),
-               DB = YB?.sensitivity ?? 1,
-               oB = BB._localDirection.zOB(0, 0, 0);
-             for (let QB = 0; QB < this._keys.length; QB++) {
-               const OB = this._keys[QB]; - 1 !== this.keysLeft.indexOf(OB) ? oB.x -= 1 : -1 !== this.keysUp.indexOf(OB) ? oB.z += 1 : -1 !== this.keysRight.indexOf(OB) ? oB.x += 1 : -1 !== this.keysDown.indexOf(OB) ? oB.z -= 1 : -1 !== this.keysUpward.indexOf(OB) ? oB.y += 1 : -1 … [truncated]
-             }
-             if (GB && (0 !== oB.x || 0 !== oB.y || 0 !== oB.z)) {
-               const OB = BB._computeLocalCameraSpeed() * (GB.sensitivity ?? 1);
- ... (2 more removed lines; see GitHub link above)
+         const mW = WW;
+         if (this._isAlphaBlendDirty) {
+           for (let EW = 0; EW < iW; EW++) {
+             const iW = EW < this._numTargetEnabled ? EW : 0;
+             this._alphaBlend[iW] && 0 === (OW & 1 << EW) ? mW.enableIndexed(WW.BLEND, EW) : mW.disableIndexed(WW.BLEND, EW)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L79-L80` → after: `L6715-L6720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R6715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L6715-L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L6715-L6720) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L79-L80)

```diff
-         getClassName() {
-           return "FreeCameraKeyboardMoveInput"
+         if (this._isBlendFunctionParametersDirty) {
+           for (let WW = 0; WW < iW; WW++) {
+             const iW = WW < this._numTargetEnabled ? 4 * WW : 0;
+             mW.blendFuncSeparateIndexed(WW, this._blendFunctionParameters[iW + 0], this._blendFunctionParameters[iW + 1], this._blendFunctionParameters[iW + 2], this._blendFunctionParameters[iW + 3])
+           }
+           this._isBlendFunctionParametersDirty = !1
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L82-L83` → after: `L6722-L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R6722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L6722-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L6722-L6727) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L82-L83)

```diff
-         _onLostFocus() {
-           this._keys.length = 0
+         if (this._isBlendEquationParametersDirty) {
+           for (let WW = 0; WW < iW; WW++) {
+             const iW = WW < this._numTargetEnabled ? 2 * WW : 0;
+             mW.blendEquationSeparateIndexed(WW, this._blendEquationParameters[iW + 0], this._blendEquationParameters[iW + 1])
+           }
+           this._isBlendEquationParametersDirty = !1
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L85-L86` → after: `L6729-L6794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R6729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L6729-L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L6729-L6794) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L85-L86)

```diff
-         getSimpleName() {
-           return "keyboard"
+       }
+       setAlphaMode(WW, iW) {
+         let OW = 32774;
+         switch (WW) {
+           case 0:
+             break;
+           case 7:
+             this.setAlphaBlendFunctionParameters(1, 771, 1, 1, iW);
+             break;
+           case 8:
+           case 14:
+             this.setAlphaBlendFunctionParameters(1, 771, 1, 771, iW);
+             break;
+           case 2:
+             this.setAlphaBlendFunctionParameters(770, 771, 1, 1, iW);
+             break;
+ ... (50 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L88-L90` → after: `L6796-L6860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R6796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L6796-L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L6796-L6860) · [Before (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L88-L90)

```diff
-         _getLocalRotation() {
-           const BB = this.camera._calculateHandednessMultiplier();
-           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * BB
+         this.setAlphaEquationParameters(OW, OW, iW)
+       }
+     }
+   },
+   41706: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW
+     });
+     class mW {}
+     mW._IsPickingAvailable = !1
+   },
+   41612: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => wO,
+       i: () => LO
+     });
+ ... (49 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L92-L241` → after: `L6862-L7035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R6862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L6862-L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L6862-L7035) · [Before (L92-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L92-L241)

```diff
-       }, (() => {
-         const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         OB = [(0, DB.L)()], GB = [(0, DB.L)()], oB = [(0, DB.L)()], jB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.L)()], zB = [(0, DB.L)()], lB = [(0, DB.L)()], pB = [(0, DB.L)()], qB = [(0, DB.L)()], ZB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
-           kind: "field",
-           name: "keysUp",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "keysUp" in BB,
-             get: BB => BB.keysUp,
-             set: (BB, OB) => {
-               BB.keysUp = OB
-             }
-           },
-           metadata: QB
-         }, NB, RB), (0, YB.h)(null, null, GB, {
- ... (134 more removed lines; see GitHub link above)
+       }
+       first(WW) {
+         for (const iW in this._data) {
+           const OW = WW(iW, this._data[iW]);
+           if (OW) return OW
+         }
+         return null
+       }
+     }
+     var wW = OW(41544),
+       tW = OW(38241),
+       ZW = OW(41634),
+       xW = OW(41649),
+       lW = OW(41653);
+     class AW {
+       constructor(WW, iW, OW, mW, EW, NW) {
+ ... (158 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L243-L261` → after: `L7037-L7063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7037-L7063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7037-L7063) · [Before (L243-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L243-L261)

```diff
-       })(), BB
-     })();
-     jB.c.FreeCameraKeyboardMoveInput = MB;
-     var PB = GB(37802),
-       zB = GB(41190);
-     let lB = (() => {
-       var BB;
-       let OB, GB, QB = [],
-         oB = [],
-         jB = [],
-         yB = [];
-       return BB = class {
-         _applyPointerRotation(BB, OB) {
-           this._pointerConditions.button = this._currentActiveButton;
-           const GB = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
-           if (!GB || "rotate" !== GB.interaction) return;
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

#### 10. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L263-L289` → after: `L7065-L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7065-L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7065-L7165) · [Before (L263-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L263-L289)

```diff
-         constructor() {
-           let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-           this.touchEnabled = BB, this.buttons = (0, YB.j)(this, QB, [0, 1, 2]), this.angularSensibility = ((0, YB.j)(this, oB), (0, YB.j)(this, jB, 2e3)), this._pointerInput = (0, YB.j)(this, yB), this._previousPosition = null, this.onPointerMovedObservable = new PB.b, this._all … [truncated]
-         }
-         attachControl(BB) {
-           BB = JB.j.BackCompatCameraNoPreventDefault(arguments);
-           const OB = this.camera.Lp(),
-             GB = OB.getInputElement();
-           this._pointerInput || (this._pointerInput = YB => {
-             const DB = YB.event,
-               QB = "touch" === DB.pointerType;
-             if (!this.touchEnabled && QB) return;
-             if (YB.type !== zB.c.POINTERMOVE && -1 === this.buttons.indexOf(DB.button)) return;
-             const oB = DB.target;
-             if (YB.type === zB.c.POINTERDOWN) {
-               if (QB && -1 !== this._activePointerId || !QB && -1 !== this._currentActiveButton) return;
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

#### 11. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L291-L304` → after: `L7167-L7216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7167-L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7167-L7216) · [Before (L291-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L291-L304)

```diff
-               this._currentActiveButton = -1, this._previousPosition = null, BB || DB.preventDefault(), this._activePointerId = -1
-             } else if (YB.type === zB.c.POINTERMOVE && (this._activePointerId === DB.pointerId || !QB))
-               if (OB.isPointerLock && this._onMouseMove) this._onMouseMove(YB.event);
-               else if (this._previousPosition) {
-               const OB = this.camera._calculateHandednessMultiplier(),
-                 GB = (DB.clientX - this._previousPosition.x) * OB,
-                 YB = (DB.clientY - this._previousPosition.y) * OB;
-               this._allowCameraRotation && this._applyPointerRotation(GB, YB), this.onPointerMovedObservable.notifyObservers({
-                 offsetX: GB,
-                 offsetY: YB
-               }), this._previousPosition = {
-                 x: DB.clientX,
-                 y: DB.clientY
-               }, BB || DB.preventDefault()
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

#### 12. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L306-L319` → after: `L7218-L7240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7218-L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7218-L7240) · [Before (L306-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L306-L319)

```diff
-           }), this._onMouseMove = GB => {
-             if (!OB.isPointerLock) return;
-             const YB = this.camera._calculateHandednessMultiplier();
-             this._applyPointerRotation(GB.movementX * YB, GB.movementY * YB), this._previousPosition = null, BB || GB.preventDefault()
-           }, this._observer = this.camera.JF()._inputManager._addCameraPointerObserver(this._pointerInput, zB.c.POINTERDOWN | zB.c.POINTERUP | zB.c.POINTERMOVE), GB && (this._contextMenuBind = BB => this.onContextMenu(BB), GB.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
-         }
-         onContextMenu(BB) {
-           BB.preventDefault()
-         }
-         detachControl() {
-           if (this._observer) {
-             if (this.camera.JF()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
-               const BB = this.camera.Lp().getInputElement();
-               BB && BB.removeEventListener("contextmenu", this._contextMenuBind)
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

#### 13. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L323-L329` → after: `L7243-L7278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7243-L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7243-L7278) · [Before (L323-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L323-L329)

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

#### 14. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L331-L342` → after: `L7280-L7305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7280-L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7280-L7305) · [Before (L331-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L331-L342)

```diff
-       }, (() => {
-         const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         OB = [(0, DB.L)()], GB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
-           kind: "field",
-           name: "buttons",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "buttons" in BB,
-             get: BB => BB.buttons,
-             set: (BB, OB) => {
-               BB.buttons = OB
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

#### 15. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L344-L355` → after: `L7307-L7319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7307-L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7307-L7319) · [Before (L344-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L344-L355)

```diff
-           },
-           metadata: JB
-         }, QB, oB), (0, YB.h)(null, null, GB, {
-           kind: "field",
-           name: "angularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "angularSensibility" in BB,
-             get: BB => BB.angularSensibility,
-             set: (BB, OB) => {
-               BB.angularSensibility = OB
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

#### 16. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L358-L397` → after: `L7322-L7340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7322-L7340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7322-L7340) · [Before (L358-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L358-L397)

```diff
-           metadata: JB
-         }, jB, yB), JB && Object.defineProperty(BB, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: JB
-         })
-       })(), BB
-     })();
-     jB.c.FreeCameraMouseInput = lB;
-     var pB = GB(41201);
-     let qB = (() => {
-       var BB;
-       let OB, GB, QB, oB = [],
-         jB = [],
-         yB = [],
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

#### 17. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L399-L400` → after: `L7342-L7390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7342-L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7342-L7390) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L399-L400)

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

#### 18. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L402-L403` → after: `L7392-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7392-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7392-L7461) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L402-L403)

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

#### 19. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L405-L416` → after: `L7463-L7536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7463-L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7463-L7536) · [Before (L405-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L405-L416)

```diff
-       }, (() => {
-         const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
-           kind: "field",
-           name: "wheelPrecisionX",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "wheelPrecisionX" in BB,
-             get: BB => BB.wheelPrecisionX,
-             set: (BB, OB) => {
-               BB.wheelPrecisionX = OB
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

#### 20. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L418-L429` → after: `L7538-L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7538-L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7538-L7584) · [Before (L418-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L418-L429)

```diff
-           },
-           metadata: JB
-         }, oB, jB), (0, YB.h)(null, null, GB, {
-           kind: "field",
-           name: "wheelPrecisionY",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "wheelPrecisionY" in BB,
-             get: BB => BB.wheelPrecisionY,
-             set: (BB, OB) => {
-               BB.wheelPrecisionY = OB
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

#### 21. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L431-L442` → after: `L7586-L7634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7586-L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7586-L7634) · [Before (L431-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L431-L442)

```diff
-           },
-           metadata: JB
-         }, yB, MB), (0, YB.h)(null, null, QB, {
-           kind: "field",
-           name: "wheelPrecisionZ",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "wheelPrecisionZ" in BB,
-             get: BB => BB.wheelPrecisionZ,
-             set: (BB, OB) => {
-               BB.wheelPrecisionZ = OB
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

#### 22. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L444-L450` → after: `L7636-L7725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7636-L7725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7636-L7725) · [Before (L444-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L444-L450)

```diff
-           },
-           metadata: JB
-         }, lB, qB), JB && Object.defineProperty(BB, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: JB
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

#### 23. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L452-L453` → after: `L7727-L7758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7727-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7727-L7758) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L452-L453)

```diff
-       })(), BB
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

#### 24. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L456` → after: `L7761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7761) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L456)

```diff
-       BB[BB.MoveRelative = 0] = "MoveRelative", BB[BB.RotateRelative = 1] = "RotateRelative", BB[BB.MoveScene = 2] = "MoveScene"
+       WW[WW.BackwardCompatible = 0] = "BackwardCompatible", WW[WW.Intermediate = 1] = "Intermediate", WW[WW.Aggressive = 2] = "Aggressive"
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L458-L500` → after: `L7763-L7794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7763-L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7763-L7794) · [Before (L458-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L458-L500)

```diff
-     let NB = (() => {
-       var BB;
-       let OB, GB, oB, jB, yB, JB, MB, PB, zB, lB = qB,
-         pB = [];
-       return BB = class extends lB {
-         constructor() {
-           super(...arguments), this.camera = (0, YB.j)(this, pB), this._moveRelative = QB.r.Zero(), this._rotateRelative = QB.r.Zero(), this._moveScene = QB.r.Zero(), this._wheelXAction = ZB.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = ZB.MoveRelative, thi … [truncated]
-         }
-         getClassName() {
-           return "FreeCameraMouseWheelInput"
-         }
-         set wheelXMoveRelative(BB) {
-           null === BB && this._wheelXAction !== ZB.MoveRelative || (this._wheelXAction = ZB.MoveRelative, this._wheelXActionCoordinate = BB)
-         }
-         get wheelXMoveRelative() {
-           return this._wheelXAction !== ZB.MoveRelative ? null : this._wheelXActionCoordinate
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

#### 26. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L502-L503` → after: `L7796-L8044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L7796-L8044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L7796-L8044) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L502-L503)

```diff
-         get wheelZRotateRelative() {
-           return this._wheelZAction !== ZB.RotateRelative ? null : this._wheelZActionCoordinate
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

#### 27. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L505-L506` → after: `L8046-L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8046-L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8046-L8211) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L505-L506)

```diff
-         set wheelXMoveScene(BB) {
-           null === BB && this._wheelXAction !== ZB.MoveScene || (this._wheelXAction = ZB.MoveScene, this._wheelXActionCoordinate = BB)
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

#### 28. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L508-L509` → after: `L8213-L8219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8213-L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8213-L8219) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L508-L509)

```diff
-         get wheelXMoveScene() {
-           return this._wheelXAction !== ZB.MoveScene ? null : this._wheelXActionCoordinate
+         if (iW) {
+           for (WW = 0; WW < this._materialsRenderTargets.length; ++WW) {
+             this._materialsRenderTargets.data[WW].isReadyForRendering() || (EW = !1)
+           }
+           for (WW = 0; WW < this.customRenderTargets.length; ++WW) {
+             this.customRenderTargets[WW].isReadyForRendering() || (EW = !1)
+           }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L511-L512` → after: `L8221-L8222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8221-L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8221-L8222) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L511-L512)

```diff
-         set wheelYMoveScene(BB) {
-           null === BB && this._wheelYAction !== ZB.MoveScene || (this._wheelYAction = ZB.MoveScene, this._wheelYActionCoordinate = BB)
+         for (WW = 0; WW < this.geometries.length; WW++) {
+           2 === this.geometries[WW].delayLoadState && (EW = !1)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L514-L515` → after: `L8224-L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8224-L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8224-L8355) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L514-L515)

```diff
-         get wheelYMoveScene() {
-           return this._wheelYAction !== ZB.MoveScene ? null : this._wheelYActionCoordinate
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

#### 31. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L517-L518` → after: `L8357-L8363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8357-L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8357-L8363) · [Before (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L517-L518)

```diff
-         set wheelZMoveScene(BB) {
-           null === BB && this._wheelZAction !== ZB.MoveScene || (this._wheelZAction = ZB.MoveScene, this._wheelZActionCoordinate = BB)
+       }
+       pD(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const OW = this.meshes.indexOf(WW);
+         if (-1 !== OW && (this.meshes.splice(OW, 1), WW.parent || WW._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(WW), this.onMeshRemovedObservable.notifyObservers(WW), iW) {
+           const iW = WW.getChildMeshes();
+           for (const WW of iW) this.pD(WW)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L520-L521` → after: `L8365-L8377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8365-L8377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8365-L8377) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L520-L521)

```diff
-         get wheelZMoveScene() {
-           return this._wheelZAction !== ZB.MoveScene ? null : this._wheelZActionCoordinate
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

#### 33. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L523-L529` → after: `L8379-L8393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8379-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8379-L8393) · [Before (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L523-L529)

```diff
-         checkInputs() {
-           if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
-           this._moveRelative.uBB(0), this._rotateRelative.uBB(0), this._moveScene.uBB(0), this._updateCamera(), this.camera.JF().useRightHandedSystem && (this._moveRelative.z *= -1);
-           const BB = QB.d.Zero();
-           this.camera.getViewMatrix().invertToRef(BB);
-           const OB = QB.r.Zero();
-           QB.r.TransformNormalToRef(this._moveRelative, BB, OB), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(OB), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
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

#### 34. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L531-L532` → after: `L8395-L8400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8395-L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8395-L8400) · [Before (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L531-L532)

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

#### 35. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L534-L556` → after: `L8402-L8426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8402-L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8402-L8426) · [Before (L534-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L534-L556)

```diff
-         _updateCameraProperty(BB, OB, GB) {
-           if (0 === BB) return;
-           if (null === OB || null === GB) return;
-           let YB = null;
-           switch (OB) {
-             case ZB.MoveRelative:
-               YB = this._moveRelative;
-               break;
-             case ZB.RotateRelative:
-               YB = this._rotateRelative;
-               break;
-             case ZB.MoveScene:
-               YB = this._moveScene
-           }
-           switch (GB) {
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

#### 36. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L559-L718` → after: `L8430-L8462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8430-L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8430-L8462) · [Before (L559-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L559-L718)

```diff
-       }, (() => {
-         const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(lB[Symbol.metadata] ?? null) : void 0;
-         OB = [(0, DB.L)()], GB = [(0, DB.L)()], oB = [(0, DB.L)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.L)()], zB = [(0, DB.L)()], (0, YB.h)(BB, null, OB, {
-           kind: "setter",
-           name: "wheelXMoveRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "wheelXMoveRelative" in BB,
-             set: (BB, OB) => {
-               BB.wheelXMoveRelative = OB
-             }
-           },
-           metadata: QB
-         }, null, pB), (0, YB.h)(BB, null, GB, {
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

#### 37. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L720-L747` → after: `L8464-L8553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8464-L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8464-L8553) · [Before (L720-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L720-L747)

```diff
-         detachControl() {
-           if (this._pointerInput) {
-             if (this._observer && (this.camera.JF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
-               const BB = this.camera.Lp().getInputElement();
-               BB && BB.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
-             }
-             this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
-           }
-         }
-         checkInputs() {
-           if (null === this._offsetX || null === this._offsetY) return;
-           if (0 === this._offsetX && 0 === this._offsetY) return;
-           const BB = this.camera,
-             OB = BB.movement.input,
-             GB = OB.getEntry("touch", "rotate"),
-             YB = OB.getEntry("touch", "translate"),
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

#### 38. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L749-L750` → after: `L8555-L8616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8555-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8555-L8616) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L749-L750)

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

#### 39. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L752-L753` → after: `L8618-L8624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8618-L8624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8618-L8624) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L752-L753)

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

#### 40. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L755-L795` → after: `L8626-L8641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8626-L8641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8626-L8641) · [Before (L755-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L755-L795)

```diff
-       }, (() => {
-         const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         OB = [(0, DB.L)()], GB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
-           kind: "field",
-           name: "touchAngularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "touchAngularSensibility" in BB,
-             get: BB => BB.touchAngularSensibility,
-             set: (BB, OB) => {
-               BB.touchAngularSensibility = OB
-             }
-           },
-           metadata: QB
-         }, oB, jB), (0, YB.h)(null, null, GB, {
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

#### 41. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L797-L798` → after: `L8643-L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8643-L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8643-L8646) · [Before (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L797-L798)

```diff
-       addKeyboard() {
-         return this.add(new MB), this
+       getParticleSystemById(WW) {
+         for (let iW = 0; iW < this.vY.length; iW++)
+           if (this.vY[iW].id === WW) return this.vY[iW];
+         return null
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L800-L802` → after: `L8648-L8651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8648-L8651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8648-L8651) · [Before (L800-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L800-L802)

```diff
-       addMouse() {
-         let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         return this._mouseInput || (this._mouseInput = new lB(BB), this.add(this._mouseInput)), this
+       getGeometryById(WW) {
+         for (let iW = 0; iW < this.geometries.length; iW++)
+           if (this.geometries[iW].id === WW) return this.geometries[iW];
+         return null
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L804-L805` → after: `L8653-L8660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8653-L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8653-L8660) · [Before (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L804-L805)

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

#### 44. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L807-L808` → after: `L8662-L8665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8662-L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8662-L8665) · [Before (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L807-L808)

```diff
-       addMouseWheel() {
-         return this._mouseWheelInput || (this._mouseWheelInput = new NB, this.add(this._mouseWheelInput)), this
+       getFrameGraphByName(WW) {
+         for (let iW = 0; iW < this.frameGraphs.length; iW++)
+           if (this.frameGraphs[iW].name === WW) return this.frameGraphs[iW];
+         return null
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L810-L811` → after: `L8667-L8670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8667-L8670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8667-L8670) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L810-L811)

```diff
-       removeMouseWheel() {
-         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
+       pushGeometry(WW, iW) {
+         return !(!iW && this._getGeometryByUniqueId(WW.uniqueId)) && (this.addGeometry(WW), EW.d.SetImmediate((() => {
+           this.onNewGeometryAddedObservable.notifyObservers(WW)
+         })), !0)
```
